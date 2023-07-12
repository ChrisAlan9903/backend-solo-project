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
async function getCirclesForUser(req,res){
  try {
    //add authorization here

   const creatorId = req.params.creatorId
   console.log(`creatorId:`, creatorId)

   const userCircles = await Circle.findAll({
    where:{
      creatorId: creatorId
    }
   })
   res.json(userCircles)

    
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
 
    try {
      const updatedCircle = await Circle.update(req.body, {
        where: {
          id: parseInt(req.params.circleId),
        },
      });
      res.json(updatedCircle)
    } catch (error) {
      res.status(500).json({ error: error });
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
    getCirclesForUser,
    createCircle,
    updateCircle,
    deleteCircle,
}
