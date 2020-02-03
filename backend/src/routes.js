const routes = require('express').Router();
const multer = require('multer');
const multerConfigs = require('./config/multer');

const Post = require('./models/Posts');

routes.get('/posts', async (req, res) => {
    const posts = await Post.find();

    return res.json(posts);
});

routes.post('/posts', multer(multerConfigs).single("file"), async (req, res) => {
    const { originalname: name, size, key, location: url = '' } = req.file;
    const post = await Post.create({
        name,
        size,
        key,
        url,
    });    
    return res.json(post);
});

routes.delete('/posts/:id', async (req, res) => {
    
    const post = await Post.findById(req.params.id);

    await post.remove();
    const { name } = post;
    return res.send({ message: `File ${name} deleted` });
});

module.exports = routes;