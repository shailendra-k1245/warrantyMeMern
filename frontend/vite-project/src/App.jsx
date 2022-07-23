import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Login } from "./components/Login";
import { Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { MdDashboard } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiNintendogamecube } from "react-icons/si";
import { TbTextDirectionRtl } from "react-icons/tb";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div className="App">
      <div className="a">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            {/* <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form> */}
            <input placeholder="Search here" style={{ borderRadius: ".3rem" }} />
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="b">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {" "}
              <MdDashboard /> Dashboard
            </ListGroup.Item>
            <ListGroup.Item>
              <GrTableAdd /> Tables
            </ListGroup.Item>
            <ListGroup.Item>
              <IoNewspaperOutline />
              Billing
            </ListGroup.Item>
            <ListGroup.Item>
              <SiNintendogamecube />
              Virtual Reality
            </ListGroup.Item>
            <ListGroup.Item>
              <TbTextDirectionRtl />
              RTL
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default App;
