(function() {
    <%= view.namespace %> = <%= view.namespace %> || {};
    
    <%= view.namespace %>.<%= singular_name.camelize %>View = Backbone.View.extend({
        template: JST["<%= jst singular_name %>"],
        
        events: {
            "click .destroy" : "destroy"
        },

        tagName: "tr",
        
        destroy: function(e) {
            this.model.destroy();
            this.model.remove();
            return false;
        },
        
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
}).call(this);
