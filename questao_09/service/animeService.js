const AnimeRepository = require('../repositories/animeRepository');
const Anime = require('../entities/anime');

class AnimeService {
  constructor() {
    this.repository = new AnimeRepository();
  }

  getAllAnimes() {
    return this.repository.findAll();
  }

  getAnimeById(id) {
    const anime = this.repository.findById(id);
    if (!anime) throw new Error('Anime não encontrado ou não existe');
    return anime;
  }

  createAnime(name, genre, studio) {
    if (!name || !genre || !studio) throw new Error('Todos os campos são obrigatórios');
    const anime = new Anime(name, genre, studio);
    return this.repository.save(anime);
  }

  updateAnime(id, name, genre, studio) {
    if (!name || !genre || !studio) throw new Error('Todos os campos são obrigatórios');
    const updatedAnime = { name, genre, studio };
    return this.repository.update(id, updatedAnime);
  }

  deleteAnime(id) {
    const success = this.repository.delete(id);
    if (!success) throw new Error('Anime não encontrado ou não existe');
  }
}

module.exports = AnimeService;