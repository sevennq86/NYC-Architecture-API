import api from "./apiConfig";

export const getTop10s = async () => {
  try {
    const response = await api.get("/top10");
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTop10 = async (id) => {
  try {
    const response = await api.get(`/top10/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};