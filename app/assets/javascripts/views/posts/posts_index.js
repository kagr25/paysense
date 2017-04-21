Paysense.Views.PostsIndex = Backbone.View.extend({

  tagName: 'div',
  el: '#post_list',

  initialize: function() {
    _.bindAll(this, 'render', 'renderPost', 'deletePost', 'postMessage', 'deleteAll');
    this.collections = new Paysense.Collections.Posts();
    this.collections.fetch();
    this.collections.on('sync', this.render);
  },

  events: {
    'click .delete': 'deletePost',
    'click .message-post': 'postMessage',
    'click .delete_all' : 'deleteAll'
  },

  postMessage: function(e) {
    e.preventDefault();
    var message = $('#message').val();
    if (message == null || message == ''){
      alert('Please enter message...');
      return false;
    }
    else{
      var that = this;
      this.collections.create(
        {'message': message},
          {
          success: function(model, response){
            that.collections.add(model);
            alert('Message post Successfully!');
            //that.render();
          },
          error: function(model, response){
            alert(JSON.parse(response.responseText).error.message);
          }
      });
    }
  },

  deletePost: function(e) {
    e.preventDefault();
    var id = this.$(e.currentTarget).attr('data');
    var retVal = prompt("Enter Token: ", "");
    if (retVal == null){
      return false;
    }
    else if (retVal == ''){
      alert('Please enter correct token');
      return false;
    }
    else {
      var that = this;
      this.collections.get(id).destroy({
        data: {'id': id, 'token': retVal },
        processData: true,
        success: function(model, response){
          console.log(response);
          that.render();
        },
        error: function(model, response){
          that.collections.add(model);
          console.log(response);
          alert(JSON.parse(response.responseText).error.message);
        }
      }
      );
    }
  },

  deleteAll: function(e){
    e.preventDefault();
    var retVal = prompt("Enter Token: ", "");
    if (retVal == null){
      return false;
    }
    else if (retVal == ''){
      alert('Please enter correct token');
      return false;
    }
    else {
      var that = this;
      $.ajax({
          url:"/post/delete_all",
          data: {token: retVal},
          method: 'delete',
          success: function(response){
            that.collections = new Paysense.Collections.Posts();
            that.render();
            alert(response.message);
          },
          error: function(response){
            alert(JSON.parse(response.responseText).error.message);
          }
      });
    }
  },

  render: function() {
    this.$el.html(HandlebarsTemplates['posts/index']);
    this.collections.each(this.renderPost);
  },

  renderPost: function(post){
    var view = new Paysense.Views.Post(post);
    this.$el.append(view.render());
  }
});
