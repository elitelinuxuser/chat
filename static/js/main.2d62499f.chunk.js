(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),i=n.n(c),r=(n(16),n(3)),s=n.n(r),l=(n(17),n(4)),u=n(5),m=n(8),d=n(6),p=n(9),f=n(7),h=n.n(f),w=!0,v=!1,b=[];function g(e){if(w)if(v)e(window.FB);else if(b.push(e),!window.fbAsyncInit){window.fbAsyncInit=function(){window.FB.init({xfbml:!1,version:"v3.2"}),v=!0,b.forEach(function(e){return e(window.FB)}),b=null};h()("https://connect.facebook.net/en_US/sdk/xfbml.customerchat".concat("/debug",".js"),{async:!0})}}a.a.createContext({});var E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout(function(){g(function(t){return e.timeout&&t.XFBML.parse()})},3e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),delete this.timeout}},{key:"render",value:function(){return a.a.createElement("div",{className:"fb-customerchat",attribution:"setup_tool",page_id:"164726754368030"})}}]),t}(a.a.PureComponent);var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),a.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.2d62499f.chunk.js.map