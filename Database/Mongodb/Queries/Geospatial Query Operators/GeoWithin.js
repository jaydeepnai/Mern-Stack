db.places.insertMany(
    [
        {
        "name": "Sydney Opera House",
        "category": "Concert Hall",
        "location": {
            "type": "Point",
            "coordinates": [122.023, 40.7831]
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
            "coordinates": [75.034, 41.7430]
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
            "coordinates": [-102.345, 48.7700]
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
            "coordinates": [-90.876, 38.7700]
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
            "coordinates": [103.5900, 1.2830]
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
            "coordinates": [-70.205, 20.7430]
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
            "coordinates": [100.9500, 15.7150]
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
            "coordinates": [105.2000, -8.7300]
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
            "coordinates": [87.9300, -14.2350] 
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
            "coordinates": [152.9700, -24.4800] 
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
            "coordinates": [130.767, 45.0800] 
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
            "coordinates": [-103.593, 50.3500] 
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
            "coordinates": [111.7750, -32.4300] 
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
            "coordinates": [-98.4700, 47.5900] 
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
            "coordinates": [122.254, -30.8650] 
        },
        "rating": 4.4,
        "opened": "1987-06-08",
        "isOpen": true
        }
    ]
)

//Question-1: Find all places located within a circle with a radius of 2.5km from Central Park (location: [-73.9712, 40.7831]).
db.places.find({
    "location.coordinates": {
    $geoWithin: {
        $centerSphere: [
        [-73.9712, 40.7831],  // Central Park location (longitude, latitude)
        2500 / 6378.1  // 500 meters converted to radians (radius in kilometers / Earth's radius)
        ]
    }
    }
},{name:1, _id:0, location:1}) 

//Question-2: Find all places within a polygon formed by the coordinates: (122.023, 40.7831), (75.034, 41.7430), (103.5900, 1.2830), (152.9700, -24.4800)
db.places.find({
    location:{
    $geoWithin:{
        $polygon:[
        [122.023, 40.7831],
        [75.034, 41.7430],
        [103.5900, 1.2830],
        [152.9700, -24.4800]
        ]
    }
    }
},{name:1, _id:0, location:1}) 

//Question-3: Find all places within 1000 meters of the point (100.9500, 15.7150)
db.places.find({
    location: {
    $geoWithin: {
        $centerSphere: [[100.9500, 15.7150], 1000 / 6378.1]
    }
    }
},{name:1, _id:0, location:1}) 

//Question-4: Find all places within a square (bounding box) defined by the coordinates: (75.034, 41.7430), (103.5900, 1.2830)
db.places.find({
    location:{
    $geoWithin:{
        $box:[
        [75.034, 41.7430],
        [103.5900, 1.2830]
        ]
    }
    }
},{name:1, _id:0, location:1}) 

//Question-5: Find all places within a 1000-meter radius of the point (103.5900, 1.2830) where the place name is either "Royal Theatre" or "The Louvre"
db.places.find({
    location:{
    $geoWithin:{
        $centerSphere:[
        [103.5900, 1.2830],
        1000/6378.1
        ]
    }
    },
    name:{
    $in:["Royal Theatre","The Louvre"]
    }
}) 

//Question-6: Find all places within a square defined by the coordinates (75.034, 41.7430) and (103.5900, 1.2830) but exclude places with the name "The Louvre"
db.places.find({
    location:{
    $geoWithin:{
        $box:[
        [75.034, 41.7430],
        [103.5900, 1.2830]
        ]
    }
    },
    name:{
    $ne:"The Louvre"
    }
}) 

//Question-7: Find all places within a polygon defined by the coordinates: 
// (122.023, 40.7831), 
// (75.034, 41.7430), 
// (103.5900, 1.2830), 
// (152.9700, -24.4800), 
// (100.9500, 15.7150) 
// where the name is either "Sydney Opera House" or "Taj Mahal"

db.places.find({
    location:{
    $geoWithin:{
        $polygon:[
        [122.023, 40.7831], 
        [75.034, 41.7430], 
        [103.5900, 1.2830], 
        [152.9700, -24.4800], 
        [100.9500, 15.7150]
        ]
    }
    },
    name:{
    $in:["Sydney Opera House","Taj Mahal"]
    }
}) 

//Question-8: Find all places within a circle with a radius of 3 kilo-meters of the point (100.9500, 15.7150) but exclude places with the category Theater
db.places.find({
    location:{
    $geoWithin:{
        $centerSphere:[
        [100.9500, 15.7150],
        3000/6378.1
        ]
    }
    },
    category:{$ne:"Theater"}
}) 

//Question-9: Find all places within a circle with a radius of 3.5km around the point (87.9300, -14.2350) where the category is either "Hotel" or "Cafe"
db.places.find({
    location:{
    $geoWithin:{
        $centerSphere:[
        [87.9300, -14.2350],
        3500/6378.1
        ]
    }
    },
    category:{
    $in:["Hotel","Cafe"]
    }
}) 

//Question-10: Find all places within a polygon defined by the coordinates: 
// (122.023, 40.7831), 
// (75.034, 41.7430), 
// (103.5900, 1.2830), 
// (152.9700, -24.4800) and with a rating of 4 or more

db.places.find({
    location:{
    $geoWithin:{
        $polygon:[
        [122.023, 40.7831], 
        [75.034, 41.7430], 
        [103.5900, 1.2830], 
        [152.9700, -24.4800]
        ]
    }
    },
    rating:{
    $gt:4
    }
}) 

//Question-11: Find all places within a square defined by the coordinates (103.5900, 1.2830) and (152.9700, -24.4800) where the category is "Beach" or "Park"
db.places.find({
    location:{
    $geoWithin:{
        $box:[
        [103.5900, 1.2830] ,
        [152.9700, -24.4800]
        ]
    }
    },
    category:{
    $in:["Beach","Park"]
    }
}) 

//Question-12: Find all places within a polygon formed by the coordinates (122.023, 40.7831), (75.034, 41.7430), (103.5900, 1.2830), (152.9700, -24.4800) where the rating is not 3 or less
db.places.find({
    location:{
    $geoWithin:{
        $polygon:[
        [122.023, 40.7831], [75.034, 41.7430], [103.5900, 1.2830], [152.9700, -24.4800]
        ]
    }
    },
    rating:{
    $gt:3
    }
}) 

//Question-13: Find all places within a polygon defined by the coordinates: 
// (122.023, 40.7831), 
// (75.034, 41.7430), 
// (103.5900, 1.2830), 
// (152.9700, -24.4800) where the type is "Beach" or "Park", rating is greater than 3.
db.places.find({
    location:{
    $geoWithin:{
        $polygon:[
        [122.023, 40.7831], [75.034, 41.7430], [103.5900, 1.2830], [152.9700, -24.4800]  
    ]}
    }, 
    category:{
    $in:["Beach","Park"]
    },
    rating:{
    $gt:3
    }
}) 

//Question-14: Find all places within a 1000-meter radius of the point (100.9500, 15.7150) where the type is "Hotel", is Open , and the name contains "san".
db.places.find({
    location:{
    $geoWithin:{
        $centerSphere:[
        [100.9500, 15.7150],
        3000/6378.1
        ]
    }
    },
    category:"Hotel",
    name:/san/i,
    isOpen:true
}) 

//Question-15: Find all places within a square defined by the coordinates (75.034, 41.7430) and (103.5900, 1.2830) where the type is either "Museum" or "Monument", rating is greater than 4, and the name starts with "Ta"
db.places.find({
    location:{
    $geoWithin:{
        $box:[
        [75.034, 41.7430], [103.5900, 1.2830]
        ]
    }
    },
    category:{
    $in:["Monument","Museum"]
    },
    rating:{$gt:4},
    name:/^Ta/
}) 

//Question-16: Find all places within a 1000-meter radius of the point (122.023, 40.7831) where the name is "Sydney Opera House", type is "Concert Hall", and rating is between 4 and 5
db.places.find({
    location:{
      $geoWithin:{
        $centerSphere:[
          [122.023, 40.7831],
          1000/6378.1
        ]
      }
    },
    name:"Sydney Opera House",
    category:"Concert Hall",
    rating:{
      $gt:4,
      $lt:5
    }
  }) 
  
  //Question-17: Find all places within a polygon defined by the coordinates 
  // (122.023, 40.7831), 
  // (75.034, 41.7430), 
  // (103.5900, 1.2830), 
  // (152.9700, -24.4800), where the name does not include "Opera", type is "Beach", and rating is greater than 3
  db.places.find({
    location:{
      $geoWithin:{
        $polygon:[
          [122.023, 40.7831], [75.034, 41.7430], [103.5900, 1.2830], [152.9700, -24.4800]
        ]
      }
    },
    name:{
      $not:/Opera/
    },
    category:"Beach",
    rating:{
      $gt:3
    }
  }) 
  
  //Question-18:Find all places within a polygon defined by the coordinates (75.034, 41.7430), (103.5900, 1.2830), (122.023, 40.7831), where the type is not "Cafe", the name contains "re", and rating is between 3 and 5
  db.places.find({
    location: { $geoWithin: { $polygon: [[75.034, 41.7430], [103.5900, 1.2830], [122.023, 40.7831]] } } ,
    category: { $nin: ["Cafe"] } ,
    name: { $regex: "re", $options: "i" } ,
    rating: { $gte: 3, $lte: 5 } 
  }) 
  
  //Question-19: Find all places within a polygon defined by 
  // (103.8198, 1.3521), 
  // (104.0079, 1.4300), 
  // (103.6000, 1.3700),
  // (122.023, 40.7831) where the type contains "all" and the rating is greater than 3
  db.places.find({
    location: { $geoWithin: { $polygon: [[103.8198, 1.3521], [104.0079, 1.4300], [103.6000, 1.3700],[122.023, 40.7831]] } } ,
    category: {
     $regex:"all",
     $options:"i"
    } ,
    rating: { $gt: 3 } 
  }) 
  
  //Question-20: Find all tourist attractions (type: "Museum", "Monument", "Historical Site") within a 3km radius of (103.5900, 1.2830), where the name contains "Mahal" and the rating is greater than 4
  db.places.find({
    location:{
      $geoWithin:{
        $centerSphere:[
          [103.5900, 1.2830],
          3000/6378.1
        ]
      }
    },
    category:{
      $in:["Museum", "Monument", "Historical Site"]
    },
    name:/Mahal/i,
    rating:{$gt:4}
  })
  
  












