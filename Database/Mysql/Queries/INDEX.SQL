-- 1. Clustered Index
-- 🔹 Stores data rows in a sorted order based on the index key (only one per table).
-- 🔹 The table itself is physically organized according to this index.

CREATE CLUSTERED INDEX IX_Employees_ID 
ON Employees(EmployeeID);
-- ✅ Best for: Tables with frequent range queries and sorting.







-- 2. Non-Clustered Index
-- 🔹 Creates a separate structure to store indexed data with a pointer to the actual data row.
-- 🔹 You can create multiple non-clustered indexes on a table.

CREATE NONCLUSTERED INDEX IX_Employees_Name 
ON Employees(LastName, FirstName);
-- ✅ Best for: Fast lookup of specific columns without reorganizing the table.








-- 3. Unique Index
-- 🔹 Ensures uniqueness of values in the indexed column(s).
-- 🔹 Automatically created with PRIMARY KEY and UNIQUE constraints.

CREATE UNIQUE INDEX IX_Employees_Email 
ON Employees(Email);
-- ✅ Best for: Enforcing uniqueness (e.g., Email, Username).








-- 4. Filtered Index
-- 🔹 Index with a WHERE clause to improve performance for specific queries.
-- 🔹 Reduces index size and improves query efficiency.

CREATE NONCLUSTERED INDEX IX_Orders_Active 
ON Orders(Status) WHERE Status = 'Active';
-- ✅ Best for: Indexing a subset of data.








-- 5. Columnstore Index
-- 🔹 Stores data in a compressed columnar format instead of rows.
-- 🔹 Optimized for large-scale analytics and reporting.

CREATE CLUSTERED COLUMNSTORE INDEX IX_Sales 
ON SalesData;
-- ✅ Best for: OLAP, large datasets, and analytical queries.







-- 7. Full-Text Index
-- 🔹 Supports full-text searches for large text-based data.
-- 🔹 Used for searching words, phrases, and linguistic variations.

CREATE FULLTEXT INDEX ON Products(ProductDescription)
KEY INDEX PK_Products;
-- ✅ Best for: Searching long text fields like product descriptions.