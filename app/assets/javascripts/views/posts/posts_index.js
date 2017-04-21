Paysense.Views.PostsIndex = Backbone.View.extend({

  tagName: 'div',
  el: '#post_list',

  initialize: function() {
    _.bindAll(this, 'render', 'renderPost');
    this.collections = new Paysense.Collections.Posts();
    this.collections.fetch();
    this.collections.on('sync', this.render);
  },

  render: function() {
    this.collections.each(this.renderPost);
  },

  renderPost: function(post){
    var view = new Paysense.Views.Post(post);
    this.$el.append(view.render());
  }
});
