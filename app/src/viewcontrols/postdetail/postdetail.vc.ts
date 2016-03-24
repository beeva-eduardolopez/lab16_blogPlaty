import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PostdetailViewControl extends BaseViewControl {
    templateString: string = require('./postdetail.vc.html');

    context: any = {};
}

register.viewControl('postdetail-vc', PostdetailViewControl);
