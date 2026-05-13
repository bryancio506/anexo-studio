const dominios = ["Logística", "Manufactura", "KPIs & Reportes", "Automatización", "IoT / Industria 4.0", "Optimización de negocio", "SRE / DevOps"]

const stats = [
  { valor: "6+", etiqueta: "años en software" },
  { valor: "5", etiqueta: "multinacionales" },
  { valor: "48h", etiqueta: "entrega promedio" },
]

export default function QuienesSomos() {
  return (
    <section style={{ background: "white", borderTop: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF4D1C", fontWeight: 600, marginBottom: "0.6rem" }}>
          Quiénes somos
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}>
          {/* Columna izquierda — texto */}
          <div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}>
              Tecnología de empresa grande,<br />
              <span style={{ color: "#FF4D1C" }}>a precio de negocio local.</span>
            </h2>

            <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.25rem", fontWeight: 300 }}>
              Soy <strong style={{ color: "#0F0F0F", fontWeight: 500 }}>Bryan Romero</strong>, ingeniero de software formado en el TEC con más de 6 años construyendo sistemas para multinacionales en sectores de logística, manufactura y tecnología. He trabajado directo con gerentes, directores y equipos de operaciones en procesos industriales, automatización y optimización de negocio.
            </p>

            <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.25rem", fontWeight: 300 }}>
              Sé lo que hace que un negocio funcione. No solo el código: los flujos de cliente, los cuellos de botella, la experiencia de quien compra. Y entiendo que cada negocio es diferente — nada de plantillas genéricas.
            </p>

            <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.75, fontWeight: 300 }}>
              Anexo Studio nació de una pregunta simple: si puedo construir plataformas industriales para plantas de manufactura, ¿por qué una soda o una barbería no puede tener tecnología igual de buena?
            </p>
          </div>

          {/* Columna derecha — stats + empresas */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              background: "#F7F5F0",
              border: "1.5px solid #E2DDD6",
              borderRadius: 20,
              padding: "1.75rem 1.5rem",
            }}>
              {stats.map(s => (
                <div key={s.etiqueta} style={{ textAlign: "center" }}>
                  <p style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "#FF4D1C",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}>{s.valor}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6B6B6B", lineHeight: 1.4 }}>{s.etiqueta}</p>
                </div>
              ))}
            </div>

            {/* Card con empresas */}
            <div style={{
              border: "1.5px solid #E2DDD6",
              borderRadius: 20,
              padding: "1.75rem",
              background: "#F7F5F0",
            }}>
              <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", fontWeight: 600, marginBottom: "1rem" }}>
                Áreas de experiencia
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {dominios.map(d => (
                  <span key={d} style={{
                    background: "white",
                    border: "1px solid #E2DDD6",
                    borderRadius: 100,
                    padding: "0.3rem 0.9rem",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#0F0F0F",
                  }}>{d}</span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div style={{
              borderLeft: "3px solid #FF4D1C",
              paddingLeft: "1.25rem",
            }}>
              <p style={{ color: "#0F0F0F", fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic", fontWeight: 300 }}>
                "No somos una agencia grande con procesos lentos y precios de dólar. Somos ingeniería costarricense aplicada al negocio real."
              </p>
              <p style={{ color: "#999", fontSize: "0.78rem", marginTop: "0.5rem", fontWeight: 500 }}>— Bryan Romero, fundador de Anexo Studio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
