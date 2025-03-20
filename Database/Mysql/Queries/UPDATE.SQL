-- Update a Single Column
update employees
set
    name = "bhaat"
where
    id = 2;

select
    *
from
    employees
    -- Update Multiple Columns
Update employees
set
    salary = 100,
    experience_years = 10
where
    department_id = (
        select
            id
        from
            departments
        where
            name = "Finance"
    );

select
    *
from
    employees
    -- Update salery by 10% with Condition
update employees
set
    salary = salary * 1.10
where
    department_id = (
        select
            id
        from
            departments
        where
            name = "Sales"
    );

select
    *
from
    employees
    -- Update Based on NULL Values
Update employees
set
    department_id = 1
where
    department_id is null;

select
    *
from
    employees
    -- Update Using a Subquery
update employees e
set
    e.salary = (
        select
            avg(salary)
        from
            employees
        where
            department_id = e.department_id
    )
where
    e.name like "A%"