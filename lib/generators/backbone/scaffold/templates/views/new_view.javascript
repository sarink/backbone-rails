(function() {
    <%= view.namespace %> = <%= view.namespace %> || {};
    
    <%= view.namespace %>.NewView = Backbone.View.extend({
        template: JST["<%= jst 'new' %>"],

        initialize: function() {
            var self = this;
            self.model.bind("change:errors", function() {
                return self;
            });
        },
        
        events: {
            "submit #new-<%= singular_name %>" : "save"
        },
        
        save: function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.model.unset("errors");
            return this.collection.create(this.model.toJSON(), {
                success: function(<%= singular_name %>) {
                    var model = <%= singular_name %>;
                    return window.location.hash = "/" + model.id;
                },
                error: funtion(<%= singular_name %>, jqXHR) {
                    return this.model.set({errors: $.parseJSON(jqXHR.responseText)});
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
