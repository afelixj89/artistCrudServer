import Label from "../models/Label.js";

// get all the Labels
export const getAllItems = async (req, res) => {
  try {
    const items = await Label.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get Label by id
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const item = await Label.findOne({"id": id});
    
    if (item) {
      return res.json(item);
    }

    res.status(404).json({ message: `Label not found! ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get Label by name
export const getItemByName = async (req, res) => {
    try {
      const { name } = req.params;
      const item = await Label.findOne({"name": name});
  
      if (item) {
        return res.json(item);
      }
  
      res.status(404).json({ message: "Label not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

// create a new Label
export const createItem = async (req, res) => {
  try {
    const item = new Label(req.body);
    await item.save();

    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// update an existing Label by ID
export const updateItemById = async (req, res) => {
  try {
    const { id } = req.params

    const item = await Label.findOneAndUpdate({"id": id}, req.body)

    res.status(201).json(item)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

// delete Label by ID
export const deleteItemByMongoId = async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await Label.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Label Deleted")
    }

    throw new Error("Item not found.")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
