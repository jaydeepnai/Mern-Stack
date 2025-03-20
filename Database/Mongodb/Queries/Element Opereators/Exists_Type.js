db.users.insertMany(
    [
        {
          "userId": "U001",
          "username": "Alice",
          "email": "alice@example.com",
          "age": 29,
          "isActive": true,
          "createdAt": ISODate("2023-05-10T10:30:00Z"),
          "profile": { "bio": "Love coding", "website": "https://alice.dev" },
          "roles": ["admin", "editor"],
          "lastLogin": ISODate("2024-01-15T08:00:00Z"),
          "metaData": { "lastUpdated": "2024-02-01" }
        },
        {
          "userId": "U002",
          "username": "Bob",
          "age": 35,
          "isActive": false,
          "createdAt": ISODate("2022-11-20T14:45:00Z"),
          "roles": ["viewer"],
          "lastLogin": null,
          "metaData": "Premium user"
        },
        {
          "userId": "U003",
          "username": "Charlie",
          "email": "charlie@example.com",
          "isActive": true,
          "createdAt": ISODate("2023-07-18T16:00:00Z"),
          "profile": { "bio": "MongoDB enthusiast" },
          "roles": ["editor"],
          "metaData": 42
        },
        {
          "userId": "U004",
          "username": "David",
          "email": "david@example.com",
          "age": 22,
          "isActive": true,
          "createdAt": ISODate("2024-01-05T12:15:00Z"),
          "roles": ["admin"],
          "lastLogin": ISODate("2024-02-01T09:30:00Z")
        },
        {
          "userId": "U005",
          "username": "Eve",
          "email": "eve@example.com",
          "age": 40,
          "isActive": false,
          "createdAt": ISODate("2021-09-30T18:20:00Z"),
          "profile": {},
          "roles": ["viewer", "editor"],
          "metaData": null
        },
        {
          "userId": "U005",
          "username": "Eva",
          "email": "eva@example.com",
          "age": null,
          "isActive": true,
          "createdAt": ISODate("2022-01-30T18:20:00Z"),
          "profile": {},
          "roles": {},
          "metaData": null
        },
        {
          "userId": "U005",
          "username": "Eva",
          "email": "eva@example.com",
          "age": null,
          "isActive": true,
          "createdAt": "2022-01-30T18:20:00Z",
          "profile": {},
          "roles": [],
          "metaData": ["34","12"]
        }
    ]
)

//Question-1: Find users who have an email but not a profile
db.users.find({
  email:{
    $exists:true
  },
  profile:{
    $exists:false
  }
})

//Questinon-2: Find users where metaData is NOT a string
db.users.find({
  metaData:{
    $not:{
      $type:"string"
    }
  }
}) 

//Question-3: Find users who have lastLogin, but it is not null
db.users.find({
  lastLogin:{
    $exists:true,
    $ne:null
  }
}) 

//Question-4: Find users who have at least one role but do not have an age
db.users.find({
  roles: { 
    $exists: true,
    $not: { $size: 0 } 
  },
  age: { $exists: false }
}) 

//Question-5: Find users where metaData is either a number or an object
db.users.find({
  $or:[
    {
      metaData:{$type:"number"}
    },
    {
      metaData:{$type:"object"}
    },
  ]
}) 

//Question-6: Find users who have metaData, but it's neither null nor an object
db.users.find({
  metaData:{
    $exists: true,
    $not:{$type:"object"},
    $ne:null
  }
}) 

//Question-7: Find users where profile exists but does not contain the bio field
db.users.find({
  profile:{
    $exists:true,
  },
  "profile.bio":{
    $exists:false
  }
}) 

//Question-8: Find users who have roles, but they are not stored as an array
db.users.find({
  roles:{
    $exists:true,
    $not:{
      $type:"array"
    }
  }
}) 

//Question-9: Find users where lastLogin exists, but the value is either null or an array
db.users.find({
  lastLogin:{
    $exists: true,
  },
  $or:[
    {
      lastLogin:{$eq:null}
    },
    {
      lastLogin:{$type:"array"}
    }
  ]
}) 

//Question-10: Find users who have an age, but it is not stored as a number
db.users.find({
  age:{
    $exists: true,
    $not:{$type:"number"}
  }
}) 

//Question-11: Find users where either profile or metaData exists, but not both
db.users.find({
  $or: [
    {
      profile: { $exists: true },
      metaData: { $exists: false }
    }
    ,
    {
      profile: { $exists: false },
      metaData: { $exists: true }
    }
  ]
}) 


//Question-12: Find users who have roles, but it's empty OR does not exist at all
db.users.find({
  $or:[
    {
     roles:{$exists:false} 
    },
    {
      roles:{$exists:true},
      roles:{$size:0}
    }
  ]
}) 

//Question-13: Find users where metaData exists but is NOT null, NOT an object, and NOT a number.
db.users.find({
  metaData:{
    $exists:true,
    $not: { $type: ["null", "object", "number"] } 
  }
}) 

//Question-14: Find users where lastLogin exists, but it's NOT a date
db.users.find({
  lastLogin:{
    $exists:true,
    $not:{$type:"date"}
  }
}) 

//Question-15: Find users who have an email field AND a roles field, but age is missing.
db.users.find({
  email:{
    $exists:true
  },
  roles:{
    $exists:true
  },
  age:{
    $exists:false
  }
}) 

//Question-16: Find users where createdAt is missing OR is stored incorrectly (not a date).
db.users.find({
  $or:[
  {createdAt:{
    $exists:false
  }},
  {createdAt:{
    $not:{
      $type:"date"
    }
  }}
  ]
}) 

//Question-17: Find users where roles exists and is NOT an array.
db.users.find({
  roles:{
    $exists:true,
    $not:{
      $type:"array"
    }
  }
}) 

//Question-18: Find users who have a metaData field, but it's stored as an array with at least one item.
db.users.find({
  metaData:{
    $exists:true,
    $type:"array",
  },
  $expr:{
    $gte:[
      {$size:"$metaData"},1
    ]
  }
}) 

//Question-19: Find users where profile exists but doesn't contain a website field.
db.users.find({
  profile:{
    $exists:true
  },
  "profile.website":{
    $exists:false
  }
}) 

//Question-20: Find users where lastLogin is missing OR is null, AND isActive
db.users.find({
  $or:[
    {
      lastLogin:{
        $exists:false
      }
    },
    {
      lastLogin:null
    }
  ],
  isActive:true
})


















