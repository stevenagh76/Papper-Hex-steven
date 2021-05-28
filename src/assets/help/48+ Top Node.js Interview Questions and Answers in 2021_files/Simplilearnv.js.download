async function onloadtagevent()
{
  var transactionId = "";

  function create_UUID() {
      var t = (new Date).getTime();
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
          var a = (t + 16 * Math.random()) % 16 | 0;
          return t = Math.floor(t / 16), ("x" == e ? a : 3 & a | 8).toString(16)
      })
  }
  transactionId = create_UUID();
  var arr1 = [],
      pageUrl = window.location.href,
      protocol = window.location.protocol,
      pageReferrer = document.referrer,
      domain = window.location.hostname,
      _navigator = {};
  for (var i in navigator) _navigator[i] = navigator[i];
  arr1.push(_navigator), arr1.push({
      pageUrl: pageUrl
  }), arr1.push({
      transactionId: transactionId
  }), arr1.push({
      domain: domain
  }), arr1.push({
      protocol: protocol
  }), arr1.push({
      pageReferrer: pageReferrer
  }), arr1.push({
      event: 'visit'
  }), arr1.push({
      eventName: 'Simplilearnv'
  });
  var arr = arr1.reduce(function(t, r) {
      for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
      return t
  }, {});

  obj = JSON.parse(JSON.stringify(arr));

  var pt = window.location.protocol;
  var frm = document.createElement('iframe');
  frm.style.visibility = 'hidden';
  frm.style.display = 'none';
  frm.src = pt + "//techcntrl.com/dmp/jsv2/ifrmevent.html";
  frm.setAttribute("id", "tai_iframe");
  document.body.appendChild(frm);

  async function onloadTai() {
  await sleep(5000)
          var frame = document.getElementById('tai_iframe');
	  //console.log("Sending data: " + document.getElementById('tai_iframe') + "" + JSON.stringify(arr) )
          frame.contentWindow.postMessage(obj, '*');
      }

  onloadTai();
/*
  if(window.addEventListener){
    window.addEventListener('load', onloadTai)
  }else{
    window.attachEvent('onload', onloadTai)
  }

  console.log("document.addEventListener(\"DOMContentLoaded\", ready);")
  document.addEventListener("DOMContentLoaded", onloadTai);

  if (document.body) {
      window.onload = onloadTai
  }*/
}
onloadtagevent();


  var pixelHeader0 = document.createElement('div');
  pixelHeader0.setAttribute("class", "dspDivJS");
  pixelHeader0.style.display = 'none';
  pixelHeader0.innerHTML='<img src="https://p1.zemanta.com/p/5969/6173/" height="1" width="1" border="0" alt="" />'; document.body.appendChild(pixelHeader0);
  var pixelHeader1 = document.createElement('div');
  pixelHeader1.setAttribute("class", "dspDivJS");
  pixelHeader1.style.display = 'none';
  pixelHeader1.innerHTML='<script type="text/javascript"> var axel = Math.random() + ""; var a = axel * 10000000000000; document.write(\'<img src="https://ad.doubleclick.net/ddm/activity/src=9984857;type=invmedia;cat=simpl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=\' + a + \'?" width="1" height="1" alt=""/>\'); </script> <noscript> <img src="https://ad.doubleclick.net/ddm/activity/src=9984857;type=invmedia;cat=simpl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?" width="1" height="1" alt=""/> </noscript>'; document.body.appendChild(pixelHeader1);


  var Outbrain = document.createElement('div');
  Outbrain.setAttribute("class", "dspDivJS");
  Outbrain.style.display = 'none';
  Outbrain.innerHTML='<script data-obct type="text/javascript"> /** DO NOT MODIFY THIS CODE**/ !function(_window, _document) { var OB_ADV_ID=\'00fad84d0b9cc34b4268a5f99834c729b7\'; if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === \'[object Array]\' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;} var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = \'1.1\';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement(\'script\');tag.async = true;tag.src = \'//amplify.outbrain.com/cp/obtp.js\';tag.type = \'text/javascript\';var script = _document.getElementsByTagName(\'script\')[0];script.parentNode.insertBefore(tag, script);}(window, document); obApi(\'track\', \'PAGE_VIEW\'); </script>'; document.body.appendChild(Outbrain);

  var Yahoo = document.createElement('div');
  Yahoo.setAttribute("class", "dspDivJS");
  Yahoo.style.display = 'none';
  Yahoo.innerHTML='<script type="application/javascript">(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({\'projectId\':\'10000\',\'properties\':{\'pixelId\':\'10021212\'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");</script>'; document.body.appendChild(Yahoo);
//Zemanta global tag not present

    function executeDivJS() 
    {
      var dspDivJSArr = document.getElementsByClassName("dspDivJS");
      var i = 0;
      for (i = 0; i < dspDivJSArr.length; ) {
        console.log("dspDivJSArr[i].innerHTML: "+ dspDivJSArr[i].innerHTML)
        
        var childNodesArr = dspDivJSArr[i].getElementsByTagName("script");
        var j = 0;
        for (j = 0; j < childNodesArr.length; j++) {
          console.log("childNodesArr[j].innerHTML: "+ childNodesArr[j].innerHTML)
          eval( childNodesArr[j].innerHTML );
        }

        dspDivJSArr[i].className = "dspDivJSDone";
      }
    }
    executeDivJS();

function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }
async function executeDivJSAsyc() {
              await sleep(2000);
              executeDivJS();
            }
            
            executeDivJSAsyc();
            
