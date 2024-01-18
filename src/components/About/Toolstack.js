import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAndroidstudio,
  SiLinux,
} from "react-icons/si";

// Array of objects containing each tool's icon component and name
const tools = [
  { IconComponent: SiLinux, name: 'Linux' },
  { IconComponent: SiVisualstudiocode, name: 'VS Code' },
  { IconComponent: SiPostman, name: 'Postman' },
  { IconComponent: SiAndroidstudio, name: 'Android Studio' },
  { IconComponent: SiSlack, name: 'Slack' },
];

function Toolstack() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ IconComponent, name }, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div className={`flip-card ${flipped[index] ? 'flipped' : ''}`} onClick={() => toggleFlip(index)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <IconComponent title={name} />
              </div>
              <div className="flip-card-back">
                <p>{name}</p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
