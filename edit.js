const updateBtn = document.querySelector('#updateBtn');

updateBtn.onclick = function() {
  const updateNameInput = document.querySelector('#name');
  const updateNicknameInput = document.querySelector('#Nickname');
  const updateAgeInput = document.querySelector('#Age');
  const updateBioInput = document.querySelector('#Bio');

  fetch('http://localhost:5000/update', {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id: updateNameInput.dataset.id,
          name: updateNameInput.value,
          nickname: updateNicknameInput.value,
          age: updateAgeInput.value,
          bio: updateBioInput.value
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          location.reload();
      }
  });
};



/*



updateBtn.onclick = function() {
  const updateNameInput = document.querySelector('#update-name-input');


  console.log(updateNameInput);

  fetch('http://localhost:5000/update', {
      method: 'PATCH',
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
          id: updateNameInput.dataset.id,
          name: updateNameInput.value,
          nickname : updateNickNameameInput.value,
          age: updateAge
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          location.reload();
      }
  })
}
*/