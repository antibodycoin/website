(function(e){function t(t){for(var a,o,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);h&&h(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return d.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1cad954c":"d620dba0"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-1cad954c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-1cad954c":"fcb8743a"}[e]+".css",r=d.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={components:{}},c=i,d=(n("034f"),n("2877")),s=Object(d["a"])(c,o,r,!1,null,null,null),l=s.exports,u=(n("499a"),n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("8c4f")),h=function(){return n.e("chunk-1cad954c").then(n.bind(null,"77b8"))};a["default"].use(u["a"]);var f=u["a"].prototype.replace;u["a"].prototype.replace=function(e){return f.call(this,e).catch((function(e){return e}))};var p=[{path:"/",redirect:"/home"},{path:"/home",component:h,meta:["首页"]}],y=new u["a"]({mode:"hash",base:"",routes:p}),b=y,m=n("2f62");a["default"].use(m["a"]);var g=new m["a"].Store({state:{zh:window.localStorage.getItem("zh"),en:window.localStorage.getItem("en"),aaa:1111,account:"",chainId:"",balance:0,receive:0,receiveDisabled:!0},getters:{gettersColor:function(e){var t=e.initColor;return t}},mutations:{updateInitColor:function(e,t){e.initColor=t},setAccount:function(e,t){e.account=t},setChainId:function(e,t){e.chainId=t},setBalance:function(e,t){e.balance=t},setReceive:function(e,t){e.receive=t},setReceiveDisabled:function(e,t){e.receiveDisabled=t}},actions:{},modules:{}}),v=n("bc3a"),A=n.n(v),w=n("1f94"),B=n.n(w),C=n("4eb5"),k=n.n(C),T=n("5c96"),S=n.n(T),N=(n("0fae"),n("a925"));a["default"].use(B.a),a["default"].use(k.a),a["default"].prototype.$axios=A.a,a["default"].use(N["a"]);var O=new N["a"]({locale:"en",messages:{zh:n("d1cb"),en:n("5eeb")}}),I=n("d1cb"),F=n("5eeb");window.localStorage.setItem("zh",I),window.localStorage.setItem("en",F),console.log(I),a["default"].use(S.a),a["default"].config.productionTip=!1,new a["default"]({router:b,store:g,i18n:O,axios:A.a,render:function(e){return e(l)}}).$mount("#app")},"5eeb":function(e){e.exports=JSON.parse('{"user":{"name":"Homepage","battlefield":"Battlefield","abc":"ABC","NFT transactions":"NFT transactions","Biochemical Research Office":"Biochemical Research Office","Combat Research Office":"Combat Research Office","My Finance":"My Finance","Language":"Language","Teamfight":"Teamfight","Battle":" Battle","Battlefield Treasure Hunt":"Battlefield Treasure Hunt","chinese":"Z H","english":"E N","jiayuan":"ABC(Antibody Coin) is the basic token in Antibody ecosystem. It will be familiar to the public like Dogecoin. At the same time, Antibody provides new opportunity for everyone. In this brand-new ecosystem, we hope all Antibody users work together to guard our homeland.","Antibody":"Antibody Development Plan:","Start community":"1.Start community construction, and issue community pass","Economic":"(Economic model: the users are charged a transaction fee of 5% when they exchange their coins in Pancake. The fees are directly entered into the appointed contract address. The distribution system will be triggered when the contract balance meets the condition of setting threshold value. The 10% 0f contract balance is destroyed, 30% exchanged into BNB and sent to operation address, 30% exchanged into BNB and put into the reward pool for coin-holding dividends, 30% to increase liquidity)","Start trade":"2.Start trade market and hero NFT presale;","Start diversified":"3.Start diversified battlefields, and initiate growth system;","Upgrade battlefields":"4.Upgrade battlefields, and open alliance system","Antibody constructs":"Antibody constructs a non-profit and decentralized NFT ecosystem using blockchain technology. We are solid pusher of web 3.0, and we hope to introduce Antibody to more people, then more people attain rewards by holding ABC.","introduce":"introduce","login":"Login","close":"close","Battlefield introduction":"Battlefield introduction","Intheaffluent":"In the affluent battlefields, you could achieve ABC coins and have a chance to acquire NFT cards","Market Introduction":"NFT Market Introduction","Startyourfighting":"Start your fighting journey and acquire your wealth with one guard card","Biochemistry Laboratory":"Biochemistry Laboratory","Update technology":"Update technology and promote growth, and you could stand out with new cards in the battles.","War Laboratory":"War Laboratory","Break the":"Break the darkness with all forces together","Wallet Balance":"Wallet Balance","Accumulated Dividends":"Accumulated Dividends","Achieved":"Achieved","Not Achieved":"Not Achieved","Contract address":"Address","copy":"copy","buy":"buy","abcthe":"ABC, the basic token of the antibody ecosystem, is completely deflationary and aims to become more scarce over time.","Once again":"Once again, antibody is non-profit and decentralized, and all ABC is owned by community members. With the rapid growth of market value and user scale,","We hope":"We hope that more people can pay attention to and spread antibody, and  helping mankind become better is the goal of antibody community.","zong":"Basic token ABC in Antibody ecosystem is totally deflationary, and it aims at becoming rarer over time.We need to stress again that Antibody is non-profit and decentralized, and all ABC are owned by community members. With the rapid increase of market value and user size, we hope more people could pay attention to and spread Antibody. The goal of Antibody community is to help human be better."}}')},"85ec":function(e,t,n){},d1cb:function(e){e.exports=JSON.parse('{"user":{"name":"首页","battlefield":"战场","abc":"名称","NFT transactions":"NFT交易","Biochemical Research Office":"生化科研室","Combat Research Office":"作战研究室","My Finance":"我的财务","Language":"切换语言","Teamfight":"团战","Battle":"战斗","Battlefield Treasure Hunt":"战场 探宝","chinese":"中文","english":"英文","jiayuan":"ABC（Antibody Coin）是Antibody生态系统的基础代币。它会像狗狗币一样被公众熟悉，同时Antibody为每个人提供了新的机会，在全新的生态里，我们希望所有Antibody的用户能协同起来，保卫我们的家园。","Antibody":"Antibody发展计划：","Start community":"1、启动社区建设，发行社区通证；","Economic":"（经济模型：用户在pancake交易，收取5%手续费，手续费直接打入指定合约地址，当合约余额满足设置阈值条件后触发分发机制，合约余额的10%进行销毁，30%换成BNB发给运营地址，30%换成BNB进入奖励池进行持币分红，30%增加流动性）","Start trade":"2、启动交易市场，英雄NFT预售；","Start diversified":"3、开启多元化战场，启动成长系统；","Upgrade battlefields":"4、战场升级，开放联盟系统。","Antibody constructs":"Antibody利用区块链技术搭建了一个非盈利性去中心化的NFT生态。我们是web3.0坚定的推动者，我们希望将Antibody介绍给更多的人，更多的人通过持有ABC而获得回报。","introduce":"更多介绍","login":"登录","close":"关闭","Battlefield introduction":"战场介绍","Intheaffluent":"在丰富的战场上，你将收获ABC代币，并有几率收获NFT卡牌","Market Introduction":"NFT市场介绍","Startyourfighting":"拥有一张卫士卡牌，开启你的争战之旅，去收获你的财富吧","Biochemistry Laboratory":"生化研究室","Update technology":"升级科技、助力成长，新型卡牌让你在战斗中脱颖而出。","War Laboratory":"作战研究室","Break the":"集结一切力量，阻击一切黑暗。","Wallet Balance":"钱包余额","Accumulated Dividends":"累计分红","Achieved":"领取","Not Achieved":"未领取","Contract address":"合约地址","copy":"复制","buy":"购买","abcthe":"Antibody生态系统的基础代币ABC是完全通缩的，旨在随着时间的推移变得更加稀缺。","Once again":"再一次强调，Antibody是非盈利去中心化的，所有的ABC都由社区成员所拥有。随着市值和用户规模的快速增长，","We hope":"我们希望更多人可以去关注和传播Antibody，“帮助人类变得更好”是Antibody社区的目标。","zong":"Antibody生态系统的基础代币ABC是完全通缩的，旨在随着时间的推移变得更加稀再一次强调，Antibody是非盈利去中心化的，所有的ABC都由社区成员所拥有。随着市值和用户规模的快速增长，我们希望更多人可以去关注和传播Antibody，“帮助人类变得更好”是Antibody社区的目标。"}}')}});
//# sourceMappingURL=app.a3a41520.js.map