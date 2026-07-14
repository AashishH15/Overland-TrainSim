(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=1021,w=1022,T=1023,E=1024,D=1025,O=1026,k=1027,A=1028,j=1029,ee=1030,M=1031,N=1033,te=33776,ne=33777,re=33778,ie=33779,ae=35840,oe=35841,se=35842,P=35843,ce=36196,le=37492,ue=37496,de=37808,fe=37809,pe=37810,me=37811,F=37812,he=37813,ge=37814,_e=37815,I=37816,ve=37817,L=37818,R=37819,ye=37820,be=37821,xe=36492,Se=36494,Ce=36495,we=36283,Te=36284,Ee=36285,De=36286,Oe=2300,ke=2301,Ae=2302,je=2400,Me=2401,Ne=2402,Pe=3200,Fe=3201,Ie=`srgb`,Le=`srgb-linear`,Re=`display-p3`,ze=`display-p3-linear`,Be=`linear`,Ve=`srgb`,He=`rec709`,Ue=7680,We=35044,Ge=2e3,Ke=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Je=1234567,Ye=Math.PI/180,Xe=180/Math.PI;function Ze(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+`-`+qe[t&255]+qe[t>>8&255]+`-`+qe[t>>16&15|64]+qe[t>>24&255]+`-`+qe[n&63|128]+qe[n>>8&255]+`-`+qe[n>>16&255]+qe[n>>24&255]+qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]).toLowerCase()}function Qe(e,t,n){return Math.max(t,Math.min(n,e))}function $e(e,t){return(e%t+t)%t}function et(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function tt(e,t,n){return e===t?0:(n-e)/(t-e)}function nt(e,t,n){return(1-n)*e+n*t}function rt(e,t,n,r){return nt(e,t,1-Math.exp(-n*r))}function it(e,t=1){return t-Math.abs($e(e,t*2)-t)}function at(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function st(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ct(e,t){return e+Math.random()*(t-e)}function lt(e){return e*(.5-Math.random())}function ut(e){e!==void 0&&(Je=e);let t=Je+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dt(e){return e*Ye}function ft(e){return e*Xe}function pt(e){return(e&e-1)==0&&e!==0}function mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ht(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function gt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function _t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var yt={DEG2RAD:Ye,RAD2DEG:Xe,generateUUID:Ze,clamp:Qe,euclideanModulo:$e,mapLinear:et,inverseLerp:tt,lerp:nt,damp:rt,pingpong:it,smoothstep:at,smootherstep:ot,randInt:st,randFloat:ct,randFloatSpread:lt,seededRandom:ut,degToRad:dt,radToDeg:ft,isPowerOfTwo:pt,ceilPowerOfTwo:mt,floorPowerOfTwo:ht,setQuaternionFromProperEuler:gt,normalize:vt,denormalize:_t},z=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},B=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bt.makeScale(e,t)),this}rotate(e){return this.premultiply(bt.makeRotation(-e)),this}translate(e,t){return this.premultiply(bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bt=new B;function xt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function St(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ct(){let e=St(`canvas`);return e.style.display=`block`,e}var wt={};function Tt(e){e in wt||(wt[e]=!0,console.warn(e))}function Et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Dt=new B().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ot=new B().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kt={[Le]:{transfer:Be,primaries:He,toReference:e=>e,fromReference:e=>e},[Ie]:{transfer:Ve,primaries:He,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[ze]:{transfer:Be,primaries:`p3`,toReference:e=>e.applyMatrix3(Ot),fromReference:e=>e.applyMatrix3(Dt)},[Re]:{transfer:Ve,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Ot),fromReference:e=>e.applyMatrix3(Dt).convertLinearToSRGB()}},At=new Set([Le,ze]),jt={enabled:!0,_workingColorSpace:Le,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!At.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=kt[t].toReference,i=kt[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return kt[e].primaries},getTransfer:function(e){return e===``?Be:kt[e].transfer}};function Mt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Nt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Pt,Ft=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pt===void 0&&(Pt=St(`canvas`)),Pt.width=e.width,Pt.height=e.height;let n=Pt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=St(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Mt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Mt(t[e]/255)*255):t[e]=Mt(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},It=0,Lt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:It++}),this.uuid=Ze(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Rt(r[t].image)):e.push(Rt(r[t]))}else e=Rt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Rt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ft.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var zt=0,Bt=class e extends Ke{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=T,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=Ze(),this.name=``,this.source=new Lt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=300,Bt.DEFAULT_ANISOTROPY=1;var Vt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ht=class extends Ke{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ut=class extends Ht{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wt=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Gt=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qt.copy(this).projectOnVector(e),this.sub(qt)}reflect(e){return this.sub(qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qt=new V,Jt=new Kt,Yt=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zt):Zt.fromBufferAttribute(r,t),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qt.copy(e.boundingBox)),Qt.applyMatrix4(e.matrixWorld),this.union(Qt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(on),sn.subVectors(this.max,on),$t.subVectors(e.a,on),en.subVectors(e.b,on),tn.subVectors(e.c,on),nn.subVectors(en,$t),rn.subVectors(tn,en),an.subVectors($t,tn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-an.z,an.y,nn.z,0,-nn.x,rn.z,0,-rn.x,an.z,0,-an.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-an.y,an.x,0];return!un(t,$t,en,tn,sn)||(t=[1,0,0,0,1,0,0,0,1],!un(t,$t,en,tn,sn))?!1:(cn.crossVectors(nn,rn),t=[cn.x,cn.y,cn.z],un(t,$t,en,tn,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xt=[new V,new V,new V,new V,new V,new V,new V,new V],Zt=new V,Qt=new Yt,$t=new V,en=new V,tn=new V,nn=new V,rn=new V,an=new V,on=new V,sn=new V,cn=new V,ln=new V;function un(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ln.fromArray(e,a);let o=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),s=t.dot(ln),c=n.dot(ln),l=r.dot(ln);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dn=new Yt,fn=new V,pn=new V,mn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?dn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fn.subVectors(e,this.center);let t=fn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(fn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fn.copy(e.center).add(pn)),this.expandByPoint(fn.copy(e.center).sub(pn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new V,gn=new V,_n=new V,vn=new V,yn=new V,bn=new V,xn=new V,Sn=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gn.copy(e).add(t).multiplyScalar(.5),_n.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(gn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_n),o=vn.dot(this.direction),s=-vn.dot(_n),c=vn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gn).addScaledVector(_n,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),r=hn.dot(hn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,i){yn.subVectors(t,e),bn.subVectors(n,e),xn.crossVectors(yn,bn);let a=this.direction.dot(xn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);let s=o*this.direction.dot(bn.crossVectors(vn,bn));if(s<0)return null;let c=o*this.direction.dot(yn.cross(vn));if(c<0||s+c>a)return null;let l=-o*vn.dot(xn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/wn.setFromMatrixColumn(e,0).length(),i=1/wn.setFromMatrixColumn(e,1).length(),a=1/wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(En,e,Dn)}lookAt(e,t,n){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),On.crossVectors(n,An),On.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),On.crossVectors(n,An)),On.normalize(),kn.crossVectors(An,On),r[0]=On.x,r[4]=kn.x,r[8]=An.x,r[1]=On.y,r[5]=kn.y,r[9]=An.y,r[2]=On.z,r[6]=kn.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=wn.set(r[0],r[1],r[2]).length(),a=wn.set(r[4],r[5],r[6]).length(),o=wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);let s=1/i,c=1/a,l=1/o;return Tn.elements[0]*=s,Tn.elements[1]*=s,Tn.elements[2]*=s,Tn.elements[4]*=c,Tn.elements[5]*=c,Tn.elements[6]*=c,Tn.elements[8]*=l,Tn.elements[9]*=l,Tn.elements[10]*=l,t.setFromRotationMatrix(Tn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ge){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wn=new V,Tn=new Cn,En=new V(0,0,0),Dn=new V(1,1,1),On=new V,kn=new V,An=new V,jn=new Cn,Mn=new Kt,Nn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mn.setFromEuler(this),this.setFromQuaternion(Mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER=`XYZ`;var Pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Fn=0,In=new V,Ln=new Kt,Rn=new Cn,zn=new V,Bn=new V,Vn=new V,Hn=new Kt,Un=new V(1,0,0),Wn=new V(0,1,0),Gn=new V(0,0,1),Kn={type:`added`},qn={type:`removed`},Jn={type:`childadded`,child:null},Yn={type:`childremoved`,child:null},Xn=class e extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=Ze(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Nn,r=new Kt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Cn},normalMatrix:{value:new B}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(Un,e)}rotateY(e){return this.rotateOnAxis(Wn,e)}rotateZ(e){return this.rotateOnAxis(Gn,e)}translateOnAxis(e,t){return In.copy(e).applyQuaternion(this.quaternion),this.position.add(In.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Un,e)}translateY(e){return this.translateOnAxis(Wn,e)}translateZ(e){return this.translateOnAxis(Gn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zn.copy(e):zn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Bn,zn,this.up):Rn.lookAt(zn,Bn,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Ln.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qn),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,Vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,Hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Xn.DEFAULT_UP=new V(0,1,0),Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new V,ar=new V,or=new V,sr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zn.subVectors(r,t),Qn.subVectors(n,t),$n.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Qn),s=Zn.dot($n),c=Qn.dot(Qn),l=Qn.dot($n),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,er)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,er.x),s.addScaledVector(a,er.y),s.addScaledVector(o,er.z),s)}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Qn.subVectors(e,t),Zn.cross(Qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Zn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;tr.subVectors(r,n),nr.subVectors(i,n),ir.subVectors(e,n);let s=tr.dot(ir),c=nr.dot(ir);if(s<=0&&c<=0)return t.copy(n);ar.subVectors(e,r);let l=tr.dot(ar),u=nr.dot(ar);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(tr,a);or.subVectors(e,i);let f=tr.dot(or),p=nr.dot(or);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(nr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return rr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(rr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ur={h:0,s:0,l:0};function dr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=jt.workingColorSpace){if(e=$e(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=dr(i,r,e+1/3),this.g=dr(i,r,e),this.b=dr(i,r,e-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=cr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}copyLinearToSRGB(e){return this.r=Nt(e.r),this.g=Nt(e.g),this.b=Nt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return jt.fromWorkingColorSpace(fr.copy(this),e),Math.round(Qe(fr.r*255,0,255))*65536+Math.round(Qe(fr.g*255,0,255))*256+Math.round(Qe(fr.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(fr.copy(this),t);let n=fr.r,r=fr.g,i=fr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(fr.copy(this),t),e.r=fr.r,e.g=fr.g,e.b=fr.b,e}getStyle(e=Ie){jt.fromWorkingColorSpace(fr.copy(this),e);let t=fr.r,n=fr.g,r=fr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(ur);let n=nt(lr.h,ur.h,t),r=nt(lr.s,ur.s,t),i=nt(lr.l,ur.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fr=new H;H.NAMES=cr;var pr=0,mr=class extends Ke{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pr++}),this.uuid=Ze(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}onBeforeRender(){console.warn(`Material: onBeforeRender() has been removed.`)}},hr=class extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gr=new V,_r=new z,vr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tt(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_t(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_t(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_t(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=0,Cr=new Cn,wr=new Xn,Tr=new V,Er=new Yt,Dr=new Yt,Or=new V,kr=class e extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=Ze(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xt(e)?br:yr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new B().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cr.makeRotationFromQuaternion(e),this.applyMatrix4(Cr),this}rotateX(e){return Cr.makeRotationX(e),this.applyMatrix4(Cr),this}rotateY(e){return Cr.makeRotationY(e),this.applyMatrix4(Cr),this}rotateZ(e){return Cr.makeRotationZ(e),this.applyMatrix4(Cr),this}translate(e,t,n){return Cr.makeTranslation(e,t,n),this.applyMatrix4(Cr),this}scale(e,t,n){return Cr.makeScale(e,t,n),this.applyMatrix4(Cr),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new xr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(this.boundingBox.min,Er.min),this.boundingBox.expandByPoint(Or),Or.addVectors(this.boundingBox.max,Er.max),this.boundingBox.expandByPoint(Or)):(this.boundingBox.expandByPoint(Er.min),this.boundingBox.expandByPoint(Er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Er.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(Er.min,Dr.min),Er.expandByPoint(Or),Or.addVectors(Er.max,Dr.max),Er.expandByPoint(Or)):(Er.expandByPoint(Dr.min),Er.expandByPoint(Dr.max))}Er.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Or.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Or));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Or.fromBufferAttribute(a,t),o&&(Tr.fromBufferAttribute(e,t),Or.add(Tr)),r=Math.max(r,n.distanceToSquared(Or))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new vr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new z,f=new z,p=new z,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Or.fromBufferAttribute(e,t),Or.normalize(),e.setXYZ(t,Or.x,Or.y,Or.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=new Cn,jr=new Sn,Mr=new mn,Nr=new V,Pr=new V,Fr=new V,Ir=new V,Lr=new V,Rr=new V,zr=new z,Br=new z,Vr=new z,Hr=new V,Ur=new V,Wr=new V,Gr=new V,Kr=new V,U=class extends Xn{constructor(e=new kr,t=new hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Rr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Lr.fromBufferAttribute(s,e),a?Rr.addScaledVector(Lr,r):Rr.addScaledVector(Lr.sub(t),r))}t.add(Rr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),jr.copy(e.ray).recast(e.near),!(Mr.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Mr,Nr)===null||jr.origin.distanceToSquared(Nr)>(e.far-e.near)**2))&&(Ar.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Ar),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Jr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Jr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Jr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Jr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function qr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Kr.copy(s),Kr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Kr);return l<n.near||l>n.far?null:{distance:l,point:Kr.clone(),object:e}}function Jr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Pr),e.getVertexPosition(c,Fr),e.getVertexPosition(l,Ir);let u=qr(e,t,n,r,Pr,Fr,Ir,Gr);if(u){i&&(zr.fromBufferAttribute(i,s),Br.fromBufferAttribute(i,c),Vr.fromBufferAttribute(i,l),u.uv=sr.getInterpolation(Gr,Pr,Fr,Ir,zr,Br,Vr,new z)),a&&(zr.fromBufferAttribute(a,s),Br.fromBufferAttribute(a,c),Vr.fromBufferAttribute(a,l),u.uv1=sr.getInterpolation(Gr,Pr,Fr,Ir,zr,Br,Vr,new z)),o&&(Hr.fromBufferAttribute(o,s),Ur.fromBufferAttribute(o,c),Wr.fromBufferAttribute(o,l),u.normal=sr.getInterpolation(Gr,Pr,Fr,Ir,Hr,Ur,Wr,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new V,materialIndex:0};sr.getNormal(Pr,Fr,Ir,e.normal),u.face=e}return u}var Yr=class e extends kr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Zr(e){let t={};for(let n=0;n<e.length;n++){let r=Xr(e[n]);for(let e in r)t[e]=r[e]}return t}function Qr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function $r(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var ei={clone:Xr,merge:Zr},ti=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ni=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ti,this.fragmentShader=ni,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Qr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ii=class extends Xn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new V,oi=new z,si=new z,ci=class extends ii{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ye*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xe*2*Math.atan(Math.tan(Ye*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,oi,si),t.subVectors(si,oi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ye*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},li=-90,ui=1,di=class extends Xn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ci(li,ui,e,t);r.layers=this.layers,this.add(r);let i=new ci(li,ui,e,t);i.layers=this.layers,this.add(i);let a=new ci(li,ui,e,t);a.layers=this.layers,this.add(a);let o=new ci(li,ui,e,t);o.layers=this.layers,this.add(o);let s=new ci(li,ui,e,t);s.layers=this.layers,this.add(s);let c=new ci(li,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fi=class extends Bt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fi(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps===void 0?!1:t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?c:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),i=new ri({name:`CubemapFromEquirect`,uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new di(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},mi=new V,hi=new V,gi=new B,_i=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=mi.subVectors(n,t).cross(hi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(mi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gi.getNormalMatrix(e),r=this.coplanarPoint(mi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new mn,yi=new V,bi=class{constructor(e=new _i,t=new _i,n=new _i,r=new _i,i=new _i,a=new _i){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(yi.x=r.normal.x>0?e.max.x:e.min.x,yi.y=r.normal.y>0?e.max.y:e.min.y,yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Si(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n._updateRange,o=n.updateRanges;if(e.bindBuffer(r,t),a.count===-1&&o.length===0&&e.bufferSubData(r,0,i),o.length!==0){for(let t=0,n=o.length;t<n;t++){let n=o[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}a.count!==-1&&(e.bufferSubData(r,a.offset*i.BYTES_PER_ELEMENT,i,a.offset,a.count),a.count=-1),n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ci=class e extends kr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},wi={basic:{uniforms:Zr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Zr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Zr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Zr([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Zr([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Zr([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Zr([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Zr([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Zr([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Zr([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Zr([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distanceRGBA:{uniforms:Zr([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distanceRGBA_vert,fragmentShader:W.distanceRGBA_frag},shadow:{uniforms:Zr([G.lights,G.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};wi.physical={uniforms:Zr([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var Ti={r:0,b:0,g:0},Ei=new Nn,Di=new Cn;function Oi(e,t,n,r,i,a,o){let s=new H(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new U(new Yr(1,1,1),new ri({name:`BackgroundCubeMaterial`,uniforms:Xr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ei.copy(n.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Di.makeRotationFromEuler(Ei)),u.material.toneMapped=jt.getTransfer(r.colorSpace)!==Ve,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new U(new Ci(2,2),new ri({name:`BackgroundMaterial`,uniforms:Xr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=jt.getTransfer(r.colorSpace)!==Ve,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Ti,$r(e)),r.buffers.color.setClear(Ti.r,Ti.g,Ti.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function ki(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ai(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ji(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,x=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:x}}function Mi(e){let t=this,n=null,r=0,i=!1,a=!1,o=new _i,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ni(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new pi(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Pi=class extends ii{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fi=4,Ii=[.125,.215,.35,.446,.526,.582],Li=20,Ri=new Pi,zi=new H,Bi=null,Vi=0,Hi=0,Ui=!1,Wi=(1+Math.sqrt(5))/2,Gi=1/Wi,Ki=[new V(-Wi,Gi,0),new V(Wi,Gi,0),new V(-Gi,0,Wi),new V(Gi,0,Wi),new V(0,Wi,-Gi),new V(0,Wi,Gi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],qi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Bi=this._renderer.getRenderTarget(),Vi=this._renderer.getActiveCubeFace(),Hi=this._renderer.getActiveMipmapLevel(),Ui=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$i(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bi,Vi,Hi),this._renderer.xr.enabled=Ui,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bi=this._renderer.getRenderTarget(),Vi=this._renderer.getActiveCubeFace(),Hi=this._renderer.getActiveMipmapLevel(),Ui=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:T,colorSpace:Le,depthBuffer:!1},r=Yi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ji(r)),this._blurMaterial=Zi(r,e,t)}return r}_compileMaterial(e){let t=new U(this._lodPlanes[0],e);this._renderer.compile(t,Ri)}_sceneToCubeUV(e,t,n,r){let i=new ci(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(zi),s.toneMapping=0,s.autoClear=!1;let u=new hr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new U(new Yr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(zi),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Xi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$i()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new U(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Xi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ri)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Ki[(r-t-1)%Ki.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new U(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Li-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Li;m>Li&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let h=[],g=0;for(let e=0;e<Li;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Xi(t,3*v*(r>_-Fi?r-_+Fi:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ri)}};function Ji(e){let t=[],n=[],r=[],i=e,a=e-Fi+1+Ii.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Fi?s=Ii[o-e+Fi-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new kr;h.setAttribute(`position`,new vr(f,3)),h.setAttribute(`uv`,new vr(p,2)),h.setAttribute(`faceIndex`,new vr(m,1)),t.push(h),i>Fi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Yi(e,t,n){let r=new Ut(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Xi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Zi(e,t,n){let r=new Float32Array(Li),i=new V(0,1,0);return new ri({name:`SphericalGaussianBlur`,defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qi(){return new ri({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $i(){return new ri({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ta(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new qi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new qi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function na(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Tt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function ra(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(xt(n)?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ia(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function aa(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function oa(e,t,n){let r=new WeakMap,i=new Vt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Wt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function sa(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ca=class extends Bt{constructor(e,t,n,r,i,o,s,c,l,u=O){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=g),n===void 0&&u===1027&&(n=x),super(null,r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?a:s,this.minFilter=c===void 0?a:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},la=new Bt,ua=new ca(1,1),da=new Wt,fa=new Gt,pa=new fi,ma=[],ha=[],ga=new Float32Array(16),_a=new Float32Array(9),va=new Float32Array(4);function ya(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ma[i];if(a===void 0&&(a=new Float32Array(i),ma[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ba(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xa(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Sa(e,t){let n=ha[t];n===void 0&&(n=new Int32Array(t),ha[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ca(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ba(n,t))return;e.uniform2fv(this.addr,t),xa(n,t)}}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ba(n,t))return;e.uniform3fv(this.addr,t),xa(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ba(n,t))return;e.uniform4fv(this.addr,t),xa(n,t)}}function Da(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ba(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xa(n,t)}else{if(ba(n,r))return;va.set(r),e.uniformMatrix2fv(this.addr,!1,va),xa(n,r)}}function Oa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ba(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xa(n,t)}else{if(ba(n,r))return;_a.set(r),e.uniformMatrix3fv(this.addr,!1,_a),xa(n,r)}}function ka(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ba(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xa(n,t)}else{if(ba(n,r))return;ga.set(r),e.uniformMatrix4fv(this.addr,!1,ga),xa(n,r)}}function Aa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ba(n,t))return;e.uniform2iv(this.addr,t),xa(n,t)}}function Ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ba(n,t))return;e.uniform3iv(this.addr,t),xa(n,t)}}function Na(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ba(n,t))return;e.uniform4iv(this.addr,t),xa(n,t)}}function Pa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ba(n,t))return;e.uniform2uiv(this.addr,t),xa(n,t)}}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ba(n,t))return;e.uniform3uiv(this.addr,t),xa(n,t)}}function La(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ba(n,t))return;e.uniform4uiv(this.addr,t),xa(n,t)}}function Ra(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ua.compareFunction=515,a=ua):a=la,n.setTexture2D(t||a,i)}function za(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fa,i)}function Ba(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||pa,i)}function Va(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||da,i)}function Ha(e){switch(e){case 5126:return Ca;case 35664:return wa;case 35665:return Ta;case 35666:return Ea;case 35674:return Da;case 35675:return Oa;case 35676:return ka;case 5124:case 35670:return Aa;case 35667:case 35671:return ja;case 35668:case 35672:return Ma;case 35669:case 35673:return Na;case 5125:return Pa;case 36294:return Fa;case 36295:return Ia;case 36296:return La;case 35678:case 36198:case 36298:case 36306:case 35682:return Ra;case 35679:case 36299:case 36307:return za;case 35680:case 36300:case 36308:case 36293:return Ba;case 36289:case 36303:case 36311:case 36292:return Va}}function Ua(e,t){e.uniform1fv(this.addr,t)}function Wa(e,t){let n=ya(t,this.size,2);e.uniform2fv(this.addr,n)}function Ga(e,t){let n=ya(t,this.size,3);e.uniform3fv(this.addr,n)}function Ka(e,t){let n=ya(t,this.size,4);e.uniform4fv(this.addr,n)}function qa(e,t){let n=ya(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ja(e,t){let n=ya(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ya(e,t){let n=ya(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xa(e,t){e.uniform1iv(this.addr,t)}function Za(e,t){e.uniform2iv(this.addr,t)}function Qa(e,t){e.uniform3iv(this.addr,t)}function $a(e,t){e.uniform4iv(this.addr,t)}function eo(e,t){e.uniform1uiv(this.addr,t)}function to(e,t){e.uniform2uiv(this.addr,t)}function no(e,t){e.uniform3uiv(this.addr,t)}function ro(e,t){e.uniform4uiv(this.addr,t)}function io(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||la,a[e])}function ao(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fa,a[e])}function oo(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||pa,a[e])}function so(e,t,n){let r=this.cache,i=t.length,a=Sa(n,i);ba(r,a)||(e.uniform1iv(this.addr,a),xa(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||da,a[e])}function co(e){switch(e){case 5126:return Ua;case 35664:return Wa;case 35665:return Ga;case 35666:return Ka;case 35674:return qa;case 35675:return Ja;case 35676:return Ya;case 5124:case 35670:return Xa;case 35667:case 35671:return Za;case 35668:case 35672:return Qa;case 35669:case 35673:return $a;case 5125:return eo;case 36294:return to;case 36295:return no;case 36296:return ro;case 35678:case 36198:case 36298:case 36306:case 35682:return io;case 35679:case 36299:case 36307:return ao;case 35680:case 36300:case 36308:case 36293:return oo;case 36289:case 36303:case 36311:case 36292:return so}}var lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ha(t.type)}},uo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=co(t.type)}},fo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},po=/(\w+)(\])?(\[|\.)?/g;function mo(e,t){e.seq.push(t),e.map[t.id]=t}function ho(e,t,n){let r=e.name,i=r.length;for(po.lastIndex=0;;){let a=po.exec(r),o=po.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mo(n,l===void 0?new lo(s,e,t):new uo(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new fo(s),mo(n,e)),n=e}}}var go=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ho(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _o(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vo=37297,yo=0;function bo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function xo(e){let t=jt.getPrimaries(jt.workingColorSpace),n=jt.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Le:case ze:return[r,`LinearTransferOETF`];case Ie:case Re:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function So(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bo(e.getShaderSource(t),r)}else return i}function Co(e,t){let n=xo(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function wo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function To(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Oo).join(`
`)}function Eo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Do(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Oo(e){return e!==``}function ko(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ao(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jo=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(e){return e.replace(jo,Po)}var No=new Map;function Po(e,t){let n=W[t];if(n===void 0){let e=No.get(t);if(e!==void 0)n=W[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Mo(n)}var Fo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(e){return e.replace(Fo,Lo)}function Lo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ro(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function zo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Bo(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function Vo(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function Ho(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function Uo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Wo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=zo(n),l=Bo(n),u=Vo(n),d=Ho(n),f=Uo(n),p=To(n),m=Eo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Oo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(g=[Ro(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Oo).join(`
`),_=[Ro(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:wo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,Co(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Oo).join(`
`)),o=Mo(o),o=ko(o,n),o=Ao(o,n),s=Mo(s),s=ko(s,n),s=Ao(s,n),o=Io(o),s=Io(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=_o(i,i.VERTEX_SHADER,y),S=_o(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=So(i,x,`vertex`),r=So(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new go(i,h),T=Do(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,vo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Go=0,Ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qo(e),t.set(e,n)),n}},qo=class{constructor(e){this.id=Go++,this.code=e,this.usedTimes=0}};function Jo(e,t,n,r,i,a,o){let s=new Pn,c=new Ko,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=wi[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=_.isInstancedMesh===!0,M=_.isBatchedMesh===!0,N=!!a.map,te=!!a.matcap,ne=!!x,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,P=!!a.emissiveMap,ce=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,F=a.transmission>0,he=ue&&!!a.anisotropyMap,ge=de&&!!a.clearcoatMap,_e=de&&!!a.clearcoatNormalMap,I=de&&!!a.clearcoatRoughnessMap,ve=pe&&!!a.iridescenceMap,L=pe&&!!a.iridescenceThicknessMap,R=me&&!!a.sheenColorMap,ye=me&&!!a.sheenRoughnessMap,be=!!a.specularMap,xe=!!a.specularColorMap,Se=!!a.specularIntensityMap,Ce=F&&!!a.transmissionMap,we=F&&!!a.thicknessMap,Te=!!a.gradientMap,Ee=!!a.alphaMap,De=a.alphaTest>0,Oe=!!a.alphaHash,ke=!!a.extensions,Ae=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:M,batchingColor:M&&_._colorsTexture!==null,instancing:ee,instancingColor:ee&&_.instanceColor!==null,instancingMorph:ee&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Le,alphaToCoverage:!!a.alphaToCoverage,map:N,matcap:te,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:f&&se,emissiveMap:P,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:he,clearcoat:de,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:I,dispersion:fe,iridescence:pe,iridescenceMap:ve,iridescenceThicknessMap:L,sheen:me,sheenColorMap:R,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:F,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:a.combine,mapUv:N&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:P&&h(a.emissiveMap.channel),metalnessMapUv:ce&&h(a.metalnessMap.channel),roughnessMapUv:le&&h(a.roughnessMap.channel),anisotropyMapUv:he&&h(a.anisotropyMap.channel),clearcoatMapUv:ge&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:L&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:R&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:ye&&h(a.sheenRoughnessMap.channel),specularMapUv:be&&h(a.specularMap.channel),specularColorMapUv:xe&&h(a.specularColorMap.channel),specularIntensityMapUv:Se&&h(a.specularIntensityMap.channel),transmissionMapUv:Ce&&h(a.transmissionMap.channel),thicknessMapUv:we&&h(a.thicknessMap.channel),alphaMapUv:Ee&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(N||Ee),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:N&&a.map.isVideoTexture===!0&&jt.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:ke&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&a.extensions.multiDraw===!0||M)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.doubleSided&&s.enable(10),t.flipSided&&s.enable(11),t.useDepthPacking&&s.enable(12),t.dithering&&s.enable(13),t.transmission&&s.enable(14),t.sheen&&s.enable(15),t.opaque&&s.enable(16),t.pointsUvs&&s.enable(17),t.decodeVideoTexture&&s.enable(18),t.alphaToCoverage&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=wi[t];n=ei.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Wo(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Yo(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function Xo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Xo),r.length>1&&r.sort(t||Zo),i.length>1&&i.sort(t||Zo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function $o(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Qo,e.set(t,[i])):n>=r.length?(i=new Qo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function es(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new H};break;case`SpotLight`:n={position:new V,direction:new V,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function ts(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ns=0;function rs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function is(e){let t=new es,n=ts(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Cn,o=new Cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(rs);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ns++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function as(e){let t=new is(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function os(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new as(e),t.set(n,[a])):r>=i.length?(a=new as(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ss=class extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cs=class extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ls=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,us=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ds(e,t,n){let r=new bi,i=new z,o=new z,s=new Vt,c=new ss({depthPacking:Fe}),l=new cs,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:ls,fragmentShader:us}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new kr;h.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new U(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/g.y),i.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:a,magFilter:a};f.map!==null&&f.map.dispose(),f.map=new Ut(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ut(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fs(e){function t(){let t=!1,n=new Vt,r=null,i=new Vt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?P(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new H(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ee=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ee>=1);let N=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Vt().fromArray(ne),ae=new Vt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),P(e.DEPTH_TEST),a.setFunc(3),he(!1),ge(1),P(e.CULL_FACE),me(0);function P(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function ce(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function le(t,n){return u[t]===n?!1:(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return p===t?!1:(e.useProgram(t),p=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){m===!0&&(ce(e.BLEND),m=!1);return}if(m===!1&&(P(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}return}a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(fe[n],fe[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function F(t,n){t.side===2?ce(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),I(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function ge(t){t===0?ce(e.CULL_FACE):(P(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function _e(t){t!==D&&(j&&e.lineWidth(t),D=t)}function I(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):ce(e.POLYGON_OFFSET_FILL)}function ve(t){t?P(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function L(t){t===void 0&&(t=e.TEXTURE0+A-1),N!==t&&(e.activeTexture(t),N=t)}function R(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+A-1:N);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function ye(){let t=te[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function je(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},N=null,te={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new H(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:P,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:F,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:I,setScissorTest:ve,activeTexture:L,bindTexture:R,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:Ae,viewport:je,reset:Pe}}function ps(e,t,n,r){let i=ms(r);switch(n){case C:return e*t;case E:return e*t;case D:return e*t*2;case A:return e*t/i.components*i.byteLength;case j:return e*t/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case te:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case P:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case F:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case I:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ye:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xe:case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*16;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ms(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function hs(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):St(`canvas`)}function w(e,t,n){let r=1,i=Ee(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function T(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function E(t){e.generateMipmap(t)}function D(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Be:jt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),M(t),t.isVideoTexture&&y.delete(t)}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t)}function M(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function N(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function te(t){let n=f.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ne=0;function re(){ne=0}function ie(){let e=ne;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,n){let r=f.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{me(r,t,n);return}}d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=f.get(t);if(t.version>0&&r.__version!==t.version){me(r,t,n);return}d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function P(t,n){let r=f.get(t);if(t.version>0&&r.__version!==t.version){me(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=f.get(t);if(t.version>0&&r.__version!==t.version){F(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let le={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ue={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=ae(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function me(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=pe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=jt.getPrimaries(jt.workingColorSpace),c=n.colorSpace===``?null:jt.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=Te(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=D(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);fe(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=A(n,u);if(n.isDepthTexture)g=O(n.format===k,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture)if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023)if(f!==null)if(y){if(x)if(n.layerUpdates.size>0){let r=ps(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n,0,0)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data,0,0)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0);else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}else if(n.isDataArrayTexture)if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x)if(n.layerUpdates.size>0){let t=ps(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b)if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}else if(v.length>0){if(y&&b){let t=Ee(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=Ee(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function F(t,n,r){if(n.image.length!==6)return;let i=pe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=jt.getPrimaries(jt.workingColorSpace),s=n.colorSpace===``?null:jt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Te(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=D(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=A(n,h);fe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ee(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function he(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=D(r.internalFormat,s,c,r.colorSpace);if(!f.get(n).__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ce(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,f.get(r).__webglTexture,0,Se(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,f.get(r).__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=Se(n);Ce(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=D(a.internalFormat,o,s,a.colorSpace),l=Se(n);r&&Ce(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):Ce(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!f.get(n.depthTexture).__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),oe(n.depthTexture,0);let r=f.get(n.depthTexture).__webglTexture,i=Se(n);if(n.depthTexture.format===1026)Ce(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0);else if(n.depthTexture.format===1027)Ce(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function I(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);_e(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(n.__webglDepthbuffer[r],t,!1)}else d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer=e.createRenderbuffer(),ge(n.__webglDepthbuffer,t,!1);d.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){let i=f.get(t);n!==void 0&&he(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&I(t)}function L(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,ee);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ce(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=D(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),fe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)he(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else he(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i);d.bindTexture(e.TEXTURE_2D,o.__webglTexture),fe(e.TEXTURE_2D,i),he(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,0),T(i)&&E(e.TEXTURE_2D)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),fe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)he(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else he(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&I(t)}function R(t){let n=t.textures;for(let r=0,i=n.length;r<i;r++){let i=n[r];if(T(i)){let n=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,r=f.get(i).__webglTexture;d.bindTexture(n,r),E(n),d.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(Ce(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ye.push(o),be.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(p.maxSamples,e.samples)}function Ce(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Ee(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=P,this.setTextureCube=ce,this.rebindTextures=ve,this.setupRenderTarget=L,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ce}function gs(e,t){function n(n,r=``){let i,a=jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var _s=class extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},K=class extends Xn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},vs={type:`move`},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new K,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new K,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new K,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new K;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xs=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ss=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Bt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ri({vertexShader:bs,fragmentShader:xs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cs=class extends Ke{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=new Ss,_=t.getContextAttributes(),v=null,y=null,b=[],S=[],C=new z,w=null,E=new ci;E.layers.enable(1),E.viewport=new Vt;let D=new ci;D.layers.enable(2),D.viewport=new Vt;let A=[E,D],j=new _s;j.layers.enable(1),j.layers.enable(2);let ee=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ys,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ys,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ys,b[e]=t),t.getHandSpace()};function N(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<b.length;e++){let t=S[e];t!==null&&(S[e]=null,b[e].disconnect(t))}ee=null,M=null,h.reset(),e.setRenderTarget(v),p=null,f=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ut(p.framebufferWidth,p.framebufferHeight,{format:T,type:d,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?k:O,a=_.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ut(f.textureWidth,f.textureHeight,{format:T,type:d,depthTexture:new ca(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new V,ie=new V;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;h.texture!==null&&(e.near=h.depthNear,e.far=h.depthFar),j.near=D.near=E.near=e.near,j.far=D.far=E.far=e.far,(ee!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,M=j.far,E.near=ee,E.far=M,D.near=ee,D.far=M,E.updateProjectionMatrix(),D.updateProjectionMatrix(),e.updateProjectionMatrix());let t=e.parent,n=j.cameras;oe(j,t);for(let e=0;e<n.length;e++)oe(n[e],t);n.length===2?ae(j,E,D):j.projectionMatrix.copy(E.projectionMatrix),se(e,j,t)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Xe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)};let P=null;function ce(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=u.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(y,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(y))}let o=A[r];o===void 0&&(o=new ci,o.layers.enable(r),o.viewport=new Vt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&h.init(e,n,r.renderState)}}for(let e=0;e<b.length;e++){let t=S[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}P&&P(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let le=new xi;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},ws=new Nn,Ts=new Cn;function Es(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,$r(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,ws.copy(o),ws.x*=-1,ws.y*=-1,ws.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),e.envMapRotation.value.setFromMatrix4(Ts.makeRotationFromEuler(ws)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ds(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Os=class{constructor(e={}){let{canvas:t=Ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),h=new Int32Array(4),g=null,_=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,D=null,O=new Vt,k=new Vt,A=null,j=new H(0),ee=0,M=t.width,N=t.height,te=1,ne=null,re=null,ie=new Vt(0,0,M,N),ae=new Vt(0,0,M,N),oe=!1,se=new bi,P=!1,ce=!1,le=new Cn,ue=new V,de=new Vt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function me(){return T===null?te:1}let F=n;function he(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r166`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),F===null){let t=`webgl2`;if(F=he(t,e),F===null)throw he(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ge,_e,I,ve,L,R,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Re;function ze(){ge=new na(F),ge.init(),Pe=new gs(F,ge),_e=new ji(F,ge,e,Pe),I=new fs(F),ve=new aa(F),L=new Yo,R=new hs(F,ge,I,L,_e,Pe,ve),ye=new Ni(x),be=new ta(x),xe=new Si(F),Fe=new ki(F,xe),Se=new ra(F,xe,ve,Fe),Ce=new sa(F,Se,xe,ve),je=new oa(F,_e,R),Oe=new Mi(L),we=new Jo(x,ye,be,ge,_e,Fe,Oe),Te=new Es(x,L),Ee=new $o,De=new os(ge),Ae=new Oi(x,ye,be,I,Ce,p,s),ke=new ds(x,Ce,_e),Re=new Ds(F,ve,_e,I),Me=new Ai(F,ge,ve),Ne=new ia(F,ge,ve),ve.programs=we.programs,x.capabilities=_e,x.extensions=ge,x.properties=L,x.renderLists=Ee,x.shadowMap=ke,x.state=I,x.info=ve}ze();let Be=new Cs(x,F);this.xr=Be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(e){e!==void 0&&(te=e,this.setSize(M,N,!1))},this.getSize=function(e){return e.set(M,N)},this.setSize=function(e,n,r=!0){if(Be.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}M=e,N=n,t.width=Math.floor(e*te),t.height=Math.floor(n*te),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(M*te,N*te).floor()},this.setDrawingBufferSize=function(e,n,r){M=e,N=n,te=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),I.viewport(O.copy(ie).multiplyScalar(te).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),I.scissor(k.copy(ae).multiplyScalar(te).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){I.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ae.getClearColor(),r=Ae.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(m[0]=i,m[1]=a,m[2]=o,m[3]=r,F.clearBufferuiv(F.COLOR,0,m)):(h[0]=i,h[1]=a,h[2]=o,h[3]=r,F.clearBufferiv(F.COLOR,0,h))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Ee.dispose(),De.dispose(),L.dispose(),ye.dispose(),be.dispose(),Ce.dispose(),Fe.dispose(),Re.dispose(),we.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,Xe),Be.removeEventListener(`sessionend`,Ze),Qe.stop()};function Ve(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function He(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=ve.autoReset,t=ke.enabled,n=ke.autoUpdate,r=ke.needsUpdate,i=ke.type;ze(),ve.autoReset=e,ke.enabled=t,ke.autoUpdate=n,ke.needsUpdate=r,ke.type=i}function Ue(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){Ke(e),L.remove(e)}function Ke(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){we.releaseProgram(e)}),e.isShaderMaterial&&we.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=st(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Se.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Fe.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=xe.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*me()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*me()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ge.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?xe.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function qe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,it(e,t,n),e.side=0,e.needsUpdate=!0,it(e,t,n),e.side=2):it(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),_=De.get(n),_.init(t),b.push(_),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(_.pushLight(e),e.castShadow&&_.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(_.pushLight(e),e.castShadow&&_.pushShadow(e))}),_.setupLights();let r=new Set;return e.traverse(function(e){let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];qe(a,n,e),r.add(a)}else qe(t,n,e),r.add(t)}),b.pop(),_=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Je=null;function Ye(e){Je&&Je(e)}function Xe(){Qe.stop()}function Ze(){Qe.start()}let Qe=new xi;Qe.setAnimationLoop(Ye),typeof self<`u`&&Qe.setContext(self),this.setAnimationLoop=function(e){Je=e,Be.setAnimationLoop(e),e===null?Qe.stop():Qe.start()},Be.addEventListener(`sessionstart`,Xe),Be.addEventListener(`sessionend`,Ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),_=De.get(e,b.length),_.init(t),b.push(_),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(le),ce=this.localClippingEnabled,P=Oe.init(this.clippingPlanes,ce),g=Ee.get(e,y.length),g.init(),y.push(g),Be.enabled===!0&&Be.isPresenting===!0){let e=x.xr.getDepthSensingMesh();e!==null&&$e(e,t,-1/0,x.sortObjects)}$e(e,t,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ne,re),pe=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,pe&&Ae.addToRenderList(g,e),this.info.render.frame++,P===!0&&Oe.beginShadows();let n=_.state.shadowsArray;ke.render(n,e,t),P===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=g.opaque,i=g.transmissive;if(_.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];tt(r,i,e,a)}pe&&Ae.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];et(g,e,r,r.viewport)}}else i.length>0&&tt(r,i,e,t),pe&&Ae.render(e),et(g,e,t);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Fe.resetDefaultState(),E=-1,D=null,b.pop(),b.length>0?(_=b[b.length-1],P===!0&&Oe.setGlobalState(x.clippingPlanes,_.state.camera)):_=null,y.pop(),g=y.length>0?y[y.length-1]:null};function $e(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)_.pushLight(e),e.castShadow&&_.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=Ce.update(e),i=e.material;i.visible&&g.push(e,t,i,n,de.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=Ce.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),de.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&g.push(e,t,s,n,de.z,o)}}else i.visible&&g.push(e,t,i,n,de.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)$e(i[e],t,n,r)}function et(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;_.setupLightsView(n),P===!0&&Oe.setGlobalState(x.clippingPlanes,n),r&&I.viewport(O.copy(r)),i.length>0&&nt(i,t,n),a.length>0&&nt(a,t,n),o.length>0&&nt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[r.id]===void 0&&(_.state.transmissionRenderTarget[r.id]=new Ut(1,1,{generateMipmaps:!0,type:ge.has(`EXT_color_buffer_half_float`)||ge.has(`EXT_color_buffer_float`)?v:d,minFilter:u,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let a=_.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z,o.w);let s=x.getRenderTarget();x.setRenderTarget(a),x.getClearColor(j),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),pe?Ae.render(n):x.clear();let c=x.toneMapping;x.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),_.setupLightsView(r),P===!0&&Oe.setGlobalState(x.clippingPlanes,r),nt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),ge.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,rt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}x.setRenderTarget(s),x.setClearColor(j,ee),l!==void 0&&(r.viewport=l),x.toneMapping=c}function nt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&rt(o,t,n,s,c,l)}}function rt(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function it(e,t,n){t.isScene!==!0&&(t=fe);let r=L.get(e),i=_.state.lights,a=_.state.shadowsArray,o=i.state.version,s=we.getParameters(e,i.state,a,t,n),c=we.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?be:ye).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ot(e,s),u}else s.uniforms=we.getUniforms(e),e.onBeforeCompile(s,x),u=we.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Oe.uniform),ot(e,s),r.needsLights=lt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function at(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=go.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ot(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function st(e,t,n,r,i){t.isScene!==!0&&(t=fe),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Le,c=(r.isMeshStandardMaterial?be:ye).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,v=L.get(r),y=_.state.lights;if(P===!0&&(ce===!0||e!==D)){let t=e===D&&r.id===E;Oe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Oe.numPlanes||v.numIntersection!==Oe.numIntersection)?b=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=it(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){k.setValue(F,`projectionMatrix`,e.projectionMatrix),k.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(F,ue.setFromMatrixPosition(e.matrixWorld)),_e.logarithmicDepthBuffer&&k.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(F,i,`bindMatrix`),k.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(k.setOptional(F,i,`batchingTexture`),k.setValue(F,`batchingTexture`,i._matricesTexture,R),k.setOptional(F,i,`batchingIdTexture`),k.setValue(F,`batchingIdTexture`,i._indirectTexture,R),k.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&je.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(F,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(F,`toneMappingExposure`,x.toneMappingExposure),v.needsLights&&ct(A,O),a&&r.fog===!0&&Te.refreshFogUniforms(A,a),Te.refreshMaterialUniforms(A,r,te,N,_.state.transmissionRenderTarget[e.id]),go.upload(F,at(v),A,R)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(go.upload(F,at(v),A,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(F,`center`,i.center),k.setValue(F,`modelViewMatrix`,i.modelViewMatrix),k.setValue(F,`normalMatrix`,i.normalMatrix),k.setValue(F,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,S),Re.bind(n,S)}}return S}function ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=n;let r=L.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||ge.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=L.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?R.setupRenderTarget(e):s.__hasExternalTextures&&R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture):(I.bindFramebuffer(F.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),A=e.scissorTest}else O.copy(ie).multiplyScalar(te).floor(),k.copy(ae).multiplyScalar(te).floor(),A=oe;if(I.bindFramebuffer(F.FRAMEBUFFER,i)&&r&&I.drawBuffers(e,i),I.viewport(O),I.scissor(k),I.setScissorTest(A),a){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=L.get(e.texture),i=t||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){I.bindFramebuffer(F.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!_e.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!_e.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Pe.convert(s),Pe.convert(c),a)}finally{let e=T===null?null:L.get(T).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){I.bindFramebuffer(F.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!_e.textureFormatReadable(s))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!_e.textureTypeReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){let e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,e),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Pe.convert(s),Pe.convert(c),0),F.flush();let o=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await Et(F,o,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a)}finally{F.deleteBuffer(e),F.deleteSync(o)}return a}}finally{let e=T===null?null:L.get(T).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(console.warn(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(console.warn(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Pe.convert(t.format),f=Pe.convert(t.type);R.setTexture2D(t,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let p=F.getParameter(F.UNPACK_ROW_LENGTH),m=F.getParameter(F.UNPACK_IMAGE_HEIGHT),h=F.getParameter(F.UNPACK_SKIP_PIXELS),g=F.getParameter(F.UNPACK_SKIP_ROWS),_=F.getParameter(F.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,v.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,v.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,s),F.pixelStorei(F.UNPACK_SKIP_ROWS,c),e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):F.texSubImage2D(F.TEXTURE_2D,i,l,u,a,o,d,f,v),F.pixelStorei(F.UNPACK_ROW_LENGTH,p),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,m),F.pixelStorei(F.UNPACK_SKIP_PIXELS,h),F.pixelStorei(F.UNPACK_SKIP_ROWS,g),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(console.warn(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Pe.convert(t.format),g=Pe.convert(t.type),_;if(t.isData3DTexture)R.setTexture3D(t,0),_=F.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)R.setTexture2DArray(t,0),_=F.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let v=F.getParameter(F.UNPACK_ROW_LENGTH),y=F.getParameter(F.UNPACK_IMAGE_HEIGHT),b=F.getParameter(F.UNPACK_SKIP_PIXELS),x=F.getParameter(F.UNPACK_SKIP_ROWS),S=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,m.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,m.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,c),F.pixelStorei(F.UNPACK_SKIP_ROWS,l),F.pixelStorei(F.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?F.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):F.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),F.pixelStorei(F.UNPACK_ROW_LENGTH,v),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,y),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b),F.pixelStorei(F.UNPACK_SKIP_ROWS,x),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&F.generateMipmap(_),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,I.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=jt.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},ks=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends Xn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ze()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tt(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ms=new V,Ns=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix4(e),this.setXYZ(t,Ms.x,Ms.y,Ms.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyNormalMatrix(e),this.setXYZ(t,Ms.x,Ms.y,Ms.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.transformDirection(e),this.setXYZ(t,Ms.x,Ms.y,Ms.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,Is=new V,Ls=new V,Rs=new V,zs=new z,Bs=new z,Vs=new Cn,Hs=new V,Us=new V,Ws=new V,Gs=new z,Ks=new z,qs=new z,Js=class extends Xn{constructor(e=new Ps){if(super(),this.isSprite=!0,this.type=`Sprite`,Fs===void 0){Fs=new kr;let e=new js(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute(`position`,new Ns(e,3,0,!1)),Fs.setAttribute(`uv`,new Ns(e,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new z(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ls.setFromMatrixScale(this.matrixWorld),Vs.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Rs.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ys(Hs.set(-.5,-.5,0),Rs,a,Ls,r,i),Ys(Us.set(.5,-.5,0),Rs,a,Ls,r,i),Ys(Ws.set(.5,.5,0),Rs,a,Ls,r,i),Gs.set(0,0),Ks.set(1,0),qs.set(1,1);let o=e.ray.intersectTriangle(Hs,Us,Ws,!1,Is);if(o===null&&(Ys(Us.set(-.5,.5,0),Rs,a,Ls,r,i),Ks.set(0,1),o=e.ray.intersectTriangle(Hs,Ws,Us,!1,Is),o===null))return;let s=e.ray.origin.distanceTo(Is);s<e.near||s>e.far||t.push({distance:s,point:Is.clone(),uv:sr.getInterpolation(Is,Hs,Us,Ws,Gs,Ks,qs,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ys(e,t,n,r,i,a){zs.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Bs.copy(zs):(Bs.x=a*zs.x-i*zs.y,Bs.y=i*zs.x+a*zs.y),e.copy(t),e.x+=Bs.x,e.y+=Bs.y,e.applyMatrix4(Vs)}var Xs=class extends Bt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zs=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new Cn,$s=new Cn,ec=[],tc=new Yt,nc=new Cn,rc=new U,ic=new mn,ac=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,nc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),tc.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(tc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),ic.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(ic)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(rc.geometry=this.geometry,rc.material=this.material,rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(n),e.ray.intersectsSphere(ic)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Qs),$s.multiplyMatrices(n,Qs),rc.matrixWorld=$s,rc.raycast(e,ec);for(let e=0,n=ec.length;e<n;e++){let n=ec[e];n.instanceId=i,n.object=this,t.push(n)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xs(new Float32Array(r*this.count),r,this.count,A,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},oc=class extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new V,cc=new V,lc=new Cn,uc=new Sn,dc=new mn,fc=new V,pc=new V,mc=class extends Xn{constructor(e=new kr,t=new oc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)sc.fromBufferAttribute(t,e-1),cc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=sc.distanceTo(cc);e.setAttribute(`lineDistance`,new xr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),dc.radius+=i,e.ray.intersectsSphere(dc)===!1)return;lc.copy(r).invert(),uc.copy(e.ray).applyMatrix4(lc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=hc(this,e,uc,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=hc(this,e,uc,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=hc(this,e,uc,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=hc(this,e,uc,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hc(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(sc.fromBufferAttribute(o,i),cc.fromBufferAttribute(o,a),n.distanceSqToSegment(sc,cc,fc,pc)>r)return;fc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(fc);if(!(s<t.near||s>t.far))return{distance:s,point:pc.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,object:e}}var gc=new V,_c=new V,vc=class extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)gc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+gc.distanceTo(_c);e.setAttribute(`lineDistance`,new xr(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},yc=class extends Bt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,r=[],i=[],a=[],o=new V,s=new Cn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Qe(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Qe(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xc=class extends bc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sc=class extends xc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Cc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var wc=new V,Tc=new Cc,Ec=new Cc,Dc=new Cc,Oc=class extends bc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(wc.subVectors(r[0],r[1]).add(r[0]),c=wc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(wc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=wc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Tc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ec.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Dc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Tc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ec.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Dc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Tc.calc(s),Ec.calc(s),Dc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ac(e,t){let n=1-e;return n*n*t}function jc(e,t){return 2*(1-e)*e*t}function Mc(e,t){return e*e*t}function Nc(e,t,n,r){return Ac(e,t)+jc(e,n)+Mc(e,r)}function Pc(e,t){let n=1-e;return n*n*n*t}function Fc(e,t){let n=1-e;return 3*n*n*e*t}function Ic(e,t){return 3*(1-e)*e*e*t}function Lc(e,t){return e*e*e*t}function Rc(e,t,n,r,i){return Pc(e,t)+Fc(e,n)+Ic(e,r)+Lc(e,i)}var zc=class extends bc{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Rc(e,r.x,i.x,a.x,o.x),Rc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends bc{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Rc(e,r.x,i.x,a.x,o.x),Rc(e,r.y,i.y,a.y,o.y),Rc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vc=class extends bc{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends bc{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends bc{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Nc(e,r.x,i.x,a.x),Nc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends bc{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Nc(e,r.x,i.x,a.x),Nc(e,r.y,i.y,a.y),Nc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends bc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(kc(o,s.x,c.x,l.x,u.x),kc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:Oc,CubicBezierCurve:zc,CubicBezierCurve3:Bc,EllipseCurve:xc,LineCurve:Vc,LineCurve3:Hc,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:Wc,SplineCurve:Gc}),qc=class extends bc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Kc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Kc[n.type]().fromJSON(n))}return this}},Jc=class extends qc{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vc(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Uc(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new zc(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Gc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new xc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yc=class e extends kr{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Qe(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new z,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`uv`,new xr(o,2)),this.setAttribute(`normal`,new xr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Xc=class e extends Yc{constructor(e=1,t=1,n=4,r=8){let i=new Jc;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},Zc=class e extends kr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qc=class e extends Zc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$c=class extends Jc{constructor(e){super(e),this.uuid=Ze(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Jc().fromJSON(n))}return this}},el={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=tl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=cl(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return rl(a,o,n,s,c,p,0),o}};function tl(e,t,n,r,i){let a,o;if(i===jl(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Ol(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Ol(a,e[a],e[a+1],o);return o&&bl(o,o.next)&&(kl(o),o=o.next),o}function nl(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(bl(n,n.next)||yl(n.prev,n,n.next)===0)){if(kl(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function rl(e,t,n,r,i,a,o){if(!e)return;!o&&a&&pl(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?al(e,r,i,a):il(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),kl(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=ol(nl(e),t,n),rl(e,t,n,r,i,a,2)):o===2&&sl(e,t,n,r,i,a):rl(nl(e),t,n,r,i,a,1);break}}}function il(e){let t=e.prev,n=e,r=e.next;if(yl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&_l(i,s,a,c,o,l,m.x,m.y)&&yl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function al(e,t,n,r){let i=e.prev,a=e,o=e.next;if(yl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=hl(p,m,t,n,r),v=hl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_l(s,u,c,d,l,f,y.x,y.y)&&yl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_l(s,u,c,d,l,f,b.x,b.y)&&yl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_l(s,u,c,d,l,f,y.x,y.y)&&yl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_l(s,u,c,d,l,f,b.x,b.y)&&yl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ol(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!bl(i,a)&&xl(i,r,r.next,a)&&Tl(i,a)&&Tl(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),kl(r),kl(r.next),r=e=a),r=r.next}while(r!==e);return nl(r)}function sl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&vl(o,e)){let s=Dl(o,e);o=nl(o,o.next),s=nl(s,s.next),rl(o,t,n,r,i,a,0),rl(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function cl(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=tl(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(gl(l));for(i.sort(ll),a=0;a<i.length;a++)n=ul(i[a],n);return n}function ll(e,t){return e.x-t.x}function ul(e,t){let n=dl(e,t);if(!n)return t;let r=Dl(n,e);return nl(r,r.next),nl(n,n.next)}function dl(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&_l(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Tl(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&fl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function fl(e,t){return yl(e.prev,e,t.prev)<0&&yl(t.next,e,e.next)<0}function pl(e,t,n,r){let i=e;do i.z===0&&(i.z=hl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ml(i)}function ml(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function hl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function gl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function _l(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function vl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!wl(e,t)&&(Tl(e,t)&&Tl(t,e)&&El(e,t)&&(yl(e.prev,e,t.prev)||yl(e,t.prev,t))||bl(e,t)&&yl(e.prev,e,e.next)>0&&yl(t.prev,t,t.next)>0)}function yl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function bl(e,t){return e.x===t.x&&e.y===t.y}function xl(e,t,n,r){let i=Cl(yl(e,t,n)),a=Cl(yl(e,t,r)),o=Cl(yl(n,r,e)),s=Cl(yl(n,r,t));return!!(i!==a&&o!==s||i===0&&Sl(e,n,t)||a===0&&Sl(e,r,t)||o===0&&Sl(n,e,r)||s===0&&Sl(n,t,r))}function Sl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Cl(e){return e>0?1:e<0?-1:0}function wl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&xl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Tl(e,t){return yl(e.prev,e,e.next)<0?yl(e,t,e.next)>=0&&yl(e,e.prev,t)>=0:yl(e,t,e.prev)<0||yl(e,e.next,t)<0}function El(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Dl(e,t){let n=new Al(e.i,e.x,e.y),r=new Al(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ol(e,t,n,r){let i=new Al(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function kl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Al(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jl(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ml=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Nl(e),Pl(n,e);let a=e.length;t.forEach(Nl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Pl(n,t[e]);let o=el.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Nl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Pl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Fl=class e extends kr{constructor(e=new $c([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new xr(r,3)),this.setAttribute(`uv`,new xr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Il:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new V,b=new V,x=new V),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ml.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ml.isClockWise(t)&&(w[e]=t.reverse())}}let T=Ml.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let ee=[],M,N=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),N=N.concat(M)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ae(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],M[e],r);ae(i.x,i.y,-n)}}}let te=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],N[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],N[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],M[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];oe(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];oe(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function se(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ll(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Kc[i.type]().fromJSON(i)),new e(r,t.options)}},Il={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function Ll(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Rl=class e extends kr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},zl=class e extends kr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new V,u=new V,d=new V;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new xr(o,3)),this.setAttribute(`normal`,new xr(s,3)),this.setAttribute(`uv`,new xr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},q=class extends mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Bl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Vl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Hl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ul=class extends Hl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:je,endingEnd:je}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Me:i=e,o=2*t-n;break;case Ne:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Me:a=e,s=2*n-t;break;case Ne:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Wl=class extends Hl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Gl=class extends Hl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oe:t=this.InterpolantFactoryMethodDiscrete;break;case ke:t=this.InterpolantFactoryMethodLinear;break;case Ae:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oe;case this.InterpolantFactoryMethodLinear:return ke;case this.InterpolantFactoryMethodSmooth:return Ae}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Vl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ae,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Kl.prototype.TimeBufferType=Float32Array,Kl.prototype.ValueBufferType=Float32Array,Kl.prototype.DefaultInterpolation=ke;var ql=class extends Kl{constructor(e,t,n){super(e,t,n)}};ql.prototype.ValueTypeName=`bool`,ql.prototype.ValueBufferType=Array,ql.prototype.DefaultInterpolation=Oe,ql.prototype.InterpolantFactoryMethodLinear=void 0,ql.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Kl{};Jl.prototype.ValueTypeName=`color`;var Yl=class extends Kl{};Yl.prototype.ValueTypeName=`number`;var Xl=class extends Hl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Zl=class extends Kl{InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}};Zl.prototype.ValueTypeName=`quaternion`,Zl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends Kl{constructor(e,t,n){super(e,t,n)}};Ql.prototype.ValueTypeName=`string`,Ql.prototype.ValueBufferType=Array,Ql.prototype.DefaultInterpolation=Oe,Ql.prototype.InterpolantFactoryMethodLinear=void 0,Ql.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Kl{};$l.prototype.ValueTypeName=`vector`;var eu=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},tu=class{constructor(e){this.manager=e===void 0?eu:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};tu.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var nu=class extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ru=new Cn,iu=new V,au=new V,ou=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.map=null,this.mapPass=null,this.matrix=new Cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},su=class extends ou{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cu=class extends nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new su}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lu=class extends nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},uu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function du(){return(typeof performance>`u`?Date:performance).now()}var fu=`\\[\\]\\.:\\/`,pu=RegExp(`[\\[\\]\\.:\\/]`,`g`),mu=`[^\\[\\]\\.:\\/]`,hu=`[^`+fu.replace(`\\.`,``)+`]`,gu=`((?:WC+[\\/:])*)`.replace(`WC`,mu),_u=`(WCOD+)?`.replace(`WCOD`,hu),vu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,mu),yu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,mu),bu=RegExp(`^`+gu+_u+vu+yu+`$`),xu=[`material`,`materials`,`bones`,`map`],Su=class{constructor(e,t,n){let r=n||Cu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Cu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(pu,``)}static parseTrackName(e){let t=bu.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Cu.Composite=Su,Cu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Cu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Cu.prototype.GetterByBindingType=[Cu.prototype._getValue_direct,Cu.prototype._getValue_array,Cu.prototype._getValue_arrayElement,Cu.prototype._getValue_toArray],Cu.prototype.SetterByBindingTypeAndVersioning=[[Cu.prototype._setValue_direct,Cu.prototype._setValue_direct_setNeedsUpdate,Cu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Cu.prototype._setValue_array,Cu.prototype._setValue_array_setNeedsUpdate,Cu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Cu.prototype._setValue_arrayElement,Cu.prototype._setValue_arrayElement_setNeedsUpdate,Cu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Cu.prototype._setValue_fromArray,Cu.prototype._setValue_fromArray_setNeedsUpdate,Cu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wu=new Cn,Tu=class{constructor(e,t,n=0,r=1/0){this.ray=new Sn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Pn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(e,t=!0,n=[]){return Du(e,this,n,t),n.sort(Eu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Du(e[r],this,n,t);return n.sort(Eu),n}};function Eu(e,t){return e.distance-t.distance}function Du(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Du(r[e],t,n,!0)}}var Ou=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`166`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`166`);var ku={1:{id:1,name:`Standard Track`,color:9279918,costPerUnit:{usa:2500,nyc:9e3},maintPerUnitPerMin:1.2,allows:e=>e===1},2:{id:2,name:`High-Speed Track`,color:16758087,costPerUnit:{usa:6500,nyc:22e3},maintPerUnitPerMin:2.6,allows:e=>e===1||e===2},3:{id:3,name:`Maglev Guideway`,color:5617407,costPerUnit:{usa:15e3,nyc:48e3},maintPerUnitPerMin:5,allows:e=>e===3}},Au=2.6,ju={1:{id:1,name:`Tier I Standard Rail`,short:`Standard`,desc:`Classic boxy regional train. Cheap, flexible, runs on standard or high-speed track.`,speed:{usa:7,nyc:9},capacity:200,price:12e4,opsPerMin:450,fareMult:1,color:5036411,minTrack:`Standard or High-Speed`},2:{id:2,name:`Tier II High-Speed Rail`,short:`High-Speed`,desc:`Sleek aerodynamic trainset up to 220 mph. Requires dedicated High-Speed Track.`,speed:{usa:14,nyc:15},capacity:320,price:42e4,opsPerMin:1150,fareMult:1.5,color:16758087,minTrack:`High-Speed only`},3:{id:3,name:`Tier III Maglev`,short:`Maglev`,desc:`Futuristic maglev pod up to 400 mph. Requires premium Maglev Guideway.`,speed:{usa:24,nyc:24},capacity:420,price:115e4,opsPerMin:2600,fareMult:2.2,color:5617407,minTrack:`Maglev Guideway only`}},Mu={startCash:16e5,farePerUnit:{usa:40,nyc:10},stationCostBase:{usa:6e4,nyc:45e3},stationDemandFactor:.5,upgradeSurcharge:.25,stationUpgradeBase:{usa:25e4,nyc:18e4},stationUpgradeGrowth:2.4,maxCapLevel:4,debtLimit:-25e4,debtGraceSec:45,cityMapPurchasePrice:2e6,dwellTime:2.2},Nu=e=>Math.round((3e4+e*22e3)/1e3)*1e3,Pu={tickSeconds:.5,demandScale:{usa:.15,nyc:.3}},Fu={patienceSec:90,dropoutRatePerSec:.02},Iu={lostWindowSec:60,rateThresholdPerMin:25,collapseGraceSec:240,breachDecayFactor:.5},Lu={tycoon:{id:`tycoon`,name:`Tycoon`,tagline:`Creative rail sandbox`,blurb:`Low-risk building mode with relaxed pressure, milestone goals, and room to make the network you want.`,goals:!0,bankruptcy:!0,networkPressure:!1,demandScaleMult:1,growth:{shape:`linear`,perDayBase:.012,perThousandServed:.05,maxMultiplier:3.5},crowding:{platformBase:{usa:40,nyc:25},platformPerDemand:3,usePopScale:!1,minTrainMultiple:1.5},pressure:Iu},survival:{id:`survival`,name:`Survival`,tagline:`Survival — scored leaderboard run`,blurb:`Harder mode with demand surges, Lost/min pressure, badges, and the global leaderboard. Survive as long as you can.`,goals:!1,bankruptcy:!1,networkPressure:!0,demandScaleMult:1.75,growth:{shape:`compound`,perDayBase:.078,perThousandServed:.08,maxMultiplier:1e6,costGrowthPerDay:.05},crowding:{platformBase:{usa:150,nyc:100},platformPerDemand:12,usePopScale:!0,platformPop2Exp:.75,platformPopMult:45,minTrainMultiple:1.5},pressure:Iu}};function Ru(e){return Lu[e?.gameMode??`survival`]??Lu.survival}function zu(e){return(e?.gameMode??`survival`)===`survival`}function Bu(e){return zu(e)}function Vu(e){return Ru(e).pressure??Iu}function Hu(e){return!!e.cityMapsUnlocked}function Uu(e){return e.cash>=Mu.cityMapPurchasePrice}var Wu=e=>{let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}h ${r}m`:r>0?`${r}m ${i}s`:`${i}s`},Gu={minMult:.5,maxMult:2,elasticity:.6};function Ku(e){return Math.max(.3,1-(e-1)*Gu.elasticity)}function qu(e,t){let n=Fu.patienceSec;if(!zu(e))return n;let r=e.maps?.[t],i=1+((r?r.fareMult:1)-1)*1.35;return Math.round(n/i)}var J=e=>{let t=e<0?`-`:``;return e=Math.abs(e),e>=1e6?`${t}$${(e/1e6).toFixed(2)}M`:e>=1e3?`${t}$${(e/1e3).toFixed(1)}k`:`${t}$${Math.round(e)}`},Y=e=>Math.round(e).toLocaleString(`en-US`);function Ju(e,t,n,r=0,i=null){let a=ku[t].costPerUnit[e]*n,o=1+r*(Au-1),s=i?id(i):1;return Math.round(a*o*s)}function Yu(e,t,n=null){return Ju(e,t.type,t.length,t.waterFrac,n)}function Xu(e,t,n,r=null){let i=Yu(e,t,r),a=Ju(e,n,t.length,t.waterFrac,r);return Math.max(0,Math.round((a-i)*(1+Mu.upgradeSurcharge)))}function Zu(e,t,n=null){let r=Mu.stationCostBase[e]*(1+t.demand*Mu.stationDemandFactor),i=n?id(n):1;return Math.round(r*i)}function Qu(e,t=null){let n=Nu(e.pop??1),r=t?id(t):1;return Math.round(n*r)}function $u(e,t,n=null){return Math.round(Yu(e,t,n)*.25)}function ed(e,t=null){let n=ju[e].price,r=t?id(t):1;return Math.round(n*r)}function td(e,t=null){return Math.round(ed(e,t)*.5)}function nd(e,t,n=null){return ed(t,n)}function rd(e,t){return e.shape===`compound`?(1+e.perDayBase)**+t:1+e.perDayBase*t}function id(e){if(!e||!Ru(e).growth.costGrowthPerDay)return 1;let t=e.simTime/240,n=Math.max(0,t-2.5);return 1+Object.keys(e.trains||{}).length*.1+1.2*Math.sqrt(n)}function ad(e){let t=e/1e6;return t<=.5?.1:t<=1?.1+(t-.5)/.5*.08:t<=2?.18+(t-1)/1*.12:t<=3?.3+(t-2)/1*.1:.4+Math.min(1,(t-3)/2)*.1}function od(e,t){let n=Ru(t).growth,r=rd(n,t.simTime/240),i=1+n.perThousandServed*(e.servedTotal/1e3);return Math.min(n.maxMultiplier,r*i)}function sd(e,t){let n=e.vipSurgeActive?4:1;return e.demand*od(e,t)*n}function cd(e,t){let n=Ru(t).growth,r=e.demand,i=sd(e,t),a=t.simTime/240,o=Math.round((rd(n,a)-1)*100),s=Math.round(n.perThousandServed*(e.servedTotal/1e3)*100),c=[`base ${r}`];return o>0&&c.push(`+${o}% time`),s>0&&c.push(`+${s}% ridership`),c.length===1?`${i.toFixed(1)} pts`:`${i.toFixed(1)} pts (${c.join(`, `)})`}function ld(e,t,n){let r=Ru(n).crowding,i=t.demand*r.platformPerDemand,a=r.usePopScale&&t.pop?t.pop**+r.platformPop2Exp*r.platformPopMult:0,o=r.platformBase[e]+i+a,s=1+(t.capLevel??0)*.6,c=ju[1].capacity*r.minTrainMultiple;return Math.round(Math.max(o*s,c))}function ud(e,t,n=null){let r=t.capLevel??0,i=Mu.stationUpgradeBase[e]*Mu.stationUpgradeGrowth**+r,a=n?id(n):1;return Math.round(i*a)}function dd(e,t,n){let r=t.waiting.reduce((e,t)=>e+t.count,0),i=ld(e,t,n),a=i>0?Math.round(r/i*100):0;return t.crowded?`${r} / ${i} · overcrowded, riders leaving`:a>=70?`${r} / ${i} · filling up`:`${r} / ${i}`}var fd=[{rank:1,name:`New York City`,lat:40.7128,lon:-74.006,pop:19.5},{rank:2,name:`Los Angeles`,lat:34.0522,lon:-118.2437,pop:13.2},{rank:3,name:`Chicago`,lat:41.8781,lon:-87.6298,pop:9.6},{rank:4,name:`Dallas–Ft. Worth`,lat:32.7767,lon:-96.797,pop:7.6},{rank:5,name:`Houston`,lat:29.7604,lon:-95.3698,pop:7.1},{rank:6,name:`Washington DC`,lat:38.9072,lon:-77.0369,pop:6.3},{rank:7,name:`Philadelphia`,lat:39.9526,lon:-75.1652,pop:6.2},{rank:8,name:`Miami`,lat:25.7617,lon:-80.1918,pop:6.1},{rank:9,name:`Atlanta`,lat:33.749,lon:-84.388,pop:6.1},{rank:10,name:`Boston`,lat:42.3601,lon:-71.0589,pop:4.9},{rank:11,name:`San Francisco–Oakland`,lat:37.7749,lon:-122.4194,pop:4.7},{rank:12,name:`Phoenix`,lat:33.4484,lon:-112.074,pop:4.9},{rank:13,name:`Riverside–San Bern.`,lat:33.9806,lon:-117.3755,pop:4.6},{rank:14,name:`Detroit`,lat:42.3314,lon:-83.0458,pop:4.3},{rank:15,name:`Seattle–Tacoma`,lat:47.6062,lon:-122.3321,pop:4},{rank:16,name:`Minneapolis–St. Paul`,lat:44.9778,lon:-93.265,pop:3.7},{rank:17,name:`San Diego`,lat:32.7157,lon:-117.1611,pop:3.3},{rank:18,name:`Tampa–St. Petersburg`,lat:27.9506,lon:-82.4572,pop:3.2},{rank:19,name:`Denver`,lat:39.7392,lon:-104.9903,pop:3},{rank:20,name:`St. Louis`,lat:38.627,lon:-90.1994,pop:2.8},{rank:21,name:`Baltimore`,lat:39.2904,lon:-76.6122,pop:2.8},{rank:22,name:`Charlotte`,lat:35.2271,lon:-80.8431,pop:2.7},{rank:23,name:`Portland`,lat:45.5152,lon:-122.6784,pop:2.5},{rank:24,name:`Orlando`,lat:28.5383,lon:-81.3792,pop:2.7},{rank:25,name:`San Antonio`,lat:29.4241,lon:-98.4936,pop:2.6},{rank:26,name:`Pittsburgh`,lat:40.4406,lon:-79.9959,pop:2.4},{rank:27,name:`Sacramento`,lat:38.5816,lon:-121.4944,pop:2.4},{rank:28,name:`Cincinnati`,lat:39.1031,lon:-84.512,pop:2.3},{rank:29,name:`Las Vegas`,lat:36.1699,lon:-115.1398,pop:2.3},{rank:30,name:`Kansas City`,lat:39.0997,lon:-94.5786,pop:2.2},{rank:31,name:`Cleveland`,lat:41.4993,lon:-81.6944,pop:2.1},{rank:32,name:`Columbus`,lat:39.9612,lon:-82.9988,pop:2.1},{rank:33,name:`Austin`,lat:30.2672,lon:-97.7431,pop:2.3},{rank:34,name:`Indianapolis`,lat:39.7684,lon:-86.1581,pop:2.1},{rank:35,name:`San Jose`,lat:37.3382,lon:-121.8863,pop:2},{rank:36,name:`Nashville`,lat:36.1627,lon:-86.7816,pop:2},{rank:37,name:`Virginia Beach–Norfolk`,lat:36.8529,lon:-75.978,pop:1.8},{rank:38,name:`Providence`,lat:41.824,lon:-71.4128,pop:1.7},{rank:39,name:`Milwaukee`,lat:43.0389,lon:-87.9065,pop:1.6},{rank:40,name:`Jacksonville`,lat:30.3322,lon:-81.6557,pop:1.6},{rank:41,name:`Oklahoma City`,lat:35.4676,lon:-97.5164,pop:1.4},{rank:42,name:`Memphis`,lat:35.1495,lon:-90.049,pop:1.3},{rank:43,name:`Louisville`,lat:38.2527,lon:-85.7585,pop:1.3},{rank:44,name:`Raleigh`,lat:35.7796,lon:-78.6382,pop:1.4},{rank:45,name:`Richmond`,lat:37.5407,lon:-77.436,pop:1.3},{rank:46,name:`New Orleans`,lat:29.9511,lon:-90.0715,pop:1.3},{rank:47,name:`Hartford`,lat:41.7658,lon:-72.6734,pop:1.2},{rank:48,name:`Salt Lake City`,lat:40.7608,lon:-111.891,pop:1.2},{rank:49,name:`Birmingham`,lat:33.5186,lon:-86.8104,pop:1.1},{rank:50,name:`Buffalo–Niagara Falls`,lat:42.8864,lon:-78.8784,pop:1.1}];function pd(e){return e.lon>-82&&e.lat>36.5?16739179:e.lon>-90&&e.lat<=36.5?16758087:e.lon>-104&&e.lon<=-90?5036411:e.lon>-82?16739179:5617407}var md=[{id:`manhattan`,name:`Manhattan`,color:15918024,buildingColor:16758087,buildingCount:190,poly:[[-2,55],[-5,44],[-7,30],[-6,14],[-5,0],[-3,-14],[0,-30],[3,-44],[6,-56],[9,-64],[12,-66],[14,-62],[11,-52],[8,-40],[9,-26],[9,-14],[10,-2],[11,10],[11,22],[9,34],[6,44],[2,52]]},{id:`brooklynqueens`,name:`Brooklyn & Queens`,color:15260098,buildingColor:5036411,buildingCount:170,poly:[[16,58],[17,45],[16,34],[17,20],[16,8],[18,-2],[24,-10],[34,-16],[48,-19],[70,-20],[95,-20],[95,94],[40,94],[26,90],[16,76]]},{id:`bronx`,name:`The Bronx`,color:15127742,buildingColor:16739179,buildingCount:70,poly:[[-6,-72],[8,-68],[20,-64],[40,-58],[60,-56],[95,-58],[95,-95],[-6,-95]]},{id:`newjersey`,name:`New Jersey`,color:14471099,buildingColor:11571199,buildingCount:80,poly:[[-95,95],[-40,95],[-32,84],[-26,72],[-18,62],[-14,54],[-15,38],[-14,20],[-13,4],[-12,-14],[-10,-34],[-8,-52],[-5,-72],[-3,-95],[-95,-95]]},{id:`statenisland`,name:`Staten Island`,color:14208184,buildingColor:5617407,buildingCount:34,poly:[[-62,70],[-40,72],[-32,82],[-36,94],[-58,95],[-68,84]]},{id:`liberty`,name:`Liberty Island`,color:13624256,buildingColor:5036411,buildingCount:0,poly:[[-15,66],[-11,66],[-11,70],[-15,70]]},{id:`ellis`,name:`Ellis Island`,color:13624256,buildingColor:5036411,buildingCount:0,poly:[[-16,58.8],[-13,58.8],[-13,61.2],[-16,61.2]]},{id:`governors`,name:`Governors Island`,color:13624256,buildingColor:5036411,buildingCount:0,poly:[[4.5,59.5],[9.5,59.5],[9.5,64.5],[4.5,64.5]]}],hd=[{id:`fidi`,name:`Financial District`,x:0,z:48,demand:9,landmark:`owtc`},{id:`village`,name:`Greenwich Village`,x:0,z:32,demand:6,landmark:`village`},{id:`highline`,name:`High Line / Chelsea`,x:-3,z:24,demand:6,landmark:`highline`},{id:`timessq`,name:`Times Square`,x:0,z:6,demand:10,landmark:`timessq`},{id:`esb`,name:`Empire State Bldg`,x:2,z:14,demand:8,landmark:`esb`},{id:`hudsonyards`,name:`Hudson Yards`,x:-3.5,z:9,demand:7,landmark:`hudson`},{id:`intrepid`,name:`Intrepid Museum`,x:-4.5,z:1,demand:4,landmark:`intrepid`},{id:`grandcentral`,name:`Grand Central`,x:4,z:9,demand:10,landmark:`grandcentral`},{id:`chrysler`,name:`Chrysler Building`,x:6.5,z:11.5,demand:6,landmark:`chrysler`},{id:`un`,name:`United Nations HQ`,x:9,z:7,demand:5,landmark:`un`},{id:`centralpark`,name:`Central Park`,x:3,z:-18,demand:7,landmark:`park`},{id:`harlem`,name:`Harlem`,x:5,z:-46,demand:5,landmark:null},{id:`washheights`,name:`Washington Hts / GW Br.`,x:6,z:-52,demand:4,landmark:null},{id:`yankee`,name:`Yankee Stadium`,x:6,z:-78,demand:6,landmark:`stadium`},{id:`dtbrooklyn`,name:`Downtown Brooklyn`,x:23,z:55,demand:7,landmark:null},{id:`williamsburg`,name:`Williamsburg`,x:21,z:33,demand:6,landmark:null},{id:`coney`,name:`Coney Island`,x:30,z:86,demand:4,landmark:`coney`},{id:`lic`,name:`Long Island City`,x:20,z:4,demand:6,landmark:null},{id:`flushing`,name:`Flushing Meadows`,x:52,z:-14,demand:5,landmark:`unisphere`},{id:`jfk`,name:`JFK Airport`,x:58,z:60,demand:7,landmark:`airport`},{id:`jerseycity`,name:`Jersey City`,x:-24,z:44,demand:6,landmark:null},{id:`hoboken`,name:`Hoboken`,x:-20,z:24,demand:5,landmark:null},{id:`stgeorge`,name:`St. George (Staten Is.)`,x:-40,z:80,demand:4,landmark:null},{id:`liberty`,name:`Statue of Liberty`,x:-13,z:68,demand:3,landmark:`liberty`},{id:`ellis`,name:`Ellis Island`,x:-14.5,z:60,demand:2,landmark:`ellis`},{id:`governors`,name:`Governors Island`,x:7,z:62,demand:2,landmark:`governors`}],gd=[{name:`Brooklyn Bridge`,from:[4,50],to:[16,56]},{name:`George Washington Bridge`,from:[-8,-50],to:[5,-50]}],_d={x0:0,z0:-28,x1:7,z1:-8};function vd(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function yd(e,t){for(let n of md)if(vd(e,t,n.poly))return!0;return!1}function bd(e,t,n,r,i=24){let a=0;for(let o=0;o<=i;o++){let s=o/i;yd(e+(n-e)*s,t+(r-t)*s)||a++}return a/(i+1)}var xd=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){let t=this._partials,n=0;for(let r=0;r<this._n&&r<32;r++){let i=t[r],a=e+i,o=Math.abs(e)<Math.abs(i)?e-(a-i):i-(a-e);o&&(t[n++]=o),e=a}return t[n]=e,this._n=n+1,this}valueOf(){let e=this._partials,t=this._n,n,r,i,a=0;if(t>0){for(a=e[--t];t>0&&(n=a,r=e[--t],a=n+r,i=r-(a-n),!i););t>0&&(i<0&&e[t-1]<0||i>0&&e[t-1]>0)&&(r=i*2,n=a+r,r==n-a&&(a=n))}return a}};function*Sd(e){for(let t of e)yield*t}function Cd(e){return Array.from(Sd(e))}var wd=1e-6,X=Math.PI,Td=X/2,Ed=X/4,Dd=X*2,Od=180/X,kd=X/180,Ad=Math.abs,jd=Math.atan,Md=Math.atan2,Nd=Math.cos,Pd=Math.sin,Fd=Math.sign||function(e){return e>0?1:e<0?-1:0},Id=Math.sqrt;function Ld(e){return e>1?0:e<-1?X:Math.acos(e)}function Rd(e){return e>1?Td:e<-1?-Td:Math.asin(e)}function zd(){}function Bd(e,t){e&&Hd.hasOwnProperty(e.type)&&Hd[e.type](e,t)}var Vd={Feature:function(e,t){Bd(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)Bd(n[r].geometry,t)}},Hd={Sphere:function(e,t){t.sphere()},Point:function(e,t){e=e.coordinates,t.point(e[0],e[1],e[2])},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)e=n[r],t.point(e[0],e[1],e[2])},LineString:function(e,t){Ud(e.coordinates,t,0)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Ud(n[r],t,0)},Polygon:function(e,t){Wd(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Wd(n[r],t)},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)Bd(n[r],t)}};function Ud(e,t,n){var r=-1,i=e.length-n,a;for(t.lineStart();++r<i;)a=e[r],t.point(a[0],a[1],a[2]);t.lineEnd()}function Wd(e,t){var n=-1,r=e.length;for(t.polygonStart();++n<r;)Ud(e[n],t,1);t.polygonEnd()}function Gd(e,t){e&&Vd.hasOwnProperty(e.type)?Vd[e.type](e,t):Bd(e,t)}function Kd(e){return[Md(e[1],e[0]),Rd(e[2])]}function qd(e){var t=e[0],n=e[1],r=Nd(n);return[r*Nd(t),r*Pd(t),Pd(n)]}function Jd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Yd(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Xd(e,t){e[0]+=t[0],e[1]+=t[1],e[2]+=t[2]}function Zd(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function Qd(e){var t=Id(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=t,e[1]/=t,e[2]/=t}function $d(e,t){function n(n,r){return n=e(n,r),t(n[0],n[1])}return e.invert&&t.invert&&(n.invert=function(n,r){return n=t.invert(n,r),n&&e.invert(n[0],n[1])}),n}function ef(e,t){return Ad(e)>X&&(e-=Math.round(e/Dd)*Dd),[e,t]}ef.invert=ef;function tf(e,t,n){return(e%=Dd)?t||n?$d(rf(e),af(t,n)):rf(e):t||n?af(t,n):ef}function nf(e){return function(t,n){return t+=e,Ad(t)>X&&(t-=Math.round(t/Dd)*Dd),[t,n]}}function rf(e){var t=nf(e);return t.invert=nf(-e),t}function af(e,t){var n=Nd(e),r=Pd(e),i=Nd(t),a=Pd(t);function o(e,t){var o=Nd(t),s=Nd(e)*o,c=Pd(e)*o,l=Pd(t),u=l*n+s*r;return[Md(c*i-u*a,s*n-l*r),Rd(u*i+c*a)]}return o.invert=function(e,t){var o=Nd(t),s=Nd(e)*o,c=Pd(e)*o,l=Pd(t),u=l*i-c*a;return[Md(c*i+l*a,s*n+u*r),Rd(u*n-s*r)]},o}function of(e,t,n,r,i,a){if(n){var o=Nd(t),s=Pd(t),c=r*n;i==null?(i=t+r*Dd,a=t-c/2):(i=sf(o,i),a=sf(o,a),(r>0?i<a:i>a)&&(i+=r*Dd));for(var l,u=i;r>0?u>a:u<a;u-=c)l=Kd([o,-s*Nd(u),-s*Pd(u)]),e.point(l[0],l[1])}}function sf(e,t){t=qd(t),t[0]-=e,Qd(t);var n=Ld(-t[1]);return((-t[2]<0?-n:n)+Dd-wd)%Dd}function cf(){var e=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){e.push(t=[])},lineEnd:zd,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}}function lf(e,t){return Ad(e[0]-t[0])<1e-6&&Ad(e[1]-t[1])<1e-6}function uf(e,t,n,r){this.x=e,this.z=t,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function df(e,t,n,r,i){var a=[],o=[],s,c;if(e.forEach(function(e){if(!((t=e.length-1)<=0)){var t,n=e[0],r=e[t],c;if(lf(n,r)){if(!n[2]&&!r[2]){for(i.lineStart(),s=0;s<t;++s)i.point((n=e[s])[0],n[1]);i.lineEnd();return}r[0]+=2*wd}a.push(c=new uf(n,e,null,!0)),o.push(c.o=new uf(n,null,c,!1)),a.push(c=new uf(r,e,null,!1)),o.push(c.o=new uf(r,null,c,!0))}}),a.length){for(o.sort(t),ff(a),ff(o),s=0,c=o.length;s<c;++s)o[s].e=n=!n;for(var l=a[0],u,d;;){for(var f=l,p=!0;f.v;)if((f=f.n)===l)return;u=f.z,i.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(s=0,c=u.length;s<c;++s)i.point((d=u[s])[0],d[1]);else r(f.x,f.n.x,1,i);f=f.n}else{if(p)for(u=f.p.z,s=u.length-1;s>=0;--s)i.point((d=u[s])[0],d[1]);else r(f.x,f.p.x,-1,i);f=f.p}f=f.o,u=f.z,p=!p}while(!f.v);i.lineEnd()}}}function ff(e){if(t=e.length){for(var t,n=0,r=e[0],i;++n<t;)r.n=i=e[n],i.p=r,r=i;r.n=i=e[0],i.p=r}}function pf(e){return Ad(e[0])<=X?e[0]:Fd(e[0])*((Ad(e[0])+X)%Dd-X)}function mf(e,t){var n=pf(t),r=t[1],i=Pd(r),a=[Pd(n),-Nd(n),0],o=0,s=0,c=new xd;i===1?r=Td+wd:i===-1&&(r=-Td-wd);for(var l=0,u=e.length;l<u;++l)if(f=(d=e[l]).length)for(var d,f,p=d[f-1],m=pf(p),h=p[1]/2+Ed,g=Pd(h),_=Nd(h),v=0;v<f;++v,m=b,g=S,_=C,p=y){var y=d[v],b=pf(y),x=y[1]/2+Ed,S=Pd(x),C=Nd(x),w=b-m,T=w>=0?1:-1,E=T*w,D=E>X,O=g*S;if(c.add(Md(O*T*Pd(E),_*C+O*Nd(E))),o+=D?w+T*Dd:w,D^m>=n^b>=n){var k=Yd(qd(p),qd(y));Qd(k);var A=Yd(a,k);Qd(A);var j=(D^w>=0?-1:1)*Rd(A[2]);(r>j||r===j&&(k[0]||k[1]))&&(s+=D^w>=0?1:-1)}}return(o<-1e-6||o<1e-6&&c<-1e-12)^s&1}function hf(e,t,n,r){return function(i){var a=t(i),o=cf(),s=t(o),c=!1,l,u,d,f={point:p,lineStart:h,lineEnd:g,polygonStart:function(){f.point=_,f.lineStart=v,f.lineEnd=y,u=[],l=[]},polygonEnd:function(){f.point=p,f.lineStart=h,f.lineEnd=g,u=Cd(u);var e=mf(l,r);u.length?(c||=(i.polygonStart(),!0),df(u,_f,e,n,i)):e&&(c||=(i.polygonStart(),!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),c&&=(i.polygonEnd(),!1),u=l=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function p(t,n){e(t,n)&&i.point(t,n)}function m(e,t){a.point(e,t)}function h(){f.point=m,a.lineStart()}function g(){f.point=p,a.lineEnd()}function _(e,t){d.push([e,t]),s.point(e,t)}function v(){s.lineStart(),d=[]}function y(){_(d[0][0],d[0][1]),s.lineEnd();var e=s.clean(),t=o.result(),n,r=t.length,a,f,p;if(d.pop(),l.push(d),d=null,r){if(e&1){if(f=t[0],(a=f.length-1)>0){for(c||=(i.polygonStart(),!0),i.lineStart(),n=0;n<a;++n)i.point((p=f[n])[0],p[1]);i.lineEnd()}return}r>1&&e&2&&t.push(t.pop().concat(t.shift())),u.push(t.filter(gf))}}return f}}function gf(e){return e.length>1}function _f(e,t){return((e=e.x)[0]<0?e[1]-Td-wd:Td-e[1])-((t=t.x)[0]<0?t[1]-Td-wd:Td-t[1])}var vf=hf(function(){return!0},yf,xf,[-X,-Td]);function yf(e){var t=NaN,n=NaN,r=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(a,o){var s=a>0?X:-X,c=Ad(a-t);Ad(c-X)<1e-6?(e.point(t,n=(n+o)/2>0?Td:-Td),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(s,n),e.point(a,n),i=0):r!==s&&c>=X&&(Ad(t-r)<1e-6&&(t-=r*wd),Ad(a-s)<1e-6&&(a-=s*wd),n=bf(t,n,a,o),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(s,n),i=0),e.point(t=a,n=o),r=s},lineEnd:function(){e.lineEnd(),t=n=NaN},clean:function(){return 2-i}}}function bf(e,t,n,r){var i,a,o=Pd(e-n);return Ad(o)>1e-6?jd((Pd(t)*(a=Nd(r))*Pd(n)-Pd(r)*(i=Nd(t))*Pd(e))/(i*a*o)):(t+r)/2}function xf(e,t,n,r){var i;if(e==null)i=n*Td,r.point(-X,i),r.point(0,i),r.point(X,i),r.point(X,0),r.point(X,-i),r.point(0,-i),r.point(-X,-i),r.point(-X,0),r.point(-X,i);else if(Ad(e[0]-t[0])>1e-6){var a=e[0]<t[0]?X:-X;i=n*a/2,r.point(-a,i),r.point(0,i),r.point(a,i)}else r.point(t[0],t[1])}function Sf(e){var t=Nd(e),n=2*kd,r=t>0,i=Ad(t)>wd;function a(t,r,i,a){of(a,e,n,i,t,r)}function o(e,n){return Nd(e)*Nd(n)>t}function s(e){var t,n,a,s,u;return{lineStart:function(){s=a=!1,u=1},point:function(d,f){var p=[d,f],m,h=o(d,f),g=r?h?0:l(d,f):h?l(d+(d<0?X:-X),f):0;if(!t&&(s=a=h)&&e.lineStart(),h!==a&&(m=c(t,p),(!m||lf(t,m)||lf(p,m))&&(p[2]=1)),h!==a)u=0,h?(e.lineStart(),m=c(p,t),e.point(m[0],m[1])):(m=c(t,p),e.point(m[0],m[1],2),e.lineEnd()),t=m;else if(i&&t&&r^h){var _;!(g&n)&&(_=c(p,t,!0))&&(u=0,r?(e.lineStart(),e.point(_[0][0],_[0][1]),e.point(_[1][0],_[1][1]),e.lineEnd()):(e.point(_[1][0],_[1][1]),e.lineEnd(),e.lineStart(),e.point(_[0][0],_[0][1],3)))}h&&(!t||!lf(t,p))&&e.point(p[0],p[1]),t=p,a=h,n=g},lineEnd:function(){a&&e.lineEnd(),t=null},clean:function(){return u|(s&&a)<<1}}}function c(e,n,r){var i=qd(e),a=qd(n),o=[1,0,0],s=Yd(i,a),c=Jd(s,s),l=s[0],u=c-l*l;if(!u)return!r&&e;var d=t*c/u,f=-t*l/u,p=Yd(o,s),m=Zd(o,d);Xd(m,Zd(s,f));var h=p,g=Jd(m,h),_=Jd(h,h),v=g*g-_*(Jd(m,m)-1);if(!(v<0)){var y=Id(v),b=Zd(h,(-g-y)/_);if(Xd(b,m),b=Kd(b),!r)return b;var x=e[0],S=n[0],C=e[1],w=n[1],T;S<x&&(T=x,x=S,S=T);var E=S-x,D=Ad(E-X)<wd,O=D||E<1e-6;if(!D&&w<C&&(T=C,C=w,w=T),O?D?C+w>0^b[1]<(Ad(b[0]-x)<1e-6?C:w):C<=b[1]&&b[1]<=w:E>X^(x<=b[0]&&b[0]<=S)){var k=Zd(h,(-g+y)/_);return Xd(k,m),[b,Kd(k)]}}}function l(t,n){var i=r?e:X-e,a=0;return t<-i?a|=1:t>i&&(a|=2),n<-i?a|=4:n>i&&(a|=8),a}return hf(o,s,a,r?[0,-e]:[-X,e-X])}function Cf(e,t,n,r,i,a){var o=e[0],s=e[1],c=t[0],l=t[1],u=0,d=1,f=c-o,p=l-s,m=n-o;if(!(!f&&m>0)){if(m/=f,f<0){if(m<u)return;m<d&&(d=m)}else if(f>0){if(m>d)return;m>u&&(u=m)}if(m=i-o,!(!f&&m<0)){if(m/=f,f<0){if(m>d)return;m>u&&(u=m)}else if(f>0){if(m<u)return;m<d&&(d=m)}if(m=r-s,!(!p&&m>0)){if(m/=p,p<0){if(m<u)return;m<d&&(d=m)}else if(p>0){if(m>d)return;m>u&&(u=m)}if(m=a-s,!(!p&&m<0)){if(m/=p,p<0){if(m>d)return;m>u&&(u=m)}else if(p>0){if(m<u)return;m<d&&(d=m)}return u>0&&(e[0]=o+u*f,e[1]=s+u*p),d<1&&(t[0]=o+d*f,t[1]=s+d*p),!0}}}}}var wf=1e9,Tf=-wf;function Ef(e,t,n,r){function i(i,a){return e<=i&&i<=n&&t<=a&&a<=r}function a(i,a,s,l){var u=0,d=0;if(i==null||(u=o(i,s))!==(d=o(a,s))||c(i,a)<0^s>0)do l.point(u===0||u===3?e:n,u>1?r:t);while((u=(u+s+4)%4)!==d);else l.point(a[0],a[1])}function o(r,i){return Ad(r[0]-e)<1e-6?i>0?0:3:Ad(r[0]-n)<1e-6?i>0?2:1:Ad(r[1]-t)<1e-6?+(i>0):i>0?3:2}function s(e,t){return c(e.x,t.x)}function c(e,t){var n=o(e,1),r=o(t,1);return n===r?n===0?t[1]-e[1]:n===1?e[0]-t[0]:n===2?e[1]-t[1]:t[0]-e[0]:n-r}return function(o){var c=o,l=cf(),u,d,f,p,m,h,g,_,v,y,b,x={point:S,lineStart:E,lineEnd:D,polygonStart:w,polygonEnd:T};function S(e,t){i(e,t)&&c.point(e,t)}function C(){for(var t=0,n=0,i=d.length;n<i;++n)for(var a=d[n],o=1,s=a.length,c=a[0],l,u,f=c[0],p=c[1];o<s;++o)l=f,u=p,c=a[o],f=c[0],p=c[1],u<=r?p>r&&(f-l)*(r-u)>(p-u)*(e-l)&&++t:p<=r&&(f-l)*(r-u)<(p-u)*(e-l)&&--t;return t}function w(){c=l,u=[],d=[],b=!0}function T(){var e=C(),t=b&&e,n=(u=Cd(u)).length;(t||n)&&(o.polygonStart(),t&&(o.lineStart(),a(null,null,1,o),o.lineEnd()),n&&df(u,s,e,a,o),o.polygonEnd()),c=o,u=d=f=null}function E(){x.point=O,d&&d.push(f=[]),y=!0,v=!1,g=_=NaN}function D(){u&&(O(p,m),h&&v&&l.rejoin(),u.push(l.result())),x.point=S,v&&c.lineEnd()}function O(a,o){var s=i(a,o);if(d&&f.push([a,o]),y)p=a,m=o,h=s,y=!1,s&&(c.lineStart(),c.point(a,o));else if(s&&v)c.point(a,o);else{var l=[g=Math.max(Tf,Math.min(wf,g)),_=Math.max(Tf,Math.min(wf,_))],u=[a=Math.max(Tf,Math.min(wf,a)),o=Math.max(Tf,Math.min(wf,o))];Cf(l,u,e,t,n,r)?(v||(c.lineStart(),c.point(l[0],l[1])),c.point(u[0],u[1]),s||c.lineEnd(),b=!1):s&&(c.lineStart(),c.point(a,o),b=!1)}g=a,_=o,v=s}return x}}var Df=e=>e,Of=1/0,kf=Of,Af=-Of,jf=Af,Mf={point:Nf,lineStart:zd,lineEnd:zd,polygonStart:zd,polygonEnd:zd,result:function(){var e=[[Of,kf],[Af,jf]];return Af=jf=-(kf=Of=1/0),e}};function Nf(e,t){e<Of&&(Of=e),e>Af&&(Af=e),t<kf&&(kf=t),t>jf&&(jf=t)}function Pf(e){return function(t){var n=new Ff;for(var r in e)n[r]=e[r];return n.stream=t,n}}function Ff(){}Ff.prototype={constructor:Ff,point:function(e,t){this.stream.point(e,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function If(e,t,n){var r=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),r!=null&&e.clipExtent(null),Gd(n,e.stream(Mf)),t(Mf.result()),r!=null&&e.clipExtent(r),e}function Lf(e,t,n){return If(e,function(n){var r=t[1][0]-t[0][0],i=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,s=+t[0][1]+(i-a*(n[1][1]+n[0][1]))/2;e.scale(150*a).translate([o,s])},n)}function Rf(e,t,n){return Lf(e,[[0,0],t],n)}function zf(e,t,n){return If(e,function(n){var r=+t,i=r/(n[1][0]-n[0][0]),a=(r-i*(n[1][0]+n[0][0]))/2,o=-i*n[0][1];e.scale(150*i).translate([a,o])},n)}function Bf(e,t,n){return If(e,function(n){var r=+t,i=r/(n[1][1]-n[0][1]),a=-i*n[0][0],o=(r-i*(n[1][1]+n[0][1]))/2;e.scale(150*i).translate([a,o])},n)}var Vf=16,Hf=Nd(30*kd);function Uf(e,t){return+t?Gf(e,t):Wf(e)}function Wf(e){return Pf({point:function(t,n){t=e(t,n),this.stream.point(t[0],t[1])}})}function Gf(e,t){function n(r,i,a,o,s,c,l,u,d,f,p,m,h,g){var _=l-r,v=u-i,y=_*_+v*v;if(y>4*t&&h--){var b=o+f,x=s+p,S=c+m,C=Id(b*b+x*x+S*S),w=Rd(S/=C),T=Ad(Ad(S)-1)<1e-6||Ad(a-d)<1e-6?(a+d)/2:Md(x,b),E=e(T,w),D=E[0],O=E[1],k=D-r,A=O-i,j=v*k-_*A;(j*j/y>t||Ad((_*k+v*A)/y-.5)>.3||o*f+s*p+c*m<Hf)&&(n(r,i,a,o,s,c,D,O,T,b/=C,x/=C,S,h,g),g.point(D,O),n(D,O,T,b,x,S,l,u,d,f,p,m,h,g))}}return function(t){var r,i,a,o,s,c,l,u,d,f,p,m,h={point:g,lineStart:_,lineEnd:y,polygonStart:function(){t.polygonStart(),h.lineStart=b},polygonEnd:function(){t.polygonEnd(),h.lineStart=_}};function g(n,r){n=e(n,r),t.point(n[0],n[1])}function _(){u=NaN,h.point=v,t.lineStart()}function v(r,i){var a=qd([r,i]),o=e(r,i);n(u,d,l,f,p,m,u=o[0],d=o[1],l=r,f=a[0],p=a[1],m=a[2],Vf,t),t.point(u,d)}function y(){h.point=g,t.lineEnd()}function b(){_(),h.point=x,h.lineEnd=S}function x(e,t){v(r=e,t),i=u,a=d,o=f,s=p,c=m,h.point=v}function S(){n(u,d,l,f,p,m,i,a,r,o,s,c,Vf,t),h.lineEnd=y,y()}return h}}var Kf=Pf({point:function(e,t){this.stream.point(e*kd,t*kd)}});function qf(e){return Pf({point:function(t,n){var r=e(t,n);return this.stream.point(r[0],r[1])}})}function Jf(e,t,n,r,i){function a(a,o){return a*=r,o*=i,[t+e*a,n-e*o]}return a.invert=function(a,o){return[(a-t)/e*r,(n-o)/e*i]},a}function Yf(e,t,n,r,i,a){if(!a)return Jf(e,t,n,r,i);var o=Nd(a),s=Pd(a),c=o*e,l=s*e,u=o/e,d=s/e,f=(s*n-o*t)/e,p=(s*t+o*n)/e;function m(e,a){return e*=r,a*=i,[c*e-l*a+t,n-l*e-c*a]}return m.invert=function(e,t){return[r*(u*e-d*t+f),i*(p-d*e-u*t)]},m}function Xf(e){var t,n=150,r=480,i=250,a=0,o=0,s=0,c=0,l=0,u,d=0,f=1,p=1,m=null,h=vf,g=null,_,v,y,b=Df,x=.5,S,C,w,T,E;function D(e){return w(e[0]*kd,e[1]*kd)}function O(e){return e=w.invert(e[0],e[1]),e&&[e[0]*Od,e[1]*Od]}D.stream=function(e){return T&&E===e?T:T=Kf(qf(u)(h(S(b(E=e)))))},D.preclip=function(e){return arguments.length?(h=e,m=void 0,A()):h},D.postclip=function(e){return arguments.length?(b=e,g=_=v=y=null,A()):b},D.clipAngle=function(e){return arguments.length?(h=+e?Sf(m=e*kd):(m=null,vf),A()):m*Od},D.clipExtent=function(e){return arguments.length?(b=e==null?(g=_=v=y=null,Df):Ef(g=+e[0][0],_=+e[0][1],v=+e[1][0],y=+e[1][1]),A()):g==null?null:[[g,_],[v,y]]},D.scale=function(e){return arguments.length?(n=+e,k()):n},D.translate=function(e){return arguments.length?(r=+e[0],i=+e[1],k()):[r,i]},D.center=function(e){return arguments.length?(a=e[0]%360*kd,o=e[1]%360*kd,k()):[a*Od,o*Od]},D.rotate=function(e){return arguments.length?(s=e[0]%360*kd,c=e[1]%360*kd,l=e.length>2?e[2]%360*kd:0,k()):[s*Od,c*Od,l*Od]},D.angle=function(e){return arguments.length?(d=e%360*kd,k()):d*Od},D.reflectX=function(e){return arguments.length?(f=e?-1:1,k()):f<0},D.reflectY=function(e){return arguments.length?(p=e?-1:1,k()):p<0},D.precision=function(e){return arguments.length?(S=Uf(C,x=e*e),A()):Id(x)},D.fitExtent=function(e,t){return Lf(D,e,t)},D.fitSize=function(e,t){return Rf(D,e,t)},D.fitWidth=function(e,t){return zf(D,e,t)},D.fitHeight=function(e,t){return Bf(D,e,t)};function k(){var e=Yf(n,0,0,f,p,d).apply(null,t(a,o)),m=Yf(n,r-e[0],i-e[1],f,p,d);return u=tf(s,c,l),C=$d(t,m),w=$d(u,C),S=Uf(C,x),A()}function A(){return T=E=null,D}return function(){return t=e.apply(this,arguments),D.invert=t.invert&&O,k()}}function Zf(e){var t=0,n=X/3,r=Xf(e),i=r(t,n);return i.parallels=function(e){return arguments.length?r(t=e[0]*kd,n=e[1]*kd):[t*Od,n*Od]},i}function Qf(e){var t=Nd(e);function n(e,n){return[e*t,Pd(n)/t]}return n.invert=function(e,n){return[e/t,Rd(n*t)]},n}function $f(e,t){var n=Pd(e),r=(n+Pd(t))/2;if(Ad(r)<1e-6)return Qf(e);var i=1+n*(2*r-n),a=Id(i)/r;function o(e,t){var n=Id(i-2*r*Pd(t))/r;return[n*Pd(e*=r),a-n*Nd(e)]}return o.invert=function(e,t){var n=a-t,o=Md(e,Ad(n))*Fd(n);return n*r<0&&(o-=X*Fd(e)*Fd(n)),[o/r,Rd((i-(e*e+n*n)*r*r)/(2*r))]},o}function ep(){return Zf($f).scale(155.424).center([0,33.6442])}function tp(){return ep().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function np(e){var t=e.length;return{point:function(n,r){for(var i=-1;++i<t;)e[i].point(n,r)},sphere:function(){for(var n=-1;++n<t;)e[n].sphere()},lineStart:function(){for(var n=-1;++n<t;)e[n].lineStart()},lineEnd:function(){for(var n=-1;++n<t;)e[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<t;)e[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<t;)e[n].polygonEnd()}}}function rp(){var e,t,n=tp(),r,i=ep().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a,o=ep().rotate([157,0]).center([-3,19.9]).parallels([8,18]),s,c,l={point:function(e,t){c=[e,t]}};function u(e){var t=e[0],n=e[1];return c=null,(r.point(t,n),c)||(a.point(t,n),c)||(s.point(t,n),c)}u.invert=function(e){var t=n.scale(),r=n.translate(),a=(e[0]-r[0])/t,s=(e[1]-r[1])/t;return(s>=.12&&s<.234&&a>=-.425&&a<-.214?i:s>=.166&&s<.234&&a>=-.214&&a<-.115?o:n).invert(e)},u.stream=function(r){return e&&t===r?e:e=np([n.stream(t=r),i.stream(r),o.stream(r)])},u.precision=function(e){return arguments.length?(n.precision(e),i.precision(e),o.precision(e),d()):n.precision()},u.scale=function(e){return arguments.length?(n.scale(e),i.scale(e*.35),o.scale(e),u.translate(n.translate())):n.scale()},u.translate=function(e){if(!arguments.length)return n.translate();var t=n.scale(),c=+e[0],u=+e[1];return r=n.translate(e).clipExtent([[c-.455*t,u-.238*t],[c+.455*t,u+.238*t]]).stream(l),a=i.translate([c-.307*t,u+.201*t]).clipExtent([[c-.425*t+wd,u+.12*t+wd],[c-.214*t-wd,u+.234*t-wd]]).stream(l),s=o.translate([c-.205*t,u+.212*t]).clipExtent([[c-.214*t+wd,u+.166*t+wd],[c-.115*t-wd,u+.234*t-wd]]).stream(l),d()},u.fitExtent=function(e,t){return Lf(u,e,t)},u.fitSize=function(e,t){return Rf(u,e,t)},u.fitWidth=function(e,t){return zf(u,e,t)},u.fitHeight=function(e,t){return Bf(u,e,t)};function d(){return e=t=null,u}return u.scale(1070)}var ip=.28,ap=rp();function op(e,t){let n=ap([e,t]);return n?[(n[0]-487.5)*ip,(n[1]-305)*ip]:null}function sp(e){return op(e.lon,e.lat)}var cp=(e,t)=>e<t?`${e}|${t}`:`${t}|${e}`;function lp(e,t,n){if(!e.maps[t]?.edges[n])return[];let r=[];for(let i of Object.values(e.trains)){if(i.map!==t||i.state!==`run`||!i.path?.length)continue;let e=i.path[i.seg],a=i.path[i.seg+1];e&&a&&cp(e,a)===n&&r.push(i)}return r}function up(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function dp(e,t,n,r,i,a){let o=n-e,s=r-t,c=o*o+s*s||1e-9,l=((i-e)*o+(a-t)*s)/c;l=Math.max(0,Math.min(1,l));let u=e+o*l,d=t+s*l;return{dist:Math.hypot(i-u,a-d),t:l}}function fp(e,t=null){let n={};for(let r of Object.values(e.edges))t!==null&&!ku[r.type].allows(t)||((n[r.a]??=[]).push({to:r.b,edge:r}),(n[r.b]??=[]).push({to:r.a,edge:r}));return n}function pp(e,t,n=null){let r=fp(e,n),i={[t]:0},a={},o=new Set;for(;;){let e=null,t=1/0;for(let n in i)!o.has(n)&&i[n]<t&&(t=i[n],e=n);if(e===null)break;o.add(e);for(let{to:t,edge:n}of r[e]??[]){let r=i[e]+n.length;r<(i[t]??1/0)&&(i[t]=r,a[t]=e)}}return{dist:i,prev:a}}function mp(e,t,n,r=null){if(t===n)return{path:[t],dist:0};let{dist:i,prev:a}=pp(e,t,r);if(i[n]===void 0)return null;let o=[n],s=n;for(;s!==t;)s=a[s],o.push(s);return o.reverse(),{path:o,dist:i[n]}}var hp=new Map;function gp(e){e.pathVersion=(e.pathVersion??0)+1}function _p(e,t){let n=hp.get(e);return(!n||n.version!==(t.pathVersion??0))&&(n={version:t.pathVersion??0,dijkstras:new Map},hp.set(e,n)),n}function vp(e,t,n){let r=_p(e,t);return r.dijkstras.has(n)||r.dijkstras.set(n,pp(t,n,null)),r.dijkstras.get(n)}function yp(e,t,n){if(!e.maps[t]?.edges[n])return[];let r=[],i=new Set;for(let a of Object.values(e.trains))if(!(a.map!==t||!a.path?.length)){for(let e=0;e<a.path.length-1;e++)if(cp(a.path[e],a.path[e+1])===n){i.has(a.id)||(i.add(a.id),r.push(a));break}}return r}var bp=`railEmpire-integrity-v1`,xp=[`cash`,`totalDelivered`,`totalRevenue`,`totalLost`,`cityMapsUnlocked`,`simTime`,`survivalTime`,`clockStarted`,`officialRun`],Sp=0,Cp=new WeakSet;function wp(e){Sp++;try{return e()}finally{Sp--}}function Tp(e){e.officialRun!==!1&&wp(()=>{e.officialRun=!1})}function Ep(e){return e.officialRun!==!1}function Dp(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t^e.charCodeAt(n);return(t>>>0).toString(36)}function Op(e){return Dp(`${bp}|${[Math.round(e.cash*100),Math.round(e.totalRevenue*100),e.totalDelivered|0,e.totalLost|0,+!!e.cityMapsUnlocked,Math.round(e.simTime*10),Math.round((e.survivalTime??0)*10),+!!e.clockStarted,e.officialRun===!1?0:1,Object.keys(e.trains??{}).length,e.nextTrainId|0].join(`|`)}`)}function kp(e){wp(()=>{e._seal=Op(e)})}function Ap(e){e._seal&&e._seal!==Op(e)&&Tp(e)}function jp(e){if(Cp.has(e))return e;e.officialRun??=!0;let t={};for(let n of xp)t[n]=e[n];for(let n of xp)Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get(){return t[n]},set(r){Sp===0&&Tp(e),t[n]=r}});return Cp.add(e),e}var Mp=`railEmpireSave_v1`;function Np(e){return+(2+e*.45).toFixed(1)}function Pp(e=`survival`){let t={};for(let e of fd){let[n,r]=sp(e);t[`usa_${e.rank}`]={id:`usa_${e.rank}`,name:e.name,rank:e.rank,pop:e.pop,x:n,z:r,demand:Np(e.pop),unlocked:e.rank<=12,station:!1,capLevel:0,waiting:[],spawnAcc:0,servedTotal:0}}let n={};for(let e of hd)n[e.id]={id:e.id,name:e.name,x:e.x,z:e.z,demand:e.demand,landmark:e.landmark,unlocked:!0,station:!1,capLevel:0,waiting:[],spawnAcc:0,servedTotal:0};return{version:1,gameMode:e,cash:Mu.startCash,totalDelivered:0,totalRevenue:0,totalLost:0,simTime:0,clockStarted:!1,speed:1,debtTimer:0,gameOver:!1,victoryShown:!1,completedGoals:[],currentMap:`usa`,maps:{usa:{nodes:t,edges:{},pathVersion:0,fareMult:1},nyc:{nodes:n,edges:{},pathVersion:0,fareMult:1}},trains:{},nextTrainId:1,junctionCounter:0,activeBond:null,incomeWindow:[],lostWindow:[],breachTimer:0,pressureStrikeCount:0,collapseReason:null,survivalTime:0,cityMapsUnlocked:!1,officialRun:!0,survivalRun:e===`survival`?{peakTrains:0,hadOvercrowding:!1,lastLostAt:0,maxLostFreeStreak:0}:null}}function Fp(e,t,n,r,i){let a=e.maps[t],o=a.nodes[n],s=a.nodes[r],c=up(o,s),l=t===`nyc`?bd(o.x,o.z,s.x,s.z):0,u={id:cp(n,r),a:n,b:r,type:i,length:c,waterFrac:l};return a.edges[u.id]=u,gp(a),u}function Ip(e,t,n){delete e.maps[t].edges[n],gp(e.maps[t])}function Lp(e){try{kp(e),localStorage.setItem(Mp,JSON.stringify(e))}catch(e){console.warn(`save failed`,e)}}function Rp(){try{let e=localStorage.getItem(Mp);if(!e)return null;let t=JSON.parse(e);if(t?.version!==1)return null;if(t.gameMode||=`survival`,t.completedGoals||=[],t.victoryShown??=!1,t.totalLost??=0,t.lostWindow||=[],t.breachTimer??=0,t.pressureStrikeCount??=0,t.collapseReason??=null,t.survivalTime??=0,t.cityMapsUnlocked??=!1,t.officialRun??=!0,t.clockStarted==null){let e=[`usa`,`nyc`].reduce((e,n)=>e+Object.values(t.maps[n].nodes).reduce((e,t)=>e+t.waiting.reduce((e,t)=>e+t.count,0),0),0);t.clockStarted=t.totalDelivered>0||e>0}t.gameMode===`survival`&&!t.survivalRun&&(t.survivalRun={peakTrains:Object.keys(t.trains??{}).length,hadOvercrowding:!1,lastLostAt:0,maxLostFreeStreak:0}),t.activeBond===void 0&&(t.activeBond=null),t.junctionCounter??=0;for(let e of[`usa`,`nyc`])t.maps[e].fareMult??(t.maps[e].fareMult=1);let n=Pp();for(let e of[`usa`,`nyc`])for(let r in n.maps[e].nodes){let i=n.maps[e].nodes[r],a=t.maps[e].nodes[r];a?Object.assign(a,{x:i.x,z:i.z,demand:i.demand,name:i.name}):t.maps[e].nodes[r]=i}return Ap(t),t}catch{return null}}function zp(){localStorage.removeItem(Mp)}var Bp=fd.length;hd.length;function Vp(e){return Object.values(e.nodes).filter(e=>e.station).length}function Hp(e){return Object.keys(e.maps.usa.edges).length+Object.keys(e.maps.nyc.edges).length}function Up(e){return Object.keys(e.trains).length}function Wp(e){return Object.values(e.trains).some(e=>e.route.length>=2&&e.path)}function Gp(e,t){return Object.values(e.trains).some(e=>e.tier===t)}function Kp(e){return Object.values(e.maps.usa.nodes).filter(e=>e.station&&e.rank>12).length}function qp(e){let t=Object.values(e.edges);return t.length>0&&t.every(e=>e.type===3)}function Jp(e){if(!qp(e))return 0;let t=Object.values(e.nodes).filter(e=>e.station);if(!t.length)return 0;let n={};for(let t of Object.values(e.edges))(n[t.a]??=[]).push(t.b),(n[t.b]??=[]).push(t.a);let r=new Set,i=[t[0].id];for(;i.length;){let e=i.pop();if(!r.has(e)){r.add(e);for(let t of n[e]??[])r.has(t)||i.push(t)}}return t.filter(e=>r.has(e.id)).length}function Yp(e){let t=e.maps.usa;return Vp(t)>=Bp&&qp(t)&&Jp(t)>=Bp}var Xp=[{id:`first_station`,title:`Open for business`,desc:`Build your first station`,done:e=>Vp(e.maps.usa)+Vp(e.maps.nyc)>=1},{id:`first_track`,title:`On the map`,desc:`Connect two stations with track`,done:e=>Hp(e)>=1},{id:`first_route`,title:`All aboard`,desc:`Assign a train route`,done:Wp},{id:`expand_first`,title:`Expand your network`,desc:`Open a station in a new US metro beyond your starter region`,done:e=>Kp(e)>=1},{id:`passengers_1k`,title:`Getting busy`,desc:`Deliver 1,000 passengers`,progress:e=>({current:e.totalDelivered,target:1e3}),done:e=>e.totalDelivered>=1e3},{id:`cash_2m`,title:`In the black`,desc:`Reach $5M cash`,progressFormat:`money`,progress:e=>({current:Math.max(0,e.cash),target:5e6}),done:e=>e.cash>=5e6},{id:`usa_10`,title:`Regional operator`,desc:`Expand your network to 10 US metros`,progress:e=>({current:Vp(e.maps.usa),target:10}),done:e=>Vp(e.maps.usa)>=10},{id:`fleet_3`,title:`Growing fleet`,desc:`Own 3 trains`,progress:e=>({current:Up(e),target:3}),done:e=>Up(e)>=3},{id:`revenue_1m`,title:`Fare collector`,desc:`Earn $1M in total fares`,progress:e=>({current:e.totalRevenue,target:1e6}),done:e=>e.totalRevenue>=1e6},{id:`usa_25`,title:`Coast to coast`,desc:`Expand your network to 25 US metros`,progress:e=>({current:Vp(e.maps.usa),target:25}),done:e=>Vp(e.maps.usa)>=25},{id:`nyc_5`,title:`Five boroughs`,desc:`Build 5 stations on the NYC map`,progress:e=>({current:Vp(e.maps.nyc),target:5}),done:e=>Vp(e.maps.nyc)>=5},{id:`tier2`,title:`High-speed era`,desc:`Own a Tier II high-speed train`,done:e=>Gp(e,2)},{id:`passengers_10k`,title:`Mass transit`,desc:`Deliver 10,000 passengers`,progress:e=>({current:e.totalDelivered,target:1e4}),done:e=>e.totalDelivered>=1e4},{id:`nyc_15`,title:`City network`,desc:`Build 15 stations on the NYC map`,progress:e=>({current:Vp(e.maps.nyc),target:15}),done:e=>Vp(e.maps.nyc)>=15},{id:`usa_50`,title:`National network`,desc:`Expand coast to coast — stations at all 50 US metros`,win:!0,progress:e=>({current:Vp(e.maps.usa),target:Bp}),done:e=>Vp(e.maps.usa)>=Bp},{id:`tier3`,title:`Maglev future`,desc:`Own a Tier III maglev train`,done:e=>Gp(e,3)},{id:`cash_5m`,title:`Rail tycoon`,desc:`Reach $5M cash`,win:!0,progressFormat:`money`,progress:e=>({current:Math.max(0,e.cash),target:5e6}),done:e=>e.cash>=5e6},{id:`passengers_50k`,title:`Nation moved`,desc:`Deliver 50,000 passengers`,progress:e=>({current:e.totalDelivered,target:5e4}),done:e=>e.totalDelivered>=5e4}];Object.fromEntries(Xp.map(e=>[e.id,e]));function Zp(e){e.completedGoals||=[],e.victoryShown??=!1}function Qp(e){Zp(e);let t=new Set(e.completedGoals);for(let n of Xp)!t.has(n.id)&&n.done(e)&&e.completedGoals.push(n.id)}function $p(e){Zp(e);let t=new Set(e.completedGoals),n=[];for(let r of Xp)t.has(r.id)||r.done(e)&&(e.completedGoals.push(r.id),n.push(r));return n}function em(e){Zp(e);let t=new Set(e.completedGoals);return Xp.find(e=>!t.has(e.id))??null}function tm(e,t){let n=e.progress?.(t);if(!n)return e.desc;let r=Math.min(n.current,n.target);return e.progressFormat===`money`?`${J(r)} / ${J(n.target)}`:Number.isInteger(n.target)&&n.target>=1e3?`${Y(r)} / ${Y(n.target)}`:`${r} / ${n.target}`}function nm(e,t){let n=e.progress?.(t);return!n||n.target<=0?null:Math.min(1,n.current/n.target)}function rm(e){return Zp(e),{done:e.completedGoals.length,total:Xp.length}}var im=`railEmpireSurvivalBadges_v1`,am=[{id:`survive_10m`,category:`Duration`,title:`Rush Hour Veteran`,desc:`Survive 10 minutes`,progressUnit:`time`,progress:e=>({current:e.simTime,target:600}),done:e=>e.simTime>=600},{id:`survive_30m`,category:`Duration`,title:`Peak Operator`,desc:`Survive 30 minutes`,progressUnit:`time`,progress:e=>({current:e.simTime,target:1800}),done:e=>e.simTime>=1800},{id:`survive_1h`,category:`Duration`,title:`Iron Rail`,desc:`Survive 1 hour`,progressUnit:`time`,progress:e=>({current:e.simTime,target:3600}),done:e=>e.simTime>=3600},{id:`lost_free_20m`,category:`Skill`,title:`Clean sheet`,desc:`Zero riders lost for 20 straight minutes`,done:e=>(e.survivalRun?.maxLostFreeStreak??0)>=1200},{id:`survive_30m_2trains`,category:`Skill`,title:`Minimalist`,desc:`Survive past 30 minutes with only 2 trains`,done:e=>e.simTime>=1800&&(e.survivalRun?.peakTrains??0)<=2},{id:`four_trains_no_crowd`,category:`Skill`,title:`Smooth operator`,desc:`Reach 4 trains without a single overcrowding warning`,done:e=>Up(e)>=4&&!e.survivalRun?.hadOvercrowding},{id:`survival_usa_50`,category:`Network`,title:`National network`,desc:`Connect all 50 US metros`,progress:e=>({current:Vp(e.maps.usa),target:Bp}),done:e=>Vp(e.maps.usa)>=Bp},{id:`survival_passengers_10k`,category:`Network`,title:`Mass transit`,desc:`Deliver 10,000 passengers`,progress:e=>({current:e.totalDelivered,target:1e4}),done:e=>e.totalDelivered>=1e4},{id:`survival_passengers_50k`,category:`Network`,title:`Nation moved`,desc:`Deliver 50,000 passengers`,progress:e=>({current:e.totalDelivered,target:5e4}),done:e=>e.totalDelivered>=5e4},{id:`survival_passengers_100k`,category:`Network`,title:`Main line`,desc:`Deliver 100,000 passengers`,progress:e=>({current:e.totalDelivered,target:1e5}),done:e=>e.totalDelivered>=1e5},{id:`survival_nyc_15`,category:`Network`,title:`City network`,desc:`Build 15 stations on the NYC map`,progress:e=>({current:Vp(e.maps.nyc),target:15}),done:e=>Vp(e.maps.nyc)>=15},{id:`empire_grade_5h`,category:`Expert`,title:`Empire Grade`,desc:`Survive 5 hours`,progressUnit:`time`,progress:e=>({current:e.simTime,target:18e3}),done:e=>e.simTime>=18e3},{id:`empire_grade_10h`,category:`Expert`,title:`Empire Ascendant`,desc:`Survive 10 hours`,progressUnit:`time`,progress:e=>({current:e.simTime,target:36e3}),done:e=>e.simTime>=36e3},{id:`survival_passengers_1m`,category:`Expert`,title:`Mass Transit Titan`,desc:`Deliver 1,000,000 passengers`,progress:e=>({current:e.totalDelivered,target:1e6}),done:e=>e.totalDelivered>=1e6},{id:`survival_maglev_nation`,category:`Expert`,title:`Maglev Nation`,desc:`Connect all 50 US metros on Maglev Guideway only`,progress:e=>{let t=e.maps.usa,n=Vp(t);return n<Bp?{current:n,target:Bp}:{current:qp(t)?Jp(t):0,target:Bp}},done:Yp},{id:`jack_of_all_trades`,category:`Capstone`,title:`Jack of all trades`,desc:`Unlock every other Survival badge`,capstone:!0,progress:()=>sm(),done:()=>om().every(e=>fm().has(e.id))}];function om(){return am.filter(e=>!e.capstone)}function sm(){let e=fm(),t=om();return{current:t.filter(t=>e.has(t.id)).length,target:t.length}}Object.fromEntries(am.map(e=>[e.id,e]));function cm(e){e.survivalRun||={peakTrains:Up(e),hadOvercrowding:!1,lastLostAt:0,maxLostFreeStreak:0}}function lm(e){if(e.gameMode!==`survival`)return;cm(e);let t=e.survivalRun;t.peakTrains=Math.max(t.peakTrains,Up(e));let n=e.simTime-(t.lastLostAt??0);t.maxLostFreeStreak=Math.max(t.maxLostFreeStreak,n)}function um(e){e.gameMode===`survival`&&(cm(e),e.survivalRun.lastLostAt=e.simTime)}function dm(e){e.gameMode===`survival`&&(cm(e),e.survivalRun.hadOvercrowding=!0)}function fm(){try{let e=localStorage.getItem(im);if(!e)return new Set;let t=JSON.parse(e);return new Set(Array.isArray(t)?t:[])}catch{return new Set}}function pm(e){try{localStorage.setItem(im,JSON.stringify([...e]))}catch(e){console.warn(`badge save failed`,e)}}function mm(e){if(e.gameMode!==`survival`)return[];cm(e),lm(e);let t=fm(),n=[];for(let r of am)r.capstone||t.has(r.id)||r.done(e)&&(t.add(r.id),n.push(r));for(let r of am)r.capstone&&(t.has(r.id)||r.done(e)&&(t.add(r.id),n.push(r)));return n.length&&pm(t),n}function hm(){let e=fm();return{done:e.size,total:am.length,unlocked:e}}function gm(e){let t=fm();return am.find(e=>!t.has(e.id))??null}function _m(e,t){return nm(e,t)}function vm(e){let t=Math.floor(e/60);return t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`}function ym(e,t){let n=e.progress?.(t);return n?e.progressUnit===`time`?`${e.title} (${vm(n.current)} / ${vm(n.target)})`:n.target>=1e3?`${e.title} (${Y(Math.min(n.current,n.target))} / ${Y(n.target)})`:`${e.title} (${Math.min(n.current,n.target)} / ${n.target})`:e.title}var bm=new Map;function xm(e,t){let n=`${t}:${e.maps[t].pathVersion??0}`;for(let r of Object.values(e.trains))r.map!==t||r.route.length<2||!r.path||(n+=`|${r.id}:${r.route.join(`>`)}`);return n}function Sm(e,t){let n=xm(e,t),r=bm.get(n);if(r)return r;if(r={key:n,adj:wm(e,t),distCache:new Map},bm.set(n,r),bm.size>8)for(let e of bm.keys())e!==n&&bm.delete(e);return r}function Cm(e,t,n,r){let i=0,a=t.length;for(let o=0;o<r;o++){let r=t[(n+o)%a],s=t[(n+o+1)%a],c=mp(e,r,s,null);if(!c)return 1/0;i+=c.dist}return i}function wm(e,t){let n={},r=e.maps[t],i=(e,t,r)=>{if(r===1/0)return;let i=n[e]??=[],a=i.find(e=>e.to===t);(!a||r<a.weight)&&(a?a.weight=r:i.push({to:t,weight:r}))};for(let n of Object.values(e.trains)){if(n.map!==t||n.route.length<2||!n.path)continue;let e=n.route,a=e.length;for(let t=0;t<a;t++)for(let n=1;n<a;n++){let o=e[t],s=e[(t+n)%a];i(o,s,Cm(r,e,t,n))}}return n}function Tm(e,t,n){let r=Sm(e,t);if(r.distCache.has(n))return r.distCache.get(n);let i={[n]:0},a={},o=new Set;for(;;){let e=null,t=1/0;for(let n in i)!o.has(n)&&i[n]<t&&(t=i[n],e=n);if(e===null)break;o.add(e);for(let{to:t,weight:n}of r.adj[e]??[]){let r=i[e]+n;r<(i[t]??1/0)&&(i[t]=r,a[t]=e)}}let s={dist:i,prev:a};return r.distCache.set(n,s),s}function Em(e,t,n,r){if(n===r)return 0;let{dist:i}=Tm(e,t,n);return i[r]??1/0}function Dm(e,t,n){if(t===n)return!1;let r=e.route,i=r.indexOf(t);if(i<0)return!1;for(let e=1;e<r.length;e++)if(r[(i+e)%r.length]===n)return!0;return!1}function Om(e,t,n,r){let{dist:i,prev:a}=Tm(e,t,n);if(i[r]===void 0)return null;let o=r;for(;a[o]&&a[o]!==n;)o=a[o];return o}function km(e,t,n,r,i){if(i===r)return!1;if(n.route.includes(i))return!0;let a=Om(e,t,r,i);return a?Dm(n,r,a):!1}function Am(e,t,n){let r=e.maps[t],i=Sm(e,t),a=Object.keys(i.adj).length>0?Tm(e,t,n).dist:vp(t,r,n).dist,o=[];for(let e in a)e!==n&&r.nodes[e]?.station&&o.push({id:e,dist:a[e]});return o}function jm(e,t,n,r,i){if(n.route.includes(i))return!1;let a=Em(e,t,r,i);if(a===1/0)return!1;let o=n.route.indexOf(r);if(o<0)return!1;let s=a;for(let r=0;r<n.route.length;r++){let a=n.route[(o+r)%n.route.length];s=Math.min(s,Em(e,t,a,i))}return a<=s}function Mm(e,t,n,r,i){let a=e.waiting.find(e=>e.dest===n);a?(a.count+=t,a.since=Math.min(a.since??i,i)):e.waiting.push({count:t,dest:n,fareDist:r,since:i})}var Nm={};function Pm(e,t){(Nm[e]??=[]).push(t)}function Z(e,t){for(let n of Nm[e]??[])n(t)}function Fm(){return 120+Math.random()*480}var Im=2,Lm=120,Rm=240,zm=25e4,Bm=12,Vm={seattle:{title:`Tech Summit in Seattle`},nyc:{title:`Fashion Week in New York`},chicago:{title:`Lollapalooza in Chicago`},la:{title:`Film Premiere in Los Angeles`},dc:{title:`Policy Summit in Washington DC`},miami:{title:`Art Basel in Miami`},boston:{title:`Marathon Day in Boston`},vegas:{title:`Global Expo in Las Vegas`},sf:{title:`AI World Expo in San Francisco`},dallas:{title:`Energy Conference in Dallas`},houston:{title:`Space & Tech Expo in Houston`},atlanta:{title:`Music & Culture Fest in Atlanta`}};function Hm(e,t){if(Vm[e])return Vm[e].title;let n=[`${t} Regional Trade Expo`,`${t} Cultural Festival`,`${t} Sports Championship`,`${t} Music Festival`],r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t);return n[Math.abs(r)%n.length]}function Um(){return 900+Math.random()*900}var Wm=120,Gm=35e4;function Km(e,t){if(!zu(e)||e.gameOver)return;e.surgeState||={nextSurgeTime:120+Math.random()*120,nextVipSurgeTime:900+Math.random()*900,surges:{},abandonedNodes:{},abandonedCount:0,vipSurge:null};let n=e.surgeState;n.abandonedNodes||={},n.nextVipSurgeTime||=e.simTime+(900+Math.random()*900);let r=e.currentMap||`usa`,i=e.maps[r];if(i){if(e.simTime>=n.nextSurgeTime&&(n.nextSurgeTime=e.simTime+Fm(),Object.keys(n.surges).length<Im)){let t=Object.values(i.nodes).filter(e=>!e.station&&!n.surges[e.id]&&!n.abandonedNodes[e.id]);if(e.simTime<900){let e=Object.values(i.nodes).filter(e=>e.station);if(e.length>0){let n=t.filter(t=>e.some(e=>{let n=t.x-e.x,r=t.z-e.z;return Math.hypot(n,r)<=50}));if(n.length>0)t=n;else{let n=1/0,r=[];for(let i of t)for(let t of e){let e=Math.hypot(i.x-t.x,i.z-t.z);e<n?(n=e,r=[i]):e===n&&r.push(i)}r.length>0&&(t=r)}}}if(t.length>0){let e=t[Math.floor(Math.random()*t.length)];n.surges[e.id]={mapKey:r,timer:Lm,frustrated:!1,frustrationTimer:Rm,name:e.name},e.surgeActive=!0,e.surgeTimer=Lm,e.surgeFrustrated=!1;let i=e.id,a=r;Z(`toast`,{msg:`DEMAND SURGE: ${e.name} demands transit connection within 120s!`,kind:`bad`,key:`surge:${e.id}`,action:{label:`View City`,onClick:()=>window.game?.panToNode(i,a)}})}}for(let[t,i]of Object.entries(n.abandonedNodes)){let n=e.maps[i.mapKey||r]?.nodes[t];n&&n.station&&Am(e,i.mapKey||r,t).length>0&&!i.connected&&(i.connected=!0,n.surgeAbandoned=!1,n.surgeRedeeming=!0,Z(`toast`,{msg:`${n.name} connected! Delivering passengers will restore trust (500 pax per -1 Lost/min penalty).`,kind:`good`,key:`surge-reconnect:${t}`}))}for(let[r,i]of Object.entries(n.surges)){let a=e.maps[i.mapKey]?.nodes[r];if(!a){delete n.surges[r];continue}if(a.station&&Am(e,i.mapKey,r).length>0){i.frustrated?Z(`toast`,{msg:`Transit connected to ${a.name}! Frustration cleared.`,kind:`good`,key:`surge-cleared:${r}`}):(e.cash+=zm,Z(`toast`,{msg:`SURGE FULFILLED! ${a.name} connected — +${J(zm)} grant!`,kind:`good`,key:`surge-fulfilled:${r}`})),a.surgeActive=!1,a.surgeFrustrated=!1,delete n.surges[r];continue}if(i.frustrated){i.frustrationTimer-=t,a.frustrationTimer=Math.max(0,Math.ceil(i.frustrationTimer));let o=t/60*Bm;e.totalLost+=o,um(e),e.lostWindow.push([e.simTime,o]),i.frustrationTimer<=0&&(n.abandonedNodes[r]={penalty:5,delivered:0,connected:!1,name:a.name,mapKey:i.mapKey},n.abandonedCount=Object.keys(n.abandonedNodes).length,Z(`toast`,{msg:`Citizens in ${a.name} gave up! Strike added (+5 Lost/min penalty).`,kind:`bad`,key:`surge-abandoned:${r}`}),a.surgeActive=!1,a.surgeFrustrated=!1,a.surgeAbandoned=!0,delete n.surges[r])}else if(i.timer-=t,a.surgeTimer=Math.max(0,Math.ceil(i.timer)),i.timer<=0){i.frustrated=!0,i.frustrationTimer=Rm,a.surgeActive=!1,a.surgeFrustrated=!0;let e=r,t=i.mapKey;Z(`toast`,{msg:`SURGE EXPIRED! Citizens in ${a.name} are frustrated (+${Bm} Lost/min)!`,kind:`bad`,key:`surge-expired:${r}`,action:{label:`View City`,onClick:()=>window.game?.panToNode(e,t)}})}}if(e.simTime>=n.nextVipSurgeTime&&!n.vipSurge){n.nextVipSurgeTime=e.simTime+Um();let t=Object.values(i.nodes).filter(t=>t.station&&Am(e,r,t.id).length>0&&!t.surgeActive&&!t.surgeFrustrated&&!t.vipSurgeActive);if(t.length>0){let e=t[Math.floor(Math.random()*t.length)],i=Hm(e.id,e.name);n.vipSurge={nodeId:e.id,mapKey:r,timer:Wm,title:i,name:e.name},e.vipSurgeActive=!0,e.vipSurgeTimer=Wm,e.vipEventTitle=i,e.vipHadCrowding=!1;let a=e.id,o=r;Z(`toast`,{msg:`VIP SURGE: ${i} — 4.0× demand for 120s!`,kind:`good`,key:`vip-surge:${e.id}`,action:{label:`View City`,onClick:()=>window.game?.panToNode(a,o)}})}}if(n.vipSurge){let r=e.maps[n.vipSurge.mapKey]?.nodes[n.vipSurge.nodeId];r?(n.vipSurge.timer-=t,r.vipSurgeTimer=Math.max(0,Math.ceil(n.vipSurge.timer)),r.crowded&&(r.vipHadCrowding=!0),n.vipSurge.timer<=0&&(r.vipHadCrowding?Z(`toast`,{msg:`VIP SURGE ENDED! ${r.name} experienced station overcrowding during event.`,kind:`bad`,key:`vip-ended:${r.id}`}):(e.cash+=Gm,Z(`toast`,{msg:`VIP SURGE FULFILLED! ${r.name} serviced — +${J(Gm)} grant!`,kind:`good`,key:`vip-fulfilled:${r.id}`})),r.vipSurgeActive=!1,r.vipEventTitle=``,n.vipSurge=null)):n.vipSurge=null}}}var qm=0;function Jm(e){let t=e/240*Math.PI*2;return .75+.45*Math.max(0,Math.sin(t))+.25*Math.max(0,Math.sin(t*2+1.3))}function Ym(e,t){if(e.gameOver||e.speed===0)return;let n=t*e.speed;for(rh(e,n),qm+=n;qm>=Pu.tickSeconds;){qm-=Pu.tickSeconds;let t=Zm(e,Pu.tickSeconds);if(!e.clockStarted){if(t===0)continue;e.clockStarted=!0,Z(`toast`,{msg:`First riders arrived — clock started`,kind:`good`})}e.simTime+=Pu.tickSeconds,Qm(e,Pu.tickSeconds)}}function Xm(e){return e.clockStarted?e.simTime:0}function Zm(e,t){let n=Jm(e.simTime),r=0;for(let i of[`usa`,`nyc`]){let a=e.maps[i];for(let o of Object.values(a.nodes)){if(!o.station||(o.spawnAcc+=sd(o,e)*Ku(a.fareMult)*Pu.demandScale[i]*Ru(e).demandScaleMult*n*t,o.spawnAcc<1))continue;let s=Math.floor(o.spawnAcc);o.spawnAcc-=s,r+=s;let c=Am(e,i,o.id);if(c.length===0){let t=`isolated:${o.id}`,n=o.waiting.find(e=>e.dest===t);n?(n.count+=s,n.since=Math.min(n.since??e.simTime,e.simTime)):o.waiting.push({count:s,dest:t,fareDist:0,since:e.simTime});continue}let l=0,u=c.map(t=>{let n=sd(a.nodes[t.id],e)**1.2/(.6+t.dist/50);return l+=n,n}),d=Math.random()*l,f=0;for(let e=0;e<u.length;e++)if(d-=u[e],d<=0){f=e;break}let p=c[f],m=o.waiting.find(e=>e.dest===p.id);m?(m.count+=s,m.since=Math.min(m.since??e.simTime,e.simTime)):o.waiting.push({count:s,dest:p.id,fareDist:p.dist,since:e.simTime})}}return r}function Qm(e,t){if(e.activeBond&&(e.activeBond.timeRemaining-=t,e.activeBond.timeRemaining<=0))if(e.cash>=e.activeBond.principal){e.cash-=e.activeBond.principal;let t=e.activeBond.principal;e.activeBond=null,Z(`toast`,{msg:`Bond Repaid: ${J(t)} remaining principal automatically paid off!`,kind:`good`})}else{e.surgeState||={nextSurgeTime:120,surges:{},abandonedNodes:{},abandonedCount:0},e.surgeState.abandonedNodes||(e.surgeState.abandonedNodes={});let t=`bond_default_${Date.now()}`;e.surgeState.abandonedNodes[t]={penalty:5,delivered:0,connected:!1,name:`Bond Default`,mapKey:`usa`},e.surgeState.abandonedCount=Object.keys(e.surgeState.abandonedNodes).length,e.activeBond.timeRemaining=300,Z(`toast`,{msg:`BOND DEFAULT! Suffer +1 Strike. Loan extended 5 minutes.`,kind:`bad`}),e.surgeState.abandonedCount>=5&&(e.gameOver=!0,e.collapseReason=`surge`,e.survivalTime=e.simTime,Z(`networkCollapse`))}$m(e,`usa`,e.maps.usa,t),$m(e,`nyc`,e.maps.nyc,t),Km(e,t);let n=id(e);for(let r of[`usa`,`nyc`]){let i=e.maps[r];for(let r of Object.values(i.edges))e.cash-=ku[r.type].maintPerUnitPerMin*r.length*(t/60)*n}for(let r of Object.values(e.trains))e.cash-=ju[r.tier].opsPerMin*(t/60)*n;Ru(e).bankruptcy&&(e.cash<Mu.debtLimit?(e.debtTimer+=t,e.debtTimer>Mu.debtGraceSec?(e.gameOver=!0,Z(`gameOver`)):Math.floor(e.debtTimer)!==Math.floor(e.debtTimer-t)&&Z(`toast`,{msg:`Deep in debt! Bankruptcy in ${Math.ceil(Mu.debtGraceSec-e.debtTimer)}s`,kind:`bad`})):e.debtTimer=0),uh(e,t),Ru(e).id===`survival`&&lm(e)}function $m(e,t,n,r){let i=qu(e,t);for(let a of Object.values(n.nodes)){if(!a.station)continue;let n=a.waiting.reduce((e,t)=>e+t.count,0),o=ld(t,a,e);n>o?!a.crowdPendingSince&&!a.crowded&&(a.crowdPendingSince=e.simTime):a.crowdPendingSince=void 0;let s=a.crowdPendingSince!=null&&e.simTime-a.crowdPendingSince>=3;if(a.crowded=a.crowded&&n>o*.9||s,a.crowded?a.crowdedWarned||(a.crowdedWarned=!0,dm(e),Z(`toast`,{msg:`${a.name} is overcrowded — riders are giving up`,kind:`bad`,key:`crowded:${t}:${a.id}`})):a.crowdedWarned=!1,!a.crowded)continue;let c=n/Math.max(1,o);for(let t of a.waiting){let n=t.since??e.simTime;if(e.simTime-n<i)continue;let a=Math.min(t.count,Math.round(t.count*Fu.dropoutRatePerSec*Math.min(2,c)*r));a>0&&(t.count-=a,e.totalLost+=a,um(e),Bu(e)&&e.lostWindow.push([e.simTime,a]))}a.waiting=a.waiting.filter(e=>e.count>0)}}function eh(e,t){let n=e.maps[t.map];if(t.route.length<2)return null;let r=[],i=[...t.route,t.route[0]];for(let e=0;e<i.length-1;e++){let a=mp(n,i[e],i[e+1],t.tier);if(!a)return null;e===0?r.push(...a.path):r.push(...a.path.slice(1))}return r}function th(e,t,n){t.route=n;let r=eh(e,t);return r?(t.path=r,t.seg=0,t.prog=0,t.dwell=0,t.state=`run`,!0):(t.path=null,t.state=`idle`,!1)}function nh(e){for(let t of Object.values(e.trains)){if(t.route.length<2)continue;let n=eh(e,t);n?t.state===`idle`||!t.path?(t.path=n,t.seg=0,t.prog=0,t.state=`run`):(t.path=n,t.seg>=n.length-1&&(t.seg=0,t.prog=0)):(t.path=null,t.state=`idle`,Z(`toast`,{msg:`${ju[t.tier].short} train #${t.num} lost its route`,kind:`bad`}))}}function rh(e,t){for(let n of Object.values(e.trains)){if(n.state===`idle`||!n.path)continue;let r=e.maps[n.map],i=ju[n.tier].speed[n.map];if(n.state===`dwell`)if(n.dwell-=t,n.dwell<=0)n.state=`run`;else continue;let a=i*t;for(;a>0&&n.state===`run`;){let t=r.nodes[n.path[n.seg]],i=r.nodes[n.path[n.seg+1]];if(!t||!i){n.state=`idle`;break}let o=Math.hypot(i.x-t.x,i.z-t.z)-n.prog;if(a<o)n.prog+=a,a=0;else{a-=o,n.seg++,n.prog=0,n.seg>=n.path.length-1&&(n.seg=0);let t=n.path[n.seg];n.route.includes(t)&&(ah(e,n,t),n.state=`dwell`,n.dwell=Mu.dwellTime,a=0)}}}}function ih(e){return Math.max(1,e)**.7*2.5}function ah(e,t,n){let r=e.maps[t.map],i=r.nodes[n],a=ju[t.tier],o=t.map,s=0,c=0,l=[];for(let u of t.passengers){if(u.dest===n){s+=u.count,c+=u.count*ih(u.fareDist)*oh(o)*a.fareMult*r.fareMult;continue}if(jm(e,o,t,n,u.dest)){Mm(i,u.count,u.dest,u.fareDist,e.simTime);continue}l.push(u)}if(t.passengers=l,s>0){let r=0;e.activeBond&&(r=Math.round(c*e.activeBond.taxRate),c-=r,e.activeBond.principal=Math.max(0,e.activeBond.principal-r),e.activeBond.principal<=0&&(e.activeBond=null,Z(`toast`,{msg:`🎉 Transit Bond fully paid off through passenger taxes!`,kind:`good`}))),e.cash+=c,e.totalDelivered+=s,e.totalRevenue+=c,i.servedTotal+=s,t.revenueTotal+=c,e.incomeWindow.push([e.simTime,c]),Z(`delivered`,{train:t,node:i,delivered:s,revenue:c});let a=e.surgeState?.abandonedNodes?.[n];if(a&&a.connected)for(a.delivered+=s;a.delivered>=500&&a.penalty>0;)if(a.delivered-=500,--a.penalty,a.penalty>0)Z(`toast`,{msg:`📉 ${a.name} trust restoring! Penalty reduced to +${a.penalty} Lost/min.`,kind:`good`,key:`surge-trust:${n}:${a.penalty}`});else{delete e.surgeState.abandonedNodes[n],e.surgeState.abandonedCount=Object.keys(e.surgeState.abandonedNodes).length,i.surgeRedeeming=!1,i.surgeAbandoned=!1,Z(`toast`,{msg:`🎉 ${a.name} fully redeemed! Abandoned strike cleared.`,kind:`good`,key:`surge-redeemed:${n}`});break}}let u=a.capacity-t.passengers.reduce((e,t)=>e+t.count,0);if(!(u<=0))for(let a of[...i.waiting]){if(u<=0)break;if(!km(e,o,t,n,a.dest))continue;let s=Math.min(a.count,u);a.count-=s,u-=s;let{dist:c}=vp(o,r,n),l=c[a.dest]??a.fareDist,d=t.passengers.find(e=>e.dest===a.dest);d?d.count+=s:t.passengers.push({count:s,dest:a.dest,fareDist:l}),a.count<=0&&i.waiting.splice(i.waiting.indexOf(a),1)}}function oh(e){return Mu.farePerUnit[e]}function sh(e){let t=e.simTime-60;return e.incomeWindow=e.incomeWindow.filter(([e])=>e>=t),e.incomeWindow.reduce((e,[,t])=>e+t,0)}function ch(e){let t=e.surgeState;return!t||!t.abandonedNodes?0:Object.values(t.abandonedNodes).reduce((e,t)=>e+(t.penalty||0),0)}function lh(e){let{lostWindowSec:t}=Vu(e),n=e.simTime-t;e.lostWindow=e.lostWindow.filter(([e])=>e>=n);let r=e.lostWindow.reduce((e,[,t])=>e+t,0),i=ch(e);return Math.round(r+i)}function uh(e,t){if(!Bu(e)||e.gameOver)return;let n=lh(e),{rateThresholdPerMin:r,collapseGraceSec:i,breachDecayFactor:a}=Vu(e),o=e.breachTimer;if(n>=r){e.breachTimer+=t;let n=i*.5;if(o<n&&e.breachTimer>=n&&Z(`toast`,{msg:`Riders leaving faster than you can recover — fix overcrowding`,kind:`bad`,key:`network-breach-warn`}),e.breachTimer>=i){let t=dh(e);e.breachTimer=0,t>=5?(e.gameOver=!0,e.collapseReason=`network`,e.survivalTime=e.simTime,Z(`networkCollapse`)):Z(`toast`,{msg:`Sustained rider losses became a permanent strike (+5 Lost/min). Stabilize before the next one.`,kind:`bad`,key:`network-pressure-strike:${e.pressureStrikeCount}`})}}else e.breachTimer=Math.max(0,e.breachTimer-t*a)}function dh(e){return e.surgeState||={nextSurgeTime:e.simTime+120,nextVipSurgeTime:e.simTime+900,surges:{},abandonedNodes:{},abandonedCount:0,vipSurge:null},e.surgeState.abandonedNodes||(e.surgeState.abandonedNodes={}),e.pressureStrikeCount=(e.pressureStrikeCount||0)+1,e.surgeState.abandonedNodes[`pressure_strike_${e.pressureStrikeCount}`]={penalty:5,delivered:0,connected:!1,permanent:!0,name:`Network pressure ${e.pressureStrikeCount}`,mapKey:e.currentMap||`usa`},e.surgeState.abandonedCount=Object.keys(e.surgeState.abandonedNodes).length,e.surgeState.abandonedCount}function fh(e){if(!Bu(e))return 0;let{collapseGraceSec:t}=Vu(e);return t<=0?0:Math.min(1,e.breachTimer/t)}var ph={type:`change`},mh={type:`start`},hh={type:`end`},gh=new Sn,_h=new _i,vh=Math.cos(70*yt.DEG2RAD),yh=class extends Ke{constructor(n,r){super(),this.object=n,this.domElement=r,this.domElement.style.touchAction=`none`,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener(`keydown`,Ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener(`keydown`,Ee),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ph),i.update(),o=a.NONE},this.update=function(){let e=new V,t=new Kt().setFromUnitVectors(n.up,new V(0,1,0)),r=t.clone().invert(),f=new V,p=new Kt,m=new V,h=2*Math.PI;return function(g=null){let _=i.object.position;e.copy(_).sub(i.target),e.applyQuaternion(t),c.setFromVector3(e),i.autoRotate&&o===a.NONE&&k(D(g)),i.enableDamping?(c.theta+=l.theta*i.dampingFactor,c.phi+=l.phi*i.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let v=i.minAzimuthAngle,y=i.maxAzimuthAngle;isFinite(v)&&isFinite(y)&&(v<-Math.PI?v+=h:v>Math.PI&&(v-=h),y<-Math.PI?y+=h:y>Math.PI&&(y-=h),v<=y?c.theta=Math.max(v,Math.min(y,c.theta)):c.theta=c.theta>(v+y)/2?Math.max(v,c.theta):Math.min(y,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let b=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)c.radius=re(c.radius);else{let e=c.radius;c.radius=re(c.radius*u),b=e!=c.radius}if(e.setFromSpherical(c),e.applyQuaternion(r),_.copy(i.target).add(e),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&C){let t=null;if(i.object.isPerspectiveCamera){let n=e.length();t=re(n*u);let r=n-t;i.object.position.addScaledVector(x,r),i.object.updateMatrixWorld(),b=!!r}else if(i.object.isOrthographicCamera){let n=new V(S.x,S.y,0);n.unproject(i.object);let r=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),b=r!==i.object.zoom;let a=new V(S.x,S.y,0);a.unproject(i.object),i.object.position.sub(a).add(n),i.object.updateMatrixWorld(),t=e.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),i.zoomToCursor=!1;t!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(t).add(i.object.position):(gh.origin.copy(i.object.position),gh.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(gh.direction))<vh?n.lookAt(i.target):(_h.setFromNormalAndCoplanarPoint(i.object.up,i.target),gh.intersectPlane(_h,i.target))))}else if(i.object.isOrthographicCamera){let e=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),e!==i.object.zoom&&(i.object.updateProjectionMatrix(),b=!0)}return u=1,C=!1,b||f.distanceToSquared(i.object.position)>s||8*(1-p.dot(i.object.quaternion))>s||m.distanceToSquared(i.target)>s?(i.dispatchEvent(ph),f.copy(i.object.position),p.copy(i.object.quaternion),m.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener(`contextmenu`,ke),i.domElement.removeEventListener(`pointerdown`,L),i.domElement.removeEventListener(`pointercancel`,ye),i.domElement.removeEventListener(`wheel`,Se),i.domElement.removeEventListener(`pointermove`,R),i.domElement.removeEventListener(`pointerup`,ye),i.domElement.getRootNode().removeEventListener(`keydown`,we,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener(`keydown`,Ee),i._domElementKeyEvents=null)};let i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},o=a.NONE,s=1e-6,c=new Ou,l=new Ou,u=1,d=new V,f=new z,p=new z,m=new z,h=new z,g=new z,_=new z,v=new z,y=new z,b=new z,x=new V,S=new z,C=!1,w=[],T={},E=!1;function D(e){return e===null?2*Math.PI/60/60*i.autoRotateSpeed:2*Math.PI/60*i.autoRotateSpeed*e}function O(e){let t=Math.abs(e*.01);return .95**(i.zoomSpeed*t)}function k(e){l.theta-=e}function A(e){l.phi-=e}let j=function(){let e=new V;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),ee=function(){let e=new V;return function(t,n){i.screenSpacePanning===!0?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(i.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),M=function(){let e=new V;return function(t,n){let r=i.domElement;if(i.object.isPerspectiveCamera){let a=i.object.position;e.copy(a).sub(i.target);let o=e.length();o*=Math.tan(i.object.fov/2*Math.PI/180),j(2*t*o/r.clientHeight,i.object.matrix),ee(2*n*o/r.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(t*(i.object.right-i.object.left)/i.object.zoom/r.clientWidth,i.object.matrix),ee(n*(i.object.top-i.object.bottom)/i.object.zoom/r.clientHeight,i.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),i.enablePan=!1)}}();function N(e){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),i.enableZoom=!1)}function te(e){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),i.enableZoom=!1)}function ne(e,t){if(!i.zoomToCursor)return;C=!0;let n=i.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,o=n.width,s=n.height;S.x=r/o*2-1,S.y=-(a/s)*2+1,x.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function re(e){return Math.max(i.minDistance,Math.min(i.maxDistance,e))}function ie(e){f.set(e.clientX,e.clientY)}function ae(e){ne(e.clientX,e.clientX),v.set(e.clientX,e.clientY)}function oe(e){h.set(e.clientX,e.clientY)}function se(e){p.set(e.clientX,e.clientY),m.subVectors(p,f).multiplyScalar(i.rotateSpeed);let t=i.domElement;k(2*Math.PI*m.x/t.clientHeight),A(2*Math.PI*m.y/t.clientHeight),f.copy(p),i.update()}function P(e){y.set(e.clientX,e.clientY),b.subVectors(y,v),b.y>0?N(O(b.y)):b.y<0&&te(O(b.y)),v.copy(y),i.update()}function ce(e){g.set(e.clientX,e.clientY),_.subVectors(g,h).multiplyScalar(i.panSpeed),M(_.x,_.y),h.copy(g),i.update()}function le(e){ne(e.clientX,e.clientY),e.deltaY<0?te(O(e.deltaY)):e.deltaY>0&&N(O(e.deltaY)),i.update()}function ue(e){let t=!1;switch(e.code){case i.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):M(0,i.keyPanSpeed),t=!0;break;case i.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):M(0,-i.keyPanSpeed),t=!0;break;case i.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):M(i.keyPanSpeed,0),t=!0;break;case i.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):M(-i.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),i.update())}function de(e){if(w.length===1)f.set(e.pageX,e.pageY);else{let t=Pe(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);f.set(n,r)}}function fe(e){if(w.length===1)h.set(e.pageX,e.pageY);else{let t=Pe(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);h.set(n,r)}}function pe(e){let t=Pe(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);v.set(0,i)}function me(e){i.enableZoom&&pe(e),i.enablePan&&fe(e)}function F(e){i.enableZoom&&pe(e),i.enableRotate&&de(e)}function he(e){if(w.length==1)p.set(e.pageX,e.pageY);else{let t=Pe(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);p.set(n,r)}m.subVectors(p,f).multiplyScalar(i.rotateSpeed);let t=i.domElement;k(2*Math.PI*m.x/t.clientHeight),A(2*Math.PI*m.y/t.clientHeight),f.copy(p)}function ge(e){if(w.length===1)g.set(e.pageX,e.pageY);else{let t=Pe(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);g.set(n,r)}_.subVectors(g,h).multiplyScalar(i.panSpeed),M(_.x,_.y),h.copy(g)}function _e(e){let t=Pe(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);y.set(0,a),b.set(0,(y.y/v.y)**+i.zoomSpeed),N(b.y),v.copy(y),ne((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function I(e){i.enableZoom&&_e(e),i.enablePan&&ge(e)}function ve(e){i.enableZoom&&_e(e),i.enableRotate&&he(e)}function L(e){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(e.pointerId),i.domElement.addEventListener(`pointermove`,R),i.domElement.addEventListener(`pointerup`,ye)),!Me(e)&&(Ae(e),e.pointerType===`touch`?De(e):be(e)))}function R(e){i.enabled!==!1&&(e.pointerType===`touch`?Oe(e):xe(e))}function ye(e){switch(je(e),w.length){case 0:i.domElement.releasePointerCapture(e.pointerId),i.domElement.removeEventListener(`pointermove`,R),i.domElement.removeEventListener(`pointerup`,ye),i.dispatchEvent(hh),o=a.NONE;break;case 1:let t=w[0],n=T[t];De({pointerId:t,pageX:n.x,pageY:n.y});break}}function be(t){let n;switch(t.button){case 0:n=i.mouseButtons.LEFT;break;case 1:n=i.mouseButtons.MIDDLE;break;case 2:n=i.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(i.enableZoom===!1)return;ae(t),o=a.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(i.enablePan===!1)return;oe(t),o=a.PAN}else{if(i.enableRotate===!1)return;ie(t),o=a.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(i.enableRotate===!1)return;ie(t),o=a.ROTATE}else{if(i.enablePan===!1)return;oe(t),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(mh)}function xe(e){switch(o){case a.ROTATE:if(i.enableRotate===!1)return;se(e);break;case a.DOLLY:if(i.enableZoom===!1)return;P(e);break;case a.PAN:if(i.enablePan===!1)return;ce(e);break}}function Se(e){i.enabled===!1||i.enableZoom===!1||o!==a.NONE||(e.preventDefault(),i.dispatchEvent(mh),le(Ce(e)),i.dispatchEvent(hh))}function Ce(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!E&&(n.deltaY*=10),n}function we(e){e.key===`Control`&&(E=!0,i.domElement.getRootNode().addEventListener(`keyup`,Te,{passive:!0,capture:!0}))}function Te(e){e.key===`Control`&&(E=!1,i.domElement.getRootNode().removeEventListener(`keyup`,Te,{passive:!0,capture:!0}))}function Ee(e){i.enabled===!1||i.enablePan===!1||ue(e)}function De(e){switch(Ne(e),w.length){case 1:switch(i.touches.ONE){case t.ROTATE:if(i.enableRotate===!1)return;de(e),o=a.TOUCH_ROTATE;break;case t.PAN:if(i.enablePan===!1)return;fe(e),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(i.touches.TWO){case t.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;me(e),o=a.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(e),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(mh)}function Oe(e){switch(Ne(e),o){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;he(e),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ge(e),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;I(e),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(e),i.update();break;default:o=a.NONE}}function ke(e){i.enabled!==!1&&e.preventDefault()}function Ae(e){w.push(e.pointerId)}function je(e){delete T[e.pointerId];for(let t=0;t<w.length;t++)if(w[t]==e.pointerId){w.splice(t,1);return}}function Me(e){for(let t=0;t<w.length;t++)if(w[t]==e.pointerId)return!0;return!1}function Ne(e){let t=T[e.pointerId];t===void 0&&(t=new z,T[e.pointerId]=t),t.set(e.pageX,e.pageY)}function Pe(e){let t=e.pointerId===w[0]?w[1]:w[0];return T[t]}i.domElement.addEventListener(`contextmenu`,ke),i.domElement.addEventListener(`pointerdown`,L),i.domElement.addEventListener(`pointercancel`,ye),i.domElement.addEventListener(`wheel`,Se,{passive:!1}),i.domElement.getRootNode().addEventListener(`keydown`,we,{passive:!0,capture:!0}),this.update()}};function bh(){return window.matchMedia(`(pointer: coarse)`).matches}function xh(){return window.matchMedia(`(max-width: 768px)`).matches}function Sh(){return bh()||xh()}function Ch(){return bh()?18:6}function wh(){let e=new Os({antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:!0}),t=Sh()?1.5:2,n=Math.max(1.5,Math.min(window.devicePixelRatio||1,t));return e.setPixelRatio(n),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=2,document.getElementById(`app`).appendChild(e.domElement),e}function Th(e,t){let n=new As;n.background=new H(t.background),n.fog=new ks(t.background,t.fogNear,t.fogFar);let r=new ci(52,window.innerWidth/window.innerHeight,.5,3e3);r.position.copy(t.cameraPos);let i=new yh(r,e.domElement);i.target.copy(t.target),i.enableDamping=!0,i.dampingFactor=.08,i.maxPolarAngle=1.32,i.minDistance=t.minDist,i.maxDistance=t.maxDist,i.enabled=!1,i.update();let a=new lu(13621482,1.15);n.add(a);let o=new cu(16773848,2);o.position.set(-120,180,-80),o.castShadow=!0,o.shadow.mapSize.set(Sh()?1024:2048,Sh()?1024:2048);let s=t.shadowExtent;o.shadow.camera.left=-s,o.shadow.camera.right=s,o.shadow.camera.top=s,o.shadow.camera.bottom=-s,o.shadow.camera.far=600,o.shadow.bias=-5e-4,n.add(o);let c=new K;n.add(c);let l=new K;n.add(l);let u=new K;n.add(u);let d=new K;return n.add(d),{scene:n,camera:r,controls:i,pickables:c,trackGroup:l,trainGroup:u,previewGroup:d}}function Eh(e,t,n=.15){let r=new Ci(e,e,48,48),i=new q({color:t,transparent:!0,opacity:.88});i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},i.userData.shader=e,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
       transformed.z += sin(position.x * 0.18 + uTime * 1.4) * 0.10
                      + cos(position.y * 0.22 + uTime * 1.1) * 0.10;`)};let a=new U(r,i);return a.rotation.x=-Math.PI/2,a.position.y=n,a.receiveShadow=!0,a.userData.isWater=!0,a}function Dh(e,t){e.traverse(e=>{e.userData.isWater&&e.material.userData.shader&&(e.material.userData.shader.uniforms.uTime.value=t)})}function Oh(e){return e}function kh(e){if(e==null)return Oh;var t,n,r=e.scale[0],i=e.scale[1],a=e.translate[0],o=e.translate[1];return function(e,s){s||(t=n=0);var c=2,l=e.length,u=Array(l);for(u[0]=(t+=e[0])*r+a,u[1]=(n+=e[1])*i+o;c<l;)u[c]=e[c],++c;return u}}function Ah(e,t){for(var n,r=e.length,i=r-t;i<--r;)n=e[i],e[i++]=e[r],e[r]=n}function jh(e,t){return typeof t==`string`&&(t=e.objects[t]),t.type===`GeometryCollection`?{type:`FeatureCollection`,features:t.geometries.map(function(t){return Mh(e,t)})}:Mh(e,t)}function Mh(e,t){var n=t.id,r=t.bbox,i=t.properties==null?{}:t.properties,a=Nh(e,t);return n==null&&r==null?{type:`Feature`,properties:i,geometry:a}:r==null?{type:`Feature`,id:n,properties:i,geometry:a}:{type:`Feature`,id:n,bbox:r,properties:i,geometry:a}}function Nh(e,t){var n=kh(e.transform),r=e.arcs;function i(e,t){t.length&&t.pop();for(var i=r[e<0?~e:e],a=0,o=i.length;a<o;++a)t.push(n(i[a],a));e<0&&Ah(t,o)}function a(e){return n(e)}function o(e){for(var t=[],n=0,r=e.length;n<r;++n)i(e[n],t);return t.length<2&&t.push(t[0]),t}function s(e){for(var t=o(e);t.length<4;)t.push(t[0]);return t}function c(e){return e.map(s)}function l(e){var t=e.type,n;switch(t){case`GeometryCollection`:return{type:t,geometries:e.geometries.map(l)};case`Point`:n=a(e.coordinates);break;case`MultiPoint`:n=e.coordinates.map(a);break;case`LineString`:n=o(e.arcs);break;case`MultiLineString`:n=e.arcs.map(o);break;case`Polygon`:n=c(e.arcs);break;case`MultiPolygon`:n=e.arcs.map(c);break;default:return null}return{type:t,coordinates:n}}return l(t)}function Ph(e,t){var n={},r={},i={},a=[],o=-1;t.forEach(function(n,r){var i=e.arcs[n<0?~n:n],a;i.length<3&&!i[1][0]&&!i[1][1]&&(a=t[++o],t[o]=n,t[r]=a)}),t.forEach(function(e){var t=s(e),n=t[0],a=t[1],o,c;if(o=i[n])if(delete i[o.end],o.push(e),o.end=a,c=r[a]){delete r[c.start];var l=c===o?o:o.concat(c);r[l.start=o.start]=i[l.end=c.end]=l}else r[o.start]=i[o.end]=o;else if(o=r[a])if(delete r[o.start],o.unshift(e),o.start=n,c=i[n]){delete i[c.end];var u=c===o?o:c.concat(o);r[u.start=c.start]=i[u.end=o.end]=u}else r[o.start]=i[o.end]=o;else o=[e],r[o.start=n]=i[o.end=a]=o});function s(t){var n=e.arcs[t<0?~t:t],r=n[0],i;return e.transform?(i=[0,0],n.forEach(function(e){i[0]+=e[0],i[1]+=e[1]})):i=n[n.length-1],t<0?[i,r]:[r,i]}function c(e,t){for(var r in e){var i=e[r];delete t[i.start],delete i.start,delete i.end,i.forEach(function(e){n[e<0?~e:e]=1}),a.push(i)}}return c(i,r),c(r,i),t.forEach(function(e){n[e<0?~e:e]||a.push([e])}),a}function Fh(e){return Nh(e,Ih.apply(this,arguments))}function Ih(e,t,n){var r,i,a;if(arguments.length>1)r=Lh(e,t,n);else for(i=0,r=Array(a=e.arcs.length);i<a;++i)r[i]=i;return{type:`MultiLineString`,arcs:Ph(e,r)}}function Lh(e,t,n){var r=[],i=[],a;function o(e){var t=e<0?~e:e;(i[t]||(i[t]=[])).push({i:e,g:a})}function s(e){e.forEach(o)}function c(e){e.forEach(s)}function l(e){e.forEach(c)}function u(e){switch(a=e,e.type){case`GeometryCollection`:e.geometries.forEach(u);break;case`LineString`:s(e.arcs);break;case`MultiLineString`:case`Polygon`:c(e.arcs);break;case`MultiPolygon`:l(e.arcs);break}}return u(t),i.forEach(n==null?function(e){r.push(e[0].i)}:function(e){n(e[0].g,e[e.length-1].g)&&r.push(e[0].i)}),r}var Rh={type:`Topology`,bbox:[-179.14733999999999,-14.552548999999999,179.77847,71.352561],transform:{scale:[.003589293992939929,.0008590596905969058],translate:[-179.14733999999999,-14.552548999999999]},objects:{states:{type:`GeometryCollection`,geometries:[{type:`MultiPolygon`,arcs:[[[0]],[[1,2,3,4,5]]],id:`01`,properties:{name:`Alabama`}},{type:`MultiPolygon`,arcs:[[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92]],[[93]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[114]],[[115]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141]],[[142]]],id:`02`,properties:{name:`Alaska`}},{type:`Polygon`,arcs:[[143,144,145,146,147]],id:`04`,properties:{name:`Arizona`}},{type:`Polygon`,arcs:[[148,149,150,151,152,153]],id:`08`,properties:{name:`Colorado`}},{type:`MultiPolygon`,arcs:[[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[161]],[[162]],[[163,164,-4]]],id:`12`,properties:{name:`Florida`}},{type:`Polygon`,arcs:[[165,166,167,168,-164,-3]],id:`13`,properties:{name:`Georgia`}},{type:`Polygon`,arcs:[[169,170,171,172,173]],id:`18`,properties:{name:`Indiana`}},{type:`Polygon`,arcs:[[174,175,176,-151]],id:`20`,properties:{name:`Kansas`}},{type:`MultiPolygon`,arcs:[[[177]],[[178]],[[179]],[[180]],[[181]],[[182]],[[183]],[[184,185]]],id:`23`,properties:{name:`Maine`}},{type:`MultiPolygon`,arcs:[[[186]],[[187]],[[188,189,190,191,192,193,194,195]]],id:`25`,properties:{name:`Massachusetts`}},{type:`Polygon`,arcs:[[196,197,198,199,200]],id:`27`,properties:{name:`Minnesota`}},{type:`Polygon`,arcs:[[201,202,203,204,205,206,207,208]],id:`34`,properties:{name:`New Jersey`}},{type:`MultiPolygon`,arcs:[[[209]],[[210]],[[211,212,213,-167,214]]],id:`37`,properties:{name:`North Carolina`}},{type:`Polygon`,arcs:[[215,-201,216,217]],id:`38`,properties:{name:`North Dakota`}},{type:`Polygon`,arcs:[[-152,-177,218,219,220,221]],id:`40`,properties:{name:`Oklahoma`}},{type:`Polygon`,arcs:[[222,223,-204,224,225,226,227]],id:`42`,properties:{name:`Pennsylvania`}},{type:`Polygon`,arcs:[[228,-217,-200,229,230,231]],id:`46`,properties:{name:`South Dakota`}},{type:`Polygon`,arcs:[[-221,232,233,234,235,236,237]],id:`48`,properties:{name:`Texas`}},{type:`Polygon`,arcs:[[-232,238,-149,239,240,241]],id:`56`,properties:{name:`Wyoming`}},{type:`Polygon`,arcs:[[-195,242,243,244]],id:`09`,properties:{name:`Connecticut`}},{type:`Polygon`,arcs:[[245,246,247,248,249,250,251,-219,-176,252]],id:`29`,properties:{name:`Missouri`}},{type:`Polygon`,arcs:[[253,-227,254,255,256]],id:`54`,properties:{name:`West Virginia`}},{type:`Polygon`,arcs:[[257,258,259,-174,260,-247]],id:`17`,properties:{name:`Illinois`}},{type:`Polygon`,arcs:[[-153,-222,-238,261,-147]],id:`35`,properties:{name:`New Mexico`}},{type:`Polygon`,arcs:[[-252,262,263,264,-235,233,-233,-220]],id:`05`,properties:{name:`Arkansas`}},{type:`MultiPolygon`,arcs:[[[265]],[[266]],[[267]],[[268]],[[269]],[[270]],[[271]],[[272]],[[273,274,275,-144,276]]],id:`06`,properties:{name:`California`}},{type:`MultiPolygon`,arcs:[[[-209,277]],[[-225,-203,278,279]]],id:`10`,properties:{name:`Delaware`}},{type:`Polygon`,arcs:[[280,281]],id:`11`,properties:{name:`District of Columbia`}},{type:`MultiPolygon`,arcs:[[[282]],[[283]],[[284]],[[285]],[[286]],[[287]],[[288]],[[289]]],id:`15`,properties:{name:`Hawaii`}},{type:`Polygon`,arcs:[[-199,290,-258,-246,291,-230]],id:`19`,properties:{name:`Iowa`}},{type:`MultiPolygon`,arcs:[[[-261,-173,292,-257,293,294,-248]],[[295,-250]]],id:`21`,properties:{name:`Kentucky`}},{type:`MultiPolygon`,arcs:[[[296,297]],[[298]],[[299]],[[-226,-280,300,301,302,303,-281,304,-255]]],id:`24`,properties:{name:`Maryland`}},{type:`MultiPolygon`,arcs:[[[305]],[[306]],[[307]],[[308]],[[309]],[[310]],[[311]],[[312]],[[313]],[[314,315,-171]],[[316]],[[317,318,319,320,321,322]]],id:`26`,properties:{name:`Michigan`}},{type:`MultiPolygon`,arcs:[[[323]],[[324]],[[325]],[[326]],[[-264,327,-6,328,329]]],id:`28`,properties:{name:`Mississippi`}},{type:`Polygon`,arcs:[[330,-218,-229,-242,331]],id:`30`,properties:{name:`Montana`}},{type:`Polygon`,arcs:[[332,-185,333,-190,334]],id:`33`,properties:{name:`New Hampshire`}},{type:`MultiPolygon`,arcs:[[[335]],[[336]],[[337]],[[338,-207]],[[339]],[[340]],[[341,342,-196,-245,343,-205,-224]]],id:`36`,properties:{name:`New York`}},{type:`MultiPolygon`,arcs:[[[344]],[[345]],[[-316,346,-228,-254,-293,-172]]],id:`39`,properties:{name:`Ohio`}},{type:`Polygon`,arcs:[[347,348,349,274,-275,-274,350]],id:`41`,properties:{name:`Oregon`}},{type:`Polygon`,arcs:[[-251,-296,-249,-295,351,-215,-166,-2,-328,-263]],id:`47`,properties:{name:`Tennessee`}},{type:`Polygon`,arcs:[[352,-240,-154,-146,353]],id:`49`,properties:{name:`Utah`}},{type:`MultiPolygon`,arcs:[[[354]],[[-302,355]],[[356,-297]],[[-256,-305,-282,-304,357,-212,-352,-294]]],id:`51`,properties:{name:`Virginia`}},{type:`MultiPolygon`,arcs:[[[358]],[[359]],[[360]],[[361]],[[362]],[[363]],[[364]],[[365]],[[366]],[[367]],[[368,-348,369]]],id:`53`,properties:{name:`Washington`}},{type:`MultiPolygon`,arcs:[[[370]],[[371]],[[372]],[[373]],[[374]],[[375]],[[376]],[[377]],[[378]],[[379]],[[380,-323,321,-321,319,-319,381,-259,-291,-198]]],id:`55`,properties:{name:`Wisconsin`}},{type:`MultiPolygon`,arcs:[[[382]],[[383]],[[384]]],id:`60`,properties:{name:`American Samoa`}},{type:`MultiPolygon`,arcs:[[[385]]],id:`66`,properties:{name:`Guam`}},{type:`MultiPolygon`,arcs:[[[386]],[[387]],[[388]],[[389]],[[390]],[[391]],[[392]],[[393]]],id:`69`,properties:{name:`Commonwealth of the Northern Mariana Islands`}},{type:`Polygon`,arcs:[[-231,-292,-253,-175,-150,-239]],id:`31`,properties:{name:`Nebraska`}},{type:`Polygon`,arcs:[[-214,394,-168]],id:`45`,properties:{name:`South Carolina`}},{type:`MultiPolygon`,arcs:[[[395]],[[396]],[[397]],[[398]],[[399]]],id:`72`,properties:{name:`Puerto Rico`}},{type:`MultiPolygon`,arcs:[[[400]],[[401]],[[402]]],id:`78`,properties:{name:`United States Virgin Islands`}},{type:`Polygon`,arcs:[[-369,403,-332,-241,-353,404,-349]],id:`16`,properties:{name:`Idaho`}},{type:`Polygon`,arcs:[[-275,-350,-405,-354,-145,-276]],id:`32`,properties:{name:`Nevada`}},{type:`Polygon`,arcs:[[405,-335,-189,-343]],id:`50`,properties:{name:`Vermont`}},{type:`MultiPolygon`,arcs:[[[406]],[[407]],[[408]],[[409]],[[410]],[[411]],[[412]],[[-265,-330,413,-236]]],id:`22`,properties:{name:`Louisiana`}},{type:`MultiPolygon`,arcs:[[[-192,414]],[[415]],[[416]],[[417]],[[-243,-194,418]]],id:`44`,properties:{name:`Rhode Island`}}]},nation:{type:`GeometryCollection`,geometries:[{type:`MultiPolygon`,arcs:[[[0]],[[164,4,328,413,236,261,147,276,350,369,403,330,215,196,380,317,381,259,169,314,346,222,341,405,332,185,333,190,414,192,418,243,343,205,338,207,277,201,278,300,355,302,357,212,394,168]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92]],[[93]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[114]],[[115]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141]],[[142]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[161]],[[162]],[[177]],[[178]],[[179]],[[180]],[[181]],[[182]],[[183]],[[186]],[[187]],[[209]],[[210]],[[265]],[[266]],[[267]],[[268]],[[269]],[[270]],[[271]],[[272]],[[282]],[[283]],[[284]],[[285]],[[286]],[[287]],[[288]],[[289]],[[297,356]],[[298]],[[299]],[[305]],[[306]],[[307]],[[308]],[[309]],[[310]],[[311]],[[312]],[[313]],[[316]],[[323]],[[324]],[[325]],[[326]],[[335]],[[336]],[[337]],[[339]],[[340]],[[344]],[[345]],[[354]],[[358]],[[359]],[[360]],[[361]],[[362]],[[363]],[[364]],[[365]],[[366]],[[367]],[[370]],[[371]],[[372]],[[373]],[[374]],[[375]],[[376]],[[377]],[[378]],[[379]],[[382]],[[383]],[[384]],[[385]],[[386]],[[387]],[[388]],[[389]],[[390]],[[391]],[[392]],[[393]],[[395]],[[396]],[[397]],[[398]],[[399]],[[400]],[[401]],[[402]],[[406]],[[407]],[[408]],[[409]],[[410]],[[411]],[[412]],[[415]],[[416]],[[417]]]}]}},arcs:[[[25302,52136],[56,31],[1,25],[14,-40],[-9,-28],[-10,16],[-18,-2],[-20,-17],[-14,15]],[[25338,57677],[0,15],[150,-6],[63,0],[160,-13],[93,-2],[37,2],[159,-4],[61,-5]],[[26061,57664],[15,-321],[23,-443],[18,-379],[13,-294],[15,-311],[33,-713],[9,-32],[-4,-36],[13,-45],[5,-149],[10,-72],[17,-69],[3,-82],[9,-36],[-10,-117],[18,-28],[12,-40],[-10,-52],[-11,0],[2,-24],[-14,-21],[-13,-52],[3,-56],[-2,-86],[-7,-86],[-14,-72],[-3,-45],[6,-124],[-2,-44],[19,-87],[3,-120],[-7,-57],[2,-43],[-8,-80],[1,-79],[-7,-21],[5,-51],[-3,-54],[20,-91],[7,-64],[2,-61]],[[26229,53027],[-67,0],[-71,-5],[-110,-4],[-174,0],[-135,7],[-166,-2],[3,-38],[-13,-115],[2,-23],[23,-79],[3,-41],[36,-80],[3,-69],[-15,-102],[3,-55],[20,-51],[-18,-35],[-8,-82],[-9,-15],[7,-24],[-15,-26]],[[25528,52188],[-38,-35],[-40,-24],[-56,-4],[18,41],[12,-26],[35,27],[3,34],[-15,48],[-7,43],[-20,47],[-7,90],[9,74],[-3,76],[-7,48],[-20,32],[-15,-46],[2,-38],[-9,-57],[1,-41],[-6,-32],[-1,-144],[-8,-66],[-15,-4],[1,36],[-20,40],[-15,-16],[-5,23],[-18,-22]],[[25284,52292],[-3,222],[-3,357],[-6,423],[-10,773],[9,283],[21,710],[5,212],[33,1120],[6,160],[19,643],[12,362],[-16,35],[-13,85]],[[8053,88108],[6,38],[18,-11],[-20,-43],[-4,16]],[[7905,86007],[29,90],[15,-17],[-1,-46],[-28,-74],[-15,19],[0,28]],[[7695,85792],[26,-14],[-3,-36],[-23,50]],[[7642,85774],[22,-17],[-7,-33],[-14,14],[-1,36]],[[7602,85813],[20,-2],[-5,-34],[-15,36]],[[7594,84711],[8,45],[20,-13],[-8,-73],[-15,-17],[-5,58]],[[7543,85532],[12,28],[21,-40],[-33,-2],[0,14]],[[7540,87187],[29,79],[8,112],[31,-29],[-28,-64],[-9,-49],[5,-24],[-36,-25]],[[7464,85521],[14,55],[18,-28],[23,-4],[-33,-33],[-22,10]],[[7385,86976],[17,6],[5,-88],[-22,82]],[[7168,84530],[29,89],[15,6],[26,-66],[5,20],[-21,65],[6,54],[9,10],[27,-25],[21,19],[-29,54],[16,56],[29,-31],[15,4],[-14,56],[12,17],[20,-20],[14,45],[-18,6],[-13,33],[20,3],[22,67],[34,18],[-12,35],[-3,68],[27,66],[7,-31],[53,51],[7,-7],[-12,-118],[-13,-18],[-26,-103],[5,-84],[36,11],[2,69],[22,-9],[21,-71],[20,48],[12,-33],[-17,-117],[9,-22],[9,72],[27,47],[7,-25],[-3,-115],[-30,-89],[-32,23],[-11,81],[-21,-26],[13,-99],[-22,-20],[-39,13],[-16,-54],[-8,36],[2,74],[-10,2],[-9,-114],[-8,-24],[-31,-17],[2,-37],[-16,-22],[-45,-13],[-86,76],[-21,-13],[-15,29]],[[7129,86075],[41,28],[18,-43],[-5,-48],[-13,-16],[-29,-3],[-16,59],[4,23]],[[6962,82933],[31,45],[8,-48],[-37,-9],[-2,12]],[[6905,82759],[20,62],[19,20],[11,-11],[25,17],[5,-40],[19,-37],[36,16],[-2,-37],[-19,-31],[-46,-6],[-32,-13],[-32,25],[-4,35]],[[6789,83718],[20,17],[4,76],[18,75],[25,34],[5,44],[15,-8],[34,70],[33,36],[39,-15],[29,1],[0,-112],[26,-57],[4,45],[17,53],[-18,48],[6,25],[53,-14],[-3,35],[-52,44],[-19,-4],[-1,127],[31,61],[29,29],[20,-12],[22,-56],[6,-133],[15,13],[9,77],[-5,55],[35,-38],[7,47],[-37,36],[-21,58],[7,44],[17,-6],[51,-87],[9,4],[30,-41],[11,10],[-31,75],[-20,34],[-7,44],[17,0],[30,-58],[29,12],[41,-29],[7,49],[36,15],[-8,-63],[-39,-106],[-7,-83],[19,-36],[0,95],[16,43],[16,-49],[5,46],[17,32],[5,41],[14,10],[10,-31],[22,72],[17,8],[-4,-45],[28,-16],[-11,-38],[-11,20],[-18,-15],[19,-36],[-5,-49],[19,22],[11,-51],[27,1],[-24,-53],[-16,33],[-24,2],[-15,-48],[16,-9],[-8,-53],[26,-8],[-26,-89],[23,17],[13,47],[5,-35],[47,-4],[-3,-41],[-36,-78],[-13,-110],[-38,13],[-2,39],[-10,-41],[-23,42],[-17,-6],[-23,49],[-15,-13],[-24,19],[-8,-46],[27,1],[15,-17],[45,-87],[-8,-70],[-23,-52],[-11,36],[-19,-50],[-19,30],[-6,38],[-21,18],[-20,-12],[-17,-37],[29,2],[20,-49],[-38,-53],[-34,12],[-4,-20],[25,-34],[14,13],[35,1],[22,-43],[-11,-28],[-24,-8],[-34,-33],[-8,11],[-19,-29],[3,-49],[-27,-50],[-13,20],[7,34],[-23,50],[7,47],[27,62],[-8,24],[-15,-21],[-34,-105],[-3,-24],[-22,32],[-22,-10],[-5,-35],[26,-6],[10,-63],[-16,-61],[-25,-20],[1,-70],[-25,-41],[-12,13],[-23,-82],[-19,-30],[-18,21],[-31,-20],[22,116],[11,11],[26,71],[24,31],[-2,37],[-33,-23],[3,52],[22,102],[29,52],[-7,30],[-15,-45],[-34,-61],[-26,-112],[-24,-59],[-14,-11],[-5,-44],[-19,-30],[-4,84],[-26,58],[-33,27],[3,100],[-4,106],[-13,83],[-11,32],[-23,20],[-27,5],[14,30],[-15,37],[5,23]],[[6782,82633],[27,101],[51,97],[21,-4],[16,-54],[-12,-23],[-55,-73],[-29,-79],[-19,35]],[[6519,81925],[26,41],[5,38],[13,22],[8,-32],[-6,-43],[5,-68],[-7,-33],[-36,13],[-8,62]],[[6240,82171],[5,47],[14,25],[13,-59],[-13,-63],[-19,50]],[[6225,82357],[9,35],[3,-82],[-10,-1],[-2,48]],[[6080,82757],[21,48],[48,-3],[25,-54],[-35,23],[-16,-26],[-43,-6],[0,18]],[[5919,82533],[19,25],[11,-57],[-9,-11],[-21,43]],[[5642,81925],[8,64],[19,12],[27,-58],[-8,-18],[-21,37],[-25,-37]],[[5573,81984],[16,-49],[-27,12],[11,37]],[[5524,80844],[-1,36],[13,24],[20,-25],[-9,-59],[-19,-15],[-4,39]],[[5506,81836],[8,67],[10,10],[11,-62],[-29,-15]],[[5485,80904],[12,85],[-11,46],[31,-2],[4,-99],[-27,-38],[-9,8]],[[5445,80747],[10,13],[16,-42],[-1,-34],[-23,-4],[-2,67]],[[5429,81185],[17,-21],[5,49],[17,46],[5,-22],[-8,-58],[9,-13],[1,-44],[-10,-61],[13,-30],[-7,-19],[-17,22],[-2,-21],[-20,8],[-3,164]],[[5385,80755],[21,25],[11,-30],[-20,-26],[-12,31]],[[5377,81028],[9,39],[23,41],[5,-36],[-23,-38],[-9,-58],[-5,52]],[[5303,81352],[14,11],[5,-42],[-19,31]],[[5265,80882],[33,98],[15,27],[-5,18],[-22,0],[-4,76],[22,50],[27,-44],[-1,38],[-13,52],[30,-13],[18,114],[12,-23],[-2,-43],[-9,-2],[-5,-75],[12,-18],[0,33],[13,1],[-4,-60],[-11,-37],[-22,12],[-1,-45],[-28,-71],[-18,-24],[-31,-141],[-6,77]],[[5246,85264],[5,41],[14,-83],[-7,-25],[-12,67]],[[5238,81460],[22,42],[36,-14],[-1,-78],[-50,12],[-7,38]],[[5213,85252],[8,77],[5,-57],[-13,-20]],[[5096,81334],[16,74],[25,25],[18,-23],[-2,-46],[10,5],[12,47],[15,-32],[26,-26],[26,25],[7,-66],[-9,-60],[-14,40],[-22,3],[-14,23],[-3,40],[-10,-12],[0,-69],[11,-20],[11,-87],[-11,-60],[-36,35],[-10,59],[-18,-18],[-18,-90],[4,58],[-10,43],[0,104],[-4,28]],[[5033,85142],[7,131],[39,52],[21,6],[39,76],[5,-2],[-55,-273],[-22,-32],[-32,-4],[-2,46]],[[4937,81216],[27,3],[-4,-71],[-26,47],[3,21]],[[4863,81217],[10,31],[36,8],[-9,-51],[-37,-10],[0,22]],[[4804,81100],[4,51],[17,20],[25,-19],[12,-29],[35,-42],[6,-41],[-30,44],[-23,-57],[-28,74],[-11,-38],[-7,37]],[[4656,80881],[30,66],[26,-27],[0,-83],[-11,-53],[-13,-21],[-27,58],[-5,60]],[[4587,90956],[19,44],[21,16],[24,-17],[22,6],[9,-37],[-1,-50],[-75,-13],[-18,19],[-1,32]],[[4545,80324],[1,51],[68,-54],[19,-39],[26,0],[18,-28],[-20,-23],[-10,-33],[-22,40],[-17,-9],[-31,37],[-18,-29],[-22,57],[8,30]],[[4451,81463],[14,-1],[-5,-38],[-9,39]],[[3979,80040],[12,22],[16,-18],[-21,-37],[-7,33]],[[3880,79918],[22,34],[33,-11],[24,18],[5,-24],[-9,-45],[-26,-13],[-47,27],[-2,14]],[[3807,79887],[60,24],[9,-35],[-15,-32],[-13,37],[-34,-4],[-7,10]],[[3781,79848],[17,29],[7,-36],[-18,-14],[-6,21]],[[3751,80090],[13,56],[14,-15],[18,18],[12,-21],[-22,-33],[13,-48],[30,0],[1,-41],[-23,3],[-18,-79],[-23,24],[-2,78],[16,35],[-9,20],[-16,-21],[-4,24]],[[3635,79967],[5,36],[28,54],[30,-6],[3,-58],[20,6],[14,-15],[8,-44],[13,13],[-2,-41],[-26,-36],[-12,11],[-18,-45],[-6,28],[-25,1],[-17,-20],[-18,91],[3,25]],[[3608,79782],[7,15],[27,-33],[-32,-11],[-2,29]],[[3261,87028],[35,25],[57,0],[22,-20],[23,10],[9,-24],[21,10],[10,30],[-8,38],[34,68],[37,-11],[0,37],[25,46],[33,-40],[24,32],[23,9],[15,54],[19,-132],[27,-10],[29,34],[29,-20],[27,-40],[-12,-65],[11,-44],[-11,-40],[13,-11],[4,-65],[-13,-38],[21,-54],[2,-58],[21,10],[-11,-34],[2,-48],[-71,-21],[-6,-34],[-20,19],[-26,-18],[-28,-58],[8,-64],[-26,-8],[-23,71],[-38,47],[-57,-4],[-14,35],[-28,18],[-27,58],[-35,42],[-40,19],[-32,72],[-25,10],[-2,70],[-28,97]],[[3147,79003],[17,23],[22,53],[25,5],[37,40],[9,27],[28,-21],[14,19],[8,44],[22,-19],[3,72],[24,-11],[-17,106],[20,32],[8,-16],[15,18],[-18,35],[4,39],[17,23],[29,-1],[9,-68],[15,7],[-7,50],[13,31],[-53,47],[-14,-21],[-32,81],[0,46],[31,92],[42,50],[36,32],[6,-15],[23,13],[16,-63],[-16,-42],[7,-35],[17,-18],[14,53],[6,-33],[15,29],[-1,41],[18,63],[15,-58],[11,26],[20,-62],[-8,-56],[-23,-13],[-24,-70],[-40,-70],[2,-39],[34,54],[58,64],[4,22],[22,22],[7,-19],[-5,-72],[-16,-51],[-26,-34],[-6,-23],[-45,-51],[-30,-20],[12,-46],[-16,-1],[-4,-61],[-16,17],[-7,-70],[-20,25],[-4,-76],[-36,-13],[-22,30],[-10,-31],[-12,23],[-21,-37],[-6,11],[-44,-73],[-3,-31],[-23,4],[-16,-23],[-13,-60],[-28,23],[-9,-45],[-49,40],[-15,36]],[[3070,93368],[7,34],[34,50],[123,108],[63,74],[48,74],[45,56],[42,64],[84,105],[55,56],[146,167],[172,154],[133,90],[87,45],[135,15],[52,-11],[34,-31],[-41,-11],[7,-38],[-10,-71],[-31,-77],[1,-70],[12,-56],[-21,-59],[-49,-33],[-4,-20],[49,7],[42,-151],[40,-3],[36,32],[42,-1],[49,-30],[47,21],[69,15],[32,-58],[50,21],[18,-34],[52,32],[18,26],[84,-65],[18,59],[26,44],[37,150],[18,26],[40,-9],[8,-39],[32,-12],[31,27],[26,0],[-32,110],[-71,55],[-45,24],[-48,-1],[-60,-60],[13,112],[-3,83],[-62,114],[-22,91],[-26,35],[-59,14],[-8,56],[-32,90],[7,50],[27,18],[10,43],[16,-37],[24,28],[27,-89],[36,-91],[24,-10],[-19,-101],[3,-55],[28,-50],[57,-123],[53,-68],[39,18],[30,28],[9,49],[-45,2],[-10,45],[-56,70],[-53,112],[10,52],[0,60],[14,23],[1,57],[33,93],[30,-32],[22,3],[1,28],[-38,55],[-25,-8],[-28,57],[-87,-29],[-32,-37],[-34,0],[-39,-19],[-34,17],[-20,43],[-17,-16],[-21,23],[-4,-51],[-36,39],[-91,42],[-54,31],[-48,15],[-22,30],[1,98],[-22,163],[-52,216],[-20,58],[-36,62],[-91,101],[-145,228],[-21,24],[-51,87],[-50,49],[-54,37],[-51,23],[-29,35],[-19,70],[-54,84],[-45,40],[-81,41],[-42,-6],[37,40],[92,59],[20,46],[3,57],[19,76],[11,236],[-8,117],[179,-31],[68,6],[144,42],[79,28],[77,15],[77,63],[41,65],[29,30],[53,87],[81,192],[21,92],[7,79],[-2,186],[39,233],[84,183],[65,179],[37,77],[129,162],[96,-35],[69,-3],[68,40],[64,53],[93,104],[74,108],[44,86],[114,188],[33,31],[99,63],[7,-47],[55,-44],[82,-12],[68,15],[13,24],[32,-3],[61,17],[73,51],[74,85],[71,121],[36,88],[86,185],[68,76],[12,-68],[47,-38],[39,-2],[39,-20],[16,-82],[27,41],[99,-49],[15,-98],[-54,-71],[-35,-63],[-41,-4],[12,-146],[81,-15],[44,59],[-7,76],[16,8],[31,67],[23,12],[19,-48],[4,63],[-27,43],[35,55],[21,-47],[-3,65],[15,22],[71,-74],[45,-66],[13,-42],[-11,-33],[1,-109],[9,-49],[61,10],[35,-37],[16,-40],[48,62],[30,75],[112,0],[69,42],[53,-11],[40,-34],[84,-2],[61,-32],[45,-35],[9,-34],[-26,-11],[-26,-83],[-26,-30],[14,-93],[25,5],[19,-24],[45,-6],[10,-28],[69,-20],[33,9],[-17,-43],[9,-25],[-53,-26],[-8,-24],[20,-25],[89,6],[72,-41],[14,-33],[28,5],[44,86],[57,15],[24,-18],[10,34],[40,7],[29,-27],[15,-59],[42,27],[38,8],[58,83],[13,-22],[45,20],[21,-15],[34,26],[12,-30],[66,-8],[62,-72],[28,-1],[19,-24],[26,31],[24,-8],[37,-73],[0,-45],[35,-19],[41,51],[1,-63],[26,57],[81,-77],[14,-67],[24,-23],[49,1],[43,-15],[29,36],[23,-73],[48,-10],[29,45],[43,-12],[62,12],[66,-10],[49,-38],[50,-3],[17,28],[65,-95],[28,-8],[32,-54],[45,-16],[20,-30],[45,-12],[17,-26],[27,32],[66,-20],[45,77],[48,6],[9,20],[84,49],[18,24],[86,30],[42,-25],[48,32],[9,-18],[79,-73],[53,-37],[70,-80],[26,-67],[37,-11],[87,-97],[68,-40],[52,-62],[27,-47],[61,-13],[58,-45],[0,-9012],[2,-971],[-1,-889],[130,-95],[17,100],[135,-145],[81,180],[170,20],[1,-39],[-33,-272],[47,-112],[66,-76],[26,-22],[11,-116],[29,-80],[266,-580],[30,-299],[-8,-93],[22,4],[51,108],[111,158],[11,23],[68,8],[32,139],[-2,209],[30,-19],[18,19],[19,71],[-1,39],[-32,47],[45,48],[68,28],[131,158],[62,-115],[28,-88],[11,-2],[24,-70],[0,-104],[-12,-24],[1,-37],[16,-47],[-5,-42],[18,-76],[73,-38],[5,-66],[32,-73],[24,0],[29,-108],[-6,-69],[26,-20],[-6,-46],[22,-71],[114,-152],[32,-119],[46,-120],[50,-110],[-23,-49],[33,-134],[47,-140],[28,-176],[57,-182],[32,-161],[30,-111],[25,-123],[53,-180],[32,-155],[-33,-140],[89,-52],[-21,-205],[71,-81],[-8,-61],[11,-57],[7,-119],[71,14],[33,-77],[82,-115],[23,-48],[85,-47],[44,-115],[44,-33],[11,-116],[23,-15],[27,-36],[40,23],[28,-143],[-3,-90],[-20,-107],[-18,-67],[1,-60],[10,-38],[-5,-118],[12,-104],[11,-46],[6,-133],[12,-63],[-32,-100],[-24,-122],[-1,-33],[-20,-90],[-23,-77],[-37,-97],[-27,-55],[-19,-14],[3,-46],[-19,-23],[-12,40],[-1,56],[-13,24],[-1,-44],[-12,-22],[-18,18],[-13,52],[-4,108],[3,57],[-17,33],[8,103],[-9,6],[-16,56],[-6,64],[30,63],[17,63],[15,-8],[-3,75],[-11,82],[14,122],[-9,190],[-10,67],[-43,164],[-22,55],[-12,48],[-7,-34],[23,-62],[25,-85],[7,-72],[22,-90],[10,-131],[-16,-43],[-2,-79],[7,-92],[11,-62],[-9,-28],[-11,96],[-8,12],[3,-70],[-4,-74],[-36,-102],[-14,-5],[-24,49],[19,73],[11,73],[-3,38],[-25,-10],[10,-72],[-8,-42],[-33,-56],[-7,1],[-23,108],[-11,-45],[-25,54],[-17,18],[-12,50],[-28,68],[0,76],[31,31],[22,51],[-20,47],[7,75],[-9,39],[23,44],[3,24],[-18,1],[-3,74],[7,43],[-41,-17],[6,-45],[11,-16],[-1,-37],[-13,-85],[-1,-60],[-19,-73],[-18,13],[7,-93],[-10,-43],[-24,52],[-25,22],[-9,30],[-12,132],[-16,70],[21,-29],[7,75],[27,37],[12,147],[-8,102],[10,57],[6,-21],[12,42],[7,92],[-21,-11],[-4,-58],[-19,-30],[-21,-61],[13,-113],[-8,-42],[-33,3],[-12,-43],[3,-30],[-17,-14],[-7,34],[4,67],[-19,23],[-12,128],[-32,-17],[0,-48],[-28,118],[-3,123],[8,25],[25,1],[7,66],[13,49],[30,12],[16,-72],[7,63],[-15,168],[9,3],[30,-45],[4,-59],[11,-32],[6,23],[-9,77],[-22,35],[-19,48],[-3,53],[-11,13],[-12,-25],[-10,49],[-23,32],[-5,57],[12,23],[-4,64],[-22,28],[-37,66],[-13,69],[-15,33],[-13,79],[29,43],[-11,58],[-18,-47],[-19,18],[-2,-27],[-23,58],[-31,8],[-11,56],[-27,-28],[-54,76],[-8,75],[15,73],[18,-22],[33,4],[9,48],[-22,3],[-32,36],[2,35],[-18,125],[13,81],[-24,-10],[-15,19],[-16,53],[7,103],[20,2],[16,-36],[33,-24],[63,-89],[5,15],[-25,58],[-20,19],[-66,130],[-3,95],[-17,-15],[-2,-65],[-20,3],[-39,166],[-55,147],[-11,140],[9,65],[-2,52],[27,41],[-13,100],[-8,-2],[-9,-85],[-20,-30],[0,-42],[12,-22],[-13,-57],[-10,10],[-22,-20],[-25,11],[-36,34],[-7,-15],[-35,36],[-40,174],[-4,110],[-42,140],[-13,79],[19,1],[-11,174],[-19,-56],[1,-58],[-35,132],[-8,177],[-8,92],[-21,135],[-32,116],[-36,37],[-5,-16],[28,-38],[4,-41],[17,-39],[20,-131],[-15,11],[-34,140],[-22,36],[-22,10],[41,-92],[13,-85],[17,-29],[-7,-97],[9,-88],[13,-23],[-5,-24],[27,-124],[3,-55],[25,-139],[2,-32],[-14,11],[27,-204],[9,-85],[1,-69],[-12,8],[-1,-61],[12,-64],[-29,23],[-19,32],[-14,-4],[-18,43],[-15,66],[-10,84],[-22,-16],[-33,50],[-27,-37],[-50,-19],[3,81],[-25,16],[-4,19],[30,39],[-10,69],[5,53],[-28,109],[0,36],[-22,84],[13,24],[-2,90],[-19,64],[-12,10],[15,-131],[-12,-125],[-27,-5],[-42,70],[-26,30],[-15,150],[-11,-68],[-13,-22],[-44,54],[-14,-20],[-10,50],[-12,-18],[-3,-54],[45,-35],[7,7],[45,-44],[33,-66],[30,-104],[-11,-44],[-24,-44],[6,-11],[33,44],[7,30],[27,1],[7,-105],[26,-78],[16,-157],[-19,-44],[-43,-32],[-11,10],[9,47],[-18,16],[-12,-17],[7,-39],[-10,-37],[-43,22],[-11,-23],[5,-60],[-8,-35],[-29,5],[-8,78],[-36,35],[3,15],[-28,74],[-17,19],[-29,-19],[-35,70],[-16,15],[-56,107],[-51,75],[-2,50],[-30,70],[-37,64],[-5,28],[4,75],[-15,48],[-55,121],[-30,47],[-96,89],[-36,71],[-43,66],[-98,104],[-42,49],[-91,144],[-30,39],[5,29],[31,89],[24,-14],[-9,-27],[24,3],[0,43],[21,70],[-22,7],[2,77],[-14,116],[7,35],[22,41],[-5,34],[16,30],[-13,56],[-19,-51],[-2,-59],[-25,-21],[-21,-72],[-1,-49],[-107,-100],[-12,-28],[-28,-28],[-95,22],[-67,36],[-26,32],[-123,125],[-17,56],[18,-10],[34,24],[11,71],[-33,131],[3,42],[-20,-17],[-31,44],[6,-50],[45,-120],[-10,-21],[-54,-51],[-39,0],[-49,55],[-61,24],[-32,23],[-81,40],[-45,11],[-59,-4],[-63,-33],[-77,-12],[-80,-28],[-54,-48],[-39,39],[-45,-26],[-64,-120],[-46,-115],[6,65],[36,103],[62,117],[46,2],[-16,66],[-49,48],[-8,25],[-10,-82],[-26,84],[-26,30],[-17,-9],[-16,27],[-71,19],[9,28],[38,23],[-42,33],[-19,-6],[-2,25],[37,156],[-15,15],[-13,-36],[-29,-22],[-1,-57],[-20,-66],[-39,12],[-70,97],[1,31],[-26,36],[-39,26],[-41,-35],[-22,27],[13,29],[31,32],[25,74],[-14,10],[-18,-49],[-79,-93],[-29,-23],[-38,5],[1,-54],[60,27],[11,-24],[2,-53],[-17,2],[-28,-37],[-18,6],[-41,-38],[-41,-77],[-12,2],[-12,48],[47,77],[-37,-12],[-17,11],[-1,54],[23,83],[13,27],[18,2],[20,-31],[24,17],[22,41],[38,13],[57,58],[42,20],[-9,25],[-19,-2],[1,71],[-11,-49],[-19,-20],[1,30],[25,65],[1,21],[-33,-58],[-45,-47],[-19,-3],[-4,30],[63,112],[-6,38],[-29,-60],[-38,-14],[-12,26],[-15,-49],[-20,-14],[-54,13],[-10,58],[27,19],[11,-9],[18,25],[40,16],[29,28],[23,65],[-25,2],[-14,-46],[-23,-19],[-45,-2],[-18,68],[-12,3],[-17,-69],[-21,-8],[-4,59],[16,26],[17,-6],[-11,44],[-3,55],[13,34],[26,114],[96,6],[-7,38],[-91,-5],[-21,-63],[-27,-26],[-21,-77],[-31,-48],[-23,12],[20,36],[-10,113],[-12,53],[18,30],[-22,10],[-14,-23],[-1,-51],[12,-63],[-14,-63],[1,-41],[-13,-15],[-26,48],[-2,-67],[-27,-45],[-21,22],[0,52],[-11,19],[-7,-73],[-9,15],[4,129],[9,62],[-15,11],[-17,-130],[9,-111],[-4,-29],[-19,-9],[1,49],[-27,34],[-7,-46],[16,-65],[-13,-8],[-38,16],[-34,-48],[-28,9],[-5,31],[14,95],[42,151],[1,53],[49,123],[16,81],[-6,18],[-73,-211],[-1,-35],[-18,-58],[-8,8],[-8,69],[-12,-1],[-3,-81],[-11,-54],[-18,-42],[-3,-64],[-16,-68],[-21,27],[-7,-44],[24,-28],[-5,-91],[10,-8],[19,85],[37,6],[11,-22],[4,-91],[-14,-45],[-31,-32],[-22,-76],[1,-63],[21,20],[17,75],[30,44],[30,-89],[0,-44],[10,-43],[-23,-192],[-26,0],[-9,52],[-19,9],[1,-36],[-27,-44],[0,-17],[28,14],[23,-27],[61,-124],[26,-85],[-15,-77],[-13,-26],[-34,-35],[-17,16],[-14,-18],[-29,-6],[9,51],[-26,67],[9,60],[-17,63],[-16,-126],[0,-62],[-12,-41],[-19,69],[-9,-8],[-7,-59],[-18,-33],[-34,50],[-29,-40],[-15,52],[-27,-21],[-22,5],[-9,28],[24,74],[-9,14],[-27,-38],[-29,-175],[-30,-42],[-9,18],[14,55],[13,84],[-15,172],[-16,5],[-5,-28],[1,-81],[13,-53],[-10,-4],[-10,-72],[-17,11],[-8,-20],[-5,-68],[-11,-17],[4,-47],[25,-31],[-6,-74],[-27,32],[-12,127],[8,37],[-11,78],[-17,6],[6,-52],[-8,-49],[5,-196],[-5,-64],[-27,74],[-1,43],[-16,28],[-34,31],[3,-40],[24,-36],[-1,-63],[-69,-158],[-32,-91],[0,-36],[-16,-10],[-9,-86],[-12,2],[-3,70],[34,211],[0,29],[-26,-65],[-19,-111],[-12,11],[-9,142],[-13,-52],[-11,2],[16,-62],[-5,-80],[-39,0],[-8,-61],[-18,-24],[-22,-55],[7,-43],[-15,-41],[-16,-10],[0,54],[-16,36],[-13,-45],[-1,-53],[-22,-17],[-24,31],[-9,-23],[-21,38],[-7,43],[-12,-36],[-21,-27],[6,-35],[-20,0],[-5,-39],[-41,-7],[-6,76],[-22,-14],[-21,22],[3,22],[-21,8],[-3,70],[8,36],[16,18],[5,71],[32,31],[9,-11],[29,51],[33,3],[0,45],[33,21],[34,62],[31,-9],[-11,69],[22,26],[3,32],[37,102],[-13,15],[-24,-22],[-60,-109],[-30,-20],[-18,-39],[-39,16],[-43,67],[-15,40],[-5,46],[18,117],[13,45],[15,133],[27,79],[17,33],[35,99],[11,98],[0,71],[23,32],[5,156],[4,27],[-18,44],[-22,163],[39,35],[5,27],[63,27],[89,164],[92,118],[51,-161],[41,-16],[13,-27],[34,112],[30,8],[36,-45],[19,10],[63,-48],[65,-20],[30,-55],[-1,27],[-22,63],[-29,36],[-38,-14],[-51,63],[-24,-1],[-40,42],[-25,68],[-39,66],[-29,28],[18,55],[24,9],[31,124],[23,18],[8,60],[46,27],[30,45],[-32,50],[-20,4],[-43,-64],[-11,-49],[-19,-14],[-12,-70],[0,-70],[-18,-31],[-25,19],[-36,7],[-74,-17],[-26,43],[-28,16],[-14,-52],[-87,-84],[-39,-154],[-36,-12],[-19,-31],[-33,2],[-39,-63],[-48,-109],[-1,-29],[26,-124],[-2,-23],[-38,25],[-19,-18],[-30,-52],[-21,-92],[-27,-29],[-32,-74],[-6,-73],[8,-34],[19,-24],[-40,-56],[-9,-67],[-13,-4],[-28,-70],[-19,-7],[-9,28],[-25,-11],[4,-68],[16,-13],[-3,-30],[25,-42],[8,-35],[-12,-73],[-19,-47],[-7,-62],[-25,-21],[-4,-22],[-39,-2],[-15,12],[-40,-31],[-18,3],[-19,-60],[23,16],[15,-20],[15,30],[19,1],[7,-50],[-16,-116],[-19,-16],[-26,-51],[-28,37],[5,-34],[-13,-18],[-18,18],[7,35],[2,75],[-22,71],[3,-119],[-9,-55],[-18,-15],[-13,25],[-6,-35],[16,-28],[-9,-53],[-49,-10],[17,-93],[-8,-32],[-27,-21],[-10,8],[-24,-45],[-12,13],[-36,-37],[5,-26],[20,-18],[-23,-32],[-7,-43],[2,-61],[-12,-44],[-24,-35],[24,-26],[-6,-59],[10,-60],[27,63],[59,-23],[16,22],[12,-22],[15,25],[22,-78],[19,-27],[19,13],[23,-34],[18,-53],[8,-53],[15,-22],[-28,-14],[-14,-118],[-12,-39],[-30,-25],[-11,-55],[-24,-33],[-48,0],[-15,-17],[-4,-94],[-12,-33],[-27,1],[-5,-20],[10,-79],[11,-32],[-27,-36],[-20,15],[-2,-45],[20,-46],[-11,-81],[-21,-30],[-6,-33],[9,-24],[-23,0],[-14,-52],[-26,66],[-9,-7],[5,-57],[-4,-40],[-21,-3],[-12,-43],[-17,16],[0,27],[-20,-1],[-4,-39],[-22,-24],[-23,31],[-28,-17],[-35,-69],[15,-52],[-9,-51],[-40,-44],[-28,-2],[1,-53],[14,-25],[-6,-40],[-20,-16],[-36,59],[-10,30],[-20,-20],[-5,-63],[1,-69],[-26,-27],[-3,-97],[-65,-7],[-21,24],[-2,-74],[8,-71],[-20,0],[-12,37],[-21,3],[-4,-39],[-32,-27],[-39,-92],[-15,-12],[-5,-44],[13,-11],[47,64],[4,-50],[-6,-53],[-15,-7],[0,-31],[18,-38],[-10,-38],[-18,-26],[-2,-49],[-26,-44],[-8,-32],[2,-42],[-32,14],[-31,-28],[-4,-70],[-12,-12],[-19,75],[-8,-53],[-27,-42],[-11,-53],[-24,-6],[5,-50],[-17,-27],[-25,43],[-24,67],[-22,-16],[0,-51],[11,-5],[1,-36],[-29,-10],[-13,-67],[6,-32],[18,-6],[5,-52],[-36,-4],[-24,-15],[-17,77],[-51,-38],[-18,-51],[-16,-3],[-9,-49],[19,-1],[27,25],[20,-17],[6,-54],[-16,-47],[-43,44],[-23,11],[-5,-70],[-33,6],[-23,21],[-20,-33],[-27,-88],[2,-44],[47,-20],[32,-36],[-3,-29],[-32,-42],[1,-23],[18,-4],[25,31],[16,-7],[-55,-78],[-23,-63],[1,-52],[-13,50],[-10,-17],[16,-66],[-6,-50],[-7,39],[-10,-2],[-2,-53],[-25,80],[0,95],[-19,-60],[8,-73],[-4,-67],[-24,-6],[3,58],[-35,1],[-16,-80],[-25,-9],[-75,-43],[-29,-22],[-7,-22],[-3,-74],[-17,46],[5,80],[-23,-19],[10,-30],[1,-104],[-16,-71],[6,-46],[-24,-81],[-32,-30],[2,52],[24,4],[-1,40],[-10,4],[2,111],[18,72],[-29,39],[-28,12],[-13,-18],[3,-45],[-12,-21],[-13,22],[-25,-13],[-9,-82],[-35,-74],[-26,-20],[-37,28],[-6,-29],[11,-44],[-20,-81],[1,-31],[-21,-37],[-12,105],[-10,13],[-14,-37],[-11,14],[-18,-31],[31,-13],[-2,-68],[-32,-10],[-16,25],[5,39],[-13,24],[-22,-22],[-19,-90],[-61,-85],[-26,2],[-11,29],[-26,-29],[-13,4],[10,156],[29,96],[1,46],[-15,16],[-31,-2],[-24,-29],[-24,-101],[4,-129],[-40,-140],[-7,-12],[-14,-85],[-21,36],[-19,-12],[13,-65],[10,-17],[1,-56],[-25,-38],[-19,33],[0,45],[-16,15],[-13,-60],[10,-49],[-17,-47],[-14,27],[-32,-8],[-16,18],[-14,74],[32,6],[-21,47],[-8,104],[-21,56],[-11,7],[-16,-33],[-10,-65],[7,-27],[14,0],[18,-70],[-11,-46],[14,-95],[0,-52],[-22,30],[-20,-19],[3,-26],[-17,-30],[-18,-7],[-22,28],[-16,59],[4,36],[-13,56],[-21,37],[-31,-25],[-10,-56],[49,-85],[4,-31],[-50,-111],[-24,-21],[-20,-33],[16,-56],[27,2],[9,24],[22,-50],[13,-83],[-26,6],[8,34],[-17,6],[-10,-28],[-16,22],[-17,62],[-25,-39],[2,-69],[-18,-1],[-28,-50],[-23,18],[-37,10],[-45,-5],[-34,-14],[-41,-40],[-29,-71],[-4,-69],[-29,-53],[-51,-33],[-29,3],[-28,28],[-9,30],[-9,74],[-10,30],[-1,55],[8,29],[44,41],[14,25],[23,110],[19,110],[-1,29],[22,54],[14,13],[25,-46],[38,39],[25,49],[25,0],[37,81],[34,20],[36,-14],[31,5],[1,-37],[28,-72],[9,-61],[-5,-50],[27,24],[-8,52],[2,37],[30,-30],[-15,42],[2,77],[-10,109],[32,46],[26,21],[42,-15],[21,14],[10,69],[-16,4],[4,28],[18,10],[7,38],[18,-4],[26,99],[3,-32],[15,-20],[21,48],[-5,83],[-20,-9],[27,68],[64,206],[33,52],[23,62],[19,13],[27,42],[25,68],[27,14],[35,39],[37,20],[89,70],[30,-9],[10,18],[45,5],[10,-10],[-20,-27],[-1,-47],[14,-2],[-3,-49],[-29,-18],[-3,-85],[38,-98],[11,22],[27,-39],[4,19],[-29,53],[-3,85],[-6,32],[26,-28],[57,3],[7,-86],[23,7],[26,-36],[7,22],[-14,40],[27,15],[-56,89],[-32,36],[1,58],[-16,-7],[39,166],[15,123],[11,56],[23,44],[36,96],[18,13],[40,74],[30,81],[82,96],[41,74],[35,39],[68,106],[17,42],[29,-68],[19,-14],[31,19],[8,59],[-13,47],[-2,46],[15,122],[29,108],[41,130],[24,62],[22,37],[40,41],[21,52],[22,87],[14,15],[26,62],[30,25],[8,-74],[18,-15],[4,41],[-10,105],[-23,-2],[-6,34],[2,95],[9,59],[25,409],[14,42],[38,16],[12,53],[-20,-9],[-34,77],[-3,62],[9,97],[20,106],[27,33],[29,101],[49,102],[4,57],[19,93],[-5,45],[13,33],[-3,43],[13,38],[-20,0],[-11,-32],[0,-38],[-21,-53],[-28,-31],[-38,-27],[-21,-31],[-29,-22],[-5,-21],[-41,-28],[-44,-61],[-79,-73],[-26,5],[-28,53],[-5,73],[-20,49],[-40,38],[2,46],[11,17],[9,167],[-12,-3],[-25,-101],[-41,-54],[-6,-58],[5,-58],[-8,-37],[-14,-12],[-3,-32],[9,-80],[16,-91],[19,-76],[-26,-87],[-28,-21],[-42,32],[-39,161],[-47,208],[-26,73],[-23,42],[-31,13],[16,65],[-16,44],[-25,-9],[-6,-87],[-15,7],[1,-65],[-29,-30],[-24,79],[3,26],[-19,19],[-11,-30],[-16,6],[-1,59],[-22,-18],[-25,61],[18,47],[-17,89],[-44,-52],[-46,-72],[-31,-62],[-20,-95],[-13,57],[-36,-33],[-94,-124],[-10,-41],[0,-49],[-41,-38],[-8,-26],[-22,-10],[-15,-44],[-20,-15],[-4,55],[-29,45],[-54,-20],[-29,33],[49,47],[15,-39],[18,12],[5,50],[25,77],[3,60],[-8,85],[1,81],[-16,74],[5,21],[-16,20],[-29,97],[-20,139],[29,128],[21,23],[24,79],[24,26],[-15,77],[-18,44],[-15,64],[-10,107],[-50,162],[-3,74],[-25,67],[-10,63],[-30,85],[-10,44],[-22,9],[-11,-37],[-2,-74],[6,-37],[-8,-56],[-12,-21],[-27,-10],[-18,21],[-19,-54],[-36,-29],[-50,-68],[-73,-48],[-88,-28],[-75,10],[-51,38],[-13,32],[-13,99],[23,18],[-18,69],[-54,62],[-32,108],[-5,34],[-33,51],[-18,62],[-42,8],[-31,42],[-47,110],[23,32],[24,55],[-2,36],[-24,6],[-38,-54],[-48,10],[-16,51],[11,32],[32,1],[57,128],[10,-4],[17,45],[-16,34],[-4,41],[32,24],[-27,7],[5,70],[27,78],[-17,3],[-18,-48],[-40,42],[-6,40],[22,49],[27,-6],[19,23],[0,45],[-17,-21],[-30,32],[-16,54],[2,23],[-20,7],[-13,35],[-10,-14],[-12,-99],[-14,-6],[-38,16],[-10,21],[-10,66],[1,129],[-11,19],[-43,10],[-18,37],[-10,98],[42,44],[6,38],[-17,46],[-30,31],[-45,-27],[0,-46],[-21,23],[-9,88],[8,147],[6,11],[-2,-107],[92,47],[0,19],[-35,20],[-20,28],[-24,82],[2,18],[36,19],[55,-8],[33,25],[-29,134],[-4,46],[3,84],[21,77],[101,278],[4,29],[27,77],[29,61],[5,70],[18,67],[21,34],[19,-4],[9,23],[-11,115],[26,188],[18,70],[38,61],[-18,24],[4,22],[58,133],[60,46],[48,11],[42,-45],[43,-11],[32,-84],[24,-6],[6,-26],[54,-88],[73,24],[61,124],[4,47],[44,29],[63,172],[23,89],[23,39],[-9,58],[14,5],[28,-28],[22,-5],[13,-77],[52,0],[45,20],[26,-20],[77,28],[48,38],[9,51],[56,128],[38,135],[0,71],[-12,81],[-23,95],[-17,121],[-1,118],[-5,52],[-71,157],[-9,32],[-41,28],[-27,1],[10,97],[27,33],[14,-25],[35,-20],[51,7],[-10,45],[31,10],[41,81],[2,114],[-42,122],[-47,68],[-25,48],[-1,-32],[-27,-48],[-20,-86],[-42,-30],[-42,42],[-59,-93],[-81,-34],[-18,-71],[-85,-103],[-21,-70],[-5,-99],[-44,-70],[-4,93],[-15,110],[-23,50],[-28,-3],[4,34],[-32,46],[-9,36],[-38,-60],[16,-45],[21,-7],[16,-39],[24,11],[2,-48],[-22,-81],[-19,-11],[-22,82],[-55,76],[-41,33],[-64,13],[-41,-27],[-27,12],[-52,3],[-45,-22],[-108,-112],[-58,-17],[-111,74],[-94,45],[-47,14],[-88,40],[-49,79],[-20,96],[1,74],[20,36],[-6,64],[-28,63],[-45,56],[-1,59],[-46,64],[-10,56],[39,-33],[33,3],[9,27],[24,15],[16,32],[-3,55],[35,61],[-38,63],[-19,9],[-29,-16],[-39,15],[-64,52],[-104,21],[-49,52],[-38,63],[-55,60],[-46,30],[-15,93]],[[2812,78476],[27,27],[-1,59],[18,0],[10,36],[0,57],[21,33],[5,57],[-10,16],[11,87],[46,106],[16,-26],[27,16],[28,-3],[-9,65],[-12,5],[9,77],[-6,26],[18,76],[40,67],[54,37],[29,-53],[31,1],[2,-23],[-21,-74],[5,-60],[-55,-95],[-65,-72],[-19,-66],[-1,-36],[-28,-81],[-15,-58],[-25,-10],[-28,-71],[-15,-17],[-4,-51],[-15,21],[-27,-49],[-54,-69],[13,45]],[[2752,78371],[29,49],[-1,-45],[-26,-25],[-2,21]],[[2615,78610],[4,50],[19,16],[4,-44],[-9,-45],[-12,-8],[-6,31]],[[2607,82847],[50,-13],[29,5],[10,-14],[-27,-68],[-23,4],[-9,46],[-20,10],[-10,30]],[[2611,78728],[8,-39],[-15,13],[7,26]],[[2547,78457],[17,17],[23,-3],[-2,19],[27,23],[19,-10],[10,-25],[-17,-105],[-30,50],[-25,-29],[-19,14],[-3,49]],[[2517,78521],[8,26],[23,-16],[1,-31],[-14,-31],[-13,16],[-5,36]],[[2497,78313],[4,72],[33,-18],[-7,-57],[-30,3]],[[2431,83489],[9,43],[22,15],[12,-10],[29,22],[-2,-56],[-32,-62],[-5,31],[-33,17]],[[2316,78170],[5,42],[40,72],[31,-27],[1,-27],[-13,-58],[-19,2],[-17,-26],[-15,-48],[-15,21],[2,49]],[[2228,78152],[9,-32],[-16,2],[7,30]],[[2183,78046],[17,42],[16,-37],[-12,-55],[-19,-1],[-2,51]],[[2036,90914],[2,37],[25,87],[-3,75],[8,18],[-5,57],[21,3],[8,-42],[-4,-48],[12,-34],[64,-57],[77,-48],[55,-20],[58,87],[58,58],[58,-14],[29,-69],[23,-15],[15,-104],[-2,-38],[53,-56],[56,-14],[22,-32],[9,-35],[36,-20],[88,-20],[14,6],[102,-55],[-27,-131],[-22,-43],[-51,35],[-43,-1],[-50,-29],[-44,-89],[-10,-61],[1,-53],[-20,-46],[-30,22],[3,24],[-26,119],[-32,62],[-50,60],[-39,-5],[-11,69],[-17,55],[-54,80],[-86,69],[-65,11],[-47,-44],[-18,-58],[-36,-34],[-28,33],[-49,36],[-24,83],[-7,56],[3,73]],[[1818,77819],[15,59],[33,49],[12,-2],[27,-39],[-1,-41],[-28,-51],[-32,-27],[-22,-1],[-4,53]],[[1695,87369],[6,69],[25,52],[11,-3],[-4,-58],[12,-54],[33,-70],[48,-63],[22,-14],[25,13],[57,-94],[-21,-19],[-9,37],[-51,8],[-26,-17],[-33,46],[-58,136],[-37,31]],[[1687,87598],[8,-5],[5,-84],[-20,42],[7,47]],[[1421,77626],[35,0],[33,-31],[9,30],[14,-2],[33,27],[25,-1],[-6,-28],[10,-29],[8,15],[31,-24],[23,16],[10,-11],[32,11],[5,-12],[41,-7],[-25,-23],[-16,6],[-14,-22],[-44,-1],[-22,-35],[-8,16],[-16,-19],[-19,4],[-18,25],[-52,3],[-9,-15],[-29,19],[-10,49],[-11,-1],[-10,40]],[[1064,77503],[55,37],[11,-28],[25,50],[3,-22],[19,38],[5,29],[18,-29],[27,8],[8,34],[6,-24],[35,37],[1,42],[44,10],[-13,41],[43,-5],[13,34],[-1,36],[-32,7],[-23,29],[5,26],[21,-16],[12,36],[-2,39],[38,46],[33,-32],[22,-76],[1,-31],[-21,-85],[-34,8],[-4,-43],[33,-79],[-3,-24],[-15,21],[-17,-10],[-4,-27],[-16,-4],[-20,23],[-19,-95],[-25,31],[-64,-55],[-13,29],[-29,12],[-23,-6],[-13,-35],[-22,-8],[-33,6],[-32,25]],[[1013,77451],[17,17],[7,-29],[-22,-4],[-2,16]],[[1005,77685],[16,-19],[-11,-12],[-5,31]],[[949,77433],[5,9],[40,-3],[1,-26],[-19,3],[-22,-24],[-5,41]],[[890,77452],[11,14],[28,-1],[15,-90],[-16,5],[-17,49],[-21,23]],[[821,77563],[14,45],[26,-9],[23,-80],[-20,-38],[15,-56],[-13,-34],[-18,-2],[-18,22],[3,57],[-7,2],[-8,77],[3,16]],[[811,77269],[5,56],[12,10],[10,-27],[19,10],[-12,22],[34,30],[10,-23],[-2,-55],[-23,0],[13,-52],[-29,29],[2,-40],[-12,12],[-5,-39],[-7,45],[-15,22]],[[601,77040],[11,67],[15,16],[7,36],[-13,66],[4,27],[32,7],[7,59],[-13,69],[10,45],[15,4],[18,-20],[19,59],[9,-14],[3,-74],[-20,-29],[-2,-50],[13,-20],[19,4],[31,26],[30,5],[7,-64],[-7,-88],[-15,-12],[-36,18],[-13,-52],[-18,-12],[-13,-41],[-23,31],[-6,-25],[6,-48],[-11,17],[-13,-26],[-4,55],[-14,29],[-19,-108],[-14,11],[-2,32]],[[469,77371],[13,9],[2,-26],[-14,-17],[-1,34]],[[402,77131],[18,33],[24,-17],[26,34],[50,39],[21,43],[2,128],[12,16],[16,-10],[15,-44],[-26,-98],[5,-86],[-7,-38],[-33,-31],[-36,61],[-27,-33],[-40,-10],[-1,-43],[-10,5],[-9,51]],[[257,77332],[8,29],[29,17],[39,-5],[11,-42],[-2,-30],[19,-32],[15,17],[18,-17],[33,34],[-10,-40],[-41,-32],[-12,-71],[4,-31],[-12,-31],[-8,16],[-9,-44],[8,-57],[-8,-5],[-9,56],[-14,-24],[-16,48],[-13,8],[4,28],[41,25],[-3,64],[-20,1],[-13,34],[-39,66],[0,18]],[[130,77016],[32,-12],[-3,-18],[-27,7],[-2,23]],[[81,76979],[27,-17],[7,-23],[-25,5],[-9,35]],[[77,77233],[14,52],[20,-35],[0,-61],[-19,-10],[-15,54]],[[43,76751],[8,25],[10,-22],[5,-50],[-12,-2],[-10,-32],[-1,81]],[[3,76640],[12,18],[6,-59],[-18,-25],[0,66]],[[99917,77451],[12,-2],[12,35],[26,14],[31,-61],[-9,-68],[-24,-42],[-12,-5],[-25,29],[-11,29],[0,71]],[[99678,77049],[5,24],[26,-29],[19,3],[27,-24],[4,-31],[24,-42],[27,-78],[25,-26],[11,-57],[44,-11],[21,-33],[-18,-19],[-9,14],[-29,-16],[-15,41],[-41,72],[-30,101],[-30,43],[-17,-8],[-22,25],[-22,51]],[[99628,77446],[9,11],[20,-16],[11,-33],[-14,-49],[-10,-4],[-16,91]],[[99570,77271],[19,-7],[21,-67],[-22,15],[-18,59]],[[99530,77510],[7,22],[17,-22],[3,-34],[-17,-20],[-10,54]],[[99282,77351],[24,27],[15,50],[39,26],[6,63],[16,96],[11,18],[20,-52],[-12,-32],[-8,-57],[-20,-53],[21,-18],[0,-35],[-13,-10],[-42,17],[-17,-31],[-4,-70],[-11,2],[-25,40],[0,19]],[[98911,77903],[26,-13],[-18,-27],[-8,40]],[[98408,78327],[22,-8],[3,-26],[-24,15],[-1,19]],[[98376,78346],[14,-8],[0,-29],[-14,37]],[[98352,78374],[20,-27],[-12,-2],[-8,29]],[[98210,77943],[6,31],[19,27],[23,-6],[26,67],[41,5],[-17,-40],[-5,-37],[10,-104],[-21,0],[-17,52],[-35,-19],[-30,24]],[[97960,78551],[47,86],[33,11],[100,-20],[29,-63],[24,-15],[35,-94],[2,-18],[-35,-8],[-21,38],[-17,-71],[-9,-13],[-38,15],[-26,-41],[-27,32],[-12,40],[-3,63],[-32,56],[-35,-24],[-15,26]],[[13347,81071],[9,23],[10,-28],[-5,-52],[-16,34],[2,23]],[[13279,80906],[61,56],[7,-80],[13,-14],[-20,-68],[-24,-1],[-33,63],[-4,44]],[[13241,80901],[26,65],[8,-25],[-26,-58],[-8,18]],[[13234,81005],[16,62],[-2,43],[13,20],[-14,43],[-2,70],[5,39],[11,9],[19,-32],[5,-35],[13,-7],[17,-40],[0,-165],[-9,-34],[-27,-2],[-13,32],[-23,-36],[-9,33]],[[13172,81388],[4,66],[6,1],[52,-135],[-12,-28],[-1,-68],[-15,-111],[-23,74],[-9,113],[-2,88]],[[12999,82714],[4,48],[9,-30],[-13,-18]],[[12979,82569],[2,29],[21,40],[21,-38],[-1,-22],[-24,-37],[-19,28]],[[12954,82690],[20,33],[17,52],[-5,-50],[-18,-75],[-14,40]],[[12888,80934],[18,6],[-4,-53],[-14,47]],[[12850,82395],[7,53],[10,-24],[22,-97],[10,-68],[-13,-15],[-21,61],[-9,4],[-6,86]],[[12838,82543],[18,86],[21,30],[30,-20],[24,22],[28,-42],[4,-36],[-18,-53],[6,-82],[-16,-19],[-44,-22],[-23,65],[-24,29],[-6,42]],[[12768,81460],[21,27],[-2,-46],[-16,-11],[-3,30]],[[12700,80811],[9,0],[10,-128],[-15,29],[-4,99]],[[12674,81692],[9,23],[1,61],[20,-30],[1,-32],[-22,-72],[-9,50]],[[12659,81749],[12,9],[-1,-36],[-11,27]],[[12637,81497],[8,92],[8,25],[32,-9],[10,-16],[-2,-35],[-16,-42],[8,-16],[20,40],[5,43],[13,-19],[19,68],[19,-2],[16,-39],[-5,-60],[-15,-35],[-19,15],[-13,-35],[17,-22],[-2,-37],[-22,-21],[-22,-50],[-9,-97],[-23,78],[17,61],[-1,78],[-29,51],[-14,-16]],[[12629,82086],[11,22],[24,102],[28,10],[11,20],[-22,13],[-1,47],[15,-22],[9,34],[-36,62],[14,29],[-10,86],[23,49],[45,-24],[71,-17],[24,-82],[11,-73],[-5,-69],[14,-6],[13,-68],[17,-48],[17,5],[57,-119],[12,-52],[33,-111],[3,-126],[29,-29],[8,-82],[8,-32],[31,-50],[13,-58],[-10,-6],[-19,46],[-75,98],[-3,-31],[-23,-74],[11,-8],[14,47],[8,-19],[23,10],[5,-37],[20,-13],[10,-29],[-38,-14],[8,-36],[32,21],[14,-52],[16,-14],[11,-87],[8,-9],[-12,-49],[-20,9],[2,-32],[22,-22],[11,8],[3,46],[14,36],[9,-21],[5,-91],[-15,-34],[4,-36],[-22,-94],[-29,-40],[18,-23],[27,59],[15,-10],[0,-203],[7,-72],[-20,-105],[-37,-9],[-26,48],[-14,-19],[-17,38],[-1,37],[-38,-2],[17,53],[27,-10],[1,39],[-19,42],[-19,13],[-35,78],[9,38],[10,115],[-15,9],[-11,-58],[7,101],[8,28],[-11,39],[-5,-55],[-27,-21],[14,-103],[-18,-58],[-47,56],[-4,35],[17,58],[-18,100],[-20,-5],[-10,50],[-21,3],[12,-78],[18,-65],[6,-72],[-7,-36],[15,-17],[20,-145],[24,-26],[-4,58],[24,18],[28,-65],[4,-124],[-14,-16],[-18,74],[-7,-7],[23,-170],[-29,0],[-26,32],[-2,60],[-20,40],[-49,177],[-10,22],[-2,84],[-12,10],[-8,61],[29,8],[-27,33],[3,119],[-33,-28],[-10,26],[-18,-19],[-9,42],[6,84],[33,30],[11,-63],[17,20],[-13,29],[6,39],[14,20],[14,-14],[22,44],[-29,96],[14,12],[-16,32],[4,66],[-24,-21],[-49,87],[-4,28],[16,-1],[-9,50],[3,35],[-27,18],[6,-57],[-10,-13],[-32,39],[-16,58],[12,52],[28,14],[37,-54],[28,35],[-17,67],[-18,16],[-12,-20],[-9,17],[8,30],[-2,42],[7,63],[-5,16],[-13,-47],[-27,-65],[-22,-33],[-23,38],[-5,45]],[[12611,83642],[15,25],[14,-33],[-27,-31],[-2,39]],[[12594,82026],[14,28],[11,-6],[4,-52],[-8,-48],[-10,3],[-11,75]],[[12476,82024],[28,22],[1,-43],[31,33],[8,75],[7,-2],[-9,-101],[-22,-24],[-20,-56],[-18,17],[8,30],[-14,49]],[[12463,83115],[17,52],[16,17],[7,33],[33,-1],[1,26],[28,-40],[11,-83],[18,-54],[31,-2],[9,-21],[10,26],[-29,44],[-13,80],[-2,55],[-35,79],[11,53],[34,26],[51,-37],[25,-9],[47,-44],[31,-20],[7,14],[57,-11],[30,-74],[14,-82],[3,-56],[9,-23],[23,-11],[16,-48],[5,-46],[33,-52],[9,-64],[15,-34],[-31,-38],[-20,-42],[-26,-24],[-16,16],[-31,4],[-43,24],[5,-48],[-23,-51],[-40,25],[-19,29],[-12,-47],[-15,-20],[-25,-2],[-17,15],[-3,87],[-11,32],[-30,-64],[13,-29],[-2,-90],[-23,-3],[-2,-31],[10,-51],[-11,-51],[-2,-62],[-17,-50],[4,-39],[-9,-64],[-10,-11],[-25,15],[-14,-103],[-15,19],[-12,52],[-7,63],[-1,109],[-10,87],[2,75],[14,48],[-3,57],[15,101],[-12,28],[-22,-1],[5,77],[-20,56],[-8,75],[2,43],[-5,91]],[[12311,84926],[43,-96],[7,-47],[14,-9],[8,-130],[19,1],[21,38],[11,-23],[20,-2],[21,-29],[54,13],[-3,-89],[25,-75],[2,-52],[21,-52],[14,-87],[17,-55],[2,-142],[21,-60],[4,-65],[-9,-2],[-5,47],[-38,120],[-10,115],[-19,37],[-9,53],[-21,0],[26,-101],[4,-34],[-13,-23],[35,-121],[23,-49],[-2,-62],[24,-113],[-19,6],[15,-102],[0,-27],[-25,-62],[-20,26],[-17,-1],[4,-34],[-21,-104],[-38,-83],[-24,-25],[-2,-33],[-31,-65],[-29,3],[-9,89],[-4,135],[21,80],[15,23],[-16,31],[-1,69],[14,6],[12,-39],[6,23],[-40,141],[-1,58],[-18,60],[-5,82],[-11,43],[8,125],[-12,81],[-3,95],[-11,91],[4,44],[-20,93],[-17,45],[-9,77],[-6,101],[3,42]],[[12292,85061],[35,-45],[27,-125],[-10,-5],[-22,115],[-23,19],[-7,41]],[[12202,85643],[15,-71],[0,-46],[-10,29],[-5,88]],[[12106,83714],[16,11],[1,26],[28,65],[-4,68],[36,64],[18,-12],[25,-85],[15,10],[18,-58],[23,-24],[38,4],[22,-14],[12,-79],[-2,-49],[-20,35],[-19,-2],[-1,-22],[21,-25],[11,-46],[29,-278],[-1,-71],[12,-56],[0,-58],[18,-142],[5,-107],[-5,-112],[-11,1],[8,-81],[3,-240],[-9,-111],[-11,6],[-28,70],[-10,86],[-21,59],[-40,212],[4,48],[22,23],[-18,30],[-26,-31],[-14,88],[-11,-15],[-17,42],[-12,55],[2,34],[-14,-22],[-10,24],[-30,2],[-19,96],[19,3],[10,-29],[10,13],[-3,105],[19,53],[6,38],[-39,86],[24,63],[-4,22],[14,35],[4,53],[-33,16],[-21,-28],[-14,79],[-26,72]],[[12097,84881],[16,18],[19,-7],[16,-52],[-29,-6],[-22,47]],[[12062,83572],[4,48],[-3,66],[25,9],[34,-62],[15,-74],[12,-19],[17,30],[23,-10],[-16,-82],[-24,-14],[-27,-161],[-12,6],[-40,-30],[-9,8],[3,102],[25,47],[1,50],[-22,4],[2,29],[-13,31],[5,22]],[[11978,85151],[9,14],[7,-59],[-16,45]],[[11978,84786],[30,41],[3,-53],[-16,-19],[-17,31]],[[11861,84371],[5,174],[16,33],[8,-9],[29,60],[3,51],[-12,92],[32,-2],[0,-54],[12,-60],[28,61],[29,-6],[17,-20],[17,49],[36,50],[14,-55],[41,-30],[25,-53],[-12,-78],[-31,-76],[4,-49],[12,-5],[8,60],[32,108],[15,12],[34,-55],[46,-10],[11,-32],[29,-16],[15,-79],[-4,-67],[-22,-44],[-37,49],[-10,-8],[12,-40],[18,-18],[33,-75],[-21,-29],[-25,-2],[4,-28],[21,-13],[23,24],[7,-95],[14,-69],[12,-143],[-14,-42],[-42,-11],[-17,12],[-44,95],[-65,99],[-27,50],[-22,-26],[-9,29],[-4,-32],[30,-55],[22,-8],[-21,-31],[6,-25],[0,-72],[-9,-50],[-31,-87],[-51,47],[-1,38],[-42,85],[-20,90],[-12,-38],[-19,43],[-10,79],[4,25],[-18,86],[2,24],[-16,57],[-26,30],[-7,49],[-25,36]],[[9331,87212],[28,-14],[12,-44],[-27,-9],[-13,67]],[[9232,87245],[16,14],[58,-26],[-3,-31],[-21,-10],[-50,53]],[[8867,87809],[26,35],[27,3],[15,-16],[-18,-53],[-50,31]],[[8817,87545],[4,86],[28,16],[21,-89],[-11,-44],[-37,-10],[-5,41]],[[8816,87079],[2,14],[43,47],[1,-36],[-40,-59],[-6,34]],[[8698,86532],[8,21],[3,71],[23,12],[-3,42],[21,54],[16,7],[-3,41],[30,34],[9,30],[43,75],[22,118],[27,44],[-3,40],[10,71],[27,34],[4,-43],[24,2],[-17,-51],[9,-17],[24,28],[8,-22],[-11,-37],[-62,-118],[-49,-129],[-8,-80],[-33,-60],[30,-57],[-19,-42],[-23,-8],[-22,15],[-17,-57],[-9,6],[-45,-47],[-14,23]],[[8692,87068],[44,270],[11,-41],[12,13],[-4,66],[44,84],[0,-54],[-12,-32],[-3,-82],[-20,-37],[20,-42],[-24,-97],[2,-46],[-17,-104],[-24,45],[-3,25],[-25,7],[-1,25]],[[8672,87628],[15,31],[17,-19],[17,-48],[-24,-45],[-25,81]],[[17950,55027],[5,31],[24,-13],[25,26],[-2,40],[18,63],[1,79],[-15,136],[-16,8],[-7,-13],[-13,25],[-3,-17],[-14,68],[7,67],[2,142],[-15,41],[9,65],[-8,51],[19,9],[28,138],[9,24],[-4,46],[4,110],[8,12],[-2,74],[-7,64],[1,51],[6,6],[-2,55],[-7,20],[28,116],[0,69],[8,28],[23,29],[10,40],[17,21],[1,19],[25,65],[-1,49],[-11,54],[-14,19],[-31,100],[-13,7],[2,58],[-26,239],[-23,63],[-7,69],[-16,57],[1,147]],[[17974,57684],[6,95],[-10,22],[21,43],[0,72],[-9,178],[-6,65],[-11,47],[-4,58],[6,36],[0,103],[-9,38],[3,39],[-7,31],[3,51],[-5,59],[4,56],[9,24],[-10,31],[-12,97],[4,43],[-7,80],[25,31],[9,29],[5,-14],[12,25],[17,-1],[2,-25],[24,19],[13,-3],[18,-71],[-2,-28],[21,-51],[24,11],[24,183],[5,15],[1,230],[-2,272],[0,437]],[[18136,60011],[200,0],[222,0],[313,1],[97,1],[160,2],[6,-7],[235,0],[162,1]],[[19531,60009],[0,-1691],[-1,-237],[1,-30],[0,-925],[-1,-608],[1,-145],[-1,-113],[0,-2847]],[[19530,53413],[-64,2],[-201,-1],[-128,-1],[-172,0],[-359,476],[-212,269],[-102,136],[-368,471],[5,66],[-5,17],[1,60],[8,16],[17,103]],[[19530,64667],[242,0],[154,2],[327,0],[66,-5],[137,-1],[242,1],[7,2],[217,2]],[[20922,64668],[282,1],[135,0],[140,0],[0,-1163]],[[21479,63506],[1,-381],[0,-434],[1,-193],[0,-1270],[1,-137],[0,-1089]],[[21482,60002],[-183,3],[-22,5],[-62,1]],[[21215,60011],[-204,-3],[-169,-5],[-184,0],[-34,2],[-301,-1],[-186,-2],[-2,9],[-152,-1],[-230,-1],[-222,0]],[[19531,60009],[0,583],[1,36],[0,738],[-5,129],[0,517],[2,216],[0,1857],[1,46],[0,536]],[[27414,45876],[14,60],[5,-33],[-14,-44],[-5,17]],[[27386,45813],[9,39],[11,4],[-5,-33],[-15,-10]],[[27310,45701],[52,90],[6,-30],[-45,-80],[-13,20]],[[27118,45540],[19,106],[20,46],[25,43],[3,23],[36,66],[38,-67],[4,-52],[14,-43],[-4,-11],[-40,-48],[-3,27],[-27,-5],[-3,-24],[-46,-73],[-36,-15],[0,27]],[[27062,45510],[39,24],[-10,-43],[-17,-14],[-13,8],[1,25]],[[27020,45533],[6,35],[12,-10],[-5,-41],[-13,16]],[[26992,48019],[5,-18],[19,-211],[8,-28],[17,-26],[7,17],[14,-21],[-14,-31],[-9,-1],[-21,50],[-7,28],[-13,115],[-6,76],[0,50]],[[26806,45614],[15,13],[4,-23],[-20,-10],[1,20]],[[26322,51623],[29,47],[0,-29],[-16,-37],[-11,-6],[-2,25]],[[26229,53027],[6,-79],[11,-52],[2,-83],[6,-75],[14,-48],[136,-25],[261,-56],[206,-51],[135,-34],[-5,-14],[2,-57],[7,-26],[-3,-71],[11,-76],[37,13],[0,75],[6,47],[3,119],[-12,91],[4,60],[-1,49],[8,16],[-4,24],[12,-8],[9,59],[15,-7],[7,-33],[17,-3],[18,-28],[7,-25],[33,-19],[17,-18],[14,15],[13,-19]],[[27221,52688],[4,-13],[-4,-113],[3,-92],[-4,-22],[10,-25],[4,-95],[1,-113],[23,-389],[13,-129],[0,-51],[28,-302],[32,-288],[29,-229],[65,-412],[38,-200],[4,-63],[10,-83],[-18,-57],[-4,-54],[-1,-87],[5,-130],[6,-96],[16,-145],[35,-269],[15,-166],[5,-84],[5,-29],[11,-140],[17,-152],[9,-66],[6,-94],[13,-109],[17,-258],[-1,-235],[-7,-175],[-5,-210],[-3,-37],[-8,-286],[0,-169],[-3,-80],[-7,-81],[0,-44],[-6,23],[3,51],[-5,20],[-16,-25],[-10,-102],[-6,-17],[-1,-64],[-8,-40],[-2,-78],[5,-33],[-2,-46],[6,-16],[-8,-53],[-8,-13],[-1,-49],[21,39],[25,194],[7,41],[0,-41],[-8,-83],[-34,-222],[-9,-82],[-25,-93],[-34,-139],[-24,-66],[-3,12],[34,122],[14,40],[7,53],[3,81],[5,32],[-6,23],[-9,-11],[-7,26],[-6,-18],[-34,-22],[-14,-41],[-9,-6],[-18,45],[-18,-13],[-7,-41],[-27,-18],[-23,-6],[-17,52],[-8,68],[2,79],[6,60],[6,-3],[-2,49],[-12,97],[-11,47],[2,34],[-8,62],[-11,32],[-5,85],[-6,18],[-11,-15],[-9,101],[-24,31],[-1,16],[-21,38],[-21,55],[-11,-13],[-8,-39],[-16,126],[-15,148],[-5,173],[-7,109],[-7,57],[-28,113],[-11,9],[-1,52],[-12,23],[0,-64],[-14,-11],[-1,66],[-8,113],[-12,51],[3,24],[13,-3],[9,-39],[11,159],[-2,86],[-8,14],[0,40],[8,10],[-4,31],[-12,-4],[-5,-33],[-11,-11],[8,-148],[-9,-20],[-20,-11],[-5,-50],[0,75],[-6,50],[-17,94],[-26,177],[-9,94],[-19,140],[-27,149],[-14,56],[-4,58],[-10,61],[10,-19],[1,-30],[15,30],[10,72],[12,28],[13,98],[13,34],[-2,23],[14,26],[11,84],[-5,75],[-22,21],[5,-113],[-22,30],[6,34],[-1,65],[-5,39],[-38,71],[1,-65],[-11,-28],[11,-37],[16,-6],[11,-110],[-10,-42],[0,-62],[-4,-27],[-21,-6],[-3,-32],[7,-38],[-9,-30],[-4,40],[2,83],[-14,85],[-9,26],[-8,58],[6,182],[-5,66],[-4,164],[9,1],[0,-93],[4,-89],[9,-7],[-4,153],[9,37],[1,41],[8,44],[0,38],[7,50],[0,39],[9,47],[1,91],[5,83],[-6,66],[2,56],[-13,29],[4,42],[-9,109],[12,64],[-21,110],[3,31],[-8,55],[-10,3],[5,33],[-1,49],[-7,13],[-47,23],[-9,-51],[-7,-4],[-9,100],[3,45],[-14,32],[-12,9],[-2,63],[-7,58],[-11,45],[-15,6],[-5,44],[-24,48],[0,111],[-4,67],[-12,7],[-10,38],[-13,17],[-13,61],[0,42],[-9,35],[-5,51],[-14,44],[-28,62],[-40,72],[-26,75],[-11,-2],[-26,-33],[-31,29],[-1,-35],[-26,-69],[9,-99],[-3,-28],[-10,-7],[-15,15],[-5,26],[-24,-22],[-31,-73],[-65,-132],[-6,2],[7,44],[-10,12],[-7,-39],[-15,-41],[-36,1],[13,-49],[2,-38],[16,-22],[30,53],[29,40],[27,84],[3,-13],[-24,-82],[-28,-43],[-35,-66],[-12,-14],[-10,33],[-16,22],[-23,51],[-19,7],[-17,-28],[-13,94],[-5,119],[8,42],[0,-105],[6,-91],[7,-22],[10,39],[1,97],[-17,105],[-18,60],[-17,13],[-15,40],[-16,71],[-27,47],[-22,69],[-41,95],[-47,76],[-58,70],[-31,20],[-62,18],[-33,-5],[-47,-25],[-65,-49],[-32,-15],[-7,10],[-63,-51]],[[26061,57664],[39,-2],[136,6],[183,1]],[[26419,57669],[196,-2],[-1,6],[143,10]],[[26757,57683],[-3,-72],[-31,-68],[-26,-105],[1,-36],[-8,-26],[3,-64],[30,-82],[17,-7],[23,-104],[23,-51],[28,16],[8,-12],[8,-64],[3,-64],[12,-30],[3,-50],[11,-52],[0,-51],[7,-68],[12,-24],[8,-67],[14,-48],[11,-101],[9,-1],[19,-72],[29,-52],[29,-98],[4,-61],[9,-41],[1,-40],[13,-38],[12,-2],[17,-37],[18,-93],[15,-26],[4,-24],[-7,-43],[4,-39],[-4,-32],[28,-82],[-4,-30],[13,-42],[11,5],[-2,-41],[8,-45],[27,-55],[9,1],[16,-58],[19,-43],[-5,-67],[12,-64],[2,-49],[9,-15],[0,-85],[4,-32],[-5,-45],[6,-8],[4,-48],[-5,-41],[12,-48],[25,-26],[0,-23],[23,-81],[-4,-34],[15,-105],[4,4],[6,-76],[-10,-44],[11,-67],[-4,-26],[5,-62],[21,-34],[11,17],[22,-71],[9,-4]],[[27376,54230],[12,-12],[-5,-64],[-14,-29],[-10,15],[-6,-48],[10,-8],[-16,-60],[-21,23],[-3,-56],[11,-11],[-9,-59],[-17,-54],[-17,13],[-3,-16],[12,-33],[8,5],[-1,-84],[-7,-62],[-28,-26],[0,-22],[17,10],[6,-24],[-23,-131],[-6,-91],[7,-13],[-5,-30],[-5,-97],[-13,-22],[-8,-59],[-9,-3],[0,-71],[-7,-69],[-7,2],[-12,-44],[13,-24],[11,24],[1,-81],[-16,-161],[5,-70]],[[25527,65491],[15,-41],[12,20],[7,-15],[-6,-40],[27,-23],[29,1],[28,25],[52,75],[31,59]],[[25722,65552],[90,-1],[198,-1],[187,1],[87,1],[0,-75]],[[26284,65477],[1,-242],[0,-1380],[-3,-437],[0,-441],[-2,-278],[0,-238]],[[26280,62461],[-19,-45],[-2,-20],[16,-71],[2,-31],[-11,-38],[3,-37],[17,-7],[4,-25],[-13,-46],[6,-44],[-22,3],[-16,-23],[-9,5],[-35,-63],[-14,-39],[-19,10],[-10,43],[-26,-7],[-16,7],[-12,-33],[4,-125],[6,-71],[-16,-40],[-7,-44],[-30,-34],[-19,-161],[-19,-39],[-14,24],[-10,-13],[-6,-63],[-16,-72],[1,-87],[-5,-70],[-8,-24],[-23,-18],[-4,-36],[-13,58],[-22,1],[-26,55],[-1,94],[-21,67],[-8,-2],[1,-34],[13,-12],[-1,-25],[-13,-2],[-8,-29],[-8,23],[-9,-29],[9,-17],[-6,-42],[-18,-9],[-2,-94],[5,-38],[-23,-9],[-2,-63],[-11,-29],[-7,24],[5,51],[-10,10],[-10,-25],[-10,22],[-12,89],[-17,-2],[-14,-52],[-29,-27],[-10,-30],[-5,-97],[-7,-27],[-11,-3],[-8,62],[-18,13],[-22,57],[-22,44],[-20,6],[-14,-37],[-14,19],[-6,49],[-8,6],[-7,-66],[11,-64],[-13,-40],[-11,3],[3,56],[-5,30],[-42,-31],[-11,52],[-9,4],[-10,-40],[10,-91],[-12,-47],[-23,32]],[[25386,60941],[-11,2],[-4,34],[12,-9],[-16,92],[24,-8],[-15,29],[15,67],[1,60],[-8,26],[19,19],[2,38],[-12,-19],[22,73],[-14,60],[-4,59],[9,-10],[9,68],[5,-35],[7,41],[8,-33],[13,102],[8,9],[13,84],[-2,38],[24,42],[0,66],[9,83],[7,32],[14,12],[14,76],[-1,42],[-15,94],[11,111],[-18,40],[1,79],[-16,55],[-3,73],[19,60],[-9,50],[2,60],[6,32],[13,9],[0,347],[-1,0],[0,397],[1,12],[0,294],[1,247],[0,1196],[1,254]],[[21479,63506],[257,-1],[104,0],[263,-1],[273,1],[163,0],[279,-1],[263,-1],[144,0],[133,0]],[[23358,63503],[16,-60],[13,-11],[1,-43],[13,6],[5,-36],[26,-14],[8,41],[24,-13],[-4,-28],[7,-33],[11,-11],[-4,-42],[-9,-1],[3,-36],[12,16],[-1,-49],[-10,-6],[-13,24],[-5,-75],[-15,-19],[-7,-41],[2,-41],[-17,-24],[1,-48],[15,-41],[1,-29],[16,-31],[12,-61],[14,0],[5,-21],[-9,-25],[6,-79],[18,-52],[-3,-28],[15,-13],[5,-31],[14,-11],[9,16],[5,-31],[20,-3],[-5,-41],[0,-444],[-1,-120],[0,-696],[-1,-52],[0,-779],[-1,-97],[0,-281]],[[23550,60009],[-249,1],[-196,-1],[-169,0],[-218,0],[-208,-1],[-258,2],[-103,0],[-154,3],[-149,-4],[-209,-4],[-155,-3]],[[30863,68384],[14,7],[-7,-35],[-7,28]],[[30827,68345],[7,83],[6,-34],[19,-55],[-15,-45],[-5,34],[-12,17]],[[30819,68560],[3,42],[11,-71],[-14,29]],[[30732,68434],[14,2],[3,-41],[-17,39]],[[30712,67988],[8,37],[1,-75],[-9,38]],[[30703,68290],[8,41],[25,45],[11,-50],[-9,-8],[14,-78],[-11,-39],[-18,-13],[-12,24],[5,25],[-3,50],[-10,3]],[[30697,68452],[13,68],[2,64],[9,25],[6,-26],[-9,-35],[1,-36],[-8,-70],[-10,-29],[-4,39]],[[30213,67064],[-35,81],[0,69],[6,42],[-41,128],[-9,53],[8,101],[-4,10],[6,88],[-6,23],[-5,313],[0,89],[-11,861],[-15,757]],[[30107,69679],[21,15],[0,33],[25,-41],[-1,-38],[7,-43],[11,-15],[13,85],[2,86],[-6,28],[12,36],[8,-3],[12,-44],[21,-9],[1,39],[-24,83],[-1,32],[22,107],[14,27],[11,43],[8,-1],[15,41],[24,38],[-9,71],[21,66],[23,45],[5,56],[-7,28],[-14,0],[0,66],[10,38],[-8,14],[15,51],[5,46],[-15,44],[16,115],[8,18],[-1,37],[17,32],[14,59],[11,8],[17,324],[215,890],[13,-3],[27,-38],[11,4],[-3,-58],[1,-141],[4,-18],[37,-73],[25,43],[26,30],[28,2],[11,52],[30,11],[25,-12],[0,62],[16,23],[25,-6],[23,-36],[4,-32],[33,-68],[36,-132],[0,-15],[28,-51],[0,-545],[3,-693],[-1,-71],[9,-30],[-15,-39],[14,-70],[-15,-34],[1,-136],[23,-18],[3,20],[10,-57],[19,-28],[30,-23],[14,19],[8,-62],[1,-56],[-13,8],[-11,-22],[7,-68],[16,-63],[-9,-73],[-10,-41],[23,-116],[0,-23],[18,-40],[13,28],[1,46],[18,-30],[19,-3],[13,-56],[6,-51],[-8,-14],[10,-32],[12,-98],[15,-38],[1,-118],[-12,-50],[-10,2],[-4,-32],[-32,-113],[-24,-25],[4,-22],[-15,-8],[6,42],[-4,85],[-27,-30],[12,-58],[-12,-43],[-11,13],[-13,-58],[-13,18],[-10,-12],[2,-35],[16,-40],[-22,-57],[-13,46],[-6,57],[-13,-10],[-3,-38],[-8,3],[-7,59],[-7,-62],[-9,-14],[-8,-74],[-7,19],[-6,-48],[-4,42],[-20,-51],[-5,27],[-12,-92],[-16,39],[0,36],[-10,-21],[-11,9],[2,-66],[-16,-71],[11,-33],[-35,-16],[-23,32],[-16,107],[6,29],[22,27],[-9,45],[-13,-35],[2,44],[-10,-3],[1,-68],[-5,0],[0,64],[-24,-56],[5,-35],[-6,-43],[14,-67],[-3,-45],[-23,-77],[9,-11],[-12,-31],[11,-56],[-5,-69],[-16,-10],[-3,85],[6,4],[-3,55],[-17,45],[-4,64],[15,51],[-19,40],[6,26],[-10,10],[-18,-21],[1,113],[11,44],[1,50],[-7,14],[-7,-46],[-14,-40],[-11,33],[-7,-32],[-15,-4],[14,-81],[-3,-48],[-12,-23],[-10,-71],[-4,-72],[-13,-78],[19,-30],[-13,-28],[10,-57],[-10,-38],[-27,4],[-13,-72],[-15,-1],[-2,-58],[-11,-9],[0,52],[7,37],[-9,15],[-3,-30],[-12,-13],[5,65],[-18,-9],[1,-52],[-16,-37],[-5,-50],[-12,51],[-2,-47],[-15,-32],[-12,26],[-3,-66],[-13,51],[-13,-92],[-23,-27],[-5,-19],[-5,83],[-16,5],[-15,-42],[-5,-39],[-20,4],[-7,-49],[-20,4],[-10,-49],[-3,-50],[5,-29],[-8,-32],[-13,29],[-22,-31],[-9,-46],[6,-67],[-8,-43],[-10,-15],[3,-33],[-14,-24],[-14,4],[-10,-25],[-11,-98],[5,-19],[-14,-80],[1,-22],[-14,-74],[-9,-13]],[[30332,65028],[13,-24],[29,5],[18,17],[12,70],[16,-105],[-1,-30],[-10,-16],[-33,4],[-41,60],[-3,19]],[[30177,65078],[18,0],[19,90],[27,60],[11,-15],[7,-70],[15,-27],[10,40],[-1,-84],[-41,1],[-31,-9],[-18,-47],[-16,61]],[[29500,66699],[224,-22]],[[29724,66677],[199,-23],[126,-12],[10,46],[21,1],[-1,62],[15,36],[19,-18],[9,62],[36,32],[15,-30],[8,13]],[[30181,66846],[2,-72],[9,-136],[25,-47],[12,42],[14,-34],[-16,-90],[-23,-7],[-38,-35],[12,-50],[-18,-50],[-7,9],[-5,-59],[-4,41],[-11,-53],[11,-74],[-13,10],[-5,-28],[8,-26],[-5,-27],[14,-14],[6,36],[14,8],[9,-47],[24,-28],[12,-42],[2,-46],[21,-93],[-1,-50],[-7,-39],[-12,-5],[3,-24],[21,-51],[12,8],[8,-24],[8,-83],[-5,-50],[13,-48],[23,-35],[34,-12],[9,-23],[19,44],[19,8],[27,33],[6,25],[-1,79],[-6,61],[-13,-31],[0,97],[-5,55],[-15,34],[-9,-7],[-5,-39],[-11,59],[13,11],[21,-18],[23,-58],[18,-123],[9,-119],[2,-137],[-15,-129],[-2,-44],[-7,9],[12,112],[-7,23],[-26,-5],[-43,-40],[-30,8],[-7,-28],[-17,-7],[-15,-62],[-33,-10],[-34,-66],[-16,-47],[-21,-28],[-23,-15],[6,26],[35,34],[16,47],[24,49],[5,40],[-2,117],[6,41],[-26,26],[0,-59],[-7,14],[-4,-50],[-14,3],[2,-32],[-31,-11],[-7,-49],[2,-44],[-6,-29],[-25,-23],[-12,17],[-10,-14]],[[30097,65246],[-3,189],[-18,18]],[[30076,65453],[-8,41]],[[30068,65494],[-10,48],[-19,33],[-5,56],[2,81],[-12,-6],[0,147],[-116,-13]],[[29908,65840],[-1,18],[-202,13],[-22,-4],[-42,6],[-3,-39],[-14,-6],[1,45],[-54,3],[-118,14],[-15,-1]],[[29438,65889],[-6,42],[34,395],[34,373]],[[22823,73980],[83,-1],[266,0],[229,-1],[0,449],[27,-37],[28,20],[29,-53],[8,-35],[14,-202],[7,-25],[18,-251],[-6,-69],[4,-54],[14,-43],[29,-45],[24,-12],[8,19],[44,-11],[11,-58],[61,-7],[48,-21],[8,-66],[-3,-49],[6,-12],[42,2],[5,15],[22,-2],[23,20],[-1,48],[33,46],[39,18],[9,-22],[53,0],[72,-98],[26,4],[1,-49],[-19,-7],[-4,-37],[16,-31],[41,13],[15,-54],[-6,-34],[6,-49],[24,-127],[25,27],[-8,84],[13,45],[15,-11],[42,16],[16,-44],[-2,-65],[17,-41],[14,9],[9,-36],[41,-9],[5,-67],[-4,-31],[20,-21],[23,13],[-3,-75],[22,28],[14,-22],[19,24],[34,17],[46,113],[17,13],[13,32],[25,30],[14,-13],[0,-67],[17,-17],[-6,-26],[10,-48],[16,-3],[35,29],[6,-29],[25,15],[26,-18],[19,13],[48,8],[29,-28],[9,-66],[34,-53],[15,35],[20,9],[13,-20],[23,6],[11,-18],[25,22],[-27,-56],[-10,20],[-4,-34],[-17,-15],[-26,-58],[-37,-34],[-14,-37],[-52,-44],[-48,-54],[-15,-6],[-42,-45],[-4,-14],[-51,-77],[-37,-79],[-72,-183],[-17,-69],[-55,-178],[-26,-72],[-26,-41],[-26,-88],[-11,-11],[-28,-83],[-10,-10],[-61,-134],[-9,-25],[8,-50],[14,-46]],[[24276,71309],[-21,50],[-14,-11],[-3,-29],[-16,-14],[9,-19],[-11,-43],[-22,16],[0,-685],[-10,-10],[-6,-59],[-24,7],[-10,-56],[-14,13],[-8,-38],[-25,-23],[-20,-47],[-20,-148],[-22,-49],[-7,-114],[1,-53],[21,-21],[10,9],[14,-32],[-1,-31],[23,-85],[-1,-50],[-15,-47],[1,-29],[-17,-49],[2,-91],[-4,-32],[6,-91],[-16,-58],[11,-34],[-2,-65],[6,-41],[-7,-42],[3,-75],[-12,-80],[5,-36],[16,-27],[31,-87],[-1,-24],[14,-16],[9,-44],[50,-9],[12,-17],[10,-78],[14,-38],[50,-51],[22,-39],[14,-40],[0,-53],[8,-15],[5,-84],[17,-45],[27,-41],[3,-29],[36,-90],[39,-29],[15,-55],[30,-136],[9,-75],[-8,-113],[2,-71],[10,-37],[-4,-44],[8,-53]],[[24498,67577],[-204,0],[-224,0],[-116,-1],[-223,0],[-180,1],[-313,0],[-199,0]],[[23039,67577],[0,1215],[1,101],[-1,302],[0,479],[-10,65],[-36,59],[-18,4],[-14,55],[-9,73],[-26,98],[5,46],[25,62],[22,39],[12,63],[14,46],[4,128]],[[23008,70412],[-4,106],[6,37],[-11,188],[-1,129],[-13,27],[-20,98],[-5,49],[-4,119],[-11,57],[-2,39],[5,68],[-6,112],[5,17],[6,117],[-6,-11],[-11,51],[1,171],[-5,92],[-2,114],[3,50],[-7,103],[1,217],[-5,3],[-7,89],[-11,92],[-8,17],[-11,101],[-3,58],[-11,34],[-5,121],[-16,101],[-3,110],[7,53],[-8,93],[3,52],[-1,107],[-7,59],[7,76],[9,24],[3,62],[-15,80],[-8,124],[-6,24],[-11,98],[3,40]],[[28860,63072],[14,65]],[[28874,63137],[9,32],[5,61],[12,42]],[[28900,63272],[17,44],[38,25],[25,45],[0,69],[16,25],[7,33],[34,72],[18,15],[12,51],[10,-8],[17,39],[-14,71],[-20,41],[-7,52],[-21,54],[-7,68],[-25,19],[-4,45],[2,95],[-10,37],[-17,-5],[-9,14],[-2,83],[7,30],[-8,22],[9,100],[11,-5],[23,113],[-24,120],[13,48],[18,29],[16,56],[-4,24],[17,35],[11,49],[14,124],[22,69],[16,13]],[[29101,65083],[88,-173],[132,-246],[3,-19],[-20,-187],[-12,-65],[-4,-65],[-6,-22]],[[29282,64306],[-7,-34]],[[29275,64272],[-37,-35],[-4,-84],[-9,-16],[-3,-50]],[[29222,64087],[0,-43],[19,-28],[16,18],[24,-44],[14,-9],[4,44],[4,-90],[-3,-107],[-14,-182],[-13,-247],[-5,-173],[-40,-241],[-11,-48],[-9,-9],[3,-32],[-10,-55],[-20,-63],[-1,-19],[-31,-55],[-32,-108],[-21,-118],[-22,-149],[-20,-60],[-19,-14],[-11,14],[6,88],[15,97],[3,69],[-21,37],[-18,4],[-6,25],[-18,-3],[-7,-36],[-9,24],[-2,47],[-18,37],[-3,30],[-10,-12],[-15,68],[-7,-8],[-18,58],[-10,56],[-19,25],[6,140],[-12,29]],[[28861,63044],[-1,28]],[[28814,58772],[18,-19],[12,-74],[1,-47],[-15,9],[2,45],[-18,86]],[[28734,57762],[8,60],[8,0],[47,86],[15,12],[14,33],[12,2],[16,35],[13,10],[5,74],[11,252],[0,54],[-8,95],[-6,105],[3,-2],[11,-106],[5,-95],[-3,-136],[-15,-286],[-24,-8],[-50,-64],[-43,-78],[-19,-43]],[[27156,59531],[84,-16],[55,-3],[95,-15],[37,4],[114,-21],[48,-2],[170,-2],[279,0],[74,4],[264,0],[106,-1],[0,10],[31,-2],[120,0],[142,0]],[[28775,59487],[2,-58],[17,-245],[16,-158],[23,-156],[35,-271],[-9,14],[-18,146],[-14,80],[-13,11],[-9,174],[-16,155],[-8,23],[3,39],[-5,89],[-10,30],[-4,48],[-25,13],[-1,40],[-13,-20],[6,-61],[16,-48],[11,10],[0,-67],[15,-135],[9,-61],[-1,-26],[11,-75],[0,-47],[-19,64],[1,37],[-13,61],[-3,38],[-12,12],[6,-38],[-3,-28],[14,-39],[-31,25],[-32,118],[-15,12],[19,-97],[10,-17],[6,-52],[-9,-23],[-24,-14],[-21,71],[7,-63],[10,-27],[-7,-14],[-31,45],[-13,5],[-5,29],[-18,24],[23,-73],[21,-23],[-7,-19],[-24,-8],[-13,-62],[-16,-22],[-17,1],[-8,31],[-20,12],[-12,121],[0,61],[12,78],[-5,13],[-14,-76],[-2,-76],[8,-94],[11,-77],[-5,-42],[8,-34],[40,10],[37,47],[9,-49],[13,6],[13,30],[26,24],[32,-1],[14,-41],[0,-43],[-14,-78],[3,-55],[2,-164],[9,5],[7,115],[3,150],[14,40],[-6,33],[14,20],[25,-21],[16,-94],[7,-65],[-4,-52],[7,-98],[-8,-25],[4,-54],[-13,-54],[-17,-10],[-6,18],[-10,-16],[-6,-40],[-10,-9],[-3,-43],[-7,-11],[-7,-71],[-13,-15],[-3,-46],[-17,-25],[-3,-24],[-26,25],[-29,-4],[-26,18],[-5,25],[-10,-14],[-15,45],[-13,115],[31,3],[5,45],[-28,-25],[-12,11],[-9,-33],[9,-57],[6,-86],[-7,0],[-29,47],[-14,-10],[-20,34],[-31,30],[-23,48],[-1,-29],[17,-61],[21,-5],[63,-102],[46,-28],[8,-31],[1,-40],[-7,-56],[-13,-54],[1,-28],[-9,-53],[-15,-42],[-50,-112],[-50,112],[1,-65],[24,-55],[36,-43],[36,80],[13,2],[27,30],[4,62],[11,-14],[3,-66],[8,-31],[18,-5],[-9,75],[20,-29],[2,-85],[-17,-75],[-18,-13],[0,-34],[-11,-20],[-14,-84],[-7,-71],[-17,20],[1,80],[-10,19],[1,-82],[-16,-7],[42,-64],[23,123],[33,120],[24,75],[47,176],[8,-21],[-28,-83],[-26,-96],[-22,-62],[-21,-78],[-18,-82],[-21,-115],[-3,-32],[-4,67],[-35,55],[-39,1],[-60,-38],[-29,-33],[-20,-32],[-32,-81],[-39,-75],[-26,-63],[-37,-113],[-14,-55],[-25,-128],[-14,-111],[-10,-112],[-9,-69],[-4,-69],[-13,7],[-3,34],[-21,21],[-23,9],[-28,-2],[-30,-12],[-35,-42],[-8,-17]],[[28030,56345],[-93,330],[-104,362],[-31,116],[-88,302],[-61,1],[-74,7],[-178,10],[4,135],[-42,199],[-30,-73],[-5,21],[7,48],[-2,53],[-55,13],[-105,16],[-188,29],[-23,-20],[-5,39],[-12,-52],[-7,9],[-20,-27],[-6,5],[-29,-47],[-28,-60],[-7,21],[-91,-99]],[[26419,57669],[9,275],[22,48],[3,-26],[28,4],[22,63],[-5,57],[9,25],[-4,44],[17,62],[13,15],[8,48],[16,8],[15,45],[80,7],[11,50],[22,32],[5,26],[10,-7],[16,48],[4,35],[16,4],[8,40],[21,29],[24,-18],[26,115],[-3,63],[10,30],[15,-36],[20,98],[33,70],[10,-40],[-5,-70],[15,-20],[28,62],[15,93],[15,35],[17,21],[12,-5],[9,33],[19,-12],[4,-50],[15,0],[14,28],[33,200],[21,53],[11,12],[8,-23],[17,0],[-10,74],[7,65],[6,12],[-4,80],[9,60]],[[20923,73979],[188,-1],[322,0],[212,0],[92,0],[193,1],[160,-1],[135,0],[141,1],[256,1],[201,0]],[[23008,70412],[-210,-1],[-186,1],[-119,1],[-252,4],[-192,2],[-179,2],[-253,1],[-123,0],[-292,1],[-173,0],[-105,0]],[[20924,70423],[0,2828],[-1,17],[0,711]],[[23550,60009],[0,-581]],[[23550,59428],[6,-130],[7,-206],[6,-127],[14,-355],[4,-82],[15,-387],[-2,-319],[-3,-261],[-1,-235],[-2,-170],[-2,-417],[-5,-642]],[[23587,56097],[-9,-25],[-19,73],[-16,-13],[-1,23],[-17,-1],[-18,79],[-15,-16],[-12,5],[-21,78],[-7,58],[-22,2],[-23,85],[-27,28],[-7,-68],[-11,-32],[-13,-7],[-34,4],[0,15],[-21,-7],[-7,61],[-10,3],[-24,-52],[-20,3],[1,-45],[-13,9],[-9,-31],[-29,61],[-1,-30],[-30,-29],[-15,13],[1,-20],[-14,8],[-8,-90],[-14,-14],[-19,19],[-7,-81],[-12,-3],[-1,22],[-17,79],[-21,-6],[-8,57],[-11,-4],[-16,30],[12,58],[-25,16],[-8,-86],[-18,-9],[-4,42],[-13,14],[-6,-33],[-9,25],[-6,95],[-5,11],[-14,-27],[-6,15],[3,-73],[-16,-57],[-13,19],[11,-42],[-13,-22],[3,-64],[-11,-31],[-11,14],[-12,94],[10,30],[-2,66],[-9,28],[-10,-19],[-2,-42],[-13,19],[-9,-7],[-11,-64],[-20,5],[-5,30],[1,63],[-12,19],[-16,-27],[-11,25],[3,41],[-19,42],[-9,-3],[-12,-58],[-29,-92],[-12,-9],[-16,34],[-9,3],[4,65],[-5,-1],[7,60],[-7,20],[-13,-14],[-19,11],[-10,91],[8,35],[-4,50],[-17,-47],[-20,22],[-15,0],[-19,28],[-11,-40],[-3,-44],[-20,-26],[-24,96],[-21,23],[-12,-37],[-21,4],[-13,26],[-13,3],[-17,24],[-19,46],[-16,-27],[-9,15],[-12,-11],[-2,20],[-18,-3],[-5,140],[-18,56],[4,22],[-16,5],[-18,57],[-4,-92],[-12,-4],[-22,47],[-17,2],[-6,-49],[-30,15],[-24,78],[-37,143],[-20,-19],[0,2257],[-123,0],[-179,0],[-150,0],[-175,1],[-210,0]],[[21214,59429],[1,119],[0,463]],[[27478,65805],[48,61],[45,74],[9,24],[10,60],[13,3],[3,-28],[36,72],[47,74]],[[27689,66145],[0,-314],[1,-2],[247,-1],[77,3],[167,-2],[243,1],[105,3],[111,-4],[169,-1],[107,2],[14,-59],[5,4],[8,-100],[15,4],[27,-34],[10,-49],[-8,-32],[14,-21],[2,-159],[-8,-12],[25,-113],[1,-34],[11,5],[15,-33],[-2,-18],[25,3],[3,-22],[16,8],[-1,-30],[13,-55]],[[28900,63272],[-23,37],[-22,6],[-24,-20],[-15,-34],[-20,-82]],[[28796,63179],[-217,-1],[-118,-1],[-151,0],[-236,3],[-305,-2]],[[27769,63178],[-167,0],[-124,0],[0,1068]],[[27478,64246],[0,1559]],[[20920,69320],[5,4],[0,872],[-1,227]],[[23039,67577],[-40,0],[5,-22],[-7,-37],[22,-64],[-1,-110],[-14,-5],[8,-52],[-3,-31],[24,-3],[2,-83],[9,-35],[-7,-66],[-14,-16],[5,-56],[-8,-28],[6,-21],[-12,-46],[0,-80],[-11,-16],[-3,-52],[-11,-26],[1,-76],[15,-27],[17,-60],[10,-87],[-4,-45],[13,-31]],[[23041,66402],[-17,-7],[-5,30],[-24,-5],[-7,53],[-21,66],[7,52],[-11,16],[-21,3],[-1,40],[-28,35],[-12,-17],[-8,48],[-43,13],[-5,28],[-18,20],[-1,38],[-25,25],[-15,-14],[-15,13],[-7,-23],[-18,14],[-16,-13],[-16,11],[-18,-17],[-25,9],[-20,21],[-8,-11],[-9,-74],[-12,-29],[-19,-9],[-31,69],[-36,62],[-58,85],[-9,59],[-112,0],[-186,-1],[-153,1],[-214,-1],[-206,-2],[-62,4],[-178,0],[-143,1],[-293,1]],[[20922,66996],[0,345],[-1,8],[0,1828],[-1,143]],[[23587,56097],[8,8],[0,-54],[11,-25],[9,6],[-2,-36],[10,-9],[5,27],[8,-18],[3,29],[21,-27],[11,46],[12,-17],[5,-30],[6,21],[16,-22]],[[23710,55996],[0,0]],[[23710,55996],[1,-11],[0,-608]],[[23711,55377],[0,-1196],[8,-12],[11,-72],[18,-31],[9,-83],[15,-55],[-2,-34],[8,-56],[-7,-42],[3,-45],[-7,-28],[6,-51],[9,-32],[13,-6],[3,-35],[-6,-27],[14,-36],[-1,-32],[8,-15],[3,-49],[-6,-53],[12,-47],[6,2],[6,-113],[19,12],[-6,-102],[8,-31],[2,-54],[-13,-21],[-1,-33],[12,-55],[-9,-22],[-3,-38],[4,-63],[-9,-33],[-9,-63],[-3,-73],[-12,-25],[-2,-68],[-14,-30],[-3,-40],[7,-24],[5,-91],[-13,-51],[-6,-74],[16,-52],[1,-53],[-5,-39],[9,-79],[-12,-70],[9,-19],[-11,-51],[-14,-39],[-7,-78],[-13,-74],[-17,-45],[-2,-25],[9,-30],[17,-94]],[[23768,51502],[0,-14],[-46,3],[-37,-40],[-128,-208],[-28,-61],[-10,-54],[-15,7],[22,71],[9,47],[13,-1],[9,19],[8,46],[9,-16],[11,8],[-15,55],[-54,-54],[-8,26],[17,90],[4,80],[0,74],[-12,5],[-5,23],[-17,-29],[-10,-41],[-4,-50],[-15,-24],[-6,46],[-18,-45],[-2,-35],[9,-32],[-10,-50],[10,-55],[20,-17],[-6,-54],[11,-20],[2,-78],[-2,-67],[-8,-31],[-9,10],[-19,-71],[-22,-65],[-3,26],[-13,-8],[-2,-88],[6,-26],[13,44],[26,65],[3,19],[32,99],[15,23],[0,45],[26,-15],[-20,-61],[-62,-153],[-24,-69],[-4,-25],[-32,-91],[-40,-143],[-15,-8],[-69,-146],[-35,-80],[-53,-89],[-61,-112],[-34,-87],[-13,-42],[-15,-74],[-53,-111],[-24,-68],[-47,-155],[-32,-143],[-11,-83],[-14,-59],[-33,-221],[-24,-197],[-11,-127],[-10,-192],[-2,-108],[1,-103],[8,-205],[14,-207],[12,-134],[16,-229],[11,-260],[-7,47],[-5,147],[-12,189],[-11,152],[-24,16],[18,27],[-9,83],[-6,87],[-9,88],[-3,106],[1,138],[-1,122],[11,276],[16,180],[19,148],[14,70],[10,87],[8,35],[-2,47],[13,86],[18,38],[9,45],[18,127],[28,58],[8,53],[16,2],[35,105],[23,49],[24,23],[-4,43],[9,29],[-9,16],[-16,-41],[-20,-35],[-11,-40],[-17,-5],[-6,40],[0,60],[-18,12],[-6,-31],[0,-84],[-5,-25],[6,-41],[-4,-36],[-20,-56],[-17,-61],[-8,-1],[-18,30],[-3,43],[-32,-61],[-17,-67],[21,-22],[24,57],[8,-74],[-7,-23],[-38,-223],[-12,-2],[-6,55],[-21,-10],[-4,18],[-32,-11],[-11,12],[-6,-38],[12,-32],[15,-1],[11,17],[-4,-64],[7,-48],[15,-34],[17,-18],[-19,-146],[-13,-185],[-12,-106],[-20,-27],[-7,-27],[-11,18],[14,21],[3,59],[-8,3],[-6,-31],[-29,-75],[4,-32],[24,-16],[25,38],[8,2],[-5,-116],[3,-4],[-4,-202],[-6,-207],[-4,-3],[10,-230],[8,-65],[1,-84],[9,-1],[23,-215],[5,-29],[-9,-47],[4,-34],[-1,-62],[8,-72],[20,-11],[1,-35],[12,18],[2,-127],[-23,7],[-13,-8],[0,-19],[-21,-12],[-6,-99],[-20,11],[-7,40],[-15,3],[-6,55],[-11,4],[-18,98],[-31,12],[-11,33],[-17,-9],[-7,16],[-23,-17],[-4,18],[-13,-1],[-3,-29],[-10,31],[-20,-14],[-8,22],[-6,-22],[-14,20],[-8,30],[3,25],[-16,1],[-3,44],[-15,-1],[-21,75],[-9,-11],[-25,48],[-19,-22],[-13,35],[-15,69],[-10,8],[-2,33],[-8,12],[-18,-15],[-21,47],[-12,-3],[-8,20],[-12,-19],[-9,44],[6,50],[-10,56],[-11,13],[-3,98],[-6,42],[-3,79],[-8,25],[-1,49],[-7,64],[-17,43],[2,31],[-13,26],[-7,37],[5,20],[-11,46],[-9,7],[-1,52],[6,31],[-3,66],[4,29],[-4,86],[-16,25],[1,37],[-12,11],[9,30],[5,86],[-3,31],[4,60],[-13,10],[5,76],[-12,58],[-7,-14],[-7,46],[-9,-18],[-9,39],[-10,-6],[-18,90],[-9,11],[-3,38],[-8,-9],[-10,38],[0,50],[-7,26],[3,41],[-13,48],[2,47],[-17,16],[-7,81],[-10,23],[-8,70],[-35,53],[-4,53],[-7,-2],[-13,59],[2,38],[-17,100],[3,47],[-9,39],[9,29],[-12,11],[-9,47],[4,39],[-14,28],[1,33],[-15,28],[-4,51],[2,41],[-8,26],[-4,73],[-6,1],[-9,88],[-8,1],[-6,47],[1,76],[-7,106],[-18,46],[-10,40],[3,14],[-9,71],[-23,41],[-2,30],[-17,46],[-18,25],[-13,84],[0,21],[-26,21],[-6,44],[-23,7],[3,57],[-2,65],[-5,5],[-6,-67],[-6,27],[2,53],[-17,27],[-13,108],[-8,-4],[-9,32],[-13,-25],[-7,44],[-8,-27],[-37,-13],[-19,31],[-6,-8],[-15,22],[-22,-14],[-12,24],[-17,-7],[-4,-22],[-26,21],[-11,50],[-13,-3],[-20,40],[-14,-18],[-10,-111],[-34,19],[-9,-37],[-7,11],[-22,-32],[-7,10],[-8,-54],[2,-23],[-13,-40],[0,-50],[-7,0],[-2,-59],[-11,-30],[1,-33],[-7,-58],[2,-52],[-5,-48],[-10,-5],[-3,-72],[-5,-37],[10,-22],[-5,-38],[-18,-38],[-10,8],[-7,-67],[-17,-43],[-7,-36],[-4,-84],[-14,-8],[-17,15],[-15,-11],[-14,46],[-27,24],[-27,111],[-24,33],[-10,-8],[-22,38],[-18,77],[-13,24],[-39,21],[-17,28],[-19,61],[-11,12],[-19,81],[0,24],[-14,47],[-21,7],[-12,27],[-5,34],[-30,78],[-9,43],[-7,110],[-12,56],[-7,60],[-13,63],[0,59],[-7,57],[6,72],[-3,54],[2,55],[-7,68],[-11,30],[-3,44],[-13,39],[-1,30],[-13,34],[2,33],[-13,177],[-7,40],[-12,4],[-11,91],[-15,0],[-14,66],[-12,10],[-3,24],[-15,34],[-12,-4],[-7,28],[-31,39],[0,39],[-44,118],[-13,107],[-12,37],[-18,26],[-9,33],[-9,2],[-2,36],[-24,106],[-20,35],[-4,54],[-14,32],[-21,7],[-35,78],[-11,88],[-10,24],[-6,68],[-13,89],[-9,41],[-19,38],[-11,-19],[-11,41]],[[20232,53938],[-5,28],[-16,20],[1,23],[-10,25],[-3,38],[7,18],[1,101],[331,0],[250,-1],[226,0],[183,1],[0,1212],[2,254],[0,149],[2,417],[2,232],[0,1518],[1,434],[0,809],[-1,213],[11,0]],[[20922,66996],[0,-2328]],[[19530,64667],[-136,-2],[-143,-1],[-52,-3],[-133,1],[-93,2],[0,442],[1,219],[-1,508]],[[18973,65833],[0,676],[1,163],[0,1090],[-1,26],[0,516],[-1,267],[1,140]],[[18973,68711],[-2,175],[-1,282],[1,156],[75,2],[22,-12],[85,2],[11,8],[45,-5],[25,8],[87,-2],[194,5],[11,-7],[221,0],[316,0],[14,-4],[144,-2],[178,-1],[23,7],[132,0],[251,-2],[115,-1]],[[29908,65840],[0,-107],[3,-222],[0,-150],[-3,-209],[-12,-8],[3,-76],[-8,-29]],[[29891,65039],[-7,19],[-17,2],[-21,-24],[-18,3],[-13,-24],[-16,28],[-6,-37],[-49,-35],[-3,20],[-15,0],[-27,-33],[-6,21],[-26,1],[-7,-26],[-18,23],[-40,-27],[-3,60],[-9,-17],[-19,-82],[-12,0],[-22,-73],[-13,23],[-24,-58],[-7,13],[-23,-28],[5,-22],[-10,-32],[-29,-11],[-22,-54],[-9,15],[-15,-35]],[[29390,64649],[1,33],[-20,102],[68,130],[-19,97],[4,161],[5,295],[9,422]],[[23231,64184],[167,-9],[159,-8],[156,3],[130,8],[62,0],[197,12],[152,13],[101,14],[12,-38],[1,-33],[18,-14],[-1,-36],[16,-57],[10,-2],[1,-56],[11,-31],[19,-7]],[[24442,63943],[-8,-18],[-17,-144],[-2,-71],[6,-165],[14,-99],[7,-28],[-8,-66],[5,-38],[15,-34],[4,-28],[-3,-61],[26,-77],[15,-57],[11,-14],[10,-69],[13,-8],[11,-76],[16,-54],[59,-137],[20,-90],[3,-90],[8,-78],[-9,-36],[11,-85],[3,-65],[22,-69],[11,7],[11,32],[9,66],[19,4],[27,-45],[16,-5],[38,-82],[-2,-60],[-12,-29],[-13,-59],[10,-92],[-2,-37],[-22,-96],[-6,-99],[-17,-68],[-7,-52],[-1,-78],[5,-70],[18,-50],[20,-89],[25,-37],[11,-54],[8,0],[17,-60],[16,7],[3,-27],[-12,-24],[6,-50],[20,-5],[10,31],[13,-28],[1,-29],[15,-12],[23,-70],[-2,-40],[14,-3],[9,-42],[19,-24],[0,-57],[11,-68],[-13,-8],[2,-50],[26,-161],[-4,-62],[-15,-12],[-8,-56],[17,-53],[-1,-47],[13,-87],[11,-46],[-1,-53],[24,-56],[10,27],[-15,45],[14,12],[17,-56],[8,-53],[11,14]],[[25079,59990],[9,-21],[-5,-90],[-6,-46],[-10,-9],[-1,-38],[17,-37],[-3,-28],[-16,3],[-4,-44],[11,-58],[-8,-29],[-7,-71],[-13,-18],[-18,78],[-13,-13],[-13,-142]],[[24999,59427],[-8,-40],[-13,7],[2,31]],[[24980,59425],[6,38],[-5,49],[-21,2],[-4,-30],[9,-58]],[[24965,59426],[6,-22],[-7,-64],[10,-59],[-5,-37],[-24,-1],[0,-37],[21,-39],[1,-27],[-15,-15],[-30,16],[-3,-21],[28,-74],[1,-61],[-22,-40],[-3,-75],[-12,-23]],[[24911,58847],[-179,-6],[16,110],[23,58],[0,23],[15,53],[16,28],[3,43],[9,7],[5,133],[-22,44],[3,15],[-5,71],[-349,-1],[-323,1],[-141,0],[-222,1],[-210,1]],[[23358,63503],[-31,56],[8,79],[-24,76],[-2,77],[-20,19],[1,32],[-18,26],[-12,110],[1,39],[-11,34],[-1,40],[13,42],[-11,18],[-1,-33],[-20,3],[1,63]],[[26900,61666],[18,-20],[35,40],[23,11],[5,49],[3,98],[12,28],[16,-7],[6,30],[-3,101],[-10,105],[21,52],[0,67],[14,88],[12,27],[6,37],[13,-40],[11,-1],[12,-79],[-8,-40],[11,-20],[9,22],[3,42],[9,20],[9,-25],[4,111],[-10,29],[-3,43],[19,19],[-3,96],[8,41],[10,12],[3,55],[31,-7],[3,83],[25,76],[17,-19],[6,-52],[11,3],[21,47],[17,8],[11,54],[11,8],[8,48],[16,57],[30,89],[16,9],[4,83],[10,26],[-11,50],[12,48],[0,57],[10,23],[-4,60],[13,-11],[-2,52],[7,20],[0,122],[9,30],[0,58],[10,48],[5,61],[10,23],[5,65],[-3,95],[4,71],[-9,84],[-11,44],[9,50],[14,-1],[18,27]],[[27769,63178],[-3,-600],[10,7],[33,103],[12,-1],[10,67],[31,60],[13,75],[11,-2],[28,-36],[11,54],[38,158],[13,-10],[-13,-14],[13,-18],[2,-26],[20,-34],[17,1],[7,-18],[28,-4],[14,38],[-7,49],[13,-1],[-11,32],[14,-11],[9,37],[19,-23],[28,87],[24,-20],[17,-49],[8,-40],[18,20],[17,-23],[14,4],[0,-37],[-16,-15],[12,-69],[19,-41],[-2,-33],[9,-12],[5,-43],[-6,-63],[10,-14]],[[28258,62713],[-9,-45],[-21,-175],[-78,209],[-66,179],[-4,-62],[5,-28],[-6,-36],[7,-11],[-23,-106],[6,-15],[-11,-54],[10,-36],[-16,-62],[-7,-7],[-24,-88],[6,-16],[-14,-63],[-7,21],[-15,-66],[-10,-24],[0,36],[-23,-71],[-20,-130],[-35,101],[-9,-69],[-17,-82],[-1,-71],[-8,1],[-10,-57],[-15,-138],[-28,-94],[-46,53],[-17,109],[-31,47],[-14,-121],[3,-65],[-12,-60],[-22,-87],[6,-44],[-12,-21],[-25,-81],[-7,-56],[6,-29],[-8,-30],[-6,-60],[-10,-51],[-18,-51],[-30,-104],[-21,-112],[2,-36],[-12,-39],[4,-41],[17,-34],[-12,-40],[-18,-34],[-1,-32],[13,-4],[-4,-29],[-49,-99],[-10,68],[-12,-9],[-19,-47],[-41,-71],[-4,26],[-21,38],[-7,-51],[9,-43],[-19,-47],[-17,-5],[-37,-27],[-31,-51],[-27,75],[-11,45],[-8,-21],[-8,-55],[-23,-17],[-2,-30],[-13,-29],[-34,-7],[-19,48],[0,24],[-12,25],[-18,3],[-7,52],[-14,31],[-2,90],[-15,22],[-1,33],[18,34],[-11,29]],[[27075,60636],[-14,-4],[-28,30],[-3,37],[-8,1],[-7,40],[-9,-2],[-7,42],[-15,11],[-13,134],[-10,19],[-13,61],[1,34],[-15,19],[-8,39],[11,55],[-15,22],[-9,80],[-10,45],[-15,37],[0,38],[8,0],[3,55],[-4,20],[11,33],[1,58],[-8,36],[1,90]],[[24442,63943],[12,16],[-2,50],[4,90],[-11,35],[13,69],[31,43],[18,-1],[18,41],[1,61],[6,49],[1,67],[10,27],[14,66],[11,19],[6,106],[-1,98],[-13,75],[-13,6],[-20,85],[11,77],[2,74],[6,55],[19,21],[13,-15],[23,40],[31,-6],[24,17],[16,56],[10,13],[26,-1],[18,57],[16,21],[-1,66],[9,59],[0,52],[9,29],[28,49],[-1,41],[8,72],[-3,58],[7,61],[-7,37],[1,89],[-13,41],[-47,73],[-15,74],[3,60],[-16,63],[-22,37],[-2,26],[-22,35],[0,47]],[[24658,66423],[45,-2],[227,-2],[51,-5],[194,-11],[41,4],[152,1],[82,-5]],[[25450,66403],[-2,-124],[-8,-97],[10,-109],[21,-117],[12,-37],[3,-54],[13,-139],[4,-75],[14,-93],[8,-20],[2,-47]],[[25386,60941],[-8,-66],[-17,-35],[-11,-56],[7,-105],[20,-68],[-6,-50],[-48,-19],[-12,-11],[-18,-52],[-14,26],[-18,-44],[-2,-55],[-9,-65],[2,-25],[17,-65],[7,-66],[-10,-89],[-15,-10],[-13,13],[-19,52],[-35,40],[-14,39],[-31,42],[-19,5],[-13,-21],[-13,-42],[-9,-65],[-16,-52],[-4,-55],[14,-52]],[[20232,53938],[-214,0],[-254,0],[0,-524],[-234,-1]],[[24911,58847],[4,-38],[18,-49],[0,-45],[-24,23],[-9,-49],[20,-36],[-11,-33],[-11,-1],[-9,-52],[-17,-22],[-9,21],[-15,-41],[6,-68],[9,-17],[12,23],[3,-38],[-26,-42],[1,-53],[9,-10],[-3,-40],[-22,56],[-9,-9],[-5,-58],[9,-42],[-11,-75],[-8,88],[-23,-67],[-3,-46],[12,-6],[2,43],[15,-35],[-9,-47],[0,-45],[-16,-10],[4,-47],[15,-7],[6,-29],[-12,-43],[15,-58],[-10,-25],[-12,21],[-9,-26],[-9,-100],[-25,13],[-3,-49]],[[24751,57677],[17,-55],[0,-45],[-18,-44],[-31,-44],[-4,59],[-11,2],[-2,-29],[8,-44],[-5,-25],[6,-72],[-14,-19],[-5,34],[2,57],[-10,-27],[2,-35],[-7,-14],[6,-40],[20,-2],[2,-31],[-14,-50],[-11,18],[1,49],[-10,-21],[0,-64],[12,-61],[1,-27],[-13,-51],[6,-83],[-25,-57],[0,-63],[-10,1],[3,54],[-19,-1],[-5,-27],[8,-45],[-7,-30],[-19,-15],[-4,-71],[-16,43],[-9,-29],[14,-43],[20,1],[2,-25],[-13,-28],[-16,33],[-12,-32],[9,-51],[11,3],[3,-24],[-8,-61],[-24,-6],[7,-45],[-11,-16],[-5,43],[-16,-23],[-3,-29],[22,-34],[-18,-78],[7,-55],[16,-26],[-10,-34],[-8,18],[-24,-2],[-1,-59],[10,-26],[13,14],[8,-50],[-12,-18],[-16,22],[-7,35],[-17,-16],[-2,-28],[25,-51],[2,-33],[-28,-41],[13,-63],[-14,-80],[18,16],[-1,51],[14,-27],[-4,-54],[-17,-10],[-3,-19],[10,-24],[17,14],[10,73],[5,-32],[-23,-90],[0,-64],[12,-68],[3,42],[10,13],[2,-23],[-13,-52],[2,-75],[-3,-23],[-14,-8],[-11,14],[-5,-39],[23,-62],[-13,-59]],[[24512,55359],[-219,4],[-154,5],[-157,7],[-86,0],[-185,2]],[[16868,55911],[16,-5],[28,-53],[21,-22],[1,-25],[16,-61],[-5,-43],[-13,25],[-26,7],[-6,35],[0,74],[-20,16],[-12,52]],[[16867,55390],[9,4],[22,-117],[40,-130],[-10,4],[-11,-22],[-17,44],[-13,72],[-14,119],[-6,26]],[[16741,55926],[8,7],[1,-41],[-11,7],[2,27]],[[16637,56552],[8,-17],[11,14],[0,-30],[-17,-4],[-9,21],[7,16]],[[16596,55679],[14,7],[20,-35],[8,-31],[-13,-15],[-20,21],[-9,53]],[[16501,56608],[18,-7],[13,-22],[15,5],[19,-43],[19,-4],[7,39],[20,-20],[-11,-43],[-28,-11],[-17,-31],[-42,24],[-1,61],[-12,52]],[[16410,56520],[22,8],[9,21],[13,-8],[13,19],[0,-48],[18,-13],[1,-48],[-41,-54],[-16,37],[-19,86]],[[16354,56562],[16,17],[6,28],[6,-35],[13,-26],[-21,-6],[-20,22]],[[15305,65829],[155,-4],[9,6],[77,-1],[56,12],[28,-8],[115,2],[37,5],[95,-1],[45,-5],[154,-8],[114,-4],[197,0],[92,2]],[[16479,65825],[0,-1]],[[16479,65824],[0,-1448],[1,-34],[0,-756],[-1,-393],[-1,-13],[0,-457],[-1,-122],[2,-263],[26,-77],[115,-330],[114,-336],[63,-182],[99,-298],[125,-377],[62,-186],[127,-394],[313,-989],[234,-759],[70,-234],[147,-492]],[[17950,55027],[-416,-126],[-254,-89],[-3,98],[-9,62],[-8,20],[-14,-23],[-3,66],[1,71],[-8,41],[9,61],[-9,161],[-13,127],[-9,54],[-40,193],[-25,61],[-10,51],[-15,37],[-9,-2],[-19,95],[-26,59],[-14,15],[-20,57],[-25,88],[-24,39],[-2,-47],[-21,-23],[-18,14],[-10,25],[-15,6],[-4,38],[9,34],[1,43],[-14,116],[-11,64],[-17,50],[-35,1],[-22,-8],[-16,-36],[-14,38],[-28,16],[-37,59],[-12,2],[-24,53],[-17,141],[-10,10],[-17,53],[-4,-3],[-20,65],[-21,25],[-6,20],[-32,4],[-16,-24],[-18,25],[-22,-10],[-37,60],[-23,0],[-15,15],[-44,-7],[-48,-22],[-1,31],[-13,66],[-16,30],[-12,-4],[-6,32],[13,143],[-11,60],[8,119],[-17,54],[9,115],[1,140],[-18,56],[-14,7],[-3,-21],[-27,55],[-11,48],[10,131],[-2,50],[-11,53],[-27,14],[-27,102],[-18,101],[-24,25],[-17,66],[-5,81],[-16,47],[-7,37],[-14,35],[-6,99],[-5,35],[-20,29],[-15,104],[-25,94],[-33,64],[-11,45],[-8,80],[1,42],[-11,101],[2,92],[-11,16],[10,74],[18,-38],[9,30],[7,61],[8,141],[-21,149],[-12,43],[-10,11],[-9,-28],[-37,2],[-28,68],[-22,102],[-14,18],[-2,31],[-17,60],[-4,62],[5,129],[-12,89],[-2,52],[-12,14],[-6,33],[-1,64],[5,27],[2,77],[-6,134],[14,28],[16,8],[6,-24],[7,-88],[-9,-9],[11,-107],[-2,-27],[27,-23],[27,-80],[8,5],[14,-63],[12,3],[-6,40],[-12,19],[-10,87],[-7,109],[-21,54],[-2,46],[-22,26],[9,74],[-7,68],[-15,-1],[-14,68],[8,-9],[9,26],[0,40],[19,-2],[10,39],[-10,71],[-26,44],[-13,-30],[-14,-6],[2,-47],[-5,-46],[15,-51],[-12,-25],[-4,-44],[19,-56],[-7,-14],[-11,29],[7,-71],[-15,-16],[-9,38],[-26,61],[-13,-12],[-23,67],[-10,53],[-17,33],[-16,8],[-20,-33],[14,127],[3,48],[-12,92],[7,20],[-16,70],[-11,-10],[-1,67],[-17,106],[-20,51],[-14,19],[-22,64],[-37,176],[-14,29],[-8,41],[-31,90],[-24,116],[14,78],[-1,42],[-14,126],[-16,123],[-7,105],[3,99],[13,132],[-5,52],[0,65],[-14,92],[-4,108],[-16,36],[-6,55],[-35,133],[-7,6],[0,43],[-8,43],[-22,32],[-49,151],[4,63],[-4,70],[-13,74],[9,98],[14,109],[42,265],[11,95],[7,119],[-12,37],[-1,97],[4,2],[11,99],[12,244],[-5,126],[-15,128],[-8,96],[-9,-4],[-17,54],[10,74],[5,110],[-3,67]],[[28861,63044],[-1,28]],[[28874,63137],[-6,7],[-22,-81],[2,-39],[11,-31],[1,-49],[-8,-28],[0,-41],[14,-52],[7,-58],[21,-62],[10,-68],[3,-58],[-5,-35],[2,-126],[16,-48],[7,-43],[2,-74],[34,-137],[16,-29],[10,24],[4,-36],[5,-129],[4,-244]],[[29002,61700],[-105,1],[-74,9],[-2,72],[-25,1311],[0,86]],[[28426,62262],[21,70],[37,-118],[-36,-118]],[[28448,62096],[0,93],[-22,73]],[[6433,39922],[2,44],[19,76],[12,7],[13,93],[16,52],[3,58],[-17,94],[-4,45],[-1,105],[8,37],[18,-9],[18,-32],[3,-32],[22,-44],[15,-47],[12,6],[25,-32],[39,-77],[13,-19],[22,-61],[16,-57],[17,-76],[-3,-47],[1,-90],[8,-10],[16,12],[7,-57],[-1,-57],[22,-82],[22,-39],[5,-21],[-4,-44],[-13,-51],[-17,-47],[-14,-56],[-23,-38],[-20,-47],[-20,-18],[-16,15],[-9,-9],[-18,-66],[-16,-25],[-13,-48],[-14,-16],[-12,-59],[1,-33],[-8,-37],[-5,-59],[-20,-63],[-15,61],[-22,52],[-22,29],[-10,95],[5,113],[4,151],[-10,106],[1,46],[-9,12],[-5,114],[-7,66],[-9,8],[-8,108]],[[6254,41293],[5,69],[11,56],[14,6],[13,-33],[10,-78],[10,-50],[24,29],[18,35],[26,-21],[0,-16],[17,-51],[10,-15],[5,-40],[31,-37],[5,-32],[0,-52],[-8,-43],[-13,-40],[-6,3],[-17,-36],[-14,10],[-30,-53],[-21,-9],[-17,26],[-7,210],[-7,20],[-14,-24],[-26,50],[-13,58],[-6,58]],[[6253,40841],[7,29],[28,57],[10,-30],[-4,-44],[5,-17],[-13,-19],[-5,15],[-18,-23],[-10,32]],[[6153,41274],[7,27],[13,5],[26,-19],[17,-60],[8,-51],[-9,-65],[-19,-29],[-17,-5],[-7,60],[-3,73],[-14,32],[-2,32]],[[6084,41504],[6,52],[9,29],[-2,58],[17,-2],[3,-14],[54,-29],[10,34],[4,-42],[22,-13],[27,18],[17,-25],[-8,-55],[-18,-51],[-20,-21],[-35,32],[-26,31],[-15,-14],[-29,-5],[-16,17]],[[5814,42059],[43,9],[13,49],[4,35],[13,48],[14,15],[6,-27],[6,-70],[20,-84],[4,-52],[-4,-15],[3,-47],[18,-55],[3,57],[12,-2],[-4,-64],[8,-24],[-1,-29],[17,-70],[-12,-37],[-11,18],[-21,-29],[-6,26],[-17,31],[-25,11],[-30,-20],[-7,4],[-7,84],[-11,34],[-1,31],[-14,67],[0,61],[-13,45]],[[5394,42585],[1,40],[11,38],[4,49],[33,72],[8,26],[23,-18],[3,25],[16,-11],[8,14],[15,-20],[10,-37],[5,-45],[0,-46],[-11,-63],[1,-106],[-4,-28],[-28,-78],[-8,15],[-36,12],[-18,71],[-24,29],[-9,61]],[[5266,42374],[4,43],[12,44],[19,45],[2,38],[11,9],[2,-31],[-5,-57],[2,-36],[-20,-28],[-16,-97],[-12,30],[1,40]],[[24498,67577],[-5,-52],[10,-50],[-1,-74],[27,-41],[13,-76],[-18,-60],[-6,-52],[-9,-24],[1,-108],[8,-88],[0,-68],[12,-25],[13,-169],[33,-64],[47,-37],[17,-20],[18,-109],[0,-37]],[[23231,64184],[4,28],[-10,56],[-13,16],[-15,58],[2,37],[13,35],[-4,83],[10,51],[-7,27],[2,66],[-9,20],[1,42],[-7,30],[5,27],[-5,93],[12,17],[-24,24],[4,37],[-5,63],[13,41],[-20,27],[7,29],[-1,116],[-20,10],[2,77],[-9,1],[-2,-37],[-15,28],[3,56],[-11,39],[7,39],[-8,41],[11,18],[-6,54],[8,20],[3,46],[-12,23],[-1,38],[-14,61],[6,11],[3,66],[-16,6],[1,30],[-15,11],[5,16],[-15,25],[1,83],[-22,56],[-3,48],[10,25],[-14,103],[-11,29],[0,76],[9,44],[-4,44],[-14,8]],[[26280,62461],[18,48],[7,-2],[15,-54],[21,-28],[14,29],[14,-3],[8,29],[8,-8],[4,-69],[29,-32],[10,-84],[16,-83],[0,-66],[5,-26],[40,-41],[33,19],[29,-46],[3,-34],[15,-26],[5,-50],[28,-29],[14,66],[26,22],[15,-32],[28,-20],[11,-24],[5,-43],[13,24],[30,-1],[10,53],[18,34],[9,39],[15,0],[21,32],[7,-33],[-3,-44],[9,-111],[13,-37],[21,-6],[21,-79],[13,-35],[2,-44]],[[27075,60636],[-108,-317],[-37,-39],[-22,-41],[-19,-49],[-25,-45],[0,-86],[-16,-39],[-12,-2],[-12,-33],[3,-59],[-6,-45],[-25,-36],[-29,-4],[-16,-80],[-2,-50],[-16,-4],[-33,-35],[-39,-52],[-21,2],[-33,-49],[-8,-27]],[[26599,59546],[-4,-21],[-83,8],[-79,2],[-76,5],[-83,11],[-51,16],[-74,9],[-55,-14],[-96,8],[-56,10],[-83,22],[-49,4],[-16,-22],[-7,22],[-146,-12],[-92,-2],[-114,-8],[1,35],[-61,17],[10,-147],[-6,-64],[-137,6],[-126,0],[-84,6],[-33,-10]],[[24980,59425],[-15,1]],[[28739,61120],[-14,0]],[[28725,61120],[-1,72],[8,28],[11,-40],[-4,-60]],[[28711,61320],[2,79],[11,13],[7,-30],[5,-118],[-15,21],[4,27],[-14,8]],[[28627,62072],[5,20],[5,-46],[-10,26]],[[29002,61700],[-1,-43],[-9,-105],[-5,-15],[-20,-211],[-18,-120]],[[28949,61206],[-107,-38],[-6,-55],[-6,4]],[[28830,61117],[-13,30],[-19,-4],[-22,-64],[-9,-1],[-1,67],[7,70],[17,28],[-17,2],[2,45],[11,40],[-21,9],[-12,-33],[-4,28],[5,58],[26,27],[-6,39],[-9,-13],[-4,36],[15,112],[-15,-24],[-7,-47],[0,-60],[-8,-1],[-11,77],[11,9],[-1,53],[-8,10],[-4,-49],[-9,-33],[6,-27],[-9,-62],[-4,29],[-17,-23],[-9,12],[-16,83],[-9,13],[2,43],[-24,151],[20,14],[5,39],[-8,-7],[-9,51],[8,40],[12,22],[6,-25],[12,26],[1,-36],[22,-9],[13,-39],[4,10],[-16,69],[-17,14],[-8,42],[-7,-3],[-16,77],[-5,-28],[-12,20],[-1,-59],[-7,8],[3,101],[18,92],[14,-45],[8,10],[-3,124],[-8,17],[-17,-47],[-12,4],[1,-48],[-12,-17],[4,104],[16,101],[7,-51],[21,-11],[11,31],[-6,54],[11,55],[-16,-9],[-3,-52],[4,-31],[-12,17],[3,63],[-6,59],[-7,14],[16,136],[12,42],[-2,24],[14,25],[7,37],[30,-6],[-11,24],[18,70],[-10,6],[12,122],[-35,-24],[-6,-48],[12,-24],[4,-32],[-12,-14],[-34,-97],[-7,31],[7,54],[-8,28],[0,-44],[-9,-51],[8,-34],[-7,-46],[-6,96],[-15,14],[6,-103],[-8,8],[-6,-42],[12,-22],[-21,-44],[-7,-28],[-13,8],[-2,26],[-22,46],[3,-46],[9,-13],[2,-41],[27,-54],[2,-67],[-5,-25],[13,-48],[-23,-45],[7,-37],[-3,-40],[-9,4],[-7,-55],[6,-53],[-17,-58],[9,-50],[-2,-54],[6,-73],[-2,-89],[7,-65],[22,-80],[8,-62],[-9,-45],[-14,7],[9,-42],[9,22],[8,-14],[-7,-47],[4,-48],[18,-92],[-5,-22],[5,-97],[-9,19],[-11,58],[-8,4],[-5,64],[-8,-9],[-2,-57],[-7,38],[-8,-3],[-5,48],[-12,45],[-23,23],[-35,3],[-8,129],[-8,13],[-4,-31],[10,-68],[-2,-22],[-22,43],[-2,34],[-13,31],[-12,114],[-20,-44],[-33,-56],[-12,27],[-7,115],[11,82],[15,57],[20,30],[-5,10]],[[28423,61914],[-1,45],[7,27],[18,25],[1,85]],[[28426,62262],[-9,37],[-20,6],[-8,17],[1,48],[-26,42],[-34,15],[-6,39],[-10,13],[1,58],[9,18],[7,49],[-23,43],[-6,45],[-15,-1],[-16,25],[-13,-3]],[[26327,70327],[8,17],[9,-60],[65,-63],[-17,-58],[-23,18],[-14,61],[-28,85]],[[26120,70229],[5,40],[7,-20],[-12,-20]],[[26084,70289],[21,-39],[-4,-36],[-19,38],[2,37]],[[26055,70019],[7,48],[3,69],[6,15],[1,57],[18,-7],[-1,-85],[4,-83],[-19,-44],[-19,30]],[[26035,70180],[13,8],[-5,-54],[-7,1],[-1,45]],[[25984,69839],[13,-17],[1,-59],[-14,76]],[[25933,69486],[6,23],[19,-25],[-6,-96],[-17,52],[-2,46]],[[25908,69335],[11,44],[6,-47],[-17,3]],[[25759,70041],[20,-64],[-8,-22],[-4,36],[-14,43],[6,7]],[[25722,65552],[30,68],[27,87],[37,261],[34,146],[19,134],[10,99],[10,176],[-1,58],[6,87],[-1,163],[-6,182],[-11,120],[-35,230],[-11,94],[-12,138],[-17,119],[0,48],[22,102],[7,50],[1,77],[-9,134],[-14,90],[4,32],[20,51],[24,151],[21,112],[4,124],[9,134],[-11,112],[1,33],[27,43],[20,15],[6,93],[-2,74],[10,36],[13,-18],[16,80],[18,-35],[17,13],[8,32],[9,86],[10,16],[15,94],[11,47],[9,-7],[12,35],[3,-39],[-19,-32],[-3,-42],[12,-81],[-23,-81],[13,19],[0,-74],[-6,-7],[-8,-84],[7,-95],[8,-2],[19,145],[3,98],[13,20],[-8,-158],[-15,-44],[-6,-67],[14,-14],[8,65],[7,13],[22,135],[5,78],[-1,56],[4,82],[-6,85],[5,94],[17,49],[10,3],[18,48],[18,16],[25,-7],[26,14],[12,20],[-1,33],[-33,17],[-14,47],[-8,114],[16,75],[13,14],[20,69],[-2,31],[-18,27],[60,-15],[7,49],[61,-102],[26,-58],[13,20],[11,-16],[13,10],[32,-34],[24,-85],[3,-57],[17,-27],[33,4],[8,-9],[29,-77],[23,-7],[34,-71],[29,6],[21,-78],[11,-25],[-9,-27],[15,-96],[11,-30],[14,-133],[-20,21],[-16,34],[-15,-41],[4,-110],[12,-44],[21,-26],[5,-59],[1,-98],[7,-37],[-4,-71],[-8,-67],[2,-65],[-5,-111],[-1,-121],[-12,-15],[-14,-64],[-24,2],[-8,-30],[-8,-108],[-4,-115],[-19,-5],[-8,-19],[0,-49],[-42,-6],[-13,-35],[-9,-76],[-5,-124],[-8,-42],[13,-91],[16,-32],[9,33],[5,-38],[20,-21],[13,-38],[10,16],[28,120],[14,0],[7,25],[-7,51],[9,44],[9,87],[4,-50],[19,31],[5,29],[-21,31],[24,-3],[11,24],[5,41],[23,10],[34,28],[9,45],[31,30],[11,-30],[23,-25],[15,-39],[17,-123],[10,-37],[7,-97],[5,-208],[17,-178],[4,-247],[10,-143],[18,-110],[2,-48],[-11,-46],[-7,-145],[4,-47],[-12,-113],[-4,-67],[-18,-66],[-15,4],[-12,-42],[1,66],[-9,27],[10,16],[15,62],[-14,26],[-15,-5],[-19,-34],[-7,-32],[9,-27],[2,-45],[-15,4],[-11,-52],[1,-84],[-7,-77],[-17,-53],[-30,-25],[-18,-97],[2,-127],[-3,-44],[-15,-25],[-1,-70],[-16,-39],[-6,-39],[-13,-4],[-7,-65],[-11,-11],[-17,-72],[5,-79],[-8,-9]],[[26661,65520],[-86,-11],[-167,-20],[-124,-12]],[[25045,72671],[21,69],[95,141],[7,-2],[43,98],[31,42],[6,-11],[28,29],[-1,-28],[-12,-16],[-30,-80],[0,-30],[-25,-55],[-51,-53],[-42,-66],[2,-20],[23,0],[-59,-73],[-18,3],[-18,52]],[[24721,71146],[19,40],[12,3],[39,49],[38,34],[31,77],[19,64],[16,27],[33,17],[15,-17],[29,27],[22,-3],[52,75],[30,94],[22,5],[29,23],[10,39],[5,51],[25,65],[14,16],[30,82],[23,23],[21,56],[11,54],[20,52],[58,85],[56,25],[50,-7],[23,-39],[1,-45],[-11,5],[-17,-24],[-19,13],[-21,-10],[5,-47],[-32,-57],[-30,-95],[-19,-20],[-5,-74],[-7,9],[-7,-52],[-14,-26],[-5,-67],[-12,-48],[-9,-6],[-12,-164],[6,-52],[-9,-35],[11,3],[20,87],[3,44],[7,-13],[29,80],[28,43],[-12,-55],[-12,-24],[-15,-77],[30,84],[26,18],[14,-13],[37,1],[15,-30],[8,8],[17,-35],[8,-39],[15,11],[22,-63],[3,-61],[17,-49],[6,-47],[14,-49],[19,-15],[-2,-79],[11,-28],[26,-15],[42,10],[25,43],[11,-8],[14,-72],[12,-27],[19,-4],[8,46],[16,-7],[9,-38],[4,69],[-7,53],[16,20],[7,-32],[-6,-56],[17,-26],[26,72],[40,62],[59,110],[11,-21],[61,42],[46,-16],[35,-3],[30,7],[62,85],[24,12],[30,-7],[32,14],[-22,-84],[-2,-135],[2,-45],[-8,-19],[9,-51],[16,-8],[9,16],[6,-26],[15,3],[17,-28],[34,49],[13,-4],[11,-46],[-1,-35],[25,28],[7,-7],[10,65],[19,24],[23,-19],[11,9],[8,39],[27,-5],[5,-30],[-10,-100],[7,-120],[1,-95],[-29,-2],[-8,-65],[15,-12],[5,21],[15,-4],[8,-38],[19,-19],[-13,-40],[24,-75],[12,-1],[20,-45],[8,38],[14,-35],[8,26],[-16,100],[14,-15],[41,13],[12,-15],[14,-91],[16,-31],[-10,-64],[-14,-20],[-27,39],[-31,-16],[-31,42],[-11,-12],[-27,1],[-27,23],[-60,-26],[-13,-28],[-37,69],[-15,48],[-13,-7],[-13,30],[-10,-41],[2,-51],[-15,-32],[1,-45],[9,-63],[-12,-20],[-24,42],[-3,31],[-21,37],[-5,30],[-22,64],[-38,46],[-13,-7],[-33,49],[-18,-5],[-13,23],[-5,-20],[-19,11],[-25,-75],[-17,-73],[-9,-8],[-32,23],[-23,-15],[-8,-22],[2,-34],[-23,37],[-21,17],[-24,-14],[-10,11],[-23,-24],[-13,-42],[-2,-63],[-9,-72],[-14,4],[-7,-39],[-22,-15],[-6,-46],[-13,-3],[0,-45],[-12,-9],[4,-61],[-20,32],[-9,40],[12,27],[1,34],[11,31],[1,40],[13,-4],[15,87],[-3,43],[-12,10],[-18,-75],[-38,24],[3,-51],[-13,-47],[-5,-56],[-30,-31],[-5,-27],[-6,39],[3,55],[-4,67],[-8,32],[-10,-19],[-5,-120],[3,-12],[-31,-55],[-26,-129],[-17,-146],[-19,-65],[-20,-112],[-41,-174],[6,-33]],[[25508,69434],[-19,14],[-8,47],[-13,28],[-2,29],[15,118],[11,48],[-2,34],[-11,25],[-16,-47],[-27,-10]],[[25436,69720],[0,0]],[[25436,69720],[-7,47],[7,24],[-3,38],[13,34],[6,40],[-3,47],[8,69],[-14,75],[12,13],[-8,44],[-13,18],[-6,33],[-24,4],[-9,43],[-21,-18],[-18,45],[17,52],[-7,21],[0,47],[-40,48],[-14,-14],[-24,47],[-12,-15],[-21,21],[-2,25],[-27,-2],[-3,-32],[-14,0],[-4,29],[-17,16],[-12,-13],[-86,142],[-287,231],[1,27],[-28,167],[-27,16],[-10,24]],[[24739,71113],[0,0]],[[24739,71113],[-12,-6],[-6,39]],[[25252,52115],[30,-13],[-14,-20],[-12,9],[-4,24]],[[25179,52148],[16,13],[30,-29],[6,-15],[-24,5],[-28,26]],[[25119,52114],[15,7],[15,31],[-4,-29],[-21,-27],[-5,18]],[[25071,52140],[21,-1],[8,13],[-5,-43],[-10,-7],[-17,26],[3,12]],[[24751,57677],[229,-2],[156,1],[202,1]],[[25284,52292],[-4,-32],[-7,15],[-10,-40],[-18,27],[-13,-15],[-5,30],[-18,7],[-18,-23],[-23,49],[-2,-28],[-21,38],[-22,-3],[-31,-27],[-28,-42],[-30,-33],[4,54],[-10,30],[-14,-27],[9,-17],[1,-40],[-25,-57],[-8,-80],[-9,10],[-13,-16]],[[24969,52072],[-12,0],[-13,50],[-4,66],[0,69],[-15,77],[0,54],[-10,43],[-11,19],[-4,39],[-10,34],[-4,95],[-8,14],[10,88],[-4,36],[7,25],[9,125],[7,19],[-1,45],[7,22],[-7,36],[-165,-2],[-134,-1],[-226,0],[13,21],[7,58],[-16,50],[-1,28],[10,46],[-3,41],[-12,30],[1,38],[18,-7],[17,20],[2,43],[-12,37],[-1,45],[-7,16],[9,39],[4,-50],[8,-29],[9,7],[0,29],[-13,75],[-1,74],[20,18],[12,35],[-4,32],[-18,-13],[-9,30],[5,38],[10,-28],[18,0],[1,106],[11,35],[23,5],[4,18],[-29,11],[7,94],[12,11],[2,-43],[7,-17],[5,28],[-6,21],[24,78],[-2,50],[7,25],[19,14],[0,50],[-19,26],[5,25],[13,-39],[5,36],[12,22],[9,69],[-15,24],[2,-62],[-32,11],[2,79],[27,20],[7,27],[14,-31],[5,42],[-2,53],[12,-8],[16,79],[-4,18],[-6,-40],[-23,17],[0,58],[8,20],[-8,35],[-10,-20],[-23,49],[3,58],[5,1],[17,-48],[10,7],[-5,26],[-21,50],[14,31],[8,37],[-7,37],[-6,-46],[-20,-26],[-6,14],[-3,52],[9,38],[16,33],[2,27],[-31,30],[1,71],[5,37],[21,52],[2,39],[-9,72],[-11,-4],[1,-67],[-14,-26],[-9,22],[3,48],[10,50]],[[17580,73980],[234,-2],[232,3],[190,-5],[190,2],[348,-2],[211,0],[232,2],[328,0],[141,0],[292,0],[227,1],[143,-1],[294,0],[114,0],[167,1]],[[18973,68711],[-21,23],[-6,49],[-24,59],[2,43],[-28,117],[-17,36],[-8,-52],[-20,-3],[5,-33],[-16,-98],[15,-64],[-32,26],[-9,-16],[-24,13],[-3,-19],[-30,-40],[-13,63],[-22,-8],[-13,-25],[-10,13],[-21,-30],[-8,22],[-14,-8],[-12,35],[-16,7],[-9,-35],[-9,0],[-2,-61],[-8,-45],[-24,38],[-8,-20],[-11,24],[-33,2],[-17,22],[-17,-23],[-15,-72],[6,-53],[-9,-22],[-11,44],[-18,24],[-15,40],[-6,53],[5,34],[-21,81],[9,48],[-5,50],[-18,109],[-32,58],[-26,-44],[-4,40],[-28,53],[-11,97],[14,13],[2,55],[-4,61],[-19,39],[2,26],[-17,15],[-7,73],[-24,73],[-1,35],[-14,54],[2,70],[-8,19],[-6,57],[6,30],[-1,46],[-19,0],[7,95],[-15,25],[-12,-2],[2,26],[-10,44],[-15,26],[-9,-13],[2,-41],[-15,-35],[-19,-82],[-19,-26],[-13,12],[-3,-58],[-24,-42],[-5,36],[-14,22],[-13,60],[-25,0],[4,53],[-8,36],[18,37],[1,48],[-19,74],[18,89],[25,1],[7,44],[-13,54],[6,49],[-19,27],[-4,54],[9,58],[-17,33],[2,49],[19,7],[-1,79],[-6,30],[13,24],[1,116],[13,65],[-7,69],[12,3],[10,123],[-3,58],[-8,10],[-26,-23],[-4,-21],[-22,15],[-19,-5],[-8,39],[6,39],[-7,30],[-14,9],[-4,-30],[-15,-21],[-6,17],[6,55],[-34,58],[-16,59],[4,71],[-20,60],[-13,-1],[-6,60],[-19,82],[-17,54],[-12,13],[-5,37],[-11,7],[2,38],[-9,41],[-24,10],[-32,45],[-7,54],[-47,87],[-11,-2],[12,36],[22,8],[3,22],[-16,7],[-5,57],[-11,5],[2,34],[13,32],[-12,55],[2,63],[-13,24],[-7,47],[-8,-6],[-8,88],[-15,21],[-39,152],[-1,279],[1,109],[0,804]],[[29991,69339],[3,68],[18,64],[-3,15],[11,74],[-13,36],[18,11],[4,26],[22,42],[15,-61],[28,-5],[13,70]],[[30213,67064],[-30,-174],[-2,-44]],[[29724,66677],[-9,53],[-6,-10],[-12,102],[9,73],[1,57],[13,10],[8,45],[-6,52],[9,33],[-5,65],[4,138],[12,64],[-6,60],[10,135],[-5,35],[5,74],[15,33],[6,109],[9,44],[19,43],[6,44],[-1,64],[19,67],[0,85],[12,44],[12,69],[0,47],[-10,68],[6,57],[-6,34],[10,61],[35,32],[10,-13],[16,21],[5,52],[24,14],[14,39],[7,45],[16,22],[-6,59],[11,13],[2,73],[-10,38],[-11,102],[15,52],[4,64],[18,75],[-13,89],[11,30]],[[29842,64964],[3,18],[27,22],[-21,-43],[-9,3]],[[29812,64781],[5,20],[11,-16],[0,-50],[-6,35],[-10,11]],[[29792,64880],[16,16],[-12,-43],[-4,27]],[[29275,64272],[5,-67],[-9,-39],[-38,-78],[-11,-1]],[[28633,68013],[16,50],[-5,-45],[-11,-5]],[[28611,68032],[12,40],[9,-5],[-21,-35]],[[27689,66145],[33,53],[53,111],[29,91],[30,50],[26,25],[11,70],[13,36],[4,52],[36,56],[19,54],[-4,80],[-13,40],[2,43],[-7,37],[-23,35],[1,92],[-18,15],[9,77],[-5,125],[-3,13],[28,22],[38,42],[56,47],[40,20],[33,2],[38,-9],[36,8],[86,-42],[23,-19],[15,-47],[23,-46],[12,-10],[40,49],[35,1],[43,12],[21,-19],[23,-1],[14,25],[30,20],[18,40],[9,1],[19,80],[30,64],[10,8],[19,54],[14,5],[20,-15],[17,19],[9,53],[2,87],[-9,180],[-20,40],[11,50],[14,11],[2,-33],[21,41],[-3,43],[-19,47],[-22,-15],[5,29],[-15,51],[-15,1],[1,80],[16,115],[19,5],[23,42],[0,48],[18,22],[27,55],[9,-5],[16,29],[25,75],[4,46],[12,51],[41,121],[31,100],[56,141],[-1,12],[68,109],[26,62],[18,0],[22,37],[27,-29],[19,10],[91,-8],[53,-1],[107,14],[24,-1],[93,10]],[[29478,69336],[1,-109],[-7,-30],[-4,-63],[13,-57],[-10,-55],[-2,-92],[-4,-31],[4,-70],[19,-88],[4,-69],[-12,-80],[7,-114],[-4,-36],[-19,-63],[-5,-89],[-8,-79],[9,-27],[-1,-103],[10,-67],[-5,-64],[12,-57],[-16,-97],[-7,-114],[10,-26],[7,66],[19,0],[2,-53],[13,-29],[-2,-343],[-6,-422],[0,-74],[-4,-37],[8,-65]],[[29390,64649],[-7,-42],[-21,-42],[-2,-79],[-13,2],[9,-60],[18,87],[11,-15],[10,42],[21,27],[18,2],[4,33],[22,-30],[2,41],[9,-28],[20,-8],[18,-23],[23,28],[2,43],[17,8],[10,-12],[75,3],[39,20],[14,18],[30,63],[9,40],[12,13],[13,50],[21,21],[12,-2],[-18,-52],[-9,-6],[15,-31],[5,-44],[17,-12],[11,25],[16,-72],[15,17],[23,48],[2,28],[17,11],[12,-12],[-5,-21],[-67,-94],[-78,-123],[-50,-62],[-81,-93],[-53,-78],[-43,-41],[-27,-12],[-6,15],[-64,-60],[-61,10],[-46,-55],[3,38],[-23,-2],[3,25],[-11,39],[7,35],[-8,36]],[[26861,65369],[16,17],[-2,-36],[-14,19]],[[26831,65420],[6,90],[11,-35],[-3,-35],[-14,-42],[0,22]],[[26661,65520],[1,-26],[21,-28],[13,17],[37,-82],[25,-20],[11,-21],[18,-66],[19,-29],[18,23],[2,50],[7,13],[14,-55],[19,2],[-1,-37],[29,-96],[16,-33],[22,-21],[41,57],[22,4],[17,35],[51,60],[37,-38],[19,15],[20,-9],[29,61],[29,86],[8,10],[16,58],[44,102],[10,1],[67,108],[30,17],[24,34],[65,69],[17,24]],[[15490,70789],[21,10],[13,-45],[-1,-55],[17,-42],[25,-1],[32,51],[14,-4],[59,-119],[7,-61],[18,-81],[1,-57],[7,-52],[-3,-67],[10,-88],[-4,-41],[3,-50],[33,-54],[46,-35],[11,-19],[17,14],[13,-32],[18,-5],[23,39],[23,7],[54,83],[12,45],[15,16],[21,-15],[29,12],[28,26],[19,-30],[17,-9],[18,14],[34,-40],[9,-75],[14,4],[19,50],[34,4],[13,-16],[11,34],[47,51],[15,35],[21,-9],[21,-51],[22,6],[34,26],[20,5],[11,42],[28,27],[29,46],[46,27],[37,10],[13,57],[14,23],[24,-22],[64,39],[17,-14],[19,6],[28,42],[11,36],[163,1],[250,-3],[164,-3]],[[17338,70482],[16,-107],[11,-27],[16,-75],[18,5],[10,-47],[19,-2],[16,-48],[0,-53],[13,-49],[7,-54],[-24,-108],[-1,-55],[-10,-23],[-24,-150],[1,-36],[-9,-51],[-7,-116],[-13,-40],[-6,-53],[-14,-44],[-3,-51],[7,-58],[-9,-68],[-18,-76],[0,-21],[-32,-49],[-14,-93],[-8,-97],[-10,-66],[-18,-48],[3,-66],[-8,-36],[15,-69],[-8,-56],[13,-35],[19,25],[16,-59],[20,12],[2,-53],[18,-17],[1,-31],[-10,-62],[-12,-17],[1,-42],[11,-32],[-1,-43],[-12,-81],[0,-54],[-11,-11],[-2,-59],[0,-2105]],[[17307,65831],[-166,-2],[-273,-5],[-26,-3],[-143,2],[-220,2]],[[15305,65829],[-21,55],[-15,55],[-7,69],[2,33],[-14,81],[2,32],[-7,63],[-2,126],[13,147],[-7,107],[-17,87],[-11,2],[-11,123],[15,90],[12,96],[6,83],[0,52],[9,80],[6,99],[-6,42],[17,53],[8,43],[16,132],[15,193],[15,283],[7,225],[4,188],[-2,8],[10,197],[-1,69],[7,184],[0,92],[-5,39],[8,91],[12,227],[8,117],[4,157],[-3,66],[3,109],[-4,69],[5,24],[5,176],[-1,76],[-11,41],[6,87],[-2,83],[-7,45],[16,36],[1,109],[-19,193],[27,-79],[14,-14],[-3,38],[23,10],[7,17],[11,-28],[12,31],[15,0],[20,51]],[[26599,59546],[33,-4],[78,1],[5,-5],[157,-1],[61,3],[151,-2],[3,26],[77,-5],[-8,-28]],[[18139,65823],[61,-6],[262,13],[192,2],[5,-5],[196,3],[118,3]],[[18136,60011],[0,880],[1,11],[-1,272],[1,173],[-1,298],[1,318],[0,1661],[1,149],[0,628],[1,266],[0,1156]],[[28738,60998],[7,-15],[-7,-27],[0,42]],[[28949,61206],[-16,-79],[-15,-98],[-8,-27],[-5,21],[-15,-7],[-19,-78],[-12,-70],[-11,-126],[1,-64],[-23,-128],[7,-14],[-18,-91],[-12,-79],[-9,-11],[1,-57],[-11,-86],[-18,-64],[-16,2],[4,-35],[-9,-5],[-1,84],[-10,55],[-4,61],[2,70],[9,59],[3,89],[10,105],[4,76],[16,79],[18,110],[-4,34],[21,17],[15,65],[1,28],[-20,21],[25,54]],[[28739,61120],[-11,-44],[-3,44]],[[28423,61914],[-20,-21],[-13,21],[0,-52],[-18,-113],[-4,-52],[2,-76],[15,-59],[29,15],[6,26],[15,0],[12,38],[9,-30],[-6,-74],[19,-64],[0,-49],[35,-59],[25,-2],[7,-28],[6,21],[24,-9],[4,-44],[16,-39],[8,-59],[13,-15],[15,-54],[20,-23],[30,-68],[-5,-65],[-15,-24],[-2,-107],[4,-29],[-11,-46],[13,-23],[-19,-30],[-31,64],[-11,-27],[-7,25],[0,41],[-13,81],[-19,32],[-8,35],[-12,12],[-21,103],[-11,11],[-4,45],[-13,30],[-2,-30],[28,-89],[20,-114],[15,-24],[1,-25],[16,-14],[10,-96],[11,-53],[30,-4],[7,-36],[31,-24],[-14,-29],[-1,-37],[13,-8],[4,22],[8,-41],[5,-110],[-8,-90],[-18,63],[-21,45],[-9,-42],[11,-39],[7,-55],[9,-14],[-22,-24],[-18,-4],[6,-39],[22,11],[-2,-76],[14,12],[4,-31],[12,-20],[6,-49],[-9,-97],[-4,15],[-16,-18],[-15,-34],[-10,68],[-29,61],[-14,45],[4,48],[-13,71],[-22,-9],[-8,-25],[-10,46],[-18,11],[-4,23],[-21,-35],[11,-33],[12,8],[18,-13],[15,-55],[9,-2],[8,58],[8,-119],[1,-67],[22,-19],[25,-82],[1,-65],[27,4],[9,27],[1,-33],[9,-11],[-3,86],[17,6],[13,-29],[35,-36],[17,27],[11,-11],[8,-128],[12,-140],[9,-71],[7,-94]],[[15775,72069],[4,105],[10,72],[12,-52],[-2,-58],[19,-32],[-18,-27],[-5,-26],[-18,-12],[-2,30]],[[15740,73454],[0,40],[20,-41],[-17,-26],[-3,27]],[[15720,73667],[6,14],[26,-115],[-18,42],[-14,59]],[[15715,73495],[8,29],[12,-47],[-15,-33],[-5,51]],[[15707,73080],[13,89],[14,59],[2,55],[16,11],[7,-19],[0,-49],[19,-38],[3,-26],[-15,-19],[-17,15],[-1,-29],[-13,-34],[-14,-7],[3,-24],[23,10],[11,-42],[8,-84],[-4,-14],[10,-100],[8,27],[-5,67],[10,-3],[16,-57],[16,-13],[7,-94],[-8,-58],[-14,13],[-12,86],[-21,-25],[2,30],[-19,44],[3,93],[-5,56],[-18,-4],[-3,30],[-22,54]],[[15649,73739],[11,-4],[34,-53],[-8,-8],[-22,20],[-15,45]],[[15623,73630],[17,26],[2,-33],[-19,7]],[[15618,73982],[15,0],[4,-29],[-17,-2],[-2,31]],[[15586,73509],[7,30],[20,1],[2,-29],[15,-33],[17,-9],[-18,69],[37,108],[12,-2],[37,-58],[-19,-50],[11,-66],[-2,-62],[-11,-25],[4,-69],[-20,-12],[-15,50],[-9,-12],[-22,11],[-31,62],[-6,76],[-9,20]],[[15577,73617],[18,-10],[18,-54],[-30,41],[-6,23]],[[17306,73978],[-1,-290],[0,-441],[-2,-286],[0,-702],[1,-52],[0,-1247],[-7,-48],[20,-76],[8,-54],[0,-63],[12,-40],[-17,-93],[7,-11],[11,-93]],[[15490,70789],[-34,9],[-3,34],[-12,6],[-10,-31],[-13,10],[-19,-51],[-9,7],[-21,74],[-10,8],[-7,-47],[-10,-10],[6,139],[1,124],[-4,165],[13,-61],[-2,-100],[4,-137],[17,0],[1,37],[-10,40],[0,61],[12,-37],[14,83],[-19,116],[11,42],[25,53],[-17,37],[-6,-27],[-18,-2],[4,-23],[-16,4],[-20,44],[-1,55],[-11,130],[8,8],[6,-52],[11,31],[52,63],[-10,27],[-34,23],[-2,45],[-27,14],[-8,-24],[8,-90],[-16,-21],[3,38],[-4,206],[-14,176],[-24,80],[-9,207],[-5,77],[-15,162],[-14,36],[-4,55],[-14,23],[-5,31],[-19,29],[-12,110],[-8,101],[1,53],[-11,56],[12,58],[9,138],[-19,46],[3,22],[17,1],[40,-55],[32,-64],[10,-1],[25,-39],[6,12],[41,-55],[-1,-20],[35,-41],[56,-11],[21,13],[31,-37],[9,19],[10,-18],[24,7],[12,-32],[41,2],[32,71],[-3,-24],[22,-42],[7,-45],[17,17],[17,-5],[-3,-32],[14,-20],[1,-59],[10,6],[3,53],[-14,34],[0,40],[12,28],[21,10],[3,-31],[-15,-34],[10,-50],[7,6],[2,48],[10,14],[8,-100],[-15,-10],[11,-42],[8,-78],[13,-21],[-8,-25],[-16,2],[2,-42],[-17,-36],[-9,-113],[-14,-9],[11,113],[-6,17],[-19,-101],[-4,-53],[-21,-70],[-38,-183],[-13,-119],[12,8],[23,-13],[12,27],[21,17],[3,38],[-44,-62],[-17,27],[42,226],[31,74],[29,28],[3,73],[16,73],[31,68],[-9,97],[22,-40],[14,-187],[-22,0],[3,-40],[11,-14],[-4,-56],[7,-19],[0,-53],[-14,-38],[-1,-38],[15,-16],[-10,-48],[-6,-87],[4,-21],[-10,-57],[7,-49],[-15,-79],[-27,78],[8,96],[-16,-42],[-6,-63],[30,-83],[-10,-16],[1,-48],[-11,-26],[-16,46],[-20,105],[12,37],[1,61],[-7,25],[0,-51],[-12,-57],[7,-72],[-6,-48],[13,14],[11,-66],[27,-22],[11,37],[0,33],[13,16],[8,79],[10,53],[-2,30],[25,-58],[10,25],[-4,36],[27,34],[0,50],[-8,58],[-8,11],[6,35],[-10,40],[-7,71],[22,38],[-24,58],[16,82],[-6,91],[15,46],[9,119],[22,25],[-1,69],[-14,23],[-23,86],[1,74],[-10,49],[-15,4],[3,-24],[-11,-28],[10,-67],[18,-50],[1,-35],[-26,85],[-12,4],[-7,58],[2,77],[18,24],[16,-22],[10,42],[-10,45],[-28,45],[-13,48],[1,39],[-29,-33],[-7,33],[4,45],[-13,-17],[3,39],[24,28],[13,-15],[9,-49],[19,7],[-10,108],[17,6],[5,34],[-21,66],[-5,66],[8,44],[-13,30],[-17,-6],[-11,-41],[9,-44],[-19,40],[8,57],[-10,25],[-9,-14],[-1,65],[-21,54],[11,21],[-5,36],[-13,16],[16,54],[184,0],[97,-6],[145,5],[143,-2],[190,0],[169,0],[165,1],[178,0],[325,-2]],[[25685,69733],[6,80],[31,-17],[-23,-128],[-14,65]],[[25568,69555],[12,14],[2,-63],[-14,23],[0,26]],[[24707,71654],[8,83],[12,4],[-5,-75],[-15,-12]],[[24691,71507],[21,33],[-14,-47],[-7,14]],[[24655,71564],[5,21],[30,29],[5,-13],[-11,-48],[-24,-11],[-5,22]],[[24625,71464],[3,27],[20,41],[1,-19],[-24,-49]],[[24631,71609],[14,-54],[-13,-3],[-8,37],[7,20]],[[24621,71679],[35,36],[11,-55],[14,34],[2,-44],[-16,-9],[-17,-49],[-11,42],[-16,20],[-2,25]],[[24616,71401],[17,18],[32,86],[14,-32],[-30,-33],[5,-35],[-17,-4],[-20,-37],[-1,37]],[[24563,71635],[15,17],[-1,-44],[-14,27]],[[24276,71309],[20,-30],[34,11],[49,52],[19,27],[18,0],[48,70],[25,27],[6,26],[17,-22],[7,33],[25,10],[22,70],[14,-12],[14,35],[10,-4],[24,-81],[-14,-76],[-24,-78],[9,-73],[-16,-35],[-11,-77],[13,-16],[42,73],[5,54],[42,-108],[13,-22],[9,10],[25,-27]],[[25508,69434],[-10,-58],[-1,-80],[-37,-13],[-21,-40],[3,-47],[-11,-59],[-9,-15],[-11,-83],[-12,-42],[-7,-104],[3,-25],[-13,-50],[20,-42],[12,7],[7,53],[26,64],[10,3],[15,63],[0,36],[31,133],[26,36],[11,-7],[11,34],[15,-32],[-6,46],[12,97],[27,109],[7,100],[12,-5],[21,32],[1,59],[17,60],[22,-3],[-2,-87],[-16,-5],[-2,-142],[-12,-40],[-8,4],[-5,-53],[-14,-52],[5,-43],[-13,-39],[4,-26],[-18,-33],[-13,-62],[-8,-87],[-17,-107],[-9,-26],[-9,-62],[-21,-268],[9,-94],[-2,-71],[-12,-41],[-23,-46],[-3,-62],[-8,-37],[-14,-162],[2,-82],[8,-50],[-2,-102],[-21,-118],[-7,-136],[-20,-107],[-9,-156],[8,-76],[-5,-38],[8,-85],[-7,-57],[14,-62],[0,-85],[6,-63],[16,-59],[-4,-89],[-11,-107],[6,-145]],[[2682,386],[26,11],[1,-51],[-9,8],[-8,-28],[-10,60]],[[2636,452],[21,8],[-4,-21],[-13,-12],[-4,25]],[[2313,271],[13,35],[16,2],[19,68],[4,-20],[27,2],[4,-44],[-7,13],[-29,-30],[-23,-89],[-11,47],[-13,16]],[[90204,32599],[5,15],[34,16],[21,137],[6,65],[7,-11],[7,-43],[14,-11],[-10,-88],[-32,-109],[-9,-44],[-2,-111],[-12,-56],[-18,30],[-7,101],[8,50],[-12,59]],[[90597,35570],[10,43],[4,-16],[-8,-45],[-6,18]],[[90537,37432],[5,20],[1,-49],[-6,29]],[[90507,37973],[14,53],[0,59],[11,0],[0,-66],[-9,-13],[-10,-55],[-6,22]],[[90501,34555],[4,28],[2,101],[9,-12],[20,67],[5,-22],[-14,-80],[4,-63],[-13,7],[0,-73],[-12,18],[-5,29]],[[90487,38800],[6,39],[11,-28],[-1,-51],[-8,-23],[-7,25],[-1,38]],[[90486,35993],[20,2],[3,-36],[-19,-8],[-4,42]],[[90472,34420],[4,45],[13,54],[5,-54],[-4,-24],[7,-40],[-2,-61],[-9,-29],[-14,109]],[[90343,33382],[11,51],[21,35],[15,-9],[-2,-35],[-12,-13],[-8,-39],[-11,-6],[-5,23],[-9,-7]],[[28030,56345],[-13,-8],[-36,-51],[-27,-66],[-35,-121],[-18,-79],[-7,-45],[-16,-58],[-14,-93],[-13,-174],[3,-55],[-7,-48],[-14,-47],[-23,-41],[-9,-97],[-17,10],[-17,-16],[-11,39],[-16,-33],[-10,-63],[3,-31],[8,10],[0,-33],[-15,-20],[-18,-45],[-9,-52],[-34,-59],[-10,38],[-11,-7],[-1,-32],[17,-22],[-5,-59],[-25,-52],[-7,-40],[-10,5],[-24,-22],[-17,-59],[-6,18],[-36,-90],[-8,21],[-15,-28],[-2,30],[-13,-1],[-4,-42],[15,-83],[-7,-74],[-32,-62],[-19,-20],[-2,41],[-19,40],[-11,-22],[-2,-31],[12,-15],[14,-59],[-15,-65],[-25,-59],[-9,0],[-17,-67],[5,-21]],[[31708,38299],[11,-21],[12,13],[9,-36],[-17,-36],[-12,19],[-3,61]],[[31642,38028],[49,54],[35,-32],[-18,-26],[-21,-7],[-11,-24],[-8,12],[-17,-17],[-9,40]],[[31637,38350],[7,-14],[0,-44],[-7,58]],[[31170,38320],[15,18],[17,49],[-4,63],[7,32],[14,12],[20,-6],[17,-25],[50,2],[20,-22],[24,26],[18,-5],[25,-25],[8,20],[28,0],[27,-20],[16,1],[7,-19],[6,24],[37,-35],[4,19],[18,-18],[6,7],[31,-33],[14,-49],[7,13],[5,-27],[10,-6],[14,22],[-5,-40],[3,-84],[13,-30],[-7,-43],[-11,19],[3,-28],[-10,2],[-7,-32],[-13,1],[-11,-59],[-7,-83],[-8,-6],[-1,-44],[-25,-46],[-15,-9],[-12,12],[-7,-27],[-10,13],[-21,-43],[-10,9],[-9,-29],[-8,9],[-18,66],[-12,-10],[-7,-34],[-21,60],[-8,0],[-25,-33],[-14,24],[-12,-19],[-25,47],[-7,-39],[-14,-27],[-21,-3],[-12,-18],[-8,41],[-21,8],[-11,-32],[-19,19],[-12,-12],[1,53],[10,31],[-11,12],[3,65],[5,15],[1,75],[7,31],[-10,101],[-13,21],[-9,78]],[[30985,38023],[20,12],[5,-43],[-15,-38],[-12,32],[2,37]],[[31858,38286],[13,39],[11,-4],[15,-28],[-13,-4],[1,-49],[-9,20],[-13,-5],[-5,31]],[[31828,37522],[7,36],[-4,40],[7,30],[10,-13],[8,22],[17,3],[6,-29],[39,5],[2,-18],[-32,-48],[-41,-30],[-19,2]],[[31779,38288],[6,50],[10,-23],[12,26],[19,-21],[33,6],[-2,-23],[-14,-4],[9,-42],[-16,-11],[-15,23],[-7,-20],[-12,49],[-23,-10]],[[17306,73978],[171,1],[103,1]],[[18139,65823],[-119,3],[-36,-2],[-58,9],[-63,-7],[-79,0],[-293,0],[-184,5]],[[29478,69336],[71,5],[115,0],[40,-9],[62,-5],[57,2],[168,10]],[[25149,51924],[13,-63],[5,-76],[-3,-101],[-10,-105],[-4,3],[8,90],[4,100],[-1,46],[-12,106]],[[25020,51931],[11,38],[32,81],[2,-14],[-13,-63],[2,-28],[13,-33],[-15,-50],[-3,47],[-10,-10],[-17,10],[-2,22]],[[24941,51321],[17,10],[-9,-42],[-8,32]],[[24732,50824],[7,27],[13,-65],[-8,-14],[-12,52]],[[24681,50807],[39,-33],[-19,-8],[-20,41]],[[24628,50763],[25,19],[2,-17],[-26,-20],[-1,18]],[[24275,51386],[10,27],[12,-5],[3,26],[22,-6],[23,-61],[9,7],[6,-29],[-15,-36],[-1,-40],[-14,-19],[-59,115],[4,21]],[[24969,52072],[-17,-35],[-8,7],[-17,-56],[-2,-38],[-12,-15],[3,-40],[-28,17],[-11,-45],[5,-68],[18,-10],[13,25],[-4,-59],[8,-34],[15,-19],[13,11],[6,29],[5,101],[-2,13],[24,54],[3,44],[18,-34],[13,6],[0,-21],[-17,-34],[0,-34],[15,-17],[3,-61],[15,14],[11,82],[16,-25],[-4,-55],[-13,0],[-12,-44],[22,2],[-3,-29],[-31,-22],[13,-66],[11,22],[-7,-59],[-9,26],[-14,11],[-12,-55],[-1,-99],[-9,-5],[-6,86],[-11,1],[-2,-66],[13,-58],[-13,33],[-14,5],[-8,-17],[-15,6],[18,-39],[0,-32],[-23,49],[0,-25],[12,-32],[-12,-14],[1,-34],[11,-36],[20,-11],[-1,-22],[12,-24],[-1,-34],[7,-46],[9,30],[5,-21],[22,-2],[16,-34],[3,30],[20,-91],[11,44],[24,-111],[0,-59],[6,-13],[18,28],[7,-41],[-24,-15],[-2,-33],[16,-3],[-8,-52],[-11,24],[-12,-96],[2,-44],[-21,36],[-2,55],[-8,16],[-31,-138],[-15,-41],[7,67],[9,29],[5,48],[9,21],[0,54],[9,23],[-1,51],[-10,24],[-4,-62],[-16,-29],[-12,29],[-14,77],[-34,43],[-10,45],[-56,33],[-12,-14],[-48,-143],[-46,-115],[-7,10],[4,41],[-12,16],[-2,41],[6,3],[-12,100],[-11,27],[-9,-1],[1,-28],[-8,-36],[2,76],[-10,56],[-13,-64],[-14,14],[-7,-22],[-7,31],[-6,-27],[10,-63],[-12,4],[-7,-27],[-4,-54],[-8,7],[-5,-57],[-8,12],[-19,-33],[-6,-76],[-16,16],[5,21],[-13,67],[-18,57],[-11,-13],[-26,21],[-10,33],[-25,12],[-16,25],[-16,60],[12,14],[7,58],[8,-12],[12,-52],[7,22],[-1,-68],[15,-17],[-4,104],[-23,64],[0,42],[-11,7],[-9,-41],[-13,-13],[2,41],[-10,-7],[3,39],[9,28],[-10,40],[-29,-50],[-10,80],[-10,-8],[-6,118],[-26,1],[6,33],[1,85],[-32,16],[-13,-10],[-20,-38],[-7,57],[8,41],[8,-3],[-2,46],[-16,8],[-14,-22],[-9,20],[-2,-40],[-24,-36],[-14,-34],[-6,32],[-18,-16],[0,-32],[9,-30],[18,-8],[-9,-30],[8,-63],[20,21],[5,-18],[-13,-14],[6,-20],[-32,-6],[-26,-49],[-20,-9],[-82,63],[-35,42],[-57,101],[-23,32],[-41,40],[-33,5],[-14,-14],[-36,7],[-58,-25],[-17,-13],[-26,-53]],[[30097,65246],[-20,-46],[-6,102],[2,64],[-10,22],[2,-159],[-17,2],[-2,-35],[-10,-7],[-1,55],[16,95],[8,68],[17,46]],[[30029,65436],[5,7],[11,-52],[-5,-7],[-11,52]],[[30019,65203],[6,51],[-4,23],[5,57],[4,-20],[0,-85],[-11,-26]],[[29960,64853],[11,80],[5,-14],[1,-76],[-17,10]],[[30068,65494],[-3,-45],[-14,-41],[-6,42],[4,35],[-19,54],[-8,40],[5,-129],[-22,17],[12,-39],[1,-75],[-12,-11],[8,-53],[0,-72],[-10,-45],[-8,-73],[-12,6],[-27,-18],[-27,-34],[-38,-30],[-1,16]]]},zh=rp();function Bh(e){let t=zh(e);return t?[(t[0]-487.5)*ip,(t[1]-305)*ip]:null}function Vh(e){let t=0;for(let n=0;n<e.length-1;n++)t+=e[n][0]*e[n+1][1]-e[n+1][0]*e[n][1];return Math.abs(t/2)}function Hh(e){e.add(Eh(900,2845872,0));let t=jh(Rh,Rh.objects.nation),n=t.type===`FeatureCollection`?t.features[0]:t,r=new q({color:15326660,flatShading:!0}),i=new q({color:13219733,flatShading:!0}),a=n.geometry.type===`MultiPolygon`?n.geometry.coordinates:[n.geometry.coordinates];for(let t of a){let n=t[0].map(Bh).filter(Boolean);if(n.length<12||Vh(n)<6)continue;let a=new $c(n.map(([e,t])=>new z(e,-t)));for(let e=1;e<t.length;e++){let n=t[e].map(Bh).filter(Boolean);n.length>8&&a.holes.push(new Jc(n.map(([e,t])=>new z(e,-t))))}let o=new U(new Fl(a,{depth:1.4,bevelEnabled:!1}),[r,i]);o.rotation.x=-Math.PI/2,o.position.y=0,o.receiveShadow=!0,o.castShadow=!1,e.add(o)}let o=Fh(Rh,Rh.objects.states,(e,t)=>e!==t),s=[],c=e=>{for(let t=0;t<e.length-1;t++){let n=Bh(e[t]),r=Bh(e[t+1]);!n||!r||s.push(n[0],1.52,n[1],r[0],1.52,r[1])}};o.type===`MultiLineString`?o.coordinates.forEach(c):c(o.coordinates);let l=new kr;l.setAttribute(`position`,new xr(s,3));let u=new vc(l,new oc({color:11049079,transparent:!0,opacity:.85}));e.add(u)}var Uh=e=>new q({color:e,flatShading:!0});function Q(e,t,n,r,i=0,a=0,o=0){let s=new U(new Yr(e,t,n),Uh(r));return s.position.set(i,a+t/2,o),s.castShadow=!0,s}function Wh(e,t,n,r,i=0,a=0,o=0,s=8){let c=new U(new Zc(e,t,n,s),Uh(r));return c.position.set(i,a+n/2,o),c.castShadow=!0,c}function Gh(e,t,n,r=0,i=0,a=0,o=6){let s=new U(new Qc(e,t,o),Uh(n));return s.position.set(r,i+t/2,a),s.castShadow=!0,s}function Kh(e,t,n=0,r=0,i=0){let a=new U(new Rl(e,8,6),Uh(t));return a.position.set(n,r,i),a.castShadow=!0,a}var qh={owtc(){let e=new K,t=new U(new Zc(.72,1.06,9,4),Uh(12573166));return t.position.y=4.5,t.rotation.y=Math.PI/4,t.castShadow=!0,e.add(t),e.add(Wh(.05,.05,2.2,14543347,0,9)),e.add(Q(1.2,3.2,1.2,11060960,2,0,1.2)),e.add(Q(1,2.4,1,10336466,-1.8,0,1)),e},esb(){let e=new K;return e.add(Q(2.2,3.2,2.2,14272681)),e.add(Q(1.6,2.6,1.6,13483422,0,3.2)),e.add(Q(1,2.2,1,12759700,0,5.8)),e.add(Wh(.04,.16,1.8,12101770,0,8)),e},chrysler(){let e=new K;e.add(Q(1.6,4.6,1.6,13225944));for(let t=0;t<4;t++)e.add(Wh(.55-t*.12,.72-t*.12,.55,14673646,0,4.6+t*.55));return e.add(Gh(.12,1.3,15659767,0,6.8)),e},grandcentral(){let e=new K;e.add(Q(2.8,1.4,1.9,14207400));let t=new U(new Zc(.85,.85,2.6,10,1,!1,0,Math.PI),Uh(13087891));return t.rotation.z=Math.PI/2,t.position.y=1.4,t.castShadow=!0,e.add(t),e.add(Wh(.1,.1,.9,12101768,1.2,1.4,.7)),e.add(Wh(.1,.1,.9,12101768,-1.2,1.4,.7)),e},timessq(){let e=new K;return e.add(Q(1.3,5.5,1.3,8954040)),e.add(Q(1.5,.9,.1,16739179,0,3.4,.72)),e.add(Q(1.5,.7,.1,5036411,0,2.2,.72)),e.add(Q(.1,.8,1.4,5617407,.72,2.8,0)),e.add(Q(1.1,3.4,1.1,7901352,1.7,0,-1)),e.add(Q(.9,2.6,.9,10005440,-1.6,0,-.8)),e},hudson(){let e=new K;return e.add(Q(1.1,4.6,1.1,10467016,-.8,0,0)),e.add(Q(1.1,3.6,1.1,9152187,.7,0,.4)),e.add(Wh(.7,.35,.9,13208139,0,0,-1.2)),e},un(){let e=new K;return e.add(Q(2.4,5.4,.5,10471134)),e.add(Q(2.2,.8,1.6,14208960,0,0,1)),e},park(){let e=new K;for(let t=0;t<7;t++){let t=(Math.random()-.5)*3,n=(Math.random()-.5)*3;e.add(Wh(.08,.08,.35,9070402,t,0,n)),e.add(Gh(.45,1.1,4173418,t,.32,n))}return e},village(){let e=new K,t=[14257508,13204058,12085840];for(let n=0;n<5;n++)e.add(Q(.8,.9+n%3*.35,.8,t[n%3],(n-2)*.9,0,n%2*.9-.4));return e},highline(){let e=new K;e.add(Q(4,.18,.7,7186548,0,.8,0));for(let t=-2;t<=2;t++)e.add(Wh(.08,.08,.8,5530222,t,0,0));return e.add(Q(.9,2.4,.9,12100808,-1.4,0,1.2)),e.add(Q(.8,1.7,.8,10522808,1.5,0,1.1)),e},intrepid(){let e=new K;return e.add(Q(3.4,.5,1.1,7044236)),e.add(Q(3.6,.16,1.3,9083560,0,.5,0)),e.add(Q(.5,.9,.4,5925496,.8,.66,-.3)),e.add(Q(.55,.1,.5,13161178,-.8,.66,.1)),e},stadium(){let e=new K;return e.add(Wh(2.1,2.3,1.1,14673130,0,0,0,12)),e.add(Wh(1.5,1.5,.2,5025375,0,1,0,12)),e},coney(){let e=new K,t=new U(new zl(1.3,.09,6,14),Uh(16748378));return t.position.y=1.7,t.castShadow=!0,e.add(t),e.add(Wh(.09,.09,1.7,9082274,-.5,0,0)),e.add(Wh(.09,.09,1.7,9082274,.5,0,0)),e.add(Q(1.6,.5,.8,16761963,2,0,.4)),e},unisphere(){let e=new K,t=new U(new Rl(1.1,10,8),new q({color:12109006,wireframe:!0}));return t.position.y=1.8,e.add(t),e.add(Wh(.5,.7,.4,10135218)),e},airport(){let e=new K;return e.add(Q(3.4,.6,1.2,13161180)),e.add(Wh(.18,.24,1.9,9082789,1.9,0,.6)),e.add(Q(.8,.5,.8,11451078,1.9,1.9,.6)),e.add(Q(4.5,.06,.7,5397606,0,0,2)),e},liberty(){let e=new K;return e.add(Q(1.1,.9,1.1,13219734)),e.add(Wh(.42,.55,.5,11903876,0,.9)),e.add(Gh(.42,1.9,6276240,0,1.4,0,7)),e.add(Kh(.22,6276240,0,3.45,0)),e.add(Wh(.05,.05,.9,6276240,.32,3.3,0)),e.add(Gh(.14,.3,16765527,.32,4.2,0,5)),e},ellis(){let e=new K;e.add(Q(1.8,.8,1,13134426));for(let t of[-.7,.7])e.add(Wh(.16,.2,1.2,14209732,t,.8,-.3)),e.add(Kh(.24,8960200,t,2.15,-.3));return e},governors(){let e=new K;return e.add(Wh(.7,.9,.7,10135690,-.6,0,0)),e.add(Gh(.5,1,4173418,.8,0,.4)),e.add(Gh(.4,.8,4173418,1.2,0,-.5)),e}},Jh={usa:{landTop:1.4,trackY:2.4,trainScale:.52,nodeScale:1.15,labelSize:7.5},nyc:{landTop:.8,trackY:1.8,trainScale:.32,nodeScale:.72,labelSize:4}},Yh=Jh.nyc.landTop;function Xh(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zh(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let[a,o]of e)t=Math.min(t,a),r=Math.max(r,a),n=Math.min(n,o),i=Math.max(i,o);return{x0:t,z0:n,x1:r,z1:i}}function Qh(e){e.add(Eh(400,4031942,.12));let t=Xh(1337),n=hd.map(e=>[e.x,e.z]);for(let r of md){let i=new U(new Fl(new $c(r.poly.map(([e,t])=>new z(e,-t))),{depth:Yh,bevelEnabled:!1}),[new q({color:r.color,flatShading:!0}),new q({color:11048311,flatShading:!0})]);if(i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i),r.buildingCount>0){let i=Zh(r.poly),a=new ac(new Yr(1,1,1),new q({color:r.buildingColor,flatShading:!0}),r.buildingCount);a.castShadow=!0;let o=new Xn,s=0,c=0;for(;s<r.buildingCount&&c<r.buildingCount*40;){c++;let e=i.x0+t()*(i.x1-i.x0),l=i.z0+t()*(i.z1-i.z0);if(!vd(e,l,r.poly)||n.some(([t,n])=>Math.hypot(e-t,l-n)<4)||r.id===`manhattan`&&e>_d.x0-1&&e<_d.x1+1&&l>_d.z0-1&&l<_d.z1+1)continue;let u=.5+t()*1.2;if(r.id===`manhattan`){let e=Math.abs(l-8)<14,n=Math.abs(l-46)<8;u=.7+t()*1.5+(e?t()*3.2:0)+(n?t()*2.6:0)}let d=.6+t()*.9;o.position.set(e,Yh+u/2,l),o.scale.set(d,u,.6+t()*.9),o.rotation.y=t()*.4-.2,o.updateMatrix(),a.setMatrixAt(s++,o.matrix)}a.count=s,e.add(a)}}let r=_d,i=new U(new Yr(r.x1-r.x0,.14,r.z1-r.z0),new q({color:6537338,flatShading:!0}));i.position.set((r.x0+r.x1)/2,Yh+.07,(r.z0+r.z1)/2),i.receiveShadow=!0,e.add(i);let a=Xh(99);for(let t=0;t<16;t++){let t=r.x0+.6+a()*(r.x1-r.x0-1.2),n=r.z0+.6+a()*(r.z1-r.z0-1.2),i=new U(new Qc(.4,1,6),new q({color:4173418,flatShading:!0}));i.position.set(t,Yh+.6,n),i.castShadow=!0,e.add(i)}for(let t of hd){if(!t.landmark||!qh[t.landmark])continue;let n=qh[t.landmark]();n.position.set(t.x+1.6,Yh,t.z-1.6),e.add(n)}for(let t of gd)e.add($h(t))}function $h({from:e,to:t}){let n=new K,[r,i]=e,[a,o]=t,s=Math.hypot(a-r,o-i),c=Math.atan2(a-r,o-i),l=new U(new Yr(.7,.12,s),new q({color:10127986,flatShading:!0}));l.castShadow=!0,n.add(l),l.position.y=1.35;let u=new q({color:8220508,flatShading:!0});for(let e of[.28,.72]){let t=new U(new Yr(1,2.6,.3),u);t.position.set(0,2.25,-s/2+e*s),t.castShadow=!0,n.add(t)}return n.position.set((r+a)/2,0,(i+o)/2),n.rotation.y=c,n}var eg=`"Outfit Variable", "Segoe UI", sans-serif`;function tg(e,{size:t=6,color:n=`#ffffff`,bg:r=`rgba(12,17,25,0.92)`,lock:i=!1,surgeTag:a=``,measureSurgeTag:o=``}={}){let s=i?160*.85:0,l=a?`${e} · ${a}`:e,d=o?l.replace(a,o):l,f=a.includes(`LOST`),p=!!a,m=document.createElement(`canvas`),h=m.getContext(`2d`);h.font=`700 160px ${eg}`;let g=Math.ceil(h.measureText(d).width)+s+96;m.width=g,m.height=232;let _=m.getContext(`2d`);if(_.imageSmoothingEnabled=!0,_.imageSmoothingQuality=`high`,_.fillStyle=p?f?`rgba(220,38,38,0.95)`:`rgba(234,88,12,0.95)`:r,_.beginPath(),_.roundRect(0,0,g,232,116),_.fill(),_.strokeStyle=p?f?`#fca5a5`:`#fdba74`:`rgba(255,255,255,0.25)`,_.lineWidth=8,_.stroke(),i){let e=48+s*.38,t=160*.52,n=160*.42;_.strokeStyle=`#ffffff`,_.lineWidth=160*.11,_.beginPath(),_.arc(e,116-n*.32,t*.32,Math.PI,0),_.stroke(),_.fillStyle=`#ffffff`,_.beginPath(),_.roundRect(e-t/2,116-n*.32,t,n,t*.16),_.fill()}_.shadowColor=`rgba(0,0,0,0.75)`,_.shadowBlur=10,_.shadowOffsetX=0,_.shadowOffsetY=4,_.font=`700 160px ${eg}`,_.fillStyle=n,_.textAlign=`left`,_.textBaseline=`middle`,_.fillText(l,48+s,122);let v=new yc(m);v.minFilter=u,v.magFilter=c,v.anisotropy=16,v.generateMipmaps=!0;let y=new Js(new Ps({map:v,depthTest:!1,transparent:!0})),b=g/232;return y.scale.set(t*b*.28,t*.28,1),y.renderOrder=10,y}var ng={usa:130,nyc:58};function rg(e,t,n){let r=e.position.distanceTo(t),i=ng[n]??100;return yt.clamp(r/i,.35,1.15)}function ig(){let e=Math.min(window.innerWidth,window.innerHeight);return yt.clamp(e/920,.72,1.08)}function ag(e,t,n){return rg(t,n,e)*ig()}var og=class{constructor(e,t,n){this.mapKey=e,this.bundle=t,this.state=n,this.meshes={},this.cfg=Jh[e],this.rebuildAll()}nodeColor(e){if(e.junction)return 13160668;if(this.mapKey===`usa`){let t=fd.find(t=>t.rank===e.rank);return t?pd(t):9279918}return 16748378}rebuildAll(){for(let e of Object.values(this.state.maps[this.mapKey].nodes))this.rebuildNode(e)}tagLabel(e){return e.userData.labelBase=e.scale.clone(),e}statusOf(e){return e.junction?`junction`:e.station?`station`:e.unlocked?`unlocked`:`locked`}formatTimer(e){let t=Math.max(0,Math.ceil(e||0)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}surgeTagFor(e){return e.vipSurgeActive?`VIP SURGE`:e.surgeActive?`DEMAND SURGE ${this.formatTimer(e.surgeTimer)}`:e.surgeFrustrated?`+12 LOST/MIN ${this.formatTimer(e.frustrationTimer)}`:e.crowded?`OVERCROWDED`:``}surgeModeFor(e){return e.vipSurgeActive?`vip`:e.surgeActive?`surge`:e.surgeFrustrated?`frustrated`:e.crowded?`crowded`:``}measureTagFor(e){return e.surgeActive?`DEMAND SURGE 88:88`:e.surgeFrustrated?`+12 LOST/MIN 88:88`:this.surgeTagFor(e)}disposeLabel(e){e?.material?.map?.dispose(),e?.material?.dispose()}replaceLabel(e,t){if(!t.label||!t.labelOptions)return;let n=this.tagLabel(tg(e.name,{...t.labelOptions,surgeTag:this.surgeTagFor(e),measureSurgeTag:this.measureTagFor(e)}));n.position.copy(t.label.position),t.group.remove(t.label),this.disposeLabel(t.label),t.group.add(n),t.label=n,t.surgeTagKey=this.surgeTagFor(e)}rebuildNode(e){let t=this.statusOf(e),n=this.meshes[e.id];n&&(this.bundle.pickables.remove(n.group),n.group.traverse(e=>{e.geometry?.dispose()}));let r=this.cfg.nodeScale,i=this.cfg.landTop,a=new K;a.position.set(e.x,i,e.z),a.userData={kind:`node`,id:e.id,map:this.mapKey};let o=this.nodeColor(e),s=(.55+e.demand*.05)*r,c=this.surgeTagFor(e),l=this.measureTagFor(e),u=new U(new zl(s*1.6,.16*r,8,24),new hr({color:15357964,transparent:!0,opacity:.85}));u.rotation.x=Math.PI/2,u.position.y=.06*r,u.visible=!!c,a.add(u);let d=null,f=null,p=null;if(t===`locked`){let t=new U(new Zc(s*.7,s*.7,.18*r,10),new q({color:7042692,transparent:!0,opacity:.75}));t.position.y=.09*r,a.add(t),p={size:this.cfg.labelSize*.8,color:`#aab4c2`,lock:!0},f=this.tagLabel(tg(e.name,{...p,surgeTag:c,measureSurgeTag:l})),f.position.y=1.6*r,a.add(f)}else if(t===`junction`){let t=new U(new zl(s*.85,.08*r,6,16),new q({color:o}));t.rotation.x=Math.PI/2,t.position.y=.14*r,a.add(t);let n=new U(new Zc(s*.35,s*.35,.2*r,8),new q({color:15265266}));n.position.y=.1*r,a.add(n),p={size:this.cfg.labelSize*.75,color:`#c8d0dc`},f=this.tagLabel(tg(e.name,{...p,surgeTag:c,measureSurgeTag:l})),f.position.y=1.5*r,a.add(f)}else if(t===`unlocked`){let t=new U(new zl(s,.1*r,6,20),new q({color:o}));t.rotation.x=Math.PI/2,t.position.y=.12*r,a.add(t);let n=new U(new Zc(s*.45,s*.45,.14*r,10),new q({color:o,transparent:!0,opacity:.5}));n.position.y=.07*r,a.add(n),p={size:this.cfg.labelSize*.85,color:`#dfe6ee`},f=this.tagLabel(tg(e.name,{...p,surgeTag:c,measureSurgeTag:l})),f.position.y=1.7*r,a.add(f)}else{let t=new U(new Zc(s,s*1.12,.3*r,12),new q({color:15922680}));t.position.y=.15*r,t.castShadow=!0,a.add(t);let n=new U(new zl(s,.12*r,6,20),new q({color:o}));n.rotation.x=Math.PI/2,n.position.y=.3*r,n.userData.baseColor=o,a.add(n),d=n;let i=new U(new Yr(.8*r,.5*r,.55*r),new q({color:o}));i.position.set(s*.75,.55*r,-s*.75),i.castShadow=!0,a.add(i);let u=new U(new Qc(.55*r,.4*r,4),new q({color:3818838}));u.rotation.y=Math.PI/4,u.position.set(s*.75,.98*r,-s*.75),a.add(u),p={size:this.cfg.labelSize,color:`#ffffff`},f=this.tagLabel(tg(e.name,{...p,surgeTag:c,measureSurgeTag:l})),f.position.y=2*r,a.add(f);let m=new U(new Yr(.3*r,1,.3*r),new q({color:16765527}));m.position.set(-s*.9,0,s*.9),m.visible=!1,a.add(m),a.userData.waitBar=m}let m=new U(new Zc(Math.max(s*1.6,1.6*r),Math.max(s*1.6,1.6*r),2.4*r,8),new hr({visible:!1}));m.position.y=.6*r,m.userData=a.userData,a.add(m),this.bundle.pickables.add(a),this.meshes[e.id]={group:a,status:t,ring:d,surgeBeacon:u,surgeTagKey:c,surgeModeKey:this.surgeModeFor(e),label:f,labelOptions:p}}update(){let e=rg(this.bundle.camera,this.bundle.controls.target,this.mapKey);for(let t of Object.values(this.state.maps[this.mapKey].nodes)){let n=this.meshes[t.id];if(!n)continue;let r=this.surgeTagFor(t),i=this.surgeModeFor(t);if(n.status!==this.statusOf(t)||n.surgeModeKey!==i){this.rebuildNode(t);continue}if(n.surgeTagKey!==r&&this.replaceLabel(t,n),n.surgeBeacon)if(t.vipSurgeActive){n.surgeBeacon.visible=!0;let e=1.35+.35*Math.sin(Date.now()*.011);n.surgeBeacon.scale.set(e,e,1),n.surgeBeacon.material.color.setHex(15381256)}else if(t.surgeActive){n.surgeBeacon.visible=!0;let e=1.35+.35*Math.sin(Date.now()*.009);n.surgeBeacon.scale.set(e,e,1),n.surgeBeacon.material.color.setHex(15357964)}else if(t.surgeFrustrated){n.surgeBeacon.visible=!0;let e=1.35+.35*Math.sin(Date.now()*.014);n.surgeBeacon.scale.set(e,e,1),n.surgeBeacon.material.color.setHex(14235704)}else if(t.crowded){n.surgeBeacon.visible=!0;let e=1.25+.25*Math.sin(Date.now()*.012);n.surgeBeacon.scale.set(e,e,1),n.surgeBeacon.material.color.setHex(15680580)}else n.surgeBeacon.visible=!1;if(n.group.traverse(t=>{t.userData?.labelBase&&t.scale.set(t.userData.labelBase.x*e,t.userData.labelBase.y*e,1)}),!n.group.userData.waitBar)continue;let a=t.waiting.reduce((e,t)=>e+t.count,0),o=ld(this.mapKey,t,this.state),s=o>0?a/o:0,c=n.group.userData.waitBar;if(a<1)c.visible=!1;else{c.visible=!0;let e=Math.min(3,.2+s*1.4)*this.cfg.nodeScale;c.scale.y=e,c.position.y=e/2,c.material.color.setHex(t.crowded?16729156:s>=.7?16746564:16765527)}if(n.ring?.material){let e=new H(n.ring.userData.baseColor??this.nodeColor(t)),r=new H(16729156),i=t.crowded?Math.min(1,s):s*.65;n.ring.material.color.copy(e).lerp(r,i)}}}},sg=class{constructor(e,t,n){this.mapKey=e,this.bundle=t,this.state=n,this.meshes={},this.highlighted=new Set,this.sync()}sync(){let e=this.state.maps[this.mapKey].edges;for(let t in this.meshes)(!e[t]||e[t].type!==this.meshes[t].userData.builtType)&&(this.bundle.trackGroup.remove(this.meshes[t]),this.meshes[t].traverse(e=>e.geometry?.dispose()),delete this.meshes[t]);for(let t in e)if(!this.meshes[t]){let n=this.buildEdge(e[t]);this.meshes[t]=n,this.bundle.trackGroup.add(n)}this._applyHighlight()}_applyHighlight(){let e=this.state.maps[this.mapKey].edges;for(let t in this.meshes){let n=this.meshes[t].userData.deck;if(!n)continue;let r=ku[e[t]?.type??1].color;this.highlighted.has(t)?(n.material.color.setHex(16777215),n.material.emissive.setHex(3355443)):(n.material.color.setHex(r),n.material.emissive.setHex(0))}}highlight(e){this.highlighted=new Set(e),this._applyHighlight()}clearHighlight(){this.highlighted.clear(),this._applyHighlight()}buildEdge(e){let t=Jh[this.mapKey],n=this.state.maps[this.mapKey],r=n.nodes[e.a],i=n.nodes[e.b],a=e.length,o=Math.atan2(i.x-r.x,i.z-r.z),s=ku[e.type].color,c=this.mapKey===`usa`?1.4:1,l=new K;l.position.set((r.x+i.x)/2,0,(r.z+i.z)/2),l.rotation.y=o,l.userData={kind:`edge`,id:e.id,map:this.mapKey,builtType:e.type};let u=t.trackY,d=new U(new Yr(.5*c,.14*c,a),new q({color:s}));if(d.position.y=u,d.castShadow=!0,d.userData=l.userData,l.userData.deck=d,l.add(d),e.type===3){let e=new U(new Yr(.14*c,.14*c,a),new q({color:14479615}));e.position.y=u+.14*c,e.userData=l.userData,l.add(e)}else{let e=new U(new Yr(.24*c,.05*c,a),new q({color:4871009}));e.position.y=u+.09*c,e.userData=l.userData,l.add(e)}let f=this.mapKey===`usa`?14:5,p=Math.max(1,Math.floor(a/f)),m=new q({color:9077106});for(let e=1;e<=p;e++){let n=e/(p+1),o=r.x+(i.x-r.x)*n,s=r.z+(i.z-r.z)*n,d=this.mapKey===`nyc`&&!yd(o,s)?0:t.landTop,f=u-d,h=new U(new Yr(.22*c,f,.22*c),m);h.position.set(0,d+f/2,-a/2+n*a),h.userData=l.userData,l.add(h)}let h=new U(new Yr(1.6*c,1.6*c,a),new hr({visible:!1}));return h.position.y=u,h.userData=l.userData,l.add(h),l}},cg=e=>new q({color:e,flatShading:!0});function lg(){let e=new K,t=new U(new Yr(.9,.7,2.6),cg(5036411));t.position.y=.55,e.add(t);let n=new U(new Yr(.95,.55,.8),cg(3123291));n.position.set(0,1.1,.7),e.add(n);let r=new U(new Zc(.1,.14,.4,8),cg(2897478));r.position.set(0,1.1,-.9),e.add(r);let i=new U(new Yr(.85,.6,2),cg(14212838));return i.position.set(0,.5,2.7),e.add(i),pg(e,[-.9,.1,2.2,3.2],2897478),e}function ug(){let e=new K,t=new U(new Yr(.8,.55,3),cg(16758087));t.position.y=.5,e.add(t);let n=new U(new Qc(.42,1.1,4),cg(16761963));n.rotation.x=-Math.PI/2,n.rotation.y=Math.PI/4,n.position.set(0,.5,-2.05),e.add(n);let r=new U(new Yr(.84,.14,3),cg(2897478));r.position.y=.62,e.add(r);let i=new U(new Yr(.76,.5,2.4),cg(15918024));return i.position.set(0,.48,2.9),e.add(i),pg(e,[-1.1,.4,2,3.7],3818838),e}function dg(){let e=new K,t=new U(new Xc(.42,2.2,4,10),cg(5617407));t.rotation.x=Math.PI/2,t.position.y=.75,e.add(t);let n=new U(new Xc(.28,1,4,8),cg(14479615));n.rotation.x=Math.PI/2,n.position.set(0,1.02,-.3),e.add(n);let r=new U(new Yr(.7,.12,2.6),new q({color:12576511,emissive:3377356}));return r.position.y=.3,e.add(r),e}var fg={1:lg,2:ug,3:dg};function pg(e,t,n){for(let r of t)for(let t of[-.42,.42]){let i=new U(new Zc(.16,.16,.1,8),cg(n));i.rotation.z=Math.PI/2,i.position.set(t,.16,r),e.add(i)}}var mg=class{constructor(e,t,n){this.mapKey=e,this.bundle=t,this.state=n,this.meshes={}}sync(){let e=this.state.trains;for(let t in this.meshes)(!e[t]||e[t].map!==this.mapKey)&&(this.bundle.trainGroup.remove(this.meshes[t]),this.meshes[t].traverse(e=>e.geometry?.dispose()),delete this.meshes[t]);for(let t in e){let n=e[t];if(n.map!==this.mapKey||this.meshes[t])continue;let r=fg[n.tier]();r.traverse(e=>{e.castShadow=!0}),r.userData={kind:`train`,id:t,map:this.mapKey,baseScale:Jh[this.mapKey].trainScale},r.traverse(e=>e.userData=r.userData),this.bundle.trainGroup.add(r),this.meshes[t]=r}}applyScale(e,t){let{camera:n,controls:r}=this.bundle,i=e.userData.baseScale*ag(this.mapKey,n,r.target);e.scale.setScalar(i)}update(){this.sync();let e=Jh[this.mapKey],t=this.state.maps[this.mapKey];for(let n in this.meshes){let r=this.state.trains[n],i=this.meshes[n];if(!r.path||r.state===`idle`){let n=t.nodes[r.route[0]];n?i.position.set(n.x+2,e.trackY+.06,n.z+2):i.position.set(0,e.trackY+.06,0),this.applyScale(i,i.position);continue}let a=t.nodes[r.path[r.seg]],o=t.nodes[r.path[r.seg+1]];if(!a||!o)continue;let s=Math.hypot(o.x-a.x,o.z-a.z)||1,c=Math.min(1,r.prog/s),l=a.x+(o.x-a.x)*c,u=a.z+(o.z-a.z)*c;i.position.set(l,e.trackY+.05,u),i.rotation.y=Math.atan2(o.x-a.x,o.z-a.z)+Math.PI,this.applyScale(i,i.position)}}},hg={github:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"/></svg>`,select:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224.15,179.17l-46.83-46.82,37.93-13.51.76-.3a20,20,0,0,0-1.76-37.27L54.16,29A20,20,0,0,0,29,54.16L81.27,214.24A20,20,0,0,0,118.54,216c.11-.25.21-.5.3-.76l13.51-37.92,46.83,46.82a20,20,0,0,0,28.28,0l16.69-16.68A20,20,0,0,0,224.15,179.17Zm-30.83,25.17-48.48-48.48A20,20,0,0,0,130.7,150a20.66,20.66,0,0,0-3.74.35A20,20,0,0,0,112.35,162c-.11.25-.21.5-.3.76L100.4,195.5,54.29,54.29l141.21,46.1-32.71,11.66c-.26.09-.51.19-.76.3a20,20,0,0,0-6.17,32.48h0l48.49,48.48Z"/></svg>`,pan:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M188,76a31.85,31.85,0,0,0-11.21,2,32,32,0,0,0-48.79-11A32,32,0,0,0,76,92v16H68a32,32,0,0,0-32,32v12a92,92,0,0,0,184,0V108A32,32,0,0,0,188,76Zm8,76a68,68,0,0,1-136,0V140a8,8,0,0,1,8-8h8v20a12,12,0,0,0,24,0V92a8,8,0,0,1,16,0v28a12,12,0,0,0,24,0V92a8,8,0,0,1,16,0v28a12,12,0,0,0,24,0V108a8,8,0,0,1,16,0Z"/></svg>`,station:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M24,108H44v48H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24H212V108h20a12,12,0,0,0,6.29-22.22l-104-64a12,12,0,0,0-12.58,0l-104,64A12,12,0,0,0,24,108Zm44,0H92v48H68Zm72,0v48H116V108Zm48,48H164V108h24ZM128,46.09,189.6,84H66.4ZM252,208a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H240A12,12,0,0,1,252,208Z"/></svg>`,bulldoze:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,204H141l86.84-86.84a28,28,0,0,0,0-39.6L186.43,36.19a28,28,0,0,0-39.6,0L28.19,154.82a28,28,0,0,0,0,39.6l30.06,30.07A12,12,0,0,0,66.74,228H216a12,12,0,0,0,0-24ZM163.8,53.16a4,4,0,0,1,5.66,0l41.38,41.38a4,4,0,0,1,0,5.65L160,151l-47-47ZM71.71,204,45.16,177.45a4,4,0,0,1,0-5.65L96,121l47,47-36,36Z"/></svg>`,tier1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M184,44H140V28h28a12,12,0,0,0,0-24H88a12,12,0,0,0,0,24h28V44H72A36,36,0,0,0,36,80V184a36,36,0,0,0,36,36l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220a36,36,0,0,0,36-36V80A36,36,0,0,0,184,44ZM72,68H184a12,12,0,0,1,12,12v36H60V80A12,12,0,0,1,72,68ZM184,196H72a12,12,0,0,1-12-12V140H196v44A12,12,0,0,1,184,196Zm-80-28a16,16,0,1,1-16-16A16,16,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16,16,0,0,1,184,168Z"/></svg>`,tier2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M184,20H72A36,36,0,0,0,36,56V184a36,36,0,0,0,36,36h0l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h0a36,36,0,0,0,36-36V56A36,36,0,0,0,184,20ZM72,44H184a12,12,0,0,1,12,12v60H60V56A12,12,0,0,1,72,44ZM184,196H72a12,12,0,0,1-12-12V140H196v44A12,12,0,0,1,184,196Zm-80-28a16,16,0,1,1-16-16A16,16,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16,16,0,0,1,184,168Z"/></svg>`,tier3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M156,228a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,228ZM128,116a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm99.53,40.7-12.36,55.63a19.9,19.9,0,0,1-12.88,14.53A20.16,20.16,0,0,1,195.6,228a19.87,19.87,0,0,1-12.29-4.27L157.17,204H98.83L72.69,223.74A19.87,19.87,0,0,1,60.4,228a20.16,20.16,0,0,1-6.69-1.15,19.9,19.9,0,0,1-12.88-14.53L28.47,156.7a20.1,20.1,0,0,1,4.16-17.14l27.83-33.4A127,127,0,0,1,69.11,69.7c13.27-33.25,37-54.1,46.64-61.52a20,20,0,0,1,24.5,0c9.6,7.42,33.37,28.27,46.64,61.52a127,127,0,0,1,8.65,36.46l27.83,33.4A20.1,20.1,0,0,1,227.53,156.7ZM101.79,180h52.42c19.51-35.7,23-69.78,10.39-101.4C154.4,53,136.2,35.9,128,29.12,119.8,35.9,101.6,53,91.4,78.6,78.78,110.22,82.28,144.3,101.79,180Zm-22.55,8.72a168,168,0,0,1-16.92-47.3l-10,12,10.58,47.64Zm124.43-35.31-10-12a168,168,0,0,1-16.92,47.3l16.33,12.33Z"/></svg>`,train:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M184,20H72A36,36,0,0,0,36,56V184a36,36,0,0,0,36,36h0l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h0a36,36,0,0,0,36-36V56A36,36,0,0,0,184,20ZM60,116V84h56v32Zm80-32h56v32H140ZM72,44H184a12,12,0,0,1,12,12v4H60V56A12,12,0,0,1,72,44ZM184,196H72a12,12,0,0,1-12-12V140H196v44A12,12,0,0,1,184,196Zm-80-28a16,16,0,1,1-16-16A16,16,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16,16,0,0,1,184,168Z"/></svg>`,map:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M231.38,46.54a12,12,0,0,0-10.29-2.18L161.4,59.28l-60-30a12,12,0,0,0-8.28-.91l-64,16A12,12,0,0,0,20,56V200a12,12,0,0,0,14.91,11.64L94.6,196.72l60,30a12,12,0,0,0,8.28.91l64-16A12,12,0,0,0,236,200V56A12,12,0,0,0,231.38,46.54ZM108,59.42l40,20V196.58l-40-20Zm-64,6,40-10V174.63l-40,10ZM212,190.63l-40,10V81.37l40-10Z"/></svg>`,pin:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"/></svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/></svg>`,route:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,164a36.07,36.07,0,0,0-33.94,24H72a28,28,0,0,1,0-56h96a44,44,0,0,0,0-88H72a12,12,0,0,0,0,24h96a20,20,0,0,1,0,40H72a52,52,0,0,0,0,104h94.06A36,36,0,1,0,200,164Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,200,212Z"/></svg>`,coins:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M188,86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87,40.12,119,36,96,36S51.13,40.12,34.51,47.6C14.83,56.45,4,69.38,4,84v40c0,14.62,10.83,27.55,30.51,36.4A131.67,131.67,0,0,0,68,169.88V172c0,14.62,10.83,27.55,30.51,36.4C115.13,215.88,137,220,160,220s44.87-4.12,61.49-11.6C241.17,199.55,252,186.62,252,172V132C252,109.86,226.71,92.08,188,86.11ZM228,132c0,7.75-21.77,22.48-61.81,23.88C180.33,147.4,188,136.3,188,124V110.44C213.88,115.15,228,125.48,228,132ZM107.37,147.63c-3.63.24-7.42.37-11.37.37-5.08,0-9.89-.22-14.43-.61a10.94,10.94,0,0,0-1.14-.09c-1.51-.14-3-.3-4.43-.48V130.93A187,187,0,0,0,96,132a187,187,0,0,0,20-1.07v15.89c-2.49.3-5.07.56-7.75.75C108,147.58,107.66,147.6,107.37,147.63ZM164,117.14V124c0,4.78-8.28,12.21-24,17.54v-15a115.32,115.32,0,0,0,17.49-6.13Q160.93,118.86,164,117.14ZM96,60c44,0,68,15.85,68,24s-24,24-68,24S28,92.15,28,84,52,60,96,60ZM28,124v-6.86q3.08,1.71,6.51,3.26A115.32,115.32,0,0,0,52,126.53v15C36.28,136.21,28,128.78,28,124Zm64,48v0c1.33,0,2.66,0,4,0q5.44,0,10.77-.32,4.45,1.57,9.23,2.86v15C100.28,184.21,92,176.78,92,172Zm48,22.82V178.94A186.45,186.45,0,0,0,160,180a187,187,0,0,0,20-1.07v15.89a170.08,170.08,0,0,1-40,0Zm64-5.28v-15a115.32,115.32,0,0,0,17.49-6.13q3.44-1.54,6.51-3.26V172C228,176.78,219.72,184.21,204,189.54Z"/></svg>`,restart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z"/></svg>`,info:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"/></svg>`,lightning:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M219.71,117.38a12,12,0,0,0-7.25-8.52L161.28,88.39l10.59-70.61a12,12,0,0,0-20.64-10l-112,120a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l112-120A12,12,0,0,0,219.71,117.38ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37,142.4,52.45l-6.27,41.77a12,12,0,0,0,7.41,12.92l43.72,17.49Z"/></svg>`,lock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"/></svg>`,passengers:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z"/></svg>`,medal:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M220,96A92,92,0,1,0,68,165.69V240a12,12,0,0,0,17.37,10.73L128,229.42l42.64,21.31A12,12,0,0,0,188,240V165.69A91.86,91.86,0,0,0,220,96ZM60,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,60,96ZM164,220.59l-30.64-15.32a12,12,0,0,0-10.74,0L92,220.58V180.66a92,92,0,0,0,72,0ZM128,148A52,52,0,1,0,76,96,52.06,52.06,0,0,0,128,148Zm0-80a28,28,0,1,1-28,28A28,28,0,0,1,128,68Z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"/></svg>`,share:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M176,156a43.78,43.78,0,0,0-29.09,11L106.1,140.8a44.07,44.07,0,0,0,0-25.6L146.91,89a43.83,43.83,0,1,0-13-20.17L93.09,95a44,44,0,1,0,0,65.94L133.9,187.2A44,44,0,1,0,176,156Zm0-120a20,20,0,1,1-20,20A20,20,0,0,1,176,36ZM64,148a20,20,0,1,1,20-20A20,20,0,0,1,64,148Zm112,72a20,20,0,1,1,20-20A20,20,0,0,1,176,220Z"/></svg>`,bug:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M140,88a16,16,0,1,1,16,16A16,16,0,0,1,140,88ZM100,72a16,16,0,1,0,16,16A16,16,0,0,0,100,72Zm120,72a91.84,91.84,0,0,1-2.34,20.64L236.81,173a12,12,0,0,1-9.62,22l-18-7.85a92,92,0,0,1-162.46,0l-18,7.85a12,12,0,1,1-9.62-22l19.15-8.36A91.84,91.84,0,0,1,36,144v-4H16a12,12,0,0,1,0-24H36v-4a91.84,91.84,0,0,1,2.34-20.64L19.19,83a12,12,0,0,1,9.62-22l18,7.85a92,92,0,0,1,162.46,0l18-7.85a12,12,0,1,1,9.62,22l-19.15,8.36A91.84,91.84,0,0,1,220,112v4h20a12,12,0,0,1,0,24H220ZM60,116H196v-4a68,68,0,0,0-136,0Zm56,94.92V140H60v4A68.1,68.1,0,0,0,116,210.92ZM196,144v-4H140v70.92A68.1,68.1,0,0,0,196,144Z"/></svg>`,trophy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M232,60H212V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V60H24A20,20,0,0,0,4,80V96a44.05,44.05,0,0,0,44,44h.77A84.18,84.18,0,0,0,116,195.15V212H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V195.11c30.94-4.51,56.53-26.2,67-55.11h1a44.05,44.05,0,0,0,44-44V80A20,20,0,0,0,232,60ZM28,96V84H44v28c0,1.21,0,2.41.09,3.61A20,20,0,0,1,28,96Zm160,15.1c0,33.33-26.71,60.65-59.54,60.9A60,60,0,0,1,68,112V60H188ZM228,96a20,20,0,0,1-16.12,19.62c.08-1.5.12-3,.12-4.52V84h16Z"/></svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"/></svg>`,sparkle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"/></svg>`,flame:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M176.69,48.72a225,225,0,0,0-42.52-35,12,12,0,0,0-12.34,0,225,225,0,0,0-42.52,35C51,78.47,36,111.42,36,144a92,92,0,0,0,184,0C220,111.42,205,78.47,176.69,48.72ZM100,184c0-13.33,5.53-26.26,16.45-38.45A93,93,0,0,1,128,134.72a93,93,0,0,1,11.55,10.83C150.47,157.74,156,170.67,156,184a28,28,0,0,1-56,0Zm79.84,3.94c.09-1.3.16-2.61.16-3.94,0-46.26-44-73.17-45.83-74.29a12,12,0,0,0-12.34,0C120,110.83,76,137.74,76,184c0,1.33.07,2.64.16,3.94A67.68,67.68,0,0,1,60,144c0-26.52,12.21-52.86,36.28-78.3A213.07,213.07,0,0,1,128,38.39C145.82,50.86,196,90.71,196,144A67.68,67.68,0,0,1,179.84,187.94Z"/></svg>`,history:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M140,80v41.21l34.17,20.5a12,12,0,1,1-12.34,20.58l-40-24A12,12,0,0,1,116,128V80a12,12,0,0,1,24,0ZM128,28A99.38,99.38,0,0,0,57.24,57.34c-4.69,4.74-9,9.37-13.24,14V64a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H72a12,12,0,0,0,0-24H57.77C63,86,68.37,80.22,74.26,74.26a76,76,0,1,1,1.58,109,12,12,0,0,0-16.48,17.46A100,100,0,1,0,128,28Z"/></svg>`};function $(e,t=``){return`<span class="icon ${t}" aria-hidden="true">${hg[e]??``}</span>`}var gg=`railEmpireSurvivalBest_v1`;function _g(){try{let e=localStorage.getItem(gg);if(e==null)return 0;let t=Number(e);return Number.isFinite(t)&&t>0?t:0}catch{return 0}}function vg(){let e=_g();return e>0?Wu(e):null}function yg(e){let t=Math.max(0,Math.floor(e)),n=_g(),r=t>n;if(r)try{localStorage.setItem(gg,String(t))}catch(e){console.warn(`best save failed`,e)}return{isNew:r,bestSec:r?t:n,previousSec:n,runSec:t}}var bg=`"Outfit Variable", "Segoe UI", sans-serif`,xg=1200,Sg=248,Cg=2,wg=`https://overlandgame.netlify.app/`;function Tg(e){return e===`nyc`?`New York City`:`USA National`}function Eg(){let e=new Yt;for(let t of fd){let[n,r]=sp(t);e.expandByPoint(new V(n,0,r))}for(let[t,n]of[[-124,49],[-124,48.5],[-117,32.5],[-81,25],[-70,43]]){let r=op(t,n);r&&e.expandByPoint(new V(r[0],0,r[1]))}return{minX:e.min.x-12,maxX:e.max.x+12,minZ:e.min.z-26,maxZ:e.max.z+12}}function Dg(e){return e===`nyc`?{minX:-95,maxX:95,minZ:-95,maxZ:95}:Eg()}function Og(e,t){return e>-105&&e<-72&&t>22&&t<48||e>-58&&e<-38&&t>36&&t<50}function kg(e,t){let n=[];return e.traverse(e=>{if(!e.isMesh||e.userData.isWater)return;let r=new Yt().setFromObject(e);if(r.isEmpty())return;let i=(r.min.x+r.max.x)/2,a=(r.min.z+r.max.z)/2;if(Og(i,a)){n.push([e,e.visible]),e.visible=!1;return}i>=t.minX&&i<=t.maxX&&a>=t.minZ&&a<=t.maxZ||(n.push([e,e.visible]),e.visible=!1)}),n}function Ag(e){for(let[t,n]of e)t.visible=n}function jg(e,t,n){let r=Object.values(e.nodes);return t===`nyc`?r:r.filter(e=>e.x>=n.minX&&e.x<=n.maxX&&e.z>=n.minZ&&e.z<=n.maxZ)}function Mg(e){let t=Dg(e),n=(t.maxX-t.minX)/(t.maxZ-t.minZ),r=Math.round(xg/n);return{bounds:t,mapW:xg,mapH:r,cardH:r+Sg,aspect:n}}function Ng(e,t,n){for(let r of Object.values(e.renderers[t].nodes.meshes))r.group.traverse(e=>{e instanceof Js&&(e.visible=n)})}function Pg(e,t,n,r,i){let a=new V(e,0,t);return a.project(n),{x:(a.x*.5+.5)*r,y:(1-(a.y*.5+.5))*i}}function Fg(e,t,n,r,i,a){let o=(a===`nyc`?13:11)*Cg,s=6*Cg,c=3*Cg;e.textAlign=`center`,e.textBaseline=`middle`;for(let a of t){let{x:t,y:l}=Pg(a.x,a.z,n,r,i);if(t<o||t>r-o||l<o||l>i-o)continue;let u=a.name;e.font=`600 ${o}px ${bg}`;let d=e.measureText(u).width+s*2,f=o+c*2,p=l>f*1.2,m=10*Cg,h=p?l-m:l+m;e.fillStyle=`rgba(20, 26, 36, 0.84)`,e.beginPath(),e.roundRect(t-d/2,h-f/2,d,f,f/2),e.fill(),e.fillStyle=a.station?`#ffffff`:a.unlocked?`#d8e0ea`:`#aab4c2`,e.fillText(u,t,h)}}function Ig(e,t,n){e.position.set(t,500,n),e.up.set(0,0,-1),e.lookAt(t,0,n)}function Lg(e,t){let n=(t.minX+t.maxX)/2,r=(t.minZ+t.maxZ)/2,i=(t.maxX-t.minX)/2,a=(t.maxZ-t.minZ)/2;e.left=n-i,e.right=n+i,e.top=r+a,e.bottom=r-a,Ig(e,n,r),e.updateProjectionMatrix()}function Rg(e,t,n,r){let i=new Uint8Array(n*r*4);e.readRenderTargetPixels(t,0,0,n,r,i);let a=document.createElement(`canvas`);a.width=n,a.height=r;let o=a.getContext(`2d`),s=o.createImageData(n,r);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let a=((r-1-e)*n+t)*4,o=(e*n+t)*4;s.data[o]=i[a],s.data[o+1]=i[a+1],s.data[o+2]=i[a+2],s.data[o+3]=i[a+3]}return o.putImageData(s,0,0),a}function zg(e,t=e.state.currentMap){let n=Mg(t),r=e.bundles[t],i=e.state.maps[t],a=e.renderer,o=n.mapW*Cg,s=n.mapH*Cg,c=new Pi(-1,1,1,-1,.5,2e3),l=r.previewGroup.visible;r.previewGroup.visible=!1;let u=r.scene,d=u.fog;u.fog=null;let f=t===`usa`?kg(u,n.bounds):[];Lg(c,n.bounds),Ng(e,t,!1),e.renderers[t].trains.update(),e.renderers[t].nodes.update();let p=new Ut(o,s),m=a.getRenderTarget();a.setRenderTarget(p),a.render(u,c),a.setRenderTarget(m);let h=Rg(a,p,o,s);return p.dispose(),Fg(h.getContext(`2d`),jg(i,t,n.bounds),c,o,s,t),u.fog=d,r.previewGroup.visible=l,Ng(e,t,!0),Ag(f),{dataUrl:h.toDataURL(`image/png`),layout:n}}function Bg(e){let t=e.survival?e.survivalTime:e.simTime;return{headline:e.officialRun?e.headline:`Unofficial run`,modeName:e.modeName,mapName:Tg(e.mapKey),official:e.officialRun,timeLabel:e.survival?`Survived`:`Time elapsed`,time:Wu(t),trains:Y(e.trainCount),passengers:Y(e.totalDelivered),cash:J(e.cash),earned:J(e.totalRevenue),survival:e.survival}}function Vg(e,{headline:t=null,elapsedSec:n=null}={}){let r=e.state,i=zu(r),a=Ru(r),o=r.currentMap,s=n??(i&&r.gameOver&&r.survivalTime||Xm(r)),c=Ep(r);return{headline:c?t??(i?`Survival run`:`Tycoon run`):`Unofficial run`,modeName:a.name,mapName:Tg(o),official:c,timeLabel:i?`Survived`:`Time elapsed`,time:Wu(s),trains:Y(Object.keys(r.trains).length),passengers:Y(r.totalDelivered),cash:J(r.cash),earned:J(r.totalRevenue),survival:i}}function Hg(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}async function Ug(e){let t=xg,n=Math.round(xg*.35),r={mapW:t,mapH:n,cardH:668},i=document.createElement(`canvas`);i.width=t,i.height=668;let a=i.getContext(`2d`),o=a.createLinearGradient(0,0,t,n);o.addColorStop(0,`#1a2433`),o.addColorStop(1,`#10151d`),a.fillStyle=o,a.fillRect(0,0,t,n),a.fillStyle=`rgba(42, 109, 181, 0.15)`,a.font=`700 ${48*Cg/2}px ${bg}`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`Overland`,t/2,n/2-20),a.fillStyle=`#6b7788`,a.font=`600 ${22*Cg/2}px ${bg}`,a.fillText(e.mapName,t/2,238);let s=n;a.fillStyle=`#1a212c`,a.fillRect(0,s,t,668-s),a.fillStyle=`#2a6db5`,a.fillRect(0,s,t,4),a.textBaseline=`top`,a.textAlign=`left`,a.fillStyle=`#edf1f6`,a.font=`700 34px ${bg}`,a.fillText(`Overland`,36,444),a.fillStyle=`#97a3b4`,a.font=`600 22px ${bg}`;let c=e.official?`${e.headline} · ${e.modeName}`:`${e.headline} · ${e.modeName} · edited stats`;a.fillText(c,36,488),a.fillStyle=`#6b7788`,a.font=`500 18px ${bg}`,a.fillText(e.mapName,36,518);let l=[{label:e.timeLabel,value:e.time},{label:`Trains`,value:e.trains},{label:`Passengers`,value:e.passengers},{label:`Cash`,value:e.cash},{label:`Total earned`,value:e.earned}],u=(t-72)/l.length;return l.forEach((e,t)=>{let n=36+t*u;a.fillStyle=`#6b7788`,a.font=`600 14px ${bg}`,a.fillText(e.label.toUpperCase(),n,558),a.fillStyle=`#edf1f6`,a.font=`700 26px ${bg}`,a.fillText(e.value,n,580)}),a.fillStyle=`#6b7788`,a.font=`500 16px ${bg}`,a.textAlign=`right`,a.fillText(wg.replace(`https://`,``),t-36,640),a.textAlign=`left`,{canvas:i,layout:r}}async function Wg(e,t,n){let{mapW:r,mapH:i,cardH:a}=n,o=document.createElement(`canvas`);o.width=r,o.height=a;let s=o.getContext(`2d`);s.fillStyle=`#10151d`,s.fillRect(0,0,r,a);let c=await Hg(e);s.drawImage(c,0,0,r,i);let l=i,u=s.createLinearGradient(0,l-40,0,l+40);u.addColorStop(0,`rgba(16, 21, 29, 0)`),u.addColorStop(1,`rgba(16, 21, 29, 0.95)`),s.fillStyle=u,s.fillRect(0,l-40,r,40),s.fillStyle=`#1a212c`,s.fillRect(0,l,r,a-l),s.fillStyle=`#2a6db5`,s.fillRect(0,l,r,4),s.textBaseline=`top`,s.fillStyle=`#edf1f6`,s.font=`700 34px ${bg}`,s.fillText(`Overland`,36,l+24),s.fillStyle=`#97a3b4`,s.font=`600 22px ${bg}`;let d=t.official?`${t.headline} · ${t.modeName}`:`${t.headline} · ${t.modeName} · edited stats`;s.fillText(d,36,l+68),s.fillStyle=`#6b7788`,s.font=`500 18px ${bg}`,s.fillText(t.mapName,36,l+98);let f=l+138,p=[{label:t.timeLabel,value:t.time},{label:`Trains`,value:t.trains},{label:`Passengers`,value:t.passengers},{label:`Cash`,value:t.cash},{label:`Total earned`,value:t.earned}],m=(r-72)/p.length;return p.forEach((e,t)=>{let n=36+t*m;s.fillStyle=`#6b7788`,s.font=`600 14px ${bg}`,s.fillText(e.label.toUpperCase(),n,f),s.fillStyle=`#edf1f6`,s.font=`700 26px ${bg}`,s.fillText(e.value,n,f+22)}),s.fillStyle=`#6b7788`,s.font=`500 16px ${bg}`,s.textAlign=`right`,s.fillText(wg.replace(`https://`,``),r-36,a-28),s.textAlign=`left`,o}function Gg(e){return[`${e.headline} · ${e.modeName}`,`${e.timeLabel} ${e.time}`,`${e.trains} trains · ${e.passengers} passengers`,`${e.cash} cash · ${e.earned} earned`,`Built in Overland — ${wg}`].join(`
`)}async function Kg(e){return new Promise(t=>e.toBlob(t,`image/png`))}async function qg(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}async function Jg(e,t){let n=new File([e],`overland-run.png`,{type:`image/png`}),r=Gg(t);if(navigator.share){let e={title:`Overland`,text:r,url:wg};navigator.canShare?.({files:[n]})&&(e.files=[n]);try{return await navigator.share(e),`shared`}catch(e){if(e?.name===`AbortError`)return`cancelled`}}return await qg(e,`3dtrainsim-run.png`),`downloaded`}function Yg(e,t=!1){return`<button class="btn ${t?`primary`:``}" type="button" data-share-act="${e.toLowerCase().replace(/\s+/g,`-`)}">${e}</button>`}async function Xg(e,t){if(document.getElementById(`share-modal-backdrop`))return;let n=document.createElement(`div`);n.className=`modal-backdrop`,n.id=`share-modal-backdrop`,n.innerHTML=`
    <div class="modal share-modal">
      <h2>${$(`share`)} Share your run</h2>
      <div class="sub">Past run from <b>${Tg(t.mapKey)}</b> · ${t.outcomeLabel}</div>
      <div class="share-preview-wrap">
        <div class="share-loading">Building share card…</div>
      </div>
      <div class="modal-footer share-footer" hidden>
        ${Yg(`Share image`,!0)}
        ${Yg(`Download PNG`)}
        ${Yg(`Copy stats`)}
        <button class="btn quiet" type="button" data-share-act="close">Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(n);let r=n.querySelector(`.share-preview-wrap`),i=n.querySelector(`.share-footer`),a=()=>n.remove();n.addEventListener(`click`,e=>{e.target===n&&a()}),n.querySelector(`[data-share-act="close"]`)?.addEventListener(`click`,a);let o=null,s=null;try{s=Bg(t),o=(await Ug(s)).canvas,r.innerHTML=`<img class="share-preview" alt="Share preview" src="${o.toDataURL(`image/png`)}" />`,i.hidden=!1}catch(e){r.innerHTML=`<div class="share-loading share-error">Could not build share card. Try again.</div>`,console.warn(`share card from record failed`,e);return}n.querySelector(`[data-share-act="share-image"]`)?.addEventListener(`click`,async()=>{let t=await Jg(await Kg(o),s);t===`shared`?e.hud.toast(`Shared!`,`good`):t===`downloaded`&&e.hud.toast(`Image downloaded`,`good`)}),n.querySelector(`[data-share-act="download-png"]`)?.addEventListener(`click`,async()=>{await qg(await Kg(o),`overland-run.png`),e.hud.toast(`Image downloaded`,`good`)}),n.querySelector(`[data-share-act="copy-stats"]`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(Gg(s)),e.hud.toast(`Stats copied`,`good`)}catch{e.hud.toast(`Could not copy stats`,`bad`)}})}async function Zg(e,t={}){if(document.getElementById(`share-modal-backdrop`))return;let n=document.createElement(`div`);n.className=`modal-backdrop`,n.id=`share-modal-backdrop`,n.innerHTML=`
    <div class="modal share-modal">
      <h2>${$(`share`)} Share your run</h2>
      <div class="sub">Generating a full <b>${Tg(e.state.currentMap)}</b> map snapshot with your run stats.</div>
      <div class="share-preview-wrap">
        <div class="share-loading">Building share card…</div>
      </div>
      <div class="modal-footer share-footer" hidden>
        ${Yg(`Share image`,!0)}
        ${Yg(`Download PNG`)}
        ${Yg(`Copy stats`)}
        <button class="btn quiet" type="button" data-share-act="close">Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(n);let r=n.querySelector(`.share-preview-wrap`),i=n.querySelector(`.share-footer`),a=()=>n.remove();n.addEventListener(`click`,e=>{e.target===n&&a()}),n.querySelector(`[data-share-act="close"]`)?.addEventListener(`click`,a);let o=null,s=null;try{let n=e.state.currentMap,{dataUrl:a,layout:c}=zg(e,n);s=Vg(e,t),o=await Wg(a,s,c),r.innerHTML=`<img class="share-preview" alt="Share preview" src="${o.toDataURL(`image/png`)}" />`,i.hidden=!1}catch(e){r.innerHTML=`<div class="share-loading share-error">Could not build share card. Try again.</div>`,console.warn(`share card failed`,e);return}n.querySelector(`[data-share-act="share-image"]`)?.addEventListener(`click`,async()=>{let t=await Jg(await Kg(o),s);t===`shared`?e.hud.toast(`Shared!`,`good`):t===`downloaded`&&e.hud.toast(`Image downloaded`,`good`)}),n.querySelector(`[data-share-act="download-png"]`)?.addEventListener(`click`,async()=>{await qg(await Kg(o),`overland-run.png`),e.hud.toast(`Image downloaded`,`good`)}),n.querySelector(`[data-share-act="copy-stats"]`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(Gg(s)),e.hud.toast(`Stats copied`,`good`)}catch{e.hud.toast(`Could not copy stats`,`bad`)}})}function Qg(e=!1){return`<button class="btn ${e?`primary`:``}" type="button" data-share>${$(`share`)} Share run</button>`}function $g(e,t,n={}){e.querySelector(`[data-share]`)?.addEventListener(`click`,()=>Zg(t,n))}var e_=`overland.runHistory_v1`,t_=20;function n_(){try{let e=localStorage.getItem(e_);return e?JSON.parse(e):[]}catch{return[]}}function r_(e){try{localStorage.setItem(e_,JSON.stringify(e.slice(0,t_)))}catch(e){console.warn(`run history save failed`,e)}}function i_(e,{victoryGoal:t=null}={}){return t?{outcome:`victory`,outcomeLabel:t}:e.collapseReason===`network`?{outcome:`network`,outcomeLabel:`Network collapsed`}:e.collapseReason===`surge`?{outcome:`surge`,outcomeLabel:`Surge collapse`}:e.gameOver?{outcome:`bankrupt`,outcomeLabel:`Bankrupt`}:{outcome:`ended`,outcomeLabel:`Run ended`}}function a_(e,t={}){let n=zu(e),r=Ru(e),{outcome:i,outcomeLabel:a}=i_(e,t),o=n&&e.gameOver&&e.survivalTime||Xm(e);return{id:null,recordedAt:new Date().toISOString(),gameMode:e.gameMode,modeName:r.name,mapKey:e.currentMap,outcome:i,outcomeLabel:t.victoryGoal||a,headline:t.victoryGoal||(i===`bankrupt`?`Bankrupt`:a),survival:n,survivalTime:n?o:0,simTime:Xm(e),totalDelivered:e.totalDelivered,totalRevenue:e.totalRevenue,cash:e.cash,trainCount:Object.keys(e.trains||{}).length,lostRatePeak:lh(e),collapseReason:e.collapseReason,officialRun:Ep(e),leaderboardSubmitted:!1,victoryGoal:t.victoryGoal||null}}function o_(e,t={}){let n=t.victoryGoal?`victoryRecordId`:`endedRunId`,r=n_();if(e[n]&&r.some(t=>t.id===e[n]))return r.find(t=>t.id===e[n]);let i=a_(e,t);return e[n]?i.id=e[n]:(i.id=`run_${Date.now()}_${Math.round(e.simTime)}_${e.totalDelivered}`,e[n]=i.id),r.unshift(i),r_(r),i}function s_(e){let t=n_(),n=t.findIndex(t=>t.id===e);n<0||(t[n].leaderboardSubmitted=!0,r_(t))}function c_(e){return e.survival&&e.officialRun&&e.survivalTime>0&&(e.outcome===`network`||e.outcome===`surge`)&&!e.leaderboardSubmitted}function l_(e,t,n){if(n.has(e.id))return`<span class="goal-status done">${$(`check`)} Unlocked</span>`;if(_m(e,t)!=null){let n=e.progress(t),r;return r=e.progressUnit===`time`?`${vm(n.current)} / ${vm(n.target)}`:n.target>=1e3?`${Y(Math.min(n.current,n.target))} / ${Y(n.target)}`:`${Math.min(n.current,n.target)} / ${n.target}`,`<span class="goal-status">${r}</span>`}return`<span class="goal-status">In progress</span>`}function u_(e){Ru(e.state).goals?d_(e):f_(e)}function d_(e){let t=e.state,{done:n,total:r}=rm(t),i=new Set(t.completedGoals),a=Xp.map(e=>{let n=i.has(e.id),r=n?1:nm(e,t),a=r==null?``:`<div class="goal-bar"><div class="goal-bar-fill" style="width:${Math.round(r*100)}%"></div></div>`,o=n?`<span class="goal-status done">${$(`check`)} Complete</span>`:`<span class="goal-status">${tm(e,t)}</span>`;return`
      <div class="goal-row ${n?`complete`:``} ${e.win?`win`:``}">
        <div class="goal-head">
          <span class="goal-title">${e.title}${e.win?$(`star`,`goal-star`):``}</span>
          ${o}
        </div>
        <div class="goal-desc">${e.desc}</div>
        ${n?``:a}
      </div>
    `}).join(``),o=document.createElement(`div`);o.className=`modal-backdrop`,o.innerHTML=`
    <div class="modal goals-modal">
      <h2>${$(`medal`)} Milestones</h2>
      <div class="sub">${Y(n)} of ${Y(r)} complete · keep expanding to hit a win condition</div>
      <div class="goals-list">${a}</div>
      <div class="modal-footer">
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(o);let s=()=>o.remove();o.addEventListener(`click`,e=>{e.target===o&&s()}),o.querySelector(`[data-close]`).addEventListener(`click`,s)}function f_(e){let t=e.state,{done:n,total:r}=hm(),i=fm(),a=vg(),o=[`Duration`,`Skill`,`Network`,`Expert`,`Capstone`].map(e=>`<div class="goal-category"><div class="goal-category-label">${e}</div>${am.filter(t=>t.category===e).map(e=>{let n=i.has(e.id),r=n?1:_m(e,t),a=r!=null&&!n?`<div class="goal-bar"><div class="goal-bar-fill" style="width:${Math.round(r*100)}%"></div></div>`:``;return`
        <div class="goal-row ${n?`complete`:``} ${e.capstone?`win`:``}">
          <div class="goal-head">
            <span class="goal-title">${e.title}${e.capstone?$(`star`,`goal-star`):``}</span>
            ${l_(e,t,i)}
          </div>
          <div class="goal-desc">${e.desc}</div>
          ${n?``:a}
        </div>
      `}).join(``)}</div>`).join(``),s=document.createElement(`div`);s.className=`modal-backdrop`,s.innerHTML=`
    <div class="modal goals-modal">
      <h2>${$(`medal`)} Survival badges</h2>
      <div class="sub">${Y(n)} of ${Y(r)} badges unlocked${a?` · Personal best <b>${a}</b>`:``}</div>
      <div class="goals-list">${o}</div>
      <div class="modal-footer">
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(s);let c=()=>s.remove();s.addEventListener(`click`,e=>{e.target===s&&c()}),s.querySelector(`[data-close]`).addEventListener(`click`,c)}function p_(e,t){let n=e.state;o_(n,{victoryGoal:t.title}),Lp(n);let r=document.createElement(`div`);r.className=`modal-backdrop`,r.innerHTML=`
    <div class="modal" style="text-align:center; width:min(30rem,92vw);">
      <h2 style="justify-content:center;">${$(`medal`)} Victory</h2>
      <div class="sub" style="margin:0.5rem 0 0.2rem; font-size:1rem; color:var(--ink);">
        <b>${t.title}</b>
      </div>
      <div class="sub" style="margin:0.2rem 0 1.1rem;">
        ${t.desc}. You delivered ${Y(n.totalDelivered)} passengers — the sandbox stays open if you want to keep building.
      </div>
      <div class="modal-footer" style="justify-content:center; flex-wrap:wrap;">
        ${Qg()}
        <button class="btn primary" data-close>Keep playing</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(r),$g(r,e,{headline:t.title}),r.querySelector(`[data-close]`).addEventListener(`click`,()=>r.remove())}function m_(e){if(!Ru(e).goals)return h_(e);let t=em(e);if(!t)return null;let n=tm(t,e);return t.progress?`${t.title} (${n})`:t.title}function h_(e){let t=gm(e);return t?ym(t,e):null}function g_(e){Ru(e).goals?Qp(e):mm(e)}var __=`modulepreload`,v_=function(e){return`/`+e},y_={},b_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=v_(t,n),t=s(t),t in y_)return;y_[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:__,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x_=class{constructor(e){this.game=e,this.root=document.getElementById(`hud`),this.topHud=document.createElement(`div`),this.topHud.className=`top-hud`,this.root.appendChild(this.topHud),this.buildTopbar(),this.buildGoalsStrip(),this.buildToolbar(),this.buildHintbar(),this.buildToasts(),this.buildFleet(),Pm(`toast`,e=>this.toast(e.msg,e.kind,e.key,e.action)),setInterval(()=>this.refresh(),250),this.syncModeUi()}syncModeUi(){let e=zu(this.game.state),t=this.root.querySelector(`.topbar`);t&&(t.dataset.mode=e?`survival`:`tycoon`),this.goalsStrip&&(this.goalsStrip.style.display=``);let n=document.getElementById(`hud-goals`);n&&(n.hidden=!1,n.title=e?`Survival badges`:`Milestones`);let r=document.getElementById(`hud-elapsed-stat`),i=document.getElementById(`hud-elapsed-label`),a=document.getElementById(`hud-lost-stat`);r&&i&&(r.hidden=!1,r.style.display=``,r.classList.toggle(`stat-survival`,e),i.textContent=e?`Survived`:`Time elapsed`,r.title=e?`Elapsed survival time`:`Elapsed sim time`);let o=document.getElementById(`hud-strikes-stat`);a&&(a.hidden=!e,a.style.display=e?``:`none`),o&&(o.hidden=!e,o.style.display=e?``:`none`),this.refreshGoals(),this.renderToolbar()}buildTopbar(){let e=document.createElement(`div`);e.className=`topbar`,e.innerHTML=`
      <div class="topbar-stats">
        <div class="stat" title="Cash"><div class="v cash" id="hud-cash"></div><div class="k">Cash</div></div>
        <div class="stat" id="hud-bond-pill" title="Active Transit Bond Tax" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: 4px; padding: 0.1rem 0.5rem; text-align: center; min-width: 5.5rem;">
          <div class="v" id="hud-bond-tax-val" style="color: #ef4444; font-size: 0.95rem; font-weight: bold; font-family: monospace;">-20%</div>
          <div class="k" id="hud-bond-time-val" style="font-size: 0.65rem; color: #fca5a5; font-family: monospace;">10:00</div>
        </div>
        <div class="stat" title="Income per minute"><div class="v" id="hud-income"></div><div class="k">Income / min</div></div>
        <div class="stat" title="Passengers delivered"><div class="v" id="hud-pax"></div><div class="k">Passengers</div></div>
        <div class="stat" id="hud-elapsed-stat" title="Elapsed time">
          <div class="v" id="hud-elapsed"></div><div class="k" id="hud-elapsed-label">Time elapsed</div>
        </div>
        <div class="stat stat-lost" id="hud-lost-stat" title="Riders lost per minute" hidden>
          <div class="v" id="hud-lost"></div>
          <div class="k" id="hud-lost-label">Lost</div>
          <div class="pressure-meter" id="hud-pressure-meter" aria-hidden="true"><div id="hud-pressure-fill"></div></div>
        </div>
        <div class="stat stat-strikes" id="hud-strikes-stat" title="Abandoned demand surges (5 max before collapse)" hidden>
          <div class="v" id="hud-strikes">0 / 5</div><div class="k" id="hud-strikes-label">Strikes</div>
        </div>
        <div class="stat" title="Trains owned"><div class="v" id="hud-trains"></div><div class="k">Trains</div></div>
      </div>
      <div class="topbar-actions">
        <div class="speed-group">
          <button class="btn small" data-speed="0" title="Pause (Space)">${$(`pause`)}</button>
          <button class="btn small" data-speed="1" title="Normal speed">1×</button>
          <button class="btn small" data-speed="2" title="Double speed">2×</button>
          <button class="btn small" data-speed="4" title="Quadruple speed">4×</button>
        </div>
        <div class="fare-group" title="Ticket fares for this map (higher fares reduce ridership)">
          <button class="btn small" data-fare="-0.1">−</button>
          <div class="v" id="hud-fare">1.0×</div>
          <button class="btn small" data-fare="0.1">+</button>
        </div>
        <button class="btn quiet small" id="hud-overview" title="Network overview (O)">${$(`passengers`)}</button>
        <button class="btn quiet small" id="hud-share" title="Share your run">${$(`share`)}</button>
        <button class="btn quiet small" id="hud-goals" title="Milestones">${$(`medal`)}</button>
        <button class="btn quiet small" id="hud-help" title="How to play">${$(`info`)}</button>
        <button class="btn quiet small" id="hud-leaderboard" title="Global Survival Leaderboard">${$(`trophy`)}</button>
        <button class="btn quiet small" id="hud-history" title="Past runs">${$(`history`)}</button>
        <button class="btn quiet small danger" id="hud-newgame" title="Start over">${$(`restart`)}</button>
      </div>
    `,this.topHud.appendChild(e),e.querySelectorAll(`[data-speed]`).forEach(e=>e.addEventListener(`click`,()=>{this.game.state.speed=+e.dataset.speed})),e.querySelectorAll(`[data-fare]`).forEach(e=>e.addEventListener(`click`,()=>{let t=this.game.state.maps[this.game.state.currentMap];t.fareMult=Math.max(Gu.minMult,Math.min(Gu.maxMult,+(t.fareMult+Number(e.dataset.fare)).toFixed(1))),this.refresh()})),e.querySelector(`#hud-overview`).addEventListener(`click`,()=>this.game.openOverview()),e.querySelector(`#hud-share`).addEventListener(`click`,()=>this.game.openShare()),e.querySelector(`#hud-goals`).addEventListener(`click`,()=>this.game.openGoals()),e.querySelector(`#hud-leaderboard`).addEventListener(`click`,()=>this.game.openLeaderboard()),e.querySelector(`#hud-history`).addEventListener(`click`,()=>this.game.openRunHistory()),e.querySelector(`#hud-help`).addEventListener(`click`,()=>this.game.openIntro()),e.querySelector(`#hud-newgame`).addEventListener(`click`,()=>{confirm(`Start a new game? Current progress will be erased.`)&&this.game.newGame()})}buildGoalsStrip(){this.goalsStrip=document.createElement(`div`),this.goalsStrip.className=`goals-strip`,this.goalsStrip.addEventListener(`click`,()=>this.game.openGoals()),this.topHud.appendChild(this.goalsStrip),this.refreshGoals()}refreshGoals(){if(!this.goalsStrip)return;let e=this.game.state;if(zu(e)){let{done:t,total:n}=hm(),r=vg(),i=h_(e),a=r?`<span class="goals-best">Best ${r}</span>`:``;if(!i){this.goalsStrip.innerHTML=`${$(`medal`)}<span>All badges unlocked</span>${a}<span class="goals-count">${t}/${n}</span>`,this.goalsStrip.classList.add(`done`);return}this.goalsStrip.classList.remove(`done`),this.goalsStrip.innerHTML=`${$(`medal`)}<span><b>Next:</b> ${i}</span>${a}<span class="goals-count">${t}/${n}</span>`;return}let{done:t,total:n}=rm(e),r=m_(e);if(!r){this.goalsStrip.innerHTML=`${$(`medal`)}<span>All milestones complete</span>`,this.goalsStrip.classList.add(`done`);return}this.goalsStrip.classList.remove(`done`),this.goalsStrip.innerHTML=`${$(`medal`)}<span><b>Next:</b> ${r}</span><span class="goals-count">${t}/${n}</span>`}buildToolbar(){let e=document.createElement(`div`);e.className=`toolbar`,this.toolbar=e,this.root.appendChild(e),this.renderToolbar()}renderToolbar(){let e=this.game.state.currentMap,t=e=>ku[e],n=e=>`#${e.toString(16).padStart(6,`0`)}`,r=id(this.game.state),i=n=>J(Math.round(t(n).costPerUnit[e]*r)),a=zu(this.game.state)?`
      <div class="section">Loans</div>
      <button class="btn tool" id="tool-bond" title="Issue a transit bond or payback early">
        ${$(`coins`)}
        <span class="tool-label" id="tool-bond-label">Issue Bond</span>
        <span class="price" id="tool-bond-price"></span>
      </button>
    `:``;this.toolbar.innerHTML=`
      <div class="section">Tools</div>
      <button class="btn tool" data-mode="pan" title="Drag to move the map">${$(`pan`)}<span class="tool-label"> Move</span> <span class="key">0</span></button>
      <button class="btn tool" data-mode="select" title="Inspect stops, track and trains">${$(`select`)}<span class="tool-label"> Select</span> <span class="key">1</span></button>
      <button class="btn tool" data-mode="station" title="Build a station at a stop">${$(`station`)}<span class="tool-label"> Station</span> <span class="key">2</span></button>
      <div class="section">Track</div>
      <button class="btn tool" data-mode="track1" title="Tier I trains only"><span class="swatch" style="background:${n(t(1).color)}"></span><span class="tool-label"> Standard</span> <span class="price" id="price-track1">${i(1)}/u</span><span class="key">3</span></button>
      <button class="btn tool" data-mode="track2" title="Tier I and II trains"><span class="swatch" style="background:${n(t(2).color)}"></span><span class="tool-label"> High-Speed</span> <span class="price" id="price-track2">${i(2)}/u</span><span class="key">4</span></button>
      <button class="btn tool" data-mode="track3" title="Tier III maglev only"><span class="swatch" style="background:${n(t(3).color)}"></span><span class="tool-label"> Maglev</span> <span class="price" id="price-track3">${i(3)}/u</span><span class="key">5</span></button>
      <div class="section">Manage</div>
      <button class="btn tool" data-mode="bulldoze" title="Demolish track for a 25% refund">${$(`bulldoze`)}<span class="tool-label"> Bulldoze</span> <span class="key">6</span></button>
      <button class="btn tool" id="tool-shop" title="Buy a new train">${$(`train`)}<span class="tool-label"> Buy train</span> <span class="key">B</span></button>
      ${a}
    `,this.toolbar.querySelectorAll(`[data-mode]`).forEach(e=>e.addEventListener(`click`,()=>this.game.setMode(e.dataset.mode))),this.toolbar.querySelector(`#tool-shop`).addEventListener(`click`,()=>this.game.openShop());let o=this.toolbar.querySelector(`#tool-bond`);o&&o.addEventListener(`click`,()=>{this.game.state.activeBond?this.game.paybackBondEarly():b_(()=>import(`./bondModal-CEXqPJIX.js`).then(e=>e.openBondModal(this.game)),[])}),this.syncToolbar()}syncToolbar(){this.toolbar.querySelectorAll(`[data-mode]`).forEach(e=>e.classList.toggle(`active`,e.dataset.mode===this.game.mode))}buildHintbar(){this.hintbar=document.createElement(`div`),this.hintbar.className=`hintbar`,this.root.appendChild(this.hintbar)}setHint(e){this.hintbar.innerHTML=e;let t=!!e;this.hintbar.style.display=t?`flex`:`none`,this.hintbar.classList.toggle(`visible`,t)}buildToasts(){this.toasts=document.createElement(`div`),this.toasts.className=`toasts`,this.root.appendChild(this.toasts)}toast(e,t=``,n=``,r=null){if(n){for(let e of this.toasts.children)if(e.dataset.toastKey===n)return}let i=document.createElement(`div`);if(i.className=`toast ${t}`,n&&(i.dataset.toastKey=n),i.innerHTML=`${$(t===`good`?`check`:t===`bad`?`close`:`info`)}<div class="toast-content"></div>`,i.querySelector(`.toast-content`).textContent=e,r){let e=document.createElement(`button`);e.className=`btn small primary toast-action`,e.textContent=r.label||`View`,e.addEventListener(`click`,e=>{e.stopPropagation(),r.onClick?.(),i.remove()}),i.appendChild(e)}this.toasts.appendChild(i),setTimeout(()=>i.remove(),4500);let a=Sh()?2:3;for(;this.toasts.children.length>a;)this.toasts.firstChild.remove()}buildFleet(){this.fleet=document.createElement(`div`),this.fleet.className=`fleet`,this.root.appendChild(this.fleet)}refresh(){let e=this.game.state,t=document.getElementById(`hud-cash`);if(!t)return;t.textContent=J(e.cash),t.classList.toggle(`neg`,e.cash<0),document.getElementById(`hud-income`).textContent=J(sh(e));let n=document.getElementById(`hud-bond-pill`),r=document.getElementById(`hud-bond-tax-val`),i=document.getElementById(`hud-bond-time-val`);n&&r&&i&&(e.activeBond?(n.style.display=``,r.textContent=`Tax: -${Math.round(e.activeBond.taxRate*100)}%`,i.textContent=Wu(Math.max(0,Math.ceil(e.activeBond.timeRemaining))),n.title=`Active Transit Bond Tax. Remaining payback principal: ${J(e.activeBond.principal)}`):n.style.display=`none`),document.getElementById(`hud-pax`).textContent=Y(e.totalDelivered);let a=document.getElementById(`hud-elapsed`);a&&(a.textContent=Wu(Xm(e)));let o=id(e),s=e.currentMap;for(let e=1;e<=3;e++){let t=document.getElementById(`price-track${e}`);t&&(t.textContent=`${J(Math.round(ku[e].costPerUnit[s]*o))}/u`)}let c=zu(e),l=this.root.querySelector(`.topbar`);l&&(l.dataset.mode=c?`survival`:`tycoon`);let u=document.getElementById(`hud-lost-stat`),d=document.getElementById(`hud-lost`),f=document.getElementById(`hud-lost-label`),p=document.getElementById(`hud-pressure-meter`),m=document.getElementById(`hud-pressure-fill`),h=document.getElementById(`hud-strikes-stat`),g=document.getElementById(`hud-strikes`);if(!c)u&&(u.hidden=!0,u.style.display=`none`,u.classList.remove(`warn`,`critical`)),p&&(p.style.display=`none`),h&&(h.hidden=!0,h.style.display=`none`,h.classList.remove(`warn`,`critical`));else{if(u&&d&&f){u.hidden=!1,u.style.display=``;let t=lh(e),n=fh(e),r=Vu(e),i=r.rateThresholdPerMin,a=Math.max(0,r.collapseGraceSec-e.breachTimer);f.textContent=n>0?`Strike in ${Wu(a)}`:`Lost / min`,d.textContent=Y(t),u.title=n>0?`Riders lost per sim-minute (threshold ${i}). Permanent strike in ${Wu(a)} if pressure continues.`:`Riders lost per sim-minute (threshold ${i})`,u.classList.toggle(`warn`,t>=i*.5),u.classList.toggle(`critical`,n>=.5),p&&m&&(p.style.display=n>0?`block`:`none`,m.style.width=`${Math.round(n*100)}%`)}if(h&&g){h.hidden=!1,h.style.display=``;let t=e.surgeState?.abandonedCount||0;g.textContent=`${t} / 5`,h.title=`Permanent strikes: ${t} of 5 before collapse. Demand surge strikes can be redeemed; Lost/min pressure strikes cannot.`,h.classList.toggle(`warn`,t>=3&&t<4),h.classList.toggle(`critical`,t>=4)}}let _=document.getElementById(`tool-bond`),v=document.getElementById(`tool-bond-label`),y=document.getElementById(`tool-bond-price`);_&&v&&y&&(e.activeBond?(_.classList.add(`active-warning`),v.textContent=`Pay Back`,y.textContent=`${J(e.activeBond.principal)}`,_.title=`Active Bond: Pay back ${J(e.activeBond.principal)} early to remove tax.`):(_.classList.remove(`active-warning`),v.textContent=`Issue Bond`,y.textContent=``,_.title=`Issue a transit bond for emergency cash.`)),document.getElementById(`hud-trains`).textContent=Object.keys(e.trains).length,document.getElementById(`hud-fare`).textContent=`${e.maps[e.currentMap].fareMult.toFixed(1)}×`,this.root.querySelectorAll(`[data-speed]`).forEach(t=>t.classList.toggle(`active`,+t.dataset.speed===e.speed));let b=[];for(let t of Object.values(e.trains)){if(t.map!==e.currentMap)continue;let n=ju[t.tier],r=t.passengers.reduce((e,t)=>e+t.count,0),i=t.route.length<2||!t.path;b.push(`<div class="train-chip ${i?`noroute`:``}" data-train="${t.id}" title="${n.name}">
          ${$(`tier${t.tier}`)} #${t.num}
          <span class="load">${i?`needs route`:`${r}/${n.capacity}`}</span>
        </div>`)}this.fleet.innerHTML=b.join(``),this.fleet.style.display=b.length?`flex`:`none`,this.fleet.querySelectorAll(`[data-train]`).forEach(e=>e.addEventListener(`click`,()=>this.game.inspectTrain(e.dataset.train)))}},S_=class{constructor(e){this.game=e,this.el=null,this.current=null,setInterval(()=>this.refresh(),400)}close(){this.el?.remove(),this.el=null,this.current=null,this.game.clearTrackHighlight()}open(e){this.close(),this.el=document.createElement(`div`),this.el.className=`inspector`,this.el.innerHTML=`<button class="close" title="Close">${$(`close`)}</button>${e}`,document.getElementById(`hud`).appendChild(this.el),this.el.querySelector(`.close`).addEventListener(`click`,()=>this.close())}refresh(){if(!this.current)return;let{kind:e,id:t}=this.current;e===`node`?this.showNode(t,!0):e===`train`?this.showTrain(t,!0):e===`edge`&&this.showEdge(t,!0)}showNode(e,t=!1){let n=this.game,r=n.state,i=r.currentMap,a=r.maps[i].nodes[e];if(!a)return this.close();this.current={kind:`node`,id:e},t||this.game.clearTrackHighlight();let o=a.waiting.reduce((e,t)=>e+t.count,0),s=a.unlocked||a.station,c=a.station?`Station built`:s?`On your network · no station yet`:`Outside your network`,l=r.surgeState?.abandonedNodes?.[a.id],u=a.vipSurgeActive?[`${$(`sparkle`)} ${a.vipEventTitle||`VIP Event`} (${a.vipSurgeTimer||0}s · 4.0× demand)`,`good`]:null,d=a.surgeActive?[`${$(`lightning`)} Active (${a.surgeTimer||0}s)`,`warn`]:a.surgeFrustrated?[`${$(`warning`)} Frustrated (+12 Lost/min · ${a.frustrationTimer||0}s left)`,`crowded`]:l?l.connected?[`${$(`info`)} Restoring (+${l.penalty} Lost/min · ${l.delivered}/500 pax)`,`warn`]:[`${$(`close`)} Abandoned (+${l.penalty} Lost/min penalty)`,`crowded`]:null,f=[[`Status`,c],u?[`VIP Event`,u[0],u[1]]:null,d?[`Demand Surge`,d[0],d[1]]:null,[`Demand`,cd(a,r)],a.pop?[`Metro pop.`,`${a.pop}M (rank ${a.rank})`]:null,a.station?[`Platform`,dd(i,a,r),a.crowded?`crowded`:``]:[`Waiting`,Y(o)],a.station?[`Platform level`,`${a.capLevel??0}/5 · cap ${Y(ld(i,a,r))}`]:null,[`Delivered here`,Y(a.servedTotal)],a.station?[`Fares`,`${r.maps[i].fareMult.toFixed(1)}×`]:null].filter(Boolean).map(([e,t,n])=>`<div class="row${n?` row-${n}`:``}"><span class="k">${e}</span><span>${t}</span></div>`).join(``),p=[],m=i===`usa`&&!s?`<div class="sub">Expand your network here to reach this metro — counts toward milestones.</div>`:``;a.station&&a.capLevel<Mu.maxCapLevel&&p.push(`<button class="btn" data-act="upcap">${$(`station`)} Upgrade platform (Level ${a.capLevel}/5) · ${J(ud(i,a,r))}</button>`),a.unlocked?a.station||p.push(`<button class="btn primary" data-act="station">${$(`station`)} Build station for ${J(Zu(i,a,r))}</button>`):p.push(`<button class="btn primary" data-act="unlock">${$(`pin`)} Expand network · ${J(Qu(a,r))}</button>`),i===`usa`&&a.rank===1&&(Hu(r)?p.push(`<button class="btn" data-act="enternyc">${$(`pin`)} Enter NYC map</button>`):Uu(r)?p.push(`<button class="btn primary" data-act="buynyc">${$(`pin`)} Buy NYC map · ${J(Mu.cityMapPurchasePrice)}</button>`):p.push(`<button class="btn" disabled title="Need ${J(Mu.cityMapPurchasePrice)}">${$(`lock`)} Buy NYC map · ${J(Mu.cityMapPurchasePrice)}</button>`)),i===`nyc`&&p.push(`<button class="btn quiet" data-act="enterusa">${$(`map`)} Return to USA map</button>`),this.open(`
      <h3>${a.name}</h3>
      <div class="sub">${i===`usa`?`Metro area`:`NYC stop`}</div>
      ${m}
      ${f}
      <div class="actions">${p.join(``)}</div>
    `),this.el.querySelector(`[data-act="unlock"]`)?.addEventListener(`click`,()=>n.unlockNode(e)),this.el.querySelector(`[data-act="station"]`)?.addEventListener(`click`,()=>n.buildStation(e)),this.el.querySelector(`[data-act="upcap"]`)?.addEventListener(`click`,()=>n.upgradeStationCapacity(e)),this.el.querySelector(`[data-act="buynyc"]`)?.addEventListener(`click`,()=>{n.purchaseNycMap()&&n.switchMap(`nyc`)}),this.el.querySelector(`[data-act="enternyc"]`)?.addEventListener(`click`,()=>n.switchMap(`nyc`)),this.el.querySelector(`[data-act="enterusa"]`)?.addEventListener(`click`,()=>n.switchMap(`usa`))}showEdge(e,t=!1){let n=this.game,r=n.state,i=r.currentMap,a=r.maps[i].edges[e];if(!a)return this.close();this.current={kind:`edge`,id:e},t||this.game.clearTrackHighlight();let o=r.maps[i],s=ku[a.type],c=[[`Type`,s.name],[`Connects`,`${o.nodes[a.a].name} ↔ ${o.nodes[a.b].name}`],[`Length`,`${a.length.toFixed(1)} units`],a.waterFrac>.02?[`Over water`,`${Math.round(a.waterFrac*100)}% (bridge)`]:null,[`Maintenance`,`${J(s.maintPerUnitPerMin*a.length)}/min`]].filter(Boolean),l=[];for(let e of[2,3])e>a.type&&l.push(`<button class="btn" data-up="${e}">${$(`lightning`)} Upgrade to ${ku[e].name} for ${J(Xu(i,a,e,r))}</button>`);l.push(`<button class="btn danger" data-act="remove">${$(`bulldoze`)} Demolish, refund ${J($u(i,a,r))}</button>`);let u=yp(r,i,e),d=u.length?u.map(t=>{let n=ju[t.tier],o=t.passengers.reduce((e,t)=>e+t.count,0),s=lp(r,i,e).includes(t)&&a.length>0?`${Math.round(t.prog/a.length*100)}% along`:`on route`;return`<button class="btn quiet train-pick" data-train="${t.id}">
            ${$(`tier${t.tier}`)} Train #${t.num}
            <span class="train-pick-meta">${o}/${n.capacity} · ${s}</span>
          </button>`}).join(``):`<div class="train-pick-empty">No trains use this track right now</div>`;this.open(`
      <h3>Track segment</h3>
      <div class="sub">${s.name}</div>
      ${c.map(([e,t])=>`<div class="row"><span class="k">${e}</span><span>${t}</span></div>`).join(``)}
      <div class="train-list">
        <div class="train-list-label">Trains on this track</div>
        ${d}
      </div>
      <div class="actions">${l.join(``)}</div>
    `),this.el.querySelectorAll(`[data-train]`).forEach(e=>e.addEventListener(`click`,()=>n.inspectTrain(e.dataset.train))),this.el.querySelectorAll(`[data-up]`).forEach(t=>t.addEventListener(`click`,()=>n.upgradeEdge(e,+t.dataset.up))),this.el.querySelector(`[data-act="remove"]`)?.addEventListener(`click`,()=>n.removeEdgeAction(e))}showTrain(e,t=!1){let n=this.game,r=n.state,i=r.trains[e];if(!i)return this.close();this.current={kind:`train`,id:e};let a=ju[i.tier],o=r.maps[i.map],s=i.passengers.reduce((e,t)=>e+t.count,0),c=i.route.map(e=>o.nodes[e]?.name??`?`).join(` → `),l=Math.round(a.opsPerMin*id(r)),u=td(i.tier,r),d=[[`Tier`,a.name],[`Speed`,`${a.speed[i.map]} u/s`],[`Load`,`${Y(s)} / ${a.capacity}`],[`State`,i.state],[`Route`,i.route.length>=2?c:`not set`],[`Lifetime revenue`,J(i.revenueTotal)],[`Operating cost`,`${J(l)}/min`]],f=[];for(let e=i.tier+1;e<=3;e++){let t=nd(i.tier,e,r);f.push(`<button class="btn" data-upgrade="${e}">${$(`lightning`)} Upgrade to ${ju[e].short} for ${J(t)}</button>`)}this.open(`
      <h3>${a.short} Train #${i.num}</h3>
      <div class="sub">${i.map===`usa`?`National network`:`NYC network`}</div>
      ${d.map(([e,t])=>`<div class="row"><span class="k">${e}</span><span>${t}</span></div>`).join(``)}
      <div class="actions">
        <button class="btn primary" data-act="route">${$(`route`)} Set route</button>
        ${f.join(``)}
        <button class="btn danger" data-act="sell">${$(`coins`)} Sell for ${J(u)}</button>
      </div>
    `),this.el.querySelector(`[data-act="route"]`).addEventListener(`click`,()=>{this.close(),n.startRouteAssign(e)}),this.el.querySelector(`[data-act="sell"]`).addEventListener(`click`,()=>n.sellTrain(e)),this.el.querySelectorAll(`[data-upgrade]`).forEach(t=>t.addEventListener(`click`,()=>n.upgradeTrain(e,+t.dataset.upgrade))),t||n.setTrainHighlight(e)}},C_=`overland.deviceId`;function w_(){let e=localStorage.getItem(C_);return e||(e=`dev_`+Math.random().toString(36).substring(2,12)+Date.now().toString(36),localStorage.setItem(C_,e)),e}var T_=`overland.playerHandle`,E_=`https://overlandgame.netlify.app/.netlify/functions/leaderboard`;function D_(){return localStorage.getItem(T_)||``}function O_(e){e&&localStorage.setItem(T_,e.trim())}function k_(e){try{let t=localStorage.getItem(`overland.localLeaderboard_${e}`);return t?JSON.parse(t):[]}catch{return[]}}function A_(e,t){try{let n=k_(e),r=n.findIndex(e=>e.deviceId===t.deviceId);r>=0?t.survivedSec>=n[r].survivedSec&&(n[r]=t):n.push(t),n.sort((e,t)=>t.survivedSec-e.survivedSec),localStorage.setItem(`overland.localLeaderboard_${e}`,JSON.stringify(n.slice(0,50)))}catch{}}function j_(e,t){let n=new Map;for(let r of[...e,...t]){let e=`${r.handle}_${r.survivedSec}`;n.has(e)||n.set(e,r)}let r=Array.from(n.values());return r.sort((e,t)=>t.survivedSec-e.survivedSec),r.slice(0,50)}async function M_(e=`usa`){let t=k_(e);try{let n=await fetch(`/.netlify/functions/leaderboard?map=${encodeURIComponent(e)}`),r=n.headers.get(`content-type`)||``;if(n.ok&&r.includes(`application/json`))return{map:e,entries:j_((await n.json()).entries||[],t)}}catch{}try{let n=await fetch(`${E_}?map=${encodeURIComponent(e)}`),r=n.headers.get(`content-type`)||``;if(n.ok&&r.includes(`application/json`))return{map:e,entries:j_((await n.json()).entries||[],t)}}catch{}return{map:e,entries:t}}async function N_({handle:e,mode:t=`survival`,map:n,survivedSec:r,trains:i,passengers:a}){let o=w_(),s=e.trim();O_(s);let c={handle:s,mode:t,map:n,survivedSec:Math.round(r),trains:Math.max(1,i),passengers:Math.max(0,a),deviceId:o},l={handle:s,survivedSec:Math.round(r),trains:Math.max(1,i),passengers:Math.max(0,a),deviceId:o,date:new Date().toISOString().split(`T`)[0]};A_(n,l);try{let e=await fetch(`/.netlify/functions/leaderboard`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(c)}),t=e.headers.get(`content-type`)||``;if(e.ok&&t.includes(`application/json`))return await e.json()}catch{}try{let e=await fetch(E_,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(c)}),t=e.headers.get(`content-type`)||``;if(e.ok&&t.includes(`application/json`))return await e.json()}catch{}return{success:!0,localMock:!0,entry:l}}function P_(e){return e===`nyc`?`New York City`:`USA National`}function F_(e){return e===1?`<span class="rank-badge gold">${$(`trophy`)} 1</span>`:e===2?`<span class="rank-badge silver">2</span>`:e===3?`<span class="rank-badge bronze">3</span>`:`<span class="rank-badge">#${e}</span>`}function I_(e){if(!e)return``;let t=5381;for(let n=0;n<e.length;n++)t=t*33^e.charCodeAt(n);return(t>>>0).toString(36)}async function L_(e,t=e?.state?.currentMap||`usa`){if(document.getElementById(`leaderboard-modal-backdrop`))return;let n=t,r=w_(),i=I_(r),a=document.createElement(`div`);a.className=`modal-backdrop`,a.id=`leaderboard-modal-backdrop`,a.innerHTML=`
    <div class="modal leaderboard-modal" style="width:min(42rem, 94vw);">
      <div class="modal-header-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <h2 style="margin:0;">${$(`trophy`)} Global Leaderboard</h2>
        <div class="modal-tabs" style="display:flex; gap:0.4rem;">
          <button class="btn small ${n===`usa`?`primary`:`quiet`}" data-tab="usa">USA National</button>
          <button class="btn small ${n===`nyc`?`primary`:`quiet`}" data-tab="nyc">New York City</button>
        </div>
      </div>
      <div class="sub" style="margin-bottom:1rem;">Top Survival network run times submitted across all players.</div>
      <div class="leaderboard-body" style="min-height:220px; max-height:55vh; overflow-y:auto; border-radius:8px; background:rgba(16,21,29,0.6); border:1px solid rgba(255,255,255,0.08);">
        <div class="leaderboard-loading" style="padding:2rem; text-align:center; color:#8a96a6;">Loading scores…</div>
      </div>
      <div class="modal-footer" style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center;">
        <span class="sub" style="font-size:0.78rem; margin:0;">Official Survival mode runs only</span>
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(a);let o=()=>a.remove();a.addEventListener(`click`,e=>{e.target===a&&o()}),a.querySelector(`[data-close]`)?.addEventListener(`click`,o);let s=a.querySelector(`.leaderboard-body`),c=a.querySelectorAll(`[data-tab]`);async function l(e){n=e,c.forEach(t=>{let n=t.dataset.tab===e;t.classList.toggle(`primary`,n),t.classList.toggle(`quiet`,!n)}),s.innerHTML=`<div class="leaderboard-loading" style="padding:2rem; text-align:center; color:#8a96a6;">Loading ${P_(e)} leaderboard…</div>`;let{entries:t}=await M_(e);if(!t||t.length===0){s.innerHTML=`
        <div style="padding:3rem 1.5rem; text-align:center; color:#8a96a6;">
          ${$(`trophy`)} No scores submitted yet for <b>${P_(e)}</b>.<br/>Be the first to complete an official Survival run!
        </div>
      `;return}let a=t.map((e,t)=>{let n=t+1,a=e.deviceId===r||e.deviceIdHash&&e.deviceIdHash===i;return`
        <div class="lb-row ${a?`self-row`:``}" style="display:grid; grid-template-columns:3.2rem 1fr 6rem 5rem 4.5rem; align-items:center; padding:0.55rem 0.8rem; border-bottom:1px solid rgba(255,255,255,0.05); ${a?`background:rgba(42,109,181,0.2); font-weight:bold;`:``}">
          <div>${F_(n)}</div>
          <div class="lb-name" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${R_(e.handle)}${a?` <span style="font-size:0.72rem; color:var(--accent);">(You)</span>`:``}</div>
          <div class="lb-time" style="color:var(--good); font-family:monospace; font-weight:bold;">${Wu(e.survivedSec)}</div>
          <div class="lb-pax" style="color:#aab4c2; font-size:0.84rem;">${Y(e.passengers)} pax</div>
          <div class="lb-trains" style="color:#8a96a6; font-size:0.8rem;">${e.trains} train${e.trains===1?``:`s`}</div>
        </div>
      `}).join(``);s.innerHTML=`
      <div class="lb-header" style="display:grid; grid-template-columns:3.2rem 1fr 6rem 5rem 4.5rem; padding:0.4rem 0.8rem; font-size:0.75rem; text-transform:uppercase; color:#6b7788; border-bottom:1px solid rgba(255,255,255,0.1); font-weight:bold; background:rgba(0,0,0,0.2);">
        <div>Rank</div>
        <div>Player</div>
        <div>Survived</div>
        <div>Delivered</div>
        <div>Fleet</div>
      </div>
      <div class="lb-rows">${a}</div>
    `}c.forEach(e=>e.addEventListener(`click`,()=>l(e.dataset.tab))),l(n)}function R_(e){return String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var z_=`aashishh15/3DTrainSim`,B_=`https://github.com/${z_}`;function V_(e){return e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}async function H_(e){try{let t=await fetch(`https://api.github.com/repos/${z_}`);if(!t.ok)return;let n=await t.json();typeof n.stargazers_count==`number`&&(e.dataset.count=String(n.stargazers_count),e.textContent=V_(n.stargazers_count))}catch{}}function U_(e,t){let n=document.createElement(`div`);n.className=`modal-backdrop`,n.id=`mode-picker-backdrop`;let r=vg(),i=[Lu.survival,Lu.tycoon].map(e=>`
    <button type="button" class="mode-card" data-mode="${e.id}">
      <div class="mode-card-head">
        ${$(e.id===`survival`?`close`:`medal`)}
        <div>
          <h4>${e.name}</h4>
          <div class="mode-tagline">${e.tagline}</div>
        </div>
      </div>
      <p class="mode-blurb">${e.blurb}</p>
      ${e.id===`survival`&&r?`<div class="mode-best">Personal best · ${r}</div>`:``}
      <span class="mode-cta">Play ${e.name}</span>
    </button>
  `).join(``);n.innerHTML=`
    <div class="modal mode-picker-modal">
      <h2>${$(`train`)} Choose your run</h2>
      <div class="sub">Same maps and tools — Tycoon has win conditions; Survival has no ceiling, just your best time.</div>
      <div class="mode-cards">${i}</div>
    </div>
  `,n.querySelector(`.mode-picker-modal .sub`).textContent=`Tycoon is relaxed creative building. Survival is the harder scored run with badges and the global leaderboard.`,document.getElementById(`hud`).appendChild(n),n.querySelectorAll(`[data-mode]`).forEach(e=>e.addEventListener(`click`,()=>{n.remove(),t(e.dataset.mode)}))}function W_(e){if(document.querySelector(`.shop-backdrop`))return;let t=document.createElement(`div`);t.className=`modal-backdrop shop-backdrop`,t.style.zIndex=`200`;let n=e.state.currentMap,r=id(e.state),i=Object.values(ju).map(t=>{let i=ed(t.id,e.state),a=Math.round(t.opsPerMin*r);return`
      <div class="tier-card">
        ${$(`tier${t.id}`)}
        <h4>${t.name}</h4>
        <div class="desc">${t.desc}</div>
        <div class="spec"><span>Speed</span><b>${t.speed[n]} u/s</b></div>
        <div class="spec"><span>Capacity</span><b>${Y(t.capacity)}</b></div>
        <div class="spec"><span>Track</span><b>${t.minTrack}</b></div>
        <div class="spec"><span>Fare bonus</span><b>×${t.fareMult}</b></div>
        <div class="spec"><span>Running cost</span><b>${J(a)}/min</b></div>
        <div class="price">${J(i)}</div>
        <button class="btn primary" data-tier="${t.id}">Buy</button>
      </div>
    `}).join(``);t.innerHTML=`
    <div class="modal">
      <h2>${$(`train`)} Train shop</h2>
      <div class="sub">Buying for the <b>${n===`usa`?`USA national`:`New York City`}</b> network. After purchase you'll pick the stops on its route.</div>
      <div class="tier-cards">${i}</div>
      <div class="modal-footer">
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(t);let a=()=>t.remove();t.addEventListener(`click`,e=>{e.target===t&&a()}),t.querySelector(`[data-close]`).addEventListener(`click`,a),t.querySelectorAll(`[data-tier]`).forEach(t=>t.addEventListener(`click`,()=>{e.buyTrain(+t.dataset.tier)&&a()}))}function G_(e){if(e.state.collapseReason===`network`||e.state.collapseReason===`surge`){K_(e);return}o_(e.state),Lp(e.state);let t=document.createElement(`div`);t.className=`modal-backdrop`,t.innerHTML=`
    <div class="modal" style="text-align:center; width:min(28rem,92vw);">
      <h2 style="justify-content:center;">${$(`coins`)} Bankrupt</h2>
      <div class="sub" style="margin:0.6rem 0 1.2rem;">
        Your rail empire ran out of money. You delivered ${Y(e.state.totalDelivered)} passengers
        and earned ${J(e.state.totalRevenue)} in fares.
      </div>
      <div class="modal-footer" style="justify-content:center; flex-wrap:wrap;">
        ${Qg(!0)}
        <button class="btn quiet" data-restart>Start a new empire</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(t),$g(t,e,{headline:`Bankrupt`}),t.querySelector(`[data-restart]`).addEventListener(`click`,()=>{t.remove(),e.newGame()})}function K_(e){let t=e.state;mm(t);let n=o_(t);Lp(t);let r=t.survivalTime||Xm(t),{isNew:i,bestSec:a,previousSec:o}=yg(r),{done:s,total:c}=hm(),l=Wu(a),u=Ep(t)&&r>0?`
    <div class="lb-submit-box" style="margin:1rem 0 1rem; padding:0.75rem; border-radius:8px; background:rgba(42,109,181,0.12); border:1px solid rgba(42,109,181,0.3); text-align:left;">
      <div style="font-weight:bold; font-size:0.85rem; margin-bottom:0.3rem; color:#edf1f6; display:flex; align-items:center; gap:0.4rem;">
        ${$(`trophy`)} Global Leaderboard
      </div>
      <div style="font-size:0.76rem; color:#97a3b4; margin-bottom:0.5rem;">
        Official run verified! Submit your survival record of <b>${Wu(r)}</b>:
      </div>
      <div style="display:flex; gap:0.4rem;">
        <input type="text" id="lb-handle-input" placeholder="Enter handle (max 20 chars)" maxlength="20" value="${D_()}" style="flex:1; padding:0.4rem 0.6rem; border-radius:4px; border:1px solid rgba(255,255,255,0.2); background:rgba(0,0,0,0.4); color:#fff; font-size:0.85rem;" />
        <button class="btn primary small" id="lb-submit-btn">Submit</button>
      </div>
      <div id="lb-submit-msg" style="font-size:0.76rem; margin-top:0.4rem; min-height:1rem;"></div>
    </div>
  `:``,d=t.collapseReason===`surge`?`Network collapsed — 5 demand surges were abandoned.`:`Too many riders gave up waiting. Your network couldn't keep pace with station demand.`,f=document.createElement(`div`);f.className=`modal-backdrop`,f.innerHTML=`
    <div class="modal" style="text-align:center; width:min(28rem,92vw);">
      <h2 style="justify-content:center;">${$(`close`)} Network collapsed</h2>
      <div class="sub" style="margin:0.6rem 0 0.4rem;">
        ${d}
      </div>
      <div class="stat" style="align-items:center; margin:1rem 0 0.5rem;">
        <div class="v" style="font-size:1.6rem; color:var(--accent);">${Wu(r)}</div>
        <div class="k">Survived</div>
      </div>
      <div class="sub" style="font-size:0.82rem; margin-bottom:0.35rem;">
        ${i?`<b style="color:var(--good);">New personal best!</b>${o>0?` (was ${Wu(o)})`:``}`:r===a?`Matched your personal best · <b>${l}</b>`:`Personal best · <b>${l}</b> · ${Wu(a-r)} short of your record`}
      </div>
      <div class="sub" style="font-size:0.78rem; margin-bottom:0.8rem;">
        Delivered ${Y(t.totalDelivered)} passengers · Peak lost rate ${Y(lh(t))}/min · ${Y(s)}/${Y(c)} badges unlocked
      </div>
      ${u}
      <div class="modal-footer" style="justify-content:center; flex-wrap:wrap;">
        <button class="btn quiet" data-view-lb>${$(`trophy`)} Leaderboard</button>
        ${Qg(!0)}
        <button class="btn quiet" data-restart>Try again</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(f),$g(f,e,{headline:`Network collapsed`,elapsedSec:r}),f.querySelector(`[data-view-lb]`)?.addEventListener(`click`,()=>{L_(e,t.currentMap)});let p=f.querySelector(`#lb-submit-btn`),m=f.querySelector(`#lb-handle-input`),h=f.querySelector(`#lb-submit-msg`);p&&m&&h&&p.addEventListener(`click`,async()=>{let i=m.value.trim();if(!i){h.style.color=`var(--bad)`,h.textContent=`Please enter a handle.`;return}p.disabled=!0,m.disabled=!0,h.style.color=`var(--accent)`,h.textContent=`Submitting score…`;try{await N_({handle:i,mode:`survival`,map:t.currentMap,survivedSec:r,trains:Object.keys(t.trains||{}).length,passengers:t.totalDelivered}),s_(n.id),h.style.color=`var(--good)`,h.textContent=`Score submitted to Global Leaderboard!`,e.hud.toast(`Leaderboard score submitted!`,`good`),setTimeout(()=>L_(e,t.currentMap),600)}catch(e){p.disabled=!1,m.disabled=!1,h.style.color=`var(--bad)`,h.textContent=e.message||`Failed to submit score.`}}),f.querySelector(`[data-restart]`).addEventListener(`click`,()=>{f.remove(),e.newGame()})}function q_(e,{firstRun:t=!1}={}){let n=document.createElement(`div`);n.className=`modal-backdrop`,n.innerHTML=`
    <div class="modal" style="width:min(34rem,92vw);">
      <h2>${$(`train`)} Overland</h2>
      <div class="sub">Build a profitable passenger rail network across the USA and New York City.</div>
      <div class="steps">
        <div class="step">${$(`station`)}
          <div><h4>1 · Build stations</h4>
          <p>You start in 12 major US metros. Pick the Station tool and click stops to build — gray metros let you <b>expand your network</b> into new cities as you grow.</p></div>
        </div>
        <div class="step">${$(`route`)}
          <div><h4>2 · Lay track between them</h4>
          <p>Pick a track type, then click one station and then another. Water crossings in NYC build bridges at extra cost.</p></div>
        </div>
        <div class="step">${$(`train`)}
          <div><h4>3 · Buy a train and set its route</h4>
          <p>Buy a train, click the stations it should serve in order, then press Done. It loops automatically and earns fares.</p></div>
        </div>
        <div class="step">${$(`coins`)}
          <div><h4>4 · Reinvest the profit</h4>
          <p><b>Expand your network</b> across the US, upgrade track, and add faster trains. Milestones track every step — reach all 50 metros or $5M to win. Stay above -$250k or you go bankrupt.</p></div>
        </div>
        <div class="step">${$(`medal`)}
          <div><h4>5 · Track your milestones</h4>
          <p>Open the medal button anytime to see goals, progress bars, and win conditions. The bar under the stats shows what to chase next.</p></div>
        </div>
      </div>
      <div class="controls-hint">
        <b>Drag</b> to orbit · <b>Move tool (0)</b> drag-pans without Ctrl · <b>Scroll / pinch</b> zoom ·
        <b>Right-click / Cancel</b> backs out · <b>Space</b> pauses
      </div>
      <div class="modal-footer">
        <button class="btn quiet" data-report-bug>${$(`bug`)} Report bug</button>
        <a class="btn quiet github-modal-star" href="${B_}" target="_blank" rel="noopener noreferrer">
          ${$(`github`)}
          <span>Star on GitHub</span>
          <span class="github-star-count" hidden>${$(`star`,`github-star-icon`)}<span class="github-star-n">-</span></span>
        </a>
        <button class="btn primary" data-close>${t?`Start building`:`Got it`}</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(n);let r=()=>n.remove();n.addEventListener(`click`,e=>{e.target===n&&r()}),n.querySelector(`[data-close]`).addEventListener(`click`,r),n.querySelector(`[data-report-bug]`)?.addEventListener(`click`,()=>{e.reportBug()});let i=n.querySelector(`.github-star-count`),a=n.querySelector(`.github-star-n`);H_(a).then(()=>{i&&Number(a?.dataset.count||0)>=10&&(i.hidden=!1)})}function J_(e){let t=[];for(let n of[`usa`,`nyc`])for(let r of Object.values(e.maps[n].nodes)){if(!r.station)continue;let i=r.waiting.reduce((e,t)=>e+t.count,0),a=ld(n,r,e);t.push({mapKey:n,id:r.id,name:r.name,waiting:i,cap:a,crowded:r.crowded,platform:dd(n,r,e),served:r.servedTotal})}return t.sort((e,t)=>{if(e.crowded!==t.crowded)return!!t.crowded-+!!e.crowded;let n=e.cap>0?e.waiting/e.cap:0;return(t.cap>0?t.waiting/t.cap:0)-n})}function Y_(e){let t=e.cap>0?Math.min(100,Math.round(e.waiting/e.cap*100)):0;return`
    <button type="button" class="overview-row ${e.crowded?`crowded`:t>=70?`warn`:``}" data-map="${e.mapKey}" data-node="${e.id}">
      <div class="overview-row-head">
        <span class="overview-name">${e.name}</span>
        <span class="overview-map-tag">${e.mapKey===`usa`?`USA`:`NYC`}</span>
      </div>
      <div class="overview-platform">${e.platform}</div>
      <div class="overview-bar"><div class="overview-bar-fill" style="width:${t}%"></div></div>
      <div class="overview-meta">Delivered here · ${Y(e.served)}</div>
    </button>
  `}function X_(e){let t=e.state,n=J_(t),r=n.filter(e=>e.crowded).length,i=!Hu(t),a=n.length?``:`<div class="overview-empty">No stations yet — build stops on the map to see platform status here.</div>`,o=i?`<div class="overview-note">${$(`lock`)} Buy the NYC detail map for <b>${J(Mu.cityMapPurchasePrice)}</b> at New York City on the USA map.</div>`:``,s=t.currentMap===`nyc`?`<button class="btn quiet" data-map="usa">${$(`map`)} Return to USA map</button>`:``,c=document.createElement(`div`);c.className=`modal-backdrop`,c.innerHTML=`
    <div class="modal goals-modal overview-modal">
      <h2>${$(`passengers`)} Network overview</h2>
      <div class="sub">${Y(n.length)} station${n.length===1?``:`s`}${r?` · <span class="overview-alert">${Y(r)} overcrowded</span>`:``}</div>
      ${o}
      <div class="overview-list">${n.map(Y_).join(``)}${a}</div>
      <div class="modal-footer">
        ${s}
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(c);let l=()=>c.remove();c.addEventListener(`click`,e=>{e.target===c&&l()}),c.querySelector(`[data-close]`).addEventListener(`click`,l),c.querySelectorAll(`.overview-row`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.map;r===`nyc`&&!Hu(t)||e.switchMap(r)&&(e.inspector.showNode(n.dataset.node),l())})}),c.querySelector(`[data-map="usa"]`)?.addEventListener(`click`,()=>{e.switchMap(`usa`),l()})}function Z_(e){return e===`nyc`?`New York City`:`USA National`}function Q_(e){try{return new Date(e).toLocaleString(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}catch{return e}}function $_(e){let t=[];return e.officialRun?t.push(`<span class="run-tag official">Official</span>`):t.push(`<span class="run-tag unofficial">Unofficial</span>`),e.leaderboardSubmitted?t.push(`<span class="run-tag submitted">${$(`trophy`)} Submitted</span>`):c_(e)&&t.push(`<span class="run-tag pending">Not submitted</span>`),t.join(``)}function ev(e){let t=e.survival?Wu(e.survivalTime):Wu(e.simTime);return`${e.survival?`Survived`:`Elapsed`} ${t} · ${Y(e.totalDelivered)} pax · ${Y(e.trainCount)} trains · ${J(e.cash)} cash`}function tv(e){let t=c_(e);return`
    <div class="run-history-row" data-run-id="${iv(e.id)}">
      <div class="run-history-main">
        <div class="run-history-title">
          <span class="run-outcome">${iv(e.outcomeLabel)}</span>
          <span class="run-meta">${iv(e.modeName)} · ${Z_(e.mapKey)}</span>
        </div>
        <div class="run-history-stats">${ev(e)}</div>
        <div class="run-history-when">${Q_(e.recordedAt)}</div>
        <div class="run-history-tags">${$_(e)}</div>
      </div>
      <div class="run-history-actions">
        <button class="btn small quiet" type="button" data-share-run title="Share this run">${$(`share`)}</button>
        ${t?`<button class="btn small primary" type="button" data-submit-run>${$(`trophy`)} Submit</button>`:``}
      </div>
    </div>
  `}function nv(e){if(document.getElementById(`run-history-modal-backdrop`))return;let t=document.createElement(`div`);t.className=`modal-backdrop`,t.id=`run-history-modal-backdrop`,t.innerHTML=`
    <div class="modal run-history-modal" style="width:min(42rem, 94vw);">
      <div class="modal-header-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <h2 style="margin:0;">${$(`history`)} Past runs</h2>
      </div>
      <div class="sub" style="margin-bottom:1rem;">Review finished runs you may have missed — share or submit Survival scores to the leaderboard.</div>
      <div class="run-history-body" style="min-height:180px; max-height:55vh; overflow-y:auto; border-radius:8px; background:rgba(16,21,29,0.6); border:1px solid rgba(255,255,255,0.08);"></div>
      <div class="modal-footer" style="margin-top:1rem; display:flex; justify-content:flex-end;">
        <button class="btn quiet" data-close>Close</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(t);let n=()=>t.remove();t.addEventListener(`click`,e=>{e.target===t&&n()}),t.querySelector(`[data-close]`)?.addEventListener(`click`,n);let r=t.querySelector(`.run-history-body`);function i(){let t=n_();if(!t.length){r.innerHTML=`
        <div style="padding:3rem 1.5rem; text-align:center; color:#8a96a6;">
          No finished runs yet. Complete a Survival or Tycoon run to see it here.
        </div>
      `;return}r.innerHTML=t.map(tv).join(``),r.querySelectorAll(`.run-history-row`).forEach(n=>{let r=n.dataset.runId,a=t.find(e=>e.id===r);a&&(n.querySelector(`[data-share-run]`)?.addEventListener(`click`,()=>{Xg(e,a)}),n.querySelector(`[data-submit-run]`)?.addEventListener(`click`,()=>{rv(e,a,()=>i())}))})}i()}function rv(e,t,n){if(document.getElementById(`run-history-submit-backdrop`))return;let r=document.createElement(`div`);r.className=`modal-backdrop`,r.id=`run-history-submit-backdrop`,r.innerHTML=`
    <div class="modal" style="width:min(28rem, 92vw);">
      <h2>${$(`trophy`)} Submit to leaderboard</h2>
      <div class="sub" style="margin:0.5rem 0 1rem;">
        Submit your official Survival run of <b>${Wu(t.survivalTime)}</b>
        on <b>${Z_(t.mapKey)}</b>.
      </div>
      <div style="display:flex; gap:0.4rem; margin-bottom:0.5rem;">
        <input type="text" id="rh-lb-handle" placeholder="Enter handle (max 20 chars)" maxlength="20" value="${iv(D_())}" style="flex:1; padding:0.4rem 0.6rem; border-radius:4px; border:1px solid rgba(255,255,255,0.2); background:rgba(0,0,0,0.4); color:#fff; font-size:0.85rem;" />
        <button class="btn primary small" id="rh-lb-submit">Submit</button>
      </div>
      <div id="rh-lb-msg" style="font-size:0.76rem; min-height:1rem;"></div>
      <div class="modal-footer" style="margin-top:1rem;">
        <button class="btn quiet" data-close>Cancel</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(r);let i=()=>r.remove();r.addEventListener(`click`,e=>{e.target===r&&i()}),r.querySelector(`[data-close]`)?.addEventListener(`click`,i);let a=r.querySelector(`#rh-lb-submit`),o=r.querySelector(`#rh-lb-handle`),s=r.querySelector(`#rh-lb-msg`);a?.addEventListener(`click`,async()=>{let r=o.value.trim();if(!r){s.style.color=`var(--bad)`,s.textContent=`Please enter a handle.`;return}a.disabled=!0,o.disabled=!0,s.style.color=`var(--accent)`,s.textContent=`Submitting score…`;try{await N_({handle:r,mode:`survival`,map:t.mapKey,survivedSec:t.survivalTime,trains:t.trainCount,passengers:t.totalDelivered}),s_(t.id),s.style.color=`var(--good)`,s.textContent=`Score submitted to Global Leaderboard!`,e.hud.toast(`Leaderboard score submitted!`,`good`),n(),setTimeout(()=>{i(),L_(e,t.mapKey)},500)}catch(e){a.disabled=!1,o.disabled=!1,s.style.color=`var(--bad)`,s.textContent=e.message||`Failed to submit score.`}})}function iv(e){return String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var av=`railEmpire.introSeen`,ov=class{constructor(){let e=Rp();this.state=e??Pp(`survival`),jp(this.state),this.mode=`select`,this.trackStart=null,this.routeDraft=null,this.hoverPoint=null,this.hoverObject=null,this.renderer=wh(),this.bundles={usa:Th(this.renderer,{background:1715007,fogNear:400,fogFar:1200,cameraPos:new V(0,150,98),target:new V(0,0,-10),minDist:30,maxDist:520,shadowExtent:300}),nyc:Th(this.renderer,{background:1450799,fogNear:250,fogFar:800,cameraPos:new V(-30,120,110),target:new V(0,0,10),minDist:12,maxDist:330,shadowExtent:140})},Hh(this.bundles.usa.scene),Qh(this.bundles.nyc.scene),this.renderers={};for(let e of[`usa`,`nyc`])this.renderers[e]={nodes:new og(e,this.bundles[e],this.state),track:new sg(e,this.bundles[e],this.state),trains:new mg(e,this.bundles[e],this.state)};this.hud=new x_(this),this.inspector=new S_(this),g_(this.state),this.goalCheckAcc=0,Pm(`gameOver`,()=>G_(this)),Pm(`networkCollapse`,()=>{K_(this),Z(`goalsUpdated`)}),Pm(`goalsUpdated`,()=>this.hud.refreshGoals()),this.raycaster=new Tu,this.pointer=new z,this.touchPointers=0,this.configureMobile(),this.bindInput(),this.activeBundle.controls.enabled=!0,this.applyCameraBindings(this.mode),this.updateHint(),this.previewMat=new q({color:16777215,transparent:!0,opacity:.7}),window.addEventListener(`resize`,()=>this.onResize()),setInterval(()=>{this.state.gameOver||Lp(this.state)},5e3),window.addEventListener(`beforeunload`,()=>Lp(this.state)),this.lastHiddenTick=performance.now(),setInterval(()=>{let e=performance.now();if(document.hidden){let t=Math.min((e-this.lastHiddenTick)/1e3,2);wp(()=>Ym(this.state,t)),this.renderers[this.state.currentMap].trains.update(),this.renderer.render(this.activeBundle.scene,this.activeBundle.camera)}this.lastHiddenTick=e},500),this.clock=new uu,this.loop(),this.state.gameOver?G_(this):e?!localStorage.getItem(av)&&Ru(this.state).goals&&(localStorage.setItem(av,`1`),q_(this,{firstRun:!0})):(this.state.speed=0,U_(this,e=>this.beginRun(e,{firstRun:!0})))}openIntro(){q_(this)}openGoals(){u_(this)}openOverview(){X_(this)}openShare(e){Zg(this,e)}openLeaderboard(e){L_(this,e)}openRunHistory(){nv(this)}reportBug(){let e=this.state,t=`**Describe the bug:**\n\n\n**Steps to reproduce:**\n1. \n2. \n\n**Expected behavior:**\n\n\n---\n**Debug Info (Auto-generated):**\n- **Map:** ${e?e.currentMap===`nyc`?`New York City (nyc)`:`USA National (usa)`:`Unknown`}\n- **Game Mode:** ${e?Ru(e).name:`Unknown`}\n- **Trains Owned:** ${e?Object.keys(e.trains||{}).length:0}\n- **Cash:** ${e?J(e.cash):`$0`}\n- **Browser / OS:** ${navigator.userAgent}`,n=`https://github.com/aashishh15/3DTrainSim/issues/new?`+new URLSearchParams({title:`[Bug] `,body:t});window.open(n,`_blank`,`noopener,noreferrer`)}processGoals(){if(!this.state.gameOver){if(Ru(this.state).goals){let e=$p(this.state);if(!e.length)return;for(let t of e)this.hud.toast(`Milestone: ${t.title}`,`good`),t.win&&!this.state.victoryShown&&(this.state.victoryShown=!0,p_(this,t))}else{let e=mm(this.state);if(!e.length)return;for(let t of e)this.hud.toast(`Badge unlocked: ${t.title}`,`good`)}Z(`goalsUpdated`)}}configureMobile(){if(Sh()){document.documentElement.classList.add(`mobile`);for(let[e,t]of Object.entries(this.bundles))t.controls.rotateSpeed=.7,t.controls.zoomSpeed=.85,t.controls.panSpeed=.75,e===`usa`?(t.controls.minDistance=50,t.controls.maxDistance=400):(t.controls.minDistance=20,t.controls.maxDistance=260)}}cancelAction(){this.onRightClick()}bindHintActions(e,{done:t=!1}={}){let n=this.mode!==`select`||this.trackStart;if(!t&&!n){this.hud.setHint(e);return}let r=[];t&&r.push(`<button class="btn small primary" id="hint-done">Done</button>`),n&&r.push(`<button class="btn small quiet" id="hint-cancel-action">Cancel</button>`),this.hud.setHint(`${e} <span class="hint-actions">${r.join(``)}</span>`),document.getElementById(`hint-done`)?.addEventListener(`click`,()=>this.finishRouteAssign()),document.getElementById(`hint-cancel-action`)?.addEventListener(`click`,()=>this.cancelAction())}mobileSelectHint(e){return e||null}get activeBundle(){return this.bundles[this.state.currentMap]}get activeMapState(){return this.state.maps[this.state.currentMap]}beginRun(e,{firstRun:t=!1}={}){this.resetToState(Pp(e)),this.state.speed=1;let n=Ru(this.state);t&&n.goals&&!localStorage.getItem(av)?(localStorage.setItem(av,`1`),q_(this,{firstRun:!0})):n.goals?Z(`toast`,{msg:`New empire started. Build stations, lay track, buy trains!`,kind:`good`}):Z(`toast`,{msg:`Survival run — keep Lost/min low. Survived time is your score.`,kind:`good`}),this.processGoals(),Lp(this.state)}resetToState(e){jp(e),this.state=e;for(let e of[`usa`,`nyc`]){let t=this.bundles[e];t.pickables.clear(),t.trackGroup.clear(),t.trainGroup.clear(),t.previewGroup.clear(),this.renderers[e]={nodes:new og(e,t,this.state),track:new sg(e,t,this.state),trains:new mg(e,t,this.state)}}this.setMode(`select`),this.inspector.close(),g_(this.state),this.hud.renderToolbar(),this.hud.syncModeUi(),this.hud.refreshGoals(),this.updateHint()}newGame(){U_(this,e=>{zp(),this.beginRun(e)})}switchMap(e){return e===`nyc`&&!Hu(this.state)?(Z(`toast`,{msg:`Buy the NYC map for ${J(Mu.cityMapPurchasePrice)} first`,kind:`bad`}),!1):this.state.currentMap===e?!0:(this.cancelTransient(),this.inspector.close(),this.bundles[this.state.currentMap].controls.enabled=!1,this.state.currentMap=e,this.activeBundle.controls.enabled=!0,this.applyCameraBindings(this.mode),this.hud.renderToolbar(),this.updateHint(),Z(`toast`,{msg:e===`usa`?`National network`:`New York City network`}),!0)}purchaseNycMap(){return wp(()=>{if(Hu(this.state))return!0;let e=Mu.cityMapPurchasePrice;return this.state.cash<e?(Z(`toast`,{msg:`Need ${J(e)} to buy the NYC map`,kind:`bad`}),!1):(this.state.cash-=e,this.state.cityMapsUnlocked=!0,Z(`toast`,{msg:`NYC map purchased for ${J(e)}`,kind:`good`}),!0)})}setMode(e){this.mode=e,this.cancelTransient(!1),this.applyCameraBindings(e),this.hud.syncToolbar(),this.updateHint()}applyCameraBindings(n){for(let r of Object.values(this.bundles)){let i=r.controls;n===`pan`?(i.mouseButtons={LEFT:e.PAN,MIDDLE:e.DOLLY,RIGHT:e.ROTATE},i.touches={ONE:t.PAN,TWO:t.DOLLY_ROTATE}):(i.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},i.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN})}this.renderer.domElement.style.cursor=n===`pan`?`grab`:``}cancelTransient(e=!0){this.trackStart=null,this.routeDraft=null,this.clearPreview(),e&&this.mode===`route`&&(this.mode=`select`)}spend(e){return wp(()=>this.state.cash<e?(Z(`toast`,{msg:`Not enough cash (need ${J(e)})`,kind:`bad`}),!1):(this.state.cash-=e,!0))}unlockNode(e){let t=this.activeMapState.nodes[e];if(!t||t.unlocked)return;let n=Qu(t,this.state);this.spend(n)&&(t.unlocked=!0,this.renderers[this.state.currentMap].nodes.rebuildNode(t),Z(`toast`,{msg:`Network expanded to ${t.name}!`,kind:`good`}),this.inspector.showNode(e),this.processGoals())}buildStation(e){let t=this.state.currentMap,n=this.activeMapState.nodes[e];if(!(!n||n.station)){if(n.unlocked){let e=Zu(t,n,this.state);if(!this.spend(e))return;n.station=!0,Z(`toast`,{msg:`Station built at ${n.name} (${J(e)})`,kind:`good`})}else{let e=Qu(n,this.state)+Zu(t,n,this.state);if(!this.spend(e))return;n.unlocked=!0,n.station=!0,Z(`toast`,{msg:`${n.name} joined your network + station built (${J(e)})`,kind:`good`})}this.renderers[t].nodes.rebuildNode(n),this.inspector.current?.id===e&&this.inspector.showNode(e),this.updateHint(),this.processGoals()}}upgradeStationCapacity(e){let t=this.state.currentMap,n=this.activeMapState.nodes[e];if(!n?.station||n.capLevel>=Mu.maxCapLevel)return;let r=ud(t,n,this.state);this.spend(r)&&(wp(()=>{n.capLevel=(n.capLevel??0)+1}),this.renderers[t].nodes.rebuildNode(n),Z(`toast`,{msg:`${n.name} platform upgraded to level ${n.capLevel}/5 (${J(r)})`,kind:`good`}),this.inspector.showNode(e))}tryBuildTrack(e,t,n){let r=this.state.currentMap,i=this.activeMapState;if(e===t)return;let a=i.nodes[e],o=i.nodes[t];if(!a||!o)return;let s=this.autoConnectChain(r,e,t),c=0,l=0;for(let e=0;e<s.length-1;e++){let t=s[e],a=s[e+1];if(i.edges[cp(t,a)])continue;let o=i.nodes[t],u=i.nodes[a],d=Ju(r,n,up(o,u),r===`nyc`?bd(o.x,o.z,u.x,u.z):0,this.state);if(!this.spend(d)){c>0&&this.refundChain(r,s,e);return}l+=d,Fp(this.state,r,t,a,n),c++}if(c===0){Z(`toast`,{msg:`These stops are already connected`,kind:`bad`});return}this.renderers[r].track.sync(),nh(this.state),Z(`toast`,{msg:`${ku[n].name} laid for ${J(l)}`,kind:`good`}),this.trackStart=t,this.processGoals()}autoConnectChain(e,t,n){let r=this.state.maps[e],i=r.nodes[t],a=r.nodes[n],o=Jh[e].nodeScale*2.6,s=[];for(let e of Object.values(r.nodes)){if(!e.station||e.id===t||e.id===n)continue;let{dist:r,t:c}=dp(i.x,i.z,a.x,a.z,e.x,e.z);c>.02&&c<.98&&r<o&&s.push({id:e.id,t:c})}return s.sort((e,t)=>e.t-t.t),[t,...s.map(e=>e.id),n]}refundChain(e,t,n){let r=this.state.maps[e];for(let i=0;i<n;i++){let n=cp(t[i],t[i+1]),a=r.edges[n];a&&(this.state.cash+=Ju(e,a.type,a.length,a.waterFrac,this.state),Ip(this.state,e,n))}}insertJunction(e,t){let n=this.state.currentMap,r=this.activeMapState,i=r.edges[e];if(!i)return null;let a=r.nodes[i.a],o=r.nodes[i.b];if(!a||!o)return null;let s=t?.x??(a.x+o.x)/2,c=t?.z??(a.z+o.z)/2,{t:l}=dp(a.x,a.z,o.x,o.z,s,c),u=Math.max(.08,Math.min(.92,l)),d=a.x+(o.x-a.x)*u,f=a.z+(o.z-a.z)*u,p=`jct_${n}_${this.state.junctionCounter++}`,m={id:p,name:`Junction`,x:d,z:f,unlocked:!0,station:!1,junction:!0,waiting:[],spawnAcc:0,servedTotal:0,demand:0};return r.nodes[p]=m,Ip(this.state,n,e),Fp(this.state,n,i.a,p,i.type),Fp(this.state,n,p,i.b,i.type),this.renderers[n].nodes.rebuildNode(m),this.renderers[n].track.sync(),nh(this.state),Z(`toast`,{msg:`Junction added — branch your line from here`,kind:`good`}),p}upgradeEdge(e,t){let n=this.state.currentMap,r=this.activeMapState.edges[e];if(!r||t<=r.type)return;let i=Xu(n,r,t,this.state);this.spend(i)&&(r.type=t,this.activeMapState.pathVersion++,this.renderers[n].track.sync(),nh(this.state),Z(`toast`,{msg:`Upgraded to ${ku[t].name} (${J(i)})`,kind:`good`}),this.inspector.showEdge(e))}removeEdgeAction(e){let t=this.state.currentMap,n=this.activeMapState.edges[e];n&&(wp(()=>{this.state.cash+=$u(t,n,this.state)}),Ip(this.state,t,e),this.renderers[t].track.sync(),nh(this.state),this.inspector.close(),Z(`toast`,{msg:`Track demolished`}))}buyTrain(e){let t=ju[e],n=ed(e,this.state);return this.spend(n)?wp(()=>{let n=`t${this.state.nextTrainId}`;return this.state.trains[n]={id:n,num:this.state.nextTrainId++,map:this.state.currentMap,tier:e,route:[],path:null,seg:0,prog:0,dwell:0,state:`idle`,passengers:[],revenueTotal:0},Z(`toast`,{msg:`${t.short} train purchased. Now pick its route.`,kind:`good`}),this.startRouteAssign(n),this.processGoals(),!0}):!1}sellTrain(e){let t=this.state.trains[e];t&&(wp(()=>{let n=td(t.tier,this.state);this.state.cash+=n,delete this.state.trains[e]}),this.inspector.close(),Z(`toast`,{msg:`Train sold (50% refund)`}))}upgradeTrain(e,t){let n=this.state.trains[e];if(!n||n.tier>=t)return!1;let r=nd(n.tier,t,this.state);return this.spend(r)?wp(()=>{n.tier=t,nh(this.state);let r=ju[t];return Z(`toast`,{msg:`Train #${n.num} upgraded to ${r.short}!`,kind:`good`}),this.inspector.showTrain(e),this.processGoals(),!0}):!1}issueBond(e,t){return this.state.activeBond?(Z(`toast`,{msg:`Already have an active bond!`,kind:`bad`}),!1):wp(()=>(this.state.cash+=e,this.state.activeBond={principal:e,taxRate:t,timeRemaining:600},Z(`toast`,{msg:`Bond Issued: +$${(e/1e6).toFixed(1)}M cash added. Revenue taxed by ${Math.round(t*100)}%.`,kind:`good`}),this.processGoals(),!0))}paybackBondEarly(){let e=this.state.activeBond;return e?this.state.cash<e.principal?(Z(`toast`,{msg:`Not enough cash (need ${J(e.principal)})`,kind:`bad`}),!1):wp(()=>(this.state.cash-=e.principal,this.state.activeBond=null,Z(`toast`,{msg:`Bond paid off early — revenue tax removed!`,kind:`good`}),this.processGoals(),!0)):!1}inspectTrain(e){let t=this.state.trains[e];t&&(t.map!==this.state.currentMap&&this.switchMap(t.map),this.inspector.showTrain(e))}clearTrackHighlight(){for(let e of[`usa`,`nyc`])this.renderers[e].track.clearHighlight()}setTrainHighlight(e){let t=this.state.trains[e];if(!t)return;let n=t.map,r=[];if(t.path)for(let e=0;e<t.path.length-1;e++)r.push(cp(t.path[e],t.path[e+1]));this.clearTrackHighlight(),this.renderers[n].track.highlight(r)}startRouteAssign(e){let t=this.state.trains[e];t&&(t.map!==this.state.currentMap&&this.switchMap(t.map),this.mode=`route`,this.routeDraft={trainId:e,stops:[]},this.hud.syncToolbar(),this.updateHint())}routeAddStop(e){let t=this.routeDraft;if(t){if(!this.activeMapState.nodes[e]?.station){Z(`toast`,{msg:`Routes can only include stops with stations`,kind:`bad`});return}t.stops[t.stops.length-1]!==e&&(t.stops.push(e),this.updateHint(),this.drawRoutePreview())}}finishRouteAssign(){let e=this.routeDraft;if(!e)return;let t=this.state.trains[e.trainId];if(!t||e.stops.length<2){Z(`toast`,{msg:`Pick at least 2 stops`,kind:`bad`});return}if(!th(this.state,t,[...e.stops])){let e=ju[t.tier];Z(`toast`,{msg:`No ${e.short}-legal track connects those stops (${e.minTrack})`,kind:`bad`});return}Z(`toast`,{msg:`Route assigned. All aboard!`,kind:`good`}),this.routeDraft=null,this.setMode(`select`),this.processGoals()}openShop(){W_(this)}panToNode(e,t=this.state.currentMap){this.state.currentMap!==t&&this.switchMap(t);let n=this.state.maps[t]?.nodes[e];if(!n)return;let r=this.activeBundle;r&&(r.controls.target.set(n.x,0,n.z),r.camera.position.set(n.x,r.camera.position.y,n.z+80),r.controls.update(),this.inspector.showNode(e))}bindInput(){let e=this.renderer.domElement,t=null,n=null;e.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&this.touchPointers++,t=[e.clientX,e.clientY],n=e.pointerId,this.mode===`pan`&&(this.renderer.domElement.style.cursor=`grabbing`)}),e.addEventListener(`pointerup`,e=>{if(e.pointerType===`touch`&&(this.touchPointers=Math.max(0,this.touchPointers-1)),!t||e.pointerId!==n)return;let r=Ch()+2,i=Math.hypot(e.clientX-t[0],e.clientY-t[1]);if(t=null,n=null,this.mode===`pan`&&(this.renderer.domElement.style.cursor=`grab`),!(i>r)&&!(this.touchPointers>0)){if(e.button===2){this.onRightClick();return}this.mode!==`pan`&&this.onClick(e)}}),e.addEventListener(`pointercancel`,e=>{e.pointerType===`touch`&&(this.touchPointers=Math.max(0,this.touchPointers-1)),t=null,n=null}),e.addEventListener(`pointermove`,e=>this.onPointerMove(e)),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&(this.routeDraft&&=null,this.setMode(`select`),this.inspector.close()),e.key===`Enter`&&this.routeDraft&&this.finishRouteAssign(),e.target.closest?.(`input, textarea`))return;e.key===` `&&(e.preventDefault(),this.state.speed=+(this.state.speed===0));let t={0:`pan`,1:`select`,2:`station`,3:`track1`,4:`track2`,5:`track3`,6:`bulldoze`};t[e.key]&&this.setMode(t[e.key]),(e.key===`b`||e.key===`B`)&&this.openShop(),(e.key===`o`||e.key===`O`)&&this.openOverview()})}pick(e){let t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);let n=this.activeBundle;this.raycaster.setFromCamera(this.pointer,n.camera);let r=this.raycaster.intersectObjects([...n.pickables.children,...n.trackGroup.children,...n.trainGroup.children],!0);for(let e of r){let t=e.object;for(;t&&!t.userData?.kind;)t=t.parent;if(t?.userData?.kind)return{data:t.userData,point:e.point}}let i=new _i(new V(0,1,0),-Jh[this.state.currentMap].trackY),a=new V;if(!this.raycaster.ray.intersectPlane(i,a))return{data:null,point:a};let o=n.camera.position.distanceTo(n.controls.target),s=Math.max(3,Math.min(40,o*.04));return this.snapPick(a,s,e)}snapPick(e,t){let n=this.state.currentMap,r=this.activeMapState,i=null,a=1/0;for(let n of Object.values(r.nodes)){let r=Math.hypot(n.x-e.x,n.z-e.z);r<=t&&r<a&&(a=r,i=n)}let o=null,s=1/0;for(let n of Object.values(r.edges)){let i=r.nodes[n.a],a=r.nodes[n.b];if(!i||!a)continue;let{dist:c}=dp(i.x,i.z,a.x,a.z,e.x,e.z);c<=t&&c<s&&(s=c,o=n)}return i&&(a<=s||!o)?{data:{kind:`node`,id:i.id,map:n},point:e}:o?{data:{kind:`edge`,id:o.id,map:n},point:e}:{data:null,point:e}}onClick(e){let{data:t,point:n}=this.pick(e),r=this.mode;if(r===`select`){if(!t){this.inspector.close();return}t.kind===`node`?this.inspector.showNode(t.id):t.kind===`edge`?this.inspector.showEdge(t.id):t.kind===`train`&&this.inspector.showTrain(t.id);return}if(r===`station`){t?.kind===`node`&&this.buildStation(t.id);return}if(r.startsWith(`track`)){let e=+r.slice(5);if(!t)return;if(t.kind===`edge`&&this.trackStart===null){let e=this.insertJunction(t.id,n);e&&(this.trackStart=e,this.updateHint());return}if(t.kind!==`node`)return;let i=this.activeMapState.nodes[t.id];if(!i.station&&!i.junction){Z(`toast`,{msg:`${i.name} needs a station first`,kind:`bad`});return}this.trackStart===null?(this.trackStart=t.id,this.updateHint()):(this.tryBuildTrack(this.trackStart,t.id,e),this.updateHint());return}if(r===`bulldoze`){t?.kind===`edge`&&this.removeEdgeAction(t.id);return}if(r===`route`){t?.kind===`node`&&this.routeAddStop(t.id);return}}onRightClick(){this.trackStart?(this.trackStart=null,this.clearPreview(),this.updateHint()):(this.routeDraft&&=null,this.setMode(`select`))}onPointerMove(e){let{data:t,point:n}=this.pick(e);this.hoverObject=t,this.hoverPoint=n,this.renderer.domElement.style.cursor=t||this.mode!==`select`?`pointer`:`default`,this.mode.startsWith(`track`)&&this.trackStart&&this.drawTrackPreview(n,t)}clearPreview(){this.activeBundle.previewGroup.clear()}drawTrackPreview(e,t){this.clearPreview();let n=this.state.currentMap,r=this.activeMapState,i=r.nodes[this.trackStart];if(!i)return;let a=+this.mode.slice(5),o=e?.x??i.x,s=e?.z??i.z,c=null;t?.kind===`node`&&(c=r.nodes[t.id],o=c.x,s=c.z);let l=Math.hypot(o-i.x,s-i.z);if(l<.5)return;let u=n===`nyc`?bd(i.x,i.z,o,s):0,d=Ju(n,a,l,u,this.state),f=c&&c.station&&c.id!==i.id&&!r.edges[cp(i.id,c.id)],p=Jh[n].trackY+.15,m=new U(new Yr(.5*(n===`usa`?1.4:1),.1,l),new q({color:f?ku[a].color:c?16733525:16777215,transparent:!0,opacity:.65}));m.position.set((i.x+o)/2,p,(i.z+s)/2),m.rotation.y=Math.atan2(o-i.x,s-i.z),this.activeBundle.previewGroup.add(m);let h=u>.02?` (${Math.round(u*100)}% over water)`:``,g=Sh()?``:` · right-click cancels`;this.bindHintActions(`${$(`route`)} <b>${ku[a].name}</b> from <b>${i.name}</b>: <span class="cost">${J(d)}</span>${h}${g}`)}drawRoutePreview(){this.clearPreview();let e=this.routeDraft;if(!e||e.stops.length===0)return;let t=this.activeMapState,n=Jh[this.state.currentMap].trackY+.4,r=new q({color:16765527,transparent:!0,opacity:.8});for(let i of e.stops){let e=t.nodes[i],a=new U(new Rl(.8*Jh[this.state.currentMap].nodeScale,10,8),r);a.position.set(e.x,n+.6,e.z),this.activeBundle.previewGroup.add(a)}let i=e.stops.length>1?[...e.stops,e.stops[0]]:e.stops;for(let e=0;e<i.length-1;e++){let a=t.nodes[i[e]],o=t.nodes[i[e+1]],s=Math.hypot(o.x-a.x,o.z-a.z);if(s<.1)continue;let c=new U(new Yr(.25,.08,s),r);c.position.set((a.x+o.x)/2,n,(a.z+o.z)/2),c.rotation.y=Math.atan2(o.x-a.x,o.z-a.z),this.activeBundle.previewGroup.add(c)}}nextStepHint(){let e=this.activeMapState,t=Object.values(e.nodes).filter(e=>e.station).length,n=Object.keys(e.edges).length,r=Object.values(this.state.trains).filter(e=>e.map===this.state.currentMap),i=r.find(e=>e.route.length<2);if(t<2)return`${$(`station`)} Start with the <b>Station</b> tool: build stations at ${t===0?`two nearby stops`:`one more stop`}`;if(n===0)return`${$(`route`)} Pick a <b>track</b> type, then click one station and then another to connect them`;if(r.length===0)return`${$(`train`)} Press <b>B</b> or use <b>Buy train</b> to put your first train on the rails`;if(i)return`${$(`route`)} Train #${i.num} needs a route — tap its chip`;if(this.state.currentMap===`usa`){let e=this.state.maps.usa,t=Object.values(e.nodes).filter(e=>e.station).length,r=Object.values(e.nodes).some(e=>e.station&&e.rank>12);if(t>=2&&n>0&&!r)return`${$(`pin`)} <b>Expand your network</b> — build at a gray metro to chase milestones`}return null}updateHint(){let e=this.mode;if(e===`pan`)this.bindHintActions(`${$(`pan`)} Drag to move · pinch to zoom`);else if(e===`select`){let e=Sh()?this.mobileSelectHint(this.nextStepHint()):this.nextStepHint();if(!e&&Sh()){this.hud.setHint(``);return}let t=Sh()?``:` · press <b>0</b> or pick <b>Move</b> to drag-pan without Ctrl`;this.bindHintActions(e??`${$(`select`)} Click any <b>stop</b>, <b>track</b> or <b>train</b> to inspect${t}`)}else if(e===`station`){let e=this.state.currentMap===`usa`?` · gray metros <b>expand your network</b>`:``;this.bindHintActions(`${$(`station`)} Tap a stop to build a station${e}`)}else if(e.startsWith(`track`)){let t=+e.slice(5);this.trackStart||this.bindHintActions(`${$(`route`)} <b>${ku[t].name}:</b> tap the first station to start the line`)}else if(e===`bulldoze`)this.bindHintActions(`${$(`bulldoze`)} Tap a track segment to demolish it for a 25% refund`);else if(e===`route`){let e=this.routeDraft?.stops.length??0,t=this.state.trains[this.routeDraft?.trainId],n=t?ju[t.tier].short:``;this.bindHintActions(`${$(`route`)} <b>Route for ${n} #${t?.num??``}:</b> tap stations in order (${e} picked)`,{done:!0})}}onResize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Sh()?1.5:2)),this.renderer.setSize(e,t);for(let n of Object.values(this.bundles))n.camera.aspect=e/t,n.camera.updateProjectionMatrix()}loop(){requestAnimationFrame(()=>this.loop());let e=Math.min(this.clock.getDelta(),.1);wp(()=>Ym(this.state,e)),this.goalCheckAcc+=e,this.goalCheckAcc>=2&&(this.goalCheckAcc=0,this.processGoals());let t=this.state.currentMap,n=this.renderers[t];n.trains.update(),n.nodes.update(),Dh(this.bundles[t].scene,this.clock.elapsedTime),this.activeBundle.controls.update(),this.renderer.render(this.activeBundle.scene,this.activeBundle.camera)}};window.__errors=[],window.addEventListener(`error`,e=>window.__errors.push(String(e.error?.stack??e.message))),window.addEventListener(`unhandledrejection`,e=>window.__errors.push(String(e.reason))),window.game=new ov,requestAnimationFrame(()=>{document.getElementById(`boot`)?.classList.add(`done`)});export{ad as n,J as r,$ as t};