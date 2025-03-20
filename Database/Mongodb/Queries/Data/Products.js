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
            { "userId": ObjectId(), "score": 5, "reviewDate": ISODate("2023-09-15") },
            { "userId": ObjectId(), "score": 4, "reviewDate": ISODate("2023-09-16") }
        ],
        "available": true,
        "tags": ["laptop", "ultrabook", "high-performance"],
        "releaseDate": ISODate("2023-01-01")
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
            { "userId": ObjectId(), "score": 5, "reviewDate": ISODate("2023-09-10") }
        ],
        "available": true,
        "tags": ["desktop", "gaming", "high-end"],
        "releaseDate": ISODate("2023-02-15")
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
            { "userId": ObjectId(), "score": 4, "reviewDate": ISODate("2023-08-25") }
        ],
        "available": true,
        "tags": ["smartphone", "5G", "water-resistant"],
        "releaseDate": ISODate("2023-03-10")
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
        "releaseDate": ISODate("2023-04-20")
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
            { "userId": ObjectId(), "score": 4, "reviewDate": ISODate("2023-09-01") },
            { "userId": ObjectId(), "score": 5, "reviewDate": ISODate("2023-09-02") }
        ],
        "available": true,
        "tags": ["audio", "headphones", "bluetooth"],
        "releaseDate": ISODate("2023-05-05")
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
            { "userId": ObjectId(), "score": 5, "reviewDate": ISODate("2023-07-15") }
        ],
        "available": true,
        "tags": ["eco-friendly", "electric", "scooter"],
        "releaseDate": ISODate("2023-06-01")
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
        "releaseDate": ISODate("2023-06-01")
    }
]