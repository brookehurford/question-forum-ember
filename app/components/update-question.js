import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('updateQuestionForm');
    },
    updateQuestion(question) {
      var formInputs = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.toggleProperty('updateQuestionForm');
      console.log(formInputs);
      this.sendAction('updateQuestion', question, formInputs);
    }
  }
});
