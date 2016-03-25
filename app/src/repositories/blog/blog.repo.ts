import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogsService from '../../services/blogs/blogs.svc';

export default class BlogRepository extends BaseRepository {
    
    post: models.IPost;
    postid: number = 0;
    title: string = "";
    content: string = "";
    author: string = "";

    constructor(private blogsService: BlogsService) {
        super();
    }

    createPost(title: string, author: string, content: string): async.IThenable<boolean> {
        return this.blogsService.createPost(this.post);

    }

    listPost(): async.IThenable<Array<models.IPost>> {

        return this.blogsService.getBlogs();

    }
}

register.injectable('blog-repo', BlogRepository);
