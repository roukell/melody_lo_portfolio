import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Particles from 'react-particles-js';

const HomePage = () => (
	<>
		<Jumbotron fluid >
			<Container fluid className='jumbotronContainer'>
				<div className='jumbotronDiv'>
					<Particles
						params={{
							"particles": {
								"number": {
									"value": 300,
									"density": {
										"enable": true,
										"value_area": 1500
									}
								},
								"line_linked": {
									"enable": true,
									"opacity": 0.03
								},
								"move": {
									"direction": "right",
									"speed": 0.3
								},
								"size": {
									"value": 1.5
								},
								"opacity": {
									"anim": {
										"enable": true,
										"speed": 1,
										"opacity_min": 0.05
									}
								}
							},
							"interactivity": {
								"events": {
									"onclick": {
										"enable": true,
										"mode": "push"
									}
								},
								"modes": {
									"push": {
										"particles_nb": 1
									}
								}
							},
							"retina_detect": true
						}} />
					<h1>Full Stack Web Developer experience in
             <br />
            designing and developing web applications
            <br />
					</h1>

				</div>
			</Container>
		</Jumbotron>
	</>

);

export default HomePage;
