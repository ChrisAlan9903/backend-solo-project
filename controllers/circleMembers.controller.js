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

// GET by id request here
async function getCircleMemberById(req,res){
  try {
    
    const circleMember = await CircleMembers.findByPk({
      where:{
        id:parseInt(req.params.circleMemberId)
      }
    })

    res.json(circleMember)
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
    getCircleMemberById,
    createCircleMembers,
    updateCircleMembers,
    deleteCircleMembers,
}

// have not added get member by id yet. 