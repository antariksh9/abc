var taskManagerView=Backbone.View.extend({
	initialize:function(attr){
	 	this.options=attr; 
		this.render(this.options);
	},
	 render : function(){
	 	var op=this;	
	 	$.get("/public/templates/taskManager.html",function(template){
	  	rendered=Mustache.render(template,{"head":"Task Management"});
	  	$(document.body).append(rendered);
		$.getScript('/public/views/projectItemView.js', function()
		{
			_.each(op.options.projects,function(project){
				new projectItemView({"project":project});
			});
			$.getScript('/public/views/createProjectView.js', function(){
				new createProjectView();
				$(".mainProjectItem").each(function(){
					$(this).click(function(){
					window.history.pushState("","","/#/project/"+this.id);
					})
				});
			});

		});
		 
		});

	}
});
