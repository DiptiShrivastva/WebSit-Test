document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:5000/getAll')
  .then(response => response.json())
  .then(data => loadHTMLTable(data['data']));
  
});


document.querySelector('#ulList').addEventListener('click', function(event) {
  if (event.target.id === "delete-row-btn") {
      deleteRowById(event.target.dataset.id);
  }
});

const updateBtn = document.querySelector('#update-row-btn');

function deleteRowById(id) {
  fetch('http://localhost:5000/delete/' + id, {
      method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          location.reload();
      }
  });
}

// function handleEditRow(id) {
//   const updateSection = document.querySelector('#update-row');
//   updateSection.hidden = false;
//   document.querySelector('#update-name-input').dataset.id = id;
// }

function loadHTMLTable(data) {
  const ulList = document.querySelector('#ulList');

  if (data.length === 0) {
    ulList.innerHTML = "<li class='no-data' >No Data</li><";
      return;
  }

  let tableHtml = "";

  data.forEach(function ({id, name}) {
      tableHtml += `<li style="line-height: 2;">`;
      tableHtml += `<p ><a href="profile.html?id=${id}" id="AllUses"> ${name}</a>
      <button  style="margin-left: 20px;" type="submit" value="X" id="delete-row-btn" data-id=${id}>x</button></p>`;
      
      tableHtml += `</li>`;
  });
  //tableHtml += `<li style="line-height: 2;"><p><a href="create.html"> Create new</a></li>`
  ulList.innerHTML = tableHtml;
}
// tableHtml += `<li>${id}</li>`;
      // tableHtml += `<li>${name}</li>`;
      // tableHtml += `<td><button style="margin-left: 20px;" type="submit" value="X"class="delete-row-btn" data-id=${id}>Delete</td>`;
      // tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;