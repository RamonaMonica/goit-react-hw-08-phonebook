"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[924],{9924:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var o=t(3050),r=t(5861),a=t(4687),c=t.n(a),i=t(4420),l=t(7428),s=t(2680),d=t(4942),u=t(9439),f=t(2791),p=t(1418),m=t.n(p),b=t(7462),v=t(1413),h=t(4925),g=t(5179),x=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],y=(0,f.forwardRef)((function(e,n){var t=e.prefixCls,o=void 0===t?"rc-checkbox":t,r=e.className,a=e.style,c=e.checked,i=e.disabled,l=e.defaultChecked,s=void 0!==l&&l,p=e.type,y=void 0===p?"checkbox":p,Z=e.title,C=e.onChange,k=(0,h.Z)(e,x),w=(0,f.useRef)(null),j=(0,f.useRef)(null),S=(0,g.Z)(s,{value:c}),O=(0,u.Z)(S,2),E=O[0],I=O[1];(0,f.useImperativeHandle)(n,(function(){return{focus:function(e){var n;null===(n=w.current)||void 0===n||n.focus(e)},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current,nativeElement:j.current}}));var N=m()(o,r,(0,d.Z)((0,d.Z)({},"".concat(o,"-checked"),E),"".concat(o,"-disabled"),i));return f.createElement("span",{className:N,title:Z,style:a,ref:j},f.createElement("input",(0,b.Z)({},k,{className:"".concat(o,"-input"),ref:w,onChange:function(n){i||("checked"in e||I(n.target.checked),null===C||void 0===C||C({target:(0,v.Z)((0,v.Z)({},e),{},{type:y,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:i,checked:!!E,type:y})),f.createElement("span",{className:"".concat(o,"-inner")}))})),Z=y,C=t(117),k=t(417),w=t(1929),j=t(9125),S=t(7838),O=t(1940),E=f.createContext(null),I=t(243),N=t(7521),P=t(9922),z=t(5030),M=function(e){var n,t,o,r,a,c,i,l,s=e.checkboxCls,u="".concat(s,"-wrapper");return[(o={},(0,d.Z)(o,"".concat(s,"-group"),Object.assign(Object.assign({},(0,N.Wf)(e)),(0,d.Z)({display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS},"> ".concat(e.antCls,"-row"),{flex:1}))),(0,d.Z)(o,u,Object.assign(Object.assign({},(0,N.Wf)(e)),(n={display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"}},(0,d.Z)(n,"& + ".concat(u),{marginInlineStart:0}),(0,d.Z)(n,"&".concat(u,"-in-form-item"),{'input[type="checkbox"]':{width:14,height:14}}),n))),(0,d.Z)(o,s,Object.assign(Object.assign({},(0,N.Wf)(e)),(t={position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center"},(0,d.Z)(t,"".concat(s,"-input"),(0,d.Z)({position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0},"&:focus-visible + ".concat(s,"-inner"),Object.assign({},(0,N.oN)(e)))),(0,d.Z)(t,"".concat(s,"-inner"),{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat((0,I.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:"".concat((0,I.bf)(e.lineWidthBold)," solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}}),(0,d.Z)(t,"& + span",{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}),t))),o),(a={},(0,d.Z)(a,"\n        ".concat(u,":not(").concat(u,"-disabled),\n        ").concat(s,":not(").concat(s,"-disabled)\n      "),(0,d.Z)({},"&:hover ".concat(s,"-inner"),{borderColor:e.colorPrimary})),(0,d.Z)(a,"".concat(u,":not(").concat(u,"-disabled)"),(r={},(0,d.Z)(r,"&:hover ".concat(s,"-checked:not(").concat(s,"-disabled) ").concat(s,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),(0,d.Z)(r,"&:hover ".concat(s,"-checked:not(").concat(s,"-disabled):after"),{borderColor:e.colorPrimaryHover}),r)),a),(c={},(0,d.Z)(c,"".concat(s,"-checked"),(0,d.Z)({},"".concat(s,"-inner"),{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}})),(0,d.Z)(c,"\n        ".concat(u,"-checked:not(").concat(u,"-disabled),\n        ").concat(s,"-checked:not(").concat(s,"-disabled)\n      "),(0,d.Z)({},"&:hover ".concat(s,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"})),c),(0,d.Z)({},s,{"&-indeterminate":(0,d.Z)({},"".concat(s,"-inner"),{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}})}),(l={},(0,d.Z)(l,"".concat(u,"-disabled"),{cursor:"not-allowed"}),(0,d.Z)(l,"".concat(s,"-disabled"),(i={},(0,d.Z)(i,"&, ".concat(s,"-input"),{cursor:"not-allowed",pointerEvents:"none"}),(0,d.Z)(i,"".concat(s,"-inner"),{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}}),(0,d.Z)(i,"&:after",{display:"none"}),(0,d.Z)(i,"& + span",{color:e.colorTextDisabled}),(0,d.Z)(i,"&".concat(s,"-indeterminate ").concat(s,"-inner::after"),{background:e.colorTextDisabled}),i)),l)]};function B(e,n){var t=(0,P.TS)(n,{checkboxCls:".".concat(e),checkboxSize:n.controlInteractiveSize});return[M(t)]}var R=(0,z.I$)("Checkbox",(function(e,n){return[B(n.prefixCls,e)]})),V=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},D=function(e,n){var t,o,r=e.prefixCls,a=e.className,c=e.rootClassName,i=e.children,l=e.indeterminate,s=void 0!==l&&l,p=e.style,b=e.onMouseEnter,v=e.onMouseLeave,h=e.skipGroup,g=void 0!==h&&h,x=e.disabled,y=V(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),I=f.useContext(w.E_),N=I.getPrefixCls,P=I.direction,z=I.checkbox,M=f.useContext(E),B=f.useContext(O.aM).isFormItemInput,D=f.useContext(j.Z),_=null!==(o=(null===M||void 0===M?void 0:M.disabled)||x)&&void 0!==o?o:D,q=f.useRef(y.value);f.useEffect((function(){null===M||void 0===M||M.registerValue(y.value)}),[]),f.useEffect((function(){if(!g)return y.value!==q.current&&(null===M||void 0===M||M.cancelValue(q.current),null===M||void 0===M||M.registerValue(y.value),q.current=y.value),function(){return null===M||void 0===M?void 0:M.cancelValue(y.value)}}),[y.value]);var H=N("checkbox",r),T=(0,S.Z)(H),W=R(H,T),L=(0,u.Z)(W,3),G=L[0],F=L[1],X=L[2],A=Object.assign({},y);M&&!g&&(A.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),M.toggleOption&&M.toggleOption({label:i,value:y.value})},A.name=M.name,A.checked=M.value.includes(y.value));var K=m()("".concat(H,"-wrapper"),(t={},(0,d.Z)(t,"".concat(H,"-rtl"),"rtl"===P),(0,d.Z)(t,"".concat(H,"-wrapper-checked"),A.checked),(0,d.Z)(t,"".concat(H,"-wrapper-disabled"),_),(0,d.Z)(t,"".concat(H,"-wrapper-in-form-item"),B),t),null===z||void 0===z?void 0:z.className,a,c,X,T,F),$=m()((0,d.Z)({},"".concat(H,"-indeterminate"),s),k.A,F),J=s?"mixed":void 0;return G(f.createElement(C.Z,{component:"Checkbox",disabled:_},f.createElement("label",{className:K,style:Object.assign(Object.assign({},null===z||void 0===z?void 0:z.style),p),onMouseEnter:b,onMouseLeave:v},f.createElement(Z,Object.assign({"aria-checked":J},A,{prefixCls:H,className:$,disabled:_,ref:n})),void 0!==i&&f.createElement("span",null,i))))};var _=f.forwardRef(D),q=t(3433),H=t(1818),T=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},W=f.forwardRef((function(e,n){var t=e.defaultValue,o=e.children,r=e.options,a=void 0===r?[]:r,c=e.prefixCls,i=e.className,l=e.rootClassName,s=e.style,p=e.onChange,b=T(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),v=f.useContext(w.E_),h=v.getPrefixCls,g=v.direction,x=f.useState(b.value||t||[]),y=(0,u.Z)(x,2),Z=y[0],C=y[1],k=f.useState([]),j=(0,u.Z)(k,2),O=j[0],I=j[1];f.useEffect((function(){"value"in b&&C(b.value||[])}),[b.value]);var N=f.useMemo((function(){return a.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))}),[a]),P=h("checkbox",c),z="".concat(P,"-group"),M=(0,S.Z)(P),B=R(P,M),V=(0,u.Z)(B,3),D=V[0],W=V[1],L=V[2],G=(0,H.Z)(b,["value","disabled"]),F=a.length?N.map((function(e){return f.createElement(_,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:Z.includes(e.value),onChange:e.onChange,className:"".concat(z,"-item"),style:e.style,title:e.title,id:e.id,required:e.required},e.label)})):o,X={toggleOption:function(e){var n=Z.indexOf(e.value),t=(0,q.Z)(Z);-1===n?t.push(e.value):t.splice(n,1),"value"in b||C(t),null===p||void 0===p||p(t.filter((function(e){return O.includes(e)})).sort((function(e,n){return N.findIndex((function(n){return n.value===e}))-N.findIndex((function(e){return e.value===n}))})))},value:Z,disabled:b.disabled,name:b.name,registerValue:function(e){I((function(n){return[].concat((0,q.Z)(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},A=m()(z,(0,d.Z)({},"".concat(z,"-rtl"),"rtl"===g),i,l,L,M,W);return D(f.createElement("div",Object.assign({className:A,style:s},G,{ref:n}),f.createElement(E.Provider,{value:X},F)))})),L=W,G=_;G.Group=L,G.__ANT_CHECKBOX=!0;var F=G,X=t(2556),A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},K=t(4291),$=function(e,n){return f.createElement(K.Z,(0,b.Z)({},e,{ref:n,icon:A}))};var J=f.forwardRef($),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},U=function(e,n){return f.createElement(K.Z,(0,b.Z)({},e,{ref:n,icon:Q}))};var Y=f.forwardRef(U),ee=t(9273),ne=t(4217),te=t(184),oe=function(){var e=(0,i.I0)(),n=(0,i.v9)(ne.zh),t=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e((0,ee.Ib)(t));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}();return(0,te.jsxs)(l.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!1},onFinish:t,children:[(0,te.jsx)(l.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,te.jsx)(s.Z,{prefix:(0,te.jsx)(J,{className:"site-form-item-icon"}),placeholder:"Email"})}),(0,te.jsx)(l.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,te.jsx)(s.Z,{prefix:(0,te.jsx)(Y,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),(0,te.jsx)(l.Z.Item,{children:(0,te.jsx)(l.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,te.jsx)(F,{style:{color:"#fff",fontSize:"15px",fontWeight:700},children:"Remember me"})})}),n&&(0,te.jsx)(l.Z.Item,{children:(0,te.jsx)("div",{style:{color:"red"},children:"E-mail or password incorrect"})}),(0,te.jsx)(l.Z.Item,{children:(0,te.jsx)(X.ZP,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})};function re(){return(0,te.jsx)(o.B6,{children:(0,te.jsxs)("div",{children:[(0,te.jsx)(o.ql,{children:(0,te.jsx)("title",{children:"Login"})}),(0,te.jsx)(oe,{})]})})}}}]);
//# sourceMappingURL=924.172981be.chunk.js.map