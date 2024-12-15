import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2500');
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
});
// export const fetchImg = createAsyncThunk('data/fetchImg', async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
//     const data = await response.json();
//     return response;
//   } catch (error) {
//     console.error("API Fetch Error:", error);
//     return [];
//   }
// });

const pokeDataSlice = createSlice({
  name: 'pokeData',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    retries: 0,
  },
  reducers: {
    resetRetries(state) {
      state.retries = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.retries = 0; // Reset retries on success
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.retries += 1; // Increment retries
      });
  },
});

// const pokeImgSlice = createSlice({
//   name: 'pokeImg',
//   initialState: {
//     items: "",
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//     retries: 0,
//   },
//   reducers: {
//     resetRetries(state) {
//       state.retries = 0;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchImg.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchImg.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//         state.retries = 0; // Reset retries on success
//       })
//       .addCase(fetchImg.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//         state.retries += 1; // Increment retries
//       });
//   },
// });

export const { resetRetries: resetDataRetries } = pokeDataSlice.actions;
// export const { resetRetries: resetImgRetries } = pokeImgSlice.actions;
export const pokeDataReducer = pokeDataSlice.reducer;
// export const pokeImgReducer = pokeImgSlice.reducer;
