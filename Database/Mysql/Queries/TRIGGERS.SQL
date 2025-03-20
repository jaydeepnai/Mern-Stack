CREATE TABLE EmployeeLog (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeID INT,
    Action VARCHAR(50),
    LogDate DATETIME DEFAULT GETDATE()
);

CREATE TRIGGER trg_AfterInsert
ON Employees
AFTER INSERT
AS
BEGIN
    INSERT INTO EmployeeLog (EmployeeID, Action)
    SELECT EmployeeID, 'Inserted' FROM inserted;
END;


INSERT INTO Employees (EmployeeID, Name, Salary) VALUES (101, 'John Doe', 50000);
SELECT * FROM EmployeeLog;  -- Check logs









CREATE TABLE SalaryChangeLog (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeID INT,
    OldSalary INT,
    NewSalary INT,
    ChangeDate DATETIME DEFAULT GETDATE()
);

CREATE TRIGGER trg_AfterUpdateSalary
ON Employees
AFTER UPDATE
AS
BEGIN
    INSERT INTO SalaryChangeLog (EmployeeID, OldSalary, NewSalary)
    SELECT i.EmployeeID, d.Salary, i.Salary 
    FROM inserted i
    JOIN deleted d ON i.EmployeeID = d.EmployeeID
    WHERE i.Salary <> d.Salary;
END;



UPDATE Employees SET Salary = 60000 WHERE EmployeeID = 101;
SELECT * FROM SalaryChangeLog;  -- Check logs







CREATE TABLE EmployeeBackup (
    EmployeeID INT,
    Name VARCHAR(100),
    Salary INT,
    DeletedDate DATETIME DEFAULT GETDATE()
);

CREATE TRIGGER trg_AfterDelete
ON Employees
AFTER DELETE
AS
BEGIN
    INSERT INTO EmployeeBackup (EmployeeID, Name, Salary)
    SELECT EmployeeID, Name, Salary FROM deleted;
END;


DELETE FROM Employees WHERE EmployeeID = 101;
SELECT * FROM EmployeeBackup;  -- Check backups











CREATE TRIGGER trg_InsteadOfDelete
ON Employees
INSTEAD OF DELETE
AS
BEGIN
    IF EXISTS (SELECT 1 FROM deleted WHERE Salary > 100000)
    BEGIN
        RAISERROR ('High Salary employees cannot be deleted!', 16, 1);
    END
    ELSE
    BEGIN
        DELETE FROM Employees WHERE EmployeeID IN (SELECT EmployeeID FROM deleted);
    END
END;












CREATE TABLE AuditLog (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeID INT,
    ActionType VARCHAR(50),
    ActionDate DATETIME DEFAULT GETDATE()
);

CREATE TRIGGER trg_AuditChanges
ON Employees
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    INSERT INTO AuditLog (EmployeeID, ActionType)
    SELECT EmployeeID, 'Inserted' FROM inserted;
    
    INSERT INTO AuditLog (EmployeeID, ActionType)
    SELECT EmployeeID, 'Updated' FROM inserted 
    JOIN deleted ON inserted.EmployeeID = deleted.EmployeeID;
    
    INSERT INTO AuditLog (EmployeeID, ActionType)
    SELECT EmployeeID, 'Deleted' FROM deleted;
END;


INSERT INTO Employees (EmployeeID, Name, Salary) VALUES (103, 'Jane Doe', 70000);
UPDATE Employees SET Salary = 75000 WHERE EmployeeID = 103;
DELETE FROM Employees WHERE EmployeeID = 103;

SELECT * FROM AuditLog;  -- Check logs



