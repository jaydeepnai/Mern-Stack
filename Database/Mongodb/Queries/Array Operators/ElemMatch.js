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

//Question-1: Find all products with at least one rating where the score is exactly 5.
db.products.find({
  ratings: {
    $elemMatch: {
      "score": { $eq: 5 }
    }
  }
})

db.products.find({
  $expr: { $gt: [{ "$size": "$ratings" }, 1] },
  ratings: {
    $elemMatch: {
      "score": { $eq: 4 }
    }
  }
}, { ratings: 1 })

//Question-2: Retrieve products with a rating score of 4 or higher, submitted after August 1st, 2023.
db.products.find({
  ratings: {
    $elemMatch: {
      "score": { $gte: 4 },
      "reviewDate": { $gt: "2023-08-01" }
    }
  }
})

//Question-3: Retrieve products with a rating score of 4 or higher, submitted after August 1st, 2023.
db.products.find({
  "releaseDate": { $gt: new Date("2020-05-05T00:00:00.000Z") },
  ratings: {
    $elemMatch: {
      "score": { $gte: 4 }
    }
  }
}, { releaseDate: 1, ratings: 1 })


//Question-4: Find Electronics products with high-performance laptop tags and ratings score above 4.
db.products.find({
  tags: "high-performance",
  ratings: {
    $elemMatch: {
      score: { $gt: 4 }
    }
  }
}, { tags: 1, ratings: 1 })


//Question-5: Find Electronics products that: Have both "high-performance" and "5G" tags, and Contain at least one rating with a score higher than 4
db.products.find({
  $and: [
    {
      tags:
        { $all: ["high-performance", "5G"] }
    },
    {
      ratings: {
        $elemMatch: { score: { $gt: 4 } }
      }
    }
  ]
})

//Question-6:  Find products where at least one rating has a score greater than 4
db.products.find({
  ratings:
  {
    $elemMatch: { score: { $gt: 4 } }
  }
})

//Question-7: Find all products where a user rated it exactly 5 but only before "2023-09-01".
db.products.find({
  ratings: {
    $elemMatch: {
      score: 5,
      reviewDate: {
        $gt: "2023-09-01"
      }
    }
  }
}).count()

//Qusestion-8: Retrieve products where at least one user gave a score of 4 and reviewed it after "2023-09-01".
db.products.find({
  ratings: {
    $elemMatch: {
      score: 4,
      reviewDate: {
        $gt: "2023-09-01"
      }
    }
  }
}).count()

//Question-9: Find all products where a rating exists where the score is 4 and the userId is "63b21d49c254d7e8456789ae".
db.products.find({
  ratings: {
    $exists: true,
    $elemMatch: {
      score: 4,
      userId: "63b21d49c254d7e8456789ae"
    }
  }
}).count()

//Question-11: Find all products where a rating exists with a score of 5, reviewed after September 1st, 2023, and the userId is not '63b21d49c254d7e8456789b0
db.products.find({
  ratings: {
    $exists: true,
    $elemMatch: {
      score: 5,
      reviewDate: {
        $gt: "2023-09-01"
      },
      userId: {
        $ne: '63b21d49c254d7e8456789b0'
      }
    }
  }
}).count()

//Question-12: Find all products where a rating exists with a score greater than or equal to 4, reviewed between August 20th, 2023, and September 1st, 2023, and the userId contains '6789'.
db.products.find({
  ratings: {
    $exists: true,
    $elemMatch: {
      score: {
        $gte: 4
      },
      reviewDate: {
        $gte: "2023-08-01",
        $lte: "2023-09-01",
      },
      userId: /6789/
    }
  }
}).count()

//Question-13: Find all products where a rating exists with a score of 5, reviewed before September 10th, 2023, and the product is not discounted
db.products.find({
  ratings: {
    $elemMatch: {
      score: 5,
      reviewDate: {
        $lte: "2023-09-10"
      }
    }
  },
  discounted: false
}).count()

//Question-14: Find all products where a rating exists with a score greater than 4.3, reviewed after July 1st, 2023, and the category is 'Electronics'
db.products.find({
  "ratings": {
    $elemMatch: {
      "score": { $gt: 4.3 },
      "reviewDate": { $gt: "2023-07-01" }
    }
  },
  category: "Electronics"
}).count()

//Question-15: Find all products where a rating exists with a score of 4, reviewed between August 1st, 2023, and August 30th, 2023, and the userId is not '63b21d49c254d7e8456789af', and the product is related to products with IDs 789 or 101
db.products.find({
  ratings: {
    $elemMatch: {
      score: 4,
      reviewDate: {
        $gte: "2023-08-01",
        $lte: "2023-08-30",
      },
      userId: {
        $ne: "63b21d49c254d7e8456789af"
      }
    }
  }
}).count()

//Question-16: Find all products where a rating exists with a score greater than or equal to 4, reviewed between September 1st, 2023, and September 10th, 2023, and the product is not discounted, and the category is 'Accessories'.
db.products.find({
  ratings: {
    $elemMatch: {
      score: {
        $gte: 4
      },
      reviewDate: {
        $lte: "2023-09-10",
        $gte: "2023-09-01",
      },
    }
  },
  discounted: false
}).count()

//Question-17: Find all products where a rating exists with a score greater than 4, reviewed on September 15th, 2023, and the userId starts with '63b', and the product is related to products with IDs 116 or 117
db.products.find({
  rating: {
    $elemMatch: {
      score: {
        $gt: 4
      },
      reviewDate: "2023-09-15",
      userId: /^63b/
    }
  },
  relatedProducts: {
    $in: [116, 117]
  }
}).count()

//Question-18: Find all products where a rating exists with a score less than 5, reviewed after July 1st, 2023, and the product is available and priced greater than 500
db.products.find({
  ratings: {
    $elemMatch: {
      score: {
        $lt: 5
      },
      reviewDate: {
        $gt: "2023-07-01"
      }
    }
  },
  available: true,
  price: {
    $gt: 500
  }
}).count()

//Question-19: Find all products where a rating exists with a score of 5, reviewed between September 1st, 2023, and September 20th, 2023, and the product is tagged with 'gaming' or 'high-performance', and priced greater than 1000
db.products.find({
  ratings: {
    $elemMatch: {
      score: {
        $eq: 5
      },
      reviewDate: {
        $gte: "2023-09-01",
        $lte: "2023-09-20",
      }
    }
  },
  tags: {
    $in: ['gaming', 'high-performance']
  },
  price: { $gte: 1000 }
}).count()

//Question-20: Find all products where a rating exists with a score of 5, reviewed after August 1st, 2023, and the userId does not start with '63b21d49c254d7e8456789b', and the category is 'Electronics'.
db.products.find({
  "ratings": {
    $elemMatch: {
      "score": 5,
      "reviewDate": { $gt: "2023-08-01T00:00:00.000Z" },
      "userId": { $not: /63b21d49c254d7e8456789b/ }
    }
  },
  "category": "Electronics"
})

