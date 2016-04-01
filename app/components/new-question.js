import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('newQuestionForm');
    },
    saveQuestion() {
      var formInputs = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):"",
        notes: this.get('notes') ? this.get('notes'):""
      };
      this.toggleProperty('newQuestionForm');
      this.sendAction('saveQuestion', formInputs);
    }
  }
});
