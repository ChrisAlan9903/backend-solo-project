const UsersRelationship = require('../models/UsersRelationship')

//userRel = userRelationship


// GET request here
async function getAllUserRel(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
    if(req.user.role !== "admin" ) {
        const userRel = await UsersRelationship.findAll({
            where:{
                userId: req.user.id
            }
        })
       return res.json(userRel) 
    }

        const userRel = await UsersRelationship.findAll()
        res.json(userRel)
        
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

async function getUserRelById(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
    const userRel = await UsersRelationship.findByPk(parseInt(req.params.userRelId))
        
    if(userRel.userId !== req.user.id && req.user.role !== "admin") throw `Restricted access: Cannot view other user relationship`

    res.json(userRel)
        
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

// CREATE request here
async function createUserRel(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
       
    const userRel = await UsersRelationship.create({
        ...req.body
    })
    res.json(userRel)
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

// UPDATE request here
async function updateUserRel(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
    const userRel = await UsersRelationship.findByPk(parseInt(req.params.userRelId))
        
    if(userRel.userId !== req.user.id && req.user.role !== "admin") throw `Restricted access: Cannot update other user relationship`
      
    const updatedUserRel = await UsersRelationship.update(req.body, {
        where: {
            id: parseInt(req.params.userRelId)
        }
    })
    res.json(updatedUserRel)
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

// DELETE request here
async function deleteUserRel(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
    const userRel = await UsersRelationship.findByPk(parseInt(req.params.userRelId))
        
    if(userRel.userId !== req.user.id && req.user.role !== "admin") throw `Restricted access: Cannot delete other user relationship`
       
    const deletedUserRel = await UsersRelationship.destroy({
        where:{
            id: parseInt(req.params.userRelId)
        }
    })
    res.json(deletedUserRel)
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

module.exports = {
 getAllUserRel,
 getUserRelById,
 createUserRel,
 updateUserRel,
 deleteUserRel,
}