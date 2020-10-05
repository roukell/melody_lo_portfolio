import React, { useState } from 'react';
import { Container, Col, Row, Carousel, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>

                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-90"
                            src='https://raw.githubusercontent.com/roukell/temp_portfolio/master/public/img/portfolio.jpg'
                            alt="portfolioImg"
                        />
                        <Carousel.Caption>
                            <p style={{color:'black'}}>Melody at a shopping mall</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-90"
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
                                    Melody is a Full Stack Web Developer experience in designing and developing web applications by using React. She always pay high attention to detail and have created several functional websites with her proven problem solving skills.
                                    <br />
                                    <br />
                                    She has strong time management skills with the ability to prioritise workload in order to meet strict deadlines. Melody is also experienced in communicating and maintaining relationships with key internal and external stakeholders.
                                    <br />
                                    <br />
                                    Melody is highly motivated to develop interactive websites that enhances the user experience by providing a clean, simple and intuitive interface. She has recently developed an application to solve employee directory problems.
                                    <br />
                                    <br />
                                    Her goal to develop creative and functional website experiences for people, utilising latest technologies and innovative problem solving mindset.
                                    <br />
                                    <br />
                                    When she is not coding...
                                    <br />
                                    She enjoys traveling, cooking, diving, and doing weight training.
                                    <br />
                                    She loves animation, digital and graphic design, and aquarium.
                                    <br />
                                    <br />
                                    Thank you for your time! Feel free to connect her on Linkedin!
                                </p>
                                <br />
                                <ul class="list-inline dev-icons">
                                    <li class="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">Check out my GitHub</Tooltip>}
                                        >
                                            <a href="https://github.com/roukell" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/github.png" alt='github' /></a>
                                        </OverlayTrigger>
                                    </li>
                                    <li class="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">Check out my LinkedIn</Tooltip>}
                                        >
                                            <a href="https://www.linkedin.com/in/yilingmelodylo/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt='linkedin' /></a>
                                        </OverlayTrigger>
                                    </li>
                                    <li class="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">Send me an email</Tooltip>}
                                        >
                                            <a href="mailto:yiling.melody.lo@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/cute-clipart/64/000000/email.png" alt='email' /></a>
                                        </OverlayTrigger>
                                    </li>
                                    <li class="list-inline-item">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={<Tooltip id="button-tooltip-2">View my resume</Tooltip>}
                                        >
                                            <a href="https://docs.google.com/document/d/1YKEJuD0zNYsoyLNUBiFoy4sHzG5fs56CXmOLfGj6l8w/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/office/64/000000/open-resume.png" alt='resume' /></a>
                                        </OverlayTrigger>
                                    </li>
                                </ul>

                                <section class="resume-section" id="skills">
                                    <div class="resume-section-content">
                                        <h3 class="subheading mb-3">Programming Languages & Tools</h3>
                                        <ul class="list-inline dev-icons">
                                            <li class="list-inline-item">
                                                <img src="https://img.icons8.com/color/48/000000/html-5.png" alt='html5' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/css3.png" alt='css3' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/javascript.png" alt='javascript' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt='jquery' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/react-native.png" alt='react' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='nodejs' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='bootstrap' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/npm.png" alt='npm' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt='mysql' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt='mongodb' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/nolan/64/api-settings.png" alt='api' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/json--v1.png" alt='json' /></li>
                                            <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/heroku.png" alt='heroku' /></li>
                                        </ul>

                                        <ul class="fa-ul mb-0">
                                            <li>
                                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                                Mobile-First, Responsive Design
                                            </li>
                                            <li>
                                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                                Cross Browser Testing & Debugging
                                            </li>
                                            <li>
                                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                                Cross Functional Teams
                                            </li>
                                            <li>
                                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                                Relational and Non-relational Database
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
