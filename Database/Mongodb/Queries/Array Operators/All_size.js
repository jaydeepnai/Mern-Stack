db.products.insertMany([
  {
    "productName": "Laptop",
    "category": "Electronics",
    "specs": {
      "processor": "Intel Core i7",
      "ram": "16GB",
      "storage": {
        "type": "SSD",
        "size": "512GB"
      }
    },
    "price": 999.99,
    "ratings": [
      { "userId": "63b21d49c254d7e8456789ab", "score": 5, "reviewDate": "2023-09-15T00:00:00.000Z" },
      { "userId": "63b21d49c254d7e8456789ac", "score": 4, "reviewDate": "2023-09-16T00:00:00.000Z" }
    ],
    "available": true,
    "tags": ["laptop", "ultrabook", "high-performance", "5G"],
    "releaseDate": "2023-01-01T00:00:00.000Z",
    "meta": null,
    "dimensions": { "width": 35.8, "height": 1.9, "depth": 24.7 },
    "relatedProducts": [123, 456],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "Gaming PC",
    "category": "Electronics",
    "specs": {
      "processor": "AMD Ryzen 9",
      "ram": "32GB",
      "storage": {
        "type": "NVMe SSD",
        "size": "1TB"
      }
    },
    "price": 1899.99,
    "ratings": [
      { "userId": "63b21d49c254d7e8456789ad", "score": 5, "reviewDate": "2023-09-10T00:00:00.000Z" }
    ],
    "available": true,
    "tags": ["desktop", "gaming", "high-end"],
    "releaseDate": "2023-02-15T00:00:00.000Z",
    "meta": null,
    "dimensions": { "width": 20.0, "height": 45.0, "depth": 50.0 },
    "relatedProducts": [789, 101],
    "reviews": [],
    "discounted": true
  },
  {
    "productName": "Smartphone",
    "category": "Electronics",
    "specs": {
      "processor": "Snapdragon 888",
      "ram": "8GB",
      "storage": {
        "type": "UFS",
        "size": "256GB"
      }
    },
    "price": 699.99,
    "ratings": [
      { "userId": "63b21d49c254d7e8456789ae", "score": 4, "reviewDate": "2023-08-25T00:00:00.000Z" }
    ],
    "available": true,
    "tags": ["smartphone", "5G", "water-resistant"],
    "releaseDate": "2023-03-10T00:00:00.000Z",
    "meta": null,
    "dimensions": { "width": 7.5, "height": 15.0, "depth": 0.8 },
    "relatedProducts": [112, 113],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "4K Television",
    "category": "Electronics",
    "specs": {
      "screenSize": "55 inches",
      "features": {
        "type": "Smart TV",
        "resolution": "4K"
      }
    },
    "price": 1200.00,
    "ratings": [],
    "available": true,
    "tags": ["home entertainment", "TV", "UHD"],
    "releaseDate": "2023-04-20T00:00:00.000Z",
    "meta": null,
    "dimensions": { "width": 123.0, "height": 71.0, "depth": 6.0 },
    "relatedProducts": [114, 115],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "Bluetooth Headphones",
    "category": "Accessories",
    "specs": {
      "type": "Over-Ear",
      "features": {
        "noiseCancellation": true,
        "batteryLife": "24 hours"
      }
    },
    "price": 199.99,
    "ratings": [
      { "userId": "63b21d49c254d7e8456789af", "score": 4, "reviewDate": "2023-09-01T00:00:00.000Z" },
      { "userId": "63b21d49c254d7e8456789b0", "score": 5, "reviewDate": "2023-09-02T00:00:00.000Z" }
    ],
    "available": true,
    "tags": ["audio", "headphones", "bluetooth"],
    "releaseDate": new ISODate("2023-05-05T00:00:00.000Z"),
    "meta": null,
    "dimensions": { "width": 20.0, "height": 18.0, "depth": 7.0 },
    "relatedProducts": [116, 117],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "Electric Scooter",
    "category": "Transportation",
    "specs": {
      "maxSpeed": "25 mph",
      "range": "40 miles"
    },
    "price": 550.00,
    "ratings": [
      { "userId": "63b21d49c254d7e8456789b1", "score": 5, "reviewDate": "2023-07-15T00:00:00.000Z" }
    ],
    "available": true,
    "tags": ["eco-friendly", "electric", "scooter"],
    "releaseDate": "2023-06-01T00:00:00.000Z",
    "meta": null,
    "dimensions": { "width": 40.0, "height": 120.0, "depth": 30.0 },
    "relatedProducts": [118, 119],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "Espresso Machine",
    "category": "Home Appliances",
    "specs": {
      "waterTankCapacity": "2 liters",
      "features": {
        "autoCleaning": true,
        "milkFrother": true
      }
    },
    "price": 850.00,
    "ratings": [],
    "available": true,
    "tags": ["eco-friendly", "electric", "scooter"],
    "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
    "meta": null,
    "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
    "relatedProducts": [120, 121],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "socket.io",
    "category": "Home Appliances",
    "specs": {
      "waterTankCapacity": "2 liters",
      "features": {
        "autoCleaning": true,
        "milkFrother": true
      }
    },
    "price": 850.00,
    "ratings": [],
    "available": true,
    "tags": ["eco-friendly", "electric", "scooter"],
    "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
    "meta": null,
    "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
    "relatedProducts": [120, 121],
    "reviews": [],
    "discounted": false
  },
  {
    "productName": "catt.in",
    "category": "Home Appliances",
    "specs": {
      "waterTankCapacity": "2 liters",
      "features": {
        "autoCleaning": true,
        "milkFrother": true
      }
    },
    "price": 850.00,
    "ratings": [],
    "available": true,
    "tags": ["eco-friendly", "electric", "scooter"],
    "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
    "meta": null,
    "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
    "relatedProducts": [120, 121],
    "reviews": [],
    "discounted": false
  }
])


//Question-1: Find all products where the tags array contains all of the following values: 'laptop', 'ultrabook', and 'high-performance'
db.products.find({
  tags: {
    $all: ['laptop', 'ultrabook', 'high-performance']
  }
}).count()

//Question-2: Find all products where the tags array contains all of the following values: 'eco-friendly', 'electric', and 'scooter', and the price is less than 600
db.products.find({
  tags: {
    $all: ['eco-friendly', 'electric', 'scooter']
  },
  price: {
    $lt: 600
  }
}).count()

//Question-3: Find all products where the ratings array contains exactly 2 elements, and the category is 'Electronics'
db.products.find({
  ratings: {
    $size: 2
  },
  category: "Electronics"
}).count()

//Question-4: Find all products where the tags array contains both 'gaming' and 'high-end', and where the ratings array contains a review with a score of 5 from any userId starting with '63b21d49c254d7e8456789'. Additionally, the price should be greater than 1500 but less than 2000, and the releaseDate is within the last 12 months
//curruntDate: 2023-03-01
db.products.find({
  tags: {
    $all: ["gaming", "high-end"]
  },
  ratings: {
    $elemMatch: {
      score: 5,
      userId: /^63b21d49c254d7e8456789/
    }
  },
  price: {
    $gte: 1500,
    $lte: 2000
  },
  releaseDate: {
    $gte: "2023-02-01"
  }
}).count()

//Question-5: Find all products where the tags array contains 'gaming' and the specs.storage.type is 'NVMe SSD', 
//the ratings array contains at least one review with a score of 5, 
//and the price is greater than 1000 but less than 2000. The product should be in stock and have no reviews
db.products.find({
  tags: {
    $in: ['gaming']
  },
  "specs.storage.type": 'NVMe SSD',
  ratings: {
    $elemMatch: {
      score: 5
    }
  },
  price: {
    $gte: 1000,
    $lte: 2000
  },
  available: true,
  reviews: {
    $size: 0
  }
})





