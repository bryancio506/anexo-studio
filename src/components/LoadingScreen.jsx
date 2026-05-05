import { useState, useEffect } from "react"

export default function LoadingScreen({ onDone }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, 480)
    }, 2100)
    return () => clearTimeout(t)
  }, [onDone])

  const sqStyle = (delay, dim = false) => ({
    width: 52, height: 52, borderRadius: 12,
    background: "#FF4D1C",
    opacity: dim ? 0.28 : 1,
    animation: `squarePop 0.42s cubic-bezier(0.34,1.56,0.64,1) ${delay}s both`,
  })

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "#0F0F0F",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999,
        animation: exiting ? "screenExit 0.48s ease forwards" : "none",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>

        {/* Grid 2x2 de cuadros */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={sqStyle(0.15)} />
          <div style={sqStyle(0.35, true)} />
          <div style={sqStyle(0.52, true)} />
          <div style={sqStyle(0.68)} />
        </div>

        {/* Nombre */}
        <div style={{
          textAlign: "center",
          animation: "nameReveal 0.5s ease 1.05s both",
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "2.4rem",
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            ane<span style={{ color: "#FF4D1C" }}>xo</span>
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginTop: 8,
            animation: "tagReveal 0.5s ease 1.5s both",
          }}>
            studio
          </div>
        </div>

      </div>
    </div>
  )
}
