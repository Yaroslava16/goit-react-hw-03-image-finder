const API_KEY = "21253652-b0771bb4bc82300d1ee8677db";

const fetchImg = async ({ searchQuery, page }) => {
  return await fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.json());
};

const ApiServices = {
  fetchImg,
};
export default ApiServices;
