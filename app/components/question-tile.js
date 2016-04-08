import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function (){
    if(this.get('question.answers').get('length')!== 0)
      return this.get('question.answers').get('length');
  }),
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question, formInputs) {
      this.sendAction('updateQuestion', question, formInputs);
    },
  }
});
