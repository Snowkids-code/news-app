import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NewsService from "../services/news";

const initialState = {
  news: [],
  sportsNews: [],
  artsNews: [],
  autoNews: [],
  booksNews: [],
  businessNews: [],
  travelNews: [],
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
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get sports news
export const getSportsNews = createAsyncThunk(
  `${modulePrefix}/get-sports-news`,
  async () => {
    try {
      const response = await NewsService.getSportsNews();
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get arts news
export const getArtsNews = createAsyncThunk(
  `${modulePrefix}/get-arts-news`,
  async () => {
    try {
      const response = await NewsService.getArtsNews();
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get auto news
export const getAutoNews = createAsyncThunk(
  `${modulePrefix}/get-auto-news`,
  async () => {
    try {
      const response = await NewsService.getAutoNews();
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get books news
export const getBooksNews = createAsyncThunk(
  `${modulePrefix}/get-books-news`,
  async () => {
    try {
      const response = await NewsService.getBooksNews();
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get business news
export const getBusinessNews = createAsyncThunk(
  `${modulePrefix}/get-business-news`,
  async () => {
    try {
      const response = await NewsService.getBusinessNews();
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

//get travel news
export const getTravelNews = createAsyncThunk(
  `${modulePrefix}/get-travel-news`,
  async () => {
    try {
      const response = await NewsService.getTravelNews();
      console.log(response);
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
      .addCase(getSportsNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getSportsNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.sportsNews = action.payload;
      })
      .addCase(getSportsNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getArtsNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getArtsNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.artsNews = action.payload;
      })
      .addCase(getArtsNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getAutoNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getAutoNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.autoNews = action.payload;
      })
      .addCase(getAutoNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getBooksNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getBooksNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.booksNews = action.payload;
      })
      .addCase(getBooksNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getBusinessNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getBusinessNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.businessNews = action.payload;
      })
      .addCase(getBusinessNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getTravelNews.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getTravelNews.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.travelNews = action.payload;
      })
      .addCase(getTravelNews.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      });
  },
});

export default newsSlice.reducer;
