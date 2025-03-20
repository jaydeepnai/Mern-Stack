SELECT * INTO Employees_Copy  
FROM Employees  
WHERE 1 = 0;


INSERT INTO Employees DEFAULT VALUES;


INSERT INTO Employees (Name, Department, Salary)  
VALUES ('David Miller', 'Marketing', 5500);


INSERT INTO Employees (Name, Department, Salary)  
OUTPUT INSERTED.ID, INSERTED.Name  
VALUES ('Emma Brown', 'Sales', 6200);


INSERT INTO Employees (Name, Department, Salary)  
SELECT Name, Department, Salary  
FROM NewHires  
WHERE StartDate >= '2024-01-01';



DECLARE @jsonData NVARCHAR(MAX) = '[
    {"Name": "Liam", "Department": "HR", "Salary": 4800},
    {"Name": "Olivia", "Department": "IT", "Salary": 6700}
]';

INSERT INTO Employees (Name, Department, Salary)  
SELECT Name, Department, Salary  
FROM OPENJSON(@jsonData)  
WITH (  
    Name NVARCHAR(50),  
    Department NVARCHAR(50),  
    Salary DECIMAL(10,2)  
);



SELECT * INTO Employees_Copy  
FROM Employees  
WHERE 1 = 0;




CREATE TABLE Employees_Copy  
LIKE Employees;



CREATE TABLE Employees_Copy (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);



SELECT * INTO #TempEmployees  
FROM Employees  
WHERE 1 = 0;



INSERT INTO Employees_Copy  
SELECT * FROM Employees  
WHERE 1 = 0;



