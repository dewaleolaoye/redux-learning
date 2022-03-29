import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDogs = createAsyncThunk(
  "dog/fetchDogs",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all", {
        method: "GET",
      });

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  dog: {
    status: "idle",
    data: [],
    errorMessage: "",
  },
};

export const dogSlice = createSlice({
  initialState,
  name: "dog",

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDogs.pending, (state, payload) => {
      state.dog.status = "loading";
    });

    builder.addCase(fetchDogs.fulfilled, (state, { payload }) => {
      // console.log(payload, "PAYLOAD FULFILLED");
      state.dog.status = "fulfilled";
      state.dog.data = payload;
    });

    builder.addCase(fetchDogs.rejected, (state) => {
      state.dog.status = "error";
    });
  },
});

export const { reducer: dogReducer } = dogSlice;
