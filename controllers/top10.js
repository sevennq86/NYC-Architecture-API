import Top10 from "../models/top10.js";

export const getTop10s = async (req, res) => {
  try {
    const top10 = await Top10.find();
    res.json(top10);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const getTop10 = async (req, res) => {};
export const createTop10 = async (req, res) => {};
export const updateTop10 = async (req, res) => {};
export const deleteTop10 = async (req, res) => { };


