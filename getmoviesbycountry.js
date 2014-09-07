var page = require('webpage').create();
//console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36";
page.settings.clearMemoryCaches = true
var country = phantom.args[0];

page.onLoadFinished = function(status) {
  console.log('Status: ' + status);
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
	  if (status !== 'success') { console.log('Unable to access network'); } 
	  else {
	    var ua = page.evaluate(function() { 
		return $("#extabar .klcc").html();
	    });
	    //console.log(ua);
	    var fs = require('fs');

	    var path = country + '.html';
	    var content = ua;
	    fs.write(path, content, 'w');	
	  }
	  phantom.exit();
  });
};

page.open(encodeURI('http://www.google.' + 'com' + '/search?q=' + country + ' best films'), function(status) { });
