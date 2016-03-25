import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogsService from '../../services/blogs/blogs.svc';
import BlogsRepository from '../../repositories/blog/blog.repo';

export default class BlogpostsViewControl extends BaseViewControl {
    templateString: string = require('./blogposts.vc.html');

    constructor(private blogsService: BlogsService, private blogsRepository: BlogsRepository) {
        super();
    }

    context: contexts.IBlogs = {
        posts: <Array<models.IPost>>[],
    };

    navigatedTo(): void {
        this.blogsService.getBlogs().then((posts) => {
            this.context.posts = posts;
        });
    }


    createPost(): void {
        this.navigator.navigate('newpost-vc', {
            parameters: {}
        });
    }

    detailPost(id: number): void {
        this.navigator.navigate('postdetail-vc', {
            parameters: {
                id:id
            }
        });
    }

    updatePost(id: number): void {
        this.navigator.navigate('postupdate-vc', {
            parameters: {
                id: id
            }
        });
    }
}

register.viewControl('blogposts-vc', BlogpostsViewControl);
