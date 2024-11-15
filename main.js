'use strict';

function checkAllChecked() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  
  if (allChecked) {
    document.body.style.backgroundImage = "url('https://media1.tenor.com/m/vnOLCG9pweQAAAAd/ichika-nakano-the-quintessential-quintuplets.gif')";
}
}

      document.addEventListener("DOMContentLoaded", () => {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", checkAllChecked);
        });
    });