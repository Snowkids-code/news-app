import axios from "axios";

let ourApi = {
  news: {
    getHomepageNews: async () =>
      await axios.post("http://localhost:400", {
        category: "home",
      }),
    getCategoryNews: async (category) =>
      await axios.post("http://localhost:400", {
        category: category,
      }),
  },
};

export default ourApi;
