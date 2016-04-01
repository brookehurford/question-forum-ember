import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('newAnswerForm');
    },
    saveAnswer(){
      var formInputs = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):"",
        question: this.get('question'),
      };
      console.log(formInputs);
      this.toggleProperty('newAnswerForm');
      this.set('content', "");
      this.set('author', "");
      this.sendAction('saveAnswer', formInputs);
    }
  }
});
