var createProjectView=Backbone.View.extend({
	initialize: function(){ 
		this.render();
	},
	render: function(){
		$.get("/public/templates/createProject.html",function(template){
	  	rendered=Mustache.render(template);
	  	$("#task-container").append(rendered);
	 });
	}
});