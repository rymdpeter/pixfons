(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),l=n(1),i=n(2),s=n(4),u=n(3),p=n(5),h=n(6),b=(n(14),n(16),function(t){function e(){var t,n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={filled:!1},n.handleClick=function(){n.props.activeColor&&n.setState({filled:!n.state.filled})},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.filled?{backgroundColor:this.props.color}:{},e=0===this.props.number||this.state.filled?"":this.props.number;return a.a.createElement("td",{style:t,onClick:this.handleClick},e)}}]),e}(r.Component)),f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).handleClick=function(){n.props.handleClick(n.props.number)},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.active?{backgroundColor:this.props.color}:null;return a.a.createElement("button",{style:t,onClick:this.handleClick},this.props.number)}}]),e}(r.Component),v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={activeColor:1},n.setActiveColor=function(t){n.setState({activeColor:t})},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement("table",null,a.a.createElement("tbody",null,h.pattern.map(function(e,n){return a.a.createElement("tr",null,e.map(function(e,n){return a.a.createElement(b,{color:h.colors[e],number:e,key:n,activeColor:t.state.activeColor==e})})," ")}))),a.a.createElement("br",null),a.a.createElement(f,{active:1==this.state.activeColor,color:h.colors[1],number:1,handleClick:this.setActiveColor}),a.a.createElement(f,{active:2==this.state.activeColor,color:h.colors[2],number:2,handleClick:this.setActiveColor}))}}]),e}(r.Component);c.a.render(a.a.createElement(v,null),document.getElementById("root"))},6:function(t){t.exports={pattern:[[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0],[0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0],[0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1],[1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1],[1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1],[1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1],[1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1],[0,1,2,1,1,2,2,2,2,2,2,1,1,2,1,0],[0,0,1,2,2,1,1,1,1,1,1,2,2,1,0,0],[0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0]],colors:{0:"transparent",1:"black",2:"yellow"}}},9:function(t,e,n){t.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.c1c22a69.chunk.js.map