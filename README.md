# backend-solo-project

# Figuring the endpoints for each model

## User
### Limitation On User
- (CREATE)
    - Only Admin can create new user
- (GET)
    - All User can view other users (GET)
    - All users can view individual user (GET)
- (PUT)
    - User can only update themselves
    - Users cannot update other users
    - Admin can update users
- (DELETE)
    - User can only delete themselves/ User 
    - User cannot delete other users
    - Admin can delete users


## Users Relationship
- (CREATE)
    - Users can create new relationship with other users
- (GET)
    - Users can view their own relationship data
    - Users cannot view other users relationship data 
    - Admin can view all users relationship data
- (PUT)
    - Users can only update their relationships data 
    - Users cannot update other users relationship data
    - Admin all also can 🤣🤣
- (DELETE)
    - Users can only delete their relationship data
    - Users cannot delete other users relationship data
    - Admin apa pun boleh 🤣🤣

## Circles
- (CREATE)
    - Users can create new Circle
- (GET)
    - Users can view their own Circle 
    - Users cannot view other users Circle  
    - Admin can view all users Circle 
- (PUT)
    - Circle-creator can only update their Circle  
    - Users cannot update other users Circle 
    - Admin all also can 🤣🤣
- (DELETE)
    - Users can only delete their Circle 
    - Users cannot delete other users Circle 
    - Admin apa pun boleh 🤣🤣

## Circle Members
- (CREATE)
    - Circle-creator  can add new Circle-Member
- (GET)
    - Users can view other Circle-Member in the same Circle
    - Admin can view other Circle-Member even if not in the Circle
- (PUT)
    - Circle-admin users can update Circle-Member details 
    - Circle Non-admin users cannot update other Circle-Member details 
    - Admin all also can 🤣🤣
- (DELETE)
    - Circle-admin users can delete Circle-Member 
    - Users cannot delete other Circle-Member 
    - Admin apa pun boleh 🤣🤣

## Chatrooms
- (CREATE)
    - Users can create new Chatroom in a Circle
- (GET)
    - Users can only view  the Chatroom they're in 
    - Users cannot view other Chatroom they're not in  
    - Admin can view all users Chatroom 
- (PUT)
    - only Chatroom-creator and Circle creator can update the Chatroom
    - Users cannot update chatroom 
    - Admin all also can 🤣🤣
- (DELETE)
    - Only Chatroom-creator and Circle-creator can delete Chatroom 
    - Users cannot delete other users Circle 
    - Admin apa pun boleh 🤣🤣

## Chatroom Members
- (CREATE)
    - Chatroom-creator  can add new Chatroom-Member
- (GET)
    - Users can view other Chatroom-Member in the same Chatroom
    - Admin can view other Chatroom-Member even if not in the Chatroom
- (PUT)
    - Chatroom-creator can update Chatroom-Member details 
    - Chatroom users cannot update other Chatroom-Member details 
    - Admin all also can 🤣🤣
- (DELETE)
    - Chatroom-creator can delete Chatroom-Member 
    - Users cannot delete other Chatroom-Member 
    - Admin apa pun boleh 🤣🤣

## Messages
- (CREATE)
    - Users can create new Messages
- (GET)
    - Sender can view all the Messages they send
    - Receiver can only view the Messages they receive
    - Users can view Messages in the same Chatroom id  
    - Admin can view all users Messages 
- (PUT)
    - no update function for now
- (DELETE)
    - Only Sender-user can delete Messages 
    - Users cannot delete other Sender-user Message 
    - Admin apa pun boleh 🤣🤣