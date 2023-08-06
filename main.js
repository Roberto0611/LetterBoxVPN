// get button by ID
const div = document.getElementById('js-poster-col');
const vpnButton = document.createElement('button');
vpnButton.textContent = 'VPN';

// make the fix container for the button
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.zIndex = '1000'; // Asegurar que el contenedor del botón esté encima de otros elementos

// add the button to the DIV
buttonContainer.appendChild(vpnButton);
div.appendChild(buttonContainer);

// button style
vpnButton.style.margin = '10px';
vpnButton.style.padding = '10px 20px'; // Agregar un poco de espacio interno para el botón

// Create the element dialog
const dialog = document.createElement('dialog');
dialog.textContent = 'Este es el texto del diálogo.';
dialog.style.width = '400px'; // Ancho del diálogo
dialog.style.padding = '20px';
dialog.style.backgroundColor = '#fff';

const cerrarDialogButton = document.createElement('button');
cerrarDialogButton.textContent = 'Cerrar';
cerrarDialogButton.style.marginTop = '10px';

dialog.appendChild(cerrarDialogButton);
div.appendChild(dialog);

// click event for opening the dialog
vpnButton.addEventListener('click', () => {
  dialog.showModal();
});

// click event for closing the dialog
cerrarDialogButton.addEventListener('click', () => {
  dialog.close();
});
