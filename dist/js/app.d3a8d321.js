(function(e){function t(t){for(var n,r,l=t[0],i=t[1],u=t[2],g=0,p=[];g<l.length;g++)r=l[g],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},c=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0111":function(e,t,o){e.exports=o.p+"img/11n.b9ee5038.svg"},"0ed9":function(e,t,o){},"101c":function(e,t,o){e.exports=o.p+"img/09n.bc016c3b.svg"},"14c8":function(e,t,o){"use strict";o("2799")},2200:function(e,t,o){e.exports=o.p+"img/03d.82408b66.svg"},2799:function(e,t,o){},"2ac9":function(e,t,o){e.exports=o.p+"img/02n.7c36f2b5.svg"},"3cbf":function(e,t,o){e.exports=o.p+"img/13d.10a793eb.svg"},"3f8b":function(e,t,o){},"468d":function(e,t,o){"use strict";o("96e9")},5243:function(e,t,o){e.exports=o.p+"img/11d.42698e35.svg"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),a={id:"wrapper",class:"animate__animated animate__fadeIn"};function c(e,t,o,c,r,l){var i=Object(n["l"])("weather"),u=Object(n["l"])("date-and-time"),s=Object(n["l"])("user-settings"),g=Object(n["l"])("google-search-bar"),p=Object(n["l"])("bookmarks");return Object(n["f"])(),Object(n["c"])("div",a,[Object(n["e"])(i),Object(n["e"])(u),Object(n["e"])(s),Object(n["e"])(g),Object(n["e"])(p)])}o("4fad");var r=o("3835"),l=Object(n["s"])("data-v-2939930c");Object(n["h"])("data-v-2939930c");var i={class:"wrapper"},u={class:"time"};Object(n["g"])();var s=l((function(e,t,o,a,c,r){return Object(n["f"])(),Object(n["c"])("div",i,[Object(n["e"])("h1",{class:"date",style:{color:a.state.config.dateColour,fontFamily:a.state.config.dateFont}},Object(n["m"])(a.state.date.date)+", "+Object(n["m"])(a.state.date.day)+" "+Object(n["m"])(a.state.date.month),5),Object(n["e"])("ul",u,[Object(n["e"])("li",{style:{color:a.state.config.timeColour,fontFamily:a.state.config.timeFont}},Object(n["m"])(a.state.time.hour),5),Object(n["e"])("li",{class:"seperator",style:{color:a.state.config.timeSeperator}},":",4),Object(n["e"])("li",{style:{color:a.state.config.timeColour,fontFamily:a.state.config.timeFont}},Object(n["m"])(a.state.time.minute),5),Object(n["e"])("li",{class:"seperator",style:{color:a.state.config.timeSeperator}},":",4),Object(n["e"])("li",{style:{color:a.state.config.timeColour,fontFamily:a.state.config.timeFont}},Object(n["m"])(a.state.time.second),5)])])})),g=(o("fb6a"),["January","February","March","April","May","June","July","August","September","October","November","December"]),p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f={dateColour:"#88c0d0",timeSeperator:"#88c0d0",timeColour:"#d8dee9",dateFont:"Quicksand",timeFont:"Roboto Mono"},d={name:"DateAndTime",setup:function(){var e=Object(n["i"])({time:{hour:"",minute:"",second:""},date:{date:"",day:"",month:""},config:JSON.parse(localStorage.getItem("DateAndTime"))});function t(){for(var e={},t=Object.entries(f),o=0,n=t;o<n.length;o++){var a=Object(r["a"])(n[o],2),c=a[0],l=a[1];e[c]=l}localStorage.setItem("DateAndTime",JSON.stringify(e))}function o(){JSON.stringify(e.config)!==localStorage.getItem("DateAndTime")&&(e.config=JSON.parse(localStorage.getItem("DateAndTime")))}function a(){var t=new Date;function o(e){for(var t="",o=0;o<2;o++)t+="0";return(t+e).slice(-2)}e.time.hour="".concat(o(t.getHours())),e.time.minute="".concat(o(t.getMinutes())),e.time.second="".concat(o(t.getSeconds())),e.date.date="".concat(p[t.getDay()]),e.date.day="".concat(t.getDate()),e.date.month="".concat(g[t.getMonth()])}return null==localStorage.getItem("DateAndTime")&&t(),setInterval(o,1e3),o(),setInterval(a,1e3),a(),{state:e}}};o("14c8");d.render=s,d.__scopeId="data-v-2939930c";var b=d,m=(o("9911"),Object(n["s"])("data-v-21e68db7"));Object(n["h"])("data-v-21e68db7");var O={class:"searchWrapper"},j={id:"googleSearch",onsubmit:"return false"},k={class:"searchSuggestions"};Object(n["g"])();var h=m((function(e,t,o,a,c,r){return Object(n["f"])(),Object(n["c"])("div",O,[Object(n["e"])("form",j,[Object(n["p"])(Object(n["e"])("input",{id:"googleSearchBar",type:"text",autocomplete:"off",placeholder:"Search here...","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.state.searchText=e}),onInput:t[2]||(t[2]=function(){return a.retrieveQueries&&a.retrieveQueries.apply(a,arguments)}),class:{enabled:a.state.enabled},onKeydown:[t[3]||(t[3]=Object(n["q"])((function(){return a.inputDown&&a.inputDown.apply(a,arguments)}),["down"])),t[4]||(t[4]=Object(n["q"])(Object(n["r"])((function(){return a.inputUp&&a.inputUp.apply(a,arguments)}),["prevent"]),["up"])),t[5]||(t[5]=Object(n["q"])((function(){return a.enterInput&&a.enterInput.apply(a,arguments)}),["enter"]))],ref:"input",style:{backgroundColor:a.state.config.barBg,fontFamily:a.state.config.barFont}},null,38),[[n["o"],a.state.searchText]])]),Object(n["e"])("ul",k,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["k"])(a.state.queries,(function(e,t){return Object(n["f"])(),Object(n["c"])("li",{ref:"arrowKeys",key:e.query,class:{focused:t==a.state.focus}},[Object(n["e"])("a",{href:e.link},Object(n["m"])(e.query),9,["href"])],2)})),128))])])})),C=(o("b64b"),o("d3b7"),o("ac1f"),o("5319"),{barBg:"#434c5e",barFont:"Quicksand",searchSuggestions:"4"}),y={name:"GoogleSearch",setup:function(){window.onload=function(){document.getElementById("googleSearchBar").focus()};var e=Object(n["i"])({searchText:"",enabled:!1,focus:null,queries:{},config:JSON.parse(localStorage.getItem("GoogleSearchBar"))});function t(){for(var e={},t=Object.entries(C),o=0,n=t;o<n.length;o++){var a=Object(r["a"])(n[o],2),c=a[0],l=a[1];e[c]=l}localStorage.setItem("GoogleSearchBar",JSON.stringify(e))}function o(){JSON.stringify(e.config)!==localStorage.getItem("GoogleSearchBar")&&(e.config=JSON.parse(localStorage.getItem("GoogleSearchBar")))}function a(){e.focus=null,fetch("https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=".concat(e.searchText)).then((function(e){return e.json()})).then((function(t){t=JSON.parse(JSON.stringify(t));for(var o={},n=0;t[1].length<e.config.searchSuggestions?n<t[1].length:n<e.config.searchSuggestions;n++)o[n]={query:t[1][n],type:t[4]["google:suggesttype"][n],link:"NAVIGATION"==t[4]["google:suggesttype"][n]?t[1][n]:"https://www.google.co.uk/search?q="+encodeURI(t[1][n])};e.enabled=!!e.searchText.replace(/\s/g,"").length,e.queries=o})).catch((function(e){console.error(e)}))}function c(){e.searchText=e.queries[e.focus].query}function l(){e.searchText.replace(/\s/g,"").length?null==e.focus?(e.focus=0,c()):e.focus<Object.keys(e.queries).length-1?(e.focus++,c()):e.focus==Object.keys(e.queries).length-1&&(e.focus=0,c()):e.focus=null}function i(){e.searchText.replace(/\s/g,"").length?null==e.focus?(e.focus=0,c()):e.focus>0?(e.focus--,c()):0==e.focus&&(e.focus=Object.keys(e.queries).length-1,c()):e.focus=null}function u(){if(null==e.focus){if(!e.searchText.replace(/\s/g,"").length)return;window.open("https://www.google.co.uk/search?q=".concat(e.searchText),"_self")}else window.open(e.queries[e.focus].link,"_self")}return null==localStorage.getItem("GoogleSearchBar")&&(t(),location.reload()),setInterval(o,1e3),o(),{state:e,retrieveQueries:a,inputDown:l,inputUp:i,enterInput:u}}};o("5e75");y.render=h,y.__scopeId="data-v-21e68db7";var v=y,S=Object(n["e"])("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"},null,-1),w={key:0,class:"userSettings animate__animated animate__fadeInDown animate__faster"},B={class:"settingsBar"},I=Object(n["e"])("li",null,[Object(n["e"])("h1",{class:"settingsBarTitle"},"Settings")],-1),x=Object(n["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(n["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(n["e"])("path",{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"})])],-1),L={class:"userSettingsFrame"},T={class:"resetSettings"},U={class:"general"},F=Object(n["e"])("h1",{class:"settingsTitle"},"General",-1),N={class:"settingsModule"},W=Object(n["e"])("p",null,"Background Colour:",-1),D=Object(n["e"])("p",null,"Settings Wheel Colour:",-1),J={class:"dateAndTime"},_=Object(n["e"])("h1",{class:"settingsTitle"},"Date and Time",-1),M={class:"settingsModule"},V=Object(n["e"])("p",null,"Date Colour:",-1),A=Object(n["e"])("p",null,"Date Font:",-1),q=Object(n["e"])("p",null,"Time Colour:",-1),G=Object(n["e"])("p",null,"Time Font:",-1),P=Object(n["e"])("p",null,"Time Seperator Colour:",-1),R={class:"weather"},Q=Object(n["e"])("h1",{class:"settingsTitle"},"Weather",-1),E={class:"settingsModule"},z=Object(n["e"])("p",null,"Enable Weather Widget",-1),H=Object(n["e"])("p",null,"Background Colour",-1),K=Object(n["e"])("p",null,"Weather Icon Colour",-1),X=Object(n["e"])("p",null,"Weather Title Colour",-1),Y=Object(n["e"])("p",null,"Temperature Colour",-1),Z=Object(n["e"])("p",null,"Metric/Imperial",-1),$=Object(n["e"])("p",null,"Weather Description Colour",-1),ee=Object(n["e"])("p",null,"Location",-1),te=Object(n["e"])("p",null,"Location Colour",-1),oe=Object(n["e"])("p",null,"Font",-1),ne={class:"googleSearchBar"},ae=Object(n["e"])("h1",{class:"settingsTitle"},"Google Search Bar Settings",-1),ce={class:"settingsModule"},re=Object(n["e"])("p",null,"Search Bar Background",-1),le=Object(n["e"])("p",null,"Search Bar Font",-1),ie=Object(n["e"])("p",null,"Number of Search Suggestions",-1),ue={class:"bookmarks"},se=Object(n["e"])("h1",{class:"settingsTitle"},"Bookmarks Settings",-1),ge={class:"settingsModule"},pe=Object(n["e"])("p",null,"Show Bookmarks",-1),fe=Object(n["e"])("p",null,"Bookmark Background",-1),de=Object(n["e"])("p",null,"Bookmark Font",-1),be=Object(n["e"])("p",null,"Bookmark Text Colour",-1),me=Object(n["e"])("p",null,"Add Bookmark Background",-1),Oe=Object(n["e"])("p",null,"Add Bookmark Plus Colour",-1);function je(e,t,o,a,c,r){return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("button",{class:"togglePreferences",onClick:t[1]||(t[1]=function(){return a.toggleClicked&&a.toggleClicked.apply(a,arguments)})},[(Object(n["f"])(),Object(n["c"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 24 24",style:{fill:a.state.config.Settings.wheelColour}},[S],4))]),a.preferencesOn?(Object(n["f"])(),Object(n["c"])("div",w,[Object(n["e"])("ul",B,[I,Object(n["e"])("li",null,[Object(n["e"])("button",{class:"closeSettings",onClick:t[2]||(t[2]=function(){return a.toggleClicked&&a.toggleClicked.apply(a,arguments)})},[x])])]),Object(n["e"])("div",L,[Object(n["e"])("li",T,[Object(n["e"])("button",{class:"resetSettingsButton",onClick:t[3]||(t[3]=function(){return a.setSettingsToDefaults&&a.setSettingsToDefaults.apply(a,arguments)})},"Set To Defaults")]),Object(n["e"])("div",U,[F,Object(n["e"])("ul",N,[Object(n["e"])("li",null,[W,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.state.config.Main.backgroundColour=e}),onChange:t[5]||(t[5]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Main.backgroundColour]])]),Object(n["e"])("li",null,[D,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.state.config.Settings.wheelColour=e}),onChange:t[7]||(t[7]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Settings.wheelColour]])])])]),Object(n["e"])("div",J,[_,Object(n["e"])("ul",M,[Object(n["e"])("li",null,[V,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.state.config.DateAndTime.dateColour=e}),onChange:t[9]||(t[9]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.DateAndTime.dateColour]])]),Object(n["e"])("li",null,[A,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=function(e){return a.state.config.DateAndTime.dateFont=e}),onChange:t[11]||(t[11]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput"},null,544),[[n["o"],a.state.config.DateAndTime.dateFont]])]),Object(n["e"])("li",null,[q,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[12]||(t[12]=function(e){return a.state.config.DateAndTime.timeColour=e}),onChange:t[13]||(t[13]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.DateAndTime.timeColour]])]),Object(n["e"])("li",null,[G,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[14]||(t[14]=function(e){return a.state.config.DateAndTime.timeFont=e}),onChange:t[15]||(t[15]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput"},null,544),[[n["o"],a.state.config.DateAndTime.timeFont]])]),Object(n["e"])("li",null,[P,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[16]||(t[16]=function(e){return a.state.config.DateAndTime.timeSeperator=e}),onChange:t[17]||(t[17]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.DateAndTime.timeSeperator]])])])]),Object(n["e"])("div",R,[Q,Object(n["e"])("ul",E,[Object(n["e"])("li",null,[z,Object(n["p"])(Object(n["e"])("input",{type:"checkbox","onUpdate:modelValue":t[18]||(t[18]=function(e){return a.state.config.Weather.weatherEnabled=e}),onChange:t[19]||(t[19]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"toggleInput"},null,544),[[n["n"],a.state.config.Weather.weatherEnabled]])]),Object(n["e"])("li",null,[H,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[20]||(t[20]=function(e){return a.state.config.Weather.backgroundColour=e}),onChange:t[21]||(t[21]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Weather.backgroundColour]])]),Object(n["e"])("li",null,[K,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[22]||(t[22]=function(e){return a.state.config.Weather.imageColour=e}),onChange:t[23]||(t[23]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Weather.imageColour]])]),Object(n["e"])("li",null,[X,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[24]||(t[24]=function(e){return a.state.config.Weather.titleColour=e}),onChange:t[25]||(t[25]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Weather.titleColour]])]),Object(n["e"])("li",null,[Y,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[26]||(t[26]=function(e){return a.state.config.Weather.tempColour=e}),onChange:t[27]||(t[27]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Weather.tempColour]])]),Object(n["e"])("li",null,[Z,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[28]||(t[28]=function(e){return a.state.config.Weather.unit=e}),onChange:t[29]||(t[29]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput",placeholder:"may need refresh"},null,544),[[n["o"],a.state.config.Weather.unit]])]),Object(n["e"])("li",null,[$,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[30]||(t[30]=function(e){return a.state.config.Weather.descColour=e}),onChange:t[31]||(t[31]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Weather.descColour]])]),Object(n["e"])("li",null,[ee,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[32]||(t[32]=function(e){return a.state.config.Weather.location=e}),onChange:t[33]||(t[33]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput"},null,544),[[n["o"],a.state.config.Weather.location]])]),Object(n["e"])("li",null,[te,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[34]||(t[34]=function(e){return a.state.config.Weather.locationColour=e}),onChange:t[35]||(t[35]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Weather.locationColour]])]),Object(n["e"])("li",null,[oe,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[36]||(t[36]=function(e){return a.state.config.Weather.font=e}),onChange:t[37]||(t[37]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput"},null,544),[[n["o"],a.state.config.Weather.font]])])])]),Object(n["e"])("div",ne,[ae,Object(n["e"])("ul",ce,[Object(n["e"])("li",null,[re,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[38]||(t[38]=function(e){return a.state.config.GoogleSearchBar.barBg=e}),onChange:t[39]||(t[39]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.GoogleSearchBar.barBg]])]),Object(n["e"])("li",null,[le,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[40]||(t[40]=function(e){return a.state.config.GoogleSearchBar.barFont=e}),onChange:t[41]||(t[41]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput"},null,544),[[n["o"],a.state.config.GoogleSearchBar.barFont]])]),Object(n["e"])("li",null,[ie,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[42]||(t[42]=function(e){return a.state.config.GoogleSearchBar.searchSuggestions=e}),onChange:t[43]||(t[43]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"numberInput"},null,544),[[n["o"],a.state.config.GoogleSearchBar.searchSuggestions]])])])]),Object(n["e"])("div",ue,[se,Object(n["e"])("ul",ge,[Object(n["e"])("li",null,[pe,Object(n["p"])(Object(n["e"])("input",{type:"checkbox","onUpdate:modelValue":t[44]||(t[44]=function(e){return a.state.config.Bookmarks.enabled=e}),onChange:t[45]||(t[45]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"toggleInput"},null,544),[[n["n"],a.state.config.Bookmarks.enabled]])]),Object(n["e"])("li",null,[fe,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[46]||(t[46]=function(e){return a.state.config.Bookmarks.bookmarkBg=e}),onChange:t[47]||(t[47]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Bookmarks.bookmarkBg]])]),Object(n["e"])("li",null,[de,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[48]||(t[48]=function(e){return a.state.config.Bookmarks.bookmarkFont=e}),onChange:t[49]||(t[49]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"textInput"},null,544),[[n["o"],a.state.config.Bookmarks.bookmarkFont]])]),Object(n["e"])("li",null,[be,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[50]||(t[50]=function(e){return a.state.config.Bookmarks.bookmarkTextColour=e}),onChange:t[51]||(t[51]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Bookmarks.bookmarkTextColour]])]),Object(n["e"])("li",null,[me,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[52]||(t[52]=function(e){return a.state.config.Bookmarks.addBookmarkBg=e}),onChange:t[53]||(t[53]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Bookmarks.addBookmarkBg]])]),Object(n["e"])("li",null,[Oe,Object(n["p"])(Object(n["e"])("input",{type:"color","onUpdate:modelValue":t[54]||(t[54]=function(e){return a.state.config.Bookmarks.addBookmarkPlusColour=e}),onChange:t[55]||(t[55]=function(){return a.updateLocalConfig&&a.updateLocalConfig.apply(a,arguments)}),class:"colourInput"},null,544),[[n["o"],a.state.config.Bookmarks.addBookmarkPlusColour]])])])])])])):Object(n["d"])("",!0)],64)}o("4160"),o("159b");var ke={wheelColour:"#88c0d0"},he={name:"UserSettings",setup:function(){var e=Object(n["j"])(!1),t=Object(n["i"])({config:{DateAndTime:JSON.parse(localStorage.getItem("DateAndTime")),Weather:JSON.parse(localStorage.getItem("Weather")),Main:JSON.parse(localStorage.getItem("Main")),GoogleSearchBar:JSON.parse(localStorage.getItem("GoogleSearchBar")),Bookmarks:JSON.parse(localStorage.getItem("Bookmarks")),Settings:null==localStorage.getItem("Settings")||"null"==localStorage.getItem("Settings")?ke:JSON.parse(localStorage.getItem("Settings"))}});function o(){localStorage.setItem("Settings",JSON.stringify(ke))}function a(){localStorage.getItem("Settings")!==t.config.Settings&&localStorage.setItem("Settings",JSON.stringify(t.config.Settings))}function c(){e.value=!e.value}function l(){var e=Object.keys(t.config);e.forEach((function(e){localStorage.setItem(e,JSON.stringify(t.config[e]))}))}function i(){for(var e={Bookmarks:{bookmarkBg:"#3b4252",bookmarkFont:"Quicksand",bookmarkTextColour:"#e5e9f0",enabled:!0,addBookmarkBg:"#3b4252",addBookmarkPlusColour:"#e5e9f0"},Weather:{weatherEnabled:!0,backgroundColour:"#3b4252",imageColour:"#88c0d0",titleColour:"#88c0d0",tempColour:"#88c0d0",unit:"metric",descColour:"#88c0d0",location:"London",locationColour:"#88c0d0",font:"Quicksand"},DateAndTime:{dateColour:"#88c0d0",timeSeperator:"#88c0d0",timeColour:"#d8dee9",dateFont:"Quicksand",timeFont:"Roboto Mono"},GoogleSearchBar:{barBg:"#434c5e",barFont:"Quicksand",searchSuggestions:"4"},Main:{backgroundColour:"#2e3440"},Settings:{wheelColour:"#88c0d0"}},o=Object.entries(e),n=0,a=o;n<a.length;n++){var c=Object(r["a"])(a[n],2),i=c[0],u=c[1];t.config[i]=u,l()}}return null!=localStorage.getItem("Settings")&&"null"!=localStorage.getItem("Settings")||o(),setInterval(a,1e3),a(),{state:t,toggleClicked:c,preferencesOn:e,updateLocalConfig:l,setSettingsToDefaults:i}}};o("dccc");he.render=je;var Ce=he,ye=(o("a4d3"),o("e01a"),Object(n["s"])("data-v-62e8bc8e"));Object(n["h"])("data-v-62e8bc8e");var ve={class:"icon"};Object(n["g"])();var Se=ye((function(e,t,o,a,c,r){return a.state.config.weatherEnabled?(Object(n["f"])(),Object(n["c"])("div",{key:0,id:"weather",style:{backgroundColor:a.state.config.backgroundColour}},[Object(n["e"])("div",ve,[Object(n["e"])("img",{src:a.state.weatherOutput.icon,alt:"image to show weather",style:{filter:a.toFilter(a.state.config.imageColour)}},null,12,["src"])]),Object(n["e"])("h2",{class:"main",style:{color:a.state.config.titleColour,fontFamily:a.state.config.font}},Object(n["m"])(a.state.weatherOutput.main),5),Object(n["e"])("h2",{class:"temperature",style:{color:a.state.config.tempColour,fontFamily:a.state.config.font}},Object(n["m"])(a.state.weatherOutput.temp)+"°",5),Object(n["e"])("p",{class:"description",style:{color:a.state.config.descColour,fontFamily:a.state.config.font}},Object(n["m"])(a.state.weatherOutput.description),5),Object(n["e"])("p",{class:"location",style:{color:a.state.config.locationColour,fontFamily:a.state.config.font}},Object(n["m"])(a.state.weatherOutput.city)+", "+Object(n["m"])(a.state.weatherOutput.country),5)],4)):Object(n["d"])("",!0)})),we=(o("99af"),o("4de4"),o("b0c0"),o("8fed")),Be={weatherEnabled:!0,backgroundColour:"#3b4252",imageColour:"#88c0d0",titleColour:"#88c0d0",tempColour:"#88c0d0",unit:"metric",descColour:"#88c0d0",location:"London",locationColour:"#88c0d0",font:"Quicksand"},Ie={name:"Weather",setup:function(){var e=Object(n["i"])({weatherOutput:{city:"",country:"",temp:"",main:"",description:"",icon:""},config:JSON.parse(localStorage.getItem("Weather"))});function t(){for(var e={},t=Object.entries(Be),o=0,n=t;o<n.length;o++){var a=Object(r["a"])(n[o],2),c=a[0],l=a[1];e[c]=l}localStorage.setItem("Weather",JSON.stringify(e))}function a(e){var t=Object(we["hexToCSSFilter"])(e);return t["filter"].replace(/;/g,"")}function c(){JSON.stringify(e.config)!==localStorage.getItem("Weather")&&(e.config=JSON.parse(localStorage.getItem("Weather")))}function l(e){return e.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}function i(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(encodeURI(e.config.location),"&appid=").concat("726d30084c9c84a49cfbe222a43329e8","&units=").concat(e.config.unit)).then((function(e){return e.json()})).then((function(t){Object.assign(e.weatherOutput,{city:t.name},{country:t.sys.country},{temp:Math.floor(t.main.temp)},{main:t.weather[0].main},{description:l(t.weather[0].description)},{icon:o("63cb")("./".concat(t.weather[0].icon,".svg"))})})).catch((function(e){console.error(e)}))}return null==localStorage.getItem("Weather")&&t(),setInterval(c,1e3),c(),setInterval(i,1e4),i(),{state:e,toFilter:a}}};o("468d");Ie.render=Se,Ie.__scopeId="data-v-62e8bc8e";var xe=Ie,Le=Object(n["s"])("data-v-73908f65");Object(n["h"])("data-v-73908f65");var Te={key:0,class:"wrapper"},Ue={class:"bookmarksList"},Fe=Object(n["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(n["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(n["e"])("path",{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"})])],-1),Ne={class:"addBookmarkButton"},We=Object(n["e"])("h1",null,"+",-1),De={key:1,class:"addBookmarkGui animate__animated animate__fadeInDown animate__faster"},Je={class:"settingsBar"},_e=Object(n["e"])("li",null,[Object(n["e"])("h1",{class:"settingsBarTitle"},"Add New Bookmark")],-1),Me=Object(n["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(n["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[Object(n["e"])("path",{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"})])],-1),Ve={class:"addBookmarkMain"},Ae={class:"addBookmarkContents"},qe=Object(n["e"])("h1",null,"Bookmark Name",-1),Ge=Object(n["e"])("h1",null,"Bookmark URL",-1);Object(n["g"])();var Pe=Le((function(e,t,o,a,c,r){return Object(n["f"])(),Object(n["c"])(n["a"],null,[a.state.config.enabled?(Object(n["f"])(),Object(n["c"])("div",Te,[Object(n["e"])("ul",Ue,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["k"])(a.state.bookmarks,(function(e,t){return Object(n["f"])(),Object(n["c"])("li",{key:e.name,class:"bookmarkLi"},[Object(n["e"])("div",{class:"bookmark",style:{backgroundImage:"url(\n\t\t\t\t\t\t\t\thttps://api.faviconkit.com/".concat(a.stripUrl(e.URL),"/512\n\t\t\t\t\t\t\t)"),backgroundColor:a.state.config.bookmarkBg}},[Object(n["e"])("button",{class:"deleteBookmark",onClick:function(e){return a.deleteBookmark(t)}},[Fe],8,["onClick"]),Object(n["e"])("div",{class:"clickableLink",onClick:function(t){return a.openPage(e.URL)}},[Object(n["e"])("h1",{style:{color:a.state.config.bookmarkTextColour,fontFamily:a.state.config.bookmarkFont}},Object(n["m"])(e.name),5)],8,["onClick"])],4)])})),128)),Object(n["e"])("li",null,[Object(n["e"])("button",Ne,[Object(n["e"])("div",{class:"addBookmark",onClick:t[1]||(t[1]=function(e){return a.addBookmarkOn=!a.addBookmarkOn}),style:{backgroundColor:a.state.config.addBookmarkBg,color:a.state.config.addBookmarkPlusColour}},[We],4)])])])])):Object(n["d"])("",!0),a.addBookmarkOn?(Object(n["f"])(),Object(n["c"])("div",De,[Object(n["e"])("ul",Je,[_e,Object(n["e"])("li",null,[Object(n["e"])("button",{class:"closeSettings",onClick:t[2]||(t[2]=function(e){return a.addBookmarkOn=!a.addBookmarkOn})},[Me])])]),Object(n["e"])("div",Ve,[Object(n["e"])("ul",Ae,[Object(n["e"])("li",null,[qe,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.state.newBookmark.name=e})},null,512),[[n["o"],a.state.newBookmark.name]])]),Object(n["e"])("li",null,[Ge,Object(n["p"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.state.newBookmark.URL=e})},null,512),[[n["o"],a.state.newBookmark.URL]])])]),Object(n["e"])("button",{class:"submitNewBookmark",onClick:t[5]||(t[5]=function(){return a.addBookmark&&a.addBookmark.apply(a,arguments)})},"Submit")])])):Object(n["d"])("",!0)],64)})),Re=(o("25f0"),{bookmarkBg:"#3b4252",bookmarkFont:"Quicksand",bookmarkTextColour:"#e5e9f0",enabled:!0,addBookmarkBg:"#3b4252",addBookmarkPlusColour:"#e5e9f0"}),Qe={setup:function(){var e=Object(n["i"])({bookmarks:JSON.parse(localStorage.getItem("BookmarkList")),config:JSON.parse(localStorage.getItem("Bookmarks")),newBookmark:{name:"",URL:""}}),t=Object(n["j"])(!1);function o(){for(var e={},t=Object.entries(Re),o=0,n=t;o<n.length;o++){var a=Object(r["a"])(n[o],2),c=a[0],l=a[1];e[c]=l}localStorage.setItem("Bookmarks",JSON.stringify(e))}function a(){JSON.stringify(e.config)!==localStorage.getItem("Bookmarks")&&(e.config=JSON.parse(localStorage.getItem("Bookmarks"))),JSON.stringify(e.bookmarks!=localStorage.getItem("BookmarkList"))&&localStorage.setItem("BookmarkList",JSON.stringify(e.bookmarks))}function c(e){return"undefined"==typeof e?null:e.replace(/(^\w+:|^)\/\//,"")}function l(){null==e.bookmarks&&(e.bookmarks={});var o=0;while(null!=e.bookmarks[o.toString()])o++;e.bookmarks[o.toString()]={name:e.newBookmark.name,URL:e.newBookmark.URL},e.newBookmark.name="",e.newBookmark.URL="",t.value=!t.value}function i(e){window.open(e,"_self")}function u(t){delete e.bookmarks[t],a()}return null==localStorage.getItem("Bookmarks")&&o(),setInterval(a,1e3),a(),{state:e,stripUrl:c,addBookmark:l,addBookmarkOn:t,openPage:i,deleteBookmark:u}}};o("90d6");Qe.render=Pe,Qe.__scopeId="data-v-73908f65";var Ee=Qe,ze={backgroundColour:"#2e3440"},He={components:{DateAndTime:b,GoogleSearchBar:v,Weather:xe,UserSettings:Ce,Bookmarks:Ee},setup:function(){var e=Object(n["i"])({config:JSON.parse(localStorage.getItem("Main"))});function t(){for(var e={},t=Object.entries(ze),o=0,n=t;o<n.length;o++){var a=Object(r["a"])(n[o],2),c=a[0],l=a[1];e[c]=l}localStorage.setItem("Main",JSON.stringify(e))}function o(){JSON.stringify(e.config)!==localStorage.getItem("Main")&&(e.config=JSON.parse(localStorage.getItem("Main"))),document.body.style.backgroundColor=e.config.backgroundColour}function a(){localStorage.getItem("Version")?"1.1.1"!=localStorage.getItem("Version")&&(alert("New Update: Bookmarks. Also, you may need to enable search suggestions and the weather widget in settings for them to appear."),localStorage.setItem("Version","1.1.1")):(alert("Welcome to this project! Hit the settings icon to configure."),localStorage.setItem("Version","1.1.1"))}null==localStorage.getItem("Main")&&t(),setInterval(o,1e3),o(),a()}};o("57af");He.render=c;var Ke=He;Object(n["b"])(Ke).mount("#app")},"57af":function(e,t,o){"use strict";o("f841")},"5a60":function(e,t,o){e.exports=o.p+"img/10n.86f986fc.svg"},"5e75":function(e,t,o){"use strict";o("bf1e")},"5f82":function(e,t,o){e.exports=o.p+"img/50n.7f68f0ff.svg"},"63cb":function(e,t,o){var n={"./01d.svg":"a6f7","./01n.svg":"76d8","./02d.svg":"dc1e","./02n.svg":"2ac9","./03d.svg":"2200","./03n.svg":"be4e","./04d.svg":"ad1a","./04n.svg":"d77d","./09d.svg":"dc5c","./09n.svg":"101c","./10d.svg":"e903","./10n.svg":"5a60","./11d.svg":"5243","./11n.svg":"0111","./13d.svg":"3cbf","./13n.svg":"dcf7","./50d.svg":"f7eb","./50n.svg":"5f82"};function a(e){var t=c(e);return o(t)}function c(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="63cb"},"76d8":function(e,t,o){e.exports=o.p+"img/01n.f86c33c4.svg"},"90d6":function(e,t,o){"use strict";o("3f8b")},"96e9":function(e,t,o){},a6f7:function(e,t,o){e.exports=o.p+"img/01d.4b9869a6.svg"},ad1a:function(e,t,o){e.exports=o.p+"img/04d.2d0410c5.svg"},be4e:function(e,t,o){e.exports=o.p+"img/03n.82408b66.svg"},bf1e:function(e,t,o){},d77d:function(e,t,o){e.exports=o.p+"img/04n.2d0410c5.svg"},dc1e:function(e,t,o){e.exports=o.p+"img/02d.3237f7da.svg"},dc5c:function(e,t,o){e.exports=o.p+"img/09d.ac93e407.svg"},dccc:function(e,t,o){"use strict";o("0ed9")},dcf7:function(e,t,o){e.exports=o.p+"img/13n.10a793eb.svg"},e903:function(e,t,o){e.exports=o.p+"img/10d.8ea1ac4e.svg"},f7eb:function(e,t,o){e.exports=o.p+"img/50d.493be2a8.svg"},f841:function(e,t,o){}});
//# sourceMappingURL=app.d3a8d321.js.map