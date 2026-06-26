import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import projectData from '../data/project';

class Projects extends Component {
    render() {

        const backgroundPalette = ['#e8f1ff', '#f4f0ff', '#e9f8f5', '#fff4ec'];

        const tiles = projectData
            .map((project, index) => {
                const projectImage = 'img/' + project.image;
                const targetLink = project.deployedApp || project.github;
                const background = backgroundPalette[index % backgroundPalette.length];

                return (
                    <Col key={project.title} className='projectTile' xs={12} md={6}>
                        <div className='projectCard' style={{ backgroundColor: background }}>
                            <a
                                href={targetLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='projectImageLink'
                            >
                                <img src={projectImage} alt={project.title} className='projectImg' />
                            </a>
                        </div>
                    </Col>
                );
            });

        return (
            <div className='projectDiv'>
                <Row className='projectRow'>
                    {tiles}
                </Row>
            </div>
        );
    }
}

export default Projects;
