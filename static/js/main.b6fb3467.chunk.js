(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(18),o=a(7),s=(a(39),a(2)),u=a(15),d=a(9),p=a(10),m=a(11),h=a(12),E=a(3),b="LOGIN_EMAIL",f="GET_CURRENCY",v="SAVE_EXPENSE",g="DELETE_EXPENSE",y="EDIT_EXPENSE",j="SAVE_UPDT_EXPENSE",O="https://economia.awesomeapi.com.br/json/all",x=(a(40),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",senha:"",isLogin:!1},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r))},e.handleClick=function(){var t=e.state.email;(0,e.props.sendEmail)(t),e.setState({isLogin:!0})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.senha,n=e.isLogin,l=!(/\S+@\S+\.\S+/.test(t)&&a.length>=6);return r.a.createElement("div",{className:"page"},r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"login-title"},r.a.createElement("h1",null,"TRYBE WALLET"),r.a.createElement("img",{src:"http://trybewallet.surge.sh/static/media/wallet.c40086e0.png",alt:"imagem de carteira"})),r.a.createElement("input",{className:"input",type:"email",placeholder:"Email","data-testid":"email-input",name:"email",value:t,onChange:this.handleChange}),r.a.createElement("input",{className:"input",type:"password",placeholder:"Senha","data-testid":"password-input",minLength:"6",name:"senha",value:a,onChange:this.handleChange}),r.a.createElement("button",{className:"button",type:"button",onClick:this.handleClick,disabled:l,style:{backgroundColor:l?"grey":"cornflowerBlue"}},"Entrar")),n&&r.a.createElement(s.a,{to:"/carteira"}))}}]),a}(r.a.Component)),C=Object(o.b)(null,(function(e){return{sendEmail:function(t){return e({type:b,payload:t})}}}))(x),w=(a(46),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.moeda,n=e.expenses;return r.a.createElement("div",{className:"header-main"},r.a.createElement("div",{className:"header-title"},r.a.createElement("img",{src:"http://trybewallet.surge.sh/static/media/wallet.c40086e0.png",alt:"imagem de carteira"}),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"TR"),r.a.createElement("h1",{className:"title-green"},"Y"),r.a.createElement("h1",null,"BE WALLET"))),r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"user-info"},r.a.createElement("span",{className:"material-symbols-outlined icon"},"account_circle"),r.a.createElement("span",{"data-testid":"email-field"},t)),r.a.createElement("div",{className:"wallet-info"},r.a.createElement("span",{className:"material-symbols-outlined icon"},"monetization_on"),r.a.createElement("span",{className:"wallet-span"},"R$:"),r.a.createElement("span",{className:"wallet-span","data-testid":"total-field"},n.reduce((function(e,t){var a=t.value,n=t.currency,r=t.exchangeRates,l=parseFloat(a)*parseFloat(r[n].ask);return e+Math.floor(100*l)/100}),0)),r.a.createElement("span",{className:"wallet-span","data-testid":"header-currency-field"},a))))}}]),a}(r.a.Component)),N=Object(o.b)((function(e){return{email:e.user.email,moeda:"BRL",expenses:e.wallet.expenses}}))(w),k=(a(47),"Alimenta\xe7\xe3o"),T=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={description:"",value:"",currency:"USD",method:"Dinheiro",tag:k,editing:!0},e.getCurrentExpense=function(){var t=e.props,a=t.expenses,n=t.idToEdit,r=a.find((function(e){return e.id===n}));e.setState(Object(E.a)(Object(E.a)({},r),{},{editing:!1}))},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r))},e.handleClick=function(){var t=e.props.saveExpense,a=e.state;delete a.editing,t(a),e.setState({description:"",value:"",currency:"USD",method:"Dinheiro",tag:k})},e.handleClickEdit=function(){var t=e.props.updateExpense,a=e.state;delete a.editing,t(a),e.setState({description:"",value:"",currency:"USD",method:"Dinheiro",tag:k})},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props.editor,t=this.state.editing;e&&t&&this.getCurrentExpense()}},{key:"render",value:function(){var e=this.props,t=e.currencies,a=e.editor,n=this.state,l=n.description,c=n.value,i=n.currency,o=n.method,s=n.tag,u=r.a.createElement("button",{type:"button",onClick:this.handleClickEdit,className:"btn-expenses"},"Editar despesa"),d=r.a.createElement("button",{type:"button",onClick:this.handleClick,className:"btn-expenses"},"Adicionar despesa");return r.a.createElement("form",{className:"form-expenses"},r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o:",r.a.createElement("input",{className:"expenses-input",name:"description",value:l,id:"description-input",type:"text","data-testid":"description-input",onChange:this.handleChange,placeholder:"Ex: McDonald's"})),r.a.createElement("label",{htmlFor:"value-input"},"Valor:",r.a.createElement("input",{className:"expenses-input",name:"value",value:c,id:"value-input",type:"text","data-testid":"value-input",onChange:this.handleChange,placeholder:"R$ 0,00"})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{className:"expenses-select",id:"currency",name:"currency",value:i,onChange:this.handleChange},t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{className:"expenses-select payment",name:"method",id:"method","data-testid":"method-input",value:o,onChange:this.handleChange},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Categoria:",r.a.createElement("select",{className:"expenses-select",name:"tag",id:"tag","data-testid":"tag-input",value:s,onChange:this.handleChange},r.a.createElement("option",{value:k},k),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),a?u:d)}}]),a}(r.a.Component),S=Object(o.b)((function(e){return{currencies:e.wallet.currencies,editor:e.wallet.editor,idToEdit:e.wallet.idToEdit,expenses:e.wallet.expenses}}),(function(e){return{saveExpense:function(t){return e(function(e){return function(t){fetch(O).then((function(e){return e.json()})).then((function(a){delete a.USDT;var n=Object(E.a)(Object(E.a)({},e),{},{exchangeRates:a});t({type:v,payload:n})}))}}(t))},updateExpense:function(t){return e(function(e){return{type:j,payload:e}}(t))}}}))(T),D=(a(48),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClickDelete=function(t){(0,e.props.deleteExpense)(t)},e.handleClickEdit=function(t){(0,e.props.editExpense)(t)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.expenses;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Descri\xe7\xe3o"),r.a.createElement("th",{scope:"col"},"Valor"),r.a.createElement("th",{scope:"col"},"Moeda"),r.a.createElement("th",{scope:"col"},"C\xe2mbio utilizado"),r.a.createElement("th",{scope:"col"},"Valor convertido"),r.a.createElement("th",{scope:"col"},"Moeda de convers\xe3o"),r.a.createElement("th",{scope:"col"},"M\xe9todo de pagamento"),r.a.createElement("th",{scope:"col"},"Tag"),r.a.createElement("th",{scope:"col"},"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(t){var a=t.id,n=t.description,l=t.value,c=t.currency,i=t.exchangeRates,o=t.method,s=t.tag,u=i[c].name,d=parseFloat(l)*parseFloat(i[c].ask),p=Math.floor(100*d)/100;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,n),r.a.createElement("td",null,parseFloat(l).toFixed(2)),r.a.createElement("td",null,u.replace("/Real Brasileiro","")),r.a.createElement("td",null,parseFloat(i[c].ask).toFixed(2)),r.a.createElement("td",null,p),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,o),r.a.createElement("td",null,s),r.a.createElement("td",null,r.a.createElement("button",{className:"btn-edit","data-testid":"edit-btn",type:"button",onClick:function(){return e.handleClickEdit(a)}},"Editar"),r.a.createElement("button",{className:"btn-delete","data-testid":"delete-btn",type:"button",onClick:function(){return e.handleClickDelete(a)}},"Excluir")))}))))}}]),a}(r.a.Component)),R=Object(o.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{deleteExpense:function(t){return e(function(e){return{type:g,payload:e}}(t))},editExpense:function(t){return e(function(e){return{type:y,payload:e}}(t))}}}))(D),L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getCurrency)()}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement(R,null))}}]),a}(r.a.Component),F=Object(o.b)(null,(function(e){return{getCurrency:function(){return e((function(e){fetch(O).then((function(e){return e.json()})).then((function(t){var a=Object.values(t).filter((function(e){return"BRLT"!==e.codein})).map((function(e){return e.code}));e({type:f,payload:a})}))}))}}}))(L);var M=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/carteira",component:F}),r.a.createElement(s.b,{path:"/",component:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(29),_=a(13),B=a(30),U={email:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type===b?{email:t.payload}:e},V=a(24),W={currencies:[],expenses:[],editor:!1,idToEdit:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(E.a)(Object(E.a)({},e),{},{currencies:Object(V.a)(t.payload)});case v:return Object(E.a)(Object(E.a)({},e),{},{expenses:[].concat(Object(V.a)(e.expenses),[Object(E.a)({id:e.expenses.length},t.payload)]),editor:!1});case g:return Object(E.a)(Object(E.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case y:return Object(E.a)(Object(E.a)({},e),{},{editor:!0,idToEdit:t.payload});case j:return Object(E.a)(Object(E.a)({},e),{},{editor:!1,idToEdit:0,expenses:e.expenses.map((function(a){return a.id===e.idToEdit?Object(E.a)(Object(E.a)({id:e.idToEdit},t.payload),{},{exchangeRates:a.exchangeRates}):a}))});default:return e}},I=Object(_.combineReducers)({user:P,wallet:z}),X=Object(_.createStore)(I,Object(B.composeWithDevTools)(Object(_.applyMiddleware)(A.a)));c.a.render(r.a.createElement(o.a,{store:X},r.a.createElement(i.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.b6fb3467.chunk.js.map