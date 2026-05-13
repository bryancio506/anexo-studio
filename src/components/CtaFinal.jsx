import { QRCodeSVG } from "qrcode.react"

const SITE_URL = "https://anexo-studio.netlify.app/"

const WaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function CtaFinal() {
  const WA = "https://wa.me/50688615958?text=Hola%20Anexo%20Studio%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20planes"
  return (
    <>
      <section style={{ background: "#0F0F0F", color: "white", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(2rem,5vw,3.5rem)",
          fontWeight: 700, letterSpacing: "-0.025em",
          lineHeight: 1.1, marginBottom: "1rem",
        }}>
          ¿Cuántos clientes te están<br />
          <span style={{ color: "#FF4D1C" }}>buscando y no te encuentran?</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", marginBottom: "2.5rem", fontWeight: 300 }}>
          Hoy mismo podés tener tu negocio en internet. Escribinos y lo resolvemos.
        </p>
        <a href={WA} target="_blank" rel="noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#25D366", color: "white",
            padding: "1rem 2.5rem", borderRadius: 100,
            fontWeight: 600, fontSize: "1.05rem",
            textDecoration: "none", transition: "opacity 0.2s",
          }}
          onMouseOver={e => e.currentTarget.style.opacity = "0.9"}
          onMouseOut={e => e.currentTarget.style.opacity = "1"}
        >
          <WaIcon /> Escribinos por WhatsApp
        </a>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-qr">
            <p className="site-footer-qr-label">
              Escaneá el código y abrí esta página en el celular
            </p>
            <a
              href={SITE_URL}
              className="site-footer-qr-link"
              aria-label="Abrir anexo-studio.netlify.app (misma página)"
            >
              <QRCodeSVG
                value={SITE_URL}
                size={256}
                level="M"
                marginSize={2}
                bgColor="#FFFFFF"
                fgColor="#0F0F0F"
                title="Código QR: Anexo Studio"
                className="site-footer-qr-svg"
              />
            </a>
            <span className="site-footer-qr-domain">anexo-studio.netlify.app</span>
          </div>
          <p className="site-footer-copy">
            © {new Date().getFullYear()} Anexo Studio · Costa Rica ·{" "}
            <a href="https://wa.me/50688615958">WhatsApp</a>
          </p>
        </div>
      </footer>
    </>
  )
}
