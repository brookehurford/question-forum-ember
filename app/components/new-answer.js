import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('newAnswerForm');
    },
    saveAnswer(){
      var momentDate = moment().format('MM/DD/YYYY')
      var formInputs = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):"",
        question: this.get('question'),
        date: momentDate
      };
      console.log(formInputs);
      this.toggleProperty('newAnswerForm');
      this.set('content', "");
      this.set('author', "");
      this.sendAction('saveAnswer', formInputs);
    }
  }
});
