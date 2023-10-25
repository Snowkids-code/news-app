import axios from "axios";

let ourApi = {
  news: {
    getHomepageNews: async () =>
      await axios.post("http://localhost:400", {
        category: "home",
      }),
  },
};

export default ourApi;
