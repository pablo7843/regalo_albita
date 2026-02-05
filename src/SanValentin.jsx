import { useState } from "react";
import sanvalentinFoto from "./assets/fotos/sanvalentin.jpeg";
import "./SanValentin.css";

export default function SanValentin() {
  const [pos, setPos] = useState({ top: "50%", left: "60%" });
  const [si, setSi] = useState(false);

  const moverNo = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  return (
    <div className="san-container">
      {/* Corazones flotando */}
      <div className="hearts-bg">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="heart"></div>
        ))}
      </div>

      <div className="san-card">
        <h1>💖 Quieres ser mi San Valentín?</h1>

        <div className="botones">
          <button className="btn-si" onClick={() => setSi(true)}>
            Sí 💘
          </button>

          <button
            className="btn-no"
            style={{ top: pos.top, left: pos.left }}
            onMouseEnter={moverNo}
          >
            No 🖕
          </button>
        </div>

        {si && (
          <div className="mensaje mensaje-con-foto">
            <div className="mensaje-texto">
              <p>
                Sabía que dirías que sí 🥰  
                <br />
                Bien cariñet cojones ostia así me gusta :3
              </p>
            </div>

            <img
              src={sanvalentinFoto}
              alt="San Valentín"
              className="mensaje-foto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
