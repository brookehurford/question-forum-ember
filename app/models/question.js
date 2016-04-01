import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.belongsTo('answer', { async: true })
});

// answers: DS.hasMany('answer', { async: true})
