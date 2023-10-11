import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [feedback, setFeedback] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://x74m9hvsxb.execute-api.us-east-1.amazonaws.com/prod', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                console.log("Email sent successfully!");
                setIsSubmitted(true);
                setFeedback({ message: 'Email sent successfully!', type: 'success' });
            } else {
                console.error("Failed to send email. Status:", response.status);
                setFeedback({ message: 'Failed to send email. Please try again.', type: 'error' });
            }
        } catch (error) {
            console.error("There was an error sending the email:", error);
            setFeedback({ message: 'There was an error sending the email. Please try again.', type: 'error' });
        }
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

                {feedback && (
                    <div className={`feedback-message ${feedback.type}`}>
                        {feedback.message}
                    </div>
                )}
            </Container>
        </Container>
    );
}

export default ContactForm;
