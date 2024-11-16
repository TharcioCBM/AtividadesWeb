const AnimeService = require('../services/animeService');

class AnimeController {
  constructor() {
    this.service = new AnimeService();
  }

  getAllAnimes(res) {
    try {
      const animes = this.service.getAllAnimes();
      res.status(200).json({ animes });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getAnimeById(req, res) {
    try {
      const { id } = req.params;
      const anime = this.service.getAnimeById(id);
      res.status(200).json({ anime });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  createAnime(req, res) {
    try {
      const { name, genre, studio } = req.body;
      const anime = this.service.createAnime(name, genre, studio);
      res.status(201).json({ anime });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  updateAnime(req, res) {
    try {
      const { id } = req.params;
      const { name, genre, studio } = req.body;
      const anime = this.service.updateAnime(id, name, genre, studio);
      res.status(200).json({ anime });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  deleteAnime(req, res) {
    try {
      const { id } = req.params;
      this.service.deleteAnime(id);
      res.status(200).end();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new AnimeController();