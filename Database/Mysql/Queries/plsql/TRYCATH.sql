BEGIN TRY
    DECLARE @Result INT;
    SET @Result = 10 / 0; -- Will cause division by zero error
END TRY
BEGIN CATCH
    PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;





BEGIN TRY
    INSERT INTO Employees (EmployeeID, Name, Salary)
    VALUES (1, 'John Doe', 50000);  -- Assuming EmployeeID=1 already exists
END TRY
BEGIN CATCH
    PRINT 'Error: Cannot insert duplicate EmployeeID.';
    PRINT ERROR_MESSAGE();
END CATCH;







BEGIN TRY
    UPDATE Employees 
    SET Salary = Salary + 1000
    WHERE EmployeeID = 9999;  -- Assuming this ID does not exist
END TRY
BEGIN CATCH
    PRINT 'Error: Employee not found for update.';
    PRINT ERROR_MESSAGE();
END CATCH;






BEGIN TRY
    BEGIN TRANSACTION;

    UPDATE Employees SET Salary = Salary + 500 WHERE EmployeeID = 2;
    
    -- Force an error
    INSERT INTO Employees (EmployeeID, Name, Salary) VALUES (2, 'Duplicate', 60000);

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Error: Transaction rolled back due to an issue.';
    PRINT ERROR_MESSAGE();
END CATCH;







BEGIN TRY
    EXEC GetEmployeeDetails 5;  -- Assuming this stored procedure exists
END TRY
BEGIN CATCH
    PRINT 'Error: Issue executing the stored procedure.';
    PRINT ERROR_MESSAGE();
END CATCH;
