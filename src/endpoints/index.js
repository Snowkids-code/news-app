import axios from "axios";

let ourApi = {
  news: {
    getHomepageNews: async () =>
      await axios.post("http://localhost:400", {
        category: "home",
      }),
    getSportsNews: async () =>
      await axios.post("http://localhost:400", {
        category: "sports",
      }),
    getArtsNews: async () =>
      await axios.post("http://localhost:400", {
        category: "arts",
      }),
    getAutoNews: async () =>
      await axios.post("http://localhost:400", {
        category: "automobiles",
      }),
    getBooksNews: async () =>
      await axios.post("http://localhost:400", {
        category: "books",
      }),
    getBusinessNews: async () =>
      await axios.post("http://localhost:400", {
        category: "business",
      }),
    getTravelNews: async () =>
      await axios.post("http://localhost:400", {
        category: "travel",
      }),
  },
};

export default ourApi;
