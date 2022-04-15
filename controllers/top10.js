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
export const getTop10 = async (req, res) => {
  try {
    const { id } = req.params;
    const top10 = await Top10.findById(id);

    if (top10) {
      return res.json(top10);
    }

    res.status(400).json({ message: "Top10 not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createTop10 = async (req, res) => {
  try {
    const top10 = new Top10(req.body);
    await top10.save();
    res.status(201).json(top10);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateTop10 = async (req, res) => {
  const { id } = req.params;
  const top10 = await Top10.findByIdAndUpdate(id, req.body);
  res.status(200).json(top10);
};

export const deleteTop10 = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Top10.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Top10 deleted!");
    }

    throw new Error("Top10 not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


