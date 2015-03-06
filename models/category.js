Auction.Category = DS.Model.extend({
  name: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
