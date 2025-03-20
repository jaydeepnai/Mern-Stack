db.places.insertMany(
[
    {
    "name": "Sydney Opera House",
    "category": "Concert Hall",
    "location": {
        "type": "Point",
        "coordinates": [122.023, 40.7831] // 122 longitude, 40 latitude (3-digit longitude)
    },
    "rating": 4.8,
    "opened": "1973-10-20",
    "isOpen": true
    },
    {
    "name": "The Louvre",
    "category": "Museum",
    "location": {
        "type": "Point",
        "coordinates": [75.034, 41.7430] // 75 longitude, 41 latitude (3-digit longitude)
    },
    "rating": 4.7,
    "opened": "1793-08-10",
    "isOpen": true
    },
    {
    "name": "Grand Canyon Restaurant",
    "category": "Restaurant",
    "location": {
        "type": "Point",
        "coordinates": [-102.345, 48.7700] // 102 longitude, 48 latitude (3-digit longitude)
    },
    "rating": 4.5,
    "opened": "1990-11-20",
    "isOpen": true
    },
    {
    "name": "Mall of America",
    "category": "Shopping Mall",
    "location": {
        "type": "Point",
        "coordinates": [-90.876, 38.7700] // 90 longitude, 38 latitude (3-digit longitude)
    },
    "rating": 4.4,
    "opened": "1992-08-11",
    "isOpen": true
    },
    {
    "name": "Royal Theatre",
    "category": "Theater",
    "location": {
        "type": "Point",
        "coordinates": [103.5900, 1.2830] // 103 longitude, 1 latitude (3-digit longitude)
    },
    "rating": 4.7,
    "opened": "1985-05-30",
    "isOpen": true
    },
    {
    "name": "Central Park",
    "category": "Park",
    "location": {
        "type": "Point",
        "coordinates": [-70.205, 20.7430] // 70 longitude, 20 latitude (3-digit longitude)
    },
    "rating": 4.6,
    "opened": "1900-02-20",
    "isOpen": true
    },
    {
    "name": "Taj Mahal",
    "category": "Monument",
    "location": {
        "type": "Point",
        "coordinates": [100.9500, 15.7150] // 100 longitude, 15 latitude (3-digit longitude)
    },
    "rating": 4.8,
    "opened": "1653-06-25",
    "isOpen": true
    },
    {
    "name": "Sands Hotel",
    "category": "Hotel",
    "location": {
        "type": "Point",
        "coordinates": [105.2000, -8.7300] // 105 longitude, -8 latitude (3-digit longitude)
    },
    "rating": 4.9,
    "opened": "2000-08-05",
    "isOpen": true
    },
    {
    "name": "Café de Flore",
    "category": "Cafe",
    "location": {
        "type": "Point",
        "coordinates": [87.9300, -14.2350] // 87 longitude, -14 latitude (3-digit longitude)
    },
    "rating": 4.3,
    "opened": "2015-03-15",
    "isOpen": true
    },
    {
    "name": "Bondi Beach",
    "category": "Beach",
    "location": {
        "type": "Point",
        "coordinates": [152.9700, -24.4800] // 152 longitude, -24 latitude (3-digit longitude)
    },
    "rating": 4.6,
    "opened": "1995-07-21",
    "isOpen": true
    },
    {
    "name": "The Blue Elephant",
    "category": "Restaurant",
    "location": {
        "type": "Point",
        "coordinates": [130.767, 45.0800] // 130 longitude, 45 latitude (3-digit longitude)
    },
    "rating": 4.6,
    "opened": "2001-06-12",
    "isOpen": true
    },
    {
    "name": "National Museum of China",
    "category": "Museum",
    "location": {
        "type": "Point",
        "coordinates": [-103.593, 50.3500] // 103 longitude, 50 latitude (3-digit longitude)
    },
    "rating": 4.9,
    "opened": "2007-09-22",
    "isOpen": true
    },
    {
    "name": "Modern Art Gallery",
    "category": "Art Gallery",
    "location": {
        "type": "Point",
        "coordinates": [111.7750, -32.4300] // 111 longitude, -32 latitude (3-digit longitude)
    },
    "rating": 4.7,
    "opened": "2010-03-25",
    "isOpen": true
    },
    {
    "name": "Golden Plaza",
    "category": "Shopping Center",
    "location": {
        "type": "Point",
        "coordinates": [-98.4700, 47.5900] // 98 longitude, 47 latitude (3-digit longitude)
    },
    "rating": 4.5,
    "opened": "1999-12-15",
    "isOpen": true
    },
    {
    "name": "Shakespeare Theatre",
    "category": "Theater",
    "location": {
        "type": "Point",
        "coordinates": [122.254, -30.8650] // 122 longitude, -30 latitude (3-digit longitude)
    },
    "rating": 4.4,
    "opened": "1987-06-08",
    "isOpen": true
    }
]
)
//Question-1: Find all places that are within a polygon around (122.023, 40.7831), (75.034, 41.7430), and (103.5900, 1.2830)
db.places.find({
    location: {
    $geoIntersects: {
        $geometry: {
        type: "Polygon",
        coordinates: [
            [
            [122.023, 40.7831],
            [75.034, 41.7430],
            [103.5900, 1.2830],
            [122.023, 40.7831]
            ]
        ]
        }
    }
    }
}).count()

//Question-2: Find all places within a polygon of coordinates (152.9700, -24.4800), (130.767, 45.0800), (87.9300, -14.2350)
db.places.find({
    location:{
    $geoIntersects:{
        $geometry:{
        type:"Polygon",
        coordinates:[
            [
            [152.9700, -24.4800],
            [130.767, 45.0800],
            [87.9300, -14.2350],
            [152.9700, -24.4800]  
            ]
        ]
        }
    }
    }
},{name:1,location:1,_id:0}).count()


//Question-3: Find all places where the location intersects a circle with center (103.5900, 1.2830) and radius of 500 meters
db.places.find({
    location:{
    $geoIntersects:{
        $geometry:{
        type:"Point",
        coordinates:[
            103.5900, 1.2830
        ]
        }
    }
    }
}).count()

//Question-4: Find all places where the location intersects with a polygon formed by (122.254, -30.8650), (122.023, 40.7831), and (130.767, 45.0800)
db.places.find({
    location:{
    $geoIntersects:{
        $geometry:{
        type:"Polygon",
        coordinates:[
            [
                [122.254, -30.8650], [122.023, 40.7831], [130.767, 45.0800],[122.254, -30.8650]
            ]
        ]
        }
    }
    }
})

//Question-5: Find all places within a circle centered at (105.2000, -8.7300) with a radius of 10 km
db.places.find({
    location:{
      $geoIntersects:{
        $geometry:{
          type:"Point",
          coordinates:[105.2000, -8.7300]
        }
      }
    }
  }).count()
  
//Quesion-6: Find all places within a polygon around (122.254, -30.8650), (122.023, 40.7831), and (75.034, 41.7430)
db.places.find({
location:{
    $geoIntersects:{
    $geometry:{
        type:"Polygon",
        coordinates:[
        [
            [122.254, -30.8650],[122.023, 40.7831],[75.034, 41.7430],[122.254, -30.8650]
        ]
        ]
    }
}}
}).count()


//Question-7: Find all places that intersect with a circle centered at (111.7750, -32.4300) with a radius of 3km
db.places.createIndex({ location: "2dsphere" }) 
db.places.find({
    location: {
        $nearSphere: {
            $geometry: {
                type: "Point",
                coordinates: [122.023, 40.7831]
            },
            $maxDistance: 500
        }
    }
})

//Question-8: Find places that intersect with a circle of radius 500 meters centered at [122.023, 40.7831], and have a rating above 4.5.
db.places.createIndex({ location: "2dsphere" }) 
db.places.find({
location: {
    $nearSphere: {
    $geometry: { type: "Point", coordinates: [122.023, 40.7831] },
    $maxDistance: 500 
    }
    },
    rating:{$gt:4.3}
})

//Question-9: Find places intersectng the polygon [[[90, 40], [120, 40], [120, -10], [90, -10], [90, 40]]] and opened after 2000
db.places.find({
location:{
    $geoIntersects:{
    $geometry:{
        type:"Polygon",
        coordinates:[[[90, 40], [120, 40], [120, -10], [90, -10], [90, 40]]]
    }
    }
},
opened:{
    $gt:"2000-01-01"
}
}).count()

//Question-10: Find places intersectng a polygon covering the Americas and opened after 1900.
db.places.find({
location:{
    $geoIntersects:{
    $geometry:{
        type:"Polygon",
        coordinates:[[[-110, 60], [-60, 60], [-60, -30], [-110, -30], [-110, 60]]]
    }
    }
},
opened:{
    $gt:"1900-01-01"
}
}).count()

//Question-19: Find places intersectng a polygon covering Europe OR having a rating above 4.7.
db.places.find({
$or:[{location:{
    $geoIntersects:{
    $geometry:{
        type:"Polygon",
        coordinates: [[[0, 60], [40, 60], [40, 30], [0, 30], [0, 60]]]
    }
    }
}},
{rating:{$gt:4.7}}]
}).count()

//Question-20: Find places inside a polygon with rating greater than or equal to 4.6 and category as Restaurant.
//Polygon: Covers parts of East Asia., [[[120, 50], [140, 50], [140, 30], [120, 30], [120, 50]]]
db.places.find({
location:{
    $geoIntersects:{
    $geometry:{
        type:"Polygon",
        coordinates:[[[120, 50], [140, 50], [140, 30], [120, 30], [120, 50]]]
    }
    }
},
category:"Restaurant",
rating:{$gte:4.6}
}).count()

//Question-21: Find places inside a polygon that opened in the last 55 years.
//Current year: 2025
//Polygon: Covers parts of Asia, [[[110, 50], [130, 50], [130, 30], [110, 30], [110, 50]]]
db.places.find({
location:{
    $geoIntersects:{
    $geometry:{
        type:"Polygon",
        coordinates: [[[110, 50], [130, 50], [130, 30], [110, 30], [110, 50]]]
    }
    }
},
opened:{
    $gte:"1970-01-01"
}
}).count()

//Question-22: Find all places inside a polygon covering North America and Europe.
//Polygon: [[[-130, 60], [40, 60], [40, 30], [-130, 30], [-130, 60]]]
db.places.find({
"location": {
    $geoWithin: {
    $polygon: [[-130, 60], [40, 60], [40, 30], [-130, 30], [-130, 60]]
    }
}
})

