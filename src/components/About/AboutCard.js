import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, my name is <span className="purple">Phu Nguyen</span> and 
            I am a senior studying Computer Science at <span className="maroon">Virginia</span> 
            <span className="orange"> Tech</span>.  
            <br /> I live in Blacksburg, Virginia but I'm willing 
            to relocate if required.  
            <br /> While I'm passionate about developing solutions toward Big Data 
            pipelining, warehousing as well as Machine Learning, I'm also open to other 
            roles that align with my skillsets.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
