import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MBTITest from "./components/MBTITest";
import MainBrandLogo from "./components/MainBrandLogo";

function App() {
  const [showResult, setShowResult] = useState(false);

  const handleShowResultChange = (resultVisible) => {
    setShowResult(resultVisible);
  };

  return (
    <Container className="py-5 col-md-12">
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <Row>
        <Col
          md={showResult ? 12 : 8}
          sm={showResult ? 12 : 8}
          className="mx-auto"
        >
          <h1 className="text-center mb-4">Kiểm tra tính cách MBTI</h1>
          <p className="text-center">
            {showResult
              ? "Kết quả của bạn đã sẵn sàng!"
              : "Hãy bắt đầu bài kiểm tra."}
          </p>
          <MBTITest onShowResultChange={handleShowResultChange} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
