import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  itemFavorited: false,
  sortBy: ['date:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    addToFavorites(question){
      this.get('favorites').add(question);
      this.set('itemFavorited', true);
    },
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
