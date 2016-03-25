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
    // createPost(title: string, author: string,
    //     content: string): async.IThenable<models.IPost> {

    //     return this.http.json<models.IResponse>({
    //         method: 'POST',
    //         url: this.host + '/posts',
    //         data: <models.IPost>{
    //             title: title,
    //             author: author,
    //             content: content
    //         }
    //     }).then(
    //         (success) => {
    //             return <models.IPost>{
    //                 id: success.response.data,
    //                 title: title,
    //                 author: author,
    //                 content: content                
    //             };
    //         },
    //         (error): any => {
    //             throw error.response.message;
    //         }
    //         );
    // }
}

register.injectable('blogs-svc', BlogsService);
