import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import travelMT from "../assets/video/dulichMT.mp4";
import travelMB from "../assets/video/dulichMB.mp4";
import travelMN from "../assets/video/dulichMN.mp4";
import wordImg from "../assets/images/world.png";
import famoustourism from "../assets/images/famous-tourism.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImageGallery from "../components/Image-gallery/MasonryImageGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const HomePage = () => {
  return (
    <>
      {/* ------------- hero section start --------------*/}
      <section>
        <Container>
          <Row className="">
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={wordImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <video src={travelMN} alt="du lich mien Nam" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={travelMT} alt="Du lich Mien Trung" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <video src={travelMB} alt="du lich mien Bac" controls />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ------------- hero section end --------------*/}
      <section>
        <Container>
          <Row>
            <Col>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ------------- featured tour section start --------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ------------- featured tour section end --------------*/}

      {/* ------------- experience section start --------------*/}
      <section>
        {" "}
        <div className="container-fluid px-5">
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>With our all experience</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Eos, cupiditate? Accusamus consectetur repellat at quas
                  sit ad,
                  <br />
                  rerum quidem recusandae temporibus ex quia excepturi cum{" "}
                  <br /> error fuga quae. Eius, odit.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img
                  className="famoustourism__img"
                  src={famoustourism}
                  alt="famous tourism"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ------------- experience section end --------------*/}

      {/* ------------- gallery section end --------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ------------- gallery section end --------------*/}

      {/* ------------- testimonial section start --------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"}></Subtitle>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials></Testimonials>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ------------- testimonial section end --------------*/}
      <Newsletter />
    </>
  );
};

export default HomePage;
