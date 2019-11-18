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
	
	if(mode === "day" || mode == "light"){
		localStorage.setItem("style", "light");
	}else if(mode === "night" || mode === "dark"){
		localStorage.setItem("style", "dark");
	}
}