const apiKey = 'DeSEqiOl7RIiqk4S5DNMnokrxr24XKTX';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
  .then(response => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.appendChild(img);
  })
  .catch(console.log);
