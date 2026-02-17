import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./App.css";

// Fotos
import fotoNoviembre from "./assets/fotos/noviembre/4-noviembre-foto.jpg";
import fotoChinos from "./assets/fotos/octubre/6-octubre-chinos.jpg";
import fotoAzucar from "./assets/fotos/noviembre/8-noviembre-azucar.jpg";
import fotoMagdalenas from "./assets/fotos/septiembre/7-septiembre-magdalenas.jpg";
import fotoTarta from "./assets/fotos/septiembre/26-septiembre-tartaqueso.jpg";
import fotoMagarones from "./assets/fotos/agosto/19-agosto-macarrones.jpg";
import fotoSushi from "./assets/fotos/diciembre/chuchi.jpeg";
import fotoCumpleAlbita from "./assets/fotos/noviembre/20-noviembre-cumple.jpeg";
import fotoCumplePablete from "./assets/fotos/noviembre/8-noviembre-cumple.jpg";
import fotoIlusiones from "./assets/fotos/noviembre/casa-ilusiones.jpeg";
import fotoAscensor from "./assets/fotos/octubre/9-octubre-ascensor.jpg";
import fotoNuggets from "./assets/fotos/octubre/15-octubre-nuggets.jpg";
import fotoPijamas from "./assets/fotos/octubre/27-octubre-pijamas.jpg";
import fotoJuaguli from "./assets/fotos/octubre/31-octubre-juaguli.jpg";
import fotoPis from "./assets/fotos/diciembre/pis.jpeg";
import fotoSpeed from "./assets/fotos/diciembre/se-cree-speed.jpeg";
import fotoQueso from "./assets/fotos/diciembre/queso-de-tarta.jpeg";
import Bocata from "./assets/fotos/enero/bocata.jpeg";
import Happy from "./assets/fotos/enero/happy.jpeg";
import Nieve from "./assets/fotos/enero/nieve.jpeg";
import Nieve2 from "./assets/fotos/enero/nieve2.jpeg";
import Tren from "./assets/fotos/enero/tren.jpeg";
import Tren2 from "./assets/fotos/enero/tren2.jpeg";
import Ascensor from "./assets/fotos/febrero/ascensor_sexi.jpeg";
import Ascensor2 from "./assets/fotos/febrero/ascensor_sexo.jpeg";
import SanValentin from "./assets/fotos/febrero/sanvalentinuwu.jpeg";
import Zzzzzz from "./assets/fotos/febrero/zzzzzzzz.jpeg";
import Zzzzzz2 from "./assets/fotos/febrero/zzzzzzz2.jpeg";

/* ========================= */
/* TIKTOKS ❤️ */
/* ========================= */

const tiktoks = [
  "https://www.tiktok.com/@cacota9/video/7592305014358527254",
  "https://www.tiktok.com/@cacota9/video/7567904298215034134",
  "https://www.tiktok.com/@cacota9/video/7567812786428841239",
  "https://www.tiktok.com/@cacota9/video/7565898933654801686",
  "https://www.tiktok.com/@cacota9/video/7545230515310169366",
  "https://www.tiktok.com/@cacota9/video/7607190823272221974",
];

const recuerdos = [
  { fecha: "Agosto", titulo: "Donde empezó todo", descripcion: "Nuestros primeros días juntos y esos macarrones tan zuculentos :v", fotos: [fotoMagarones] },
  { fecha: "Septiembre", titulo: "Nuestras fotos comiendo", descripcion: "Por más fotos de comidas con carusas raras.", fotos: [fotoMagdalenas, fotoTarta] },
  { fecha: "Octubre", titulo: "Primer mes", descripcion: "De poco un todo: nuggets, pijamas y ascensores.", fotos: [fotoChinos, fotoAscensor, fotoNuggets, fotoPijamas, fotoJuaguli] },
  { fecha: "Noviembre", titulo: "Segundo mes + Cumplessss", descripcion: "Días especiales que junto a ti lo son aún más.", fotos: [fotoCumpleAlbita, fotoAzucar, fotoCumplePablete, fotoIlusiones, fotoNoviembre] },
  { fecha: "Diciembre", titulo: "Navidad + Polonia", descripcion: "Nuestra primera Navidad juntos.", fotos: [fotoSushi, fotoPis, fotoSpeed, fotoQueso] },
  { fecha: "Enero", titulo: "Nuestro enero", descripcion: "Empezando 2026 juntos ❤️", fotos: [Bocata, Happy, Nieve, Nieve2, Tren, Tren2] },
  { fecha: "Febrero", titulo: "Primer San Valentín", descripcion: "Primer San Valentín muajajaa 💘", fotos: [Ascensor, Ascensor2, SanValentin, Zzzzzz, Zzzzzz2] },
];

/* ========================= */
/* COMPONENTE TIKTOK */
/* ========================= */

function TikTokEmbed({ url }) {
  const videoId = url.split("/video/")[1];

  useEffect(() => {
    if (window.widgets && window.widgets.render) {
      window.widgets.render();
    } else if (window.tiktok && window.tiktok.render) {
      window.tiktok.render();
    }
  }, [url]);

  return (
    <div className="tiktok-container">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "325px", minWidth: "325px" }}
      >
        <section>
          <a target="_blank" rel="noreferrer" href={url}>Cargando momento...</a>
        </section>
      </blockquote>
    </div>
  );
}

function App() {
  const [recuerdoActivo, setRecuerdoActivo] = useState(null);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [tiempo, setTiempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");  
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    const fechaInicio = new Date("2025-09-17T18:30:00");
    const interval = setInterval(() => {
      const ahora = new Date();
      const diff = ahora - fechaInicio;
      setTiempo({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diff / 1000 / 60) % 60),
        segundos: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Para Albita ❤️
        </motion.h1>

        <div className="contador-box">
          <p>Llevamos juntos:</p>
          <div className="contador-numeros">
            <span>{tiempo.dias}d</span>
            <span>{tiempo.horas}h</span>
            <span>{tiempo.minutos}m</span>
            <span>{tiempo.segundos}s</span>
          </div>
        </div>
      </header>

      {/* TIMELINE */}
      <div className="timeline-wrapper">
        <div className="timeline-line-visual"></div>
        <div className="timeline-dots-container">
          {recuerdos.map((item, index) => (
            <React.Fragment key={index}>
              {item.fecha === "Enero" && (
                <div className="year-separator">✨ Empieza 2026 ✨</div>
              )}
              <motion.button
                className="timeline-dot"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setRecuerdoActivo(item)}
              >
                <span className="dot-text">{item.fecha}</span>
              </motion.button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* TIKTOKS */}
      <section className="tiktoks-section">
        <h2 className="section-title">🎬 Nuestros TikToks</h2>
        <p className="section-subtitle">Goofy momentos bonitos y de autismo</p>
        <div className="tiktoks-grid">
          {tiktoks.map((url, i) => (
            <TikTokEmbed key={i} url={url} />
          ))}
        </div>
      </section>

      {/* MODAL RECUERDOS */}
      <AnimatePresence>
        {recuerdoActivo && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setRecuerdoActivo(null)}>
            <motion.div className="modal-content" initial={{ scale: 0.8 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()}>
              <div className="fotos-grid">
                {recuerdoActivo.fotos.map((img, i) => (
                  <img key={i} src={img} alt="Recuerdo" className="foto-individual" />
                ))}
              </div>
              <h3>{recuerdoActivo.titulo}</h3>
              <p>{recuerdoActivo.descripcion}</p>

              {recuerdoActivo.fecha === "Febrero" && (
                <motion.button
                  className="btn-sanvalentin"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/sanvalentin")}
                >
                  💘 Ver San Valentín
                </motion.button>
              )}

              {recuerdoActivo.fecha === "Diciembre" && (
                <motion.button
                  className="btn-carta-especial"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setMostrarCarta(true)}
                >
                  🎄 Leer carta de Navidad
                </motion.button>
              )}

              <button className="close-btn" onClick={() => setRecuerdoActivo(null)}>Volver</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CARTA */}
      <AnimatePresence>
        {mostrarCarta && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMostrarCarta(false)}>
            <motion.div className="carta-navidena" initial={{ y: 50 }} animate={{ y: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="decoracion-carta">🎄✨</div>
              <h2>Querida Alba,</h2>
              <div className="texto-carta">
                <p>Eres lo mejor que me ha pasado este año.</p>
                <p>Cada recuerdo aquí es parte de nosotros.</p>
              </div>
              <p className="firma">Te quiero mucho ❤️</p>
              <button className="close-btn btn-carta-close" onClick={() => setMostrarCarta(false)}>Cerrar</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
