import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbars = () => (
	<aside className='sideNavbar'>
		<div>
			<p className='navBrand'>Melody Lo</p>
			<p className='navSubtitle'>AWS DevOps Engineer</p>
			<Nav className='flex-column navLinks'>
				<Nav.Link href='#project'>Projects</Nav.Link>
				<Nav.Link href='#about'>About</Nav.Link>
			</Nav>
		</div>
		<div className='navFooter'>
			<small>© {new Date().getFullYear()} Melody Lo</small>
		</div>
	</aside>
);

export default Navbars;
