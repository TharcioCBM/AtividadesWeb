const Anime = require('../entities/anime');

const animes = [
  new Anime('Naruto', 'Ação', 'Pierrot'),
  new Anime('One Piece', 'Aventura', 'Toei Animation'),
  new Anime('Attack on Titan', 'Ação', 'Wit Studio'),
  new Anime('My Hero Academia', 'Ação', 'Bones'),
  new Anime('Demon Slayer', 'Ação', 'ufotable'),
  new Anime('Death Note', 'Suspense', 'Madhouse'),
  new Anime('Fullmetal Alchemist: Brotherhood', 'Aventura', 'Bones'),
  new Anime('Sword Art Online', 'Fantasia', 'A-1 Pictures'),
  new Anime('Dragon Ball Z', 'Ação', 'Toei Animation'),
  new Anime('Cowboy Bebop', 'Ficção Científica', 'Sunrise')
];

class AnimeRepository {
  findAll() {
    return animes;
  }

  findById(id) {
    return animes.find(anime => anime.id === id);
  }

  save(anime) {
    animes.push(anime);
    return anime;
  }

  update(id, updatedAnime) {
    const index = animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      animes[index] = { ...animes[index], ...updatedAnime };
      return animes[index];
    }
    return null;
  }

  delete(id) {
    const index = animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      animes.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = AnimeRepository;