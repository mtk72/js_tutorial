let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(elements) {
     let urls = [];
     elements.forEach(function (element) {
          urls.push(element.toLowerCase().split(/\s+/).join("-"));
     });
     return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
     return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}
console.log(functionalUrls(states));

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
     return string.toLowerCase().split(/\s+/).join('-');
}
// urls: Imperative version
function imperativeUrls(elements) {
     let urls = [];
     elements.forEach(function (element) {
          urls.push(urlify(element));
     });
     return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
     return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function fullUrl(elements) {
     return elements.map(element => 'https://excample.com/' + urlify(element));
}
console.log(fullUrl(states));

// singles: Functional version
function functionalSingles(elements) {
     return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Dakotas: Functional version
function functionalDakotas1(elements) {
     return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDakotas1(states));

function functionalDakotas2(elements) {
     return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDakotas2(states));

// lengths: Imperative solution
function imperativeLengths(elements) {
     let lengths = {};
     elements.forEach(function(element) {
       lengths[element] = element.length;
     });
     return lengths;
   }
   console.log(imperativeLengths(states));
   
   // lengths: Functional solution
   function functionalLengths(elements) {
     return elements.reduce((lengths, element) => {
                             lengths[element] = element.length;
                             return lengths;
                           }, {});
   }
   console.log(functionalLengths(states));
// product of lengths: Functional solution
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalProduct(array) {
  return array.reduce((total, n) => total *= n);
}
console.log(functionalProduct(a));

// lengths: Functional solution
function functionalLengths2(elements) {return elements.reduce((lengths, element) => {lengths[element]=element.length;return lengths;}, {});}
   console.log(functionalLengths2(states));