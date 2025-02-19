const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

    

// Obtener el número de visitas desde el LocalStorage
let visits = localStorage.getItem("page_visits");
visits = visits ? parseInt(visits) + 1 : 1;

// Actualizar el contador en la página
document.getElementById("counter").innerText = visits;

// Guardar el nuevo valor en el LocalStorage
localStorage.setItem("page_visits", visits);

