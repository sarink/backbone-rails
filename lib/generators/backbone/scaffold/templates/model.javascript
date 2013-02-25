(function() {
    <%= model_namespace %> = Backbone.Model.extend({
        defaults: function() {
            return {
                <% attributes.each do |attribute| -%>
                <%= attribute.name %>: null,
                <% end -%>
            };
        }
    });

    <%= collection_namespace %>Collection = Backbone.Collection.extend({
        model: <%= model_namespace %>,
        url: "<%= route_url %>"
    });
}).call(this);
