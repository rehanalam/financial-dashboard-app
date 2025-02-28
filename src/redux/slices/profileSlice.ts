import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export enum ProfileStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
  SUCCEEDED = 'succeeded',
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  password?: string;
  preferences?: string;
}

export interface ProfileState {
  user: User | null;
  status: ProfileStatus;
}

const initialState: ProfileState = {
  user: null,
  status: ProfileStatus.IDLE,
};

const mockUser: User = {
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
  password: 'password123',
  preferences: 'dark-mode',
};

export const fetchProfile = createAsyncThunk<User>('profile/fetchProfile', async () => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 100);
  });
});

export const updateProfile = createAsyncThunk<User, Partial<User>>('profile/updateProfile', async (userData) => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ ...mockUser, ...userData });
    }, 100);
  });
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = ProfileStatus.LOADING;
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = ProfileStatus.SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      });
  },
});

export default profileSlice.reducer;
