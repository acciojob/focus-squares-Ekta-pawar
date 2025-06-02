const ekta=document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.focus-sq');

  squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      squares.forEach((s) => {
        if (s !== square) {
          s.classList.add('coffee');
        }
      });
    });

    square.addEventListener('mouseleave', () => {
      squares.forEach((s) => {
        s.classList.remove('coffee');
      });
    });
  });
});
