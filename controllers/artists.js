import Artist from "../models/Artist.js";

// get all the Artists
export const getArtists = async (req, res) => {
  try {
    const items = await Artist.find();
    console.log(items);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// // get Artist by id
export const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Artist.findById( id );
    if (item) {
      return res.json(item);
    }
    res.status(404).json({ message: `Artist not found! ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// // get Artist by name
export const getItemByName = async (req, res) => {
  try {
    const { name } = req.params;
    const item = await Artist.findOne({ name: name });

    if (item) {
      return res.json(item);
    }

    res.status(404).json({ message: "Artist not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// // create a new Artist
export const createItem = async (req, res) => {
  try {
    const item = new Artist(req.body);
    await item.save();

    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// // update an existing Artist by ID
export const updateItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Artist.findByIdAndUpdate( id , req.body);
    console.log(req.body);
    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// // delete Artist by ID
export const deleteItemByMongoId = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Artist.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Artist Deleted");
    }

    throw new Error("Item not found.");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
