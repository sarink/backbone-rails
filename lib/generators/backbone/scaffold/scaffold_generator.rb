require 'generators/backbone/model/model_generator'

module Backbone
  module Generators
    class ScaffoldGenerator < ModelGenerator
      
      source_root File.expand_path("../templates", __FILE__)
      desc "This generator creates the client side crud scaffolding"
      
      def create_router_files 
        template 'router.coffee', File.join(backbone_path, "routers/coffee", class_path, "#{plural_name}_router.js.coffee")
        template 'router.javascript', File.join(backbone_path, "routers", class_path, "#{plural_name}_router.js")
      end
      
      def create_view_files
        available_views.each do |view|
          template "views/#{view}_view.coffee", File.join(backbone_path, "views/coffee", plural_name, "#{view}_view.js.coffee")
          template "views/#{view}_view.javascript", File.join(backbone_path, "views", plural_name, "#{view}_view.js")
          template "templates/#{view}.jst", File.join(backbone_path, "templates", plural_name, "#{view}.jst.ejs")       
        end
        
        template "views/model_view.coffee", File.join(backbone_path, "views/coffee", plural_name, "#{singular_name}_view.js.coffee")
        template "views/model_view.javascript", File.join(backbone_path, "views", plural_name, "#{singular_name}_view.js")
        template "templates/model.jst", File.join(backbone_path, "templates", plural_name, "#{singular_name}.jst.ejs") 
      end
      
      protected
        def available_views
          %w(index show new edit)
        end
        
    end
  end
end
