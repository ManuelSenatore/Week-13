import { Component } from "react";
import { Container, } from "react-bootstrap";
import MyCard from "./MyCard";

class MyGallery extends Component {
    render() {
        return(
            <Container className="text-light" fluid>
                <h3>{this.props.title}</h3>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center galleria">
                        {
                            this.props.gallery.map(film => (
                                <MyCard key={film.id} img= {film.Poster} />
                            ))
                        }
                </div>
            </Container>
        )
    }
}

export default MyGallery