import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('newAnswerForm');
    },
    saveAnswer(){
      var formInputs = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):""
      };
      this.toggleProperty('newAnswerForm');
      this.sendAction('saveAnswer', formInputs);
    }
  }
});
