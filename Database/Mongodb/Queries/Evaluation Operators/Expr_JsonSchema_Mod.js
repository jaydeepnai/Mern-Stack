db.products.insertMany(
    [
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
            "tags": ["laptop", "ultrabook", "high-performance"],
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
        },
        {
            "productName": "dogg.in",
            "category": "Home Appliances",
            "specs": {
                "waterTankCapacity": "2 liters",
                "features": {
                    "autoCleaning": true,
                    "milkFrother": true
                }
            },
            "price": "80.00",
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
    ]
)

//Question-1: Find products where the price is greater than 500 and divisible by 50.
db.products.find({
    price: {
        $gt: 500
    },
    $expr: {
        $eq: [
            { $mod: ["$price", 50] }, 0
        ]
    }
}, {
    price: 1, productName: 1, _id: 0
}).pretty()

//Question-2: Find products where the width is an even number and the price is greater than its depth
db.products.find({
    "dimensions.width": {
        $mod: [2, 0]
    },
    $expr: {
        $gt: [
            "$price", "$dimensions.depth"
        ]
    }
}, {
    _id: 0, productName: 1, price: 1, dimensions: 1
}).pretty()

//Question-3: Find products that have valid numeric price and category fields following a JSON schema validation.
db.products.find({
    $jsonSchema: {
        bsonType: "object",
        required: ["price", "category"],
        properties: {
            price: { bsonType: "double" },
            category: { bsonType: "string" }
        }
    }
})

//Question-4: Find products with at least one rating and where the first rating score is greater than 3.
db.products.find({
    $expr: { $gt: [{ $arrayElemAt: ["$ratings.score", 0] }, 3] }
})

//Question-5: Find products with width greater than height but divisible by 5.
db.products.find({
    $expr: {
        $gt: [
            "$dimensions.width", "$dimensions.height"
        ]
    },
    "dimensions.width": {
        $mod: [5, 0]
    }
})

//Question-6: Find products where the height is greater than 10 and its width is an odd number.
db.products.find({
    "dimensions.height": {
        $gt: 10
    },
    "dimensions.width": {
        $mod: [2, 0]
    }
})

//Question-7: Find products with price greater than 800, divisible by 9, and have at least one rating.
db.products.find({
    price: {
        $gt: 800,
        $mod: [9, 0]
    },
    $expr: {
        $gt: [
            { $size: "$ratings" },
            0
        ]
    }
})

//Question-8:Find products where available is true and the width is a multiple of 10.
db.products.find({
    available: true,
    "dimensions.width": {
        $mod: [10, 0]
    }
}, { dimensions: 1, productName: 1, _id: 0 })

//Question-9: Find products where the depth is an even number and height is greater than 15.
db.products.find({
    "dimensions.depth": {
        $mod: [2, 0]
    },
    "dimensions.height": {
        $gt: 15
    }
})

//Question-10: Find products where the price is greater than 600, its release date follows an ISODate format, and it has dimensions.
db.products.find({
    price: {
        $gt: 600
    },
    $jsonSchema: {
        required: ["releaseDate", "dimensions"],
        properties: {
            releaseDate: { bsonType: "date" }
        }
    },
}, { dimensions: 1, productName: 1, releaseDate: 1, price: 1, _id: 0 })

//Question-11: Find products where the price is greater than 500, divisible by 50, and the product is available.
db.products.find({
    price: {
        $gt: 500,
        $mod: [50, 0]
    },
    available: true
}).count()

//Question-12: Find products with prices divisible by 50, have a width greater than 20, and have ratings from at least one user.
db.products.find({
    price: {
        $mod: [50, 0],
    },
    $expr: {
        $gt: [
            { $size: "$ratings" }, 0
        ]
    },
    "dimensions.width": {
        $gt: 20
    }
}).count()

//Question-13: Find products where the price is a multiple of 50, and the product has ratings from at least one user.
db.products.find({
    price: {
        $mod: [10, 0]
    },
    ratings: {
        $ne: []
    }
}, {
    ratings: 1
}).count()

//Question-14: Find products that have a price above $500 and match a strict JSON Schema validation.
db.products.find({
    $and: [
        {
            $expr: { $gt: ["$price", 500] }
        },
        {
            $jsonSchema: {
                required: ["productName", "price", "dimensions"],
                properties: {
                    price: { bsonType: "double" },
                    dimensions: { bsonType: "object" }
                }
            }
        }
    ]
}).count()

//Question-15: Find products where the sum of ratings is greater than 4 and the price is divisible by 50.
db.products.find({
    $expr: {
        $gt: ["$ratings.score", 4]
    },
    price: {
        $mod: [50, 0]
    }
}).count()

//Question-16: Find products where the width is a multiple of 5, and the product is discounted.
db.products.find({
    $and: [
        { discounted: true },
        {
            $expr: {
                $eq: [
                    { $mod: ["$dimensions.width", 5] }
                    ,
                    0]
            }
        }
    ]
}).count()

//Question-17: Find products with at least one rating, price divisible by 50, and available.
db.products.find({
    $expr: {
        $gt: [
            { $size: "$ratings" }, 0
        ]
    },
    price: {
        $mod: [50, 0]
    },
    available: true
}).count()

//Question-18: Find products where the depth is divisible by 5, price is above 500, and product is available.
db.products.find({
    $and: [
        {
            available: true
        },
        {
            $expr: {
                $gt: ["$price", 500]
            }
        },
        {
            $expr: {
                $eq: [{ $mod: ["$dimensions.depth", 5] }, 0]
            }
        }
    ]
}).count()

//Question-19: Find products that have a rating count that is NOT a multiple of 2, and the price is at least $500.
db.products.find({
    $expr: {
        $ne: [
            { $mod: [{ $size: "$ratings" }, 2] }, 0
        ]
    },
    price: {
        $gte: 500
    }
}).count()

//Question-20: Find products where relatedProducts contains at least one number that is a multiple of 5, and the product name ends with "n".
db.products.find({
    relatedProducts: {
        $elemMatch: {
            $mod: [5, 0]
        }
    },
    productName: /n$/i
})

