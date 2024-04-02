import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', {
    // reason we override the path is that the tutorial assumes imaginary scenario that company has a legacy
    // webpage on the /contact route which we cannot change, so we need a new route (called /getting-in-touch)
    // but we still want to internally refer to this page as the 'contact' page
    path: '/getting-in-touch',
  });
});
