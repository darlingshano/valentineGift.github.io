const images = {
    happy: [
        'image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
        'image4.jpeg',
        'image5.jpeg',
        'image6.jpeg',
        'image7.jpeg',
        'image8.jpeg',
        'image9.jpeg',
        'image10.jpeg',
        'image11.jpeg',
        'image12.jpeg',
        'image13.jpeg',
        'image14.jpeg',
        'image15.jpeg',
        'image16.jpeg',
        'image17.jpeg',
        'image18.jpeg',
        'image19.jpeg',
        'image20.jpeg',
    ], 
    angry: [
        'image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
        'image4.jpeg',
        'image5.jpeg',
        'image6.jpeg',
        'image7.jpeg',
        'image8.jpeg',
        'image9.jpeg',
        'image10.jpeg',
        'image11.jpeg',
        'image12.jpeg',
    ]
};


document.getElementById('yes').addEventListener('click', function(event) {
    // Calculate new position ensuring button doesn't go out of bounds
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    this.style.position = 'absolute';
    this.style.left = Math.random() * maxX + 'px';
    this.style.top = Math.random() * maxY + 'px';
});

document.getElementById('no').addEventListener('click', function(event) {
    document.getElementById('question').classList.add('hidden');
    displayImages('angry');
    document.getElementById('no').classList.add('hidden');
    document.getElementById('yes').classList.add('hidden');

    setTimeout(() => {
        document.getElementById('final-question').classList.remove('hidden');


        document.getElementById('final-no').addEventListener('click', function() {
            // Display a specific image or perform any other action
            displaySpecificImage();
        });
    }, 8000); // 3000 milliseconds = 3 seconds
});

document.getElementById('final-yes').addEventListener('click', function(event) {
    const angryImagesContainer = document.getElementById('angry-images');
    angryImagesContainer.classList.add('hidden'); // Option 1: Hide the container
    angryImagesContainer.innerHTML = ''; // Option 2: Clear the contents

    displayImages('happy');
    document.getElementById('final-question').classList.add('hidden');
});

function displayImages(mood) {
    const container = document.getElementById(`${mood}-images`);
    container.innerHTML = ''; // Clear existing images
    container.classList.remove('hidden');

    images[mood].forEach((img, index) => {
        setTimeout(() => {
            const imageElement = document.createElement('img');
            imageElement.src = `images/${mood}/${img}`;
            // Ensure image positions do not go out of bounds
            const maxX = window.innerWidth - 100; // Considering image width
            const maxY = window.innerHeight - 100; // Considering image height
            imageElement.style.left = Math.random() * maxX + 'px';
            imageElement.style.top = Math.random() * maxY + 'px';
            container.appendChild(imageElement);
        }, index * 500); // 500ms delay between each image, adjust timing as needed
    });
}

function displaySpecificImage() {
    // Get the specific image element
    const specificImage = document.getElementById('specific-image');

    // Set the source of the image to the file in the images folder
    specificImage.src = 'images/delete_windows.webp';

    // Make the specific image visible
    specificImage.style.display = 'block';
    specificImage.style.position = 'fixed';
    specificImage.style.top = '0';
    specificImage.style.left = '0';
    specificImage.style.width = '100%';
    specificImage.style.height = '100%';
    specificImage.style.zIndex = '9999'; 

    if (specificImage.requestFullscreen) {
        specificImage.requestFullscreen();
    } else if (specificImage.webkitRequestFullscreen) { /* Safari */
        specificImage.webkitRequestFullscreen();
    } else if (specificImage.msRequestFullscreen) { /* IE11 */
        specificImage.msRequestFullscreen();
    }
}

