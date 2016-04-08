import Ember from 'ember';

export function popular(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >=1) {
    return Ember.String.htmlSafe('<i class="fa fa-comment-o">');
  }
}

export default Ember.Helper.helper(popular);
