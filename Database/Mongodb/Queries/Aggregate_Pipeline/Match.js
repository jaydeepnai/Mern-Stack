// Question
// Using the $match stage in an aggregation pipeline, how would you find all sales of books in the "Classic" genre that were sold for more than $20?

db.sales.insertMany([
    { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Classic", "price": 20, "sold_date": "2023-04-25" },
    { "title": "1984", "author": "George Orwell", "genre": "Dystopian", "price": 15, "sold_date": "2023-04-20" },
    { "title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Classic", "price": 18, "sold_date": "2023-04-22" },
    { "title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Classic", "price": 25, "sold_date": "2023-04-18" },
    { "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Classic", "price": 24, "sold_date": "2023-04-24" }
]);


db.sales.aggregate([
    {
        $match: {
            "genre": "Classic",
            "price": { $gt: 20 }
        }
    }
])


db.events.insertMany([
    { "event_id": 1, "title": "Tech Conference", "location": "New York", "date": "2024-05-20", "attendees": 150, "type": "Technology" },
    { "event_id": 2, "title": "Music Festival", "location": "Los Angeles", "date": "2024-06-15", "attendees": 5000, "type": "Music" },
    { "event_id": 3, "title": "Literature Workshop", "location": "Chicago", "date": "2024-07-18", "attendees": 80, "type": "Education" },
    { "event_id": 4, "title": "Art Exhibit", "location": "San Francisco", "date": "2024-08-04", "attendees": 200, "type": "Art" },
    { "event_id": 5, "title": "Business Seminar", "location": "Miami", "date": "2024-09-22", "attendees": 100, "type": "Business" }
]);

// Question: Find all events located in "New York".
db.events.aggregate([
    {
        $match: {
            "location": "New York",
        }
    }
])


//  Question: How many events have more than 100 attendees?
db.events.aggregate([
    {
        $match: {
            attendees: { $gte: 100 }
        }
    }
])

// Question: List all "Technology" type events.
db.events.aggregate([
    {
        $match: {
            type: "Technology"
        }
    }
])


// Question: Identify events that are not in "Chicago".
db.events.aggregate([
    {
        $match: {
            location: { $ne: "Chicago" }
        }
    }
])


// Question: Find events happening after "2024-07-01".
db.events.aggregate([
    {
        $match: {
            date: { $gt: "2024-07-01" }
        }
    }
])


// Question: Retrieve events where the attendees are exactly 200.
db.events.aggregate([
    {
        $match: {
            attendees: 200
        }
    }
])


// Question: List all events that are either in "San Francisco" or "Miami".
db.events.aggregate([
    {
        $match: {
            location: { $in: ["San Francisco", "Miami"] }
        }
    }
])


// Question: Find all events except for those related to "Music".
db.events.aggregate([
    {
        $match: {
            type: { $nin: ["Music"] }
        }
    }
])


// Question: Find all events with fewer than 500 attendees.
db.events.aggregate([
    {
        $match: {
            attendees: { $lt: 500 }
        }
    }
])

// Question: Identify all events scheduled for "2024-08-04".
db.events.aggregate([
    {
        $match: {
            date: "2024-08-04"
        }
    }
])


// Question: Find events with "Festival" in their title.
db.events.aggregate([
    {
        $match: {
            title: /Festival/
        }
    }
])


// Question: List all events scheduled before "2024-06-01".
db.events.aggregate([
    {
        $match: {
            date: { $lt: "2024-06-01" }
        }
    }
])
// Question: Retrieve all "Education" and "Business" type events.
db.events.aggregate([
    {
        $match: {
            type: { $in: ["Education", "Business"] }
        }
    }
])


// Question: Find events where the attendee count is between 100 and 500.
db.events.aggregate([
    {
        $match: {
            attendees: { $lt: 500, $gt: 150 }
        }
    }
])


// Question: Identify events not scheduled for "2024-09-22".
db.events.aggregate([
    {
        $match: {
            date: { $ne: "2024-09-22" }
        }
    }
])


// Question: Find events in either "New York" or "Chicago" with more than 100 attendees.
db.events.aggregate([
    {
        $match: {
            location: { $in: ["New York", "Miami"] },
            attendees: { $gt: 100 }
        }
    }
])


// Question: Retrieve all events except for those held in "Los Angeles".
db.events.aggregate([
    {
        $match: {
            location: { $nin: ["Los Angeles"] },
        }
    }
])


// Question: List all events on or after "2024-05-20" and on or before "2024-08-04".
db.events.aggregate([
    {
        $match: {
            date: { $gt: "2024-05-20", $lt: "2024-08-04" },
        }
    }
])


// Question: Find events that are not Art or Music related.
db.events.aggregate([
    {
        $match: {
            type: { $nin: ["Art", "Music"] }
        }
    }
])


// Question: Identify events with exactly 80 attendees.
db.events.aggregate([
    {
        $match: {
            attendees: 80
        }
    }
])



db.users.insertMany([
    {
        "user_id": 1,
        "name": "John Doe",
        "age": 28,
        "contact": {
            "email": "john.doe@example.com",
            "phones": ["123-456-7890", "987-654-3210"]
        },
        "interests": ["reading", "gaming", "hiking"]
    },
    {
        "user_id": 2,
        "name": "Jane Smith",
        "age": 34,
        "contact": {
            "email": "jane.smith@example.com",
            "phones": ["555-123-4567"]
        },
        "interests": ["photography", "cooking", "traveling"]
    },
    {
        "user_id": 3,
        "name": "Alice Johnson",
        "age": 29,
        "contact": {
            "email": "alice.johnson@example.com",
            "phones": ["222-333-4444", "444-555-6666"]
        },
        "interests": ["reading", "traveling", "yoga"]
    }
]
);

// Question: Find all users who are interested in "reading".
db.users.aggregate([
    {
        $match: {
            interests: "reading"
        }
    }
])
// Question: List all users who have more than one phone number.
db.users.aggregate([
    {
        $match: {
            "contact.phones": { $size: 2 }
        }
    }
])
// Question: Retrieve users who are exactly 34 years old.
db.users.aggregate([
    {
        $match: {
            age: 34
        }
    }
])
// Question: Find all users whose name starts with "Jan".
db.users.aggregate([
    {
        $match: {
            name: /jan/i
        }
    }
])
// Question: Select users who are interested in both "traveling" and "cooking".
db.users.aggregate([
    {
        $match: {
            interests: { $all: ["traveling", "cooking"] }
        }
    }
])
// Question: Identify users with an email address at "example.com".
db.users.aggregate([
    {
        $match: {
            "contact.email": /@example.com/
        }
    }
])
db.users.aggregate([
    {
        $match: {
            "contact.email": { $regex: "@example.com$" }
        }
    }
])
// Question: List all users who have at least one phone number starting with "444".
db.users.aggregate([
    {
        $match: {
            "contact.phones": { $regex: "^444" }
        }
    }
])
// Question: Find users who are not interested in "gaming".

db.users.aggregate([
    {
        $match: {
            "interests": { $nin: ["gaming"] }
        }
    }
])
// Question: Retrieve users who are older than 25 but younger than 30.
db.users.aggregate([
    {
        $match: { age: { $gt: 25, $lt: 30 } }
    }
])
// Question: Select users who have the "email" field within the "contact" sub-object.
db.users.aggregate([
    { 
        $match: { "contact.email": { $exists: true } } 
    }
])