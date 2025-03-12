import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function NewsComp() {
  const [news, setNews] = useState([]);
  const [startDate, setStartDate] = useState('');

  const API_KEY = "ad6eef044bd14ec1927a3eba5ec0db55";
 
  const fetchNews = async () => {
    if (!startDate) return;
    
    const url = `https://newsapi.org/v2/everything?q=(Google OR Amazon) AND Cloud&from=${startDate}T00:00:00&to=${startDate}T23:59:59&sortBy=relevancy&pageSize=5&apiKey=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error("ニュースを取得できませんでした", error);
    }
  };
  
  return (
    <>

    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-5">
    
      <h2 className=''>Know the news and weather at the same time</h2>
      <Form className='align-items-center mb-4'>
        <Form.Group controlId="formDate">
          <Form.Label>Select a date (invalid a month ago from today):</Form.Label>
          <Form.Control 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)}
          className='me-2 mb-3'/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={fetchNews}>
          Submit
        </Button>
      
    </Form>
        </div>  
      </div> 
    </div>

    <div className='container'>
      <div className="row align-items-center">
        

        
    {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="card mb-3 col-6 justify-content-center">
            <img src={article.urlToImage} alt="News" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                記事を読む
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">ニュースがありません。</p>
      )}
      
    </div>
    </div>
    </>
  )
}

export default NewsComp