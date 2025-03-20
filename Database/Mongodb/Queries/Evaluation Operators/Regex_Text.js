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

db.products.createIndex({ productName: "text", category: "text", tags: "text" })

//Question-1: Find products where the name has "top" (regex) and "Electronics" is in text search
db.products.find({
  $and: [
    { productName: { $regex: "top", $options: "i" } },
    { $text: { $search: "Electronics" } }
  ]
}) 

//Question-2: Find products where the tags contain "bluetooth" (text) and product name has "phone" (regex)
db.products.find({
  productName:/phone/i,
  $text:{
    $search:"bluetooth"
  }
}) 

//Question-3: Find all products with "TV" (text search) and product name starts with "4K" (regex)
db.products.find({
  productName:/^4k/i,
  $text:{
    $search:"TV"
  }
}) 

//Question-4: Find products where category is "Accessories" (text search) and tags contain "audio" (regex)
db.products.find({
  $text:{
    $search:"Accessories"
  },
  tags:/audio/i
}) 

//Question-5: Find products where:
//productName contains "tele" (regex)
//The text search on category contains "Electronics"
//The price is an even number ($mod)

db.products.find({
  productName: { 
    $regex: "tele", $options: "i" 
  },
  $text: { 
    $search: "Electronics" 
    
  },
  price: { 
    $mod: [2, 0] 
  }
}) 

//Question-6: Find products where:
//Tags contain "smartphone" (text search)
//ProductName ends with "e" (regex)
//The sum of width and height is greater than 10 ($expr)
db.products.find({
  $text:{
    $search:"smartphone"
  },
  productName:/e$/i,
  $expr:{
    $gt:[
      {$add:["$dimensions.width","$dimensions.height"]},10
    ]
  }
}) 

//Question-7: Find discounted products where:
//productName contains "Scooter" (regex)
//The category contains "Transportation" (text search)
//The product is not discounted
db.products.find({
  productName: /scooter/i,
  $text: { 
    $search: "Transportation" 
  },
  discounted: false
}) 

//Question-8: Find products where ‘tags’ contains the word ‘gaming’ but the product name does NOT contain ‘PC’.
db.products.find({
  tags: /gaming/i,
  productName: { 
    $not: { 
      $regex: 
      /PC/i 
    } 
  }
})

//Qustion-9: Find products where the category starts with ‘E’ and the product name contains ‘TV’ or ‘Smart’.
db.products.find({
  category: { $regex: /^E/ },
  $or: [
    { 
      productName: { 
        $regex: /TV/i 
      } 
    },
    { 
      productName: { 
        $regex: /Smart/i 
      } 
    }
  ]
}) 

//Question-10: Find products with names containing either ‘o’ or ‘i’, but NOT both.
db.products.find({
  $or: [
    { 
      productName: { 
        $regex: /o/, 
        $not: { $regex: /i/ } 
      } 
    },
    { 
      productName: { 
        $regex: /i/, 
        $not: { $regex: /o/ } 
      } 
    }
  ]
}) 

//Question-11: Find products where the name contains ‘pc’ and has exactly 1 ratings
db.products.find({
  productName: { $regex: /pc/i },
  ratings: { $size: 1 }
})


//Question-12: Find products where:
//The category contains "Smart" but does not contain "Watch".
//The product name has exactly 7 characters.
db.products.find({
    category: /smart/i,
    category: { 
      $not: { 
        $regex: "Watch", $options: "i" 
      } 
    },
    productName: /^.{7}$/
}) 

//Qestion-13: Find products where:
//The product name contains "Ultra" but not "Pro".
//The price is a multiple of 3.
db.products.find({
productName: /ulta/i,
productName: { 
    $not: { $regex: "Pro", $options: "i" } 
},
price: { 
    $mod: [3, 0] 
}
}) 

//Question-14: Find products where:
//The product name contains at least one number.
//The price is a multiple of 6.
db.products.find({
productName:/[0-9]/,
price: { 
    $mod: [6, 0] 
}
}) 

//Question-15: Find products where:
//The product name starts with "G" or "S".
//The category is either "Electronics" or "Appliances".
//The price is not a multiple of 10.
db.products.find({
productName: { 
    $regex: /^[GS]/ 
},
category: { 
    $in: ["Electronics", "Appliances"] 
},
price: { 
    $not: { 
    $mod: [10, 0] 
    } 
}
}) 

//Qustion-16: Find products where:
//The product name is exactly 5 letters long.    
//has category text "Electronics"
db.products.find({
productName: /^.{9}$/,
$text:{
    $search:"Electronics"
}
}) 

//Question-17: Find products where:
//The text search finds products with "gaming" or "laptop".
//The price is a multiple of 9.
db.products.find({
$text: { $search: "Gaming laptop" },
price: { $mod: [9, 0] }
}) 

//Question-18: Find products where:
//The text search finds "4K monitor".
//The brand name contains at least one uppercase letter.
//The price is a multiple of 10.
db.products.find({
$text: { 
    $search: "4K monitor" 
},
productName: /[A-Z]/,
price: { 
    $mod: [10, 0] 
}
}) 

//Question-19: Find products where:
//The text search finds "UHD".
//The brand name contains exactly 13 letters.
//The price is a multiple of 7.
db.products.find({
$text: { 
    $search: "uhd" 
},
productName:/^.{13}$/, 
price: { 
    $mod: [5, 0] 
}
})

//Question-20: Find products where:
//The text search finds "smartphone".
//The category starts with "E" or "P".
//The price is not a multiple of 5.
db.products.find({
    $text: { 
      $search: 
      "smartphone" 
    },
    category:/^[EP]/,
    price: { $not: { $mod: [5, 0] } }
})


























