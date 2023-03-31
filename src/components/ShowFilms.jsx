import { Component } from "react";
import { Col, Container, Row, Image, Spinner } from "react-bootstrap";

class ShowFilms extends Component {

  state = {
    searchFilm: this.props.search,
    error: false,
    errorMessage: "",
    films: [],
    isLoading: true
  };

  fetchShowFilm = async () => {
    try {
      let stringMin = (this.state.searchFilm).replace(' ','+').toLowerCase();
      
      const response = await fetch("https://www.omdbapi.com/?apikey=ed5ee985&type=movie&s=" + stringMin);

      if (response.ok) {
        const data = await response.json();
        console.log('fetch funzionante: ', data.Search);

        this.setState({films: data.Search, isLoading: false});
      } else {
        this.setState({error: true, isLoading: false});
      }
    } catch (error) {
      console.log('Errore: ', error.message)
      this.setState({error: true, errorMessage: error.message, isLoading: false});
    }
  }

  componentDidMount = () => {
    this.fetchShowFilm();
  }

  render(){
    return(
      <section>
        <div className="films mb-5">
          <Container>

            {/* POSIZIONARE UN CONDIZIONALE CHE NEL CASO NON FOSSERO STATI TROVATI DEI FILM DEVE MOSTRARE A VIDEO UN ALERT CHE CI AVVISI */}
            <h2 className="mb-3 h4">{this.state.searchFilm}</h2>

            {/* POSIZIONARE LO SPINNER IN CENTRO PAGINA/SECTION */}
            {this.state.isLoading && !this.state.error && (
              <div className="text-center mt-5">
                <Spinner animation="border" variant="secondary" role="status">
                  <span className="visually-hidden text-center">Loading...</span>
                </Spinner>
              </div>
            )}
            <Row xs={1} sm={2} md={4} lg={6} className="g-2">
              {this.state.films.map((film, index) => (
                <Col key={index}>
                  <Image src={film.Poster} fluid />
                </Col>             
              ))}
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default ShowFilms;