SELECT PlayerName, Score, RANK() OVER (ORDER BY Score DESC) AS Rank 
FROM Players;

-- 🎯 Output:

-- PlayerName	Score	Rank
-- Alice	100	1
-- Bob	95	2
-- Charlie	95	2
-- David	90	4

SELECT StudentName, Marks, DENSE_RANK() OVER (ORDER BY Marks DESC) AS Rank 
FROM Students;

-- 🎯 Output:

-- StudentName	Marks	Rank
-- Alice	100	1
-- Bob	95	2
-- Charlie	95	2
-- David	90	3



SELECT Name, Salary, RANK() OVER (ORDER BY Salary DESC) AS Rank 
FROM Employees 
WHERE RANK() OVER (ORDER BY Salary DESC) <= 3;


-- 🎯 Output:

-- Name	Salary	Rank
-- Alice	80000	1
-- Bob	75000	2
-- Charlie	75000	2
-- David	70000	4




SELECT column1, column2, 
       ROW_NUMBER() OVER (PARTITION BY column_name ORDER BY column_name DESC) AS RowNum 
FROM table_name;



-- 🎯 Scenario: Assign a unique row number to employees within each department, ordered by salary.

-- 🔹 Employee Table:

-- EmployeeID	Name	Department	Salary
-- 101	Alice	IT	60000
-- 102	Bob	IT	50000
-- 103	Charlie	HR	55000
-- 104	David	HR	53000
-- 105	Eve	IT	45000
-- 106	Frank	HR	50000
-- 🔹 Query:

SELECT Name, Department, Salary, 
       ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RowNum 
FROM Employees;
-- 🔹 Output:

-- Name	Department	Salary	RowNum
-- Alice	IT	60000	1
-- Bob	IT	50000	2
-- Eve	IT	45000	3
-- Charlie	HR	55000	1
-- David	HR	53000	2
-- Frank	HR	50000	3
