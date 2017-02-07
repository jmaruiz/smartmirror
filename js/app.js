$(document).ready(function() {
	//load configurations
	$.get('/config', function(ret){
		var modulesToLoad = [];

		for(var item in ret[0]){
			if(!(ret[0][item].script.trim() === "")){
			 	modulesToLoad.push(ret[0][item]);
			}
		}
		
		for(var i = 0; i < modulesToLoad.length; i++){
			addWidgetWrapper(modulesToLoad[i]);
			addWidget(modulesToLoad[i].script);
		}
	});

	//add wrapper div to dom to prepare for widgets
	//which will be added in addWidget function
	function addWidgetWrapper(module){
		var $spotDivTag = $('#' + module.location);
		$spotDivTag.html('<div id="'+module.module+'"></div>');
	}
	
	//add widget amongst their specified location
	function addWidget(scriptPath){
		$.getScript(scriptPath, function(data){
	   		console.log('widgets are loaded');
		});
	}
});