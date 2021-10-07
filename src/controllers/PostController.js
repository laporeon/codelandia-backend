const Post = require('../models/postModel');

module.exports = {
  async index(req, res) {
    const allPosts = await Post.find({});
    if (allPosts.length <= 0)
      return res.status(404).json({ error: 'Nenhum post encontrado.' });
    res.status(200).json(allPosts);
  },
  async create(req, res) {
    const { _id, title, content, author, tags } = req.body;

    const idExists = await Post.findById(_id);
    if (idExists)
      return res
        .status(400)
        .json({ error: 'ID já cadastrado. Por favor, tente outro número.' });

    if (!title || !content || !author || !tags) {
      return res.status(400).json({
        error: 'Por favor, preencha todos os campos.',
      });
    }

    try {
      const newPost = new Post(req.body);
      await newPost.save();

      res.status(200).json({
        success: 'Post criado com sucesso.',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  },
  async edit(req, res) {
    const { _id } = req.params;
    const idExists = await Post.findById(_id);

    if (!idExists)
      return res.status(400).json({
        error:
          'ID não encontrado. Por favor, verifique o número e tente novamente.',
      });

    try {
      const { title, content, author, tags } = req.body;
      const newPostData = {
        title: title,
        content: content,
        author: author,
        tags: tags,
      };
      await Post.findByIdAndUpdate(_id, newPostData);

      return res.status(200).json({
        success: 'Post atualizado com sucesso.',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  },

  async delete(req, res) {
    const { _id } = req.params;
    const idExists = await Post.findById(_id);

    if (!idExists)
      return res.status(400).json({
        error:
          'ID não encontrado. Por favor, verifique o número e tente novamente.',
      });

    try {
      await Post.findByIdAndDelete(_id);

      return res.status(200).json({
        success: 'Post deletado com sucesso.',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  },
};
