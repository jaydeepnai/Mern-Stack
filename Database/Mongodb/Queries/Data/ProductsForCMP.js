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