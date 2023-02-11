import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos/?per_page=40",
    {
      headers: {
        Authorization: "Client-ID T8zr9GPmdK1j-DBH4bYYBhd5xpCFdWB86-vJMB79BJg",
      },
      params: {
        query: term,
      },
    }
  );
  return response.data.results;
};

export default searchImages;
