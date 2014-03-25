//$(document).ready(function () {
//document.getElementById=('myOffer').innerHTML = 'test';
	
	
    /*$('#myVideo').click(function(){
       // document.write("<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/watch?v=JtElLz_HaLY\" frameborder=\"0\" allowfullscreen></iframe>");
        });
        //var myVideo = VideoDB.query(url:currentURL) //this */
    currentUrl = function() {
		var tabURL;
        chrome.tabs.getSelected(null,function(tab) {
            return tab.url;
            console.log('inside '+tabURL);
            });
            console.log('outside '+tabURL);
         //return tabURL;
        };
        
    
    /*function settupTopThree(){
        myUrl = currentUrl();
        myTopThreeVids = myVidSelector(myUrl);
        return myTopThreeVids;
        }*/
    function myVidSelector(url){
		console.log('we are testing the url '+url);
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
/*	function embedVideo(tabURL){
	    vidURL = myVidSelector(tabURL);
	    document.write("<iframe width=\"420\" height=\"315\" src=\"" + vidURL + "\" frameborder=\"0\" allowfullscreen></iframe>");//this method of adding videos is not preferred by current browser architecture.
    	}*/
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
          videoId: getVideoID(),//'M7lc1UVf-VE',
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





//});
