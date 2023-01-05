const getImage = async () => {
  try {
    const apiKey = 'DeSEqiOl7RIiqk4S5DNMnokrxr24XKTX';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const {
      data: {
        images: {
          original: { url }
        }
      }
    } = await resp.json();
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
