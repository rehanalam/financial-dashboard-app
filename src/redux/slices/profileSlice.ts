import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  preferences?: string;
}

interface ProfileState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProfileState = {
  user: null,
  status: 'idle',
};

// Mocked user data
const mockUser: User = {
  id: '123',
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  preferences: 'dark-mode',
};

// Fetch profile (mocked)
export const fetchProfile = createAsyncThunk<User>('profile/fetchProfile', async () => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 500); // Simulate network delay
  });
});

// Update profile (mocked)
export const updateProfile = createAsyncThunk<User, Partial<User>>('profile/updateProfile', async (userData) => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ ...mockUser, ...userData });
    }, 500); // Simulate network delay
  });
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      });
  },
});

export default profileSlice.reducer;
