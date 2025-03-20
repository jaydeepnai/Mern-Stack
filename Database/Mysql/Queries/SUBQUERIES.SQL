-- ✅ Displays each employee's details along with the average salary.
SELECT EmployeeID, Name, 
       (SELECT AVG(Salary) FROM Employees) AS AvgSalary
FROM Employees;


-- ✅ Groups salary by department using a subquery.
SELECT Department, AvgSalary
FROM (SELECT Department, AVG(Salary) AS AvgSalary FROM Employees GROUP BY Department) AS SalaryStats;


-- ✅ Finds employees earning above the average salary.
SELECT * FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees);


-- ✅ Departments with an above-average salary.
SELECT Department, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
HAVING AVG(Salary) > (SELECT AVG(Salary) FROM Employees);


-- ✅ Finds employees working in New York-based departments.
SELECT * FROM Employees 
WHERE Department IN (SELECT DeptName FROM Departments WHERE Location = 'New York');


-- ✅ Excludes employees from New York-based departments.
SELECT * FROM Employees 
WHERE Department NOT IN (SELECT DeptName FROM Departments WHERE Location = 'New York');


-- ✅ Returns employees only if IT exists in the Departments table.
SELECT * FROM Employees e
WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.DeptID = e.DeptID AND d.DeptName = 'IT');


-- ✅ Finds employees who are not managing any projects.
SELECT * FROM Employees e
WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.ManagerID = e.EmployeeID);


-- ✅ Finds employees earning above the average salary of their department.
SELECT e1.EmployeeID, e1.Name, e1.Salary
FROM Employees e1
WHERE Salary > (SELECT AVG(e2.Salary) FROM Employees e2 WHERE e2.Department = e1.Department);


-- ✅ Finds employees who were absent for more than 5 days.
SELECT * FROM Employees
WHERE EmployeeID IN (SELECT EmployeeID FROM Attendance WHERE DaysAbsent > 5);


SELECT * FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE Department IN 
               (SELECT DeptName FROM Departments WHERE Location = 'New York'));
-- ✅ Finds employees earning above the average salary of New York departments.


SELECT Name, Salary FROM Employees e1
WHERE Salary = (SELECT MAX(Salary) FROM Employees e2 WHERE e2.Department = e1.Department);
-- ✅ Finds highest-paid employees in each department.


SELECT * FROM Employees
WHERE Salary = (SELECT MAX(Salary) FROM Employees WHERE Department IN 
               (SELECT DeptName FROM Departments WHERE Location IN 
               (SELECT DISTINCT Location FROM Offices WHERE Country = 'USA')));
✅ Finds the highest-paid employee in each department of US-based offices.


SELECT TOP 1 Salary FROM (
    SELECT DISTINCT TOP 2 Salary FROM Employees ORDER BY Salary DESC
) AS Sub;
-- ✅ Fetches the 2nd highest salary.


SELECT Salary FROM (
    SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank
    FROM Employees
) AS Sub
WHERE Rank = 3;
-- ✅ Fetches the 3rd highest salary.


SELECT EmployeeID, Name, Salary,
       ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RowNum
FROM Employees;
-- ✅ Assigns a row number to each employee per department, sorted by salary.


SELECT Department
FROM Employees
GROUP BY Department
HAVING MAX(Salary) > (SELECT AVG(Salary) FROM Employees);
-- ✅ Finds departments where the highest salary is above the company-wide average.


SELECT Name, 
       (CASE 
            WHEN Salary > (SELECT AVG(Salary) FROM Employees) THEN 'Above Avg' 
            ELSE 'Below Avg' 
        END) AS SalaryStatus
FROM Employees;
-- ✅ Labels employees as 'Above Avg' or 'Below Avg' based on salary.


DELETE FROM Employees
WHERE EmployeeID IN (SELECT EmployeeID FROM FiredEmployees);
-- ✅ Deletes employees who exist in the FiredEmployees table.



UPDATE Employees
SET Salary = Salary * 1.10
WHERE EmployeeID IN (SELECT EmployeeID FROM TopPerformers);
-- ✅ Gives a 10% raise to top performers.



UPDATE Employees
SET Salary = Salary * 1.10
WHERE EmployeeID IN (SELECT EmployeeID FROM TopPerformers);
-- ✅ Gives a 10% raise to top performers.


SELECT EmployeeID FROM Employees
INTERSECT
SELECT EmployeeID FROM ProjectTeam;
-- ✅ Finds employees who are also part of a project team.


SELECT Department
FROM Employees
GROUP BY Department
HAVING COUNT(*) > (SELECT AVG(EmployeeCount) FROM 
                   (SELECT COUNT(*) AS EmployeeCount FROM Employees GROUP BY Department) AS Sub);
-- ✅ Finds departments with more employees than the average department size.


SELECT Department, SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY Department
HAVING SUM(Salary) > (SELECT SUM(Salary)/2 FROM Employees);
-- ✅ Finds departments where the total salary exceeds half the company's payroll.


SELECT Name, COUNT(*)
FROM Employees
GROUP BY Name
HAVING COUNT(*) > 1;
-- ✅ Identifies duplicate employee names.


DELETE FROM Employees
WHERE EmployeeID NOT IN (
    SELECT MIN(EmployeeID)
    FROM Employees
    GROUP BY Name, Salary, Department
);
-- ✅ Deletes duplicate rows while keeping the first occurrence.


SELECT e.Name AS Employee, 
       (SELECT Name FROM Employees m WHERE m.EmployeeID = e.ManagerID) AS Manager
FROM Employees e;
-- ✅ Finds the manager's name using a subquery.


SELECT e.Name, 
       (SELECT DepartmentName FROM Departments d WHERE d.DepartmentID = e.DepartmentID) AS Department
FROM Employees e;
-- ✅ Fetches department names using a subquery.


SELECT Name, Salary 
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);
-- ✅ Finds employees earning above the average salary.