// Authors: Neil Kuldip, Ambonique Thomas
// Description: File containing user-defined functions that mimic the behavior of established 
//              JavaScript and Array methods in order to recreate them
// Resources Referenced: https://developer.mozilla.org/en-US/

// FOR EACH // --> Provided by Professor Lai
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP // --> Written by: Neil
// @param callbackFn: function to be applied to each element in the array
Array.prototype.myMap = function(callbackFn) {
    let result = [];
    for (let i = 0; i < this.length; i++)
    {
        if(this[i] === undefined) result.push(undefined);
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        else result.push(callbackFn(this[i], i, this));
    }
    return result;
};

// SOME // --> Written by: Neil
// @param callbackFn: function to be applied to each element in the array
Array.prototype.mySome = function(callbackFn) {
    let satisfy = false;
    for (let i = 0; i < this.length; i++)
    {
        if(this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        if (callbackFn(this[i], i, this) === true) {
            satisfy = true;  // Just needs one element to make function return true
        }
    }
    return satisfy;
};

// REDUCE // --> Written by: Neil
// @param callbackFn: function to be applied to each element in the array
// @param initialValue: the initial value from the first call of the callbackFn -- default set to array's first element
Array.prototype.myReduce = function(callbackFn, initialValue = this[0]) {
    let result = initialValue;
    let i = initialValue === this[0] ? 1 : 0; // If inital value is first element, for loop starts with second element
    for (i; i < this.length; i++) { 
        if (this[i] === undefined) continue;
        // callbackFn can take up to 4 input parameters:
        // previousValue
        // previousValue, currentValue
        // previousValue, currentValue, index
        // previousValue, currentValue, index, array
        result = callbackFn(result, this[i], i, this);
    }
    return result;
};

// INCLUDES // --> Written by: Neil
// @param value: the value to be searched for in the array
// @param startIndex: the starting index to begin iterating the array -- default set to 0
Array.prototype.myIncludes = function(value, startIndex = 0) {
    let i = startIndex < 0 ? startIndex + this.length : startIndex; //If start index is negative, will start from that many places back in array
    let found = false;
    for (i; i < this.length; i++) {
        if (this[i] === value) found = true;
    }
    return found;
};

//INDEXOF // --> Written by: Ambonique
// @param element: the element that is being looked for in the array
// @param startIndex: defaults to 0 if not given or start at the index given
Array.prototype.myIndexOf = function (element, startIndex = 0) {
    //Checks if the idex given is in bounds of the array
      if (startIndex > this.length || startIndex < 0) return -1;
      let found = false;
      let counter = startIndex;
    //Loops through the array to check if element is found
      while (counter < this.length) {
        if (this[counter] === element) {
          found = true;
          break;
        }
        counter++;
      }
    //If the element is not found in the array then return -1
      if (found === false) return -1;
      return counter;
    };

// PUSH // --> Provided by Professor Lai
Array.prototype.myPush = function() {
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

// LASTINDEXOF // --> Written by: Ambonique
// @element: the element in the array
// @lastIndex: gets the last index of the array
// Starts from the end of the array to find the element's last index
Array.prototype.myLastIndexOf = function(element, lastIndex = this.length - 1) {
  if (lastIndex > this.length || lastIndex < 0) return -1;
  let found = false;
  let counter = lastIndex;
// Loops through the array to check
  while (counter > 0) {
    if (this[counter] === element) {
      found = true;
      break;
    }
    counter--;
  }
  if (found === false) return -1;
  return counter;
};

// KEYS // --> Written by: Ambonique
// @container: the object or array
Object.prototype.myKeys = function (container) {
  let result = [];
// Checks if the object or array is not empty then pushes the key in result
  if (container.length !== undefined) {
    for (let i = 0; i < container.length; i++) {
      result.push(String(i));
    }
    return result;
  }
// Checks if theres an element in the array thats 'null' or empty and adds the key to result
  for (let property in container) {
    if (property !== "myKeys") {
      result.push(property);
    }
  }
  return result;
};

// // VALUES // --> Written by: Ambonique
// @container: the object or array
Object.myValues = function(container) {
  let result = [];
// Checks if the object or array is not empty then pushes contents in result array
  if (container.length !== undefined) {
    for (let i = 0; i < container.length; i++) {
      result.push(String(container[i]));
    }
    return result;
  }
  for (let property in container) {
// Checks if theres an element in the array thats 'null' or empty and adds it to result
    if (property !== "myKeys") {
      result.push(container[property]);
    }
  }
  return result;
};
