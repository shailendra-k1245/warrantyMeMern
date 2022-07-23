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

function App() {
  return (
    <div className="App">
      <div className="a">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
            <ListGroup.Item>Billing</ListGroup.Item>
            <ListGroup.Item>Virtual Reality</ListGroup.Item>
            <ListGroup.Item>RTL</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default App;
