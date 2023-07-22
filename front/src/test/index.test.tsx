import { render, screen } from '@testing-library/react';
import Footer from '../layouts/Footer';

describe('Footer component', () => {
	test('renders Footer and checks text content', () => {
		render(<Footer />);
		const footerElement = screen.getByText('(C) 2023 CoreTech');
		expect(footerElement).toBeInTheDocument();
	});
});
