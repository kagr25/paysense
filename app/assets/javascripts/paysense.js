window.Paysense = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Paysense.Routers.Posts();
    Backbone.history.start();
    // alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  Paysense.initialize();
});
