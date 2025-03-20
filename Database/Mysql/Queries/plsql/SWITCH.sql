SELECT Name, Salary,
    CASE 
        WHEN Salary > 100000 THEN 'High Salary'
        WHEN Salary BETWEEN 50000 AND 100000 THEN 'Medium Salary'
        ELSE 'Low Salary'
    END AS SalaryCategory
FROM Employees;



SELECT Name, JobTitle, Salary,
    CASE JobTitle
        WHEN 'Manager' THEN Salary * 0.15
        WHEN 'Developer' THEN Salary * 0.10
        WHEN 'Intern' THEN Salary * 0.05
        ELSE 0
    END AS Bonus
FROM Employees;




UPDATE Employees
SET Department = 
    CASE 
        WHEN JobTitle = 'Manager' THEN 'Management'
        WHEN JobTitle = 'Developer' THEN 'IT'
        WHEN JobTitle = 'HR' THEN 'Human Resources'
        ELSE 'General'
    END;




SELECT Name, YearsOfExperience,
    CASE 
        WHEN YearsOfExperience >= 10 THEN 'Senior'
        WHEN YearsOfExperience BETWEEN 5 AND 9 THEN 'Mid-Level'
        ELSE 'Junior'
    END AS ExperienceLevel
FROM Employees;



SELECT Name, PerformanceScore
FROM Employees
ORDER BY 
    CASE 
        WHEN PerformanceScore >= 90 THEN 1  -- High Performers first
        WHEN PerformanceScore BETWEEN 70 AND 89 THEN 2 -- Mid Performers
        ELSE 3  -- Low Performers last
    END;
