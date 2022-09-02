import { Component } from "react";
import { Container, } from "react-bootstrap";
import MyGallery from "./MyGallery";

 class MyMain extends Component {
    state = {
        key: 'c28e67a7',
        harryPotter: [],
        missionimpossible: [],
        fastAndFurious: [],
    }
    componentDidMount() {
        this.fetchSaga('harry', 'potter', 'harryPotter')
        this.fetchSaga('fast', 'and%20furious', 'fastAndFurious')
        this.fetchSaga('mission', 'impossible', 'missionimpossible')
    }
    async fetchSaga(first, second, complete) {
        try {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=${this.state.key}&s=${first}%20${second}`);
            if (response.ok) {
                let data = await response.json();
                console.log(data.Search);
                this.setState({
                    [complete]: data.Search,
                });
            } else {
                console.log("qualcosa è andato storto");
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Container className="main" fluid>
                <MyGallery title={'Harry Potter'} gallery={this.state.harryPotter} />
                <MyGallery title={'Mission Impossible'} gallery={this.state.missionimpossible} />
                <MyGallery title={'Fast And Furious'} gallery={this.state.fastAndFurious} />
            </Container>
        )
    }

 }

 export default MyMain;