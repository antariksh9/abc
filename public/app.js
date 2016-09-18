(function(){
	var page,initDummyData,template,rendered,projectData,projects,tasks,members;
	initDummyData=(function(){
		projectData = [ "p1","p2","p3","p4","p5","p6","p7" ],
		projects = [
			{
				"id":"p1",
				"name":"Publishing",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]
			},
			{
				"id":"p2",
				"name":"Paid",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]	
			},
			{
				"id":"p3",
				"name":"Core",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]	
			},
			{
				"id":"p4",
				"name":"Engagement",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]	
			},
			{
				"id":"p5",
				"name":"Distributed",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]	
			},
			{
				"id":"p6",
				"name":"Social Selling",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]	
			},
			{
				"id":"p7",
				"name":"RTM",
				"desc":"It is a module which helps user to post in multiple channels at once",
				"members":["m1","m2","m3"],
				"tasks":["t1","t2","t3"]	
			}
		],
		members = [
			{
				"id":"m1",
				"name":"Abhinav Singi"
			},
			{
				"id":"m2",
				"name":"Surbhi Gupta"
			},
			{
				"id":"m3",
				"name":"Pratibha Joshi"
			}
		]
		tasks = [
			{
				"id":"t1",
				"owner":"m1",
				"project":"p1",
				"name":"Publishing View",
				"desc":"Include all channels preview",
				"status":"Done"
			},
			{
				"id":"t2",
				"owner":"m2",
				"project":"p1",
				"name":"Icon Creation",
				"desc":"Needed a new icon set",
				"status":"On Hold"
			},
			{
				"id":"t3",
				"owner":"m3",
				"project":"p1",
				"name":"Publishing View",
				"desc":"Include all channels preview",
				"status":"Done"
			}
		]
	})();
	
	function loadTaskManager(){
		$(document.body).empty();
		$.getScript('/public/views/taskManagerView.js', function()
		{	
			new taskManagerView({"projectData":projectData,"projects":projects,"members":members,"tasks":tasks});    
		});
	}

	function loadProjectLanding(){
		$(document.body).empty();
		$.getScript('/public/views/projectLandingView.js', function()
		{	
			new projectLandingView({"projectData":projectData,"projects":projects,"members":members,"tasks":tasks});    
		});	
	}
	var AppRouter = Backbone.Router.extend({
    routes: {
        "project/:id": "projectRoute",
        "": "homeRoute" 
     }
	});
	var app_router = new AppRouter;
	app_router.on('route:projectRoute',function(){
		loadProjectLanding();
	});
	app_router.on('route:homeRoute', function(){
		loadTaskManager();
	});
	Backbone.history.start({
        hashChange: true,});
	//loadProjectLanding();
	// $(window).trigger('hashchange');
	// $(window).on('hashchange', function(){
	// 	console.log(window.location.hash);
	// 	render(decodeURI(window.location.hash));
	// });
	// page = require('page');
	// page('/', loadTaskManager);
	// page('/project/:id', loadProjectLanding);
	// page();
	// riot.mount("*");
	// riot.route.start(true);
	// riot.route.base('/project');
	// riot.route('/index.html',loadProjectLanding);
	//riot.route('/index.html',loadTaskManager);
	
	
})();