(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/logo.650c323e.png"},42:function(e,t,a){e.exports=a(71)},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),s=a.n(r),c=a(4),i=a(2),o=a(6),m=a(5),u=a(13),d=a(11),h=(a(25),a(47),a(37)),g=a(15),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(e){e.preventDefault(),""!==n.state.slug?(localStorage.setItem("slug",n.state.slug),n.setState({msg:"Successfully Added.",className:"alert alert-success",btnClass:"btn btn-success btn-block mt-3"}),n.props.history.push("/plugin_stats")):n.setState({msg:"Please Insert a slug",className:"alert alert-danger",btnClass:"btn btn-danger btn-block mt-3"})},n.handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.handleClick=n.handleClick.bind(Object(g.a)(n)),n.state={msg:"Add a plugin slug",className:"alert alert-info",btnClass:"btn btn-primary btn-block mt-3",slug:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("slug","3r-elementor-timeline-widget")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 offset-3"},l.a.createElement("div",{className:this.state.className},this.state.msg),l.a.createElement("input",{type:"text",className:"form-control",name:"slug",placeholder:"contact-form-7",onChange:this.handleChange}),l.a.createElement("button",{className:this.state.btnClass,onClick:this.handleClick},"Add a slug"),l.a.createElement(d.a,{exact:!0,path:"/plugin_stats",render:function(t){return l.a.createElement("button",Object.assign({},t,{handleClick:e.handleClick}))}}))))}}]),a}(l.a.Component),p=Object(d.f)(v),f=a(40),b=a.n(f).a.create({baseURL:"http://api.wordpress.org/plugins/info/1.0/awesome-contact-form7-for-elementor.json"}),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.get("https://en.gravatar.com/rafiul.alam@yahoo.com.json").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){if(!this.state)return l.a.createElement("p",{className:"loading"});var e=this.state.data.entry;return l.a.createElement("div",{style:{marginTop:80,textAlign:"center"}},e&&e.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{src:e.thumbnailUrl,className:"rounded-circle",alt:"",style:{marginBottom:"20px"}}),l.a.createElement("h6",null,e.name.givenName))})))}}]),a}(n.Component),N=a(23),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[]},n.state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug="+localStorage.getItem("slug")+"&limit=10&historical_summary=1";b.get("https://cors-anywhere.herokuapp.com/"+t).then((function(t){e.setState({data:t.data})}))}}]),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.data;return e?l.a.createElement("div",null,l.a.createElement("table",{className:"table",style:{fontSize:13,textAlign:"left"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Today"),l.a.createElement("td",null,e.today)),l.a.createElement("tr",null,l.a.createElement("td",null,"Yesterday"),l.a.createElement("td",null,e.yesterday)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Week"),l.a.createElement("td",null,e.last_week)),l.a.createElement("tr",null,l.a.createElement("th",null,"All Time"),l.a.createElement("th",null,e.all_time))))):l.a.createElement("div",{className:"loading"})}}]),a}(n.Component),w=a(17),O=a(16),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[]},n.state={width:1e3,height:270,labelOffset:120,colorScale:{from:"#7AC142",to:"#2D87BB"}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.wordpress.org/stats/plugin/1.0/?slug="+localStorage.getItem("slug");b.get("https://cors-anywhere.herokuapp.com/"+t).then((function(t){e.setState({data:t.data});for(var a=e.state.data,n=[],l=0,r=0,s=Object.entries(a);r<s.length;r++){var c=Object(w.a)(s[r],2),i=c[0],o=c[1];n[l+=1]={label:"v"+i,value:o};var m=n.filter((function(e){return e}))}e.setState({PieChartData:m})}))}}]),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.data,t=this.state.PieChartData;if(!e)return l.a.createElement("div",{className:"loading"});if(!t)return l.a.createElement("div",{className:"loading"});var a=t;return l.a.createElement(n.Fragment,null,l.a.createElement(O.PieChart,{data:a,width:this.state.width,height:this.state.height,labelOffset:this.state.labelOffset,colorScale:this.state.colorScale}))}}]),a}(n.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[],lineChartData:[]},n.state={axisConfig:{showXAxis:!0,showXAxisLabel:!0,xLabel:"X Axis",xLabelPosition:"right",showYAxis:!0,showYAxisLabel:!0,yLabel:"Y Axis",yLabelPosition:"bottom"},animation:{delay:100,duration:200},noDataMessage:"No Data Available.",showGrid:!0,strokeWidth:3,pointSize:3,colorScale:{from:"#2D87BB",to:"#7AC142"}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="http://api.wordpress.org/stats/plugin/1.0/downloads.php?slug="+localStorage.getItem("slug")+"&limit=15";b.get("https://cors-anywhere.herokuapp.com/"+t).then((function(t){e.setState({data:t.data});for(var a=e.state.data,n=[],l=0,r=0,s=Object.entries(a);r<s.length;r++){var c=Object(w.a)(s[r],2),i=c[0],o=c[1],m=new Date(i),u=(new Intl.DateTimeFormat("en",{year:"2-digit"}).format(m),new Intl.DateTimeFormat("en",{month:"short"}).format(m)),d=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(m),h="".concat(d," ").concat(u);n[l+=1]={x:h,y:o};var g=n.filter((function(e){return e}))}e.setState({lineChartData:g})}))}}]),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.lineChartData;if(!e)return l.a.createElement("div",{className:"loading"});var t=[{values:e}];return l.a.createElement(n.Fragment,null,l.a.createElement(O.AreaChart,{data:t,axisConfig:this.state.axisConfig,showGrid:this.state.showGrid,height:270,strokeWidth:this.state.strokeWidth,pointSize:this.state.pointSize,noDataMessage:this.state.noDataMessage,colorScale:this.state.colorScale}))}}]),a}(n.Component),x=a(21),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement("div",{className:"widget text-center"},l.a.createElement("div",{className:"widget-heading clearfix"},l.a.createElement("div",{className:"pull-left"},"Active Install")),l.a.createElement("div",{className:"widget-body clearfix pt-0"},l.a.createElement("div",{className:"pull-left"},l.a.createElement(x.a,{icon:N.a,color:"#28a745"})),l.a.createElement("div",{className:"pull-right number"},this.props.active_installs,"+",l.a.createElement("div",{style:{fontSize:13}},"but less than ",this.props.probable_active_install))))),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement("div",{className:"widget text-center"},l.a.createElement("div",{className:"widget-heading clearfix"},l.a.createElement("div",{className:"pull-left"},"Average Ratings")),l.a.createElement("div",{className:"widget-body clearfix"},l.a.createElement("div",{className:"pull-left"},l.a.createElement(x.a,{icon:N.b,color:"#28a745"})),l.a.createElement("div",{className:"pull-right number"},this.props.AvgRating),l.a.createElement("div",{style:{fontSize:13}},"based on ",this.props.number_of_rating," reviews")))),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement("div",{className:"widget text-center"},l.a.createElement("div",{className:"widget-heading clearfix"},l.a.createElement("div",{className:"pull-left"},"Download History")),l.a.createElement("div",{className:"widget-body clearfix pt-0"},l.a.createElement(y,null)))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:" text-center"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"pull-left"},"Active version")),l.a.createElement("div",{className:"clearfix pt-0"},l.a.createElement(j,null)))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"widget text-center"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"pull-left"},"Download Last Weeks")),l.a.createElement("div",{className:"clearfix pt-0"},l.a.createElement(k,null))))))}}]),a}(n.Component),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={info:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("slug");b.get("https://api.wordpress.org/plugins/info/1.0/"+t+".json?fields=banners,icons,active_installs").then((function(t){e.setState({info:t.data}),200!==t.status&&console.log("Not Connected")}))}},{key:"render",value:function(){var e=this.state.info;if(!e)return l.a.createElement("div",{className:"loading"});var t=e.ratings;if(!t)return l.a.createElement("div",{className:"loading"});var a=e.downloaded,r=Object.keys(t),s=Object.values(t),c=e.num_ratings,i=e.icons["1x"],o=e.active_installs.toString(),m=o.substring(1),u=o.charAt(0),d=parseInt(u)+1+m,h=(r[0]*s[0]+r[1]*s[1]+r[2]*s[2]+r[3]*s[3]+r[4]*s[4])/c;return h=h.toFixed(2),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"plugin-state-page"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"list-unstyled mt-5"},l.a.createElement("li",null,l.a.createElement("h5",null,l.a.createElement("a",{href:e.homepage,target:"_new",style:{color:"#333"}},l.a.createElement("img",{src:i,style:{height:"70px",marginRight:"15px"},alt:""}),e.name)))),l.a.createElement(C,{AvgRating:h,downloaded:a,num_ratings:e.num_ratings,active_installs:e.active_installs,number_of_rating:e.num_ratings,probable_active_install:d}))))}}]),a}(l.a.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e;return l.a.createElement(n.Fragment,null,l.a.createElement(u.a,{basename:(e=window.location.pathname,e.substr(0,e.lastIndexOf("/")))},l.a.createElement("aside",{id:"leftsidebar",className:"sidebar"},l.a.createElement("div",{className:"menu"},l.a.createElement("h2",null,l.a.createElement(E,null)),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Add Slug")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:"/plugin_stats"},"Plugin Status"))))),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/plugin_stats",component:S}),l.a.createElement(d.a,{path:"/"},l.a.createElement(p,null)))))}}]),a}(n.Component),_=a(41),D=a.n(_),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:D.a,alt:"",style:{marginLeft:30,width:100}}))))}}]),a}(n.Component);function F(){return l.a.createElement(n.Fragment,null,l.a.createElement(I,null),l.a.createElement(A,null))}a(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.21eb61d9.chunk.js.map