-- dummy data for development

-- users
INSERT INTO users (username, email, password, role)
VALUES
  ('ADMIN 1', 'admin@gmail.com', '123456', 'admin'),
  ('USER 2', 'user2@gmail.com', '123456', NULL),
  ('USER 3', 'user3@gmail.com', '123456', NULL),
  ('USER 4', 'user4@gmail.com', '123456', NULL),
  ('USER 5', 'user5@gmail.com', '123456', NULL),
  ('USER 6', 'user6@gmail.com', '123456', NULL),
  ('USER 7', 'user7@gmail.com', '123456', NULL),
  ('USER 8', 'user8@gmail.com', '123456', NULL);
 
-- circles
INSERT INTO circles (circleTitle, creatorId)
VALUES
  ('Circle: ADMIN1 1', 1),
  ('Circle: ADMIN1 2', 1),
  ('Circle: USER2 1', 2),
  ('Circle: USER2 2', 2),
  ('Circle: USER2 3', 2),
  ('Circle: USER3 A', 3),
  ('Circle: USER3 B', 3),
  ('Circle: USER3 B', 3);

--   circle_members
INSERT INTO circle_members (memberId, circleId, memberRole)
VALUES
  (1, 1, 'circle_admin'),
  (2, 1, NULL),
  (3, 1, NULL),
  (4, 1, NULL),
  (5, 1, NULL),
  (3, 6, 'circle_admin'),
  (5, 6, NULL),
  (6, 6, NULL),
  (7, 6, NULL);

-- messages
INSERT INTO messages (senderId, receiverId, content, isDm, circleId)
VALUES
  (1, 2, 'Test temporary dm to delete later', true, NULL),
  (3, NULL, 'Test temporary circle 1 to delete later', false, 1),
  (3, NULL, 'Test temporary circle 1 to delete later 1', false, 1),
  (4, NULL, 'Test temporary circle 1 to delete later 2', false, 1),
  (5, NULL, 'Test temporary circle 6 to delete later A', false, 6),
  (7, NULL, 'Test temporary circle 6 to delete later B', false, 6);

