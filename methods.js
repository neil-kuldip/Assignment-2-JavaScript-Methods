// Authors: Neil Kuldip, Ambonique Thomas
// Description: File containing user-defined functions that mimic the behavior of established 
//              JavaScript and Array methods in order to recreate them
// Resources Referenced: https://developer.mozilla.org/en-US/

// FOR EACH // --> Provided by Professor Lai
Array.prototype.myEach = function() {
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
Array.prototype.myMap = function() {

};

// SOME // --> Written by: Neil
Array.prototype.mySome = function() {

};

// REDUCE // --> Written by: Neil
Array.prototype.myReduce = function() {

};

// INCLUDES // --> Written by: Neil
Array.prototype.myIncludes = function() {

};

// INDEXOF // --> Written by: Ambonique
Array.prototype.myIndexOf = function(element, startIndex = 0) {
    if (startIndex > this.length || startIndex < 0) return -1;
    let found = false;
    let counter = startIndex;
    while (counter < this.length) {
        if (this[counter] === element) {
            found = true;
            break;
        }
        counter++;
    }
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
Array.prototype.myLastIndexOf = function() {

};

// KEYS // --> Written by: Ambonique
Object.myKeys = function() {

};

// VALUES // --> Written by: Ambonique
Object.myValues = function() {

};