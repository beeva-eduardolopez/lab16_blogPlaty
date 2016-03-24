import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PostupdateViewControl extends BaseViewControl {
    templateString: string = require('./postupdate.vc.html');

    context: any = {};
}

register.viewControl('postupdate-vc', PostupdateViewControl);
