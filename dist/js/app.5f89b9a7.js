(function(e){function t(t){for(var c,a,s=t[0],u=t[1],i=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0111":function(e,t,n){e.exports=n.p+"img/11n.b9ee5038.svg"},"101c":function(e,t,n){e.exports=n.p+"img/09n.bc016c3b.svg"},2200:function(e,t,n){e.exports=n.p+"img/03d.82408b66.svg"},"28ee":function(e,t,n){},"2ac9":function(e,t,n){e.exports=n.p+"img/02n.7c36f2b5.svg"},"3cbf":function(e,t,n){e.exports=n.p+"img/13d.10a793eb.svg"},"44cd":function(e,t,n){"use strict";n("28ee")},"508f":function(e,t,n){"use strict";n("9e12")},5243:function(e,t,n){e.exports=n.p+"img/11d.42698e35.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"wrapper",class:"animate__animated animate__fadeIn"};function o(e,t,n,o,a,s){var u=Object(c["l"])("weather"),i=Object(c["l"])("date-and-time"),f=Object(c["l"])("user-settings"),l=Object(c["l"])("google-search-bar");return Object(c["f"])(),Object(c["c"])("div",r,[Object(c["e"])(u),Object(c["e"])(i),Object(c["e"])(f),Object(c["e"])(l)])}var a=Object(c["r"])("data-v-2c4eb0fc");Object(c["h"])("data-v-2c4eb0fc");var s={class:"date"},u={class:"time"},i=Object(c["e"])("li",{class:"seperator"},":",-1),f=Object(c["e"])("li",{class:"seperator"},":",-1);Object(c["g"])();var l=a((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])(c["a"],null,[Object(c["e"])("h1",s,Object(c["m"])(r.state.date.date)+", "+Object(c["m"])(r.state.date.day)+" "+Object(c["m"])(r.state.date.month),1),Object(c["e"])("ul",u,[Object(c["e"])("li",null,Object(c["m"])(r.state.time.hour),1),i,Object(c["e"])("li",null,Object(c["m"])(r.state.time.minute),1),f,Object(c["e"])("li",null,Object(c["m"])(r.state.time.second),1)])],64)})),p=(n("fb6a"),["January","February","March","April","May","June","July","August","September","October","November","December"]),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g={name:"DateAndTime",setup:function(){var e=Object(c["i"])({time:{hour:"",minute:"",second:""},date:{date:"",day:"",month:""}});function t(e){for(var t="",n=0;n<2;n++)t+="0";return(t+e).slice(-2)}function n(){var n=new Date;e.time.hour="".concat(t(n.getHours())),e.time.minute="".concat(t(n.getMinutes())),e.time.second="".concat(t(n.getSeconds())),e.date.date="".concat(d[n.getDay()]),e.date.day="".concat(n.getDate()),e.date.month="".concat(p[n.getMonth()])}setInterval(n,1e3);return n(),{state:e}}};n("508f");g.render=l,g.__scopeId="data-v-2c4eb0fc";var b=g,h=(n("9911"),{class:"searchWrapper"}),O={id:"googleSearch",onsubmit:"return false"},v={class:"searchSuggestions"};function m(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("div",h,[Object(c["e"])("form",O,[Object(c["o"])(Object(c["e"])("input",{id:"googleSearchBar",type:"text",autocomplete:"off",placeholder:"Search here...","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.state.searchText=e}),onInput:t[2]||(t[2]=function(){return r.retrieveQueries&&r.retrieveQueries.apply(r,arguments)}),class:{enabled:r.state.enabled},onKeydown:[t[3]||(t[3]=Object(c["p"])((function(){return r.inputDown&&r.inputDown.apply(r,arguments)}),["down"])),t[4]||(t[4]=Object(c["p"])(Object(c["q"])((function(){return r.inputUp&&r.inputUp.apply(r,arguments)}),["prevent"]),["up"])),t[5]||(t[5]=Object(c["p"])((function(){return r.enterInput&&r.enterInput.apply(r,arguments)}),["enter"]))],ref:"input"},null,34),[[c["n"],r.state.searchText]])]),Object(c["e"])("ul",v,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["k"])(r.state.queries,(function(e,t){return Object(c["f"])(),Object(c["c"])("li",{ref:"arrowKeys",key:e.query,class:{focused:t==r.state.focus}},[Object(c["e"])("a",{href:e.link},Object(c["m"])(e.query),9,["href"])],2)})),128))])])}n("b64b"),n("d3b7"),n("ac1f"),n("5319");var j={name:"GoogleSearch",setup:function(){var e=Object(c["i"])({searchText:"",enabled:!1,focus:null,queries:{}});function t(){e.focus=null,fetch("https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=".concat(e.searchText)).then((function(e){return e.json()})).then((function(t){t=JSON.parse(JSON.stringify(t));for(var n={},c=0;t[1].length<4?c<t[1].length:c<4;c++)n[c]={query:t[1][c],type:t[4]["google:suggesttype"][c],link:"NAVIGATION"==t[4]["google:suggesttype"][c]?t[1][c]:"https://www.google.co.uk/search?q="+encodeURI(t[1][c])};e.enabled=!!e.searchText.replace(/\s/g,"").length,e.queries=n})).catch((function(e){console.error(e)}))}function n(){e.searchText=e.queries[e.focus].query}function r(){e.searchText.replace(/\s/g,"").length?null==e.focus?(e.focus=0,n()):e.focus<Object.keys(e.queries).length-1?(e.focus++,n()):e.focus==Object.keys(e.queries).length-1&&(e.focus=0,n()):e.focus=null}function o(){e.searchText.replace(/\s/g,"").length?null==e.focus?(e.focus=0,n()):e.focus>0?(e.focus--,n()):0==e.focus&&(e.focus=Object.keys(e.queries).length-1,n()):e.focus=null}function a(){if(null==e.focus){if(!e.searchText.replace(/\s/g,"").length)return;window.open("https://www.google.co.uk/search?q=".concat(e.searchText),"_self")}else window.open(e.queries[e.focus].link,"_self")}return window.onload=function(){document.getElementById("googleSearchBar").focus()},{state:e,retrieveQueries:t,inputDown:r,inputUp:o,enterInput:a}}};n("e015");j.render=m;var w=j,y=Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 24 24"},[Object(c["e"])("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})],-1),x={key:0,class:"userSettings animate__animated animate__fadeInDown animate__faster"},k=Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(c["e"])("path",{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"})])],-1),_=Object(c["e"])("h1",{class:"progress"},"Currently in progress, come back later!",-1);function S(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])(c["a"],null,[Object(c["e"])("button",{class:"togglePreferences",onClick:t[1]||(t[1]=function(){return r.toggleClicked&&r.toggleClicked.apply(r,arguments)})},[y]),r.preferencesOn?(Object(c["f"])(),Object(c["c"])("div",x,[Object(c["e"])("button",{class:"closeSettings",onClick:t[2]||(t[2]=function(){return r.toggleClicked&&r.toggleClicked.apply(r,arguments)})},[k]),_])):Object(c["d"])("",!0)],64)}var q={name:"UserSettings",setup:function(){Object(c["i"])({});var e=Object(c["j"])(!1);function t(){e.value=!e.value}return{toggleClicked:t,preferencesOn:e}}};n("a24f");q.render=S;var T=q,I=(n("a4d3"),n("e01a"),Object(c["r"])("data-v-f21b8296"));Object(c["h"])("data-v-f21b8296");var M={id:"weather"},D={class:"icon"},C={class:"main"},U={class:"temperature"},P={class:"description"},B={class:"location"};Object(c["g"])();var J=I((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("div",M,[Object(c["e"])("div",D,[Object(c["e"])("img",{src:r.state.weatherOutput.icon,alt:"image to show weather"},null,8,["src"])]),Object(c["e"])("h2",C,Object(c["m"])(r.state.weatherOutput.main),1),Object(c["e"])("h2",U,Object(c["m"])(r.state.weatherOutput.temp)+"°",1),Object(c["e"])("p",P,Object(c["m"])(r.state.weatherOutput.description),1),Object(c["e"])("p",B,Object(c["m"])(r.state.weatherOutput.city)+", "+Object(c["m"])(r.state.weatherOutput.country),1)])})),N=(n("99af"),n("b0c0"),{name:"Weather",setup:function(){var e=Object(c["i"])({weatherOutput:{city:"",country:"",temp:"",main:"",description:"",icon:""}});function t(e){return e.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}function r(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat("Widnes","&appid=").concat("726d30084c9c84a49cfbe222a43329e8","&units=").concat("Metric")).then((function(e){return e.json()})).then((function(c){Object.assign(e.weatherOutput,{city:c.name},{country:c.sys.country},{temp:Math.floor(c.main.temp)},{main:c.weather[0].main},{description:t(c.weather[0].description)},{icon:n("63cb")("./".concat(c.weather[0].icon,".svg"))})})).catch((function(e){console.error(e)}))}setInterval(r,3e5);return r(),{state:e}}});n("44cd");N.render=J,N.__scopeId="data-v-f21b8296";var A=N,W={components:{DateAndTime:b,GoogleSearchBar:w,Weather:A,UserSettings:T},setup:function(){}};n("ed98");W.render=o;var z=W;Object(c["b"])(z).mount("#app")},"5a60":function(e,t,n){e.exports=n.p+"img/10n.86f986fc.svg"},"5f82":function(e,t,n){e.exports=n.p+"img/50n.7f68f0ff.svg"},"63cb":function(e,t,n){var c={"./01d.svg":"a6f7","./01n.svg":"76d8","./02d.svg":"dc1e","./02n.svg":"2ac9","./03d.svg":"2200","./03n.svg":"be4e","./04d.svg":"ad1a","./04n.svg":"d77d","./09d.svg":"dc5c","./09n.svg":"101c","./10d.svg":"e903","./10n.svg":"5a60","./11d.svg":"5243","./11n.svg":"0111","./13d.svg":"3cbf","./13n.svg":"dcf7","./50d.svg":"f7eb","./50n.svg":"5f82"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="63cb"},"76d8":function(e,t,n){e.exports=n.p+"img/01n.f86c33c4.svg"},8960:function(e,t,n){},"9e12":function(e,t,n){},a24f:function(e,t,n){"use strict";n("c40d")},a6f7:function(e,t,n){e.exports=n.p+"img/01d.4b9869a6.svg"},ad1a:function(e,t,n){e.exports=n.p+"img/04d.2d0410c5.svg"},be4e:function(e,t,n){e.exports=n.p+"img/03n.82408b66.svg"},c40d:function(e,t,n){},d756:function(e,t,n){},d77d:function(e,t,n){e.exports=n.p+"img/04n.2d0410c5.svg"},dc1e:function(e,t,n){e.exports=n.p+"img/02d.3237f7da.svg"},dc5c:function(e,t,n){e.exports=n.p+"img/09d.ac93e407.svg"},dcf7:function(e,t,n){e.exports=n.p+"img/13n.10a793eb.svg"},e015:function(e,t,n){"use strict";n("8960")},e903:function(e,t,n){e.exports=n.p+"img/10d.8ea1ac4e.svg"},ed98:function(e,t,n){"use strict";n("d756")},f7eb:function(e,t,n){e.exports=n.p+"img/50d.493be2a8.svg"}});
//# sourceMappingURL=app.5f89b9a7.js.map