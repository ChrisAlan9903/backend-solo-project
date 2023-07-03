const Circle = require("../models/Circles");
const CircleMembers = require("../models/CircleMembers");

async function getAllCircle(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    //⚠️⚠️to be updated
    if (role === "admin") {
      const circles = await Circle.findAll();
      res.json(circles);
    } else {
      const circleMembers = await CircleMembers.findAll({
        where: {
          memberId: parseInt(req.user.id),
        },
        include: ["Circles"],
      });

      const circles = circleMembers.map((circleMember) => {
        return circleMember.Circles;
      });
      res.json(circles);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createCircle(req, res) {
  try {
    const circle = await Circle.create({
        ...req.body});
    res.json(circle);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateCircle(req, res) {
  // TODO: add authorization here--⚠️⚠️
  if (role !== "admin" || role !== "creator") {
    return `Unauthorized`;
  } else {
    try {
      const updateCircle = await Circle.update(req.body, {
        where: {
          id: parseInt(req.params.circleId),
        },
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

async function deleteCircle(req, res) {
    try {
  // TODO: add authorization here--⚠️⚠️
        
        const deletedCircle = await Circle.destroy({
            where:{
                id: parseInt(req.params.circleId)
            }
        })
        res.json(deletedCircle)

    } catch (error) {
      res.status(500).json({ error: error });
        
    }
}

module.exports = {
    getAllCircle,
    createCircle,
    updateCircle,
    deleteCircle,
}
