Paysense.Routers.Posts = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'posts' : 'post_list'
  },

  index: function(){
    view = new Paysense.Views.PostsIndex();
    //alert('Welcome!!');
  },

  post_list: function(){
    alert('POSTSS!!');
  }

});
