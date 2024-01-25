class BlogdetailDto{
    constructor(blog){
        this._id = blog._id;
        this.title = blog.title;
        this.photo = blog.photopath;
        this.content = blog.content;
        this.authorName = blog.author.name;
        this.authorusername = blog.author.username;
        this.createdAt = blog.createdAt;
    }
}

module.exports = BlogdetailDto;