const planes = [
  {
    nombre: "Básico",
    desc: "Para arrancar con presencia digital ya",
    setup: "₡15.000",
    mensual: "₡5.000/mes",
    popular: false,
    features: [
      "Página vitrina profesional",
      "Catálogo, menú o galería",
      "Botón de WhatsApp integrado",
      "Diseño con tus colores y logo",
      "Favicon personalizado",
      "URL con tu nombre",
      "Optimizada para celular",
    ],
    waMsg: "Quiero el Plan Básico de Anexo Studio",
  },
  {
    nombre: "Pro",
    desc: "Vitrina + WhatsApp Business + Link en Bio",
    setup: "₡35.000",
    mensual: "₡12.000/mes",
    popular: true,
    features: [
      "Todo lo del plan Básico",
      "WhatsApp Business configurado",
      "Mensajes automáticos de bienvenida",
      "Catálogo en WhatsApp Business",
      "Link en Bio personalizado",
      "Conexión Instagram → página",
      "Actualizaciones incluidas",
    ],
    waMsg: "Quiero el Plan Pro de Anexo Studio",
  },
  {
    nombre: "Agencia",
    desc: "Para quien quiere crecer en serio",
    setup: "₡65.000",
    mensual: "₡25.000/mes",
    popular: false,
    features: [
      "Todo lo del plan Pro",
      "Manejo de 1 red social",
      "12 posts diseñados por mes",
      "Stories semanales",
      "Respuesta a mensajes",
      "Reporte mensual de alcance",
      "Soporte prioritario",
    ],
    waMsg: "Quiero el Plan Agencia de Anexo Studio",
  },
]

const addons = [
  {
    emoji: "📍",
    nombre: "Google Maps",
    desc: "Tu ficha en Google Business Profile. Te buscan en tu zona y te encuentran a vos.",
    precio: "₡10.000",
    tipo: "setup único",
    waMsg: "Quiero agregar Google Maps a mi plan de Anexo Studio",
  },
  {
    emoji: "🤖",
    nombre: "Bot de WhatsApp",
    desc: "Responde preguntas frecuentes, muestra el catálogo y recibe pedidos automáticamente. Tu negocio atiende 24/7.",
    precio: "₡20.000",
    tipo: "setup + ₡8.000/mes",
    waMsg: "Quiero un bot de WhatsApp con Anexo Studio",
  },
  {
    emoji: "🌐",
    nombre: "Dominio propio",
    desc: "Tu propia dirección .com o .cr. Más credibilidad, mismo contenido de siempre.",
    precio: "₡8.000",
    tipo: "al año",
    waMsg: "Quiero un dominio propio con Anexo Studio",
  },
  {
    emoji: "📱",
    nombre: "Solo contenido",
    desc: "8 posts y stories por mes. Para quien ya tiene web pero no tiene tiempo de publicar.",
    precio: "₡15.000",
    tipo: "al mes",
    waMsg: "Quiero el servicio de contenido de Anexo Studio",
  },
]

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ minWidth: 14, marginTop: 3 }}>
    <circle cx="7" cy="7" r="7" fill="rgba(255,77,28,0.12)"/>
    <path d="M4 7l2 2 4-4" stroke="#FF4D1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Planes() {
  return (
    <section id="planes" style={{ background: "white", borderTop: "1px solid #E2DDD6", borderBottom: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF4D1C", fontWeight: 600, marginBottom: "0.6rem" }}>Planes y precios</p>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "0.8rem" }}>
          Arma tu plan.<br />
          <span style={{ color: "#6B6B6B", fontWeight: 300, fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(1rem,2.5vw,1.4rem)", letterSpacing: 0 }}>
            Elegí una base y sumá lo que necesitás.
          </span>
        </h2>
        <p style={{ color: "#6B6B6B", fontSize: "1.05rem", fontWeight: 300, marginBottom: "3rem" }}>
          Precios en colones, pagás por SINPE. Sin tarjetas internacionales.
        </p>

        {/* Planes base */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
          {planes.map(p => (
            <div key={p.nombre} style={{
              border: `${p.popular ? "2px" : "1.5px"} solid ${p.popular ? "#FF4D1C" : "#E2DDD6"}`,
              borderRadius: 20, padding: "2rem",
              background: p.popular ? "white" : "#F7F5F0",
              position: "relative",
            }}>
              {p.popular && (
                <div style={{
                  position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                  background: "#FF4D1C", color: "white",
                  fontSize: "0.7rem", fontWeight: 700,
                  padding: "0.25rem 1rem", borderRadius: 100,
                  whiteSpace: "nowrap", letterSpacing: "0.05em",
                }}>⭐ MÁS POPULAR</div>
              )}

              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: 4 }}>{p.nombre}</p>
              <p style={{ color: "#6B6B6B", fontSize: "0.85rem", marginBottom: "1.5rem" }}>{p.desc}</p>

              <p style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", fontWeight: 600 }}>Setup único</p>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "2rem", lineHeight: 1, margin: "0.25rem 0 0.15rem" }}>{p.setup}</p>
              <p style={{ color: "#6B6B6B", fontSize: "0.82rem", marginBottom: "1.5rem" }}>Mantenimiento: <strong style={{ color: "#0F0F0F" }}>{p.mensual}</strong></p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.75rem" }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.87rem" }}>
                    <Check />{f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/50688615958?text=${encodeURIComponent(p.waMsg)}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "block", textAlign: "center",
                  padding: "0.8rem", borderRadius: 100,
                  fontWeight: 500, fontSize: "0.9rem",
                  textDecoration: "none", transition: "all 0.2s",
                  border: p.popular ? "none" : "1.5px solid #0F0F0F",
                  background: p.popular ? "#FF4D1C" : "transparent",
                  color: p.popular ? "white" : "#0F0F0F",
                }}
                onMouseOver={e => {
                  if (!p.popular) { e.currentTarget.style.background = "#0F0F0F"; e.currentTarget.style.color = "white" }
                  else e.currentTarget.style.opacity = "0.85"
                }}
                onMouseOut={e => {
                  if (!p.popular) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0F0F0F" }
                  else e.currentTarget.style.opacity = "1"
                }}
              >
                Quiero este plan
              </a>
            </div>
          ))}
        </div>

        {/* Separador de add-ons */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem",
          marginBottom: "2rem",
        }}>
          <div style={{ flex: 1, height: 1, background: "#E2DDD6" }} />
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#F7F5F0", border: "1.5px solid #E2DDD6",
            borderRadius: 100, padding: "0.4rem 1.1rem",
            fontSize: "0.75rem", fontWeight: 600, color: "#0F0F0F",
            whiteSpace: "nowrap",
          }}>
            <span style={{ color: "#FF4D1C", fontSize: "1rem" }}>+</span> Extras — sumá lo que necesitás
          </div>
          <div style={{ flex: 1, height: 1, background: "#E2DDD6" }} />
        </div>

        {/* Add-ons grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {addons.map(a => (
            <a
              key={a.nombre}
              href={`https://wa.me/50688615958?text=${encodeURIComponent(a.waMsg)}`}
              target="_blank" rel="noreferrer"
              style={{
                display: "flex", flexDirection: "column", gap: "0.6rem",
                background: "#F7F5F0", border: "1.5px solid #E2DDD6",
                borderRadius: 16, padding: "1.25rem",
                textDecoration: "none", color: "inherit",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#FF4D1C"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,77,28,0.1)" }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E2DDD6"; e.currentTarget.style.boxShadow = "none" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "1.4rem" }}>{a.emoji}</span>
                <span style={{
                  background: "rgba(255,77,28,0.08)", color: "#FF4D1C",
                  fontSize: "0.68rem", fontWeight: 700,
                  padding: "0.2rem 0.6rem", borderRadius: 100,
                  whiteSpace: "nowrap",
                }}>+ add-on</span>
              </div>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{a.nombre}</p>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", lineHeight: 1.55, flex: 1 }}>{a.desc}</p>
              <div>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{a.precio}</span>
                <span style={{ color: "#999", fontSize: "0.75rem", marginLeft: 4 }}>{a.tipo}</span>
              </div>
            </a>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "#999", fontSize: "0.84rem" }}>
          Pagás por SINPE Móvil · Sin contratos · Cancelás cuando querás
        </p>
      </div>
    </section>
  )
}
