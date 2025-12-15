import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import projectData from './projectData';

class Projects extends Component {
    render() {

        const tiles = projectData
            .slice(0, 6)
            .map((project) => {
                const projectImage = 'img/' + project.image;
                const targetLink = project.deployedApp || project.github;

                return (
                    <Col key={project.title} className='projectTile'>
                        <a
                            href={targetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='projectImageLink'
                        >
                            <img src={projectImage} alt={project.title} className='projectImg' />
                        </a>
                    </Col>
                );
            });

        const rows = [];
        for (let i = 0; i < tiles.length && rows.length < 2; i += 3) {
            rows.push(
                <Row key={i} xs={1} md={2} lg={3} className='projectRow'>
                    {tiles.slice(i, i + 3)}
                </Row>
            );
        }

        return <div className='projectDiv'>{rows}</div>;
    }
}

export default Projects;
