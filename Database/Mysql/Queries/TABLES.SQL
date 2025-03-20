CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(100)
);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    salary DECIMAL(10, 2),
    experience_years INT,
    manager_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10, 2),
    stock INT
);

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    client_id INT,
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    employee_id INT,
    sale_date DATE,
    quantity INT,
    total DECIMAL(10, 2),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);



INSERT INTO departments (name) VALUES 
('Sales'), ('Marketing'), ('IT'), ('HR'), ('Finance'),
('Logistics'), ('Operations'), ('Procurement'), ('Customer Service'), ('Research'),
('Product Development'), ('Business Development'), ('Quality Assurance'), ('Compliance'), ('Legal'),
('Accounting'), ('Administration'), ('Public Relations'), ('Training'), ('Executive'),
('Engineering'), ('Consulting'), ('Maintenance'), ('Manufacturing'), ('Retail'),
('E-commerce'), ('Data Science'), ('Analytics'), ('Security'), ('Support');


INSERT INTO employees (name, department_id, salary, experience_years, manager_id) VALUES 
('Alice Smith', 1, 65000.00, 5, NULL), ('Bob Johnson', 2, 72000.00, 6, NULL), 
('Carol Williams', 3, 82000.00, 8, 1), ('David Brown', 4, 54000.00, 4, 2), 
('Eve Davis', 5, 60000.00, 3, NULL), ('Frank Clark', 6, 78000.00, 7, 1),
('Grace Miller', 7, 62000.00, 5, NULL), ('Henry Wilson', 8, 70000.00, 6, NULL), 
('Ivy Moore', 9, 64000.00, 3, 4), ('Jack Taylor', 10, 73000.00, 5, NULL), 
('Lily Anderson', 1, 65000.00, 4, 1), ('Mike Thomas', 2, 81000.00, 6, NULL), 
('Nina Martinez', 3, 87000.00, 8, 3), ('Oscar White', 4, 56000.00, 3, 5), 
('Paula Harris', 5, 65000.00, 3, NULL), ('Quinn Lewis', 6, 83000.00, 6, 1),
('Rachel Walker', 7, 69000.00, 5, NULL), ('Sam Hall', 8, 75000.00, 7, NULL), 
('Tina Allen', 9, 62000.00, 3, 8), ('Umar King', 10, 76000.00, 6, NULL), 
('Vera Scott', 1, 65000.00, 4, 1), ('Willie Green', 2, 87000.00, 7, NULL), 
('Xena Adams', 3, 91000.00, 9, 3), ('Yara Baker', 4, 57000.00, 4, 6), 
('Zane Perez', 5, 69000.00, 5, NULL), ('Abel Roberts', 6, 80000.00, 6, 3),
('Bella Turner', 7, 70000.00, 5, NULL), ('Carlos Phillips', 8, 74000.00, 8, NULL), 
('Donna Campbell', 9, 68000.00, 4, 7), ('Ed Fox', 10, 77000.00, 6, NULL);


INSERT INTO products (name, category, price, stock) VALUES 
('Laptop', 'Electronics', 1200.00, 50), ('Smartphone', 'Electronics', 900.00, 150), 
('Desk Chair', 'Furniture', 200.00, 200), ('Office Desk', 'Furniture', 300.00, 150), 
('Printer', 'Office Supplies', 150.00, 80), ('Monitor', 'Electronics', 250.00, 100), 
('Tablet', 'Electronics', 600.00, 120), ('Headphones', 'Electronics', 80.00, 300), 
('Coffee Maker', 'Appliances', 90.00, 75), ('Keyboard', 'Electronics', 30.00, 500),
('Mouse', 'Electronics', 25.00, 450), ('Router', 'Networking', 70.00, 200), 
('Projector', 'Electronics', 400.00, 50), ('USB Drive', 'Accessories', 15.00, 1000), 
('Webcam', 'Electronics', 45.00, 200), ('Air Purifier', 'Appliances', 200.00, 60), 
('Water Bottle', 'Accessories', 10.00, 600), ('Notebook', 'Office Supplies', 5.00, 700), 
('Whiteboard', 'Office Supplies', 80.00, 120), ('Speaker', 'Electronics', 150.00, 80), 
('Chair Mat', 'Furniture', 50.00, 90), ('Pens', 'Office Supplies', 2.00, 2000), 
('Pencil', 'Office Supplies', 1.00, 3000), ('Cable', 'Accessories', 10.00, 500), 
('Eraser', 'Office Supplies', 0.50, 2000), ('Calculator', 'Electronics', 30.00, 300), 
('Backpack', 'Accessories', 25.00, 200), ('Lamp', 'Furniture', 35.00, 180), 
('Clock', 'Accessories', 20.00, 250), ('File Cabinet', 'Furniture', 100.00, 50);


INSERT INTO clients (name, contact_info) VALUES 
('ABC Corp', 'abc@corporate.com'), ('XYZ Ltd', 'xyz@xyz.com'), 
('Acme Inc.', 'contact@acme.com'), ('Beta Solutions', 'info@betasolutions.com'), 
('Delta Ltd', 'contact@deltaltd.com'), ('Gamma Group', 'contact@gammagroup.com'), 
('Zeta Innovations', 'info@zetainnovations.com'), ('Epsilon Tech', 'support@epsilont.com'), 
('Theta Industries', 'theta@industries.com'), ('Iota Solutions', 'iota@solutions.com'), 
('Sigma Services', 'sigma@services.com'), ('Alpha Consultancy', 'alpha@consultancy.com'), 
('Kappa Logistics', 'kappa@logistics.com'), ('Omicron Ltd', 'omicron@company.com'), 
('Pi Networks', 'info@pinetworks.com'), ('Rho Enterprises', 'contact@rhoenterprises.com'), 
('Lambda Systems', 'lambda@systems.com'), ('Nu Manufacturing', 'nu@manufacturing.com'), 
('Xi Solutions', 'xi@solutions.com'), ('Tau Technologies', 'info@tautech.com'), 
('Upsilon Services', 'support@upsilon.com'), ('Omega Consultancy', 'info@omegaconsult.com'), 
('Phi Labs', 'phi@labs.com'), ('Chi Co.', 'info@chico.com'), ('Psi Ventures', 'contact@psiventures.com'), 
('Theta Solutions', 'support@theta.com'), ('Lambda Logistics', 'info@lambdalogistics.com'), 
('Epsilon Services', 'contact@epsilon.com'), ('Sigma Holdings', 'info@sigmaco.com'), 
('Delta Innovations', 'contact@deltainnovations.com');


INSERT INTO projects (name, department_id, client_id, start_date, end_date) VALUES 
('Website Redesign', 3, 1, '2024-01-15', '2024-03-30'), ('Market Analysis', 2, 2, '2024-02-10', '2024-06-15'), 
('App Development', 7, 3, '2024-03-01', '2024-10-01'), ('Sales Campaign', 1, 4, '2024-05-05', '2024-09-01'), 
('Security Update', 3, 5, '2024-04-10', '2024-06-30'), ('Inventory System', 6, 6, '2024-05-15', '2024-07-20'), 
('Customer Survey', 9, 7, '2024-06-05', '2024-08-10'), ('Data Migration', 10, 8, '2024-07-01', '2024-09-25'), 
('Financial Audit', 5, 9, '2024-08-01', '2024-10-30'), ('Social Media Strategy', 2, 10, '2024-09-10', '2024-12-15'),
('Product Launch', 1, 11, '2024-03-20', '2024-06-20'), ('Infrastructure Upgrade', 4, 12, '2024-04-15', '2024-09-15'),
('Market Expansion', 2, 13, '2024-05-10', '2024-11-30'), ('Compliance Review', 5, 14, '2024-06-10', '2024-09-10'), 
('System Optimization', 7, 15, '2024-07-15', '2024-11-20'), ('Team Training', 8, 16, '2024-08-05', '2024-11-15'), 
('Server Migration', 10, 17, '2024-09-20', '2025-01-15'), ('Customer Support Revamp', 9, 18, '2024-10-10', '2025-02-10'), 
('Legal Compliance', 15, 19, '2024-11-01', '2025-01-30'), ('Warehouse Setup', 6, 20, '2024-12-01', '2025-02-15');


INSERT INTO sales (product_id, employee_id, sale_date, quantity, total) VALUES 
(1, 1, '2024-01-05', 2, 2400.00), (2, 2, '2024-02-10', 1, 900.00), 
(3, 3, '2024-03-15', 5, 1000.00), (4, 4, '2024-04-20', 3, 900.00), 
(5, 5, '2024-05-25', 2, 300.00), (6, 6, '2024-06-30', 4, 1000.00), 
(7, 7, '2024-07-05', 3, 1800.00), (8, 8, '2024-08-10', 6, 480.00), 
(9, 9, '2024-09-15', 1, 90.00), (10, 10, '2024-10-20', 10, 300.00), 
(11, 11, '2024-11-25', 8, 200.00), (12, 12, '2024-12-30', 2, 140.00), 
(13, 13, '2024-01-10', 2, 800.00), (14, 14, '2024-02-15', 6, 90.00), 
(15, 15, '2024-03-20', 4, 320.00), (16, 16, '2024-04-25', 3, 600.00), 
(17, 17, '2024-05-30', 7, 70.00), (18, 18, '2024-06-05', 1, 200.00), 
(19, 19, '2024-07-10', 8, 40.00), (20, 20, '2024-08-15', 5, 250.00), 
(21, 21, '2024-09-20', 3, 60.00), (22, 22, '2024-10-25', 12, 24.00), 
(23, 23, '2024-11-30', 15, 15.00), (24, 24, '2024-12-05', 6, 60.00), 
(25, 25, '2024-01-10', 3, 90.00), (26, 26, '2024-02-15', 5, 150.00), 
(27, 27, '2024-03-20', 7, 175.00), (28, 28, '2024-04-25', 4, 140.00), 
(29, 29, '2024-05-30', 6, 120.00), (30, 30, '2024-06-05', 9, 180.00);


SELECT * FROM employees;
SELECT * FROM departments;
SELECT * FROM products;
SELECT * FROM projects;
SELECT * FROM sales;
SELECT * FROM clients;