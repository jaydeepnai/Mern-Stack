db.sales.insertMany([
    {
        "storeLocation": "New York",
        "productCategory": "Electronics",
        "saleDate": ISODate("2023-04-25"),
        "amount": 299.99
    },
    {
        "storeLocation": "New York",
        "productCategory": "Clothing",
        "saleDate": ISODate("2023-05-15"),
        "amount": 89.99
    },
    {
        "storeLocation": "Los Angeles",
        "productCategory": "Electronics",
        "saleDate": ISODate("2023-05-20"),
        "amount": 349.99
    },
    {
        "storeLocation": "Los Angeles",
        "productCategory": "Clothing",
        "saleDate": ISODate("2023-06-01"),
        "amount": 120.00
    },
    {
        "storeLocation": "Chicago",
        "productCategory": "Electronics",
        "saleDate": ISODate("2023-05-25"),
        "amount": 179.99
    },
    {
        "storeLocation": "Chicago",
        "productCategory": "Clothing", "saleDate": ISODate("2023-06-05"), "amount": 99.95
    },
    {
        "storeLocation": "Houston",
        "productCategory": "Electronics", "saleDate": ISODate("2023-06-15"), "amount": 255.50
    },
    {
        "storeLocation": "Houston",
        "productCategory": "Clothing", "saleDate": ISODate("2023-07-04"), "amount": 110.00
    },
    {
        "storeLocation": "Miami",
        "productCategory": "Electronics", "saleDate": ISODate("2023-07-21"), "amount": 500.00
    },
    {
        "storeLocation": "Miami",
        "productCategory": "Clothing", "saleDate": ISODate("2023-08-10"), "amount": 140.75
    },
    {
        "storeLocation": "San Francisco",
        "productCategory": "Electronics", "saleDate": ISODate("2023-08-25"), "amount": 299.00
    },
    {
        "storeLocation": "San Francisco",
        "productCategory": "Clothing",
        "saleDate": ISODate("2023-09-05"),
        "amount": 88.99
    },
    {
        "storeLocation": "San Francisco",
        "productCategory": "Clothing",
        "saleDate": ISODate("2023-09-02"),
        "amount": 889.99
    },
])

//Question-1: Group by store location and product category, calculate total sales and average amount:
db.sales.aggregate(
    [
        {
            $group: {
                _id: {
                    location: "$storeLocation",
                    category: "$productCategory",
                },
                total: { $sum: 1 },
                avgItems: { $avg: "$amount" }
            }
        }
    ]
)
//Question-2: Group by year and month of sale date, categorize by product category, compute total revenue:
db.employees.aggregate([
    {
        $group: {
            _id: {
                year: { $year: "$saleDate" },
                month: { $month: "$saleDate" },
                category: "$productCategory"
            },
            totol: { $sum: "$amount" }
        }
    }
]);
//Question-3: Group by year, store location, and product category, count orders:
db.employees.aggregate([
    {
        $group: {
            _id: {
                year: { $year: "$saleDate" },
                location: "$storeLocation",
                productCategory: "$productCategory"
            },
            count: {
                $sum: 1
            }
        }
    }
]);
//Question-4: Group by store location, product category, compute maximum and minimum sale amounts:
db.employees.aggregate([
    {
        $group: {
            _id: {
                location: "$storeLocation",
                productCategory: "$productCategory"
            },
            max: { $max: "$amount" },
            min: { $min: "$amount" },
        }
    }
]);

//Question-5: Question: Calculate the maximum sale amount per store location for each year.
db.employees.aggregate([
    {
        $group: {
            _id: {
                location: "$storeLocation",
                year: { $year: "$saleDate" }
            },
            max: { $max: "$amount" },
        }
    },
]);

//Question-6: What are the total number of items sold per product category in each city?
db.employees.aggregate([
    {
        $group: {
            _id: {
                location: "$storeLocation",
                productCategory: "$productCategory"
            },
            max: { $sum: 1 },
        }
    },
]);
//Question-7: Find the minimum and maximum sale amounts for each year.
db.employees.aggregate([
    {
        $group: {
            _id: {
                year: { $year: "$saleDate" }
            },
            max: { $max: "$amount" },
            min: { $min: "$amount" },
        }
    },
]);
//Question-8: How many sales were made each month, sorted by month and year?
db.employees.aggregate([
    {
        $group: {
            _id: {
                months: { $month: "$saleDate" }
            },
            count: { $sum: 1 },
        }
    },
]);

//Question-9: What is the total revenue generated by each product category in the last quarter of the year?
db.employees.aggregate([
    {
        $match: {
            saleDate: {
                $gt: ISODate("2023-09-01"),
                $lt: ISODate("2023-12-31")
            }
        }
    },
    {
        $group: {
            _id: "$productCategory",
            count: { $sum: "$amount" },
        }
    }
]);

//Question-10: Calculate the total revenue and average sale amount per store location and per year.
db.sales.aggregate([
  {
    $group:{
      _id:{
        location:"$storeLocation",
        year:{
          $year:"$saleDate"
        }
      },
      totalRevenue:{
        $sum:"$amount"
      },
      avgSale:{
        $avg:"$amount"
      }
    }
  }
])

//Question-11: Find the total number of sales per store location, grouped by product category and quarter of the year.
db.sales.aggregate([
  {
    $group:{
      _id:{
        location:"$storeLocation",
        productCategory:"$productCategory",
        quarterOYear:{
          $ceil:{
            $divide:[{$month:"$saleDate"},3]
          }
        }
      },
      nOfSales:{
        $sum:1
      }
    }
  }
])

//Question-12: Determine the highest and lowest sale amount per store location for each month.
db.sales.aggregate([
  {
    $group:{
      _id:{
        store:"$storeLocation",
        month:{
          $month:"$saleDate"
        }
      },
      highest:{
        $max:"$amount"
      },
      lowest:{
        $min:"$amount"
      }
    }
  }
])
  
//Question-13: Compute the total sales amount per store location and per product category for sales made only on weekends.
db.sales.aggregate([
  {
    $match:{
      $expr:{
        $in:[{$dayOfWeek:"$saleDate"},[1,7]]
      }
    }
  },
  {
    $group:{
      _id:{
        storeLocation:"$storeLocation",
        productCategory:"$productCategory"
      },
      totalSales:{
        $sum:"$amount"
      }
    }
  }
])

//Question-14: Group by store location and product category, then compute the total revenue, average sale amount, 
//and number of sales per store-product combination.
db.sales.aggregate([
  {
    $group:{
      _id:{
        storeLocation:"$storeLocation",
        productCategory:"$productCategory"
      },
      totalRevenue:{
        $sum:"$amount"
      },
      avgSaleAmount:{
        $avg:"$amount"
      },
      totalSales:{
        $sum:1
      }
    }
  }
])

//Question-15: Determine the store with the highest total revenue per quarter of the year
db.sales.aggregate([
    {
      $group:{
        _id:{
          store:"$storeLocation",
          quarter:{
            $ceil:{
              $divide:[{$month:"$saleDate"},3]
            }
          }
        },
        revenue:{
          $sum:"$amount"
        }
      }
    },{
      $sort:{
        revenue:-1
      }
    },{
      $limit:1
    }
])

