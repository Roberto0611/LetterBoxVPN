// Made by: Roberto Ochoa Cuevas

//insert the button in the webpage
const div = document.getElementById('js-poster-col');
const vpnButton = document.createElement('button');
vpnButton.textContent = 'VPN';

div.appendChild(vpnButton);

//button style
vpnButton.style.margin = '10px';
vpnButton.style.marginBottom = '30px';

//Event listener
vpnButton.addEventListener('click',() =>{
    alert('hi')
})
