  
import Iconic from "../models/iconic.js";

export const getIconics = async (req, res) => {
  try {
  const iconic = await iconic.find();
  res.json(iconic);
} catch (error) {
  console.log(error);
  res.status(500).json({ error: error.message });
  }
};

export const getIconic = async (req, res) => {
  try {
    const getAIconic = await Iconic.findById(req.params.id);

    if (getAIconic) {
      return res.json(getAIconic);
    }

    res.status(400).json({ message: "iconic not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createIconic = async (req, res) => {
try {
    const iconic = new iconic(req.body);
    await iconic.save();
    res.status(201).json(iconic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateIconic = async (req, res) => {
  const { id } = req.params;
  const iconic = await iconic.findByIdAndUpdate(id, req.body);
  res.status(200).json(iconic);
};

export const deleteIconic = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Iconic.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("iconic deleted!");
    }

    throw new Error("iconic not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
