BEGIN TRANSACTION;

UPDATE Employees
SET Salary = Salary + 5000
WHERE EmployeeID = 101;

IF @@ERROR = 0
    COMMIT TRANSACTION;
ELSE
    ROLLBACK TRANSACTION;







BEGIN TRANSACTION;

BEGIN TRY
    UPDATE Accounts SET Balance = Balance - 1000 WHERE AccountID = 1;
    UPDATE Accounts SET Balance = Balance + 1000 WHERE AccountID = 2;

    COMMIT TRANSACTION;
    PRINT 'Transaction Successful';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Transaction Failed: ' + ERROR_MESSAGE();
END CATCH;








BEGIN TRANSACTION OuterTran;

UPDATE Orders SET Status = 'Processing' WHERE OrderID = 10;

BEGIN TRANSACTION InnerTran;
UPDATE Inventory SET Quantity = Quantity - 1 WHERE ProductID = 5;

IF @@ERROR = 0
    COMMIT TRANSACTION InnerTran;
ELSE
    ROLLBACK TRANSACTION InnerTran;

IF @@ERROR = 0
    COMMIT TRANSACTION OuterTran;
ELSE
    ROLLBACK TRANSACTION OuterTran;







BEGIN TRANSACTION;

UPDATE Employees SET Salary = Salary + 5000 WHERE EmployeeID = 1;
SAVE TRANSACTION SavePoint1;

UPDATE Employees SET Salary = Salary + 5000 WHERE EmployeeID = 2;

-- If error occurs, rollback to SavePoint1
IF @@ERROR <> 0
    ROLLBACK TRANSACTION SavePoint1;
ELSE
    COMMIT TRANSACTION;





