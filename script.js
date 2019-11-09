function run(fileName){
	var target = document.getElementById('targetDiv');
	var converter = new showdown.Converter();
	
	jQuery.get('https://raw.githubusercontent.com/ArkhamSpeedrunningWiki/ArkhamSpeedrunningWiki.github.io/master/' + fileName, function(data){
		target.innerHTML = converter.makeHtml(data);
	});
}