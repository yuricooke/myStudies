var cities = ["Madrid", "Berlin", "Tokyo", "Rio"]

// forEach()

cities.forEach(function(val, i, arr) {
 document.getElementById("forEach").innerHTML += ++i + ": " + val + "<br>";
});

// += appends a line instead of overwriting it. <3 // ++ adds a number to the index

// join()

var joinMethod = cities.join("-"); //separator
document.getElementById("join").innerHTML = joinMethod;

// split()
var citiesString = "Madrid, Berlin, Tokyo, Rio";
var arrCities = citiesString.split(", ");
document.getElementById("cities").innerHTML = citiesString;
document.getElementById("split").innerHTML = typeof arrCities + ": " + arrCities; // datatype of array is object!!!

// concat()

var numbers1 = [1,2,3];
var numbers2 = [4,5,6];
var numbers3 = [7,8,9];

var concatArr = numbers1.concat(numbers2, numbers3);

document.getElementById("concat").innerHTML = concatArr;

// Generate a random number between two values:

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  }
  console.log(getRandomNumber(1,1000));

  
// animate highlight on scroll

function highlightElementsOnScroll() {
    var elements = document.querySelectorAll('.highlight');
    
    elements.forEach(function(element) {
      var position = element.getBoundingClientRect();
      
      // Check if the element is in the viewport
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('highlighted');
      } else {
        element.classList.remove('highlighted');
      }
    });
  }
  
  window.addEventListener('scroll', highlightElementsOnScroll);
  