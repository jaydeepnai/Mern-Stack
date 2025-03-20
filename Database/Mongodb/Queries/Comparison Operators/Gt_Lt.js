db.products.insertMany(
    [
        {
            "productName": "Laptop Pro",
            "brand": "TechCorp",
            "category": "Electronics",
            "specs": {
                "processor": "Intel Core i9",
                "ram": "32GB",
                "storage": [
                    { "type": "SSD", "size": "1TB" },
                    { "type": "HDD", "size": "2TB" }
                ],
                "screen": {
                    "size": "15.6 inches",
                    "resolution": "4K"
                },
                "features": ["Touchscreen", "Backlit Keyboard", "Thunderbolt Ports"]
            },
            "price": 1000,
            "discountedPrice": 830,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ab", "score": 5, "reviewDate": ISODate("2023-09-15T00:00:00Z"), "comment": "Excellent performance!" },
                { "userId": "63b21d49c254d7e8456789ac", "score": 4, "reviewDate": "2023-09-16", "comment": "A bit pricey but worth it." }
            ],
            "inventory": {
                "location": [
                    { "store": "Main Warehouse", "quantity": 50 },
                    { "store": "Downtown Store", "quantity": 20 }
                ]
            },
            "available": true,
            "tags": ["high-performance", "professional", "portable"],
            "releaseDate": ISODate("2023-01-01T00:00:00Z"),
            "dimensions": { "width": 35.8, "height": 1.8, "depth": 24.5 },
            "location": {
                "type": "Point",
                "coordinates": [-122.4194, 37.7749]
            },
            "relatedProducts": [456, 789],
            "isFeatured": true,
            "isBestSeller": true,
            "warranty": "3 years"
        },
        {
            "productName": "Gaming PC Ultra",
            "brand": "BuildMaster",
            "category": "Electronics",
            "specs": {
                "processor": "AMD Ryzen 9",
                "ram": "64GB",
                "storage": [
                    { "type": "NVMe SSD", "size": "2TB" },
                    { "type": "HDD", "size": "4TB" }
                ],
                "gpu": {
                    "type": "NVIDIA RTX 4090",
                    "memory": "24GB"
                },
                "coolingSystem": "Liquid Cooling"
            },
            "price": 3999.99,
            "discountedPrice": 1000,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ad", "score": 5, "reviewDate": ISODate("2023-09-10T00:00:00Z"), "comment": "Handles any game like a dream." }
            ],
            "inventory": {
                "location": [
                    { "store": "Gaming Hub", "quantity": 10 },
                    { "store": "Online Store", "quantity": 50 }
                ]
            },
            "available": true,
            "tags": ["desktop", "gaming", "high-end", "RTX"],
            "releaseDate": ISODate("2023-10-15T00:00:00Z"),
            "dimensions": { "width": 20.0, "height": 45.0, "depth": 50.0 },
            "location": {
                "type": "Point",
                "coordinates": [-74.006, 40.7128]
            },
            "relatedProducts": [101, 102],
            "isFeatured": true,
            "isBestSeller": true,
            "warranty": "5 years"
        },
        {
            "productName": "Smartphone X",
            "brand": "TechMobile",
            "category": "Electronics",
            "specs": {
                "processor": "Snapdragon 888",
                "ram": "8GB",
                "storage": [
                    { "type": "UFS", "size": "256GB" }
                ],
                "camera": {
                    "primary": "108MP",
                    "secondary": "32MP",
                    "features": ["Night Mode", "Portrait", "HDR"]
                },
                "battery": {
                    "capacity": "4500mAh",
                    "fastCharging": true
                }
            },
            "price": 699.99,
            "discountedPrice": null,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ae", "score": 4, "reviewDate": "2023-08-25T00:00:00Z", "comment": "Great phone but heats up occasionally." }
            ],
            "inventory": {
                "location": [
                    { "store": "Mobile World", "quantity": 100 },
                    { "store": "Main Warehouse", "quantity": 200 }
                ]
            },
            "available": true,
            "tags": ["smartphone", "5G", "water-resistant", "high-performance"],
            "releaseDate": ISODate("2023-03-10T00:00:00Z"),
            "dimensions": { "width": 7.5, "height": 15.0, "depth": 0.8 },
            "relatedProducts": [112, 113],
            "isFeatured": false,
            "isBestSeller": true,
            "warranty": "2 years"
        },
        {
            "productName": "Bluetooth Headphones X",
            "brand": "AudioMax",
            "category": "Accessories",
            "specs": {
                "type": "Over-Ear",
                "features": {
                    "noiseCancellation": true,
                    "batteryLife": "30 hours",
                    "audioCodec": ["AAC", "aptX", "LDAC"]
                }
            },
            "price": 249.99,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789af", "score": 3, "reviewDate": "2023-08-01", "comment": "Average sound quality." },
                { "userId": "63b21d49c254d7e8456789b0", "score": 5, "reviewDate": ISODate("2023-08-05T00:00:00Z"), "comment": "Fantastic for the price!" }
            ],
            "inventory": {
                "location": [
                    { "store": "Electronics Zone", "quantity": 150 },
                    { "store": "Online Store", "quantity": 300 }
                ]
            },
            "available": true,
            "tags": ["wireless", "noise-cancelling", "headphones"],
            "releaseDate": ISODate("2023-05-05T00:00:00Z"),
            "dimensions": { "width": 20.0, "height": 18.0, "depth": 7.0 },
            "relatedProducts": [116, 117],
            "isFeatured": false,
            "isBestSeller": true,
            "warranty": "1 year"
        },
        {
            "productName": "Eco Electric Scooter",
            "brand": "GreenRide",
            "category": "Transportation",
            "specs": {
                "maxSpeed": "20 mph",
                "range": "35 miles",
                "features": ["Foldable", "LED Display"]
            },
            "price": 450.00,
            "ratings": [],
            "inventory": {
                "location": [
                    { "store": "Urban Scooters", "quantity": 60 },
                    { "store": "Main Warehouse", "quantity": 150 }
                ]
            },
            "available": true,
            "tags": ["eco-friendly", "scooter", "electric"],
            "releaseDate": ISODate("2023-06-01T00:00:00Z"),
            "dimensions": { "width": 45.0, "height": 120.0, "depth": 6.0 },
            "location": {
                "type": "Point",
                "coordinates": [-73.935242, 40.73061]
            },
            "relatedProducts": [118, 119],
            "discounted": true,
            "isFeatured": true,
            "isBestSeller": false
        }
    ]    
)

//Question-1: Find all products with a price greater than $1000.
db.products.find(
    { price: { 
        $gt: 1000 
    } },
    {                                   //Projection for retrieving  desired fields only
        productName:1,
        price:1,
        _id:0
    }
)

//Question-2: Q2: Find all products with a price less than $500.
db.products.find(
    { price: { 
        $lt: 500 
    } },
    {
        productName:1,
        price:1,
        _id:0
    }
)

//Question-3: Find all products with a discounted price less than $2000.
db.products.find(
    { discountedPrice: { 
        $lt: 2000 
    } },
    {
        productName:1,
        price:1,
        _id:0
    }
)

//Question-4: Find all products released after January 1, 2023, with a price greater than $500.
db.products.find({
    releaseDate:{
        $gt:new ISODate("2023-01-01")
    },
    price:{
        $gt:500
    }
},
{
    productName:1,
    price:1,
    _id:0
})

//Question-5: Find all products with a screen size greater than 15 inches.
db.products.find({ 
    "specs.screen.size": { $gt: "15 inches" } 
    },
    { 
        productName: 1, "specs.screen.size": 1, _id: 0 
    }
)

//Question-6: Find products where the total inventory quantity for atleast one locations is greater than 100.
db.products.find({
    "inventory.location":{
        $elemMatch:{
            quantity:{
                $gt:100
            }
        }
    }
},{productName:1, "inventory.location":1,_id:0})

//Question-7: Find all products with at least one rating where the score is greater than 4.
db.products.find({ 
    "ratings.score": { $gt: 4 } 
},{ productName: 1, "ratings.score": 1, _id: 0 })

//Question-8: Find all products with dimensions where the depth is less than 10 and height is greater than 1.
db.products.find({
    "dimensions.depth":{
        $lt:10
    },
    "dimensions.height":{
        $gt:1
    }
},{productName: 1, dimensions:1, _id:0 })

//Question-9: Find all products with a discounted price greater than $1000 but less than $2000.
db.products.find({ 
    discountedPrice: { $gt: 1000, $lt: 2000 } 
},{ productName: 1, discountedPrice: 1, _id: 0 })

//Question-10: Find all products where either the price is less than $500 or the discounted price is greater than $1500, and the product is available.
db.products.find({
    available:true,
    $or:[
        {price:{
            $lt:500
        }},{
            discountedPrice:{
                $gt:1500
            }
        }
    ]
},{productName:1, _id:0})

//Question-11: Find products where the discounted price is within 80% to 90% of the original price.
db.products.find({
    $expr:{
        $and:[
            {
                
                $gt:[
                    "$discountedPrice",
                    {$multiply:["$price",0.8]}
                ]
            
            },{
                $lt:[
                    "$discountedPrice",
                    {$multiply:["$price",0.9]}
                ]
            }
        ]
    }
},{productName:1,discountedPrice:1,price:1,_id:0})

//Question-12: Find products released in the first half of 2023 with a price greater than $300 and less than $1000.
db.products.find({
    price:{
        $lt:1000,
        $gt:300
    },
    releaseDate:{
        $gt:new ISODate("2023-01-01"),
        $lt:new ISODate("2023-06-01")
    }
},{productName:1,releaseDate:1,price:1,_id:0})

//Question-13: Find products that have a discounted price less than 50% of the original price and were released after September 1, 2023.
db.products.find({
    $expr:{
        $and:[
            {
                $lt:[
                    "$discountedPrice",
                    {$multiply:["$price",0.5]}
                ]
            },{
                releaseDate:{$gt:ISODate("2023-09-01")}
            }
        ]
        
    }
},{productName:1,releaseDate:1,discountedPrice:1,price:1,_id:0})

//Quesion-14: Find products that have a price greater than $100 and less than $500, released after March 1, 2023, and have a rating score greater than 3.
db.products.find({
    price:{
        $gt:100,
        $lt:500
    },
    releaseDate:{
        $gt:ISODate("2023-03-01")
    },
    "ratings.score":{
        $gt:3
    }
},{productName:1,price:1,"ratings.score":1,_id:0})

//Question-15: Find products where the price has decreased by more than 20% from the original price and the discount price is greater than $200.
db.products.find({
    discountedPrice:{$gt:200},
    $expr:{
        $lt:[
            "$discountedPrice",
            {
                $multiply:["$price",0.8]
            }
        ]
    },
},{productName:1,price:1,discountedPrice:1,_id:0})

//Question-16: Find products released after January 2023(inclusive) that have a price between $1000 and $5000 and are available in both "Main Warehouse" and "Downtown Store".
db.products.find({
    $expr:{
        $and:[
            {
                $lt:[
                    "$price", 5000
                ]
            },{
                $gt:[
                    "$price", 1000
                ]
            },{
                $gte:[
                    "$releaseDate",ISODate("2023-01-01")
                ]
            }
        ]
    },
    "inventory.location.store":{
        $all:["Main Warehouse","Downtown Store"]
    }
},{productName:1,price:1,_id:0})

//Question-17: Find products that have been released between March 2023 and August 2023, with a price range between $500 and $3000, and are available in at least one "Main Warehouse".
db.products.find({
    $expr: {
        $and: [
            { $gt: ["$releaseDate", ISODate("2023-03-01")] },
            { $lt: ["$releaseDate", ISODate("2023-08-01")] },
            { $gt: ["$price", 500] },
            { $lt: ["$price", 3000] }
        ]
    },
    "inventory.location.store": "Main Warehouse"
}, { productName: 1, price: 1, releaseDate: 1, _id: 0 })


//Question-18: Find products with a price between $1000 and $5000, released after January 2023, and available in either "Main Warehouse" or "Downtown Store".
db.products.find({
    price: { 
        $gt: 1000, $lt: 5000 
    },
    releaseDate: { 
        $gt: ISODate("2023-01-01") 
    },
    "inventory.location.store": { 
        $in: ["Main Warehouse", "Downtown Store"] 
    }
}, { productName: 1, price: 1, releaseDate: 1, _id: 0 })

//Question-19: Find products that are available in both "Main Warehouse" and "Downtown Store" with a price between $200 and $1000 and released after March 2023.

db.products.find({
    price: { $gt: 200, $lt: 1000 },
    releaseDate: { $gt: ISODate("2023-03-01") },
    "inventory.location.store": { $all: ["Main Warehouse", "Downtown Store"] }
}, { productName: 1, price: 1, releaseDate: 1, _id: 0 })

//Question-20: Find products with a price between $500 and $3000, and a rating greater than 4, released after June 2023, and available in "Main Warehouse".
db.products.find({
    price: { $gt: 500, $lt: 3000 },
    "ratings.score": { $gt: 4 },
    releaseDate: { $gt: ISODate("2023-06-01") },
    "inventory.location.store": "Main Warehouse"
}, { productName: 1, price: 1, releaseDate: 1, ratings: 1, _id: 0 })

//Question-21: Find products with a price range between $200 and $1500, released after February 2023, that are available in "Main Warehouse" and have at least one review with a rating of 4 or higher.
db.products.find({
    price: { 
        $gt: 200, $lt: 1500 
    },
    releaseDate: { 
        $gt: ISODate("2023-02-01") 
    },
    "inventory.location.store": "Main Warehouse",
    "ratings.score": { 
        $gte: 4 
    }
}, { productName: 1, price: 1, releaseDate: 1, ratings: 1, _id: 0 })

//Question-22: Find products with a price between $1000 and $4000, released after January 2023, and are available in both "Main Warehouse" and "Downtown Store".
db.products.find({
    price:{
        $gt:1000,
        $lt:4000
    },
    releaseDate:{
        $gt: ISODate("2023-01-01")
    },
    "inventory.location.store":{
        $in:["Main Warehouse","Downtown Store"]
    }
})

//Question-23: Find products released after July 2023, with a price between $800 and $3500, and have a rating greater than or equal to 4.
db.products.find({
    price: { 
        $gt: 800, $lt: 3500 
    },
    releaseDate: { 
        $gt: ISODate("2023-07-01") 
    },
    "ratings.score": { $gte: 4 }
}, { productName: 1, price: 1, releaseDate: 1, ratings: 1, _id: 0 })

//Question-24: Find products released between January 2023 and July 2023 that are priced between $1500 and $5000, and are available in at least one of the stores "Online Store" or "Gaming Hub".
db.products.find({
    releaseDate:{
        $gt: ISODate("2023-01-01"),
        $lt:ISODate("2023-07-01")
    },
    price:{
        $lt:5000,
        $gt:1500
    },
    "inventory.location.store":{
        $in:["Online Store","Gaming Hub"]
    }
})

//Question-25: Find products that are tagged as "high-performance" and "gaming", released after January 2023, and are available in at least one "Main Warehouse" or "Downtown Store".
db.products.find({
    tags:{
        $all:["high-performance" ,"gaming"]
    },
    releaseDate:{$gt:ISODate("2023-01-01")},
    "inventory.location.store":{
        $in:["Main Warehouse" ,"Downtown Store"]
    }
})