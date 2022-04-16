import api from "./apiConfig";

export const getIconics = async () => {
  try {
    const response = await api.get("/iconic");
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getIconic = async (id) => {
  try {
    const response = await api.get(`/iconic/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createIconic = async (iconic) => {
  try {
    const response = await api.post("/iconic", iconic);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateIconic = async (id, iconic) => {
  try {
    const response = await api.put(`/iconic/${id}`, iconic);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteIconic = async (id) => {
  try {
    const response = await api.delete(`/iconic/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

