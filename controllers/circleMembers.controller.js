const CircleMembers = require("../models/CircleMembers");

// GET request here
async function getAllCircleMembers(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    // ⚠️⚠️ Authorization: Role is ADMIN
    if (req.user.role === "admin") {
      const circleMembers = await CircleMembers.findAll();
      console.log(`circleMembers:`, circleMembers);
      res.json(circleMembers);
    }

    // ⚠️⚠️ Authorization: Role is USER
    else {
      console.log(`CP: Test find all CircleMember by User`);

      console.log(`user id: `, req.user.id);
      const memberCircles = await CircleMembers.findAll({
        where: {
          memberId: req.user.id,
        },
        attributes: ["circleId"],
      });

      const memberCircleLists = [];
      for (const { dataValues } of memberCircles) {
        const { circleId } = dataValues;
        memberCircleLists.push(circleId);
      }
      console.log(`list of member circles:`, memberCircleLists);

      const memberList = await CircleMembers.findAll({
        where: {
          circleId: memberCircleLists,
        },
      });

      res.json(memberList);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// GET by id request here
async function getCircleMemberById(req, res) {
  try {
    const circleId = parseInt(req.params.circleId);
    const memberId = parseInt(req.params.circleMemberId);
    const userId = req.user.id;
    console.log(`Search circle Id:`, circleId);
    console.log(`Search member Id:`, memberId);
    console.log(`Search user Id:`, userId);

    // ⚠️⚠️ Authorization: Role is ADMIN
    if (req.user.role === "admin") {
      const circleMember = await CircleMembers.findOne({
        where: {
          circleId: circleId,
          memberId: memberId,
        },
      });
      if (!circleMember) throw `Member does not exist in this Circle!`;

      res.json(circleMember);
    }

    // ⚠️⚠️ Authorization: Role is USER
    else {
      // PART 1: Check if user is inside the circle

      const checkCircle = await CircleMembers.findOne({
        where: {
          circleId: circleId,
          memberId: req.user.id,
        },
      });
      if (!checkCircle) throw `You do not belong in this Circle. Cannot check!`;

      // PART 2: Check if member if the circle exists
      const circleMember = await CircleMembers.findOne({
        where: {
          circleId: circleId,
          memberId: memberId,
        },
      });
      if (!circleMember) throw `Member does not exist in this Circle!`;

      res.json(circleMember);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// CREATE request here
async function createCircleMembers(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    // ⚠️⚠️ Authorization: Role is ADMIN
    if (req.user.role === "admin") {
      const createdUser = await CircleMembers.create({
        ...req.body,
      });
      res.json(createdUser);
    }
    // ⚠️⚠️ Authorization: Role is USER
    else {
      const userRole = await CircleMembers.findOne({
        where: {
          memberId: req.user.id,
          circleId: req.body.circleId,
        },
        attributes: ["memberRole"],
      });

      const { memberRole } = userRole;
      console.log(`userRole:`, memberRole);
      // CHECK: If USER is not a creator, throw access denied
      if (memberRole !== "circle_admin")
        throw `Permission error: Not a Circle Admin.`;

      const createdUser = await CircleMembers.create({
        ...req.body,
      });
      res.json(createdUser);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// UPDATE request here
async function updateCircleMembers(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    // ⚠️⚠️ Authorization: Role is ADMIN

    if (req.user.role === "admin") {
      const updatedCircleMember = await CircleMembers.update(
        {
          ...req.body,
        },
        {
          where: {
            id: parseInt(req.params.circleMemberId),
          },
        }
      );
      res.json(updatedCircleMember);
    }
    // ⚠️⚠️ Authorization: Role is USER
    else {
      const userRole = await CircleMembers.findOne({
        where: {
          memberId: req.user.id,
          circleId: req.body.circleId,
        },
        attributes: ["memberRole"],
      });

      const { memberRole } = userRole;
      console.log(`userRole:`, memberRole);
      // CHECK: If USER is not a creator, throw access denied
      if (memberRole !== "circle_admin")
        throw `Update error: Not a Circle Admin.`;

      const updatedCircleMember = await CircleMembers.update(
        {
          ...req.body,
        },
        {
          where: {
            id: parseInt(req.params.circleMemberId),
          },
        }
      );
      res.json(updatedCircleMember);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// DELETE request here
async function deleteCircleMembers(req, res) {
  try {
    const circleMemberId = parseInt(req.params.circleMemberId);
    console.log(`circleMemberId:`, circleMemberId);

    // TODO: add authorization here--⚠️⚠️
    // ⚠️⚠️ Authorization: Role is ADMIN
    if (req.user.role === "admin") {
      const deletedCircleMember = await CircleMembers.destroy({
        where: {
          id: circleMemberId,
        },
      });
      res.json(deletedCircleMember);
    }
    // ⚠️⚠️ Authorization: Role is USER
    else {
      const circleMemberInfo = await CircleMembers.findOne({
        where: {
          id: circleMemberId,
        },
        attributes: ["circleId"],
      });

      const { circleId } = circleMemberInfo;
      console.log(`circleId:`, circleId);

      console.log(`CP 1: Test delete`);
      const userRole = await CircleMembers.findOne({
        where: {
          memberId: req.user.id,
          circleId: circleId,
        },
        attributes: ["memberRole"],
      });
      console.log(`CP 2: Test delete`);
      console.log(`userRole:`, userRole);

      if (!userRole) throw `Delete error: User not in the Circle`;
      const { memberRole } = userRole;
      console.log(`userRole:`, memberRole);

      // CHECK: If USER is not a creator, throw access denied
      if (memberRole !== "circle_admin")
        throw `Delete error: Not a Circle Admin.`;

      // PART 2: Delete if user is circle creator/admin
      const deletedCircleMember = await CircleMembers.destroy({
        where: {
          id: circleMemberId,
        },
      });
      res.json(deletedCircleMember);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllCircleMembers,
  getCircleMemberById,
  createCircleMembers,
  updateCircleMembers,
  deleteCircleMembers,
};

// have not added get member by id yet.
