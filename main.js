// Made by: Roberto Ochoa Cuevas

//insert the button in the webpage
const div = document.getElementById('js-poster-col');
const vpnButton = document.createElement('button');
vpnButton.textContent = 'VPN';

div.appendChild(vpnButton);

//function 
vpnButton.addEventListener('click',() =>{
    alert('hi')
})
