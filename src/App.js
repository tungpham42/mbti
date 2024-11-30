import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MBTITest from "./MBTITest";

function App() {
  return (
    <Container className="py-5 col-md-8">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-center mb-4">Kiểm tra tính cách MBTI</h1>
          <MBTITest />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
