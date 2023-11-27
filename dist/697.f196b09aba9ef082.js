"use strict";(self.webpackChunkcustomer_management_app=self.webpackChunkcustomer_management_app||[]).push([[697],{1697:(E,u,o)=>{o.r(u),o.d(u,{MapComponent:()=>C});var f=o(7394);class w extends f.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const d={setInterval(a,i,...t){const{delegate:e}=d;return e?.setInterval?e.setInterval(a,i,...t):setInterval(a,i,...t)},clearInterval(a){const{delegate:i}=d;return(i?.clearInterval||clearInterval)(a)},delegate:void 0};var v=o(9039);const p={now:()=>(p.delegate||Date).now(),delegate:void 0};class l{constructor(i,t=l.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,e){return new this.schedulerActionCtor(this,i).schedule(e,t)}}l.now=p.now;const M=new class P extends l{constructor(i,t=l.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let e;this._active=!0;do{if(e=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,e){for(;i=t.shift();)i.unsubscribe();throw e}}}(class y extends w{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var e;if(this.closed)return this;this.state=i;const s=this.id,n=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(n,s,t)),this.pending=!0,this.delay=t,this.id=null!==(e=this.id)&&void 0!==e?e:this.requestAsyncId(n,this.id,t),this}requestAsyncId(i,t,e=0){return d.setInterval(i.flush.bind(i,this),e)}recycleAsyncId(i,t,e=0){if(null!=e&&this.delay===e&&!1===this.pending)return t;null!=t&&d.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const e=this._execute(i,t);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let s,e=!1;try{this.work(i)}catch(n){e=!0,s=n||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:e}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,v.P)(e,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var k=o(9360),x=o(8251),r=o(4946);let I=(()=>{class a{constructor(){this.longitude=0,this.latitude=0,this.markerText=""}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["cm-map-point"]],inputs:{longitude:"longitude",latitude:"latitude",markerText:"markerText"},decls:0,vars:0,template:function(e,s){},encapsulation:2})}return a})();const T=["mapContainer"];let C=(()=>{class a{get dataPoints(){return this._dataPoints}set dataPoints(t){this._dataPoints=t,this.renderMapPoints()}get enabled(){return this.isEnabled}set enabled(t){this.isEnabled=t,this.init()}constructor(){this.isEnabled=!1,this.loadingScript=!1,this.map={},this.markers=[],this.mapHeight=null,this.mapWidth=null,this.height=0,this.width=0,this.latitude=34.5133,this.longitude=-94.1629,this.markerText="Your Location",this.zoom=8,this._dataPoints=[],this.mapDiv={},this.mapPoints={}}ngOnInit(){if(this.latitude&&this.longitude)if(this.mapHeight&&this.mapWidth)this.mapHeight=this.height+"px",this.mapWidth=this.width+"px";else{const t=this.getWindowHeightWidth(this.mapDiv.nativeElement.ownerDocument);this.mapHeight=t.height/2+"px",this.mapWidth=t.width+"px"}}ngAfterContentInit(){this.mapPoints.changes.pipe(function b(a,i=M){return(0,k.e)((t,e)=>{let s=null,n=null,c=null;const m=()=>{if(s){s.unsubscribe(),s=null;const h=n;n=null,e.next(h)}};function A(){const h=c+a,g=i.now();if(g<h)return s=this.schedule(void 0,h-g),void e.add(s);m()}t.subscribe((0,x.x)(e,h=>{n=h,c=i.now(),s||(s=i.schedule(A,a),e.add(s))},()=>{m(),e.complete()},void 0,()=>{n=s=null}))})}(500)).subscribe(()=>{this.enabled&&this.renderMapPoints()})}init(){setTimeout(()=>{this.ensureScript()},200)}getWindowHeightWidth(t){let e=window.innerWidth||t.documentElement.clientWidth||t.body.clientWidth;return e>900&&(e=900),{height:window.innerHeight||t.documentElement.clientHeight||t.body.clientHeight,width:e}}ensureScript(){this.loadingScript=!0;const t=this.mapDiv.nativeElement.ownerDocument;if(t.querySelector('script[id="googlemaps"]'))this.isEnabled&&this.renderMap();else{const s=t.createElement("script");s.id="googlemaps",s.type="text/javascript",s.async=!0,s.defer=!0,s.src="https://maps.googleapis.com/maps/api/js?key=",s.onload=()=>{this.loadingScript=!1,this.isEnabled&&this.renderMap()},t.body.appendChild(s)}}renderMap(){const t=this.createLatLong(this.latitude,this.longitude),e={zoom:this.zoom,center:t,mapTypeControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.mapDiv.nativeElement,e),this.mapPoints&&this.mapPoints.length||this.dataPoints&&this.dataPoints.length?this.renderMapPoints():this.createMarker(t,this.markerText)}createLatLong(t,e){return t&&e?new google.maps.LatLng(t,e):null}renderMapPoints(){if(this.map&&this.isEnabled){this.clearMapPoints();const t=this.mapPoints&&this.mapPoints.length?this.mapPoints:this.dataPoints;if(t)for(const e of t){let s=e.markerText?e.markerText:`<h3>${e.firstName} ${e.lastName}</h3>`;const n=this.createLatLong(e.latitude,e.longitude);this.createMarker(n,s)}}}clearMapPoints(){this.markers.forEach(t=>{t.setMap(null)}),this.markers=[]}createMarker(t,e){const s=new google.maps.InfoWindow({content:e}),n=new google.maps.Marker({position:t,map:this.map,title:e,animation:google.maps.Animation.DROP});this.markers.push(n),n.addListener("click",()=>{s.open(this.map,n)})}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["cm-map"]],contentQueries:function(e,s,n){if(1&e&&r.Suo(n,I,4),2&e){let c;r.iGM(c=r.CRH())&&(s.mapPoints=c)}},viewQuery:function(e,s){if(1&e&&r.Gf(T,7),2&e){let n;r.iGM(n=r.CRH())&&(s.mapDiv=n.first)}},inputs:{height:"height",width:"width",latitude:"latitude",longitude:"longitude",markerText:"markerText",zoom:"zoom",dataPoints:"dataPoints",enabled:"enabled"},decls:3,vars:4,consts:[["mapContainer",""]],template:function(e,s){1&e&&(r.TgZ(0,"div",null,0),r._uU(2,"Map Loading...."),r.qZA()),2&e&&r.Udp("height",s.mapHeight)("width",s.mapWidth)},encapsulation:2,changeDetection:0})}return a})()}}]);