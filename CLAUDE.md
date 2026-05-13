# Anexo Studio

Landing page de Anexo Studio — agencia boutique de presencia digital para pymes costarricenses.

## Stack
- React 19 + Vite 8
- Tailwind CSS 3 (solo reset/utilities; estilos principales como inline styles en JSX)
- Google Fonts: Syne (headings) + DM Sans (body)
- Deployed en Netlify → https://anexo-studio.netlify.app

## Estructura de componentes
```
src/components/
  Navbar.jsx        – navbar dark sticky con CTA de WA
  Hero.jsx          – hero + mapa SVG de CR + chips de tipos de cliente
  Clientes.jsx      – vitrinas reales (social proof)
  Servicios.jsx     – grid de 6 servicios
  Planes.jsx        – 3 planes con precios (Básico / Pro / Agencia)
  Proceso.jsx       – 4 pasos del proceso de onboarding
  QuienesSomos.jsx  – about Bryan, TEC, experiencia
  CtaFinal.jsx      – CTA final + QR + footer
  LoadingScreen.jsx – pantalla de carga animada con la marca
```

App.jsx monta todo en orden; usa IntersectionObserver para scroll-reveal en `.reveal`.

## Orden de secciones (App.jsx)
Navbar → Hero → Servicios → Planes → Clientes → Proceso → QuienesSomos → CtaFinal

## Design system
| Token | Valor |
|---|---|
| `--ink` | `#0F0F0F` |
| `--red` | `#FF4D1C` |
| `--cream` | `#F7F5F0` |
| `--muted` | `#6B6B6B` |
| `--border` | `#E2DDD6` |

**Fuentes:**
- Headings: `font-family: 'Syne', sans-serif`
- Secciones h2: `fontWeight: 700` (800 solo para el H1 del Hero)
- Body: `DM Sans` weights 300/400/500

**Alternancia de fondos por sección:**
- Hero → `#0F0F0F` (dark)
- Clientes → `white`
- Servicios → `#F7F5F0` (cream)
- Planes → `white`
- Proceso → `#F7F5F0` (cream)
- QuienesSomos → `white`
- CtaFinal → `#0F0F0F` (dark)

## Patrones de código
- Estilos como inline style objects en JSX (no clases Tailwind en componentes)
- Containers: `maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem"`
- WA links: `https://wa.me/50688615958?text=...`
- Número WA: `50688615958` (Bryan, mismo número de contacto del negocio)
- Etiquetas de sección: `fontSize 0.72rem, textTransform uppercase, color #FF4D1C, letterSpacing 0.1em`
- Texto de apoyo: `color #6B6B6B, fontSize 1.05rem, fontWeight 300`

## Clientes reales
| Negocio | Tipo | URL | Iniciales | Color |
|---|---|---|---|---|
| Santa Burga | Restaurante | https://santa-burga.netlify.app/ | SB | #C0392B |
| Burrito al Fuego | Dark Kitchen | https://burrito-al-fuego.netlify.app/ | BF | #E85A14 |
| BJ Soluciones | Maestro de obras | https://bj-soluciones.netlify.app/ | BJ | #1A3A5C |

**Prospecto activo:** Motolux (bicimotos y repuestos, Tibás) — pitch enviado vía vendedor al encargado. Ver docs/modelo-negocio.md §3 Motolux.

## Dueño / Fundador
Bryan Romero Chinchilla — Ingeniero de software, egresado del TEC (Tecnológico de Costa Rica).
Experiencia en Accenture, Bridgestone, Intel, Unilever, Cecropia (6+ años).
San José, Costa Rica.

## Negocio
- Pagos: SINPE Móvil
- Sin contratos ni tarjetas internacionales
- Entrega: 48 horas desde que el cliente manda el material
- Modelo de negocio completo: ver `docs/modelo-negocio.md`
