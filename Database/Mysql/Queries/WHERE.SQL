
-- ------------------------------------------------------------------------------------------------------------------
-- Where 

-- Select Employees with a Specific Salary
select * from Employees where Salary = 60000

-- Select Employees in the Marketing Department
select * from Employees where department_id = (select id from Departments where name="Marketing")

-- Select Employees with More Than 4 Years of Experience
Select * from Employees where experience_years > 5

-- Select Products in the 'Furniture' Category
Select * from Products where Category = "furniture"

-- Select Employees with a Salary Less Than 50,000
Select * from Employees where Salary < 50000

-- Select Employees Who Have No Manager
select * from Employees where manager_id is NULL

-- Select Products with a Price Between 20 and 100
select * from Products where Price Between 20 and 100
select * from Products where Price not Between 20 and 100

-- Select Employees in Departments with Low Salaries
select * from Employees 

-- Select Products That Are Not in Stock
Select * from Products where Stock < 20

-- Employees in Sales with Salary Greater Than 60,000
select * from Employees where department_id = (select id from Departments where name="Sales")
and Salary > 

-- Employees in Marketing or HR with More Than 3 Years of Experience
select * from Employees where department_id in (select id from Departments where name="Sales" or name="Human Resources")
and Salary > 30000

-- Products in Electronics or Furniture with Stock Less Than 50
select * from Products where Category="Electronics" and Stock < 30

-- Employees with Salary Greater Than 70,000 in IT Department
select * from Employees where department_id = (select id from Departments where name="IT")
and Salary > 70000

-- Employees with Experience Greater Than 5 Years or Salary Less Than 50,000
select * from Employees where experience_years > 5 and Salary < 50000

-- Employees in Sales or Marketing with Salary Greater Than 60,000 or Experience Greater Than 5 Years
select * from Employees where 
department_id in ( select id from Departments where name in ('Sales','Marketing'))
and Salary > 60000
or experience_years > 5  

-- Products in Electronics or Furniture with Stock Less Than 50 and Price Greater Than 100
select * from Products where 
Category in ("Electronics","Furniture")
and (Stock < 50 and Price > 50)

-- Employees with Salary Less Than 50,000 and Experience Greater Than 3 Years in IT or HR
select * from Employees where 
Salary < 50000 
and experience_years > 3 
and department_id in (select id from Departments where name in ('IT','Human Resources'))

-- Employees in Finance or Sales with Salary Between 50,000 and 80,000 or More Than 10 Years Experience
select * from Employees
where department_id in (select id from Departments where name in ("Finance","Sales"))
and (Salary Between 50000 and 80000  or experience_years > 10) 

-- Products with Price Less Than 50 and Category in Clothing or Accessories
select * from Products 
where Price < 1000 and Category in ("Clothing","Accessories")

-- Employees with Names Starting with 'A' or 'B' and Salary Greater Than 60,000 or Experience Greater Than 5 Years
select * from Employees 
where (name like "A%" or name like "B%" )
and (Salary >  60000 or experience_years < 5 )

select * from Employees 
where name regexp "^(A|B)"
and (Salary >  60000 or experience_years < 5 )


-- Products with Stock Less Than 30 in Electronics or Toys and Price Greater Than 100
select * from Products 
where stock < 30 and Category in ("Electronics","Toys") and Price>100


-- Employees Managed by 1 or 2 with Salary Less Than 50,000 or Experience Less Than 2 Years
select * from Employees 
where manager_id in (1,2) and (Salary < 50000 or experience_years < 2 )


-- Products with Price Between 20 and 100 or Stock Greater Than 50 in Furniture or Electronics
select * from Products 
where Price Between 40 and 100 or Stock > 50 and Category in ("Furniture","Electronics")

-- Employees with Experience Greater Than 5 Years in HR or Marketing with Salary Below 40,000
select * from Employees 
where experience_years > 2 and department_id in (select id from Departments where name in ("Human Resources","Marketing"))
and Salary < 100000

-- Products in Art or Fitness Category with Stock Less Than 20 and Price Below 30
select * from Products 
where Category in ("Art","Fitness") and Stock < 20 and Price < 30

-- Products in Electronics with Price Greater Than 200 or Stock Less Than 10
select * from Products where Category = "Electronics" and Price > 200 or Stock < 10

-- Employees Managed by 3 or 4 with Salary Less Than 60,000 or Experience Greater Than 4 Years
select * from Employees where manager_id in (3,4) and Salary < 60000 or experience_years > 4 

-- Products with Names Containing 'Pro' or 'Max' and Price Less Than 100 or Stock Greater Than 50
select * from Products where name like "%pro%" or name like "%max%" and Price < 100 or Stock > 50

-- Employees with Names Starting with 'C' or 'D' and in Sales Department with Salary Over 70,000
select * from Employees 
where 
name regexp "^(C|D)" 
and 
department_id = (select id from Departments where name="Sales") and Salary > 70000

-- Employees with More Than 3 Years Experience in IT or Finance with Salary Below Average
select * from Employees 
where experience_years > 3 and department_id in (select id from Departments where name in ("it","Finance")) 
and Salary < (select avg(Salary) from Employees)
select avg(Salary) from Employees


-- Products with Price Greater Than 150 in Electronics or Home Decor
select * from Products 
where Price > 150 and Category in ("Electronics","Home Decor") 

-- Employees in HR or IT with Salary Between 50,000 and 90,000 and More Than 5 Years Experience
select * from Employees 
where department_id in (select id from Departments where name in ("Human Resources","it"))
and Salary Between 50000 and 90000 and experience_years >5 







-- Select Employees in the Marketing Department


