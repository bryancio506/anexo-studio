const pasos = [
  { n: "01", titulo: "Nos escribís", desc: "Por WhatsApp nos contás de tu negocio. Te preguntamos lo básico: nombre, qué vendés, colores que te gustan." },
  { n: "02", titulo: "Nos mandás el material", desc: "Logo, fotos de productos y lista de lo que ofrecés. Si no tenés logo te ayudamos a hacer uno simple." },
  { n: "03", titulo: "Pagás el setup", desc: "SINPE Móvil al número que te damos. Confirmamos y empezamos de inmediato." },
  { n: "04", titulo: "Tu página está lista", desc: "En máximo 48 horas te mandamos el link. Lo revisás, pedís cambios y lo publicamos." },
]

export default function Proceso() {
  return (
    <section style={{ background: "#F7F5F0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF4D1C", fontWeight: 600, marginBottom: "0.6rem" }}>El proceso</p>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.8rem" }}>
          En 48 horas, listo.
        </h2>
        <p style={{ color: "#6B6B6B", fontSize: "1.05rem", fontWeight: 300, marginBottom: "3.5rem" }}>Sin reuniones largas, sin ir a ningún lado.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2.5rem" }}>
          {pasos.map((p, i) => (
            <div key={p.n} style={{ position: "relative" }}>
              {/* Línea conectora */}
              {i < pasos.length - 1 && (
                <div style={{
                  position: "absolute", top: 26, left: "calc(52px + 1rem)",
                  right: "-1rem", height: 1,
                  background: "#E2DDD6",
                  display: "none",
                }} className="connector" />
              )}
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "#0F0F0F", color: "white",
                fontFamily: "'Syne',sans-serif", fontWeight: 800,
                fontSize: "1rem", display: "flex",
                alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
              }}>{p.n}</div>
              <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{p.titulo}</h4>
              <p style={{ color: "#6B6B6B", fontSize: "0.87rem", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
