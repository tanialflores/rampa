import Header from "./components/header/header";
import rampa from "./assets/rampa.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.jpeg";
import "./App.css";
import banquets from "./assets/banquets.png";
import flecha from "./assets/flecha.png";
import React from "react";
import banquets2 from "./assets/banquets2.jpeg";
import socialmedia1 from "./assets/socialmedia1.png";
import socialmedia2 from "./assets/socialmedia2.png";
import carousel from './assets/carousel.png'
import boda from './assets/boda.jpeg'
import componente from './assets/Componente.svg'

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  currentSlide: number;
  slideCount: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  direction: "prev" | "next";
}

const CustomArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  currentSlide,
  slideCount,
  onClick,
  direction,
}) => {
  const isDisabled =
    (direction === "prev" && currentSlide === 0) ||
    (direction === "next" && currentSlide === slideCount - 1);
  return (
    <img
      src={flecha}
      alt={`${direction} arrow`}
      className={`${className} ${isDisabled ? "disabled" : ""}`}
      style={{
        ...style,
        display: isDisabled ? "none" : "block",
        transform: direction === "prev" ? "rotate(180deg)" : "none",
        width: "34px",
        height: "69px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        zIndex: 2,
      }}
      onClick={!isDisabled ? onClick : undefined}
    />
  );
};

function App() {
  const today = new Date();
  const day = today.toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const year = today.getFullYear();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 2;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: (
      <CustomArrow
        direction="prev"
        currentSlide={currentSlide}
        slideCount={totalSlides}
      />
    ),
    nextArrow: (
      <CustomArrow
        direction="next"
        currentSlide={currentSlide}
        slideCount={totalSlides}
      />
    ),
  };
  const settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: (
      <CustomArrow
        direction="prev"
        currentSlide={currentSlide}
        slideCount={totalSlides}
      />
    ),
    nextArrow: (
      <CustomArrow
        direction="next"
        currentSlide={currentSlide}
        slideCount={totalSlides}
      />
    ),
  };
  return (
    <>
    <div className="landing">
      <Header />
      <div className="sliderContainer">
        <Slider {...settings}>
          <img className="image" src={image1} alt="" />
          <img className="image" src={image2} alt="" />
        </Slider>
      </div>
      <span className="place">GUADALAJARA, JALISCO, MÉXICO</span>
      <div className="lineGray" />
      <div className="container_title">
        <span className="titleWelcome">BIENVENIDO A</span>
        <img src={rampa} alt="" />
        <span className="subtitle">ORGANIZACION DE EVENTOS</span>
      </div>
      <section className="section_one">
        <span className="title_blue">
          DE A SUS INVITADOS UNA RAZON PARA ASOMBRARSE
        </span>
        <span className="text_black">
          Desde lujosas bodas ambientadas con caminos llenos de flores de los
          lugares históricos de Guadalajara y sus alrededores, hasta elaborados
          eventos corporativos que fomentan las conexiones de la compañía, RAMPA
          IIII tiene el don de transformar las celebraciones significativas en
          experiencias inolvidables.
        </span>
      </section>
      <section className="section_two">
        <div className="back_blue">
          <span className="title">NUESTROS SERVICIOS</span>
          <span className="subtitleLight">
            Pequeños detalles que hacen la diferencia
          </span>
        </div>
      </section>
      <section className="section_three">
        <div className="text">
          <span className="banquets">BANQUETES</span>
          <span className="subtitle_banquets">
            Decoración que resaltan los platillos que enamoran el alma
          </span>
        </div>
        <div className="sliderBanquets">
          <Slider {...settings2}>
            <img className="image2" src={banquets} alt="" />
            <img className="image2" src={banquets2} alt="" />
          </Slider>
        </div>
      </section>
      <section className="section_four">
        <div className="social_media">
          <span className="title_social">SOCIAL MEDIA</span>
          <span className="subtitle_social">
            Donde los recuerdos quedan plasmados por siempre
          </span>
        </div>
        <div className="sliderSocialMedia">
          <Slider {...settings}>
            <img className="image3" src={socialmedia1} alt="" />
            <img className="image3" src={socialmedia2} alt="" />
          </Slider>
        </div>
      </section>
      <section className="section_five">
        <span className="text_information">SOLICITAR INFORMACION</span>
        <div className="date">
          <span className="day">{day.toUpperCase()}</span>
          <span className="year">{year}</span>
        </div>
        <div className="form">
          <input placeholder="NOMBRE COMPLETO*"></input>
          <input placeholder="CORREO ELECTRONICO*"></input>
          <select defaultValue="">
            <option value="" disabled>
              TIPO DE EVENTO
            </option>
            <option value="boda">BODA</option>
            <option value="xv">XV AÑOS</option>
          </select>
          <div className="date_event">
            <label className="label_date">FECHA DE EVENTO</label>
            <input type="date"></input>
          </div>
          <span className="required">*CAMPOS OBLIGATORIOS</span>
          <div className="send_message">
            <textarea placeholder="MENSAJE"></textarea>
            <button className="send">ENVIAR</button>
          </div>
        </div>
      </section>
    </div>
    <div className="landingWeb">
      <Header/>
      <div className="sliderWeb">
        <Slider {...settings}>
          <img className="imageWeb" src={carousel} alt="" />
          <img className="imageWeb" src={image2} alt="" />
        </Slider>
      </div>
      <section className="section_one_web">
        <div className="title_welcome">
          <span className="titleWeb">BIENVENIDO A</span>
          <img src={rampa} alt=""/>
        </div>
        <div className="text_right">
          <span className="place_web">GUADALAJARA, JALISCO</span>
          <span className="text_blue">DE A SUS INVITADOS UNA RAZON PARA ASOMBRARSE</span>
          <span className="text_black">Desde lujosas bodas ambientadas con caminos llenos de flores de los lugares históricos de Guadalajara y sus alrededores, hasta elaborados eventos corporativos que fomentan las conexiones de la compañía, RAMPA IIII tiene el don de transformar las celebraciones significativas en experiencias inolvidables.</span>
        </div>
      </section>
      <section className="section_two_web">
        <span className="title_services">NUESTROS SERVICIOS</span>
        <span className="subtitle_services">Pequeños detalles que hacen la diferencia</span>
        <div className="both">
          <div className="sliderServices">
            <Slider {...settings2}>
              <img className="image3" src={boda} alt="" />
              <img className="image3" src={banquets2} alt="" />
            </Slider>
          </div>
          <div className="experiences">
            <span className="title_experience">Experiencias</span>
            <span className="title_events">Diseño de eventos</span>
            <span className="text_events">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
            <span className="see_more">
              <img src={componente} alt=""/>
            </span>
          </div>
        </div>
      </section>
      <div className="section_three_web">
        <span className="title_banquet">BANQUETE</span>
        <span className="subtitle_banquet">Decoración que resaltan los platillos que enamoran el alma</span>
        <div className="sliderBanquet">
          <Slider {...settings3}>
            <img className="image4" src={banquets} alt="" />
            <img className="image4" src={banquets2} alt="" />
            <img className="image4" src={banquets} alt="" />
            <img className="image4" src={banquets} alt="" />
            <img className="image4" src={banquets2} alt="" />
            <img className="image4" src={banquets} alt="" />
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
