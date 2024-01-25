class BlogDTO{
    constructor(blog){
        this._id = blog._id;
        this.title = blog.title;
        this.photo = blog.photopath;
        this.author = blog.author;
        this.content = blog.content
    }
}
module.exports = BlogDTO;