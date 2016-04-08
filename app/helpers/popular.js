import Ember from 'ember';

export function popular(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >=1) {
    return Ember.String.htmlSafe('<h5 class="answered"><i class="fa fa-comment-o"></i>Answered</h5>');
  }
}

export default Ember.Helper.helper(popular);
