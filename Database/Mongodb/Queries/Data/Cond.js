db.products.insertMany([
  {
    _id: ObjectId("65fa1111111"),
    name: "iPhone 15 Pro",
    category: "Smartphones",
    brand: "Apple",
    price: 1200,
    stock: 50,
    specifications: { storage: "256GB", battery: "4500mAh", color: "Titanium" },
    discount: 10,
    availableInStores: ["New York", "Los Angeles"]
  },
  {
    _id: ObjectId("65fa1111112"),
    name: "Samsung Galaxy S23 Ultra",
    category: "Smartphones",
    brand: "Samsung",
    price: 1300,
    stock: 40,
    specifications: { storage: "512GB", battery: "5000mAh", color: "Phantom Black" },
    discount: 8,
    availableInStores: ["San Francisco", "Miami"]
  },
  {
    _id: ObjectId("65fa1111113"),
    name: "MacBook Pro M3 Max",
    category: "Laptops",
    brand: "Apple",
    price: 3500,
    stock: 10,
    specifications: { ram: "32GB", storage: "1TB SSD", display: "Liquid Retina XDR" },
    discount: 5,
    availableInStores: ["Chicago", "Houston"]
  },
  {
    _id: ObjectId("65fa1111114"),
    name: "Sony WH-1000XM5",
    category: "Headphones",
    brand: "Sony",
    price: 400,
    stock: 100,
    specifications: { batteryLife: "30 Hours", noiseCancellation: true, color: "Black" },
    discount: 15,
    availableInStores: ["Seattle", "Austin"]
  },
  {
    _id: ObjectId("65fa1111115"),
    name: "PlayStation 5",
    category: "Gaming",
    brand: "Sony",
    price: 500,
    stock: 25,
    specifications: { processor: "AMD Zen 2", storage: "1TB SSD", graphics: "Ray Tracing Support" },
    discount: 10,
    availableInStores: ["Las Vegas", "Denver"]
  }
]);



db.users.insertMany([
  {
    _id: ObjectId("65fa2222221"),
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-1234",
    addresses: [{ type: "Home", city: "New York", zip: "10001" }]
  },
  {
    _id: ObjectId("65fa2222222"),
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "+1-555-5678",
    addresses: [{ type: "Home", city: "San Francisco", zip: "94105" }]
  },
  {
    _id: ObjectId("65fa2222223"),
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1-555-9876",
    addresses: [{ type: "Home", city: "Chicago", zip: "60601" }]
  },
  {
    _id: ObjectId("65fa2222224"),
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    phone: "+1-555-4321",
    addresses: [{ type: "Home", city: "Seattle", zip: "98101" }]
  },
  {
    _id: ObjectId("65fa2222225"),
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1-555-2468",
    addresses: [{ type: "Home", city: "Las Vegas", zip: "89109" }]
  }
]);




db.orders.insertMany([
  {
    _id: ObjectId("65fa3333331"),
    userId: ObjectId("65fa2222221"),
    items: [{ productId: ObjectId("65fa1111111"), quantity: 1, price: 1200 }],
    totalAmount: 1200,
    orderStatus: "Shipped",
    paymentId: ObjectId("65fa4444441")
  },
  {
    _id: ObjectId("65fa3333332"),
    userId: ObjectId("65fa2222222"),
    items: [{ productId: ObjectId("65fa1111112"), quantity: 1, price: 1300 }],
    totalAmount: 1300,
    orderStatus: "Processing",
    paymentId: ObjectId("65fa4444442")
  },
  {
    _id: ObjectId("65fa3333333"),
    userId: ObjectId("65fa2222223"),
    items: [{ productId: ObjectId("65fa1111113"), quantity: 1, price: 3500 }],
    totalAmount: 3500,
    orderStatus: "Delivered",
    paymentId: ObjectId("65fa4444443")
  },
  {
    _id: ObjectId("65fa3333334"),
    userId: ObjectId("65fa2222224"),
    items: [{ productId: ObjectId("65fa1111114"), quantity: 2, price: 800 }],
    totalAmount: 800,
    orderStatus: "Shipped",
    paymentId: ObjectId("65fa4444444")
  },
  {
    _id: ObjectId("65fa3333335"),
    userId: ObjectId("65fa2222225"),
    items: [{ productId: ObjectId("65fa1111115"), quantity: 1, price: 500 }],
    totalAmount: 500,
    orderStatus: "Pending",
    paymentId: ObjectId("65fa4444445")
  }
]);




db.payments.insertMany([
  {
    _id: ObjectId("65fa4444441"),
    userId: ObjectId("65fa2222221"),
    orderId: ObjectId("65fa3333331"),
    amount: 1200,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    _id: ObjectId("65fa4444442"),
    userId: ObjectId("65fa2222222"),
    orderId: ObjectId("65fa3333332"),
    amount: 1300,
    paymentMethod: "PayPal",
    status: "Pending"
  },
  {
    _id: ObjectId("65fa4444443"),
    userId: ObjectId("65fa2222223"),
    orderId: ObjectId("65fa3333333"),
    amount: 3500,
    paymentMethod: "Bitcoin",
    status: "Completed"
  },
  {
    _id: ObjectId("65fa4444444"),
    userId: ObjectId("65fa2222224"),
    orderId: ObjectId("65fa3333334"),
    amount: 800,
    paymentMethod: "Apple Pay",
    status: "Completed"
  },
  {
    _id: ObjectId("65fa4444445"),
    userId: ObjectId("65fa2222225"),
    orderId: ObjectId("65fa3333335"),
    amount: 500,
    paymentMethod: "Debit Card",
    status: "Pending"
  }
]);
