function proximaPiada(){
  const p = document.querySelector('p');
  p.innerHTML = '';
  const url = 'https://api.chucknorris.io/jokes/random';
  const piada = fetch(url)
  .then(r => r.json())
  .then(body => {
    p.innerHTML += body.value;
  })
}