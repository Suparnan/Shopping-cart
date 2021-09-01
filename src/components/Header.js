import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Content } from './Content.js'
import Modal from 'react-bootstrap/Modal'
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { localData } from "../components/Data.js";
import { BsFillTrashFill } from "react-icons/bs";


function Header() {

    const [cartItems, setCartItems] = useState([]);
    let obj = {}
    localData.map((ele) => {
       obj[ele.id] = false
    })

    const [disable, setDisable] = useState(obj);
    
    const handleSubmit = ((id) => {
        let newDisable = {...disable}
        newDisable[id] = true;
        setDisable(newDisable);
        const findData = localData.find((data) => data.id === id)
        setCartItems([...cartItems, findData]);
    })

    const onRemove = ((id) => {
        const exist = cartItems.find((x) => x.id === id);
        let newDisable = {...disable}
        setCartItems(cartItems.filter((x) => x.id !== id))
        newDisable[id] = false;
        setDisable(newDisable);
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about" disabled>About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">New Arrival</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button variant="outline-dark" onClick={handleShow}>
                            <FaShoppingCart />    
                            <span>  Cart </span>
                            <Badge bg="dark" >
                                 {cartItems.length}
                            </Badge>
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Your Shopping Cart</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <table>
                                       <thead>
                                           <tr>
                                               <th>Item-ID </th>
                                               <th>Name </th>
                                               <th>Price </th>
                                           </tr>
                                       </thead>
                                {cartItems.map((element) => {
                                const { id, name, price} = element
                                return (
                                   
                                       <tr> 
                                           <td>{id}</td>
                                           <td>{name}</td>
                                           <td>{price}</td>
                                           <td>
                                           <Button variant="outline-dark" onClick={() => onRemove(id)} className="remove">    
                                           <BsFillTrashFill />
                                           </Button>
                                           </td>
                                       </tr>
                                   
                                )} )}
                                </table>
                                </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className="bg-dark py-3">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>

            <Content localData={localData} disable={disable} handleSubmit={handleSubmit} />

        </div>
    )
}

export { Header };