// ================================
// 1. 0 - 100 arası tək ədədlərin cəmi
// ================================
let sumOdd = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 1) {
    sumOdd += i;
  }
}

console.log("Tək ədədlərin cəmi:", sumOdd);



// ================================
// 2. 0 - 100 arası cüt ədədlərin cəmi
// ================================
let sumEven = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}

console.log("Cüt ədədlərin cəmi:", sumEven);



// ================================
// 3. 0 - 100 arası bütün ədədlərin cəmi
// ================================
let sumAll = 0;

for (let i = 0; i < 100; i++) {
  sumAll += i;
}

console.log("Ümumi cəm:", sumAll);



// ================================
// 4. Array içində 3 və 7-yə bölünənlərin cəmi
// ================================
let sumArr1 = 0;

let array1 = [2, 16, 23, 37, 45, 22, 21];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 3 === 0 && array1[i] % 7 === 0) {
    sumArr1 += array1[i];
  }
}

console.log("3 və 7-yə bölünənlərin cəmi:", sumArr1);



// ================================
// 5. Array elementlərinin hamısının cəmi
// ================================
let sumArr2 = 0;

let array2 = [4, 8, 27, 16, 20];

for (let i = 0; i < array2.length; i++) {
  sumArr2 += array2[i];
}

console.log("Array cəmi:", sumArr2);



// ================================
// 6. 3 və 5-ə bölünən ədədləri tap
// ================================
let array3 = [12, 16, 15, 25, 35, 45, 75];

for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 3 === 0 && array3[i] % 5 === 0) {
    console.log("Uyğun ədəd:", array3[i]);
  }
}