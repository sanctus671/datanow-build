(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{GRVA:function(n,t,l){"use strict";l.r(t);var i=l("CcnG"),o=function(){return function(){}}(),e=l("pMnS"),a=l("oBZk"),s=l("ZZ/e"),u=l("Ip0R"),d=l("ZYCi"),r=l("mrSG"),c=l("bhMC"),p=l("V49V"),g=l("fhOw"),_=l("KOTj"),h=l("ri4K"),b=l("wd/R"),f=l("9B/o"),C=function(){function n(n,t,l,i,o,e,a,s,u,d){var r=this;this.popoverController=n,this.alertController=t,this.datapointsService=l,this.authenticationService=i,this.router=o,this.toastController=e,this.iab=a,this.platform=s,this.offlineService=u,this.ngZone=d,this.properties={loading:!0,toggleHide:!1,displayType:"list"},this.offlineRequests=[],this.isIos=this.platform.is("ios"),this.datapoints=[],this.hiddenDatapointIds=[],this.selectedHiddenDatapointIds=[],this.unselectedHiddenDatapointIds=[],this.getHiddenDatapointIds(),this.datapointsService.monitorDatapoints().subscribe((function(n){n&&r.getDatapointValues()})),this.inCooldown=!1,this.isForbidden=!1,this.offlineService.monitorConnection().subscribe((function(n){r.getOfflineRequests()})),this.offlineService.monitorOfflineRequests().subscribe((function(n){n&&r.getOfflineRequests()}))}return n.prototype.ionViewDidEnter=function(){this.getDatapoints(),this.getOfflineRequests()},n.prototype.triggerInterval=function(){var n=this;setTimeout((function(){n.getDatapointValues()}),3e5)},n.prototype.add=function(n){var t=this;if(this.inCooldown)this.inCooldownError();else{this.inCooldown=!0,setTimeout((function(){t.inCooldown=!1}),1e3);var l=setTimeout((function(){t.datapointsService.addValue(n,{value:1,date:b().utc().format()}).then((function(n){t.getOfflineRequests()})).catch((function(l){401===l.status?t.refreshTokenAdd(n):(n.value-=1,t.getDatapointValues(),t.valueAddedError()),t.getOfflineRequests()}))}),1e4);n.value+=1,n.last_added=new Date,this.valueAdded(n,l)}},n.prototype.refreshTokenAdd=function(n){var t=this;this.authenticationService.refreshToken().then((function(){t.datapointsService.addValue(n,{value:1,date:b().utc().format()}).then((function(n){})).catch((function(){n.value-=1,n.value-=1,t.getDatapointValues()}))})).catch((function(){t.valueAddedError(),t.router.navigate(["login"])}))},n.prototype.valueAdded=function(n,t){return r.b(this,void 0,void 0,(function(){var l=this;return r.e(this,(function(i){switch(i.label){case 0:return[4,this.toastController.create({message:"Changes Saved",duration:1e4,color:"dark",mode:"md",buttons:[{side:"end",text:"Undo",handler:function(){clearTimeout(t),n.value-=1,l.getDatapointValues()}}]})];case 1:return i.sent().present(),[2]}}))}))},n.prototype.valueAddedError=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:"Error adding value. Try again soon.",duration:2e3,color:"danger",mode:"md",buttons:[]})];case 1:return n.sent().present(),[2]}}))}))},n.prototype.inCooldownError=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:"Wait 1 second to add value again",duration:1e3,color:"warning",mode:"md",buttons:[]})];case 1:return n.sent().present(),[2]}}))}))},n.prototype.getDatapoints=function(){var n=this;this.isForbidden=!1,this.datapointsService.getDatapoints().then((function(t){n.datapoints=t,n.getDatapointValues(),n.properties.loading=!1})).catch((function(t){n.getOfflineRequests(),t&&401===t.status?n.refreshToken():t&&403===t.status?(n.properties.loading=!1,n.isForbidden=!0):(n.properties.loading=!1,n.datapointsError())}))},n.prototype.getOfflineRequests=function(){var n=this;this.offlineService.getRequests().then((function(t){t&&n.ngZone.run((function(){n.offlineRequests=t}))}))},n.prototype.datapointsError=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:"Error retreiving data",duration:4e3,color:"danger",mode:"md",buttons:[]})];case 1:return n.sent().present(),[2]}}))}))},n.prototype.getDatapointValues=function(){this.datapoints.length>0&&this.setDatapointValueCallback(0)},n.prototype.setDatapointValueCallback=function(n){var t=this;this.setDatapointValue(n).then((function(){(n+=1)<=t.datapoints.length-1&&t.setDatapointValueCallback(n)})).catch((function(){}))},n.prototype.setDatapointValue=function(n){var t=this;return new Promise((function(l,i){t.datapointsService.getValues(t.datapoints[n]).then((function(i){if(i&&i.length>0){t.datapoints[n].last_added=i[i.length-1].date;for(var o=0,e=0,a=i;e<a.length;e++)o+=1;t.datapoints[n].value=o}else t.datapoints[n].value=0;setTimeout((function(){l(i)}),100)})).catch((function(n){t.getOfflineRequests(),i(n)}))}))},n.prototype.refreshToken=function(){var n=this;this.authenticationService.refreshToken().then((function(){n.datapointsService.getDatapoints().then((function(t){n.datapoints=t,n.getDatapointValues(),n.properties.loading=!1}))})).catch((function(){n.router.navigate(["login"])}))},n.prototype.toggleDatapoint=function(n){var t=this.hiddenDatapointIds.indexOf(n.timeSeriesId);t>-1?(this.hiddenDatapointIds.splice(t,1),this.unselectedHiddenDatapointIds.push(n.timeSeriesId)):(this.hiddenDatapointIds.push(n.timeSeriesId),this.selectedHiddenDatapointIds.push(n.timeSeriesId))},n.prototype.saveHiddenDatapoints=function(){this.properties.toggleHide=!1,this.selectedHiddenDatapointIds=[],this.unselectedHiddenDatapointIds=[],this.datapointsService.setHiddenDatapointIds(this.hiddenDatapointIds).then((function(){})).catch((function(){}))},n.prototype.cancelHiddenDatapoints=function(){this.properties.toggleHide=!1;for(var n=0,t=this.selectedHiddenDatapointIds;n<t.length;n++)(e=this.hiddenDatapointIds.indexOf(o=t[n]))>-1&&this.hiddenDatapointIds.splice(e,1);this.selectedHiddenDatapointIds=[];for(var l=0,i=this.unselectedHiddenDatapointIds;l<i.length;l++){var o,e;(e=this.hiddenDatapointIds.indexOf(o=i[l]))<0&&this.hiddenDatapointIds.push(o)}this.unselectedHiddenDatapointIds=[]},n.prototype.getHiddenDatapointIds=function(){var n=this;this.datapointsService.getHiddenDatapointIds().then((function(t){n.hiddenDatapointIds=t})).catch((function(){}))},n.prototype.changeDisplayType=function(){this.properties.displayType="list"===this.properties.displayType?"grid":"list"},n.prototype.accountPopover=function(n){return r.b(this,void 0,void 0,(function(){var t,l=this;return r.e(this,(function(i){switch(i.label){case 0:return[4,this.popoverController.create({component:c.a,event:n,translucent:!0,mode:"md"})];case 1:return(t=i.sent()).present(),[2,t.onDidDismiss().then((function(n){n&&n.data&&"settings"===n.data.data?l.router.navigate(["user-settings"]):n&&n.data&&"logout"===n.data.data&&l.logout()}))]}}))}))},n.prototype.logout=function(){return r.b(this,void 0,void 0,(function(){var n=this;return r.e(this,(function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"Confirm",subHeader:"Are you sure you want to logout?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"Logout",handler:function(t){n.authenticationService.logout()}}],mode:"md"})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},n.prototype.dataPointsPopover=function(n){return r.b(this,void 0,void 0,(function(){var t,l=this;return r.e(this,(function(i){switch(i.label){case 0:return[4,this.popoverController.create({component:p.a,event:n,translucent:!0,mode:"md"})];case 1:return(t=i.sent()).present(),[2,t.onDidDismiss().then((function(n){n&&n.data&&"showhide"===n.data.data?l.properties.toggleHide?l.properties.toggleHide=!1:(l.properties.displayType="list",l.properties.toggleHide=!0):n&&n.data&&"adddatapoint"===n.data.data&&l.addDatapoint()}))]}}))}))},n.prototype.addDatapoint=function(){return r.b(this,void 0,void 0,(function(){var n=this;return r.e(this,(function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"Add a Datapoint",inputs:[{name:"name",type:"text",placeholder:"Name of Datapoint"},{name:"initial",type:"number",placeholder:"Initial value"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"Create",handler:function(t){n.datapoints.push({timeSeriesId:0,timeSeriesName:t.name,value:t.initial})}}],mode:"md"})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},n.prototype.formatDate=function(n){return b(n).fromNow()},n.prototype.openLink=function(n){this.iab.create(n,"_system")},n}(),m=i.rb({encapsulation:0,styles:[['@charset "UTF-8";.datapoints-toolbar[_ngcontent-%COMP%]   .datapoints-toolbar__logo[_ngcontent-%COMP%]{height:20px}.datapoints-toolbar[_ngcontent-%COMP%]   .datapoints-toolbar__user-login[_ngcontent-%COMP%]:after{content:"\u25be";color:#8ea3b5;position:absolute;right:-3px;top:0;line-height:52px}.datapoints__header[_ngcontent-%COMP%]{padding:50px 40px 20px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:134px}.datapoints__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;margin:0}.datapoints__header[_ngcontent-%COMP%]   .datapoints__header__actions[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:30px;height:30px;color:#b8c7d4}.datapoints__header[_ngcontent-%COMP%]   .datapoints__header__actions[_ngcontent-%COMP%]   .datapoints__header__actions__action--grid[_ngcontent-%COMP%]{padding:0 20px}.datapoints__header[_ngcontent-%COMP%]   .datapoints__header__actions[_ngcontent-%COMP%]   .datapoints__header__actions__action--grid[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:26px;height:26px}.datapoints__loading[_ngcontent-%COMP%]{text-align:center;padding:80px 0}.datapoints__loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px}.datapoints__empty[_ngcontent-%COMP%]{text-align:center;padding:50px 20px}.datapoints__empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#b8c7d4}.datapoints__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#b8c7d4;margin-top:0}.datapoints__offline-indicator[_ngcontent-%COMP%]{width:10px;height:10px;background-color:#ff015b;position:fixed;right:10px;bottom:10px;border-radius:5px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]{--border-color:#EAECEE;padding-left:40px;padding-right:0}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint.datapoint--disabled[_ngcontent-%COMP%]{opacity:.4}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint.datapoint--disabled[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#33395d}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint.datapoint--toggle-hide[_ngcontent-%COMP%]{padding-left:0;padding-right:30px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]{margin:20px 0;cursor:pointer}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]:focus{outline:0}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]:active{opacity:.4}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:22px;line-height:26px;margin:0;color:#33395d;overflow:hidden;text-overflow:ellipsis}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:26px;color:#8ea3b5}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__count[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#33395d;font-size:28px;line-height:28px;-webkit-box-flex:1;flex:1;margin:0}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__count[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:38px;height:38px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoints__datapoints-list__showhide-actions[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:40px 20px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoints__datapoints-list__showhide-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0 10px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoints__datapoints-list__showhide-actions[_ngcontent-%COMP%]   .datapoints__datapoints-list__showhide-actions__cancel-button[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoints__datapoints-list__showhide-actions[_ngcontent-%COMP%]   .datapoints__datapoints-list__showhide-actions__save-button[_ngcontent-%COMP%]{width:60%}.datapoints__datapoints-grid[_ngcontent-%COMP%]{border-top:1px solid #eaecee}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]{border-bottom:1px solid #eaecee;position:relative;text-align:center;color:#33395d;padding:40px 0}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]:nth-child(n+1):after{content:"";position:absolute;top:0;right:0;height:100%;width:1px;background-color:#eaecee}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint.datapoint--hide[_ngcontent-%COMP%]{display:none}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__add-box[_ngcontent-%COMP%]{color:#008dff;font-size:49px;line-height:49px;font-weight:700;border:4px solid #008dff;border-radius:12px;display:inline-block;margin:0 auto;padding:10px 25px 15px;-webkit-transition:opacity .1s;transition:opacity .1s}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__add-box[_ngcontent-%COMP%]:active{opacity:.4}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#33395d;margin:15px 0}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#33395d;margin:0 0 5px;font-weight:700;font-size:22px;line-height:26px}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8ea3b5;margin:0;font-size:16px;line-height:18px}@media screen and (max-width:480px){.datapoints__header[_ngcontent-%COMP%]{padding:20px 30px 10px;height:94px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]{padding-left:30px;padding-right:0}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint.datapoint--toggle-hide[_ngcontent-%COMP%]{padding-left:0;padding-right:20px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;line-height:18px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;line-height:23px}.datapoints__datapoints-list[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;line-height:20px}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]{padding:15px 0}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   .datapoint__add-box[_ngcontent-%COMP%]{font-size:30px;line-height:30px;padding:10px 20px 15px}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:27px;line-height:32px;margin:5px 0 0}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px;line-height:18px;margin-bottom:2px}.datapoints__datapoints-grid[_ngcontent-%COMP%]   .datapoint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8ea3b5;margin:0;font-size:13px;line-height:16px}}']],data:{}});function O(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,a.x,a.d)),i.sb(1,49152,null,0,s.l,[i.h,i.k,i.z],null,null),(n()(),i.tb(2,0,null,0,1,"ion-menu-button",[["color","dark"]],null,null,null,a.H,a.o)),i.sb(3,49152,null,0,s.R,[i.h,i.k,i.z],{color:[0,"color"]},null)],(function(n,t){n(t,3,0,"dark")}),null)}function v(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,1,"ion-icon",[["src","assets/grid.svg"]],null,null,null,a.C,a.i)),i.sb(1,49152,null,0,s.C,[i.h,i.k,i.z],{src:[0,"src"]},null)],(function(n,t){n(t,1,0,"assets/grid.svg")}),null)}function x(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,1,"ion-icon",[["src","assets/list.svg"]],null,null,null,a.C,a.i)),i.sb(1,49152,null,0,s.C,[i.h,i.k,i.z],{src:[0,"src"]},null)],(function(n,t){n(t,1,0,"assets/list.svg")}),null)}function P(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,12,"div",[["class","datapoints__header__actions"]],null,null,null,null,null)),(n()(),i.tb(1,0,null,null,6,"ion-button",[["class","datapoints__header__actions__action datapoints__header__actions__action--grid"],["color","dark"],["fill","clear"],["no-padding",""],["size","large"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.changeDisplayType()&&i),i}),a.w,a.c)),i.sb(2,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),i.sb(3,16384,null,0,s.d,[i.k],null,null),(n()(),i.ib(16777216,null,0,1,null,v)),i.sb(5,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,x)),i.sb(7,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.tb(8,0,null,null,4,"ion-button",[["class","datapoints__header__actions__action"],["color","dark"],["fill","clear"],["no-padding",""],["size","large"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.dataPointsPopover(l)&&i),i}),a.w,a.c)),i.sb(9,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),i.sb(10,16384,null,0,s.d,[i.k],null,null),(n()(),i.tb(11,0,null,0,1,"ion-icon",[["ios","md-more"],["md","md-more"],["name","more"]],null,null,null,a.C,a.i)),i.sb(12,49152,null,0,s.C,[i.h,i.k,i.z],{ios:[0,"ios"],md:[1,"md"],name:[2,"name"]},null)],(function(n,t){var l=t.component;n(t,2,0,"dark","clear","large"),n(t,5,0,"list"===l.properties.displayType),n(t,7,0,"grid"===l.properties.displayType),n(t,9,0,"dark","clear","large"),n(t,12,0,"md-more","md-more","more")}),null)}function M(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,2,"div",[["class","datapoints__loading"]],null,null,null,null,null)),(n()(),i.tb(1,0,null,null,1,"ion-spinner",[["color","dark"],["name","circular"]],null,null,null,a.K,a.q)),i.sb(2,49152,null,0,s.sb,[i.h,i.k,i.z],{color:[0,"color"],name:[1,"name"]},null)],(function(n,t){n(t,2,0,"dark","circular")}),null)}function k(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,4,"div",[["class","datapoints__empty"]],null,null,null,null,null)),(n()(),i.tb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),i.Kb(-1,null,["Can't load data"])),(n()(),i.tb(3,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,t,l){var i=!0,o=n.component;return"click"===t&&(o.properties.loading=!0,i=!1!==o.getDatapoints()&&i),i}),null,null)),(n()(),i.Kb(-1,null,["Try again"]))],null,null)}function y(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,6,"div",[["class","datapoints__empty"]],null,null,null,null,null)),(n()(),i.tb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),i.Kb(-1,null,["Invalid permissions"])),(n()(),i.tb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i.Kb(-1,null,["Contact us if you wish to be set up to use this app"])),(n()(),i.tb(5,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.openLink("https://www.datanow.co.nz/contact/")&&i),i}),null,null)),(n()(),i.Kb(-1,null,["Contact DataNow"]))],null,null)}function D(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,3,"ion-button",[["class","datapoint__count__action"],["color","primary"],["fill","clear"],["size","large"],["slot","start"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.toggleDatapoint(n.parent.parent.context.$implicit)&&i),i}),a.w,a.c)),i.sb(1,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(n()(),i.tb(2,0,null,0,1,"ion-icon",[],null,null,null,a.C,a.i)),i.sb(3,49152,null,0,s.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],(function(n,t){var l=t.component;n(t,1,0,"primary","clear","large"),n(t,3,0,l.hiddenDatapointIds.indexOf(t.parent.parent.context.$implicit.timeSeriesId)>-1?"md-eye-off":"md-eye")}),null)}function w(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,3,"ion-button",[["class","datapoints__header__actions__action"],["color","primary"],["fill","clear"],["size","large"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.add(n.parent.parent.context.$implicit)&&i),i}),a.w,a.c)),i.sb(1,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(n()(),i.tb(2,0,null,0,1,"ion-icon",[["name","add-circle-outline"]],null,null,null,a.C,a.i)),i.sb(3,49152,null,0,s.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"primary","clear","large"),n(t,3,0,"add-circle-outline")}),null)}function I(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,21,"ion-item",[["class","datapoints__datapoints-list__datapoint datapoint"],["no-padding",""]],null,null,null,a.E,a.k)),i.Hb(512,null,u.q,u.r,[i.s,i.t,i.k,i.D]),i.sb(2,278528,null,0,u.h,[u.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Gb(3,{"datapoint--disabled":0,"datapoint--toggle-hide":1}),i.sb(4,49152,null,0,s.H,[i.h,i.k,i.z],null,null),i.sb(5,16384,null,0,s.d,[i.k],null,null),(n()(),i.ib(16777216,null,0,1,null,D)),i.sb(7,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.tb(8,0,null,0,8,"ion-label",[["class","datapoint__details"],["color","dark"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==i.Eb(n,10).onClick()&&o),"click"===t&&(o=!1!==i.Eb(n,12).onClick(l)&&o),o}),a.F,a.l)),i.sb(9,49152,null,0,s.N,[i.h,i.k,i.z],{color:[0,"color"]},null),i.sb(10,16384,null,0,d.n,[d.m,d.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.Fb(11,1),i.sb(12,737280,null,0,s.Kb,[u.g,s.Hb,i.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i.tb(13,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i.Kb(14,null,["",""])),(n()(),i.tb(15,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i.Kb(16,null,["",""])),(n()(),i.tb(17,0,null,0,4,"div",[["class","datapoint__count"],["slot","end"]],null,null,null,null,null)),(n()(),i.tb(18,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),i.Kb(19,null,["",""])),(n()(),i.ib(16777216,null,null,1,null,w)),i.sb(21,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component,i=n(t,3,0,l.hiddenDatapointIds.indexOf(t.parent.context.$implicit.timeSeriesId)>-1,l.properties.toggleHide);n(t,2,0,"datapoints__datapoints-list__datapoint datapoint",i),n(t,7,0,l.properties.toggleHide),n(t,9,0,"dark");var o=n(t,11,0,"/datapoints/"+t.parent.context.$implicit.timeSeriesId);n(t,10,0,o),n(t,12,0,"forward"),n(t,21,0,!l.properties.toggleHide)}),(function(n,t){var l=t.component;n(t,14,0,t.parent.context.$implicit.name),n(t,16,0,t.parent.context.$implicit.last_added?l.formatDate(t.parent.context.$implicit.last_added):""),n(t,19,0,t.parent.context.$implicit.value)}))}function z(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),i.ib(16777216,null,null,1,null,I)),i.sb(2,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,2,0,l.hiddenDatapointIds.indexOf(t.context.$implicit.timeSeriesId)<0||l.properties.toggleHide)}),null)}function L(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,6,"div",[["class","datapoints__datapoints-list__showhide-actions"]],null,null,null,null,null)),(n()(),i.tb(1,0,null,null,2,"ion-button",[["class","datapoints__datapoints-list__showhide-actions__cancel-button"],["color","light"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.cancelHiddenDatapoints()&&i),i}),a.w,a.c)),i.sb(2,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"]},null),(n()(),i.Kb(-1,0,[" Cancel "])),(n()(),i.tb(4,0,null,null,2,"ion-button",[["class","datapoints__datapoints-list__showhide-actions__save-button"],["color","primary"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.saveHiddenDatapoints()&&i),i}),a.w,a.c)),i.sb(5,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"]},null),(n()(),i.Kb(-1,0,[" Save "]))],(function(n,t){n(t,2,0,"light"),n(t,5,0,"primary")}),null)}function H(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,5,"ion-list",[["class","datapoints__datapoints-list"]],null,null,null,a.G,a.m)),i.sb(1,49152,null,0,s.O,[i.h,i.k,i.z],null,null),(n()(),i.ib(16777216,null,0,1,null,z)),i.sb(3,278528,null,0,u.i,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(n()(),i.ib(16777216,null,0,1,null,L)),i.sb(5,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,3,0,l.datapoints),n(t,5,0,l.properties.toggleHide)}),null)}function S(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,16,"ion-col",[["class","datapoints__datapoints-grid__datapoint datapoint"],["size","6"]],null,null,null,a.y,a.e)),i.Hb(512,null,u.q,u.r,[i.s,i.t,i.k,i.D]),i.sb(2,278528,null,0,u.h,[u.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i.Gb(3,{"datapoint--hide":0}),i.sb(4,49152,null,0,s.t,[i.h,i.k,i.z],{size:[0,"size"]},null),(n()(),i.tb(5,0,null,0,1,"div",[["class","datapoint__add-box"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.add(n.context.$implicit)&&i),i}),null,null)),(n()(),i.Kb(-1,null,["+1"])),(n()(),i.tb(7,0,null,0,9,"a",[["routerDirection","forward"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==i.Eb(n,8).onClick(l)&&o),"click"===t&&(o=!1!==i.Eb(n,9).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&o),o}),null,null)),i.sb(8,737280,null,0,s.Kb,[u.g,s.Hb,i.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),i.sb(9,671744,null,0,d.o,[d.m,d.a,u.g],{routerLink:[0,"routerLink"]},null),i.Fb(10,1),(n()(),i.tb(11,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i.Kb(12,null,["",""])),(n()(),i.tb(13,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),i.Kb(14,null,["",""])),(n()(),i.tb(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i.Kb(16,null,["",""]))],(function(n,t){var l=n(t,3,0,t.component.hiddenDatapointIds.indexOf(t.context.$implicit.timeSeriesId)>-1);n(t,2,0,"datapoints__datapoints-grid__datapoint datapoint",l),n(t,4,0,"6"),n(t,8,0,"forward");var i=n(t,10,0,"/datapoints/"+t.context.$implicit.timeSeriesId);n(t,9,0,i)}),(function(n,t){var l=t.component;n(t,7,0,i.Eb(t,9).target,i.Eb(t,9).href),n(t,12,0,t.context.$implicit.value),n(t,14,0,t.context.$implicit.name),n(t,16,0,t.context.$implicit.last_added?l.formatDate(t.context.$implicit.last_added):"")}))}function T(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,6,"ion-grid",[["class","datapoints__datapoints-grid"],["no-padding",""]],null,null,null,a.A,a.g)),i.sb(1,49152,null,0,s.A,[i.h,i.k,i.z],null,null),i.sb(2,16384,null,0,s.d,[i.k],null,null),(n()(),i.tb(3,0,null,0,3,"ion-row",[],null,null,null,a.J,a.p)),i.sb(4,49152,null,0,s.jb,[i.h,i.k,i.z],null,null),(n()(),i.ib(16777216,null,0,1,null,S)),i.sb(6,278528,null,0,u.i,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,6,0,t.component.datapoints)}),null)}function E(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,0,"div",[["class","datapoints__offline-indicator"]],null,null,null,null,null))],null,null)}function K(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,14,"ion-header",[["class","datapoints-toolbar"]],null,null,null,a.B,a.h)),i.sb(1,49152,null,0,s.B,[i.h,i.k,i.z],null,null),(n()(),i.tb(2,0,null,0,12,"ion-toolbar",[],null,null,null,a.N,a.t)),i.sb(3,49152,null,0,s.Cb,[i.h,i.k,i.z],null,null),(n()(),i.ib(16777216,null,0,1,null,O)),i.sb(5,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.tb(6,0,null,0,2,"ion-title",[],null,null,null,a.M,a.s)),i.sb(7,49152,null,0,s.Ab,[i.h,i.k,i.z],null,null),(n()(),i.tb(8,0,null,0,0,"img",[["class","datapoints-toolbar__logo"],["src","assets/logo.svg"]],null,null,null,null,null)),(n()(),i.tb(9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,a.x,a.d)),i.sb(10,49152,null,0,s.l,[i.h,i.k,i.z],null,null),(n()(),i.tb(11,0,null,0,3,"ion-button",[["class","datapoints-toolbar__user-login"],["color","dark"]],null,[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.accountPopover(l)&&i),i}),a.w,a.c)),i.sb(12,49152,null,0,s.k,[i.h,i.k,i.z],{color:[0,"color"]},null),(n()(),i.tb(13,0,null,0,1,"ion-icon",[["ios","md-contact"],["md","md-contact"],["name","contact"]],null,null,null,a.C,a.i)),i.sb(14,49152,null,0,s.C,[i.h,i.k,i.z],{ios:[0,"ios"],md:[1,"md"],name:[2,"name"]},null),(n()(),i.tb(15,0,null,null,18,"ion-content",[["class","datapoints"]],null,null,null,a.z,a.f)),i.sb(16,49152,null,0,s.u,[i.h,i.k,i.z],null,null),(n()(),i.tb(17,0,null,0,4,"div",[["class","datapoints__header"]],null,null,null,null,null)),(n()(),i.tb(18,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i.Kb(-1,null,[" Manual Data "])),(n()(),i.ib(16777216,null,null,1,null,P)),i.sb(21,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,M)),i.sb(23,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,k)),i.sb(25,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,y)),i.sb(27,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,H)),i.sb(29,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,T)),i.sb(31,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.ib(16777216,null,0,1,null,E)),i.sb(33,16384,null,0,u.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,5,0,!l.isIos),n(t,12,0,"dark"),n(t,14,0,"md-contact","md-contact","contact"),n(t,21,0,!l.properties.loading&&l.datapoints.length>0),n(t,23,0,l.properties.loading),n(t,25,0,!l.properties.loading&&l.datapoints.length<1&&!l.isForbidden),n(t,27,0,!l.properties.loading&&l.datapoints.length<1&&l.isForbidden),n(t,29,0,"list"===l.properties.displayType),n(t,31,0,"grid"===l.properties.displayType),n(t,33,0,l.offlineRequests&&l.offlineRequests.length>0)}),null)}function q(n){return i.Lb(0,[(n()(),i.tb(0,0,null,null,1,"app-datapoints",[],null,null,null,K,m)),i.sb(1,49152,null,0,C,[s.Jb,s.a,g.a,h.a,d.m,s.Mb,f.a,s.Ib,_.a,i.z],null,null)],null,null)}var j=i.pb("app-datapoints",C,q,{},{},[]),V=l("gIcY");l.d(t,"DatapointsPageModuleNgFactory",(function(){return R}));var R=i.qb(o,[],(function(n){return i.Bb([i.Cb(512,i.j,i.bb,[[8,[e.a,j]],[3,i.j],i.x]),i.Cb(4608,u.l,u.k,[i.u,[2,u.t]]),i.Cb(4608,V.g,V.g,[]),i.Cb(4608,s.b,s.b,[i.z,i.g]),i.Cb(4608,s.Gb,s.Gb,[s.b,i.j,i.q]),i.Cb(4608,s.Jb,s.Jb,[s.b,i.j,i.q]),i.Cb(1073742336,u.b,u.b,[]),i.Cb(1073742336,V.f,V.f,[]),i.Cb(1073742336,V.a,V.a,[]),i.Cb(1073742336,s.Eb,s.Eb,[]),i.Cb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),i.Cb(1073742336,o,o,[]),i.Cb(1024,d.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);