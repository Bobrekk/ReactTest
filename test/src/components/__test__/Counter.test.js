import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

beforeEach(() => {
    render(<Counter/>)
})

test("Test Secret Message Is Initially Empty", () => {
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveValue('');
})

test("Test Input Change", () => {
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveValue('');

    userEvent.type(inputEl, "Bu bir sır :D");

    expect(inputEl).toHaveValue('Bu bir sır :D');
})

test("Initially Checkbox is not checked", () => {
    const checkEl = screen.getByRole('checkbox');

    expect(checkEl).not.toBeChecked();
})

test("Checkbox works correctly", () => {
    const checkEl = screen.getByRole('checkbox');

    expect(checkEl).not.toBeChecked();

    userEvent.click(checkEl);

    expect(checkEl).toBeChecked();
})













/*test('Counter is initially 0', () => {
    const counterEl = screen.getByTestId('counter');

    expect(counterEl).toHaveTextContent(0);
})

test('Increment button works correctly', () => {
    const counterEl = screen.getByTestId('counter');

    const incrementBtn = screen.getByRole('button',
    {
        name: /increment/i,
    })

    expect(counterEl).toHaveTextContent(0);

    userEvent.click(incrementBtn);

    expect(counterEl).toHaveTextContent(1);
})*/