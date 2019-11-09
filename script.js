function IsYouTubeLink(text){
	return text.includes('youtube') || text.includes('youtu.be');
}

function IsTwitchLink(text){
	return text.includes('twitch.tv');
}

function ProcessNewLines(text){
	return text.replace(/(?:\r\n|\r|\n)/g, ' <br/>');
}

function ProcessLinks(text){
	var newText = text;

	var result = URI.withinString(text, function(url){
		if(IsYouTubeLink(url)){
			var newUrl = url;
			if(newUrl.includes('watch?v=')){
				newUrl = newUrl.replace('watch?v=', 'embed/');
			}else if(url.includes('youtu.be')){
				newUrl = newUrl.replace('youtu.be/', 'youtube.com/embed/');
			}
			
			newText = newText.replace(url, '<iframe width="720" height="400" src=' + newUrl + '></iframe>');
		}else if(IsTwitchLink(url) && !url.includes('/p/')){
			console.log(url);
			
			var newURL = url.substring(url.lastIndexOf('/') + 1);
			console.log(newURL);

			newText = newText.replace(url, '<iframe width="720" height="400" src=https://player.twitch.tv/?video=' + newURL + '&autoplay=false></iframe>');
		}
	});

	return newText;
}

function run(fileName){
	var target = document.getElementById('targetDiv');
	var converter = new showdown.Converter();
	
	jQuery.get('https://raw.githubusercontent.com/ArkhamSpeedrunningWiki/ArkhamSpeedrunningWiki.github.io/master/' + fileName, function(data){
		data = ProcessLinks(data);
		data = ProcessNewLines(data);
		target.innerHTML = converter.makeHtml(data);
	});
}