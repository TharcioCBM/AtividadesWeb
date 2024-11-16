const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

const animes = [
  { id: uuidv4(), name: 'Naruto', genre: 'Ação', studio: 'Pierrot' },
  { id: uuidv4(), name: 'One Piece', genre: 'Aventura', studio: 'Toei Animation' },
  { id: uuidv4(), name: 'Attack on Titan', genre: 'Ação', studio: 'Wit Studio' },
  { id: uuidv4(), name: 'My Hero Academia', genre: 'Ação', studio: 'Bones' },
  { id: uuidv4(), name: 'Demon Slayer', genre: 'Ação', studio: 'ufotable' },
  { id: uuidv4(), name: 'Death Note', genre: 'Suspense', studio: 'Madhouse' },
  { id: uuidv4(), name: 'Fullmetal Alchemist: Brotherhood', genre: 'Aventura', studio: 'Bones' },
  { id: uuidv4(), name: 'Sword Art Online', genre: 'Fantasia', studio: 'A-1 Pictures' },
  { id: uuidv4(), name: 'Dragon Ball Z', genre: 'Ação', studio: 'Toei Animation' },
  { id: uuidv4(), name: 'Cowboy Bebop', genre: 'Ficção Científica', studio: 'Sunrise' }
];

app.get('/animes', (res) => res.status(200).json({ animes }));

app.get('/animes/:id', (req, res) => {
  const { id } = req.params;
  const anime = animes.find((anime) => anime.id === id);

  if (!anime) {
    return res.status(404).json({ message: 'Anime não encontrado' });
  }

  res.status(200).json({ anime });
});

app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;

  if (!name || !genre || !studio) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const newAnime = { id: uuidv4(), name, genre, studio };
  animes.push(newAnime);

  res.status(201).json({ anime: newAnime });
});

app.put('/animes/:id', (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  const anime = animes.find((anime) => anime.id === id);

  if (!anime) {
    return res.status(404).json({ message: 'Anime não encontrado' });
  }

  if (!name || !genre || !studio) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  anime.name = name;
  anime.genre = genre;
  anime.studio = studio;

  res.status(200).json({ anime });
});

app.delete('/animes/:id', (req, res) => {
  const { id } = req.params;
  const index = animes.findIndex((anime) => anime.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Anime não encontrado' });
  }

  animes.splice(index, 1);

  res.status(200).end();
});

app.listen(4357, () => console.log('Servidor rodando na porta 4357'));