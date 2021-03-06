const article = require('../models/Article');

let allArticles = (req, res, next) => {
  article.find({}, (err, articles) => {
    if (err) {
      res.json(err);
    } else {
      res.json(articles);
    }
  })
}

let postNewArticle = (req, res, next) => {
  article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    slug: req.body.slug
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let getSingleArticle = (req, res, next) => {
  article.findOne({
    slug: req.params.slug
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let updateArticle = (req, res, next) => {
  article.update({
    _id: req.params.id
  },{
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    slug: req.body.slug
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let deleteArticle = (req, res, next) => {
  article.remove({
    _id: req.params.id
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

module.exports= {
  getAll: allArticles,
  post: postNewArticle,
  getOne: getSingleArticle,
  update: updateArticle,
  destroy: deleteArticle
}
