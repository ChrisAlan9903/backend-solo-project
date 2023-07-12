const Messages = require("../models/Messages");

// GET request here
async function getAllMessages(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    console.log(`CP 1`);
    const messages = await Messages.findAll();
    
    console.log(`messages:`, messages);
    console.log(`CP 2`);

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getAllMessagesByUser(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const senderId = req.params.senderId;
    console.log(`senderId:`, senderId);

    const messages = await Messages.findAll({
      where: {
        senderId: senderId,
      },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getMessageById(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const message = await Messages.findByPk(parseInt(req.params.messageId));
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// CREATE request here
async function createMessage(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const message = await Messages.create({
      ...req.body,
    });
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// UPDATE request here
async function updateMessage(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const updatedMessage = await Messages.update(req.body, {
      where: {
        id: parseInt(req.params.messageId),
      },
    });
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// DELETE request here
async function deleteMessage(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const deletedMessage = await Messages.destroy({
      where: {
        id: parseInt(req.params.messageId),
      },
    });
    res.json(deletedMessage);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllMessages,
  getAllMessagesByUser,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
};
