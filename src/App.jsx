import { useState, useCallback, useEffect, useRef } from "react"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import Planes from "./components/Planes"
import Proceso from "./components/Proceso"
import CtaFinal from "./components/CtaFinal"

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onDone = useCallback(() => setLoaded(true), [])

  // Scroll reveal
  const observer = useRef(null)
  useEffect(() => {
    if (!loaded) return
    observer.current = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.12 }
    )
    document.querySelectorAll(".reveal").forEach(el => observer.current.observe(el))
    return () => observer.current?.disconnect()
  }, [loaded])

  return (
    <>
      {!loaded && <LoadingScreen onDone={onDone} />}

      {loaded && (
        <div className="content-in">
          <Navbar />
          <Hero />
          <div className="reveal"><Servicios /></div>
          <div className="reveal"><Planes /></div>
          <div className="reveal"><Proceso /></div>
          <div className="reveal"><CtaFinal /></div>
        </div>
      )}
    </>
  )
}
