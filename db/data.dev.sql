-- run all these query dummy data for testing endpoints

INSERT INTO users (username, email, password)
VALUES
  ('Admin', 'admin@gmail.com', '123456'),
  ('User 2', 'user2@gmail.com', '123456'),
  ('User 3', 'user3@gmail.com', '123456'),
  ('User 4', 'user4@gmail.com', '123456'),
  ('User 5', 'user5@gmail.com', '123456'),
  ('User 6', 'user6@gmail.com', '123456'),
  ('User 7', 'user7@gmail.com', '123456');

  INSERT INTO users_relationship (userId, relatedUserId, relationshipType)
VALUES
  (1, 2, 'Rel 1'),
  (1, 3, 'Rel 2'),
  (2, 4, 'Rel 3'),
  (2, 5, 'Rel 4'),
  (2, 6, 'Rel 5'),
  (3, 1, 'Rel 6'),
  (3, 2, 'Rel 7');

  INSERT INTO circles (circleTitle, creatorId)
VALUES
  ('Circle: ADMIN 1', 1),
  ('Circle: ADMIN 2', 1),
  ('Circle: USER2 1', 2),
  ('Circle: USER2 2', 2),
  ('Circle: USER2 3', 2),
  ('Circle: USER3 1', 3),
  ('Circle: USER3 2', 3),
  ('Circle: USER3 3', 3);

  INSERT INTO circle_members (memberId, circleId)
VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 1),
  (2, 3),
  (3, 4),
  (4, 3),
  (5, 3);



table: chatrooms

{
	"chatroomTitle":"Chatroom: CIRCLE ADMIN 1 ",
	"circleId" : 1,
	"creatorId": 1
}
{
	"chatroomTitle":"Chatroom: CIRCLE ADMIN 2 ",
	"circleId" : 1,
	"creatorId": 2
}
{
	"chatroomTitle":"Chatroom: CIRCLE ADMIN 3 ",
	"circleId" : 1,
	"creatorId": 3
}
{
	"chatroomTitle":"Chatroom: CIRCLE USER1 3 ",
	"circleId" : 1,
	"creatorId": 3
}

