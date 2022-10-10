/* 1
Create two variables whcih ask for numbers from the user
Create a variable within a function which prints the result of the numbers being added

START

GET number1
GET number2

SET function (set result = number1 + number 2; PRINT result) */

/* 2
create function with parameter for a array of strings.
create variable which is an empty string
iterate through array and concatenate each string to the empty variable;
when i equals array.length, print concatinated variable

START

Given an array of strings;

SET newString = ''
SET iterator = 1
WHILE iterator <= array.length
  newString += array.i
  IF iterator > array.length
    PRINT newString
    */
/* 3

Create empty array
Create function
  Iterate through array.length
  Create new variable = i
  If new variable % 2 === 0
    send value of array element to new array
  If i > array.length
    Print empty array
    
START

Given an array with strings
SET newArray = [];
SET iterator = 1
SET j = iterator (probably this is not needed, the below will work with just i instead)
WHILE iterator <= array.length
  IF j === 0
    push array.[i] to newArray
  IF j % 2 === 0
    push array.[i] to newArray
  ELSE
    skip to next iteration
  iterator++
PRINT newArray
*/

/* 4

create variable = target letter
create function
  iterator = 0
  numberoftimes = 0
  if iterator <= array.length
    if array[i] === target letter
      numberoftimes++
    if numberoftimes === 3
      print i; break
      else
        continue next iteration
    if iterator === array.length
      print null
  */
  
  /* 5
  
  given two arrays
  create new empty array
  split both original arrays into individual characters - ' '
  create loop which goes through the split array1[i] and array2[i]
  on each iteration, push array[i] to new array
  when iterator = array.length
  join new array ','
  then split new array ', , ,'
  log new array
    
  
  */
      
      


