WITH cte_name (column1, column2, ...) AS (
    -- CTE Query
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
)
-- Main Query
SELECT * FROM cte_name;







WITH EmployeeRank AS (
    SELECT Name, Department, Salary,
           RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Rank
    FROM Employees
)
SELECT Name, Department, Salary 
FROM EmployeeRank 
WHERE Rank = 1;






WITH EmployeeHierarchy AS (
    -- Base case (Top-level managers)
    SELECT EmployeeID, Name, ManagerID, 1 AS Level
    FROM Employees
    WHERE ManagerID IS NULL

    UNION ALL

    -- Recursive case (Employees reporting to a manager)
    SELECT e.EmployeeID, e.Name, e.ManagerID, eh.Level + 1
    FROM Employees e
    INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT * FROM EmployeeHierarchy;







WITH DuplicateUsers AS (
    SELECT Email, 
           ROW_NUMBER() OVER (PARTITION BY Email ORDER BY UserID) AS RowNum
    FROM Users
)
SELECT * FROM DuplicateUsers WHERE RowNum > 1;









WITH DuplicateUsers AS (
    SELECT UserID, 
           ROW_NUMBER() OVER (PARTITION BY Email ORDER BY UserID) AS RowNum
    FROM Users
)
DELETE FROM Users WHERE UserID IN (SELECT UserID FROM DuplicateUsers WHERE RowNum > 1);










WITH RunningSales AS (
    SELECT EmployeeID, SaleDate, SaleAmount,
           SUM(SaleAmount) OVER (PARTITION BY EmployeeID ORDER BY SaleDate) AS CumulativeSales
    FROM Sales
)
SELECT * FROM RunningSales;










WITH EmployeePagination AS (
    SELECT EmployeeID, Name, Salary, 
           ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
    FROM Employees
)
SELECT * FROM EmployeePagination WHERE RowNum BETWEEN 11 AND 20;








