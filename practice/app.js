const { useState, useEffect } = React;

const C = {
  navy: "#1B2A4A",
  blue: "#3D66B0",
  blueSoft: "#7592CC",
  blueMuted: "#F5DCC0",
  pink: "#F5A0B2",
  gold: "#FDC868",
  paper: "#FDF4E9",
  card: "#FFFFFF",
  sage: "#3F7350",
  sageBg: "#E7F0E9",
  clay: "#B8503D",
  clayBg: "#F5E6E1",
  warn: "#C98A2A",
  slate: "#3D4451",
  slateSoft: "#7A8290",
  border: "#F0E2CC",
};
const serif = "Georgia, 'Times New Roman', serif";
const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";

// ---- tiny hand-drawn icon set (no external icon library needed) ----
function Icon({ name, size = 15, color = "currentColor" }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-4" /></>,
    check: <polyline points="20 6 9 17 4 12" />,
    x: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    chevron: <polyline points="9 18 15 12 9 6" />,
    back: <polyline points="15 18 9 12 15 6" />,
    award: <><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" /></>,
    rotate: <><path d="M23 4v6h-6" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></>,
    list: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function competencyMeta(exam, id) {
  return exam.competencies.find((c) => c.id === id) || { short: id, label: id };
}

// ---- storage helpers (plain localStorage — this is a real website, not a Claude artifact) ----
function loadSessions(examId) {
  try {
    const raw = localStorage.getItem("sessions:" + examId);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}
function saveSession(examId, session) {
  try {
    const list = loadSessions(examId);
    list.push(session);
    localStorage.setItem("sessions:" + examId, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

// ---- premium access (a single shared code for enrolled members) ----
// NOTE: this is a soft gate, not real security — the code lives in data.js,
// which anyone can view via "view page source". It's meant to keep casual
// visitors out of paid material, not to stop a determined person. Fine for
// a small cohort; if you ever need real per-person accounts, that's a
// different (bigger) project — ask me when you get there.
function isPremiumUnlocked() {
  try {
    return localStorage.getItem("premium-unlocked") === "yes";
  } catch (e) {
    return false;
  }
}
function unlockPremium(code) {
  const real = (window.SITE_CONFIG && window.SITE_CONFIG.accessCode) || "";
  if (code.trim().toLowerCase() === real.trim().toLowerCase() && real) {
    try { localStorage.setItem("premium-unlocked", "yes"); } catch (e) {}
    return true;
  }
  return false;
}

function PremiumGate({ children, label = "member content" }) {
  const [unlocked, setUnlocked] = useState(isPremiumUnlocked());
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return children;

  function handleUnlock() {
    if (unlockPremium(code)) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
      <Icon name="lock" size={22} color={C.blue} />
      <p style={{ fontFamily: serif, fontSize: 17, color: C.slate, marginTop: 10 }}>This is {label}</p>
      <p style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, marginTop: 4, marginBottom: 16 }}>
        Enter the access code shared with 陪伴营 members to unlock it.
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <input
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          onKeyDown={(e) => { if (e.key === "Enter") handleUnlock(); }}
          placeholder="Access code"
          style={{ fontFamily: sans, fontSize: 14, border: `1px solid ${error ? C.clay : C.border}`, borderRadius: 8, padding: "8px 12px", width: 180 }}
        />
        <button
          onClick={handleUnlock}
          style={{ fontFamily: sans, fontSize: 14, background: C.blue, color: "#fff", borderRadius: 8, padding: "8px 16px" }}
        >
          Unlock
        </button>
      </div>
      {error && <p style={{ fontFamily: sans, fontSize: 12, color: C.clay, marginTop: 10 }}>That code didn't match — check with your program organizer.</p>}
    </div>
  );
}

function Pill({ active, onClick, children, icon }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition"
      style={{ fontFamily: sans, border: `1px solid ${active ? C.blue : C.border}`, background: active ? C.blue : C.card, color: active ? "#fff" : C.slate, whiteSpace: "nowrap" }}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
    </button>
  );
}

function TicketHeader({ title, subtitle, meta, onBack }) {
  return (
    <div className="relative overflow-hidden mb-6" style={{ background: C.blue, borderRadius: 14, border: `1px solid ${C.blueSoft}` }}>
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          {onBack && (
            <button onClick={onBack} className="flex items-center gap-1 mb-2" style={{ fontFamily: sans, fontSize: 12.5, color: C.blueMuted, background: "none", border: "none", cursor: "pointer" }}>
              <Icon name="back" size={14} /> Back to home
            </button>
          )}
          <p style={{ fontFamily: sans, fontSize: 12, letterSpacing: 2, color: C.blueMuted, textTransform: "uppercase" }}>NYSTCE &middot; New York State</p>
          <h1 style={{ fontFamily: serif, fontSize: 26, color: "#fff", margin: "4px 0 0" }}>{title}</h1>
          <p style={{ fontFamily: sans, fontSize: 13, color: C.blueMuted, marginTop: 4 }}>{subtitle}</p>
        </div>
        <div className="hidden sm:flex items-center justify-center shrink-0" style={{ width: 56, height: 56, borderRadius: "50%", border: `2px solid #FFFFFF`, color: "#FFFFFF", fontFamily: serif, fontSize: 14 }}>
          <Icon name="award" size={24} color="#FFFFFF" />
        </div>
      </div>
      {meta && (
        <div style={{ borderTop: `1px dashed ${C.blueSoft}`, padding: "8px 24px", fontFamily: sans, fontSize: 11.5, color: C.blueMuted }}>{meta}</div>
      )}
    </div>
  );
}

function Home({ exams, programs, onSelectExam, onSelectProgram }) {
  return (
    <div>
      <TicketHeader title="NY certification prep" subtitle="Practice quizzes, flashcards, guided study camps, and progress tracking for New York teacher certification" />

      {programs.length > 0 && (
        <div className="mb-8">
          <p style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, marginBottom: 14 }}>Guided study camps</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => onSelectProgram(program.id)}
                className="text-left flex items-center gap-3"
                style={{ background: C.blue, border: `1px solid ${C.blueSoft}`, borderRadius: 14, padding: "1.25rem" }}
              >
                <Icon name="calendar" size={22} color="#FFFFFF" />
                <div>
                  <p style={{ fontFamily: serif, fontSize: 18, color: "#fff" }}>{program.name}</p>
                  <p style={{ fontFamily: sans, fontSize: 12.5, color: C.blueMuted, marginTop: 2 }}>{program.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <p style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, marginBottom: 14 }}>Self-paced exams</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {exams.map((exam) => {
          const sessions = loadSessions(exam.id);
          return (
            <button
              key={exam.id}
              onClick={() => onSelectExam(exam.id)}
              className="text-left"
              style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.25rem" }}
            >
              <p style={{ fontFamily: serif, fontSize: 19, color: C.navy }}>{exam.name}</p>
              <p style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, marginTop: 2 }}>{exam.fullName}</p>
              <p style={{ fontFamily: sans, fontSize: 11.5, color: C.slateSoft, marginTop: 10 }}>{exam.questions.length} practice questions &middot; {exam.flashcards.length} flashcards</p>
              {sessions.length > 0 && (
                <p style={{ fontFamily: sans, fontSize: 11.5, color: C.sage, marginTop: 4 }}>{sessions.length} practice set{sessions.length > 1 ? "s" : ""} completed</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AgendaTab({ program }) {
  return (
    <div>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: 20 }}>
        <p style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginBottom: 10 }}>How the camp runs</p>
        <ul style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, lineHeight: 1.9, paddingLeft: 18 }}>
          {program.structure.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: 20 }}>
        <p style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginBottom: 10 }}>By the end, you'll have</p>
        <ul style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, lineHeight: 1.9, paddingLeft: 18 }}>
          {program.outcomes.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>

      <p style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginBottom: 10 }}>Weekly agenda</p>
      <div className="flex flex-col gap-2">
        {program.weeks.map((w, i) => (
          <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", display: "flex", gap: 14 }}>
            <span style={{ fontFamily: sans, fontSize: 11.5, fontWeight: 600, color: C.navy, background: C.sageBg, padding: "3px 10px", borderRadius: 999, height: "fit-content", whiteSpace: "nowrap" }}>
              {w.week}
            </span>
            <div>
              <p style={{ fontFamily: sans, fontSize: 14.5, fontWeight: 500, color: C.slate }}>{w.title}</p>
              <p style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, marginTop: 2, lineHeight: 1.6 }}>{w.objective}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FactSheetTab({ program }) {
  const fs = program.factSheet;
  if (!fs) return <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slateSoft }}>No fact sheet yet for this program.</p>;
  return (
    <div>
      <p style={{ fontFamily: sans, fontSize: 11.5, color: C.slateSoft, marginBottom: 16 }}>Facts as of {fs.asOf}</p>

      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: 16 }}>
        <p style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginBottom: 10 }}>Test format</p>
        <ul style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, lineHeight: 1.9, paddingLeft: 18 }}>
          {fs.format.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: 16 }}>
        <p style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginBottom: 10 }}>Scoring weight</p>
        <div className="flex flex-col gap-2">
          {fs.weighting.map((w, i) => (
            <div key={i} className="flex justify-between gap-3" style={{ fontFamily: sans, fontSize: 13, borderBottom: i < fs.weighting.length - 1 ? `1px solid ${C.paper}` : "none", paddingBottom: 8 }}>
              <span style={{ color: C.slate }}>{w.label}</span>
              <span style={{ color: C.slateSoft, textAlign: "right", flexShrink: 0 }}>{w.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: 16 }}>
        <p style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginBottom: 10 }}>Constructed responses are scored on</p>
        <ul style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, lineHeight: 1.9, paddingLeft: 18 }}>
          {fs.crScoring.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>

      <div style={{ background: C.paper, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.25rem" }}>
        {fs.notes.map((n, i) => (
          <p key={i} style={{ fontFamily: sans, fontSize: 12.5, color: C.slateSoft, lineHeight: 1.7, marginBottom: i < fs.notes.length - 1 ? 10 : 0 }}>{n}</p>
        ))}
      </div>
    </div>
  );
}

function GlossaryTab({ program }) {
  const gl = program.glossary;
  const [cat, setCat] = useState(gl ? gl.categories[0].id : null);
  if (!gl) return <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slateSoft }}>No glossary yet for this program.</p>;
  const current = gl.categories.find((c) => c.id === cat);

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-5">
        {gl.categories.map((c) => (
          <Pill key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</Pill>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {current.terms.map(([term, zh, def], i) => (
          <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 16px" }}>
            <p style={{ fontFamily: sans, fontSize: 14.5, fontWeight: 500, color: C.navy }}>
              {term} <span style={{ fontWeight: 400, color: C.slateSoft }}>{zh}</span>
            </p>
            <p style={{ fontFamily: sans, fontSize: 13, color: C.slate, marginTop: 4, lineHeight: 1.6 }}>{def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CRPracticeTab({ program }) {
  const cr = program.crPractice;
  const [promptId, setPromptId] = useState(cr ? cr.prompts[0].id : null);
  const prompt = cr && cr.prompts.find((p) => p.id === promptId);
  const [response, setResponse] = useState(() => {
    try { return localStorage.getItem("cr-draft:" + promptId) || ""; } catch (e) { return ""; }
  });
  const [checked, setChecked] = useState({});

  useEffect(() => {
    try { setResponse(localStorage.getItem("cr-draft:" + promptId) || ""); } catch (e) { setResponse(""); }
    setChecked({});
  }, [promptId]);

  function updateResponse(v) {
    setResponse(v);
    try { localStorage.setItem("cr-draft:" + promptId, v); } catch (e) {}
  }

  if (!cr) return <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slateSoft }}>No constructed-response practice yet for this program.</p>;

  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0;
  const wordColor = wordCount === 0 ? C.slateSoft : wordCount < 120 || wordCount > 230 ? C.clay : C.sage;

  return (
    <div>
      <div style={{ background: C.blue, border: `1px solid ${C.blueSoft}`, borderRadius: 14, padding: "1.25rem", marginBottom: 20 }}>
        <p style={{ fontFamily: serif, fontSize: 16, color: "#fff", marginBottom: 10 }}>The CARE method</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {cr.method.steps.map((s) => (
            <div key={s.letter} className="flex gap-2">
              <span style={{ fontFamily: serif, fontSize: 18, color: "#FFFFFF", flexShrink: 0 }}>{s.letter}</span>
              <p style={{ fontFamily: sans, fontSize: 12.5, color: C.blueMuted, lineHeight: 1.6 }}>
                <span style={{ color: "#fff", fontWeight: 500 }}>{s.label}</span> — {s.desc}
              </p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: sans, fontSize: 12, color: C.blueMuted, marginTop: 12, borderTop: `1px dashed ${C.blueSoft}`, paddingTop: 10 }}>{cr.method.structure}</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        {cr.prompts.map((p) => {
          const exam = program.examId ? window.EXAM_DATA[program.examId] : null;
          const label = exam ? competencyMeta(exam, p.competency).short : p.competency;
          return <Pill key={p.id} active={promptId === p.id} onClick={() => setPromptId(p.id)}>{label}</Pill>;
        })}
      </div>

      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: 16 }}>
        <p style={{ fontFamily: sans, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: C.slateSoft, marginBottom: 8 }}>Scenario</p>
        <p style={{ fontFamily: serif, fontSize: 15.5, color: C.slate, lineHeight: 1.7, marginBottom: 14 }}>{prompt.scenario}</p>
        <p style={{ fontFamily: sans, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: C.slateSoft, marginBottom: 8 }}>Task</p>
        <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, lineHeight: 1.7 }}>{prompt.task}</p>
      </div>

      <textarea
        value={response}
        onChange={(e) => updateResponse(e.target.value)}
        placeholder="Write your constructed response here — it saves automatically on this device."
        rows={8}
        style={{ width: "100%", fontFamily: sans, fontSize: 14, color: C.slate, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px", resize: "vertical" }}
      />
      <p style={{ fontFamily: sans, fontSize: 12, color: wordColor, marginTop: 6, marginBottom: 20 }}>{wordCount} words (target: about 150–200)</p>

      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem" }}>
        <p style={{ fontFamily: serif, fontSize: 16, color: C.navy, marginBottom: 10 }}>Self-review checklist</p>
        <div className="flex flex-col gap-2">
          {cr.checklist.map((item, i) => (
            <label key={i} className="flex items-center gap-2" style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, cursor: "pointer" }}>
              <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))} />
              {item}
            </label>
          ))}
        </div>
        <p style={{ fontFamily: sans, fontSize: 12, color: C.slateSoft, marginTop: 12 }}>
          This checklist is for self-review — it doesn't auto-grade your writing. For real feedback, bring your draft to a live session or ask a mentor to score it against the official rubric.
        </p>
      </div>
    </div>
  );
}

function ProgramView({ program, onBack }) {
  const [tab, setTab] = useState("agenda");
  const TABS = [
    { id: "agenda", label: "Agenda", icon: "calendar", premium: false },
    { id: "facts", label: "Fact sheet", icon: "list", premium: true },
    { id: "glossary", label: "Glossary", icon: "layers", premium: true },
    { id: "practice", label: "CR practice", icon: "book", premium: true },
  ];
  return (
    <div>
      <TicketHeader title={program.name} subtitle={program.tagline} onBack={onBack} />
      <div className="flex gap-1 mb-6 flex-wrap" style={{ borderBottom: `1px solid ${C.border}` }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className="flex items-center gap-1.5 px-3 py-2.5"
            style={{ fontFamily: sans, fontSize: 14, color: tab === t.id ? C.blue : C.slateSoft, borderBottom: tab === t.id ? `2px solid ${C.blue}` : "2px solid transparent", marginBottom: -1, fontWeight: tab === t.id ? 500 : 400, background: "none" }}>
            <Icon name={t.icon} size={15} /> {t.label} {t.premium && <Icon name="lock" size={11} color={C.slateSoft} />}
          </button>
        ))}
      </div>
      {tab === "agenda" && <AgendaTab program={program} />}
      {tab === "facts" && <PremiumGate label="member content"><FactSheetTab program={program} /></PremiumGate>}
      {tab === "glossary" && <PremiumGate label="member content"><GlossaryTab program={program} /></PremiumGate>}
      {tab === "practice" && <PremiumGate label="member content"><CRPracticeTab program={program} /></PremiumGate>}
    </div>
  );
}

function QuizTab({ exam }) {
  const [filter, setFilter] = useState("all");
  const [pool, setPool] = useState(exam.questions);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const [saveError, setSaveError] = useState(false);

  function startQuiz(f) {
    const p = f === "all" ? exam.questions : exam.questions.filter((q) => q.c === f);
    setFilter(f);
    setPool(p);
    setQIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setComplete(false);
    setSaveError(false);
  }

  function selectAnswer(i) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === pool[qIndex].correct) setScore((s) => s + 1);
  }

  function nextQuestion() {
    if (qIndex + 1 < pool.length) {
      setQIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setComplete(true);
      const ok = saveSession(exam.id, { date: new Date().toISOString(), competency: filter, score, total: pool.length });
      setSaveError(!ok);
    }
  }

  const q = pool[qIndex];
  const pct = pool.length ? Math.round((score / pool.length) * 100) : 0;

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-5">
        <Pill active={filter === "all"} onClick={() => startQuiz("all")} icon="grid">All competencies</Pill>
        {exam.competencies.map((c) => (
          <Pill key={c.id} active={filter === c.id} onClick={() => startQuiz(c.id)}>{c.short}</Pill>
        ))}
      </div>

      {!complete ? (
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem" }}>
          <div className="flex items-center justify-between mb-4">
            <span style={{ fontFamily: sans, fontSize: 12.5, color: C.slateSoft }}>Question {qIndex + 1} of {pool.length}</span>
            <span style={{ fontFamily: sans, fontSize: 11.5, fontWeight: 600, color: C.navy, background: C.sageBg, padding: "2px 10px", borderRadius: 999 }}>
              {competencyMeta(exam, q.c).short}
            </span>
          </div>

          <p style={{ fontFamily: serif, fontSize: 18, color: C.slate, lineHeight: 1.5, marginBottom: 20 }}>{q.q}</p>

          <div className="flex flex-col gap-2.5">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correct;
              const isPicked = i === selected;
              let bg = C.card, border = C.border, textColor = C.slate;
              if (answered && isCorrect) { bg = C.sageBg; border = C.sage; textColor = "#204830"; }
              else if (answered && isPicked && !isCorrect) { bg = C.clayBg; border = C.clay; textColor = "#6E2E20"; }
              return (
                <button key={i} onClick={() => selectAnswer(i)} className="text-left flex items-center justify-between gap-3 px-4 py-3 transition"
                  style={{ fontFamily: sans, fontSize: 14.5, background: bg, border: `1px solid ${border}`, color: textColor, borderRadius: 10, cursor: answered ? "default" : "pointer" }}>
                  <span>{opt}</span>
                  {answered && isCorrect && <Icon name="check" size={17} color={C.sage} />}
                  {answered && isPicked && !isCorrect && <Icon name="x" size={17} color={C.clay} />}
                </button>
              );
            })}
          </div>

          {answered && (
            <div style={{ marginTop: 18, padding: "12px 16px", background: C.paper, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: sans, fontSize: 13, color: C.slate, lineHeight: 1.6 }}>{q.exp}</p>
            </div>
          )}

          <div className="flex justify-end mt-5">
            {answered && (
              <button onClick={nextQuestion} className="flex items-center gap-1.5 px-4 py-2" style={{ fontFamily: sans, fontSize: 14, background: C.blue, color: "#fff", borderRadius: 8 }}>
                {qIndex + 1 < pool.length ? "Next question" : "See results"} <Icon name="chevron" size={15} color="#fff" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div style={{ background: C.blue, borderRadius: 14, padding: "2rem", textAlign: "center", border: `1px solid ${C.blueSoft}` }}>
          <Icon name="award" size={34} color="#FFFFFF" />
          <p style={{ fontFamily: sans, fontSize: 12, letterSpacing: 1.5, color: C.blueMuted, textTransform: "uppercase", marginTop: 8 }}>Practice set complete</p>
          <p style={{ fontFamily: serif, fontSize: 34, color: "#fff", margin: "6px 0" }}>{score} / {pool.length}</p>
          <p style={{ fontFamily: sans, fontSize: 14, color: C.blueMuted }}>{pct}% correct on {filter === "all" ? "all competencies" : competencyMeta(exam, filter).label}</p>
          {saveError && <p style={{ fontFamily: sans, fontSize: 12, color: "#F0B0A0", marginTop: 8 }}>Couldn't save this result to your progress log on this device.</p>}
          <button onClick={() => startQuiz(filter)} className="flex items-center gap-1.5 mx-auto mt-6 px-4 py-2" style={{ fontFamily: sans, fontSize: 14, background: "transparent", color: "#fff", border: `1px solid #FFFFFF`, borderRadius: 8 }}>
            <Icon name="rotate" size={15} color="#fff" /> Try this set again
          </button>
        </div>
      )}
    </div>
  );
}

function FlashcardsTab({ exam }) {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = filter === "all" ? exam.flashcards : exam.flashcards.filter((c) => c.c === filter);
  const card = cards[index] || cards[0];

  function setF(f) { setFilter(f); setIndex(0); setFlipped(false); }
  function go(dir) { setFlipped(false); setIndex((i) => (i + dir + cards.length) % cards.length); }

  if (!card) return null;

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-5">
        <Pill active={filter === "all"} onClick={() => setF("all")} icon="grid">All competencies</Pill>
        {exam.competencies.map((c) => (
          <Pill key={c.id} active={filter === c.id} onClick={() => setF(c.id)}>{c.short}</Pill>
        ))}
      </div>

      <p style={{ fontFamily: sans, fontSize: 12.5, color: C.slateSoft, marginBottom: 10 }}>Card {index + 1} of {cards.length} &middot; tap to flip</p>

      <button onClick={() => setFlipped((f) => !f)} className="w-full text-left"
        style={{ display: "block", minHeight: 190, background: flipped ? C.blue : C.card, border: `1px solid ${flipped ? C.blueSoft : C.border}`, borderRadius: 14, padding: "1.75rem", cursor: "pointer" }}>
        <span style={{ fontFamily: sans, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: flipped ? C.blueMuted : C.slateSoft }}>
          {flipped ? "Definition" : competencyMeta(exam, card.c).short}
        </span>
        <p style={{ fontFamily: flipped ? sans : serif, fontSize: flipped ? 15.5 : 21, lineHeight: 1.6, color: flipped ? "#fff" : C.slate, marginTop: 12 }}>
          {flipped ? card.def : card.term}
        </p>
      </button>

      <div className="flex justify-between mt-4">
        <button onClick={() => go(-1)} style={{ fontFamily: sans, fontSize: 13.5, color: C.slate, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 16px" }}>Previous</button>
        <button onClick={() => go(1)} style={{ fontFamily: sans, fontSize: 13.5, color: "#fff", background: C.blue, borderRadius: 8, padding: "8px 16px" }}>Next card</button>
      </div>
    </div>
  );
}

function ProgressTab({ exam }) {
  const [sessions] = useState(() => loadSessions(exam.id));

  if (sessions.length === 0) {
    return (
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
        <Icon name="list" size={26} color={C.slateSoft} />
        <p style={{ fontFamily: serif, fontSize: 17, color: C.slate, marginTop: 10 }}>No practice sets logged yet</p>
        <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slateSoft, marginTop: 4 }}>Finish a quiz set and it'll show up here.</p>
      </div>
    );
  }

  const totalCorrect = sessions.reduce((a, s) => a + s.score, 0);
  const totalQ = sessions.reduce((a, s) => a + s.total, 0);
  const avg = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1rem" }}>
          <p style={{ fontFamily: sans, fontSize: 12.5, color: C.slateSoft }}>Sets completed</p>
          <p style={{ fontFamily: serif, fontSize: 26, color: C.navy, marginTop: 4 }}>{sessions.length}</p>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1rem" }}>
          <p style={{ fontFamily: sans, fontSize: 12.5, color: C.slateSoft }}>Average score</p>
          <p style={{ fontFamily: serif, fontSize: 26, color: C.navy, marginTop: 4 }}>{avg}%</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {sessions.slice().reverse().map((s, i) => {
          const pct = s.total ? Math.round((s.score / s.total) * 100) : 0;
          const label = s.competency === "all" ? "All competencies" : (competencyMeta(exam, s.competency)?.label || s.competency);
          const d = new Date(s.date);
          return (
            <div key={i} className="flex items-center justify-between" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 14px" }}>
              <div>
                <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slate }}>{label}</p>
                <p style={{ fontFamily: sans, fontSize: 11.5, color: C.slateSoft }}>{d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</p>
              </div>
              <span style={{ fontFamily: sans, fontSize: 14, fontWeight: 500, color: pct >= 80 ? C.sage : pct >= 60 ? C.warn : C.clay }}>{s.score}/{s.total} &middot; {pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ExamView({ exam, onBack }) {
  const [tab, setTab] = useState("quiz");
  const TABS = [
    { id: "quiz", label: "Practice quiz", icon: "book" },
    { id: "flashcards", label: "Flashcards", icon: "layers" },
    { id: "progress", label: "Progress", icon: "chart" },
  ];
  return (
    <div>
      <TicketHeader title={exam.name} subtitle={exam.fullName} meta={exam.meta} onBack={onBack} />
      <div className="flex gap-1 mb-6" style={{ borderBottom: `1px solid ${C.border}` }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className="flex items-center gap-1.5 px-3 py-2.5"
            style={{ fontFamily: sans, fontSize: 14, color: tab === t.id ? C.blue : C.slateSoft, borderBottom: tab === t.id ? `2px solid ${C.blue}` : "2px solid transparent", marginBottom: -1, fontWeight: tab === t.id ? 500 : 400, background: "none" }}>
            <Icon name={t.icon} size={15} /> {t.label}
          </button>
        ))}
      </div>
      {tab === "quiz" && <QuizTab exam={exam} />}
      {tab === "flashcards" && <FlashcardsTab exam={exam} />}
      {tab === "progress" && <ProgressTab exam={exam} />}
    </div>
  );
}

function App() {
  const exams = Object.values(window.EXAM_DATA || {});
  const programs = Object.values(window.PROGRAMS || {});
  const [selection, setSelection] = useState(null); // { type: "exam" | "program", id }

  const exam = selection && selection.type === "exam" ? exams.find((e) => e.id === selection.id) : null;
  const program = selection && selection.type === "program" ? programs.find((p) => p.id === selection.id) : null;

  let content;
  if (exam) content = <ExamView exam={exam} onBack={() => setSelection(null)} />;
  else if (program) content = <ProgramView program={program} onBack={() => setSelection(null)} />;
  else content = (
    <Home
      exams={exams}
      programs={programs}
      onSelectExam={(id) => setSelection({ type: "exam", id })}
      onSelectProgram={(id) => setSelection({ type: "program", id })}
    />
  );

  return (
    <div style={{ background: C.paper, minHeight: "100vh", fontFamily: sans }} className="px-4 py-6 sm:px-8">
      <div className="max-w-2xl mx-auto">{content}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
