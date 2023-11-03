const express = require('express')

const { blogContent, blogContentUsingId, blogByAuthor } = require('../controller/blogContent')

const route = express.Router()

route.get('/blog-content', blogContent)

route.get('/blog-content-id', blogContentUsingId)

route.get('/author/blog-content', blogByAuthor)

module.exports = route