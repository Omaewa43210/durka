(window.webpackJsonpdurka=window.webpackJsonpdurka||[]).push([[0],{127:function(e,t,a){e.exports=a(245)},245:function(e,t,a){"use strict";a.r(t);a(128),a(154),a(156),a(157),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(168),a(169),a(170),a(171),a(172),a(173),a(174),a(175),a(176),a(177),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(196);var n=a(0),o=a.n(n),c=a(79),r=a.n(c),s=a(16),l=a.n(s),i=a(52),m=a.n(i),u=a(81),d=a(12),p="https://digital-space74.tk/durka/",h=a(49),f=a.n(h),g=a(80),b=a.n(g),E=(a(222),a(84)),v=a.n(E),k=a(43),y=a.n(k),C=a(53),S=a.n(C),O=a(118),j=a.n(O),w=a(119),N=a.n(w),I=a(120),x=a.n(I),R=a(122),P=a.n(R),U=a(123),V=a.n(U),A=a(48),T=a.n(A),W=a(83),G=a.n(W),K=a(45),B=a.n(K),D=a(17),F=a.n(D),_=a(46),H=a.n(_),Q=a(124),L=a.n(Q),q=a(125),z=a.n(q),X=a(60),Z=a.n(X),M=a(82),J=a.n(M),Y=a(126),$=a.n(Y),ee=a(47),te=a.n(ee),ae=(a(73),a(121)),ne=a.n(ae),oe=function(e){var t=e.id,a=e.firstName,n=e.lastName,c=e.rating,r=e.shisoids,s=e.photoURL,l=e.amount;return o.a.createElement(F.a,{className:"card"},o.a.createElement("span",{className:"listNumber"},t),o.a.createElement(B.a,{className:"myItem",before:s?o.a.createElement(H.a,{src:s}):o.a.createElement(H.a,{src:"https://vk.com/images/camera_200.png"}),description:" \u0428\u0438\u0437\u043e\u0438\u0434\u044b ".concat(r," , DCoin ").concat(l),asideContent:c,indicator:o.a.createElement(ne.a,{fill:"black"})},a+" "+n))},ce=function(e){var t=e.id,a=e.name,n=(e.color,e.price),c=e.icon,r=e.openPay;return o.a.createElement(F.a,{className:"card"},o.a.createElement(B.a,{className:"myItem",before:c,description:o.a.createElement(te.a,{id:t,onClick:r,mode:"tertiary"},"\u043a\u0443\u043f\u0438\u0442\u044c")},a+" - "+n+" DCoin"))},re=function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.tabShop,c=e.tabHome,r=e.tabTop,s=e.activeTab,l=e.dataUsers,i=(e.progressOnChange,e.dispatch,e.state,e.story,e.addGroup),m=(e.incDec,e.openBase),u=e.dataShop,d=e.openPay,p=e.inventoryOpen,h=e.inventory,f=e.dataInventory,g=(e.getUser,e.durkaCoins),b=e.shisoids,E=e.transfer,v=e.targetId,k=e.onChangeHandlerId,y=e.onChangeHandlerAmount,C=e.amount,S=l.map((function(e,t){return o.a.createElement(oe,{key:e.id,id:t+1,photoURL:e.photoURL,firstName:e.firstName,lastName:e.lastName,rating:e.rating,shisoids:e.shisoids.length,amount:e.durkaCoins})})),O=u.map((function(e){return o.a.createElement(ce,{key:e.id,id:e.id,name:e.name,price:e.price,icon:e.icon,openPay:d})})),j=f.map((function(e){return o.a.createElement(ce,{key:e.id,id:e.id,name:e.name,price:e.price,icon:e.icon,openPay:d})}));return o.a.createElement(P.a,{id:t},o.a.createElement(V.a,null,"\u0414\u0423\u0420\u041a\u0410"),o.a.createElement(L.a,{vertical:"top"},o.a.createElement(z.a,{className:"TabsDefaultUser"},o.a.createElement(Z.a,{onClick:r,selected:"top"===s},"\u0422\u041e\u041f"),o.a.createElement(Z.a,{onClick:c,selected:"home"===s},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement(Z.a,{onClick:n,selected:"shop"===s},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"))),"top"===s?o.a.createElement(F.a,{className:"top"},S):"","home"===s?o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{className:"main"},a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{before:a.photo_200?o.a.createElement(H.a,{src:a.photo_200,size:120}):null}),o.a.createElement(F.a,null,"".concat(a.first_name," ").concat(a.last_name," ","(\u0428\u0438\u0437\u043e\u0438\u0434)"))),o.a.createElement(F.a,{className:"flexStart"},o.a.createElement(F.a,{className:"divPadding"},"\u041f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u043e: ",b," \u0448\u0438\u0437\u043e\u0438\u0434\u043e\u0432"),o.a.createElement(F.a,{className:"divPadding"},"\u0411\u0430\u043b\u0430\u043d\u0441: ",g," DurkaCoins")),o.a.createElement(T.a,{mode:"commerce",size:"xl",stretched:!0,onClick:m},"\u041f\u0440\u0438\u0432\u043b\u0435\u0447\u044c \u0448\u0438\u0437\u043e\u0438\u0434\u043e\u0432"),o.a.createElement(T.a,{className:"buttonAddGroup",mode:"commerce",onClick:i,size:"xl",stretched:!0},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0443 \u0433\u0440\u0443\u043f\u043f\u0443"),o.a.createElement($.a,null,o.a.createElement(J.a,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f"},o.a.createElement(G.a,{onChange:k,value:v,type:"text"})),o.a.createElement(J.a,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e DurkaCoin"},o.a.createElement(G.a,{onChange:y,value:C,type:"text"}))),o.a.createElement(T.a,{className:"buttonAddGroup",mode:"commerce",onClick:E,size:"xl",stretched:!0},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"),h?o.a.createElement(te.a,{className:"inventory",id:t,onClick:p,mode:"tertiary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c"):o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{className:"inventory",id:t,onClick:p,mode:"tertiary"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c"),o.a.createElement(F.a,null,j)))):"","shop"===s?o.a.createElement(F.a,{className:"top"},O):"")},se=function(){var e=window.navigator.onLine,t=Object(n.useState)("home"),a=Object(d.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),i=Object(d.a)(s,2),h=i[0],g=i[1],E=Object(n.useState)("home"),k=Object(d.a)(E,2),C=k[0],O=k[1],w=Object(n.useState)(!1),I=Object(d.a)(w,2),R=(I[0],I[1]),P=Object(n.useState)(),U=Object(d.a)(P,2),V=U[0],A=U[1],T=Object(n.useState)(""),W=Object(d.a)(T,2),G=W[0],K=W[1],B=Object(n.useState)(!1),D=Object(d.a)(B,2),F=(D[0],D[1]),_=Object(n.useState)(!1),H=Object(d.a)(_,2),Q=H[0],L=H[1],q=Object(n.useState)(0),z=Object(d.a)(q,2),X=z[0],Z=z[1],M=Object(n.useState)(0),J=Object(d.a)(M,2),Y=J[0],$=J[1],ee=Object(n.useState)(),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)(),ce=Object(d.a)(oe,2),se=ce[0],le=ce[1],ie=0,me=Object(n.useState)([]),ue=Object(d.a)(me,2),de=ue[0],pe=ue[1],he=Object(n.useState)([{id:1,name:"Blue \u043f\u0438\u043b\u044e\u043b\u044f\t",price:50,icon:o.a.createElement(S.a,{fill:"blue"})},{id:2,name:"Red \u043f\u0438\u043b\u044e\u043b\u044f",price:500,icon:o.a.createElement(S.a,{fill:"red"})},{id:3,name:"Gold \u043f\u0438\u043b\u044e\u043b\u044f",price:5e3,icon:o.a.createElement(S.a,{fill:"orange"})},{id:4,name:"\u041e\u0442\u043f\u0443\u0441\u043a",price:50,icon:o.a.createElement(N.a,{fill:"black"})},{id:5,name:"\u0421\u043c\u0438\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0443\u0431\u0430\u0448\u043a\u0430",price:50,icon:o.a.createElement(j.a,{fill:"black"})},{id:6,name:"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430",price:500,icon:o.a.createElement(x.a,{fill:"black"})}]),fe=Object(d.a)(he,2),ge=fe[0],be=(fe[1],Object(n.useState)([{id:1,name:"Blue \u043f\u0438\u043b\u044e\u043b\u044f",price:50,icon:o.a.createElement(S.a,{fill:"blue"})}])),Ee=Object(d.a)(be,2),ve=Ee[0];Ee[1];function ke(){var e="https://vk.com/app7351258#".concat(h.id);l.a.sendPromise("VKWebAppShowStoryBox",{background_type:"image",url:"https://sun1-89.userapi.com/HoZMa0ZNNFflt4SDnoomx0bNiCmRV-bOhbz3qw/hg7IHG1XIvg.jpg",attachment:{text:"go_to",type:"url",url:e}}).then((function(e){console.log("story res:",e)})).catch((function(e){console.log("story error:",e)}))}function ye(e){var t=.2*ge[ie-1].price;l.a.sendPromise("VKWebAppOpenPayForm",{app_id:7351258,action:"pay-to-group",params:{amount:t,group_id:192779261}}).then(function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.status&&!t.result.status){e.next=10;break}return e.prev=1,e.next=4,f.a.get(p("checkTransaction?userId=".concat(h.id)));case 4:"success"===e.sent.data.status&&(F(!0),console.log("\u041e\u041f\u041b\u0410\u0422\u0410 \u041f\u0420\u041e\u0428\u041b\u0410 1")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}function Ce(e){e.preventDefault();var t="https://vk.com/app7351258#".concat(h.id),a="photo-192779261_457239018,https://vk.com/app7351258#".concat(h.id);l.a.send("VKWebAppShowWallPostBox",{message:"\u0410 \u0442\u044b \u0443\u0436\u0435 \u0431\u044b\u043b \u0432 \u0414\u0423\u0420\u041a\u0415? \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 - ".concat(t),attachments:a})}function Se(){f.a.post("".concat(p,"/getUsers"),{search:localStorage.getItem("search")}).then((function(e){de.push(e.data.message),pe(e.data.message),console.log("getUsers",e)})).catch((function(e){console.log(e)}))}function Oe(){var e="https://vk.com/app7351258#".concat(h.id);l.a.sendPromise("VKWebAppGetClientVersion").then((function(t){console.log(t.platform),"web"===t.platform||"mobile-web"===t.platform?window.navigator.clipboard.writeText(e).then((function(){console.log("successfully set",e)}),(function(){console.log("write failed",e)})):l.a.send("VKWebAppCopyText",{text:e})})).catch((function(e){console.log(e)}))}Object(n.useEffect)((function(){e?(R(!1),console.log("checkNetworkStatus",e)):(R(!0),console.log("checkNetworkStatus",e)),console.log("dataUsers:",de)}),[e]),Object(n.useEffect)((function(){localStorage.setItem("search",document.location.search),l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var o=document.createAttribute("scheme");o.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(o)}})),f.a.post("".concat(p,"/getUser"),{search:localStorage.getItem("search")}).then((function(e){Z(e.data.message.durkaCoins),$(e.data.message.shisoids.length)})),l.a.send("VKWebAppGetUserInfo").then(function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Se(),function(){var e=window.location.hash;if(!e||Number.isNaN(+e.replace("#","")))return;var t=Number(e.replace("#",""));f.a.post("".concat(p,"/addShisoid"),{referrerId:t,search:localStorage.getItem("search")}).then((function(e){console.log("RESSS",e.data),e.data.status})).catch((function(e){console.log("addshERROR",e)}))}(),l.a.sendPromise("VKWebAppGetClientVersion").then((function(e){"ios"===e.platform&&K("ios")})).catch((function(e){console.log(e)}))}),[]),document.qiwiPay=function(){console.log("\u0412\u044b\u0437\u0432\u0430\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f qiwiPay");var e=.2*ge[ie-1].price;window.QiwiCheckout.createInvoice({publicKey:"48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPuaYVi5RBePrfT1bReScJaiVSaSRm3C2n7ojMWhn6FwadkMSHfVa9GEQaH6vxb8khX6TUwvZUBhqfgBNSx5zTnEf5LxBvmue1CEXUZkF1Z",amount:e,phone:"79625494201"}).then((function(e){alert(e),console.log("QIWI RESOLVE",e)})).catch((function(e){console.log("QIWI ERROR:",e)}))};return o.a.createElement(b.a,{activePanel:c,popout:V},o.a.createElement(re,{id:"home",fetchedUser:h,go:function(e){r(e.currentTarget.dataset.to)},tabShop:function(){O("shop")},tabHome:function(){O("home")},tabTop:function(){O("top")},activeTab:C,dataUsers:de,getPlatform:G,story:ke,addGroup:function e(){l.a.send("VKWebAppJoinGroup",{group_id:192779261}),console.log("\u0432\u044b\u0437\u0432\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e.:",e)},openBase:function e(){console.log("\u0432\u044b\u0437\u0432\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e",e),A(o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{onClose:function(){return A(null)}},o.a.createElement(y.a,{autoclose:!0,onClick:Oe},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"),o.a.createElement(y.a,{autoclose:!0,onClick:ke},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),o.a.createElement(y.a,{autoclose:!0,onClick:Ce},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435"))))},dataShop:ge,openPay:function(e){ie=e.currentTarget.id,console.log("VALUE targetIdShop",ie);var t=.2*ge[ie-1].price;console.log("priceItem1",t),A(o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{onClose:function(){return A(null)}},o.a.createElement(y.a,{autoclose:!0},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c DurkaCoin"),o.a.createElement(y.a,{autoclose:!0,onClick:document.qiwiPay},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 QIWI"),o.a.createElement(y.a,{autoclose:!0,onClick:ye},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 VK Pay"))))},inventoryOpen:function(){L(!Q)},inventory:Q,dataInventory:ve,transfer:function(){console.log("ID User :",se),console.log("User amount :",ae),f.a.post("".concat(p,"/sendDurkaCoins"),{search:localStorage.getItem("search"),targetId:se,amount:ae}).then((function(e){Z(X-ae),le(""),ne(""),Se(),console.log("transfer res",e)})).catch((function(e){console.log("transfer ERROR",e)}))},targetId:se,targetIdShop:ie,onChangeHandlerId:function(e){var t=e.target.value.trim();le(t)},onChangeHandlerAmount:function(e){var t=e.target.value.trim();ne(t)},shisoids:Y,durkaCoins:X,amount:ae}))};l.a.send("VKWebAppInit"),r.a.render(o.a.createElement(se,null),document.getElementById("root"))},73:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.46332c12.chunk.js.map