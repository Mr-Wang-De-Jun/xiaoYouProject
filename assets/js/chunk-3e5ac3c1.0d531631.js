(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e5ac3c1"],{"04fd":function(e,t,n){},"91d0":function(e,t,n){"use strict";n("ffa5")},aeb6:function(e,t,n){e.exports=n.p+"assets/img/xy.246639b6.png"},d498:function(e,t,n){"use strict";n("04fd")},eac2:function(e,t,n){"use strict";n("fc19")},ede4:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"header"};function o(e,t,n,o,a,s){var i=Object(c["P"])("Header"),u=Object(c["P"])("Content");return Object(c["G"])(),Object(c["i"])(c["a"],null,[Object(c["j"])("div",r,[Object(c["n"])(i)]),Object(c["n"])(u)],64)}var a=function(e){return Object(c["J"])("data-v-bf986ea6"),e=e(),Object(c["H"])(),e},s={class:"warp"},i={class:"warp_content"},u={class:"comm_header"},d=a((function(){return Object(c["j"])("span",null,"登录",-1)})),b=a((function(){return Object(c["j"])("i",null,null,-1)}));function l(e,t,n,r,o,a){return Object(c["G"])(),Object(c["i"])("div",s,[Object(c["j"])("div",i,[Object(c["j"])("div",u,[Object(c["j"])("i",{class:"iconfont",onClick:t[0]||(t[0]=function(){return a.rollback&&a.rollback.apply(a,arguments)})},""),d,b])])])}var j={name:"Header",methods:{rollback:function(){this.$router.push("/"),this.$store.commit("setBottomIndex",{index:0,commodityItem:this.$store.state.commodityItem})}}},p=(n("d498"),n("6b0d")),f=n.n(p);const O=f()(j,[["render",l],["__scopeId","data-v-bf986ea6"]]);var h=O,m=function(e){return Object(c["J"])("data-v-937a5946"),e=e(),Object(c["H"])(),e},g={class:"warp"},v=["src"],k={class:"form"},w={class:"no_login"},_={class:"login_phone"},x=m((function(){return Object(c["j"])("span",{class:"iconfont"},"",-1)})),y={class:"login_passWord"},I=m((function(){return Object(c["j"])("span",{class:"iconfont"},"",-1)})),$=Object(c["m"])("没有账号，前往注册?");function L(e,t,r,o,a,s){var i=Object(c["P"])("router-link");return Object(c["G"])(),Object(c["i"])("div",g,[Object(c["j"])("img",{class:"user_img",src:n("aeb6"),alt:"网站Logo"},null,8,v),Object(c["j"])("div",k,[Object(c["j"])("form",w,[Object(c["j"])("label",_,[x,Object(c["db"])(Object(c["j"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.phone=e}),type:"text",maxlength:"11",oninput:"value=value.replace(/[^0-9.]/g,'')",placeholder:"请输入手机号"},null,512),[[c["Y"],a.phone]])]),Object(c["j"])("label",y,[I,Object(c["db"])(Object(c["j"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.passWord=e}),type:"password",placeholder:"请输入密码"},null,512),[[c["Y"],a.passWord]])]),Object(c["j"])("button",{class:"login_show",onClick:t[2]||(t[2]=Object(c["fb"])((function(){return s.judegLogin&&s.judegLogin.apply(s,arguments)}),["prevent"]))},"登录"),Object(c["n"])(i,{class:"to_register",to:"/register"},{default:Object(c["cb"])((function(){return[$]})),_:1})])])])}var W=n("1da1"),C=(n("d3b7"),n("ddb0"),n("96cf"),n("626a")),H=n("b7da"),J={name:"Content",data:function(){return{phone:"",passWord:""}},methods:{judegLogin:function(){var e=Object(W["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(H["b"])("/register",{phone:this.phone,password:this.passWord});case 2:if(t=e.sent,200!==t.code){e.next=18;break}e.t0=regeneratorRuntime.keys(this.$store.state.user);case 5:if((e.t1=e.t0()).done){e.next=18;break}if(n=e.t1.value,this.phone!==this.$store.state.user[n].phone||this.passWord!==this.$store.state.user[n].password){e.next=15;break}return localStorage.isLogin=!0,this.$router.push("/"),this.$store.commit("setBottomIndex",{index:0,commodityItem:"精选"}),Object(C["a"])("登录成功"),e.abrupt("break",18);case 15:Object(C["a"])("信息错误");case 16:e.next=5;break;case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};n("91d0");const G=f()(J,[["render",L],["__scopeId","data-v-937a5946"]]);var P=G,R={name:"Login",components:{Header:h,Content:P}};n("eac2");const B=f()(R,[["render",o],["__scopeId","data-v-3e665fdc"]]);t["default"]=B},fc19:function(e,t,n){},ffa5:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3e5ac3c1.0d531631.js.map