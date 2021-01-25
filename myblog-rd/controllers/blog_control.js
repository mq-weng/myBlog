
const blogModels = require('../models/blog_models');

module.exports = {
    async welcom(ctx) {
        //查询所有文章数据
        let results = await blogModels.getBlogData();
        let login = ctx.session["loginUser"];//取出session为undefinde
        console.log(login);
        ctx.body = {
            blogs: results,
            loginUser: login,
        };
    },


    async blogDetail(ctx) {
        let results = await blogModels.getBlogDetail(ctx.query.blogId);
        console.log(results);
        if (results.length > 0) {
            let { title, content, post_time, blog_id } = results[0];
            let blogInfo = {
                blog_id,
                title,
                content,
                post_time,
            };
            // console.log(blogInfo);
            blogInfo.comments = [];
            for (let i = 0; i < results.length; i++) {
                let obj = results[i];
                blogInfo.comments.push({
                    comm_id: obj.comm_id,
                    comm_content: obj.comm_content,
                    username: obj.username,
                    comm_post_time: obj.comm_post_time,
                })
            }
            ctx.body = { blogs: blogInfo, loginUser: ctx.session["loginUser"], }//这里有问题
        } else {

            ctx.body = { message: "这篇文章不存在" }
        }

    },
    async post(ctx) {
        let { user_id, content, title } = ctx.request.body;
        if (user_id ) {
            let results = await blogModels.savePostBlogs({ user_id, content, title });
            if (results.blog_id.length > 0) {
                //通过判断insertId是不是有正常值，如果有，说明插入成功
                console.log('发表成功');
            } else {
                ctx.body = {
                    message: "发表失败!",
                };
            }
        }
    },
    async postComm(ctx) {
        let { user_id, blog_id, content } = ctx.request.body;
        let results = await blogModels.savePostBlogs({ user_id, blog_id, content } );
        console.log('comment+'+results);
        if (results.comm_id.length > 0) {
            //通过判断insertId是不是有正常值，如果有，说明插入成功
            console.log('发表成功');
        } else {
            ctx.body = {
                message: "发表失败!",
            };
        }
    },
}
