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

//Question-1: Find products where the price is greater than 500 and the name contains the letter ".i".
db.products.find({
  $where: function() {
    return this.price > 500 && this.productName.includes(".i");
  }
});

//Question-2: Find products that have at least one rating and the first rating has a score of 4 or more.
db.products.find({
  $where: function(){
    return this.ratings.length>0 && this.ratings[0].score>=4
  }
})

//Question-3: Find products that have a width greater than 20 and height less than 50.
db.products.find({
  $where:function(){
    return this.dimensions.width>20 && this.dimensions.height<50
  }
},{
  _id:0,
  productName:1,
  "dimensions.width":1,
  "dimensions.height":1,
})

//Question-4: Find products where the first tag contains the letter "oo".
db.products.find({
  $where: function(){
    return this.tags[0].includes("op")
  }
},{
  _id:0,
  tags:1,
  productName:1
})

//Question-5: Find products that have a storage type and the size is more than "500GB".
db.products.find({
  $where: function() {
    if(this.specs && this.specs.storage && this.specs.storage.size){
      let sizeString = this.specs.storage.size.toUpperCase();
      let size = parseInt(this.specs.storage.size);
      if(sizeString.includes("TB")){
        size*=1000;
      }
      return size>500;
    }
  }
},{
  _id:0,
  productName:1,
  "specs.storage.size":1
});

//Question-6: Find products that were released in 2023 and have an available status of true.
db.products.find({
  $where:function(){
    return this.releaseDate >= ISODate("2023-01-01") && this.available
  }
},{
  _id:0,
  releaseDate:1,
  productName:1,
  available:1
})

//Question-7: Find products where the RAM size is at least 16GB and the processor is either Intel or AMD.
db.products.find({
  $where: function(){
    if(this.specs && this.specs.ram){
      let ramStr = this.specs.ram.toUpperCase();
      let ramNum = parseInt(this.specs.ram);
      if(ramStr.includes("TB")){
        ramNum*=1000;
      }
      return ramNum>16 || this.specs.processor == "Intel" || this.specs.processor == "AMD"
    }
  }
})

//Question-8: Find products where the product name contains the same letter twice in a row (e.g., "Scooter", "Battery").
db.products.find({
  $where:function(){
    return /(.)\1/.test(this.productName)
  }
},{
  productName:1,
  _id:0
})

//Question-9: Find products that have an exact palindrome as a tag.
db.products.find({
  $where: function() {
    function isPalindrome(str) {
      return str === str.split("").reverse().join("");
    }
    return this.tags && this.tags.some(tag => isPalindrome(tag));
  }
})

//Question-10: Find products where at least one rating score is equal to the number of letters in the product name.
db.products.find({
  $where: function(){
    let nameLength = this.productName.length;
    if(this.ratings.length>0){
      return this.ratings.some(review=>{
        return review.score == nameLength;
      })
    }
  }
})