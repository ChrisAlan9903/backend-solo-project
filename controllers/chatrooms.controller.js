const Chatrooms = require("../models/Chatrooms");

// GET request here
async function getAllChatrooms(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const chatrooms = await Chatrooms.findAll();
    res.json(chatrooms);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getChatroomById(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const chatroom = await Chatrooms.findByPk(parseInt(req.params.chatroomId));
    res.json(chatroom);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// CREATE request here
async function createChatrooms(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const chatroom = await Chatrooms.create({
      ...req.body,
    });
    res.json(chatroom);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// UPDATE request here
async function updateChatrooms(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const updatedChatroom = await Chatrooms.update(req.body, {
      where: {
        id: parseInt(req.params.chatroomId),
      },
    });
    res.json(updatedChatroom);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// DELETE request here
async function deleteChatrooms(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const deletedChatroom = await Chatrooms.destroy({
      where: {
        id: parseInt(req.params.chatroomId),
      },
    });
    res.json(deletedChatroom);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllChatrooms,
  getChatroomById,
  createChatrooms,
  updateChatrooms,
  deleteChatrooms,
};
