//>>built
define("dojox/mobile/_css3",["dojo/_base/window","dojo/_base/array","dojo/has"],function(p,g,q){var h=[],k=[],l=p.doc.createElement("div").style,m=["webkit"];q.add("css3-animations",function(a,d,b){var c=b.style;return void 0!==c.animation&&void 0!==c.transition||g.some(m,function(a){return void 0!==c[a+"Animation"]&&void 0!==c[a+"Transition"]})});var f={name:function(a,d){var b=(d?k:h)[a];if(!b){if(/End|Start/.test(a))var c=a.length-(a.match(/End/)?3:5),f=a.substr(0,c),n=this.name(f),b=n==f?a.toLowerCase():
n+a.substr(c);else if("keyframes"==a)c=this.name("animation",d),b="animation"==c?a:d?c.replace(/animation/,"keyframes"):c.replace(/Animation/,"Keyframes");else{var e=d?a.replace(/-(.)/g,function(a,b){return b.toUpperCase()}):a;void 0!==l[e]?b=a:(e=e.charAt(0).toUpperCase()+e.slice(1),g.some(m,function(c){void 0!==l[c+e]&&(b=d?"-"+c+"-"+a:c+e)}))}b||(b=a);(d?k:h)[a]=b}return b},add:function(a,d){for(var b in d)d.hasOwnProperty(b)&&(a[f.name(b)]=d[b]);return a}};return f});