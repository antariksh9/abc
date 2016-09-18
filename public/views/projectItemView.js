var projectItemView=Backbone.View.extend({
	initialize:function (attr){
		this.options=attr;
		this.render();
	},
	render : function(){
		var op=this;
		$.get("/public/templates/projectItem.html",function(template){
	  	rendered=Mustache.render(template,{"project":op.options.project});
	  	$("#task-container").append(rendered);	
	 });
	}
});
