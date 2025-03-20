SELECT ISNULL(NULL, 'Default Value');  -- Output: 'Default Value'
SELECT ISNULL(Salary, 0) FROM Employees;  -- Replace NULL salary with 0

SELECT COALESCE(NULL, NULL, 'Value Found', NULL);  -- Output: 'Value Found'
SELECT COALESCE(Phone, Mobile, Email, 'No Contact Info') FROM Employees;

SELECT IFNULL(NULL, 'Fallback Value');  -- Output: 'Fallback Value' (Only in MySQL)

SELECT Name, ISNULL(Salary, 0) AS Salary_Handled FROM Employees;

SELECT NVL(NULL, 'No Value') FROM DUAL;  -- Output: 'No Value'
SELECT NVL(5000, 0) FROM DUAL;           -- Output: 5000

SELECT NVL2(NULL, 'Present', 'Absent') FROM DUAL;  -- Output: 'Absent'
SELECT NVL2(100, 'Valid', 'Invalid') FROM DUAL;    -- Output: 'Valid'

SELECT Name, NVL(Salary, 0) AS Salary_Handled FROM Employees;

