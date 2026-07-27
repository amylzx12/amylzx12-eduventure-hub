const { useState } = React;

const C = {
  navy: "#1B2A4A", blue: "#3D66B0", blueMuted: "#F5DCC0",
  pink: "#F5A0B2", gold: "#FDC868",
  paper: "#FDF4E9", card: "#FFFFFF", sage: "#3F7350", sageBg: "#E7F0E9",
  slate: "#3D4451", slateSoft: "#7A8290", border: "#F0E2CC",
};
const serif = "Georgia, 'Times New Roman', serif";
const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";

function Pill({ active, onClick, children }) {
  return (
    <button onClick={onClick} className="px-3 py-1.5 rounded-full text-sm transition"
      style={{ fontFamily: sans, border: `1px solid ${active ? C.blue : C.border}`, background: active ? C.blue : C.card, color: active ? "#fff" : C.slate, whiteSpace: "nowrap" }}>
      {children}
    </button>
  );
}

function ArticleList({ category, onOpen }) {
  return (
    <div className="flex flex-col gap-2">
      {category.articles.map((a) => (
        <button key={a.id} onClick={() => onOpen(a.id)} className="text-left"
          style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px" }}>
          <p style={{ fontFamily: serif, fontSize: 16.5, color: C.navy }}>{a.title}</p>
          <p style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, marginTop: 4, lineHeight: 1.6 }}>{a.summary}</p>
        </button>
      ))}
    </div>
  );
}

function ArticleView({ article, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4" style={{ fontFamily: sans, fontSize: 13, color: C.slateSoft, background: "none", border: "none", cursor: "pointer" }}>
        &larr; Back to list
      </button>
      <h1 style={{ fontFamily: serif, fontSize: 24, color: C.navy, marginBottom: 6 }}>{article.title}</h1>
      <p style={{ fontFamily: sans, fontSize: 14, color: C.slateSoft, marginBottom: 24, lineHeight: 1.6 }}>{article.summary}</p>
      <div className="flex flex-col gap-5">
        {article.sections.map((s, i) => (
          <div key={i}>
            <p style={{ fontFamily: sans, fontSize: 14.5, fontWeight: 500, color: C.slate, marginBottom: 6 }}>{s.heading}</p>
            <p style={{ fontFamily: sans, fontSize: 14, color: C.slate, lineHeight: 1.75 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const categories = (window.TOOLKIT && window.TOOLKIT.categories) || [];
  const [catId, setCatId] = useState(categories[0] ? categories[0].id : null);
  const [articleId, setArticleId] = useState(null);
  const category = categories.find((c) => c.id === catId);
  const article = category && category.articles.find((a) => a.id === articleId);

  function selectCategory(id) {
    setCatId(id);
    setArticleId(null);
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
          <a href="/toolkit/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}>Job hunting toolkit</a>
          <a href="#" style={{ color: C.slateSoft, textDecoration: "none" }}>Classroom materials (soon)</a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-8">
        <h1 style={{ fontFamily: serif, fontSize: 26, color: C.navy, marginBottom: 8 }}>Job hunting toolkit</h1>
        <p style={{ fontFamily: sans, fontSize: 14, color: C.slateSoft, marginBottom: 24, lineHeight: 1.6 }}>
          Practical guidance for the US school hiring process — resume and cover letter norms, interview preparation, demo lessons, and a general orientation to work-authorization pathways.
        </p>

        {!article && (
          <div className="flex gap-2 flex-wrap mb-6">
            {categories.map((c) => (
              <Pill key={c.id} active={catId === c.id} onClick={() => selectCategory(c.id)}>{c.label}</Pill>
            ))}
          </div>
        )}

        {article ? (
          <ArticleView article={article} onBack={() => setArticleId(null)} />
        ) : (
          category && <ArticleList category={category} onOpen={setArticleId} />
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
