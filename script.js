document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      squares.forEach((otherSquare) => {
        if (otherSquare !== square) {
          otherSquare.style.backgroundColor = '#6F4E37'; // Coffee
        }
      });
    });

    square.addEventListener('mouseleave', () => {
      squares.forEach((otherSquare) => {
        if (otherSquare !== square) {
          otherSquare.style.backgroundColor = '#E6E6FA'; // Lavender
        }
      });
    });
  });
});
