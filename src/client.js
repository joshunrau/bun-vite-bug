const message = document.createElement('p');
message.textContent = 'Loading...';

fetch('/api')
  .then((response) => response.json())
  .then((data) => {
    message.textContent = data.message;
  })
  .catch((err) => {
    console.error(err);
    message.textContent = 'Error';
  });

window.addEventListener('load', () => {
  document.body.appendChild(message);
});
