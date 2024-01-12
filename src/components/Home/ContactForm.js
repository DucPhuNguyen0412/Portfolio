import React, { useState } from "react";
import emailjs from 'emailjs-com';

import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xcdc6uc', 'template_x07q154', e.target, 'QiRyO072FIjSu6Wb_')
            .then((result) => {
                console.log("Email sent successfully!");
                setIsSubmitted(true);
                setFeedback({ message: 'Email sent successfully!', type: 'success' });
            }, (error) => {
                console.error("Failed to send email:", error.text);
                setFeedback({ message: 'Failed to send email. Please try again.', type: 'error' });
            });
    };
    
    if (isSubmitted) {
        return (
            <Container fluid className="contact-section" id="contact">
                <Container>
                    <h1 className="contact-header">Contact Me</h1>
                    <div className={`feedback-message ${feedback.type}`}>
                        {feedback.message}
                    </div>
                </Container>
            </Container>
        );
    }

    return (
        <Container fluid className="contact-section" id="contact">
            <Container>
                <h1 className="contact-header">Contact Me</h1>
                <Form onSubmit={handleSubmit} className="contact-form">
                    <Form.Group controlId="formName" className="contact-group">
                        <Form.Label className="contact-label">Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-input"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="contact-submit-btn">
                        Submit
                    </Button>
                </Form>

                {feedback && feedback.message && (
                    <div className={`feedback-message ${feedback.type}`}>
                        {feedback.message}
                    </div>
                )}
            </Container>
        </Container>
    );
}

export default ContactForm;
