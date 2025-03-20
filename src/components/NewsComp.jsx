import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { fetchNews } from '../api/news';  

function NewsComp() {
  const [news, setNews] = useState([]);
  const [startDate, setStartDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startDate) return;

    
    const articles = await fetchNews(startDate);
    setNews(articles);
  };

  return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-5">
              <h2>Know the news and weather at the same time (due to the setting of API, it works on only localhost)</h2>
              <h3><a href="https://github.com/KazuyaMagari/weather-app-react">Download from gitHub repository</a></h3>
              <Form className="align-items-center mb-4" onSubmit={handleSubmit}>
                <Form.Group controlId="formDate">
                  <Form.Label>Select a date (invalid a month ago from today):</Form.Label>
                  <Form.Control 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)}
                    className="me-2 mb-3"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>  
          </div> 
        </div>
    
        <div className="container">
          <div className="row align-items-center">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div className="col-md-4 mb-4" key={index} style={{ display: "flex", justifyContent: "center" , padding: "0", margin: "0", height: "600px", width: "300px"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={article.urlToImage} alt="News" style={{ height: "200px", objectFit: "cover" }}/>
                    <Card.Body style={{ height: "350px" }}>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                      <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Read Article
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-center">ニュースがありません。</p>
            )}
          </div>
        </div>
      </>
  );
}

export default NewsComp;
