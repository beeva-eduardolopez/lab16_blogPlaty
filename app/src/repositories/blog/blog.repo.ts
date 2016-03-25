import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogsService from '../../services/blogs/blogs.svc';

export default class BlogRepository extends BaseRepository {

    postid: number = 0;
    title: string = "";
    content: string = "";
    author: string = "";

    constructor(private blogsService: BlogsService) {
        super();
    }

    createPost(title: string, author: string, content: string): async.IThenable<boolean> {
        return this.blogsService.createPost(title, author, content).then((post) => {
            this.postid = post.id;
            this.title = post.title;
            this.author = post.author;
            this.content = post.content;
            return true;
        });
    }

    listPost(): async.IThenable<Array<models.IPost>> {

        return this.blogsService.getBlogs();

    }
}

register.injectable('blog-repo', BlogRepository);
