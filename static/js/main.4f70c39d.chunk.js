(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},19:function(t,e,n){},2:function(t,e,n){t.exports={Form:"Contact-form_Form__2jIx1",label:"Contact-form_label__3XsSz",input:"Contact-form_input__3Gh7X",button:"Contact-form_button__2tACL"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(12),o=n.n(s),l=(n(19),n(13)),i=n(3),u=n(4),b=n(6),p=n(5),h=n(9),m=n.n(h),j=n(8),d=n(22),f=n(2),O=n.n(f),_=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onSubmitHandler=function(e){if(0===e.currentTarget.name.value.length)alert("Please, fill the Name");else{e.preventDefault();var n={name:e.currentTarget.name.value,number:e.currentTarget.number.value,id:Object(d.a)()};t.setState({name:"",number:""}),t.props.onSubmit(n),t.clearState()}},t.onChangeHandler=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t}return Object(u.a)(n,[{key:"clearState",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:O.a.Form,onSubmit:this.onSubmitHandler,children:[Object(a.jsxs)("label",{className:O.a.label,children:[Object(a.jsx)("span",{children:"Name:"}),Object(a.jsx)("input",{className:O.a.input,type:"text",placeholder:"Name",name:"name",value:e,onChange:this.onChangeHandler})]}),Object(a.jsxs)("label",{className:O.a.label,children:[Object(a.jsx)("span",{children:"Number:"}),Object(a.jsx)("input",{className:O.a.input,type:"tel",placeholder:"Phone number",name:"number",value:n,onChange:this.onChangeHandler})]}),Object(a.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),C=n(11),v=n.n(C),x=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t.onChangeHandler=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c)),t.props.onChange(c)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("label",{className:v.a.label,children:[Object(a.jsx)("span",{children:"Find contacts by name"}),Object(a.jsx)("input",{className:v.a.input,type:"text",name:"filter",value:t,placeholder:"Type name here",onChange:this.onChangeHandler})]})}}]),n}(c.Component),g=n(7),y=n.n(g),N=function(t){var e=t.contacts,n=t.onClick;return Object(a.jsx)("ul",{className:y.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:y.a.item,children:[Object(a.jsx)("p",{className:y.a.text,children:t.name+": "+t.number}),Object(a.jsx)("button",{className:y.a.deleteBtn,type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})},k=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){t.checkContactUniqueness(e)?t.setState((function(t){return{contacts:[e].concat(Object(l.a)(t.contacts))}})):alert("".concat(e.name," is already in contacts"))},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e.currentTarget.id}));t.setState((function(t){return{contacts:n}}))},t.filterContacts=function(){return 0===t.state.filter.length?t.state.contacts:t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter)}))},t.setFilterValue=function(e){return t.setState({filter:e})},t}return Object(u.a)(n,[{key:"checkContactUniqueness",value:function(t){return this.state.contacts.every((function(e){return e.name.toLowerCase()!==t.name.toLowerCase()}))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(a.jsxs)("div",{className:m.a.App,children:[Object(a.jsx)("h1",{className:m.a.header,children:"Phonebook"}),Object(a.jsx)(_,{onSubmit:this.addContact}),Object(a.jsx)("h2",{className:m.a.header,children:"Contacts"}),Object(a.jsx)(x,{onChange:this.setFilterValue}),Object(a.jsx)(N,{contacts:0===n.length?e:this.filterContacts(),onClick:this.deleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"Contact-list_list__2eFkX",item:"Contact-list_item__jOA8O",text:"Contact-list_text__YW1Fi",deleteBtn:"Contact-list_deleteBtn__2xT5O"}},9:function(t,e,n){t.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv",header:"App_header__3ZZ1n"}}},[[20,1,2]]]);
//# sourceMappingURL=main.4f70c39d.chunk.js.map