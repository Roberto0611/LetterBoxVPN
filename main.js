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

//Button style
openDialogButton.textContent = 'VPN';
openDialogButton.style.fontSize = '1.2rem';
openDialogButton.style.padding = '0.5rem 2.5rem';
openDialogButton.style.border = 'none';
openDialogButton.style.outline = 'none';
openDialogButton.style.borderRadius = '0.4rem';
openDialogButton.style.cursor = 'pointer';
openDialogButton.style.backgroundColor = '#283038';
openDialogButton.style.color = '#99aabb';
openDialogButton.style.fontWeight = '700';
openDialogButton.style.marginLeft = '25%';

// Events for the interactions
openDialogButton.style.transition = 'color 0.3s ease-in-out';

const originalColor = '#99aabb';
const hoverColor = '#ffffff'; 

openDialogButton.addEventListener('mouseover', () => {
  openDialogButton.style.color = hoverColor;
});

openDialogButton.addEventListener('mouseout', () => {
  openDialogButton.style.color = originalColor; 
});

// Add button to the DIV
div.appendChild(openDialogButton);

// Create dialog
const dialog = document.createElement('dialog');
dialog.style.width = '80%'; 
dialog.style.height = '80%'; 
dialog.style.backgroundColor = '#fff';
dialog.style.overflow = 'hidden'

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
