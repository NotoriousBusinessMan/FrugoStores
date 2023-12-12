// function generateStars() {
//     const ratingContainer = document.querySelectorAll('ratingContainer');
//     const starsContainer = document.querySelectorAll('stars');
    
//     // Get the data-key attribute value
//     const rating = parseInt(ratingContainer.getAttribute('data-key'));

//     // Clear existing stars
//     starsContainer.innerHTML = '';

//     // Generate stars based on the rating
//     for (let i = 0; i < rating; i++) {
//       const star = document.createElement('span');
//       star.innerHTML = '⭐';
//       starsContainer.appendChild(star);
//     }
//   }

//   // Call the function when the page loads
//   window.addEventListener('load', generateStars);


function generateStars() {
  const ratingContainers = document.getElementsByClassName('stars-container');

  // Loop through each element with the class 'stars-container'
  Array.from(ratingContainers).forEach(ratingContainer => {
    const starsContainer = ratingContainer.querySelector('.stars');
    
    // Get the data-key attribute value
    const rating = parseInt(ratingContainer.getAttribute('data-key'));

    // Clear existing stars
    starsContainer.innerHTML = '';

    // Generate stars based on the rating
    for (let i = 0; i < rating; i++) {
      const star = document.createElement('span');
      star.innerHTML = '⭐';
      starsContainer.appendChild(star);
    }
  });
}

// Call the function when the page loads
window.addEventListener('load', generateStars);