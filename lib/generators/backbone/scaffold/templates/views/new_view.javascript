(function() {
    <%= view_namespace %> = <%= view_namespace %> || {};
    
    <%= view_namespace %>.NewView = Backbone.View.extend({
        template: JST["<%= jst 'new' %>"],

        initialize: function() {
            // this.model.on("change:errors", this.render, this);
            var self = this;
            self.model.bind("change:errors", function() {
                return self.render();
            });
        },
        
        events: {
            "submit #new-<%= singular_name %>" : "save"
        },
        
        save: function(e) {
            var self = this;
            e.preventDefault();
            e.stopPropagation();
            
            self.model.unset("errors");
            return self.collection.create(self.model.toJSON(), {
                success: function(model) {
                    return window.location.hash = "/" + model.id;
                },
                error: funtion(<%= singular_name %>, jqXHR) {
                    return self.model.set({errors: $.parseJSON(jqXHR.responseText)});
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
