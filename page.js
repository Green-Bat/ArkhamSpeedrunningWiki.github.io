function IsYouTubeLink(text){
	return text.includes('youtube') || text.includes('youtu.be');
}

function IsTwitchLink(text){
	return text.includes('twitch.tv');
}

function ProcessLinks(text){
	var newText = text;

	var result = URI.withinString(text, function(url){
		if(IsYouTubeLink(url)){
			var newUrl = url;
			
			if(url.includes('&')){
				newUrl = url.substr(0, url.lastIndexOf('&'));
			}
			
			if(newUrl.includes('watch?v=')){
				newUrl = newUrl.replace('watch?v=', 'embed/');
			}else if(url.includes('youtu.be')){
				newUrl = newUrl.replace('youtu.be/', 'youtube.com/embed/');
			}
			
			newText = newText.replace(url, '<iframe width="720" height="480" src=' + newUrl + '></iframe>');
		}else if(IsTwitchLink(url) && !url.includes('/p/')){
			var newURL = url.substring(url.lastIndexOf('/') + 1);
			newText = newText.replace(url, '<iframe width="720" height="480" src=https://player.twitch.tv/?video=' + newURL + '&autoplay=false></iframe>');
		}
	});

	return newText;
}

function LoadMarkdown(){
	var url = new URL(window.location.href);
	var fileName = url.searchParams.get("page");
	
	if(fileName == null){
		return;
	}
	
	var target = document.getElementById('targetDiv');
	var converter = new showdown.Converter();
	converter.setFlavor('github');
	
	jQuery.get('https://raw.githubusercontent.com/ArkhamSpeedrunningWiki/ArkhamSpeedrunningWiki.github.io/master/' + fileName + '.md', function(data){
		data = ProcessLinks(data);
		data = converter.makeHtml(data);
		target.innerHTML = "<div class=main-panel>" + data + "</div>";
	});
}