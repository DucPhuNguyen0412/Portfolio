import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
    // State to handle form input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Log the name and value
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
    };
    

    // Handle form submission
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://x74m9hvsxb.execute-api.us-east-1.amazonaws.com/prod/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            console.log("Email sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset the form
        } else {
            console.error("Failed to send email. Status:", response.status);
        }
    } catch (error) {
        console.error("There was an error sending the email:", error);
    }
    };

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
      </Container>
    </Container>
  )
}

export default ContactForm;
