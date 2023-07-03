const ChatroomMember = require('../models/ChatroomMembers')

// GET request here
async function getAllChatroomMember(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️

        const chatroomMember = await ChatroomMember.findAll()
        res.json(chatroomMember)
        
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

async function getChatroomMemberById(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
        
    const chatroomMember = await ChatroomMember.findByPk(parseInt(req.params.chatroomId))
    res.json(chatroomMember)
        
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

// CREATE request here
async function createChatroomMember(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
       
    const chatroomMember = await ChatroomMember.create({
        ...req.body
    })
    res.json(chatroomMember)
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

// UPDATE request here
async function updateChatroomMember(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
      
    const updatedChatroomMember = await ChatroomMember.update(req.body, {
        where: {
            id: parseInt(req.params.chatroomMemberId)
        }
    })
    res.json(updatedChatroomMember)
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

// DELETE request here
async function deleteChatroomMember(req,res){
    try {
    // TODO: add authorization here--⚠️⚠️
       
    const deletedChatroomMember = await ChatroomMember.destroy({
        where:{
            id: parseInt(req.params.chatroomMemberId)
        }
    })
    res.json(deletedChatroomMember)
    } catch (error) {
        res.status(500).json({ error: error });  

}
}

module.exports = {
    getAllChatroomMember,
    getChatroomMemberById,
    createChatroomMember,
    updateChatroomMember,
    deleteChatroomMember,
}