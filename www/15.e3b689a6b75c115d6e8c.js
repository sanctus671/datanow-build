(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{W8ZA:function(t,n,a){"use strict";a.r(n);var o=a("CcnG"),e=function(){return function(){}}(),i=a("pMnS"),l=a("oBZk"),d=a("ZZ/e"),r=a("tBg5"),c=a("mrSG"),u=a("wd/R"),p=a("fhOw"),_=a("ri4K"),s=function(){function t(t,n,a,o,e){var i=this;this.route=t,this.datapointsService=n,this.toastController=a,this.authenticationService=o,this.router=e,this.chart=new r.a({chart:{type:"line",reflow:!0,height:200,marginLeft:40},title:{text:void 0},credits:{enabled:!1},xAxis:{type:"datetime"},yAxis:{title:{text:null}},legend:{enabled:!1},series:[]}),this.datapoint={dataPointId:this.route.snapshot.params.id,value:0},this.value={},this.values=[],this.getDatapoint(),this.inCooldown=!1,setTimeout((function(){i.getDatapointValues()}),3e5)}return t.prototype.ngOnInit=function(){},t.prototype.getDatapoint=function(){var t=this;this.datapointsService.getDatapoint(this.datapoint.dataPointId).then((function(n){t.datapoint.dataPointName=n.dataPointName,t.getDatapointValues()})).catch((function(){t.datapointsError()}))},t.prototype.datapointsError=function(){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(t){switch(t.label){case 0:return[4,this.toastController.create({message:"Error retreiving data",duration:4e3,color:"danger",mode:"md",buttons:[]})];case 1:return t.sent().present(),[2]}}))}))},t.prototype.add=function(){var t=this;if(this.inCooldown)this.inCooldownError();else{this.inCooldown=!0,setTimeout((function(){t.inCooldown=!1}),1e3);var n=setTimeout((function(){t.datapointsService.addValue(t.datapoint,{value:1}).then((function(n){t.datapointsService.datapointsChanged(t.datapoint.dataPointId)})).catch((function(n){401===n.status?t.refreshTokenAdd():t.valueAddedError()}))}),1e4);this.datapoint.value+=1,this.datapoint.last_added=new Date,this.values.push({value:this.datapoint.value,date:this.datapoint.last_added}),this.valueAdded(n),this.setGraph()}},t.prototype.refreshTokenAdd=function(){var t=this;this.authenticationService.refreshToken().then((function(){t.datapointsService.addValue(t.datapoint,{value:1}).then((function(t){}))})).catch((function(){t.valueAddedError(),t.router.navigate(["login"])}))},t.prototype.valueAdded=function(t){return c.b(this,void 0,void 0,(function(){var n=this;return c.e(this,(function(a){switch(a.label){case 0:return[4,this.toastController.create({message:"Changes Saved",duration:1e4,color:"dark",mode:"md",buttons:[{side:"end",text:"Undo",handler:function(){clearTimeout(t),n.datapoint.value-=1,n.getDatapointValues()}}]})];case 1:return a.sent().present(),[2]}}))}))},t.prototype.valueAddedError=function(){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(t){switch(t.label){case 0:return[4,this.toastController.create({message:"Error adding value. Try again soon.",duration:2e3,color:"danger",mode:"md",buttons:[]})];case 1:return t.sent().present(),[2]}}))}))},t.prototype.inCooldownError=function(){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(t){switch(t.label){case 0:return[4,this.toastController.create({message:"Wait 1 second to add value again",duration:1e3,color:"warning",mode:"md",buttons:[]})];case 1:return t.sent().present(),[2]}}))}))},t.prototype.setAmount=function(){var t=this;this.datapoint.value+=this.value.value,this.value.loading=!0,this.datapointsService.addValue(this.datapoint,{value:this.value.value}).then((function(n){t.datapoint.last_added=new Date,t.datapoint.value=n.value,t.values.push({value:n.value,date:new Date}),t.value.value="",t.value.date="",t.value.time="",t.value.loading=!1,t.getDatapointValues(),t.datapointsService.datapointsChanged(t.datapoint.dataPointId)})).catch((function(){t.value.loading=!1}))},t.prototype.getDatapointValues=function(){var t=this;this.datapointsService.getValues(this.datapoint).then((function(n){if(t.values=n,n&&n.length>0){t.datapoint.last_added=n[n.length-1].date;for(var a=0,o=0,e=n;o<e.length;o++)a+=1;t.datapoint.value=a,t.setGraph()}else t.datapoint.value=0}))},t.prototype.setGraph=function(){for(var t=[],n=1,a=0,o=this.values;a<o.length;a++)t.push([new Date(o[a].date).getTime(),n]),n+=1;this.chart.removeSeries(0),this.chart.addSeries({name:"Value",color:"#FF015B",data:t,type:void 0},!0,!0),this.chart.ref.reflow()},t.prototype.getIncreaseToday=function(){for(var t=u(),n=0,a=0,o=this.values;a<o.length;a++)u(o[a].date).isSame(t,"day")&&(n+=1);return n},t}(),h=a("ZYCi"),g=o.rb({encapsulation:0,styles:[['.datapoint-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-family:"Neatrif Studio",sans-serif!important;font-size:24px;line-height:56px;color:#33395d}.datapoint-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{font-family:"NB International",sans-serif!important}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]{border:1px solid #eaecee;border-radius:6px;margin:40px 30px;padding:30px 40px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin-bottom:40px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__count[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__count[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:72px;line-height:72px;color:#33395d;margin:0}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__count[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#2dca73;font-weight:700;font-size:16px;line-height:16px;margin:0}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__action[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:50px;height:50px;color:#b8c7d4}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__graph[_ngcontent-%COMP%]{width:100%}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:22px;line-height:22px;color:#33395d}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent;margin-bottom:10px;--background-focused:white}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%], .datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background-color:#f4f8fb;font-size:16px;border:2px solid #dee7ee;box-sizing:border-box;border-radius:3px;line-height:31px;--padding-start:15px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%]{margin-bottom:10px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   .datapoint__datapoint-container__form__row[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:50%;display:inline-block;--background-focused:white}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   .datapoint__datapoint-container__form__save-button[_ngcontent-%COMP%]{margin-top:25px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__form[_ngcontent-%COMP%]   .datapoint__datapoint-container__form__save-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:10px}@media screen and (max-width:480px){.datapoint-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:20px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]{margin:30px;padding:15px 20px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__count[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px;line-height:48px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__count[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:25px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__header[_ngcontent-%COMP%]   .datapoint__datapoint-container__header__action[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:40px;height:40px}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   .datapoint__datapoint-container__graph[_ngcontent-%COMP%]{display:block;width:100%;position:relative}.datapoint[_ngcontent-%COMP%]   .datapoint__datapoint-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:22px;line-height:22px;color:#33395d}}']],data:{}});function b(t){return o.Lb(0,[(t()(),o.tb(0,0,null,null,13,"ion-header",[["class","datapoint-header"]],null,null,null,l.B,l.h)),o.sb(1,49152,null,0,d.B,[o.h,o.k,o.z],null,null),(t()(),o.tb(2,0,null,0,11,"ion-toolbar",[],null,null,null,l.N,l.t)),o.sb(3,49152,null,0,d.Cb,[o.h,o.k,o.z],null,null),(t()(),o.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,l.x,l.d)),o.sb(5,49152,null,0,d.l,[o.h,o.k,o.z],null,null),(t()(),o.tb(6,0,null,0,4,"ion-button",[],null,null,null,l.w,l.c)),o.sb(7,49152,null,0,d.k,[o.h,o.k,o.z],null,null),(t()(),o.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/datapoints"]],null,[[null,"click"]],(function(t,n,a){var e=!0;return"click"===n&&(e=!1!==o.Eb(t,10).onClick(a)&&e),e}),l.v,l.b)),o.sb(9,49152,null,0,d.g,[o.h,o.k,o.z],{defaultHref:[0,"defaultHref"]},null),o.sb(10,16384,null,0,d.h,[[2,d.ib],d.Hb],{defaultHref:[0,"defaultHref"]},null),(t()(),o.tb(11,0,null,0,2,"ion-title",[],null,null,null,l.M,l.s)),o.sb(12,49152,null,0,d.Ab,[o.h,o.k,o.z],null,null),(t()(),o.Kb(13,0,["",""])),(t()(),o.tb(14,0,null,null,15,"ion-content",[["class","datapoint"]],null,null,null,l.z,l.f)),o.sb(15,49152,null,0,d.u,[o.h,o.k,o.z],null,null),(t()(),o.tb(16,0,null,0,13,"div",[["class","datapoint__datapoint-container"]],null,null,null,null,null)),(t()(),o.tb(17,0,null,null,9,"div",[["class","datapoint__datapoint-container__header"]],null,null,null,null,null)),(t()(),o.tb(18,0,null,null,4,"div",[["class","datapoint__datapoint-container__header__count"]],null,null,null,null,null)),(t()(),o.tb(19,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),o.Kb(20,null,["",""])),(t()(),o.tb(21,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),o.Kb(22,null,["+"," increase today"])),(t()(),o.tb(23,0,null,null,3,"ion-button",[["class","datapoint__datapoint-container__header__action"],["color","primary"],["fill","clear"],["size","large"]],null,[[null,"click"]],(function(t,n,a){var o=!0;return"click"===n&&(o=!1!==t.component.add()&&o),o}),l.w,l.c)),o.sb(24,49152,null,0,d.k,[o.h,o.k,o.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(t()(),o.tb(25,0,null,0,1,"ion-icon",[["name","add-circle-outline"]],null,null,null,l.C,l.i)),o.sb(26,49152,null,0,d.C,[o.h,o.k,o.z],{name:[0,"name"]},null),(t()(),o.tb(27,0,null,null,2,"div",[["class","datapoint__datapoint-container__graph"]],null,null,null,null,null)),(t()(),o.tb(28,0,null,null,1,"div",[],null,null,null,null,null)),o.sb(29,737280,null,0,r.e,[o.k],{chart:[0,"chart"]},null)],(function(t,n){var a=n.component;t(n,9,0,"/datapoints"),t(n,10,0,"/datapoints"),t(n,24,0,"primary","clear","large"),t(n,26,0,"add-circle-outline"),t(n,29,0,a.chart)}),(function(t,n){var a=n.component;t(n,13,0,a.datapoint.dataPointName?a.datapoint.dataPointName:"Loading..."),t(n,20,0,a.datapoint.value),t(n,22,0,a.getIncreaseToday())}))}function C(t){return o.Lb(0,[(t()(),o.tb(0,0,null,null,1,"app-datapoint",[],null,null,null,b,g)),o.sb(1,114688,null,0,s,[h.a,p.a,d.Mb,_.a,h.m],null,null)],(function(t,n){t(n,1,0)}),null)}var f=o.pb("app-datapoint",s,C,{},{},[]),P=a("Ip0R"),M=a("gIcY"),O=function(){return function(){}}();a.d(n,"DatapointPageModuleNgFactory",(function(){return v}));var v=o.qb(e,[],(function(t){return o.Bb([o.Cb(512,o.j,o.bb,[[8,[i.a,f]],[3,o.j],o.x]),o.Cb(4608,P.l,P.k,[o.u,[2,P.t]]),o.Cb(4608,M.g,M.g,[]),o.Cb(4608,d.b,d.b,[o.z,o.g]),o.Cb(4608,d.Gb,d.Gb,[d.b,o.j,o.q]),o.Cb(4608,d.Jb,d.Jb,[d.b,o.j,o.q]),o.Cb(1073742336,P.b,P.b,[]),o.Cb(1073742336,M.f,M.f,[]),o.Cb(1073742336,M.a,M.a,[]),o.Cb(1073742336,d.Eb,d.Eb,[]),o.Cb(256,r.c,[],[]),o.Cb(512,r.d,r.d,[r.c]),o.Cb(1073742336,r.b,r.b,[r.d]),o.Cb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),o.Cb(1073742336,O,O,[]),o.Cb(1073742336,e,e,[]),o.Cb(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);