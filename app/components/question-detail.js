import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question, formInputs) {
      this.sendAction('updateQuestion', question, formInputs);
    },
    saveAnswer(formInputs) {
      console.log(formInputs, "save answer console");
      this.sendAction('saveAnswer', formInputs);
    }
  }
});
