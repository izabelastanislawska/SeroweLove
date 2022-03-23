import React from "react";
import {Container, Form, Button, Modal} from "react-bootstrap";
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_yiysnmu',
            'template_87ovi2n',
            toSend,
            'd4wSeCVsJl9yV8piq'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setShow(true);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });

};

    return (
        <Container id="contact" ms="auto">
            <h1 className="logo">Kontakt</h1>
            <p>Jeśli masz jakieś pytania lub chcesz złożyć zamówienie zapraszam do kontaktu poprzez formularz!</p>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formGroupFullName">
                    <Form.Label>Imię i nazwisko</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Podaj swoje imię i nazwisko" 
                    name='from_name'
                    value={toSend.from_name} 
                    onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mt-2" controlId="formGroupEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Podaj swój e-mail" 
                    name='reply_to'
                    value={toSend.reply_to} 
                    onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mt-2" controlId="formGroupTextarea">
                    <Form.Label>Twoja wiadomość</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    placeholder="Tu wprowadź swoją wiadomość do nas!" 
                    name='message'
                    value={toSend.message} 
                    onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button type="submit" className="mt-3" onClick={handleClose}>Wyślij</Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={handleClose}/>
                    <Modal.Body>
                        <p>Dziękujemy! Twoja wiadomość została wysłana</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
            <hr></hr>
        </Container>
    )
}

export default Contact;