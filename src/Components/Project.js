import React, { Component } from 'react';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import projectData from './projectData';

class Projects extends Component {
    render() {

        if (projectData) {
            var projects = projectData.map(function (projects) {
                var projectImage = 'img/' + projects.image;
                return (
                    <Col>
                        <Card border="light" key={projects.title}>
                            <Card.Img variant="top" src={projectImage} className='projectImg' />
                            <Card.Body>
                                <Card.Title>{projects.title}</Card.Title>
                                <Card.Text>
                                    {projects.description}
                                </Card.Text>
                                <Card.Link href={projects.github} target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href={projects.deployedApp} target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                )
            })
        }

        return (
            <div className='projectDiv'>
                <h1 className='projectTitle'>Projects</h1>
                <CardDeck className="justify-content-md-center">
                    <Row xs={1} md={3} >
                        {projects}
                    </Row>
                </CardDeck>
                <p className='projectTitle'></p>
            </div>
        );
    }
}

export default Projects;