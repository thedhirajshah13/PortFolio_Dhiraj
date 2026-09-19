import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImpactMetrics = () => {
  const metrics = [
    {
      value: "3,000+",
      label: "Users Monitored",
      subtext: "Redis + BullMQ re-engagement pipeline"
    },
    {
      value: "10,000+",
      label: "Jobs Aggregated",
      subtext: "Automated real-time job data pipeline"
    },
    {
      value: "5+",
      label: "Production Scrapers",
      subtext: "Built & deployed for enterprise scraping"
    },
    {
      value: "90%+",
      label: "Extraction Accuracy",
      subtext: "ELECTRA NLP + Aho-Corasick parser"
    }
  ];

  return (
    <section className="impact-metrics-section py-4">
      <Container>
        <Row className="justify-content-center">
          {metrics.map((item, index) => (
            <Col key={index} lg={3} md={6} className="my-2">
              <div className="impact-card text-center p-4">
                <h3 className="impact-value">{item.value}</h3>
                <h4 className="impact-label mt-1">{item.label}</h4>
                <p className="impact-subtext mb-0 mt-1">{item.subtext}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ImpactMetrics;
