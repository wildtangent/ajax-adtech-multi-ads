$(function(){
  
  var loadAds = function(){
    if (window.adgroupid == undefined) {
    	window.adgroupid = Math.round(Math.random() * 1000);
    }
    var adRequestUrl = "http://adserver.adtech.de/multiad/3.0/25/0/0/-1/ADTECH;mode=json;cors=yes;plcids=2154536,2130496,2130497;loc=100;target=_blank;grp=" + window.adgroupid + ";cookie=info;misc=" + new Date().getTime();
    
    $.ajax({
      url: adRequestUrl, 
      dataType: "json",
      method: "get",
      cache: false,
      crossdomain: true,
      success:  function(data, status, xhr){
        $.each(data.ADTECH_MultiAd, function(i, item){
          var adSlot = "#ad_" + (i + 1);
          var adTag = "<script>" + item.Ad.AdCode + "</script>";
          postscribe(adSlot, adTag, {
            beforeWrite: function(str){
             $(adSlot).html("");
             return str;
            }
          });
        })
      }
    });
  }
  
  var bindReload = function(){
    $("a#reload").on("click", function(e){

      e.preventDefault();
      $('#ad_1, #ad_2, #ad_3').html("");
      loadAds();
    })
  }
  
  
  // Just setting a delay so you can see the Async working
  bindReload();
  setTimeout(loadAds, 1000);
  
  
  
})