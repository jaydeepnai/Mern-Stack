// Basic Lookup:

// Join the orders collection with the customers collection based on the customerId field. Include customer details in the result.
// Nested Lookup:

// Join the orders collection with the customers collection first, then join the result with the products collection. Include order details, customer details, and product details.
// Lookup with Multiple Fields:

// Join the orders collection with the products collection based on both productId and categoryId. Include product details in the result for each order.
// Lookup with Pipeline:

// Join the orders collection with the products collection using a pipeline. Filter products based on a certain condition, such as price range or category.
// Lookup with Date Range:

// Join the orders collection with the products collection and filter orders based on a specific date range. Include product details in the result.
// Lookup with Sorting:

// Join the orders collection with the products collection and sort the result based on a certain field, such as product price or order date.
// Lookup with Limit and Skip:

// Join the orders collection with the products collection and limit the number of results returned. Optionally, skip a certain number of documents before returning results.
// Lookup with Custom Field Names:

// Join the orders collection with the products collection and specify custom field names for the output fields, such as renaming productId to product_id or productName to product_name.

// Inserting more products
db.products.insertMany([
    {
        "id": 124,
        "productName": "Smartphone",
        "price": 800,
        "category": "Electronics"
    },
    {
        "id": 125,
        "productName": "Headphones",
        "price": 100,
        "category": "Electronics"
    },
    {
        "id": 126,
        "productName": "Coffee Maker",
        "price": 50,
        "category": "Appliances"
    },
    {
        "id": 127,
        "productName": "Running Shoes",
        "price": 120,
        "category": "Sports"
    }
]);

// Inserting more orders
db.orders.insertMany([
    {
        "id": 13,
        "customerId": "C1002",
        "items": [
            { "productId": 124, "quantity": 1 },
            { "productId": 127, "quantity": 2 }
        ],
        "orderDate": ISODate("2024-01-05"),
        "status": "delivered"
    },
    {
        "id": 14,
        "customerId": "C1003",
        "items": [
            { "productId": 125, "quantity": 3 },
            { "productId": 127, "quantity": 3 }
        ],
        "orderDate": ISODate("2024-01-10"),
        "status": "shipped"
    },
    {
        "id": 15,
        "customerId": "C1001",
        "items": [
            { "productId": 126, "quantity": 1 }
        ],
        "orderDate": ISODate("2024-01-15"),
        "status": "pending"
    }
]);

// Inserting more Customens 
db.customers.insertMany([
    {
        "customerId": "C1001",
        "name": "John Doe",
        "email": "john@example.com",
        "address": "A3"
    },
    {
        "customerId": "C1002",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "address": "A2"
    },
    {
        "customerId": "C1003",
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "address": "A1"
    }
]);


db.addresses.insertMany([
    {
        "addressId": "A1",
        "customerId": "C1001",
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "country": "USA",
        "postalCode": "10001"
    },
    {
        "addressId": "A2",
        "customerId": "C1002",
        "street": "456 Elm St",
        "city": "Los Angeles",
        "state": "CA",
        "country": "USA",
        "postalCode": "90001"
    },
    {
        "addressId": "A3",
        "customerId": "C1003",
        "street": "789 Oak St",
        "city": "Chicago",
        "state": "IL",
        "country": "USA",
        "postalCode": "60601"
    }
]);




db.orders.aggregate([
    {
        $match: {
            "items.productId": 124 // Change this to the desired product ID
        }
    },
    {
        $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "customerId",
            as: "customerDetails"
        }
    },
    {
        $unwind: "$customerDetails"
    },
    {
        $lookup: {
            from: "addresses",
            localField: "customerDetails.address",
            foreignField: "addressId",
            as: "customerDetails.addressDetails"
        }
    },
    {
        $unwind: "$customerDetails.addressDetails"
    },
]);



// Basic Lookup:
// Question: Perform a basic $lookup operation to join the
//  orders collection with the products collection. Include the produ
// ct details in the result for each order.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "products"
        }
    }
])
//add products in items array
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "pd"
        }
    },
    { $unwind: "$pd" },
    {
        $group: {
            _id: "$_id",
            "customerId": { $first: "$customerId" },
            "orderDate": { $first: "$orderDate" },
            "status": { $first: "$status" },
            item: {
                $push: {
                    quantity: "$items.quantity",
                    pd: "$pd"
                }
            }
        }
    }
])
// Question: Join the orders collection with the customers collection first, and then join the result with the products collection. Include order details, customer details, and product details in the final output.
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "customerId",
            as: "cus_Det"
        }
    },
    { $unwind: "$cus_Det" },
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "pr_Det"
        }
    },
    { $unwind: "$pr_Det" },
    {
        $group: {
            _id: "$id",
            customerId: { $first: "$customerId" },
            status: { $first: "$status" },
            items: {
                $push: {
                    quantity: "$items.quantity",
                    prname: "$pr_Det.productName",
                }
            },
        }
    }
]);
// Question: Join the orders collection with the products collection and filter products with a price greater than $500. Include only the matching products in the result.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "products"
        }
    },
    {
        $addFields: {
            products: {
                $filter: {
                    input: "$products",
                    as: "pr",
                    cond: { $gt: ["$$pr.price", 500] }
                }
            }
        }
    }
]);
// Question: Join the orders collection with the products collection and group orders by product category. Include the count of orders and product details for each category.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "ordered_products"
        }
    },
    {
        $unwind: "$ordered_products"
    },
    {
        $group: {
            _id: "$ordered_products.category",
            total_orders: { $sum: 1 },
            products: { $push: "$ordered_products" }
        }
    }
]);
// Question: Join the orders collection with the products collection and sort the result based on product price in descending order.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "ordered_products"
        }
    },
    { $unwind: "$ordered_products" },
    { $sort: { "ordered_products.price": -1 } },
]);
// Question: Join the orders collection with the products collection and limit the result to include only the first 5 products.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "ordered_products"
        }
    },
    { $unwind: "$ordered_products" },
    { $limit: 5 }
]);
// Question: Join the orders collection with the products collection and calculate the total revenue for each order.
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "pd"
        }
    },
    { $unwind: "$pd" },
    {
        $group: {
            _id: "$id",
            customerId: { $first: "$customerId" },
            status: { $first: "$status" },
            items: {
                $push: {
                    quantity: "$items.quantity",
                    productName: "$pd.productName",
                    productID: "$pd.id",
                    totalAmount: { $multiply: ["$items.quantity", "$pd.price"] }
                }
            }
        }
    }
]);
// Question: Join the orders collection with the products collection and project only the necessary fields from the product details.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "ordered_products"
        }
    },
    { $unwind: "$ordered_products" },
    {
        $project: {
            productName: "$ordered_products.productName",
            price: "$ordered_products.price"
        }
    }
]);
// Question: Join the orders collection with the products collection and rename the output fields for product details to item_name and item_price.
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "items.productId",
            foreignField: "id",
            as: "ordered_products"
        }
    },
    {
        $unwind: "$ordered_products"
    },
    {
        $project: {
            item_name: "$ordered_products.productName",
            item_price: "$ordered_products.price"
        }
    }
]);
// Question: Join the orders collection with the products collection and include only the products that belong to a specific category.
db.orders.aggregate([
    { $lookup : {
        from:"products",
        let : { orderItems : "$items" },
        pipeline : [
             { $match: { 
                  $expr: { 
                    $and: [
                      { $in: ["$id", "$$orderItems.productId"] },
                      { $eq: ["$category", "Electronics"] }
                    ] 
                  } 
        } }
        ],
        as : "ordered_products"
    } },
]);