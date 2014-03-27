//$(document).ready(function () {
// I haven't turned on jquery yet....
//}); //this is the end of the jquery function

var currentURL;
chrome.tabs.getSelected(null, function(tab) {
    currentURL = tab.url; 
    console.log(currentURL);   
    });   

    function myVidSelector(){
    	//currently, myVidSelector only returns 1 video per url, and only has 1 url. In the future, it will retrieve multiple vidID's froma  DB full of urls. The DB will be able to be updated by users.
		
        switch(currentURL){
            case 'https://en.wikipedia.org/wiki/Charlie_Resnick':
                return 'DcN9YG77wRA';
            case 'http://www.w3schools.com/js/default.asp':
                return 'oLDGVa8xte8';
            default:
                return 'Sorry, no one has made a video yet. Upload your own now!';
            }
		}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/* getHtmlContent will capture the html of the current page visible by users tab
 * 
 * myParser will parse for data throughout the html gathered by getHtmlContent (first we will try and capture <title>**WHATEVER**</title>
 * */
 
 function getHtmlContent(){
 
 }


////////////////////////////////////////////////////////////////
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
          videoId: myVidSelector(),//'M7lc1UVf-VE', // I want this to be a dynamic variable
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





