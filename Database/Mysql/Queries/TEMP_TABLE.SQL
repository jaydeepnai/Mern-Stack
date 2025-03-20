CREATE TABLE #TempEmployee (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Salary DECIMAL(10,2)
);

INSERT INTO #TempEmployee VALUES (1, 'John', 5000), (2, 'Alice', 6000);

SELECT * FROM #TempEmployee;


CREATE PROCEDURE GetEmployeeData
AS
BEGIN
    CREATE TABLE #TempEmployees (ID INT, Name VARCHAR(50));
    
    INSERT INTO #TempEmployees VALUES (1, 'John'), (2, 'Alice');

    SELECT * FROM #TempEmployees;
END;
