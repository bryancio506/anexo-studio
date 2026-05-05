const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const chips = ["Tiendas","Restaurantes y sodas","Maestros de obras","Salones de belleza","Veterinarias","Negocios locales"]

export default function Hero() {
  const WA = "https://wa.me/50600000000?text=Hola%2C%20quiero%20una%20vitrina%20digital"

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#0F0F0F", color: "white",
        padding: "7rem 2rem 6rem", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Círculos decorativos */}
        {[500, 750, 1000].map((s, i) => (
          <div key={i} style={{
            position: "absolute",
            width: s, height: s, borderRadius: "50%",
            border: `1px solid rgba(255,77,28,${0.12 - i * 0.035})`,
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(255,77,28,0.12)",
            border: "1px solid rgba(255,77,28,0.28)",
            color: "#FF4D1C", borderRadius: 100,
            padding: "0.35rem 1rem", fontSize: "0.78rem",
            fontWeight: 500, marginBottom: "2rem",
            letterSpacing: "0.04em",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF4D1C" }} />
            Presencia digital para negocios locales en CR
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: "-0.03em", marginBottom: "1.5rem",
          }}>
            Tu negocio,<br />
            <span style={{ color: "#FF4D1C" }}>en línea.</span>
          </h1>

          <p style={{
            fontSize: "1.12rem", color: "rgba(255,255,255,0.55)",
            maxWidth: 520, margin: "0 auto 2.5rem",
            fontWeight: 300, lineHeight: 1.7,
          }}>
            Página web, catálogo digital, WhatsApp Business y redes sociales — sin complicaciones y sin pagar una agencia grande.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#FF4D1C", color: "white",
              padding: "0.85rem 2rem", borderRadius: 100,
              fontWeight: 500, fontSize: "1rem", textDecoration: "none",
              transition: "opacity 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
              onMouseOut={e => e.currentTarget.style.opacity = "1"}
            >
              <WaIcon /> Escribinos por WhatsApp
            </a>
            <a href="#planes" style={{
              display: "inline-flex", alignItems: "center",
              background: "transparent", color: "white",
              padding: "0.85rem 2rem", borderRadius: 100,
              fontWeight: 500, fontSize: "1rem",
              border: "1px solid rgba(255,255,255,0.18)",
              textDecoration: "none", transition: "background 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
              onMouseOut={e => e.currentTarget.style.background = "transparent"}
            >
              Ver planes y precios
            </a>
          </div>
        </div>
      </section>

      {/* Chips de tipos de cliente */}
      <div style={{ background: "white", borderBottom: "1px solid #E2DDD6" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex", alignItems: "center",
          gap: "0.75rem", flexWrap: "wrap",
        }}>
          <span style={{ fontSize: "0.72rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, whiteSpace: "nowrap" }}>Para:</span>
          {chips.map(c => (
            <span key={c} style={{
              background: "#F7F5F0", border: "1px solid #E2DDD6",
              borderRadius: 100, padding: "0.3rem 0.85rem",
              fontSize: "0.82rem", color: "#0F0F0F", whiteSpace: "nowrap",
            }}>{c}</span>
          ))}
        </div>
      </div>
    </>
  )
}
