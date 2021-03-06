import React, { useEffect, useState } from "react";
import {Card, Button, Row, Col, Container} from "react-bootstrap";


const Offer = () => {
    const [cheese, setCheese] = useState([]);

    useEffect(() => {
        fetch("https://api.jsonbin.io/b/623a08b87caf5d67836f721b", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "secret-key": "$2b$10$wvxnUzoxHSmu1ny6aAq3eu95MxfmDqNpqYJJ/kNz1zHdrwJ0rFSOa"
            }
        }).then(r => r.json())
        .then(data => setCheese(data.cheese))
    }, []);

    return (
        <section id="offer">
            <h1 className="logo">Oferta</h1>
            <p>Wszystkie produkty są pakowane próżniowo.</p>
            <Container>
                <Row>
                    {cheese.map(el => 
                        <Col key={el.id} xxl={4} xl={4} lg={6} md={6}>
                            <Card className="mb-5">
                                <Card.Img src={require(`../assets/${el.image}`)} alt={el.imagealt} className="cheese-img"/>
                                <Card.Body className="cheese-card">
                                    <div>
                                        <Card.Title>{el.name}</Card.Title>
                                        <Card.Text>Przyprawa: {el.taste}</Card.Text>
                                        <Card.Text>Waga: {el.weight}</Card.Text>
                                        <Card.Text>Cena: {el.price}</Card.Text>
                                        <Card.Text>{el.description}</Card.Text>
                                    </div>
                                    <Button>Dodaj</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
            <hr></hr>
        </section>
    )
}

export default Offer;