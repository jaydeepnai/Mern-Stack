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
        }
    ]    
)

//Question-1: For products in Electronics category Update the discounted status to true and rename meta to additionalInfo
db.products.updateMany({
  category:"Electronics"
},{
  $set:{
    discounted:true
  },
  $rename:{
    meta:"additionalInfo"
  }
})

//Question-2: For all the products that are available Remove the releaseDate field and update the tags array by replacing all the tags with tag "updated-tag"
db.products.updateMany({
  available:true
},{
  $unset:{
    releaseDate:""
  },
  $set:{
    tags:["updated-tag"]
  }
})
db.products.find({
  available:true,
},{
  tags:1,
  _id:0,
  productName:1,
  releaseDate:1
})

//Question-3: Rename specs.processor to specs.cpu and update price
db.products.updateMany({
  category:"Electronics",
  "specs.processor":{
    $exists:true
  }
},{
  $rename:{
    "specs.processor":"specs.cpu"
  },
  $set:{
    price:1200
  }
})

//Question-4: Remove dimensions.depth, rename dimensions.width to dimensions.w
db.products.updateMany({
  "dimensions.depth":{
    $exists:true
  },
  "dimensions.width":{
    $exists:true
  },
},{
  $unset:{
    "dimensions.depth":""
  },
  $rename:{
    "dimensions.width":"dimensions.w"
  }
})

//Question-5: Update category to "Updated Category" and rename ratings to customerReviews
db.products.updateMany({
  category:{
    $exists:true
  }
},{
  $rename:{
    ratings:"customerReviews"
  },
  $set:{
    categry:"Update Category"
  }
})

//Question-6: Remove relatedProducts and set discounted to true
db.products.updateMany({
  relatedProducts:{
    $exists:true
  },
  discounted:{
    $exists:true
  }
},{
  $set:{
    discounted:true
  },
  $unset:{
    relatedProducts:""
  }
})

//Question-7: Update products where storage type is "SSD" or "NVMe SSD" 
//by moving size out of storage, renaming type to storageType, and removing storage.
db.products.updateMany({
  "specs.storage.type":{
    $in:["SSD","NVMe SSD"]
  }
},[
  {$set:{
    "storageSize":"$specs.storage.size",
    "specs.storageType":"$specs.storage.type"  
  }},
  {$unset:"specs.storage"}
])
db.products.find({
},{
  _id:0,
  specs:1
})

//Question-8: Move available into stock and remove meta
// Convert available into stock.available, rename tags to labels, and remove meta.
db.products.updateMany(
  {
    available: { 
       $exists: true 
       },
    tags: { 
       $exists: true 
     },
    meta: { 
       $exists: true 
     }
  },
  [
    {
      $set: { 
        "stock.available": "$available" ,
        "labels": "$tags"
      }
    },
    {
      $unset: ["available", "meta","tags"]
    }
  ]
);
db.products.find({
},{
  _id:0,
  stock:1,
  tags:1,
  labels:1,
  available:1,
  meta:1
})

//Question-9: Convert ratings into a separate reviews field
// For products with ratings, move them into reviews, rename ratings to reviewScores, and remove meta.
db.products.updateMany({
  ratings:{
    $exists:true
  },
  meta:{
    $exists:true
  }
},[
  {
    $set:{
      reviewScores:"$ratings"
    }
  },{
    $unset:["reviews","ratings","meta"]
  }
])
db.products.find({
},{
  _id:0,
  reviewScores:1,
  reviews:1,
  ratings:1,
  meta:1
})

//Question-10: Extract processor and ram outside specs
// Pull processor and ram from specs, rename category to type
db.products.updateMany({},[
  {
    $set:{
      ram:"$specs.ram",
      processor:"$specs.processor",
      type:"$category"
    }
  },{
    $unset:["specs.ram","specs.processor","category"]
  }
])
db.products.find({
},{
  _id:0,
  ram:1,
  processor:1,
  type:1,
  "specs.ram":1,
  "specs.processor":1,
  category:1
})



























