const urlForm = document.getElementById('urlForm');
const urlInput = document.getElementById('urlInput');
const imageContainer = document.getElementById('imageContainer');

urlForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = urlInput.value;
    if (url) {
        scrapeImages(url);
    }
});

function scrapeImages(url) {
    fetch(`http://localhost:3000/scrape?url=${encodeURIComponent(url)}`)
        .then(response => response.blob())
        .then((blob) => {
            displayImages(blob);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function displayImages(blob) {
    
    const imageUrl = URL.createObjectURL(blob);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    const container = document.getElementById("imageContainer");
    container.appendChild(imageElement);

}
