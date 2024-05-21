const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#name');
    const name = nameInput.value;
   const nicknameInput = document.querySelector('#Nickname');
    const nickname = nicknameInput.value;
    const ageInput = document.querySelector('#age');
    const age =  ageInput.value;
   const bioInput = document.querySelector('#bio');
   const bio = bioInput.value
if(!name || !nickname|| !age || !bio ){
    alert("All feilds need to be filled")
}
   fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
             name : name,
             nickname : nickname,
             age : age,
             bio : bio
            })
    })
    .then(response => response.json())
    .then(data => console.log(data['data']));
}



