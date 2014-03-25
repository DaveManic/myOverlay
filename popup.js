//$(document).ready(function () {
// I haven't turned on jquery yet....

    currentUrl = function() {
		var tabURL;// this is supposed to make the variable tabURL exist outside of the chrom.tabs.getSelected function
        chrome.tabs.getSelected(null,function(tab) {
            tabURL = tab.url;// this is SUPPOSED to set tabURL to tab.url
            console.log('inside '+tabURL);//tabURL prints here
            });
            console.log('outside '+tabURL);//tabURL does NOT print here
            return tabURL; //a string is not returned
        };
        
    
    /*function settupTopThree(){
    //This function is supposed to select from a series of videos returned by myVidSelector. 
        myUrl = currentUrl();
        myTopThreeVids = myVidSelector(myUrl);
        return myTopThreeVids;
        }*/
    function myVidSelector(url){
    	//currently, myVidSelector only returns 1 video per url, and only has 1 url. In the future, it will retrieve multiple vidID's froma  DB full of urls. The DB will be able to be updated by users.
		console.log('we are testing the url '+url);//tests to see if url is passed along to myVidSelector
        switch(url){
            case 'https://en.wikipedia.org/wiki/Charlie_Resnick':
                return 'DcN9YG77wRA';
            case 'http://www.w3schools.com/js/default.asp':
                return 'oLDGVa8xte8';
            default:
                return 'Sorry, no one has made a video yet. Upload your own now!';
            }
		}
	function getVideoID(){
		console.log(currentUrl());
		var url = currentUrl();
		console.log(url);
		var vidID = myVidSelector(url);
		console.log(vidID);
		return vidID;
	};	
	/*see this http://stackoverflow.com/questions/17001191/youtube-api-player-chrome-extension
	 * 	and https://developers.google.com/youtube/iframe_api_reference
     * http://stackoverflow.com/questions/18990317/showing-a-youtube-video-in-a-google-chrome-extension
     * http://stackoverflow.com/questions/17601615/the-chrome-extension-popup-is-not-working-click-events-are-not-handled/17612988#17612988*/	
////////////////////////////////////////////////////////////////
////////////////////////A LOT OF THE FOLLOWING IS COPPIED DIRECTLY FROM GOOGLE
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: getVideoID(),//'M7lc1UVf-VE', // I want this to be a dynamic variable
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }





//}); //this is the end of the jquery function
