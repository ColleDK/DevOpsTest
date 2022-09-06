import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const element = screen.getAllByRole("heading");

    element.forEach(e => {
            expect(e).toBeInTheDocument();
        }
    )
});
