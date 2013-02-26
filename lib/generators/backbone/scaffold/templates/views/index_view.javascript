(function() {
    <%= view_namespace %> = <%= view_namespace %> || {};
    
    <%= view.namespace %>.IndexView = Backbone.View.extend({
        template: JST["<%= jst 'index' %>"],
        
        initialize: function() {
            return this.options.<%= plural_model_name %>.bind("reset", this.addAll);
        },
        
        addAll: function() {
            return this.options.<%= plural_model_name %>.each(this.addOne);
        },

        addOne: function(<%= singular_model_name %>) {
            var view = new <%= view_namespace %>.<%= singular_name.camelize %>View({model: <%= singular_model_name %>});
            return this.$("tbody").append(view.render().el);
        },
        
        render: function() {
            this.$el.html(this.template({<%= plural_model_name %>: this.options.<%= plural_model_name %>.toJSON()}));
            this.addAll();
            return this;
        }
    });
}).call(this);
