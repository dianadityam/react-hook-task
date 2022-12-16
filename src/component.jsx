import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';

export default function Hook() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=6b6b9cc0346d414f87a770c2db391516')
        .then((res) => {
            setNews(res.data.articles);
        })
    }, [])

    return (
        <div>   
            <h1 className="text-center">News API React Hook Task</h1>
                <Container>
                    <Row>
                        <InputGroup className="my-3">
                            <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search News"
                            />
                        </InputGroup>
                        {news.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                        }).map((item) => (
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.urlToImage} />
                                        <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <a href={item.url} className="btn btn-primary">Read More</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        </Row>
                    </Container>
            </div>
    )
}


