-- ✅ Counts the number of employees in each department.
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department;


-- ✅ Groups by Department and Job Title, counting employees in each category.
SELECT Department, JobTitle, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department, JobTitle;


-- ✅ Calculates average, total, max, and min salary per department.
SELECT Department, 
       AVG(Salary) AS AvgSalary, 
       SUM(Salary) AS TotalSalary, 
       MAX(Salary) AS MaxSalary, 
       MIN(Salary) AS MinSalary
FROM Employees
GROUP BY Department;


-- ✅ Only departments with more than 10 employees are shown.
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 10;


-- ✅ Only employees earning above 50,000 are considered before grouping.
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
WHERE Salary > 50000
GROUP BY Department;


-- ✅ Groups employees by department and sorts by employee count (highest first).
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department
ORDER BY EmployeeCount DESC;


-- ✅ Groups employees by department name (from another table).
SELECT d.DeptName, COUNT(e.EmployeeID) AS EmployeeCount
FROM Employees e
JOIN Departments d ON e.DeptID = d.DeptID
GROUP BY d.DeptName;


-- ✅ Finds departments where the average salary is greater than 50,000.
SELECT Department, AvgSalary
FROM (
    SELECT Department, AVG(Salary) AS AvgSalary
    FROM Employees
    GROUP BY Department
) AS SalaryStats
WHERE AvgSalary > 50000;


-- ✅ Counts employees hired per year.
SELECT YEAR(HireDate) AS HireYear, COUNT(*) AS Hires
FROM Employees
GROUP BY YEAR(HireDate);
