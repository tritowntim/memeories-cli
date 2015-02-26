import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('memes', function() {
    this.route('show', { path: ':meme_id' });
  });
});

export default Router;
