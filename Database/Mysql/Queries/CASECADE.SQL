CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    CONSTRAINT FK_Customer FOREIGN KEY (CustomerID) 
        REFERENCES Customers(CustomerID) 
        ON DELETE CASCADE
);






-- ON UPDATE CASCADE (Update Child Rows When Parent is Updated)
-- If the primary key of a parent row changes, the foreign key in the child table is automatically updated.

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(100)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    CategoryID INT,
    CONSTRAINT FK_Category FOREIGN KEY (CategoryID)
        REFERENCES Categories(CategoryID) 
        ON UPDATE CASCADE
);








CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE EmployeeDetails (
    DetailID INT PRIMARY KEY,
    EmployeeID INT,
    DetailInfo VARCHAR(255),
    CONSTRAINT FK_Employee FOREIGN KEY (EmployeeID)
        REFERENCES Employees(EmployeeID) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
-- Combining ON DELETE CASCADE & ON UPDATE CASCADE
-- ✅ If an EmployeeID is deleted, all related EmployeeDetails are deleted.
-- ✅ If an EmployeeID changes, the EmployeeDetails table updates automatically.











-- ON DELETE SET NULL (Set Child Rows to NULL Instead of Deleting)
-- Instead of deleting child rows when the parent row is deleted, ON DELETE SET NULL sets the foreign key to NULL.
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    CONSTRAINT FK_Customer FOREIGN KEY (CustomerID) 
        REFERENCES Customers(CustomerID) 
        ON DELETE SET NULL
);
-- DELETE FROM Customers WHERE CustomerID = 1;
-- ✅ Instead of deleting Orders, it sets CustomerID in Orders to NULL.












-- ON UPDATE SET NULL (Set Child Rows to NULL on Parent Update)
-- If the parent key is updated, the foreign key in the child table is set to NULL.

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    DepartmentID INT,
    CONSTRAINT FK_Department FOREIGN KEY (DepartmentID) 
        REFERENCES Departments(DepartmentID) 
        ON UPDATE SET NULL
);