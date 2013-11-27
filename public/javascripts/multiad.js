var wcScriptInterval_3703727_UID;
if (typeof adtAsync_isLoading === 'undefined') { var adtAsync_isLoading = false; }

if (window.adgroupid == undefined) { 
  window.adgroupid = Math.round(Math.random() * 1000); 
}

function initAdtech() {
  if (typeof writeCapture === 'undefined') {
    if (adtAsync_isLoading === false) {
    	adtAsync_isLoading = true;
    	var wcScript = document.createElement('script');
      wcScript.setAttribute('type', 'text/javascript');
    	wcScript.setAttribute('src', 'http://aka-cdn.adtech.de/rm/lib/writeCapture/writeCapture-1.0.5-nolib-min.js');
      document.getElementById('asyncPlaceholder_3703727_UID').appendChild(wcScript);
    }
    wcScriptInterval_3703727_UID = setInterval(loadAllAds, 100);
  } else {
    loadAllAds();
  }
}

function loadAllAds(){
  loadAdtech_3703727_UID();
  loadAdtech_3703686_UID();
  loadAdtech_3703659_UID();
  loadAdtech_3703698_UID();
}


function loadAdtech_3703727_UID() {
  if (typeof writeCapture !== 'undefined') {
    clearInterval(wcScriptInterval_3703727_UID);
    adtAsync_isLoading = false;
    writeCapture.writeOnGetElementById = true;
    var adTagString = '<script type="text/javascript" src="http://adserver.adtech.de/addyn/3.0/1299.1/3703727/0/225/ADTECH;loc=100;target=_blank;alias=leaderboard_1_videos_whitelines;grp='+window.adgroupid+';misc='+new Date().getTime()+';"><\/script>';
    writeCapture.html('#ad_1', adTagString);
  }
}

function loadAdtech_3703698_UID() {
  if (typeof writeCapture !== 'undefined') {
    clearInterval(wcScriptInterval_3703727_UID);
    adtAsync_isLoading = false;
    writeCapture.writeOnGetElementById = true;
    var adTagString = '<script type="text/javascript" src="http://adserver.adtech.de/addyn/3.0/1299.1/3703698/0/225/ADTECH;loc=100;target=_blank;key=key1+key2+key3+key4;alias=leaderboard_2_videos_whitelines;sub1=[subst];grp='+window.adgroupid+';misc='+new Date().getTime()+';"><\/script>';
    writeCapture.html('#ad_2', adTagString);
  }
}

function loadAdtech_3703659_UID() {
  if (typeof writeCapture !== 'undefined') {
    clearInterval(wcScriptInterval_3703727_UID);
    adtAsync_isLoading = false;
    writeCapture.writeOnGetElementById = true;
    var adTagString = '<script type="text/javascript" src="http://adserver.adtech.de/addyn/3.0/1299.1/3703659/0/170/ADTECH;loc=100;target=_blank;key=key1+key2+key3+key4;alias=mpu_1_videos_whitelines;sub1=[subst];grp='+window.adgroupid+';misc='+new Date().getTime()+';"><\/script>';
    writeCapture.html('#ad_3', adTagString);
  }
}

function loadAdtech_3703686_UID() {
  if (typeof writeCapture !== 'undefined') {
    clearInterval(wcScriptInterval_3703727_UID);
    adtAsync_isLoading = false;
    writeCapture.writeOnGetElementById = true;
    var adTagString = '<script type="text/javascript" src="http://adserver.adtech.de/addyn/3.0/1299.1/3703686/0/170/ADTECH;loc=100;target=_blank;key=key1+key2+key3+key4;alias=mpu_2_videos_whitelines;sub1=[subst];grp='+window.adgroupid+';misc='+new Date().getTime()+';"><\/script>';
    writeCapture.html('#ad_4', adTagString);
  }
}

initAdtech();