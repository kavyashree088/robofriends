(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(3),i=n.n(o),l=(n(13),n(4)),s=n(5),c=n(7),m=n(6),h=(n(2),function(e){return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 "},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?200x200"),alt:"robo"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))}),u=function(e){var a=e.robots.map((function(e,a){return r.a.createElement(h,{key:a,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",{className:""},a)},d=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:a}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],g=function(e){Object(c.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/").then((function(e){e.json()})).then((function(a){console.log(a),e.setState({robots:f})}))}},{key:"render",value:function(){var e=this;if(console.log(this.state.robots.length),0===this.state.robots.length)return r.a.createElement("h1",null,"Loading");var a=this.state.robots.filter((function(a){return a.name.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Friends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(u,{robots:a})))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,a,n){},8:function(e,a,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d1b6b38f.chunk.js.map