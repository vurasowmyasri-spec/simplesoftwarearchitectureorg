// Fetch and display pets from backend API
fetch('http://localhost:3000/pets')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('pet-list');
    data.forEach(pet => {
      const li = document.createElement('li');
      li.textContent = `${pet.name} (${pet.type}) - Age ${pet.age}`;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Error fetching pets:', err));
