# MongoDB Geospatial Query Operators

Geospatial query operators in MongoDB are used to query documents that contain geospatial data, such as coordinates. These operators help perform location-based searches and spatial calculations.

## 1. `$geoIntersects`
**Description**: Matches documents where a geospatial field intersects with a specified GeoJSON object.

## 2. `$geoWithin`
**Description**: Matches documents where a geospatial field is within a specified GeoJSON shape.

## 3. `$near`
**Description**: Returns documents sorted by proximity to a specified point. Requires a geospatial index.

## 4. `$nearSphere`
**Description**: Returns documents sorted by proximity to a specified point, using spherical geometry for calculations. Requires a geospatial index.

---
These geospatial query operators enable powerful location-based querying, making them useful for applications that involve maps, geolocation, and spatial data analysis in MongoDB.
