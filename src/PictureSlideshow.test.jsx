import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PictureSlideshow from './PictureSlideshow';

// describe
// it
// test
// expect

describe('Picture slide show tests', () => {

    test('that true equals true', () => {
        const numbers = 2;
        expect(numbers).toStrictEqual(2);
    })

    test('should render picture component', () => {
        const mockData = [{
            imageUrl: 'https://ychef.files.bbci.co.uk/1600x900/p07zmtzk.webp',
            description: 'Helen of Troy'
        }]
        render(<PictureSlideshow pictures={mockData} />)
        const imgDescription = screen.getByText(/Helen of Troy/i);
        expect(imgDescription).toBeInTheDocument();
    })

    test('should show iterator', () => {
        const mockData = [{
            imageUrl: 'https://ychef.files.bbci.co.uk/1600x900/p07zmtzk.webp',
            description: 'Helen of Troy'
        }]
        render(<PictureSlideshow pictures={mockData} />)
        const imgDescription = screen.getByText('1 of 1');
        expect(imgDescription).toBeInTheDocument();
    })

    test('should update iterator', () => {
        const mockData = [{
            imageUrl: 'https://ychef.files.bbci.co.uk/1600x900/p07lkjkjkjkzmtzk.webp',
            description: 'Helen of Troy'
        }, {
            imageUrl: 'https://ychef.files.bbci.co.uk/1600x900/p07zmtzk.webp',
            description: 'Helen of Troy2'
        },
        {
            imageUrl: 'https://ychef.files.bbci.co.uk/1600x900/p0iui7zmtzk.webp',
            description: 'Helen of Troy3'
        }]
        render(<PictureSlideshow pictures={mockData} />)
        const imgDescription = screen.getByText('1 of 3');
        expect(imgDescription).toBeInTheDocument();

        // Note: this name is the display text of the button, in our case it's the simple > character
        // if it was a word like "click me" the name would be that
        // it is always a good idea to target a specific element not the nth element in an array
        // that is a far more fragile way of finding elements
        const advanceButton = screen.getByRole('button', { name: '>' });
        const goBackButton = screen.getByRole('button', { name: '<' });
        userEvent.click(advanceButton)

        const imgDescription2 = screen.getByText('2 of 3');
        expect(imgDescription2).toBeInTheDocument();

        userEvent.click(advanceButton)

        const imgDescription3 = screen.getByText('3 of 3');
        expect(imgDescription3).toBeInTheDocument();

        userEvent.click(goBackButton);

        const imgDescription4 = screen.getByText('2 of 3');
        expect(imgDescription4).toBeInTheDocument();
    })
})
