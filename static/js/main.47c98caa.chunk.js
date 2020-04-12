(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),l=a(19),i=a(9),o=a(4),m=a(13),u=a.n(m);a(32),a(34);u.a.initializeApp({apiKey:"AIzaSyAKRYiNMOp8LKRCpGnuV-vDkwSFt4Pgzhg",authDomain:"butuchat-3928c.firebaseapp.com",databaseURL:"https://butuchat-3928c.firebaseio.com",projectId:"butuchat-3928c",storageBucket:"butuchat-3928c.appspot.com",messagingSenderId:"726745298162",appId:"1:726745298162:web:6b640b5fbcf7706cd1cc6b",measurementId:"G-PM3H6KWGTX"});const h=u.a.auth,p=u.a.database();var d=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"ButuCChat"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},h().currentUser?r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-item nav-link mr-3",to:"/chat"},"Profile"),r.a.createElement("button",{className:"btn btn-primary mr-3",onClick:()=>h().signOut()},"Logout")):r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-item nav-link mr-3",to:"/login"},"Sign In"),r.a.createElement(o.b,{className:"nav-item nav-link mr-3",to:"/signup"},"Sign Up")))))};var g=function(){return r.a.createElement("footer",{className:"pt-5"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,"\xa9 ... Me ... 2020.")))};class b extends n.Component{render(){return r.a.createElement("div",{className:"home"},r.a.createElement(d,null),r.a.createElement("section",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid py-5"},r.a.createElement("div",{className:"container text-center py-5"},r.a.createElement("h1",{className:"display-4"},"Welcome to ButuCChat"),r.a.createElement("p",{className:"lead"},"A great place to share your thoughts with friends"),r.a.createElement("div",{className:"mt-4"},r.a.createElement(o.b,{className:"btn btn-primary px-5 mr-3",to:"/signup"},"Create New Account"),r.a.createElement(o.b,{className:"btn px-5",to:"/login"},"Login to Your Account"))))),r.a.createElement(g,null))}}var v=a(3),E=a.n(v),f=a(7);class N extends n.Component{constructor(e){super(e),this.state={user:h().currentUser,chats:[],content:"",readError:null,writeError:null,loadingChats:!1},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.myRef=r.a.createRef()}componentDidMount(){var e=this;return Object(f.a)(E.a.mark(function t(){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({readError:null,loadingChats:!0}),a=e.myRef.current;try{p.ref("chats").on("value",t=>{let n=[];t.forEach(e=>{n.push(e.val())}),n.sort(function(e,t){return e.timestamp-t.timestamp}),e.setState({chats:n}),a.scrollBy(0,a.scrollHeight),e.setState({loadingChats:!1})})}catch(n){e.setState({readError:n.message,loadingChats:!1})}case 3:case"end":return t.stop()}},t)}))()}handleChange(e){this.setState({content:e.target.value})}handleSubmit(e){var t=this;return Object(f.a)(E.a.mark(function a(){var n;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t.setState({writeError:null}),n=t.myRef.current,a.prev=3,a.next=6,p.ref("chats").push({content:t.state.content,timestamp:Date.now(),uid:t.state.user.uid});case 6:t.setState({content:""}),n.scrollBy(0,n.scrollHeight),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),t.setState({writeError:a.t0.message});case 13:case"end":return a.stop()}},a,null,[[3,10]])}))()}formatTime(e){const t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}render(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"chat-area",ref:this.myRef},this.state.loadingChats?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"",this.state.chats.map(e=>r.a.createElement("p",{key:e.timestamp,className:"chat-bubble "+(this.state.user.uid===e.uid?"current-user":"")},e.content,r.a.createElement("br",null),r.a.createElement("span",{className:"chat-time float-right"},this.formatTime(e.timestamp))))),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"mx-3"},r.a.createElement("textarea",{className:"form-control",name:"content",onChange:this.handleChange,value:this.state.content}),this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{type:"submit",className:"btn btn-submit px-5 mt-4"},"Send")),r.a.createElement("div",{className:"py-5 mx-3"},"Login in as: ",r.a.createElement("strong",{className:"text-info"},this.state.user.email)))}}function S(){const e=new h.GoogleAuthProvider;return h().signInWithPopup(e)}function w(){const e=new h.GithubAuthProvider;return h().signInWithPopup(e)}class x extends n.Component{constructor(){super(),this.state={error:null,email:"",password:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.googleSignIn=this.googleSignIn.bind(this),this.githubSignIn=this.githubSignIn.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value})}handleSubmit(e){var t=this;return Object(f.a)(E.a.mark(function a(){return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t.setState({error:""}),a.prev=2,a.next=5,n=t.state.email,r=t.state.password,h().createUserWithEmailAndPassword(n,r);case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),t.setState({error:a.t0.message});case 10:case"end":return a.stop()}var n,r},a,null,[[2,7]])}))()}googleSignIn(){var e=this;return Object(f.a)(E.a.mark(function t(){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.setState({error:t.t0.message});case 8:case"end":return t.stop()}},t,null,[[0,5]])}))()}githubSignIn(){var e=this;return Object(f.a)(E.a.mark(function t(){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w();case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0),e.setState({error:t.t0.message});case 9:case"end":return t.stop()}},t,null,[[0,5]])}))()}render(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Sign Up to",r.a.createElement(o.b,{className:"title ml-2",to:"/"},"ButuCChat")),r.a.createElement("p",{className:"lead"},"Fill in the form below to create an account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Sign up")),r.a.createElement("p",null,"You can also sign up with any of these services"),r.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn},"Sign up with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign up with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Login"))))}}class C extends n.Component{constructor(){super(),this.state={error:null,email:"",password:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.googleSignIn=this.googleSignIn.bind(this),this.githubSignIn=this.githubSignIn.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value})}handleSubmit(e){var t=this;return Object(f.a)(E.a.mark(function a(){return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t.setState({error:""}),a.prev=2,a.next=5,n=t.state.email,r=t.state.password,h().signInWithEmailAndPassword(n,r);case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),t.setState({error:a.t0.message});case 10:case"end":return a.stop()}var n,r},a,null,[[2,7]])}))()}googleSignIn(){var e=this;return Object(f.a)(E.a.mark(function t(){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.setState({error:t.t0.message});case 8:case"end":return t.stop()}},t,null,[[0,5]])}))()}githubSignIn(){var e=this;return Object(f.a)(E.a.mark(function t(){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.setState({error:t.t0.message});case 8:case"end":return t.stop()}},t,null,[[0,5]])}))()}render(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Login to",r.a.createElement(o.b,{className:"title ml-2",to:"/"},"ButuCChat")),r.a.createElement("p",{className:"lead"},"Fill in the form below to login to your account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Login")),r.a.createElement("p",null,"You can also log in with any of these services"),r.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn},"Sign in with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign in with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(o.b,{to:"/signup"},"Sign up"))))}}a(42);function y(e){let t=e.component,a=e.authenticated,n=Object(l.a)(e,["component","authenticated"]);return r.a.createElement(i.b,Object.assign({},n,{render:e=>!0===a?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}))}function k(e){let t=e.component,a=e.authenticated,n=Object(l.a)(e,["component","authenticated"]);return r.a.createElement(i.b,Object.assign({},n,{render:e=>!1===a?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/chat"})}))}var I=class extends n.Component{constructor(){super(),this.state={authenticated:!1,loading:!0}}componentDidMount(){h().onAuthStateChanged(e=>{e?this.setState({authenticated:!0,loading:!1}):this.setState({authenticated:!1,loading:!1})})}render(){return!0===this.state.loading?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:b}),r.a.createElement(y,{path:"/chat",authenticated:this.state.authenticated,component:N}),r.a.createElement(k,{path:"/signup",authenticated:this.state.authenticated,component:x}),r.a.createElement(k,{path:"/login",authenticated:this.state.authenticated,component:C})))}};const j=document.getElementById("root");c.a.render(r.a.createElement(I,null),j)}},[[27,1,2]]]);
//# sourceMappingURL=main.47c98caa.chunk.js.map