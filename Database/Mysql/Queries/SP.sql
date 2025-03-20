CREATE PROCEDURE GetAllEmployees
AS
BEGIN
    SELECT * FROM Employees;
END;



EXEC GetAllEmployees;





CREATE PROCEDURE GetEmployeeByID
    @EmpID INT
AS
BEGIN
    SELECT * FROM Employees WHERE EmployeeID = @EmpID;
END;


EXEC GetEmployeeByID 101;




CREATE PROCEDURE InsertEmployee
    @Name VARCHAR(100),
    @Salary INT,
    @Department VARCHAR(50)
AS
BEGIN
    INSERT INTO Employees (Name, Salary, Department)
    VALUES (@Name, @Salary, @Department);
END;

EXEC InsertEmployee 'John Doe', 60000, 'IT';






CREATE PROCEDURE UpdateEmployeeSalary
    @EmpID INT,
    @NewSalary INT
AS
BEGIN
    UPDATE Employees SET Salary = @NewSalary WHERE EmployeeID = @EmpID;
END;

EXEC UpdateEmployeeSalary 101, 75000;






CREATE PROCEDURE DeleteEmployee
    @EmpID INT
AS
BEGIN
    BEGIN TRY
        DELETE FROM Employees WHERE EmployeeID = @EmpID;
        PRINT 'Employee deleted successfully.';
    END TRY
    BEGIN CATCH
        PRINT 'Error: Unable to delete employee.';
        PRINT ERROR_MESSAGE();
    END CATCH;
END;


EXEC DeleteEmployee 101;



