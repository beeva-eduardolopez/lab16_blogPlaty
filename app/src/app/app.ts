import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import BlogpostsViewControl from '../viewcontrols/blogposts/blogposts.vc';
import NewpostViewControl from '../viewcontrols/newpost/newpost.vc';
import PostdetailViewControl from '../viewcontrols/postdetail/postdetail.vc';
import PostupdateViewControl from '../viewcontrols/postupdate/postupdate.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

          router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'blogposts', view: BlogpostsViewControl },
            { pattern: 'newpost', view: NewpostViewControl },
            { pattern: 'postdetail', view: PostdetailViewControl },
            { pattern: 'postupdate', view: PostupdateViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
