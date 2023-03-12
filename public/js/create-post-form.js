const modal = document.getElementById("popup-modal");
const share = document.getElementById("sharebtn");
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');


modal.classList.add('hidden');

share.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('hidden');
  });

  noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    return location.reload();
  }); 

