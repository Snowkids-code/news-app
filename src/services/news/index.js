import ourApi from "../../endpoints";

const getHomeNews = async () => {
  const response = await ourApi.news.getHomepageNews();
  return response;
};

const getCategoryNews = async (id) => {
  const response = await ourApi.news.getCategoryNews(id);
  return response;
};

const NewsService = {
  getHomeNews,
  getCategoryNews
};

export default NewsService;
