(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{o1NI:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{constructor(){}ngOnInit(){this.scrollToTop()}scrollToTop(){window.scrollTo(0,0)}}class i{}var r=t("pMnS");class a{constructor(){}ngOnInit(){this.scrollToTopCounter=0,this.onScroll(),setTimeout(()=>{this.rotateIcon()},1e3)}rotateIcon(){if(this.scrollToTopCounter>0&&0===this.lastKnownScrollPosition){const l=document.getElementById("brand-icon");l.classList.remove("navbar-brand--animation"),setTimeout(()=>{l.classList.add("navbar-brand--animation")},20)}}onScroll(){window.addEventListener("scroll",l=>{this.lastKnownScrollPosition=window.scrollY,0===this.lastKnownScrollPosition&&(this.scrollToTopCounter++,console.log(this.scrollToTopCounter)),this.rotateIcon()})}}var u=e.kb({encapsulation:0,styles:[['@-webkit-keyframes donut-loading{from{stroke-dasharray:0 100}to{stroke-dasharray:inherit}}@keyframes donut-loading{from{stroke-dasharray:0 100}to{stroke-dasharray:inherit}}@-webkit-keyframes donut-title-delay{from{opacity:0}to{opacity:1}}@keyframes donut-title-delay{from{opacity:0}to{opacity:1}}@-webkit-keyframes rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}.light[_ngcontent-%COMP%]{background:#fff}.header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;display:flex;flex-direction:row;background:#add8e6}.header-container[_ngcontent-%COMP%]{display:block;float:right;margin:0 30px 0 0;padding:.5rem 0 0}.header-container[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{float:left;position:relative;margin:0 30px 0 0}.navbar--positioning[_ngcontent-%COMP%]{justify-content:start}.navbar-brand[_ngcontent-%COMP%]{font-size:2rem}a[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#474e5d!important}a[_ngcontent-%COMP%]{font-family:"Fredoka One";font-size:12px;line-height:1;text-decoration:none!important;color:none!important;text-transform:uppercase;font-weight:200;letter-spacing:2px;border-bottom:none!important}a[_ngcontent-%COMP%]:link{border-bottom:1px solid Red}a[_ngcontent-%COMP%]:hover{margin-bottom:10px;border-bottom:2px solid green}.navbar-brand--animation[_ngcontent-%COMP%]{-webkit-animation-name:rotation;animation-name:rotation;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1}@font-face{font-family:"Fredoka One";src:local("Fredoka One"),local("FredokaOne-Regular"),url(https://fonts.gstatic.com/s/fredokaone/v7/k3kUo8kEI-tA1RRcTZGmTlHGCaen8wf-.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}']],data:{}});function s(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,16,"nav",[["class","navbar navbar-expand-lg navbar-light navbar--positioning light fixed-top"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,0,"i",[["class","fas fa-star navbar-brand"],["id","brand-icon"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,13,"div",[["class","nav"],["id","nav"]],null,null,null,null,null)),(l()(),e.mb(4,0,null,null,12,"ul",[["class","header-container clearfix"]],null,null,null,null,null)),(l()(),e.mb(5,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.mb(6,0,null,null,2,"a",[["href","#about"]],null,null,null,null,null)),(l()(),e.mb(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["About"])),(l()(),e.mb(9,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.mb(10,0,null,null,2,"a",[["href","#skills"]],null,null,null,null,null)),(l()(),e.mb(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["Skills"])),(l()(),e.mb(13,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.mb(14,0,null,null,2,"a",[["href","#experience"]],null,null,null,null,null)),(l()(),e.mb(15,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["Experience"]))],null,null)}class c{constructor(){}ngOnInit(){}}var d=e.kb({encapsulation:0,styles:[[".icon-bar[_ngcontent-%COMP%]{position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:2}.icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-align:center;padding:16px;transition:all .3s ease;color:#fff;font-size:20px}.icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#000}.facebook[_ngcontent-%COMP%]{background:#3b5998;color:#fff}.twitter[_ngcontent-%COMP%]{background:#55acee;color:#fff}.google[_ngcontent-%COMP%]{background:#dd4b39;color:#fff}.linkedin[_ngcontent-%COMP%]{background:#007bb5;color:#fff}.youtube[_ngcontent-%COMP%]{background:#b00;color:#fff}.github[_ngcontent-%COMP%]{background:#24292e;color:#fff}.email[_ngcontent-%COMP%]{background:#b00;color:#fff}.content[_ngcontent-%COMP%]{margin-left:75px;font-size:30px}"]],data:{}});function b(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,6,"div",[["class","icon-bar"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,1,"a",[["class","github"],["href","https://github.com/loukas-kotas"],["target","_blank"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,1,"a",[["class","linkedin"],["href","https://www.linkedin.com/in/loukaskotas/"],["target","_blank"]],null,null,null,null,null)),(l()(),e.mb(4,0,null,null,0,"i",[["class","fab fa-linkedin"]],null,null,null,null,null)),(l()(),e.mb(5,0,null,null,1,"a",[["class","email"],["href","mailto:loukas.kotas@gmail.com"],["target","_blank"]],null,null,null,null,null)),(l()(),e.mb(6,0,null,null,0,"i",[["class","fas fa-at"]],null,null,null,null,null))],null,null)}var p=t("SVse");class g{constructor(){this.yScrollThreshold=50}ngOnInit(){}ngOnChanges(){this.onScroll()}onScroll(){window.addEventListener("scroll",l=>{this.hideScrollButton()})}hideScrollButton(){this.lastKnownScrollPosition=window.scrollY,this.show=!(this.lastKnownScrollPosition>this.yScrollThreshold)}}var f=e.kb({encapsulation:0,styles:[['.demo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:50%;z-index:2;display:inline-block;transform:translate(0,-50%);color:#474e5d;font:normal 400 20px/1 "Josefin Sans",sans-serif;letter-spacing:.1em;text-decoration:none;transition:opacity .3s}.demo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.5}#scroll-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:70px;font-size:1.2rem}#scroll-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;width:24px;height:24px;margin-left:-12px;border-left:1px solid #474e5d;border-bottom:1px solid #474e5d;transform:rotateZ(-45deg);-webkit-animation:1.5s infinite sdb06;animation:1.5s infinite sdb06;box-sizing:border-box}@-webkit-keyframes sdb06{0%{-webkit-transform:rotateY(0) rotateZ(-45deg) translate(0,0);opacity:0}50%{opacity:1}100%{-webkit-transform:rotateY(720deg) rotateZ(-45deg) translate(-20px,20px);opacity:0}}@keyframes sdb06{0%{transform:rotateY(0) rotateZ(-45deg) translate(0,0);opacity:0}50%{opacity:1}100%{transform:rotateY(720deg) rotateZ(-45deg) translate(-20px,20px);opacity:0}}']],data:{}});function h(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e.mb(1,0,null,null,3,"section",[["class","demo"],["id","scroll-bottom"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,2,"a",[["href","#about"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["Scroll"]))],null,null)}function m(l){return e.zb(0,[(l()(),e.bb(16777216,null,null,1,null,h)),e.lb(1,16384,null,0,p.h,[e.K,e.H],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.show)},null)}class k{constructor(){this.showScrollDownButton=!1,this.dataText=["Loukas Kotas","Web Developer","Javascript Freak"],this.typewriter=()=>{console.log("typewriter"),this.startTextAnimation(1),setTimeout(()=>{this.startTextAnimation(2)},3e3),setTimeout(()=>{this.startTextAnimation(0)},6e3)}}ngOnInit(){console.log("ngoninit"),this.typewriter(),this.activateScrollDownButton(),document.addEventListener("DOMContentLoaded",this.typewriter)}activateScrollDownButton(){setTimeout(()=>{this.showScrollDownButton=!0},7e3)}typeWriter(l,n,t){n<l.length?(document.querySelector("h1").innerHTML=l.substring(0,n+1)+'<span aria-hidden="true" class="blinking-cursor"></span',setTimeout(()=>{this.typeWriter(l,n+1,t)},100)):"function"==typeof t&&setTimeout(t,700)}startTextAnimation(l){void 0===this.dataText[l]&&setTimeout(function(){this.StartTextAnimation(0)},2e4),l<this.dataText[l].length&&this.typeWriter(this.dataText[l],0,function(){this.StartTextAnimation(l+1)}),l<this.dataText[l].length&&this.typeWriter(this.dataText[l],0,function(){this.StartTextAnimation(l+1)})}}var x=e.kb({encapsulation:0,styles:[["@-webkit-keyframes donut-loading{from{stroke-dasharray:0 100}to{stroke-dasharray:inherit}}@keyframes donut-loading{from{stroke-dasharray:0 100}to{stroke-dasharray:inherit}}@-webkit-keyframes donut-title-delay{from{opacity:0}to{opacity:1}}@keyframes donut-title-delay{from{opacity:0}to{opacity:1}}@-webkit-keyframes rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}.card[_ngcontent-%COMP%]{background:#fff!important}.profile-image[_ngcontent-%COMP%]{width:300px;height:346px;background:#add8e6}.subtitle[_ngcontent-%COMP%]{font-size:18px;font-weight:400;line-height:1.1;margin-bottom:0}.profile-list[_ngcontent-%COMP%]{padding:3rem 0 0}.profile-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;width:120px;float:left;color:#333;font-size:12px;font-weight:700;line-height:20px;text-transform:uppercase}.profile-list[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]{display:block;margin-left:125px;font-size:15px;font-weight:400;line-height:20px;color:#9da0a7}.profile-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:10px 0 0}.black-box[_ngcontent-%COMP%]{position:relative;background:#fff;width:100%;height:560px}h1[_ngcontent-%COMP%]{font-size:5rem;color:#000;text-transform:uppercase;-webkit-animation:.5s steps(40) infinite blinkTextCursor;animation:.5s steps(40) infinite blinkTextCursor}@-webkit-keyframes blinkTextCursor{from{border-right-color:rgba(255,255,255,.75)}to{border-right-color:transparent}}@keyframes blinkTextCursor{from{border-right-color:rgba(255,255,255,.75)}to{border-right-color:transparent}}.black-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:13rem;margin-left:5%}span[_ngcontent-%COMP%]{border-right:.05em solid;-webkit-animation:1s steps(1) infinite caret;animation:1s steps(1) infinite caret}@-webkit-keyframes caret{50%{border-color:transparent}}@keyframes caret{50%{border-color:transparent}}"]],data:{}});function y(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,5,"section",[["class","section"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,2,"div",[["class","black-box"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["typewriter text"])),(l()(),e.mb(4,0,null,null,1,"app-scroll-down-button",[],null,null,null,m,f)),e.lb(5,638976,null,0,g,[],{show:[0,"show"]},null)],function(l,n){l(n,5,0,n.component.showScrollDownButton)},null)}class C{constructor(){}ngOnInit(){}}var w=e.kb({encapsulation:0,styles:[['.card[_ngcontent-%COMP%]{border:none}.card-body[_ngcontent-%COMP%]{font-size:20px;line-height:1.8;font-weight:300;margin:0 auto;text-align:center;background:#fff;color:#474e5d}.font-settings[_ngcontent-%COMP%]{font-family:"Frank Ruhl Libre",serif}']],data:{}});function P(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,8,"section",[["class","section"],["id","about"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,7,"div",[["class","card card--spacing center"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,2,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["About"])),(l()(),e.mb(5,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.mb(6,0,null,null,2,"div",[["class","font-settings"]],null,null,null,null,null)),(l()(),e.mb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.yb(-1,null,[' Loukas is an ambitious and concerned undergraduate student with discipline and accountability involved into open-source projects, Volunteering activities and a lot of code. His motto is "Gain through Experiencing" and he applies that in his every-day life and work. His personal development comes through perseverance and avoidance of superficial knowledge but true success in my team\u2019s welfare. Using critical and organizing mind his concise and impeccable thoughts produce succinct and cater solutions. His next goal is to overcome the novice level and become an expert in his field of interest. ']))],null,null)}class O{constructor(){this.valueMax=100}ngOnInit(){}ngAfterViewInit(){this.skill=document.getElementById(this.id),this.titleEl=document.getElementById(`title-${this.id}`),this.centerEl=document.getElementById("center"),this.setValueNow(),this.setProperties()}setProperties(){this.setSize(),this.setCircleColor(),this.setBgdColor()}setValueNow(){this.skill.style.setProperty("stroke-dasharray",`${this.value} ${this.valueMax}`)}setSize(){this.size?(this.skill.style.setProperty("height",this.size),this.skill.style.setProperty("width",this.size),this.titleEl.style.setProperty("max-width",this.size)):(this.skill.style.setProperty("height","130px"),this.skill.style.setProperty("width","130px"),this.titleEl.style.setProperty("max-width","130px"),this.skill.style.setProperty("--percentage-size","95.58823529411765px"),this.skill.style.setProperty("--center-text-size","36.705882352941174px"),this.skill.style.setProperty("--skill-strength",`'${this.value}%'`))}setCircleColor(){this.skill.style.setProperty("stroke",this.circleColor?this.circleColor:"#f26a4a")}setBgdColor(){this.skill.style.setProperty("--background-color",this.circleBgdColor?this.circleBgdColor:"#ffffff")}}var v=e.kb({encapsulation:0,styles:[['@-webkit-keyframes donut-loading{from{stroke-dasharray:0 100}to{stroke-dasharray:inherit}}@keyframes donut-loading{from{stroke-dasharray:0 100}to{stroke-dasharray:inherit}}@-webkit-keyframes donut-title-delay{from{opacity:0}to{opacity:1}}@keyframes donut-title-delay{from{opacity:0}to{opacity:1}}@-webkit-keyframes rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}.donut-title[_ngcontent-%COMP%]{max-width:var(--max-width);text-align:center}.donut-chart[_ngcontent-%COMP%]{height:var(--height);width:var(--width)}.donut-chart.active[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke-dasharray:65 100}.donut-chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;transform:rotate(-90deg);background:#666;border-radius:50%}.donut-chart[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:#666;stroke:var(--stroke);stroke-width:32;stroke-dasharray:var(--stroke-dasharray);transition:stroke-dasharray .5s ease;-webkit-animation-name:donut-loading;animation-name:donut-loading;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-delay:.2s;animation-delay:.2s}.donut-center[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;position:absolute;height:80%;width:80%;top:50%;left:50%;transform:translate(-50%,-50%)}.donut-center[_ngcontent-%COMP%]::after{display:inline-block;width:100%;font-size:var(--center-text-size);color:#474e5d;text-align:center;line-height:var(--percentage-size);content:var(--skill-strength);-webkit-animation-name:donut-title-delay;animation-name:donut-title-delay;-webkit-animation-duration:5s;animation-duration:5s}.ui[_ngcontent-%COMP%]{margin:20px 0;text-align:center;width:200px}.ui[_ngcontent-%COMP%]   .animate-button[_ngcontent-%COMP%]{text-decoration:none;font-family:Arial,Helvettica,san-serif;font-size:12px;color:#fff;background:#666;padding:6px 18px;border-radius:4px}.ui[_ngcontent-%COMP%]   .animate-button[_ngcontent-%COMP%]:hover{background:#333}.card[_ngcontent-%COMP%]{float:left;background:#fff;padding:20px;margin:0 20px 0 0;border:none}.donut-chart[_ngcontent-%COMP%]{position:relative;border-radius:50%;overflow:hidden}.donut-chart[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.donut-chart[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]{position:absolute;border-radius:50%}.donut-chart[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center}.donut-chart.chart4[_ngcontent-%COMP%]{width:240px;height:240px;background:#f26a4a}.donut-chart.chart4[_ngcontent-%COMP%]   .slice.one[_ngcontent-%COMP%]{clip:rect(0 240px 120px 0);transform:rotate(252deg);background:#e1e1e1}.donut-chart.chart4[_ngcontent-%COMP%]   .slice.two[_ngcontent-%COMP%]{clip:rect(0 120px 240px 0);transform:rotate(0);background:#e1e1e1}.donut-chart.chart4[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]{top:15px;left:15px;width:210px;height:210px;background:#fff}.donut-chart.chart4[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:60px;line-height:210px;color:#f26a4a}.donut-chart.chart4[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"45%"}']],data:{}});function M(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,2,"div",[["class","donut-title"]],[[8,"id",0]],null,null,null,null)),(l()(),e.mb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.yb(2,null,["",""])),(l()(),e.mb(3,0,null,null,3,"div",[["class","donut-chart"]],[[8,"id",0]],null,null,null,null)),(l()(),e.mb(4,0,null,null,1,":svg:svg",[["viewBox","0 0 32 32"]],null,null,null,null,null)),(l()(),e.mb(5,0,null,null,0,":svg:circle",[["cx","16"],["cy","16"],["r","16"]],null,null,null,null,null)),(l()(),e.mb(6,0,null,null,0,"div",[["class","donut-center"]],null,null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,e.qb(1,"title-",t.id,"")),l(n,2,0,t.title),l(n,3,0,e.qb(1,"",t.id,""))})}var _=t("l0xj");class T{constructor(l){this.eventsService=l,this.showSkills=!1,this.scroll=()=>{this.el=document.getElementById("skills-donuts"),this.eventsService.isInViewport(this.el)&&(this.showSkills=!0)}}ngOnInit(){window.addEventListener("scroll",this.scroll,!0)}ngOnDestroy(){window.removeEventListener("scroll",this.scroll,!0)}}var z=e.kb({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{border:none}.card-body[_ngcontent-%COMP%]{padding:2rem 1rem;background:#fff;color:#474e5d}.col[_ngcontent-%COMP%]{padding:1rem!important}"]],data:{}});function S(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,1,"app-donut-chart",[],null,null,null,M,v)),e.lb(3,4308992,null,0,O,[],{value:[0,"value"],id:[1,"id"],title:[2,"title"],circleColor:[3,"circleColor"]},null),(l()(),e.mb(4,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.mb(5,0,null,null,1,"app-donut-chart",[],null,null,null,M,v)),e.lb(6,4308992,null,0,O,[],{value:[0,"value"],id:[1,"id"],title:[2,"title"],circleColor:[3,"circleColor"]},null),(l()(),e.mb(7,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.mb(8,0,null,null,1,"app-donut-chart",[],null,null,null,M,v)),e.lb(9,4308992,null,0,O,[],{value:[0,"value"],id:[1,"id"],title:[2,"title"],circleColor:[3,"circleColor"]},null),(l()(),e.mb(10,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.mb(11,0,null,null,1,"app-donut-chart",[],null,null,null,M,v)),e.lb(12,4308992,null,0,O,[],{value:[0,"value"],id:[1,"id"],title:[2,"title"],circleColor:[3,"circleColor"]},null),(l()(),e.mb(13,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.mb(14,0,null,null,1,"app-donut-chart",[],null,null,null,M,v)),e.lb(15,4308992,null,0,O,[],{value:[0,"value"],id:[1,"id"],title:[2,"title"],circleColor:[3,"circleColor"]},null)],function(l,n){l(n,3,0,100,"angular","Angular","#e74c3c"),l(n,6,0,90,"typescript","Typescript","#77c1e7"),l(n,9,0,80,"css","CSS","#15D974"),l(n,12,0,70,"photoshop","Photoshop","#f1c40f"),l(n,15,0,80,"nodejs","Node.js","#9b59b6")},null)}function E(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,7,"section",[["id","skills"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,6,"div",[["class","card card--spacing center"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,2,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["Skills"])),(l()(),e.mb(5,0,null,null,2,"div",[["class","card-body"],["id","skills-donuts"]],null,null,null,null,null)),(l()(),e.bb(16777216,null,null,1,null,S)),e.lb(7,16384,null,0,p.h,[e.K,e.H],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,n.component.showSkills)},null)}class I{constructor(){}ngOnInit(){}}var U=e.kb({encapsulation:0,styles:[['.content-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.content-subtitle[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{font-size:1rem;font-weight:300}.content[_ngcontent-%COMP%]{border-top:6px solid #15d974;box-shadow:1px 1px 2px #000}.container[_ngcontent-%COMP%]{padding:10px 40px;position:relative;background-color:inherit;width:50%;margin-left:0;margin-right:0}.container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:25px;height:25px;right:-12px;background-color:#fff;border:4px solid #02ab10;top:15px;border-radius:50%;z-index:1}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{left:50%}.left[_ngcontent-%COMP%]::before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1;right:30px;border:solid #15d974;border-width:10px 0 10px 10px;border-color:transparent transparent transparent #15d974}.right[_ngcontent-%COMP%]::before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1;left:30px;border:solid #15d974;border-width:10px 10px 10px 0;border-color:transparent #15d974 transparent transparent}.right[_ngcontent-%COMP%]::after{left:-14px}.content[_ngcontent-%COMP%]{padding:20px 30px;background-color:#fff;position:relative;border-radius:6px}@media screen and (max-width:600px){.timeline[_ngcontent-%COMP%]::after{left:31px}.container[_ngcontent-%COMP%]{width:100%;padding-left:70px;padding-right:25px}.container[_ngcontent-%COMP%]::before{left:60px;border:solid #fff;border-width:10px 10px 10px 0;border-color:transparent #fff transparent transparent}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.right[_ngcontent-%COMP%]{left:0}}']],data:{}});function B(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,11,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),e.mb(1,0,null,null,10,"div",[["class","content"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,2,"div",[["class","content-title"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.yb(4,null,["",""])),(l()(),e.mb(5,0,null,null,3,"div",[["class","content-duration"]],null,null,null,null,null)),(l()(),e.mb(6,0,null,null,2,"div",[["class","cont"]],null,null,null,null,null)),(l()(),e.mb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.yb(8,null,["",""])),(l()(),e.mb(9,0,null,null,2,"div",[["class","content-subtitle"]],null,null,null,null,null)),(l()(),e.mb(10,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.yb(11,null,["",""]))],null,function(l,n){var t=n.component;l(n,0,0,e.qb(1,"container ",t.side,"")),l(n,4,0,t.title),l(n,8,0,t.duration),l(n,11,0,t.subtitle)})}class F{constructor(){}ngOnInit(){}}var A=e.kb({encapsulation:0,styles:[['.card-body[_ngcontent-%COMP%]{background:#fff}.timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto}.timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:6px;background-color:#15d974;top:15px;bottom:-100px;left:50%;margin-left:-3px}@media screen and (max-width:600px){.timeline[_ngcontent-%COMP%]::after{left:31px}.container[_ngcontent-%COMP%]{width:100%;padding-left:70px;padding-right:25px}.container[_ngcontent-%COMP%]::before{left:60px;border:solid #fff;border-width:10px 10px 10px 0;border-color:transparent #fff transparent transparent}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.right[_ngcontent-%COMP%]{left:0}}']],data:{}});function D(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,16,"section",[["id","experience"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,15,"div",[["class","card card--spacing card--no-border center"]],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,2,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),e.mb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.yb(-1,null,["Experience"])),(l()(),e.mb(5,0,null,null,11,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.mb(6,0,null,null,10,"div",[["class","timeline"]],null,null,null,null,null)),(l()(),e.mb(7,0,null,null,1,"app-timeline-card",[],null,null,null,B,U)),e.lb(8,114688,null,0,I,[],{title:[0,"title"],subtitle:[1,"subtitle"],side:[2,"side"],duration:[3,"duration"]},null),(l()(),e.mb(9,0,null,null,1,"app-timeline-card",[],null,null,null,B,U)),e.lb(10,114688,null,0,I,[],{title:[0,"title"],subtitle:[1,"subtitle"],side:[2,"side"],duration:[3,"duration"]},null),(l()(),e.mb(11,0,null,null,1,"app-timeline-card",[],null,null,null,B,U)),e.lb(12,114688,null,0,I,[],{title:[0,"title"],subtitle:[1,"subtitle"],side:[2,"side"],duration:[3,"duration"]},null),(l()(),e.mb(13,0,null,null,1,"app-timeline-card",[],null,null,null,B,U)),e.lb(14,114688,null,0,I,[],{title:[0,"title"],subtitle:[1,"subtitle"],side:[2,"side"],duration:[3,"duration"]},null),(l()(),e.mb(15,0,null,null,1,"app-timeline-card",[],null,null,null,B,U)),e.lb(16,114688,null,0,I,[],{title:[0,"title"],subtitle:[1,"subtitle"],side:[2,"side"],duration:[3,"duration"]},null)],function(l,n){l(n,8,0,"noris M.I.K.E","Web Front End Developer","left","May 2018 - Now"),l(n,10,0,"More than Themes","Software Engineer","right","April 2017 - May 2017"),l(n,12,0,"IEEE","Web Application Developer","left","Feb 2017 - Sep 2017"),l(n,14,0,"IEEE","Web Application Developer","right","Feb 2016 - Sep 2016"),l(n,16,0,"Democritus University of Thrace (DUTh)","BSc. Electrical Engineering & Computer Science","left","Oct 2012 - Now")},null)}var L=e.kb({encapsulation:0,styles:[[""]],data:{}});function j(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,1,"app-header",[],null,null,null,s,u)),e.lb(1,114688,null,0,a,[],null,null),(l()(),e.mb(2,0,null,null,1,"app-social-media",[],null,null,null,b,d)),e.lb(3,114688,null,0,c,[],null,null),(l()(),e.mb(4,0,null,null,1,"app-person-profile",[],null,null,null,y,x)),e.lb(5,114688,null,0,k,[],null,null),(l()(),e.mb(6,0,null,null,1,"app-about",[],null,null,null,P,w)),e.lb(7,114688,null,0,C,[],null,null),(l()(),e.mb(8,0,null,null,1,"app-skills",[],null,null,null,E,z)),e.lb(9,245760,null,0,T,[_.a],null,null),(l()(),e.mb(10,0,null,null,1,"app-experience",[],null,null,null,D,A)),e.lb(11,114688,null,0,F,[],null,null)],function(l,n){l(n,1,0),l(n,3,0),l(n,5,0),l(n,7,0),l(n,9,0),l(n,11,0)},null)}function K(l){return e.zb(0,[(l()(),e.mb(0,0,null,null,1,"app-main",[],null,null,null,j,L)),e.lb(1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)}var H=e.ib("app-main",o,K,{},{},[]);class N{}class W{}class Y{}class V{}class Z{}class q{}class J{}class R{}class ${}var G=t("iInd");t.d(n,"MainModuleNgFactory",function(){return Q});var Q=e.jb(i,[],function(l){return e.vb([e.wb(512,e.j,e.U,[[8,[r.a,H]],[3,e.j],e.u]),e.wb(4608,p.j,p.i,[e.r,[2,p.p]]),e.wb(1073742336,p.b,p.b,[]),e.wb(1073742336,N,N,[]),e.wb(1073742336,W,W,[]),e.wb(1073742336,Y,Y,[]),e.wb(1073742336,V,V,[]),e.wb(1073742336,Z,Z,[]),e.wb(1073742336,q,q,[]),e.wb(1073742336,J,J,[]),e.wb(1073742336,R,R,[]),e.wb(1073742336,$,$,[]),e.wb(1073742336,G.l,G.l,[[2,G.q],[2,G.k]]),e.wb(1073742336,i,i,[]),e.wb(1024,G.i,function(){return[[{path:"",component:o},{path:"**",redirectTo:""}]]},[])])})}}]);