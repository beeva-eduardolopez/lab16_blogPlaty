import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PostdetailViewControl extends BaseViewControl {
    templateString: string = require('./postdetail.vc.html');

    context: any = {};
    
    listPost(): void {
        this.navigator.navigate('blogposts-vc', {
            parameters: {
               
            }
        });
    }
}

register.viewControl('postdetail-vc', PostdetailViewControl);
