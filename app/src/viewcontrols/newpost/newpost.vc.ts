import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class NewpostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    context: any = {};
    
    listPost(): void {
        this.navigator.navigate('blogposts-vc', {
            parameters: {
               
            }
        });
    }
}

register.viewControl('newpost-vc', NewpostViewControl);
