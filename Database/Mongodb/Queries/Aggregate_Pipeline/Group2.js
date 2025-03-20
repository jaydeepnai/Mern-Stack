db.orders.insertMany([
  {
    _id: 1,
    customer: "Alice",
    age: 28,
    category: "Electronics",
    products: [
      { name: "Laptop", brand: "Dell", price: 800, quantity: 2 },
      { name: "Mouse", brand: "Logitech", price: 50, quantity: 1 },
    ],
    discount: 0.1,
    payment: { method: "Credit Card", status: "Completed" },
    tags: ["tech", "new"],
    orderDate: ISODate("2024-03-01T10:15:00Z"),
    delivered: true,
  },
  {
    _id: 2,
    customer: "Bob",
    age: 35,
    category: "Electronics",
    products: [
      { name: "Phone", brand: "Apple", price: 1200, quantity: 1 },
      { name: "Headphones", brand: "Sony", price: 200, quantity: 2 },
    ],
    discount: 0.05,
    payment: { method: "UPI", status: "Completed" },
    tags: ["mobile", "premium"],
    orderDate: ISODate("2024-02-28T14:30:00Z"),
    delivered: false,
  },
  {
    _id: 3,
    customer: "Charlie",
    age: 40,
    category: "Fashion",
    products: [
      { name: "Shoes", brand: "Nike", price: 150, quantity: 2 },
      { name: "T-Shirt", brand: "Adidas", price: 50, quantity: 3 },
    ],
    discount: 0.2,
    payment: { method: "Debit Card", status: "Pending" },
    tags: ["sports", "new"],
    orderDate: ISODate("2024-02-25T08:45:00Z"),
    delivered: true,
  },
  {
    _id: 4,
    customer: "David",
    age: 23,
    category: "Electronics",
    products: [
      { name: "Tablet", brand: "Samsung", price: 600, quantity: 3 },
      { name: "Smartwatch", brand: "Fitbit", price: 250, quantity: 1 },
    ],
    discount: 0.15,
    payment: { method: "Credit Card", status: "Completed" },
    tags: ["tablet", "discount"],
    orderDate: ISODate("2024-03-02T12:20:00Z"),
    delivered: false,
  },
  {
    _id: 5,
    customer: "Emma",
    age: 30,
    category: "Fashion",
    products: [
      { name: "Dress", brand: "Gucci", price: 500, quantity: 1 },
      { name: "T-Shirt", brand: "Adidas", price: 50, quantity: 2 },
    ],
    discount: 0.3,
    payment: { method: "UPI", status: "Completed" },
    tags: ["clothing", "summer"],
    orderDate: ISODate("2024-02-26T18:10:00Z"),
    delivered: true,
  },
  {
    _id: 6,
    customer: "Alice",
    age: 28,
    category: "Electronics",
    products: [
      { name: "Headphones", brand: "Sony", price: 200, quantity: 4 },
      { name: "Power Bank", brand: "Anker", price: 100, quantity: 1 },
    ],
    discount: 0.1,
    payment: { method: "Debit Card", status: "Completed" },
    tags: ["audio", "tech"],
    orderDate: ISODate("2024-03-03T15:45:00Z"),
    delivered: true,
  },
]);

db.orders.find({}
,{id:1,customer:1, category:1}
).pretty()

// 1️⃣ Count orders per category
db.orders.aggregate([
{
  $group : {
    _id : "$category",
    totalAwards : { $sum : 1 }
  }
}
])

// 2️⃣ Find total revenue per category
db.orders.aggregate([
  {
    $unwind : "$products"
  },
  {
    $group : {
      _id : "$category",
      TotalProductsRevenue : {
        $sum : { $multiply : ["$products.price","$products.quantity"] }
      }
    }
  }
]).pretty()

// 3️⃣ Find total quantity sold per product
db.orders.aggregate([
  {
    $unwind : "$products"
  },
  {
  $group : {
    _id : "$products.name",
    totalProductSold : {
      $sum : "$products.quantity"
    }
  }
  }
]).pretty()

// 5️⃣ Find total revenue per customer
db.orders.aggregate([
  {
    $unwind : "$products"
  },
  {
    $group : {
      _id : "$customer",
      total : {
        $sum : { $multiply : ["$products.price","$products.quantity"] }
      }
    }
  }
])

// 6️⃣ Find the most recent order for each customer
db.orders.aggregate([
  {
    $sort : {
      orderDate : -1
    }
  },
  {
    $group : {
      _id : "$customer",
      order : { $first : "$$ROOT" }
    }
  }
]).pretty()

// 8️⃣ Find total discount given per category
db.orders.aggregate([
  {
    $group : {
      _id : "$category",
      orderDiscounts : {
        $sum : "$discount"
      }
    }
  }
]).pretty()

// 9️⃣ Count orders per payment method
db.orders.aggregate([
  {
    $group : {
      _id : "$payment.method",
      orders : {
        $sum : 1
      }
    }
  }
]).pretty()

// 🔟 Get customers who have placed multiple orders
db.orders.aggregate([
  {
    $group : {
      _id : "$customer",
      orders : {
        $push : "$$ROOT"
      },
      orderCounts :{
        $sum : 1
      }
    }
  },
  {
    $match : {
        $expr : {
          $gt : [{$size : "$orders"},1]
      }
    }
  }
]).pretty()

// 1️⃣ Find the most popular product (highest quantity sold)
db.orders.aggregate([
  { $unwind : "$products" },
  {
    $group : {
      _id : "$products.name",
      pd : {
        $push : "$products"
      },
      totalQuntity : {
        $sum : "$products.quantity"
      }
    }
  },
  {
    $sort : {
      totalQuntity : -1
    }
  }
]).pretty()

// 2️⃣ Find the highest spending customer
db.orders.aggregate([
  {
    $unwind : "$products"
  },
  {
    $group : {
      _id : "$customer",
      orders : {
        $push : "$products"
      },
      total :{
        $sum : {
          $multiply :["$products.price","$products.quantity"]
        }
      }
    }
  },
  {
    $sort : {
      total : -1
    }
  },
  {
    $limit : 1
  }
]).pretty()
