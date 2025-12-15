import React from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Navbars = () => (
	<aside className='sideNavbar'>
		<div>
			<p className='navBrand'>Melody Lo</p>
			<p className='navSubtitle'>DevOps Engineer</p>
			<Nav className='flex-column navLinks'>
				<Nav.Link href='#project'>Projects</Nav.Link>
				<Nav.Link href='#about'>About</Nav.Link>
			</Nav>
			<div className='navContacts'>
				<div className='navContactIcons'>
					<OverlayTrigger placement='top' delay={{ show: 200, hide: 150 }} overlay={<Tooltip id='nav-github'>GitHub</Tooltip>}>
						<a href='https://github.com/roukell' target='_blank' rel='noopener noreferrer'>
							<img className='navContactIcon' src='https://img.icons8.com/nolan/64/github.png' alt='GitHub icon' />
						</a>
					</OverlayTrigger>
					<OverlayTrigger placement='top' delay={{ show: 200, hide: 150 }} overlay={<Tooltip id='nav-linkedin'>LinkedIn</Tooltip>}>
						<a href='https://www.linkedin.com/in/melodylo-in/' target='_blank' rel='noopener noreferrer'>
							<img className='navContactIcon' src='https://img.icons8.com/cute-clipart/64/000000/linkedin.png' alt='LinkedIn icon' />
						</a>
					</OverlayTrigger>
				</div>
			</div>
		</div>
		<div className='navFooter'>
			<small>© {new Date().getFullYear()} Melody Lo</small>
		</div>
	</aside>
);

export default Navbars;
