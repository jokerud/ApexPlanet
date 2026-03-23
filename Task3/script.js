const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

let index = 0;

rightBtn.addEventListener('click', () => {
  index = (index + 1) % 3;
  track.style.transform = `translateX(-${index * 100}%)`;
});

leftBtn.addEventListener('click', () => {
  index = (index - 1 + 3) % 3;
  track.style.transform = `translateX(-${index * 100}%)`;
});


async function getJoke() {
    const jokeBox = document.getElementById('jokeBox');
    jokeBox.textContent = 'Loading a joke...';
  
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      jokeBox.innerHTML = `<strong>${data.setup}</strong><br>— ${data.punchline}`;
    } catch (error) {
      jokeBox.textContent = 'Oops! Could not fetch a joke.';
    }
  }
  
  // Get a joke on initial load
  getJoke();