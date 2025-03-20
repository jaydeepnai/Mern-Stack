# MongoDB Update Operators

## Field Modifications  
- **`$set`** – Updates a field value.  
- **`$unset`** – Removes a field from a document.  
- **`$rename`** – Renames a field.  
- **`$inc`** -	Increments a field’s value	
- **`$mul`** -	Multiplies a field’s value	
- **`$min`** -	Updates field only if value is less than current	
- **`$max`** -	Updates field only if value is greater than current

## Numeric Updates  
- **`$inc`** – Increments a field by a specified value.  
- **`$mul`** – Multiplies a field by a value.  
- **`$min`** – Updates a field to a lower value if the specified value is less.  
- **`$max`** – Updates a field to a higher value if the specified value is greater.  

## Date & Time  
- **`$currentDate`** – Updates a field to the current date/time.  

## Array Operations  
- **`$addToSet`** – Adds a value to an array if it doesn’t exist.  
- **`$push`** – Adds elements to an array.  
  - **`$each`** – Used with `$push` to insert multiple values.  
  - **`$position`** – Specifies the position in an array for `$push`.  
- **`$pop`** – Removes the first or last element of an array.  
- **`$pull`** – Removes elements from an array that match a condition.  

## Bitwise Operations  
- **`$bit`** – Performs bitwise operations (`AND`, `OR`, `XOR`).  

