import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./App.css";

// Importaciones según tu estructura de carpetas
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

const recuerdos = [
  {
    fecha: "Agosto",
    titulo: "Donde empezó todo",
    descripcion:
      "Nuestros primeros días juntos y esos macarrones tan zuculentos :v",
    fotos: [fotoMagarones],
  },
  {
    fecha: "Septiembre",
    titulo: "Nuestras fotos comiendo",
    descripcion: "Por más fotos de comidas con carusas raras.",
    fotos: [fotoMagdalenas, fotoTarta],
  },
  {
    fecha: "Octubre",
    titulo: "Primer mes",
    descripcion: "De poco un todo: nuggets, pijamas y ascensores.",
    fotos: [fotoChinos, fotoAscensor, fotoNuggets, fotoPijamas, fotoJuaguli],
  },
  {
    fecha: "Noviembre",
    titulo: "Segundo mes + Cumplessss",
    descripcion: "Días especiales que junto a ti lo son aún más.",
    fotos: [
      fotoCumpleAlbita,
      fotoAzucar,
      fotoCumplePablete,
      fotoIlusiones,
      fotoNoviembre,
    ],
  },
  {
    fecha: "Diciembre",
    titulo: "Navidad + Polonia",
    descripcion: "Nuestra primera Navidad juntos.",
    fotos: [fotoSushi, fotoPis, fotoSpeed, fotoQueso],
  },
];

function App() {
  const [recuerdoActivo, setRecuerdoActivo] = useState(null);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [mostrarPolonia, setMostrarPolonia] = useState(false);

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

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

  const lanzarConfeti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff4d6d", "#d4af37", "#ffffff"],
    });
  };

  return (
    <div className="App">
      <header>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
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

      {/* --- NUEVA CRONOLOGÍA CONECTADA --- */}
      <div className="timeline-wrapper">
        <div className="timeline-line-visual"></div>
        <div className="timeline-dots-container">
          {recuerdos.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="timeline-dot"
              onClick={() => setRecuerdoActivo(item)}
            >
              <span className="dot-text">{item.fecha}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="seccion-final">
        <motion.button
          className="btn-carta-especial"
          whileHover={{ scale: 1.1, rotate: 2 }}
          onClick={() => setMostrarCarta(true)}
        >
          ✉️ Leer mi carta de Navidad
        </motion.button>

        <motion.button
          className="btn-polonia"
          whileHover={{ scale: 1.1 }}
          onClick={() => setMostrarPolonia(true)}
        >
          ✈️ Próxima parada: Polonia
        </motion.button>

        <motion.button
          className="btn-celebrar"
          whileHover={{ scale: 1.1 }}
          onClick={lanzarConfeti}
        >
          🎉 ¡Nuestra celebración!
        </motion.button>
      </div>

      <AnimatePresence>
        {recuerdoActivo && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRecuerdoActivo(null)}
          >
            <motion.div
              layout
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="fotos-grid">
                {recuerdoActivo.fotos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Recuerdo"
                    className="foto-individual"
                  />
                ))}
              </div>
              <h3>{recuerdoActivo.titulo}</h3>
              <p>{recuerdoActivo.descripcion}</p>
              <button
                className="close-btn"
                onClick={() => setRecuerdoActivo(null)}
              >
                Volver
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarCarta && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMostrarCarta(false)}
          >
            <motion.div
              className="carta-navidena"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="decoracion-carta">🎄✨</div>
              <h2>Querida Alba,</h2>
              <div className="texto-carta">
                <p>
                  Escribo esto para decirte que eres lo mejor que me ha pasado
                  este año...
                </p>
                <p>
                  Cada foto aquí guardada es un pedacito de felicidad que he
                  vivido a tu lado.
                </p>
                <p>
                  Este año por navidad ya no quiero nada, porque que me
                  acompañes a mi lado ya es el mejor regalo de todos.
                </p>
                <p>
                  Espero que pasemos una Navidad increíble y que el próximo año
                  llenemos esta web con el doble de fotos.
                </p>
              </div>
              <p className="firma">
                Te quiero mucho cariñet, por mas navidades juntos ❤️
              </p>
              <button
                className="close-btn btn-carta-close"
                onClick={() => setMostrarCarta(false)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarPolonia && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMostrarPolonia(false)}
          >
            <motion.div
              className="modal-content info-viaje"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ fontSize: "4rem" }}>✈️❄️</span>
              <h3>¡Nos vamos a Polonia!</h3>
              <div className="destinos-tags">
                <span>📍 Zakopane</span>
                <span>📍 Auschwitz</span>
                <span>📍 Cracovia</span>
              </div>
              <button
                className="close-btn"
                onClick={() => setMostrarPolonia(false)}
              >
                ¡Qué ganas! ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
