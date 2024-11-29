import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MBTIForm from "./components/MBTIForm";

function App() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <Container className="py-5 col-md-8">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-center mb-4">Kiểm tra tính cách MBTI</h1>
          <MBTIForm />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="secondary" onClick={refreshPage}>
            Tải lại
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
