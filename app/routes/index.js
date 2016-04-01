import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(formInputs) {
      console.log(formInputs);
      var newQuestion = this.store.createRecord('question', formInputs);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});

// export default Ember.Route.extend({
//   saveQuestion(formInputs) {
//     var newQuestion = this.store.createRecord('question', formInputs);
//     newQuestion.save();
//     this.transitionTo('index');
//   }
// });
