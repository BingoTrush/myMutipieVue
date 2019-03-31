//>>built
define("dgrid/editor","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/on dojo/aspect dojo/has dojo/query ./Grid put-selector/put dojo/_base/sniff".split(" "),function(C,s,D,w,k,t,q,E,x,p){function u(a,d){a.value=d;if("radio"==a.type||"checkbox"==a.type)a.checked=a.defaultChecked=!!d}function y(a,d){if("number"==typeof d)a=isNaN(a)?a:parseFloat(a);else if("boolean"==typeof d)a="true"==a?!0:"false"==a?!1:a;else if(d instanceof Date){var b=new Date(a);a=isNaN(b.getTime())?
a:b}return a}function F(a,d,b,c,g){var f,e,h;if((b&&b.valueOf())!=(c&&c.valueOf())&&(f=a.cell(d),e=f.row,h=f.column,h.field&&e))if(f={grid:a,cell:f,rowId:e.id,oldValue:b,value:c,bubbles:!0,cancelable:!0},g&&g.type&&(f.parentType=g.type),k.emit(d,"dgrid-datachange",f))a.updateDirty?(a.updateDirty(e.id,h.field,c),h.autoSave&&setTimeout(function(){a._trackError("save")},0)):e.data[h.field]=c;else{var l;(l=d.widget)?(l._dgridIgnoreChange=!0,l.set("value",b),setTimeout(function(){l._dgridIgnoreChange=
!1},0)):(l=d.input)&&u(l,b);return b}return c}function v(a,d,b,c){var g;if(!b.isValid||b.isValid())if(c=F(a,(b.domNode||b).parentNode,m?n:b._dgridLastValue,"function"==typeof b.get?y(b.get("value")):y(b["checkbox"==b.type||"radio"==b.type?"checked":"value"]),c),m?n=c:b._dgridLastValue=c,"radio"===b.type&&b.name&&!d.editOn&&d.field)for(g in c=a.row(b),E("input[type\x3dradio][name\x3d"+b.name+"]",a.contentNode).forEach(function(c){var e=a.row(c);c!==b&&c._dgridLastValue&&(c._dgridLastValue=!1,a.updateDirty?
a.updateDirty(e.id,d.field,!1):e.data[d.field]=!1)}),a.dirty)c.id!==g&&a.dirty[g][d.field]&&a.updateDirty(g,d.field,!1)}function z(a){var d=a.editor,b=a.editOn,c=a.grid,g="string"!=typeof d,f,e,h;f=a.editorArgs||{};"function"==typeof f&&(f=f.call(c,a));if(g)e=new d(f),g=e.focusNode||e.domNode,g.className+=" dgrid-input",e.connect(e,b?"onBlur":"onChange",function(){e._dgridIgnoreChange||v(c,a,this,{type:"widget"})});else if(h=function(b){var e=b.target;"_dgridLastValue"in e&&-1<e.className.indexOf("dgrid-input")&&
v(c,a,e,b)},a.grid._hasInputListener||(c._hasInputListener=!0,c.on("change",function(a){h(a)})),e=g=p(("textarea"==d?"textarea":"input[type\x3d"+d+"]")+".dgrid-input",s.mixin({name:a.field,tabIndex:isNaN(a.tabIndex)?-1:a.tabIndex},f)),9>q("ie")||q("ie")&&q("quirks"))"radio"==d||"checkbox"==d?k(e,"click",function(a){h(a)}):k(e,"change",function(a){h(a)});k(g,"mousedown",function(a){a.stopPropagation()});return e}function G(a,d){function b(){var a=m;h.blur();"function"===typeof g.focus&&setTimeout(function(){g.focus(a)},
f&&9>q("ie")?15:0)}var c=z(a),g=a.grid,f=c.domNode,e=c.domNode||c,h=c.focusNode||e,l=f?function(){c.set("value",c._dgridLastValue)}:function(){u(c,c._dgridLastValue);v(a.grid,a,c)};k(h,"keydown",function(e){e=e.keyCode||e.which;27==e?(l(),n=c._dgridLastValue,b()):13==e&&!1!==a.dismissOnEnter&&b()});(a._editorBlurHandle=k.pausable(c,"blur",function(){var b=e.parentNode,d=b.children.length-1,f={alreadyHooked:!0},h=g.cell(e);k.emit(h.element,"dgrid-editor-hide",{grid:g,cell:h,column:a,editor:c,bubbles:!0,
cancelable:!1});a._editorBlurHandle.pause();b.removeChild(e);for(p(h.element,"!dgrid-cell-editing");d--;)p(b.firstChild,"!");x.appendIfNode(b,a.renderCell(a.grid.row(b).data,n,b,r?s.delegate(f,r):f));m=n=r=null})).pause();return c}function A(a,d,b,c){var g=a.domNode,f=d.grid;g||u(a,c);b.innerHTML="";p(b,".dgrid-cell-editing");p(b,a.domNode||a);g&&(a._started||a.startup(),a._dgridIgnoreChange=!0,a.set("value",c),setTimeout(function(){a._dgridIgnoreChange=!1},0));a._dgridLastValue=c;m&&(n=c,k.emit(b,
"dgrid-editor-show",{grid:f,cell:f.cell(b),column:d,editor:a,bubbles:!0,cancelable:!1}))}function B(a){var d,b,c,g,f,e;a.column||(a=this.cell(a));if(!a||!a.element)return null;d=a.column;g=d.field;b=a.element.contents||a.element;if(f=d.editorInstance){if(m!=b&&(!d.canEdit||d.canEdit(a.row.data,c)))return m=b,a=a.row,c=(c=this.dirty&&this.dirty[a.id])&&g in c?c[g]:d.get?d.get(a.data):a.data[g],A(d.editorInstance,d,b,c),e=new w,setTimeout(function(){f.focus&&f.focus();d._editorBlurHandle&&d._editorBlurHandle.resume();
e.resolve(f)},0),e.promise}else if(d.editor&&(f=b.widget||b.input))return e=new w,f.focus&&f.focus(),e.resolve(f),e.promise;return null}var m,n,r;s.getObject("dgrid.editor",!0);return dgrid.editor=function(a,d,b){var c=a.renderCell||x.defaultRenderCell,g=[],f;a||(a={});a.editor=d=d||a.editor||"text";a.editOn=b=b||a.editOn;f="string"!=typeof d;a.widgetArgs&&(C.deprecated("column.widgetArgs","use column.editorArgs instead","dgrid 0.4"),a.editorArgs=a.widgetArgs);t.after(a,"init",b?function(){var b=
a.grid;b.edit||(b.edit=B);a.editorInstance=G(a,c)}:function(){var b=a.grid;b.edit||(b.edit=B);f&&g.push(t.before(b,"removeRow",function(c){(c=(c=b.cell(c,a.id).element)&&(c.contents||c).widget)&&c.destroyRecursive()}))});t.after(a,"destroy",function(){D.forEach(g,function(a){a.remove()});a._editorBlurHandle&&a._editorBlurHandle.remove();b&&f&&a.editorInstance.destroyRecursive()});a.renderCell=b?function(e,d,f,g){if(!g||!g.alreadyHooked)k("TD"==f.tagName?f:f.parentNode,b,function(){r=g;a.grid.edit(this)});
return c.call(a,e,d,f,g)}:function(b,d,g,k){if(!a.canEdit||a.canEdit(b,d))b=z(a),A(b,a,g,d),g[f?"widget":"input"]=b;else return c.call(a,b,d,g,k)};return a}});