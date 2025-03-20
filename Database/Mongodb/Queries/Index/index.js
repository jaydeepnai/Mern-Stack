db.users.createIndex({ name: 1 })
// 🔹 1 = Ascending (-1 for Descending).

db.users.createIndex({ name: 1, age: -1 })
// 🔹 Indexes both name (ascending) and age (descending).

db.users.getIndexes()
// 🔹 Shows all indexes on the users collection.

db.users.createIndex({ email: 1 }, { unique: true })
// 🔹 Ensures all email values are unique.

db.users.createIndex({ name: "text" })
// 🔹 Enables full-text search on the name field.

db.users.find({ $text: { $search: "john" } })
// 🔹 Finds all documents where name contains "john".

db.users.createIndex(
    { isActive: 1 },
    { partialFilterExpression: { isActive: true } }
  )
// 🔹 Only indexes documents where isActive is true.
  
db.users.createIndex({ phone: 1 }, { sparse: true })
// 🔹 Excludes documents that don’t have the phone field.

db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
// 🔹 Automatically deletes documents after 1 hour.

db.users.dropIndex("name_1")
// 🔹 Removes an index named "name_1".

db.users.dropIndexes()
// 🔹 Removes all indexes (except _id).

db.users.find({ name: "John" }).explain("executionStats")
// 🔹 Shows if MongoDB is using an index for the query.

