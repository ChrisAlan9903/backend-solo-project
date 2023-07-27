-- Dummy data for testing


-- Better create using log in Because of the hashedPassword
INSERT INTO Users (username, email, password, role) VALUES
('john_doe', 'john@example.com', 'hashed_password', 'customer'),
('jane_smith', 'jane@example.com', 'hashed_password', 'customer'),
('vendor1', 'vendor1@example.com', 'hashed_password', 'vendor'),
('vendor2', 'vendor2@example.com', 'hashed_password', 'vendor');


INSERT INTO FoodItems (name, description, price, vendorId) VALUES
('Cheeseburger', 'Delicious cheeseburger with beef patty.', 8.99, 3),
('Pepperoni Pizza', 'Classic pizza with pepperoni toppings.', 12.99, 4),
('Chicken Alfredo', 'Creamy chicken alfredo pasta.', 10.49, 3),
('Chocolate Brownie', 'Decadent chocolate brownie dessert.', 5.99, 4);


INSERT INTO Orders (userId, totalAmount, orderStatus) VALUES
(1, 18.98, 'completed'),
(2, 12.99, 'completed'),
(1, 10.49, 'pending'),
(2, 16.98, 'pending');


INSERT INTO OrderItems (orderId, foodItemId, quantity, price) VALUES
(1, 1, 2, 17.98),
(2, 2, 1, 12.99),
(3, 3, 1, 10.49),
(4, 4, 2, 11.98);


INSERT INTO Vendors (vendorName, address, contactInfo) VALUES
('Vendor 1', '123 Main St, City, Country', 'vendor1@example.com'),
('Vendor 2', '456 Oak Ave, Town, Country', 'vendor2@example.com');


INSERT INTO Categories (name, description) VALUES
('Burgers', 'Delicious burgers with various toppings.'),
('Pizzas', 'Tasty pizzas with different flavors.'),
('Pasta', 'Delightful pasta dishes for everyone.'),
('Desserts', 'Sweet treats to satisfy your cravings.');
