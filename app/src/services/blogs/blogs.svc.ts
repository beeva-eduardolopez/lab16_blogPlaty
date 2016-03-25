import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogsService extends BaseService {

    getBlogs(): async.IThenable<Array<models.IPost>> {
        return this.json(this.host + '/posts');
    }

    createPost(post: models.IPost): async.IThenable<boolean> {
        
        return this.json(this.host + '/posts', post, 'POST')
            .then((success) => {
                return true;
            });
    }
}

register.injectable('blogs-svc', BlogsService);
