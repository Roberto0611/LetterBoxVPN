//get ID and title of the movie
const movieID = document.body.getAttribute('data-tmdb-id');
const movieTitle = document.querySelector('.headline-1.js-widont.prettify').textContent;

//make url for watchany
const baseurl = 'https://watchany.stream/movie/';
const splitTitle =  movieTitle.replace(/\s+/g, '-');
const url = baseurl + movieID + '-' + splitTitle;
console.log(url)

// get the button by ID
const div = document.getElementById('js-poster-col');
const openDialogButton = document.createElement('button');
openDialogButton.textContent = 'VPN';

// Add button to the DIV
div.appendChild(openDialogButton);

// Create dialog
const dialog = document.createElement('dialog');
dialog.style.width = '80%'; 
dialog.style.height = '80%'; 
dialog.style.backgroundColor = '#fff';

// Create Iframe for load the webpage
const iframe = document.createElement('iframe');
iframe.src = url; // URL of the webpage
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none'; 

// add the iframe to the dialog
dialog.appendChild(iframe);

// add the dialog to the content
div.appendChild(dialog);

// event click to open the dialog
openDialogButton.addEventListener('click', () => {
  dialog.showModal();
});

// event click to close the dialog
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
