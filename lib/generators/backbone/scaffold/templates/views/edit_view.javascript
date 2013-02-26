(function() {
    <%= view_namespace %> = <%= view_namespace %> || {};
    
    <%= view.namespace %>.EditView = Backbone.View.extend({
        template: JST["<%= jst 'edit' %>"],
        
        events: {
            "submit #edit-<%= singular_name %>" : "update"
        },
        
        update: function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            return this.model.save(null, {
                success: function(model) {
                    return window.location.hash = "/" + model.id;
                }
            });
        },
        
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$("form").backboneLink(this.model);
            return this;
        }
    });
}).call(this);
