const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const chips = ["Tiendas","Restaurantes y sodas","Maestros de obras","Salones de belleza","Veterinarias","Negocios locales"]

/** Silueta de Costa Rica — frontera Natural Earth 50m (~132 vértices), proporción real. */
const CR_OUTLINE = {
  viewBox: "0 0 1072.35 1000",
  d: "M1072.35,517.12 L1070.53,523.04 L1064.99,529.25 L1057.05,535.53 L1046.53,539.82 L1021.1,526.92 L996.21,512.27 L982.43,519 L977.25,538.02 L968.01,547.79 L956.44,551.63 L951.7,558 L950.75,622.22 L951.54,682.75 L970.46,684.11 L1001.97,705.13 L1015.41,717.5 L1019.68,728.93 L1015.78,734.54 L992.72,747.73 L970.25,764.44 L959.01,785.28 L978.68,818.95 L982.87,841.83 L982.18,865.75 L976.78,877.24 L933.2,904.73 L923.65,914.36 L924.91,921.33 L948.95,940.3 L960.34,958.65 L969.83,980.79 L971.1,1000 L949.32,964.38 L919.12,930.39 L892.87,909.45 L890.86,860.58 L880.34,834.06 L840.78,809.64 L806.91,792.53 L781.8,796.02 L797.18,824.1 L836.94,860.13 L839.57,873.94 L838.95,892.47 L811.59,889.62 L787.47,882.06 L758.07,879.7 L738.51,868.65 L697.04,825.64 L726.5,788.94 L735.63,764.85 L734.85,714.9 L728.09,690.68 L696.13,653.83 L645.26,613.39 L573.98,580.35 L540.48,553.72 L457.02,533.31 L425.3,519.78 L400.51,494.67 L396.8,476.65 L405.59,448.91 L382.54,413.63 L283.11,344.28 L227.51,318.76 L215.58,303.76 L206.75,299.09 L215.3,346.95 L239.6,375.79 L303.07,402.72 L320.53,418.39 L327.56,438.79 L290.73,477.81 L271.99,487.73 L266.43,509.01 L254.43,515.48 L241.76,503.2 L190.28,442 L90.79,412.66 L72.79,394.66 L35.76,338.78 L18.71,287.74 L24.82,253.72 L65.69,200.71 L78.45,177.63 L75.85,163.42 L77.2,142.5 L61.94,127.89 L24.09,108.86 L0,93.59 L6.61,85.98 L49.94,65.47 L52.68,46.97 L52.48,40.83 L59.56,39.5 L65.85,34.6 L69.73,29.5 L81.55,11.66 L91.9,1.6 L103.83,0 L118.41,7.42 L173.03,26.62 L233.76,47.94 L320.26,78.28 L356.11,58.85 L386.96,44.01 L408.44,46.12 L454.93,63.42 L482.93,68.93 L500.1,67.2 L529.83,92.57 L546.05,111.63 L548.75,124.32 L557.79,131.17 L580.93,132.67 L637.66,145.6 L672.32,143.07 L703.82,129.4 L721.13,113.05 L726.57,87.28 L734.49,100.03 L743.82,120.07 L747.95,145.8 L788.69,231.99 L821.21,280.26 L892.46,368.04 L923.27,384.18 L975.28,454.82 L993.24,466.49 L1003.46,487.34 L1057.41,504.5 Z",
}

export default function Hero() {
  const WA = "https://wa.me/50688615958?text=Hola%2C%20quiero%20una%20vitrina%20digital"

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#0F0F0F", color: "white",
        padding: "7rem 2rem 6rem", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Mapa CR — detrás de los círculos */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(52vw, 300px)",
            aspectRatio: "1072.35 / 1000",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.92,
          }}
        >
          <svg
            viewBox={CR_OUTLINE.viewBox}
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
            style={{ display: "block" }}
          >
            <defs>
              <linearGradient id="heroCrMapFill" x1="12%" y1="8%" x2="88%" y2="92%">
                <stop offset="0%" stopColor="#FF4D1C" stopOpacity="0.26" />
                <stop offset="45%" stopColor="#FF4D1C" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#C73A14" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d={CR_OUTLINE.d}
              fill="url(#heroCrMapFill)"
              stroke="rgba(255,77,28,0.42)"
              strokeWidth={1.1}
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Círculos decorativos */}
        {[500, 750, 1000].map((s, i) => (
          <div key={i} style={{
            position: "absolute",
            width: s, height: s, borderRadius: "50%",
            border: `1px solid rgba(255,77,28,${0.12 - i * 0.035})`,
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            zIndex: 1,
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 2 }}>
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
