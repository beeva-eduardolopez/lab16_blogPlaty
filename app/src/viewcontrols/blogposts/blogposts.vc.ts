import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class BlogpostsViewControl extends BaseViewControl {
    templateString: string = require('./blogposts.vc.html');

    context: any = {
        post:{
            
        }
    };
}

register.viewControl('blogposts-vc', BlogpostsViewControl);
