import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../../../img/inicio.png";
import image2 from "../../../img/Plaza-San-Martin.jpg";
import image3 from "../../../img/viñedo 1.jpg";
import image4 from "../../../img/DEPORTE 1.jpg";
import image5 from "../../../img/artistas.png";
import imag6 from "../../../img/plaza indepe2.jpg";
import "./Inicio.css";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  tranform: "translate(-50%, -50)",
};

const parallaxBox = {
  margin: "1%",
  borderRadius: "1%",
};

export const Inicio = () => {
  return (
    <div>
      <Parallax style={parallaxBox} bgImage={image1} strength={600}>
        <div className="divImg">
          <div style={insideStyles}></div>
        </div>
      </Parallax>
      <div style={parallaxBox} className="section">
        <div className="section1">
          <h2 className="border">
            <img alt="plaza" src={imag6}></img>
          </h2>
          <article>
            <h3>Mendoza</h3>
            <p>
              La provincia de Mendoza, ubicada en la región de Cuyo en el oeste
              de Argentina, es conocida por sus paisajes montañosos, sus viñedos
              y su producción de vino de alta calidad. Con una superficie de más
              de 150,000 km², Mendoza es la cuarta provincia más grande del país
              y cuenta con una población de alrededor de 1.8 millones de
              habitantes. La región ofrece una gran variedad de actividades al
              aire libre, como senderismo, esquí, rafting y escalada, así como
              una rica historia cultural que se refleja en sus numerosos museos,
              monumentos y festivales. Además, Mendoza es uno de los principales
              centros económicos de Argentina, con una economía basada en la
              producción agrícola, la minería y el turismo.
            </p>
          </article>
        </div>
      </div>

      <Parallax style={parallaxBox} bgImage={image2} strength={600}>
        <div className="divImg" style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>

      <div style={parallaxBox}  className="section">
        <h3 className="border">Turismo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          reiciendis iste amet quam rem eaque? Ipsa ea impedit doloremque,
          perspiciatis magni asperiores odit assumenda, at, eaque porro autem
          expedita quod?
        </p>
      </div>

      <Parallax style={parallaxBox} bgImage={image4} strength={600}>
        <div className="divImg" style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>
      <div style={parallaxBox}  className="section">
        <h3 className="border">la Garra Borravina</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          reiciendis iste amet quam rem eaque? Ipsa ea impedit doloremque,
          perspiciatis magni asperiores odit assumenda, at, eaque porro autem
          expedita quod?
        </p>
      </div>

      <Parallax style={parallaxBox} bgImage={image3} strength={600}>
        <div className="divImg" style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>
      <div style={parallaxBox}  className="section">
        <h3 className="border">Tierra del Sol y del buen Vino</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          reiciendis iste amet quam rem eaque? Ipsa ea impedit doloremque,
          perspiciatis magni asperiores odit assumenda, at, eaque porro autem
          expedita quod?
        </p>
      </div>
      <Parallax style={parallaxBox} bgImage={image5} strength={200}>
        <div className="divImg" style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>
      <div style={parallaxBox}  className="section">
        <h3 className="border">Artistas</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          reiciendis iste amet quam rem eaque? Ipsa ea impedit doloremque,
          perspiciatis magni asperiores odit assumenda, at, eaque porro autem
          expedita quod?
        </p>
      </div>
    </div>
  );
};

export default Inicio;
