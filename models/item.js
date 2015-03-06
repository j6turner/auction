Auction.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  value: DS.attr(),
  lot: DS.belongsTo('lot', {async:true})
});
