import Ember from 'ember';

export default Ember.Service.extend({
  votes: [],

  add(vote) {
    this.get('votes').pushObject(vote);
  }
});
