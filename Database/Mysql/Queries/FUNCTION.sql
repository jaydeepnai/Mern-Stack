CREATE FUNCTION GetFullName(@FirstName VARCHAR(50), @LastName VARCHAR(50))
RETURNS VARCHAR(100)
AS
BEGIN
    RETURN @FirstName + ' ' + @LastName;
END;

SELECT dbo.GetFullName('John', 'Doe') AS FullName;



CREATE FUNCTION GetBonus(@Salary INT)
RETURNS INT
AS
BEGIN
    DECLARE @Bonus INT;
    SET @Bonus = @Salary * 0.10;  -- 10% Bonus
    RETURN @Bonus;
END;

SELECT dbo.GetBonus(50000) AS BonusAmount;




CREATE FUNCTION GetHighSalaryEmployees(@MinSalary INT)
RETURNS TABLE
AS
RETURN 
(
    SELECT * FROM Employees WHERE Salary >= @MinSalary
);


SELECT * FROM dbo.GetHighSalaryEmployees(70000);




CREATE FUNCTION GetEmployeeAge(@DOB DATE)
RETURNS INT
AS
BEGIN
    RETURN DATEDIFF(YEAR, @DOB, GETDATE());
END;


SELECT dbo.GetEmployeeAge('1990-05-15') AS Age;







CREATE FUNCTION GetEmployeesByDepartment(@Dept VARCHAR(50))
RETURNS TABLE
AS
RETURN 
(
    SELECT * FROM Employees WHERE Department = @Dept
);


SELECT * FROM dbo.GetEmployeesByDepartment('IT');

