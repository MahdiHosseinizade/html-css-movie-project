document.addEventListener('DOMContentLoaded', () => {
    // Get all the links in the navBar
    const navLinks = document.querySelectorAll('.navBar a');
    console.log(navLinks);
    // Loop through each link and add an event listener to toggle the 'active' class on and off
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove the 'active' class from all the links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });
  