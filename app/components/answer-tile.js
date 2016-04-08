import Ember from 'ember';

export default Ember.Component.extend({
  totalVotes: Ember.inject.service(),
  
  actions: {
    addToVotes(vote) {
      this.get('totalVotes').add(vote);
    }
  }
});
