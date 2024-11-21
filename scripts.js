// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {                   // Adds event listener to the document object, listens for the 'DOMContentLoaded' event, and runs a function after that event has occured
    const images = document.querySelectorAll('img');                    // Selects all <img> elements in the document and stores them in 'images'
    let loadedImages = 0;                                               // Initializes a variable at 0 to track number of images loaded successfully

    // Function to check if all images are loaded
    const checkImages = () => {                                         
      loadedImages++;
      if (loadedImages === images.length) {
        // All images are loaded, reveal the page
        document.body.style.visibility = 'visible';
        document.querySelector('.loader').style.display = 'none';
      }
    };

    // Attach the load event to each image
    images.forEach((img) => {
      if (img.complete) {
        checkImages();
      } else {
        img.addEventListener('load', checkImages);
        img.addEventListener('error', checkImages);                     // Handle broken images
      }
    });
  });


// Mouse-over thumbnail enlargement script for index.html
document.addEventListener('DOMContentLoaded', function() {
    let tiles = document.querySelectorAll('.tile');

    tiles.forEach(function(tile) {
        // Set initial styles
        tile.style.transition = 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease';
        tile.style.position = 'relative'; // Ensure the tile can overlap others
        tile.style.zIndex = '1'; // Default z-index for inactive tiles
        tile.style.color = '#fff'; // Set initial text color

        // Create a container for displaying the project title
        const titleOverlay = document.createElement('div');
        titleOverlay.style.position = 'absolute';
        titleOverlay.style.top = '50%';
        titleOverlay.style.left = '50%';
        titleOverlay.style.transform = 'translate(-50%, -50%)';
        titleOverlay.style.opacity = '0'; // Initially hidden
        titleOverlay.style.transition = 'opacity 0.3s ease';
        titleOverlay.style.textAlign = 'center';
        titleOverlay.style.fontSize = '1.2em';
        titleOverlay.style.fontWeight = 'bold';
        titleOverlay.style.pointerEvents = 'none'; // Prevent overlay from interfering with mouse events
        tile.appendChild(titleOverlay);

        // Track the active tile to avoid lingering behavior
        let activeTile = null;

        // Mouse over enlarge and process linked page
        tile.addEventListener('mouseover', async function() {
            activeTile = tile; // Mark this tile as active
            tile.style.transform = 'scale(1.05)'; // Scale up the tile
            tile.style.zIndex = '10'; // Bring the tile to the front
            tile.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Gradually darken the tile

            // Find the anchor tag and its href
            const anchor = tile.querySelector('a');
            if (anchor && anchor.href) {
                try {
                    // Fetch the linked page
                    const response = await fetch(anchor.href);
                    const text = await response.text();

                    // Parse the response and find the element with the class "project-title"
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, 'text/html');
                    const projectTitleElement = doc.querySelector('.project-title');

                    // Display the project title if found, but only if this tile is still active
                    if (projectTitleElement && activeTile === tile) {
                        titleOverlay.textContent = projectTitleElement.textContent;
                        titleOverlay.style.opacity = '1'; // Show the overlay
                    }
                } catch (error) {
                    console.error('Error fetching linked page:', error);
                }
            }
        });

        // Mouse out return to normal size and reset overlay
        tile.addEventListener('mouseout', function() {
            if (activeTile === tile) {
                activeTile = null; // Clear the active tile
                tile.style.transform = 'scale(1)'; // Scale back to original size
                tile.style.zIndex = '1'; // Reset z-index
                tile.style.backgroundColor = ''; // Reset background color
                titleOverlay.style.opacity = '0'; // Hide the overlay
                titleOverlay.textContent = ''; // Clear the overlay text
            }
        });
    });
});


// Mouse-over thumbnail enlargement script for asset-5.html
document.addEventListener('DOMContentLoaded', function() {
    let tiles = document.querySelectorAll('.tilea5');

    tiles.forEach(function(tilea5) {
        // Set initial styles
        tilea5.style.transition = 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease';
        tilea5.style.position = 'relative'; // Ensure the tilea5 can overlap others
        tilea5.style.zIndex = '1'; // Default z-index for inactive tiles
        tilea5.style.color = '#fff'; // Set initial text color

        // Create a container for displaying the project title
        const titleOverlay = document.createElement('div');
        titleOverlay.style.position = 'absolute';
        titleOverlay.style.top = '50%';
        titleOverlay.style.left = '50%';
        titleOverlay.style.transform = 'translate(-50%, -50%)';
        titleOverlay.style.opacity = '0'; // Initially hidden
        titleOverlay.style.transition = 'opacity 0.3s ease';
        titleOverlay.style.textAlign = 'center';
        titleOverlay.style.fontSize = '1.2em';
        titleOverlay.style.fontWeight = 'bold';
        titleOverlay.style.pointerEvents = 'none'; // Prevent overlay from interfering with mouse events
        tilea5.appendChild(titleOverlay);

        // Track the active tilea5 to avoid lingering behavior
        let activeTile = null;

        // Mouse over enlarge and process linked page
        tilea5.addEventListener('mouseover', async function() {
            activeTile = tilea5; // Mark this tilea5 as active
            tilea5.style.transform = 'scale(1.05)'; // Scale up the tilea5
            tilea5.style.zIndex = '10'; // Bring the tilea5 to the front
            tilea5.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Gradually darken the tilea5

            // Find the anchor tag and its href
            const anchor = tilea5.querySelector('a');
            if (anchor && anchor.href) {
                try {
                    // Fetch the linked page
                    const response = await fetch(anchor.href);
                    const text = await response.text();

                    // Parse the response and find the element with the class "project-title"
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, 'text/html');
                    const projectTitleElement = doc.querySelector('.project-title');

                    // Display the project title if found, but only if this tilea5 is still active
                    if (projectTitleElement && activeTile === tilea5) {
                        titleOverlay.textContent = projectTitleElement.textContent;
                        titleOverlay.style.opacity = '1'; // Show the overlay
                    }
                } catch (error) {
                    console.error('Error fetching linked page:', error);
                }
            }
        });

        // Mouse out return to normal size and reset overlay
        tilea5.addEventListener('mouseout', function() {
            if (activeTile === tilea5) {
                activeTile = null; // Clear the active tilea5
                tilea5.style.transform = 'scale(1)'; // Scale back to original size
                tilea5.style.zIndex = '1'; // Reset z-index
                tilea5.style.backgroundColor = ''; // Reset background color
                titleOverlay.style.opacity = '0'; // Hide the overlay
                titleOverlay.textContent = ''; // Clear the overlay text
            }
        });
    });
});
