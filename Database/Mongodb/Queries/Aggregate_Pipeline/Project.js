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
          "available": false,
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
          "available": false,
          "tags": ["eco-friendly", "electric", "scooter"],
          "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
          "meta": null,
          "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
          "relatedProducts": [120, 121, 233],
          "reviews": [],
          "discounted": false
      }
  ]  
)

db.users.insertMany(
  [
   {
     "_id": ObjectId("6501b6d8e4b0a12f145a1a01"),
     "name": "Alice Johnson",
     "age": 28,
     "email": "alice@example.com",
     "address": {
       "city": "New York",
       "state": "NY",
       "zipcode": "10001"
     },
     "membership": "premium",
     "transactions": [
       { "amount": 150, "date": ISODate("2024-03-01T10:15:00Z"), "status": "completed", "method": "Credit Card" },
       { "amount": 200, "date": ISODate("2024-03-05T15:30:00Z"), "status": "pending", "method": "UPI" }
     ],
     "loginHistory": [
       { "timestamp": ISODate("2024-03-10T12:45:00Z"), "device": "iPhone" },
       { "timestamp": ISODate("2024-03-12T08:30:00Z"), "device": "MacBook" }
     ],
     "friends": ["Bob", "Charlie"],
     "messages": [
       { "to": "Bob", "text": "Hey, let's meet up!", "timestamp": ISODate("2024-03-08T18:00:00Z") }
     ],
     "interests": ["sports", "music"]
   },
   {
     "_id": ObjectId("6501b6d8e4b0a12f145a1a02"),
     "name": "Bob Smith",
     "age": 35,
     "email": "bob@example.com",
     "address": {
       "city": "Los Angeles",
       "state": "CA",
       "zipcode": "90001"
     },
     "membership": "basic",
     "transactions": [
       { "amount": 75, "date": ISODate("2024-03-02T11:20:00Z"), "status": "completed", "method": "Debit Card" }
     ],
     "loginHistory": [
       { "timestamp": ISODate("2024-03-10T09:15:00Z"), "device": "Android Phone" }
     ],
     "friends": ["Alice"],
     "messages": [],
     "interests": ["technology", "gaming"]
   },
   {
     "_id": ObjectId("6501b6d8e4b0a12f145a1a03"),
     "name": "Charlie Brown",
     "age": 40,
     "email": "charlie@example.com",
     "address": {
       "city": "Chicago",
       "state": "IL",
       "zipcode": "60601"
     },
     "membership": "premium",
     "transactions": [
       { "amount": 500, "date": ISODate("2024-02-25T14:00:00Z"), "status": "completed", "method": "PayPal" },
       { "amount": 300, "date": ISODate("2024-03-10T16:45:00Z"), "status": "completed", "method": "Credit Card" }
     ],
     "loginHistory": [
       { "timestamp": ISODate("2024-03-12T07:50:00Z"), "device": "Windows Laptop" }
     ],
     "friends": ["Alice"],
     "messages": [
       { "to": "Alice", "text": "How are you?", "timestamp": ISODate("2024-03-09T21:00:00Z") }
     ],
     "interests": ["fitness", "travel"]
   }
 ])
  
// Question-1: Project only the product name and price fields for all documents.
db.products.aggregate([
    {
        $project: { productName: 1, price: 1, _id: 0 }
    }
])
// Question-2: Exclude the _id field and include all other fields for documents.
db.products.aggregate([
    { $project: { _id: 0 } }
]);

//Question-3: Exclude the _id field and include all other fields for documents.
db.products.aggregate([
    {
        $project: { productName: 1, salesPrice: { $multiply: ["$price", 0.10] } }
    }
])
// Question-4: Project the product name and a new field priceAfterTax which includes a 15% tax.
db.products.aggregate([
    {
        $project: { _id: 0, productName: 1, tex: { $multiply: ["$price", 1.16] } }
    }
])
// Question-5: Display the category and a new field isExpensive that is true if the price is greater than 1000.
db.products.aggregate([
    {
        $project: { _id: 0, category: 1, isExpensive: { $gt: ["$price", 1000] } }
    }
])
// Question-6: Compute and display a new field discountedPrice which is 20% less than the original price.
db.products.aggregate([
    {
        $project: { _id: 0, productName: 1, discount: { $multiply: ["$price", 0.80] } }
    }
])
// Question-7: Show product name and a new array tagsCount that contains the count of tags each product has.
db.products.aggregate([
    {
        $project: { _id: 0, productName: 1, tagsCount: { $size: "$tags" } }
    }
])
// Question-8: Include all original fields but add a new field inventoryValue which is the product of price and a field stock if it exists.
db.products.aggregate([
    {
        $project: {
            productName: 1,
            invertoryValue: { $ifNull: [{ $multiply: ["$price", "$stock"] }, "N/A"] }
        }
    }
]);
// Question-9: Display product name and a new field ratingAverage that is the average of the scores from the ratings array.
db.products.aggregate([
    {
        $project: {
            productName: 1,
            ratingAverage: { $avg: "$ratings.score" }
        }
    },
]);


// Question-10: Show all products with their name, price, and 
// a new field priceRange indicating if they are 'cheap', 
// 'moderate', or 'expensive' based on the price.
db.products.aggregate([
    {
        $project: {
            productName: 1,
            pricing: {
                $switch: {
                    branches: [
                        { case: { $gt: ["$price", 1000] }, then: "exp" },
                        { case: { $lt: ["$price", 1000] }, then: "cheap" },
                    ],
                    default: "moderate"
                }
            }
        }
    },
]);

//Question-11: Show product name and a new field shortName that only includes the first five characters of the product name.
db.products.aggregate([
  {$project:{
    _id:0,
    productName:1,
    shortName:{
      $substr:["$productName",0,5]
    }
  }}
])

//Question-12: Display productName and a new field firstTag containing the first tag from the tags array.
db.products.aggregate([
  {$project:{
    _id:0,
    productName:1,
    firstTag:{
      $arrayElemAt:["$tags",0]
    }
  }}
])

//Question-13: Show productName and a new field isNew which is true if releaseDate is after "2023-01-01T00:00:00.000Z".
db.products.aggregate([
  {$project:{
    _id:0,
    productName:1,
    isNew:{
      $gt:["$releaseDate",new ISODate("2023-01-01T00:00:00.000Z")]
    }
  }}
])

//Question-14: Show productName and a field hasRatings, which is true if there are any ratings.
db.products.aggregate([
    {$project:{
    _id:0,
    productName:1,
    hasRatings:{
      $ne:[
        {$size:"$ratings"},0
      ]
    }
  }}
])

//Question-15: Show productName, price, and a new field formattedPrice as a string prefixed with "D".
db.products.aggregate([
  {$project:{
    productName:1,
    _id:0,
    formattedPrice:{
      $concat:[
        "D ", {$toString:"$price"}
      ]
    }
  }}
])

//Question-16: Find all products with a tag containing "electric" and show productName and specs.
db.products.aggregate([
  {
    $match:{
      tags:"electric"
    }
  },
  {$project:{
    _id:0,
    productName:1,
    tags:1
  }}
])

//Question-17: Fetch products that have been rated by users, but only return productName, ratings, and average rating.
db.products.aggregate([
  {
  $match:{
    ratings:{
      $ne:[]
    }
  }
  },
  {
    $project:{
      _id:0,
      productName:1,
      ratings:1,
      averageRating:{
        $avg:"$ratings.score"
      }
    }
  }
])

//Question-18: Get products that are not available but have at least one rating, showing productName, available, ratings, and the latest review date
db.products.aggregate([
  {
    $match:{
      available:true,
      ratings:{
        $gt:[
          {$size:"$ratings"},
          0
        ]
        
      }
    }
  },
  {
    $project:{
      _id:0,
      productName:1,
      available:1,
      ratings:1,
      latestReviewDate:{
        $max:"$ratings.reviewDate"
      }
    }
  }
])

//Question-19: Find all products that have "batteryLife" in specs.features. Show only:
// productName
// specs.features.batteryLife
// A computed field longBattery, which is true if battery life is "24 hours" or more.
db.products.aggregate([
  {
    $match:{
      "specs.features":{
        $exists:"batteryLife"
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      "specs.features.batteryLife":1,
      longBattery:{
          $gte:[
            {
              $toInt:{
                $arrayElemAt:[
                  {
                    $split:["$specs.features.batteryLife"," "]
                  },0
                ]
              }
            },24
          ]
        }
      }
    }
])

//Question-20: Retrieve products that have at least one related product and at least one tag. Show:
// productName
// relatedProducts
// tags
// A computed field hasManyRelated, which is true if related products count is > 2.
db.products.aggregate([
  {
    $match:{
      relatedProducts:{
        $ne:[]
      },
      tags:{
        $ne:[]
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      relatedProducts:1,
      tags:1,
      hasManyRelated:{
        $gt:[
          {$size:"$relatedProducts"},2
        ]
      }
    }
  }
])





// 1️⃣ Find the total amount spent per user
db.users.aggregate([
  {
    $project : {
      name : 1,
      transactions:1,
      total : {
        $sum : "$transactions.amount"
      }
    }
  }
]).pretty()