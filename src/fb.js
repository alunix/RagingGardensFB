define(function() {

    return {
        load : function(name, req, onLoad, config) {
            
            window.fbAsyncInit = function() {
                // init the FB JS SDK
                FB.init({
                  appId      : '', // App ID from the App Dashboard
                  channelUrl : 'https://c9.io/petarov/raginggardensfb' + '/channel.html', //WWW.YOUR_DOMAIN.COM/channel.html', // Channel File for x-domain communication
                  status     : true, // check the login status upon init?
                  cookie     : true, // set sessions cookies to allow your server to access the session?
                  xfbml      : true  // parse XFBML tags on this page?
                });
                
                // Additional initialization code such as adding Event Listeners goes here
                onLoad(FB);
            };
            
            (function(d, debug){
                var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement('script'); js.id = id; js.async = true;
                js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
                ref.parentNode.insertBefore(js, ref);
            }(document, /*debug*/ false));           
        
        }
    };

});