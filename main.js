const btn = document.getElementById('btn');
const offimg = document.getElementById('img');
const onimg = document.getElementById('img2');
const container = document.querySelector('.container'); // Select the container element

let isOn = false; // Initial state is off

btn.addEventListener("click", function() {
  if (isOn) {
    offimg.style.display = 'block';
    onimg.style.display = 'none';
    container.style.backgroundColor = 'black'; // Set background color of the container to black
    btn.textContent = 'On'; // Set button text to 'On'
  } else {
    offimg.style.display = 'none';
    onimg.style.display = 'block';
    container.style.backgroundColor = '#F9F98E'; // Set background color of the container to white
    btn.textContent = 'Off'; // Set button text to 'Off'
  }
  
  isOn = !isOn; // Toggle the state
});