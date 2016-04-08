import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    updateQuestion(question, formInputs) {
      Object.keys(formInputs).forEach(function(key) {
        if(formInputs[key]!==undefined) {
          question.set(key,formInputs[key]);
        }
      });
      question.save();
      this.transitionTo('admin');
    }
  }
});
