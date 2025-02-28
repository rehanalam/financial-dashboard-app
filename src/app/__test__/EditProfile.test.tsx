import profileReducer, { ProfileState, ProfileStatus } from '@/redux/slices/profileSlice';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';

import EditProfile from '../EditProfile';

// Mock initial state
const preloadedState: { profile: ProfileState } = {
  profile: {
    user: {
      id: '123',
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      dateOfBirth: '1990-01-01',
      presentAddress: 'New York, USA',
      permanentAddress: 'New York, USA',
      city: 'New York',
      postalCode: '10001',
      country: 'USA',
    },
    status: ProfileStatus.IDLE,
  },
};

// Configure a test store
const mockStore = configureStore({
  reducer: {
    profile: profileReducer,
  },
  preloadedState,
});

describe('EditProfile Component', () => {
  test('renders form fields correctly', async () => {
    render(
      <Provider store={mockStore}>
        <EditProfile />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/User Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    });
  });

  test('allows user to edit fields', async () => {
    render(
      <Provider store={mockStore}>
        <EditProfile />
      </Provider>
    );
    await waitFor(() => {
      const nameInput = screen.getByLabelText(/Your Name/i);
      fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
      expect(nameInput).toHaveValue('Jane Doe');
    });
  });

  test('displays loading state when fetching profile', async () => {
    const loadingState = {
      profile: {
        ...preloadedState.profile,
        status: ProfileStatus.LOADING,
      },
    };

    const loadingStore = configureStore({
      reducer: { profile: profileReducer },
      preloadedState: loadingState,
    });

    render(
      <Provider store={loadingStore}>
        <EditProfile />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });
  });

  test('handles form submission', async () => {
    render(
      <Provider store={mockStore}>
        <EditProfile />
      </Provider>
    );

    await waitFor(() => {
      const nameInput = screen.getByLabelText(/Your Name/i);
      const submitButton = screen.getByRole('button', { name: /Save/i });

      fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
      fireEvent.click(submitButton);

      expect(nameInput).toHaveValue('Jane Doe');
    });
  });
});
