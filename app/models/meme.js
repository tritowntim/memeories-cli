import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  funny: DS.attr('boolean'),
  description: DS.attr(),
  emojiPattern: DS.attr()
});
