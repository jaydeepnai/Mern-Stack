BEGIN TRY
    DECLARE @result INT;
    SET @result = 10 / 0;  -- Division by zero error
END TRY
BEGIN CATCH
    RAISERROR ('Error: Division by zero detected!', 16, 1);
END CATCH;


RAISERROR ('Invalid Employee ID', 16, 1) WITH NOWAIT;








DECLARE @Salary INT = 20000;

IF @Salary < 30000
    RAISERROR ('Error: Salary cannot be less than 30,000', 16, 1);









DECLARE @EmpID INT = 105;

IF NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = @EmpID)
    RAISERROR ('Employee with ID %d does not exist.', 16, 1, @EmpID);







BEGIN TRY
    DECLARE @result INT;
    SET @result = 10 / 0;  -- Causes an error
END TRY
BEGIN CATCH
    THROW 50001, 'Custom error: Division by zero!', 1;
END CATCH;







CREATE PROCEDURE CheckEmployee
    @EmpID INT
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = @EmpID)
    BEGIN
        RAISERROR ('Employee not found', 16, 1);
        RETURN;
    END
    
    SELECT * FROM Employees WHERE EmployeeID = @EmpID;
END;










BEGIN TRANSACTION;

BEGIN TRY
    DELETE FROM Employees WHERE EmployeeID = 500;  -- Assume EmployeeID does not exist

    IF @@ROWCOUNT = 0
        RAISERROR ('No employee found to delete', 16, 1);

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Transaction rolled back!';
END CATCH;








BEGIN TRY
    DECLARE @ErrorMsg NVARCHAR(255) = 'Test Error';
    RAISERROR (@ErrorMsg, 16, 1);
END TRY
BEGIN CATCH
    INSERT INTO ErrorLog (ErrorMessage, ErrorDate) 
    VALUES (ERROR_MESSAGE(), GETDATE());
END CATCH;
