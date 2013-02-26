(function() {
    <%= router_namespace %>Router = Backbone.Router.extend({
        initialize: function(options) {
            var <%= plural_model_name %> = new <%= collection_namespace>Collection();
            return <%= plural_model_name %>.reset(options.<%= plural_model_name %>);
        },

        routes: {
            "new"       :   "new<%= class_name %>",
            "index"     :   "index",
            ":id/edit"  :   "edit",
            ":id"       :   "show",
            ".*"        :   "index"
        }

        new<%= class_name %>: function() {
            var view = new <%= "#{view_namespace}.NewView(collection: @#{plural_name})" %>;
            $("#<%= plural_name %>").html(view.render().el);
        },

        index: function() {
            var view = new <%= "#{view_namespace}.IndexView(#{plural_name}: @#{plural_name})" %>;
            $("#<%= plural_name %>").html(view.render().el);
        },

        show: function(id) {
            var <%= singular_name %> = @<%= plural_name %>.get(id);
            var view = new <%= "#{view_namespace}.ShowView(model: #{singular_name})" %>;
            return $("#<%= plural_name %>").html(view.render().el);
        },

        edit: function(id) {
            var <%= singular_name %> = @<%= plural_name %>.get(id);
            var view = new <%= "#{view_namespace}.EditView(model: #{singular_name})" %>;
            return $("#<%= plural_name %>").html(view.render().el);
        }
    });
}).call(this);
