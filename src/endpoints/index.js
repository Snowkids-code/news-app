import axios from "axios";

let ourApi = {
  news: {
    getHomepageNews: async () =>
      await axios.post("http://localhost:6000", {
        category: "home",
      }),
  },
};

export default ourApi;
