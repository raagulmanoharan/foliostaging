/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ve="srgb",Xi="srgb-linear",ys="linear",ee="srgb";const xa="300 es";class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ma=1234567;const pr=Math.PI/180,vr=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function Ko(i,t){return(i%t+t)%t}function tu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function eu(i,t,e){return i!==t?(e-i)/(t-i):0}function gr(i,t,e){return(1-e)*i+e*t}function nu(i,t,e,n){return gr(i,t,1-Math.exp(-e*n))}function iu(i,t=1){return t-Math.abs(Ko(i,t*2)-t)}function ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ou(i,t){return i+Math.floor(Math.random()*(t-i+1))}function au(i,t){return i+Math.random()*(t-i)}function lu(i){return i*(.5-Math.random())}function cu(i){i!==void 0&&(Ma=i);let t=Ma+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uu(i){return i*pr}function hu(i){return i*vr}function fu(i){return(i&i-1)===0&&i!==0}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gu(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),h=o(e/2),u=s((t+n)/2),d=o((t+n)/2),p=s((t-n)/2),g=o((t-n)/2),m=s((n-t)/2),y=o((n-t)/2);switch(r){case"XYX":i.set(a*d,h*p,h*g,a*u);break;case"YZY":i.set(h*g,a*d,h*p,a*u);break;case"ZXZ":i.set(h*p,h*g,a*d,a*u);break;case"XZX":i.set(a*d,h*y,h*m,a*u);break;case"YXY":i.set(h*m,a*d,h*y,a*u);break;case"ZYZ":i.set(h*y,h*m,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sa={DEG2RAD:pr,RAD2DEG:vr,generateUUID:Zi,clamp:kt,euclideanModulo:Ko,mapLinear:tu,inverseLerp:eu,lerp:gr,damp:nu,pingpong:iu,smoothstep:ru,smootherstep:su,randInt:ou,randFloat:au,randFloatSpread:lu,seededRandom:cu,degToRad:uu,radToDeg:hu,isPowerOfTwo:fu,ceilPowerOfTwo:du,floorPowerOfTwo:pu,setQuaternionFromProperEuler:gu,normalize:Ie,denormalize:Oi};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let h=n[r+0],u=n[r+1],d=n[r+2],p=n[r+3];const g=s[o+0],m=s[o+1],y=s[o+2],T=s[o+3];if(a===0){t[e+0]=h,t[e+1]=u,t[e+2]=d,t[e+3]=p;return}if(a===1){t[e+0]=g,t[e+1]=m,t[e+2]=y,t[e+3]=T;return}if(p!==T||h!==g||u!==m||d!==y){let v=1-a;const _=h*g+u*m+d*y+p*T,E=_>=0?1:-1,f=1-_*_;if(f>Number.EPSILON){const M=Math.sqrt(f),c=Math.atan2(M,_*E);v=Math.sin(v*c)/M,a=Math.sin(a*c)/M}const l=a*E;if(h=h*v+g*l,u=u*v+m*l,d=d*v+y*l,p=p*v+T*l,v===1-a){const M=1/Math.sqrt(h*h+u*u+d*d+p*p);h*=M,u*=M,d*=M,p*=M}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],h=n[r+1],u=n[r+2],d=n[r+3],p=s[o],g=s[o+1],m=s[o+2],y=s[o+3];return t[e]=a*y+d*p+h*m-u*g,t[e+1]=h*y+d*g+u*p-a*m,t[e+2]=u*y+d*m+a*g-h*p,t[e+3]=d*y-a*p-h*g-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,u=a(n/2),d=a(r/2),p=a(s/2),g=h(n/2),m=h(r/2),y=h(s/2);switch(o){case"XYZ":this._x=g*d*p+u*m*y,this._y=u*m*p-g*d*y,this._z=u*d*y+g*m*p,this._w=u*d*p-g*m*y;break;case"YXZ":this._x=g*d*p+u*m*y,this._y=u*m*p-g*d*y,this._z=u*d*y-g*m*p,this._w=u*d*p+g*m*y;break;case"ZXY":this._x=g*d*p-u*m*y,this._y=u*m*p+g*d*y,this._z=u*d*y+g*m*p,this._w=u*d*p-g*m*y;break;case"ZYX":this._x=g*d*p-u*m*y,this._y=u*m*p+g*d*y,this._z=u*d*y-g*m*p,this._w=u*d*p+g*m*y;break;case"YZX":this._x=g*d*p+u*m*y,this._y=u*m*p+g*d*y,this._z=u*d*y-g*m*p,this._w=u*d*p-g*m*y;break;case"XZY":this._x=g*d*p-u*m*y,this._y=u*m*p-g*d*y,this._z=u*d*y+g*m*p,this._w=u*d*p+g*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],u=e[2],d=e[6],p=e[10],g=n+a+p;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(d-h)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(d-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+d)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(h+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+o*a+r*u-s*h,this._y=r*d+o*h+s*a-n*u,this._z=s*d+o*u+n*h-r*a,this._w=o*d-n*a-r*h-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const h=1-a*a;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(h),d=Math.atan2(u,a),p=Math.sin((1-e)*d)/u,g=Math.sin(e*d)/u;return this._w=o*p+this._w*g,this._x=n*p+this._x*g,this._y=r*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,u=2*(o*r-a*n),d=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+h*u+o*p-a*d,this.y=n+h*d+a*u-s*p,this.z=r+h*p+s*d-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new L,ya=new Ue;class Wt{constructor(t,e,n,r,s,o,a,h,u){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,u)}set(t,e,n,r,s,o,a,h,u){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=h,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],h=n[6],u=n[1],d=n[4],p=n[7],g=n[2],m=n[5],y=n[8],T=r[0],v=r[3],_=r[6],E=r[1],f=r[4],l=r[7],M=r[2],c=r[5],C=r[8];return s[0]=o*T+a*E+h*M,s[3]=o*v+a*f+h*c,s[6]=o*_+a*l+h*C,s[1]=u*T+d*E+p*M,s[4]=u*v+d*f+p*c,s[7]=u*_+d*l+p*C,s[2]=g*T+m*E+y*M,s[5]=g*v+m*f+y*c,s[8]=g*_+m*l+y*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],d=t[8];return e*o*d-e*a*u-n*s*d+n*a*h+r*s*u-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],d=t[8],p=d*o-a*u,g=a*h-d*s,m=u*s-o*h,y=e*p+n*g+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=p*T,t[1]=(r*u-d*n)*T,t[2]=(a*n-r*o)*T,t[3]=g*T,t[4]=(d*e-r*h)*T,t[5]=(r*s-a*e)*T,t[6]=m*T,t[7]=(n*h-u*e)*T,t[8]=(o*e-n*s)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*o+u*a)+o+t,-r*u,r*h,-r*(-u*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fs.makeScale(t,e)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new Wt;function hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){const i=Ts("canvas");return i.style.display="block",i}const Ta={};function xr(i){i in Ta||(Ta[i]=!0,console.warn(i))}function _u(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ea=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Aa=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vu(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ee&&(r.r=Cn(r.r),r.g=Cn(r.g),r.b=Cn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:Ea,fromXYZ:Aa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Ea,fromXYZ:Aa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const Zt=vu();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class xu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=Ts("canvas")),di.width=t.width,di.height=t.height;const r=di.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mu=0;class Zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ns(r[o].image)):s.push(Ns(r[o]))}else s=Ns(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Su=0;const Bs=new L;class Fe extends Ki{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=1001,r=1001,s=1006,o=1008,a=1023,h=1009,u=Fe.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Zi(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bs).x}get height(){return this.source.getSize(Bs).y}get depth(){return this.source.getSize(Bs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=300;Fe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,r=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const h=t.elements,u=h[0],d=h[4],p=h[8],g=h[1],m=h[5],y=h[9],T=h[2],v=h[6],_=h[10];if(Math.abs(d-g)<.01&&Math.abs(p-T)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+g)<.1&&Math.abs(p+T)<.1&&Math.abs(y+v)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const f=(u+1)/2,l=(m+1)/2,M=(_+1)/2,c=(d+g)/4,C=(p+T)/4,w=(y+v)/4;return f>l&&f>M?f<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(f),r=c/n,s=C/n):l>M?l<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(l),n=c/r,s=w/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=w/s),this.set(n,r,s,e),this}let E=Math.sqrt((v-y)*(v-y)+(p-T)*(p-T)+(g-d)*(g-d));return Math.abs(E)<.001&&(E=1),this.x=(v-y)/E,this.y=(p-T)/E,this.z=(g-d)/E,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends Ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Fe(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Zo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fc extends Fe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends Fe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ne{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),br.subVectors(this.max,tr),pi.subVectors(t.a,tr),gi.subVectors(t.b,tr),mi.subVectors(t.c,tr),Dn.subVectors(gi,pi),In.subVectors(mi,gi),qn.subVectors(pi,mi);let e=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-qn.z,qn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,qn.z,0,-qn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-qn.y,qn.x,0];return!Os(e,pi,gi,mi,br)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,pi,gi,mi,br))?!1:(wr.crossVectors(Dn,In),e=[wr.x,wr.y,wr.z],Os(e,pi,gi,mi,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],on=new L,Ar=new Ne,pi=new L,gi=new L,mi=new L,Dn=new L,In=new L,qn=new L,tr=new L,br=new L,wr=new L,Yn=new L;function Os(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Yn.fromArray(i,s);const a=r.x*Math.abs(Yn.x)+r.y*Math.abs(Yn.y)+r.z*Math.abs(Yn.z),h=t.dot(Yn),u=e.dot(Yn),d=n.dot(Yn);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>a)return!1}return!0}const Eu=new Ne,er=new L,zs=new L;class jo{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(zs)),this.expandByPoint(er.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Sn=new L,Gs=new L,Rr=new L,Ln=new L,Vs=new L,Cr=new L,Hs=new L;class Sr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Gs.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Gs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Ln.dot(this.direction),h=-Ln.dot(Rr),u=Ln.lengthSq(),d=Math.abs(1-o*o);let p,g,m,y;if(d>0)if(p=o*h-a,g=o*a-h,y=s*d,p>=0)if(g>=-y)if(g<=y){const T=1/d;p*=T,g*=T,m=p*(p+o*g+2*a)+g*(o*p+g+2*h)+u}else g=s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+u;else g=-s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+u;else g<=-y?(p=Math.max(0,-(-o*s+a)),g=p>0?-s:Math.min(Math.max(-s,-h),s),m=-p*p+g*(g+2*h)+u):g<=y?(p=0,g=Math.min(Math.max(-s,-h),s),m=g*(g+2*h)+u):(p=Math.max(0,-(o*s+a)),g=p>0?s:Math.min(Math.max(-s,-h),s),m=-p*p+g*(g+2*h)+u);else g=o>0?-s:s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Gs).addScaledVector(Rr,g),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,h;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,g=this.origin;return u>=0?(n=(t.min.x-g.x)*u,r=(t.max.x-g.x)*u):(n=(t.max.x-g.x)*u,r=(t.min.x-g.x)*u),d>=0?(s=(t.min.y-g.y)*d,o=(t.max.y-g.y)*d):(s=(t.max.y-g.y)*d,o=(t.min.y-g.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-g.z)*p,h=(t.max.z-g.z)*p):(a=(t.max.z-g.z)*p,h=(t.min.z-g.z)*p),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,r,s){Vs.subVectors(e,t),Cr.subVectors(n,t),Hs.crossVectors(Vs,Cr);let o=this.direction.dot(Hs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const h=a*this.direction.dot(Cr.crossVectors(Ln,Cr));if(h<0)return null;const u=a*this.direction.dot(Vs.cross(Ln));if(u<0||h+u>o)return null;const d=-a*Ln.dot(Hs);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,s,o,a,h,u,d,p,g,m,y,T,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,u,d,p,g,m,y,T,v)}set(t,e,n,r,s,o,a,h,u,d,p,g,m,y,T,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=h,_[2]=u,_[6]=d,_[10]=p,_[14]=g,_[3]=m,_[7]=y,_[11]=T,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/_i.setFromMatrixColumn(t,0).length(),s=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const g=o*d,m=o*p,y=a*d,T=a*p;e[0]=h*d,e[4]=-h*p,e[8]=u,e[1]=m+y*u,e[5]=g-T*u,e[9]=-a*h,e[2]=T-g*u,e[6]=y+m*u,e[10]=o*h}else if(t.order==="YXZ"){const g=h*d,m=h*p,y=u*d,T=u*p;e[0]=g+T*a,e[4]=y*a-m,e[8]=o*u,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=m*a-y,e[6]=T+g*a,e[10]=o*h}else if(t.order==="ZXY"){const g=h*d,m=h*p,y=u*d,T=u*p;e[0]=g-T*a,e[4]=-o*p,e[8]=y+m*a,e[1]=m+y*a,e[5]=o*d,e[9]=T-g*a,e[2]=-o*u,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const g=o*d,m=o*p,y=a*d,T=a*p;e[0]=h*d,e[4]=y*u-m,e[8]=g*u+T,e[1]=h*p,e[5]=T*u+g,e[9]=m*u-y,e[2]=-u,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const g=o*h,m=o*u,y=a*h,T=a*u;e[0]=h*d,e[4]=T-g*p,e[8]=y*p+m,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-u*d,e[6]=m*p+y,e[10]=g-T*p}else if(t.order==="XZY"){const g=o*h,m=o*u,y=a*h,T=a*u;e[0]=h*d,e[4]=-p,e[8]=u*d,e[1]=g*p+T,e[5]=o*d,e[9]=m*p-y,e[2]=y*p-m,e[6]=a*d,e[10]=T*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,bu)}lookAt(t,e,n){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Un.crossVectors(n,qe),Un.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Un.crossVectors(n,qe)),Un.normalize(),Pr.crossVectors(qe,Un),r[0]=Un.x,r[4]=Pr.x,r[8]=qe.x,r[1]=Un.y,r[5]=Pr.y,r[9]=qe.y,r[2]=Un.z,r[6]=Pr.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],h=n[8],u=n[12],d=n[1],p=n[5],g=n[9],m=n[13],y=n[2],T=n[6],v=n[10],_=n[14],E=n[3],f=n[7],l=n[11],M=n[15],c=r[0],C=r[4],w=r[8],S=r[12],x=r[1],A=r[5],b=r[9],R=r[13],F=r[2],B=r[6],O=r[10],W=r[14],z=r[3],Z=r[7],st=r[11],et=r[15];return s[0]=o*c+a*x+h*F+u*z,s[4]=o*C+a*A+h*B+u*Z,s[8]=o*w+a*b+h*O+u*st,s[12]=o*S+a*R+h*W+u*et,s[1]=d*c+p*x+g*F+m*z,s[5]=d*C+p*A+g*B+m*Z,s[9]=d*w+p*b+g*O+m*st,s[13]=d*S+p*R+g*W+m*et,s[2]=y*c+T*x+v*F+_*z,s[6]=y*C+T*A+v*B+_*Z,s[10]=y*w+T*b+v*O+_*st,s[14]=y*S+T*R+v*W+_*et,s[3]=E*c+f*x+l*F+M*z,s[7]=E*C+f*A+l*B+M*Z,s[11]=E*w+f*b+l*O+M*st,s[15]=E*S+f*R+l*W+M*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],u=t[13],d=t[2],p=t[6],g=t[10],m=t[14],y=t[3],T=t[7],v=t[11],_=t[15];return y*(+s*h*p-r*u*p-s*a*g+n*u*g+r*a*m-n*h*m)+T*(+e*h*m-e*u*g+s*o*g-r*o*m+r*u*d-s*h*d)+v*(+e*u*p-e*a*m-s*o*p+n*o*m+s*a*d-n*u*d)+_*(-r*a*d-e*h*p+e*a*g+r*o*p-n*o*g+n*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],d=t[8],p=t[9],g=t[10],m=t[11],y=t[12],T=t[13],v=t[14],_=t[15],E=p*v*u-T*g*u+T*h*m-a*v*m-p*h*_+a*g*_,f=y*g*u-d*v*u-y*h*m+o*v*m+d*h*_-o*g*_,l=d*T*u-y*p*u+y*a*m-o*T*m-d*a*_+o*p*_,M=y*p*h-d*T*h-y*a*g+o*T*g+d*a*v-o*p*v,c=e*E+n*f+r*l+s*M;if(c===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/c;return t[0]=E*C,t[1]=(T*g*s-p*v*s-T*r*m+n*v*m+p*r*_-n*g*_)*C,t[2]=(a*v*s-T*h*s+T*r*u-n*v*u-a*r*_+n*h*_)*C,t[3]=(p*h*s-a*g*s-p*r*u+n*g*u+a*r*m-n*h*m)*C,t[4]=f*C,t[5]=(d*v*s-y*g*s+y*r*m-e*v*m-d*r*_+e*g*_)*C,t[6]=(y*h*s-o*v*s-y*r*u+e*v*u+o*r*_-e*h*_)*C,t[7]=(o*g*s-d*h*s+d*r*u-e*g*u-o*r*m+e*h*m)*C,t[8]=l*C,t[9]=(y*p*s-d*T*s-y*n*m+e*T*m+d*n*_-e*p*_)*C,t[10]=(o*T*s-y*a*s+y*n*u-e*T*u-o*n*_+e*a*_)*C,t[11]=(d*a*s-o*p*s-d*n*u+e*p*u+o*n*m-e*a*m)*C,t[12]=M*C,t[13]=(d*T*r-y*p*r+y*n*g-e*T*g-d*n*v+e*p*v)*C,t[14]=(y*a*r-o*T*r-y*n*h+e*T*h+o*n*v-e*a*v)*C,t[15]=(o*p*r-d*a*r+d*n*h-e*p*h-o*n*g+e*a*g)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,h=t.z,u=s*o,d=s*a;return this.set(u*o+n,u*a-r*h,u*h+r*a,0,u*a+r*h,d*a+n,d*h-r*o,0,u*h-r*a,d*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,u=s+s,d=o+o,p=a+a,g=s*u,m=s*d,y=s*p,T=o*d,v=o*p,_=a*p,E=h*u,f=h*d,l=h*p,M=n.x,c=n.y,C=n.z;return r[0]=(1-(T+_))*M,r[1]=(m+l)*M,r[2]=(y-f)*M,r[3]=0,r[4]=(m-l)*c,r[5]=(1-(g+_))*c,r[6]=(v+E)*c,r[7]=0,r[8]=(y+f)*C,r[9]=(v-E)*C,r[10]=(1-(g+T))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=_i.set(r[0],r[1],r[2]).length();const o=_i.set(r[4],r[5],r[6]).length(),a=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],an.copy(this);const u=1/s,d=1/o,p=1/a;return an.elements[0]*=u,an.elements[1]*=u,an.elements[2]*=u,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=p,an.elements[9]*=p,an.elements[10]*=p,e.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=2e3,h=!1){const u=this.elements,d=2*s/(e-t),p=2*s/(n-r),g=(e+t)/(e-t),m=(n+r)/(n-r);let y,T;if(h)y=s/(o-s),T=o*s/(o-s);else if(a===2e3)y=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(a===2001)y=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=2e3,h=!1){const u=this.elements,d=2/(e-t),p=2/(n-r),g=-(e+t)/(e-t),m=-(n+r)/(n-r);let y,T;if(h)y=1/(o-s),T=o/(o-s);else if(a===2e3)y=-2/(o-s),T=-(o+s)/(o-s);else if(a===2001)y=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new L,an=new jt,Au=new L(0,0,0),bu=new L(1,1,1),Un=new L,Pr=new L,qe=new L,ba=new jt,wa=new Ue;class sn{constructor(t=0,e=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],u=r[5],d=r[9],p=r[2],g=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wa.setFromEuler(this),this.setFromQuaternion(wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const Ra=new L,vi=new Ue,yn=new jt,Dr=new L,nr=new L,Ru=new L,Cu=new Ue,Ca=new L(1,0,0),Pa=new L(0,1,0),Da=new L(0,0,1),Ia={type:"added"},Pu={type:"removed"},xi={type:"childadded",child:null},ks={type:"childremoved",child:null};class Ke extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new L,e=new sn,n=new Ue,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Wt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(nr,Dr,this.up):yn.lookAt(Dr,nr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(yn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ia),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pu),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ia),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){const p=h[u];s(t.shapes,p)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,u=this.material.length;h<u;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),u=o(t.textures),d=o(t.images),p=o(t.shapes),g=o(t.skeletons),m=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const h=[];for(const u in a){const d=a[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ke.DEFAULT_UP=new L(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new L,Tn=new L,Ws=new L,En=new L,Mi=new L,Si=new L,La=new L,Xs=new L,qs=new L,Ys=new L,$s=new re,Ks=new re,Zs=new re;class oe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ln.subVectors(r,e),Tn.subVectors(n,e),Ws.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Tn),h=ln.dot(Ws),u=Tn.dot(Tn),d=Tn.dot(Ws),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const g=1/p,m=(u*h-a*d)*g,y=(o*d-a*h)*g;return s.set(1-m-y,y,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,r,s,o,a,h){return this.getBarycoord(t,e,n,r,En)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,En.x),h.addScaledVector(o,En.y),h.addScaledVector(a,En.z),h)}static getInterpolatedAttribute(t,e,n,r,s,o){return $s.setScalar(0),Ks.setScalar(0),Zs.setScalar(0),$s.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector($s,s.x),o.addScaledVector(Ks,s.y),o.addScaledVector(Zs,s.z),o}static isFrontFacing(t,e,n,r){return ln.subVectors(n,e),Tn.subVectors(t,e),ln.cross(Tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return oe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Mi.subVectors(r,n),Si.subVectors(s,n),Xs.subVectors(t,n);const h=Mi.dot(Xs),u=Si.dot(Xs);if(h<=0&&u<=0)return e.copy(n);qs.subVectors(t,r);const d=Mi.dot(qs),p=Si.dot(qs);if(d>=0&&p<=d)return e.copy(r);const g=h*p-d*u;if(g<=0&&h>=0&&d<=0)return o=h/(h-d),e.copy(n).addScaledVector(Mi,o);Ys.subVectors(t,s);const m=Mi.dot(Ys),y=Si.dot(Ys);if(y>=0&&m<=y)return e.copy(s);const T=m*u-h*y;if(T<=0&&u>=0&&y<=0)return a=u/(u-y),e.copy(n).addScaledVector(Si,a);const v=d*y-m*p;if(v<=0&&p-d>=0&&m-y>=0)return La.subVectors(s,r),a=(p-d)/(p-d+(m-y)),e.copy(r).addScaledVector(La,a);const _=1/(v+T+g);return o=T*_,a=g*_,e.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=Ko(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=js(o,s,t+1/3),this.g=js(o,s,t),this.b=js(o,s,t-1/3)}return Zt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Zt.workingToColorSpace(be.copy(this),t),Math.round(kt(be.r*255,0,255))*65536+Math.round(kt(be.g*255,0,255))*256+Math.round(kt(be.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(be.copy(this),e);const n=be.r,r=be.g,s=be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let h,u;const d=(a+o)/2;if(a===o)h=0,u=0;else{const p=o-a;switch(u=d<=.5?p/(o+a):p/(2-o-a),o){case n:h=(r-s)/p+(r<s?6:0);break;case r:h=(s-n)/p+2;break;case s:h=(n-r)/p+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ve){Zt.workingToColorSpace(be.copy(this),t);const e=be.r,n=be.g,r=be.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ir);const n=gr(Fn.h,Ir.h,e),r=gr(Fn.s,Ir.s,e),s=gr(Fn.l,Ir.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Yt;Yt.NAMES=dc;let Du=0;class yr extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oi extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new L,Lr=new It;let Iu=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),r=Ie(r,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class pc extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gc extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lu=0;const Qe=new jt,Js=new Ke,yi=new L,Ye=new Ne,ir=new Ne,Se=new L;class pn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?gc:pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ye.min,ir.min),Ye.expandByPoint(Se),Se.addVectors(Ye.max,ir.max),Ye.expandByPoint(Se)):(Ye.expandByPoint(ir.min),Ye.expandByPoint(ir.max))}Ye.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],h=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Se.fromBufferAttribute(a,u),h&&(yi.fromBufferAttribute(t,u),Se.add(yi)),r=Math.max(r,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let w=0;w<n.count;w++)a[w]=new L,h[w]=new L;const u=new L,d=new L,p=new L,g=new It,m=new It,y=new It,T=new L,v=new L;function _(w,S,x){u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,x),g.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),y.fromBufferAttribute(s,x),d.sub(u),p.sub(u),m.sub(g),y.sub(g);const A=1/(m.x*y.y-y.x*m.y);isFinite(A)&&(T.copy(d).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(A),v.copy(p).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(A),a[w].add(T),a[S].add(T),a[x].add(T),h[w].add(v),h[S].add(v),h[x].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,S=E.length;w<S;++w){const x=E[w],A=x.start,b=x.count;for(let R=A,F=A+b;R<F;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const f=new L,l=new L,M=new L,c=new L;function C(w){M.fromBufferAttribute(r,w),c.copy(M);const S=a[w];f.copy(S),f.sub(M.multiplyScalar(M.dot(S))).normalize(),l.crossVectors(c,S);const A=l.dot(h[w])<0?-1:1;o.setXYZW(w,f.x,f.y,f.z,A)}for(let w=0,S=E.length;w<S;++w){const x=E[w],A=x.start,b=x.count;for(let R=A,F=A+b;R<F;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,m=n.count;g<m;g++)n.setXYZ(g,0,0,0);const r=new L,s=new L,o=new L,a=new L,h=new L,u=new L,d=new L,p=new L;if(t)for(let g=0,m=t.count;g<m;g+=3){const y=t.getX(g+0),T=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,T),o.fromBufferAttribute(e,v),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,v),a.add(d),h.add(d),u.add(d),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let g=0,m=e.count;g<m;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,h){const u=a.array,d=a.itemSize,p=a.normalized,g=new u.constructor(h.length*d);let m=0,y=0;for(let T=0,v=h.length;T<v;T++){a.isInterleavedBufferAttribute?m=h[T]*a.data.stride+a.offset:m=h[T]*d;for(let _=0;_<d;_++)g[y++]=u[m++]}return new He(g,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,r=this.attributes;for(const a in r){const h=r[a],u=t(h,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const h=[],u=s[a];for(let d=0,p=u.length;d<p;d++){const g=u[d],m=t(g,n);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const u=n[h];t.data.attributes[h]=u.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],d=[];for(let p=0,g=u.length;p<g;p++){const m=u[p];d.push(m.toJSON(t.data))}d.length>0&&(r[h]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(e))}const s=t.morphAttributes;for(const u in s){const d=[],p=s[u];for(let g=0,m=p.length;g<m;g++)d.push(p[g].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new jt,$n=new Sr,Ur=new jo,Fa=new L,Fr=new L,Nr=new L,Br=new L,Qs=new L,Or=new L,Na=new L,zr=new L;class we extends Ke{constructor(t=new pn,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Or.set(0,0,0);for(let h=0,u=s.length;h<u;h++){const d=a[h],p=s[h];d!==0&&(Qs.fromBufferAttribute(p,t),o?Or.addScaledVector(Qs,d):Or.addScaledVector(Qs.sub(e),d))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),$n.copy(t.ray).recast(t.near),!(Ur.containsPoint($n.origin)===!1&&($n.intersectSphere(Ur,Fa)===null||$n.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Ua.copy(s).invert(),$n.copy(t.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,g=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,T=g.length;y<T;y++){const v=g[y],_=o[v.materialIndex],E=Math.max(v.start,m.start),f=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let l=E,M=f;l<M;l+=3){const c=a.getX(l),C=a.getX(l+1),w=a.getX(l+2);r=Gr(this,_,t,n,u,d,p,c,C,w),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,m.start),T=Math.min(a.count,m.start+m.count);for(let v=y,_=T;v<_;v+=3){const E=a.getX(v),f=a.getX(v+1),l=a.getX(v+2);r=Gr(this,o,t,n,u,d,p,E,f,l),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let y=0,T=g.length;y<T;y++){const v=g[y],_=o[v.materialIndex],E=Math.max(v.start,m.start),f=Math.min(h.count,Math.min(v.start+v.count,m.start+m.count));for(let l=E,M=f;l<M;l+=3){const c=l,C=l+1,w=l+2;r=Gr(this,_,t,n,u,d,p,c,C,w),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,m.start),T=Math.min(h.count,m.start+m.count);for(let v=y,_=T;v<_;v+=3){const E=v,f=v+1,l=v+2;r=Gr(this,o,t,n,u,d,p,E,f,l),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function Uu(i,t,e,n,r,s,o,a){let h;if(t.side===1?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,t.side===0,a),h===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(zr);return u<e.near||u>e.far?null:{distance:u,point:zr.clone(),object:i}}function Gr(i,t,e,n,r,s,o,a,h,u){i.getVertexPosition(a,Fr),i.getVertexPosition(h,Nr),i.getVertexPosition(u,Br);const d=Uu(i,t,e,n,Fr,Nr,Br,Na);if(d){const p=new L;oe.getBarycoord(Na,Fr,Nr,Br,p),r&&(d.uv=oe.getInterpolatedAttribute(r,a,h,u,p,new It)),s&&(d.uv1=oe.getInterpolatedAttribute(s,a,h,u,p,new It)),o&&(d.normal=oe.getInterpolatedAttribute(o,a,h,u,p,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const g={a,b:h,c:u,normal:new L,materialIndex:0};oe.getNormal(Fr,Nr,Br,g.normal),d.face=g,d.barycoord=p}return d}class hi extends pn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let g=0,m=0;y("z","y","x",-1,-1,n,e,t,o,s,0),y("z","y","x",1,-1,n,e,-t,o,s,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2));function y(T,v,_,E,f,l,M,c,C,w,S){const x=l/C,A=M/w,b=l/2,R=M/2,F=c/2,B=C+1,O=w+1;let W=0,z=0;const Z=new L;for(let st=0;st<O;st++){const et=st*A-R;for(let dt=0;dt<B;dt++){const At=dt*x-b;Z[T]=At*E,Z[v]=et*f,Z[_]=F,u.push(Z.x,Z.y,Z.z),Z[T]=0,Z[v]=0,Z[_]=c>0?1:-1,d.push(Z.x,Z.y,Z.z),p.push(dt/C),p.push(1-st/w),W+=1}}for(let st=0;st<w;st++)for(let et=0;et<C;et++){const dt=g+et+B*st,At=g+et+B*(st+1),yt=g+(et+1)+B*(st+1),_t=g+(et+1)+B*st;h.push(dt,At,_t),h.push(At,yt,_t),z+=6}a.addGroup(m,z,S),m+=z,g+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const r in n)t[r]=n[r]}return t}function Fu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Mr={clone:qi,merge:Le};var Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _c extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new L,Ba=new It,Oa=new It;class nn extends _c{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Ba,Oa),e.subVectors(Oa,Ba)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*n/u,r*=o.width/h,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ei=1;class vc extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Ti,Ei,t,e);r.layers=this.layers,this.add(r);const s=new nn(Ti,Ei,t,e);s.layers=this.layers,this.add(s);const o=new nn(Ti,Ei,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ti,Ei,t,e);a.layers=this.layers,this.add(a);const h=new nn(Ti,Ei,t,e);h.layers=this.layers,this.add(h);const u=new nn(Ti,Ei,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,h]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,u,d]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(p,g,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class xc extends Fe{constructor(t=[],e=301,n,r,s,o,a,h,u,d){super(t,e,n,r,s,o,a,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mc extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new xc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new Re({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const o=new we(r,s),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class ai extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ou={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const T of t.hand.values()){const v=e.getJointPose(T,n),_=this._getHandJoint(u,T);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],g=d.position.distanceTo(p.position),m=.02,y=.005;u.inputState.pinching&&g>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&g<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class za extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const eo=new L,zu=new L,Gu=new Wt;class fn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=eo.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(eo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gu.getNormalMatrix(t),r=this.coplanarPoint(eo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new jo,Vu=new It(.5,.5),Vr=new L;class Sc{constructor(t=new fn,e=new fn,n=new fn,r=new fn,s=new fn,o=new fn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],h=s[2],u=s[3],d=s[4],p=s[5],g=s[6],m=s[7],y=s[8],T=s[9],v=s[10],_=s[11],E=s[12],f=s[13],l=s[14],M=s[15];if(r[0].setComponents(u-o,m-d,_-y,M-E).normalize(),r[1].setComponents(u+o,m+d,_+y,M+E).normalize(),r[2].setComponents(u+a,m+p,_+T,M+f).normalize(),r[3].setComponents(u-a,m-p,_-T,M-f).normalize(),n)r[4].setComponents(h,g,v,l).normalize(),r[5].setComponents(u-h,m-g,_-v,M-l).normalize();else if(r[4].setComponents(u-h,m-g,_-v,M-l).normalize(),e===2e3)r[5].setComponents(u+h,m+g,_+v,M+l).normalize();else if(e===2001)r[5].setComponents(h,g,v,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);const e=Vu.distanceTo(t.center);return Kn.radius=.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Vr.x=r.normal.x>0?t.max.x:t.min.x,Vr.y=r.normal.y>0?t.max.y:t.min.y,Vr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hu extends Fe{constructor(t,e,n,r,s=1006,o=1006,a,h,u){super(t,e,n,r,s,o,a,h,u),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const d=this;function p(){d.needsUpdate=!0,d._requestVideoFrameCallbackId=t.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(p))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class yc extends Fe{constructor(t,e,n=1014,r,s,o,a=1003,h=1003,u,d=1026,p=1){if(d!==1026&&d!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,r,s,o,a,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tc extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qo extends pn{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=kt(r,0,Math.PI*2);const s=[],o=[],a=[],h=[],u=[],d=1/e,p=new L,g=new It,m=new L,y=new L,T=new L;let v=0,_=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:v=t[E+1].x-t[E].x,_=t[E+1].y-t[E].y,m.x=_*1,m.y=-v,m.z=_*0,T.copy(m),m.normalize(),h.push(m.x,m.y,m.z);break;case t.length-1:h.push(T.x,T.y,T.z);break;default:v=t[E+1].x-t[E].x,_=t[E+1].y-t[E].y,m.x=_*1,m.y=-v,m.z=_*0,y.copy(m),m.x+=T.x,m.y+=T.y,m.z+=T.z,m.normalize(),h.push(m.x,m.y,m.z),T.copy(y)}for(let E=0;E<=e;E++){const f=n+E*d*r,l=Math.sin(f),M=Math.cos(f);for(let c=0;c<=t.length-1;c++){p.x=t[c].x*l,p.y=t[c].y,p.z=t[c].x*M,o.push(p.x,p.y,p.z),g.x=E/e,g.y=c/(t.length-1),a.push(g.x,g.y);const C=h[3*c+0]*l,w=h[3*c+1],S=h[3*c+0]*M;u.push(C,w,S)}}for(let E=0;E<e;E++)for(let f=0;f<t.length-1;f++){const l=f+E*t.length,M=l,c=l+t.length,C=l+t.length+1,w=l+1;s.push(M,c,w),s.push(C,w,c)}this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.points,t.segments,t.phiStart,t.phiLength)}}class Yi extends pn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),h=Math.floor(r),u=a+1,d=h+1,p=t/a,g=e/h,m=[],y=[],T=[],v=[];for(let _=0;_<d;_++){const E=_*g-o;for(let f=0;f<u;f++){const l=f*p-s;y.push(l,-E,0),T.push(0,0,1),v.push(f/a),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let E=0;E<a;E++){const f=E+u*_,l=E+u*(_+1),M=E+1+u*(_+1),c=E+1+u*_;m.push(f,l,c),m.push(l,M,c)}this.setIndex(m),this.setAttribute("position",new Te(y,3)),this.setAttribute("normal",new Te(T,3)),this.setAttribute("uv",new Te(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ta extends pn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+a,Math.PI);let u=0;const d=[],p=new L,g=new L,m=[],y=[],T=[],v=[];for(let _=0;_<=n;_++){const E=[],f=_/n;let l=0;_===0&&o===0?l=.5/e:_===n&&h===Math.PI&&(l=-.5/e);for(let M=0;M<=e;M++){const c=M/e;p.x=-t*Math.cos(r+c*s)*Math.sin(o+f*a),p.y=t*Math.cos(o+f*a),p.z=t*Math.sin(r+c*s)*Math.sin(o+f*a),y.push(p.x,p.y,p.z),g.copy(p).normalize(),T.push(g.x,g.y,g.z),v.push(c+l,1-f),E.push(u++)}d.push(E)}for(let _=0;_<n;_++)for(let E=0;E<e;E++){const f=d[_][E+1],l=d[_][E],M=d[_+1][E],c=d[_+1][E+1];(_!==0||o>0)&&m.push(f,l,c),(_!==n-1||h<Math.PI)&&m.push(l,M,c)}this.setIndex(m),this.setAttribute("position",new Te(y,3)),this.setAttribute("normal",new Te(T,3)),this.setAttribute("uv",new Te(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ea extends pn{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],h=[],u=[],d=new L,p=new L,g=new L;for(let m=0;m<=n;m++)for(let y=0;y<=r;y++){const T=y/r*s,v=m/n*Math.PI*2;p.x=(t+e*Math.cos(v))*Math.cos(T),p.y=(t+e*Math.cos(v))*Math.sin(T),p.z=e*Math.sin(v),a.push(p.x,p.y,p.z),d.x=t*Math.cos(T),d.y=t*Math.sin(T),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),u.push(y/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let y=1;y<=r;y++){const T=(r+1)*m+y-1,v=(r+1)*(m-1)+y-1,_=(r+1)*(m-1)+y,E=(r+1)*m+y;o.push(T,v,E),o.push(v,_,E)}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ku extends Re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wu extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xu extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qu extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ec extends _c{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,h=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yu extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ac{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ga=new jt;class $u{constructor(t,e,n=0,r=1/0){this.ray=new Sr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ga.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ga),this}intersectObject(t,e=!0,n=[]){return Fo(t,this,n,e),n.sort(Va),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Fo(t[r],this,n,e);return n.sort(Va),n}}function Va(i,t){return i.distance-t.distance}function Fo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Fo(s[o],t,e,!0)}}const Ha=new L,Hr=new L,Ai=new L,bi=new L,no=new L,Ku=new L,Zu=new L;class Ee{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ha.subVectors(t,this.start),Hr.subVectors(this.end,this.start);const n=Hr.dot(Hr);let s=Hr.dot(Ha)/n;return e&&(s=kt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Ku,n=Zu){const r=10000000000000001e-32;let s,o;const a=this.start,h=t.start,u=this.end,d=t.end;Ai.subVectors(u,a),bi.subVectors(d,h),no.subVectors(a,h);const p=Ai.dot(Ai),g=bi.dot(bi),m=bi.dot(no);if(p<=r&&g<=r)return e.copy(a),n.copy(h),e.sub(n),e.dot(e);if(p<=r)s=0,o=m/g,o=kt(o,0,1);else{const y=Ai.dot(no);if(g<=r)o=0,s=kt(-y/p,0,1);else{const T=Ai.dot(bi),v=p*g-T*T;v!==0?s=kt((T*m-y*g)/v,0,1):s=0,o=(T*s+m)/g,o<0?(o=0,s=kt(-y/p,0,1)):o>1&&(o=1,s=kt((T-y)/p,0,1))}}return e.copy(a).add(Ai.multiplyScalar(s)),n.copy(h).add(bi.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ka(i,t,e,n){const r=ju(n);switch(e){case 1021:return i*t;case 1028:return i*t/r.components*r.byteLength;case 1029:return i*t/r.components*r.byteLength;case 1030:return i*t*2/r.components*r.byteLength;case 1031:return i*t*2/r.components*r.byteLength;case 1022:return i*t*3/r.components*r.byteLength;case 1023:return i*t*4/r.components*r.byteLength;case 1033:return i*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ju(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Ju(i){const t=new WeakMap;function e(a,h){const u=a.array,d=a.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,h,u){const d=h.array,p=h.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,d);else{p.sort((m,y)=>m.start-y.start);let g=0;for(let m=1;m<p.length;m++){const y=p[g],T=p[m];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++g,p[g]=T)}p.length=g+1;for(let m=0,y=p.length;m<y;m++){const T=p[m];i.bufferSubData(u,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,h));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,h),u.version=a.version}}return{get:r,remove:s,update:o}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
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
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`#ifdef USE_BATCHING
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
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yh=`#define PI 3.141592653589793
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zh=`PhysicalMaterial material;
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
#endif`,jh=`struct PhysicalMaterial {
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
}`,Jh=`
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ad=`#define DISTANCE
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
}`,ld=`#define DISTANCE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
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
}`,fd=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,pd=`uniform vec3 diffuse;
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
}`,gd=`#define LAMBERT
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
}`,md=`#define LAMBERT
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
}`,_d=`#define MATCAP
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
}`,vd=`#define MATCAP
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
}`,xd=`#define NORMAL
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
}`,Md=`#define NORMAL
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
}`,Sd=`#define PHONG
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
}`,yd=`#define PHONG
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
}`,Td=`#define STANDARD
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
}`,Ed=`#define STANDARD
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
}`,Ad=`#define TOON
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
}`,bd=`#define TOON
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
}`,wd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Cd=`#include <common>
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
}`,Pd=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Id=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Qu,alphahash_pars_fragment:th,alphamap_fragment:eh,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:sh,aomap_pars_fragment:oh,batching_pars_vertex:ah,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:uh,bsdfs:hh,iridescence_fragment:fh,bumpmap_pars_fragment:dh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:mh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:Mh,color_vertex:Sh,common:yh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Ah,displacementmap_vertex:bh,emissivemap_fragment:wh,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Ph,envmap_fragment:Dh,envmap_common_pars_fragment:Ih,envmap_pars_fragment:Lh,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Xh,envmap_vertex:Fh,fog_vertex:Nh,fog_pars_vertex:Bh,fog_fragment:Oh,fog_pars_fragment:zh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:kh,lights_pars_begin:Wh,lights_toon_fragment:qh,lights_toon_pars_fragment:Yh,lights_phong_fragment:$h,lights_phong_pars_fragment:Kh,lights_physical_fragment:Zh,lights_physical_pars_fragment:jh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:tf,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:sf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:hf,morphinstance_vertex:ff,morphcolor_vertex:df,morphnormal_vertex:pf,morphtarget_pars_vertex:gf,morphtarget_vertex:mf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Af,iridescence_pars_fragment:bf,opaque_fragment:wf,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Pf,dithering_fragment:Df,dithering_pars_fragment:If,roughnessmap_fragment:Lf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Nf,shadowmap_vertex:Bf,shadowmask_pars_fragment:Of,skinbase_vertex:zf,skinning_pars_vertex:Gf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:kf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:jf,worldpos_vertex:Jf,background_vert:Qf,background_frag:td,backgroundCube_vert:ed,backgroundCube_frag:nd,cube_vert:id,cube_frag:rd,depth_vert:sd,depth_frag:od,distanceRGBA_vert:ad,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:ud,linedashed_vert:hd,linedashed_frag:fd,meshbasic_vert:dd,meshbasic_frag:pd,meshlambert_vert:gd,meshlambert_frag:md,meshmatcap_vert:_d,meshmatcap_frag:vd,meshnormal_vert:xd,meshnormal_frag:Md,meshphong_vert:Sd,meshphong_frag:yd,meshphysical_vert:Td,meshphysical_frag:Ed,meshtoon_vert:Ad,meshtoon_frag:bd,points_vert:wd,points_frag:Rd,shadow_vert:Cd,shadow_frag:Pd,sprite_vert:Dd,sprite_frag:Id},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},mn={basic:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Le([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Le([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Le([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Le([St.points,St.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Le([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Le([St.common,St.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Le([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Le([St.sprite,St.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Le([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Le([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};mn.physical={uniforms:Le([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const kr={r:0,b:0,g:0},Zn=new sn,Ld=new jt;function Ud(i,t,e,n,r,s,o){const a=new Yt(0);let h=s===!0?0:1,u,d,p=null,g=0,m=null;function y(f){let l=f.isScene===!0?f.background:null;return l&&l.isTexture&&(l=(f.backgroundBlurriness>0?e:t).get(l)),l}function T(f){let l=!1;const M=y(f);M===null?_(a,h):M&&M.isColor&&(_(M,1),l=!0);const c=i.xr.getEnvironmentBlendMode();c==="additive"?n.buffers.color.setClear(0,0,0,1,o):c==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||l)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(f,l){const M=y(l);M&&(M.isCubeTexture||M.mapping===306)?(d===void 0&&(d=new we(new hi(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:qi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(c,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Zn.copy(l.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ld.makeRotationFromEuler(Zn)),d.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ee,(p!==M||g!==M.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=M,g=M.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new we(new Yi(2,2),new Re({name:"BackgroundMaterial",uniforms:qi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,u.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||g!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=M,g=M.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function _(f,l){f.getRGB(kr,mc(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,l,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(f,l=1){a.set(f),h=l,_(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(a,h)},render:T,addToRenderList:v,dispose:E}}function Fd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function a(x,A,b,R,F){let B=!1;const O=p(R,b,A);s!==O&&(s=O,u(s.object)),B=m(x,R,b,F),B&&y(x,R,b,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,l(x,A,b,R),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function h(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function p(x,A,b){const R=b.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let B=F[A.id];B===void 0&&(B={},F[A.id]=B);let O=B[R];return O===void 0&&(O=g(h()),B[R]=O),O}function g(x){const A=[],b=[],R=[];for(let F=0;F<e;F++)A[F]=0,b[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:b,attributeDivisors:R,object:x,attributes:{},index:null}}function m(x,A,b,R){const F=s.attributes,B=A.attributes;let O=0;const W=b.getAttributes();for(const z in W)if(W[z].location>=0){const st=F[z];let et=B[z];if(et===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),st===void 0||st.attribute!==et||et&&st.data!==et.data)return!0;O++}return s.attributesNum!==O||s.index!==R}function y(x,A,b,R){const F={},B=A.attributes;let O=0;const W=b.getAttributes();for(const z in W)if(W[z].location>=0){let st=B[z];st===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const et={};et.attribute=st,st&&st.data&&(et.data=st.data),F[z]=et,O++}s.attributes=F,s.attributesNum=O,s.index=R}function T(){const x=s.newAttributes;for(let A=0,b=x.length;A<b;A++)x[A]=0}function v(x){_(x,0)}function _(x,A){const b=s.newAttributes,R=s.enabledAttributes,F=s.attributeDivisors;b[x]=1,R[x]===0&&(i.enableVertexAttribArray(x),R[x]=1),F[x]!==A&&(i.vertexAttribDivisor(x,A),F[x]=A)}function E(){const x=s.newAttributes,A=s.enabledAttributes;for(let b=0,R=A.length;b<R;b++)A[b]!==x[b]&&(i.disableVertexAttribArray(b),A[b]=0)}function f(x,A,b,R,F,B,O){O===!0?i.vertexAttribIPointer(x,A,b,F,B):i.vertexAttribPointer(x,A,b,R,F,B)}function l(x,A,b,R){T();const F=R.attributes,B=b.getAttributes(),O=A.defaultAttributeValues;for(const W in B){const z=B[W];if(z.location>=0){let Z=F[W];if(Z===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const st=Z.normalized,et=Z.itemSize,dt=t.get(Z);if(dt===void 0)continue;const At=dt.buffer,yt=dt.type,_t=dt.bytesPerElement,H=yt===i.INT||yt===i.UNSIGNED_INT||Z.gpuType===1013;if(Z.isInterleavedBufferAttribute){const $=Z.data,rt=$.stride,ut=Z.offset;if($.isInstancedInterleavedBuffer){for(let at=0;at<z.locationSize;at++)_(z.location+at,$.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let at=0;at<z.locationSize;at++)v(z.location+at);i.bindBuffer(i.ARRAY_BUFFER,At);for(let at=0;at<z.locationSize;at++)f(z.location+at,et/z.locationSize,yt,st,rt*_t,(ut+et/z.locationSize*at)*_t,H)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)_(z.location+$,Z.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<z.locationSize;$++)v(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,At);for(let $=0;$<z.locationSize;$++)f(z.location+$,et/z.locationSize,yt,st,et*_t,et/z.locationSize*$*_t,H)}}else if(O!==void 0){const st=O[W];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(z.location,st);break;case 3:i.vertexAttrib3fv(z.location,st);break;case 4:i.vertexAttrib4fv(z.location,st);break;default:i.vertexAttrib1fv(z.location,st)}}}}E()}function M(){w();for(const x in n){const A=n[x];for(const b in A){const R=A[b];for(const F in R)d(R[F].object),delete R[F];delete A[b]}delete n[x]}}function c(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const b in A){const R=A[b];for(const F in R)d(R[F].object),delete R[F];delete A[b]}delete n[x.id]}function C(x){for(const A in n){const b=n[A];if(b[x.id]===void 0)continue;const R=b[x.id];for(const F in R)d(R[F].object),delete R[F];delete b[x.id]}}function w(){S(),o=!0,s!==r&&(s=r,u(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:c,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:v,disableUnusedAttributes:E}}function Nd(i,t,e){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),e.update(d,n,1)}function o(u,d,p){p!==0&&(i.drawArraysInstanced(n,u,d,p),e.update(d,n,p))}function a(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];e.update(m,n,1)}function h(u,d,p,g){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<u.length;y++)o(u[y],d[y],g[y]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,d,0,g,0,p);let y=0;for(let T=0;T<p;T++)y+=d[T]*g[T];e.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Bd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!w)}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=h(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),l=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=y>0,c=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:E,maxVaryings:f,maxFragmentUniforms:l,vertexTextures:M,maxSamples:c}}function Od(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new fn,a=new Wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const m=p.length!==0||g||n!==0||r;return r=g,n=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){e=d(p,g,0)},this.setState=function(p,g,m){const y=p.clippingPlanes,T=p.clipIntersection,v=p.clipShadows,_=i.get(p);if(!r||y===null||y.length===0||s&&!v)s?d(null):u();else{const E=s?0:n,f=E*4;let l=_.clippingState||null;h.value=l,l=d(y,g,f,m);for(let M=0;M!==f;++M)l[M]=e[M];_.clippingState=l,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,g,m,y){const T=p!==null?p.length:0;let v=null;if(T!==0){if(v=h.value,y!==!0||v===null){const _=m+T*4,E=g.matrixWorldInverse;a.getNormalMatrix(E),(v===null||v.length<_)&&(v=new Float32Array(_));for(let f=0,l=m;f!==T;++f,l+=4)o.copy(p[f]).applyMatrix4(E,a),o.normal.toArray(v,l),v[l+3]=o.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,v}}function zd(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new Mc(h.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Vi=4,Wa=[.125,.215,.35,.446,.526,.582],si=20,io=new Ec,Xa=new Yt;let ro=null,so=0,oo=0,ao=!1;const ri=(1+Math.sqrt(5))/2,wi=1/ri,qa=[new L(-ri,wi,0),new L(ri,wi,0),new L(-wi,0,ri),new L(wi,0,ri),new L(0,ri,-wi),new L(0,ri,wi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Gd=new L;class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Gd}=s;ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ro,so,oo),this._renderer.xr.enabled=ao,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Xi,depthBuffer:!1},r=Ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(s)),this._blurMaterial=Hd(s,t,e)}return r}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,r,s){const h=new nn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Xa),p.toneMapping=0,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const T=new oi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),v=new we(new hi,T);let _=!1;const E=t.background;E?E.isColor&&(T.color.copy(E),t.background=null,_=!0):(T.color.copy(Xa),_=!0);for(let f=0;f<6;f++){const l=f%3;l===0?(h.up.set(0,u[f],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+d[f],s.y,s.z)):l===1?(h.up.set(0,0,u[f]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+d[f],s.z)):(h.up.set(0,u[f],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+d[f]));const M=this._cubeSize;Wr(r,l*M,f>2?M:0,M,M),p.setRenderTarget(r),_&&p.render(v,h),p.render(t,h)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=m,p.autoClear=g,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const h=this._cubeSize;Wr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qa[(r-s-1)%qa.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new we(this._lodPlanes[r],u),g=u.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*si-1),T=s/y,v=isFinite(s)?1+Math.floor(d*T):si;v>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${si}`);const _=[];let E=0;for(let C=0;C<si;++C){const w=C/T,S=Math.exp(-w*w/2);_.push(S),C===0?E+=S:C<v&&(E+=2*S)}for(let C=0;C<_.length;C++)_[C]=_[C]/E;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:f}=this;g.dTheta.value=y,g.mipInt.value=f-n;const l=this._sizeLods[r],M=3*l*(r>f-Vi?r-f+Vi:0),c=4*(this._cubeSize-l);Wr(e,M,c,3*l,2*l),h.setRenderTarget(e),h.render(p,io)}}function Vd(i){const t=[],e=[],n=[];let r=i;const s=i-Vi+1+Wa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let h=1/a;o>i-Vi?h=Wa[o-i+Vi-1]:o===0&&(h=0),n.push(h);const u=1/(a-2),d=-u,p=1+u,g=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,y=6,T=3,v=2,_=1,E=new Float32Array(T*y*m),f=new Float32Array(v*y*m),l=new Float32Array(_*y*m);for(let c=0;c<m;c++){const C=c%3*2/3-1,w=c>2?0:-1,S=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];E.set(S,T*y*c),f.set(g,v*y*c);const x=[c,c,c,c,c,c];l.set(x,_*y*c)}const M=new pn;M.setAttribute("position",new He(E,T)),M.setAttribute("uv",new He(f,v)),M.setAttribute("faceIndex",new He(l,_)),t.push(M),r>Vi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ya(i,t,e){const n=new dn(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Hd(i,t,e){const n=new Float32Array(si),r=new L(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:na(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function na(){return`

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
	`}function kd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,u=h===303||h===304,d=h===301||h===302;if(u||d){let p=t.get(a);const g=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return e===null&&(e=new No(i)),p=u?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return u&&m&&m.height>0||d&&m&&r(m)?(e===null&&(e=new No(i)),p=u?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let h=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&h++;return h===u}function s(a){const h=a.target;h.removeEventListener("dispose",s);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xd(i,t,e,n){const r={},s=new WeakMap;function o(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",o),delete r[g.id];const m=s.get(g);m&&(t.remove(m),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(p,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,e.memory.geometries++),g}function h(p){const g=p.attributes;for(const m in g)t.update(g[m],i.ARRAY_BUFFER)}function u(p){const g=[],m=p.index,y=p.attributes.position;let T=0;if(m!==null){const E=m.array;T=m.version;for(let f=0,l=E.length;f<l;f+=3){const M=E[f+0],c=E[f+1],C=E[f+2];g.push(M,c,c,C,C,M)}}else if(y!==void 0){const E=y.array;T=y.version;for(let f=0,l=E.length/3-1;f<l;f+=3){const M=f+0,c=f+1,C=f+2;g.push(M,c,c,C,C,M)}}else return;const v=new(hc(g)?gc:pc)(g,1);v.version=T;const _=s.get(p);_&&t.remove(_),s.set(p,v)}function d(p){const g=s.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:h,getWireframeAttribute:d}}function qd(i,t,e){let n;function r(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function h(g,m){i.drawElements(n,m,s,g*o),e.update(m,n,1)}function u(g,m,y){y!==0&&(i.drawElementsInstanced(n,m,s,g*o,y),e.update(m,n,y))}function d(g,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,g,0,y);let v=0;for(let _=0;_<y;_++)v+=m[_];e.update(v,n,1)}function p(g,m,y,T){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<g.length;_++)u(g[_]/o,m[_],T[_]);else{v.multiDrawElementsInstancedWEBGL(n,m,0,s,g,0,T,0,y);let _=0;for(let E=0;E<y;E++)_+=m[E]*T[E];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=h,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Yd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function $d(i,t,e){const n=new WeakMap,r=new re;function s(o,a,h){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let g=n.get(a);if(g===void 0||g.count!==p){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};g!==void 0&&g.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let f=0;m===!0&&(f=1),y===!0&&(f=2),T===!0&&(f=3);let l=a.attributes.position.count*f,M=1;l>t.maxTextureSize&&(M=Math.ceil(l/t.maxTextureSize),l=t.maxTextureSize);const c=new Float32Array(l*M*4*p),C=new fc(c,l,M,p);C.type=1015,C.needsUpdate=!0;const w=f*4;for(let x=0;x<p;x++){const A=v[x],b=_[x],R=E[x],F=l*M*4*x;for(let B=0;B<A.count;B++){const O=B*w;m===!0&&(r.fromBufferAttribute(A,B),c[F+O+0]=r.x,c[F+O+1]=r.y,c[F+O+2]=r.z,c[F+O+3]=0),y===!0&&(r.fromBufferAttribute(b,B),c[F+O+4]=r.x,c[F+O+5]=r.y,c[F+O+6]=r.z,c[F+O+7]=0),T===!0&&(r.fromBufferAttribute(R,B),c[F+O+8]=r.x,c[F+O+9]=r.y,c[F+O+10]=r.z,c[F+O+11]=R.itemSize===4?r.w:1)}}g={count:p,texture:C,size:new It(l,M)},n.set(a,g),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let T=0;T<u.length;T++)m+=u[T];const y=a.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function Kd(i,t,e,n){let r=new WeakMap;function s(h){const u=n.render.frame,d=h.geometry,p=t.get(h,d);if(r.get(p)!==u&&(t.update(p),r.set(p,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return p}function o(){r=new WeakMap}function a(h){const u=h.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const wc=new Fe,Za=new yc(1,1),Rc=new fc,Cc=new Tu,Pc=new xc,ja=[],Ja=[],Qa=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rs(i,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),Me(e,n)}}function ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),Me(e,n)}}function np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Qa.set(n),i.uniformMatrix4fv(this.addr,!1,Qa),Me(e,n)}}function ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function hp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Za.compareFunction=515,s=Za):s=wc,e.setTexture2D(t||s,r)}function fp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Cc,r)}function dp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Pc,r)}function pp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Rc,r)}function gp(i){switch(i){case 5126:return Zd;case 35664:return jd;case 35665:return Jd;case 35666:return Qd;case 35674:return tp;case 35675:return ep;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return sp;case 35669:case 35673:return op;case 5125:return ap;case 36294:return lp;case 36295:return cp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}}function mp(i,t){i.uniform1fv(this.addr,t)}function _p(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function vp(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function xp(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Mp(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sp(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tp(i,t){i.uniform1iv(this.addr,t)}function Ep(i,t){i.uniform2iv(this.addr,t)}function Ap(i,t){i.uniform3iv(this.addr,t)}function bp(i,t){i.uniform4iv(this.addr,t)}function wp(i,t){i.uniform1uiv(this.addr,t)}function Rp(i,t){i.uniform2uiv(this.addr,t)}function Cp(i,t){i.uniform3uiv(this.addr,t)}function Pp(i,t){i.uniform4uiv(this.addr,t)}function Dp(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);xe(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||wc,s[o])}function Ip(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);xe(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Cc,s[o])}function Lp(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);xe(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Pc,s[o])}function Up(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);xe(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Rc,s[o])}function Fp(i){switch(i){case 5126:return mp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return Sp;case 35676:return yp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ep;case 35668:case 35672:return Ap;case 35669:case 35673:return bp;case 5125:return wp;case 36294:return Rp;case 36295:return Cp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Up}}class Np{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}}class Op{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function nl(i,t){i.seq.push(t),i.map[t.id]=t}function zp(i,t,e){const n=i.name,r=n.length;for(lo.lastIndex=0;;){const s=lo.exec(n),o=lo.lastIndex;let a=s[1];const h=s[2]==="]",u=s[3];if(h&&(a=a|0),u===void 0||u==="["&&o+2===r){nl(e,u===void 0?new Np(a,i,t):new Bp(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Op(a),nl(e,p)),e=p}}}class gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);zp(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gp=37297;let Vp=0;function Hp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const rl=new Wt;function kp(i){Zt._getMatrix(rl,Zt.workingColorSpace,i);const t=`mat3( ${rl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Hp(i.getShaderSource(t),a)}else return s}function Wp(i,t){const e=kp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xp(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new L;function qp(){Zt.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function $p(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function ol(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(Zp,Jp)}const jp=new Map;function Jp(i,t){let e=Xt[t];if(e===void 0){const n=jp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bo(e)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(i){return i.replace(Qp,tg)}function tg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ig(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function sg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function og(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=eg(e),u=ng(e),d=ig(e),p=rg(e),g=sg(e),m=Yp(e),y=$p(s),T=r.createProgram();let v,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(dr).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(dr).join(`
`),_.length>0&&(_+=`
`)):(v=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),_=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Xt.tonemapping_pars_fragment:"",e.toneMapping!==0?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Wp("linearToOutputTexel",e.outputColorSpace),qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=Bo(o),o=ol(o,e),o=al(o,e),a=Bo(a),a=ol(a,e),a=al(a,e),o=ll(o),a=ll(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const f=E+v+o,l=E+_+a,M=il(r,r.VERTEX_SHADER,f),c=il(r,r.FRAGMENT_SHADER,l);r.attachShader(T,M),r.attachShader(T,c),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function C(A){if(i.debug.checkShaderErrors){const b=r.getProgramInfoLog(T)||"",R=r.getShaderInfoLog(M)||"",F=r.getShaderInfoLog(c)||"",B=b.trim(),O=R.trim(),W=F.trim();let z=!0,Z=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,M,c);else{const st=sl(r,M,"vertex"),et=sl(r,c,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+st+`
`+et)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||W==="")&&(Z=!1);Z&&(A.diagnostics={runnable:z,programLog:B,vertexShader:{log:O,prefix:v},fragmentShader:{log:W,prefix:_}})}r.deleteShader(M),r.deleteShader(c),w=new gs(r,T),S=Kp(r,T)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(T,Gp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vp++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=M,this.fragmentShader=c,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cg(t),e.set(t,n)),n}}class cg{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function ug(i,t,e,n,r,s,o){const a=new Jo,h=new lg,u=new Set,d=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(S){return u.add(S),S===0?"uv":`uv${S}`}function v(S,x,A,b,R){const F=b.fog,B=R.geometry,O=S.isMeshStandardMaterial?b.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),z=W&&W.mapping===306?W.image.height:null,Z=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=st!==void 0?st.length:0;let dt=0;B.morphAttributes.position!==void 0&&(dt=1),B.morphAttributes.normal!==void 0&&(dt=2),B.morphAttributes.color!==void 0&&(dt=3);let At,yt,_t,H;if(Z){const te=mn[Z];At=te.vertexShader,yt=te.fragmentShader}else At=S.vertexShader,yt=S.fragmentShader,h.update(S),_t=h.getVertexShaderID(S),H=h.getFragmentShaderID(S);const $=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ut=R.isInstancedMesh===!0,at=R.isBatchedMesh===!0,Mt=!!S.map,qt=!!S.matcap,U=!!W,Ut=!!S.aoMap,xt=!!S.lightMap,mt=!!S.bumpMap,ct=!!S.normalMap,Kt=!!S.displacementMap,ht=!!S.emissiveMap,bt=!!S.metalnessMap,Ot=!!S.roughnessMap,zt=S.anisotropy>0,I=S.clearcoat>0,P=S.dispersion>0,G=S.iridescence>0,Y=S.sheen>0,J=S.transmission>0,X=zt&&!!S.anisotropyMap,gt=I&&!!S.clearcoatMap,pt=I&&!!S.clearcoatNormalMap,Ct=I&&!!S.clearcoatRoughnessMap,Pt=G&&!!S.iridescenceMap,lt=G&&!!S.iridescenceThicknessMap,Tt=Y&&!!S.sheenColorMap,Nt=Y&&!!S.sheenRoughnessMap,Lt=!!S.specularMap,q=!!S.specularColorMap,nt=!!S.specularIntensityMap,N=J&&!!S.transmissionMap,tt=J&&!!S.thicknessMap,ot=!!S.gradientMap,vt=!!S.alphaMap,it=S.alphaTest>0,Q=!!S.alphaHash,wt=!!S.extensions;let Vt=0;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const Qt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:At,fragmentShader:yt,defines:S.defines,customVertexShaderID:_t,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:at,batchingColor:at&&R._colorsTexture!==null,instancing:ut,instancingColor:ut&&R.instanceColor!==null,instancingMorph:ut&&R.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:Mt,matcap:qt,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:z,aoMap:Ut,lightMap:xt,bumpMap:mt,normalMap:ct,displacementMap:g&&Kt,emissiveMap:ht,normalMapObjectSpace:ct&&S.normalMapType===1,normalMapTangentSpace:ct&&S.normalMapType===0,metalnessMap:bt,roughnessMap:Ot,anisotropy:zt,anisotropyMap:X,clearcoat:I,clearcoatMap:gt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ct,dispersion:P,iridescence:G,iridescenceMap:Pt,iridescenceThicknessMap:lt,sheen:Y,sheenColorMap:Tt,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:q,specularIntensityMap:nt,transmission:J,transmissionMap:N,thicknessMap:tt,gradientMap:ot,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:vt,alphaTest:it,alphaHash:Q,combine:S.combine,mapUv:Mt&&T(S.map.channel),aoMapUv:Ut&&T(S.aoMap.channel),lightMapUv:xt&&T(S.lightMap.channel),bumpMapUv:mt&&T(S.bumpMap.channel),normalMapUv:ct&&T(S.normalMap.channel),displacementMapUv:Kt&&T(S.displacementMap.channel),emissiveMapUv:ht&&T(S.emissiveMap.channel),metalnessMapUv:bt&&T(S.metalnessMap.channel),roughnessMapUv:Ot&&T(S.roughnessMap.channel),anisotropyMapUv:X&&T(S.anisotropyMap.channel),clearcoatMapUv:gt&&T(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&T(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&T(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&T(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&T(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&T(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(S.sheenRoughnessMap.channel),specularMapUv:Lt&&T(S.specularMap.channel),specularColorMapUv:q&&T(S.specularColorMap.channel),specularIntensityMapUv:nt&&T(S.specularIntensityMap.channel),transmissionMapUv:N&&T(S.transmissionMap.channel),thicknessMapUv:tt&&T(S.thicknessMap.channel),alphaMapUv:vt&&T(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ct||zt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!B.attributes.uv&&(Mt||vt),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:rt,skinning:R.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Mt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qt.vertexUv1s=u.has(1),Qt.vertexUv2s=u.has(2),Qt.vertexUv3s=u.has(3),u.clear(),Qt}function _(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)x.push(A),x.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(E(x,S),f(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function f(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function l(S){const x=y[S.type];let A;if(x){const b=mn[x];A=Mr.clone(b.uniforms)}else A=S.uniforms;return A}function M(S,x){let A;for(let b=0,R=d.length;b<R;b++){const F=d[b];if(F.cacheKey===x){A=F,++A.usedTimes;break}}return A===void 0&&(A=new og(i,x,S,s),d.push(A)),A}function c(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function C(S){h.remove(S)}function w(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:l,acquireProgram:M,releaseProgram:c,releaseShaderCache:C,programs:d,dispose:w}}function hg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,h){i.get(o)[a]=h}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,g,m,y,T,v){let _=i[t];return _===void 0?(_={id:p.id,object:p,geometry:g,material:m,groupOrder:y,renderOrder:p.renderOrder,z:T,group:v},i[t]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=m,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=T,_.group=v),t++,_}function a(p,g,m,y,T,v){const _=o(p,g,m,y,T,v);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(p,g,m,y,T,v){const _=o(p,g,m,y,T,v);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(p,g){e.length>1&&e.sort(p||fg),n.length>1&&n.sort(g||ul),r.length>1&&r.sort(g||ul)}function d(){for(let p=t,g=i.length;p<g;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:h,finish:d,sort:u}}function dg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new hl,i.set(n,[o])):r>=s.length?(o=new hl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Yt};break;case"SpotLight":e={position:new L,direction:new L,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let mg=0;function _g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vg(i){const t=new pg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new L);const r=new L,s=new jt,o=new jt;function a(u){let d=0,p=0,g=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,y=0,T=0,v=0,_=0,E=0,f=0,l=0,M=0,c=0,C=0;u.sort(_g);for(let S=0,x=u.length;S<x;S++){const A=u[S],b=A.color,R=A.intensity,F=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=b.r*R,p+=b.g*R,g+=b.b*R;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],R);C++}else if(A.isDirectionalLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const W=A.shadow,z=e.get(A);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=A.shadow.matrix,E++}n.directional[m]=O,m++}else if(A.isSpotLight){const O=t.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(b).multiplyScalar(R),O.distance=F,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[T]=O;const W=A.shadow;if(A.map&&(n.spotLightMap[M]=A.map,M++,W.updateMatrices(A),A.castShadow&&c++),n.spotLightMatrix[T]=W.matrix,A.castShadow){const z=e.get(A);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[T]=z,n.spotShadowMap[T]=B,l++}T++}else if(A.isRectAreaLight){const O=t.get(A);O.color.copy(b).multiplyScalar(R),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=O,v++}else if(A.isPointLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const W=A.shadow,z=e.get(A);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[y]=z,n.pointShadowMap[y]=B,n.pointShadowMatrix[y]=A.shadow.matrix,f++}n.point[y]=O,y++}else if(A.isHemisphereLight){const O=t.get(A);O.skyColor.copy(A.color).multiplyScalar(R),O.groundColor.copy(A.groundColor).multiplyScalar(R),n.hemi[_]=O,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const w=n.hash;(w.directionalLength!==m||w.pointLength!==y||w.spotLength!==T||w.rectAreaLength!==v||w.hemiLength!==_||w.numDirectionalShadows!==E||w.numPointShadows!==f||w.numSpotShadows!==l||w.numSpotMaps!==M||w.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=T,n.rectArea.length=v,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=l,n.spotShadowMap.length=l,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=l+M-c,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=c,n.numLightProbes=C,w.directionalLength=m,w.pointLength=y,w.spotLength=T,w.rectAreaLength=v,w.hemiLength=_,w.numDirectionalShadows=E,w.numPointShadows=f,w.numSpotShadows=l,w.numSpotMaps=M,w.numLightProbes=C,n.version=mg++)}function h(u,d){let p=0,g=0,m=0,y=0,T=0;const v=d.matrixWorldInverse;for(let _=0,E=u.length;_<E;_++){const f=u[_];if(f.isDirectionalLight){const l=n.directional[p];l.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(v),p++}else if(f.isSpotLight){const l=n.spot[m];l.position.setFromMatrixPosition(f.matrixWorld),l.position.applyMatrix4(v),l.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(v),m++}else if(f.isRectAreaLight){const l=n.rectArea[y];l.position.setFromMatrixPosition(f.matrixWorld),l.position.applyMatrix4(v),o.identity(),s.copy(f.matrixWorld),s.premultiply(v),o.extractRotation(s),l.halfWidth.set(f.width*.5,0,0),l.halfHeight.set(0,f.height*.5,0),l.halfWidth.applyMatrix4(o),l.halfHeight.applyMatrix4(o),y++}else if(f.isPointLight){const l=n.point[g];l.position.setFromMatrixPosition(f.matrixWorld),l.position.applyMatrix4(v),g++}else if(f.isHemisphereLight){const l=n.hemi[T];l.direction.setFromMatrixPosition(f.matrixWorld),l.direction.transformDirection(v),T++}}}return{setup:a,setupView:h,state:n}}function fl(i){const t=new vg(i),e=[],n=[];function r(d){u.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function xg(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new fl(i),t.set(r,[a])):s>=o.length?(a=new fl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function yg(i,t,e){let n=new Sc;const r=new It,s=new It,o=new re,a=new Xu({depthPacking:3201}),h=new qu,u={},d=e.maxTextureSize,p={0:1,1:0,2:2},g=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const y=new pn;y.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new we(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(c,C,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||c.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),b=i.state;b.setBlending(0),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const R=_!==3&&this.type===3,F=_===3&&this.type!==3;for(let B=0,O=c.length;B<O;B++){const W=c[B],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Z=z.getFrameExtents();if(r.multiply(Z),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,z.mapSize.y=s.y)),z.map===null||R===!0||F===!0){const et=this.type!==3?{minFilter:1003,magFilter:1003}:{};z.map!==null&&z.map.dispose(),z.map=new dn(r.x,r.y,et),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const st=z.getViewportCount();for(let et=0;et<st;et++){const dt=z.getViewport(et);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),b.viewport(o),z.updateMatrices(W,et),n=z.getFrustum(),l(C,w,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===3&&E(z,w),z.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(S,x,A)};function E(c,C){const w=t.update(T);g.defines.VSM_SAMPLES!==c.blurSamples&&(g.defines.VSM_SAMPLES=c.blurSamples,m.defines.VSM_SAMPLES=c.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),c.mapPass===null&&(c.mapPass=new dn(r.x,r.y)),g.uniforms.shadow_pass.value=c.map.texture,g.uniforms.resolution.value=c.mapSize,g.uniforms.radius.value=c.radius,i.setRenderTarget(c.mapPass),i.clear(),i.renderBufferDirect(C,null,w,g,T,null),m.uniforms.shadow_pass.value=c.mapPass.texture,m.uniforms.resolution.value=c.mapSize,m.uniforms.radius.value=c.radius,i.setRenderTarget(c.map),i.clear(),i.renderBufferDirect(C,null,w,m,T,null)}function f(c,C,w,S){let x=null;const A=w.isPointLight===!0?c.customDistanceMaterial:c.customDepthMaterial;if(A!==void 0)x=A;else if(x=w.isPointLight===!0?h:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const b=x.uuid,R=C.uuid;let F=u[b];F===void 0&&(F={},u[b]=F);let B=F[R];B===void 0&&(B=x.clone(),F[R]=B,C.addEventListener("dispose",M)),x=B}if(x.visible=C.visible,x.wireframe=C.wireframe,S===3?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:p[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const b=i.properties.get(x);b.light=w}return x}function l(c,C,w,S,x){if(c.visible===!1)return;if(c.layers.test(C.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&x===3)&&(!c.frustumCulled||n.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,c.matrixWorld);const R=t.update(c),F=c.material;if(Array.isArray(F)){const B=R.groups;for(let O=0,W=B.length;O<W;O++){const z=B[O],Z=F[z.materialIndex];if(Z&&Z.visible){const st=f(c,Z,S,x);c.onBeforeShadow(i,c,C,w,R,st,z),i.renderBufferDirect(w,null,R,st,c,z),c.onAfterShadow(i,c,C,w,R,st,z)}}}else if(F.visible){const B=f(c,F,S,x);c.onBeforeShadow(i,c,C,w,R,B,null),i.renderBufferDirect(w,null,R,B,c,null),c.onAfterShadow(i,c,C,w,R,B,null)}}const b=c.children;for(let R=0,F=b.length;R<F;R++)l(b[R],C,w,S,x)}function M(c){c.target.removeEventListener("dispose",M);for(const w in u){const S=u[w],x=c.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Tg={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Eg(i,t){function e(){let N=!1;const tt=new re;let ot=null;const vt=new re(0,0,0,0);return{setMask:function(it){ot!==it&&!N&&(i.colorMask(it,it,it,it),ot=it)},setLocked:function(it){N=it},setClear:function(it,Q,wt,Vt,Qt){Qt===!0&&(it*=Vt,Q*=Vt,wt*=Vt),tt.set(it,Q,wt,Vt),vt.equals(tt)===!1&&(i.clearColor(it,Q,wt,Vt),vt.copy(tt))},reset:function(){N=!1,ot=null,vt.set(-1,0,0,0)}}}function n(){let N=!1,tt=!1,ot=null,vt=null,it=null;return{setReversed:function(Q){if(tt!==Q){const wt=t.get("EXT_clip_control");Q?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),tt=Q;const Vt=it;it=null,this.setClear(Vt)}},getReversed:function(){return tt},setTest:function(Q){Q?$(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(Q){ot!==Q&&!N&&(i.depthMask(Q),ot=Q)},setFunc:function(Q){if(tt&&(Q=Tg[Q]),vt!==Q){switch(Q){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Q}},setLocked:function(Q){N=Q},setClear:function(Q){it!==Q&&(tt&&(Q=1-Q),i.clearDepth(Q),it=Q)},reset:function(){N=!1,ot=null,vt=null,it=null,tt=!1}}}function r(){let N=!1,tt=null,ot=null,vt=null,it=null,Q=null,wt=null,Vt=null,Qt=null;return{setTest:function(te){N||(te?$(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(te){tt!==te&&!N&&(i.stencilMask(te),tt=te)},setFunc:function(te,xn,gn){(ot!==te||vt!==xn||it!==gn)&&(i.stencilFunc(te,xn,gn),ot=te,vt=xn,it=gn)},setOp:function(te,xn,gn){(Q!==te||wt!==xn||Vt!==gn)&&(i.stencilOp(te,xn,gn),Q=te,wt=xn,Vt=gn)},setLocked:function(te){N=te},setClear:function(te){Qt!==te&&(i.clearStencil(te),Qt=te)},reset:function(){N=!1,tt=null,ot=null,vt=null,it=null,Q=null,wt=null,Vt=null,Qt=null}}}const s=new e,o=new n,a=new r,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],y=null,T=!1,v=null,_=null,E=null,f=null,l=null,M=null,c=null,C=new Yt(0,0,0),w=0,S=!1,x=null,A=null,b=null,R=null,F=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=W>=2);let Z=null,st={};const et=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),At=new re().fromArray(et),yt=new re().fromArray(dt);function _t(N,tt,ot,vt){const it=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<ot;wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(tt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Q}const H={};H[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(3),mt(!1),ct(1),$(i.CULL_FACE),Ut(0);function $(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function rt(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function ut(N,tt){return p[N]!==tt?(i.bindFramebuffer(N,tt),p[N]=tt,N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=tt),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function at(N,tt){let ot=m,vt=!1;if(N){ot=g.get(tt),ot===void 0&&(ot=[],g.set(tt,ot));const it=N.textures;if(ot.length!==it.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,wt=it.length;Q<wt;Q++)ot[Q]=i.COLOR_ATTACHMENT0+Q;ot.length=it.length,vt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ot)}function Mt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}const qt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};qt[103]=i.MIN,qt[104]=i.MAX;const U={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(N,tt,ot,vt,it,Q,wt,Vt,Qt,te){if(N===0){T===!0&&(rt(i.BLEND),T=!1);return}if(T===!1&&($(i.BLEND),T=!0),N!==5){if(N!==v||te!==S){if((_!==100||l!==100)&&(i.blendEquation(i.FUNC_ADD),_=100,l=100),te)switch(N){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,f=null,M=null,c=null,C.set(0,0,0),w=0,v=N,S=te}return}it=it||tt,Q=Q||ot,wt=wt||vt,(tt!==_||it!==l)&&(i.blendEquationSeparate(qt[tt],qt[it]),_=tt,l=it),(ot!==E||vt!==f||Q!==M||wt!==c)&&(i.blendFuncSeparate(U[ot],U[vt],U[Q],U[wt]),E=ot,f=vt,M=Q,c=wt),(Vt.equals(C)===!1||Qt!==w)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Qt),C.copy(Vt),w=Qt),v=N,S=!1}function xt(N,tt){N.side===2?rt(i.CULL_FACE):$(i.CULL_FACE);let ot=N.side===1;tt&&(ot=!ot),mt(ot),N.blending===1&&N.transparent===!1?Ut(0):Ut(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const vt=N.stencilWrite;a.setTest(vt),vt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function ct(N){N!==0?($(i.CULL_FACE),N!==A&&(N===1?i.cullFace(i.BACK):N===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),A=N}function Kt(N){N!==b&&(O&&i.lineWidth(N),b=N)}function ht(N,tt,ot){N?($(i.POLYGON_OFFSET_FILL),(R!==tt||F!==ot)&&(i.polygonOffset(tt,ot),R=tt,F=ot)):rt(i.POLYGON_OFFSET_FILL)}function bt(N){N?$(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Ot(N){N===void 0&&(N=i.TEXTURE0+B-1),Z!==N&&(i.activeTexture(N),Z=N)}function zt(N,tt,ot){ot===void 0&&(Z===null?ot=i.TEXTURE0+B-1:ot=Z);let vt=st[ot];vt===void 0&&(vt={type:void 0,texture:void 0},st[ot]=vt),(vt.type!==N||vt.texture!==tt)&&(Z!==ot&&(i.activeTexture(ot),Z=ot),i.bindTexture(N,tt||H[N]),vt.type=N,vt.texture=tt)}function I(){const N=st[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(N){At.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),At.copy(N))}function Nt(N){yt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),yt.copy(N))}function Lt(N,tt){let ot=u.get(tt);ot===void 0&&(ot=new WeakMap,u.set(tt,ot));let vt=ot.get(N);vt===void 0&&(vt=i.getUniformBlockIndex(tt,N.name),ot.set(N,vt))}function q(N,tt){const vt=u.get(tt).get(N);h.get(tt)!==vt&&(i.uniformBlockBinding(tt,vt,N.__bindingPointIndex),h.set(tt,vt))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,st={},p={},g=new WeakMap,m=[],y=null,T=!1,v=null,_=null,E=null,f=null,l=null,M=null,c=null,C=new Yt(0,0,0),w=0,S=!1,x=null,A=null,b=null,R=null,F=null,At.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:rt,bindFramebuffer:ut,drawBuffers:at,useProgram:Mt,setBlending:Ut,setMaterial:xt,setFlipSided:mt,setCullFace:ct,setLineWidth:Kt,setPolygonOffset:ht,setScissorTest:bt,activeTexture:Ot,bindTexture:zt,unbindTexture:I,compressedTexImage2D:P,compressedTexImage3D:G,texImage2D:Pt,texImage3D:lt,updateUBOMapping:Lt,uniformBlockBinding:q,texStorage2D:pt,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:gt,scissor:Tt,viewport:Nt,reset:nt}}function Ag(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new It,d=new WeakMap;let p;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,P){return m?new OffscreenCanvas(I,P):Ts("canvas")}function T(I,P,G){let Y=1;const J=zt(I);if((J.width>G||J.height>G)&&(Y=G/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const X=Math.floor(Y*J.width),gt=Math.floor(Y*J.height);p===void 0&&(p=y(X,gt));const pt=P?y(X,gt):p;return pt.width=X,pt.height=gt,pt.getContext("2d").drawImage(I,0,0,X,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+gt+")."),pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),I;return I}function v(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function f(I,P,G,Y,J=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let X=P;if(P===i.RED&&(G===i.FLOAT&&(X=i.R32F),G===i.HALF_FLOAT&&(X=i.R16F),G===i.UNSIGNED_BYTE&&(X=i.R8)),P===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.R8UI),G===i.UNSIGNED_SHORT&&(X=i.R16UI),G===i.UNSIGNED_INT&&(X=i.R32UI),G===i.BYTE&&(X=i.R8I),G===i.SHORT&&(X=i.R16I),G===i.INT&&(X=i.R32I)),P===i.RG&&(G===i.FLOAT&&(X=i.RG32F),G===i.HALF_FLOAT&&(X=i.RG16F),G===i.UNSIGNED_BYTE&&(X=i.RG8)),P===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.RG8UI),G===i.UNSIGNED_SHORT&&(X=i.RG16UI),G===i.UNSIGNED_INT&&(X=i.RG32UI),G===i.BYTE&&(X=i.RG8I),G===i.SHORT&&(X=i.RG16I),G===i.INT&&(X=i.RG32I)),P===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.RGB8UI),G===i.UNSIGNED_SHORT&&(X=i.RGB16UI),G===i.UNSIGNED_INT&&(X=i.RGB32UI),G===i.BYTE&&(X=i.RGB8I),G===i.SHORT&&(X=i.RGB16I),G===i.INT&&(X=i.RGB32I)),P===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),G===i.UNSIGNED_INT&&(X=i.RGBA32UI),G===i.BYTE&&(X=i.RGBA8I),G===i.SHORT&&(X=i.RGBA16I),G===i.INT&&(X=i.RGBA32I)),P===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),P===i.RGBA){const gt=J?ys:Zt.getTransfer(Y);G===i.FLOAT&&(X=i.RGBA32F),G===i.HALF_FLOAT&&(X=i.RGBA16F),G===i.UNSIGNED_BYTE&&(X=gt===ee?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function l(I,P){let G;return I?P===null||P===1014||P===1020?G=i.DEPTH24_STENCIL8:P===1015?G=i.DEPTH32F_STENCIL8:P===1012&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===1014||P===1020?G=i.DEPTH_COMPONENT24:P===1015?G=i.DEPTH_COMPONENT32F:P===1012&&(G=i.DEPTH_COMPONENT16),G}function M(I,P){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==1003&&I.minFilter!==1006?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function c(I){const P=I.target;P.removeEventListener("dispose",c),w(P),P.isVideoTexture&&d.delete(P)}function C(I){const P=I.target;P.removeEventListener("dispose",C),x(P)}function w(I){const P=n.get(I);if(P.__webglInit===void 0)return;const G=I.source,Y=g.get(G);if(Y){const J=Y[P.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(I),Object.keys(Y).length===0&&g.delete(G)}n.remove(I)}function S(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const G=I.source,Y=g.get(G);delete Y[P.__cacheKey],o.memory.textures--}function x(I){const P=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(P.__webglFramebuffer[Y]))for(let J=0;J<P.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(P.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(P.__webglFramebuffer[Y]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Y])}else{if(Array.isArray(P.__webglFramebuffer))for(let Y=0;Y<P.__webglFramebuffer.length;Y++)i.deleteFramebuffer(P.__webglFramebuffer[Y]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let Y=0;Y<P.__webglColorRenderbuffer.length;Y++)P.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[Y]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const G=I.textures;for(let Y=0,J=G.length;Y<J;Y++){const X=n.get(G[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(I)}let A=0;function b(){A=0}function R(){const I=A;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function F(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function B(I,P){const G=n.get(I);if(I.isVideoTexture&&bt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){const Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(G,I,P);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+P)}function O(I,P){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){H(G,I,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+P)}function W(I,P){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){H(G,I,P);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+P)}function z(I,P){const G=n.get(I);if(I.version>0&&G.__version!==I.version){$(G,I,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+P)}const Z={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},st={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},et={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function dt(I,P){if(P.type===1015&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===1006||P.magFilter===1007||P.magFilter===1005||P.magFilter===1008||P.minFilter===1006||P.minFilter===1007||P.minFilter===1005||P.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Z[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Z[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Z[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,st[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,st[P.minFilter]),P.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,et[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===1003||P.minFilter!==1005&&P.minFilter!==1008||P.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function At(I,P){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",c));const Y=P.source;let J=g.get(Y);J===void 0&&(J={},g.set(Y,J));const X=F(P);if(X!==I.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[X].usedTimes++;const gt=J[I.__cacheKey];gt!==void 0&&(J[I.__cacheKey].usedTimes--,gt.usedTimes===0&&S(P)),I.__cacheKey=X,I.__webglTexture=J[X].texture}return G}function yt(I,P,G){return Math.floor(Math.floor(I/G)/P)}function _t(I,P,G,Y){const X=I.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,G,Y,P.data);else{X.sort((lt,Tt)=>lt.start-Tt.start);let gt=0;for(let lt=1;lt<X.length;lt++){const Tt=X[gt],Nt=X[lt],Lt=Tt.start+Tt.count,q=yt(Nt.start,P.width,4),nt=yt(Tt.start,P.width,4);Nt.start<=Lt+1&&q===nt&&yt(Nt.start+Nt.count-1,P.width,4)===q?Tt.count=Math.max(Tt.count,Nt.start+Nt.count-Tt.start):(++gt,X[gt]=Nt)}X.length=gt+1;const pt=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let lt=0,Tt=X.length;lt<Tt;lt++){const Nt=X[lt],Lt=Math.floor(Nt.start/4),q=Math.ceil(Nt.count/4),nt=Lt%P.width,N=Math.floor(Lt/P.width),tt=q,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,nt,N,tt,ot,G,Y,P.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function H(I,P,G){let Y=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Y=i.TEXTURE_3D);const J=At(I,P),X=P.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+G);const gt=n.get(X);if(X.version!==gt.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const pt=Zt.getPrimaries(Zt.workingColorSpace),Ct=P.colorSpace===""?null:Zt.getPrimaries(P.colorSpace),Pt=P.colorSpace===""||pt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let lt=T(P.image,!1,r.maxTextureSize);lt=Ot(P,lt);const Tt=s.convert(P.format,P.colorSpace),Nt=s.convert(P.type);let Lt=f(P.internalFormat,Tt,Nt,P.colorSpace,P.isVideoTexture);dt(Y,P);let q;const nt=P.mipmaps,N=P.isVideoTexture!==!0,tt=gt.__version===void 0||J===!0,ot=X.dataReady,vt=M(P,lt);if(P.isDepthTexture)Lt=l(P.format===1027,P.type),tt&&(N?e.texStorage2D(i.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,Tt,Nt,null));else if(P.isDataTexture)if(nt.length>0){N&&tt&&e.texStorage2D(i.TEXTURE_2D,vt,Lt,nt[0].width,nt[0].height);for(let it=0,Q=nt.length;it<Q;it++)q=nt[it],N?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,Tt,Nt,q.data):e.texImage2D(i.TEXTURE_2D,it,Lt,q.width,q.height,0,Tt,Nt,q.data);P.generateMipmaps=!1}else N?(tt&&e.texStorage2D(i.TEXTURE_2D,vt,Lt,lt.width,lt.height),ot&&_t(P,lt,Tt,Nt)):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,Tt,Nt,lt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){N&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Lt,nt[0].width,nt[0].height,lt.depth);for(let it=0,Q=nt.length;it<Q;it++)if(q=nt[it],P.format!==1023)if(Tt!==null)if(N){if(ot)if(P.layerUpdates.size>0){const wt=ka(q.width,q.height,P.format,P.type);for(const Vt of P.layerUpdates){const Qt=q.data.subarray(Vt*wt/q.data.BYTES_PER_ELEMENT,(Vt+1)*wt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Vt,q.width,q.height,1,Tt,Qt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,lt.depth,Tt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Lt,q.width,q.height,lt.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,lt.depth,Tt,Nt,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Lt,q.width,q.height,lt.depth,0,Tt,Nt,q.data)}else{N&&tt&&e.texStorage2D(i.TEXTURE_2D,vt,Lt,nt[0].width,nt[0].height);for(let it=0,Q=nt.length;it<Q;it++)q=nt[it],P.format!==1023?Tt!==null?N?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,Tt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Lt,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,Tt,Nt,q.data):e.texImage2D(i.TEXTURE_2D,it,Lt,q.width,q.height,0,Tt,Nt,q.data)}else if(P.isDataArrayTexture)if(N){if(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Lt,lt.width,lt.height,lt.depth),ot)if(P.layerUpdates.size>0){const it=ka(lt.width,lt.height,P.format,P.type);for(const Q of P.layerUpdates){const wt=lt.data.subarray(Q*it/lt.data.BYTES_PER_ELEMENT,(Q+1)*it/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,lt.width,lt.height,1,Tt,Nt,wt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Nt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,Tt,Nt,lt.data);else if(P.isData3DTexture)N?(tt&&e.texStorage3D(i.TEXTURE_3D,vt,Lt,lt.width,lt.height,lt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Nt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,Tt,Nt,lt.data);else if(P.isFramebufferTexture){if(tt)if(N)e.texStorage2D(i.TEXTURE_2D,vt,Lt,lt.width,lt.height);else{let it=lt.width,Q=lt.height;for(let wt=0;wt<vt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Lt,it,Q,0,Tt,Nt,null),it>>=1,Q>>=1}}else if(nt.length>0){if(N&&tt){const it=zt(nt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Lt,it.width,it.height)}for(let it=0,Q=nt.length;it<Q;it++)q=nt[it],N?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Tt,Nt,q):e.texImage2D(i.TEXTURE_2D,it,Lt,Tt,Nt,q);P.generateMipmaps=!1}else if(N){if(tt){const it=zt(lt);e.texStorage2D(i.TEXTURE_2D,vt,Lt,it.width,it.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Nt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Tt,Nt,lt);v(P)&&_(Y),gt.__version=X.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function $(I,P,G){if(P.image.length!==6)return;const Y=At(I,P),J=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);const X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+G);const gt=Zt.getPrimaries(Zt.workingColorSpace),pt=P.colorSpace===""?null:Zt.getPrimaries(P.colorSpace),Ct=P.colorSpace===""||gt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Pt=P.isCompressedTexture||P.image[0].isCompressedTexture,lt=P.image[0]&&P.image[0].isDataTexture,Tt=[];for(let Q=0;Q<6;Q++)!Pt&&!lt?Tt[Q]=T(P.image[Q],!0,r.maxCubemapSize):Tt[Q]=lt?P.image[Q].image:P.image[Q],Tt[Q]=Ot(P,Tt[Q]);const Nt=Tt[0],Lt=s.convert(P.format,P.colorSpace),q=s.convert(P.type),nt=f(P.internalFormat,Lt,q,P.colorSpace),N=P.isVideoTexture!==!0,tt=X.__version===void 0||Y===!0,ot=J.dataReady;let vt=M(P,Nt);dt(i.TEXTURE_CUBE_MAP,P);let it;if(Pt){N&&tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,nt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){it=Tt[Q].mipmaps;for(let wt=0;wt<it.length;wt++){const Vt=it[wt];P.format!==1023?Lt!==null?N?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,Vt.width,Vt.height,Lt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,nt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,Vt.width,Vt.height,Lt,q,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,nt,Vt.width,Vt.height,0,Lt,q,Vt.data)}}}else{if(it=P.mipmaps,N&&tt){it.length>0&&vt++;const Q=zt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(lt){N?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Tt[Q].width,Tt[Q].height,Lt,q,Tt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Tt[Q].width,Tt[Q].height,0,Lt,q,Tt[Q].data);for(let wt=0;wt<it.length;wt++){const Qt=it[wt].image[Q].image;N?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Qt.width,Qt.height,Lt,q,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,nt,Qt.width,Qt.height,0,Lt,q,Qt.data)}}else{N?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,q,Tt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Lt,q,Tt[Q]);for(let wt=0;wt<it.length;wt++){const Vt=it[wt];N?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Lt,q,Vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,nt,Lt,q,Vt.image[Q])}}}v(P)&&_(i.TEXTURE_CUBE_MAP),X.__version=J.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function rt(I,P,G,Y,J,X){const gt=s.convert(G.format,G.colorSpace),pt=s.convert(G.type),Ct=f(G.internalFormat,gt,pt,G.colorSpace),Pt=n.get(P),lt=n.get(G);if(lt.__renderTarget=P,!Pt.__hasExternalTextures){const Tt=Math.max(1,P.width>>X),Nt=Math.max(1,P.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,Ct,Tt,Nt,P.depth,0,gt,pt,null):e.texImage2D(J,X,Ct,Tt,Nt,0,gt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,lt.__webglTexture,0,Kt(P)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,lt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,P,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer){const Y=P.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=l(P.stencilBuffer,J),gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Kt(P);ht(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,X,P.width,P.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,I)}else{const Y=P.textures;for(let J=0;J<Y.length;J++){const X=Y[J],gt=s.convert(X.format,X.colorSpace),pt=s.convert(X.type),Ct=f(X.internalFormat,gt,pt,X.colorSpace),Pt=Kt(P);G&&ht(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ct,P.width,P.height):ht(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Ct,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(P.depthTexture);Y.__renderTarget=P,(!Y.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),B(P.depthTexture,0);const J=Y.__webglTexture,X=Kt(P);if(P.depthTexture.format===1026)ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(P.depthTexture.format===1027)ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Mt(I){const P=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Y){const J=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),P.__depthDisposeCallback=J}P.__boundDepthTexture=Y}if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=I.texture.mipmaps;Y&&Y.length>0?at(P.__webglFramebuffer[0],I):at(P.__webglFramebuffer,I)}else if(G){P.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[Y]),P.__webglDepthbuffer[Y]===void 0)P.__webglDepthbuffer[Y]=i.createRenderbuffer(),ut(P.__webglDepthbuffer[Y],I,!1);else{const J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=P.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ut(P.__webglDepthbuffer,I,!1);else{const J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(I,P,G){const Y=n.get(I);P!==void 0&&rt(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Mt(I)}function U(I){const P=I.texture,G=n.get(I),Y=n.get(P);I.addEventListener("dispose",C);const J=I.textures,X=I.isWebGLCubeRenderTarget===!0,gt=J.length>1;if(gt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=P.version,o.memory.textures++),X){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(P.mipmaps&&P.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let Ct=0;Ct<P.mipmaps.length;Ct++)G.__webglFramebuffer[pt][Ct]=i.createFramebuffer()}else G.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<P.mipmaps.length;pt++)G.__webglFramebuffer[pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(gt)for(let pt=0,Ct=J.length;pt<Ct;pt++){const Pt=n.get(J[pt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ht(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<J.length;pt++){const Ct=J[pt];G.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);const Pt=s.convert(Ct.format,Ct.colorSpace),lt=s.convert(Ct.type),Tt=f(Ct.internalFormat,Pt,lt,Ct.colorSpace,I.isXRRenderTarget===!0),Nt=Kt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Tt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),dt(i.TEXTURE_CUBE_MAP,P);for(let pt=0;pt<6;pt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ct=0;Ct<P.mipmaps.length;Ct++)rt(G.__webglFramebuffer[pt][Ct],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct);else rt(G.__webglFramebuffer[pt],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);v(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let pt=0,Ct=J.length;pt<Ct;pt++){const Pt=J[pt],lt=n.get(Pt);let Tt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,lt.__webglTexture),dt(Tt,Pt),rt(G.__webglFramebuffer,I,Pt,i.COLOR_ATTACHMENT0+pt,Tt,0),v(Pt)&&_(Tt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),dt(pt,P),P.mipmaps&&P.mipmaps.length>0)for(let Ct=0;Ct<P.mipmaps.length;Ct++)rt(G.__webglFramebuffer[Ct],I,P,i.COLOR_ATTACHMENT0,pt,Ct);else rt(G.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,pt,0);v(P)&&_(pt),e.unbindTexture()}I.depthBuffer&&Mt(I)}function Ut(I){const P=I.textures;for(let G=0,Y=P.length;G<Y;G++){const J=P[G];if(v(J)){const X=E(I),gt=n.get(J).__webglTexture;e.bindTexture(X,gt),_(X),e.unbindTexture()}}}const xt=[],mt=[];function ct(I){if(I.samples>0){if(ht(I)===!1){const P=I.textures,G=I.width,Y=I.height;let J=i.COLOR_BUFFER_BIT;const X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(I),pt=P.length>1;if(pt)for(let Pt=0;Pt<P.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Ct=I.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Pt=0;Pt<P.length;Pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Pt]);const lt=n.get(P[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,J,i.NEAREST),h===!0&&(xt.length=0,mt.length=0,xt.push(i.COLOR_ATTACHMENT0+Pt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(X),mt.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Pt=0;Pt<P.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Pt]);const lt=n.get(P[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Kt(I){return Math.min(r.maxSamples,I.samples)}function ht(I){const P=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function bt(I){const P=o.render.frame;d.get(I)!==P&&(d.set(I,P),I.update())}function Ot(I,P){const G=I.colorSpace,Y=I.format,J=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Xi&&G!==""&&(Zt.getTransfer(G)===ee?(Y!==1023||J!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),P}function zt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=R,this.resetTextureUnits=b,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=qt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ht}function bg(i,t){function e(n,r=""){let s;const o=Zt.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`;class Cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Tc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Re({vertexShader:wg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends Ki{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",h=1,u=null,d=null,p=null,g=null,m=null,y=null;const T=typeof XRWebGLBinding<"u",v=new Cg,_={},E=e.getContextAttributes();let f=null,l=null;const M=[],c=[],C=new It;let w=null;const S=new nn;S.viewport=new re;const x=new nn;x.viewport=new re;const A=[S,x],b=new Yu;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=M[H];return $===void 0&&($=new to,M[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=M[H];return $===void 0&&($=new to,M[H]=$),$.getGripSpace()},this.getHand=function(H){let $=M[H];return $===void 0&&($=new to,M[H]=$),$.getHandSpace()};function B(H){const $=c.indexOf(H.inputSource);if($===-1)return;const rt=M[$];rt!==void 0&&(rt.update(H.inputSource,H.frame,u||o),rt.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",W);for(let H=0;H<M.length;H++){const $=c[H];$!==null&&(c[H]=null,M[H].disconnect($))}R=null,F=null,v.reset();for(const H in _)delete _[H];t.setRenderTarget(f),m=null,g=null,p=null,r=null,l=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",O),r.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ut=null,at=null;E.depth&&(at=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?1027:1026,ut=E.stencil?1020:1014);const Mt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(Mt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),l=new dn(g.textureWidth,g.textureHeight,{format:1023,type:1009,depthTexture:new yc(g.textureWidth,g.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),l=new dn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}l.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(H){for(let $=0;$<H.removed.length;$++){const rt=H.removed[$],ut=c.indexOf(rt);ut>=0&&(c[ut]=null,M[ut].disconnect(rt))}for(let $=0;$<H.added.length;$++){const rt=H.added[$];let ut=c.indexOf(rt);if(ut===-1){for(let Mt=0;Mt<M.length;Mt++)if(Mt>=c.length){c.push(rt),ut=Mt;break}else if(c[Mt]===null){c[Mt]=rt,ut=Mt;break}if(ut===-1)break}const at=M[ut];at&&at.connect(rt)}}const z=new L,Z=new L;function st(H,$,rt){z.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(rt.matrixWorld);const ut=z.distanceTo(Z),at=$.projectionMatrix.elements,Mt=rt.projectionMatrix.elements,qt=at[14]/(at[10]-1),U=at[14]/(at[10]+1),Ut=(at[9]+1)/at[5],xt=(at[9]-1)/at[5],mt=(at[8]-1)/at[0],ct=(Mt[8]+1)/Mt[0],Kt=qt*mt,ht=qt*ct,bt=ut/(-mt+ct),Ot=bt*-mt;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ot),H.translateZ(bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),at[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const zt=qt+bt,I=U+bt,P=Kt-Ot,G=ht+(ut-Ot),Y=Ut*U/I*zt,J=xt*U/I*zt;H.projectionMatrix.makePerspective(P,G,Y,J,zt,I),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function et(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let $=H.near,rt=H.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(rt=v.depthFar)),b.near=x.near=S.near=$,b.far=x.far=S.far=rt,(R!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,F=b.far),b.layers.mask=H.layers.mask|6,S.layers.mask=b.layers.mask&3,x.layers.mask=b.layers.mask&5;const ut=H.parent,at=b.cameras;et(b,ut);for(let Mt=0;Mt<at.length;Mt++)et(at[Mt],ut);at.length===2?st(b,S,x):b.projectionMatrix.copy(S.projectionMatrix),dt(H,b,ut)};function dt(H,$,rt){rt===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(rt.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=vr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&m===null))return h},this.setFoveation=function(H){h=H,g!==null&&(g.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)},this.getCameraTexture=function(H){return _[H]};let At=null;function yt(H,$){if(d=$.getViewerPose(u||o),y=$,d!==null){const rt=d.views;m!==null&&(t.setRenderTargetFramebuffer(l,m.framebuffer),t.setRenderTarget(l));let ut=!1;rt.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let U=0;U<rt.length;U++){const Ut=rt[U];let xt=null;if(m!==null)xt=m.getViewport(Ut);else{const ct=p.getViewSubImage(g,Ut);xt=ct.viewport,U===0&&(t.setRenderTargetTextures(l,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(l))}let mt=A[U];mt===void 0&&(mt=new nn,mt.layers.enable(U),mt.viewport=new re,A[U]=mt),mt.matrix.fromArray(Ut.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ut.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(xt.x,xt.y,xt.width,xt.height),U===0&&(b.matrix.copy(mt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(mt)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=n.getBinding();const U=p.getDepthInformation(rt[0]);U&&U.isValid&&U.texture&&v.init(U,r.renderState)}if(at&&at.includes("camera-access")&&T){t.state.unbindTexture(),p=n.getBinding();for(let U=0;U<rt.length;U++){const Ut=rt[U].camera;if(Ut){let xt=_[Ut];xt||(xt=new Tc,_[Ut]=xt);const mt=p.getCameraImage(Ut);xt.sourceTexture=mt}}}}for(let rt=0;rt<M.length;rt++){const ut=c[rt],at=M[rt];ut!==null&&at!==void 0&&at.update(ut,$,u||o)}At&&At(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),y=null}const _t=new bc;_t.setAnimationLoop(yt),this.setAnimationLoop=function(H){At=H},this.dispose=function(){}}}const jn=new sn,Dg=new jt;function Ig(i,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,mc(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,E,f,l){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(v,_):_.isMeshToonMaterial?(s(v,_),p(v,_)):_.isMeshPhongMaterial?(s(v,_),d(v,_)):_.isMeshStandardMaterial?(s(v,_),g(v,_),_.isMeshPhysicalMaterial&&m(v,_,l)):_.isMeshMatcapMaterial?(s(v,_),y(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),T(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&a(v,_)):_.isPointsMaterial?h(v,_,E,f):_.isSpriteMaterial?u(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===1&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===1&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const E=t.get(_),f=E.envMap,l=E.envMapRotation;f&&(v.envMap.value=f,jn.copy(l),jn.x*=-1,jn.y*=-1,jn.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),v.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(jn)),v.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function a(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,E,f){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*E,v.scale.value=f*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function d(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,E){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===1&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,_){_.matcap&&(v.matcap.value=_.matcap)}function T(v,_){const E=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lg(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,f){const l=f.program;n.uniformBlockBinding(E,l)}function u(E,f){let l=r[E.id];l===void 0&&(y(E),l=d(E),r[E.id]=l,E.addEventListener("dispose",v));const M=f.program;n.updateUBOMapping(E,M);const c=t.render.frame;s[E.id]!==c&&(g(E),s[E.id]=c)}function d(E){const f=p();E.__bindingPointIndex=f;const l=i.createBuffer(),M=E.__size,c=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,l),i.bufferData(i.UNIFORM_BUFFER,M,c),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,f,l),l}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const f=r[E.id],l=E.uniforms,M=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,f);for(let c=0,C=l.length;c<C;c++){const w=Array.isArray(l[c])?l[c]:[l[c]];for(let S=0,x=w.length;S<x;S++){const A=w[S];if(m(A,c,S,M)===!0){const b=A.__offset,R=Array.isArray(A.value)?A.value:[A.value];let F=0;for(let B=0;B<R.length;B++){const O=R[B],W=T(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,b+F,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,f,l,M){const c=E.value,C=f+"_"+l;if(M[C]===void 0)return typeof c=="number"||typeof c=="boolean"?M[C]=c:M[C]=c.clone(),!0;{const w=M[C];if(typeof c=="number"||typeof c=="boolean"){if(w!==c)return M[C]=c,!0}else if(w.equals(c)===!1)return w.copy(c),!0}return!1}function y(E){const f=E.uniforms;let l=0;const M=16;for(let C=0,w=f.length;C<w;C++){const S=Array.isArray(f[C])?f[C]:[f[C]];for(let x=0,A=S.length;x<A;x++){const b=S[x],R=Array.isArray(b.value)?b.value:[b.value];for(let F=0,B=R.length;F<B;F++){const O=R[F],W=T(O),z=l%M,Z=z%W.boundary,st=z+Z;l+=Z,st!==0&&M-st<W.storage&&(l+=M-st),b.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=l,l+=W.storage}}}const c=l%M;return c>0&&(l+=M-c),E.__size=l,E.__cache={},this}function T(E){const f={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(f.boundary=4,f.storage=4):E.isVector2?(f.boundary=8,f.storage=8):E.isVector3||E.isColor?(f.boundary=16,f.storage=12):E.isVector4?(f.boundary=16,f.storage=16):E.isMatrix3?(f.boundary=48,f.storage=48):E.isMatrix4?(f.boundary=64,f.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),f}function v(E){const f=E.target;f.removeEventListener("dispose",v);const l=o.indexOf(f.__bindingPointIndex);o.splice(l,1),i.deleteBuffer(r[f.id]),delete r[f.id],delete s[f.id]}function _(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:h,update:u,dispose:_}}class Ug{constructor(t={}){const{canvas:e=mu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const y=new Uint32Array(4),T=new Int32Array(4);let v=null,_=null;const E=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const l=this;let M=!1;this._outputColorSpace=Ve;let c=0,C=0,w=null,S=-1,x=null;const A=new re,b=new re;let R=null;const F=new Yt(0);let B=0,O=e.width,W=e.height,z=1,Z=null,st=null;const et=new re(0,0,O,W),dt=new re(0,0,O,W);let At=!1;const yt=new Sc;let _t=!1,H=!1;const $=new jt,rt=new L,ut=new re,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function qt(){return w===null?z:1}let U=n;function Ut(D,V){return e.getContext(D,V)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",it,!1),U===null){const V="webgl2";if(U=Ut(V,D),U===null)throw Ut(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let xt,mt,ct,Kt,ht,bt,Ot,zt,I,P,G,Y,J,X,gt,pt,Ct,Pt,lt,Tt,Nt,Lt,q,nt;function N(){xt=new Wd(U),xt.init(),Lt=new bg(U,xt),mt=new Bd(U,xt,t,Lt),ct=new Eg(U,xt),mt.reversedDepthBuffer&&g&&ct.buffers.depth.setReversed(!0),Kt=new Yd(U),ht=new hg,bt=new Ag(U,xt,ct,ht,mt,Lt,Kt),Ot=new zd(l),zt=new kd(l),I=new Ju(U),q=new Fd(U,I),P=new Xd(U,I,Kt,q),G=new Kd(U,P,I,Kt),lt=new $d(U,mt,bt),pt=new Od(ht),Y=new ug(l,Ot,zt,xt,mt,q,pt),J=new Ig(l,ht),X=new dg,gt=new xg(xt),Pt=new Ud(l,Ot,zt,ct,G,m,h),Ct=new yg(l,G,mt),nt=new Lg(U,Kt,mt,ct),Tt=new Nd(U,xt,Kt),Nt=new qd(U,xt,Kt),Kt.programs=Y.programs,l.capabilities=mt,l.extensions=xt,l.properties=ht,l.renderLists=X,l.shadowMap=Ct,l.state=ct,l.info=Kt}N();const tt=new Pg(l,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const D=xt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(O,W,!1))},this.getSize=function(D){return D.set(O,W)},this.setSize=function(D,V,K=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,W=V,e.width=Math.floor(D*z),e.height=Math.floor(V*z),K===!0&&(e.style.width=D+"px",e.style.height=V+"px"),this.setViewport(0,0,D,V)},this.getDrawingBufferSize=function(D){return D.set(O*z,W*z).floor()},this.setDrawingBufferSize=function(D,V,K){O=D,W=V,z=K,e.width=Math.floor(D*K),e.height=Math.floor(V*K),this.setViewport(0,0,D,V)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(et)},this.setViewport=function(D,V,K,j){D.isVector4?et.set(D.x,D.y,D.z,D.w):et.set(D,V,K,j),ct.viewport(A.copy(et).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(dt)},this.setScissor=function(D,V,K,j){D.isVector4?dt.set(D.x,D.y,D.z,D.w):dt.set(D,V,K,j),ct.scissor(b.copy(dt).multiplyScalar(z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(D){ct.setScissorTest(At=D)},this.setOpaqueSort=function(D){Z=D},this.setTransparentSort=function(D){st=D},this.getClearColor=function(D){return D.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(D=!0,V=!0,K=!0){let j=0;if(D){let k=!1;if(w!==null){const ft=w.texture.format;k=ft===1033||ft===1031||ft===1029}if(k){const ft=w.texture.type,Et=ft===1009||ft===1014||ft===1012||ft===1020||ft===1017||ft===1018,Dt=Pt.getClearColor(),Rt=Pt.getClearAlpha(),Gt=Dt.r,Ht=Dt.g,Ft=Dt.b;Et?(y[0]=Gt,y[1]=Ht,y[2]=Ft,y[3]=Rt,U.clearBufferuiv(U.COLOR,0,y)):(T[0]=Gt,T[1]=Ht,T[2]=Ft,T[3]=Rt,U.clearBufferiv(U.COLOR,0,T))}else j|=U.COLOR_BUFFER_BIT}V&&(j|=U.DEPTH_BUFFER_BIT),K&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Pt.dispose(),X.dispose(),gt.dispose(),ht.dispose(),Ot.dispose(),zt.dispose(),G.dispose(),q.dispose(),nt.dispose(),Y.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",gn),tt.removeEventListener("sessionend",da),Wn.stop()};function ot(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const D=Kt.autoReset,V=Ct.enabled,K=Ct.autoUpdate,j=Ct.needsUpdate,k=Ct.type;N(),Kt.autoReset=D,Ct.enabled=V,Ct.autoUpdate=K,Ct.needsUpdate=j,Ct.type=k}function it(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Q(D){const V=D.target;V.removeEventListener("dispose",Q),wt(V)}function wt(D){Vt(D),ht.remove(D)}function Vt(D){const V=ht.get(D).programs;V!==void 0&&(V.forEach(function(K){Y.releaseProgram(K)}),D.isShaderMaterial&&Y.releaseShaderCache(D))}this.renderBufferDirect=function(D,V,K,j,k,ft){V===null&&(V=at);const Et=k.isMesh&&k.matrixWorld.determinant()<0,Dt=$c(D,V,K,j,k);ct.setMaterial(j,Et);let Rt=K.index,Gt=1;if(j.wireframe===!0){if(Rt=P.getWireframeAttribute(K),Rt===void 0)return;Gt=2}const Ht=K.drawRange,Ft=K.attributes.position;let $t=Ht.start*Gt,ne=(Ht.start+Ht.count)*Gt;ft!==null&&($t=Math.max($t,ft.start*Gt),ne=Math.min(ne,(ft.start+ft.count)*Gt)),Rt!==null?($t=Math.max($t,0),ne=Math.min(ne,Rt.count)):Ft!=null&&($t=Math.max($t,0),ne=Math.min(ne,Ft.count));const ue=ne-$t;if(ue<0||ue===1/0)return;q.setup(k,j,Dt,K,Rt);let se,ie=Tt;if(Rt!==null&&(se=I.get(Rt),ie=Nt,ie.setIndex(se)),k.isMesh)j.wireframe===!0?(ct.setLineWidth(j.wireframeLinewidth*qt()),ie.setMode(U.LINES)):ie.setMode(U.TRIANGLES);else if(k.isLine){let Bt=j.linewidth;Bt===void 0&&(Bt=1),ct.setLineWidth(Bt*qt()),k.isLineSegments?ie.setMode(U.LINES):k.isLineLoop?ie.setMode(U.LINE_LOOP):ie.setMode(U.LINE_STRIP)}else k.isPoints?ie.setMode(U.POINTS):k.isSprite&&ie.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,le=k._multiDrawCounts,Jt=k._multiDrawCount,We=Rt?I.get(Rt).bytesPerElement:1,fi=ht.get(j).currentProgram.getUniforms();for(let Xe=0;Xe<Jt;Xe++)fi.setValue(U,"_gl_DrawID",Xe),ie.render(Bt[Xe]/We,le[Xe])}else if(k.isInstancedMesh)ie.renderInstances($t,ue,k.count);else if(K.isInstancedBufferGeometry){const Bt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,le=Math.min(K.instanceCount,Bt);ie.renderInstances($t,ue,le)}else ie.render($t,ue)};function Qt(D,V,K){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,Er(D,V,K),D.side=0,D.needsUpdate=!0,Er(D,V,K),D.side=2):Er(D,V,K)}this.compile=function(D,V,K=null){K===null&&(K=D),_=gt.get(K),_.init(V),f.push(_),K.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),D!==K&&D.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const j=new Set;return D.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ft=k.material;if(ft)if(Array.isArray(ft))for(let Et=0;Et<ft.length;Et++){const Dt=ft[Et];Qt(Dt,K,k),j.add(Dt)}else Qt(ft,K,k),j.add(ft)}),_=f.pop(),j},this.compileAsync=function(D,V,K=null){const j=this.compile(D,V,K);return new Promise(k=>{function ft(){if(j.forEach(function(Et){ht.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){k(D);return}setTimeout(ft,10)}xt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let te=null;function xn(D){te&&te(D)}function gn(){Wn.stop()}function da(){Wn.start()}const Wn=new bc;Wn.setAnimationLoop(xn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(D){te=D,tt.setAnimationLoop(D),D===null?Wn.stop():Wn.start()},tt.addEventListener("sessionstart",gn),tt.addEventListener("sessionend",da),this.render=function(D,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(V),V=tt.getCamera()),D.isScene===!0&&D.onBeforeRender(l,D,V,w),_=gt.get(D,f.length),_.init(V),f.push(_),$.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),yt.setFromProjectionMatrix($,2e3,V.reversedDepth),H=this.localClippingEnabled,_t=pt.init(this.clippingPlanes,H),v=X.get(D,E.length),v.init(),E.push(v),tt.enabled===!0&&tt.isPresenting===!0){const ft=l.xr.getDepthSensingMesh();ft!==null&&Is(ft,V,-1/0,l.sortObjects)}Is(D,V,0,l.sortObjects),v.finish(),l.sortObjects===!0&&v.sort(Z,st),Mt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Mt&&Pt.addToRenderList(v,D),this.info.render.frame++,_t===!0&&pt.beginShadows();const K=_.state.shadowsArray;Ct.render(K,D,V),_t===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,k=v.transmissive;if(_.setupLights(),V.isArrayCamera){const ft=V.cameras;if(k.length>0)for(let Et=0,Dt=ft.length;Et<Dt;Et++){const Rt=ft[Et];ga(j,k,D,Rt)}Mt&&Pt.render(D);for(let Et=0,Dt=ft.length;Et<Dt;Et++){const Rt=ft[Et];pa(v,D,Rt,Rt.viewport)}}else k.length>0&&ga(j,k,D,V),Mt&&Pt.render(D),pa(v,D,V);w!==null&&C===0&&(bt.updateMultisampleRenderTarget(w),bt.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(l,D,V),q.resetDefaultState(),S=-1,x=null,f.pop(),f.length>0?(_=f[f.length-1],_t===!0&&pt.setGlobalState(l.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Is(D,V,K,j){if(D.visible===!1)return;if(D.layers.test(V.layers)){if(D.isGroup)K=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(V);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||yt.intersectsSprite(D)){j&&ut.setFromMatrixPosition(D.matrixWorld).applyMatrix4($);const Et=G.update(D),Dt=D.material;Dt.visible&&v.push(D,Et,Dt,K,ut.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||yt.intersectsObject(D))){const Et=G.update(D),Dt=D.material;if(j&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ut.copy(D.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ut.copy(Et.boundingSphere.center)),ut.applyMatrix4(D.matrixWorld).applyMatrix4($)),Array.isArray(Dt)){const Rt=Et.groups;for(let Gt=0,Ht=Rt.length;Gt<Ht;Gt++){const Ft=Rt[Gt],$t=Dt[Ft.materialIndex];$t&&$t.visible&&v.push(D,Et,$t,K,ut.z,Ft)}}else Dt.visible&&v.push(D,Et,Dt,K,ut.z,null)}}const ft=D.children;for(let Et=0,Dt=ft.length;Et<Dt;Et++)Is(ft[Et],V,K,j)}function pa(D,V,K,j){const k=D.opaque,ft=D.transmissive,Et=D.transparent;_.setupLightsView(K),_t===!0&&pt.setGlobalState(l.clippingPlanes,K),j&&ct.viewport(A.copy(j)),k.length>0&&Tr(k,V,K),ft.length>0&&Tr(ft,V,K),Et.length>0&&Tr(Et,V,K),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function ga(D,V,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new dn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ft=_.state.transmissionRenderTarget[j.id],Et=j.viewport||A;ft.setSize(Et.z*l.transmissionResolutionScale,Et.w*l.transmissionResolutionScale);const Dt=l.getRenderTarget(),Rt=l.getActiveCubeFace(),Gt=l.getActiveMipmapLevel();l.setRenderTarget(ft),l.getClearColor(F),B=l.getClearAlpha(),B<1&&l.setClearColor(16777215,.5),l.clear(),Mt&&Pt.render(K);const Ht=l.toneMapping;l.toneMapping=0;const Ft=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),_t===!0&&pt.setGlobalState(l.clippingPlanes,j),Tr(D,K,j),bt.updateMultisampleRenderTarget(ft),bt.updateRenderTargetMipmap(ft),xt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ne=0,ue=V.length;ne<ue;ne++){const se=V[ne],ie=se.object,Bt=se.geometry,le=se.material,Jt=se.group;if(le.side===2&&ie.layers.test(j.layers)){const We=le.side;le.side=1,le.needsUpdate=!0,ma(ie,K,j,Bt,le,Jt),le.side=We,le.needsUpdate=!0,$t=!0}}$t===!0&&(bt.updateMultisampleRenderTarget(ft),bt.updateRenderTargetMipmap(ft))}l.setRenderTarget(Dt,Rt,Gt),l.setClearColor(F,B),Ft!==void 0&&(j.viewport=Ft),l.toneMapping=Ht}function Tr(D,V,K){const j=V.isScene===!0?V.overrideMaterial:null;for(let k=0,ft=D.length;k<ft;k++){const Et=D[k],Dt=Et.object,Rt=Et.geometry,Gt=Et.group;let Ht=Et.material;Ht.allowOverride===!0&&j!==null&&(Ht=j),Dt.layers.test(K.layers)&&ma(Dt,V,K,Rt,Ht,Gt)}}function ma(D,V,K,j,k,ft){D.onBeforeRender(l,V,K,j,k,ft),D.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),k.onBeforeRender(l,V,K,j,D,ft),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1?(k.side=1,k.needsUpdate=!0,l.renderBufferDirect(K,V,j,k,D,ft),k.side=0,k.needsUpdate=!0,l.renderBufferDirect(K,V,j,k,D,ft),k.side=2):l.renderBufferDirect(K,V,j,k,D,ft),D.onAfterRender(l,V,K,j,k,ft)}function Er(D,V,K){V.isScene!==!0&&(V=at);const j=ht.get(D),k=_.state.lights,ft=_.state.shadowsArray,Et=k.state.version,Dt=Y.getParameters(D,k.state,ft,V,K),Rt=Y.getProgramCacheKey(Dt);let Gt=j.programs;j.environment=D.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(D.isMeshStandardMaterial?zt:Ot).get(D.envMap||j.environment),j.envMapRotation=j.environment!==null&&D.envMap===null?V.environmentRotation:D.envMapRotation,Gt===void 0&&(D.addEventListener("dispose",Q),Gt=new Map,j.programs=Gt);let Ht=Gt.get(Rt);if(Ht!==void 0){if(j.currentProgram===Ht&&j.lightsStateVersion===Et)return va(D,Dt),Ht}else Dt.uniforms=Y.getUniforms(D),D.onBeforeCompile(Dt,l),Ht=Y.acquireProgram(Dt,Rt),Gt.set(Rt,Ht),j.uniforms=Dt.uniforms;const Ft=j.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ft.clippingPlanes=pt.uniform),va(D,Dt),j.needsLights=Zc(D),j.lightsStateVersion=Et,j.needsLights&&(Ft.ambientLightColor.value=k.state.ambient,Ft.lightProbe.value=k.state.probe,Ft.directionalLights.value=k.state.directional,Ft.directionalLightShadows.value=k.state.directionalShadow,Ft.spotLights.value=k.state.spot,Ft.spotLightShadows.value=k.state.spotShadow,Ft.rectAreaLights.value=k.state.rectArea,Ft.ltc_1.value=k.state.rectAreaLTC1,Ft.ltc_2.value=k.state.rectAreaLTC2,Ft.pointLights.value=k.state.point,Ft.pointLightShadows.value=k.state.pointShadow,Ft.hemisphereLights.value=k.state.hemi,Ft.directionalShadowMap.value=k.state.directionalShadowMap,Ft.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ft.spotShadowMap.value=k.state.spotShadowMap,Ft.spotLightMatrix.value=k.state.spotLightMatrix,Ft.spotLightMap.value=k.state.spotLightMap,Ft.pointShadowMap.value=k.state.pointShadowMap,Ft.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ht,j.uniformsList=null,Ht}function _a(D){if(D.uniformsList===null){const V=D.currentProgram.getUniforms();D.uniformsList=gs.seqWithValue(V.seq,D.uniforms)}return D.uniformsList}function va(D,V){const K=ht.get(D);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function $c(D,V,K,j,k){V.isScene!==!0&&(V=at),bt.resetTextureUnits();const ft=V.fog,Et=j.isMeshStandardMaterial?V.environment:null,Dt=w===null?l.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xi,Rt=(j.isMeshStandardMaterial?zt:Ot).get(j.envMap||Et),Gt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ft=!!K.morphAttributes.position,$t=!!K.morphAttributes.normal,ne=!!K.morphAttributes.color;let ue=0;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ue=l.toneMapping);const se=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=se!==void 0?se.length:0,Bt=ht.get(j),le=_.state.lights;if(_t===!0&&(H===!0||D!==x)){const De=D===x&&j.id===S;pt.setState(j,D,De)}let Jt=!1;j.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==le.state.version||Bt.outputColorSpace!==Dt||k.isBatchedMesh&&Bt.batching===!1||!k.isBatchedMesh&&Bt.batching===!0||k.isBatchedMesh&&Bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Bt.instancing===!1||!k.isInstancedMesh&&Bt.instancing===!0||k.isSkinnedMesh&&Bt.skinning===!1||!k.isSkinnedMesh&&Bt.skinning===!0||k.isInstancedMesh&&Bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Bt.instancingMorph===!1&&k.morphTexture!==null||Bt.envMap!==Rt||j.fog===!0&&Bt.fog!==ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==pt.numPlanes||Bt.numIntersection!==pt.numIntersection)||Bt.vertexAlphas!==Gt||Bt.vertexTangents!==Ht||Bt.morphTargets!==Ft||Bt.morphNormals!==$t||Bt.morphColors!==ne||Bt.toneMapping!==ue||Bt.morphTargetsCount!==ie)&&(Jt=!0):(Jt=!0,Bt.__version=j.version);let We=Bt.currentProgram;Jt===!0&&(We=Er(j,V,k));let fi=!1,Xe=!1,Qi=!1;const ce=We.getUniforms(),je=Bt.uniforms;if(ct.useProgram(We.program)&&(fi=!0,Xe=!0,Qi=!0),j.id!==S&&(S=j.id,Xe=!0),fi||x!==D){ct.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ce.setValue(U,"projectionMatrix",D.projectionMatrix),ce.setValue(U,"viewMatrix",D.matrixWorldInverse);const Oe=ce.map.cameraPosition;Oe!==void 0&&Oe.setValue(U,rt.setFromMatrixPosition(D.matrixWorld)),mt.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ce.setValue(U,"isOrthographic",D.isOrthographicCamera===!0),x!==D&&(x=D,Xe=!0,Qi=!0)}if(k.isSkinnedMesh){ce.setOptional(U,k,"bindMatrix"),ce.setOptional(U,k,"bindMatrixInverse");const De=k.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ce.setValue(U,"boneTexture",De.boneTexture,bt))}k.isBatchedMesh&&(ce.setOptional(U,k,"batchingTexture"),ce.setValue(U,"batchingTexture",k._matricesTexture,bt),ce.setOptional(U,k,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",k._indirectTexture,bt),ce.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",k._colorsTexture,bt));const Je=K.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&lt.update(k,K,We),(Xe||Bt.receiveShadow!==k.receiveShadow)&&(Bt.receiveShadow=k.receiveShadow,ce.setValue(U,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(je.envMap.value=Rt,je.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(je.envMapIntensity.value=V.environmentIntensity),Xe&&(ce.setValue(U,"toneMappingExposure",l.toneMappingExposure),Bt.needsLights&&Kc(je,Qi),ft&&j.fog===!0&&J.refreshFogUniforms(je,ft),J.refreshMaterialUniforms(je,j,z,W,_.state.transmissionRenderTarget[D.id]),gs.upload(U,_a(Bt),je,bt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gs.upload(U,_a(Bt),je,bt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ce.setValue(U,"center",k.center),ce.setValue(U,"modelViewMatrix",k.modelViewMatrix),ce.setValue(U,"normalMatrix",k.normalMatrix),ce.setValue(U,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const De=j.uniformsGroups;for(let Oe=0,Ls=De.length;Oe<Ls;Oe++){const Xn=De[Oe];nt.update(Xn,We),nt.bind(Xn,We)}}return We}function Kc(D,V){D.ambientLightColor.needsUpdate=V,D.lightProbe.needsUpdate=V,D.directionalLights.needsUpdate=V,D.directionalLightShadows.needsUpdate=V,D.pointLights.needsUpdate=V,D.pointLightShadows.needsUpdate=V,D.spotLights.needsUpdate=V,D.spotLightShadows.needsUpdate=V,D.rectAreaLights.needsUpdate=V,D.hemisphereLights.needsUpdate=V}function Zc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,V,K){const j=ht.get(D);j.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ht.get(D.texture).__webglTexture=V,ht.get(D.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,V){const K=ht.get(D);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const jc=U.createFramebuffer();this.setRenderTarget=function(D,V=0,K=0){w=D,c=V,C=K;let j=!0,k=null,ft=!1,Et=!1;if(D){const Rt=ht.get(D);if(Rt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Rt.__webglFramebuffer===void 0)bt.setupRenderTarget(D);else if(Rt.__hasExternalTextures)bt.rebindTextures(D,ht.get(D.texture).__webglTexture,ht.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ft=D.depthTexture;if(Rt.__boundDepthTexture!==Ft){if(Ft!==null&&ht.has(Ft)&&(D.width!==Ft.image.width||D.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(D)}}const Gt=D.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const Ht=ht.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?k=Ht[V][K]:k=Ht[V],ft=!0):D.samples>0&&bt.useMultisampledRTT(D)===!1?k=ht.get(D).__webglMultisampledFramebuffer:Array.isArray(Ht)?k=Ht[K]:k=Ht,A.copy(D.viewport),b.copy(D.scissor),R=D.scissorTest}else A.copy(et).multiplyScalar(z).floor(),b.copy(dt).multiplyScalar(z).floor(),R=At;if(K!==0&&(k=jc),ct.bindFramebuffer(U.FRAMEBUFFER,k)&&j&&ct.drawBuffers(D,k),ct.viewport(A),ct.scissor(b),ct.setScissorTest(R),ft){const Rt=ht.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,K)}else if(Et){const Rt=V;for(let Gt=0;Gt<D.textures.length;Gt++){const Ht=ht.get(D.textures[Gt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Gt,Ht.__webglTexture,K,Rt)}}else if(D!==null&&K!==0){const Rt=ht.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(D,V,K,j,k,ft,Et,Dt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){ct.bindFramebuffer(U.FRAMEBUFFER,Rt);try{const Gt=D.textures[Dt],Ht=Gt.format,Ft=Gt.type;if(!mt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=D.width-j&&K>=0&&K<=D.height-k&&(D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Dt),U.readPixels(V,K,j,k,Lt.convert(Ht),Lt.convert(Ft),ft))}finally{const Gt=w!==null?ht.get(w).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(D,V,K,j,k,ft,Et,Dt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt)if(V>=0&&V<=D.width-j&&K>=0&&K<=D.height-k){ct.bindFramebuffer(U.FRAMEBUFFER,Rt);const Gt=D.textures[Dt],Ht=Gt.format,Ft=Gt.type;if(!mt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Dt),U.readPixels(V,K,j,k,Lt.convert(Ht),Lt.convert(Ft),0);const ne=w!==null?ht.get(w).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,ne);const ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _u(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft),U.deleteBuffer($t),U.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,V=null,K=0){const j=Math.pow(2,-K),k=Math.floor(D.image.width*j),ft=Math.floor(D.image.height*j),Et=V!==null?V.x:0,Dt=V!==null?V.y:0;bt.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Et,Dt,k,ft),ct.unbindTexture()};const Jc=U.createFramebuffer(),Qc=U.createFramebuffer();this.copyTextureToTexture=function(D,V,K=null,j=null,k=0,ft=null){ft===null&&(k!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=k,k=0):ft=0);let Et,Dt,Rt,Gt,Ht,Ft,$t,ne,ue;const se=D.isCompressedTexture?D.mipmaps[ft]:D.image;if(K!==null)Et=K.max.x-K.min.x,Dt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,Gt=K.min.x,Ht=K.min.y,Ft=K.isBox3?K.min.z:0;else{const Je=Math.pow(2,-k);Et=Math.floor(se.width*Je),Dt=Math.floor(se.height*Je),D.isDataArrayTexture?Rt=se.depth:D.isData3DTexture?Rt=Math.floor(se.depth*Je):Rt=1,Gt=0,Ht=0,Ft=0}j!==null?($t=j.x,ne=j.y,ue=j.z):($t=0,ne=0,ue=0);const ie=Lt.convert(V.format),Bt=Lt.convert(V.type);let le;V.isData3DTexture?(bt.setTexture3D(V,0),le=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(bt.setTexture2DArray(V,0),le=U.TEXTURE_2D_ARRAY):(bt.setTexture2D(V,0),le=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Jt=U.getParameter(U.UNPACK_ROW_LENGTH),We=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=U.getParameter(U.UNPACK_SKIP_PIXELS),Xe=U.getParameter(U.UNPACK_SKIP_ROWS),Qi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const ce=D.isDataArrayTexture||D.isData3DTexture,je=V.isDataArrayTexture||V.isData3DTexture;if(D.isDepthTexture){const Je=ht.get(D),De=ht.get(V),Oe=ht.get(Je.__renderTarget),Ls=ht.get(De.__renderTarget);ct.bindFramebuffer(U.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Xn=0;Xn<Rt;Xn++)ce&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ht.get(D).__webglTexture,k,Ft+Xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ht.get(V).__webglTexture,ft,ue+Xn)),U.blitFramebuffer(Gt,Ht,Et,Dt,$t,ne,Et,Dt,U.DEPTH_BUFFER_BIT,U.NEAREST);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||D.isRenderTargetTexture||ht.has(D)){const Je=ht.get(D),De=ht.get(V);ct.bindFramebuffer(U.READ_FRAMEBUFFER,Jc),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qc);for(let Oe=0;Oe<Rt;Oe++)ce?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.__webglTexture,k,Ft+Oe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Je.__webglTexture,k),je?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,ft,ue+Oe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,ft),k!==0?U.blitFramebuffer(Gt,Ht,Et,Dt,$t,ne,Et,Dt,U.COLOR_BUFFER_BIT,U.NEAREST):je?U.copyTexSubImage3D(le,ft,$t,ne,ue+Oe,Gt,Ht,Et,Dt):U.copyTexSubImage2D(le,ft,$t,ne,Gt,Ht,Et,Dt);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else je?D.isDataTexture||D.isData3DTexture?U.texSubImage3D(le,ft,$t,ne,ue,Et,Dt,Rt,ie,Bt,se.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(le,ft,$t,ne,ue,Et,Dt,Rt,ie,se.data):U.texSubImage3D(le,ft,$t,ne,ue,Et,Dt,Rt,ie,Bt,se):D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ft,$t,ne,Et,Dt,ie,Bt,se.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ft,$t,ne,se.width,se.height,ie,se.data):U.texSubImage2D(U.TEXTURE_2D,ft,$t,ne,Et,Dt,ie,Bt,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,We),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qi),ft===0&&V.generateMipmaps&&U.generateMipmap(le),ct.unbindTexture()},this.initRenderTarget=function(D){ht.get(D).__webglFramebuffer===void 0&&bt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?bt.setTextureCube(D,0):D.isData3DTexture?bt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?bt.setTexture2DArray(D,0):bt.setTexture2D(D,0),ct.unbindTexture()},this.resetState=function(){c=0,C=0,w=null,ct.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const rr=new L;function tn(i,t,e,n,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),h=Math.PI/4;rr.copy(t),rr[n]=0,rr.normalize();const u=.5*o/(o+a),d=1-rr.angleTo(i)/h;return Math.sign(rr[e])===1?d*u:a/(o+a)+u+u*(1-d)}class ia extends hi{constructor(t=1,e=1,n=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const h=new L,u=new L,d=new L(t,e,n).divideScalar(2).subScalar(s),p=this.attributes.position.array,g=this.attributes.normal.array,m=this.attributes.uv.array,y=p.length/6,T=new L,v=.5/o;for(let _=0,E=0;_<p.length;_+=3,E+=2)switch(h.fromArray(p,_),u.copy(h),u.x-=Math.sign(u.x)*v,u.y-=Math.sign(u.y)*v,u.z-=Math.sign(u.z)*v,u.normalize(),p[_+0]=d.x*Math.sign(h.x)+u.x*s,p[_+1]=d.y*Math.sign(h.y)+u.y*s,p[_+2]=d.z*Math.sign(h.z)+u.z*s,g[_+0]=u.x,g[_+1]=u.y,g[_+2]=u.z,Math.floor(_/y)){case 0:T.set(1,0,0),m[E+0]=tn(T,u,"z","y",s,n),m[E+1]=1-tn(T,u,"y","z",s,e);break;case 1:T.set(-1,0,0),m[E+0]=1-tn(T,u,"z","y",s,n),m[E+1]=1-tn(T,u,"y","z",s,e);break;case 2:T.set(0,1,0),m[E+0]=1-tn(T,u,"x","z",s,t),m[E+1]=tn(T,u,"z","x",s,n);break;case 3:T.set(0,-1,0),m[E+0]=1-tn(T,u,"x","z",s,t),m[E+1]=1-tn(T,u,"z","x",s,n);break;case 4:T.set(0,0,1),m[E+0]=1-tn(T,u,"x","y",s,t),m[E+1]=1-tn(T,u,"y","x",s,e);break;case 5:T.set(0,0,-1),m[E+0]=tn(T,u,"x","y",s,t),m[E+1]=1-tn(T,u,"y","x",s,e);break}}static fromJSON(t){return new ia(t.width,t.height,t.depth,t.segments,t.radius)}}const ms={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fg=new Ec(-1,1,1,-1,0,1);class Ng extends pn{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}const Bg=new Ng;class ra{constructor(t){this._mesh=new we(Bg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Dc extends Ji{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mr.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ra(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dl extends Ji{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Og extends Ji{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class pl{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:1016}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dc(ms),this.copyPass.material.blending=0,this.clock=new Ac}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}dl!==void 0&&(o instanceof dl?n=!0:o instanceof Og&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zg extends Ji{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Yt}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const Gg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $i extends Ji{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new Yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,o,{type:1016}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new dn(s,o,{type:1016});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const g=new dn(s,o,{type:1016});g.texture.name="UnrealBloomPass.v"+d,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),o=Math.round(o/2)}const a=Gg;this.highPassUniforms=Mr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new It(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mr.clone(ms.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:ms.vertexShader,fragmentShader:ms.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Yt,this._oldClearAlpha=1,this._basic=new oi,this._fsQuad=new ra(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new It(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[h].uniforms.direction.value=$i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=$i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$i.BlurDirectionX=new It(1,0);$i.BlurDirectionY=new It(0,1);const qr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Vg extends Ji{constructor(){super(),this.uniforms=Mr.clone(qr.uniforms),this.material=new ku({name:qr.name,uniforms:this.uniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader}),this._fsQuad=new ra(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ic=0,Hg=1,kg=2,gl=2,co=1.25,ml=1,Ce=32,me=Ce/4,Lc=65535,_s=Math.pow(2,-24),sa=Symbol("SKIP_GENERATION"),Uc={strategy:Ic,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[sa]:!1};function he(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Oo(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function _l(i,t){t.set(i)}function vl(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Yr(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function sr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function de(i,t){return t[i+15]===Lc}function ye(i,t){return t[i+6]}function Pe(i,t){return t[i+14]}function _e(i){return i+me}function ve(i,t){const e=t[i+6];return i+e*me}function oa(i,t){return t[i+7]}function uo(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,u=-1/0,d=-1/0,p=1/0,g=1/0,m=1/0,y=-1/0,T=-1/0,v=-1/0;const _=i.offset||0;for(let E=(t-_)*6,f=(t+e-_)*6;E<f;E+=6){const l=i[E+0],M=i[E+1],c=l-M,C=l+M;c<s&&(s=c),C>h&&(h=C),l<p&&(p=l),l>y&&(y=l);const w=i[E+2],S=i[E+3],x=w-S,A=w+S;x<o&&(o=x),A>u&&(u=A),w<g&&(g=w),w>T&&(T=w);const b=i[E+4],R=i[E+5],F=b-R,B=b+R;F<a&&(a=F),B>d&&(d=B),b<m&&(m=b),b>v&&(v=b)}n[0]=s,n[1]=o,n[2]=a,n[3]=h,n[4]=u,n[5]=d,r[0]=p,r[1]=g,r[2]=m,r[3]=y,r[4]=T,r[5]=v}const wn=32,Wg=(i,t)=>i.candidate-t.candidate,Bn=new Array(wn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),$r=new Float32Array(6);function Xg(i,t,e,n,r,s){let o=-1,a=0;if(s===Ic)o=Oo(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Hg)o=Oo(i),o!==-1&&(a=qg(e,n,r,o));else if(s===kg){const h=sr(i);let u=co*r;const d=e.offset||0,p=(n-d)*6,g=(n+r-d)*6;for(let m=0;m<3;m++){const y=t[m],_=(t[m+3]-y)/wn;if(r<wn/4){const E=[...Bn];E.length=r;let f=0;for(let M=p;M<g;M+=6,f++){const c=E[f];c.candidate=e[M+2*m],c.count=0;const{bounds:C,leftCacheBounds:w,rightCacheBounds:S}=c;for(let x=0;x<3;x++)S[x]=1/0,S[x+3]=-1/0,w[x]=1/0,w[x+3]=-1/0,C[x]=1/0,C[x+3]=-1/0;Yr(M,e,C)}E.sort(Wg);let l=r;for(let M=0;M<l;M++){const c=E[M];for(;M+1<l&&E[M+1].candidate===c.candidate;)E.splice(M+1,1),l--}for(let M=p;M<g;M+=6){const c=e[M+2*m];for(let C=0;C<l;C++){const w=E[C];c>=w.candidate?Yr(M,e,w.rightCacheBounds):(Yr(M,e,w.leftCacheBounds),w.count++)}}for(let M=0;M<l;M++){const c=E[M],C=c.count,w=r-c.count,S=c.leftCacheBounds,x=c.rightCacheBounds;let A=0;C!==0&&(A=sr(S)/h);let b=0;w!==0&&(b=sr(x)/h);const R=ml+co*(A*C+b*w);R<u&&(o=m,u=R,a=c.candidate)}}else{for(let l=0;l<wn;l++){const M=Bn[l];M.count=0,M.candidate=y+_+l*_;const c=M.bounds;for(let C=0;C<3;C++)c[C]=1/0,c[C+3]=-1/0}for(let l=p;l<g;l+=6){let C=~~((e[l+2*m]-y)/_);C>=wn&&(C=wn-1);const w=Bn[C];w.count++,Yr(l,e,w.bounds)}const E=Bn[wn-1];_l(E.bounds,E.rightCacheBounds);for(let l=wn-2;l>=0;l--){const M=Bn[l],c=Bn[l+1];vl(M.bounds,c.rightCacheBounds,M.rightCacheBounds)}let f=0;for(let l=0;l<wn-1;l++){const M=Bn[l],c=M.count,C=M.bounds,S=Bn[l+1].rightCacheBounds;c!==0&&(f===0?_l(C,$r):vl(C,$r,$r)),f+=c;let x=0,A=0;f!==0&&(x=sr($r)/h);const b=r-f;b!==0&&(A=sr(S)/h);const R=ml+co*(x*f+A*b);R<u&&(o=m,u=R,a=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function qg(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}class ho{constructor(){this.boundingData=new Float32Array(6)}}function Yg(i,t,e,n,r,s){let o=n,a=n+r-1;const h=s.pos,u=s.axis*2,d=e.offset||0;for(;;){for(;o<=a&&e[(o-d)*6+u]<h;)o++;for(;o<=a&&e[(a-d)*6+u]>=h;)a--;if(o<a){for(let p=0;p<t;p++){let g=i[o*t+p];i[o*t+p]=i[a*t+p],i[a*t+p]=g}for(let p=0;p<6;p++){const g=o-d,m=a-d,y=e[g*6+p];e[g*6+p]=e[m*6+p],e[m*6+p]=y}o++,a--}else return o}}let Fc,vs,zo,Nc;const $g=Math.pow(2,32);function Go(i){return"count"in i?1:1+Go(i.left)+Go(i.right)}function Kg(i,t,e){return Fc=new Float32Array(e),vs=new Uint32Array(e),zo=new Uint16Array(e),Nc=new Uint8Array(e),Vo(i,t)}function Vo(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Fc[e+o]=s[o];if(r)return t.buffer?(Nc.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(vs[e+6]=t.offset,zo[n+14]=t.count,zo[n+15]=Lc,i+Ce);{const{left:o,right:a,splitAxis:h}=t,u=i+Ce;let d=Vo(u,o);const p=i/Ce,m=d/Ce-p;if(m>$g)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return vs[e+6]=m,vs[e+7]=h,Vo(d,a)}}function Zg(i,t,e,n,r,s){const{maxDepth:o,verbose:a,targetLeafSize:h,_strictLeafSize:u=1/0,strategy:d,onProgress:p}=r,g=i.primitiveBuffer,m=i.primitiveBufferStride,y=new Float32Array(6);let T=!1;const v=new ho;return uo(t,e,n,v.boundingData,y),E(v,e,n,y),v;function _(f){p&&p((f-s.offset)/s.count)}function E(f,l,M,c=null,C=0){!T&&C>=o&&(T=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const w=M>u;if(M<=h&&!w||C>=o)return _(l+M),f.offset=l,f.count=M,f;const S=Xg(f.boundingData,c,t,l,M,d);let x=S.axis===-1?-1:Yg(g,m,t,l,M,S);if(S.axis===-1||x===l||x===l+M){if(!w)return _(l+M),f.offset=l,f.count=M,f;S.axis=Math.max(0,Oo(f.boundingData)),x=l+Math.max(1,Math.floor(M/2))}f.splitAxis=S.axis;const A=new ho,b=l,R=x-l;f.left=A,uo(t,b,R,A.boundingData,y),E(A,b,R,y,C+1);const F=new ho,B=x,O=M-R;return f.right=F,uo(t,B,O,F.boundingData,y),E(F,B,O,y,C+1),f}}function jg(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(h=>{const u=Zg(i,a,h.offset,h.count,t,o),d=Go(u),p=new e(Ce*d);return Kg(0,u,p),p})}class aa{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Jg{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ae=new Jg;let Hn,Hi;const Ri=[],Kr=new aa(()=>new Ne);function Qg(i,t,e,n,r,s){Hn=Kr.getPrimitive(),Hi=Kr.getPrimitive(),Ri.push(Hn,Hi),ae.setBuffer(i._roots[t]);const o=Ho(0,i.geometry,e,n,r,s);ae.clearBuffer(),Kr.releasePrimitive(Hn),Kr.releasePrimitive(Hi),Ri.pop(),Ri.pop();const a=Ri.length;return a>0&&(Hi=Ri[a-1],Hn=Ri[a-2]),o}function Ho(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:h,uint32Array:u}=ae;let d=i*2;if(de(d,h)){const g=ye(i,u),m=Pe(d,h);return he(i,a,Hn),n(g,m,!1,o,s+i/me,Hn)}else{let x=function(b){const{uint16Array:R,uint32Array:F}=ae;let B=b*2;for(;!de(B,R);)b=_e(b),B=b*2;return ye(b,F)},A=function(b){const{uint16Array:R,uint32Array:F}=ae;let B=b*2;for(;!de(B,R);)b=ve(b,F),B=b*2;return ye(b,F)+Pe(B,R)};const g=_e(i),m=ve(i,u);let y=g,T=m,v,_,E,f;if(r&&(E=Hn,f=Hi,he(y,a,E),he(T,a,f),v=r(E),_=r(f),_<v)){y=m,T=g;const b=v;v=_,_=b,E=f}E||(E=Hn,he(y,a,E));const l=de(y*2,h),M=e(E,l,v,o+1,s+y/me);let c;if(M===gl){const b=x(y),F=A(y)-b;c=n(b,F,!0,o+1,s+y/me,E)}else c=M&&Ho(y,t,e,n,r,s,o+1);if(c)return!0;f=Hi,he(T,a,f);const C=de(T*2,h),w=e(f,C,_,o+1,s+T/me);let S;if(w===gl){const b=x(T),F=A(T)-b;S=n(b,F,!0,o+1,s+T/me,f)}else S=w&&Ho(T,t,e,n,r,s,o+1);return!!S}}const mr=new ae.constructor,Es=new ae.constructor,zn=new aa(()=>new Ne),Ci=new Ne,Pi=new Ne,fo=new Ne,po=new Ne;let go=!1;function tm(i,t,e,n){if(go)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");go=!0;const r=i._roots,s=t._roots;let o,a=0,h=0;const u=new jt().copy(e).invert();for(let d=0,p=r.length;d<p;d++){mr.setBuffer(r[d]),h=0;const g=zn.getPrimitive();he(0,mr.float32Array,g),g.applyMatrix4(u);for(let m=0,y=s.length;m<y&&(Es.setBuffer(s[m]),o=hn(0,0,e,u,n,a,h,0,0,g),Es.clearBuffer(),h+=s[m].byteLength/Ce,!o);m++);if(zn.releasePrimitive(g),mr.clearBuffer(),a+=r[d].byteLength/Ce,o)break}return go=!1,o}function hn(i,t,e,n,r,s=0,o=0,a=0,h=0,u=null,d=!1){let p,g;d?(p=Es,g=mr):(p=mr,g=Es);const m=p.float32Array,y=p.uint32Array,T=p.uint16Array,v=g.float32Array,_=g.uint32Array,E=g.uint16Array,f=i*2,l=t*2,M=de(f,T),c=de(l,E);let C=!1;if(c&&M)d?C=r(ye(t,_),Pe(t*2,E),ye(i,y),Pe(i*2,T),h,o+t/me,a,s+i/me):C=r(ye(i,y),Pe(i*2,T),ye(t,_),Pe(t*2,E),a,s+i/me,h,o+t/me);else if(c){const w=zn.getPrimitive();he(t,v,w),w.applyMatrix4(e);const S=_e(i),x=ve(i,y);he(S,m,Ci),he(x,m,Pi);const A=w.intersectsBox(Ci),b=w.intersectsBox(Pi);C=A&&hn(t,S,n,e,r,o,s,h,a+1,w,!d)||b&&hn(t,x,n,e,r,o,s,h,a+1,w,!d),zn.releasePrimitive(w)}else{const w=_e(t),S=ve(t,_);he(w,v,fo),he(S,v,po);const x=u.intersectsBox(fo),A=u.intersectsBox(po);if(x&&A)C=hn(i,w,e,n,r,s,o,a,h+1,u,d)||hn(i,S,e,n,r,s,o,a,h+1,u,d);else if(x)if(M)C=hn(i,w,e,n,r,s,o,a,h+1,u,d);else{const b=zn.getPrimitive();b.copy(fo).applyMatrix4(e);const R=_e(i),F=ve(i,y);he(R,m,Ci),he(F,m,Pi);const B=b.intersectsBox(Ci),O=b.intersectsBox(Pi);C=B&&hn(w,R,n,e,r,o,s,h,a+1,b,!d)||O&&hn(w,F,n,e,r,o,s,h,a+1,b,!d),zn.releasePrimitive(b)}else if(A)if(M)C=hn(i,S,e,n,r,s,o,a,h+1,u,d);else{const b=zn.getPrimitive();b.copy(po).applyMatrix4(e);const R=_e(i),F=ve(i,y);he(R,m,Ci),he(F,m,Pi);const B=b.intersectsBox(Ci),O=b.intersectsBox(Pi);C=B&&hn(S,R,n,e,r,o,s,h,a+1,b,!d)||O&&hn(S,F,n,e,r,o,s,h,a+1,b,!d),zn.releasePrimitive(b)}}return C}const mo=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!de(o,e);)s=_e(s),o=s*2;return ye(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!de(o,e);)s=ve(s,t),o=s*2;return ye(s,t)+Pe(o,e)};const r=(s,o,a)=>{const h=o*2,u=de(h,e);if(!s(a,u,o)&&!u){const p=_e(o),g=ve(o,t);r(s,p,a+1),r(s,g,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,h)=>{if(a){const u=h*2,d=t[h+6],p=e[u+14];return s(o,a,new Float32Array(i,h*4,6),d,p)}else{const u=oa(h,t);return s(o,a,new Float32Array(i,h*4,6),u)}})}}},xl=new Ne,Di=new Float32Array(6);class em{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Uc,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),jg(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,u=-1/0,d=-1/0;for(let p=t,g=t+e;p<g;p++){this.writePrimitiveBounds(p,Di,0);const[m,y,T,v,_,E]=Di;m<s&&(s=m),v>h&&(h=v),y<o&&(o=y),_>u&&(u=_),T<a&&(a=T),E>d&&(d=E)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=h,n[r+4]=u,n[r+5]=d,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,Di,0);const[a,h,u,d,p,g]=Di,m=(a+d)/2,y=(h+p)/2,T=(u+g)/2,v=(d-a)/2,_=(p-h)/2,E=(g-u)/2,f=(s-r)*6;n[f+0]=m,n[f+1]=v+(Math.abs(m)+v)*_s,n[f+2]=y,n[f+3]=_+(Math.abs(y)+_)*_s,n[f+4]=T,n[f+5]=E+(Math.abs(T)+E)*_s}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),h=s.byteLength/Ce;for(let u=0;u<h;u++){const d=me*u,p=2*d;de(p,a)&&(o[d+6]+=t)}}}}traverse(t,e=0){mo.setBVH(this,e),mo.traverse(t),mo.reset()}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),h=r.byteLength/Ce;for(let u=h-1;u>=0;u--){const d=u*me,p=d*2;if(de(p,o)){const m=ye(d,s),y=Pe(p,o);this.writePrimitiveRangeBounds(m,y,Di,0),a.set(Di,d)}else{const m=_e(d),y=ve(d,s);for(let T=0;T<3;T++){const v=a[m+T],_=a[m+T+3],E=a[y+T],f=a[y+T+3];a[d+T]=v<E?v:E,a[d+T+3]=_>f?_:f}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{he(0,new Float32Array(n),xl),t.union(xl)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const p=r;r=(g,m,y,T,v)=>p(g,m,y,T,v)?!0:a(g,m,this,s,y,T,o)}else r||(s?r=(p,g,m,y)=>a(p,g,this,s,m,y,o):r=(p,g,m)=>m);let h=!1,u=0;const d=this._roots;for(let p=0,g=d.length;p<g;p++){const m=d[p];if(h=Qg(this,p,n,r,e,u),h)break;u+=m.byteLength/Ce}return h}bvhcast(t,e,n){let{intersectsRanges:r}=n;return tm(this,t,e,r)}}function nm(){return typeof SharedArrayBuffer<"u"}function la(i){return i.index?i.index.count:i.attributes.position.count}function Cs(i){return la(i)/3}function im(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function rm(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=im(e,n);i.setIndex(new He(r,1));for(let s=0;s<e;s++)r[s]=s}}function sm(i,t,e){const n=la(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),h=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(h)}}function om(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Ml(i,t,e){const n=sm(i,t,e),r=om(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,h=la(i)/e,u=[];for(const g of r){const{offset:m,count:y}=g,T=m,v=isFinite(y)?y:h-m,_=m+v;T<a&&_>o&&(u.push({pos:Math.max(o,T),isStart:!0}),u.push({pos:Math.min(a,_),isStart:!1}))}u.sort((g,m)=>g.pos!==m.pos?g.pos-m.pos:g.type==="end"?-1:1);let d=0,p=null;for(const g of u){const m=g.pos;d!==0&&m!==p&&s.push({offset:p,count:m-p}),d+=g.isStart?1:-1,p=m}return s}function am(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((u,d)=>u+d.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let h=0;for(let u=0;u<i.length;u++){const{offset:d,count:p}=i[u];for(let g=0;g<p;g++)a[h+g]=d+g;h+=p}return a}class lm extends em{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!nm())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Uc,...e},e[sa]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=Ml(e,t.range,n),s=am(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else rm(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ne))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Ml(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Pn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const h=t[s][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],h=t.dot(a);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Pn.prototype.setFromBox=(function(){const i=new L;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let h=0;h<=1;h++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){i.x=r.x*h+s.x*(1-h),i.y=r.y*u+s.y*(1-u),i.z=r.z*d+s.z*(1-d);const p=e.dot(i);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();const cm=(function(){const i=new L,t=new L,e=new L;return function(r,s,o){const a=r.start,h=i,u=s.start,d=t;e.subVectors(a,u),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const p=e.dot(d),g=d.dot(h),m=d.dot(d),y=e.dot(h),v=h.dot(h)*m-g*g;let _,E;v!==0?_=(p*g-y*m)/v:_=0,E=(p+_*g)/m,o.x=_,o.y=E}})(),ca=(function(){const i=new It,t=new L,e=new L;return function(r,s,o,a){cm(r,s,i);let h=i.x,u=i.y;if(h>=0&&h<=1&&u>=0&&u<=1){r.at(h,o),s.at(u,a);return}else if(h>=0&&h<=1){u<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){h<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let d;h<0?d=r.start:d=r.end;let p;u<0?p=s.start:p=s.end;const g=t,m=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(d,!0,e),g.distanceToSquared(p)<=m.distanceToSquared(d)){o.copy(g),a.copy(p);return}else{o.copy(d),a.copy(m);return}}}})(),um=(function(){const i=new L,t=new L,e=new fn,n=new Ee;return function(s,o){const{radius:a,center:h}=s,{a:u,b:d,c:p}=o;if(n.start=u,n.end=d,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a||(n.start=u,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a)||(n.start=d,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a))return!0;const T=o.getPlane(e);if(Math.abs(T.distanceToPoint(h))<=a){const _=T.projectPoint(h,t);if(o.containsPoint(_))return!0}return!1}})(),hm=["x","y","z"],Rn=1e-15,Sl=Rn*Rn;function en(i){return Math.abs(i)<Rn}class ke extends oe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Pn),this.points=[this.a,this.b,this.c],this.plane=new fn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ee,this.needsUpdate=!0}intersectsSphere(t){return um(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],h=o[0];this.getNormal(a),h.setFromPoints(a,r);const u=s[1],d=o[1];u.subVectors(t,e),d.setFromPoints(u,r);const p=s[2],g=o[2];p.subVectors(e,n),g.setFromPoints(p,r);const m=s[3],y=o[3];m.subVectors(n,t),y.setFromPoints(m,r);const T=u.length(),v=p.length(),_=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,T<Rn?v<Rn||_<Rn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):v<Rn?_<Rn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<Rn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}ke.prototype.closestPointToSegment=(function(){const i=new L,t=new L,e=new Ee;return function(r,s=null,o=null){const{start:a,end:h}=r,u=this.points;let d,p=1/0;for(let g=0;g<3;g++){const m=(g+1)%3;e.start.copy(u[g]),e.end.copy(u[m]),ca(e,r,i,t),d=i.distanceToSquared(t),d<p&&(p=d,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),d=a.distanceToSquared(i),d<p&&(p=d,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(h,i),d=h.distanceToSquared(i),d<p&&(p=d,s&&s.copy(i),o&&o.copy(h)),Math.sqrt(p)}})();ke.prototype.intersectsTriangle=(function(){const i=new ke,t=new Pn,e=new Pn,n=new L,r=new L,s=new L,o=new L,a=new Ee,h=new Ee,u=new L,d=new It,p=new It;function g(f,l,M,c){const C=n;!f.isDegenerateIntoPoint&&!f.isDegenerateIntoSegment?C.copy(f.plane.normal):C.copy(l.plane.normal);const w=f.satBounds,S=f.satAxes;for(let b=1;b<4;b++){const R=w[b],F=S[b];if(t.setFromPoints(F,l.points),R.isSeparated(t)||(o.copy(C).cross(F),t.setFromPoints(o,f.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}const x=l.satBounds,A=l.satAxes;for(let b=1;b<4;b++){const R=x[b],F=A[b];if(t.setFromPoints(F,f.points),R.isSeparated(t)||(o.crossVectors(C,F),t.setFromPoints(o,f.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}return M&&(c||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function m(f,l,M,c,C,w,S,x,A,b,R){let F=S/(S-x);b.x=c+(C-c)*F,R.start.subVectors(l,f).multiplyScalar(F).add(f),F=S/(S-A),b.y=c+(w-c)*F,R.end.subVectors(M,f).multiplyScalar(F).add(f)}function y(f,l,M,c,C,w,S,x,A,b,R){if(C>0)m(f.c,f.a,f.b,c,l,M,A,S,x,b,R);else if(w>0)m(f.b,f.a,f.c,M,l,c,x,S,A,b,R);else if(x*A>0||S!=0)m(f.a,f.b,f.c,l,M,c,S,x,A,b,R);else if(x!=0)m(f.b,f.a,f.c,M,l,c,x,S,A,b,R);else if(A!=0)m(f.c,f.a,f.b,c,l,M,A,S,x,b,R);else return!0;return!1}function T(f,l,M,c){const C=l.degenerateSegment,w=f.plane.distanceToPoint(C.start),S=f.plane.distanceToPoint(C.end);return en(w)?en(S)?g(f,l,M,c):(M&&(M.start.copy(C.start),M.end.copy(C.start)),f.containsPoint(C.start)):en(S)?(M&&(M.start.copy(C.end),M.end.copy(C.end)),f.containsPoint(C.end)):f.plane.intersectLine(C,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),f.containsPoint(n)):!1}function v(f,l,M){const c=l.a;return en(f.plane.distanceToPoint(c))&&f.containsPoint(c)?(M&&(M.start.copy(c),M.end.copy(c)),!0):!1}function _(f,l,M){const c=f.degenerateSegment,C=l.a;return c.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<Sl?(M&&(M.start.copy(C),M.end.copy(C)),!0):!1}function E(f,l,M,c){if(f.isDegenerateIntoSegment)if(l.isDegenerateIntoSegment){const C=f.degenerateSegment,w=l.degenerateSegment,S=r,x=s;C.delta(S),w.delta(x);const A=n.subVectors(w.start,C.start),b=S.x*x.y-S.y*x.x;if(en(b))return!1;const R=(A.x*x.y-A.y*x.x)/b,F=-(S.x*A.y-S.y*A.x)/b;if(R<0||R>1||F<0||F>1)return!1;const B=C.start.z+S.z*R,O=w.start.z+x.z*F;return en(B-O)?(M&&(M.start.copy(C.start).addScaledVector(S,R),M.end.copy(C.start).addScaledVector(S,R)),!0):!1}else return l.isDegenerateIntoPoint?_(f,l,M):T(l,f,M,c);else{if(f.isDegenerateIntoPoint)return l.isDegenerateIntoPoint?l.a.distanceToSquared(f.a)<Sl?(M&&(M.start.copy(f.a),M.end.copy(f.a)),!0):!1:l.isDegenerateIntoSegment?_(l,f,M):v(l,f,M);if(l.isDegenerateIntoPoint)return v(f,l,M);if(l.isDegenerateIntoSegment)return T(f,l,M,c)}}return function(l,M=null,c=!1){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(i.copy(l),i.update(),l=i);const C=E(this,l,M,c);if(C!==void 0)return C;const w=this.plane,S=l.plane;let x=S.distanceToPoint(this.a),A=S.distanceToPoint(this.b),b=S.distanceToPoint(this.c);en(x)&&(x=0),en(A)&&(A=0),en(b)&&(b=0);const R=x*A,F=x*b;if(R>0&&F>0)return!1;let B=w.distanceToPoint(l.a),O=w.distanceToPoint(l.b),W=w.distanceToPoint(l.c);en(B)&&(B=0),en(O)&&(O=0),en(W)&&(W=0);const z=B*O,Z=B*W;if(z>0&&Z>0)return!1;r.copy(w.normal),s.copy(S.normal);const st=r.cross(s);let et=0,dt=Math.abs(st.x);const At=Math.abs(st.y);At>dt&&(dt=At,et=1),Math.abs(st.z)>dt&&(et=2);const _t=hm[et],H=this.a[_t],$=this.b[_t],rt=this.c[_t],ut=l.a[_t],at=l.b[_t],Mt=l.c[_t];if(y(this,H,$,rt,R,F,x,A,b,d,a))return g(this,l,M,c);if(y(l,ut,at,Mt,z,Z,B,O,W,p,h))return g(this,l,M,c);if(d.y<d.x){const qt=d.y;d.y=d.x,d.x=qt,u.copy(a.start),a.start.copy(a.end),a.end.copy(u)}if(p.y<p.x){const qt=p.y;p.y=p.x,p.x=qt,u.copy(h.start),h.start.copy(h.end),h.end.copy(u)}return d.y<p.x||p.y<d.x?!1:(M&&(p.x>d.x?M.start.copy(h.start):M.start.copy(a.start),p.y<d.y?M.end.copy(h.end):M.end.copy(a.end)),!0)}})();ke.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();ke.prototype.distanceToTriangle=(function(){const i=new L,t=new L,e=["a","b","c"],n=new Ee,r=new Ee;return function(o,a=null,h=null){const u=a||h?n:null;if(this.intersectsTriangle(o,u,!0))return(a||h)&&(a&&u.getCenter(a),h&&u.getCenter(h)),0;let d=1/0;for(let p=0;p<3;p++){let g;const m=e[p],y=o[m];this.closestPointToPoint(y,i),g=y.distanceToSquared(i),g<d&&(d=g,a&&a.copy(i),h&&h.copy(y));const T=this[m];o.closestPointToPoint(T,i),g=T.distanceToSquared(i),g<d&&(d=g,a&&a.copy(T),h&&h.copy(i))}for(let p=0;p<3;p++){const g=e[p],m=e[(p+1)%3];n.set(this[g],this[m]);for(let y=0;y<3;y++){const T=e[y],v=e[(y+1)%3];r.set(o[T],o[v]),ca(n,r,i,t);const _=i.distanceToSquared(t);_<d&&(d=_,a&&a.copy(i),h&&h.copy(t))}}return Math.sqrt(d)}})();class Be{constructor(t,e,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new jt,this.invMatrix=new jt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Pn),this.alignedSatBounds=new Array(3).fill().map(()=>new Pn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Be.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){const g=1*u|2*d|4*p,m=r[g];m.x=u?n.x:e.x,m.y=d?n.y:e.y,m.z=p?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let u=0;u<3;u++){const d=o[u],p=s[u],g=1<<u,m=r[g];d.subVectors(a,m),p.setFromPoints(d,r)}const h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Be.prototype.intersectsBox=(function(){const i=new Pn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){const u=o[h],d=s[h];if(i.setFromBox(u,e),d.isSeparated(i))return!1}return!0}})();Be.prototype.intersectsTriangle=(function(){const i=new ke,t=new Array(3),e=new Pn,n=new Pn,r=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,h=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let g=0;g<3;g++){const m=a[g],y=h[g];if(e.setFromPoints(y,t),m.isSeparated(e))return!1}const u=o.satBounds,d=o.satAxes,p=this.points;for(let g=0;g<3;g++){const m=u[g],y=d[g];if(e.setFromPoints(y,p),m.isSeparated(e))return!1}for(let g=0;g<3;g++){const m=h[g];for(let y=0;y<4;y++){const T=d[y];if(r.crossVectors(m,T),e.setFromPoints(r,t),n.setFromPoints(r,p),e.isSeparated(n))return!1}}return!0}})();Be.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Be.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Be.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Ee),e=new Array(12).fill().map(()=>new Ee),n=new L,r=new L;return function(o,a=0,h=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(h||u)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),h&&h.copy(n),u&&u.copy(r)),0;const d=a*a,p=o.min,g=o.max,m=this.points;let y=1/0;for(let v=0;v<8;v++){const _=m[v];r.copy(_).clamp(p,g);const E=_.distanceToSquared(r);if(E<y&&(y=E,h&&h.copy(_),u&&u.copy(r),E<d))return Math.sqrt(E)}let T=0;for(let v=0;v<3;v++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){const f=(v+1)%3,l=(v+2)%3,M=_<<f|E<<l,c=1<<v|_<<f|E<<l,C=m[M],w=m[c];t[T].set(C,w);const x=i[v],A=i[f],b=i[l],R=e[T],F=R.start,B=R.end;F[x]=p[x],F[A]=_?p[A]:g[A],F[b]=E?p[b]:g[A],B[x]=g[x],B[A]=_?p[A]:g[A],B[b]=E?p[b]:g[A],T++}for(let v=0;v<=1;v++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){r.x=v?g.x:p.x,r.y=_?g.y:p.y,r.z=E?g.z:p.z,this.closestPointToPoint(r,n);const f=r.distanceToSquared(n);if(f<y&&(y=f,h&&h.copy(n),u&&u.copy(r),f<d))return Math.sqrt(f)}for(let v=0;v<12;v++){const _=t[v];for(let E=0;E<12;E++){const f=e[E];ca(_,f,n,r);const l=n.distanceToSquared(r);if(l<y&&(y=l,h&&h.copy(n),u&&u.copy(r),l<d))return Math.sqrt(l)}}return Math.sqrt(y)}})();class fm extends aa{constructor(){super(()=>new ke)}}const rn=new fm,or=new L,_o=new L;function dm(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,h=null;if(i.shapecast({boundsTraverseOrder:d=>(or.copy(t).clamp(d.min,d.max),or.distanceToSquared(t)),intersectsBounds:(d,p,g)=>g<a&&g<o,intersectsTriangle:(d,p)=>{d.closestPointToPoint(t,or);const g=t.distanceToSquared(or);return g<a&&(_o.copy(or),a=g,h=p),g<s}}),a===1/0)return null;const u=Math.sqrt(a);return e.point?e.point.copy(_o):e.point=_o.clone(),e.distance=u,e.faceIndex=h,e}const Zr=parseInt("180")>=169,pm=parseInt("180")<=161,Jn=new L,Qn=new L,ti=new L,jr=new It,Jr=new It,Qr=new It,yl=new L,Tl=new L,El=new L,ar=new L;function gm(i,t,e,n,r,s,o,a){let h;if(s===1?h=i.intersectTriangle(n,e,t,!0,r):h=i.intersectTriangle(t,e,n,s!==2,r),h===null)return null;const u=i.origin.distanceTo(r);return u<o||u>a?null:{distance:u,point:r.clone()}}function Al(i,t,e,n,r,s,o,a,h,u,d){Jn.fromBufferAttribute(t,s),Qn.fromBufferAttribute(t,o),ti.fromBufferAttribute(t,a);const p=gm(i,Jn,Qn,ti,ar,h,u,d);if(p){if(n){jr.fromBufferAttribute(n,s),Jr.fromBufferAttribute(n,o),Qr.fromBufferAttribute(n,a),p.uv=new It;const m=oe.getInterpolation(ar,Jn,Qn,ti,jr,Jr,Qr,p.uv);Zr||(p.uv=m)}if(r){jr.fromBufferAttribute(r,s),Jr.fromBufferAttribute(r,o),Qr.fromBufferAttribute(r,a),p.uv1=new It;const m=oe.getInterpolation(ar,Jn,Qn,ti,jr,Jr,Qr,p.uv1);Zr||(p.uv1=m),pm&&(p.uv2=p.uv1)}if(e){yl.fromBufferAttribute(e,s),Tl.fromBufferAttribute(e,o),El.fromBufferAttribute(e,a),p.normal=new L;const m=oe.getInterpolation(ar,Jn,Qn,ti,yl,Tl,El,p.normal);p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1),Zr||(p.normal=m)}const g={a:s,b:o,c:a,normal:new L,materialIndex:0};if(oe.getNormal(Jn,Qn,ti,g.normal),p.face=g,p.faceIndex=s,Zr){const m=new L;oe.getBarycoord(ar,Jn,Qn,ti,m),p.barycoord=m}}return p}function bl(i){return i&&i.isMaterial?i.side:i}function Ps(i,t,e,n,r,s,o){const a=n*3;let h=a+0,u=a+1,d=a+2;const{index:p,groups:g}=i;i.index&&(h=p.getX(h),u=p.getX(u),d=p.getX(d));const{position:m,normal:y,uv:T,uv1:v}=i.attributes;if(Array.isArray(t)){const _=n*3;for(let E=0,f=g.length;E<f;E++){const{start:l,count:M,materialIndex:c}=g[E];if(_>=l&&_<l+M){const C=bl(t[c]),w=Al(e,m,y,T,v,h,u,d,C,s,o);if(w)if(w.faceIndex=n,w.face.materialIndex=c,r)r.push(w);else return w}}}else{const _=bl(t),E=Al(e,m,y,T,v,h,u,d,_,s,o);if(E)if(E.faceIndex=n,E.face.materialIndex=0,r)r.push(E);else return E}return null}function ge(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,h=t+1,u=t+2;e&&(a=e.getX(a),h=e.getX(h),u=e.getX(u)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(h),s.y=n.getY(h),s.z=n.getZ(h),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function mm(i,t,e,n,r,s,o,a){const{geometry:h,_indirectBuffer:u}=i;for(let d=n,p=n+r;d<p;d++)Ps(h,t,e,d,s,o,a)}function _m(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:h}=i;let u=1/0,d=null;for(let p=n,g=n+r;p<g;p++){let m;m=Ps(a,t,e,p,null,s,o),m&&m.distance<u&&(d=m,u=m.distance)}return d}function vm(i,t,e,n,r,s,o){const{geometry:a}=e,{index:h}=a,u=a.attributes.position;for(let d=i,p=t+i;d<p;d++){let g;if(g=d,ge(o,g*3,h,u),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function xm(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,h,u=0;const d=i._roots;for(let g=0,m=d.length;g<m;g++)s=d[g],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),p(0,u),u+=s.byteLength;function p(g,m,y=!1){const T=g*2;if(de(T,a)){const v=ye(g,o),_=Pe(T,a);let E=1/0,f=1/0,l=1/0,M=-1/0,c=-1/0,C=-1/0;for(let w=3*v,S=3*(v+_);w<S;w++){let x=n[w];const A=r.getX(x),b=r.getY(x),R=r.getZ(x);A<E&&(E=A),A>M&&(M=A),b<f&&(f=b),b>c&&(c=b),R<l&&(l=R),R>C&&(C=R)}return h[g+0]!==E||h[g+1]!==f||h[g+2]!==l||h[g+3]!==M||h[g+4]!==c||h[g+5]!==C?(h[g+0]=E,h[g+1]=f,h[g+2]=l,h[g+3]=M,h[g+4]=c,h[g+5]=C,!0):!1}else{const v=_e(g),_=ve(g,o);let E=y,f=!1,l=!1;if(t){if(!E){const x=v/me+m/Ce,A=_/me+m/Ce;f=t.has(x),l=t.has(A),E=!f&&!l}}else f=!0,l=!0;const M=E||f,c=E||l;let C=!1;M&&(C=p(v,m,E));let w=!1;c&&(w=p(_,m,E));const S=C||w;if(S)for(let x=0;x<3;x++){const A=v+x,b=_+x,R=h[A],F=h[A+3],B=h[b],O=h[b+3];h[g+x]=R<B?R:B,h[g+x+3]=F>O?F:O}return S}}}function kn(i,t,e,n,r){let s,o,a,h,u,d;const p=1/e.direction.x,g=1/e.direction.y,m=1/e.direction.z,y=e.origin.x,T=e.origin.y,v=e.origin.z;let _=t[i],E=t[i+3],f=t[i+1],l=t[i+3+1],M=t[i+2],c=t[i+3+2];return p>=0?(s=(_-y)*p,o=(E-y)*p):(s=(E-y)*p,o=(_-y)*p),g>=0?(a=(f-T)*g,h=(l-T)*g):(a=(l-T)*g,h=(f-T)*g),s>h||a>o||((a>s||isNaN(s))&&(s=a),(h<o||isNaN(o))&&(o=h),m>=0?(u=(M-v)*m,d=(c-v)*m):(u=(c-v)*m,d=(M-v)*m),s>d||u>o)?!1:((u>s||s!==s)&&(s=u),(d<o||o!==o)&&(o=d),s<=r&&o>=n)}function Mm(i,t,e,n,r,s,o,a){const{geometry:h,_indirectBuffer:u}=i;for(let d=n,p=n+r;d<p;d++){let g=u?u[d]:d;Ps(h,t,e,g,s,o,a)}}function Sm(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:h}=i;let u=1/0,d=null;for(let p=n,g=n+r;p<g;p++){let m;m=Ps(a,t,e,h?h[p]:p,null,s,o),m&&m.distance<u&&(d=m,u=m.distance)}return d}function ym(i,t,e,n,r,s,o){const{geometry:a}=e,{index:h}=a,u=a.attributes.position;for(let d=i,p=t+i;d<p;d++){let g;if(g=e.resolveTriangleIndex(d),ge(o,g*3,h,u),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function Tm(i,t,e,n,r,s,o){ae.setBuffer(i._roots[t]),ko(0,i,e,n,r,s,o),ae.clearBuffer()}function ko(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:h,uint32Array:u}=ae,d=i*2;if(de(d,h)){const g=ye(i,u),m=Pe(d,h);mm(t,e,n,g,m,r,s,o)}else{const g=_e(i);kn(g,a,n,s,o)&&ko(g,t,e,n,r,s,o);const m=ve(i,u);kn(m,a,n,s,o)&&ko(m,t,e,n,r,s,o)}}const Em=["x","y","z"];function Am(i,t,e,n,r,s){ae.setBuffer(i._roots[t]);const o=Wo(0,i,e,n,r,s);return ae.clearBuffer(),o}function Wo(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:h}=ae;let u=i*2;if(de(u,a)){const p=ye(i,h),g=Pe(u,a);return _m(t,e,n,p,g,r,s)}else{const p=oa(i,h),g=Em[p],y=n.direction[g]>=0;let T,v;y?(T=_e(i),v=ve(i,h)):(T=ve(i,h),v=_e(i));const E=kn(T,o,n,r,s)?Wo(T,t,e,n,r,s):null;if(E){const M=E.point[g];if(y?M<=o[v+p]:M>=o[v+p+3])return E}const l=kn(v,o,n,r,s)?Wo(v,t,e,n,r,s):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}const ts=new Ne,Ii=new ke,Li=new ke,lr=new jt,wl=new Be,es=new Be;function bm(i,t,e,n){ae.setBuffer(i._roots[t]);const r=Xo(0,i,e,n);return ae.clearBuffer(),r}function Xo(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ae;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),wl.set(e.boundingBox.min,e.boundingBox.max,n),r=wl),de(h,o)){const d=t.geometry,p=d.index,g=d.attributes.position,m=e.index,y=e.attributes.position,T=ye(i,a),v=Pe(h,o);if(lr.copy(n).invert(),e.boundsTree)return he(i,s,es),es.matrix.copy(lr),es.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>es.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let f=T*3,l=(v+T)*3;f<l;f+=3)if(ge(Li,f,p,g),Li.needsUpdate=!0,E.intersectsTriangle(Li))return!0;return!1}});{const _=Cs(e);for(let E=T*3,f=(v+T)*3;E<f;E+=3){ge(Ii,E,p,g),Ii.a.applyMatrix4(lr),Ii.b.applyMatrix4(lr),Ii.c.applyMatrix4(lr),Ii.needsUpdate=!0;for(let l=0,M=_*3;l<M;l+=3)if(ge(Li,l,m,y),Li.needsUpdate=!0,Ii.intersectsTriangle(Li))return!0}}}else{const d=_e(i),p=ve(i,a);return he(d,s,ts),!!(r.intersectsBox(ts)&&Xo(d,t,e,n,r)||(he(p,s,ts),r.intersectsBox(ts)&&Xo(p,t,e,n,r)))}}const ns=new jt,vo=new Be,cr=new Be,wm=new L,Rm=new L,Cm=new L,Pm=new L;function Dm(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),vo.set(t.boundingBox.min,t.boundingBox.max,e),vo.needsUpdate=!0;const a=i.geometry,h=a.attributes.position,u=a.index,d=t.attributes.position,p=t.index,g=rn.getPrimitive(),m=rn.getPrimitive();let y=wm,T=Rm,v=null,_=null;r&&(v=Cm,_=Pm);let E=1/0,f=null,l=null;return ns.copy(e).invert(),cr.matrix.copy(ns),i.shapecast({boundsTraverseOrder:M=>vo.distanceToBox(M),intersectsBounds:(M,c,C)=>C<E&&C<o?(c&&(cr.min.copy(M.min),cr.max.copy(M.max),cr.needsUpdate=!0),!0):!1,intersectsRange:(M,c)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>cr.distanceToBox(w),intersectsBounds:(w,S,x)=>x<E&&x<o,intersectsRange:(w,S)=>{for(let x=w,A=w+S;x<A;x++){ge(m,3*x,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let b=M,R=M+c;b<R;b++){ge(g,3*b,u,h),g.needsUpdate=!0;const F=g.distanceToTriangle(m,y,v);if(F<E&&(T.copy(y),_&&_.copy(v),E=F,f=b,l=x),F<s)return!0}}}});{const C=Cs(t);for(let w=0,S=C;w<S;w++){ge(m,3*w,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let x=M,A=M+c;x<A;x++){ge(g,3*x,u,h),g.needsUpdate=!0;const b=g.distanceToTriangle(m,y,v);if(b<E&&(T.copy(y),_&&_.copy(v),E=b,f=x,l=w),b<s)return!0}}}}}),rn.releasePrimitive(g),rn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=E,n.faceIndex=f,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(ns),T.applyMatrix4(ns),r.distance=T.sub(r.point).length(),r.faceIndex=l),n)}function Im(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,h,u=0;const d=i._roots;for(let g=0,m=d.length;g<m;g++)s=d[g],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),p(0,u),u+=s.byteLength;function p(g,m,y=!1){const T=g*2;if(de(T,a)){const v=ye(g,o),_=Pe(T,a);let E=1/0,f=1/0,l=1/0,M=-1/0,c=-1/0,C=-1/0;for(let w=v,S=v+_;w<S;w++){const x=3*i.resolveTriangleIndex(w);for(let A=0;A<3;A++){let b=x+A;b=n?n[b]:b;const R=r.getX(b),F=r.getY(b),B=r.getZ(b);R<E&&(E=R),R>M&&(M=R),F<f&&(f=F),F>c&&(c=F),B<l&&(l=B),B>C&&(C=B)}}return h[g+0]!==E||h[g+1]!==f||h[g+2]!==l||h[g+3]!==M||h[g+4]!==c||h[g+5]!==C?(h[g+0]=E,h[g+1]=f,h[g+2]=l,h[g+3]=M,h[g+4]=c,h[g+5]=C,!0):!1}else{const v=_e(g),_=ve(g,o);let E=y,f=!1,l=!1;if(t){if(!E){const x=v/me+m/Ce,A=_/me+m/Ce;f=t.has(x),l=t.has(A),E=!f&&!l}}else f=!0,l=!0;const M=E||f,c=E||l;let C=!1;M&&(C=p(v,m,E));let w=!1;c&&(w=p(_,m,E));const S=C||w;if(S)for(let x=0;x<3;x++){const A=v+x,b=_+x,R=h[A],F=h[A+3],B=h[b],O=h[b+3];h[g+x]=R<B?R:B,h[g+x+3]=F>O?F:O}return S}}}function Lm(i,t,e,n,r,s,o){ae.setBuffer(i._roots[t]),qo(0,i,e,n,r,s,o),ae.clearBuffer()}function qo(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:h,uint32Array:u}=ae,d=i*2;if(de(d,h)){const g=ye(i,u),m=Pe(d,h);Mm(t,e,n,g,m,r,s,o)}else{const g=_e(i);kn(g,a,n,s,o)&&qo(g,t,e,n,r,s,o);const m=ve(i,u);kn(m,a,n,s,o)&&qo(m,t,e,n,r,s,o)}}const Um=["x","y","z"];function Fm(i,t,e,n,r,s){ae.setBuffer(i._roots[t]);const o=Yo(0,i,e,n,r,s);return ae.clearBuffer(),o}function Yo(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:h}=ae;let u=i*2;if(de(u,a)){const p=ye(i,h),g=Pe(u,a);return Sm(t,e,n,p,g,r,s)}else{const p=oa(i,h),g=Um[p],y=n.direction[g]>=0;let T,v;y?(T=_e(i),v=ve(i,h)):(T=ve(i,h),v=_e(i));const E=kn(T,o,n,r,s)?Yo(T,t,e,n,r,s):null;if(E){const M=E.point[g];if(y?M<=o[v+p]:M>=o[v+p+3])return E}const l=kn(v,o,n,r,s)?Yo(v,t,e,n,r,s):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}const is=new Ne,Ui=new ke,Fi=new ke,ur=new jt,Rl=new Be,rs=new Be;function Nm(i,t,e,n){ae.setBuffer(i._roots[t]);const r=$o(0,i,e,n);return ae.clearBuffer(),r}function $o(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ae;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Rl.set(e.boundingBox.min,e.boundingBox.max,n),r=Rl),de(h,o)){const d=t.geometry,p=d.index,g=d.attributes.position,m=e.index,y=e.attributes.position,T=ye(i,a),v=Pe(h,o);if(ur.copy(n).invert(),e.boundsTree)return he(i,s,rs),rs.matrix.copy(ur),rs.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>rs.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let f=T,l=v+T;f<l;f++)if(ge(Fi,3*t.resolveTriangleIndex(f),p,g),Fi.needsUpdate=!0,E.intersectsTriangle(Fi))return!0;return!1}});{const _=Cs(e);for(let E=T,f=v+T;E<f;E++){const l=t.resolveTriangleIndex(E);ge(Ui,3*l,p,g),Ui.a.applyMatrix4(ur),Ui.b.applyMatrix4(ur),Ui.c.applyMatrix4(ur),Ui.needsUpdate=!0;for(let M=0,c=_*3;M<c;M+=3)if(ge(Fi,M,m,y),Fi.needsUpdate=!0,Ui.intersectsTriangle(Fi))return!0}}}else{const d=_e(i),p=ve(i,a);return he(d,s,is),!!(r.intersectsBox(is)&&$o(d,t,e,n,r)||(he(p,s,is),r.intersectsBox(is)&&$o(p,t,e,n,r)))}}const ss=new jt,xo=new Be,hr=new Be,Bm=new L,Om=new L,zm=new L,Gm=new L;function Vm(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),xo.set(t.boundingBox.min,t.boundingBox.max,e),xo.needsUpdate=!0;const a=i.geometry,h=a.attributes.position,u=a.index,d=t.attributes.position,p=t.index,g=rn.getPrimitive(),m=rn.getPrimitive();let y=Bm,T=Om,v=null,_=null;r&&(v=zm,_=Gm);let E=1/0,f=null,l=null;return ss.copy(e).invert(),hr.matrix.copy(ss),i.shapecast({boundsTraverseOrder:M=>xo.distanceToBox(M),intersectsBounds:(M,c,C)=>C<E&&C<o?(c&&(hr.min.copy(M.min),hr.max.copy(M.max),hr.needsUpdate=!0),!0):!1,intersectsRange:(M,c)=>{if(t.boundsTree){const C=t.boundsTree;return C.shapecast({boundsTraverseOrder:w=>hr.distanceToBox(w),intersectsBounds:(w,S,x)=>x<E&&x<o,intersectsRange:(w,S)=>{for(let x=w,A=w+S;x<A;x++){const b=C.resolveTriangleIndex(x);ge(m,3*b,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let R=M,F=M+c;R<F;R++){const B=i.resolveTriangleIndex(R);ge(g,3*B,u,h),g.needsUpdate=!0;const O=g.distanceToTriangle(m,y,v);if(O<E&&(T.copy(y),_&&_.copy(v),E=O,f=R,l=x),O<s)return!0}}}})}else{const C=Cs(t);for(let w=0,S=C;w<S;w++){ge(m,3*w,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let x=M,A=M+c;x<A;x++){const b=i.resolveTriangleIndex(x);ge(g,3*b,u,h),g.needsUpdate=!0;const R=g.distanceToTriangle(m,y,v);if(R<E&&(T.copy(y),_&&_.copy(v),E=R,f=x,l=w),R<s)return!0}}}}}),rn.releasePrimitive(g),rn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=E,n.faceIndex=f,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(ss),T.applyMatrix4(ss),r.distance=T.sub(r.point).length(),r.faceIndex=l),n)}function Cl(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const os=new Be,as=new Sr,Pl=new L,Dl=new jt,Il=new L,Mo=["getX","getY","getZ"];class As extends lm{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(h=>h.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),h(s));const a=new As(e,{...n,[sa]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const u=e.getIndex();if(u===null){const d=new He(t.index,1,!1);e.setIndex(d)}else u.array!==r&&(u.array.set(r),u.needsUpdate=!0)}return a;function h(u){for(let d=0;d<u.length;d++){const p=u[d],g=new Uint32Array(p),m=new Uint16Array(p);for(let y=0,T=p.byteLength/Ce;y<T;y++){const v=me*y,_=2*v;de(_,m)||(g[v+6]=g[v+6]/me-y)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=(s?s[t]:t)*3;let d=u+0,p=u+1,g=u+2;a&&(d=a[d],p=a[p],g=a[g]);for(let m=0;m<3;m++){const y=o[Mo[m]](d),T=o[Mo[m]](p),v=o[Mo[m]](g);let _=y;T<_&&(_=T),v<_&&(_=v);let E=y;T>E&&(E=T),v>E&&(E=v),e[n+m]=_,e[n+m+3]=E}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const u=o.array,d=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const g=["getX","getY","getZ"],m=n.offset;for(let y=t,T=t+e;y<T;y++){const _=(s?s[y]:y)*3,E=(y-m)*6;let f=_+0,l=_+1,M=_+2;a&&(f=a[f],l=a[l],M=a[M]),h||(f=f*p+d,l=l*p+d,M=M*p+d);for(let c=0;c<3;c++){let C,w,S;h?(C=o[g[c]](f),w=o[g[c]](l),S=o[g[c]](M)):(C=u[f+c],w=u[l+c],S=u[M+c]);let x=C;w<x&&(x=w),S<x&&(x=S);let A=C;w>A&&(A=w),S>A&&(A=S);const b=(A-x)/2,R=c*2;n[E+R+0]=x+b,n[E+R+1]=b+(Math.abs(x)+b)*_s}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;Dl.copy(t.matrixWorld).invert(),as.copy(e.ray).applyMatrix4(Dl),Il.setFromMatrixScale(t.matrixWorld),Pl.copy(as.direction).multiply(Il);const s=Pl.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let h=this.raycastFirst(as,r,o,a);h=Cl(h,t,e),h&&n.push(h)}else{const h=this.raycast(as,r,o,a);for(let u=0,d=h.length;u<d;u++){const p=Cl(h[u],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?Im:xm)(this,t)}raycast(t,e=0,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?Lm:Tm;for(let h=0,u=s.length;h<u;h++)a(this,h,e,t,o,n,r);return o}raycastFirst(t,e=0,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?Fm:Am;for(let h=0,u=s.length;h<u;h++){const d=a(this,h,e,t,n,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?Nm:bm;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=rn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?ym:vm});return rn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=rn.getPrimitive(),a=this.geometry.index,h=this.geometry.attributes.position,u=this.indirect?y=>{const T=this.resolveTriangleIndex(y);ge(o,T*3,a,h)}:y=>{ge(o,y*3,a,h)},d=rn.getPrimitive(),p=t.geometry.index,g=t.geometry.attributes.position,m=t.indirect?y=>{const T=t.resolveTriangleIndex(y);ge(d,T*3,p,g)}:y=>{ge(d,y*3,p,g)};if(s){if(!(t instanceof As))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const y=(T,v,_,E,f,l,M,c)=>{for(let C=_,w=_+E;C<w;C++){m(C),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=T,x=T+v;S<x;S++)if(u(S),o.needsUpdate=!0,s(o,d,S,C,f,l,M,c))return!0}return!1};if(r){const T=r;r=function(v,_,E,f,l,M,c,C){return T(v,_,E,f,l,M,c,C)?!0:y(v,_,E,f,l,M,c,C)}}else r=y}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return os.set(t.min,t.max,e),os.needsUpdate=!0,this.shapecast({intersectsBounds:n=>os.intersectsBox(n),intersectsTriangle:n=>os.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?Vm:Dm)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return dm(this,t,e,n,r)}}const Bc=1e-6,Hm=Bc*.5,Oc=Math.pow(10,-Math.log10(Bc)),km=Hm*Oc;function vn(i){return~~(i*Oc+km)}function Wm(i){return`${vn(i.x)},${vn(i.y)}`}function Ll(i){return`${vn(i.x)},${vn(i.y)},${vn(i.z)}`}function Xm(i){return`${vn(i.x)},${vn(i.y)},${vn(i.z)},${vn(i.w)}`}function qm(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function zc(){return typeof SharedArrayBuffer<"u"}function Ym(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function $m(i){return i.index?i.index.count:i.attributes.position.count}function ua(i){return $m(i)/3}const Km=1e-8,Zm=new L;function jm(i){return~~(i/3)}function Jm(i){return i%3}function Ul(i,t){return i.start-t.start}function Fl(i,t){return Zm.subVectors(t,i.origin).dot(i.direction)}function Qm(i,t,e,n=Km){i.sort(Ul),t.sort(Ul);for(let a=0;a<i.length;a++){const h=i[a];for(let u=0;u<t.length;u++){const d=t[u];if(!(d.start>h.end)){if(h.end<d.start||d.end<h.start)continue;if(h.start<=d.start&&h.end>=d.end)s(d.end,h.end)||i.splice(a+1,0,{start:d.end,end:h.end,index:h.index}),h.end=d.start,d.start=0,d.end=0;else if(h.start>=d.start&&h.end<=d.end)s(h.end,d.end)||t.splice(u+1,0,{start:h.end,end:d.end,index:d.index}),d.end=h.start,h.start=0,h.end=0;else if(h.start<=d.start&&h.end<=d.end){const p=h.end;h.end=d.start,d.start=p}else if(h.start>=d.start&&h.end>=d.end){const p=d.end;d.end=h.start,h.start=p}else throw new Error}if(e.has(h.index)||e.set(h.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(h.index).push(d.index),e.get(d.index).push(h.index),o(d)&&(t.splice(u,1),u--),o(h)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let h=0;h<a.length;h++)o(a[h])&&(a.splice(h,1),h--)}function s(a,h){return Math.abs(h-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const Nl=1e-5,Bl=1e-4;class t_{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let h=0,u=e.length;h<u;h++){const d=e[h];if(o(d,t)&&o(d,n))continue;const p=a(d,t),g=a(d,n),m=Math.min(p,g);m<r&&(r=m,s=d)}return s;function o(h,u){const d=h.origin.distanceTo(u.origin)>Nl;return h.direction.angleTo(u.direction)>Bl||d}function a(h,u){const d=h.origin.distanceTo(u.origin),p=h.direction.angleTo(u.direction);return d/Nl+p/Bl}}}const So=new L,yo=new L,ls=new Sr;function e_(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,h=Array.from(t),u=new t_;for(let d=0,p=h.length;d<p;d++){const g=h[d],m=jm(g),y=Jm(g);let T=3*m+y,v=3*m+(y+1)%3;r&&(T=r.getX(T),v=r.getX(v)),So.fromBufferAttribute(s,T),yo.fromBufferAttribute(s,v),qm(So,yo,ls);let _,E=u.findClosestRay(ls);E===null&&(E=ls.clone(),u.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),_=a.get(E);let f=Fl(E,So),l=Fl(E,yo);f>l&&([f,l]=[l,f]),ls.direction.dot(E.direction)<0?_.reverse.push({start:f,end:l,index:g}):_.forward.push({start:f,end:l,index:g})}return a.forEach(({forward:d,reverse:p},g)=>{Qm(d,p,o,e),d.length===0&&p.length===0&&a.delete(g)}),{disjointConnectivityMap:o,fragmentMap:a}}const n_=new It,To=new L,i_=new re,Eo=["","",""];class r_{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?f:E,a=new Map,{attributes:h}=t,u=e?Object.keys(h):null,d=t.index,p=h.position;let g=ua(t);const m=g;let y=0;n&&(y=t.drawRange.start,t.drawRange.count!==1/0&&(g=~~(t.drawRange.count/3)));let T=this.data;(!T||T.length<3*m)&&(T=new Int32Array(3*m)),T.fill(-1);let v=0,_=new Set;for(let l=y,M=g*3+y;l<M;l+=3){const c=l;for(let C=0;C<3;C++){let w=c+C;d&&(w=d.getX(w)),Eo[C]=o(w)}for(let C=0;C<3;C++){const w=(C+1)%3,S=Eo[C],x=Eo[w],A=`${x}_${S}`;if(a.has(A)){const b=c+C,R=a.get(A);T[b]=R,T[R]=b,a.delete(A),v+=2,_.delete(R)}else{const b=`${S}_${x}`,R=c+C;a.set(b,R),_.add(R)}}}if(r){const{fragmentMap:l,disjointConnectivityMap:M}=e_(t,_,s);_.clear(),l.forEach(({forward:c,reverse:C})=>{c.forEach(({index:w})=>_.add(w)),C.forEach(({index:w})=>_.add(w))}),this.unmatchedDisjointEdges=l,this.disjointConnections=M,v=g*3-_.size}this.matchedEdges=v,this.unmatchedEdges=_.size,this.data=T;function E(l){return To.fromBufferAttribute(p,l),Ll(To)}function f(l){let M="";for(let c=0,C=u.length;c<C;c++){const w=h[u[c]];let S;switch(w.itemSize){case 1:S=vn(w.getX(l));break;case 2:S=Wm(n_.fromBufferAttribute(w,l));break;case 3:S=Ll(To.fromBufferAttribute(w,l));break;case 4:S=Xm(i_.fromBufferAttribute(w,l));break}M!==""&&(M+="|"),M+=S}return M}}}class bs extends we{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new jt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=zc(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,h=`${t.uuid}_${o}_${a}`;if(this._hash===h)return;if(this._hash=h,n)for(const g in e){const m=e[g];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=Ym(m.array)}t.boundsTree=new As(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new r_),t.halfEdges.updateFrom(t);const u=ua(t);(!t.groupIndices||t.groupIndices.length!==u)&&(t.groupIndices=new Uint16Array(u));const d=t.groupIndices,p=t.groups;for(let g=0,m=p.length;g<m;g++){const{start:y,count:T}=p[g];for(let v=y/3,_=(y+T)/3;v<_;v++)d[v]=g}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var s_=Object.getOwnPropertyNames,Ze=(i,t)=>function(){return t||(0,i[s_(i)[0]])((t={exports:{}}).exports,t),t.exports},Ds=Ze({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(h,u,d,p,g){for(var m=g+1;p<=g;){var y=p+g>>>1,T=h[y],v=d!==void 0?d(T,u):T-u;v>=0?(m=y,g=y-1):p=y+1}return m}function n(h,u,d,p,g){for(var m=g+1;p<=g;){var y=p+g>>>1,T=h[y],v=d!==void 0?d(T,u):T-u;v>0?(m=y,g=y-1):p=y+1}return m}function r(h,u,d,p,g){for(var m=p-1;p<=g;){var y=p+g>>>1,T=h[y],v=d!==void 0?d(T,u):T-u;v<0?(m=y,p=y+1):g=y-1}return m}function s(h,u,d,p,g){for(var m=p-1;p<=g;){var y=p+g>>>1,T=h[y],v=d!==void 0?d(T,u):T-u;v<=0?(m=y,p=y+1):g=y-1}return m}function o(h,u,d,p,g){for(;p<=g;){var m=p+g>>>1,y=h[m],T=d!==void 0?d(y,u):y-u;if(T===0)return m;T<=0?p=m+1:g=m-1}return-1}function a(h,u,d,p,g,m){return typeof d=="function"?m(h,u,d,p===void 0?0:p|0,g===void 0?h.length-1:g|0):m(h,u,void 0,d===void 0?0:d|0,p===void 0?h.length-1:p|0)}t.exports={ge:function(h,u,d,p,g){return a(h,u,d,p,g,e)},gt:function(h,u,d,p,g){return a(h,u,d,p,g,n)},lt:function(h,u,d,p,g){return a(h,u,d,p,g,r)},le:function(h,u,d,p,g){return a(h,u,d,p,g,s)},eq:function(h,u,d,p,g){return a(h,u,d,p,g,o)}}}}),ha=Ze({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,h=e*r,u=h-r,d=h-u,p=r-d,g=e*s,m=g-s,y=g-m,T=s-y,v=a-d*y,_=v-p*y,E=_-d*T,f=p*T-E;return o?(o[0]=f,o[1]=a,o):[f,a]}}}),Gc=Ze({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,u=s-a,d=r-h,p=d+u;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var h=o+a,u=new Array(h),d=0,p=0,g=0,m=Math.abs,y=r[p],T=m(y),v=s[g],_=m(v),E,f;T<_?(f=y,p+=1,p<o&&(y=r[p],T=m(y))):(f=v,g+=1,g<a&&(v=s[g],_=m(v))),p<o&&T<_||g>=a?(E=y,p+=1,p<o&&(y=r[p],T=m(y))):(E=v,g+=1,g<a&&(v=s[g],_=m(v)));for(var l=E+f,M=l-E,c=f-M,C=c,w=l,S,x,A,b,R;p<o&&g<a;)T<_?(E=y,p+=1,p<o&&(y=r[p],T=m(y))):(E=v,g+=1,g<a&&(v=s[g],_=m(v))),f=C,l=E+f,M=l-E,c=f-M,c&&(u[d++]=c),S=w+l,x=S-w,A=S-x,b=l-x,R=w-A,C=R+b,w=S;for(;p<o;)E=y,f=C,l=E+f,M=l-E,c=f-M,c&&(u[d++]=c),S=w+l,x=S-w,A=S-x,b=l-x,R=w-A,C=R+b,w=S,p+=1,p<o&&(y=r[p]);for(;g<a;)E=v,f=C,l=E+f,M=l-E,c=f-M,c&&(u[d++]=c),S=w+l,x=S-w,A=S-x,b=l-x,R=w-A,C=R+b,w=S,g+=1,g<a&&(v=s[g]);return C&&(u[d++]=C),w&&(u[d++]=w),d||(u[d++]=0),u.length=d,u}}}),o_=Ze({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,h=o-a,u=r-a,d=n-h;return s?(s[0]=d+u,s[1]=o,s):[d+u,o]}}}),Vc=Ze({"node_modules/robust-scale/robust-scale.js"(i,t){var e=ha(),n=o_();t.exports=r;function r(s,o){var a=s.length;if(a===1){var h=e(s[0],o);return h[0]?h:[h[1]]}var u=new Array(2*a),d=[.1,.1],p=[.1,.1],g=0;e(s[0],o,d),d[0]&&(u[g++]=d[0]);for(var m=1;m<a;++m){e(s[m],o,p);var y=d[1];n(y,p[0],d),d[0]&&(u[g++]=d[0]);var T=p[1],v=d[1],_=T+v,E=_-T,f=v-E;d[1]=_,f&&(u[g++]=f)}return d[1]&&(u[g++]=d[1]),g===0&&(u[g++]=0),u.length=g,u}}}),Hc=Ze({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,u=s-a,d=r-h,p=d+u;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var h=o+a,u=new Array(h),d=0,p=0,g=0,m=Math.abs,y=r[p],T=m(y),v=-s[g],_=m(v),E,f;T<_?(f=y,p+=1,p<o&&(y=r[p],T=m(y))):(f=v,g+=1,g<a&&(v=-s[g],_=m(v))),p<o&&T<_||g>=a?(E=y,p+=1,p<o&&(y=r[p],T=m(y))):(E=v,g+=1,g<a&&(v=-s[g],_=m(v)));for(var l=E+f,M=l-E,c=f-M,C=c,w=l,S,x,A,b,R;p<o&&g<a;)T<_?(E=y,p+=1,p<o&&(y=r[p],T=m(y))):(E=v,g+=1,g<a&&(v=-s[g],_=m(v))),f=C,l=E+f,M=l-E,c=f-M,c&&(u[d++]=c),S=w+l,x=S-w,A=S-x,b=l-x,R=w-A,C=R+b,w=S;for(;p<o;)E=y,f=C,l=E+f,M=l-E,c=f-M,c&&(u[d++]=c),S=w+l,x=S-w,A=S-x,b=l-x,R=w-A,C=R+b,w=S,p+=1,p<o&&(y=r[p]);for(;g<a;)E=v,f=C,l=E+f,M=l-E,c=f-M,c&&(u[d++]=c),S=w+l,x=S-w,A=S-x,b=l-x,R=w-A,C=R+b,w=S,g+=1,g<a&&(v=-s[g]);return C&&(u[d++]=C),w&&(u[d++]=w),d||(u[d++]=0),u.length=d,u}}}),a_=Ze({"node_modules/robust-orientation/orientation.js"(i,t){var e=ha(),n=Gc(),r=Vc(),s=Hc(),o=5,a=11102230246251565e-32,h=(3+16*a)*a,u=(7+56*a)*a;function d(l,M,c,C){return function(S,x,A){var b=l(l(M(x[1],A[0]),M(-A[1],x[0])),l(M(S[1],x[0]),M(-x[1],S[0]))),R=l(M(S[1],A[0]),M(-A[1],S[0])),F=C(b,R);return F[F.length-1]}}function p(l,M,c,C){return function(S,x,A,b){var R=l(l(c(l(M(A[1],b[0]),M(-b[1],A[0])),x[2]),l(c(l(M(x[1],b[0]),M(-b[1],x[0])),-A[2]),c(l(M(x[1],A[0]),M(-A[1],x[0])),b[2]))),l(c(l(M(x[1],b[0]),M(-b[1],x[0])),S[2]),l(c(l(M(S[1],b[0]),M(-b[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),b[2])))),F=l(l(c(l(M(A[1],b[0]),M(-b[1],A[0])),S[2]),l(c(l(M(S[1],b[0]),M(-b[1],S[0])),-A[2]),c(l(M(S[1],A[0]),M(-A[1],S[0])),b[2]))),l(c(l(M(x[1],A[0]),M(-A[1],x[0])),S[2]),l(c(l(M(S[1],A[0]),M(-A[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),A[2])))),B=C(R,F);return B[B.length-1]}}function g(l,M,c,C){return function(S,x,A,b,R){var F=l(l(l(c(l(c(l(M(b[1],R[0]),M(-R[1],b[0])),A[2]),l(c(l(M(A[1],R[0]),M(-R[1],A[0])),-b[2]),c(l(M(A[1],b[0]),M(-b[1],A[0])),R[2]))),x[3]),l(c(l(c(l(M(b[1],R[0]),M(-R[1],b[0])),x[2]),l(c(l(M(x[1],R[0]),M(-R[1],x[0])),-b[2]),c(l(M(x[1],b[0]),M(-b[1],x[0])),R[2]))),-A[3]),c(l(c(l(M(A[1],R[0]),M(-R[1],A[0])),x[2]),l(c(l(M(x[1],R[0]),M(-R[1],x[0])),-A[2]),c(l(M(x[1],A[0]),M(-A[1],x[0])),R[2]))),b[3]))),l(c(l(c(l(M(A[1],b[0]),M(-b[1],A[0])),x[2]),l(c(l(M(x[1],b[0]),M(-b[1],x[0])),-A[2]),c(l(M(x[1],A[0]),M(-A[1],x[0])),b[2]))),-R[3]),l(c(l(c(l(M(b[1],R[0]),M(-R[1],b[0])),x[2]),l(c(l(M(x[1],R[0]),M(-R[1],x[0])),-b[2]),c(l(M(x[1],b[0]),M(-b[1],x[0])),R[2]))),S[3]),c(l(c(l(M(b[1],R[0]),M(-R[1],b[0])),S[2]),l(c(l(M(S[1],R[0]),M(-R[1],S[0])),-b[2]),c(l(M(S[1],b[0]),M(-b[1],S[0])),R[2]))),-x[3])))),l(l(c(l(c(l(M(x[1],R[0]),M(-R[1],x[0])),S[2]),l(c(l(M(S[1],R[0]),M(-R[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),R[2]))),b[3]),l(c(l(c(l(M(x[1],b[0]),M(-b[1],x[0])),S[2]),l(c(l(M(S[1],b[0]),M(-b[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),b[2]))),-R[3]),c(l(c(l(M(A[1],b[0]),M(-b[1],A[0])),x[2]),l(c(l(M(x[1],b[0]),M(-b[1],x[0])),-A[2]),c(l(M(x[1],A[0]),M(-A[1],x[0])),b[2]))),S[3]))),l(c(l(c(l(M(A[1],b[0]),M(-b[1],A[0])),S[2]),l(c(l(M(S[1],b[0]),M(-b[1],S[0])),-A[2]),c(l(M(S[1],A[0]),M(-A[1],S[0])),b[2]))),-x[3]),l(c(l(c(l(M(x[1],b[0]),M(-b[1],x[0])),S[2]),l(c(l(M(S[1],b[0]),M(-b[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),b[2]))),A[3]),c(l(c(l(M(x[1],A[0]),M(-A[1],x[0])),S[2]),l(c(l(M(S[1],A[0]),M(-A[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),A[2]))),-b[3]))))),B=l(l(l(c(l(c(l(M(b[1],R[0]),M(-R[1],b[0])),A[2]),l(c(l(M(A[1],R[0]),M(-R[1],A[0])),-b[2]),c(l(M(A[1],b[0]),M(-b[1],A[0])),R[2]))),S[3]),c(l(c(l(M(b[1],R[0]),M(-R[1],b[0])),S[2]),l(c(l(M(S[1],R[0]),M(-R[1],S[0])),-b[2]),c(l(M(S[1],b[0]),M(-b[1],S[0])),R[2]))),-A[3])),l(c(l(c(l(M(A[1],R[0]),M(-R[1],A[0])),S[2]),l(c(l(M(S[1],R[0]),M(-R[1],S[0])),-A[2]),c(l(M(S[1],A[0]),M(-A[1],S[0])),R[2]))),b[3]),c(l(c(l(M(A[1],b[0]),M(-b[1],A[0])),S[2]),l(c(l(M(S[1],b[0]),M(-b[1],S[0])),-A[2]),c(l(M(S[1],A[0]),M(-A[1],S[0])),b[2]))),-R[3]))),l(l(c(l(c(l(M(A[1],R[0]),M(-R[1],A[0])),x[2]),l(c(l(M(x[1],R[0]),M(-R[1],x[0])),-A[2]),c(l(M(x[1],A[0]),M(-A[1],x[0])),R[2]))),S[3]),c(l(c(l(M(A[1],R[0]),M(-R[1],A[0])),S[2]),l(c(l(M(S[1],R[0]),M(-R[1],S[0])),-A[2]),c(l(M(S[1],A[0]),M(-A[1],S[0])),R[2]))),-x[3])),l(c(l(c(l(M(x[1],R[0]),M(-R[1],x[0])),S[2]),l(c(l(M(S[1],R[0]),M(-R[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),R[2]))),A[3]),c(l(c(l(M(x[1],A[0]),M(-A[1],x[0])),S[2]),l(c(l(M(S[1],A[0]),M(-A[1],S[0])),-x[2]),c(l(M(S[1],x[0]),M(-x[1],S[0])),A[2]))),-R[3])))),O=C(F,B);return O[O.length-1]}}function m(l){var M=l===3?d:l===4?p:g;return M(n,e,r,s)}var y=m(3),T=m(4),v=[function(){return 0},function(){return 0},function(M,c){return c[0]-M[0]},function(M,c,C){var w=(M[1]-C[1])*(c[0]-C[0]),S=(M[0]-C[0])*(c[1]-C[1]),x=w-S,A;if(w>0){if(S<=0)return x;A=w+S}else if(w<0){if(S>=0)return x;A=-(w+S)}else return x;var b=h*A;return x>=b||x<=-b?x:y(M,c,C)},function(M,c,C,w){var S=M[0]-w[0],x=c[0]-w[0],A=C[0]-w[0],b=M[1]-w[1],R=c[1]-w[1],F=C[1]-w[1],B=M[2]-w[2],O=c[2]-w[2],W=C[2]-w[2],z=x*F,Z=A*R,st=A*b,et=S*F,dt=S*R,At=x*b,yt=B*(z-Z)+O*(st-et)+W*(dt-At),_t=(Math.abs(z)+Math.abs(Z))*Math.abs(B)+(Math.abs(st)+Math.abs(et))*Math.abs(O)+(Math.abs(dt)+Math.abs(At))*Math.abs(W),H=u*_t;return yt>H||-yt>H?yt:T(M,c,C,w)}];function _(l){var M=v[l.length];return M||(M=v[l.length]=m(l.length)),M.apply(void 0,l)}function E(l,M,c,C,w,S,x){return function(b,R,F,B,O){switch(arguments.length){case 0:case 1:return 0;case 2:return C(b,R);case 3:return w(b,R,F);case 4:return S(b,R,F,B);case 5:return x(b,R,F,B,O)}for(var W=new Array(arguments.length),z=0;z<arguments.length;++z)W[z]=arguments[z];return l(W)}}function f(){for(;v.length<=o;)v.push(m(v.length));t.exports=E.apply(void 0,[_].concat(v));for(var l=0;l<=o;++l)t.exports[l]=v[l]}f()}}),l_=Ze({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=Ds(),n=a_()[3],r=0,s=1,o=2;t.exports=T;function a(v,_,E,f,l){this.a=v,this.b=_,this.idx=E,this.lowerIds=f,this.upperIds=l}function h(v,_,E,f){this.a=v,this.b=_,this.type=E,this.idx=f}function u(v,_){var E=v.a[0]-_.a[0]||v.a[1]-_.a[1]||v.type-_.type;return E||v.type!==r&&(E=n(v.a,v.b,_.b),E)?E:v.idx-_.idx}function d(v,_){return n(v.a,v.b,_)}function p(v,_,E,f,l){for(var M=e.lt(_,f,d),c=e.gt(_,f,d),C=M;C<c;++C){for(var w=_[C],S=w.lowerIds,A=S.length;A>1&&n(E[S[A-2]],E[S[A-1]],f)>0;)v.push([S[A-1],S[A-2],l]),A-=1;S.length=A,S.push(l);for(var x=w.upperIds,A=x.length;A>1&&n(E[x[A-2]],E[x[A-1]],f)<0;)v.push([x[A-2],x[A-1],l]),A-=1;x.length=A,x.push(l)}}function g(v,_){var E;return v.a[0]<_.a[0]?E=n(v.a,v.b,_.a):E=n(_.b,_.a,v.a),E||(_.b[0]<v.b[0]?E=n(v.a,v.b,_.b):E=n(_.b,_.a,v.b),E||v.idx-_.idx)}function m(v,_,E){var f=e.le(v,E,g),l=v[f],M=l.upperIds,c=M[M.length-1];l.upperIds=[c],v.splice(f+1,0,new a(E.a,E.b,E.idx,[c],M))}function y(v,_,E){var f=E.a;E.a=E.b,E.b=f;var l=e.eq(v,E,g),M=v[l],c=v[l-1];c.upperIds=M.upperIds,v.splice(l,1)}function T(v,_){for(var E=v.length,f=_.length,l=[],M=0;M<E;++M)l.push(new h(v[M],null,r,M));for(var M=0;M<f;++M){var c=_[M],C=v[c[0]],w=v[c[1]];C[0]<w[0]?l.push(new h(C,w,o,M),new h(w,C,s,M)):C[0]>w[0]&&l.push(new h(w,C,o,M),new h(C,w,s,M))}l.sort(u);for(var S=l[0].a[0]-(1+Math.abs(l[0].a[0]))*Math.pow(2,-52),x=[new a([S,1],[S,0],-1,[],[])],A=[],M=0,b=l.length;M<b;++M){var R=l[M],F=R.type;F===r?p(A,x,v,R.a,R.idx):F===o?m(x,v,R):y(x,v,R)}return A}}}),c_=Ze({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=Ds();t.exports=o;function n(a,h){this.stars=a,this.edges=h}var r=n.prototype;function s(a,h,u){for(var d=1,p=a.length;d<p;d+=2)if(a[d-1]===h&&a[d]===u){a[d-1]=a[p-2],a[d]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function h(u,d){return u[0]-d[0]||u[1]-d[1]}return function(u,d){return a[0]=Math.min(u,d),a[1]=Math.max(u,d),e.eq(this.edges,a,h)>=0}})(),r.removeTriangle=function(a,h,u){var d=this.stars;s(d[a],h,u),s(d[h],u,a),s(d[u],a,h)},r.addTriangle=function(a,h,u){var d=this.stars;d[a].push(h,u),d[h].push(u,a),d[u].push(a,h)},r.opposite=function(a,h){for(var u=this.stars[h],d=1,p=u.length;d<p;d+=2)if(u[d]===a)return u[d-1];return-1},r.flip=function(a,h){var u=this.opposite(a,h),d=this.opposite(h,a);this.removeTriangle(a,h,u),this.removeTriangle(h,a,d),this.addTriangle(a,d,u),this.addTriangle(h,u,d)},r.edges=function(){for(var a=this.stars,h=[],u=0,d=a.length;u<d;++u)for(var p=a[u],g=0,m=p.length;g<m;g+=2)h.push([p[g],p[g+1]]);return h},r.cells=function(){for(var a=this.stars,h=[],u=0,d=a.length;u<d;++u)for(var p=a[u],g=0,m=p.length;g<m;g+=2){var y=p[g],T=p[g+1];u<Math.min(y,T)&&h.push([u,y,T])}return h};function o(a,h){for(var u=new Array(a),d=0;d<a;++d)u[d]=[];return new n(u,h)}}}),u_=Ze({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=ha(),n=Gc(),r=Hc(),s=Vc(),o=6;function a(f){var l=f===3?p:f===4?g:f===5?m:y;return l(n,r,e,s)}function h(){return 0}function u(){return 0}function d(){return 0}function p(f,l,M,c){function C(w,S,x){var A=M(w[0],w[0]),b=c(A,S[0]),R=c(A,x[0]),F=M(S[0],S[0]),B=c(F,w[0]),O=c(F,x[0]),W=M(x[0],x[0]),z=c(W,w[0]),Z=c(W,S[0]),st=f(l(Z,O),l(B,b)),et=l(z,R),dt=l(st,et);return dt[dt.length-1]}return C}function g(f,l,M,c){function C(w,S,x,A){var b=f(M(w[0],w[0]),M(w[1],w[1])),R=c(b,S[0]),F=c(b,x[0]),B=c(b,A[0]),O=f(M(S[0],S[0]),M(S[1],S[1])),W=c(O,w[0]),z=c(O,x[0]),Z=c(O,A[0]),st=f(M(x[0],x[0]),M(x[1],x[1])),et=c(st,w[0]),dt=c(st,S[0]),At=c(st,A[0]),yt=f(M(A[0],A[0]),M(A[1],A[1])),_t=c(yt,w[0]),H=c(yt,S[0]),$=c(yt,x[0]),rt=f(f(c(l($,At),S[1]),f(c(l(H,Z),-x[1]),c(l(dt,z),A[1]))),f(c(l(H,Z),w[1]),f(c(l(_t,B),-S[1]),c(l(W,R),A[1])))),ut=f(f(c(l($,At),w[1]),f(c(l(_t,B),-x[1]),c(l(et,F),A[1]))),f(c(l(dt,z),w[1]),f(c(l(et,F),-S[1]),c(l(W,R),x[1])))),at=l(rt,ut);return at[at.length-1]}return C}function m(f,l,M,c){function C(w,S,x,A,b){var R=f(M(w[0],w[0]),f(M(w[1],w[1]),M(w[2],w[2]))),F=c(R,S[0]),B=c(R,x[0]),O=c(R,A[0]),W=c(R,b[0]),z=f(M(S[0],S[0]),f(M(S[1],S[1]),M(S[2],S[2]))),Z=c(z,w[0]),st=c(z,x[0]),et=c(z,A[0]),dt=c(z,b[0]),At=f(M(x[0],x[0]),f(M(x[1],x[1]),M(x[2],x[2]))),yt=c(At,w[0]),_t=c(At,S[0]),H=c(At,A[0]),$=c(At,b[0]),rt=f(M(A[0],A[0]),f(M(A[1],A[1]),M(A[2],A[2]))),ut=c(rt,w[0]),at=c(rt,S[0]),Mt=c(rt,x[0]),qt=c(rt,b[0]),U=f(M(b[0],b[0]),f(M(b[1],b[1]),M(b[2],b[2]))),Ut=c(U,w[0]),xt=c(U,S[0]),mt=c(U,x[0]),ct=c(U,A[0]),Kt=f(f(f(c(f(c(l(ct,qt),x[1]),f(c(l(mt,$),-A[1]),c(l(Mt,H),b[1]))),S[2]),f(c(f(c(l(ct,qt),S[1]),f(c(l(xt,dt),-A[1]),c(l(at,et),b[1]))),-x[2]),c(f(c(l(mt,$),S[1]),f(c(l(xt,dt),-x[1]),c(l(_t,st),b[1]))),A[2]))),f(c(f(c(l(Mt,H),S[1]),f(c(l(at,et),-x[1]),c(l(_t,st),A[1]))),-b[2]),f(c(f(c(l(ct,qt),S[1]),f(c(l(xt,dt),-A[1]),c(l(at,et),b[1]))),w[2]),c(f(c(l(ct,qt),w[1]),f(c(l(Ut,W),-A[1]),c(l(ut,O),b[1]))),-S[2])))),f(f(c(f(c(l(xt,dt),w[1]),f(c(l(Ut,W),-S[1]),c(l(Z,F),b[1]))),A[2]),f(c(f(c(l(at,et),w[1]),f(c(l(ut,O),-S[1]),c(l(Z,F),A[1]))),-b[2]),c(f(c(l(Mt,H),S[1]),f(c(l(at,et),-x[1]),c(l(_t,st),A[1]))),w[2]))),f(c(f(c(l(Mt,H),w[1]),f(c(l(ut,O),-x[1]),c(l(yt,B),A[1]))),-S[2]),f(c(f(c(l(at,et),w[1]),f(c(l(ut,O),-S[1]),c(l(Z,F),A[1]))),x[2]),c(f(c(l(_t,st),w[1]),f(c(l(yt,B),-S[1]),c(l(Z,F),x[1]))),-A[2]))))),ht=f(f(f(c(f(c(l(ct,qt),x[1]),f(c(l(mt,$),-A[1]),c(l(Mt,H),b[1]))),w[2]),c(f(c(l(ct,qt),w[1]),f(c(l(Ut,W),-A[1]),c(l(ut,O),b[1]))),-x[2])),f(c(f(c(l(mt,$),w[1]),f(c(l(Ut,W),-x[1]),c(l(yt,B),b[1]))),A[2]),c(f(c(l(Mt,H),w[1]),f(c(l(ut,O),-x[1]),c(l(yt,B),A[1]))),-b[2]))),f(f(c(f(c(l(mt,$),S[1]),f(c(l(xt,dt),-x[1]),c(l(_t,st),b[1]))),w[2]),c(f(c(l(mt,$),w[1]),f(c(l(Ut,W),-x[1]),c(l(yt,B),b[1]))),-S[2])),f(c(f(c(l(xt,dt),w[1]),f(c(l(Ut,W),-S[1]),c(l(Z,F),b[1]))),x[2]),c(f(c(l(_t,st),w[1]),f(c(l(yt,B),-S[1]),c(l(Z,F),x[1]))),-b[2])))),bt=l(Kt,ht);return bt[bt.length-1]}return C}function y(f,l,M,c){function C(w,S,x,A,b,R){var F=f(f(M(w[0],w[0]),M(w[1],w[1])),f(M(w[2],w[2]),M(w[3],w[3]))),B=c(F,S[0]),O=c(F,x[0]),W=c(F,A[0]),z=c(F,b[0]),Z=c(F,R[0]),st=f(f(M(S[0],S[0]),M(S[1],S[1])),f(M(S[2],S[2]),M(S[3],S[3]))),et=c(st,w[0]),dt=c(st,x[0]),At=c(st,A[0]),yt=c(st,b[0]),_t=c(st,R[0]),H=f(f(M(x[0],x[0]),M(x[1],x[1])),f(M(x[2],x[2]),M(x[3],x[3]))),$=c(H,w[0]),rt=c(H,S[0]),ut=c(H,A[0]),at=c(H,b[0]),Mt=c(H,R[0]),qt=f(f(M(A[0],A[0]),M(A[1],A[1])),f(M(A[2],A[2]),M(A[3],A[3]))),U=c(qt,w[0]),Ut=c(qt,S[0]),xt=c(qt,x[0]),mt=c(qt,b[0]),ct=c(qt,R[0]),Kt=f(f(M(b[0],b[0]),M(b[1],b[1])),f(M(b[2],b[2]),M(b[3],b[3]))),ht=c(Kt,w[0]),bt=c(Kt,S[0]),Ot=c(Kt,x[0]),zt=c(Kt,A[0]),I=c(Kt,R[0]),P=f(f(M(R[0],R[0]),M(R[1],R[1])),f(M(R[2],R[2]),M(R[3],R[3]))),G=c(P,w[0]),Y=c(P,S[0]),J=c(P,x[0]),X=c(P,A[0]),gt=c(P,b[0]),pt=f(f(f(c(f(f(c(f(c(l(gt,I),A[1]),f(c(l(X,ct),-b[1]),c(l(zt,mt),R[1]))),x[2]),c(f(c(l(gt,I),x[1]),f(c(l(J,Mt),-b[1]),c(l(Ot,at),R[1]))),-A[2])),f(c(f(c(l(X,ct),x[1]),f(c(l(J,Mt),-A[1]),c(l(xt,ut),R[1]))),b[2]),c(f(c(l(zt,mt),x[1]),f(c(l(Ot,at),-A[1]),c(l(xt,ut),b[1]))),-R[2]))),S[3]),f(c(f(f(c(f(c(l(gt,I),A[1]),f(c(l(X,ct),-b[1]),c(l(zt,mt),R[1]))),S[2]),c(f(c(l(gt,I),S[1]),f(c(l(Y,_t),-b[1]),c(l(bt,yt),R[1]))),-A[2])),f(c(f(c(l(X,ct),S[1]),f(c(l(Y,_t),-A[1]),c(l(Ut,At),R[1]))),b[2]),c(f(c(l(zt,mt),S[1]),f(c(l(bt,yt),-A[1]),c(l(Ut,At),b[1]))),-R[2]))),-x[3]),c(f(f(c(f(c(l(gt,I),x[1]),f(c(l(J,Mt),-b[1]),c(l(Ot,at),R[1]))),S[2]),c(f(c(l(gt,I),S[1]),f(c(l(Y,_t),-b[1]),c(l(bt,yt),R[1]))),-x[2])),f(c(f(c(l(J,Mt),S[1]),f(c(l(Y,_t),-x[1]),c(l(rt,dt),R[1]))),b[2]),c(f(c(l(Ot,at),S[1]),f(c(l(bt,yt),-x[1]),c(l(rt,dt),b[1]))),-R[2]))),A[3]))),f(f(c(f(f(c(f(c(l(X,ct),x[1]),f(c(l(J,Mt),-A[1]),c(l(xt,ut),R[1]))),S[2]),c(f(c(l(X,ct),S[1]),f(c(l(Y,_t),-A[1]),c(l(Ut,At),R[1]))),-x[2])),f(c(f(c(l(J,Mt),S[1]),f(c(l(Y,_t),-x[1]),c(l(rt,dt),R[1]))),A[2]),c(f(c(l(xt,ut),S[1]),f(c(l(Ut,At),-x[1]),c(l(rt,dt),A[1]))),-R[2]))),-b[3]),c(f(f(c(f(c(l(zt,mt),x[1]),f(c(l(Ot,at),-A[1]),c(l(xt,ut),b[1]))),S[2]),c(f(c(l(zt,mt),S[1]),f(c(l(bt,yt),-A[1]),c(l(Ut,At),b[1]))),-x[2])),f(c(f(c(l(Ot,at),S[1]),f(c(l(bt,yt),-x[1]),c(l(rt,dt),b[1]))),A[2]),c(f(c(l(xt,ut),S[1]),f(c(l(Ut,At),-x[1]),c(l(rt,dt),A[1]))),-b[2]))),R[3])),f(c(f(f(c(f(c(l(gt,I),A[1]),f(c(l(X,ct),-b[1]),c(l(zt,mt),R[1]))),S[2]),c(f(c(l(gt,I),S[1]),f(c(l(Y,_t),-b[1]),c(l(bt,yt),R[1]))),-A[2])),f(c(f(c(l(X,ct),S[1]),f(c(l(Y,_t),-A[1]),c(l(Ut,At),R[1]))),b[2]),c(f(c(l(zt,mt),S[1]),f(c(l(bt,yt),-A[1]),c(l(Ut,At),b[1]))),-R[2]))),w[3]),c(f(f(c(f(c(l(gt,I),A[1]),f(c(l(X,ct),-b[1]),c(l(zt,mt),R[1]))),w[2]),c(f(c(l(gt,I),w[1]),f(c(l(G,Z),-b[1]),c(l(ht,z),R[1]))),-A[2])),f(c(f(c(l(X,ct),w[1]),f(c(l(G,Z),-A[1]),c(l(U,W),R[1]))),b[2]),c(f(c(l(zt,mt),w[1]),f(c(l(ht,z),-A[1]),c(l(U,W),b[1]))),-R[2]))),-S[3])))),f(f(f(c(f(f(c(f(c(l(gt,I),S[1]),f(c(l(Y,_t),-b[1]),c(l(bt,yt),R[1]))),w[2]),c(f(c(l(gt,I),w[1]),f(c(l(G,Z),-b[1]),c(l(ht,z),R[1]))),-S[2])),f(c(f(c(l(Y,_t),w[1]),f(c(l(G,Z),-S[1]),c(l(et,B),R[1]))),b[2]),c(f(c(l(bt,yt),w[1]),f(c(l(ht,z),-S[1]),c(l(et,B),b[1]))),-R[2]))),A[3]),c(f(f(c(f(c(l(X,ct),S[1]),f(c(l(Y,_t),-A[1]),c(l(Ut,At),R[1]))),w[2]),c(f(c(l(X,ct),w[1]),f(c(l(G,Z),-A[1]),c(l(U,W),R[1]))),-S[2])),f(c(f(c(l(Y,_t),w[1]),f(c(l(G,Z),-S[1]),c(l(et,B),R[1]))),A[2]),c(f(c(l(Ut,At),w[1]),f(c(l(U,W),-S[1]),c(l(et,B),A[1]))),-R[2]))),-b[3])),f(c(f(f(c(f(c(l(zt,mt),S[1]),f(c(l(bt,yt),-A[1]),c(l(Ut,At),b[1]))),w[2]),c(f(c(l(zt,mt),w[1]),f(c(l(ht,z),-A[1]),c(l(U,W),b[1]))),-S[2])),f(c(f(c(l(bt,yt),w[1]),f(c(l(ht,z),-S[1]),c(l(et,B),b[1]))),A[2]),c(f(c(l(Ut,At),w[1]),f(c(l(U,W),-S[1]),c(l(et,B),A[1]))),-b[2]))),R[3]),c(f(f(c(f(c(l(X,ct),x[1]),f(c(l(J,Mt),-A[1]),c(l(xt,ut),R[1]))),S[2]),c(f(c(l(X,ct),S[1]),f(c(l(Y,_t),-A[1]),c(l(Ut,At),R[1]))),-x[2])),f(c(f(c(l(J,Mt),S[1]),f(c(l(Y,_t),-x[1]),c(l(rt,dt),R[1]))),A[2]),c(f(c(l(xt,ut),S[1]),f(c(l(Ut,At),-x[1]),c(l(rt,dt),A[1]))),-R[2]))),w[3]))),f(f(c(f(f(c(f(c(l(X,ct),x[1]),f(c(l(J,Mt),-A[1]),c(l(xt,ut),R[1]))),w[2]),c(f(c(l(X,ct),w[1]),f(c(l(G,Z),-A[1]),c(l(U,W),R[1]))),-x[2])),f(c(f(c(l(J,Mt),w[1]),f(c(l(G,Z),-x[1]),c(l($,O),R[1]))),A[2]),c(f(c(l(xt,ut),w[1]),f(c(l(U,W),-x[1]),c(l($,O),A[1]))),-R[2]))),-S[3]),c(f(f(c(f(c(l(X,ct),S[1]),f(c(l(Y,_t),-A[1]),c(l(Ut,At),R[1]))),w[2]),c(f(c(l(X,ct),w[1]),f(c(l(G,Z),-A[1]),c(l(U,W),R[1]))),-S[2])),f(c(f(c(l(Y,_t),w[1]),f(c(l(G,Z),-S[1]),c(l(et,B),R[1]))),A[2]),c(f(c(l(Ut,At),w[1]),f(c(l(U,W),-S[1]),c(l(et,B),A[1]))),-R[2]))),x[3])),f(c(f(f(c(f(c(l(J,Mt),S[1]),f(c(l(Y,_t),-x[1]),c(l(rt,dt),R[1]))),w[2]),c(f(c(l(J,Mt),w[1]),f(c(l(G,Z),-x[1]),c(l($,O),R[1]))),-S[2])),f(c(f(c(l(Y,_t),w[1]),f(c(l(G,Z),-S[1]),c(l(et,B),R[1]))),x[2]),c(f(c(l(rt,dt),w[1]),f(c(l($,O),-S[1]),c(l(et,B),x[1]))),-R[2]))),-A[3]),c(f(f(c(f(c(l(xt,ut),S[1]),f(c(l(Ut,At),-x[1]),c(l(rt,dt),A[1]))),w[2]),c(f(c(l(xt,ut),w[1]),f(c(l(U,W),-x[1]),c(l($,O),A[1]))),-S[2])),f(c(f(c(l(Ut,At),w[1]),f(c(l(U,W),-S[1]),c(l(et,B),A[1]))),x[2]),c(f(c(l(rt,dt),w[1]),f(c(l($,O),-S[1]),c(l(et,B),x[1]))),-A[2]))),R[3]))))),Ct=f(f(f(c(f(f(c(f(c(l(gt,I),A[1]),f(c(l(X,ct),-b[1]),c(l(zt,mt),R[1]))),x[2]),c(f(c(l(gt,I),x[1]),f(c(l(J,Mt),-b[1]),c(l(Ot,at),R[1]))),-A[2])),f(c(f(c(l(X,ct),x[1]),f(c(l(J,Mt),-A[1]),c(l(xt,ut),R[1]))),b[2]),c(f(c(l(zt,mt),x[1]),f(c(l(Ot,at),-A[1]),c(l(xt,ut),b[1]))),-R[2]))),w[3]),f(c(f(f(c(f(c(l(gt,I),A[1]),f(c(l(X,ct),-b[1]),c(l(zt,mt),R[1]))),w[2]),c(f(c(l(gt,I),w[1]),f(c(l(G,Z),-b[1]),c(l(ht,z),R[1]))),-A[2])),f(c(f(c(l(X,ct),w[1]),f(c(l(G,Z),-A[1]),c(l(U,W),R[1]))),b[2]),c(f(c(l(zt,mt),w[1]),f(c(l(ht,z),-A[1]),c(l(U,W),b[1]))),-R[2]))),-x[3]),c(f(f(c(f(c(l(gt,I),x[1]),f(c(l(J,Mt),-b[1]),c(l(Ot,at),R[1]))),w[2]),c(f(c(l(gt,I),w[1]),f(c(l(G,Z),-b[1]),c(l(ht,z),R[1]))),-x[2])),f(c(f(c(l(J,Mt),w[1]),f(c(l(G,Z),-x[1]),c(l($,O),R[1]))),b[2]),c(f(c(l(Ot,at),w[1]),f(c(l(ht,z),-x[1]),c(l($,O),b[1]))),-R[2]))),A[3]))),f(f(c(f(f(c(f(c(l(X,ct),x[1]),f(c(l(J,Mt),-A[1]),c(l(xt,ut),R[1]))),w[2]),c(f(c(l(X,ct),w[1]),f(c(l(G,Z),-A[1]),c(l(U,W),R[1]))),-x[2])),f(c(f(c(l(J,Mt),w[1]),f(c(l(G,Z),-x[1]),c(l($,O),R[1]))),A[2]),c(f(c(l(xt,ut),w[1]),f(c(l(U,W),-x[1]),c(l($,O),A[1]))),-R[2]))),-b[3]),c(f(f(c(f(c(l(zt,mt),x[1]),f(c(l(Ot,at),-A[1]),c(l(xt,ut),b[1]))),w[2]),c(f(c(l(zt,mt),w[1]),f(c(l(ht,z),-A[1]),c(l(U,W),b[1]))),-x[2])),f(c(f(c(l(Ot,at),w[1]),f(c(l(ht,z),-x[1]),c(l($,O),b[1]))),A[2]),c(f(c(l(xt,ut),w[1]),f(c(l(U,W),-x[1]),c(l($,O),A[1]))),-b[2]))),R[3])),f(c(f(f(c(f(c(l(gt,I),x[1]),f(c(l(J,Mt),-b[1]),c(l(Ot,at),R[1]))),S[2]),c(f(c(l(gt,I),S[1]),f(c(l(Y,_t),-b[1]),c(l(bt,yt),R[1]))),-x[2])),f(c(f(c(l(J,Mt),S[1]),f(c(l(Y,_t),-x[1]),c(l(rt,dt),R[1]))),b[2]),c(f(c(l(Ot,at),S[1]),f(c(l(bt,yt),-x[1]),c(l(rt,dt),b[1]))),-R[2]))),w[3]),c(f(f(c(f(c(l(gt,I),x[1]),f(c(l(J,Mt),-b[1]),c(l(Ot,at),R[1]))),w[2]),c(f(c(l(gt,I),w[1]),f(c(l(G,Z),-b[1]),c(l(ht,z),R[1]))),-x[2])),f(c(f(c(l(J,Mt),w[1]),f(c(l(G,Z),-x[1]),c(l($,O),R[1]))),b[2]),c(f(c(l(Ot,at),w[1]),f(c(l(ht,z),-x[1]),c(l($,O),b[1]))),-R[2]))),-S[3])))),f(f(f(c(f(f(c(f(c(l(gt,I),S[1]),f(c(l(Y,_t),-b[1]),c(l(bt,yt),R[1]))),w[2]),c(f(c(l(gt,I),w[1]),f(c(l(G,Z),-b[1]),c(l(ht,z),R[1]))),-S[2])),f(c(f(c(l(Y,_t),w[1]),f(c(l(G,Z),-S[1]),c(l(et,B),R[1]))),b[2]),c(f(c(l(bt,yt),w[1]),f(c(l(ht,z),-S[1]),c(l(et,B),b[1]))),-R[2]))),x[3]),c(f(f(c(f(c(l(J,Mt),S[1]),f(c(l(Y,_t),-x[1]),c(l(rt,dt),R[1]))),w[2]),c(f(c(l(J,Mt),w[1]),f(c(l(G,Z),-x[1]),c(l($,O),R[1]))),-S[2])),f(c(f(c(l(Y,_t),w[1]),f(c(l(G,Z),-S[1]),c(l(et,B),R[1]))),x[2]),c(f(c(l(rt,dt),w[1]),f(c(l($,O),-S[1]),c(l(et,B),x[1]))),-R[2]))),-b[3])),f(c(f(f(c(f(c(l(Ot,at),S[1]),f(c(l(bt,yt),-x[1]),c(l(rt,dt),b[1]))),w[2]),c(f(c(l(Ot,at),w[1]),f(c(l(ht,z),-x[1]),c(l($,O),b[1]))),-S[2])),f(c(f(c(l(bt,yt),w[1]),f(c(l(ht,z),-S[1]),c(l(et,B),b[1]))),x[2]),c(f(c(l(rt,dt),w[1]),f(c(l($,O),-S[1]),c(l(et,B),x[1]))),-b[2]))),R[3]),c(f(f(c(f(c(l(zt,mt),x[1]),f(c(l(Ot,at),-A[1]),c(l(xt,ut),b[1]))),S[2]),c(f(c(l(zt,mt),S[1]),f(c(l(bt,yt),-A[1]),c(l(Ut,At),b[1]))),-x[2])),f(c(f(c(l(Ot,at),S[1]),f(c(l(bt,yt),-x[1]),c(l(rt,dt),b[1]))),A[2]),c(f(c(l(xt,ut),S[1]),f(c(l(Ut,At),-x[1]),c(l(rt,dt),A[1]))),-b[2]))),w[3]))),f(f(c(f(f(c(f(c(l(zt,mt),x[1]),f(c(l(Ot,at),-A[1]),c(l(xt,ut),b[1]))),w[2]),c(f(c(l(zt,mt),w[1]),f(c(l(ht,z),-A[1]),c(l(U,W),b[1]))),-x[2])),f(c(f(c(l(Ot,at),w[1]),f(c(l(ht,z),-x[1]),c(l($,O),b[1]))),A[2]),c(f(c(l(xt,ut),w[1]),f(c(l(U,W),-x[1]),c(l($,O),A[1]))),-b[2]))),-S[3]),c(f(f(c(f(c(l(zt,mt),S[1]),f(c(l(bt,yt),-A[1]),c(l(Ut,At),b[1]))),w[2]),c(f(c(l(zt,mt),w[1]),f(c(l(ht,z),-A[1]),c(l(U,W),b[1]))),-S[2])),f(c(f(c(l(bt,yt),w[1]),f(c(l(ht,z),-S[1]),c(l(et,B),b[1]))),A[2]),c(f(c(l(Ut,At),w[1]),f(c(l(U,W),-S[1]),c(l(et,B),A[1]))),-b[2]))),x[3])),f(c(f(f(c(f(c(l(Ot,at),S[1]),f(c(l(bt,yt),-x[1]),c(l(rt,dt),b[1]))),w[2]),c(f(c(l(Ot,at),w[1]),f(c(l(ht,z),-x[1]),c(l($,O),b[1]))),-S[2])),f(c(f(c(l(bt,yt),w[1]),f(c(l(ht,z),-S[1]),c(l(et,B),b[1]))),x[2]),c(f(c(l(rt,dt),w[1]),f(c(l($,O),-S[1]),c(l(et,B),x[1]))),-b[2]))),-A[3]),c(f(f(c(f(c(l(xt,ut),S[1]),f(c(l(Ut,At),-x[1]),c(l(rt,dt),A[1]))),w[2]),c(f(c(l(xt,ut),w[1]),f(c(l(U,W),-x[1]),c(l($,O),A[1]))),-S[2])),f(c(f(c(l(Ut,At),w[1]),f(c(l(U,W),-S[1]),c(l(et,B),A[1]))),x[2]),c(f(c(l(rt,dt),w[1]),f(c(l($,O),-S[1]),c(l(et,B),x[1]))),-A[2]))),b[3]))))),Pt=l(pt,Ct);return Pt[Pt.length-1]}return C}var T=[h,u,d];function v(f){var l=T[f.length];return l||(l=T[f.length]=a(f.length)),l.apply(void 0,f)}function _(f,l,M,c,C,w,S,x){function A(b,R,F,B,O,W){switch(arguments.length){case 0:case 1:return 0;case 2:return c(b,R);case 3:return C(b,R,F);case 4:return w(b,R,F,B);case 5:return S(b,R,F,B,O);case 6:return x(b,R,F,B,O,W)}for(var z=new Array(arguments.length),Z=0;Z<arguments.length;++Z)z[Z]=arguments[Z];return f(z)}return A}function E(){for(;T.length<=o;)T.push(a(T.length));t.exports=_.apply(void 0,[v].concat(T));for(var f=0;f<=o;++f)t.exports[f]=T[f]}E()}}),h_=Ze({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=u_()[4];Ds(),t.exports=r;function n(s,o,a,h,u,d){var p=o.opposite(h,u);if(!(p<0)){if(u<h){var g=h;h=u,u=g,g=d,d=p,p=g}o.isConstraint(h,u)||e(s[h],s[u],s[d],s[p])<0&&a.push(h,u)}}function r(s,o){for(var a=[],h=s.length,u=o.stars,d=0;d<h;++d)for(var p=u[d],g=1;g<p.length;g+=2){var m=p[g];if(!(m<d)&&!o.isConstraint(d,m)){for(var y=p[g-1],T=-1,v=1;v<p.length;v+=2)if(p[v-1]===m){T=p[v];break}T<0||e(s[d],s[m],s[y],s[T])<0&&a.push(d,m)}}for(;a.length>0;){for(var m=a.pop(),d=a.pop(),y=-1,T=-1,p=u[d],_=1;_<p.length;_+=2){var E=p[_-1],f=p[_];E===m?T=f:f===m&&(y=E)}y<0||T<0||e(s[d],s[m],s[y],s[T])>=0||(o.flip(d,m),n(s,o,a,y,d,T),n(s,o,a,d,T,y),n(s,o,a,T,m,y),n(s,o,a,m,y,T))}}}}),f_=Ze({"node_modules/cdt2d/lib/filter.js"(i,t){var e=Ds();t.exports=h;function n(u,d,p,g,m,y,T){this.cells=u,this.neighbor=d,this.flags=g,this.constraint=p,this.active=m,this.next=y,this.boundary=T}var r=n.prototype;function s(u,d){return u[0]-d[0]||u[1]-d[1]||u[2]-d[2]}r.locate=(function(){var u=[0,0,0];return function(d,p,g){var m=d,y=p,T=g;return p<g?p<d&&(m=p,y=g,T=d):g<d&&(m=g,y=d,T=p),m<0?-1:(u[0]=m,u[1]=y,u[2]=T,e.eq(this.cells,u,s))}})();function o(u,d){for(var p=u.cells(),g=p.length,m=0;m<g;++m){var y=p[m],T=y[0],v=y[1],_=y[2];v<_?v<T&&(y[0]=v,y[1]=_,y[2]=T):_<T&&(y[0]=_,y[1]=T,y[2]=v)}p.sort(s);for(var E=new Array(g),m=0;m<E.length;++m)E[m]=0;var f=[],l=[],M=new Array(3*g),c=new Array(3*g),C=null;d&&(C=[]);for(var w=new n(p,M,c,E,f,l,C),m=0;m<g;++m)for(var y=p[m],S=0;S<3;++S){var T=y[S],v=y[(S+1)%3],x=M[3*m+S]=w.locate(v,T,u.opposite(v,T)),A=c[3*m+S]=u.isConstraint(T,v);x<0&&(A?l.push(m):(f.push(m),E[m]=1),d&&C.push([v,T,-1]))}return w}function a(u,d,p){for(var g=0,m=0;m<u.length;++m)d[m]===p&&(u[g++]=u[m]);return u.length=g,u}function h(u,d,p){var g=o(u,p);if(d===0)return p?g.cells.concat(g.boundary):g.cells;for(var m=1,y=g.active,T=g.next,v=g.flags,_=g.cells,E=g.constraint,f=g.neighbor;y.length>0||T.length>0;){for(;y.length>0;){var l=y.pop();if(v[l]!==-m){v[l]=m,_[l];for(var M=0;M<3;++M){var c=f[3*l+M];c>=0&&v[c]===0&&(E[3*l+M]?T.push(c):(y.push(c),v[c]=m))}}}var C=T;T=y,y=C,T.length=0,m=-m}var w=a(_,v,d);return p?w.concat(g.boundary):w}}}),d_=Ze({"node_modules/cdt2d/cdt2d.js"(i,t){var e=l_(),n=c_(),r=h_(),s=f_();t.exports=d;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,g){return p[0]-g[0]||p[1]-g[1]}function h(p){return p.map(o).sort(a)}function u(p,g,m){return g in p?p[g]:m}function d(p,g,m){Array.isArray(g)?(m=m||{},g=g||[]):(m=g||{},g=[]);var y=!!u(m,"delaunay",!0),T=!!u(m,"interior",!0),v=!!u(m,"exterior",!0),_=!!u(m,"infinity",!1);if(!T&&!v||p.length===0)return[];var E=e(p,g);if(y||T!==v||_){for(var f=n(p.length,h(g)),l=0;l<E.length;++l){var M=E[l];f.addTriangle(M[0],M[1],M[2])}return y&&r(p,f),v?T?_?s(f,0,_):f.cells():s(f,1,_):s(f,-1)}else return E}}});const p_=d_();class ui{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Ol=1e-16,g_=1e-16,li=new L,zl=new L,Gl=new ui(()=>({param:0,index:0})),m_=new ui(()=>new L);function __(i,t,e,n){Gl.clear(),t.length=0,e.length=0;for(let u=0,d=i.length;u<d;u++){const p=i[u];h(p.start),h(p.end)}for(let u=0,d=i.length;u<d;u++){const p=i[u];for(let g=u+1;g<d;g++){const m=i[g];p.distanceSqToLine3(m,li,zl)<Ol*n&&h(zl)}}const r=[];for(let u=0,d=i.length;u<d;u++){r.length=0;const p=i[u];for(let g=0,m=t.length;g<m;g++){const y=t[g],T=p.closestPointToPointParameter(y,!0);if(p.at(T,li),y.distanceToSquared(li)<Ol*n){const v=Gl.getInstance();v.param=T,v.index=g,r.push(v)}}r.sort(a);for(let g=0,m=r.length-1;g<m;g++){const y=r[g].index,T=r[g+1].index;y!==T&&e.push([y,T])}}const s=new Set;let o=0;for(let u=0,d=e.length;u<d;u++){const p=e[u],g=Math.min(p[0],p[1]),m=Math.max(p[0],p[1]),y=g+","+m;s.has(y)||(s.add(y),e[o++]=p)}e.length=o;function a(u,d){return u.param-d.param}function h(u){for(let d=0;d<t.length;d++){const p=t[d];if(u===p||u.distanceToSquared(p)<g_*n)return d}return t.push(m_.getInstance().copy(u)),t.length-1}}class Vl{constructor(){this.trianglePool=new ui(()=>new ke),this.linePool=new ui(()=>new Ee),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new L,this.projOrigin=new L,this.projU=new L,this.projV=new L,this.baseTri=new ke,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:h,projOrigin:u,constrainedEdges:d,linePool:p,baseIndices:g}=this;t.getNormal(s),o.copy(t),o.update(),g[0]=e,g[1]=n,g[2]=r,d.length=0;const m=p.getInstance();m.start.copy(o.a),m.end.copy(o.b);const y=p.getInstance();y.start.copy(o.b),y.end.copy(o.c);const T=p.getInstance();T.start.copy(o.c),T.end.copy(o.a),d.push(m,y,T),u.copy(o.a),a.subVectors(o.b,o.a).normalize(),h.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return li.subVectors(t,n),e.set(li.dot(r),li.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:h}=this;t.length=0,e.clear();const u=[];for(let _=0,E=a.length;_<E;_++){const f=a[_],l=s.getInstance();this._to2D(f.start,l.start),this._to2D(f.end,l.end),u.push(l)}let d=0;for(let _=0;_<3;_++){const E=this._to2D(o.points[_],li);d=Math.max(d,Math.abs(E.x),Math.abs(E.y))}const p=[],g=[];__(u,p,g,d);const m=[];for(let _=0,E=p.length;_<E;_++){const f=p[_];m.push([f.x,f.y])}const y=p_(m,g,{exterior:!1}),T=new Map;for(let _=0,E=g.length;_<E;_++){const f=g[_];T.set(`${f[0]}_${f[1]}`,-1),T.set(`${f[1]}_${f[0]}`,-1)}const v=`${h[0]}_${h[1]}_${h[2]}_`;for(let _=0,E=y.length;_<E;_++){const f=y[_],[l,M,c]=f,C=e.getInstance();this._from2D(m[l][0],m[l][1],C.a),this._from2D(m[M][0],m[M][1],C.b),this._from2D(m[c][0],m[c][1],C.c),t.push(C);const w=[];n.push(w);const S=[];r.push(S);for(let x=0;x<3;x++){const A=f[x];S.push(A<3?h[A]:v+A);const b=f[(x+1)%3],R=`${A}_${b}`;if(T.has(R)){const F=T.get(R);F!==-1&&(w.push(F),n[F].push(_))}else{const F=`${b}_${A}`;T.set(F,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const v_=1e-14,Ao=new L,Hl=new L,kl=new L;function Vn(i,t=v_){Ao.subVectors(i.b,i.a),Hl.subVectors(i.c,i.a),kl.subVectors(i.b,i.c);const e=Ao.angleTo(Hl),n=Ao.angleTo(kl),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const bo=1e-10,fr=1e-10,An=new Ee,fe=new Ee,bn=new L,Wl=new L,Xl=new L,cs=new fn,wo=new ke;class ql{constructor(){this.trianglePool=new ui(()=>new oe),this.triangles=[],this.normal=new L}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(bn).dot(r))>bo)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const h=n.getInstance();h.copy(a),e.push(h)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],h=r[o];t.getNormal(Wl).normalize(),bn.subVectors(h,a).normalize(),Xl.crossVectors(Wl,bn),cs.setFromNormalAndCoplanarPoint(Xl,a),this.splitByPlane(cs,t)}}else t.getPlane(cs),this.splitByPlane(cs,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;wo.copy(e),wo.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!wo.intersectsTriangle(a,An,!0))continue;const{a:h,b:u,c:d}=a;let p=0,g=-1,m=!1,y=[],T=[];const v=[h,u,d];for(let _=0;_<3;_++){const E=(_+1)%3;An.start.copy(v[_]),An.end.copy(v[E]);const f=t.distanceToPoint(An.start),l=t.distanceToPoint(An.end);if(Math.abs(f)<fr&&Math.abs(l)<fr){m=!0;break}if(f>0?y.push(_):T.push(_),Math.abs(f)<fr)continue;let M=!!t.intersectLine(An,bn);!M&&Math.abs(l)<fr&&(bn.copy(An.end),M=!0),M&&!(bn.distanceTo(An.start)<bo)&&(bn.distanceTo(An.end)<bo&&(g=_),p===0?fe.start.copy(bn):fe.end.copy(bn),p++)}if(!m&&p===2&&fe.distance()>fr)if(g!==-1){g=(g+1)%3;let _=0;_===g&&(_=(_+1)%3);let E=_+1;E===g&&(E=(E+1)%3);const f=r.getInstance();f.a.copy(v[E]),f.b.copy(fe.end),f.c.copy(fe.start),Vn(f)||n.push(f),a.a.copy(v[_]),a.b.copy(fe.start),a.c.copy(fe.end),Vn(a)&&(n.splice(s,1),s--,o--)}else{const _=y.length>=2?T[0]:y[0];if(_===0){let c=fe.start;fe.start=fe.end,fe.end=c}const E=(_+1)%3,f=(_+2)%3,l=r.getInstance(),M=r.getInstance();v[E].distanceToSquared(fe.start)<v[f].distanceToSquared(fe.end)?(l.a.copy(v[E]),l.b.copy(fe.start),l.c.copy(fe.end),M.a.copy(v[E]),M.b.copy(v[f]),M.c.copy(fe.start)):(l.a.copy(v[f]),l.b.copy(fe.start),l.c.copy(fe.end),M.a.copy(v[E]),M.b.copy(v[f]),M.c.copy(fe.end)),a.a.copy(v[_]),a.b.copy(fe.end),a.c.copy(fe.start),Vn(l)||n.push(l),Vn(M)||n.push(M),Vn(a)&&(n.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class Yl{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const x_=0,kc=1,M_=2,S_=3,y_=4,Wc=5,Xc=6,Ro=1e-10,T_=1e-15,E_=1e-10,A_=1e-10,$l=new Ee,Ni=new Ee,Kl=new L,Zl=new L,jl=new L,Co=new fn,ki=new L,ws=new L;function b_(i,t){i.getNormal(ki),t.getNormal(ws);const e=ki.dot(ws);if(Math.abs(1-Math.abs(e))>=E_)return!1;const n=ki.dot(i.a),r=ki.dot(t.a);return Math.abs(n-r)<A_}function Jl(i,t,e,n){let r=0,s=1;i.delta(Kl);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const h=o[a],u=o[(a+1)%3];Zl.subVectors(u,h),jl.crossVectors(e,Zl),Co.setFromNormalAndCoplanarPoint(jl,h);const d=Co.distanceToPoint(i.start),p=Co.normal.dot(Kl);if(Math.abs(p)<T_){if(d<-Ro)return null;continue}const g=-d/p;if(p>0?r=Math.max(r,g):s=Math.min(s,g),r>s+Ro)return null}return s-r<Ro?null:(i.at(r,n.start),i.at(s,n.end),n)}function Ql(i,t,e){let n=0;i.getNormal(ki),t.getNormal(ws);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){Ni.start.copy(r[o]),Ni.end.copy(r[(o+1)%3]);const a=Jl(Ni,i,ki,$l);a!==null&&(n>=e.length&&e.push(new Ee),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){Ni.start.copy(s[o]),Ni.end.copy(s[(o+1)%3]);const a=Jl(Ni,t,ws,$l);a!==null&&(n>=e.length&&e.push(new Ee),e[n].copy(a),n++)}return n}const Bi=new Sr,tc=new jt,us=new Ee,Po=[],hs=new ui(()=>new Ee),zi=-1,Gi=1,xs=-2,Ms=2,_r=0,ei=1,fa=2;let Ss=null;function ec(i){Ss=i}function qc(i,t,e=null){i.getMidpoint(Bi.origin),i.getNormal(Bi.direction),e&&(Bi.origin.applyMatrix4(e),Bi.direction.transformDirection(e));const n=t.raycastFirst(Bi,2);return!!(n&&Bi.direction.dot(n.face.normal)>0)?zi:Gi}function w_(i,t){const e=new Yl,n=new Yl;return hs.clear(),tc.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,tc,{intersectsTriangles(r,s,o,a){if(!Vn(r)&&!Vn(s)){const u=(b_(r,s)?Ql(r,s,Po):0)>2;if(u||r.intersectsTriangle(s,us,!0)){const p=i.geometry.boundsTree.resolveTriangleIndex(o),g=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,g,u),n.add(g,p,u),u){const m=Ql(r,s,Po);for(let y=0;y<m;y++){const T=hs.getInstance().copy(Po[y]);e.addIntersectionEdge(p,T),n.addIntersectionEdge(g,T)}}else{const m=hs.getInstance().copy(us),y=hs.getInstance().copy(us);e.addIntersectionEdge(p,m),n.addIntersectionEdge(g,y)}Ss&&(Ss.addEdge(us),Ss.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Yc(i,t,e=!1){switch(i){case x_:if(t===Gi||t===Ms&&!e)return ei;break;case kc:if(e){if(t===zi)return _r}else if(t===Gi||t===xs)return ei;break;case M_:if(e){if(t===Gi||t===xs)return ei}else if(t===zi)return _r;break;case y_:if(t===zi)return _r;if(t===Gi)return ei;break;case S_:if(t===zi||t===Ms&&!e)return ei;break;case Wc:if(!e&&(t===Gi||t===xs))return ei;break;case Xc:if(!e&&(t===zi||t===Ms))return ei;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return fa}class R_{constructor(t){this.triangle=new oe().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new oe().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class nc{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new R_(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const h=n[a].intersects;for(const u in h)r.has(u)||(r.add(u),s.push(h[u]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class C_{constructor(){this.enabled=!1,this.triangleIntersectsA=new nc,this.triangleIntersectsB=new nc,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),ec(this))}complete(){this.enabled&&ec(null)}}const $e=new jt,ni=new jt,Ge=new jt,Gn=new Wt,cn=new oe,ii=new oe,un=new oe,On=new oe,ci=[],_n=[],fs=new Set,ic=new L,rc=new L,sc=new ui(()=>new oe),oc=new L,ds=[];function P_(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:h}=w_(i,t),u=[];let d=null,p;return p=o?0:-1,lc(i,t,a,e,!1,r,p),ac(i,t,a,e,!1,n,r,p),e.findIndex(m=>m!==Xc&&m!==Wc)!==-1&&(r.forEach(m=>m.clearIndexMap()),p=o?i.geometry.groups.length||1:-1,lc(t,i,h,e,!0,r,p),ac(t,i,h,e,!0,n,r,p)),r.forEach(m=>m.clearIndexMap()),ci.length=0,{groups:u,materials:d}}function ac(i,t,e,n,r,s,o,a=0){$e.copy(t.matrixWorld).invert().multiply(i.matrixWorld),ni.copy($e).invert(),r?Ge.copy($e):Ge.identity();const h=Ge.determinant()<0;Gn.getNormalMatrix(Ge).multiplyScalar(h?-1:1);const u=i.geometry.groupIndices,d=i.geometry.index,p=i.geometry.attributes.position,g=t.geometry.boundsTree,m=t.geometry.index,y=t.geometry.attributes.position,T=e.ids;for(let v=0,_=T.length;v<_;v++){const E=T[v],f=a===-1?0:u[E]+a,l=3*E;let M=l+0,c=l+1,C=l+2;d&&(M=d.getX(M),c=d.getX(c),C=d.getX(C)),cn.a.fromBufferAttribute(p,M),cn.b.fromBufferAttribute(p,c),cn.c.fromBufferAttribute(p,C),r&&(cn.a.applyMatrix4($e),cn.b.applyMatrix4($e),cn.c.applyMatrix4($e)),s.reset(),s.initialize(cn,M,c,C),ds.length=0,sc.clear(),cn.getNormal(rc);const w=e.coplanarSet.get(E);if(w)for(const b of w){const R=3*b;let F=R+0,B=R+1,O=R+2;m&&(F=m.getX(F),B=m.getX(B),O=m.getX(O));const W=sc.getInstance();W.a.fromBufferAttribute(y,F),W.b.fromBufferAttribute(y,B),W.c.fromBufferAttribute(y,O),r||(W.a.applyMatrix4(ni),W.b.applyMatrix4(ni),W.c.applyMatrix4(ni)),ds.push(W)}if(s.addConstraintEdge){const b=e.getIntersectionEdges(E);if(b)for(const R of b)s.addConstraintEdge(R);s.triangulate()}else{const R=e.intersectionSet.get(E);for(let F=0,B=R.length;F<B;F++){const O=R[F],W=w&&w.has(O),z=3*O;let Z=z+0,st=z+1,et=z+2;m&&(Z=m.getX(Z),st=m.getX(st),et=m.getX(et)),ii.a.fromBufferAttribute(y,Z),ii.b.fromBufferAttribute(y,st),ii.c.fromBufferAttribute(y,et),r||(ii.a.applyMatrix4(ni),ii.b.applyMatrix4(ni),ii.c.applyMatrix4(ni)),s.splitByTriangle(ii,W)}}const{triangles:S,triangleIndices:x=[],triangleConnectivity:A=[]}=s;for(let b=0,R=o.length;b<R;b++)o[b].initInterpolatedAttributeData(i.geometry,Ge,Gn,M,c,C);fs.clear();for(let b=0,R=S.length;b<R;b++){if(fs.has(b))continue;const F=S[b],B=r?null:$e;let O=null;F.getMidpoint(ic);for(let W=0,z=ds.length;W<z;W++){const Z=ds[W];if(Z.containsPoint(ic)){Z.getNormal(oc),O=rc.dot(oc)>0?Ms:xs;break}}O===null&&(O=qc(F,g,B)),ci.length=0,_n.length=0;for(let W=0,z=n.length;W<z;W++){const Z=Yc(n[W],O,r);Z!==fa&&(ci.push(Z),_n.push(o[W]))}if(_n.length!==0){const W=[b];for(;W.length>0;){const z=W.pop();if(fs.has(z))continue;fs.add(z);const Z=x[z];let st=null,et=null,dt=null;Z&&(st=Z[0],et=Z[1],dt=Z[2]);const At=S[z];cn.getBarycoord(At.a,On.a),cn.getBarycoord(At.b,On.b),cn.getBarycoord(At.c,On.c);for(let yt=0,_t=_n.length;yt<_t;yt++){const H=_n[yt],rt=ci[yt]===_r,ut=h!==rt;H.appendInterpolatedAttributeData(f,On.a,st,ut),ut?(H.appendInterpolatedAttributeData(f,On.c,dt,ut),H.appendInterpolatedAttributeData(f,On.b,et,ut)):(H.appendInterpolatedAttributeData(f,On.b,et,ut),H.appendInterpolatedAttributeData(f,On.c,dt,ut))}}}}}return T.length}function lc(i,t,e,n,r,s,o=0){$e.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?Ge.copy($e):Ge.identity();const a=Ge.determinant()<0;Gn.getNormalMatrix(Ge).multiplyScalar(a?-1:1);const h=t.geometry.boundsTree,u=i.geometry.groupIndices,d=i.geometry.index,g=i.geometry.attributes.position,m=[],y=i.geometry.halfEdges,T=new Set(e.ids),v=ua(i.geometry);for(let _=0;_<v&&T.size!==v;_++){if(T.has(_))continue;T.add(_),m.push(_);const E=3*_;let f=E+0,l=E+1,M=E+2;d&&(f=d.getX(f),l=d.getX(l),M=d.getX(M)),un.a.fromBufferAttribute(g,f),un.b.fromBufferAttribute(g,l),un.c.fromBufferAttribute(g,M),r&&(un.a.applyMatrix4($e),un.b.applyMatrix4($e),un.c.applyMatrix4($e));const c=qc(un,h,r?null:$e);ci.length=0,_n.length=0;for(let C=0,w=n.length;C<w;C++){const S=Yc(n[C],c,r);S!==fa&&(ci.push(S),_n.push(s[C]))}for(;m.length>0;){const C=m.pop();for(let w=0;w<3;w++){const S=y.getSiblingTriangleIndex(C,w);S!==-1&&!T.has(S)&&(m.push(S),T.add(S))}if(_n.length!==0){const w=3*C;let S=w+0,x=w+1,A=w+2;d&&(S=d.getX(S),x=d.getX(x),A=d.getX(A));const b=o===-1?0:u[C]+o;if(un.a.fromBufferAttribute(g,S),un.b.fromBufferAttribute(g,x),un.c.fromBufferAttribute(g,A),!Vn(un))for(let R=0,F=_n.length;R<F;R++){const B=_n[R],z=ci[R]===_r!==a;B.appendIndexFromGeometry(i.geometry,Ge,Gn,b,S,z),z?(B.appendIndexFromGeometry(i.geometry,Ge,Gn,b,A,z),B.appendIndexFromGeometry(i.geometry,Ge,Gn,b,x,z)):(B.appendIndexFromGeometry(i.geometry,Ge,Gn,b,x,z),B.appendIndexFromGeometry(i.geometry,Ge,Gn,b,A,z))}}}}}function D_(i){return i=~~i,i+4-i%4}class I_{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=zc()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(D_(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const ze=new L,Do=new L,Io=new L,Lo=new L,ps=new re,L_=new re,U_=new re,F_=new re;function N_(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function cc(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class Uo extends I_{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class B_{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],h=r[a],u=h.array.constructor;n[a]||(n[a]=new Uo(u)),n[a].setType(u),n[a].itemSize=h.itemSize,n[a].normalized=h.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:h}=this,{attributes:u}=t;for(const d in a){const p=u[d];if(!p)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let g,m,y;if(d==="position"?(g=Do.fromBufferAttribute(p,r).applyMatrix4(e),m=Io.fromBufferAttribute(p,s).applyMatrix4(e),y=Lo.fromBufferAttribute(p,o).applyMatrix4(e)):d==="normal"?(g=Do.fromBufferAttribute(p,r).applyNormalMatrix(n),m=Io.fromBufferAttribute(p,s).applyNormalMatrix(n),y=Lo.fromBufferAttribute(p,o).applyNormalMatrix(n)):d==="tangent"?(g=Do.fromBufferAttribute(p,r).transformDirection(e),m=Io.fromBufferAttribute(p,s).transformDirection(e),y=Lo.fromBufferAttribute(p,o).transformDirection(e)):(g=L_.fromBufferAttribute(p,r),m=U_.fromBufferAttribute(p,s),y=F_.fromBufferAttribute(p,o)),!h[d])h[d]=[g.clone(),m.clone(),y.clone()];else{const T=h[d];T[0].copy(g),T[1].copy(m),T[2].copy(y)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:h,invertedIndexMap:u}=this;for(;s.length<=t;)s.push(new Uo(Uint32Array));const d=r?u:h,p=s[t];if(n!==null&&d.has(n))p.push(d.get(n));else{d.set(n,o.position.count),p.push(o.position.count);for(const g in a){const m=o[g],y=g==="normal"||g==="tangent",T=r&&y,v=m.itemSize,[_,E,f]=a[g];N_(_,E,f,e,ps,y,T),cc(ps,v,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:h,forwardIndexMap:u,invertedIndexMap:d}=this;for(;a.length<=r;)a.push(new Uo(Uint32Array));const p=o?d:u,g=a[r];if(s!==null&&p.has(s))g.push(p.get(s));else{p.set(s,h.position.count),g.push(h.position.count);const{attributes:m}=t;for(const y in h){const T=h[y],v=m[y];if(!v)throw new Error(`CSG Operations: Attribute ${y} not available on geometry.`);const _=v.itemSize;y==="position"?(ze.fromBufferAttribute(v,s).applyMatrix4(e),T.push(ze.x,ze.y,ze.z)):y==="normal"?(ze.fromBufferAttribute(v,s).applyNormalMatrix(n),o&&ze.multiplyScalar(-1),T.push(ze.x,ze.y,ze.z)):y==="tangent"?(ze.fromBufferAttribute(v,s).transformDirection(e),o&&ze.multiplyScalar(-1),T.push(ze.x,ze.y,ze.z)):(ps.fromBufferAttribute(v,s),cc(ps,_,T))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const d in s){const p=s[d],{type:g,itemSize:m,normalized:y,length:T,count:v}=p,_=p.array.buffer;let E=o[d];(!E||E.count<v||E.array.type!==g)&&(E=new He(new g(T),m,y),t.setAttribute(d,E),n=!0),E.array.set(new g(_,0,T),0),E.needsUpdate=!0}const h=r.reduce((d,p)=>p.count+d,0);(!t.index||a.count<h||a.array.type!==Uint32Array)&&(t.setIndex(new He(new Uint32Array(h),1)),n=!0),t.clearGroups();let u=0;for(let d=0,p=Math.min(e.length,r.length);d<p;d++){const{index:g,materialIndex:m}=e[d],{count:y}=r[g],T=r[g].array.buffer;y!==0&&(t.index.array.set(new Uint32Array(T,0,y),u),t.addGroup(u,y,m),u+=y)}t.setDrawRange(0,u),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function O_(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function z_(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function G_(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function V_(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function uc(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class H_{get useCDTClipping(){return this.triangleSplitter instanceof Vl}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Vl:new ql)}constructor(){this.triangleSplitter=new ql,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new C_}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new bs){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:h,useGroups:u,consolidateGroups:d,removeUnusedMaterials:p,debug:g}=this;for(;a.length<r.length;)a.push(new B_);r.forEach((f,l)=>{a[l].initFromGeometry(t.geometry,h),O_(f.geometry,h)}),g.init(),P_(t,e,n,o,a,{useGroups:u}),g.complete();const m=this.getGroupRanges(t.geometry),y=uc(m,t.material),T=this.getGroupRanges(e.geometry),v=uc(T,e.material);T.forEach(f=>f.materialIndex+=y.length);const _=[...y,...v];let E=[...m,...T].map((f,l)=>({...f,index:l}));return u?u&&d&&(E=z_(E,_),E.sort((f,l)=>f.materialIndex-l.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((f,l)=>{const M=f.geometry;a[l].buildGeometry(M,E),t.matrixWorld.decompose(f.position,f.quaternion,f.scale),f.updateMatrix(),f.matrixWorld.copy(t.matrixWorld),u?(f.material=_,d&&V_(M.groups),p&&(f.material=G_(M.groups,_))):f.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new bs){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let h=0,u=a.length;h<u;h++){const d=a[h];d.isOperationGroup?n(d,o):o(d)}},r=s=>{const o=s.children;let a=!1;for(let u=0,d=o.length;u<d;u++){const p=o[u];a=r(p)||a}const h=s.isDirty();if(h&&s.markUpdated(),a&&!s.isOperationGroup){let u;return n(s,d=>{u?u=this.evaluate(u,d,d.operation):u=this.evaluate(s,d,d.operation)}),s._cachedGeometry=u.geometry,s._cachedMaterials=u.material,!0}else return a||h};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}function k_(i){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let e;try{e=new Ug({canvas:i,antialias:!0,alpha:!0})}catch{return}e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.toneMapping=4,e.toneMappingExposure=.52,e.outputColorSpace=Ve,e.setClearColor(0,0);const n=new za,r=new nn(30,1,.1,100);r.position.set(0,0,12);const s=new No(e);function o(){const q=new za;q.background=new Yt(328970),q.add(new we(new hi(40,40,40),new oi({color:723730,side:1})));const nt=(tt,ot,vt,it)=>{const Q=new we(new Yi(tt,ot),new oi({color:new Yt(it,it,it),side:2}));Q.position.set(vt[0],vt[1],vt[2]),Q.lookAt(0,0,0),q.add(Q)};nt(16,10,[0,8,11],5),nt(7,15,[-12,3,3],3.2),nt(7,15,[12,1,4],2.2),nt(12,6,[0,-9,7],.6),nt(10,10,[0,3,-12],1.6);const N=s.fromScene(q,.03).texture;return q.traverse(tt=>{var ot,vt,it,Q;(vt=(ot=tt.geometry)==null?void 0:ot.dispose)==null||vt.call(ot),(Q=(it=tt.material)==null?void 0:it.dispose)==null||Q.call(it)}),N}n.environment=o();const a=new Wu({color:16777215,metalness:1,roughness:.06,envMapIntensity:.75}),h=1.7,u=.36,d=h/2,p={1:[[0,0]],2:[[-u,u],[u,-u]],3:[[-u,u],[0,0],[u,-u]],4:[[-u,u],[u,u],[-u,-u],[u,-u]],5:[[-u,u],[u,u],[0,0],[-u,-u],[u,-u]],6:[[-u,u],[-u,0],[-u,-u],[u,u],[u,0],[u,-u]]},g=[["z",1,1],["z",-1,6],["x",1,2],["x",-1,5],["y",1,3],["y",-1,4]],m=new H_;m.useGroups=!1;let y=new bs(new ia(h,h,h,6,.18));y.material=a,y.updateMatrixWorld();const T=.12,v=.1,E=v+.12,f=.02,l=[new It(0,0),new It(T-f,0),new It(T,f),new It(T,v-f),new It(T+f,v+f),new It(T+f,E),new It(0,E)],M=new Qo(l,44),c=new L(0,1,0);for(const[q,nt,N]of g){const tt=new L(q==="x"?nt:0,q==="y"?nt:0,q==="z"?nt:0),ot=new Ue().setFromUnitVectors(c,tt);for(const[vt,it]of p[N]){const Q=new bs(M);Q.quaternion.copy(ot);const wt=new L;q==="z"?wt.set(vt,it,nt*d):q==="x"?wt.set(nt*d,vt,it):wt.set(vt,nt*d,it),wt.addScaledVector(tt,-v),Q.position.copy(wt),Q.updateMatrixWorld(),y=m.evaluate(y,Q,kc)}}y.material=a,y.geometry.computeVertexNormals();const C=new ai;C.add(y);const w=new ea(2.28,.08,24,240),S=8,x=new ai,A=[];for(let q=0;q<S;q++)A.push(new we(w,a)),x.add(A[q]);const b=new ai;b.add(C),b.add(x),b.position.y=-.45,n.add(b);const R=new L(0,1,0),F=new Ue().setFromAxisAngle(new L(0,0,1),Math.PI/2),B={};for(const[q,nt,N,tt]of[[1,0,0,0],[6,Math.PI,0,0],[2,0,-Math.PI/2,0],[5,0,Math.PI/2,0],[3,Math.PI/2,0,0],[4,-Math.PI/2,0,0]])B[q]=new Ue().setFromEuler(new sn(nt,N,tt));const O=.9,W=.5,z=2.35,Z=1.1,st=1.5,et=.42,dt=4,At=.27,yt=6,_t={start:-100,next:6},H={mode:"auto",start:0,holdStart:0,resumeStart:0,ringFrom:new Ue,dieFrom:new Ue,dieTarget:new Ue,dieAxis:new L,ringResume:new Ue,dieResume:new Ue},$=new Ue,rt=new Ue,ut=new sn,at=new L,Mt=q=>{const nt=Math.min(1,Math.max(0,q));return nt*nt*nt*(nt*(nt*6-15)+10)},qt=(q,nt,N)=>Mt((N-q)/(nt-q));function U(q){H.ringFrom.copy(x.quaternion),H.dieFrom.copy(C.quaternion);const nt=1+Math.floor(Math.random()*6);H.dieTarget.copy(B[nt]),$.setFromAxisAngle(new L(0,0,1),Math.floor(Math.random()*4)*(Math.PI/2)),H.dieTarget.premultiply($),H.dieAxis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),H.start=q,H.mode="seq"}function Ut(q){H.ringResume.copy(x.quaternion),H.dieResume.copy(C.quaternion),H.resumeStart=q,H.mode="resume"}const xt=new $u,mt=new It;t||(i.style.pointerEvents="auto",i.addEventListener("pointerdown",q=>{var N;const nt=i.getBoundingClientRect();mt.x=(q.clientX-nt.left)/nt.width*2-1,mt.y=-((q.clientY-nt.top)/nt.height)*2+1,xt.setFromCamera(mt,r),xt.intersectObject(y,!1).length?((N=navigator.vibrate)==null||N.call(navigator,10),U(Nt.getElapsedTime())):H.mode!=="auto"&&H.mode!=="resume"&&Ut(Nt.getElapsedTime())}));const ct=new zg(n,r),Kt=new $i(new It(1,1),.28,.32,.9),ht=new pl(e);ht.renderToScreen=!1,ht.addPass(ct),ht.addPass(Kt);const bt=new Dc(new Re({uniforms:{baseTexture:{value:null},bloomTexture:{value:ht.renderTarget2.texture}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform sampler2D baseTexture;
        uniform sampler2D bloomTexture;
        varying vec2 vUv;
        void main() {
          vec4 base = texture2D(baseTexture, vUv);
          // Y2K chromatic split: sample the glow's R/B channels at a slight
          // radial offset so the bloom fringes into red/cyan toward the edges.
          vec2 dir = vUv - 0.5;
          float ca = 0.008;
          vec3 glow = vec3(
            texture2D(bloomTexture, vUv + dir * ca).r,
            texture2D(bloomTexture, vUv).g,
            texture2D(bloomTexture, vUv - dir * ca).b
          );
          // UnrealBloomPass writes alpha 1 everywhere, so drive the halo alpha
          // from the glow's brightness instead — transparent where there's no
          // glow, so the page shows through and the halo spills onto it.
          float halo = clamp(dot(glow, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0);
          vec4 color = vec4(base.rgb + glow, clamp(base.a + halo, 0.0, 1.0));
          // Fade the whole frame out near the canvas edges so the glow never
          // reveals a hard rectangular container edge (premultiplied: scale
          // rgb + alpha together). Horizontal has room; vertical is tighter.
          float mx = min(vUv.x, 1.0 - vUv.x);
          float my = min(vUv.y, 1.0 - vUv.y);
          float edge = smoothstep(0.0, 0.14, mx) * smoothstep(0.0, 0.06, my);
          gl_FragColor = color * edge;
        }`}),"baseTexture");bt.needsSwap=!0;const Ot=new pl(e);Ot.addPass(ct),Ot.addPass(bt),Ot.addPass(new Vg);function zt(){const q=i.clientWidth,nt=i.clientHeight;!q||!nt||(e.setSize(q,nt,!1),ht.setSize(q,nt),Ot.setSize(q,nt),Kt.setSize(q,nt),r.aspect=q/nt,r.updateProjectionMatrix())}zt(),window.addEventListener("resize",zt);const I=1;let P=null;const G=window.matchMedia("(pointer: coarse)").matches,Y=window.innerWidth<900||window.devicePixelRatio>2?160:256;async function J(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)try{const q=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),nt=document.createElement("video");nt.setAttribute("playsinline",""),nt.muted=!0,nt.srcObject=q,await nt.play();const N=new Hu(nt);N.colorSpace=Ve,N.wrapS=N.wrapT=1e3,N.repeat.set(4,3);const tt=new we(new ta(20,48,48),new oi({map:N,side:1}));tt.layers.set(I),n.add(tt);const ot=(it,Q,wt,Vt)=>{const Qt=new we(new Yi(it,Q),new oi({color:new Yt(Vt,Vt,Vt),side:2}));Qt.position.set(wt[0],wt[1],wt[2]),Qt.lookAt(0,-.45,0),Qt.layers.set(I),n.add(Qt)};ot(10,6,[0,6,9],5),ot(5,11,[-10,2,3],3),ot(5,11,[10,1,4],2.2),ot(8,8,[0,2,-11],1.4);const vt=new Mc(Y,{type:1016});P=new vc(.1,100,vt),P.layers.set(I),a.envMap=vt.texture,a.envMapIntensity=1,a.needsUpdate=!0}catch{}}G||J();let X=0,gt=0;function pt(){const q=window.DeviceOrientationEvent;if(!q||!n.environmentRotation)return;const nt=tt=>{const ot=tt.gamma||0,vt=tt.beta||0;gt=Sa.clamp(ot/90,-1,1)*.7,X=Sa.clamp((vt-50)/80,-1,1)*.4},N=()=>window.addEventListener("deviceorientation",nt,!0);if(typeof q.requestPermission=="function"){const tt=()=>{i.removeEventListener("pointerdown",tt),q.requestPermission().then(ot=>ot==="granted"&&N()).catch(()=>{})};i.addEventListener("pointerdown",tt)}else N()}G&&pt();function Ct(){P&&P.update(e,n),ht.render(),Ot.render()}function Pt(q,nt){nt.set(q*-.5+Math.sin(q*.83)*.4,q*-.4+Math.sin(q*.67)*.4,q*-.6+Math.sin(q*1.09)*.3)}function lt(q){const nt=(S-1)/2;for(let N=0;N<S;N++)A[N].rotation.x=(N-nt)*q,A[N].position.z=(N-nt)*.004}if(t){C.rotation.set(.5,.7,.1),x.rotation.set(.6,.3,.2),lt(0),Ct(),navigator.mediaDevices&&(function q(){requestAnimationFrame(q),Ct()})();return}let Tt=!0;new IntersectionObserver(([q])=>Tt=q.isIntersecting).observe(i);const Nt=new Ac;function Lt(){if(requestAnimationFrame(Lt),!Tt)return;const q=Nt.getElapsedTime();if(H.mode==="seq"){const nt=q-H.start;if(nt<O+W){const tt=2*Math.PI*Mt(Math.min(1,nt/O));rt.setFromAxisAngle(R,tt).multiply(F),x.quaternion.copy(H.ringFrom).slerp(rt,qt(0,.3*O,nt));const ot=nt<O?et*Mt(nt/O):et*(1-Mt((nt-O)/W));lt(ot)}else x.quaternion.copy(F),lt(0);const N=Mt(Math.min(1,nt/z));C.quaternion.copy(H.dieFrom).slerp(H.dieTarget,N),$.setFromAxisAngle(H.dieAxis,dt*Math.PI*2*(1-N)),C.quaternion.multiply($),nt>=z&&(C.quaternion.copy(H.dieTarget),H.mode="hold",H.holdStart=q)}else if(H.mode==="hold")x.quaternion.copy(F),lt(0),C.quaternion.copy(H.dieTarget),q-H.holdStart>=Z&&Ut(q);else if(H.mode==="resume"){const nt=Mt((q-H.resumeStart)/st);ut.set(q*.7,q*.9,q*.35),C.quaternion.copy(H.dieResume).slerp(rt.setFromEuler(ut),nt),Pt(q,ut),x.quaternion.copy(H.ringResume).slerp(rt.setFromEuler(ut),nt),lt(0),nt>=1&&(H.mode="auto")}else{C.rotation.x=q*.7,C.rotation.y=q*.9,C.rotation.z=q*.35,Pt(q,x.rotation);let nt=0;const N=q-_t.start;if(N<yt){const tt=qt(0,1.2,N)*qt(0,1.2,yt-N);at.set(0,0,1).applyQuaternion(x.quaternion);const ot=qt(.35,.85,Math.hypot(at.y,at.z));nt=At*tt*ot}else q>=_t.next&&(_t.start=q,_t.next=q+yt+12+(Math.sin(q*2.3)*.5+.5)*8);lt(nt)}n.environmentRotation&&(n.environmentRotation.y+=(gt-n.environmentRotation.y)*.08,n.environmentRotation.x+=(X-n.environmentRotation.x)*.08),Ct()}Lt()}export{k_ as initMotif};
