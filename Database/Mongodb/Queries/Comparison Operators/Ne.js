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
    }
])

// Question 1: Find all products whose category is not "Electronics"
db.products.find({
    category: { $ne: "Electronics" }
})

// Question 2: Find all products that are available and have a price not equal to 1200.00.
db.products.find({
    $and: [
        { available: true },
        { price: { $ne: 1200.00 } }
    ]
})

// Question 3: Find all products where the releaseDate is not equal to "2023-06-01T00:00:00.000Z."
db.products.find({ 
    releaseDate: { $ne: new Date("2023-06-01T00:00:00.000Z") } 
})

// Question 4: Find all products that do not have the tag "bluetooth."
db.products.find({ 
    tags: { $ne: "bluetooth" } 
})

// Question 5: Find all products whose price is not equal to 850.00, and they are discounted: false.
db.products.find({ 
    price: { $ne: 850.00 }, 
    discounted: false 
})

// Question 6: Find all products that are available: true but have no ratings (i.e., an empty ratings array).
db.products.find({ 
    available: true, 
    ratings: { $size: 0 } 
})

// Question 7: Find all products where the specs.processor is not "Intel Core i7."
db.products.find({
    "specs.processor": { $ne: "Intel Core i7" } 
})

// Question 8: Find all products that are available: true and do not have "Smart TV" in their specs.features.type.
db.products.find({ 
    available: true, 
    "specs.features.type": { $ne: "Smart TV" } 
})

// Question 9: Find all products whose tags array does not include the tag "eco-friendly."
db.products.find({ 
    tags: { $ne: "eco-friendly" } 
})

// Question 10: Find all products where the ratings.score is not equal to 5.
db.products.find({
    ratings: { $elemMatch: { score: { $ne: 5 } } }
})

// Question 11: Find all products where the category is "Electronics" and price is not equal to 999.99.
db.products.find({ 
    category: "Electronics", 
    price: { $ne: 999.99 } 
})

// Question 12: Find all products that do not have a relatedProducts array with an ID of 120.
db.products.find({ 
    relatedProducts: { $ne: 120 } 
})

// Question 13: Find all products where the specs.ram is not "16GB" and price is greater than 1000.
db.products.find({ 
    "specs.ram": { $ne: "16GB" }, 
    price: { $gt: 1000 } 
})

// Question 14: Find all products whose category is not "Home Appliances" and price is greater than 500.
db.products.find({ 
    category: { $ne: "Home Appliances" }, 
    price: { $gt: 500 } 
})

//Question 15: Find all products with a releaseDate in 2023 and no meta field value (i.e., meta is null).
//for date in string
db.products.find({
    $and:[
        {
            releaseDate:{
                $regex:"/^2023-/"
            }
        },{
            meta:null
        }
    ]
})
//for date in ISODate() format or Date() format
db.products.find({
    $and: [
        {
            releaseDate: {
                $gte: new Date("2023-01-01"), // new ISODate("2023-01-01")
                $lt: new Date("2024-01-01")  // new Date("2024-01-01")
            }
        },
        {
            meta: null
        }
    ]
})

//Question 16: Find all products that are available, have a tag containing the word "electric," and have dimensions where the width is greater than 30
db.products.find({
    available:true,
    tags:/electric/,
    "dimensions.width":{$gt:30}
})


//Question 17: Find all products that are not discounted and where the specs.storage.type is not "SSD"
db.products.find({
    "specs.storage.type":{$ne:"SSD"},
    "discounted":false
})

//Question 18: Find all products whose ratings array does not contain a review with a reviewDate after "2023-09-01T00:00:00.000Z".
db.products.find({
    ratings:{
        $not:{
            $elemMatch:{
                "reviewDate":{$gt:"2023-09-01T00:00:00.000Z"}
            }
        }
    }
})

//Question 19: Find all products where the ratings array does not include any entries with a userId of "63b21d49c254d7e8456789af".
db.products.find({
    ratings:{
        $not:{
            $elemMatch:{
                userId:"63b21d49c254d7e8456789af"
            }
        }
    }
})

//Question 20: Find all products where the dimensions.depth is not greater than 10.0 and the category is not "Home Appliances".
db.products.find({
    "dimensions.depth":{$not:{$gt:10}},
    category:{$ne:"Home Appliances"}
})