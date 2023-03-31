import { Component } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import imgFilm from "../assets/img/media/media2.webp";

class Homepage extends Component {
  render(){
    return(
      <section>
        <div className="trending mb-5">
          <Container>
            <h2 className="mb-3 h4">Trending Now</h2>
            <Row xs={1} sm={2} md={4} lg={6} className="g-2">
              <Col>
                <Image src={imgFilm} fluid />
              </Col>
              <Col>
                <Image src={imgFilm} fluid />
              </Col>
              <Col>
                <Image src={imgFilm} fluid />
              </Col>
              <Col>
                <Image src={imgFilm} fluid />
              </Col>
              <Col>
                <Image src={imgFilm} fluid />
              </Col>
              <Col>
                <Image src={imgFilm} fluid />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default Homepage;