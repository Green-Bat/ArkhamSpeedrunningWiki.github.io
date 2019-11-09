function LoadFile(fileName){
	
}

function run(){
	var fileName = 'Test.md';
	var target = document.getElementById('targetDiv');
	var converter = new showdown.Converter();
	
	jQuery.get('https://raw.githubusercontent.com/ArkhamSpeedrunningWiki/ArkhamSpeedrunningWiki.github.io/master/' + fileName, function(data){
		console.log(data);
		
		//var text = LoadFile('Test.md');
		var html = converter.makeHtml(data);
		target.innerHTML = html;
		
		return data;
	});
	
	//var text = document.getElementById('sourceTA').value;
	
}