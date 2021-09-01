import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { BsStarFill } from "react-icons/bs";
import { Footer } from "../components/Footer.js";

function Content(props) {
    const { localData, disable, handleSubmit } = props;
    
    return (
        <div>
            <section className="py-5">
            <Container>
                 <Row>
                    {localData.map((ele) => {
                        const {id, name, src, rating, strike, price} = ele;
                        
                        return(
                            <>
                            { id === 5 ? <div><p><br></br></p></div> : ""}
                            <Col>
                                <Card style={{width: '15rem', height:'22rem'}}>
                                {(id === 2 || id === 4 || id === 7 || id === 8) ? 
                                <Badge bg="dark" style={{position: 'absolute', top: '0.5em', right: '0.5em'}}>
                                 Sale
                                </Badge> :""
                                }
                                <Card.Img variant="top" src={src} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {(rating === 5) ? 
                                        <div>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div> : <br></br> }
                                        {(id === 2 || id === 3 || id === 5 || id === 7) ? 
                                        <span><s>{strike}</s> {price} </span> : price}
                                    </Card.Text>
                                {(id === 1 || id === 6) ?    
                                <div> 
                                <Button variant="outline-dark">View options</Button>
                                </div> :
                                <div> 
                                <Button disabled={disable[id]} onClick={() => handleSubmit(id)} variant="outline-dark">Add to cart</Button>
                                </div> }    
                                </Card.Body>        
                                </Card>
                            </Col>
                            </>
                        )
                    })}
                    
                </Row>
            </Container>
            </section>
            <Footer />
        </div>
    )
}

export { Content };