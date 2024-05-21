document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');

  if (userId) {
    fetch(`http://localhost:5000/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        if (user) {
          document.getElementById('user-name').textContent = `@${user.name}`;
          document.getElementById('nickname').textContent = `Nick name: ${user.nickname}`;
          document.getElementById('age').textContent = `Age: ${user.age}`;
          document.getElementById('bio').textContent = `Bio: ${user.bio}`;
        }
      });
  }
});










/*
const searchBtn = document.querySelector('#search-btn'); // Corrected assignment

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}

function loadHTMLTable(data) {
    // Implement this function to update the HTML table with the fetched data
    // Example:
    const table = document.querySelector('table');
    table.innerHTML = ''; // Clear existing table rows

    if (data.length === 0) {
        table.innerHTML = '<tr><td colspan="5">No data found</td></tr>';
        return;
    }

    data.forEach(({ id, name, nickname, age, bio }) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${nickname}</td>
            <td>${age}</td>
            <td>${bio}</td>
        `;
    });
}



const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}*/
