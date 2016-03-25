import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogsService from '../../services/blogs/blogs.svc';

export default class BlogpostsViewControl extends BaseViewControl {
    templateString: string = require('./blogposts.vc.html');

    constructor(private blogsService: BlogsService) {
        super();
    }
    
    context: contexts.IBlogs = {
        posts: <Array<models.IPost>>[]
    };

    navigatedTo(): void {
        this.blogsService.getBlogs().then((blogs) => {
            this.context.posts = blogs;
        });
    }


    createPost(): void {
        this.navigator.navigate('newpost-vc', {
            parameters: {

            }
        });
    }

    detailPost(): void {
        this.navigator.navigate('postdetail-vc', {
            parameters: {

            }
        });
    }

    updatePost(): void {
        this.navigator.navigate('postupdate-vc', {
            parameters: {

            }
        });
    }
}

register.viewControl('blogposts-vc', BlogpostsViewControl);
