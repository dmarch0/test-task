(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(281)},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(42),i=a.n(l),c=a(7),s=a(6),o=a(102),m=a(284),u=a(45),f=[],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=Object(u.a)(e);switch(t.type){case"ADD_FILE":return a.push(t.payload),a;case"REMOVE_FILE":return a.splice(t.payload,1),a;default:return e}},E=a(10),p={isFileDndDisplayed:!1,lettersLoading:!1,isLetterSend:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_FILE_DND":return{isFileDndDisplayed:!0};case"CLOSE_FILE_DND":return{isFileDndDisplayed:!1};case"LETTERS_LOADING":return Object(E.a)({},e,{lettersLoading:!0});case"ADD_LETTER":return Object(E.a)({},e,{lettersLoading:!1});case"LETTER_SEND":return Object(E.a)({},e,{isLetterSend:!0,email:t.payload});default:return e}},b={},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILE_ERROR":return Object(E.a)({},e,{file:t.payload});case"CLOSE_FILE_DND":var a=Object(E.a)({},e);return delete a.file,a;case"VALIDATION_ERROR":return Object(E.a)({},e,{form:t.payload});case"CLEAR_ERROR":return{};default:return e}},v=[],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LETTERS":return t.payload;case"ADD_LETTER":var a=Object(u.a)(e);return a.push(t.payload),a;default:return e}},N=Object(s.c)({test:function(){return 5},form:m.a,files:d,ui:_,error:y,letters:h}),g=(a(173),function(e){var t=e.letter,a=function(e){var t="",a=e.split("-")[1];switch(t+=e.split("-")[2].split(" ")[0]+" ",a){case"01":return t+="\u044f\u043d\u0432\u0430\u0440\u044f";case"02":return t+="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";case"03":return t+="\u043c\u0430\u0440\u0442\u0430";case"04":return t+="\u0430\u043f\u0440\u0435\u043b\u044f";case"05":return t+="\u043c\u0430\u044f";case"06":return t+="\u0438\u044e\u043d\u044f";case"07":return t+="\u0438\u044e\u043b\u044f";case"08":return t+="\u0430\u0432\u0433\u0443\u0441\u0442\u0430";case"09":return t+="\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";case"10":return t+="\u043e\u043a\u0442\u044f\u0431\u0440\u044f";case"11":return t+="\u043d\u043e\u044f\u0431\u0440\u044f";case"12":return t+="\u0434\u0435\u043a\u0430\u0431\u0440\u044f";default:return t}}(t.date);return r.a.createElement("tr",{className:"letters-item"},r.a.createElement("th",{className:"letter-item__column"},a),r.a.createElement("th",{className:"letter-item__column"},t.subject),"-1"===t.status?r.a.createElement("th",{className:"letter-item__column_success"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"):t.status<-1?r.a.createElement("th",{className:"letter-item__column_fail"},"\u041e\u0448\u0438\u0431\u043a\u0430"):r.a.createElement("th",{className:"letter-item__column_await"},"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"))}),O=(a(174),Object(c.b)(function(e){return{letters:e.letters,loading:e.ui.lettersLoading}},{})(function(e){var t=e.letters,a=e.loading?r.a.createElement("p",null,"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0441\u0435\u0439\u0447\u0430\u0441 \u043c\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043c \u0432\u0430\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"):t.length>0?r.a.createElement("table",{className:"letters-table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"letters-header"},r.a.createElement("th",{className:"letters-header__date-column"},"\u0414\u0430\u0442\u0430"),r.a.createElement("th",{className:"letters-header__subject-column"},"\u0422\u0435\u043c\u0430"),r.a.createElement("th",{className:"letters-header__status-column"},"\u0421\u0442\u0430\u0442\u0443\u0441"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(g,{letter:e,key:t})}))):r.a.createElement("p",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0435 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043b\u0438\u0441\u044c");return r.a.createElement("div",{className:"letters-container"},r.a.createElement("h1",{className:"letters-container__header"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),a)})),j=a(104),D=a.n(j),L=a(14),R=(a(175),Object(c.b)(function(e){return{isDisplayed:e.ui.isFileDndDisplayed,fileError:e.error.file}},{addFile:function(e){return function(t){if(a=e.name,/^(.*\.(?!(jpg|gif|png|doc|xls|pdf|zip)$))?[^.]*$/i.test(a))return t({type:"FILE_ERROR",payload:"\u041d\u0435\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430"});var a;if(!(e.size<5e6))return t({type:"FILE_ERROR",payload:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 5Mb"});var n={name:e.name,encoding:"base64",size:e.size};new Promise(function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(){return a(n.error)}}).then(function(e){t({type:"CLOSE_FILE_DND"}),t({type:"ADD_FILE",payload:Object(E.a)({},n,{content:e})})}).catch(function(e){return console.log(e)})}},closeDnd:function(){return{type:"CLOSE_FILE_DND"}}})(function(e){var t=e.addFile,a=e.isDisplayed,n=e.closeDnd,l=e.fileError;return r.a.createElement("div",{className:D()({"file-input_displayed":a,"file-input":!a}),onDrop:function(e){e.preventDefault();var a=!0,n=!1,r=void 0;try{for(var l,i=e.dataTransfer.files[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var c=l.value;t(c)}}catch(s){n=!0,r=s}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}},onDragOver:function(e){e.preventDefault()}},r.a.createElement("h1",{className:"file-input__header"},"\u0411\u0440\u043e\u0441\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430, \u044f \u043b\u043e\u0432\u043b\u044e"),r.a.createElement("p",{className:"file-input__text"},"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 (jpg, png, gif), \u043e\u0444\u0438\u0441\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b(doc, xls, pdf) \u0438 zip-\u0430\u0440\u0445\u0438\u0432\u044b."),r.a.createElement("p",{className:"file-input__text"},"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u0430 \u0434\u043e 5 \u041c\u0411"),r.a.createElement("p",{className:"file-input__error-display"},l),r.a.createElement("div",{className:"file-input__btn-close",onClick:n},r.a.createElement(L.c,null)))})),S=(a(176),Object(c.b)(function(e){return{email:e.ui.email}},{})(function(e){var t=e.email;return r.a.createElement("div",{className:"message-status"},r.a.createElement("h1",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443"),r.a.createElement("p",null,"\u0421\u043e\u0432\u0441\u0435\u043c \u0441\u043a\u043e\u0440\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043b\u0435\u0442\u0438\u0442 \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \xab",t,"\xbb \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043e\u0432."),r.a.createElement("button",{className:"message-status__btn-reload",onClick:function(){return window.location.reload()}},r.a.createElement(L.b,null)))})),w=a(282),F=(a(177),a(283)),I=(a(178),function(e){var t=e.label,a=e.person,n=e.error;return r.a.createElement("div",{className:"email-input"},r.a.createElement("label",{className:"email-input__label"},t),r.a.createElement(F.a,{component:"input",type:"text",name:"".concat(a,"_name"),id:"".concat(a,"_name"),className:"email-input__field_left",placeholder:"\u0418\u043c\u044f"}),r.a.createElement(F.a,{component:"input",type:"email",name:"".concat(a,"_email"),id:"".concat(a,"_email"),className:"email-input__field_right",placeholder:"Email"}),r.a.createElement("div",{className:"email-error"},n.name?r.a.createElement("div",{className:"email-error__name"},n.name):null,n.email?r.a.createElement("div",{className:"email-error__email"},n.email):null))}),T=(a(179),function(e){var t=e.label,a=e.error;return r.a.createElement("div",{className:"subject-input"},r.a.createElement("label",{className:"subject-input__label"},t),r.a.createElement(F.a,{className:"subject-input__field",component:"input",type:"text",name:"subject",placeholder:"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430",id:"subject"}),a?r.a.createElement("div",{className:"subject-input__error-display"},a):null)}),x=(a(180),function(e){var t=e.label,a=e.error;return r.a.createElement("div",{className:"message-input"},r.a.createElement("label",{className:"message-input__label"},t),r.a.createElement(F.a,{className:"message-input__field",component:"textarea",name:"message",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"message"}),a?r.a.createElement("div",{className:"message-input__error-display"},a):null)}),A=(a(181),Object(c.b)(function(e){return{}},{openDnd:function(){return{type:"OPEN_FILE_DND"}}})(function(e){var t=e.openDnd;return r.a.createElement("button",{className:"attach-files-btn",type:"button",onClick:t},r.a.createElement(L.a,null),"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b")})),k=(a(80),Object(c.b)(null,{removeFile:function(e){return{type:"REMOVE_FILE",payload:e}}})(function(e){var t=e.file,a=e.removeFile,n=e.index;return r.a.createElement("div",{className:"file-list__item"},r.a.createElement("div",null,r.a.createElement(L.a,{size:"24"})),r.a.createElement("span",null,t.name),r.a.createElement("button",{type:"button",onClick:function(){return a(n)}},r.a.createElement(L.d,null)," \u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})),C=Object(c.b)(function(e){return{files:e.files}},{})(function(e){var t=e.files;return r.a.createElement("div",{className:"file-list"},t.map(function(e,t){return r.a.createElement(k,{file:e,key:t,index:t})}))}),z=a(15),V=a.n(z),J=["from_email","from_name","to_email","to_name","subject","message"],M=function(e,t){for(var a,n={},r=0,l=J;r<l.length;r++){var i=l[r];e[i]=void 0===(a=e[i])||null===a||"object"===typeof a&&0===Object.keys(a).length||"string"===typeof a&&0===a.trim().length?"":e[i]}return V.a.isEmail(e.from_email)||(n.from_email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"),V.a.isEmpty(e.from_email)&&(n.from_email="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),V.a.isEmpty(e.from_name)&&(n.from_name="\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),V.a.isEmail(e.to_email)||(n.to_email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"),V.a.isEmpty(e.to_email)&&(n.to_email="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),V.a.isEmpty(e.to_name)&&(n.to_name="\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),V.a.isEmpty(e.subject)&&(n.subject="\u0422\u0435\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"),V.a.isEmpty(e.message)&&(n.message="\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0445\u043e\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c"),function(e){var t=0,a=!0,n=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done);a=!0)t+=l.value.size}catch(c){n=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return t<=2e7}(t)||(n.files="\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 20 Mb"),{errors:n,isValid:0===Object.keys(n).length}},G=Object(w.a)({form:"main-form"})(function(e){var t=e.handleSubmit,a=e.submitForm,n=e.formError;e.reset,e.size;return r.a.createElement("form",{className:"main-form",onSubmit:t(function(e){a(e)}),noValidate:!0},r.a.createElement("h1",{className:"main-form__header"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),r.a.createElement(I,{label:"\u041e\u0442 \u043a\u043e\u0433\u043e",person:"from",error:{name:n.from_name,email:n.from_email}}),r.a.createElement(I,{label:"\u041a\u043e\u043c\u0443",person:"to",error:{name:n.to_name,email:n.to_email}}),r.a.createElement(T,{label:"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430",error:n.subject}),r.a.createElement(x,{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",error:n.message}),r.a.createElement(C,null),r.a.createElement(A,null),n.files?r.a.createElement("div",{className:"main-form__file-size-error"},"\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 20 Mb"):null,r.a.createElement("button",{className:"main-form__btn-submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}),P=Object(c.b)(function(e){return{formError:e.error.form?e.error.form:{}}},{submitForm:function(e,t){return function(t,a){var n=a().files,r=M(e,n),l=r.errors;if(!r.isValid)return t({type:"VALIDATION_ERROR",payload:l});t({type:"CLEAR_ERROR"});var i=[],c=!0,s=!1,o=void 0;try{for(var m,u=n[Symbol.iterator]();!(c=(m=u.next()).done);c=!0){var f=m.value;i.push({name:f.name,content:f.content,encoding:f.encoding})}}catch(_){s=!0,o=_}finally{try{c||null==u.return||u.return()}finally{if(s)throw o}}var d={action:"issue.send.test",letter:{subject:e.subject,"from.name":e.from_name,"from.email":e.from_email,"to.name":e.to_name,message:{text:e.message},attaches:i},sendwhen:"test",mca:[e.to_email]},p=new window.Sendsay({auth:{login:"daniil2305@yandex.ru",password:"xoo4Yav"}});t({type:"LETTER_SEND",payload:e.to_email}),p.request(d).then(function(t){return function(e){if(localStorage.letters){var t=JSON.parse(localStorage.letters);t.push(e),localStorage.setItem("letters",JSON.stringify(t))}else localStorage.setItem("letters",JSON.stringify([e]))}(Object(E.a)({},t,{subject:e.subject}))}).catch(function(e){return console.log(e)})}}})(G),q=Object(c.b)(function(e){return{isLetterSend:e.ui.isLetterSend}},{})(function(e){var t=e.isLetterSend;return r.a.createElement("div",null,t?r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(S,null)):r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(P,null),r.a.createElement(R,null)),r.a.createElement(O,null))}),Y=[o.a],$=Object(s.e)(N,Object(s.d)(s.a.apply(void 0,Y)));if(localStorage.letters){var B=new window.Sendsay({auth:{login:"daniil2305@yandex.ru",password:"xoo4Yav"}});$.dispatch({type:"LETTERS_LOADING"});var U=JSON.parse(localStorage.letters),H=!0,K=!1,Q=void 0;try{for(var W,X=function(){var e=W.value;B.request({action:"track.get",id:e["track.id"],session:"session"}).then(function(t){$.dispatch({type:"ADD_LETTER",payload:{date:t.obj.dt,subject:e.subject,status:t.obj.status}})})},Z=U[Symbol.iterator]();!(H=(W=Z.next()).done);H=!0)X()}catch(te){K=!0,Q=te}finally{try{H||null==Z.return||Z.return()}finally{if(K)throw Q}}}var ee=function(){return r.a.createElement(c.a,{store:$},r.a.createElement(q,null))};i.a.render(r.a.createElement(ee,null),document.getElementById("root"))},80:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.7474d176.chunk.js.map