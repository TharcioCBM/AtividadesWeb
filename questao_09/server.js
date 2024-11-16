const express = require('express');
const app = express();

app.use(express.json());
app.get('/animes', AnimeController.getAllAnimes.bind(AnimeController));
app.get('/animes/:id', AnimeController.getAnimeById.bind(AnimeController));
app.post('/animes', AnimeController.createAnime.bind(AnimeController));
app.put('/animes/:id', AnimeController.updateAnime.bind(AnimeController));
app.delete('/animes/:id', AnimeController.deleteAnime.bind(AnimeController));

app.listen(4357, () => console.log('Servidor rodando na porta 4357'));