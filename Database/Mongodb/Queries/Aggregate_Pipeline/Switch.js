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

// Question-1: Project a new field priceCategory which categorizes the price as 'Low', 'Medium', or 'High'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            pricing: {
                $switch: {
                    branches: [
                        { case: { $and: [{ $gt: ["$price", 500] }, { $lt: ["$price", 1000] }] }, then: "medium" },
                        { case: { $and: [{ $gt: ["$price", 500] }, { $lt: ["$price", 1500] }] }, then: "exp" },
                    ],
                    default: "aws"
                }
            }
        }
    }
]);
// Question-2: Include product name and a new field inventoryStatus indicating if the stock level is 'Empty', 'Low', or 'Adequate'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            inventoryStatus: {
                $switch: {
                    branches: [
                        { case: { $and: [{ $gt: ["$stock", 0] }, { $gt: ["$stock", 10] }] }, then: "Low" },
                        { case: { $eq: ["$stock", 0] }, then: "Empty" }
                    ],
                    default: "Adequate"
                }
            }
        }
    }
]);
// Question-3: Display product name and a newRelease field which checks if the release date is within the last year.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $gt: ["$releaseDate", ISODate('2023-01-01')] }, then: "yes" }
                    ],
                    default: "No"
                }
            }
        }
    }
]);




// Question-4: Project the name and a ratingLevel indicating if the 
// average rating is 'Poor', 'Good', or 'Excellent'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        {
                            case: { $gt: [{ $avg: "$ratings.score" }, 4] },
                            then: "Fantastic"
                        },
                        {
                            case: { $lt: [{ $avg: "$ratings.score" }, 2] },
                            then: "Poor"
                        },
                        {
                            case: { $gt: [{ $avg: "$ratings.score" }, 2] },
                            then: "Medium"
                        }
                    ],
                }
            }
        }
    }
]);

// Question-5: Calculate a profitability field based on the cost and price which indicates if the product is 'Profitable', 'Break-even', or 'Loss'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $gt: ["$price", "$cost"] }, then: "Pr" },
                    ],
                    default: "Non-pr"
                }
            }
        }
    }
]);

// Question-6: Display product name and a userRating field indicating if it's 'Unrated', 'Poor', 'Average', or 'Excellent'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $eq: [{ $size: "$ratings" }, 0] }, then: "no review" },
                        {
                            case: {
                                $and: [
                                    { $gte: [{ $avg: "$ratings.score" }, 2] },
                                    { $lte: [{ $avg: "$ratings.score" }, 3] },
                                ]
                            }, then: "Average"
                        },
                        {
                            case: {
                                $and: [
                                    { $gte: [{ $avg: "$ratings.score" }, 3] },
                                    { $lte: [{ $avg: "$ratings.score" }, 4] },
                                ]
                            }, then: "good"
                        },
                        {
                            case: {
                                $and: [
                                    { $gte: [{ $avg: "$ratings.score" }, 4] },
                                    { $lte: [{ $avg: "$ratings.score" }, 5] },
                                ]
                            }, then: "Superb"
                        },
                    ],
                    default: "Not got anything"
                }
            }
        }
    }
]);
// Question-7: Calculate and display a shippingCost based on the weight of the product, classified into 'Low', 'Medium', 'High'.
db.products.aggregate([
    {
        $project: {
            productName: 1,
            shippingCost: {
                $switch: {
                    branches: [
                        { case: { $lt: ["$weight", 5] }, then: "Low" },
                        { case: { $lt: ["$weight", 20] }, then: "Medium" }
                    ],
                    default: "High"
                }
            }
        }
    }
]);

//Question-8: Display the product name and maintenance based on the product type indicating if it's 'High', 'Medium', or 'Low'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $in: ["$tags", ["high-performance", "headphones"]] }, then: "High" },
                    ],
                    default: "Not got anything"
                }
            }
        }
    }
]);

//Question-9:Determine User Engagement Based on Reviews Count
//Add reviewLevel (No Reviews, Few Reviews, Highly Reviewed).
db.products.aggregate([
  {
    $addFields:{
      reviewLevel:{
        $switch:{
          branches:[
            {case:{
              $gte:[
                {$size:"$ratings"},2
              ]
            },then:"Highly Reviewed"},
            {case:{
              $gte:[
                {$size:"$ratings"},1
              ]
            },then:"Few Reviews"},
            {case:{
              $eq:[
                {$size:"$ratings"},0
              ]
            },then:"No Reviews"}
          ],
          default:"N/A"
        }
      }
    }
  },
  {
    $project:{
      _id:0,
      productName:1,
      reviewLevel:1
    }
  }
])

//Question-10: Classify Products Based on Release Year
//Categorize products as Old, Recent, or Latest.
db.products.aggregate([
  {
    $addFields:{
      ageCategory:{
        $switch:{
          branches:[
            { case:{$gte:[
                "$releaseDate",
                new ISODate("2023-01-01")
              ]},then:"Latest"
            },
            { case:{$gte:[
                "$releaseDate",
                new ISODate("2022-01-01")
              ]},then:"Recent"
            },
            { case:{$lte:[
                "$releaseDate",
                new ISODate("2022-01-01")
              ]},then:"Old"
            },
          ],
          default:"N/A"
        }
      }
    }
  },
  {
    $project:{
      _id:0,
      productName:1,
      ageCategory:1
    }
  }
])

//Question-11: Assign rating quality
// Average rating < 3 → "Poor"
// Average rating >=3 → "Average"
//Average rating >= 4 → "Excellent"
db.products.aggregate([
  {
    $addFields:{
      quality:{
        $switch:{
          branches:[
            {case:{
              $gte:[{$avg:"$ratings.score"},4]
            },then:"Excellent"},
            {case:{
              $gte:[{$avg:"$ratings.score"},3]
            },then:"Average"},
            {case:{
              $lt:[{$avg:"$ratings.score"},3]
            },then:"Poor"},
          ],
          default:"No rated"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      quality:1
    }
  }
])

//Question-12: Tag products based on dimensions (size)
// Width < 30 cm → "Compact"
// Width between 30-70 cm → "Medium"
//Width     >70 cm → "Large"
db.products.aggregate([
  {
    $addFields:{
      size:{
        $switch:{
          branches:[
            {case:{
              $gt:[
                "$dimensions.width",70
              ]
            },then:"Large"},
            {case:{
              $gte:[
                "$dimensions.width",30
              ]
            },then:"Medium"},
            {case:{
              $lt:[
                "$dimensions.width",30
              ]
            },then:"Compact"},
          ],
          default:"No Width"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      size:1
    }
  }
])

//Question-13: Assign age category based on release date
// Released in the last 15 months → "New"
// 15-23 months → "Recent"
// More than 23 months → "Old"
db.products.aggregate([
  {
    $addFields:{
      monthsSinceRelease:{
        $divide:[
        {$subtract:[
          new Date(), {$toDate:"$releaseDate"}
        ]},
          1000*60*60*24*30
        ]
      },
    }
  },
  {
    $addFields:{
        age:{
          $switch:{
            branches:[
              {case:{
                $gt:[
                  "$monthsSinceRelease",23
                ]
              },then:"Old"},
              {case:{
                $gte:[
                  "$monthsSinceRelease",15
                ]
              },then:"Recent"},
              {case:{
                $lte:[
                  "$monthsSinceRelease",15
                ]
              },then:"New"}
            ],
            default:"N/A"
          }
        }
      }
  }
  ,{
    $project:{
      monthsSinceRelease:1,
      productName:1,
      releaseDate:1,
      age:1,
      _id:0
    }
  }
])

//Question-14: Categorize Products Based on Price Range
// Below $500 → "Budget"
// $500 - $1500 → "Mid-Range"
// Above $1500 → "Premium"
db.products.aggregate([
  {
    $addFields:{
      priceCategory:{
        $switch:{
          branches:[
            {
              case:{
                $gt:[
                  "$price",1500
                ]
              },
              then:"Premium"
            },
            {
              case:{
                $gt:[
                  "$price",500
                ]
              },
              then:"Mid-Range"
            },
            {
              case:{
                $lte:[
                  "$price",500
                ]
              },
              then:"Budget"
            },
          ],
          default:"N/A"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      priceCategory:1
    }
  }
])

//Question-15: Assign Popularity Based on Ratings Count
// 0-1 Ratings → "Less Popular"
// 2-3 Ratings → "Moderately Popular"
// More than 3 Ratings → "Highly Popular"
db.products.aggregate([
  {
    $addFields:{
      popularity:{
        $switch:{
          branches:[
            {
              case:{
                $gt:[
                  {$size:"$ratings"},
                  3
                ]
              },then:"Highly Popular"
            },    
            {
              case:{
                $gte:[
                  {$size:"$ratings"},
                  2
                ]
              },then:"Moderately Popular"
            },    
            {
              case:{
                $gte:[
                  {$size:"$ratings"},
                  0
                ]
              },then:"Less Popular"
            },    
          ],
          default:"No Rating"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      popularity:1
    }
  }
])

//Question-16: Classify Products Based on Category Type
// Electronics → "Tech"
// Accessories → "Add-on"
// Transportation → "Mobility"
db.products.aggregate([
  {
    $addFields:{
      categoryType:{
        $switch:{
          branches:[
            {
              case:{
                $eq:[
                "$category","Electronics"
                ]
              },then:"Tech"
            },
            {
              case:{
                $eq:[
                "$category","Accessories"
                ]
              },then:"Add-on"
            },
            {
              case:{
                $eq:[
                  "$category","Transportation"
                ]
              },then:"Mobility"
            },
          ],
          default:""
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      category:1,
      categoryType:1
    }
  }
])

//Question-17: Categorize Products Based on Noise Cancellation Feature
// Noise Cancelling Available → "Premium Audio"
// No Noise Cancellation → "Standard Audio" 
db.products.aggregate([
  {
    $addFields:{
      audioQuality:{
        $switch:{
          branches:[
            {
              case:{
                $eq:[
                  "$specs.features.noiseCancellation",true
                ]
              },then:"Premium Audio"
            },
            {
              case:{
                $eq:[
                  "$specs.features.noiseCancellation",false
                ]
              },then:"Standard Audio"
            }
          ],
          default:"Not an Audio device"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      audioQuality:1
    }
  }
])

//Question-18 Determine the User Base for Products Based on Tags
// "gaming" in tags → "Gamers"
// "professional" in tags → "Professional Users"
// Other → "General Consumers"
db.products.aggregate([
  {
    $addFields:{
      userBase:{
        $switch:{
          branches:[
            {
              case:{
                $in:[
                  "gaming","$tags"
                ]
              },then:"Gamers"
            },
            {
              case:{
                $in:[
                  "professional","$tags"
                ]
              },then:"Professional Users"
            },
          ],
          default:"General Consumers"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      userBase:1
    }
  }
])

//Questin-19: Determine Restocking Status
// Stock 0 & released in the last 6 months → "Restocking Soon"
// Stock 0 & released more than 6 months ago → "Discontinued"
// Stock available → "In Stock"
db.products.aggregate([
  {
    $addFields:{
      restockStatus:{
        $switch:{
          branches:[
            {
              case:{
                $and:[
                  {
                    $eq:[
                      "$stock",0
                    ]
                  },
                  {
                    $gte:[
                      "$releaseDate",
                      {
                        $subtract:[
                          new Date(),
                          1000*60*60*24*30*6
                        ]
                      }
                    ]
                  }
                ]
              },then:"Restocking Soon"
            },
            {
              case:{
                $and:[
                  {
                    $eq:[
                      "$stock",0
                    ]
                  },
                  {
                    $lte:[
                      "$releaseDate",
                      {
                        $subtract:[
                          new Date(),
                          1000*60*60*24*30*6
                        ]
                      }
                    ]
                  }
                ]
              },then:"Discontinued"
            },
          ],
          default:"In Stock"
        }
      }
    }
  },{
    $project:{
      _id:0,
      restockStatus:1
    }
  }
])

//Question-20: Classify Stock Based on Seasonality
// If stock > 100 & released in the last 3 months → "New Release - Plenty in Stock"
// If stock < 20 & released in the last 3 months → "New Release - Selling Fast"
// If stock < 20 & older than 1 year → "Old Stock - Running Out"
// If stock > 100 & older than 1 year → "Old Stock - Overstocked"
db.products.aggregate([
  {
    $addFields:{
      seasonality:{
        $switch:{
          branches:[
            {
              case:{
                $and:[
                  {$gt:[
                    "$stock",50
                  ]},{
                  $gt:[
                    "$releaseDate",
                    {$subtract:[
                      new Date(),
                      1000*60*60*24*30*3
                    ]}
                  ]
                  }
                ]
              },then:"New Release - Plenty in Stock"
            },
            {
              case:{
                $and:[
                  {$lt:[
                    "$stock",20
                  ]},{
                  $gt:[
                    "$releaseDate",
                    {$subtract:[
                      new Date(),
                      1000*60*60*24*30*3
                    ]}
                  ]
                  }
                ]
              },then:"New Release - Selling Fast"
            },
            {
              case:{
                $and:[
                  {$lt:[
                    "$stock",20
                  ]},{
                  $lt:[
                    "$releaseDate",
                  { $subtract:[
                      new Date(),
                      1000*60*60*24*30*12
                    ]}
                  ]
                  }
                ]
              },then:"Old Stock - Running Out"
            },
            {
              case:{
                $and:[
                  {$gt:[
                    "$stock",50
                  ]},{
                  $lt:[
                    "$releaseDate",
                    {$subtract:[
                      new Date(),
                      1000*60*60*24*30*12
                    ]}
                  ]
                  }
                ]
              },then:"Old Stock - Overstocked"
            },
          ],
          default:"Regular Stock"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      seasonality:1
    }
  }
])
