(function() {
    <%= view.namespace %> = <%= view.namespace %> || {};
    
    <%= view.namespace %>.EditView = Backbone.View.extend({
        template: JST["<%= jst 'show' %>"],

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
}).call(this);
