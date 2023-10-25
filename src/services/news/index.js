import ourApi from "../../endpoints";

const getHomeNews = async () => {
  const response = await ourApi.news.getHomepageNews();
  return response;
};

const getSportsNews = async () => {
  const response = await ourApi.news.getSportsNews();
  return response;
};

const getArtsNews = async () => {
  const response = await ourApi.news.getArtsNews();
  return response;
};

const getAutoNews = async () => {
  const response = await ourApi.news.getAutoNews();
  return response;
};

const getBooksNews = async () => {
  const response = await ourApi.news.getBooksNews();
  return response;
};

const getBusinessNews = async () => {
  const response = await ourApi.news.getBusinessNews();
  return response;
};

const getTravelNews = async () => {
  const response = await ourApi.news.getTravelNews();
  return response;
};

const NewsService = {
  getHomeNews,
  getSportsNews,
  getArtsNews,
  getAutoNews,
  getBooksNews,
  getBusinessNews,
  getTravelNews,
};

export default NewsService;
