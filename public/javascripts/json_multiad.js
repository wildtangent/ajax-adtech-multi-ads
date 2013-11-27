$(function(){
  
  // Load ads with AJAX
  var loadAds = function(){
    
    // Set the adgroupid for some reason
    if (window.adgroupid == undefined) {
    	window.adgroupid = Math.round(Math.random() * 1000);
    }
    
    // Define the ad server request
    // Default example from the docs
    //var adRequestUrl = "http://adserver.adtech.de/multiad/3.0/25/0/0/-1/ADTECH;mode=json;cors=yes;asfunc=1;plcids=2154536,2130496,2130497;loc=100;target=_blank;grp=" + window.adgroupid + ";cookie=info;misc=" + new Date().getTime();
   
    // Our Aliases, very simple for now, add more to the array if needed
    aliases = [
      'leaderboard_1_homepage_whitelines'
    ]
  
    var adRequestUrl = "http://adserver.adtech.de/multiad/3.0/1299.1/0/0/-1/ADTECH;mode=json;cors=yes;alias=" + aliases.join(",")  + ";loc=100;target=_blank;grp=" + window.adgroupid + ";misc=" + new Date().getTime(); 
    
    // Make the AJAX request
    $.ajax({
      url: adRequestUrl, 
      dataType: "json",
      method: "get",
      cache: false,
      crossdomain: true,
      success:  function(data, status, xhr){
        
        // Loop through each ad unit
        $.each(data.ADTECH_MultiAd, function(i, item){
          var adSlot = "#ad_" + (i + 1);
          
          // Wrap the ad tag in a script tag so it gets processed correctly
          var adTag = "<script type='text/javascript'>" + item.Ad.AdCode + "</script>";
          
          // Process with postscribe
          postscribe(adSlot, adTag)
        })
      }
    });
  }
  
  // Bind the reload button event
  var bindReload = function(){
    $("a#reload").on("click", function(e){

      e.preventDefault();
      $('#ad_1, #ad_2, #ad_3, #ad_4, #ad_5, #ad_6, #ad_7, #ad_8, #ad_9, #ad_10').html("");
      loadAds();
    })
  }
  bindReload();
  
  // Just setting a delay so you can see the Async working
  setTimeout(loadAds, 1000);
    
})