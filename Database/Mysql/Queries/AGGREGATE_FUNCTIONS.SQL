SELECT COUNT(*) FROM Employees;  -- Total rows in Employees table

SELECT COUNT(Salary) FROM Employees;  -- Counts only non-NULL salaries

SELECT SUM(Salary) FROM Employees;  -- Total salary payout

SELECT AVG(Salary) FROM Employees;  -- Average salary of employees

SELECT MAX(Salary) FROM Employees;  -- Highest salary

SELECT MIN(Salary) FROM Employees;  -- Lowest salary

SELECT Department, SUM(Salary) 
FROM Employees 
GROUP BY Department;

SELECT Department, SUM(Salary) 
FROM Employees 
GROUP BY Department 
HAVING SUM(Salary) > 100000;

SELECT MAX(Salary) AS MaxSalary, 
       MIN(Salary) AS MinSalary, 
       AVG(Salary) AS AvgSalary 
FROM Employees;






SELECT min(salary) from employees;
SELECT max(salary) from employees;
SELECT avg(salary) from employees;
SELECT count(*) from employees;

SELECT department_id, min(salary) from employees group by department_id order by department_id desc;
SELECT department_id, max(salary) from employees group by department_id order by department_id desc;
SELECT department_id, avg(salary) from employees group by department_id order by department_id desc;
SELECT department_id, count(salary) from employees group by department_id order by department_id desc;
SELECT department_id, sum(salary) from employees group by department_id order by department_id desc;

SELECT department_id, d.name, min(salary) 
from employees e 
left join departments d on e.department_id = d.id
group by department_id 
order by department_id desc;

SELECT department_id, d.name, max(salary) 
from employees e 
left join departments d on e.department_id = d.id
group by department_id 
order by department_id desc;

SELECT department_id, d.name, avg(salary) 
from employees e 
left join departments d on e.department_id = d.id
group by department_id 
order by department_id desc;

SELECT department_id, d.name, sum(salary) 
from employees e 
left join departments d on e.department_id = d.id
group by department_id 
order by department_id desc;

SELECT department_id, d.name, count(salary) 
from employees e 
left join departments d on e.department_id = d.id
group by department_id 
order by department_id desc;
