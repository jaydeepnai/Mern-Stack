DECLARE @Age INT = 25;

IF @Age >= 18
    PRINT 'You are an adult.';
ELSE
    PRINT 'You are a minor.';





DECLARE @maxSalary INT;
SET @maxSalary = (SELECT MAX(Salary) FROM Employees);

IF @maxSalary > 50000
    SELECT * FROM Employees WHERE Salary = @maxSalary;
ELSE
    PRINT 'No employee has a salary above 50,000';




DECLARE @empID INT = 101;

IF EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = @empID)
    SELECT * FROM Employees WHERE EmployeeID = @empID;
ELSE
    PRINT 'Employee not found';





DECLARE @empID INT = 105;
DECLARE @newSalary INT = 60000;

IF EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = @empID)
    UPDATE Employees SET Salary = @newSalary WHERE EmployeeID = @empID;
ELSE
    INSERT INTO Employees (EmployeeID, Name, Salary) VALUES (@empID, 'New Employee', @newSalary);




DECLARE @Salary INT = 75000;

IF @Salary > 100000
    PRINT 'High Salary';
ELSE IF @Salary BETWEEN 50000 AND 100000
    PRINT 'Medium Salary';
ELSE
    PRINT 'Low Salary';
