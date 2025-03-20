DECLARE @i INT = 1;

WHILE @i <= 10
BEGIN
    PRINT @i;
    SET @i = @i + 1;
END;




DECLARE @i INT = 1;

WHILE @i <= 5
BEGIN
    INSERT INTO Employees (Name, Salary) VALUES ('Employee ' + CAST(@i AS VARCHAR), 5000 * @i);
    SET @i = @i + 1;
END;



DECLARE @count INT = 0;
DECLARE @maxUpdates INT = 5;

WHILE @count < @maxUpdates
BEGIN
    UPDATE TOP (1) Employees 
    SET Salary = Salary * 1.1
    WHERE EmployeeID IN (SELECT TOP 1 EmployeeID FROM Employees ORDER BY Salary ASC);

    SET @count = @count + 1;
END;






DECLARE @deletedCount INT = 0;
DECLARE @maxDelete INT = 3;

WHILE @deletedCount < @maxDelete
BEGIN
    DELETE TOP (1) FROM Employees;
    SET @deletedCount = @deletedCount + 1;
END;




DECLARE @num INT = 5;  -- Change this to any number
DECLARE @i INT = 1;

WHILE @i <= 10
BEGIN
    PRINT CAST(@num AS VARCHAR) + ' x ' + CAST(@i AS VARCHAR) + ' = ' + CAST(@num * @i AS VARCHAR);
    SET @i = @i + 1;
END;

