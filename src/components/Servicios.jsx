const servicios = [
  {
    titulo: "Vitrina Digital",
    desc: "Página web con tu catálogo, menú o servicios. Tus clientes la ven desde el celular y te contactan directo por WhatsApp.",
    tag: "Desde ₡15.000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    titulo: "WhatsApp Business",
    desc: "Perfil empresarial completo con catálogo, mensajes automáticos de bienvenida y horario de atención configurado.",
    tag: "Incluido en Plan Pro",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FF4D1C" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    titulo: "Gestión de redes sociales",
    desc: "Manejamos tu Instagram o Facebook: posts, stories y respuesta a mensajes. Vos solo te preocupás por tu negocio.",
    tag: "Plan Agencia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
      </svg>
    ),
  },
  {
    titulo: "Link en Bio personalizado",
    desc: "Tu propio Linktree con tu marca, colores y links. Para que tu Instagram apunte a todo lo que ofrecés.",
    tag: "Incluido en Plan Pro",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    titulo: "Galería de proyectos",
    desc: "Para maestros de obras, fotógrafos o diseñadores. Tu portafolio digital listo para mostrar tu trabajo.",
    tag: "Desde ₡15.000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/><rect x="2" y="2" width="20" height="20" rx="3"/>
      </svg>
    ),
  },
  {
    titulo: "Actualizaciones de catálogo",
    desc: "¿Cambió el menú o llegaron productos nuevos? Actualizamos tu página rápido. Sin que vos tengás que aprender nada.",
    tag: "₡5.000/mes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
]

export default function Servicios() {
  return (
    <section style={{ background: "#F7F5F0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF4D1C", fontWeight: 600, marginBottom: "0.6rem" }}>Qué hacemos</p>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.8rem" }}>
          Todo lo que necesitás<br />para existir en internet
        </h2>
        <p style={{ color: "#6B6B6B", fontSize: "1.05rem", fontWeight: 300, marginBottom: "3rem" }}>Sin tecnicismos. Sin contratos. Sin sorpresas.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {servicios.map(s => (
            <div key={s.titulo} style={{
              background: "white", border: "1px solid #E2DDD6",
              borderRadius: 20, padding: "2rem",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#ccc"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)" }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E2DDD6"; e.currentTarget.style.boxShadow = "none" }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: "#FFF0EB", display: "flex",
                alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.titulo}</h3>
              <p style={{ color: "#6B6B6B", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1rem" }}>{s.desc}</p>
              <span style={{
                background: "rgba(255,77,28,0.08)", color: "#FF4D1C",
                fontSize: "0.75rem", fontWeight: 600,
                padding: "0.25rem 0.75rem", borderRadius: 100,
              }}>{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
