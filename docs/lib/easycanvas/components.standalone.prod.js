!function(e,t){for(var o in t)e[o]=t[o]}(window,function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=28)}([,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="undefined"!=typeof window;t["default"]=function(e,t){n&&window.Easycanvas&&(Easycanvas[t]=function(t){return e(t,Easycanvas)})}},,,,,,,,,,,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n={},r="\n".slice(0,1),i=function(e,t){var o,i=String(e),s=i+JSON.stringify(t);if(t.fontSize=t.fontSize||16,n[s])return n[s];t.padding?((o=(o=t.padding.split(" ")).map(function(e){return parseInt(e)}))[1]=Number(o[1]||o[0]),o[2]=Number(o[2]||o[0]),o[3]=Number(o[3]||o[1])):o=[0,0,0,0];var l=t.minWidth||t.width||t.fontSize*i.length+o[1]+o[3]+100,a=i.split("\n").length,d=t.fontSize*(Math.round(i.length)/l+a-1)*(t.lineHeight||t.fontSize)+o[0]+o[2]+100,c=document.createElement("canvas");c.width=l,c.height=d;var h=c.getContext("2d");window.tempCanvas=c,window.tempCtx=h,h.textBaseline="middle",h.font=(t.fontStyle?t.fontStyle+" ":"")+t.fontSize+"px "+(t.family||"serif"),h.fillStyle=t.color||"#000",h.textAlign=t.textAlign||"left";for(var u=t.lineHeight?(t.lineHeight-t.fontSize)/2:0,f=0,_=1,p=0,v=0,g=1;;)if((v=h.measureText(i.slice(f,_)).width)>t.width){if("ellipsis"===t.textOverflow){_-=2,h.fillText(i.slice(f,_)+"...",0,u+t.fontSize/2),u+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:0),g++,p=t.width-o[1]-o[3];break}_-=1,h.fillText(i.slice(f,_),0,u+t.fontSize/2),_=(f=_)+1,u+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:10),g++}else{if(_>i.length-1){v>p&&(p=v),h.fillText(i.slice(f,_),0,u+t.fontSize/2),u+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:0);break}i.slice(_,_+1)===r&&(h.fillText(i.slice(f,_),0,u+t.fontSize/2),_=(f=_+=1)+1,u+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:10),g++),v>p&&(p=v),_++}var w=document.createElement("canvas");w.lastLineLeft=v,w.lineCount=g,w.width=Math.max(p+o[1]+o[3],t.minWidth||0),w.height=u+o[0]+o[2];var b=w.getContext("2d");if(t.backgroundColor&&(b.fillStyle=t.backgroundColor,b.fillRect(0,0,w.width,w.height)),b.drawImage(c,(w.width-p)/2,o[0]),t.border){var y=t.border.split(" "),m=y.pop();"solid"===y[y.length-1]&&y.pop();var S=y[0],x=y[1]||S,C=y[2]||S,I=y[3]||x||S;S=parseInt(S),x=parseInt(x),C=parseInt(C),I=parseInt(I);var $=t.borderRadius||0;if(b.beginPath(),b.strokeStyle=m,S&&(b.lineWidth=S,b.moveTo(I?$:0,0),b.lineTo(w.width-(x?$:0),0)),x&&(b.lineWidth=x,b.moveTo(w.width,S?$:0),b.lineTo(w.width,w.height-(C?$:0))),C&&(b.lineWidth=C,b.moveTo(I?$:0,w.height),b.lineTo(w.width-(x?$:0),w.height)),I&&(b.lineWidth=I,b.moveTo(0,S?$:0),b.lineTo(0,w.height-(C?$:0))),b.stroke(),$){var O=document.createElement("canvas"),H=Math.min(w.width,w.height);O.width=O.height=H;var T=O.getContext("2d");T.beginPath(),T.strokeStyle=m,T.arc(H>>1,H>>1,(H>>1)-1,0,2*Math.PI),T.stroke(),S&&x&&b.drawImage(O,H>>1,0,H>>1,H>>1,w.width-$,0,$,$),C&&x&&b.drawImage(O,H>>1,H>>1,H>>1,H>>1,w.width-$,w.height-$,$,$),S&&I&&b.drawImage(O,0,0,H>>1,H>>1,0,0,$,$),C&&I&&b.drawImage(O,0,H>>1,H>>1,H>>1,0,w.height-$,$,$)}}return n[s]=w,w};t["default"]=i},function(e,t,o){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=function(e,t){var o,n=e||{};return n.name=n.name||"Image",(o=new t.Sprite(n)).content.img=n.src,Object.defineProperty(o,"src",{get:function(){return o.content.img?o.content.img.src:""},set:function(e){o.content.img=e}}),o};(0,((n=o(1))&&n.__esModule?n:{"default":n})["default"])(r,"Image");var i=r;t["default"]=i},,,,,,,,,,,,function(e,t,o){e.exports=o(29)},function(e,t,o){"use strict";n(o(30)),n(o(16)),n(o(31)),n(o(32)),n(o(33)),n(o(34)),n(o(35)),n(o(37)),n(o(38));function n(e){return e&&e.__esModule?e:{"default":e}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(o(15)),r=i(o(1));function i(e){return e&&e.__esModule?e:{"default":e}}var s={padding:0,width:300,family:'"Helvetica Neue",Helvetica,Arial,sans-serif'},l=function(e,t){e.buttonStyleNormal=Object.assign(s,{minWidth:t.style.width,lineHeight:t.style.height,padding:0},t.props.normal),e.buttonStyleHovered=Object.assign({},e.buttonStyleNormal,t.props.hovered),e.buttonStylePressed=Object.assign({},e.buttonStyleNormal,t.props.pressed),e.imageNormal=(0,n["default"])(t.props.text||"",e.buttonStyleNormal),e.imageHovered=t.props.hovered&&(0,n["default"])(t.props.text||"",e.buttonStyleHovered),e.imagePressed=t.props.pressed&&(0,n["default"])(t.props.text||"",e.buttonStylePressed)},a=function(e,t){var o;e.props=e.props||{};var n={buttonStyleNormal:undefined,buttonStyleHovered:undefined,buttonStylePressed:undefined,imageNormal:undefined,imageHovered:undefined,imagePressed:undefined};l(n,e);var r={};return e.events=e.events||{},r.touchmove=r.mousemove=function(){o.content.img=n.imageHovered||n.imageNormal},r.touchstart=r.mousedown=function(){o.content.img=n.imagePressed||n.imageHovered||n.imageNormal},r.touchend=r.touchout=r.mouseout=function(){o.content.img=n.imageNormal},r.mouseup=function(){o.content.img=n.imageHovered||n.imageNormal},r.click=function(t){e.events.click&&e.events.click.call(o,t)},(o=new t.Sprite({name:e.name||"Button_"+e.props.text,content:{img:n.imageNormal},style:e.style,props:e.props,events:r,hooks:e.hooks})).update=function(t){this.__proto__.update.call(this,t),l(n,e),o.content.img=n.imageNormal},o};(0,r["default"])(a,"Button");var d=a;t["default"]=d},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r,i,s,l=(n=o(1))&&n.__esModule?n:{"default":n};var a=function(e,t){return Math.abs(e)<Math.abs(t)?e:t},d=function(e){e.$scroll.touching=!1},c=function(e){if(e.$scroll&&e.$scroll.$scrolling){if(Math.abs(e.$scroll.speedX)>1?e.$scroll.speedX*=e.scroll.smooth||.8:e.$scroll.speedX=0,Math.abs(e.$scroll.speedY)>1?e.$scroll.speedY*=e.scroll.smooth||.8:e.$scroll.speedY=0,Math.abs(e.$scroll.speedX)<=1&&Math.abs(e.$scroll.speedY)<=1)return e.$scroll.$scrolling=!1,void(e.$scroll.$wheeling=!1);if(!e.$scroll.touching){if(e.scroll.scrollY-=e.$scroll.speedY,e.scroll.scrollX-=e.$scroll.speedX,!e.$scroll.touching&&!e.$scroll.$wheeling&&Math.abs(e.$scroll.speedY)<50&&e.scroll.anchors&&e.scroll.anchors.length)for(var t=e.scroll.anchorsRange||400,o=0;o<e.scroll.anchors.length;o++){var n=e.scroll.anchors[o],i=e.scroll.scrollY-n;if(i>0&&i<t&&e.$scroll.speedY>0||i<0&&i>-t&&e.$scroll.speedY<0){e.trigger("scrollTo",n,200),e.$scroll.speedY=0;break}}var s=r(e.scroll.minScrollX,e),l=r(e.scroll.maxScrollX,e),a=r(e.scroll.minScrollY,e),d=r(e.scroll.maxScrollY,e);!isNaN(a)&&e.scroll.scrollY<a?e.scroll.scrollY=a:!isNaN(d)&&e.scroll.scrollY>d&&(e.scroll.scrollY=d,e.trigger("reachBottom"),e.$scroll.speedY=0),!isNaN(s)&&e.scroll.scrollX<s?e.scroll.scrollX=s:!isNaN(l)&&e.scroll.scrollX>l&&(e.scroll.scrollX=l)}}},h=function(e,t){var o=Date.now();if(e.$scroll.$wheeling=!1,e.$scroll.touching){e.$scroll.$scrolling=!0;var n=e.$scroll.startPos.x-t.canvasX,i=e.$scroll.startPos.y-t.canvasY,s=o-e.$scroll.touching;e.$scroll.touching=o;var l=r(e.scroll.minScrollX,e),d=r(e.scroll.maxScrollX,e),c=r(e.scroll.minScrollY,e),h=r(e.scroll.maxScrollY,e);if((e.scroll.scrollX+n<l||e.scroll.scrollX+n>d)&&(e.scroll.flexible||e.scroll.flexibleX?n>>=3:n=0),(e.scroll.scrollY+i<c||e.scroll.scrollY+i>h)&&(e.scroll.flexible||e.scroll.flexibleY?i>>=3:i=0),r(e.scroll.scrollableX,e)&&Math.abs(n)>=1&&s>1){var u=(t.canvasX-e.$scroll.startPos.x)/s*25;e.$scroll.lastScrollSpeed*u>0&&Math.abs(u)>15&&(u+=a(u,e.$scroll.lastScrollSpeed)),e.$scroll.speedX=(e.$scroll.lastTouchSpeed+u)/(e.$scroll.lastTouchSpeed?2:1),e.$scroll.lastTouchSpeed=u,e.scroll.scrollX+=n}if(r(e.scroll.scrollableY,e)&&Math.abs(i)>=1&&s>1){var f=(t.canvasY-e.$scroll.startPos.y)/s*25;e.$scroll.lastScrollSpeed*f>0&&Math.abs(f)>15&&(f+=a(f,e.$scroll.lastScrollSpeed)),e.$scroll.speedY=(e.$scroll.lastTouchSpeed+f)/(e.$scroll.lastTouchSpeed?2:1),e.$scroll.lastTouchSpeed=f,e.scroll.scrollY+=i}if(e.$scroll.startPos.x=t.canvasX,e.$scroll.startPos.y=t.canvasY,Math.abs(n)>Math.abs(i)+1)return 1;if(Math.abs(n)<Math.abs(i)-1)return 2}else e.$scroll.touching=o,e.$scroll.quickTouch=o,e.$scroll.lastTouchSpeed=0,e.$scroll.startPos.x=t.canvasX,e.$scroll.startPos.y=t.canvasY,e.$scroll.lastScrollSpeed=e.$scroll.speedX||e.$scroll.speedY,e.$scroll.speedX=0,e.$scroll.speedY=0},u=function(e,t){e.$scroll.speedX=r(e.scroll.scrollableX,e)?t.event.wheelDeltaX:0,e.$scroll.speedY=r(e.scroll.scrollableY,e)?t.event.wheelDeltaY:0,e.$scroll.$scrolling=!0,e.$scroll.$wheeling=!0,t.stopPropagation()},f=function(e,t){r=t.utils.funcOrValue,i=t.Transition;var o=!1,n=!1,l=e||{};l.scroll=Object.assign({scrollX:0,scrollY:0,scrollableX:function(){return"visible"!==(this.style.overflowX||this.style.overflow)},scrollableY:function(){return"visible"!==(this.style.overflowY||this.style.overflow)},minScrollX:0,maxScrollX:function(){var e=this,t=0;return this.getChildren().forEach(function(o){var n=o.getSelfStyle("left")+o.getSelfStyle("width")-e.getStyle("width");n>t&&(t=n)}),t},minScrollY:0,maxScrollY:function(){var e=this,t=0;return this.getChildren().forEach(function(o){var n=o.getSelfStyle("top")+o.getSelfStyle("height")-e.getStyle("height");n>t&&(t=n)}),t},propagationX:!1,propagationY:!1},e.scroll);var a=function v(){o&&(_.scroll.scrollX=o()),n&&(_.scroll.scrollY=n()),o||n||_.off("ticked",v)},f=!1;l.events=Object.assign({touchstart:function(e){d(this),f=!0,s=!1,h(this,e),_.scroll.propagationX||_.scroll.propagationY||e.stopPropagation()},touchmove:function(e){if(f&&(!s||this===s)){var t=h(this,e);1===t&&_.scroll.propagationY?(e.stopPropagation(),s=this):2===t&&_.scroll.propagationX&&(e.stopPropagation(),s=this)}},mousewheel:function(e){f=!0,u(this,e),e.stopPropagation()},touchend:function(){f=!1,d(this)},mouseup:function(){f=!1,d(this)}},l.events||{}),l.scroll.capture&&(l.events.interceptor=function(e){return _.events[e.type]?(_.events[e.type].call(_,e),!1):e});var _=new t.Sprite(l);_.on("ticked",function(){c(_)}),_.scrollTo=function(e,t,r){var s;return o=i.ease(_.scroll.scrollY,e,r||200,{cycle:.5}).then(function(){o=!1,s&&s(),s=!1}),n=i.ease(_.scroll.scrollY,t,r||200,{cycle:.5}).then(function(){n=!1,s&&s(),s=!1}),_.on("ticked",a),{then:function(e){s=e}}},_.$scroll={speedX:0,speedY:0,touching:!1,startPos:{},lastTouchSpeed:0,lastScrollSpeed:0};var p=_.add({name:"scrolling-element",style:{left:function(){return-this.$parent.scroll.scrollX},top:function(){return-this.$parent.scroll.scrollY}}});return _.add=p.add.bind(p),_.clear=p.clear.bind(p),_.getChildren=function(){return p.children},_};(0,l["default"])(f,"Scroll");var _=f;t["default"]=_},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(o(1)),r=i(o(16));function i(e){return e&&e.__esModule?e:{"default":e}}var s=function(e,t){var o=t.utils.funcOrValue,n=new r["default"](e,t);return n.index=e.index||0,n.on("beforeTick",function(){var e=o(this.content.img,this);if(e&&e.width){var t,n,r=this.index||0;if(r<0&&(r=0),this.frameWidth||this.frameHeight){t=this.frameWidth<0?e.width/-this.frameWidth:this.frameWidth,n=this.frameHeight<0?e.height/-this.frameHeight:this.frameHeight;var i=Math.floor(e.width/t),s=Math.floor(e.height/n);this.style.cutLeft=r%i*t,this.style.cutTop=Math.floor(r/i)%s*n}if(!this.loop&&r>0&&0===this.style.cutLeft&&0===this.style.cutTop)return this.style.img=undefined,void this.remove();this.$lastFrameTime=this.$lastFrameTime||0,this.$canvas.$nextTickTime-this.$lastFrameTime>=o(this.interval,this)&&(this.$lastFrameTime=this.$canvas.$nextTickTime,this.index++),this.style.cutWidth=this.style.cutWidth||t,this.style.cutHeight=this.style.cutHeight||n,this.style.width=this.style.width||t,this.style.height=this.style.height||n}}),n};(0,n["default"])(s,"Sequence");var l=s;t["default"]=l},function(e,t,o){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=function(e,t){var o,n=e||{};n.name=n.name||"Text",n.content=n.content||{},n.content.text=n.text,n.children&&1===n.children.length&&(n.content.text=n.children[0],n.children=undefined),o=new t.Sprite(n);var r={get:function(){return o.content.text||""},set:function(e){o.content.text=e}};return Object.defineProperty(o,"text",r),o};(0,((n=o(1))&&n.__esModule?n:{"default":n})["default"])(r,"Text");var i=r;t["default"]=i},function(e,t,o){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=function(e,t){var o=e||{};return o.name=o.name||"View",new t.Sprite(o)};(0,((n=o(1))&&n.__esModule?n:{"default":n})["default"])(r,"View");var i=r;t["default"]=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(o(1)),r=i(o(36));function i(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}r["default"].prototype._mousePos=function(e){return{x:e.x,y:e.y}};var a=function(e,t){var o,n=e||{};n.name=n.name||"Input";var i=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(o,!0).forEach(function(t){l(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({canvas:document.createElement("canvas")},n,{},n.style,{fontColor:n.style.color});n.style.width=n.style.width-2*(n.style.borderWidth||0)-2*(n.style.padding||0),n.style.height=n.style.height-2*(n.style.borderWidth||0)-2*(n.style.padding||0);var a=new r["default"](i);return n.style.borderWidth=0,n.style.borderColor=undefined,n.style.width=n.style.height=undefined,(o=new t.Sprite(n)).$canvasInput=a,["onsubmit","onkeydown","onkeyup","onfocus","onblur"].forEach(function(e){a["_"+e]=function(t){o[e]&&o[e].call(o,t)}}),["focus","blur","selectText"].forEach(function(e){o[e]=a[e].bind(a)}),o.on("removed",function(){a.destroy.call(a)}),o.content.img=a._renderCanvas,o.addEventListener("interceptor",function(e){e.stopPropagation();var t={type:e.type,x:e.canvasX-o.getStyle("left"),y:e.canvasY-o.getStyle("top")};if(a[e.type]&&a[e.type](t,a),"click"===e.type){o.$canvas.addEventListener("interceptor",function e(t){"click"===t.type&&o.$canvas.removeEventListener("interceptor",e)})}}),Object.defineProperty(o,"value",{get:function(){return a.value()},set:function(e){a.value(void 0===e?"":e)}}),o};(0,n["default"])(a,"Input");var d=a;t["default"]=d},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;
/*!
 *  CanvasInput v1.2.7
 *  http://goldfirestudios.com/blog/108/CanvasInput-HTML5-Canvas-Text-Input
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
var n=[],r=function(e){var t=this;e=e||{},t._canvas=e.canvas||null,t._ctx=t._canvas?t._canvas.getContext("2d"):null,t._x=e.x||0,t._y=e.y||0,t._extraX=e.extraX||0,t._extraY=e.extraY||0,t._fontSize=e.fontSize||14,t._fontFamily=e.fontFamily||"Arial",t._fontColor=e.fontColor||"#000",t._placeHolderColor=e.placeHolderColor||"#bfbebd",t._fontWeight=e.fontWeight||"normal",t._fontStyle=e.fontStyle||"normal",t._fontShadowColor=e.fontShadowColor||"",t._fontShadowBlur=e.fontShadowBlur||0,t._fontShadowOffsetX=e.fontShadowOffsetX||0,t._fontShadowOffsetY=e.fontShadowOffsetY||0,t._readonly=e.readonly||!1,t._maxlength=e.maxlength||null,t._width=e.width||150,t._height=e.height||t._fontSize,t._padding=e.padding>=0?e.padding:5,t._borderWidth=e.borderWidth>=0?e.borderWidth:1,t._borderColor=e.borderColor||"#959595",t._borderRadius=e.borderRadius>=0?e.borderRadius:3,t._backgroundImage=e.backgroundImage||"",t._boxShadow=e.boxShadow||"1px 1px 0px rgba(255, 255, 255, 1)",t._innerShadow=e.innerShadow||"0px 0px 4px rgba(0, 0, 0, 0.4)",t._selectionColor=e.selectionColor||"rgba(179, 212, 253, 0.8)",t._placeHolder=e.placeHolder||"",t._value=(e.value||t._placeHolder)+"",t._onsubmit=e.onsubmit||function(){},t._onkeydown=e.onkeydown||function(){},t._onkeyup=e.onkeyup||function(){},t._onfocus=e.onfocus||function(){},t._onblur=e.onblur||function(){},t._cursor=!1,t._cursorPos=0,t._hasFocus=!1,t._selection=[0,0],t._wasOver=!1,t.boxShadow(t._boxShadow,!0),t._calcWH(),t._renderCanvas=document.createElement("canvas"),t._renderCanvas.setAttribute("width",t.outerW),t._renderCanvas.setAttribute("height",t.outerH),t._renderCtx=t._renderCanvas.getContext("2d"),t._shadowCanvas=document.createElement("canvas"),t._shadowCanvas.setAttribute("width",t._width+2*t._padding),t._shadowCanvas.setAttribute("height",t._height+2*t._padding),t._shadowCtx=t._shadowCanvas.getContext("2d"),"undefined"!=typeof e.backgroundGradient?(t._backgroundColor=t._renderCtx.createLinearGradient(0,0,0,t.outerH),t._backgroundColor.addColorStop(0,e.backgroundGradient[0]),t._backgroundColor.addColorStop(1,e.backgroundGradient[1])):t._backgroundColor=e.backgroundColor||"#fff",t._canvas&&(t._canvas.addEventListener("mousemove",function(e){e=e||window.event,t.mousemove(e,t)},!1),t._canvas.addEventListener("mousedown",function(e){e=e||window.event,t.mousedown(e,t)},!1),t._canvas.addEventListener("mouseup",function(e){e=e||window.event,t.mouseup(e,t)},!1));var o=function(e){e=e||window.event,t._hasFocus&&!t._mouseDown&&t.blur()};window.addEventListener("mouseup",o,!0),window.addEventListener("touchend",o,!0),t._hiddenInput=document.createElement("input"),t._hiddenInput.type="text",t._hiddenInput.style.position="absolute",t._hiddenInput.style.opacity=0,t._hiddenInput.style.pointerEvents="none",t._hiddenInput.style.zIndex=0,t._hiddenInput.style.transform="scale(0)",t._updateHiddenInput(),t._maxlength&&(t._hiddenInput.maxLength=t._maxlength),document.body.appendChild(t._hiddenInput),t._hiddenInput.value=t._value,t._hiddenInput.addEventListener("keydown",function(e){e=e||window.event,t._hasFocus&&(window.focus(),t._hiddenInput.focus(),t.keydown(e,t))}),t._hiddenInput.addEventListener("keyup",function(e){e=e||window.event,t._value=t._hiddenInput.value,t._cursorPos=t._hiddenInput.selectionStart,t._selection=[t._hiddenInput.selectionStart,t._hiddenInput.selectionEnd],t.render(),t._hasFocus&&t._onkeyup(e,t)}),n.push(t),t._inputsIndex=n.length-1,t.render()};r.prototype={canvas:function(e){return void 0!==e?(this._canvas=e,this._ctx=this._canvas.getContext("2d"),this.render()):this._canvas},x:function(e){return void 0!==e?(this._x=e,this._updateHiddenInput(),this.render()):this._x},y:function(e){return void 0!==e?(this._y=e,this._updateHiddenInput(),this.render()):this._y},extraX:function(e){return void 0!==e?(this._extraX=e,this._updateHiddenInput(),this.render()):this._extraX},extraY:function(e){return void 0!==e?(this._extraY=e,this._updateHiddenInput(),this.render()):this._extraY},fontSize:function(e){return void 0!==e?(this._fontSize=e,this.render()):this._fontSize},fontFamily:function(e){return void 0!==e?(this._fontFamily=e,this.render()):this._fontFamily},fontColor:function(e){return void 0!==e?(this._fontColor=e,this.render()):this._fontColor},placeHolderColor:function(e){return void 0!==e?(this._placeHolderColor=e,this.render()):this._placeHolderColor},fontWeight:function(e){return void 0!==e?(this._fontWeight=e,this.render()):this._fontWeight},fontStyle:function(e){return void 0!==e?(this._fontStyle=e,this.render()):this._fontStyle},fontShadowColor:function(e){return void 0!==e?(this._fontShadowColor=e,this.render()):this._fontShadowColor},fontShadowBlur:function(e){return void 0!==e?(this._fontShadowBlur=e,this.render()):this._fontShadowBlur},fontShadowOffsetX:function(e){return void 0!==e?(this._fontShadowOffsetX=e,this.render()):this._fontShadowOffsetX},fontShadowOffsetY:function(e){return void 0!==e?(this._fontShadowOffsetY=e,this.render()):this._fontShadowOffsetY},width:function(e){return void 0!==e?(this._width=e,this._calcWH(),this._updateCanvasWH(),this._updateHiddenInput(),this.render()):this._width},height:function(e){return void 0!==e?(this._height=e,this._calcWH(),this._updateCanvasWH(),this._updateHiddenInput(),this.render()):this._height},padding:function(e){return void 0!==e?(this._padding=e,this._calcWH(),this._updateCanvasWH(),this.render()):this._padding},borderWidth:function(e){return void 0!==e?(this._borderWidth=e,this._calcWH(),this._updateCanvasWH(),this.render()):this._borderWidth},borderColor:function(e){return void 0!==e?(this._borderColor=e,this.render()):this._borderColor},borderRadius:function(e){return void 0!==e?(this._borderRadius=e,this.render()):this._borderRadius},backgroundColor:function(e){return void 0!==e?(this._backgroundColor=e,this.render()):this._backgroundColor},backgroundGradient:function(e){return void 0!==e?(this._backgroundColor=this._renderCtx.createLinearGradient(0,0,0,this.outerH),this._backgroundColor.addColorStop(0,e[0]),this._backgroundColor.addColorStop(1,e[1]),this.render()):this._backgroundColor},boxShadow:function(e,t){if(void 0===e)return this._boxShadow;var o=e.split("px ");return this._boxShadow={x:"none"===this._boxShadow?0:parseInt(o[0],10),y:"none"===this._boxShadow?0:parseInt(o[1],10),blur:"none"===this._boxShadow?0:parseInt(o[2],10),color:"none"===this._boxShadow?"":o[3]},this._boxShadow.x<0?(this.shadowL=Math.abs(this._boxShadow.x)+this._boxShadow.blur,this.shadowR=this._boxShadow.blur+this._boxShadow.x):(this.shadowL=Math.abs(this._boxShadow.blur-this._boxShadow.x),this.shadowR=this._boxShadow.blur+this._boxShadow.x),this._boxShadow.y<0?(this.shadowT=Math.abs(this._boxShadow.y)+this._boxShadow.blur,this.shadowB=this._boxShadow.blur+this._boxShadow.y):(this.shadowT=Math.abs(this._boxShadow.blur-this._boxShadow.y),this.shadowB=this._boxShadow.blur+this._boxShadow.y),this.shadowW=this.shadowL+this.shadowR,this.shadowH=this.shadowT+this.shadowB,this._calcWH(),t?void 0:(this._updateCanvasWH(),this.render())},innerShadow:function(e){return void 0!==e?(this._innerShadow=e,this.render()):this._innerShadow},selectionColor:function(e){return void 0!==e?(this._selectionColor=e,this.render()):this._selectionColor},placeHolder:function(e){return void 0!==e?(this._placeHolder=e,this.render()):this._placeHolder},value:function(e){return void 0!==e?(this._value=e+"",this._hiddenInput.value=e+"",this._cursorPos=this._clipText().length,this.render(),this):this._value===this._placeHolder?"":this._value},onsubmit:function(e){if(void 0!==e)return this._onsubmit=e,this;this._onsubmit()},onkeydown:function(e){if(void 0!==e)return this._onkeydown=e,this;this._onkeydown()},onkeyup:function(e){if(void 0!==e)return this._onkeyup=e,this;this._onkeyup()},focus:function(e){var t=this;if(!t._hasFocus){t._onfocus(t);for(var o=0;o<n.length;o++)n[o]._hasFocus&&n[o].blur()}t._selectionUpdated?delete t._selectionUpdated:t._selection=[0,0],t._hasFocus=!0,t._readonly?t._hiddenInput.readOnly=!0:(t._hiddenInput.readOnly=!1,t._cursorPos="number"==typeof e?e:t._clipText().length,t._placeHolder===t._value&&(t._value="",t._hiddenInput.value=""),t._cursor=!0,t._cursorInterval&&clearInterval(t._cursorInterval),t._cursorInterval=setInterval(function(){t._cursor=!t._cursor,t.render()},500));var r=t._selection[0]>0||t._selection[1]>0;return t._hiddenInput.focus(),t._hiddenInput.selectionStart=r?t._selection[0]:t._cursorPos,t._hiddenInput.selectionEnd=r?t._selection[1]:t._cursorPos,t.render()},blur:function(e){var t=e||this;return t._onblur(t),t._cursorInterval&&clearInterval(t._cursorInterval),t._hasFocus=!1,t._cursor=!1,t._selection=[0,0],t._hiddenInput.blur(),""===t._value&&(t._value=t._placeHolder),t.render()},keydown:function(e,t){var o=e.which;e.shiftKey;if(!t._readonly&&t._hasFocus){if(t._onkeydown(e,t),65===o&&(e.ctrlKey||e.metaKey))return t.selectText(),e.preventDefault(),t.render();if(17===o||e.metaKey||e.ctrlKey)return t;if(13===o)e.preventDefault(),t._onsubmit(e,t);else if(9===o&&(e.preventDefault(),n.length>1)){var r=n[t._inputsIndex+1]?t._inputsIndex+1:0;t.blur(),setTimeout(function(){n[r].focus()},10)}return t._value=t._hiddenInput.value,t._cursorPos=t._hiddenInput.selectionStart,t._selection=[0,0],t.render()}},click:function(e,t){var o=t._mousePos(e),n=o.x,r=o.y;return t._endSelection?(delete t._endSelection,void delete t._selectionUpdated):t._canvas&&t._overInput(n,r)||!t._canvas?t._mouseDown?(t._mouseDown=!1,t.click(e,t),t.focus(t._clickPos(n,r))):void 0:t.blur()},mousemove:function(e,t){var o=t._mousePos(e),n=o.x,r=o.y,i=t._overInput(n,r);if(i&&t._canvas?(t._canvas.style.cursor="text",t._wasOver=!0):t._wasOver&&t._canvas&&(t._canvas.style.cursor="default",t._wasOver=!1),t._hasFocus&&t._selectionStart>=0){var s=t._clickPos(n,r),l=Math.min(t._selectionStart,s),a=Math.max(t._selectionStart,s);if(!i)return t._selectionUpdated=!0,t._endSelection=!0,delete t._selectionStart,void t.render();t._selection[0]===l&&t._selection[1]===a||(t._selection=[l,a],t.render())}},mousedown:function(e,t){var o=t._mousePos(e),n=o.x,r=o.y,i=t._overInput(n,r);t._mouseDown=i,t._hasFocus&&i&&(t._selectionStart=t._clickPos(n,r))},mouseup:function(e,t){var o=t._mousePos(e),n=o.x,r=o.y,i=t._clickPos(n,r)!==t._selectionStart;t._hasFocus&&t._selectionStart>=0&&t._overInput(n,r)&&i?(t._selectionUpdated=!0,delete t._selectionStart,t.render()):delete t._selectionStart,t.click(e,t)},selectText:function(e){var t=this;e=e||[0,t._value.length];return setTimeout(function(){t._selection=[e[0],e[1]],t._hiddenInput.selectionStart=e[0],t._hiddenInput.selectionEnd=e[1],t.render()},1),t},renderCanvas:function(){return this._renderCanvas},render:function(){var e=this,t=e._renderCtx,o=e.outerW,n=e.outerH,r=e._borderRadius,i=e._borderWidth,s=e.shadowW,l=e.shadowH;t&&(t.clearRect(0,0,t.canvas.width,t.canvas.height),t.shadowOffsetX=e._boxShadow.x,t.shadowOffsetY=e._boxShadow.y,t.shadowBlur=e._boxShadow.blur,t.shadowColor=e._boxShadow.color,e._borderWidth>0&&(t.fillStyle=e._borderColor,e._roundedRect(t,e.shadowL,e.shadowT,o-s,n-l,r),t.fill(),t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0),e._drawTextBox(function(){t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0;var a=e._clipText(),d=e._padding+e._borderWidth+e.shadowT;if(e._selection[1]>0){var c=e._textWidth(a.substring(0,e._selection[0])),h=e._textWidth(a.substring(e._selection[0],e._selection[1]));t.fillStyle=e._selectionColor,t.fillRect(d+c,d,h,e._height)}if(e._cursor){var u=e._textWidth(a.substring(0,e._cursorPos));t.fillStyle=e._fontColor,t.fillRect(d+u,d,1,e._height)}var f=e._padding+e._borderWidth+e.shadowL,_=Math.round(d+e._height/2);a=""===a&&e._placeHolder?e._placeHolder:a,t.fillStyle=""!==e._value&&e._value!==e._placeHolder?e._fontColor:e._placeHolderColor,t.font=e._fontStyle+" "+e._fontWeight+" "+e._fontSize+"px "+e._fontFamily,t.shadowColor=e._fontShadowColor,t.shadowBlur=e._fontShadowBlur,t.shadowOffsetX=e._fontShadowOffsetX,t.shadowOffsetY=e._fontShadowOffsetY,t.textAlign="left",t.textBaseline="middle",t.fillText(a,f,_);var p=e._innerShadow.split("px "),v="none"===e._innerShadow?0:parseInt(p[0],10),g="none"===e._innerShadow?0:parseInt(p[1],10),w="none"===e._innerShadow?0:parseInt(p[2],10),b="none"===e._innerShadow?"":p[3];if(w>0){var y=e._shadowCtx,m=y.canvas.width,S=y.canvas.height;y.clearRect(0,0,m,S),y.shadowBlur=w,y.shadowColor=b,y.shadowOffsetX=0,y.shadowOffsetY=g,y.fillRect(-1*o,-100,3*o,100),y.shadowOffsetX=v,y.shadowOffsetY=0,y.fillRect(m,-1*n,100,3*n),y.shadowOffsetX=0,y.shadowOffsetY=g,y.fillRect(-1*o,S,3*o,100),y.shadowOffsetX=v,y.shadowOffsetY=0,y.fillRect(-100,-1*n,100,3*n),e._roundedRect(t,i+e.shadowL,i+e.shadowT,o-2*i-s,n-2*i-l,r),t.clip(),t.drawImage(e._shadowCanvas,0,0,m,S,i+e.shadowL,i+e.shadowT,m,S)}return e._ctx&&(e._ctx.clearRect(e._x,e._y,t.canvas.width,t.canvas.height),e._ctx.drawImage(e._renderCanvas,e._x,e._y)),e}))},destroy:function(){var e=n.indexOf(this);-1!=e&&n.splice(e,1),this._hasFocus&&this.blur(),this._hiddenInput=null,this._renderCanvas=null,this._shadowCanvas=null,this._renderCtx=null},_drawTextBox:function(e){var t=this,o=t._renderCtx,n=t.outerW,r=t.outerH,i=t._borderRadius,s=t._borderWidth,l=t.shadowW,a=t.shadowH;if(""===t._backgroundImage)o.fillStyle=t._backgroundColor,t._roundedRect(o,s+t.shadowL,s+t.shadowT,n-2*s-l,r-2*s-a,i),o.fill(),e();else{var d=new Image;d.src=t._backgroundImage,d.onload=function(){o.drawImage(d,0,0,d.width,d.height,s+t.shadowL,s+t.shadowT,n,r),e()}}},_clearSelection:function(){if(this._selection[1]>0){var e=this._selection[0],t=this._selection[1];return this._value=this._value.substr(0,e)+this._value.substr(t),this._cursorPos=e,this._cursorPos=this._cursorPos<0?0:this._cursorPos,this._selection=[0,0],!0}return!1},_clipText:function(e){e=void 0===e?this._value:e;var t=this._textWidth(e)/(this._width-this._padding);return(t>1?e.substr(-1*Math.floor(e.length/t)):e)+""},_textWidth:function(e){var t=this._renderCtx;return t.font=this._fontStyle+" "+this._fontWeight+" "+this._fontSize+"px "+this._fontFamily,t.textAlign="left",t.measureText(e).width},_calcWH:function(){this.outerW=this._width+2*this._padding+2*this._borderWidth+this.shadowW,this.outerH=this._height+2*this._padding+2*this._borderWidth+this.shadowH},_updateCanvasWH:function(){var e=this._renderCanvas.width,t=this._renderCanvas.height;this._renderCanvas.setAttribute("width",this.outerW),this._renderCanvas.setAttribute("height",this.outerH),this._shadowCanvas.setAttribute("width",this._width+2*this._padding),this._shadowCanvas.setAttribute("height",this._height+2*this._padding),this._ctx&&this._ctx.clearRect(this._x,this._y,e,t)},_updateHiddenInput:function(){this._hiddenInput.style.left=this._x+this._extraX+(this._canvas?this._canvas.offsetLeft:0)+"px",this._hiddenInput.style.top=this._y+this._extraY+(this._canvas?this._canvas.offsetTop:0)+"px",this._hiddenInput.style.width=this._width+2*this._padding+"px",this._hiddenInput.style.height=this._height+2*this._padding+"px"},_roundedRect:function(e,t,o,n,r,i){n<2*i&&(i=n/2),r<2*i&&(i=r/2),e.beginPath(),e.moveTo(t+i,o),e.lineTo(t+n-i,o),e.quadraticCurveTo(t+n,o,t+n,o+i),e.lineTo(t+n,o+r-i),e.quadraticCurveTo(t+n,o+r,t+n-i,o+r),e.lineTo(t+i,o+r),e.quadraticCurveTo(t,o+r,t,o+r-i),e.lineTo(t,o+i),e.quadraticCurveTo(t,o,t+i,o),e.closePath()},_overInput:function(e,t){var o=e>=this._x+this._extraX,n=e<=this._x+this._extraX+this._width+2*this._padding,r=t>=this._y+this._extraY,i=t<=this._y+this._extraY+this._height+2*this._padding;return o&&n&&r&&i},_clickPos:function(e,t){var o=this._value;this._value===this._placeHolder&&(o="");var n=this._clipText(o),r=0,i=n.length;if(e-(this._x+this._extraX)<this._textWidth(n))for(var s=0;s<n.length;s++)if((r+=this._textWidth(n[s]))>=e-(this._x+this._extraX)){i=s;break}return i},_mousePos:function(e){var t=e.target,o=e.pageX,n=e.pageY;e.touches&&e.touches.length?(t=e.touches[0].target,o=e.touches[0].pageX,n=e.touches[0].pageY):e.changedTouches&&e.changedTouches.length&&(t=e.changedTouches[0].target,o=e.changedTouches[0].pageX,n=e.changedTouches[0].pageY);var r=document.defaultView.getComputedStyle(t,undefined),i=parseInt(r.paddingLeft,10)||0,s=parseInt(r.paddingLeft,10)||0,l=parseInt(r.borderLeftWidth,10)||0,a=parseInt(r.borderLeftWidth,10)||0,d=document.body.parentNode.offsetTop||0,c=document.body.parentNode.offsetLeft||0,h=0,u=0;if("undefined"!=typeof t.offsetParent)do{h+=t.offsetLeft,u+=t.offsetTop}while(t=t.offsetParent);return{x:o-(h+=i+l+c),y:n-(u+=s+a+d)}}};var i=r;t["default"]=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(o(1)),r=i(o(15));function i(e){return e&&e.__esModule?e:{"default":e}}var s={padding:0,width:300,lineHeight:100,family:'"Helvetica Neue",Helvetica,Arial,sans-serif'},l=function(e){e.content.img=e.text?(0,r["default"])(e.text,Object.assign({},s,{lineHeight:e.style.fontSize,textAlign:"left"},e.style)):undefined},a=function(e,t){var o;return e.name=e.name||"Text",o=new t.Sprite(e),l(o),Object.defineProperty(o,"text",{get:function(){return o.content.text},set:function(e){o.content.text=e,l(o)}}),o.update=function(e){this.__proto__.update.call(this,e),l(this)},o};(0,n["default"])(a,"RichText");var d=a;t["default"]=d},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=(n=o(1))&&n.__esModule?n:{"default":n};var i={left:0,top:0},s={left:0,top:0},l=function(e,t){e.onDragStep?e.onDragStep({left:s.left+t.canvasX-i.left,top:s.top+t.canvasY-i.top}):(e.style.left=s.left+t.canvasX-i.left,e.style.top=s.top+t.canvasY-i.top)},a=function(e,t){var o;return e.name=e.name||"Draggable",(o=new t.Sprite(e)).addEventListener("mousedown",function(e){i.left=e.canvasX,i.top=e.canvasY,s.left=o.getSelfStyle("left"),s.top=o.getSelfStyle("top");o.$canvas.addEventListener("interceptor",function t(e){"mousemove"===e.type?l(o,e):"mouseup"===e.type&&(o.$canvas.removeEventListener("interceptor",t),o.onDragEnd&&o.onDragEnd({left:s.left+e.canvasX-i.left,top:s.top+e.canvasY-i.top}))})}),o.addEventListener("touchstart",function(e){i.left=e.canvasX,i.top=e.canvasY,s.left=o.getSelfStyle("left"),s.top=o.getSelfStyle("top");o.$canvas.addEventListener("interceptor",function t(e){"touchmove"===e.type?l(o,e):"touchend"===e.type&&o.$canvas.removeEventListener("interceptor",t)})}),o};(0,r["default"])(a,"Draggable");var d=a;t["default"]=d}]));