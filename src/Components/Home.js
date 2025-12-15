import React, { useCallback } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const HomePage = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<>
			<Jumbotron fluid>
				<Container fluid className='jumbotronContainer'>
					<div className='jumbotronDiv'>
						<Particles
							id="heroParticles"
							init={particlesInit}
							options={{
								particles: {
									number: {
										value: 300,
										density: {
											enable: true,
											value_area: 1500
										}
									},
									links: {
										enable: true,
										opacity: 0.03
									},
									move: {
										direction: 'right',
										speed: 0.3
									},
									size: {
										value: 1.5
									},
									opacity: {
										animation: {
											enable: true,
											speed: 1,
											minimumValue: 0.05
										}
									}
								},
								interactivity: {
									events: {
										onClick: {
											enable: true,
											mode: 'push'
										}
									},
									modes: {
										push: {
											quantity: 1
										}
									}
								},
								detectRetina: true
							}}
						/>
						<h1>DevOps Engineer with web development, automation, and AWS experience</h1>
					</div>
				</Container>
			</Jumbotron>
		</>
	);
};

export default HomePage;
