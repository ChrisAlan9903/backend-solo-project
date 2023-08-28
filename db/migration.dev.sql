CREATE DATABASE personal_project_backend_v2_dev;
use personal_project_backend_v2_dev;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) ,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','customer', 'vendor') DEFAULT 'customer' ,
  address VARCHAR(255), 
  is_verified BOOLEAN DEFAULT false,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  vendorId INT NOT NULL,
  imageLink VARCHAR(255),
  categories_id INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vendorId) REFERENCES users(id),
  FOREIGN KEY (categories_id) REFERENCES categories(id)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  totalAmount DECIMAL(10, 2) NOT NULL,
  orderStatus ENUM('pending', 'completed', 'cancelled') NOT NULL,
  vendorId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (vendorId) REFERENCES users(id)
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  orderId INT NOT NULL,
  foodItemId INT NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders(id),
  FOREIGN KEY (foodItemId) REFERENCES food_items(id)
);

CREATE TABLE vendors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendorName VARCHAR(255) NOT NULL,
  address TEXT,
  vendorInfo TEXT NOT NULL,
  contactInfo VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

