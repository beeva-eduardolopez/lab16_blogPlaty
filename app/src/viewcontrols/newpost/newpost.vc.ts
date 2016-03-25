import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogsService from '../../services/blogs/blogs.svc';
import BlogsRepository from '../../repositories/blog/blog.repo';
import BlogPostViewControl from '../blogposts/blogposts.vc';

export default class NewpostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    constructor(private blogService: BlogsService) {
        super();
    }

    context: contexts.IPost = {
        post: <models.IPost>{
            id: 0,
            title: '',
            author: '',
            content: ''
        },
        error: ''
    };


    placeOrder(): void {
        this.blogService.createPost(this.context.post).then((success) => {
            this.navigator.navigate(BlogPostViewControl);
        }).catch((error) => {
            this.context.error = error;
        });
    }

    listPost(): void {
        this.navigator.navigate('blogposts-vc', {
            parameters: {

            }
        });
    }
}

register.viewControl('newpost-vc', NewpostViewControl);
