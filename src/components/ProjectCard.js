import { Card, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col md={4} className="mb-4 d-flex align-items-stretch">
      <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
        <Card style={{ width:"400px", height:"500px"}}>
          <div >
            <Card.Img 
              src={imgUrl} 
            />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};
