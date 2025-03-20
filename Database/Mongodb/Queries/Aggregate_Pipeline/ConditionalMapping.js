db.products.insertMany([
    {
        "productName": "Laptop",
        "category": "Electronics",
        "specs": {
            "processor": "Intel Core i7",
            "ram": "16GB",
            "display": "AMOLED",
            "storage": {
                "type": "SSD",
                "size": "512GB"
            }
        },
        "price": 2499.99,
        "stock": 0,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-15')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-16')" }
        ],
        "available": true,
        "tags": ["laptop", "ultrabook", "high-performance","professional"],
        "releaseDate": ISODate('2023-01-01')
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
        "stock": 30,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-10')" }
        ],
        "available": true,
        "tags": ["desktop", "gaming", "high-end"],
        "releaseDate": ISODate('2023-02-15')
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
        "stock": 0,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-08-25')" }
        ],
        "available": true,
        "tags": ["smartphone", "5G", "water-resistant"],
        "releaseDate": ISODate('2023-03-10')
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
        "stock": 10,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["home entertainment", "TV", "UHD"],
        "releaseDate": ISODate('2023-04-20')
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
        "stock": 70,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["audio", "headphones", "bluetooth"],
        "releaseDate": ISODate('2023-05-05')
    },
    {
        "productName": "Wired Earphones",
        "category": "Accessories",
        "specs": {
            "type": "In-Ear",
            "features": {
                "noiseCancellation": false
            }
        },
        "price": 99.99,
        "stock": 0,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 2, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 3, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["audio", "earphones", "bluetooth"],
        "releaseDate": ISODate('2025-01-01')
    },
    {
        "productName": "Electric Scooter",
        "category": "Transportation",
        "specs": {
            "maxSpeed": "25 mph",
            "range": "40 miles"
        },
        "price": 1550.00,
        "stock": 120,
        "ratings": [],
        "available": true,
        "tags": ["eco-friendly", "high-performance", "scooter"],
        "releaseDate": ISODate('2023-06-01')
    }
  ]
);

// Question-1: Add a new field priceCategory that classifies 
// each product as "Expensive" if the price is greater than 
// $1000, otherwise "Affordable".
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            priceCategory: {
                $cond: {
                    if: { $gt: ["$price", 1000] },
                    then: "exp",
                    else: "not-exp"
                }
            }
        }
    }
])



// Question-2: Classify products based on their price into "Cheap", "Moderate", or "Expensive".
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            priceCategory: {
                $cond: {
                    if: { $gt: ["$price", 1500] },
                    then: "exp",
                    else: {
                        $cond: {
                            if: { $and: [{ $gt: ["$price", 500] }, { $lt: ["$price", 1500] }] },
                            then: "Modorate",
                            else: "Cheap",
                        }
                    }
                }
            }
        }
    }
])
// Question-3: Group products by category, calculating total sales and adding a flag if total sales exceed $5000.
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            countExpensive: {
                $sum: {
                    $cond: { if: { $gt: ["$price", 1000] }, then: 1, else: 0 }
                }
            },
            countAffordable: {
                $sum: {
                    $cond: { if: { $lte: ["$price", 1000] }, then: 1, else: 0 }
                }
            }
        }
    }
]);  
// Question-4: Concatenate the status of the product to its name based on availability.
db.products.aggregate([
    {$project : {
        _id: 0,
        productName : {
            $concat : [
                "$productName",
                {
                    $cond : {
                        if:"$available",then:"- available",else : "- Not-available"
                    }
                }
            ]
        } }
    }]
)
// Question-5: Add a new field that reflects a discount percentage based on the product's category.
db.products.aggregate([
    {$project : {
            _id: 0,
            productName : 1,
            discount : {
                $cond : {
                    if:{ $in : ["$category",["Transportation"]]},
                    then : { $multiply : ["$price",0.1]},
                    else : {$multiply : ["$price",0.5]}
                }
            }
        }
    }]
)

//Question-6: Classify products based on stock levels into 
//"Out of Stock", "Limited Stock" (1-50 units), or "In Stock" (more than 50 units).
db.products.aggregate([
  {
    $project:{
      _id:0,
      productName:1,
      stock:1,
      stockLevel:{
        $cond:{
          if:{
            $gt:["$stock",50]
          }, then:"In Stock",
          else:{
            $cond:{
              if:{
                $gt:["$stock",0]
              },then:"Limited Stock",
              else:"Out Of Stock"
            }
          }
        }
      }
    }
  }
])

//Question-7: Identify premium electronics by categorizing products as "Premium" 
//if they belong to "Electronics" and cost more than $1000; otherwise, classify as "Standard".
db.products.aggregate([
  {
    $project:{
      _id:0,
      productName:1,
      category:1,
      price:1,
      elecCatergory:{
        $cond:{
          if:{
            $and:[
              {
                $eq:["$category","Electronics"]
              },{
                $gt:["$price",1000]
              }
            ]
          },then:"Premium",
          else:"Standard"
        }
      }
    }
  }
])

//Question-8: Add a highlyRated flag (true/false) for products with an average rating of 4.5 or higher.
db.products.aggregate([
  {
    $addFields:{
      highlyRated:{
        $cond:{
          if:{
            $gte:[
              {$avg:"$ratings.score"},4.5
            ]
          },then:"true",else:"false"
        }
      }
    }
  },{
    $project:{
      _id:0,
      highlyRated:1,
      productName:1
    }
  }
])

//Question-9: Categorize products based on their release year 
//New if released after 2024, Recent for 2023-2024, and Old otherwise.
db.products.aggregate([
  {
    $addFields:{
      age:{
        $cond:{
          if:{
            $gte:["$releaseDate",ISODate("2024-01-01")]
          },then:"New",
          else:{
            $cond:{
              if:{
                $gte:["$releaseDate",ISODate("2023-01-01")]
              },then:"Recent",else:"Old"
            }
          }
        }
      }
    }
  },{
    $project:{
      _id:0,
      age:1,
      productName:1,
      releaseDate:1
    }
  }
])

//Question-10: Flag "Highly Discounted" products if they are in "Accessories" and their price is below $150; 
//otherwise, classify as "Regular Discount".
db.products.aggregate([
  {
    $addFields:{
      flag:{
        $cond:{
          if:{
            $and:[
              {$eq:["$category","Accessories"]},
              {$lt:["$price",150]}
            ]
          },then:"Highly Discounted", else:"Regular Discount"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      flag:1,
      category:1,
      price:1
    }
  }
])

//Question-11: Identify products with "Balanced Ratings" if they have at least 2 ratings and a mix of 4s and 5s; 
//otherwise, classify them as "Unbalanced Ratings".
db.products.aggregate([
  {
    $project:{
      _id:0,
      productName:1,
      "ratings.score":1,
      balance:{
        $cond:{
          if:{
            $and:[
              {$gte:[{$size:"$ratings"},2]},
              {
                $eq:[
                  {$setIntersection:["$ratings.score",[4,5]]},2
                ]
              }
            ]
          },then:"Balanced Ratings", else:"Unbalanced Ratings"
        }
      }
    }
  }
])

//Question-12: Identify "Luxury Items" by marking products as "Luxury" 
//if they cost over $1500 and belong to "Electronics" or "Transportation".
db.products.aggregate([
  {
    $project:{
      _id:0,
      productName:1,
      category:1,
      price:1,
      flag:{
        $cond:{
          if:{
            $and:[
              {$in:["$category",["Electronics","Transportation"]]},
              {
                $gt:["$price",1500]
              }
            ]
          },then:"Luxury",else:"Regular"
        }
      }
    }
  }
])

//Question:13: Add a Status Based on Product Ratings
//If the average rating is ≥ 4.5, mark it as "Highly Rated", otherwise "Moderately Rated".
db.products.aggregate([
  {
    $addFields:{
      status:{
        $cond:{
          if:{
            $gt:[
            {$avg:"$ratings.score"},
            4.5
            ]
          },then:"Highly Rated", else:"Moderately Rated"
        }
      }
    }
  },{
    $project:{
      _id:0,
      status:1,
      avgRatings:{
        $avg:"$ratings.score"
      },
      productName:1,
      "ratings.score":1
    }
  }
])

//Question-14: Find Products That Belong to Multiple Categories
//Products with more than 3 tags are considered "Versatile", otherwise "Specific Use".
db.products.aggregate([
  {
    $project:{
      _id:0,
      productName:1,
      tags:{
        $size:"$tags"
      },
      flag:{
        $cond:{
          if:{
            $gt:[{$size:"$tags"},3]
          },then:"Versatile",else:"User Specific"
        }
      }
    }
  }
])

//Question-15: Group Products by Category & Count Only Available Products
// Group by category and count only products where available == true.
db.products.aggregate([
  {
    $group:{
      _id:"$category",
      availableProducts:{
        $sum:{
          $cond:{
            if:{
              $eq:["$available",true]
            },then:1,else:0
          }
        }
      }
    }
  }
])

//Question-16: Count Highly Rated Products in Each Category
//Group by category and count how many products have an average rating ≥ 4.5.
db.products.aggregate([
  {
    $group:{
      _id:"$category",
      nOfHighlyRatedProducts:{
        $sum:{
          $cond:{
            if:{
              $gte:[{$avg:"$ratings.score"},4.5]
            },then:1,else:0
          }
        }
      }
    }
  }
])

//Question-17: Find the Total Revenue per Category & Classify Revenue
// Group by category, calculate total revenue (price × stock), and classify:
//     ≥ 100,000 → "High Revenue"
//     < 100,000 → "Low Revenue"
db.products.aggregate([
  {
    $group:{
      _id:"$category",
      revenue:{
        $sum:{
          $multiply:["$price","$stock"]
        }
      }
    }
  },{
    $project:{
      revenue:1,
      classOfRev:{
        $cond:{
          if:{
            $gte:["$revenue",100000]
          },then:"High revenue",else:{
            $cond:{
              if:{
                $lt:["$revenue",100000]
              },then:"Low revenue",else:""
            }
          }
        }
      }
    }
  }
])

//Question-18: Group products by release Month & Count outOf Stock products
db.products.aggregate([
  {
    $group:{
      _id:{
        releaseMonth:{
          $month:"$releaseDate"
        }
      },
      nOfOutOfStock:{
        $sum:{
          $cond:{
            if:{
              $eq:["$stock",0]
            },then:1,else:0
          }
        }
      }
    }
  }
])

//Question-19: Count of Products in Each Category with Classification
//Group by category and classify:
//     ≥ 3 products → "Popular"
//     < 4 products → "Rare"
db.products.aggregate([
  {
    $group:{
      _id:"$category",
      numberOfProds:{
        $sum:1
      }
    }
  },{
    $project:{
      numberOfProds:1,
      classification:{
        $cond:{
          if:{
            $gte:["$numberOfProds",4]
          },then:"Popular",else:"Rare"
        }
      }
    }
  }
])

//Question-20: Average Rating per Category & Classification
//Calculate the average rating per category & classify it:
//     ≥ 4.5 → "Highly Rated"
//     < 4.5 → "Moderately Rated"
db.products.aggregate([
  {
    $unwind:"$ratings"
  },
  {
    $group:{
      _id:"$category",
      avgRating:{
        $avg:"$ratings.score"
      }
    }
  },{
    $project:{
      avgRating:1,
      classification:{
        $cond:{
          if:{
            $gte:["$avgRating",4.5]
          },then:"Highly Rated",else:"Moderately Rated"
        }
      }
    }
  }
])
