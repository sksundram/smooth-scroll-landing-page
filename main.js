// Option 2 - jQuery Smooth Scroll
// $('.navbar a').on('click', function(e) {
//   // Check for hash values in href like #home, #about, etc
//   if (this.hash !== '') {
//     // Prevent default behavior
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       500
//     );
//   }
// });

// Option 3 - SmoothScroll Script
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 500
});
