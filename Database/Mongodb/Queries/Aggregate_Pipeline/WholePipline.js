db.orders.insertMany([
    {
        orderId: 1,
        customerId: "customer1",
        orderDate: ISODate("2023-02-01"),
        status: "shipped",
        items: [
            { productId: "product1", quantity: 1, price: 100 },
            { productId: "product2", quantity: 2, price: 50 }
        ],
        shippingAddress: { city: "New York", country: "USA" }
    },
    {
        orderId: 2,
        customerId: "customer2",
        orderDate: ISODate("2023-02-02"),
        status: "processing",
        items: [
            { productId: "product3", quantity: 3, price: 20 },
            { productId: "product4", quantity: 1, price: 150 }
        ],
        shippingAddress: { city: "Los Angeles", country: "USA" }
    },
    {
        orderId: 3,
        customerId: "customer1",
        orderDate: ISODate("2023-02-03"),
        status: "cancelled",
        items: [
            { productId: "product5", quantity: 1, price: 200 }
        ],
        shippingAddress: { city: "Chicago", country: "USA" }
    },
    {
        orderId: 4,
        customerId: "customer3",
        orderDate: ISODate("2023-02-04"),
        status: "shipped",
        items: [
            { productId: "product6", quantity: 2, price: 30 },
            { productId: "product2", quantity: 1, price: 50 }
        ],
        shippingAddress: { city: "Houston", country: "USA" }
    },
    {
        orderId: 5,
        customerId: "customer4",
        orderDate: ISODate("2023-02-05"),
        status: "delivered",
        items: [
            { productId: "product1", quantity: 2, price: 100 },
            { productId: "product3", quantity: 1, price: 20 }
        ],
        shippingAddress: { city: "Phoenix", country: "USA" }
    },
    {
        orderId: 6,
        customerId: "customer2",
        orderDate: ISODate("2023-02-06"),
        status: "shipped",
        items: [
            { productId: "product4", quantity: 2, price: 150 }
        ],
        shippingAddress: { city: "Philadelphia", country: "USA" }
    },
    {
        orderId: 7,
        customerId: "customer5",
        orderDate: ISODate("2023-02-07"),
        status: "processing",
        items: [
            { productId: "product5", quantity: 1, price: 200 },
            { productId: "product6", quantity: 3, price: 30 }
        ],
        shippingAddress: { city: "San Antonio", country: "USA" }
    },
    {
        orderId: 8,
        customerId: "customer3",
        orderDate: ISODate("2023-02-08"),
        status: "delivered",
        items: [
            { productId: "product2", quantity: 1, price: 50 },
            { productId: "product3", quantity: 2, price: 20 }
        ],
        shippingAddress: { city: "San Diego", country: "USA" }
    },
    {
        orderId: 9,
        customerId: "customer1",
        orderDate: ISODate("2023-02-09"),
        status: "shipped",
        items: [
            { productId: "product4", quantity: 1, price: 150 },
            { productId: "product1", quantity: 1, price: 100 }
        ],
        shippingAddress: { city: "Dallas", country: "USA" }
    },
    {
        orderId: 10,
        customerId: "customer4",
        orderDate: ISODate("2023-02-10"),
        status: "cancelled",
        items: [
            { productId: "product6", quantity: 2, price: 30 },
            { productId: "product5", quantity: 1, price: 200 }
        ],
        shippingAddress: { city: "San Jose", country: "USA" }
    }
])

// Question: Count the total number of orders.
db.orders.aggregate([
    { $count: "total_orders" }
])
// Question: Calculate the total revenue from all orders.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            totalAmt: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
        }
    }
])
// Question: Find the average price of all items sold.

db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            avgitems: { $avg: "$items.price" }
        }
    }
])

// Question: List all unique products sold.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
        }
    }
])
// Question: Count the number of orders for each customer.
db.orders.aggregate([
    {
        $group: {
            _id: "$customerId",
            count: { $sum: 1 }
        }
    }
])
// Question: Find the total quantity of each product sold.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
            count: { $sum: "$items.quantity" }
        }
    }
])

// Question: List orders with more than 2 items.

db.orders.aggregate([
    {
        $match: {
            items: { $size: 2 }
        }
    }
])
// Question: Calculate the total revenue for each type of status.
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $group: {
            _id: "$status",
            total: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
        }
    }
])
// Question: Find the maximum number of items in a single order.

db.orders.aggregate(
    [
        { $project: { item_count: { $size: "$items" } }, },
        { $sort: { item_count: -1 } },
        { $limit: 1 }
    ]
)

// Question: Identify all orders that include "product1".
// Question: Calculate the average number of items per order.
// Question: List all orders shipped to "New York".
// Question: Find orders placed in February 2023.
// Question: List the total number of items ordered by each customer.
// Question: Determine the lowest price item sold across all orders.
// Question: Group orders by status and count them.
// Question: Find the total revenue per city.
// Question: List customers who have ordered "product2".
// Question: Identify orders with items priced over $150.
// Question: Calculate the average revenue per order.