function getCurrentTabUrl(callback) {

  chrome.tabs.query({ active: true, currentWindow: true	}, function(tabs) {
	    var tabURL = tabs[0].url;
	    console.log('tabURL', tabs[0].slit('.com'));
	});
}

document.getElementById('status').addEventListener('click', getCurrentTabUrl);