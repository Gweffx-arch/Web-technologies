console.log("Hello world!");

const myElement = document.querySelector("#target");

// Функція для виведення імені в alert 
function showAlert() {
    alert("Андрій");
}

// Використання івенту ondblclick(подвійний клік)
myElement.ondblclick = showAlert;