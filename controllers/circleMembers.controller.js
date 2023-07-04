const CircleMembers = require("../models/CircleMembers");

// GET request here
async function getAllCircleMembers(req,res) {
  try {
    // TODO: add authorization here--⚠️⚠️
   
        const circleMembers = await CircleMembers.findAll()
        res.json(circleMembers)
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


// CREATE request here
async function createCircleMembers(req,res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const createdUser = await CircleMembers.create({
        ...req.body,
    })
    res.json(createdUser)
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


// UPDATE request here
async function updateCircleMembers(req,res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    // if(role !== "creator"|| "admin"){}

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
async function deleteCircleMembers(req,res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    // if(role !== "admin" || "creator"){}
    // else if (user !== "user"){}
    // else{}
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

// have not added get member by id yet. 