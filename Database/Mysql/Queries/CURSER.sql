DECLARE @EmpID INT, @EmpSalary DECIMAL(10,2);

-- Declare Cursor
DECLARE SalaryCursor CURSOR FOR  
SELECT EmployeeID, Salary FROM Employees WHERE Age > 40;

-- Open Cursor
OPEN SalaryCursor;

-- Fetch First Row
FETCH NEXT FROM SalaryCursor INTO @EmpID, @EmpSalary;

-- Loop Through Rows
WHILE @@FETCH_STATUS = 0  
BEGIN  
    -- Update Salary (Increase by 10%)
    UPDATE Employees 
    SET Salary = @EmpSalary * 1.10 
    WHERE EmployeeID = @EmpID;
    
    -- Fetch Next Row
    FETCH NEXT FROM SalaryCursor INTO @EmpID, @EmpSalary;  
END  

-- Close and Deallocate Cursor
CLOSE SalaryCursor;  
DEALLOCATE SalaryCursor;















DECLARE @OrderID INT, @CustomerID INT, @OrderDate DATE;

-- Declare Cursor
DECLARE OrderCursor CURSOR FOR  
SELECT OrderID, CustomerID, OrderDate FROM Orders WHERE Status = 'Pending';

-- Open Cursor
OPEN OrderCursor;

-- Fetch First Row
FETCH NEXT FROM OrderCursor INTO @OrderID, @CustomerID, @OrderDate;

-- Loop Through Orders
WHILE @@FETCH_STATUS = 0  
BEGIN  
    PRINT 'Processing Order: ' + CAST(@OrderID AS VARCHAR) + ', Customer: ' + CAST(@CustomerID AS VARCHAR);
    
    -- Fetch Next Order
    FETCH NEXT FROM OrderCursor INTO @OrderID, @CustomerID, @OrderDate;  
END  

-- Close and Deallocate Cursor
CLOSE OrderCursor;  
DEALLOCATE OrderCursor;















DECLARE @EmpID INT, @TotalSales DECIMAL(10,2);

-- Declare Cursor
DECLARE SalesCursor CURSOR FOR  
SELECT EmployeeID, SUM(SaleAmount) 
FROM Sales 
GROUP BY EmployeeID 
HAVING SUM(SaleAmount) > 100000;

-- Open Cursor
OPEN SalesCursor;

-- Fetch First Row
FETCH NEXT FROM SalesCursor INTO @EmpID, @TotalSales;

-- Loop Through Rows
WHILE @@FETCH_STATUS = 0  
BEGIN  
    PRINT 'Top Sales Employee ID: ' + CAST(@EmpID AS VARCHAR) + ' | Total Sales: ' + CAST(@TotalSales AS VARCHAR);
    
    -- Fetch Next Row
    FETCH NEXT FROM SalesCursor INTO @EmpID, @TotalSales;  
END  

-- Close and Deallocate Cursor
CLOSE SalesCursor;  
DEALLOCATE SalesCursor;
















DECLARE @ProductID INT, @StockQty INT;

-- Declare Cursor
DECLARE InventoryCursor CURSOR FOR  
SELECT ProductID, StockQuantity FROM Products WHERE StockQuantity < 10;

-- Open Cursor
OPEN InventoryCursor;

-- Fetch First Row
FETCH NEXT FROM InventoryCursor INTO @ProductID, @StockQty;

-- Loop Through Products
WHILE @@FETCH_STATUS = 0  
BEGIN  
    PRINT 'Product ID: ' + CAST(@ProductID AS VARCHAR) + ' is low in stock. Current stock: ' + CAST(@StockQty AS VARCHAR);
    
    -- Fetch Next Row
    FETCH NEXT FROM InventoryCursor INTO @ProductID, @StockQty;  
END  

-- Close and Deallocate Cursor
CLOSE InventoryCursor;  
DEALLOCATE InventoryCursor;











DECLARE @ProductID INT, @StockQty INT;

-- Declare Cursor
DECLARE InventoryCursor CURSOR FOR  
SELECT ProductID, StockQuantity FROM Products WHERE StockQuantity < 10;

-- Open Cursor
OPEN InventoryCursor;

-- Fetch First Row
FETCH NEXT FROM InventoryCursor INTO @ProductID, @StockQty;

-- Loop Through Products
WHILE @@FETCH_STATUS = 0  
BEGIN  
    PRINT 'Product ID: ' + CAST(@ProductID AS VARCHAR) + ' is low in stock. Current stock: ' + CAST(@StockQty AS VARCHAR);
    
    -- Fetch Next Row
    FETCH NEXT FROM InventoryCursor INTO @ProductID, @StockQty;  
END  

-- Close and Deallocate Cursor
CLOSE InventoryCursor;  
DEALLOCATE InventoryCursor;









