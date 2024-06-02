import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './components/Todo';

describe('Todo Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders the Todo component', () => {
        render(<Todo />);
        expect(screen.getByText('Add Todo')).toBeInTheDocument();
        expect(screen.getByText('All Tasks')).toBeInTheDocument();
        expect(screen.getByText('Active Tasks')).toBeInTheDocument();
        expect(screen.getByText('Completed Tasks')).toBeInTheDocument();
    });

    test('add a new todo', () => {
        render(<Todo />);
        const input = screen.getByRole('textbox');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render(<Todo />);
        const input = screen.getByRole('textbox');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    test('filters todos', () => {
        render(<Todo />);
        const input = screen.getByRole('textbox');
        const addButton = screen.getByText('Add Todo');
        const allButton = screen.getByText('All Tasks');
        const pendingButton = screen.getByText('Active Tasks');
        const completedButton = screen.getByText('Completed Tasks');

        fireEvent.change(input, { target: { value: 'Active Todo' } });
        fireEvent.click(addButton);
        fireEvent.change(input, { target: { value: 'Completed Todo' } });
        fireEvent.click(addButton);

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[1]);

        fireEvent.click(allButton);
        expect(screen.getByText('Active Todo')).toBeInTheDocument();
        expect(screen.getByText('Completed Todo')).toBeInTheDocument();

        fireEvent.click(pendingButton);
        expect(screen.getByText('Active Todo')).toBeInTheDocument();
        expect(screen.queryByText('Completed Todo')).toBeNull();

        fireEvent.click(completedButton);
        expect(screen.queryByText('Active Todo')).toBeNull();
        expect(screen.getByText('Completed Todo')).toBeInTheDocument();
    });
});
