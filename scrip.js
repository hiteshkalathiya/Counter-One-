let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let count3 = document.getElementById("count3");
let count4 = document.getElementById("count4");

let currentCount = 0;

function updateCounts() {
  currentCount++; 

  count1.textContent = currentCount * 5; 
  count2.textContent = currentCount * 10; 
  count3.textContent = currentCount * 15; 
  count4.textContent = currentCount * 20; 
}

let intervalId = setInterval(updateCounts, 1000);






// let count1 = document.getElementById("count1");
// let count2 = document.getElementById("count2");
// let count3 = document.getElementById("count3");
// let count4 = document.getElementById("count4");

// let currentCount = 0;

// function updateCounts() {
//   currentCount++;

//   count1.textContent = currentCount * 5;
//   count2.textContent = currentCount * 10;
//   count3.textContent = currentCount * 15;
//   count4.textContent = currentCount * 20;

//   // Stop counts as required
//   if (currentCount * 5 === 5000) {
//     clearInterval(intervalId);
//     setTimeout(() => {
//       intervalId = setInterval(updateCounts2, 1000);
//     }, 20000); // Delay of 20 seconds
//   }

//   function updateCounts2() {
//     currentCount++;

//     count2.textContent = currentCount * 10;
//     count3.textContent = currentCount * 15;

//     if (currentCount * 10 === 10000) {
//       clearInterval(intervalId);
//       setTimeout(() => {
//         intervalId = setInterval(updateCounts3, 1000);
//       }, 20000); // Delay of 20 seconds
//     }
//   }

//   function updateCounts3() {
//     currentCount++;

//     count3.textContent = currentCount * 15;
//     count4.textContent = currentCount * 20;

//     if (currentCount * 15 === 15000) {
//       clearInterval(intervalId);
//       setTimeout(() => {
//         intervalId = setInterval(updateCounts4, 1000);
//       }, 20000); // Delay of 20 seconds
//     }
//   }

//   function updateCounts4() {
//     currentCount++;

//     count4.textContent = currentCount * 20;

//     if (currentCount * 20 === 20000) {
//       clearInterval(intervalId);
//     }
//   }
// }

// let intervalId = setInterval(updateCounts, 10);

