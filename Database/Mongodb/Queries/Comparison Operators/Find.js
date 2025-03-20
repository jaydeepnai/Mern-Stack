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













//Write a query to find the product with the productName "Gaming PC".
db.products.find({ "productName": "Gaming PC" })

//DATATYPE variations
//Find all products where the tags field is an array containing the string "eco-friendly"\
db.products.find({ "tag": "eco-friendly" })

//Find all products where the releaseDate is of type Date and is after January 1, 2023
db.products.find({
    "releaseDate": {
        $gt: new Date("2023-01-01")
    }
})

//Find all products where the available field is a boolean and true:
db.products.find({
    "available": true
})

//REGEX variations
//exact match
db.products.find({ "category": "Electronics" })

//case insensitive match
db.products.find({
    "category": {
        $regex: "^Electronics$",
        $options: "i"
    }
})

//Find documents where the productName starts with "E".
db.products.find({
    "productName": {
        $regex: "^E"
    }
})
//Find documents where the productName ends with "E"
db.products.find({
    "productName": {
        $regex: "E$",
        $options: "i"
    }
})
//Find documents where the productName contains "oo".
db.products.find({
    "productName": {
        $regex: "oo",
        $options: "i"
    }
})
//Find documents where the productName contains both "Espresso" and "Machine" (order doesn't matter).
db.products.find({
    "productName": {
        $regex: "(el).*?(oo)",
        $options: "i"
    }
})

db.employees.find({
    $or: [
        { productName: /Espresso/ },
        { productName: /Machine/ }
    ]
});

db.employees.find({
    $or: [
        { productName: /o1/ },
        { productName: /Ma/ }
    ]
});

//Find documents where the ratings field is an array with at least one object that contains a score greater than 4
db.products.find({
    "ratings.score": {
        $gt: 4
    }
})


//Find documents where the ratings field is an array with at least one 
//object that contains a score greater than 4

db.products.find({
    $and: [
        { ratings: { $type: 'array', } },
        { $expr: { $gt: [{ '$size': "$ratings" }, 1] } },
        {
            "ratings.score": {
                $gt: 4
            }
        }
    ]
}, { ratings: 1 })

//Find all products where the meta field is null
db.products.find({
    "meta": null
})
//Find products where the dimensions field contains a width greater than 20 (assuming dimensions is an embedded document)
db.products.find({
    "dimensions.width": {
        $gt: 20
    }
})
//Find all products where the specs.features.autoCleaning field is of type boolean and is set to true
db.products.find({
    "specs.features.autoCleaning": true
})
//Find documents where the productName contains a period (".", special charecter)
db.products.find({
    "productName": {
        $regex: "\\."
    }
})
//Find documents where the productName contains a period (".") between "t" and "i"
db.products.find({
    "productName": {
        $regex: "t\\.i"
    }
})
//Find documents where the productName is exactly 15 characters long
db.products.find({
    "productName": {
        $regex: "^.{7}$"
    }
})
//Find documents where the productName is greater than 10 characters
db.products.find({
    "productName": {
        $regex: "^.{11,}$"
    }
})
//Find documents where the productName is greater than or equal to 10 characters
db.products.find({
    "productName": {
        $regex: "^.{10,}$"
    }
})
//Find documents where the productName is less than or equal to 10 characters
db.products.find({
    "productName": {
        $regex: "^.{0,10}$"
    }
})

//CONDITIONAL QUERIES:
//Find all products released after "2023-03-01"
db.products.find({

})
//Find products having Price less then 700$
db.products.find({
    "price": {
        $lt: 700
    }
})

//Find products having Price less than $900 and greater than $400
db.products.find({
    $and: [
        { "price": { $lt: 900 } },
        { "price": { $gt: 400 } }
    ]
})


//Find by DATE
//Find products released after 2023-05-01
db.products.find({
    "releaseDate": {
        $gt:
            "2023-05-01"
    }
})
//Find products released on or before 2023-05-01
db.products.find({
    "releaseDate": {
        $lte:
            "2023-05-01"
    }
})
//Find products released on new Date("2023-06-01T00:00:00.000Z")
db.products.find({
    "releaseDate": {
        $eq:
            new Date("2023-06-01T00:00:00.000Z")
    }
})
//Find products released on new ISODate("2023-06-01T00:00:00.000Z")
db.products.find({
    "releaseDate": {
        $eq:
            new ISODate("2023-05-05T00:00:00.000Z")
    }
})

/// how to check type of value in key
db.products.find({ ratings: { $type: "string" } })

//Find all products where the releaseDate is of type Date and is after January 1, 2023
db.products.find({ releaseDate: { $type: "date", $gt: new Date("2023-01-01") } })



//Find all products where the available field is a boolean and true:
db.products.find({ available: { $exists: true, $eq: true } })
