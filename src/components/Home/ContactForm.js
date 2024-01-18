import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
    // State for storing form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // State for storing feedback message after form submission
    const [feedback, setFeedback] = useState({ message: '', type: '' });

    // State to track if the form has been submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handles form field changes and updates state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Using EmailJS to send form data
        emailjs.sendForm('service_5z29d38', 'template_x07q154', e.target, 'QiRyO072FIjSu6Wb_')
            .then((result) => {
                // Handle successful email sending
                console.log("Email sent successfully!");
                setIsSubmitted(true);
                setFeedback({ message: 'Email sent successfully!', type: 'success' });
            }, (error) => {
                // Handle email send failure
                console.error("Failed to send email:", error.text);
                setFeedback({ message: 'Failed to send email. Please try again.', type: 'error' });
            });
    };
    
    // Display feedback message after submission
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

    // Form rendering
    return (
        // Form layout using React Bootstrap
        <Container fluid className="contact-section" id="contact">
            <Container>
                <h1 className="contact-header">Contact Me</h1>
                <Form onSubmit={handleSubmit} className="contact-form">
                    {/* Name field */}
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

                    {/* Email field */}
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

                    {/* Message field */}
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

                    {/* Submit button */}
                    <Button variant="primary" type="submit" className="contact-submit-btn">
                        Submit
                    </Button>
                </Form>

                {/* Feedback message display */}
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
