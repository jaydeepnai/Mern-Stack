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
    },
    {
        orderId: 12,
        customerId: "customer8",
        orderDate: ISODate("2024-03-10"),
        status: "cancelled",
        items: [
            { productId: "product6", quantity: 2, price: 30 },
            { productId: "product5", quantity: 1, price: 200 }
        ],
        shippingAddress: { city: "San Jose", country: "USA" }
    }
])

//get highestRevenueOrder 
db.orders.aggregate([
  {
      $addFields: {
          totalRevenue: { 
              $sum: { 
                  $map: { 
                      input: "$items", 
                      as: "item", 
                      in: { $multiply: ["$$item.quantity", "$$item.price"] }
                  }
              }
          }
      }
  },
  {
      $sort: { customerId: 1, totalRevenue: -1 }
  },
  {
      $group: {
          _id: "$customerId",
          highestRevenueOrder: { $first: "$$ROOT" }
      }
  },
  {
      $replaceRoot: { newRoot: "$highestRevenueOrder" }
  }
]);


// Question-1: Group orders by customer ID and count the number of orders per customer.
db.orders.aggregate([
    {
        $group: {
            _id: "$customerId",
            totol: { $sum: 1 }
        }
    }
])
// Question-2: Calculate the total revenue from all orders.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            totol: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
        }
    }
])
// Question-3: Find the average price of items sold, grouped by product ID.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
            totol: { $avg: "$items.price" }
        }
    }
])
// Question-4: Count how many orders were shipped to each city.
db.orders.aggregate([
    {
        $group: {
            _id: "$shippingAddress.city",
            totol: { $sum: 1 }
        }
    }
])
// Question-5: Determine the total number of items sold per product.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
            totol: { $sum: "$items.quantity" }
        }
    }
])
// Question-6: Calculate the maximum price of any item sold across all orders.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            totol: { $max: "$items.price" }
        }
    }
])

// Question-7: Sum up the revenue for each order status.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$status",
            totol: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
        }
    }
])

// Question-8: Find the minimum number of items in any order.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            min_items: {
                $min: {
                    $sum: "$items.quantity"
                }
            }
        }
    }
])
// Question-9: Group orders by country and calculate the average order value.


db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$shippingAddress.country",
            avgPrice: {
                $avg: "$items.price"
            }
        }
    }
])

// Question-10: List the total revenue generated from each product type.
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $group: {
            _id: "$items.productId",
            total_revenue: {
                $sum: {
                    $multiply: ["$items.price", "$items.quantity"]
                }
            }
        }
    }
])
// Question-11: Calculate the total number of items shipped, grouped by order date.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$orderDate",
            itemsCount: {
                $sum: 1
            }
        }
    }
])



// Question-12: Determine the average number of items per order for each customer.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$orderDate",
            itemsCount: {
                $sum: 1
            }
        }
    }
])

// Question-13: Count the number of orders in each status category.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$status",
            itemsCount: {
                $sum: 1
            }
        }
    }
])




// Question-14: Find the average item price for each city.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$shippingAddress.city",
            itemsCount: {
                $avg: "$items.price"
            }
        }
    }
])




// Question-15: Calculate the total revenue for each city.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$shippingAddress.city",
            itemsCount: {
                $sum: { $multiply: ["$items.price", "$items.quantity"] }
            }
        }
    }
])

// Question-16: Identify the highest revenue order for each customer.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$customerId",
            itemsSum: {
                $sum: { $multiply: ["$items.price", "$items.quantity"] }
            }
        }
    }
])

// Question-17: Count the total number of cancelled orders.
db.orders.aggregate([
    { $match: { status: "cancelled" } },
    { $group: { _id: null, count: { $sum: 1 } } }
])
// Question-18: Find the lowest number of attendees for each type of status.
db.orders.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$status", min_attendees: { $min: "$items.quantity" } } }
])
// Question-19: Calculate the total revenue for each customer.
db.orders.aggregate([{
    $unwind: "$items"
},
{
    $group: {
        _id: "$customerId", total_customer_revenue: {
            $sum: {
                $multiply: ["$items.price", "$items.quantity"]
            }
        }
    }
}
])
// Question-20: Group orders by order date and count the total orders per date.
db.orders.aggregate([
    {
        $group: {
            _id: "$orderDate", total_orders: { $sum: 1 }
        }
    }
])

//Question-21: Total Value of All Orders
//Group all orders and calculate the total value of items in each order (sum of quantity * price for each item in the order).
db.orders.aggregate([
  {
    $unwind:"$items"
  },
  {
    $group:{
      _id:11,
      totalValue:{
        $sum:{
          $multiply:[
            "$items.quantity","$items.price"
          ]
        }
      }
    }
  }
])

//Question-22: Calculate the total number of items sold per city. 
//Group orders by the shipping city and sum up the total number of items sold in each city.
db.orders.aggregate([
  {
    $unwind:"$items"
  },
  {
    $group:{
      _id:"$shippingAddress.city",
      totalSold:{
        $sum:"$items.quantity"
      }
    }
  }
])

//Question-23: Find the average order value for each customer. 
//Calculate the average total value of orders placed by each customer, considering the sum of item prices for each order.
db.orders.aggregate([
  {
    $unwind:"$items"
  },
  {
    $group:{
      _id:"$customerId",
      avgTotal:{
        $avg:{
          $multiply:[
            "$items.price","$items.quantity"
          ]
        }
      },
      orderCount:{
        $sum:1
      }
    }
  }
])

//Question-24: Find the product with the highest total revenue. 
//Group orders by product and calculate the total revenue (quantity * price). Then, sort by the highest total revenue.
db.orders.aggregate([
  {
    $unwind:"$items"
  },
  {
    $group:{
      _id:"$items.productId",
      totalRev:{
        $sum:{
          $multiply:[
            "$items.quantity","$items.price"
          ]
        }
      }
    }
  },{
    $sort:{
      totalRev:-1
    }
  }
])

//Question-25: Calculate the average quantity of items ordered for each order. 
//Group by order and calculate the average quantity of items in each order.
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"$orderId",
      avgQuantity:{
        $avg:"$items.quantity"
      }
    }
  }
])

//Question-26: Find the customer who has placed the highest number of orders
db.orders.aggregate([
  {
    $unwind:"$items"
  },
  {
    $group:{
      _id:"$customerId",
      totalOrders:{
        $sum:"$items.quantity"
      }
    }
  },
  {
    $sort:{
      totalOrders:-1
    }
  },
  {
    $limit:1
  }
])

//Question-27: Find the most frequently ordered product.
db.orders.aggregate([
  {
    $unwind:"$items"
  },
  {
    $group:{
      _id:"$items.productId",
      ordersCount:{
        $sum:"$items.quantity"
      }
    }
  },
  {
    $sort:{
      ordersCount:-1
    }
  },{
    $limit:1
  }
])

//Question-28: Calculate the average order value for each order.
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"$orderId",
      avgValue:{
        $avg:{
          $multiply:[
            "$items.quantity" , "$items.price"
          ]
        }
      }
    }
  }
])

//Question-29: Determine the month with the highest total revenue.
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:{
        $month:"$orderDate"
      },
      revenue:{
        $sum:{
          $multiply:["$items.price","$items.quantity"]
        }
      }
    }
  },{
    $sort:{
      revenue:-1
    }
  },{
    $limit:1
  }
])

//Question-30: Count the number of distinct customers who placed orders.
db.orders.aggregate([
  {
    $group:{
      _id:"$customerId"
    }
  },{
    $count:"nOfCustomers"
  }
])

//Question-31: Find the day with the most orders placed.
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:{
        $dayOfWeek:"$orderDate"
      },
      totalOrders:{
        $sum:"$items.quantity"
      }
    }
  },{
    $sort:{
      totalOrders:-1
    }
  },{
    $limit:1
  }
])

//Question-32: Find the highest-priced item ever ordered.
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"$items.price",
    }
  },{
    $sort:{
      _id:-1
    }
  },{
    $limit:1
  }
])
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"costliest",
      costliest:{
        $max:"$items.price"
      }
    }
  }
])

//Question-33: Calculate the average order amount per customer
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"$customerId",
      avgOrderAmount:{
        $avg:{
          $multiply:["$items.price","$items.quantity"]
        }
      }
    }
  }
])

//Question-34: Find the most expensive order placed
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"$orderId",
      totalCost:{
        $sum:{
          $multiply:["$items.quantity","$items.price"]
        }
      }
    }
  },{
    $sort:{
      totalCost:-1
    }
  },{
    $limit:1
  }
])

//Question-35: Find the total revenue for each year
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:{
        $year:"$orderDate"
      },
      revenue:{
        $sum:{
          $multiply:["$items.quantity","$items.price"]
        }
      }
    }
  }
])

//Question-36: Find the customer with the highest total order value
db.orders.aggregate([
  {
    $unwind:"$items"
  },{
    $group:{
      _id:"$customerId",
      orderValue:{
        $sum:{
          $multiply:["$items.price","$items.quantity"]
        }
      }
    }
  },{
    $sort:{
      orderValue:-1
    }
  },{
    $limit:1
  }
])