const Circle = require("../models/Circles");
const CircleMembers = require("../models/CircleMembers");

async function getAllCircle(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    //⚠️⚠️to be updated

    const circles = await Circle.findAll();
    console.log(`CP 2`);
    res.json(circles);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
async function getCirclesForUser(req, res) {
  try {
    //TODO: add authorization here
    //Permission: User can only get Circles that they are involved

    const creatorId = parseInt(req.params.creatorId);
    console.log(`creatorId:`, creatorId);

    const circlesObject = await CircleMembers.findAll({
      where: {
        memberId: creatorId,
      },
      attributes: ["circleId"],
    });

    // PART: converting the data object to get just the id of circles
    const circleIds = [];
    for (const { dataValues } of circlesObject) {
      const { circleId } = dataValues;
      circleIds.push(circleId);
    }
    console.log(`list of circles 3:`, circleIds);

    const circleList = await Circle.findAll({
      where: {
        id: circleIds,
      },
    });

    res.json(circleList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createCircle(req, res) {
  try {
    console.log(`req user id:`, req.user.id);

    const circle = await Circle.create({
      ...req.body,
      creatorId: req.user.id,
    });

    const { id } = circle;
    console.log(`CREATED CIRCLE: `, id);

    const addCreatorAsMember = await CircleMembers.create({
      memberId: req.user.id,
      circleId: id,
      memberRole: "circle_admin",
    });

    console.log(`addCreatorAsMember:`, addCreatorAsMember);
    res.json([circle, addCreatorAsMember]);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
// Note for createCircle: can add extra feature where admin can create circle for other people as well. For now the creatorId for a circle is based on solely on the user's id that created the circle.

async function updateCircle(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    // Permission: User can only update their own Circle

    const userId = req.user.id;
    const circleId = parseInt(req.params.circleId);

    console.log(circleId);

    const getCircle = await Circle.findByPk(circleId);
    const { creatorId } = getCircle;

    console.log(`gottencircle:`, getCircle);
    console.log(` destructured creatorId:`, creatorId);

    if (req.user.role !== "admin") {
      if (userId !== creatorId)
        throw `Circle update DENIED: Not your Circle b*tch`;
    }

    const updatedCircle = await Circle.update(
      { ...req.body, creatorId: creatorId },
      {
        where: {
          id: parseInt(req.params.circleId),
        },
      }
    );
    res.json(updatedCircle);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteCircle(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    // Permission: User can only update their own Circle

    const userId = req.user.id;
    const circleId = parseInt(req.params.circleId);

    console.log(circleId);

    const getCircle = await Circle.findByPk(circleId);
    console.log(`CP: getCircle =`, getCircle ? "exist" : "not exist");

    if (!getCircle) throw `Circle does not Exist`;

    const { creatorId } = getCircle;

    console.log(` destructured creatorId:`, creatorId);

    if (req.user.role !== "admin") {
      if (userId !== creatorId)
        throw `Circle delete DENIED: Not your Circle b*tch`;
    }
    const deletedCircle = await Circle.destroy({
      where: {
        id: parseInt(req.params.circleId),
      },
    });
    res.json(deletedCircle);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllCircle,
  getCirclesForUser,
  createCircle,
  updateCircle,
  deleteCircle,
};
