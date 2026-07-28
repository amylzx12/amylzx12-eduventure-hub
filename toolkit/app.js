const { useState, useEffect } = React;

const C = {
  navy: "#1B2A4A", blue: "#3D66B0", blueMuted: "#F5DCC0",
  pink: "#F5A0B2", gold: "#FDC868",
  paper: "#FDF4E9", card: "#FFFFFF", sage: "#3F7350", sageBg: "#E7F0E9",
  slate: "#3D4451", slateSoft: "#7A8290", border: "#F0E2CC",
};
const serif = "Georgia, 'Times New Roman', serif";
const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";

// ---------- inline formatting helpers ----------

function renderInlineBold(text, keyPrefix) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={keyPrefix + i} style={{ color: C.navy, fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
    }
    return part ? <React.Fragment key={keyPrefix + i}>{part}</React.Fragment> : null;
  });
}

function renderLine(line, key) {
  const explicit = line.match(/^\*\*([^*]+)\*\*([\s\S]*)$/);
  if (explicit) {
    return (
      <React.Fragment key={key}>
        <strong style={{ color: C.blue, fontWeight: 600 }}>{explicit[1]}</strong>
        {renderInlineBold(explicit[2], key + "-r")}
      </React.Fragment>
    );
  }
  const colon = line.match(/^([^\s：:]{1,24}[：:])([\s\S]*)$/);
  if (colon) {
    return (
      <React.Fragment key={key}>
        <strong style={{ color: C.blue, fontWeight: 600 }}>{colon[1]}</strong>
        {renderInlineBold(colon[2], key + "-r")}
      </React.Fragment>
    );
  }
  return <React.Fragment key={key}>{renderInlineBold(line, key)}</React.Fragment>;
}

function SectionBody({ text }) {
  const blocks = String(text).split(/\n\n+/).filter((b) => b.trim());
  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim());
        const isList = lines.length > 0 && lines.every((l) => /^(•\s|\d+\.\s)/.test(l));
        if (isList) {
          return (
            <ul key={bi} style={{ margin: "0 0 14px", padding: 0, listStyle: "none" }}>
              {lines.map((l, li) => {
                const numMatch = l.match(/^\d+\./);
                const marker = numMatch ? numMatch[0] : "•";
                const content = l.replace(/^(•\s*|\d+\.\s*)/, "");
                return (
                  <li key={li} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 14, lineHeight: 1.7, color: C.slate }}>
                    <span style={{ color: C.blue, flexShrink: 0, fontWeight: 600 }}>{marker}</span>
                    <span>{renderLine(content, "li" + li)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }
        return (
          <p key={bi} style={{ fontSize: 14, lineHeight: 1.75, color: C.slate, marginBottom: 14 }}>
            {renderLine(lines.join(" "), "p" + bi)}
          </p>
        );
      })}
    </>
  );
}

// ---------- layout pieces ----------

function Sidebar({ categories, activeCatId, activeArticleId, onSelect }) {
  return (
    <div className="flex flex-col gap-5"
      style={{ width: 250, flexShrink: 0, background: "#EEF2FA", border: "1px solid #DCE4F2", borderRadius: 14, padding: "18px 16px", alignSelf: "flex-start", position: "sticky", top: 20 }}>
      {categories.map((cat) => (
        <div key={cat.id}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: cat.id === activeCatId ? C.blue : "#8A97B8", marginBottom: 8 }}>
            {cat.label}
          </p>
          <div className="flex flex-col gap-1">
            {cat.articles.map((a) => {
              const active = a.id === activeArticleId;
              return (
                <button key={a.id} onClick={() => onSelect(cat.id, a.id)} className="text-left"
                  style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.5, color: active ? "#fff" : "#4A5875", background: active ? C.blue : "transparent", borderRadius: 8, padding: "7px 10px", fontWeight: active ? 500 : 400 }}>
                  {a.title}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqAccordion({ article }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div>
      {article.intro && (
        <div style={{ marginBottom: 20 }}>
          <SectionBody text={article.intro} />
        </div>
      )}
      <div className="flex flex-col gap-2" style={{ marginBottom: 28 }}>
        {article.faqs.map((item, i) => {
          const open = openIdx === i;
          return (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
              <button onClick={() => setOpenIdx(open ? null : i)} className="w-full text-left flex items-center justify-between gap-3"
                style={{ fontFamily: sans, fontSize: 14.5, fontWeight: 500, color: C.navy, padding: "13px 16px", background: "none" }}>
                <span>Q{i + 1}. {item.q}</span>
                <span style={{ color: C.blue, flexShrink: 0, fontSize: 18, lineHeight: 1 }}>{open ? "\u2212" : "+"}</span>
              </button>
              {open && (
                <div style={{ padding: "0 16px 16px" }}>
                  <SectionBody text={item.a} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {article.closing && article.closing.length > 0 && (
        <div className="flex flex-col gap-5">
          {article.closing.map((s, i) => (
            <div key={i}>
              <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{s.heading}</p>
              <SectionBody text={s.body} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ArticleView({ article }) {
  return (
    <div>
      <h1 style={{ fontFamily: serif, fontSize: 22, color: C.navy, marginBottom: 6 }}>{article.title}</h1>
      <p style={{ fontFamily: sans, fontSize: 13.5, color: C.slateSoft, marginBottom: 24, lineHeight: 1.6 }}>{article.summary}</p>
      {article.faqs ? (
        <FaqAccordion article={article} />
      ) : (
        <div className="flex flex-col gap-5">
          {article.sections.map((s, i) => (
            <div key={i}>
              <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{s.heading}</p>
              <SectionBody text={s.body} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- app shell ----------

function App() {
  const categories = (window.TOOLKIT && window.TOOLKIT.categories) || [];
  const params = new URLSearchParams(window.location.search);
  const initialCatId = params.get("cat") && categories.find((c) => c.id === params.get("cat")) ? params.get("cat") : (categories[0] ? categories[0].id : null);
  const initialCat = categories.find((c) => c.id === initialCatId);
  const initialArticleId = params.get("article") && initialCat && initialCat.articles.find((a) => a.id === params.get("article"))
    ? params.get("article")
    : (initialCat && initialCat.articles[0] ? initialCat.articles[0].id : null);

  const [catId, setCatId] = useState(initialCatId);
  const [articleId, setArticleId] = useState(initialArticleId);

  const category = categories.find((c) => c.id === catId);
  const article = category && category.articles.find((a) => a.id === articleId);

  function selectArticle(cId, aId) {
    setCatId(cId);
    setArticleId(aId);
    const url = new URL(window.location);
    url.searchParams.set("cat", cId);
    url.searchParams.set("article", aId);
    window.history.replaceState({}, "", url);
  }

  return (
    <div style={{ background: C.paper, minHeight: "100vh", fontFamily: sans }}>
      <div style={{ background: C.blue, color: "#fff", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", background: "#fff", padding: "5px 14px", borderRadius: 8 }}>
          <img src="/assets/logo-full.png" alt="EduVenture" style={{ height: 26, display: "block" }} />
        </a>
        <div className="flex gap-4 flex-wrap" style={{ fontSize: 13.5 }}>
          <a href="/about/" style={{ color: C.blueMuted, textDecoration: "none" }}>About</a>
          <a href="/pathway/" style={{ color: C.blueMuted, textDecoration: "none" }}>Find your certificate</a>
          <a href="/practice/" style={{ color: C.blueMuted, textDecoration: "none" }}>Study &amp; practice</a>
          <div className="evh-dd">
            <a href="/toolkit/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}>Job hunting toolkit ▾</a>
            <div className="evh-dd-menu">
              <a href="/toolkit/?cat=preparation">Getting Started 求职准备</a>
              <a href="/toolkit/?cat=resume">Resume &amp; Cover Letter</a>
              <a href="/toolkit/?cat=interview">Interview Preparation</a>
              <a href="/toolkit/?cat=demo-lesson">Demo Lesson Planning</a>
              <a href="/toolkit/?cat=work-authorization">Work Authorization</a>
            </div>
          </div>
          <a href="#" style={{ color: "#9FB3D9", textDecoration: "none" }}>Classroom materials (soon)</a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-8">
        <h1 style={{ fontFamily: serif, fontSize: 26, color: C.navy, marginBottom: 8 }}>Job hunting toolkit</h1>
        <p style={{ fontFamily: sans, fontSize: 14, color: C.slateSoft, marginBottom: 28, lineHeight: 1.6 }}>
          Practical guidance for the US school hiring process — resume and cover letter norms, interview preparation, demo lessons, networking, and a general orientation to work-authorization pathways.
        </p>

        <div className="flex gap-8 flex-col sm:flex-row">
          <Sidebar categories={categories} activeCatId={catId} activeArticleId={articleId} onSelect={selectArticle} />
          <div style={{ flex: 1, minWidth: 0, background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem", boxShadow: "0 2px 10px rgba(27,42,74,0.06)" }}>
            {article && <ArticleView article={article} />}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
