// Datos de los hoteles predefinidos (quemados)
const hotels = [
  {
    id: 1,
    name: "Hotel Madrid Plaza",
    city: "madrid",
    rating: 4,
    price: 100,
  },
  {
    id: 2,
    name: "Hotel Barcelona Beach",
    city: "barcelona",
    rating: 5,
    price: 150,
  },
  {
    id: 3,
    name: "Hotel Sevilla Centro",
    city: "seville",
    rating: 3,
    price: 75,
  },
  {
    id: 4,
    name: "Hotel Madrid Sur",
    city: "madrid",
    rating: 3,
    price: 90,
  },
  {
    id: 5,
    name: "Hotel Barcelona City",
    city: "barcelona",
    rating: 4,
    price: 120,
  },
  {
    id: 6,
    name: "Hotel Sevilla Golf",
    city: "seville",
    rating: 4,
    price: 110,
  },
];

// Función para buscar los hoteles por ciudad
function searchHotels() {
  const cityInput = document.getElementById("cityInput").value;
  const hotelList = document.getElementById("hotels");
  hotelList.innerHTML = ""; // Limpiar lista de hoteles antes de cada búsqueda
  
  if (cityInput === "") {
    alert("Por favor, selecciona una ciudad.");
    return;
  }

  const filteredHotels = hotels.filter(hotel => hotel.city === cityInput);

  if (filteredHotels.length === 0) {
    hotelList.innerHTML = "<li>No se encontraron hoteles en esta ciudad.</li>";
  } else {
    filteredHotels.forEach(hotel => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${hotel.name}</strong><br>
        <em>Rating: ${hotel.rating} estrellas</em><br>
        <em>Precio: $${hotel.price}</em>
      `;
      hotelList.appendChild(li);
    });
  }
}
