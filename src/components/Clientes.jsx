const clientes = [
  {
    nombre: "Santa Burga",
    tipo: "Restaurante",
    desc: "Menú digital con fotos, botón directo de WhatsApp y página optimizada para pedir desde el cel.",
    url: "https://santa-burga.netlify.app/",
    plan: "Plan Básico",
    iniciales: "SB",
    color: "#C0392B",
    bg: "#FDF0EF",
  },
  {
    nombre: "Burrito al Fuego",
    tipo: "Dark Kitchen",
    desc: "Vitrina con catálogo de combos, pedidos por WhatsApp y presencia digital desde cero.",
    url: "https://burrito-al-fuego.netlify.app/",
    plan: "Plan Pro",
    iniciales: "BF",
    color: "#E85A14",
    bg: "#FEF3ED",
  },
  {
    nombre: "BJ Soluciones",
    tipo: "Maestro de obras",
    desc: "Galería de proyectos terminados, servicios detallados y contacto directo para presupuestos.",
    url: "https://bj-soluciones.netlify.app/",
    plan: "Plan Básico",
    iniciales: "BJ",
    color: "#1A3A5C",
    bg: "#EDF2F7",
  },
]

const LogoBadge = ({ iniciales, color, bg }) => (
  <div style={{
    width: 46, height: 46, borderRadius: 12,
    background: bg, border: `1.5px solid ${color}22`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    <span style={{
      fontFamily: "'Syne', sans-serif",
      fontWeight: 800,
      fontSize: "0.95rem",
      color: color,
      letterSpacing: "-0.03em",
    }}>{iniciales}</span>
  </div>
)

export default function Clientes() {
  return (
    <section style={{ background: "white", borderBottom: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF4D1C", fontWeight: 600, marginBottom: "0.6rem" }}>
          Ya están en línea
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.8rem,4vw,2.8rem)",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          marginBottom: "0.8rem",
        }}>
          Negocios reales,<br />resultados reales.
        </h2>
        <p style={{ color: "#6B6B6B", fontSize: "1.05rem", fontWeight: 300, marginBottom: "3rem" }}>
          Estos negocios ya tienen su vitrina digital. El tuyo puede ser el siguiente.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {clientes.map(c => (
            <div key={c.nombre} style={{
              border: "1.5px solid #E2DDD6",
              borderRadius: 20,
              padding: "2rem",
              background: "#F7F5F0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <LogoBadge iniciales={c.iniciales} color={c.color} bg={c.bg} />
                <div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}>{c.nombre}</p>
                  <span style={{
                    background: "rgba(255,77,28,0.08)", color: "#FF4D1C",
                    fontSize: "0.7rem", fontWeight: 600,
                    padding: "0.15rem 0.6rem", borderRadius: 100,
                  }}>{c.tipo}</span>
                </div>
              </div>

              <p style={{ color: "#6B6B6B", fontSize: "0.87rem", lineHeight: 1.65, flex: 1 }}>{c.desc}</p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  fontSize: "0.72rem", fontWeight: 600,
                  color: "#999", textTransform: "uppercase", letterSpacing: "0.06em",
                }}>{c.plan}</span>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    color: "#0F0F0F", fontSize: "0.82rem", fontWeight: 500,
                    textDecoration: "none", borderBottom: "1px solid #0F0F0F",
                    paddingBottom: 1, transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseOver={e => { e.currentTarget.style.color = "#FF4D1C"; e.currentTarget.style.borderColor = "#FF4D1C" }}
                  onMouseOut={e => { e.currentTarget.style.color = "#0F0F0F"; e.currentTarget.style.borderColor = "#0F0F0F" }}
                >
                  Ver vitrina
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center", color: "#999", fontSize: "0.84rem",
          borderTop: "1px solid #E2DDD6", paddingTop: "2rem",
        }}>
          ¿Querés que el tuyo sea el próximo?{" "}
          <a
            href="https://wa.me/50688615958?text=Hola%2C%20quiero%20una%20vitrina%20digital%20para%20mi%20negocio"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#FF4D1C", fontWeight: 500, textDecoration: "none" }}
          >
            Escribinos →
          </a>
        </p>
      </div>
    </section>
  )
}
