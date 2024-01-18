import React, { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiJava,
} from 'react-icons/di';
import {
  SiRedis, SiMysql, SiApacheairflow, SiApachespark, SiPostgresql, SiApachehadoop,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';

// Array of objects containing each technology's icon component and name
const technologies = [
  { IconComponent: DiPython, name: 'Python' },
  { IconComponent: DiJava, name: 'Java' },
  { IconComponent: DiJavascript1, name: 'JavaScript' },
  { IconComponent: DiReact, name: 'React' },
  { IconComponent: DiNodejs, name: 'Nodejs' },
  { IconComponent: DiGit, name: 'Git' },
  { IconComponent: TbBrandGolang, name: 'Golang' },
  { IconComponent: SiApachespark, name: 'Apache Spark' },
  { IconComponent: SiApacheairflow, name: 'Apache Airflow' },
  { IconComponent: SiRedis, name: 'Redis' },
  { IconComponent: SiMysql, name: 'MySQL' },
  { IconComponent: SiPostgresql, name: 'PostgreSQL' },
  { IconComponent: SiApachehadoop, name: 'Apache Hadoop' },
];

function Techstack() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {technologies.map(({ IconComponent, name }, index) => (
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

export default Techstack;