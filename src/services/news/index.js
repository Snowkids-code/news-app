import ourApi from "../../endpoints";

const getHomeNews = async () => {
  const response = await ourApi.news.getHomepageNews();
  return response;
};

const NewsService = {
    getHomeNews,
};

export default NewsService;
