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
        "price": 499.99,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-15')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-16')" }
        ],
        "available": true,
        "tags": ["laptop", "ultrabook", "high-performance"],
        "releaseDate": "ISODate('2023-01-01')"
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
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-10')" }
        ],
        "available": true,
        "tags": ["desktop", "gaming", "high-end"],
        "releaseDate": "ISODate('2023-02-15')"
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
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-08-25')" }
        ],
        "available": true,
        "tags": ["smartphone", "5G", "water-resistant"],
        "releaseDate": "ISODate('2023-03-10')"
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
        "releaseDate": "ISODate('2023-04-20')"
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
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["audio", "headphones", "bluetooth"],
        "releaseDate": "ISODate('2023-05-05')"
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
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-07-15')" }
        ],
        "available": true,
        "tags": ["eco-friendly", "electric", "scooter"],
        "releaseDate": "ISODate('2023-06-01')"
    }]);



// Find products that are either "Electronics" or "Accessories" 
// and must have a price less than $500 or more than $1500.
db.products.find({
    $and: [
        {
            category: { $in: ["Accessories", "Electronics"] }
        },
        {
            $or: [
                { price: { $gt: 1500 } },
                { price: { $lt: 500 } }
            ]
        }
    ]
});




// Retrieve products that are available and have either a "high-performance" tag or "gaming" tag, and must also either be released in 2023 or have a price above $1000.
db.products.find({
    $and: [
        {
            $or: [{ tags: "high-performance" }, { tags: "gaming" }]
        },
        {
            $or: [
                {
                    releaseDate: {
                        $gt: ISODate('2023-01-01'),
                        $lt: ISODate("2023-12-01")
                    }
                },
                {
                    price: {
                        $gt: 1000
                    }
                }
            ]
        }
    ]
});
//////Question: Find products that either have a rating of 5 or are not rated, and must be in either the "Electronics" or "Transportation" category.
db.products.find({
    $and: [
        {
            $or: [
                {
                    ratings: { $elemMatch: { score: 5 } }
                },
                {
                    ratings: { $size: 0 }
                }
            ]
        },
        {
            category: {
                $in: ["Electronics", "Transportation"]
            }
        }
    ]
});
//  ////Question: Retrieve products that are either priced below $300 or above $1800, and must have "SSD" storage or an "AMOLED" display.
db.products.find({
    $and: [
        { $or: [{ price: { $lt: 300 } }, { price: { $gt: 1800 } }] },
        { $or: [{ "specs.storage.type": "SSD" }, { "specs.display": "AMOLED" }] }
    ]
});

//////Question: Find products that either have no reviews or reviews older than a year, and must have "Intel Core i7" or "AMD Ryzen 9" processors.
db.products.find({
    $and: [
        {
            $or: [
                { ratings: { $size: 0 } },
                {
                    ratings: {
                        $elemMatch: {
                            reviewDate: { $gt: "ISODate(2022-09-01)" }
                        }
                    }
                }
            ]

        }
    ]
});
//////Question: Find products that are available and either have no ratings or have a rating score greater than 4.
db.products.find({
    $and: [
        { available: true },
        {
            $or: [
                { ratings: { $size: 0 } },
                {
                    ratings: {
                        $elemMatch: {
                            score: { $gt: 4 }
                        }
                    }
                }
            ]
        }
    ]
});

//////Question: Find products in the "Electronics" category and either have no tags or have "high-performance" as a tag.
db.products.find({
    $and: [
        { category: "Electronics" },
        {
            $or: [
                { tags: { $size: 0 } },
                { tags: "high-performance" }
            ]
        }
    ]
});

//////Question: Find products that are available and either have a release date after "2023-01-01" or a price less than $500.
db.products.find({
    $and: [
        { available: true },
        {
            $or: [
                { releaseDate: { $gt: ISODate("2023-01-01") } },
                { price: { $lt: 500 } }
            ]
        }
    ]
});
//////Question: Find products with a processor of "Intel Core i7" and either have 16GB RAM or are in the "Electronics" category.
db.products.find({
    $and: [
        { "specs.processor": "Intel Core i7" },
        {
            $or: [
                { "specs.ram": "16GB" },
                { category: "Electronics" }
            ]
        }
    ]
});
//////Question: Find products that either have a rating score of 5 or are tagged as "gaming", and have a price greater than $1000.
db.products.find({
    $and: [
        { price: { $gt: 1000 } },
        {
            $or: [
                { "ratings.score": 5 },
                { tags: "gaming" }
            ]
        }
    ]
});
//////Question: Find products that either have a storage type of "SSD" or a screen size of "55 inches", and are available.
db.products.find({
    $and: [
        { available: true },
        {
            $or: [
                { "specs.storage.type": "SSD" },
                { "specs.screenSize": "55 inches" }
            ]
        }
    ]
});
//////Question: Find products with either a processor of "AMD Ryzen 9" or a max speed of "25 mph", and are in the "Transportation" category.
db.products.find({
    $and: [
        { category: "Transportation" },
        {
            $or: [
                { "specs.processor": "AMD Ryzen 9" },
                { "specs.maxSpeed": "25 mph" }
            ]
        }
    ]
});
//////Question: Find products that are available and either have no ratings or a rating review date after "2023-09-01".
db.products.find({
    $and: [
        { available: true },
        {
            $or: [
                { ratings: { $size: 0 } },
                {
                    ratings: {
                        $elemMatch: {
                            reviewDate: { $gt: ISODate("2023-09-01") }
                        }
                    }
                }
            ]
        }
    ]
});
//Question: Find products that either have a tag of "eco-friendly" or "electric", and have a price less than $600.
db.products.find({
  $and: [
    { price: { $lt: 600 } },
    {
      $or: [
        { tags: "eco-friendly" },
        { tags: "electric" }
      ]
    }
  ]
});
//Question: Find products that either have a RAM of "8GB" or a storage size of "256GB", and are in the "Electronics" category.
db.products.find({
  $and: [
    { category: "Electronics" },
    {
      $or: [
        { "specs.ram": "8GB" },
        { "specs.storage.size": "256GB" }
      ]
    }
  ]
});
//Question: Find products with either a battery life of "24 hours" or are tagged as "audio", and have a rating score of 5.
db.products.find({
  $and: [
    {
      $or: [
        { "specs.features.batteryLife": "24 hours" },
        { tags: "audio" }
      ]
    },
    {
      ratings: {
        $elemMatch: {
          score: 5
        }
      }
    }
  ]
});
//Question: Find products that are available and either have no reviews or reviews after "2023-08-01".
db.products.find({
  $and: [
    { available: true },
    {
      $or: [
        { ratings: { $size: 0 } },
        {
          ratings: {
            $elemMatch: {
              reviewDate: { $gt: ISODate("2023-08-01") }
            }
          }
        }
      ]
    }
  ]
});
//Question: Find products that either have a release date before "2023-06-01" or are in the "Accessories" category, and are available.
db.products.find({
  $and: [
    { available: true },
    {
      $or: [
        { releaseDate: { $lt: ISODate("2023-06-01") } },
        { category: "Accessories" }
      ]
    }
  ]
});

//Question: Find products that either have a processor of "Intel Core i7" or "Snapdragon 888", and have a rating score of 4.
db.products.find({
  $and: [
    {
      $or: [
        { "specs.processor": "Intel Core i7" },
        { "specs.processor": "Snapdragon 888" }
      ]
    },
    {
      ratings: {
        $elemMatch: {
          score: 4
        }
      }
    }
  ]
});
//Question: Find products that either have a storage size of "512GB" or "1TB", and are tagged as "high-end".
db.products.find({
  $and: [
    {
      $or: [
        { "specs.storage.size": "512GB" },
        { "specs.storage.size": "1TB" }
      ]
    },
    { tags: "high-end" }
  ]
});

//Question: Find products that are available and either have a rating score of 5 or are in the "Electronics" category.
db.products.find({
  $and: [
    { available: true },
    {
      $or: [
        { "ratings.score": 5 },
        { category: "Electronics" }
      ]
    }
  ]
});

//Question: Find products that either have a tag of "smartphone" or "5G", and have a release date after "2023-02-01".
db.products.find({
  $and: [
    { releaseDate: { $gt: ISODate("2023-02-01") } },
    {
      $or: [
        { tags: "smartphone" },
        { tags: "5G" }
      ]
    }
  ]
});

//Question: Find products with either a max speed of "25 mph" or a range of "40 miles", and are available.
db.products.find({
  $and: [
    { available: true },
    {
      $or: [
        { "specs.maxSpeed": "25 mph" },
        { "specs.range": "40 miles" }
      ]
    }
  ]
});

//Question: Find products that are available and either have no tags or have a tag of "ultrabook".
db.products.find({
  $and: [
    { available: true },
    {
      $or: [
        { tags: { $size: 0 } },
        { tags: "ultrabook" }
      ]
    }
  ]
});
//Question: Find products that either have a price greater than $1000 or are tagged as "UHD", and have a screen size of "55 inches".
db.products.find({
  $and: [
    { "specs.screenSize": "55 inches" },
    {
      $or: [
        { price: { $gt: 1000 } },
        { tags: "UHD" }
      ]
    }
  ]
});