document.getElementById('image-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const urlInput = document.getElementById('url');
  const imageUrl = urlInput.value;
  
  try {
    const response = await fetch(`/api/fetch-image?url=${encodeURIComponent(imageUrl)}`);
    
    if (response.ok) {
      const blob = await response.blob();
      const imageSrc = URL.createObjectURL(blob);
      const imageContainer = document.getElementById('image-container');
      imageContainer.innerHTML = `<img src="${imageSrc}" alt="Fetched Image">`;
    } else {
      console.error(response.status);
      alert('Error fetching image');
    }
  } catch (error) {
    console.error(error);
    alert('Error fetching image');
  }
});
