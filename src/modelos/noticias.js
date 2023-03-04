const axios = require('axios');

const Noticias = {
    buscar: (query) => {
        const apiKey = '5354657c0b3047bf91d0a9e1622b050a';

        return axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
            .then(noticias => {
                const news = noticias.data.articles.map(noticia => ({
                    titulo: noticia.title,
                    descripcion: noticia.description,
                    url: noticia.url,
                    imagen: noticia.urlToImage
                }));
                console.log(news);
                return news;
        })
        .catch(error => {
            res.status(400).send('No se pudieron cargar las noticias'); //Esto Angular mA adelante no lo podrA parsear, porque espera un objeto.
        })
        
    }
}

module.exports = Noticias;