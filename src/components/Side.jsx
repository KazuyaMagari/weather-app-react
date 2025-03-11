import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import NEWS from '../public/assets/news.jpg';
import AI from '../public/assets/AIweather.jpg';

function Side() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center my-4 fs-2">More About</div>
      <div className="container">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%', height: '100%' }}>
              <Card.Img
                variant="top"
                src={NEWS}
                className="card-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>News</Card.Title>
                <hr />
                <Card.Text style={{ flexGrow: 1 }}>
                  Stay up-to-date with the latest news articles and headlines from around the world.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate("/news")}>
                  Read News
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%', height: '100%' }}>
              <Card.Img
                variant="top"
              src={AI}
                className="card-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>AI Forecast</Card.Title>
                <hr />
                <Card.Text style={{ flexGrow: 1 }}>
                  Get weather predictions powered by AI models for accurate forecasting.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate("/weather-ai")}>
                  See Forecast
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Side;
