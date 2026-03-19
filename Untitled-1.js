// Оператори порівняння 
function findMinMax(arr) {
    if (arr.length === 0) return "Масив порожній";
    let min = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]; 
        if (arr[i] > max) max = arr[i]; 
    }
    return { min, max };
}
console.log("Мін/Макс масиву:", findMinMax([5, 12, 1, 9]));

// Порівняння об'єктів 
const car1 = { hp: 150 }, car2 = { hp: 200 };
console.log("Чи однакові об'єкти за hp?", car1.hp === car2.hp);

// Логічні оператори 
const inRange = (n, a, b) => n >= a && n <= b; 
console.log("Чи 25 у діапазоні 10-50?", inRange(25, 10, 50));

let state = true;
console.log("Стан до NOT:", state, "| після NOT:", !state); 

// Умовні розгалуження 
function getGrade(s) {
    if (s >= 90) return "відмінно"; 
    if (s >= 75) return "добре";
    if (s >= 60) return "задовільно";
    return "незадовільно";
}
console.log("Оцінка 82:", getGrade(82));

// Сезони через 
const getSeason = (m) => (m <= 2 || m === 12) ? "Зима" : (m <= 5) ? "Весна" : (m <= 8) ? "Літо" : "Осінь";
console.log("Сезон для 5 місяця:", getSeason(5));
