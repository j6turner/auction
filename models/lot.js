Auction.Lot = DS.Model.extend({
  user: DS.attr(),
  lotName: DS.attr(),
  lotValue: DS.attr(),
  lotCategory: DS.attr(),
  items: DS.hasMany('item', {async:true}),
  category: DS.belongsTo('category', {async:true})
});
