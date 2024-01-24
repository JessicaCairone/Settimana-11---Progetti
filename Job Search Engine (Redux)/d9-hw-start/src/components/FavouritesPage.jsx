import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_JOB } from "../actions/actions";



const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.list)

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col className="col-1">
            <button className="border border-0 bg-transparent mt-4" onClick={() => navigate("/")} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-up-fill" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg></button>
            </Col>
                <Col className="col-11">
                    <h1 className="mt-3 text-center me-5">Lista dei preferiti</h1>
                    
                </Col>
                
                <Row className="mt-5">
                    <ListGroup>
                        {favorites.length > 0 ? (
                            favorites.map((fav, index) => (
                            <ListGroup.Item className='fw-bold' key={index}>
                                <button className="border border-0 bg-transparent me-5" onClick={() => dispatch({ type: REMOVE_JOB, payload: fav })}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="darkred" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></button>
                                {fav}
                            </ListGroup.Item>
                        ))
                        ) : (
                            <ListGroup.Item className="mt-4">Non ci sono preferiti</ListGroup.Item>
                        )}
                    </ListGroup>
                </Row>
            </Row>
        </Container>
    )

}

export default Favorites;