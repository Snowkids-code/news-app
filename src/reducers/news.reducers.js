import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NewsService from "../services/news";

const initialState = {
  news: [],
  categoryNews: [],
  loading: "idle",
  error: null,
};

let modulePrefix = "news";

//get home news
export const getHomeNews = createAsyncThunk(
  `${modulePrefix}/get-home-news`,
  async () => {
    try {
      const response = await NewsService.getHomeNews();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get category news
export const getCategoryNews = createAsyncThunk(
  `${modulePrefix}/get-category-news`,
  async (id) => {
    try {
      const response = await NewsService.getCategoryNews(id);
      // console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getHomeNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getHomeNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.news = action.payload;
      })
      .addCase(getHomeNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getCategoryNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getCategoryNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.categoryNews = action.payload;
      })
      .addCase(getCategoryNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
  },
});

export default newsSlice.reducer;
