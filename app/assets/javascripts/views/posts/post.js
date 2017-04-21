Paysense.Views.Post = Backbone.View.extend({

  tagName: 'div',

  initialize: function(post) {
    _.bindAll(this, 'render');
    this.model = post;
    this.render();
  },

  render: function() {
    return HandlebarsTemplates['posts/post'](this.model.toJSON());
  }
});
