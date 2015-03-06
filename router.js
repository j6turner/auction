Auction.Router.map(function() {
  this.resource('application');
  this.resource('lots', { path: '/' });
  this.resource('lot');
  this.resource('register');
  this.resource('contact');
  this.resource('category', { path: '/:category_id' });
});
