import Release from "../models/Release.js";

// get all the Releases
export const getAllItems = async (req, res) => {
  try {
    const items = await Release.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get Release by id
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const item = await Release.findOne({"id": id});
    
    if (item) {
      return res.json(item);
    }

    res.status(404).json({ message: `Release not found! ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get Release by name
export const getItemByTitle = async (req, res) => {
    try {
      const { name } = req.params;
      const item = await Release.findOne({"title": title});
  
      if (item) {
        return res.json(item);
      }
  
      res.status(404).json({ message: "Release not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

// create a new Release
export const createItem = async (req, res) => {
  try {
    const item = new Release(req.body);
    await item.save();

    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// update an existing Release by ID
export const updateItemById = async (req, res) => {
  try {
    const { id } = req.params

    const item = await Release.findOneAndUpdate({"id": id}, req.body)

    res.status(201).json(item)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

// delete Release by ID
export const deleteItemByMongoId = async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await Release.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Release Deleted")
    }

    throw new Error("Item not found.")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
