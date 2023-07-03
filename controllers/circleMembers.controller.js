const CircleMembers = require("../models/CircleMembers");

// GET request here
async function getAllCircleMembers() {
  try {
    // TODO: add authorization here--⚠️⚠️
    if (role === "admin"){
        const circleMembers = await CircleMembers.findAll()
        res.json(circleMembers)
    }else{
        const circleMembers = await CircleMembers.findAll({
            where:{
                circleId: req.body.circleId
            }
        })
        res.json(circleMembers)
    }


  } catch (error) {
    res.status(500).json({ error: error });
  }
}


// CREATE request here
async function createCircleMembers() {
  try {
    // TODO: add authorization here--⚠️⚠️
    if(role !== "creator"){}
    const createdUser = await CircleMembers.create({
        ...req.body,
    })
    res.json(createdUser)
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


// UPDATE request here
async function updateCircleMembers() {
  try {
    // TODO: add authorization here--⚠️⚠️
    if(role !== "creator"|| "admin"){}

    const updatedCircleMember = await CircleMembers.update({
        ...req.body
    },{
        where:{
            id: parseInt(req.params.circleMemberId)
        }
    })
    res.json(updatedCircleMember)

  } catch (error) {
    res.status(500).json({ error: error });
  }
}


// DELETE request here
async function deleteCircleMembers() {
  try {
    // TODO: add authorization here--⚠️⚠️
    if(role !== "admin" || "creator"){}
    else if (user !== "user"){}
    else{}
    const deletedCircleMember = await CircleMembers.destroy({
        where:{
            id: parseInt(req.params.circleMemberId)
        }
    })
    res.json(deletedCircleMember)


  } catch (error) {
    res.status(500).json({ error: error });
  }
}


module.exports = {
    getAllCircleMembers,
    createCircleMembers,
    updateCircleMembers,
    deleteCircleMembers,
}