import { Component } from "react";
import { Col} from "react-bootstrap";
class MyCard extends Component {
 render() {
    return(
        <Col>
            <img className="img-fluid my-1 film" src={this.props.img} alt="errore " />
        </Col>
    )
 }
}

export default MyCard