const CircleMembers = require("../models/CircleMembers");
const Circles = require('../models/Circles')

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
    // get req info
    const user = req.user
    console.log(`user:`,user);
    // check if req user role is admin
    const userRole = user.role
    console.log(`userRole`, userRole);
    // check if req user role is circle creator
    const circle = await Circles.findByPk(req.body.circleId)
    if(!circle) throw `no circle la stupid`

    const circleCreator = circle.creatorId

    if(userRole !== "admin" && circleCreator !== user.id){
      console.log(`checkpoint 2`);
      throw `Access denied: This not your circle la`
    }
    // if they not, they cannot create member
    // if they are, they can create the member (invite member)

    const createdUser = await CircleMembers.create({
        ...req.body,
    })
    res.json(createdUser)
    // res.json(`test`)
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


// UPDATE request here
async function updateCircleMembers(req,res) {
  try {
    // TODO: add authorization here--⚠️⚠️
    // if(role !== "creator"|| "admin"){}
    // check if req user is admin or circle-admin
    const user = req.user
    console.log(`user:`,user);
    // check if req user role is admin
    const userRole = user.role
    console.log(`userRole`, userRole);
    // check if req user role is circle creator
    const circle = await Circles.findByPk(req.body.circleId)
    if(!circle) throw `no circle la stupid`

    const circleCreator = circle.creatorId

    if(userRole !== "admin" && circleCreator !== user.id){
      console.log(`checkpoint 2`);
      throw `Access denied: This not your circle la`
    }
    // if not, deny access
    // if is, update circle member
    // 

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
    const user = req.user
    console.log(`user:`,user);
    // check if req user role is admin
    const userRole = user.role
    console.log(`userRole`, userRole);
    // check if req user role is circle creator
    const circle = await Circles.findByPk(req.body.circleId)
    if(!circle) throw `no circle la stupid`

    const circleCreator = circle.creatorId

    if(userRole !== "admin" && circleCreator !== user.id){
      console.log(`checkpoint 2`);
      throw `Access denied: This not your circle la`
    }

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