import React, { useState } from 'react';
import { Container, Col, Row, Carousel, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className='carouselContainer'
            >
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-70"
                            src='https://raw.githubusercontent.com/roukell/temp_portfolio/master/public/img/portfolio.jpg'
                            alt="portfolioImg"
                        />
                        <Carousel.Caption>
                            <p style={{ color: 'black' }}>Melody at a shopping mall</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-70"
                        src='https://raw.githubusercontent.com/roukell/temp_portfolio/master/public/img/turtle.jpeg'
                        alt="turtleImg"
                    />
                    <Carousel.Caption>
                        <p>Photographed by Melody while diving in Hawaii</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className='aboutContainer'>
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h3>Learn more about Melody</h3>
                                <p>
                                    Melody is a DevOps Engineer experienced in developing web applications, automation, and AWS. She always pay high attention to detail and have created several programs with her proven problem solving ability.
                                    <br />
                                    <br />
                                    She is highly motivated to optimise both the productivity of developers and the reliability of operations, and aim to bring DevOps best practices to the table, including CI/CD, microservices, infrastructure as code, monitoring and logging, efficient communication and collaboration.
                                    <br />
                                    <br />
                                    Her pervious career in medical imaging Nuclear Medicine for seven years has helped her to develop many soft skills.
                                    She has strong time management skills with the ability to prioritise workload in order to meet strict deadline. She is experienced in communicating and maintaining relationships with key internal and external stakeholders.
                                    <br />
                                    <br />
                                    When she is not coding...
                                    <br />
                                    She enjoys traveling, cooking, diving, and doing weight training.
                                    <br />
                                    She loves animation, manga, and aquarium.
                                    <br />
                                    <br />
                                    Thank you for your time. Feel free to connect her on Linkedin.
                                </p>
                                <br />
                                <ul className="list-inline dev-icons">
                                    <li className="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">Check out my GitHub</Tooltip>}
                                        >
                                            <a href="https://github.com/roukell" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/github.png" alt='github' /></a>
                                        </OverlayTrigger>
                                    </li>
                                    <li className="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">Check out my LinkedIn</Tooltip>}
                                        >
                                            <a href="https://www.linkedin.com/in/yilingmelodylo/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt='linkedin' /></a>
                                        </OverlayTrigger>
                                    </li>
                                    <li className="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">Send me an email</Tooltip>}
                                        >
                                            <a href="mailto:yiling.melody.lo@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/cute-clipart/64/000000/email.png" alt='email' /></a>
                                        </OverlayTrigger>
                                    </li>
                                    <li className="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">View my resume</Tooltip>}
                                        >
                                            <a href="https://docs.google.com/document/d/1YKEJuD0zNYsoyLNUBiFoy4sHzG5fs56CXmOLfGj6l8w/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/office/64/000000/open-resume.png" alt='resume' /></a>
                                        </OverlayTrigger>
                                    </li>
                                </ul>

                                <section className="resume-section" id="skills">
                                    <div className="resume-section-content">
                                        <h3 className="subheading mb-3">Programming Languages, Tools and OS</h3>
                                        <ul className="list-inline dev-icons">
                                            <li className="list-inline-item">
                                                <img src="https://img.icons8.com/color/48/000000/html-5.png" alt='HTML 5' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/css3.png" alt='CSS 3' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/sass.png" alt='Sass' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt='jQuery' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/react-native.png" alt='React' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='Node.js' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='Bootstrap' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/npm.png" alt='npm' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt='MySQL' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt='MongoDB' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/nolan/64/api-settings.png" alt='API' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/json--v1.png" alt='JSON' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/heroku.png" alt='Heroku' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/trello.png" alt='Trello' /></li>

                                            {/* start from here */}
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/jira.png" alt='Jira' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/confluence--v2.png" alt='Confluence' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt='Java' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/fluency/48/000000/selenium-test-automation.png" alt='Selenium' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt='AWS' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/plasticine/48/000000/bash.png" alt='Bash' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/docker.png" alt='Docker' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/linux.png" alt='Linux' /></li>
                                            <li className="list-inline-item"><img src="https://img.icons8.com/color/48/000000/microsoft.png" alt='Windows' /></li>
                                        </ul>

                                        <ul className="fa-ul mb-0">
                                            <li>
                                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                                CI/CD
                                            </li>
                                            <li>
                                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                                Automation
                                            </li>
                                            <li>
                                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                                Infrastructure as code
                                            </li>
                                            <li>
                                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                                Cloud
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;
