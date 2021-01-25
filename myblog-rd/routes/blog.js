const router = require('koa-router')()
const verifyAuth = require('../auth')
const blogControl = require('../controllers/blog_control')
router.prefix("/blog")

router.get("/list",verifyAuth.verifyAuthration, blogControl.welcom);

router.get("/blogDetail",verifyAuth.verifyAuthration,blogControl.blogDetail)

router.post("/postBlogs",blogControl.post);

router.post('/postComm',blogControl.postComm)
module.exports = router
