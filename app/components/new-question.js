import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('newQuestionForm');
    },
    saveQuestion() {
      var formInputs = {
        content: this.get('title') ? this.get('title'): "",
        author: this.get('title') ? this.get('title'): "",
        notes: this.get('title') ? this.get('title'): ""
      };
      this.toggleProperty('newQuestionForm');
      this.sendAction('saveQuestion', formInputs);
    }
  }
});
