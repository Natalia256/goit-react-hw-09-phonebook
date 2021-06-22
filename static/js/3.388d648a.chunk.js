(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[3],{86:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(35);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(c)throw r}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},87:function(t,e,n){t.exports={section:"Section_section__10g8W",title:"Section_title__2wrgI"}},88:function(t,e,n){t.exports={form:"ContactForm_form__1UxYt",label:"ContactForm_label__3AyYD",input:"ContactForm_input__1iEgY",button:"ContactForm_button__3eFYY"}},89:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__2HZrE",input:"Filter_input__2P0WG"}},90:function(t,e,n){t.exports={item:"ContactItem_item__3jphu",button:"ContactItem_button__5JMJ9"}},91:function(t,e,n){t.exports={phonebookWrapper:"PhonebookView_phonebookWrapper__3wcBM"}},95:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return J}));var a=n(0),c=n(9),r=n(34),o=n(87),i=n.n(o),u=n(1),s=function(t){var e=t.className,n=t.title,a=t.children,c=i.a.section+" "+e;return Object(u.jsxs)("section",{className:c,children:[Object(u.jsx)("h2",{className:i.a.title,children:n}),a]})},l=n(3),b=n(16),f=n(86),m=n(88),d=n.n(m),j=n(19),h=n.n(j),p=n(15),O=function(t){var e=t.name,n=t.number;return function(t){var a={name:e,number:n};t(p.a.addContactRequest()),h.a.post("/contacts",a).then((function(e){var n=e.data;return t(p.a.addContactSuccess(n))})).catch((function(e){return t(p.a.addContactError(e))}))}},_=function(t){return function(e){e(p.a.deleteContactRequest()),h.a.delete("./contacts/".concat(t)).then((function(){return e(p.a.deleteContactSuccess(t))})).catch((function(t){return e(p.a.deleteContactError(t))}))}},x=function(){return function(t){t(p.a.fetchContactRequest()),h.a.get("/contacts").then((function(e){var n=e.data;return t(p.a.fetchContactSuccess(n))})).catch((function(e){return t(p.a.fetchContactError(e))}))}};function v(){var t=Object(a.useState)({name:"",number:""}),e=Object(f.a)(t,2),n=e[0],r=e[1],o=Object(c.b)(),i=function(t){var e=t.currentTarget,n=e.name,a=e.value;r((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(l.a)({},n,a))}))},s=function(){return r({name:"",number:""})};return Object(u.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),o(O({contact:n})),s()},children:[Object(u.jsxs)("label",{className:d.a.label,children:["Name",Object(u.jsx)("input",{className:d.a.input,value:n.name,onChange:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{className:d.a.label,children:["Number",Object(u.jsx)("input",{className:d.a.input,value:n.number,onChange:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(u.jsx)("button",{className:d.a.button,type:"submit",children:"Add contact"})]})}var C=n(89),g=n.n(C),y=n(26),N=function(t){return t.contacts.items},S=function(t){return t.contacts.filter},w={getIsLoading:function(t){return t.contacts.loading},getContactsList:N,getFilter:S,getVisibleContacts:Object(y.a)([S,N],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))};function F(){var t=Object(c.c)(w.getFilter),e=Object(c.b)();return Object(u.jsxs)("label",{className:g.a.filterLabel,children:["Find contacts by name",Object(u.jsx)("input",{className:g.a.input,type:"text",value:t,onChange:function(t){return e(p.a.changeFilter(t.target.value))}})]})}var k=n(90),A=n.n(k),L=function(t){var e=t.id,n=t.name,a=t.number,r=Object(c.b)();return Object(u.jsxs)("li",{className:A.a.item,children:[n,": ",a,Object(u.jsx)("button",{className:A.a.button,type:"button",onClick:function(){return r(_(e))},children:"Delete"})]})};function E(){var t=Object(c.c)(w.getVisibleContacts);return t.length>0&&Object(u.jsx)("ul",{children:t.map((function(t){return Object(u.jsx)(L,{id:t.id,name:t.name,number:t.number},t.id)}))})}var I=n(91),q=n.n(I);function J(){var t=Object(c.c)(w.getIsLoading),e=Object(c.b)();return Object(a.useEffect)((function(){e(x())}),[e]),Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:q.a.phonebookWrapper,children:[Object(u.jsx)(s,{className:"formSection",title:"Phonebook",children:Object(u.jsx)(v,{})}),Object(u.jsxs)(s,{className:"contactsSection",title:"Contacts",children:[Object(u.jsx)(F,{}),t&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)(E,{})]})]})})}}}]);
//# sourceMappingURL=3.388d648a.chunk.js.map