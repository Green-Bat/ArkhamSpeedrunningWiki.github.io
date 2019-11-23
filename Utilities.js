function LoadStyle(){
	if(typeof(Storage) == "undefined"){
		console.log("This browser does not support web storage!");
		return;
	}
	
	var style = localStorage.getItem("style");
	if(style === null || style === "dark"){
		return "dark";
	}else{
		return "light";
	}
}

function SaveStyle(mode){
	if(typeof(Storage) == "undefined"){
		console.log("This browser does not support web storage!");
		return;
	}
	
	if(mode == "light"){
		localStorage.setItem("style", "light");
	}else if(mode === "dark"){
		localStorage.setItem("style", "dark");
	}
}

function SetStyle(mode){
	if(mode != "light" && mode != "dark"){
		console.log("Attempted to set invalid style mode: [" + mode + "]!");
		return;
	}
	
	document.getElementById('body-main').className = mode;
	
	if(mode == "light"){
		document.getElementById('style-button').innerHTML = "Day Mode";
	}else if(mode === "dark"){
		document.getElementById('style-button').innerHTML = "Night Mode";
	}
	
	SaveStyle(mode);
}

function ToggleStyle(){
	var currentStyle = LoadStyle();
	
	if(currentStyle === "light"){
		SetStyle("dark");
	}else if(currentStyle === "dark"){
		SetStyle("light");
	}
}