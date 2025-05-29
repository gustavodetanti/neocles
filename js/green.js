(()=>{var $o="127";var Kl=0,Ko=1,eu=2;var ea=1,tu=2,di=3,ir=0,Ke=1,An=2,ta=1;var pi=0,mi=1,rr=2,na=3,ia=4,nu=5,Ln=100,iu=101,ru=102,ra=103,sa=104,su=200,ou=201,au=202,cu=203,oa=204,aa=205,lu=206,uu=207,hu=208,fu=209,du=210,pu=0,mu=1,gu=2,ls=3,xu=4,yu=5,vu=6,_u=7,sr=0,wu=1,bu=2,gi=0,Mu=1,us=2,Su=3,Eu=4,Tu=5,ca=300,hs=301,fs=302,la=303,ua=304,ds=306,ps=307,ms=1e3,yt=1001,gs=1002,ht=1003,ha=1004;var fa=1005;var We=1006,Au=1007;var or=1008;var xs=1009,Lu=1010,Ru=1011,ar=1012,Cu=1013,cr=1014,Yt=1015,lr=1016,Pu=1017,Du=1018,Iu=1019,xi=1020,Fu=1021,gn=1022,ft=1023,Bu=1024,Nu=1025;var Rn=1026,yi=1027,zu=1028,Ou=1029,Uu=1030,Hu=1031,Gu=1032,ku=1033,da=33776,pa=33777,ma=33778,ga=33779,xa=35840,ya=35841,va=35842,_a=35843,Vu=36196,wa=37492,ba=37496,Wu=37808,qu=37809,Xu=37810,ju=37811,Yu=37812,Zu=37813,Ju=37814,Qu=37815,$u=37816,Ku=37817,eh=37818,th=37819,nh=37820,ih=37821,rh=36492,sh=37840,oh=37841,ah=37842,ch=37843,lh=37844,uh=37845,hh=37846,fh=37847,dh=37848,ph=37849,mh=37850,gh=37851,xh=37852,yh=37853,vh=2200,_h=2201,wh=2202,ur=2300,hr=2301,ys=2302,Cn=2400,Pn=2401,fr=2402,vs=2500,Ma=2501,bh=0;var Dn=3e3,vi=3001,Sa=3007,Ea=3002,Mh=3003,Ta=3004,Aa=3005,La=3006,Sh=3200,Eh=3201,In=0,Th=1;var _s=7680;var Ah=519,_i=35044,wi=35048;var Ra="300 es";function Zt(){}Object.assign(Zt.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});let t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;let t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;let i=this._listeners[n];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;let t=this._listeners[n.type];if(t!==void 0){n.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n);n.target=null}}});var rt=[];for(let n=0;n<256;n++)rt[n]=(n<16?"0":"")+n.toString(16);var dr=1234567,Ee={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:function(n,e,t){return(1-t)*n+t*e},damp:function(n,e,t,i){return Ee.lerp(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Ee.euclideanModulo(n,e*2)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(dr=n%2147483647),dr=dr*16807%2147483647,(dr-1)/2147483646},degToRad:function(n){return n*Ee.DEG2RAD},radToDeg:function(n){return n*Ee.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)==0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};V.prototype.isVector2=!0;var et=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],x=r[0],y=r[3],g=r[6],p=r[1],E=r[4],M=r[7],T=r[2],v=r[5],C=r[8];return s[0]=o*x+a*p+c*T,s[3]=o*y+a*E+c*v,s[6]=o*g+a*M+c*C,s[1]=l*x+h*p+u*T,s[4]=l*y+h*E+u*v,s[7]=l*g+h*M+u*C,s[2]=f*x+d*p+m*T,s[5]=f*y+d*E+m*v,s[8]=f*g+d*M+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,m=t*u+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(r*l-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],h=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*h,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*h,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};et.prototype.isMatrix3=!0;var Fn,Bn={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement=="undefined")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{Fn===void 0&&(Fn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Fn.width=n.width,Fn.height=n.height;let t=Fn.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=Fn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}},Lh=0,tt=class extends Zt{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,i=yt,r=yt,s=We,o=or,a=ft,c=xs,l=1,h=Dn){super();Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Ee.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=Ee.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ws(r[o].image)):s.push(ws(r[o]))}else s=ws(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ca)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case yt:e.x=e.x<0?0:1;break;case gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case yt:e.y=e.y<0?0:1;break;case gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};tt.DEFAULT_IMAGE=void 0;tt.DEFAULT_MAPPING=ca;tt.prototype.isTexture=!0;function ws(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Bn.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oe=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],y=c[6],g=c[10];if(Math.abs(h-f)<o&&Math.abs(u-x)<o&&Math.abs(m-y)<o){if(Math.abs(h+f)<a&&Math.abs(u+x)<a&&Math.abs(m+y)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(d+1)/2,T=(g+1)/2,v=(h+f)/4,C=(u+x)/4,B=(m+y)/4;return E>M&&E>T?E<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=v/i,s=C/i):M>T?M<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=v/r,s=B/r):T<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=B/s),this.set(i,r,s,t),this}let p=Math.sqrt((y-m)*(y-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(p)<.001&&(p=1),this.x=(y-m)/p,this.y=(u-x)/p,this.z=(f-h)/p,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Oe.prototype.isVector4=!0;var gt=class extends Zt{constructor(e,t,i){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),i=i||{},this.texture=new tt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:We,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.prototype.isWebGLRenderTarget=!0;var Ca=class extends gt{constructor(e,t,i){super(e,t,i);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Ca.prototype.isWebGLMultisampleRenderTarget=!0;var st=class{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==m){let y=1-a,g=c*f+l*d+h*m+u*x,p=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){let T=Math.sqrt(E),v=Math.atan2(T,g*p);y=Math.sin(y*v)/T,a=Math.sin(a*v)/T}let M=a*p;if(c=c*y+f*M,l=l*y+d*M,h=h*y+m*M,u=u*y+x*M,y===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),f=c(i/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};st.prototype.isQuaternion=!0;var _=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pa.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,h=c*i+a*t-s*r,u=c*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=l*c+f*-s+h*-a-u*-o,this.y=h*c+f*-o+u*-s-l*-a,this.z=u*c+f*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ee.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};_.prototype.isVector3=!0;var bs=new _,Pa=new st,vt=class{constructor(e=new _(Infinity,Infinity,Infinity),t=new _(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],f=e[c+2];h<t&&(t=h),u<i&&(i=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<t&&(t=h),u<i&&(i=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new _),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new _),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox),Ms.applyMatrix4(e.matrixWorld),this.union(Ms));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new _),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),pr.subVectors(this.max,Mi),Nn.subVectors(e.a,Mi),zn.subVectors(e.b,Mi),On.subVectors(e.c,Mi),Jt.subVectors(zn,Nn),Qt.subVectors(On,zn),xn.subVectors(Nn,On);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-xn.z,xn.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,xn.z,0,-xn.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-xn.y,xn.x,0];return!Ss(t,Nn,zn,On,pr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,Nn,zn,On,pr))?!1:(mr.crossVectors(Jt,Qt),t=[mr.x,mr.y,mr.z],Ss(t,Nn,zn,On,pr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new _),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};vt.prototype.isBox3=!0;var Gt=[new _,new _,new _,new _,new _,new _,new _,new _],bi=new _,Ms=new vt,Nn=new _,zn=new _,On=new _,Jt=new _,Qt=new _,xn=new _,Mi=new _,pr=new _,mr=new _,yn=new _;function Ss(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yn.fromArray(n,s);let a=r.x*Math.abs(yn.x)+r.y*Math.abs(yn.y)+r.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),h=i.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Rh=new vt,Da=new _,Es=new _,Ts=new _,vn=class{constructor(e=new _,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Rh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new _),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new vt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ts.subVectors(e,this.center);let t=Ts.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ts.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return Es.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Da.copy(e.center).add(Es)),this.expandByPoint(Da.copy(e.center).sub(Es)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},kt=new _,As=new _,gr=new _,$t=new _,Ls=new _,xr=new _,Rs=new _,Kt=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new _),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new _),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.direction).multiplyScalar(t).add(this.origin),kt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){As.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(As);let s=e.distanceTo(t)*.5,o=-this.direction.dot(gr),a=$t.dot(this.direction),c=-$t.dot(gr),l=$t.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=s*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(gr).multiplyScalar(f).add(As),d}intersectSphere(e,t){kt.subVectors(e.center,this.origin);let i=kt.dot(this.direction),r=kt.dot(kt)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,i,r,s){Ls.subVectors(t,e),xr.subVectors(i,e),Rs.crossVectors(Ls,xr);let o=this.direction.dot(Rs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$t.subVectors(this.origin,e);let c=a*this.direction.dot(xr.crossVectors($t,xr));if(c<0)return null;let l=a*this.direction.dot(Ls.cross($t));if(l<0||c+l>o)return null;let h=-a*$t.dot(Rs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,h,u,f,d,m,x,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Un.setFromMatrixColumn(e,0).length(),s=1/Un.setFromMatrixColumn(e,1).length(),o=1/Un.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ch,e,Ph)}lookAt(e,t,i){let r=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),en.crossVectors(i,_t),en.lengthSq()===0&&(Math.abs(i.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),en.crossVectors(i,_t)),en.normalize(),yr.crossVectors(_t,en),r[0]=en.x,r[4]=yr.x,r[8]=_t.x,r[1]=en.y,r[5]=yr.y,r[9]=_t.y,r[2]=en.z,r[6]=yr.z,r[10]=_t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],x=i[6],y=i[10],g=i[14],p=i[3],E=i[7],M=i[11],T=i[15],v=r[0],C=r[4],B=r[8],D=r[12],O=r[1],R=r[5],U=r[9],P=r[13],L=r[2],F=r[6],I=r[10],X=r[14],ee=r[3],Y=r[7],re=r[11],se=r[15];return s[0]=o*v+a*O+c*L+l*ee,s[4]=o*C+a*R+c*F+l*Y,s[8]=o*B+a*U+c*I+l*re,s[12]=o*D+a*P+c*X+l*se,s[1]=h*v+u*O+f*L+d*ee,s[5]=h*C+u*R+f*F+d*Y,s[9]=h*B+u*U+f*I+d*re,s[13]=h*D+u*P+f*X+d*se,s[2]=m*v+x*O+y*L+g*ee,s[6]=m*C+x*R+y*F+g*Y,s[10]=m*B+x*U+y*I+g*re,s[14]=m*D+x*P+y*X+g*se,s[3]=p*v+E*O+M*L+T*ee,s[7]=p*C+E*R+M*F+T*Y,s[11]=p*B+E*U+M*I+T*re,s[15]=p*D+E*P+M*X+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],y=e[11],g=e[15];return m*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*d-i*c*d)+x*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+y*(+t*l*u-t*a*d-s*o*u+i*o*d+s*a*h-i*l*h)+g*(-r*a*h-t*c*u+t*a*f+r*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],y=e[14],g=e[15],p=u*y*l-x*f*l+x*c*d-a*y*d-u*c*g+a*f*g,E=m*f*l-h*y*l-m*c*d+o*y*d+h*c*g-o*f*g,M=h*x*l-m*u*l+m*a*d-o*x*d-h*a*g+o*u*g,T=m*u*c-h*x*c-m*a*f+o*x*f+h*a*y-o*u*y,v=t*p+i*E+r*M+s*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/v;return e[0]=p*C,e[1]=(x*f*s-u*y*s-x*r*d+i*y*d+u*r*g-i*f*g)*C,e[2]=(a*y*s-x*c*s+x*r*l-i*y*l-a*r*g+i*c*g)*C,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*d-i*c*d)*C,e[4]=E*C,e[5]=(h*y*s-m*f*s+m*r*d-t*y*d-h*r*g+t*f*g)*C,e[6]=(m*c*s-o*y*s-m*r*l+t*y*l+o*r*g-t*c*g)*C,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*d+t*c*d)*C,e[8]=M*C,e[9]=(m*u*s-h*x*s-m*i*d+t*x*d+h*i*g-t*u*g)*C,e[10]=(o*x*s-m*a*s+m*i*l-t*x*l-o*i*g+t*a*g)*C,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*d-t*a*d)*C,e[12]=T*C,e[13]=(h*x*r-m*u*r+m*i*f-t*x*f-h*i*y+t*u*y)*C,e[14]=(m*a*r-o*x*r-m*i*c+t*x*c+o*i*y-t*a*y)*C,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,m=s*u,x=o*h,y=o*u,g=a*u,p=c*l,E=c*h,M=c*u,T=i.x,v=i.y,C=i.z;return r[0]=(1-(x+g))*T,r[1]=(d+M)*T,r[2]=(m-E)*T,r[3]=0,r[4]=(d-M)*v,r[5]=(1-(f+g))*v,r[6]=(y+p)*v,r[7]=0,r[8]=(m+E)*C,r[9]=(y-p)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Un.set(r[0],r[1],r[2]).length(),o=Un.set(r[4],r[5],r[6]).length(),a=Un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],At.copy(this);let l=1/s,h=1/o,u=1/a;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=h,At.elements[5]*=h,At.elements[6]*=h,At.elements[8]*=u,At.elements[9]*=u,At.elements[10]*=u,t.setFromRotationMatrix(At),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,c=1/(t-e),l=1/(i-r),h=1/(o-s),u=(t+e)*c,f=(i+r)*l,d=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};fe.prototype.isMatrix4=!0;var Un=new _,At=new fe,Ch=new _(0,0,0),Ph=new _(1,1,1),en=new _,yr=new _,_t=new _,Ia=new fe,Fa=new st,_n=class{constructor(e=0,t=0,i=0,r=_n.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){let r=Ee.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ia,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new _(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};_n.prototype.isEuler=!0;_n.DefaultOrder="XYZ";_n.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Cs=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Dh=0,Ba=new _,Hn=new st,Vt=new fe,vr=new _,Si=new _,Ih=new _,Fh=new st,Na=new _(1,0,0),za=new _(0,1,0),Oa=new _(0,0,1),Bh={type:"added"},Ua={type:"removed"};function we(){Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ee.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DefaultUp.clone();let n=new _,e=new _n,t=new st,i=new _(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new et}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=we.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}we.DefaultUp=new _(0,1,0);we.DefaultMatrixAutoUpdate=!0;we.prototype=Object.assign(Object.create(Zt.prototype),{constructor:we,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return Hn.setFromAxisAngle(n,e),this.quaternion.multiply(Hn),this},rotateOnWorldAxis:function(n,e){return Hn.setFromAxisAngle(n,e),this.quaternion.premultiply(Hn),this},rotateX:function(n){return this.rotateOnAxis(Na,n)},rotateY:function(n){return this.rotateOnAxis(za,n)},rotateZ:function(n){return this.rotateOnAxis(Oa,n)},translateOnAxis:function(n,e){return Ba.copy(n).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(Na,n)},translateY:function(n){return this.translateOnAxis(za,n)},translateZ:function(n){return this.translateOnAxis(Oa,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(Vt.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?vr.copy(n):vr.set(n,e,t);let i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(Si,vr,this.up):Vt.lookAt(vr,Si,this.up),this.quaternion.setFromRotationMatrix(Vt),i&&(Vt.extractRotation(i.matrixWorld),Hn.setFromRotationMatrix(Vt),this.quaternion.premultiply(Hn.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(Ua)),this},clear:function(){for(let n=0;n<this.children.length;n++){let e=this.children[n];e.parent=null,e.dispatchEvent(Ua)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Vt.multiply(n.parent.matrixWorld)),n.applyMatrix4(Vt),this.add(n),n.updateWorldMatrix(!1,!0),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){let s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new _),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new st),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,n,Ih),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new _),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Fh,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new _),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){let e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){let t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){let e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let h=a[c];r(n.shapes,h)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){let o=s(n.geometries),a=s(n.materials),c=s(n.textures),l=s(n.images),h=s(n.shapes),u=s(n.skeletons),f=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),h.length>0&&(t.shapes=h),u.length>0&&(t.skeletons=u),f.length>0&&(t.animations=f)}return t.object=i,t;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){let i=n.children[t];this.add(i.clone())}return this}});var Ps=new _,Nh=new _,zh=new et,Lt=class{constructor(e=new _(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ps.subVectors(i,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new _),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new _);let i=e.delta(Ps),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new _),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zh.getNormalMatrix(e),r=this.coplanarPoint(Ps).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Lt.prototype.isPlane=!0;var Rt=new _,Wt=new _,Ds=new _,qt=new _,Gn=new _,kn=new _,Ha=new _,Is=new _,Fs=new _,Bs=new _,qe=class{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new _),r.subVectors(i,t),Rt.subVectors(e,t),r.cross(Rt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rt.subVectors(r,t),Wt.subVectors(i,t),Ds.subVectors(e,t);let o=Rt.dot(Rt),a=Rt.dot(Wt),c=Rt.dot(Ds),l=Wt.dot(Wt),h=Wt.dot(Ds),u=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new _),u===0)return s.set(-2,-1,-1);let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qt),qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,qt),c.set(0,0),c.addScaledVector(s,qt.x),c.addScaledVector(o,qt.y),c.addScaledVector(a,qt.z),c}static isFrontFacing(e,t,i,r){return Rt.subVectors(i,t),Wt.subVectors(e,t),Rt.cross(Wt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Rt.cross(Wt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new _),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Lt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return qe.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new _);let i=this.a,r=this.b,s=this.c,o,a;Gn.subVectors(r,i),kn.subVectors(s,i),Is.subVectors(e,i);let c=Gn.dot(Is),l=kn.dot(Is);if(c<=0&&l<=0)return t.copy(i);Fs.subVectors(e,r);let h=Gn.dot(Fs),u=kn.dot(Fs);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Gn,o);Bs.subVectors(e,s);let d=Gn.dot(Bs),m=kn.dot(Bs);if(m>=0&&d<=m)return t.copy(s);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(kn,a);let y=h*m-d*u;if(y<=0&&u-h>=0&&d-m>=0)return Ha.subVectors(s,r),a=(u-h)/(u-h+(d-m)),t.copy(r).addScaledVector(Ha,a);let g=1/(y+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Gn,o).addScaledVector(kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oh=0;function Xe(){Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ee.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=mi,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Xe.prototype=Object.assign(Object.create(Zt.prototype),{constructor:Xe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(let e in n){let t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===ta;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){let e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(t.blending=this.blending),this.side!==ir&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;let e=n.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Xe.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});var Ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Ns(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var oe=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Ee.euclideanModulo(e,1),t=Ee.clamp(t,0,1),i=Ee.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Ns(s,r,e+1/3),this.g=Ns(s,r,e),this.b=Ns(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Ga[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let h=s-o;switch(c=l<=.5?h/(s+o):h/(2-s-o),s){case t:a=(i-r)/h+(i<r?6:0);break;case i:a=(r-t)/h+2;break;case r:a=(t-i)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=i,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(_r);let i=Ee.lerp(Ct.h,_r.h,t),r=Ee.lerp(Ct.s,_r.s,t),s=Ee.lerp(Ct.l,_r.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};oe.NAMES=Ga;oe.prototype.isColor=!0;oe.prototype.r=1;oe.prototype.g=1;oe.prototype.b=1;var Xt=class extends Xe{constructor(e){super();this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};Xt.prototype.isMeshBasicMaterial=!0;var ke=new _,wr=new V;function Le(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=_i,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Le.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Le.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new oe),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new V),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new _),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Oe),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(n),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)ke.x=this.getX(e),ke.y=this.getY(e),ke.z=this.getZ(e),ke.applyMatrix4(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)ke.x=this.getX(e),ke.y=this.getY(e),ke.z=this.getZ(e),ke.applyNormalMatrix(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)ke.x=this.getX(e),ke.y=this.getY(e),ke.z=this.getZ(e),ke.transformDirection(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){let n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==_i&&(n.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(n.updateRange=this.updateRange),n}});function Us(n,e,t){Le.call(this,new Int8Array(n),e,t)}Us.prototype=Object.create(Le.prototype);Us.prototype.constructor=Us;function Hs(n,e,t){Le.call(this,new Uint8Array(n),e,t)}Hs.prototype=Object.create(Le.prototype);Hs.prototype.constructor=Hs;function Gs(n,e,t){Le.call(this,new Uint8ClampedArray(n),e,t)}Gs.prototype=Object.create(Le.prototype);Gs.prototype.constructor=Gs;function ks(n,e,t){Le.call(this,new Int16Array(n),e,t)}ks.prototype=Object.create(Le.prototype);ks.prototype.constructor=ks;function Ei(n,e,t){Le.call(this,new Uint16Array(n),e,t)}Ei.prototype=Object.create(Le.prototype);Ei.prototype.constructor=Ei;function Vs(n,e,t){Le.call(this,new Int32Array(n),e,t)}Vs.prototype=Object.create(Le.prototype);Vs.prototype.constructor=Vs;function Ti(n,e,t){Le.call(this,new Uint32Array(n),e,t)}Ti.prototype=Object.create(Le.prototype);Ti.prototype.constructor=Ti;function br(n,e,t){Le.call(this,new Uint16Array(n),e,t)}br.prototype=Object.create(Le.prototype);br.prototype.constructor=br;br.prototype.isFloat16BufferAttribute=!0;function Ae(n,e,t){Le.call(this,new Float32Array(n),e,t)}Ae.prototype=Object.create(Le.prototype);Ae.prototype.constructor=Ae;function Ws(n,e,t){Le.call(this,new Float64Array(n),e,t)}Ws.prototype=Object.create(Le.prototype);Ws.prototype.constructor=Ws;function ka(n){if(n.length===0)return-Infinity;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}var Uh=0,Nt=new fe,qs=new we,Vn=new _,wt=new vt,Ai=new vt,nt=new _;function Re(){Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ee.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}Re.prototype=Object.assign(Object.create(Zt.prototype),{constructor:Re,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(ka(n)>65535?Ti:Ei)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);let t=this.attributes.normal;if(t!==void 0){let r=new et().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return Nt.makeRotationX(n),this.applyMatrix4(Nt),this},rotateY:function(n){return Nt.makeRotationY(n),this.applyMatrix4(Nt),this},rotateZ:function(n){return Nt.makeRotationZ(n),this.applyMatrix4(Nt),this},translate:function(n,e,t){return Nt.makeTranslation(n,e,t),this.applyMatrix4(Nt),this},scale:function(n,e,t){return Nt.makeScale(n,e,t),this.applyMatrix4(Nt),this},lookAt:function(n){return qs.lookAt(n),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this},setFromPoints:function(n){let e=[];for(let t=0,i=n.length;t<i;t++){let r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new vt);let n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-Infinity,-Infinity,-Infinity),new _(Infinity,Infinity,Infinity));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){let r=e[t];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new vn);let n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,Infinity);return}if(n){let t=this.boundingSphere.center;if(wt.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(wt.min,Ai.min),wt.expandByPoint(nt),nt.addVectors(wt.max,Ai.max),wt.expandByPoint(nt)):(wt.expandByPoint(Ai.min),wt.expandByPoint(Ai.max))}wt.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)nt.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(nt));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)nt.fromBufferAttribute(o,c),a&&(Vn.fromBufferAttribute(n,c),nt.add(Vn)),i=Math.max(i,t.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){let n=this.index,e=this.attributes;if(n===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let t=n.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new Le(new Float32Array(4*o),4));let a=e.tangent.array,c=[],l=[];for(let D=0;D<o;D++)c[D]=new _,l[D]=new _;let h=new _,u=new _,f=new _,d=new V,m=new V,x=new V,y=new _,g=new _;function p(D,O,R){h.fromArray(i,D*3),u.fromArray(i,O*3),f.fromArray(i,R*3),d.fromArray(s,D*2),m.fromArray(s,O*2),x.fromArray(s,R*2),u.sub(h),f.sub(h),m.sub(d),x.sub(d);let U=1/(m.x*x.y-x.x*m.y);!isFinite(U)||(y.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(U),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(U),c[D].add(y),c[O].add(y),c[R].add(y),l[D].add(g),l[O].add(g),l[R].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.length}]);for(let D=0,O=E.length;D<O;++D){let R=E[D],U=R.start,P=R.count;for(let L=U,F=U+P;L<F;L+=3)p(t[L+0],t[L+1],t[L+2])}let M=new _,T=new _,v=new _,C=new _;function B(D){v.fromArray(r,D*3),C.copy(v);let O=c[D];M.copy(O),M.sub(v.multiplyScalar(v.dot(O))).normalize(),T.crossVectors(C,O);let U=T.dot(l[D])<0?-1:1;a[D*4]=M.x,a[D*4+1]=M.y,a[D*4+2]=M.z,a[D*4+3]=U}for(let D=0,O=E.length;D<O;++D){let R=E[D],U=R.start,P=R.count;for(let L=U,F=U+P;L<F;L+=3)B(t[L+0]),B(t[L+1]),B(t[L+2])}},computeVertexNormals:function(){let n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let u=0,f=t.count;u<f;u++)t.setXYZ(u,0,0,0);let i=new _,r=new _,s=new _,o=new _,a=new _,c=new _,l=new _,h=new _;if(n)for(let u=0,f=n.count;u<f;u+=3){let d=n.getX(u+0),m=n.getX(u+1),x=n.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),o.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),c.fromBufferAttribute(t,x),o.add(l),a.add(l),c.add(l),t.setXYZ(d,o.x,o.y,o.z),t.setXYZ(m,a.x,a.y,a.z),t.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),t.setXYZ(u+0,l.x,l.y,l.z),t.setXYZ(u+1,l.x,l.y,l.z),t.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let t=this.attributes;for(let i in t){if(n.attributes[i]===void 0)continue;let s=t[i].array,o=n.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let h=0,u=c;h<l;h++,u++)s[u]=a[h]}return this},normalizeNormals:function(){let n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)nt.fromBufferAttribute(n,e),nt.normalize(),n.setXYZ(e,nt.x,nt.y,nt.z)},toNonIndexed:function(){function n(o,a){let c=o.array,l=o.itemSize,h=o.normalized,u=new c.constructor(a.length*l),f=0,d=0;for(let m=0,x=a.length;m<x;m++){f=a[m]*l;for(let y=0;y<l;y++)u[d++]=c[f++]}return new Le(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Re,t=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=n(a,t);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,h=c.length;l<h;l++){let u=c[l],f=n(u,t);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(n[c]=a[c]);return n}n.data={attributes:{}};let e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let t=this.attributes;for(let a in t){let c=t[a];n.data.attributes[a]=c.toJSON(n.data)}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];l.push(f.toJSON(n.data))}l.length>0&&(i[a]=l,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new Re().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=n.name;let t=n.index;t!==null&&this.setIndex(t.clone(e));let i=n.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=n.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,f=h.length;u<f;u++)l.push(h[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=n.morphTargetsRelative;let s=n.groups;for(let c=0,l=s.length;c<l;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Va=new fe,Wn=new Kt,Xs=new vn,tn=new _,nn=new _,rn=new _,js=new _,Ys=new _,Zs=new _,Mr=new _,Sr=new _,Er=new _,Tr=new V,Ar=new V,Lr=new V,Js=new _,Rr=new _;function Pe(n=new Re,e=new Xt){we.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}Pe.prototype=Object.assign(Object.create(we.prototype),{constructor:Pe,isMesh:!0,copy:function(n){return we.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){let t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere),Xs.applyMatrix4(r),n.ray.intersectsSphere(Xs)===!1)||(Va.copy(r).invert(),Wn.copy(n.ray).applyMatrix4(Va),t.boundingBox!==null&&Wn.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){let o=t.index,a=t.attributes.position,c=t.morphAttributes.position,l=t.morphTargetsRelative,h=t.attributes.uv,u=t.attributes.uv2,f=t.groups,d=t.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,x=f.length;m<x;m++){let y=f[m],g=i[y.materialIndex],p=Math.max(y.start,d.start),E=Math.min(y.start+y.count,d.start+d.count);for(let M=p,T=E;M<T;M+=3){let v=o.getX(M),C=o.getX(M+1),B=o.getX(M+2);s=Cr(this,g,n,Wn,a,c,l,h,u,v,C,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let y=m,g=x;y<g;y+=3){let p=o.getX(y),E=o.getX(y+1),M=o.getX(y+2);s=Cr(this,i,n,Wn,a,c,l,h,u,p,E,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,x=f.length;m<x;m++){let y=f[m],g=i[y.materialIndex],p=Math.max(y.start,d.start),E=Math.min(y.start+y.count,d.start+d.count);for(let M=p,T=E;M<T;M+=3){let v=M,C=M+1,B=M+2;s=Cr(this,g,n,Wn,a,c,l,h,u,v,C,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let y=m,g=x;y<g;y+=3){let p=y,E=y+1,M=y+2;s=Cr(this,i,n,Wn,a,c,l,h,u,p,E,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function Hh(n,e,t,i,r,s,o,a){let c;if(e.side===Ke?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==An,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Rr);return l<t.near||l>t.far?null:{distance:l,point:Rr.clone(),object:n}}function Cr(n,e,t,i,r,s,o,a,c,l,h,u){tn.fromBufferAttribute(r,l),nn.fromBufferAttribute(r,h),rn.fromBufferAttribute(r,u);let f=n.morphTargetInfluences;if(e.morphTargets&&s&&f){Mr.set(0,0,0),Sr.set(0,0,0),Er.set(0,0,0);for(let m=0,x=s.length;m<x;m++){let y=f[m],g=s[m];y!==0&&(js.fromBufferAttribute(g,l),Ys.fromBufferAttribute(g,h),Zs.fromBufferAttribute(g,u),o?(Mr.addScaledVector(js,y),Sr.addScaledVector(Ys,y),Er.addScaledVector(Zs,y)):(Mr.addScaledVector(js.sub(tn),y),Sr.addScaledVector(Ys.sub(nn),y),Er.addScaledVector(Zs.sub(rn),y)))}tn.add(Mr),nn.add(Sr),rn.add(Er)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(l,tn),n.boneTransform(h,nn),n.boneTransform(u,rn));let d=Hh(n,e,t,i,tn,nn,rn,Js);if(d){a&&(Tr.fromBufferAttribute(a,l),Ar.fromBufferAttribute(a,h),Lr.fromBufferAttribute(a,u),d.uv=qe.getUV(Js,tn,nn,rn,Tr,Ar,Lr,new V)),c&&(Tr.fromBufferAttribute(c,l),Ar.fromBufferAttribute(c,h),Lr.fromBufferAttribute(c,u),d.uv2=qe.getUV(Js,tn,nn,rn,Tr,Ar,Lr,new V));let m={a:l,b:h,c:u,normal:new _,materialIndex:0};qe.getNormal(tn,nn,rn,m.normal),d.face=m}return d}var jt=class extends Re{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function m(x,y,g,p,E,M,T,v,C,B,D){let O=M/C,R=T/B,U=M/2,P=T/2,L=v/2,F=C+1,I=B+1,X=0,ee=0,Y=new _;for(let re=0;re<I;re++){let se=re*R-P;for(let me=0;me<F;me++){let be=me*O-U;Y[x]=be*p,Y[y]=se*E,Y[g]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[y]=0,Y[g]=v>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(me/C),u.push(1-re/B),X+=1}}for(let re=0;re<B;re++)for(let se=0;se<C;se++){let me=f+se+F*re,be=f+se+F*(re+1),G=f+(se+1)+F*(re+1),Ie=f+(se+1)+F*re;c.push(me,be,Ie),c.push(be,G,Ie),ee+=6}a.addGroup(d,ee,D),d+=ee,f+=X}}};function qn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ot(n){let e={};for(let t=0;t<n.length;t++){let i=qn(n[t]);for(let r in i)e[r]=i[r]}return e}var Xn={clone:qn,merge:ot},Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function Ge(n){Xe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Gh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}Ge.prototype=Object.create(Xe.prototype);Ge.prototype.constructor=Ge;Ge.prototype.isShaderMaterial=!0;Ge.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=qn(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};Ge.prototype.toJSON=function(n){let e=Xe.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let t={};for(let i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function jn(){we.call(this),this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe}jn.prototype=Object.assign(Object.create(we.prototype),{constructor:jn,isCamera:!0,copy:function(n,e){return we.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new _),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){we.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){we.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function at(n=50,e=1,t=.1,i=2e3){jn.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}at.prototype=Object.assign(Object.create(jn.prototype),{constructor:at,isPerspectiveCamera:!0,copy:function(n,e){return jn.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){let e=.5*this.getFilmHeight()/n;this.fov=Ee.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let n=Math.tan(Ee.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return Ee.RAD2DEG*2*Math.atan(Math.tan(Ee.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let n=this.near,e=n*Math.tan(Ee.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/c,i*=s.width/a,t*=s.height/c}let o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){let e=we.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var Yn=90,Zn=1,Pr=class extends we{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new at(Yn,Zn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new _(1,0,0)),this.add(r);let s=new at(Yn,Zn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new _(-1,0,0)),this.add(s);let o=new at(Yn,Zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new _(0,1,0)),this.add(o);let a=new at(Yn,Zn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new _(0,-1,0)),this.add(a);let c=new at(Yn,Zn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new _(0,0,1)),this.add(c);let l=new at(Yn,Zn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new _(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h}},Li=class extends tt{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:hs,a=a!==void 0?a:gn,super(e,t,i,r,s,o,a,c,l,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Li.prototype.isCubeTexture=!0;var Qs=class extends gt{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Li(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:We,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ft,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jt(5,5,5),s=new Ge({name:"CubemapFromEquirect",uniforms:qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:pi});s.uniforms.tEquirect.value=t;let o=new Pe(r,s),a=t.minFilter;return t.minFilter===or&&(t.minFilter=We),new Pr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};Qs.prototype.isWebGLCubeRenderTarget=!0;var Dr=class extends tt{constructor(e,t,i,r,s,o,a,c,l,h,u,f){super(null,o,a,c,l,h,r,s,u,f);this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:ht,this.minFilter=h!==void 0?h:ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Dr.prototype.isDataTexture=!0;var Jn=new vn,Ir=new _,Ri=class{constructor(e=new Lt,t=new Lt,i=new Lt,r=new Lt,s=new Lt,o=new Lt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],f=i[8],d=i[9],m=i[10],x=i[11],y=i[12],g=i[13],p=i[14],E=i[15];return t[0].setComponents(a-r,u-c,x-f,E-y).normalize(),t[1].setComponents(a+r,u+c,x+f,E+y).normalize(),t[2].setComponents(a+s,u+l,x+d,E+g).normalize(),t[3].setComponents(a-s,u-l,x-d,E-g).normalize(),t[4].setComponents(a-o,u-h,x-m,E-p).normalize(),t[5].setComponents(a+o,u+h,x+m,E+p).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ir.x=r.normal.x>0?e.max.x:e.min.x,Ir.y=r.normal.y>0?e.max.y:e.min.y,Ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wa(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vh(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,f=l.usage,d=n.createBuffer();n.bindBuffer(h,d),n.bufferData(h,u,f),l.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,d=h.updateRange;n.bindBuffer(u,l),d.count===-1?n.bufferSubData(u,0,f):(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}var Qn=class extends Re{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],x=[],y=[];for(let g=0;g<h;g++){let p=g*f-o;for(let E=0;E<l;E++){let M=E*u-s;m.push(M,-p,0),x.push(0,0,1),y.push(E/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let p=0;p<a;p++){let E=p+l*g,M=p+l*(g+1),T=p+1+l*(g+1),v=p+1+l*g;d.push(E,M,v),d.push(M,T,v)}this.setIndex(d),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(y,2))}},Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh="vec3 transformed = vec3( position );",Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,xf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Pf=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Of=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,$f=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,td=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,id=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,md=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ed=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Td=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Ad=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ld=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Rd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Dd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ud=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,ep=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,np=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lp=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hp=`uniform float rotation;
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
}`,Ce={alphamap_fragment:Wh,alphamap_pars_fragment:qh,alphatest_fragment:Xh,aomap_fragment:jh,aomap_pars_fragment:Yh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:Qh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:rf,color_pars_fragment:sf,color_pars_vertex:of,color_vertex:af,common:cf,cube_uv_reflection_fragment:lf,defaultnormal_vertex:uf,displacementmap_pars_vertex:hf,displacementmap_vertex:ff,emissivemap_fragment:df,emissivemap_pars_fragment:pf,encodings_fragment:mf,encodings_pars_fragment:gf,envmap_fragment:xf,envmap_common_pars_fragment:yf,envmap_pars_fragment:vf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Pf,envmap_vertex:wf,fog_vertex:bf,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:Ef,gradientmap_pars_fragment:Tf,lightmap_fragment:Af,lightmap_pars_fragment:Lf,lights_lambert_vertex:Rf,lights_pars_begin:Cf,lights_toon_fragment:Df,lights_toon_pars_fragment:If,lights_phong_fragment:Ff,lights_phong_pars_fragment:Bf,lights_physical_fragment:Nf,lights_physical_pars_fragment:zf,lights_fragment_begin:Of,lights_fragment_maps:Uf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Wf,map_fragment:qf,map_pars_fragment:Xf,map_particle_fragment:jf,map_particle_pars_fragment:Yf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:$f,morphtarget_vertex:Kf,normal_fragment_begin:ed,normal_fragment_maps:td,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:sd,packing:od,premultiplied_alpha_fragment:ad,project_vertex:cd,dithering_fragment:ld,dithering_pars_fragment:ud,roughnessmap_fragment:hd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:dd,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:xd,skinning_pars_vertex:yd,skinning_vertex:vd,skinnormal_vertex:_d,specularmap_fragment:wd,specularmap_pars_fragment:bd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmissionmap_fragment:Ed,transmissionmap_pars_fragment:Td,uv_pars_fragment:Ad,uv_pars_vertex:Ld,uv_vertex:Rd,uv2_pars_fragment:Cd,uv2_pars_vertex:Pd,uv2_vertex:Dd,worldpos_vertex:Id,background_frag:Fd,background_vert:Bd,cube_frag:Nd,cube_vert:zd,depth_frag:Od,depth_vert:Ud,distanceRGBA_frag:Hd,distanceRGBA_vert:Gd,equirect_frag:kd,equirect_vert:Vd,linedashed_frag:Wd,linedashed_vert:qd,meshbasic_frag:Xd,meshbasic_vert:jd,meshlambert_frag:Yd,meshlambert_vert:Zd,meshmatcap_frag:Jd,meshmatcap_vert:Qd,meshtoon_frag:$d,meshtoon_vert:Kd,meshphong_frag:ep,meshphong_vert:tp,meshphysical_frag:np,meshphysical_vert:ip,normal_frag:rp,normal_vert:sp,points_frag:op,points_vert:ap,shadow_frag:cp,shadow_vert:lp,sprite_frag:up,sprite_vert:hp},K={common:{diffuse:{value:new oe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new et},uv2Transform:{value:new et},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}},sprite:{diffuse:{value:new oe(15658734)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}}},zt={basic:{uniforms:ot([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ot([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ot([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ot([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ot([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ot([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ot([K.points,K.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ot([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ot([K.common,K.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ot([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.normal_vert,fragmentShader:Ce.normal_frag},sprite:{uniforms:ot([K.sprite,K.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:ot([K.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ot([K.common,K.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ot([K.lights,K.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};zt.physical={uniforms:ot([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new V(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new oe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function fp(n,e,t,i,r){let s=new oe(0),o=0,a,c,l=null,h=0,u=null;function f(m,x,y,g){let p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));let E=n.xr,M=E.getSession&&E.getSession();M&&M.environmentBlendMode==="additive"&&(p=null),p===null?d(s,o):p&&p.isColor&&(d(p,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ds)?(c===void 0&&(c=new Pe(new jt(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:qn(zt.cube.uniforms),vertexShader:zt.cube.vertexShader,fragmentShader:zt.cube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,v,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||h!==p.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,l=p,h=p.version,u=n.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Pe(new Qn(2,2),new Ge({name:"BackgroundMaterial",uniforms:qn(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||h!==p.version||u!==n.toneMapping)&&(a.material.needsUpdate=!0,l=p,h=p.version,u=n.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function d(m,x){t.buffers.color.setClear(m.r,m.g,m.b,x,r)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),o=x,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,d(s,o)},render:f}}function dp(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=x(null),l=c;function h(P,L,F,I,X){let ee=!1;if(o){let Y=m(I,F,L);l!==Y&&(l=Y,f(l.object)),ee=y(I,X),ee&&g(I,X)}else{let Y=L.wireframe===!0;(l.geometry!==I.id||l.program!==F.id||l.wireframe!==Y)&&(l.geometry=I.id,l.program=F.id,l.wireframe=Y,ee=!0)}P.isInstancedMesh===!0&&(ee=!0),X!==null&&t.update(X,34963),ee&&(C(P,L,F,I),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function d(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,L,F){let I=F.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let ee=X[L.id];ee===void 0&&(ee={},X[L.id]=ee);let Y=ee[I];return Y===void 0&&(Y=x(u()),ee[I]=Y),Y}function x(P){let L=[],F=[],I=[];for(let X=0;X<r;X++)L[X]=0,F[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:I,object:P,attributes:{},index:null}}function y(P,L){let F=l.attributes,I=P.attributes,X=0;for(let ee in I){let Y=F[ee],re=I[ee];if(Y===void 0||Y.attribute!==re||Y.data!==re.data)return!0;X++}return l.attributesNum!==X||l.index!==L}function g(P,L){let F={},I=P.attributes,X=0;for(let ee in I){let Y=I[ee],re={};re.attribute=Y,Y.data&&(re.data=Y.data),F[ee]=re,X++}l.attributes=F,l.attributesNum=X,l.index=L}function p(){let P=l.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function E(P){M(P,0)}function M(P,L){let F=l.newAttributes,I=l.enabledAttributes,X=l.attributeDivisors;F[P]=1,I[P]===0&&(n.enableVertexAttribArray(P),I[P]=1),X[P]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),X[P]=L)}function T(){let P=l.newAttributes,L=l.enabledAttributes;for(let F=0,I=L.length;F<I;F++)L[F]!==P[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function v(P,L,F,I,X,ee){i.isWebGL2===!0&&(F===5124||F===5125)?n.vertexAttribIPointer(P,L,F,X,ee):n.vertexAttribPointer(P,L,F,I,X,ee)}function C(P,L,F,I){if(i.isWebGL2===!1&&(P.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let X=I.attributes,ee=F.getAttributes(),Y=L.defaultAttributeValues;for(let re in ee){let se=ee[re];if(se>=0){let me=X[re];if(me!==void 0){let be=me.normalized,G=me.itemSize,Ie=t.get(me);if(Ie===void 0)continue;let ce=Ie.buffer,ae=Ie.type,le=Ie.bytesPerElement;if(me.isInterleavedBufferAttribute){let Me=me.data,de=Me.stride,ge=me.offset;Me&&Me.isInstancedInterleavedBuffer?(M(se,Me.meshPerAttribute),I._maxInstanceCount===void 0&&(I._maxInstanceCount=Me.meshPerAttribute*Me.count)):E(se),n.bindBuffer(34962,ce),v(se,G,ae,be,de*le,ge*le)}else me.isInstancedBufferAttribute?(M(se,me.meshPerAttribute),I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)):E(se),n.bindBuffer(34962,ce),v(se,G,ae,be,0,0)}else if(re==="instanceMatrix"){let be=t.get(P.instanceMatrix);if(be===void 0)continue;let G=be.buffer,Ie=be.type;M(se+0,1),M(se+1,1),M(se+2,1),M(se+3,1),n.bindBuffer(34962,G),n.vertexAttribPointer(se+0,4,Ie,!1,64,0),n.vertexAttribPointer(se+1,4,Ie,!1,64,16),n.vertexAttribPointer(se+2,4,Ie,!1,64,32),n.vertexAttribPointer(se+3,4,Ie,!1,64,48)}else if(re==="instanceColor"){let be=t.get(P.instanceColor);if(be===void 0)continue;let G=be.buffer,Ie=be.type;M(se,1),n.bindBuffer(34962,G),n.vertexAttribPointer(se,3,Ie,!1,12,0)}else if(Y!==void 0){let be=Y[re];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(se,be);break;case 3:n.vertexAttrib3fv(se,be);break;case 4:n.vertexAttrib4fv(se,be);break;default:n.vertexAttrib1fv(se,be)}}}}T()}function B(){R();for(let P in a){let L=a[P];for(let F in L){let I=L[F];for(let X in I)d(I[X].object),delete I[X];delete L[F]}delete a[P]}}function D(P){if(a[P.id]===void 0)return;let L=a[P.id];for(let F in L){let I=L[F];for(let X in I)d(I[X].object),delete I[X];delete L[F]}delete a[P.id]}function O(P){for(let L in a){let F=a[L];if(F[P.id]===void 0)continue;let I=F[P.id];for(let X in I)d(I[X].object),delete I[X];delete F[P.id]}}function R(){U(),l!==c&&(l=c,f(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:R,resetDefaultState:U,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:p,enableAttribute:E,disableUnusedAttributes:T}}function pp(n,e,t,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,h){n.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function mp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(v){if(v==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),u=n.getParameter(35660),f=n.getParameter(3379),d=n.getParameter(34076),m=n.getParameter(34921),x=n.getParameter(36347),y=n.getParameter(36348),g=n.getParameter(36349),p=u>0,E=o||e.has("OES_texture_float"),M=p&&E,T=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:T}}function gp(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Lt,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){let m=u.length!==0||f||i!==0||r;return r=f,t=h(u,d,0),i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,g=n.get(u);if(!r||m===null||m.length===0||s&&!y)s?h(null):l();else{let p=s?0:i,E=p*4,M=g.clippingState||null;c.value=M,M=h(m,f,E,d);for(let T=0;T!==E;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,y=null;if(x!==0){if(y=c.value,m!==!0||y===null){let g=d+x*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<g)&&(y=new Float32Array(g));for(let E=0,M=d;E!==x;++E,M+=4)o.copy(u[E]).applyMatrix4(p,a),o.normal.toArray(y,M),y[M+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function xp(n){let e=new WeakMap;function t(o,a){return a===la?o.mapping=hs:a===ua&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===la||a===ua)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=n.getRenderTarget(),h=new Qs(c.height/2);return h.fromEquirectangularTexture(n,o),e.set(o,h),n.setRenderTarget(l),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function yp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vp(n,e,t,i){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)e.update(f[m],34962);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let y=0,g=x.length;y<g;y++)e.update(x[y],34962)}}function l(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let p=d.array;x=d.version;for(let E=0,M=p.length;E<M;E+=3){let T=p[E+0],v=p[E+1],C=p[E+2];f.push(T,v,v,C,C,T)}}else{let p=m.array;x=m.version;for(let E=0,M=p.length/3-1;E<M;E+=3){let T=E+0,v=E+1,C=E+2;f.push(T,v,v,C,C,T)}}let y=new(ka(f)>65535?Ti:Ei)(f,1);y.version=x;let g=s.get(u);g&&e.remove(g),s.set(u,y)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _p(n,e,t,i){let r=i.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,d){n.drawElements(s,d,a,f*c),t.update(d,s,1)}function u(f,d,m){if(m===0)return;let x,y;if(r)x=n,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,d,a,f*c,m),t.update(d,s,m)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function wp(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bp(n,e){return n[0]-e[0]}function Mp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sp(n){let e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,h=l===void 0?0:l.length,u=e[o.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];e[o.id]=u}for(let y=0;y<h;y++){let g=u[y];g[0]=y,g[1]=l[y]}u.sort(Mp);for(let y=0;y<8;y++)y<h&&u[y][1]?(i[y][0]=u[y][0],i[y][1]=u[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(bp);let f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let g=i[y],p=g[0],E=g[1];p!==Number.MAX_SAFE_INTEGER&&E?(f&&o.getAttribute("morphTarget"+y)!==f[p]&&o.setAttribute("morphTarget"+y,f[p]),d&&o.getAttribute("morphNormal"+y)!==d[p]&&o.setAttribute("morphNormal"+y,d[p]),t[y]=E,m+=E):(f&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),d&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),t[y]=0)}let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function Ep(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var $s=class extends tt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}};$s.prototype.isDataTexture2DArray=!0;var Ks=class extends tt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}};Ks.prototype.isDataTexture3D=!0;var qa=new tt,Tp=new $s,Ap=new Ks,Xa=new Li,ja=[],Ya=[],Za=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function $n(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=Ya[e];t===void 0&&(t=new Int32Array(e),Ya[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Lp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function Cp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function Pp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function Dp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,i))return;Qa.set(i),n.uniformMatrix2fv(this.addr,!1,Qa),ct(t,i)}}function Ip(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,i))return;Ja.set(i),n.uniformMatrix3fv(this.addr,!1,Ja),ct(t,i)}}function Fp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,i))return;Za.set(i),n.uniformMatrix4fv(this.addr,!1,Za),ct(t,i)}}function Bp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Np(n,e){let t=this.cache;dt(t,e)||(n.uniform2iv(this.addr,e),ct(t,e))}function zp(n,e){let t=this.cache;dt(t,e)||(n.uniform3iv(this.addr,e),ct(t,e))}function Op(n,e){let t=this.cache;dt(t,e)||(n.uniform4iv(this.addr,e),ct(t,e))}function Up(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hp(n,e){let t=this.cache;dt(t,e)||(n.uniform2uiv(this.addr,e),ct(t,e))}function Gp(n,e){let t=this.cache;dt(t,e)||(n.uniform3uiv(this.addr,e),ct(t,e))}function kp(n,e){let t=this.cache;dt(t,e)||(n.uniform4uiv(this.addr,e),ct(t,e))}function Vp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||qa,r)}function Wp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ap,r)}function qp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Xa,r)}function Xp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tp,r)}function jp(n){switch(n){case 5126:return Lp;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Dp;case 35675:return Ip;case 35676:return Fp;case 5124:case 35670:return Bp;case 35667:case 35671:return Np;case 35668:case 35672:return zp;case 35669:case 35673:return Op;case 5125:return Up;case 36294:return Hp;case 36295:return Gp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Xp}}function Yp(n,e){n.uniform1fv(this.addr,e)}function Zp(n,e){let t=$n(e,this.size,2);n.uniform2fv(this.addr,t)}function Jp(n,e){let t=$n(e,this.size,3);n.uniform3fv(this.addr,t)}function Qp(n,e){let t=$n(e,this.size,4);n.uniform4fv(this.addr,t)}function $p(n,e){let t=$n(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kp(n,e){let t=$n(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function em(n,e){let t=$n(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tm(n,e){n.uniform1iv(this.addr,e)}function nm(n,e){n.uniform2iv(this.addr,e)}function im(n,e){n.uniform3iv(this.addr,e)}function rm(n,e){n.uniform4iv(this.addr,e)}function sm(n,e){n.uniform1uiv(this.addr,e)}function om(n,e){n.uniform2uiv(this.addr,e)}function am(n,e){n.uniform3uiv(this.addr,e)}function cm(n,e){n.uniform4uiv(this.addr,e)}function lm(n,e,t){let i=e.length,r=$a(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||qa,r[s])}function um(n,e,t){let i=e.length,r=$a(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Xa,r[s])}function hm(n){switch(n){case 5126:return Yp;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return $p;case 35675:return Kp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return om;case 36295:return am;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35680:case 36300:case 36308:case 36293:return um}}function fm(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=jp(e.type)}function Ka(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=hm(e.type)}Ka.prototype.updateCache=function(n){let e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),ct(e,n)};function ec(n){this.id=n,this.seq=[],this.map={}}ec.prototype.setValue=function(n,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(n,e[o.id],t)}};var eo=/(\w+)(\])?(\[|\.)?/g;function tc(n,e){n.seq.push(e),n.map[e.id]=e}function dm(n,e,t){let i=n.name,r=i.length;for(eo.lastIndex=0;;){let s=eo.exec(i),o=eo.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tc(t,l===void 0?new fm(a,n,e):new Ka(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ec(a),tc(t,u)),t=u}}}function sn(n,e){this.seq=[],this.map={};let t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);dm(r,s,this)}}sn.prototype.setValue=function(n,e,t,i){let r=this.map[e];r!==void 0&&r.setValue(n,t,i)};sn.prototype.setOptional=function(n,e,t){let i=e[t];i!==void 0&&this.setValue(n,t,i)};sn.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};sn.seqWithValue=function(n,e){let t=[];for(let i=0,r=n.length;i!==r;++i){let s=n[i];s.id in e&&t.push(s)}return t};function nc(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pm=0;function mm(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function ic(n){switch(n){case Dn:return["Linear","( value )"];case vi:return["sRGB","( value )"];case Ea:return["RGBE","( value )"];case Ta:return["RGBM","( value, 7.0 )"];case Aa:return["RGBM","( value, 16.0 )"];case La:return["RGBD","( value, 256.0 )"];case Sa:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Mh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function rc(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+mm(s)}function Ci(n,e){let t=ic(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function gm(n,e){let t=ic(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xm(n,e){let t;switch(e){case Mu:t="Linear";break;case us:t="Reinhard";break;case Su:t="OptimizedCineon";break;case Eu:t="ACESFilmic";break;case Tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ym(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function vm(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _m(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function Pi(n){return n!==""}function sc(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(n){return n.replace(wm,bm)}function bm(n,e){let t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return to(t)}var Mm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(n){return n.replace(Sm,cc).replace(Mm,Em)}function Em(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),cc(n,e,t,i)}function cc(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ea?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case fs:e="ENVMAP_TYPE_CUBE";break;case ds:case ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Rm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sr:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case bu:e="ENVMAP_BLENDING_ADD";break}return e}function Cm(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Tm(t),l=Am(t),h=Lm(t),u=Rm(t),f=n.gammaFactor>0?n.gammaFactor:1,d=t.isWebGL2?"":ym(t),m=vm(s),x=r.createProgram(),y,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(Pi).join(`
`),y.length>0&&(y+=`
`),g=[d,m].filter(Pi).join(`
`),g.length>0&&(g+=`
`)):(y=[lc(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),g=[d,lc(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ce.tonemapping_pars_fragment:"",t.toneMapping!==gi?xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ce.encodings_pars_fragment,t.map?Ci("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ci("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ci("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ci("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Ci("lightMapTexelToLinear",t.lightMapEncoding):"",gm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=to(o),o=sc(o,t),o=oc(o,t),a=to(a),a=sc(a,t),a=oc(a,t),o=ac(o),a=ac(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Ra?"":"out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=p+y+o,M=p+g+a,T=nc(r,35633,E),v=nc(r,35632,M);if(r.attachShader(x,T),r.attachShader(x,v),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){let D=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(T).trim(),R=r.getShaderInfoLog(v).trim(),U=!0,P=!0;if(r.getProgramParameter(x,35714)===!1){U=!1;let L=rc(r,T,"vertex"),F=rc(r,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(x,35715),"gl.getProgramInfoLog",D,L,F)}else D!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",D):(O===""||R==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:D,vertexShader:{log:O,prefix:y},fragmentShader:{log:R,prefix:g}})}r.deleteShader(T),r.deleteShader(v);let C;this.getUniforms=function(){return C===void 0&&(C=new sn(r,x)),C};let B;return this.getAttributes=function(){return B===void 0&&(B=_m(r,x)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=v,this}function Pm(n,e,t,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(v){let B=v.skeleton.bones;if(l)return 1024;{let O=Math.floor((h-20)/4),R=Math.min(O,B.length);return R<B.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+B.length+" bones. This GPU supports "+R+"."),0):R}}function y(v){let C;return v&&v.isTexture?C=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),C=v.texture.encoding):C=Dn,C}function g(v,C,B,D,O){let R=D.fog,U=v.isMeshStandardMaterial?D.environment:null,P=e.get(v.envMap||U),L=d[v.type],F=O.isSkinnedMesh?x(O):0;v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let I,X;if(L){let re=zt[L];I=re.vertexShader,X=re.fragmentShader}else I=v.vertexShader,X=v.fragmentShader;let ee=n.getRenderTarget();return{isWebGL2:a,shaderID:L,shaderName:v.type,vertexShader:I,fragmentShader:X,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ee!==null?y(ee.texture):n.outputEncoding,map:!!v.map,mapEncoding:y(v.map),matcap:!!v.matcap,matcapEncoding:y(v.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:y(P),envMapCubeUV:!!P&&(P.mapping===ds||P.mapping===ps),lightMap:!!v.lightMap,lightMapEncoding:y(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:y(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Th,tangentSpaceNormalMap:v.normalMapType===In,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.transmissionMap)&&!!v.displacementMap,fog:!!R,useFog:v.fog,fogExp2:R&&R.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:v.skinning&&F>0,maxBones:F,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:gi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===An,flipSided:v.side===Ke,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.fragmentShader),C.push(v.vertexShader)),v.defines!==void 0)for(let B in v.defines)C.push(B),C.push(v.defines[B]);if(v.isRawShaderMaterial===!1){for(let B=0;B<m.length;B++)C.push(v[m[B]]);C.push(n.outputEncoding),C.push(n.gammaFactor)}return C.push(v.customProgramCacheKey),C.join()}function E(v){let C=d[v.type],B;if(C){let D=zt[C];B=Xn.clone(D.uniforms)}else B=v.uniforms;return B}function M(v,C){let B;for(let D=0,O=o.length;D<O;D++){let R=o[D];if(R.cacheKey===C){B=R,++B.usedTimes;break}}return B===void 0&&(B=new Cm(n,C,v,r),o.push(B)),B}function T(v){if(--v.usedTimes==0){let C=o.indexOf(v);o[C]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:T,programs:o}}function Dm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uc(n){let e=[],t=0,i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(f,d,m,x,y,g){let p=e[t],E=n.get(m);return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,program:E.program||s,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},e[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.program=E.program||s,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=y,p.group=g),t++,p}function c(f,d,m,x,y,g){let p=a(f,d,m,x,y,g);(m.transparent===!0?r:i).push(p)}function l(f,d,m,x,y,g){let p=a(f,d,m,x,y,g);(m.transparent===!0?r:i).unshift(p)}function h(f,d){i.length>1&&i.sort(f||Im),r.length>1&&r.sort(d||Fm)}function u(){for(let f=t,d=e.length;f<d;f++){let m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:u,sort:h}}function Bm(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new uc(n),e.set(r,[o])):s>=e.get(r).length?(o=new uc(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Nm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new oe};break;case"SpotLight":t={position:new _,direction:new _,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function zm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Om=0;function Um(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Hm(n,e){let t=new Nm,i=zm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new _);let s=new _,o=new fe,a=new fe;function c(h){let u=0,f=0,d=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let m=0,x=0,y=0,g=0,p=0,E=0,M=0,T=0;h.sort(Um);for(let C=0,B=h.length;C<B;C++){let D=h[C],O=D.color,R=D.intensity,U=D.distance,P=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*R,f+=O.g*R,d+=O.b*R;else if(D.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(D.sh.coefficients[L],R);else if(D.isDirectionalLight){let L=t.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let F=D.shadow,I=i.get(D);I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,r.directionalShadow[m]=I,r.directionalShadowMap[m]=P,r.directionalShadowMatrix[m]=D.shadow.matrix,E++}r.directional[m]=L,m++}else if(D.isSpotLight){let L=t.get(D);if(L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(O).multiplyScalar(R),L.distance=U,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,D.castShadow){let F=D.shadow,I=i.get(D);I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,r.spotShadow[y]=I,r.spotShadowMap[y]=P,r.spotShadowMatrix[y]=D.shadow.matrix,T++}r.spot[y]=L,y++}else if(D.isRectAreaLight){let L=t.get(D);L.color.copy(O).multiplyScalar(R),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=L,g++}else if(D.isPointLight){let L=t.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),L.distance=D.distance,L.decay=D.decay,D.castShadow){let F=D.shadow,I=i.get(D);I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,I.shadowCameraNear=F.camera.near,I.shadowCameraFar=F.camera.far,r.pointShadow[x]=I,r.pointShadowMap[x]=P,r.pointShadowMatrix[x]=D.shadow.matrix,M++}r.point[x]=L,x++}else if(D.isHemisphereLight){let L=t.get(D);L.skyColor.copy(D.color).multiplyScalar(R),L.groundColor.copy(D.groundColor).multiplyScalar(R),r.hemi[p]=L,p++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;let v=r.hash;(v.directionalLength!==m||v.pointLength!==x||v.spotLength!==y||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==E||v.numPointShadows!==M||v.numSpotShadows!==T)&&(r.directional.length=m,r.spot.length=y,r.rectArea.length=g,r.point.length=x,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=T,v.directionalLength=m,v.pointLength=x,v.spotLength=y,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=E,v.numPointShadows=M,v.numSpotShadows=T,r.version=Om++)}function l(h,u){let f=0,d=0,m=0,x=0,y=0,g=u.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){let M=h[p];if(M.isDirectionalLight){let T=r.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(M.isSpotLight){let T=r.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let T=r.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let T=r.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let T=r.hemi[y];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),T.direction.normalize(),y++}}}return{setup:c,setupView:l,state:r}}function hc(n,e){let t=new Hm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(){t.setup(i)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Gm(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new hc(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new hc(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}var no=class extends Xe{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Sh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};no.prototype.isMeshDepthMaterial=!0;var io=class extends Xe{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new _,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};io.prototype.isMeshDistanceMaterial=!0;var km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function fc(n,e,t){let i=new Ri,r=new V,s=new V,o=new Oe,a=[],c=[],l={},h=t.maxTextureSize,u={0:Ke,1:ir,2:An},f=new Ge({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Vm,fragmentShader:km}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(m,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea,this.render=function(v,C,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||v.length===0)return;let D=n.getRenderTarget(),O=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(pi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let P=0,L=v.length;P<L;P++){let F=v[P],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let X=I.getFrameExtents();if(r.multiply(X),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===di){let Y={minFilter:We,magFilter:We,format:ft};I.map=new gt(r.x,r.y,Y),I.map.texture.name=F.name+".shadowMap",I.mapPass=new gt(r.x,r.y,Y),I.camera.updateProjectionMatrix()}if(I.map===null){let Y={minFilter:ht,magFilter:ht,format:ft};I.map=new gt(r.x,r.y,Y),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();let ee=I.getViewportCount();for(let Y=0;Y<ee;Y++){let re=I.getViewport(Y);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),U.viewport(o),I.updateMatrices(F,Y),i=I.getFrustum(),T(C,B,I.camera,F,this.type)}!I.isPointLightShadow&&this.type===di&&g(I,B),I.needsUpdate=!1}y.needsUpdate=!1,n.setRenderTarget(D,O,R)};function g(v,C){let B=e.update(x);f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(C,null,B,f,x,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(C,null,B,d,x,null)}function p(v,C,B){let D=v<<0|C<<1|B<<2,O=a[D];return O===void 0&&(O=new no({depthPacking:Eh,morphTargets:v,skinning:C}),a[D]=O),O}function E(v,C,B){let D=v<<0|C<<1|B<<2,O=c[D];return O===void 0&&(O=new io({morphTargets:v,skinning:C}),c[D]=O),O}function M(v,C,B,D,O,R,U){let P=null,L=p,F=v.customDepthMaterial;if(D.isPointLight===!0&&(L=E,F=v.customDistanceMaterial),F===void 0){let I=!1;B.morphTargets===!0&&(I=C.morphAttributes&&C.morphAttributes.position&&C.morphAttributes.position.length>0);let X=!1;v.isSkinnedMesh===!0&&(B.skinning===!0?X=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",v));let ee=v.isInstancedMesh===!0;P=L(I,X,ee)}else P=F;if(n.localClippingEnabled&&B.clipShadows===!0&&B.clippingPlanes.length!==0){let I=P.uuid,X=B.uuid,ee=l[I];ee===void 0&&(ee={},l[I]=ee);let Y=ee[X];Y===void 0&&(Y=P.clone(),ee[X]=Y),P=Y}return P.visible=B.visible,P.wireframe=B.wireframe,U===di?P.side=B.shadowSide!==null?B.shadowSide:B.side:P.side=B.shadowSide!==null?B.shadowSide:u[B.side],P.clipShadows=B.clipShadows,P.clippingPlanes=B.clippingPlanes,P.clipIntersection=B.clipIntersection,P.wireframeLinewidth=B.wireframeLinewidth,P.linewidth=B.linewidth,D.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(D.matrixWorld),P.nearDistance=O,P.farDistance=R),P}function T(v,C,B,D,O){if(v.visible===!1)return;if(v.layers.test(C.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&O===di)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld);let P=e.update(v),L=v.material;if(Array.isArray(L)){let F=P.groups;for(let I=0,X=F.length;I<X;I++){let ee=F[I],Y=L[ee.materialIndex];if(Y&&Y.visible){let re=M(v,P,Y,D,B.near,B.far,O);n.renderBufferDirect(B,null,P,re,v,ee)}}}else if(L.visible){let F=M(v,P,L,D,B.near,B.far,O);n.renderBufferDirect(B,null,P,F,v,null)}}let U=v.children;for(let P=0,L=U.length;P<L;P++)T(U[P],C,B,D,O)}}function Wm(n,e,t){let i=t.isWebGL2;function r(){let A=!1,J=new Oe,$=null,pe=new Oe(0,0,0,0);return{setMask:function(q){$!==q&&!A&&(n.colorMask(q,q,q,q),$=q)},setLocked:function(q){A=q},setClear:function(q,xe,Ne,Je,fn){fn===!0&&(q*=Je,xe*=Je,Ne*=Je),J.set(q,xe,Ne,Je),pe.equals(J)===!1&&(n.clearColor(q,xe,Ne,Je),pe.copy(J))},reset:function(){A=!1,$=null,pe.set(-1,0,0,0)}}}function s(){let A=!1,J=null,$=null,pe=null;return{setTest:function(q){q?me(2929):be(2929)},setMask:function(q){J!==q&&!A&&(n.depthMask(q),J=q)},setFunc:function(q){if($!==q){if(q)switch(q){case pu:n.depthFunc(512);break;case mu:n.depthFunc(519);break;case gu:n.depthFunc(513);break;case ls:n.depthFunc(515);break;case xu:n.depthFunc(514);break;case yu:n.depthFunc(518);break;case vu:n.depthFunc(516);break;case _u:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);$=q}},setLocked:function(q){A=q},setClear:function(q){pe!==q&&(n.clearDepth(q),pe=q)},reset:function(){A=!1,J=null,$=null,pe=null}}}function o(){let A=!1,J=null,$=null,pe=null,q=null,xe=null,Ne=null,Je=null,fn=null;return{setTest:function(Ye){A||(Ye?me(2960):be(2960))},setMask:function(Ye){J!==Ye&&!A&&(n.stencilMask(Ye),J=Ye)},setFunc:function(Ye,Ut,Tt){($!==Ye||pe!==Ut||q!==Tt)&&(n.stencilFunc(Ye,Ut,Tt),$=Ye,pe=Ut,q=Tt)},setOp:function(Ye,Ut,Tt){(xe!==Ye||Ne!==Ut||Je!==Tt)&&(n.stencilOp(Ye,Ut,Tt),xe=Ye,Ne=Ut,Je=Tt)},setLocked:function(Ye){A=Ye},setClear:function(Ye){fn!==Ye&&(n.clearStencil(Ye),fn=Ye)},reset:function(){A=!1,J=null,$=null,pe=null,q=null,xe=null,Ne=null,Je=null,fn=null}}}let a=new r,c=new s,l=new o,h={},u=null,f={},d=null,m=!1,x=null,y=null,g=null,p=null,E=null,M=null,T=null,v=!1,C=null,B=null,D=null,O=null,R=null,U=n.getParameter(35661),P=!1,L=0,F=n.getParameter(7938);F.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=L>=1):F.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=L>=2);let I=null,X={},ee=new Oe(0,0,n.canvas.width,n.canvas.height),Y=new Oe(0,0,n.canvas.width,n.canvas.height);function re(A,J,$){let pe=new Uint8Array(4),q=n.createTexture();n.bindTexture(A,q),n.texParameteri(A,10241,9728),n.texParameteri(A,10240,9728);for(let xe=0;xe<$;xe++)n.texImage2D(J+xe,0,6408,1,1,0,6408,5121,pe);return q}let se={};se[3553]=re(3553,3553,1),se[34067]=re(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),me(2929),c.setFunc(ls),ge(!1),j(Ko),me(2884),Me(pi);function me(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function be(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function G(A){A!==u&&(n.bindFramebuffer(36160,A),u=A)}function Ie(A,J){J===null&&u!==null&&(J=u),f[A]!==J&&(n.bindFramebuffer(A,J),f[A]=J)}function ce(A){return d!==A?(n.useProgram(A),d=A,!0):!1}let ae={[Ln]:32774,[iu]:32778,[ru]:32779};if(i)ae[ra]=32775,ae[sa]=32776;else{let A=e.get("EXT_blend_minmax");A!==null&&(ae[ra]=A.MIN_EXT,ae[sa]=A.MAX_EXT)}let le={[su]:0,[ou]:1,[au]:768,[oa]:770,[du]:776,[hu]:774,[lu]:772,[cu]:769,[aa]:771,[fu]:775,[uu]:773};function Me(A,J,$,pe,q,xe,Ne,Je){if(A===pi){m===!0&&(be(3042),m=!1);return}if(m===!1&&(me(3042),m=!0),A!==nu){if(A!==x||Je!==v){if((y!==Ln||E!==Ln)&&(n.blendEquation(32774),y=Ln,E=Ln),Je)switch(A){case mi:n.blendFuncSeparate(1,771,1,771);break;case rr:n.blendFunc(1,1);break;case na:n.blendFuncSeparate(0,0,769,771);break;case ia:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case mi:n.blendFuncSeparate(770,771,1,771);break;case rr:n.blendFunc(770,1);break;case na:n.blendFunc(0,769);break;case ia:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}g=null,p=null,M=null,T=null,x=A,v=Je}return}q=q||J,xe=xe||$,Ne=Ne||pe,(J!==y||q!==E)&&(n.blendEquationSeparate(ae[J],ae[q]),y=J,E=q),($!==g||pe!==p||xe!==M||Ne!==T)&&(n.blendFuncSeparate(le[$],le[pe],le[xe],le[Ne]),g=$,p=pe,M=xe,T=Ne),x=A,v=null}function de(A,J){A.side===An?be(2884):me(2884);let $=A.side===Ke;J&&($=!$),ge($),A.blending===mi&&A.transparent===!1?Me(pi):Me(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let pe=A.stencilWrite;l.setTest(pe),pe&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Q(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?me(32926):be(32926)}function ge(A){C!==A&&(A?n.frontFace(2304):n.frontFace(2305),C=A)}function j(A){A!==Kl?(me(2884),A!==B&&(A===Ko?n.cullFace(1029):A===eu?n.cullFace(1028):n.cullFace(1032))):be(2884),B=A}function Z(A){A!==D&&(P&&n.lineWidth(A),D=A)}function Q(A,J,$){A?(me(32823),(O!==J||R!==$)&&(n.polygonOffset(J,$),O=J,R=$)):be(32823)}function he(A){A?me(3089):be(3089)}function ne(A){A===void 0&&(A=33984+U-1),I!==A&&(n.activeTexture(A),I=A)}function S(A,J){I===null&&ne();let $=X[I];$===void 0&&($={type:void 0,texture:void 0},X[I]=$),($.type!==A||$.texture!==J)&&(n.bindTexture(A,J||se[A]),$.type=A,$.texture=J)}function b(){let A=X[I];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(A){ee.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ee.copy(A))}function Fe(A){Y.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),Y.copy(A))}function ye(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},I=null,X={},u=null,f={},d=null,m=!1,x=null,y=null,g=null,p=null,E=null,M=null,T=null,v=!1,C=null,B=null,D=null,O=null,R=null,ee.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:me,disable:be,bindFramebuffer:Ie,bindXRFramebuffer:G,useProgram:ce,setBlending:Me,setMaterial:de,setFlipSided:ge,setCullFace:j,setLineWidth:Z,setPolygonOffset:Q,setScissorTest:he,activeTexture:ne,bindTexture:S,unbindTexture:b,compressedTexImage2D:k,texImage2D:W,texImage3D:ie,scissor:ue,viewport:Fe,reset:ye}}function qm(n,e,t,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=new WeakMap,d,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function x(S,b){return m?new OffscreenCanvas(S,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(S,b,k,W){let ie=1;if((S.width>W||S.height>W)&&(ie=W/Math.max(S.width,S.height)),ie<1||b===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let ue=b?Ee.floorPowerOfTwo:Math.floor,Fe=ue(ie*S.width),ye=ue(ie*S.height);d===void 0&&(d=x(Fe,ye));let A=k?x(Fe,ye):d;return A.width=Fe,A.height=ye,A.getContext("2d").drawImage(S,0,0,Fe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Fe+"x"+ye+")."),A}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return Ee.isPowerOfTwo(S.width)&&Ee.isPowerOfTwo(S.height)}function p(S){return a?!1:S.wrapS!==yt||S.wrapT!==yt||S.minFilter!==ht&&S.minFilter!==We}function E(S,b){return S.generateMipmaps&&b&&S.minFilter!==ht&&S.minFilter!==We}function M(S,b,k,W){n.generateMipmap(S);let ie=i.get(b);ie.__maxMipLevel=Math.log2(Math.max(k,W))}function T(S,b,k){if(a===!1)return b;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=b;return b===6403&&(k===5126&&(W=33326),k===5131&&(W=33325),k===5121&&(W=33321)),b===6407&&(k===5126&&(W=34837),k===5131&&(W=34843),k===5121&&(W=32849)),b===6408&&(k===5126&&(W=34836),k===5131&&(W=34842),k===5121&&(W=32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function v(S){return S===ht||S===ha||S===fa?9728:9729}function C(S){let b=S.target;b.removeEventListener("dispose",C),D(b),b.isVideoTexture&&f.delete(b),o.memory.textures--}function B(S){let b=S.target;b.removeEventListener("dispose",B),O(b),o.memory.textures--}function D(S){let b=i.get(S);b.__webglInit!==void 0&&(n.deleteTexture(b.__webglTexture),i.remove(S))}function O(S){let b=S.texture,k=i.get(S),W=i.get(b);if(!!S){if(W.__webglTexture!==void 0&&n.deleteTexture(W.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(k.__webglFramebuffer[ie]),k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[ie]);else n.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer&&n.deleteRenderbuffer(k.__webglColorRenderbuffer),k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer);i.remove(b),i.remove(S)}}let R=0;function U(){R=0}function P(){let S=R;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),R+=1,S}function L(S,b){let k=i.get(S);if(S.isVideoTexture&&j(S),S.version>0&&k.__version!==S.version){let W=S.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(k,S,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,k.__webglTexture)}function F(S,b){let k=i.get(S);if(S.version>0&&k.__version!==S.version){me(k,S,b);return}t.activeTexture(33984+b),t.bindTexture(35866,k.__webglTexture)}function I(S,b){let k=i.get(S);if(S.version>0&&k.__version!==S.version){me(k,S,b);return}t.activeTexture(33984+b),t.bindTexture(32879,k.__webglTexture)}function X(S,b){let k=i.get(S);if(S.version>0&&k.__version!==S.version){be(k,S,b);return}t.activeTexture(33984+b),t.bindTexture(34067,k.__webglTexture)}let ee={[ms]:10497,[yt]:33071,[gs]:33648},Y={[ht]:9728,[ha]:9984,[fa]:9986,[We]:9729,[Au]:9985,[or]:9987};function re(S,b,k){if(k?(n.texParameteri(S,10242,ee[b.wrapS]),n.texParameteri(S,10243,ee[b.wrapT]),(S===32879||S===35866)&&n.texParameteri(S,32882,ee[b.wrapR]),n.texParameteri(S,10240,Y[b.magFilter]),n.texParameteri(S,10241,Y[b.minFilter])):(n.texParameteri(S,10242,33071),n.texParameteri(S,10243,33071),(S===32879||S===35866)&&n.texParameteri(S,32882,33071),(b.wrapS!==yt||b.wrapT!==yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,10240,v(b.magFilter)),n.texParameteri(S,10241,v(b.minFilter)),b.minFilter!==ht&&b.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let W=e.get("EXT_texture_filter_anisotropic");if(b.type===Yt&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===lr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(S,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function se(S,b){S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",C),S.__webglTexture=n.createTexture(),o.memory.textures++)}function me(S,b,k){let W=3553;b.isDataTexture2DArray&&(W=35866),b.isDataTexture3D&&(W=32879),se(S,b),t.activeTexture(33984+k),t.bindTexture(W,S.__webglTexture),n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);let ie=p(b)&&g(b.image)===!1,ue=y(b.image,ie,!1,h),Fe=g(ue)||a,ye=s.convert(b.format),A=s.convert(b.type),J=T(b.internalFormat,ye,A);re(W,b,Fe);let $,pe=b.mipmaps;if(b.isDepthTexture)J=6402,a?b.type===Yt?J=36012:b.type===cr?J=33190:b.type===xi?J=35056:J=33189:b.type===Yt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Rn&&J===6402&&b.type!==ar&&b.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ar,A=s.convert(b.type)),b.format===yi&&J===6402&&(J=34041,b.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xi,A=s.convert(b.type))),t.texImage2D(3553,0,J,ue.width,ue.height,0,ye,A,null);else if(b.isDataTexture)if(pe.length>0&&Fe){for(let q=0,xe=pe.length;q<xe;q++)$=pe[q],t.texImage2D(3553,q,J,$.width,$.height,0,ye,A,$.data);b.generateMipmaps=!1,S.__maxMipLevel=pe.length-1}else t.texImage2D(3553,0,J,ue.width,ue.height,0,ye,A,ue.data),S.__maxMipLevel=0;else if(b.isCompressedTexture){for(let q=0,xe=pe.length;q<xe;q++)$=pe[q],b.format!==ft&&b.format!==gn?ye!==null?t.compressedTexImage2D(3553,q,J,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,J,$.width,$.height,0,ye,A,$.data);S.__maxMipLevel=pe.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,J,ue.width,ue.height,ue.depth,0,ye,A,ue.data),S.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,J,ue.width,ue.height,ue.depth,0,ye,A,ue.data),S.__maxMipLevel=0;else if(pe.length>0&&Fe){for(let q=0,xe=pe.length;q<xe;q++)$=pe[q],t.texImage2D(3553,q,J,ye,A,$);b.generateMipmaps=!1,S.__maxMipLevel=pe.length-1}else t.texImage2D(3553,0,J,ye,A,ue),S.__maxMipLevel=0;E(b,Fe)&&M(W,b,ue.width,ue.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function be(S,b,k){if(b.image.length!==6)return;se(S,b),t.activeTexture(33984+k),t.bindTexture(34067,S.__webglTexture),n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);let W=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),ie=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let q=0;q<6;q++)!W&&!ie?ue[q]=y(b.image[q],!1,!0,l):ue[q]=ie?b.image[q].image:b.image[q];let Fe=ue[0],ye=g(Fe)||a,A=s.convert(b.format),J=s.convert(b.type),$=T(b.internalFormat,A,J);re(34067,b,ye);let pe;if(W){for(let q=0;q<6;q++){pe=ue[q].mipmaps;for(let xe=0;xe<pe.length;xe++){let Ne=pe[xe];b.format!==ft&&b.format!==gn?A!==null?t.compressedTexImage2D(34069+q,xe,$,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,xe,$,Ne.width,Ne.height,0,A,J,Ne.data)}}S.__maxMipLevel=pe.length-1}else{pe=b.mipmaps;for(let q=0;q<6;q++)if(ie){t.texImage2D(34069+q,0,$,ue[q].width,ue[q].height,0,A,J,ue[q].data);for(let xe=0;xe<pe.length;xe++){let Je=pe[xe].image[q].image;t.texImage2D(34069+q,xe+1,$,Je.width,Je.height,0,A,J,Je.data)}}else{t.texImage2D(34069+q,0,$,A,J,ue[q]);for(let xe=0;xe<pe.length;xe++){let Ne=pe[xe];t.texImage2D(34069+q,xe+1,$,A,J,Ne.image[q])}}S.__maxMipLevel=pe.length}E(b,ye)&&M(34067,b,Fe.width,Fe.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function G(S,b,k,W){let ie=b.texture,ue=s.convert(ie.format),Fe=s.convert(ie.type),ye=T(ie.internalFormat,ue,Fe);W===32879||W===35866?t.texImage3D(W,0,ye,b.width,b.height,b.depth,0,ue,Fe,null):t.texImage2D(W,0,ye,b.width,b.height,0,ue,Fe,null),t.bindFramebuffer(36160,S),n.framebufferTexture2D(36160,k,W,i.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(S,b,k){if(n.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let W=33189;if(k){let ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Yt?W=36012:ie.type===cr&&(W=33190));let ue=ge(b);n.renderbufferStorageMultisample(36161,ue,W,b.width,b.height)}else n.renderbufferStorage(36161,W,b.width,b.height);n.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){if(k){let W=ge(b);n.renderbufferStorageMultisample(36161,W,35056,b.width,b.height)}else n.renderbufferStorage(36161,34041,b.width,b.height);n.framebufferRenderbuffer(36160,33306,36161,S)}else{let W=b.texture,ie=s.convert(W.format),ue=s.convert(W.type),Fe=T(W.internalFormat,ie,ue);if(k){let ye=ge(b);n.renderbufferStorageMultisample(36161,ye,Fe,b.width,b.height)}else n.renderbufferStorage(36161,Fe,b.width,b.height)}n.bindRenderbuffer(36161,null)}function ce(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);let W=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===Rn)n.framebufferTexture2D(36160,36096,3553,W,0);else if(b.depthTexture.format===yi)n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function ae(S){let b=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(b.__webglFramebuffer,S)}else if(k){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]=n.createRenderbuffer(),Ie(b.__webglDepthbuffer[W],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Ie(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function le(S){let b=S.texture,k=i.get(S),W=i.get(b);S.addEventListener("dispose",B),W.__webglTexture=n.createTexture(),W.__version=b.version,o.memory.textures++;let ie=S.isWebGLCubeRenderTarget===!0,ue=S.isWebGLMultisampleRenderTarget===!0,Fe=b.isDataTexture3D||b.isDataTexture2DArray,ye=g(S)||a;if(a&&b.format===gn&&(b.type===Yt||b.type===lr)&&(b.format=ft,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ie){k.__webglFramebuffer=[];for(let A=0;A<6;A++)k.__webglFramebuffer[A]=n.createFramebuffer()}else if(k.__webglFramebuffer=n.createFramebuffer(),ue)if(a){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,k.__webglColorRenderbuffer);let A=s.convert(b.format),J=s.convert(b.type),$=T(b.internalFormat,A,J),pe=ge(S);n.renderbufferStorageMultisample(36161,pe,$,S.width,S.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ie){t.bindTexture(34067,W.__webglTexture),re(34067,b,ye);for(let A=0;A<6;A++)G(k.__webglFramebuffer[A],S,36064,34069+A);E(b,ye)&&M(34067,b,S.width,S.height),t.bindTexture(34067,null)}else{let A=3553;Fe&&(a?A=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(A,W.__webglTexture),re(A,b,ye),G(k.__webglFramebuffer,S,36064,A),E(b,ye)&&M(3553,b,S.width,S.height),t.bindTexture(3553,null)}S.depthBuffer&&ae(S)}function Me(S){let b=S.texture,k=g(S)||a;if(E(b,k)){let W=S.isWebGLCubeRenderTarget?34067:3553,ie=i.get(b).__webglTexture;t.bindTexture(W,ie),M(W,b,S.width,S.height),t.bindTexture(W,null)}}function de(S){if(S.isWebGLMultisampleRenderTarget)if(a){let b=i.get(S);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);let k=S.width,W=S.height,ie=16384;S.depthBuffer&&(ie|=256),S.stencilBuffer&&(ie|=1024),n.blitFramebuffer(0,0,k,W,0,0,k,W,ie,9728),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ge(S){return a&&S.isWebGLMultisampleRenderTarget?Math.min(u,S.samples):0}function j(S){let b=o.render.frame;f.get(S)!==b&&(f.set(S,b),S.update())}let Z=!1,Q=!1;function he(S,b){S&&S.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),S=S.texture),L(S,b)}function ne(S,b){S&&S.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),S=S.texture),X(S,b)}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=L,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=X,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=de,this.safeSetTexture2D=he,this.safeSetTextureCube=ne}function Xm(n,e,t){let i=t.isWebGL2;function r(s){let o;if(s===xs)return 5121;if(s===Pu)return 32819;if(s===Du)return 32820;if(s===Iu)return 33635;if(s===Lu)return 5120;if(s===Ru)return 5122;if(s===ar)return 5123;if(s===Cu)return 5124;if(s===cr)return 5125;if(s===Yt)return 5126;if(s===lr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fu)return 6406;if(s===gn)return 6407;if(s===ft)return 6408;if(s===Bu)return 6409;if(s===Nu)return 6410;if(s===Rn)return 6402;if(s===yi)return 34041;if(s===zu)return 6403;if(s===Ou)return 36244;if(s===Uu)return 33319;if(s===Hu)return 33320;if(s===Gu)return 36248;if(s===ku)return 36249;if(s===da||s===pa||s===ma||s===ga)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xa||s===ya||s===va||s===_a)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===wa||s===ba)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===wa)return o.COMPRESSED_RGB8_ETC2;if(s===ba)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Wu||s===qu||s===Xu||s===ju||s===Yu||s===Zu||s===Ju||s===Qu||s===$u||s===Ku||s===eh||s===th||s===nh||s===ih||s===sh||s===oh||s===ah||s===ch||s===lh||s===uh||s===hh||s===fh||s===dh||s===ph||s===mh||s===gh||s===xh||s===yh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===rh)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===xi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}var ro=class extends at{constructor(e=[]){super();this.cameras=e}};ro.prototype.isArrayCamera=!0;var Pt=class extends we{constructor(){super();this.type="Group"}};Pt.prototype.isGroup=!0;function Di(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Di.prototype,{constructor:Di,getHandSpace:function(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),c&&n.hand){s=!0;for(let m of n.hand.values()){let x=e.getJointPose(m,t);if(c.joints[m.jointName]===void 0){let g=new Pt;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[m.jointName]=g,c.add(g)}let y=c.joints[m.jointName];x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=x.radius),y.visible=x!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),f=.02,d=.005;c.inputState.pinching&&u>f+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&u<=f-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function dc(n,e){let t=this,i=n.state,r=null,s=1,o=null,a="local-floor",c=null,l=[],h=new Map,u=new at;u.layers.enable(1),u.viewport=new Oe;let f=new at;f.layers.enable(2),f.viewport=new Oe;let d=[u,f],m=new ro;m.layers.enable(1),m.layers.enable(2);let x=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let U=l[R];return U===void 0&&(U=new Di,l[R]=U),U.getTargetRaySpace()},this.getControllerGrip=function(R){let U=l[R];return U===void 0&&(U=new Di,l[R]=U),U.getGripSpace()},this.getHand=function(R){let U=l[R];return U===void 0&&(U=new Di,l[R]=U),U.getHandSpace()};function g(R){let U=h.get(R.inputSource);U&&U.dispatchEvent({type:R.type,data:R.inputSource})}function p(){h.forEach(function(R,U){R.disconnect(U)}),h.clear(),x=null,y=null,i.bindXRFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),O.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){r.addEventListener("select",g),r.addEventListener("selectstart",g),r.addEventListener("selectend",g),r.addEventListener("squeeze",g),r.addEventListener("squeezestart",g),r.addEventListener("squeezeend",g),r.addEventListener("end",p),r.addEventListener("inputsourceschange",E);let U=e.getContextAttributes();U.xrCompatible!==!0&&await e.makeXRCompatible();let P={antialias:U.antialias,alpha:U.alpha,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:s},L=new XRWebGLLayer(r,e,P);r.updateRenderState({baseLayer:L}),o=await r.requestReferenceSpace(a),O.setContext(r),O.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function E(R){let U=r.inputSources;for(let P=0;P<l.length;P++)h.set(U[P],l[P]);for(let P=0;P<R.removed.length;P++){let L=R.removed[P],F=h.get(L);F&&(F.dispatchEvent({type:"disconnected",data:L}),h.delete(L))}for(let P=0;P<R.added.length;P++){let L=R.added[P],F=h.get(L);F&&F.dispatchEvent({type:"connected",data:L})}}let M=new _,T=new _;function v(R,U,P){M.setFromMatrixPosition(U.matrixWorld),T.setFromMatrixPosition(P.matrixWorld);let L=M.distanceTo(T),F=U.projectionMatrix.elements,I=P.projectionMatrix.elements,X=F[14]/(F[10]-1),ee=F[14]/(F[10]+1),Y=(F[9]+1)/F[5],re=(F[9]-1)/F[5],se=(F[8]-1)/F[0],me=(I[8]+1)/I[0],be=X*se,G=X*me,Ie=L/(-se+me),ce=Ie*-se;U.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ce),R.translateZ(Ie),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();let ae=X+Ie,le=ee+Ie,Me=be-ce,de=G+(L-ce),ge=Y*ee/le*ae,j=re*ee/le*ae;R.projectionMatrix.makePerspective(Me,de,ge,j,ae,le)}function C(R,U){U===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(U.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.getCamera=function(R){m.near=f.near=u.near=R.near,m.far=f.far=u.far=R.far,(x!==m.near||y!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),x=m.near,y=m.far);let U=R.parent,P=m.cameras;C(m,U);for(let F=0;F<P.length;F++)C(P[F],U);R.matrixWorld.copy(m.matrixWorld),R.matrix.copy(m.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);let L=R.children;for(let F=0,I=L.length;F<I;F++)L[F].updateMatrixWorld(!0);return P.length===2?v(m,u,f):m.projectionMatrix.copy(u.projectionMatrix),m};let B=null;function D(R,U){if(c=U.getViewerPose(o),c!==null){let L=c.views,F=r.renderState.baseLayer;i.bindXRFramebuffer(F.framebuffer);let I=!1;L.length!==m.cameras.length&&(m.cameras.length=0,I=!0);for(let X=0;X<L.length;X++){let ee=L[X],Y=F.getViewport(ee),re=d[X];re.matrix.fromArray(ee.transform.matrix),re.projectionMatrix.fromArray(ee.projectionMatrix),re.viewport.set(Y.x,Y.y,Y.width,Y.height),X===0&&m.matrix.copy(re.matrix),I===!0&&m.cameras.push(re)}}let P=r.inputSources;for(let L=0;L<l.length;L++){let F=l[L],I=P[L];F.update(I,U,o)}B&&B(R,U)}let O=new Wa;O.setAnimationLoop(D),this.setAnimationLoop=function(R){B=R},this.dispose=function(){}}Object.assign(dc.prototype,Zt.prototype);function jm(n){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,E,M){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),c(g,p)):p.isMeshToonMaterial?(i(g,p),h(g,p)):p.isMeshPhongMaterial?(i(g,p),l(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?f(g,p):u(g,p)):p.isMeshMatcapMaterial?(i(g,p),d(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),x(g,p)):p.isMeshNormalMaterial?(i(g,p),y(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,E,M):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);let E=n.get(p).envMap;if(E){g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture&&E._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;let v=n.get(E).__maxMipLevel;v!==void 0&&(g.maxMipLevel.value=v)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(M=p.clearcoatRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uv2Transform.value.copy(T.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,E,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=M*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function c(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),n.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ke&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function d(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function x(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function y(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Ym(){let n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function Ue(n){n=n||{};let e=n.canvas!==void 0?n.canvas:Ym(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",h=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,u=null,f=null,d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Dn,this.physicallyCorrectLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;let x=this,y=!1,g=0,p=0,E=null,M=-1,T=null,v=new Oe,C=new Oe,B=null,D=e.width,O=e.height,R=1,U=null,P=null,L=new Oe(0,0,D,O),F=new Oe(0,0,D,O),I=!1,X=new Ri,ee=!1,Y=!1,re=new fe,se=new _,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return E===null?R:1}let G=t;function Ie(w,z){for(let N=0;N<w.length;N++){let H=w[N],te=e.getContext(H,z);if(te!==null)return te}return null}try{let w={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Ne,!1),G===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),G=Ie(z,w),G===null)throw Ie(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ce,ae,le,Me,de,ge,j,Z,Q,he,ne,S,b,k,W,ie,ue,Fe,ye,A,J,$;function pe(){ce=new yp(G),ae=new mp(G,ce,n),ce.init(ae),J=new Xm(G,ce,ae),le=new Wm(G,ce,ae),Me=new wp(G),de=new Dm,ge=new qm(G,ce,le,de,ae,J,Me),j=new xp(x),Z=new Vh(G,ae),$=new dp(G,ce,Z,ae),Q=new vp(G,Z,Me,$),he=new Ep(G,Q,Z,Me),Fe=new Sp(G),W=new gp(de),ne=new Pm(x,j,ce,ae,$,W),S=new jm(de),b=new Bm(de),k=new Gm(ce,ae),ue=new fp(x,j,le,he,a),ie=new fc(x,he,ae),ye=new pp(G,ce,Me,ae),A=new _p(G,ce,Me,ae),Me.programs=ne.programs,x.capabilities=ae,x.extensions=ce,x.properties=de,x.renderLists=b,x.shadowMap=ie,x.state=le,x.info=Me}pe();let q=new dc(x,G);this.xr=q,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(w){w!==void 0&&(R=w,this.setSize(D,O,!1))},this.getSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),w=new V),w.set(D,O)},this.setSize=function(w,z,N){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,O=z,e.width=Math.floor(w*R),e.height=Math.floor(z*R),N!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),w=new V),w.set(D*R,O*R).floor()},this.setDrawingBufferSize=function(w,z,N){D=w,O=z,R=N,e.width=Math.floor(w*N),e.height=Math.floor(z*N),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),w=new Oe),w.copy(v)},this.getViewport=function(w){return w.copy(L)},this.setViewport=function(w,z,N,H){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,z,N,H),le.viewport(v.copy(L).multiplyScalar(R).floor())},this.getScissor=function(w){return w.copy(F)},this.setScissor=function(w,z,N,H){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,z,N,H),le.scissor(C.copy(F).multiplyScalar(R).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(w){le.setScissorTest(I=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),w=new oe),w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(w,z,N){let H=0;(w===void 0||w)&&(H|=16384),(z===void 0||z)&&(H|=256),(N===void 0||N)&&(H|=1024),G.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Ne,!1),b.dispose(),k.dispose(),de.dispose(),j.dispose(),he.dispose(),$.dispose(),q.dispose(),q.removeEventListener("sessionstart",qo),q.removeEventListener("sessionend",Xo),dn.stop()};function xe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=Me.autoReset,z=ie.enabled,N=ie.autoUpdate,H=ie.needsUpdate,te=ie.type;pe(),Me.autoReset=w,ie.enabled=z,ie.autoUpdate=N,ie.needsUpdate=H,ie.type=te}function Je(w){let z=w.target;z.removeEventListener("dispose",Je),fn(z)}function fn(w){Ye(w),de.remove(w)}function Ye(w){let z=de.get(w).programs;z!==void 0&&z.forEach(function(N){ne.releaseProgram(N)})}function Ut(w,z){w.render(function(N){x.renderBufferImmediate(N,z)})}this.renderBufferImmediate=function(w,z){$.initAttributes();let N=de.get(w);w.hasPositions&&!N.position&&(N.position=G.createBuffer()),w.hasNormals&&!N.normal&&(N.normal=G.createBuffer()),w.hasUvs&&!N.uv&&(N.uv=G.createBuffer()),w.hasColors&&!N.color&&(N.color=G.createBuffer());let H=z.getAttributes();w.hasPositions&&(G.bindBuffer(34962,N.position),G.bufferData(34962,w.positionArray,35048),$.enableAttribute(H.position),G.vertexAttribPointer(H.position,3,5126,!1,0,0)),w.hasNormals&&(G.bindBuffer(34962,N.normal),G.bufferData(34962,w.normalArray,35048),$.enableAttribute(H.normal),G.vertexAttribPointer(H.normal,3,5126,!1,0,0)),w.hasUvs&&(G.bindBuffer(34962,N.uv),G.bufferData(34962,w.uvArray,35048),$.enableAttribute(H.uv),G.vertexAttribPointer(H.uv,2,5126,!1,0,0)),w.hasColors&&(G.bindBuffer(34962,N.color),G.bufferData(34962,w.colorArray,35048),$.enableAttribute(H.color),G.vertexAttribPointer(H.color,3,5126,!1,0,0)),$.disableUnusedAttributes(),G.drawArrays(4,0,w.count),w.count=0},this.renderBufferDirect=function(w,z,N,H,te,De){z===null&&(z=me);let ve=te.isMesh&&te.matrixWorld.determinant()<0,Te=Qo(w,z,H,te);le.setMaterial(H,ve);let He=N.index,Se=N.attributes.position;if(He===null){if(Se===void 0||Se.count===0)return}else if(He.count===0)return;let Be=1;H.wireframe===!0&&(He=Q.getWireframeAttribute(N),Be=2),(H.morphTargets||H.morphNormals)&&Fe.update(te,N,H,Te),$.setup(te,H,Te,N,He);let _e,ze=ye;He!==null&&(_e=Z.get(He),ze=A,ze.setIndex(_e));let Bt=He!==null?He.count:Se.count,ut=N.drawRange.start*Be,pn=N.drawRange.count*Be,$e=De!==null?De.start*Be:0,mn=De!==null?De.count*Be:Infinity,Qe=Math.max(ut,$e),cs=Math.min(Bt,ut+pn,$e+mn)-1,mt=Math.max(0,cs-Qe+1);if(mt!==0){if(te.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*be()),ze.setMode(1)):ze.setMode(4);else if(te.isLine){let Ht=H.linewidth;Ht===void 0&&(Ht=1),le.setLineWidth(Ht*be()),te.isLineSegments?ze.setMode(1):te.isLineLoop?ze.setMode(2):ze.setMode(3)}else te.isPoints?ze.setMode(0):te.isSprite&&ze.setMode(4);if(te.isInstancedMesh)ze.renderInstances(Qe,mt,te.count);else if(N.isInstancedBufferGeometry){let Ht=Math.min(N.instanceCount,N._maxInstanceCount);ze.renderInstances(Qe,mt,Ht)}else ze.render(Qe,mt)}},this.compile=function(w,z){f=k.get(w),f.init(),w.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(),w.traverse(function(N){let H=N.material;if(H)if(Array.isArray(H))for(let te=0;te<H.length;te++){let De=H[te];as(De,w,N)}else as(H,w,N)})};let Tt=null;function Zl(w){Tt&&Tt(w)}function qo(){dn.stop()}function Xo(){dn.start()}let dn=new Wa;dn.setAnimationLoop(Zl),typeof window!="undefined"&&dn.setContext(window),this.setAnimationLoop=function(w){Tt=w,q.setAnimationLoop(w),w===null?dn.stop():dn.start()},q.addEventListener("sessionstart",qo),q.addEventListener("sessionend",Xo),this.render=function(w,z){let N,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(z=q.getCamera(z)),w.isScene===!0&&w.onBeforeRender(x,w,z,N||E),f=k.get(w,m.length),f.init(),m.push(f),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(re),Y=this.localClippingEnabled,ee=W.init(this.clippingPlanes,Y,z),u=b.get(w,d.length),u.init(),d.push(u),jo(w,z,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(U,P),ee===!0&&W.beginShadows();let te=f.state.shadowsArray;ie.render(te,w,z),f.setupLights(),f.setupLightsView(z),ee===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),ue.render(u,w,z,H);let De=u.opaque,ve=u.transparent;De.length>0&&Yo(De,w,z),ve.length>0&&Yo(ve,w,z),E!==null&&(ge.updateRenderTargetMipmap(E),ge.updateMultisampleRenderTarget(E)),w.isScene===!0&&w.onAfterRender(x,w,z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1),$.resetDefaultState(),M=-1,T=null,m.pop(),m.length>0?f=m[m.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function jo(w,z,N,H){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)N=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){H&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);let ve=he.update(w),Te=w.material;Te.visible&&u.push(w,ve,Te,N,se.z,null)}}else if(w.isImmediateRenderObject)H&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re),u.push(w,null,w.material,N,se.z,null);else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Me.render.frame&&(w.skeleton.update(),w.skeleton.frame=Me.render.frame),!w.frustumCulled||X.intersectsObject(w))){H&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);let ve=he.update(w),Te=w.material;if(Array.isArray(Te)){let He=ve.groups;for(let Se=0,Be=He.length;Se<Be;Se++){let _e=He[Se],ze=Te[_e.materialIndex];ze&&ze.visible&&u.push(w,ve,ze,N,se.z,_e)}}else Te.visible&&u.push(w,ve,Te,N,se.z,null)}}let De=w.children;for(let ve=0,Te=De.length;ve<Te;ve++)jo(De[ve],z,N,H)}function Yo(w,z,N){let H=z.isScene===!0?z.overrideMaterial:null;for(let te=0,De=w.length;te<De;te++){let ve=w[te],Te=ve.object,He=ve.geometry,Se=H===null?ve.material:H,Be=ve.group;if(N.isArrayCamera){let _e=N.cameras;for(let ze=0,Bt=_e.length;ze<Bt;ze++){let ut=_e[ze];Te.layers.test(ut.layers)&&(le.viewport(v.copy(ut.viewport)),f.setupLightsView(ut),Zo(Te,z,ut,He,Se,Be))}}else Zo(Te,z,N,He,Se,Be)}}function Zo(w,z,N,H,te,De){if(w.onBeforeRender(x,z,N,H,te,De),w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),w.isImmediateRenderObject){let ve=Qo(N,z,te,w);le.setMaterial(te),$.reset(),Ut(w,ve)}else x.renderBufferDirect(N,z,H,te,w,De);w.onAfterRender(x,z,N,H,te,De)}function as(w,z,N){z.isScene!==!0&&(z=me);let H=de.get(w),te=f.state.lights,De=f.state.shadowsArray,ve=te.state.version,Te=ne.getParameters(w,te.state,De,z,N),He=ne.getProgramCacheKey(Te),Se=H.programs;H.environment=w.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=j.get(w.envMap||H.environment),Se===void 0&&(w.addEventListener("dispose",Je),Se=new Map,H.programs=Se);let Be=Se.get(He);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===ve)return Jo(w,Te),Be}else Te.uniforms=ne.getUniforms(w),w.onBeforeCompile(Te,x),Be=ne.acquireProgram(Te,He),Se.set(He,Be),H.uniforms=Te.uniforms;let _e=H.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_e.clippingPlanes=W.uniform),Jo(w,Te),H.needsLights=Ql(w),H.lightsStateVersion=ve,H.needsLights&&(_e.ambientLightColor.value=te.state.ambient,_e.lightProbe.value=te.state.probe,_e.directionalLights.value=te.state.directional,_e.directionalLightShadows.value=te.state.directionalShadow,_e.spotLights.value=te.state.spot,_e.spotLightShadows.value=te.state.spotShadow,_e.rectAreaLights.value=te.state.rectArea,_e.ltc_1.value=te.state.rectAreaLTC1,_e.ltc_2.value=te.state.rectAreaLTC2,_e.pointLights.value=te.state.point,_e.pointLightShadows.value=te.state.pointShadow,_e.hemisphereLights.value=te.state.hemi,_e.directionalShadowMap.value=te.state.directionalShadowMap,_e.directionalShadowMatrix.value=te.state.directionalShadowMatrix,_e.spotShadowMap.value=te.state.spotShadowMap,_e.spotShadowMatrix.value=te.state.spotShadowMatrix,_e.pointShadowMap.value=te.state.pointShadowMap,_e.pointShadowMatrix.value=te.state.pointShadowMatrix);let ze=Be.getUniforms(),Bt=sn.seqWithValue(ze.seq,_e);return H.currentProgram=Be,H.uniformsList=Bt,Be}function Jo(w,z){let N=de.get(w);N.outputEncoding=z.outputEncoding,N.instancing=z.instancing,N.numClippingPlanes=z.numClippingPlanes,N.numIntersection=z.numClipIntersection,N.vertexAlphas=z.vertexAlphas}function Qo(w,z,N,H){z.isScene!==!0&&(z=me),ge.resetTextureUnits();let te=z.fog,De=N.isMeshStandardMaterial?z.environment:null,ve=E===null?x.outputEncoding:E.texture.encoding,Te=j.get(N.envMap||De),He=N.vertexColors===!0&&H.geometry.attributes.color&&H.geometry.attributes.color.itemSize===4,Se=de.get(N),Be=f.state.lights;if(ee===!0&&(Y===!0||w!==T)){let Qe=w===T&&N.id===M;W.setState(N,w,Qe)}let _e=!1;N.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Be.state.version||Se.outputEncoding!==ve||H.isInstancedMesh&&Se.instancing===!1||!H.isInstancedMesh&&Se.instancing===!0||Se.envMap!==Te||N.fog&&Se.fog!==te||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==W.numPlanes||Se.numIntersection!==W.numIntersection)||Se.vertexAlphas!==He)&&(_e=!0):(_e=!0,Se.__version=N.version);let ze=Se.currentProgram;_e===!0&&(ze=as(N,z,H));let Bt=!1,ut=!1,pn=!1,$e=ze.getUniforms(),mn=Se.uniforms;if(le.useProgram(ze.program)&&(Bt=!0,ut=!0,pn=!0),N.id!==M&&(M=N.id,ut=!0),Bt||T!==w){if($e.setValue(G,"projectionMatrix",w.projectionMatrix),ae.logarithmicDepthBuffer&&$e.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),T!==w&&(T=w,ut=!0,pn=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){let Qe=$e.map.cameraPosition;Qe!==void 0&&Qe.setValue(G,se.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&$e.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&$e.setValue(G,"viewMatrix",w.matrixWorldInverse)}if(N.skinning){$e.setOptional(G,H,"bindMatrix"),$e.setOptional(G,H,"bindMatrixInverse");let Qe=H.skeleton;if(Qe){let cs=Qe.bones;if(ae.floatVertexTextures){if(Qe.boneTexture===null){let mt=Math.sqrt(cs.length*4);mt=Ee.ceilPowerOfTwo(mt),mt=Math.max(mt,4);let Ht=new Float32Array(mt*mt*4);Ht.set(Qe.boneMatrices);let $l=new Dr(Ht,mt,mt,ft,Yt);Qe.boneMatrices=Ht,Qe.boneTexture=$l,Qe.boneTextureSize=mt}$e.setValue(G,"boneTexture",Qe.boneTexture,ge),$e.setValue(G,"boneTextureSize",Qe.boneTextureSize)}else $e.setOptional(G,Qe,"boneMatrices")}}return(ut||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,$e.setValue(G,"receiveShadow",H.receiveShadow)),ut&&($e.setValue(G,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&Jl(mn,pn),te&&N.fog&&S.refreshFogUniforms(mn,te),S.refreshMaterialUniforms(mn,N,R,O),sn.upload(G,Se.uniformsList,mn,ge)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(sn.upload(G,Se.uniformsList,mn,ge),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&$e.setValue(G,"center",H.center),$e.setValue(G,"modelViewMatrix",H.modelViewMatrix),$e.setValue(G,"normalMatrix",H.normalMatrix),$e.setValue(G,"modelMatrix",H.matrixWorld),ze}function Jl(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Ql(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return E},this.setRenderTarget=function(w,z=0,N=0){E=w,g=z,p=N,w&&de.get(w).__webglFramebuffer===void 0&&ge.setupRenderTarget(w);let H=null,te=!1,De=!1;if(w){let ve=w.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(De=!0);let Te=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(H=Te[z],te=!0):w.isWebGLMultisampleRenderTarget?H=de.get(w).__webglMultisampledFramebuffer:H=Te,v.copy(w.viewport),C.copy(w.scissor),B=w.scissorTest}else v.copy(L).multiplyScalar(R).floor(),C.copy(F).multiplyScalar(R).floor(),B=I;if(le.bindFramebuffer(36160,H),le.viewport(v),le.scissor(C),le.setScissorTest(B),te){let ve=de.get(w.texture);G.framebufferTexture2D(36160,36064,34069+z,ve.__webglTexture,N)}else if(De){let ve=de.get(w.texture),Te=z||0;G.framebufferTextureLayer(36160,36064,ve.__webglTexture,N||0,Te)}},this.readRenderTargetPixels=function(w,z,N,H,te,De,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){le.bindFramebuffer(36160,Te);try{let He=w.texture,Se=He.format,Be=He.type;if(Se!==ft&&J.convert(Se)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let _e=Be===lr&&(ce.has("EXT_color_buffer_half_float")||ae.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Be!==xs&&J.convert(Be)!==G.getParameter(35738)&&!(Be===Yt&&(ae.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!_e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?z>=0&&z<=w.width-H&&N>=0&&N<=w.height-te&&G.readPixels(z,N,H,te,J.convert(Se),J.convert(Be),De):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let He=E!==null?de.get(E).__webglFramebuffer:null;le.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(w,z,N=0){let H=Math.pow(2,-N),te=Math.floor(z.image.width*H),De=Math.floor(z.image.height*H),ve=J.convert(z.format);ge.setTexture2D(z,0),G.copyTexImage2D(3553,N,ve,w.x,w.y,te,De,0),le.unbindTexture()},this.copyTextureToTexture=function(w,z,N,H=0){let te=z.image.width,De=z.image.height,ve=J.convert(N.format),Te=J.convert(N.type);ge.setTexture2D(N,0),G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,H,w.x,w.y,te,De,ve,Te,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,H,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,ve,z.mipmaps[0].data):G.texSubImage2D(3553,H,w.x,w.y,ve,Te,z.image),H===0&&N.generateMipmaps&&G.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(w,z,N,H,te=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:De,height:ve,data:Te}=N.image,He=J.convert(H.format),Se=J.convert(H.type),Be;if(H.isDataTexture3D)ge.setTexture3D(H,0),Be=32879;else if(H.isDataTexture2DArray)ge.setTexture2DArray(H,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment);let _e=G.getParameter(3314),ze=G.getParameter(32878),Bt=G.getParameter(3316),ut=G.getParameter(3315),pn=G.getParameter(32877);G.pixelStorei(3314,De),G.pixelStorei(32878,ve),G.pixelStorei(3316,w.min.x),G.pixelStorei(3315,w.min.y),G.pixelStorei(32877,w.min.z),G.texSubImage3D(Be,te,z.x,z.y,z.z,w.max.x-w.min.x+1,w.max.y-w.min.y+1,w.max.z-w.min.z+1,He,Se,Te),G.pixelStorei(3314,_e),G.pixelStorei(32878,ze),G.pixelStorei(3316,Bt),G.pixelStorei(3315,ut),G.pixelStorei(32877,pn),te===0&&H.generateMipmaps&&G.generateMipmap(Be),le.unbindTexture()},this.initTexture=function(w){ge.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){g=0,p=0,E=null,le.reset(),$.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var pc=class extends Ue{};pc.prototype.isWebGL1Renderer=!0;var Kn=class{constructor(e,t=25e-5){this.name="",this.color=new oe(e),this.density=t}clone(){return new Kn(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Kn.prototype.isFogExp2=!0;var Fr=class{constructor(e,t=1,i=1e3){this.name="",this.color=new oe(e),this.near=t,this.far=i}clone(){return new Fr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Fr.prototype.isFog=!0;var Ii=class extends we{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Ii.prototype.isScene=!0;function Mt(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=_i,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ee.generateUUID()}Object.defineProperty(Mt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Mt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ee.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new Mt(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ee.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Ze=new _;function Fi(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(Fi.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(Fi.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.applyMatrix4(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.applyNormalMatrix(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.transformDirection(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new Fi(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});var so=class extends Xe{constructor(e){super();this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};so.prototype.isSpriteMaterial=!0;var ei,Bi=new _,ti=new _,ni=new _,ii=new V,Ni=new V,mc=new fe,Br=new _,zi=new _,Nr=new _,gc=new V,oo=new V,xc=new V,yc=class extends we{constructor(e){super();if(this.type="Sprite",ei===void 0){ei=new Re;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mt(t,5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute("position",new Fi(i,3,0,!1)),ei.setAttribute("uv",new Fi(i,2,3,!1))}this.geometry=ei,this.material=e!==void 0?e:new so,this.center=new V(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ti.setFromMatrixScale(this.matrixWorld),mc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ti.multiplyScalar(-ni.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;zr(Br.set(-.5,-.5,0),ni,o,ti,r,s),zr(zi.set(.5,-.5,0),ni,o,ti,r,s),zr(Nr.set(.5,.5,0),ni,o,ti,r,s),gc.set(0,0),oo.set(1,0),xc.set(1,1);let a=e.ray.intersectTriangle(Br,zi,Nr,!1,Bi);if(a===null&&(zr(zi.set(-.5,.5,0),ni,o,ti,r,s),oo.set(0,1),a=e.ray.intersectTriangle(Br,Nr,zi,!1,Bi),a===null))return;let c=e.ray.origin.distanceTo(Bi);c<e.near||c>e.far||t.push({distance:c,point:Bi.clone(),uv:qe.getUV(Bi,Br,zi,Nr,gc,oo,xc,new V),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};yc.prototype.isSprite=!0;function zr(n,e,t,i,r,s){ii.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ni.x=s*ii.x-r*ii.y,Ni.y=r*ii.x+s*ii.y):Ni.copy(ii),n.copy(e),n.x+=Ni.x,n.y+=Ni.y,n.applyMatrix4(mc)}var vc=new _,_c=new Oe,wc=new Oe,Zm=new _,bc=new fe;function ao(n,e){Pe.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new fe,this.bindMatrixInverse=new fe}ao.prototype=Object.assign(Object.create(Pe.prototype),{constructor:ao,isSkinnedMesh:!0,copy:function(n){return Pe.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let n=new Oe,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);let r=1/n.manhattanLength();r!==Infinity?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){Pe.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){let t=this.skeleton,i=this.geometry;_c.fromBufferAttribute(i.attributes.skinIndex,n),wc.fromBufferAttribute(i.attributes.skinWeight,n),vc.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=wc.getComponent(r);if(s!==0){let o=_c.getComponent(r);bc.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(Zm.copy(vc).applyMatrix4(bc),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function Mc(){we.call(this),this.type="Bone"}Mc.prototype=Object.assign(Object.create(we.prototype),{constructor:Mc,isBone:!0});var Sc=new fe,Ec=new fe,Or=[],Oi=new Pe;function Tc(n,e,t){Pe.call(this,n,e),this.instanceMatrix=new Le(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}Tc.prototype=Object.assign(Object.create(Pe.prototype),{constructor:Tc,isInstancedMesh:!0,copy:function(n){return Pe.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){let t=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Sc),Ec.multiplyMatrices(t,Sc),Oi.matrixWorld=Ec,Oi.raycast(n,Or);for(let s=0,o=Or.length;s<o;s++){let a=Or[s];a.instanceId=r,a.object=this,e.push(a)}Or.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new Le(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});var ri=class extends Xe{constructor(e){super();this.type="LineBasicMaterial",this.color=new oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};ri.prototype.isLineBasicMaterial=!0;var Ac=new _,Lc=new _,Rc=new fe,co=new Kt,Ur=new vn;function Ui(n=new Re,e=new ri){we.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}Ui.prototype=Object.assign(Object.create(we.prototype),{constructor:Ui,isLine:!0,copy:function(n){return we.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){let n=this.geometry;if(n.isBufferGeometry)if(n.index===null){let e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)Ac.fromBufferAttribute(e,i-1),Lc.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=Ac.distanceTo(Lc);n.setAttribute("lineDistance",new Ae(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,n.ray.intersectsSphere(Ur)===!1)return;Rc.copy(i).invert(),co.copy(n.ray).applyMatrix4(Rc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=new _,l=new _,h=new _,u=new _,f=this.isLineSegments?2:1;if(t.isBufferGeometry){let d=t.index,x=t.attributes.position;if(d!==null){let y=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let p=y,E=g-1;p<E;p+=f){let M=d.getX(p),T=d.getX(p+1);if(c.fromBufferAttribute(x,M),l.fromBufferAttribute(x,T),co.distanceSqToSegment(c,l,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);let C=n.ray.origin.distanceTo(u);C<n.near||C>n.far||e.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{let y=Math.max(0,s.start),g=Math.min(x.count,s.start+s.count);for(let p=y,E=g-1;p<E;p+=f){if(c.fromBufferAttribute(x,p),l.fromBufferAttribute(x,p+1),co.distanceSqToSegment(c,l,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);let T=n.ray.origin.distanceTo(u);T<n.near||T>n.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Cc=new _,Pc=new _;function Hr(n,e){Ui.call(this,n,e),this.type="LineSegments"}Hr.prototype=Object.assign(Object.create(Ui.prototype),{constructor:Hr,isLineSegments:!0,computeLineDistances:function(){let n=this.geometry;if(n.isBufferGeometry)if(n.index===null){let e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)Cc.fromBufferAttribute(e,i),Pc.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+Cc.distanceTo(Pc);n.setAttribute("lineDistance",new Ae(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});var Dc=class extends Ui{constructor(e,t){super(e,t);this.type="LineLoop"}};Dc.prototype.isLineLoop=!0;var lo=class extends Xe{constructor(e){super();this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};lo.prototype.isPointsMaterial=!0;var Ic=new fe,uo=new Kt,Gr=new vn,kr=new _;function Fc(n=new Re,e=new lo){we.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}Fc.prototype=Object.assign(Object.create(we.prototype),{constructor:Fc,isPoints:!0,copy:function(n){return we.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,n.ray.intersectsSphere(Gr)===!1)return;Ic.copy(i).invert(),uo.copy(n.ray).applyMatrix4(Ic);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o;if(t.isBufferGeometry){let c=t.index,h=t.attributes.position;if(c!==null){let u=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let d=u,m=f;d<m;d++){let x=c.getX(d);kr.fromBufferAttribute(h,x),Bc(kr,x,a,i,n,e,this)}}else{let u=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let d=u,m=f;d<m;d++)kr.fromBufferAttribute(h,d),Bc(kr,d,a,i,n,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Bc(n,e,t,i,r,s,o){let a=uo.distanceSqToPoint(n);if(a<t){let c=new _;uo.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Nc=class extends tt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l);this.format=a!==void 0?a:gn,this.minFilter=o!==void 0?o:We,this.magFilter=s!==void 0?s:We,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Nc.prototype.isVideoTexture=!0;var ho=class extends tt{constructor(e,t,i,r,s,o,a,c,l,h,u,f){super(null,o,a,c,l,h,r,s,u,f);this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};ho.prototype.isCompressedTexture=!0;var zc=class extends tt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l);this.needsUpdate=!0}};zc.prototype.isCanvasTexture=!0;var Oc=class extends tt{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:Rn,h!==Rn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rn&&(i=ar),i===void 0&&h===yi&&(i=xi),super(null,r,s,o,a,c,h,i,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1}};Oc.prototype.isDepthTexture=!0;var Uc=class extends Re{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],m=0,x=[],y=i/2,g=0;p(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function p(){let M=new _,T=new _,v=0,C=(t-e)/i;for(let B=0;B<=s;B++){let D=[],O=B/s,R=O*(t-e)+e;for(let U=0;U<=r;U++){let P=U/r,L=P*c+a,F=Math.sin(L),I=Math.cos(L);T.x=R*F,T.y=-O*i+y,T.z=R*I,u.push(T.x,T.y,T.z),M.set(F,C,I).normalize(),f.push(M.x,M.y,M.z),d.push(P,1-O),D.push(m++)}x.push(D)}for(let B=0;B<r;B++)for(let D=0;D<s;D++){let O=x[D][B],R=x[D+1][B],U=x[D+1][B+1],P=x[D][B+1];h.push(O,R,P),h.push(R,U,P),v+=6}l.addGroup(g,v,0),g+=v}function E(M){let T=m,v=new V,C=new _,B=0,D=M===!0?e:t,O=M===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,y*O,0),f.push(0,O,0),d.push(.5,.5),m++;let R=m;for(let U=0;U<=r;U++){let L=U/r*c+a,F=Math.cos(L),I=Math.sin(L);C.x=D*I,C.y=y*O,C.z=D*F,u.push(C.x,C.y,C.z),f.push(0,O,0),v.x=F*.5+.5,v.y=I*.5*O+.5,d.push(v.x,v.y),m++}for(let U=0;U<r;U++){let P=T+U,L=R+U;M===!0?h.push(L,L+1,P):h.push(L+1,L,P),B+=3}l.addGroup(g,B,M===!0?1:2),g+=B}}},fo=class extends Uc{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}};var Qg=new _,$g=new _,Kg=new _,ex=new qe;var Jm={triangulate:function(n,e,t){t=t||2;let i=e&&e.length,r=i?e[0]*t:n.length,s=Hc(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,f,d;if(i&&(s=tg(n,e,s,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let m=t;m<r;m+=t)u=n[m],f=n[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?1/d:0}return Hi(s,o,t,a,c,d),o}};function Hc(n,e,t,i,r){let s,o;if(r===fg(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Vc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Vc(s,n[s],n[s+1],o);return o&&Vr(o,o.next)&&(ki(o),o=o.next),o}function on(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vr(t,t.next)||je(t.prev,t,t.next)===0)){if(ki(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hi(n,e,t,i,r,s,o){if(!n)return;!o&&s&&og(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?$m(n,i,r,s):Qm(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),ki(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Km(on(n),e,t),Hi(n,e,t,i,r,s,2)):o===2&&eg(n,e,t,i,r,s):Hi(on(n),e,t,i,r,s,1);break}}}function Qm(n){let e=n.prev,t=n,i=n.next;if(je(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(si(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&je(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function $m(n,e,t,i){let r=n.prev,s=n,o=n.next;if(je(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=po(a,c,e,t,i),f=po(l,h,e,t,i),d=n.prevZ,m=n.nextZ;for(;d&&d.z>=u&&m&&m.z<=f;){if(d!==n.prev&&d!==n.next&&si(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&je(d.prev,d,d.next)>=0||(d=d.prevZ,m!==n.prev&&m!==n.next&&si(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=u;){if(d!==n.prev&&d!==n.next&&si(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&je(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=f;){if(m!==n.prev&&m!==n.next&&si(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Km(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Vr(r,s)&&Gc(r,i,i.next,s)&&Gi(r,s)&&Gi(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),ki(i),ki(i.next),i=n=s),i=i.next}while(i!==n);return on(i)}function eg(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lg(o,a)){let c=kc(o,a);o=on(o,o.next),c=on(c,c.next),Hi(o,e,t,i,r,s),Hi(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function tg(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Hc(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(cg(l));for(r.sort(ng),s=0;s<r.length;s++)ig(r[s],t),t=on(t,t.next);return t}function ng(n,e){return n.x-e.x}function ig(n,e){if(e=rg(n,e),e){let t=kc(e,n);on(e,e.next),on(t,t.next)}}function rg(n,e){let t=e,i=n.x,r=n.y,s=-Infinity,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s){if(s=f,f===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,h=Infinity,u;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&si(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(i-t.x),Gi(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&sg(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function sg(n,e){return je(n.prev,n,e.prev)<0&&je(e.next,n,n.next)<0}function og(n,e,t,i){let r=n;do r.z===null&&(r.z=po(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,ag(r)}function ag(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function po(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function cg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function si(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function lg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ug(n,e)&&(Gi(n,e)&&Gi(e,n)&&hg(n,e)&&(je(n.prev,n,e.prev)||je(n,e.prev,e))||Vr(n,e)&&je(n.prev,n,n.next)>0&&je(e.prev,e,e.next)>0)}function je(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vr(n,e){return n.x===e.x&&n.y===e.y}function Gc(n,e,t,i){let r=qr(je(n,e,t)),s=qr(je(n,e,i)),o=qr(je(t,i,n)),a=qr(je(t,i,e));return!!(r!==s&&o!==a||r===0&&Wr(n,t,e)||s===0&&Wr(n,i,e)||o===0&&Wr(t,n,i)||a===0&&Wr(t,e,i))}function Wr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qr(n){return n>0?1:n<0?-1:0}function ug(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Gi(n,e){return je(n.prev,n,n.next)<0?je(n,e,n.next)>=0&&je(n,n.prev,e)>=0:je(n,e,n.prev)<0||je(n,n.next,e)<0}function hg(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function kc(n,e){let t=new mo(n.i,n.x,n.y),i=new mo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Vc(n,e,t,i){let r=new mo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ki(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fg(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var an={area:function(n){let e=n.length,t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return an.area(n)<0},triangulateShape:function(n,e){let t=[],i=[],r=[];Wc(n),qc(t,n);let s=n.length;e.forEach(Wc);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,qc(t,e[a]);let o=Jm.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Wc(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Vi=class extends Re{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:100,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:d-2,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:dg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let E,M=!1,T,v,C,B;g&&(E=g.getSpacedPoints(h),M=!0,f=!1,T=g.computeFrenetFrames(h,!1),v=new _,C=new _,B=new _),f||(y=0,d=0,m=0,x=0);let D=a.extractPoints(l),O=D.shape,R=D.holes;if(!an.isClockWise(O)){O=O.reverse();for(let j=0,Z=R.length;j<Z;j++){let Q=R[j];an.isClockWise(Q)&&(R[j]=Q.reverse())}}let P=an.triangulateShape(O,R),L=O;for(let j=0,Z=R.length;j<Z;j++){let Q=R[j];O=O.concat(Q)}function F(j,Z,Q){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(Q).add(j)}let I=O.length,X=P.length;function ee(j,Z,Q){let he,ne,S,b=j.x-Z.x,k=j.y-Z.y,W=Q.x-j.x,ie=Q.y-j.y,ue=b*b+k*k,Fe=b*ie-k*W;if(Math.abs(Fe)>Number.EPSILON){let ye=Math.sqrt(ue),A=Math.sqrt(W*W+ie*ie),J=Z.x-k/ye,$=Z.y+b/ye,pe=Q.x-ie/A,q=Q.y+W/A,xe=((pe-J)*ie-(q-$)*W)/(b*ie-k*W);he=J+b*xe-j.x,ne=$+k*xe-j.y;let Ne=he*he+ne*ne;if(Ne<=2)return new V(he,ne);S=Math.sqrt(Ne/2)}else{let ye=!1;b>Number.EPSILON?W>Number.EPSILON&&(ye=!0):b<-Number.EPSILON?W<-Number.EPSILON&&(ye=!0):Math.sign(k)===Math.sign(ie)&&(ye=!0),ye?(he=-k,ne=b,S=Math.sqrt(ue)):(he=b,ne=k,S=Math.sqrt(ue/2))}return new V(he/S,ne/S)}let Y=[];for(let j=0,Z=L.length,Q=Z-1,he=j+1;j<Z;j++,Q++,he++)Q===Z&&(Q=0),he===Z&&(he=0),Y[j]=ee(L[j],L[Q],L[he]);let re=[],se,me=Y.concat();for(let j=0,Z=R.length;j<Z;j++){let Q=R[j];se=[];for(let he=0,ne=Q.length,S=ne-1,b=he+1;he<ne;he++,S++,b++)S===ne&&(S=0),b===ne&&(b=0),se[he]=ee(Q[he],Q[S],Q[b]);re.push(se),me=me.concat(se)}for(let j=0;j<y;j++){let Z=j/y,Q=d*Math.cos(Z*Math.PI/2),he=m*Math.sin(Z*Math.PI/2)+x;for(let ne=0,S=L.length;ne<S;ne++){let b=F(L[ne],Y[ne],he);ae(b.x,b.y,-Q)}for(let ne=0,S=R.length;ne<S;ne++){let b=R[ne];se=re[ne];for(let k=0,W=b.length;k<W;k++){let ie=F(b[k],se[k],he);ae(ie.x,ie.y,-Q)}}}let be=m+x;for(let j=0;j<I;j++){let Z=f?F(O[j],me[j],be):O[j];M?(C.copy(T.normals[0]).multiplyScalar(Z.x),v.copy(T.binormals[0]).multiplyScalar(Z.y),B.copy(E[0]).add(C).add(v),ae(B.x,B.y,B.z)):ae(Z.x,Z.y,0)}for(let j=1;j<=h;j++)for(let Z=0;Z<I;Z++){let Q=f?F(O[Z],me[Z],be):O[Z];M?(C.copy(T.normals[j]).multiplyScalar(Q.x),v.copy(T.binormals[j]).multiplyScalar(Q.y),B.copy(E[j]).add(C).add(v),ae(B.x,B.y,B.z)):ae(Q.x,Q.y,u/h*j)}for(let j=y-1;j>=0;j--){let Z=j/y,Q=d*Math.cos(Z*Math.PI/2),he=m*Math.sin(Z*Math.PI/2)+x;for(let ne=0,S=L.length;ne<S;ne++){let b=F(L[ne],Y[ne],he);ae(b.x,b.y,u+Q)}for(let ne=0,S=R.length;ne<S;ne++){let b=R[ne];se=re[ne];for(let k=0,W=b.length;k<W;k++){let ie=F(b[k],se[k],he);M?ae(ie.x,ie.y+E[h-1].y,E[h-1].x+Q):ae(ie.x,ie.y,u+Q)}}}G(),Ie();function G(){let j=r.length/3;if(f){let Z=0,Q=I*Z;for(let he=0;he<X;he++){let ne=P[he];le(ne[2]+Q,ne[1]+Q,ne[0]+Q)}Z=h+y*2,Q=I*Z;for(let he=0;he<X;he++){let ne=P[he];le(ne[0]+Q,ne[1]+Q,ne[2]+Q)}}else{for(let Z=0;Z<X;Z++){let Q=P[Z];le(Q[2],Q[1],Q[0])}for(let Z=0;Z<X;Z++){let Q=P[Z];le(Q[0]+I*h,Q[1]+I*h,Q[2]+I*h)}}i.addGroup(j,r.length/3-j,0)}function Ie(){let j=r.length/3,Z=0;ce(L,Z),Z+=L.length;for(let Q=0,he=R.length;Q<he;Q++){let ne=R[Q];ce(ne,Z),Z+=ne.length}i.addGroup(j,r.length/3-j,1)}function ce(j,Z){let Q=j.length;for(;--Q>=0;){let he=Q,ne=Q-1;ne<0&&(ne=j.length-1);for(let S=0,b=h+y*2;S<b;S++){let k=I*S,W=I*(S+1),ie=Z+he+k,ue=Z+ne+k,Fe=Z+ne+W,ye=Z+he+W;Me(ie,ue,Fe,ye)}}}function ae(j,Z,Q){c.push(j),c.push(Z),c.push(Q)}function le(j,Z,Q){de(j),de(Z),de(Q);let he=r.length/3,ne=p.generateTopUV(i,r,he-3,he-2,he-1);ge(ne[0]),ge(ne[1]),ge(ne[2])}function Me(j,Z,Q,he){de(j),de(Z),de(he),de(Z),de(Q),de(he);let ne=r.length/3,S=p.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);ge(S[0]),ge(S[1]),ge(S[3]),ge(S[1]),ge(S[2]),ge(S[3])}function de(j){r.push(c[j*3+0]),r.push(c[j*3+1]),r.push(c[j*3+2])}function ge(j){s.push(j.x),s.push(j.y)}}}toJSON(){let e=Re.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return pg(t,i,e)}},dg={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new V(s,o),new V(a,c),new V(l,h)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],x=e[s*3],y=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<.01?[new V(o,1-c),new V(l,1-u),new V(f,1-m),new V(x,1-g)]:[new V(a,1-c),new V(h,1-u),new V(d,1-m),new V(y,1-g)]}};function pg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function go(n,e,t){Re.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t};let i=[],r=[],s=[],o=[],a=1e-5,c=new _,l=new _,h=new _,u=new _,f=new _;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let d=e+1;for(let m=0;m<=t;m++){let x=m/t;for(let y=0;y<=e;y++){let g=y/e;n(g,x,l),r.push(l.x,l.y,l.z),g-a>=0?(n(g-a,x,h),u.subVectors(l,h)):(n(g+a,x,h),u.subVectors(h,l)),x-a>=0?(n(g,x-a,h),f.subVectors(l,h)):(n(g,x+a,h),f.subVectors(h,l)),c.crossVectors(u,f).normalize(),s.push(c.x,c.y,c.z),o.push(g,x)}}for(let m=0;m<t;m++)for(let x=0;x<e;x++){let y=m*d+x,g=m*d+x+1,p=(m+1)*d+x+1,E=(m+1)*d+x;i.push(y,g,E),i.push(g,p,E)}this.setIndex(i),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(o,2))}go.prototype=Object.create(Re.prototype);go.prototype.constructor=go;var xo=class extends Re{constructor(e=.5,t=1,i=8,r=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/r,d=new _,m=new V;for(let x=0;x<=r;x++){for(let y=0;y<=i;y++){let g=s+y/i*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<r;x++){let y=x*(i+1);for(let g=0;g<i;g++){let p=g+y,E=p,M=p+i+1,T=p+i+2,v=p+1;a.push(E,M,v),a.push(M,T,v)}}this.setIndex(a),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}},Xc=class extends Re{constructor(e,t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(o,2));function l(h){let u=r.length/3,f=h.extractPoints(t),d=f.shape,m=f.holes;an.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,g=m.length;y<g;y++){let p=m[y];an.isClockWise(p)===!0&&(m[y]=p.reverse())}let x=an.triangulateShape(d,m);for(let y=0,g=m.length;y<g;y++){let p=m[y];d=d.concat(p)}for(let y=0,g=d.length;y<g;y++){let p=d[y];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,g=x.length;y<g;y++){let p=x[y],E=p[0]+u,M=p[1]+u,T=p[2]+u;i.push(E,M,T),c+=3}}}toJSON(){let e=Re.prototype.toJSON.call(this),t=this.parameters.shapes;return mg(t,e)}};function mg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var cn=class extends Re{constructor(e=1,t=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new _,f=new _,d=[],m=[],x=[],y=[];for(let g=0;g<=i;g++){let p=[],E=g/i,M=0;g==0&&o==0?M=.5/t:g==i&&c==Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){let v=T/t;u.x=-e*Math.cos(r+v*s)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(r+v*s)*Math.sin(o+E*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),y.push(v+M,1-E),p.push(l++)}h.push(p)}for(let g=0;g<i;g++)for(let p=0;p<t;p++){let E=h[g][p+1],M=h[g][p],T=h[g+1][p],v=h[g+1][p+1];(g!==0||o>0)&&d.push(E,M,v),(g!==i-1||c<Math.PI)&&d.push(M,T,v)}this.setIndex(d),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(y,2))}};var jc=class extends Xe{constructor(e){super();this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};jc.prototype.isShadowMaterial=!0;var Yc=class extends Ge{constructor(e){super(e);this.type="RawShaderMaterial"}};Yc.prototype.isRawShaderMaterial=!0;function ln(n){Xe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(n)}ln.prototype=Object.create(Xe.prototype);ln.prototype.constructor=ln;ln.prototype.isMeshStandardMaterial=!0;ln.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.flatShading=n.flatShading,this.vertexTangents=n.vertexTangents,this};function oi(n){ln.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Ee.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}oi.prototype=Object.create(ln.prototype);oi.prototype.constructor=oi;oi.prototype.isMeshPhysicalMaterial=!0;oi.prototype.copy=function(n){return ln.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new oe).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};var St=class extends Xe{constructor(e){super();this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};St.prototype.isMeshPhongMaterial=!0;var Zc=class extends Xe{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Zc.prototype.isMeshToonMaterial=!0;var Jc=class extends Xe{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Jc.prototype.isMeshNormalMaterial=!0;var Qc=class extends Xe{constructor(e){super();this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Qc.prototype.isMeshLambertMaterial=!0;var $c=class extends Xe{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};$c.prototype.isMeshMatcapMaterial=!0;var Kc=class extends ri{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};Kc.prototype.isLineDashedMaterial=!0;var Ve={arraySlice:function(n,e,t){return Ve.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){let m=l.times[d]*r;if(!(m<t||m>=i)){u.push(l.times[d]);for(let x=0;x<h;++x)f.push(l.values[d*h+x])}}u.length!==0&&(l.times=Ve.convertArray(u,l.times.constructor),l.values=Ve.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=n.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);let m=a.times.length-1,x;if(s<=a.times[0]){let g=h,p=u-h;x=Ve.arraySlice(a.values,g,p)}else if(s>=a.times[m]){let g=m*u+h,p=g+u-h;x=Ve.arraySlice(a.values,g,p)}else{let g=a.createInterpolant(),p=h,E=u-h;g.evaluate(s),x=Ve.arraySlice(g.resultBuffer,p,E)}c==="quaternion"&&new st().fromArray(x).normalize().conjugate().toArray(x);let y=l.times.length;for(let g=0;g<y;++g){let p=g*d+f;if(c==="quaternion")st.multiplyQuaternionsFlat(l.values,p,x,0,l.values,p);else{let E=d-f*2;for(let M=0;M<E;++M)l.values[p+M]-=x[M]}}}return n.blendMode=Ma,n}};function Et(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(Et.prototype,{evaluate:function(n){let e=this.parameterPositions,t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){let o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){let o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){let e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Et.prototype,{beforeStart_:Et.prototype.copySampleValue_,afterEnd_:Et.prototype.copySampleValue_});function yo(n,e,t,i){Et.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}yo.prototype=Object.assign(Object.create(Et.prototype),{constructor:yo,DefaultSettings_:{endingStart:Cn,endingEnd:Cn},intervalChanged_:function(n,e,t){let i=this.parameterPositions,r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Pn:r=n,o=2*e-t;break;case fr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case Pn:s=n,a=2*t-e;break;case fr:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}let c=(t-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-t),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,d=(t-e)/(i-e),m=d*d,x=m*d,y=-u*x+2*u*m-u*d,g=(1+u)*x+(-1.5-2*u)*m+(-.5+u)*d+1,p=(-1-f)*x+(1.5+f)*m+.5*d,E=f*x-f*m;for(let M=0;M!==o;++M)r[M]=y*s[l+M]+g*s[c+M]+p*s[a+M]+E*s[h+M];return r}});function Xr(n,e,t,i){Et.call(this,n,e,t,i)}Xr.prototype=Object.assign(Object.create(Et.prototype),{constructor:Xr,interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=(t-e)/(i-e),h=1-l;for(let u=0;u!==o;++u)r[u]=s[c+u]*h+s[a+u]*l;return r}});function vo(n,e,t,i){Et.call(this,n,e,t,i)}vo.prototype=Object.assign(Object.create(Et.prototype),{constructor:vo,interpolate_:function(n){return this.copySampleValue_(n-1)}});var Dt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ve.convertArray(t,this.TimeBufferType),this.values=Ve.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ve.convertArray(e.times,Array),values:Ve.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case ys:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return ys}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Ve.arraySlice(i,s,o),this.values=Ve.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Ve.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=Ve.arraySlice(this.times),t=Ve.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===ys,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Ve.arraySlice(e,0,o),this.values=Ve.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=Ve.arraySlice(this.times,0),t=Ve.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Dt.prototype.TimeBufferType=Float32Array;Dt.prototype.ValueBufferType=Float32Array;Dt.prototype.DefaultInterpolation=hr;var wn=class extends Dt{};wn.prototype.ValueTypeName="bool";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=ur;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends Dt{};_o.prototype.ValueTypeName="color";var Wi=class extends Dt{};Wi.prototype.ValueTypeName="number";function wo(n,e,t,i){Et.call(this,n,e,t,i)}wo.prototype=Object.assign(Object.create(Et.prototype),{constructor:wo,interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e),c=n*o;for(let l=c+o;c!==l;c+=4)st.slerpFlat(r,0,s,c-o,s,c,a);return r}});var ai=class extends Dt{InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.DefaultInterpolation=hr;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends Dt{};bn.prototype.ValueTypeName="string";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=ur;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Dt{};qi.prototype.ValueTypeName="vector";var bo=class{constructor(e,t=-1,i,r=vs){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ee.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(xg(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Dt.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=Ve.getKeyframeOrder(c);c=Ve.sortedArray(c,1,h),l=Ve.sortedArray(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=r[u];f||(r[u]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,d,m,x){if(d.length!==0){let y=[],g=[];Ve.flattenJSON(d,y,g,m),y.length!==0&&x.push(new u(f,y,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let y=[],g=[];for(let p=0;p!==f[m].morphTargets.length;++p){let E=f[m];y.push(E.time),g.push(E.morphTarget===x?1:0)}r.push(new Wi(".morphTargetInfluence["+x+"]",y,g))}c=d.length*(o||1)}else{let d=".bones["+t[u].name+"]";i(qi,d+".position",f,"pos",r),i(ai,d+".quaternion",f,"rot",r),i(qi,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function gg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return _o;case"quaternion":return ai;case"bool":case"boolean":return wn;case"string":return bn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function xg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gg(n.type);if(n.times===void 0){let t=[],i=[];Ve.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ci={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function yg(n,e,t){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],d=c[h+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}var vg=new yg;function lt(n){this.manager=n!==void 0?n:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(lt.prototype,{load:function(){},loadAsync:function(n,e){let t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});var It={};function Xi(n){lt.call(this,n)}Xi.prototype=Object.assign(Object.create(lt.prototype),{constructor:Xi,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);let r=this,s=ci.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(It[n]!==void 0){It[n].push({onLoad:e,onProgress:t,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o),c;if(a){let l=a[1],h=!!a[2],u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let f,d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":let m=new Uint8Array(u.length);for(let y=0;y<u.length;y++)m[y]=u.charCodeAt(y);d==="blob"?f=new Blob([m.buffer],{type:l}):f=m.buffer;break;case"document":f=new DOMParser().parseFromString(u,l);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(n)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{It[n]=[],It[n].push({onLoad:e,onProgress:t,onError:i}),c=new XMLHttpRequest,c.open("GET",n,!0),c.addEventListener("load",function(l){let h=this.response,u=It[n];if(delete It[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ci.add(n,h);for(let f=0,d=u.length;f<d;f++){let m=u[f];m.onLoad&&m.onLoad(h)}r.manager.itemEnd(n)}else{for(let f=0,d=u.length;f<d;f++){let m=u[f];m.onError&&m.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),c.addEventListener("progress",function(l){let h=It[n];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){let h=It[n];delete It[n];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),c.addEventListener("abort",function(l){let h=It[n];delete It[n];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(n),c},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});function el(n){lt.call(this,n)}el.prototype=Object.assign(Object.create(lt.prototype),{constructor:el,load:function(n,e,t,i){let r=this,s=[],o=new ho,a=new Xi(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(h){a.load(n[h],function(u){let f=r.parse(u,!0);s[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=We),o.image=s,o.format=f.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let h=0,u=n.length;h<u;++h)l(h);else a.load(n,function(h){let u=r.parse(h,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let m=0;m<u.mipmapCount;m++)s[d].mipmaps.push(u.mipmaps[d*u.mipmapCount+m]),s[d].format=u.format,s[d].width=u.width,s[d].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=We),o.format=u.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});var Mo=class extends lt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ci.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},tl=class extends lt{constructor(e){super(e)}load(e,t,i,r){let s=new Li,o=new Mo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}};function nl(n){lt.call(this,n)}nl.prototype=Object.assign(Object.create(lt.prototype),{constructor:nl,load:function(n,e,t,i){let r=this,s=new Dr,o=new Xi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){let c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:yt,s.wrapT=c.wrapT!==void 0?c.wrapT:yt,s.magFilter=c.magFilter!==void 0?c.magFilter:We,s.minFilter=c.minFilter!==void 0?c.minFilter:We,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=or),c.mipmapCount===1&&(s.minFilter=We),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,e&&e(s,c))},t,i),s}});function Ot(n){lt.call(this,n)}Ot.prototype=Object.assign(Object.create(lt.prototype),{constructor:Ot,load:function(n,e,t,i){let r=new tt,s=new Mo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;let a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?gn:ft,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function xt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(xt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){let t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){let e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){let e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){let n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){let t=this.getLengths(),i=0,r=t.length,s;e?s=e:s=n*t[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=t[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);let l=t[i],u=t[i+1]-l,f=(s-l)/u;return(i+f)/(r-1)},getTangent:function(n,e){let t=1e-4,i=n-t,r=n+t;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new V:new _);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){let t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){let t=new _,i=[],r=[],s=[],o=new _,a=new fe;for(let f=0;f<=n;f++){let d=f/n;i[f]=this.getTangentAt(d,new _),i[f].normalize()}r[0]=new _,s[0]=new _;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,t.set(1,0,0)),h<=c&&(c=h,t.set(0,1,0)),u<=c&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=n;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(Ee.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ee.clamp(r[0].dot(r[n]),-1,1));f/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(f=-f);for(let d=1;d<=n;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){let n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});var ji=class extends xt{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new V,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};ji.prototype.isEllipseCurve=!0;var So=class extends ji{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o);this.type="ArcCurve"}};So.prototype.isArcCurve=!0;function Eo(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var jr=new _,To=new Eo,Ao=new Eo,Lo=new Eo,Ro=class extends xt{constructor(e=[],t=!1,i="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(jr.subVectors(r[0],r[1]).add(r[0]),l=jr);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(jr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),y<1e-4&&(y=x),To.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,y),Ao.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,y),Lo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,y)}else this.curveType==="catmullrom"&&(To.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ao.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Lo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(To.calc(c),Ao.calc(c),Lo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ro.prototype.isCatmullRomCurve3=!0;function il(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function _g(n,e){let t=1-n;return t*t*e}function wg(n,e){return 2*(1-n)*n*e}function bg(n,e){return n*n*e}function Yi(n,e,t,i){return _g(n,e)+wg(n,t)+bg(n,i)}function Mg(n,e){let t=1-n;return t*t*t*e}function Sg(n,e){let t=1-n;return 3*t*t*n*e}function Eg(n,e){return 3*(1-n)*n*n*e}function Tg(n,e){return n*n*n*e}function Zi(n,e,t,i,r){return Mg(n,e)+Sg(n,t)+Eg(n,i)+Tg(n,r)}var Yr=class extends xt{constructor(e=new V,t=new V,i=new V,r=new V){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new V){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zi(e,r.x,s.x,o.x,a.x),Zi(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Yr.prototype.isCubicBezierCurve=!0;var Co=class extends xt{constructor(e=new _,t=new _,i=new _,r=new _){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zi(e,r.x,s.x,o.x,a.x),Zi(e,r.y,s.y,o.y,a.y),Zi(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Co.prototype.isCubicBezierCurve3=!0;var Ji=class extends xt{constructor(e=new V,t=new V){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new V){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new V;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ji.prototype.isLineCurve=!0;var rl=class extends xt{constructor(e=new _,t=new _){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends xt{constructor(e=new V,t=new V,i=new V){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Yi(e,r.x,s.x,o.x),Yi(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Zr.prototype.isQuadraticBezierCurve=!0;var Po=class extends xt{constructor(e=new _,t=new _,i=new _){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Yi(e,r.x,s.x,o.x),Yi(e,r.y,s.y,o.y),Yi(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Po.prototype.isQuadraticBezierCurve3=!0;var Jr=class extends xt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new V){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(il(a,c.x,l.x,h.x,u.x),il(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new V().fromArray(r))}return this}};Jr.prototype.isSplineCurve=!0;var Ag=Object.freeze({__proto__:null,ArcCurve:So,CatmullRomCurve3:Ro,CubicBezierCurve:Yr,CubicBezierCurve3:Co,EllipseCurve:ji,LineCurve:Ji,LineCurve3:rl,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Po,SplineCurve:Jr}),sl=class extends xt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ji(t,e))}getPoint(e){let t=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=t){let s=i[r]-t,o=this.curves[r],a=o.getLength(),c=a===0?0:1-s/a;return o.getPointAt(c)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ag[r.type]().fromJSON(r))}return this}},Qi=class extends sl{constructor(e){super();this.type="Path",this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ji(this.currentPoint.clone(),new V(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Zr(this.currentPoint.clone(),new V(e,t),new V(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Yr(this.currentPoint.clone(),new V(e,t),new V(i,r),new V(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Jr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new ji(e,t,i,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mn=class extends Qi{constructor(e){super(e);this.uuid=Ee.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Qi().fromJSON(r))}return this}},Ft=class extends we{constructor(e,t=1){super();this.type="Light",this.color=new oe(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Ft.prototype.isLight=!0;var ol=class extends Ft{constructor(e,t,i){super(e,i);this.type="HemisphereLight",this.position.copy(we.DefaultUp),this.updateMatrix(),this.groundColor=new oe(t)}copy(e){return Ft.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};ol.prototype.isHemisphereLight=!0;var al=new fe,cl=new _,ll=new _,Qr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Do=class extends Qr{constructor(){super(new at(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,i=Ee.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Do.prototype.isSpotLightShadow=!0;var ul=class extends Ft{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(we.DefaultUp),this.updateMatrix(),this.target=new we,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Do}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ul.prototype.isSpotLight=!0;var hl=new fe,$i=new _,Io=new _,Fo=class extends Qr{constructor(){super(new at(90,1,.5,500));this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),i.position.copy($i),Io.copy(i.position),Io.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Io),i.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),hl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}};Fo.prototype.isPointLightShadow=!0;var fl=class extends Ft{constructor(e,t,i=0,r=1){super(e,t);this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Fo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};fl.prototype.isPointLight=!0;var Sn=class extends jn{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=we.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Sn.prototype.isOrthographicCamera=!0;var Bo=class extends Qr{constructor(){super(new Sn(-5,5,5,-5,.5,500))}};Bo.prototype.isDirectionalLightShadow=!0;var Ki=class extends Ft{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(we.DefaultUp),this.updateMatrix(),this.target=new we,this.shadow=new Bo}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Ki.prototype.isDirectionalLight=!0;var $r=class extends Ft{constructor(e,t){super(e,t);this.type="AmbientLight"}};$r.prototype.isAmbientLight=!0;var dl=class extends Ft{constructor(e,t,i=10,r=10){super(e,t);this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};dl.prototype.isRectAreaLight=!0;var No=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new _)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}};No.prototype.isSphericalHarmonics3=!0;var Kr=class extends Ft{constructor(e=new No,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};Kr.prototype.isLightProbe=!0;var Lg={decodeText:function(n){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch(t){return e}},extractUrlBase:function(n){let e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function zo(){Re.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}zo.prototype=Object.assign(Object.create(Re.prototype),{constructor:zo,isInstancedBufferGeometry:!0,copy:function(n){return Re.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let n=Re.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function pl(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Le.call(this,n,e,t),this.meshPerAttribute=i||1}pl.prototype=Object.assign(Object.create(Le.prototype),{constructor:pl,isInstancedBufferAttribute:!0,copy:function(n){return Le.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){let n=Le.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});function ml(n){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),lt.call(this,n),this.options={premultiplyAlpha:"none"}}ml.prototype=Object.assign(Object.create(lt.prototype),{constructor:ml,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);let r=this,s=ci.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){ci.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});var gl=class{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Qi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(p){let E=[];for(let M=0,T=p.length;M<T;M++){let v=p[M],C=new Mn;C.curves=v.curves,E.push(C)}return E}function r(p,E){let M=E.length,T=!1;for(let v=M-1,C=0;C<M;v=C++){let B=E[v],D=E[C],O=D.x-B.x,R=D.y-B.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(B=E[C],O=-O,D=E[v],R=-R),p.y<B.y||p.y>D.y)continue;if(p.y===B.y){if(p.x===B.x)return!0}else{let U=R*(p.x-B.x)-O*(p.y-B.y);if(U===0)return!0;if(U<0)continue;T=!T}}else{if(p.y!==B.y)continue;if(D.x<=p.x&&p.x<=B.x||B.x<=p.x&&p.x<=D.x)return!0}}return T}let s=an.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l,h=[];if(o.length===1)return c=o[0],l=new Mn,l.curves=c.curves,h.push(l),h;let u=!s(o[0].getPoints());u=e?!u:u;let f=[],d=[],m=[],x=0,y;d[x]=void 0,m[x]=[];for(let p=0,E=o.length;p<E;p++)c=o[p],y=c.getPoints(),a=s(y),a=e?!a:a,a?(!u&&d[x]&&x++,d[x]={s:new Mn,p:y},d[x].s.curves=c.curves,u&&x++,m[x]=[]):m[x].push({h:c,p:y[0]});if(!d[0])return i(o);if(d.length>1){let p=!1,E=[];for(let M=0,T=d.length;M<T;M++)f[M]=[];for(let M=0,T=d.length;M<T;M++){let v=m[M];for(let C=0;C<v.length;C++){let B=v[C],D=!0;for(let O=0;O<d.length;O++)r(B.p,d[O].p)&&(M!==O&&E.push({froms:M,tos:O,hole:C}),D?(D=!1,f[O].push(B)):p=!0);D&&f[M].push(B)}}E.length>0&&(p||(m=f))}let g;for(let p=0,E=d.length;p<E;p++){l=d[p].s,h.push(l),g=m[p];for(let M=0,T=g.length;M<T;M++)l.holes.push(g[M].h)}return h}},xl=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=Rg(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}};function Rg(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let h=i[l];if(h===`
`)a=0,c-=s;else{let u=Cg(h,r,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function Cg(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new gl,a,c,l,h,u,f,d,m;if(s.o){let x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,g=x.length;y<g;)switch(x[y++]){case"m":a=x[y++]*e+t,c=x[y++]*e+i,o.moveTo(a,c);break;case"l":a=x[y++]*e+t,c=x[y++]*e+i,o.lineTo(a,c);break;case"q":l=x[y++]*e+t,h=x[y++]*e+i,u=x[y++]*e+t,f=x[y++]*e+i,o.quadraticCurveTo(u,f,l,h);break;case"b":l=x[y++]*e+t,h=x[y++]*e+i,u=x[y++]*e+t,f=x[y++]*e+i,d=x[y++]*e+t,m=x[y++]*e+i,o.bezierCurveTo(u,f,d,m,l,h);break}}return{offsetX:s.ha*e,path:o}}xl.prototype.isFont=!0;var es,Pg={getContext:function(){return es===void 0&&(es=new(window.AudioContext||window.webkitAudioContext)),es},setContext:function(n){es=n}},yl=class extends lt{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Xi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let c=a.slice(0);Pg.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}},vl=class extends Kr{constructor(e,t,i=1){super(void 0,i);let r=new oe().set(e),s=new oe().set(t),o=new _(r.r,r.g,r.b),a=new _(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}};vl.prototype.isHemisphereLightProbe=!0;var _l=class extends Kr{constructor(e,t=1){super(void 0,t);let i=new oe().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}};_l.prototype.isAmbientLightProbe=!0;var tx=new fe,nx=new fe;var Oo=class{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function wl(){return(typeof performance=="undefined"?Date:performance).now()}var bl=class extends we{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Ml=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Sl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(i,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){st.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;st.multiplyQuaternionsFlat(e,o,e,t,e,i),st.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},Uo="\\[\\]\\.:\\/",Dg=new RegExp("["+Uo+"]","g"),Ho="[^"+Uo+"]",Ig="[^"+Uo.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",Ho),Bg=/(WCOD+)?/.source.replace("WCOD",Ig),Ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ho),zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ho),Og=new RegExp("^"+Fg+Bg+Ng+zg+"$"),Ug=["material","materials","bones"];function El(n,e,t){let i=t||pt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}Object.assign(El.prototype,{getValue:function(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)},setValue:function(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)},bind:function(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()},unbind:function(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}});function pt(n,e,t){this.path=e,this.parsedPath=t||pt.parseTrackName(e),this.node=pt.findNode(n,this.parsedPath.nodeName)||n,this.rootNode=n}Object.assign(pt,{Composite:El,create:function(n,e,t){return n&&n.isAnimationObjectGroup?new pt.Composite(n,e,t):new pt(n,e,t)},sanitizeNodeName:function(n){return n.replace(/\s/g,"_").replace(Dg,"")},parseTrackName:function(n){let e=Og.exec(n);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+n);let t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=t.nodeName.substring(i+1);Ug.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return t},findNode:function(n,e){if(!e||e===""||e==="."||e===-1||e===n.name||e===n.uuid)return n;if(n.skeleton){let t=n.skeleton.getBoneByName(e);if(t!==void 0)return t}if(n.children){let t=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=t(o.children);if(a)return a}return null},i=t(n.children);if(i)return i}return null}});Object.assign(pt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let n=this.node,e=this.parsedPath,t=e.objectName,i=e.propertyName,r=e.propertyIndex;if(n||(n=pt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let c=e.objectIndex;switch(t){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let l=0;l<n.length;l++)if(n[l].name===c){c=l;break}break;default:if(n[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[t]}if(c!==void 0){if(n[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[c]}}let s=n[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",n);return}let o=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[r]!==void 0&&(r=n.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(pt.prototype,{_getValue_unbound:pt.prototype.getValue,_setValue_unbound:pt.prototype.setValue});var Tl=class{constructor(){this.uuid=Ee.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let f=arguments[h],d=f.uuid,m=t[d];if(m===void 0){m=c++,t[d]=m,e.push(f);for(let x=0,y=o;x!==y;++x)s[x].push(new pt(f,i[x],r[x]))}else if(m<l){a=e[m];let x=--l,y=e[x];t[y.uuid]=m,e[m]=y,t[d]=x,e[x]=f;for(let g=0,p=o;g!==p;++g){let E=s[g],M=E[x],T=E[m];E[m]=M,T===void 0&&(T=new pt(f,i[g],r[g])),E[x]=T}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=s){let u=s++,f=e[u];t[f.uuid]=h,e[h]=f,t[l]=u,e[u]=c;for(let d=0,m=r;d!==m;++d){let x=i[d],y=x[u],g=x[h];x[h]=y,x[u]=g}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let f=--s,d=e[f],m=--o,x=e[m];t[d.uuid]=u,e[u]=d,t[x.uuid]=f,e[f]=x,e.pop();for(let y=0,g=r;y!==g;++y){let p=i[y],E=p[f],M=p[m];p[u]=E,p[f]=M,p.pop()}}else{let f=--o,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let m=0,x=r;m!==x;++m){let y=i[m];y[u]=y[f],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(u);for(let f=h,d=c.length;f!==d;++f){let m=c[f];u[f]=new pt(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=i,o[i]=c,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}};Tl.prototype.isAnimationObjectGroup=!0;var Al=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Cn,endingEnd:Cn};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_h,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,t=i*c}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ma:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case vs:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===wh;if(e===0)return s===-1?r:o&&(s&1)==1?t-r:r;if(i===vh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Pn,r.endingEnd=Pn):(e?r.endingStart=this.zeroSlopeAtStart?Pn:Cn:r.endingStart=fr,t?r.endingEnd=this.zeroSlopeAtEnd?Pn:Cn:r.endingEnd=fr)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=i,this}},Ll=class extends Zt{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=r[u],d=f.name,m=h[d];if(m!==void 0)o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new Sl(pt.create(i,d,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Xr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?bo.findByName(r,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=vs),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Al(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?bo.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};Ll.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var ts=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new ts(this.value.clone===void 0?this.value:this.value.clone())}};function Rl(n,e,t){Mt.call(this,n,e),this.meshPerAttribute=t||1}Rl.prototype=Object.assign(Object.create(Mt.prototype),{constructor:Rl,isInstancedInterleavedBuffer:!0,copy:function(n){return Mt.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},clone:function(n){let e=Mt.prototype.clone.call(this,n);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(n){let e=Mt.prototype.toJSON.call(this,n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Cl(n,e,t,i,r){this.buffer=n,this.type=e,this.itemSize=t,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Cl.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Cl.prototype,{isGLBufferAttribute:!0,setBuffer:function(n){return this.buffer=n,this},setType:function(n,e){return this.type=n,this.elementSize=e,this},setItemSize:function(n){return this.itemSize=n,this},setCount:function(n){return this.count=n,this}});function li(n,e,t=0,i=Infinity){this.ray=new Kt(n,e),this.near=t,this.far=i,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Pl(n,e){return n.distance-e.distance}function Go(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)Go(r[s],e,t,!0)}}Object.assign(li.prototype,{set:function(n,e){this.ray.set(n,e)},setFromCamera:function(n,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(n,e=!1,t=[]){return Go(n,this,t,e),t.sort(Pl),t},intersectObjects:function(n,e=!1,t=[]){for(let i=0,r=n.length;i<r;i++)Go(n[i],this,t,e);return t.sort(Pl),t}});var Dl=new V,ui=class{constructor(e=new V(Infinity,Infinity),t=new V(-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new V),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new V),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Dl.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};ui.prototype.isBox2=!0;var Il=new _,ns=new _,Fl=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new _),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new _),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new _),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Il.subVectors(e,this.start),ns.subVectors(this.end,this.start);let i=ns.dot(ns),s=ns.dot(Il)/i;return t&&(s=Ee.clamp(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new _),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function is(n){we.call(this),this.material=n,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}is.prototype=Object.create(we.prototype);is.prototype.constructor=is;is.prototype.isImmediateRenderObject=!0;var un=new _,rs=new fe,ko=new fe,Bl=class extends Hr{constructor(e){let t=Nl(e),i=new Re,r=[],s=[],o=new oe(0,0,1),a=new oe(0,1,0);for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Ae(r,3)),i.setAttribute("color",new Ae(s,3));let c=new ri({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");ko.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(rs.multiplyMatrices(ko,a.matrixWorld),un.setFromMatrixPosition(rs),r.setXYZ(o,un.x,un.y,un.z),rs.multiplyMatrices(ko,a.parent.matrixWorld),un.setFromMatrixPosition(rs),r.setXYZ(o+1,un.x,un.y,un.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Nl(n){let e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Nl(n.children[t]));return e}var zl=class extends Hr{constructor(e=10,t=10,i=4473924,r=8947848){i=new oe(i),r=new oe(r);let s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let x=f===s?i:r;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}let h=new Re;h.setAttribute("position",new Ae(c,3)),h.setAttribute("color",new Ae(l,3));let u=new ri({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}};var Hg=new Float32Array(1),ix=new Int32Array(Hg.buffer);var Gg=4,Ol=8,rx=Math.pow(2,Ol),kg=[.125,.215,.35,.446,.526,.582],sx=Ol-Gg+1+kg.length;var ox={[Dn]:0,[vi]:1,[Ea]:2,[Ta]:3,[Aa]:4,[La]:5,[Sa]:6},Vg=new Xt({side:Ke,depthWrite:!1,depthTest:!1}),ax=new Pe(new jt,Vg);var En=(1+Math.sqrt(5))/2,hi=1/En,cx=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,En,hi),new _(0,En,-hi),new _(hi,0,En),new _(-hi,0,En),new _(En,hi,0),new _(-En,hi,0)];xt.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(xt.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Qi.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};zl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Bl.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};lt.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Lg.extractUrlBase(n)};lt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ui.prototype.center=function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)};ui.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ui.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};ui.prototype.size=function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)};vt.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};vt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};vt.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};vt.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};vt.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};vn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ri.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Fl.prototype.center=function(n){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Ee.random16=function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()};Ee.nearestPowerOfTwo=function(n){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Ee.floorPowerOfTwo(n)};Ee.nextPowerOfTwo=function(n){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Ee.ceilPowerOfTwo(n)};et.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};et.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};et.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};et.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};et.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};et.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};fe.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};fe.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};fe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new _().setFromMatrixColumn(this,3)};fe.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};fe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};fe.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};fe.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};fe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};fe.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};fe.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};fe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};fe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};fe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};fe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};fe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};fe.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};fe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};fe.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};fe.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Lt.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};st.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};st.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Kt.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Kt.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};Kt.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};qe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};qe.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};qe.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};qe.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};qe.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};qe.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),qe.getBarycoord(n,e,t,i,r)};qe.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),qe.getNormal(n,e,t,i)};Mn.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};Mn.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vi(this,n)};Mn.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Xc(this,n)};V.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};V.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};V.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};_.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};_.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};_.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};_.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};_.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};_.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};_.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};_.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};_.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};we.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};we.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};we.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};we.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};we.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(we.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Pe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Pe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),bh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ao.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(xt.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(n){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=n}});at.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Ft.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(Le.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===wi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(wi)}}});Le.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?wi:_i),this};Le.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Le.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Re.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};Re.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new Le(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};Re.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};Re.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Re.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Re.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};Re.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Re.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(zo.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(n){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=n}}});Object.defineProperties(li.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(n){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=n}}});Object.defineProperties(Mt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===wi},set:function(n){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(n)}}});Mt.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?wi:_i),this};Mt.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Vi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Vi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Vi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ii.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};ts.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(Xe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new oe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ta}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(oi.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(n){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=n}}});Object.defineProperties(Ge.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Ue.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};Ue.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};Ue.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ue.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ue.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ue.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ue.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ue.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ue.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ue.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ue.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ue.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ue.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ue.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ue.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};Ue.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ue.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ue.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ue.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ue.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ue.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ue.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ue.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ue.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ue.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ue.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?vi:Dn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(fc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(gt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});bl.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new yl().load(n,function(i){e.setBuffer(i)}),this};Ml.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Pr.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Pr.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Bn.crossOrigin=void 0;Bn.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Ot;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Bn.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new tl;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Bn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Bn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);function Ul(n){let e=200,t=200;n&&n.w&&(e=n.w),n&&n.h&&(t=n.h);let i=4,r=parseInt(e/10),s=new Pt,o=new Qn(e,t,r,r),a=[],c=o.attributes.position.array,l=0,h=0,u=!0;for(let m=0;m<c.length;m+=3)c[m]==-e/2||c[m+1]==-t/2||c[m]==e/2||c[m+1]==t/2?(console.log(c[m],c[m+1],c[m+2]),c[m+2]=-1):c[m+2]+=Math.random()*i,a.push({i:m,x:c[m],y:c[m+1],z:c[m+2]}),l+=3,l>=r&&(l=0,h+=3);o.attributes.position.needsUpdate=!0;let f=new St({color:11206621,wireframe:!1,opacity:1,transparent:!1}),d=new Pe(o,f);return d.position.x=0*1,d.position.y=-6*1,d.position.z=0*1,d.rotation.x=-Math.PI/2,s.add(d),window.terrainCreated&&window.terrainCreated(d,a),d}function er(){let n=[{src:"img/rune/1.png"},{src:"img/rune/10.png"},{src:"img/rune/11.png"},{src:"img/rune/111.png"},{src:"img/rune/16.png"},{src:"img/rune/17.png"},{src:"img/rune/18.png"},{src:"img/rune/2.png"},{src:"img/rune/20.png"},{src:"img/rune/21.png"},{src:"img/rune/22.png"},{src:"img/rune/24.png"},{src:"img/rune/25.png"},{src:"img/rune/26.png"},{src:"img/rune/27.png"},{src:"img/rune/28.png"},{src:"img/rune/3.png"},{src:"img/rune/30.png"},{src:"img/rune/31.png"},{src:"img/rune/32.png"},{src:"img/rune/33.png"},{src:"img/rune/3434f.png"},{src:"img/rune/4.png"},{src:"img/rune/5.png"},{src:"img/rune/6.png"},{src:"img/rune/8.png"},{src:"img/rune/9.png"},{src:"img/rune/jhg.png"},{src:"img/rune/n1.png"},{src:"img/rune/n2.png"},{src:"img/rune/n3.png"},{src:"img/rune/n4.png"},{src:"img/rune/n5.png"},{src:"img/rune/n6.png"},{src:"img/rune/n7.png"},{src:"img/rune/n8.png"},{src:"img/rune/n9.png"},{src:"img/rune/n91.png"},{src:"img/rune/n92.jpeg"},{src:"img/rune/n93.png"},{src:"img/rune/n94.jpeg"},{src:"img/rune/n95.png"},{src:"img/rune/n96.png"},{src:"img/rune/n97.png"},{src:"img/rune/n98.png"},{src:"img/rune/n99.png"},{src:"img/rune/n991.png"},{src:"img/rune/nn0.jpeg"},{src:"img/rune/nn1.jpeg"},{src:"img/rune/nn3.png"},{src:"img/rune/nn4.png"},{src:"img/rune/nn5.png"},{src:"img/rune/nn6.png"},{src:"img/rune/nn7.png"},{src:"img/rune/nn8.png"},{src:"img/rune/nn9.png"},{src:"img/rune/nn91.png"},{src:"img/rune/nn92.png"},{src:"img/rune/nn93.png"}],e=n.map(i=>i.src);return e[parseInt(Math.random()*e.length)]}function tr(n,e){n||(n=er()),console.log(n);let i=new Ot().load(n);return new St({color:16777215,map:i,opacity:1,transparent:!1,side:An})}function Hl(n=1,e=0){let t=new jt(n,n,n),i=new St({color:e});return new Pe(t,i)}function Gl(n=1,e){let t=new jt(n,n,.1);return new Pe(t,e)}function kl({scene:n,mapSize:e,frontier:t}){console.log("CH",{mapSize:e,frontier:t});let i=Hl(1,4521796);return n.add(i),i}function Vl(n,e=200,t=200,i){let r=Math.random()<.9,s=new xo(.3,.8,10),o=new fo(.6,.3,5),a=new jt(1,1,1),c=new Pe(a,tr());n.add(c);let l=Math.random()*5+2,h=Math.random()*1-.5,u=Math.random()*1-.5;h<0&&(l=-l),c.position.set(Math.random()*e-e/2,Math.random()*3,r?l:Math.random()*t-t/2);let f=c,d=.2,m=.01,x=.02,y=new li;y.set(f.position,new _(0,-1,0));let g=new Pe(new cn(.4,30),tr());n.add(g);let p={x:0,y:0,z:0};E();function E(){f.position.x+=h,r||(f.position.z+=u),f.position.z>t&&(f.position.z-=t*2),f.position.x>e&&(f.position.x-=e*2),f.position.z<-t&&(f.position.z+=t*2),f.position.x<-e&&(f.position.x+=e*2),Math.random()<x&&(h+=Math.random()*m),Math.random()<x&&(u+=Math.random()*m),Math.random()<x&&(h-=Math.random()*m),Math.random()<x&&(u-=Math.random()*m),h>d&&(h=d),h<-d&&(h=-d),u>d&&(u=d),u<-d&&(u=-d),y.set(f.position,new _(0,-1,0));let M=y.intersectObject(i);if(M.length>0){let T=M[0].point;f.position.y=T.y+.1;let v={x:Math.atan2(M[0].face.normal.z,M[0].face.normal.y),y:Math.atan2(M[0].face.normal.x,M[0].face.normal.z),z:Math.atan2(M[0].face.normal.y,M[0].face.normal.x)};p.x+=(v.x-p.x)*.05,p.y+=(v.y-p.y)*.05,p.z+=(v.z-p.z)*.05,f.rotation.x=p.x,f.rotation.y=p.y,f.rotation.z=p.z}g.position.copy(f.position),g.position.y=f.position.y+.9,g.rotation.copy(f.rotation),g.rotation.x=-f.rotation.x,g.rotation.y=-f.rotation.y,requestAnimationFrame(E)}return f}function it(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(it.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});it.FullScreenQuad=function(){var n=new Sn(-1,1,1,-1,0,1),e=new Re;e.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),e.setAttribute("uv",new Ae([0,2,0,0,2,0],2));var t=function(i){this._mesh=new Pe(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,n)}}),t}();var ss=function(n,e,t,i,r){it.call(this),this.scene=n,this.camera=e,this.overrideMaterial=t,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe};ss.prototype=Object.assign(Object.create(it.prototype),{constructor:ss,render:function(n,e,t){var i=n.autoClear;n.autoClear=!1;var r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(n.getClearColor(this._oldClearColor),r=n.getClearAlpha(),n.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&n.clearDepth(),n.setRenderTarget(this.renderToScreen?null:t),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),n.render(this.scene,this.camera),this.clearColor&&n.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),n.autoClear=i}});var fi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	gl_FragColor = opacity * texel;","}"].join(`
`)};var Vo={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	vec3 luma = vec3( 0.299, 0.587, 0.114 );","	float v = dot( texel.xyz, luma );","	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","	gl_FragColor = mix( outputColor, texel, alpha );","}"].join(`
`)};var hn=function(n,e,t,i){it.call(this),this.strength=e!==void 0?e:1,this.radius=t,this.threshold=i,this.resolution=n!==void 0?new V(n.x,n.y):new V(256,256),this.clearColor=new oe(0,0,0);var r={minFilter:We,magFilter:We,format:ft};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gt(s,o,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var a=0;a<this.nMips;a++){var c=new gt(s,o,r);c.texture.name="UnrealBloomPass.h"+a,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);var l=new gt(s,o,r);l.texture.name="UnrealBloomPass.v"+a,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),s=Math.round(s/2),o=Math.round(o/2)}Vo===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");var h=Vo;this.highPassUniforms=Xn.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,defines:{}}),this.separableBlurMaterials=[];for(var u=[3,5,7,9,11],s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2),a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[a])),this.separableBlurMaterials[a].uniforms.texSize.value=new V(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;var f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,fi===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");var d=fi;this.copyUniforms=Xn.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ge({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new it.FullScreenQuad(null)};hn.prototype=Object.assign(Object.create(it.prototype),{constructor:hn,dispose:function(){for(var n=0;n<this.renderTargetsHorizontal.length;n++)this.renderTargetsHorizontal[n].dispose();for(var n=0;n<this.renderTargetsVertical.length;n++)this.renderTargetsVertical[n].dispose();this.renderTargetBright.dispose()},setSize:function(n,e){var t=Math.round(n/2),i=Math.round(e/2);this.renderTargetBright.setSize(t,i);for(var r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(t,i),this.renderTargetsVertical[r].setSize(t,i),this.separableBlurMaterials[r].uniforms.texSize.value=new V(t,i),t=Math.round(t/2),i=Math.round(i/2)},render:function(n,e,t,i,r){n.getClearColor(this._oldClearColor),this.oldClearAlpha=n.getClearAlpha();var s=n.autoClear;n.autoClear=!1,n.setClearColor(this.clearColor,0),r&&n.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=t.texture,n.setRenderTarget(null),n.clear(),this.fsQuad.render(n)),this.highPassUniforms.tDiffuse.value=t.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,n.setRenderTarget(this.renderTargetBright),n.clear(),this.fsQuad.render(n);for(var o=this.renderTargetBright,a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=hn.BlurDirectionX,n.setRenderTarget(this.renderTargetsHorizontal[a]),n.clear(),this.fsQuad.render(n),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=hn.BlurDirectionY,n.setRenderTarget(this.renderTargetsVertical[a]),n.clear(),this.fsQuad.render(n),o=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,n.setRenderTarget(this.renderTargetsHorizontal[0]),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&n.state.buffers.stencil.setTest(!0),this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(t),this.fsQuad.render(n)),n.setClearColor(this._oldClearColor,this.oldClearAlpha),n.autoClear=s},getSeperableBlurMaterial:function(n){return new Ge({defines:{KERNEL_RADIUS:n,SIGMA:n},uniforms:{colorTexture:{value:null},texSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;				uniform vec2 direction;								float gaussianPdf(in float x, in float sigma) {					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;				}				void main() {
					vec2 invSize = 1.0 / texSize;					float fSigma = float(SIGMA);					float weightSum = gaussianPdf(0.0, fSigma);					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {						float x = float(i);						float w = gaussianPdf(x, fSigma);						vec2 uvOffset = direction * invSize * x;						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;						diffuseSum += (sample1 + sample2) * w;						weightSum += 2.0 * w;					}					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})},getCompositeMaterial:function(n){return new Ge({defines:{NUM_MIPS:n},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:"varying vec2 vUv;				uniform sampler2D blurTexture1;				uniform sampler2D blurTexture2;				uniform sampler2D blurTexture3;				uniform sampler2D blurTexture4;				uniform sampler2D blurTexture5;				uniform sampler2D dirtTexture;				uniform float bloomStrength;				uniform float bloomRadius;				uniform float bloomFactors[NUM_MIPS];				uniform vec3 bloomTintColors[NUM_MIPS];								float lerpBloomFactor(const in float factor) { 					float mirrorFactor = 1.2 - factor;					return mix(factor, mirrorFactor, bloomRadius);				}								void main() {					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + 													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + 													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + 													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + 													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );				}"})}});hn.BlurDirectionX=new V(1,0);hn.BlurDirectionY=new V(0,1);var bt=function(n,e){it.call(this),this.textureID=e!==void 0?e:"tDiffuse",n instanceof Ge?(this.uniforms=n.uniforms,this.material=n):n&&(this.uniforms=Xn.clone(n.uniforms),this.material=new Ge({defines:Object.assign({},n.defines),uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader})),this.fsQuad=new it.FullScreenQuad(this.material)};bt.prototype=Object.assign(Object.create(it.prototype),{constructor:bt,render:function(n,e,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this.fsQuad.material=this.material,this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(e),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),this.fsQuad.render(n))}});var nr=function(n,e){it.call(this),this.scene=n,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1};nr.prototype=Object.assign(Object.create(it.prototype),{constructor:nr,render:function(n,e,t){var i=n.getContext(),r=n.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);var s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),n.setRenderTarget(t),this.clear&&n.clear(),n.render(this.scene,this.camera),n.setRenderTarget(e),this.clear&&n.clear(),n.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}});var os=function(){it.call(this),this.needsSwap=!1};os.prototype=Object.create(it.prototype);Object.assign(os.prototype,{render:function(n){n.state.buffers.stencil.setLocked(!1),n.state.buffers.stencil.setTest(!1)}});var Wo=function(n,e){if(this.renderer=n,e===void 0){var t={minFilter:We,magFilter:We,format:ft},i=n.getSize(new V);this._pixelRatio=n.getPixelRatio(),this._width=i.width,this._height=i.height,e=new gt(this._width*this._pixelRatio,this._height*this._pixelRatio,t),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],fi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),bt===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new bt(fi),this.clock=new Oo};Object.assign(Wo.prototype,{swapBuffers:function(){var n=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=n},addPass:function(n){this.passes.push(n),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(n,e){this.passes.splice(e,0,n),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},removePass:function(n){let e=this.passes.indexOf(n);e!==-1&&this.passes.splice(e,1)},isLastEnabledPass:function(n){for(var e=n+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0},render:function(n){n===void 0&&(n=this.clock.getDelta());var e=this.renderer.getRenderTarget(),t=!1,i,r,s=this.passes.length;for(r=0;r<s;r++)if(i=this.passes[r],i.enabled!==!1){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),i.render(this.renderer,this.writeBuffer,this.readBuffer,n,t),i.needsSwap){if(t){var o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,n),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nr!==void 0&&(i instanceof nr?t=!0:i instanceof os&&(t=!1))}this.renderer.setRenderTarget(e)},reset:function(n){if(n===void 0){var e=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,n=this.renderTarget1.clone(),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=n,this.renderTarget2=n.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(n,e){this._width=n,this._height=e;var t=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(t,i),this.renderTarget2.setSize(t,i);for(var r=0;r<this.passes.length;r++)this.passes[r].setSize(t,i)},setPixelRatio:function(n){this._pixelRatio=n,this.setSize(this._width,this._height)}});var Wl=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(Wl.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});Wl.FullScreenQuad=function(){var n=new Sn(-1,1,1,-1,0,1),e=new Re;e.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),e.setAttribute("uv",new Ae([0,2,0,0,2,0],2));var t=function(i){this._mesh=new Pe(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,n)}}),t}();function ql(n){let e=.3,t=n.rotation.y,i=()=>{let d=new _(0,0,1);d.applyQuaternion(n.quaternion),n.position.add(d.multiplyScalar(-e))},r=()=>{let d=new _(0,0,1);d.applyQuaternion(n.quaternion),n.position.add(d.multiplyScalar(e))},s=()=>{n.rotation.y+=.01},o=()=>{n.rotation.y-=.01},a=(d,m)=>{t-=(d/window.innerWidth-.5)/10},c={};function l(){c.moveBackward&&r&&r(),c.moveForward&&i&&i(),c.rotateRight&&o&&o(),c.rotateLeft&&s&&s(),c.moveDown&&(n.position.y-=.1),c.moveUp&&(n.position.y+=.1),n.rotation.y+=(t-n.rotation.y)*.05}window.addEventListener("keydown",h),window.addEventListener("keyup",f),window.addEventListener("mousemove",u);function h(d){switch(console.log(d),d.code){case"ArrowUp":case"KeyW":c.moveForward=!0;break;case"ArrowLeft":case"KeyA":c.rotateLeft=!0;break;case"ArrowDown":case"KeyS":c.moveBackward=!0;break;case"ArrowRight":case"KeyD":c.rotateRight=!0;break;case"KeyR":c.moveUp=!0;break;case"KeyF":c.moveDown=!0;break}}function u(d){a(d.clientX,d.clientY)}function f(d){switch(d.code){case"ArrowUp":case"KeyW":c.moveForward=!1;break;case"ArrowLeft":case"KeyA":c.rotateLeft=!1;break;case"ArrowDown":case"KeyS":c.moveBackward=!1;break;case"ArrowRight":case"KeyD":c.rotateRight=!1;break;case"KeyR":c.moveUp=!1;break;case"KeyF":c.moveDown=!1;break}}return{update:()=>{l()}}}var Xl=function(){var n=new qe,e=new _;function t(i){var r=i.geometry;if(!r.isBufferGeometry||r.attributes.position.itemSize!==3)throw new Error("THREE.MeshSurfaceSampler: Requires BufferGeometry triangle mesh.");r.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),r=r.toNonIndexed()),this.geometry=r,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}return t.prototype={constructor:t,setWeightAttribute:function(i){return this.weightAttribute=i?this.geometry.getAttribute(i):null,this},build:function(){for(var i=this.positionAttribute,r=this.weightAttribute,s=new Float32Array(i.count/3),o=0;o<i.count;o+=3){var a=1;r&&(a=r.getX(o)+r.getX(o+1)+r.getX(o+2)),n.a.fromBufferAttribute(i,o),n.b.fromBufferAttribute(i,o+1),n.c.fromBufferAttribute(i,o+2),a*=n.getArea(),s[o/3]=a}this.distribution=new Float32Array(i.count/3);for(var c=0,o=0;o<s.length;o++)c+=s[o],this.distribution[o]=c;return this},setRandomGenerator:function(i){return this.randomFunction=i,this},sample:function(i,r,s){var o=this.distribution[this.distribution.length-1],a=this.binarySearch(this.randomFunction()*o);return this.sampleFace(a,i,r,s)},binarySearch:function(i){for(var r=this.distribution,s=0,o=r.length-1,a=-1;s<=o;){var c=Math.ceil((s+o)/2);if(c===0||r[c-1]<=i&&r[c]>i){a=c;break}else i<r[c]?o=c-1:s=c+1}return a},sampleFace:function(i,r,s,o){var a=this.randomFunction(),c=this.randomFunction();return a+c>1&&(a=1-a,c=1-c),n.a.fromBufferAttribute(this.positionAttribute,i*3),n.b.fromBufferAttribute(this.positionAttribute,i*3+1),n.c.fromBufferAttribute(this.positionAttribute,i*3+2),r.set(0,0,0).addScaledVector(n.a,a).addScaledVector(n.b,c).addScaledVector(n.c,1-(a+c)),s!==void 0&&n.getNormal(s),o!==void 0&&this.colorAttribute!==void 0&&(n.a.fromBufferAttribute(this.colorAttribute,i*3),n.b.fromBufferAttribute(this.colorAttribute,i*3+1),n.c.fromBufferAttribute(this.colorAttribute,i*3+2),e.set(0,0,0).addScaledVector(n.a,a).addScaledVector(n.b,c).addScaledVector(n.c,1-(a+c)),o.r=e.x,o.g=e.y,o.b=e.z),this}},t}();function jl(n,e){var t=.002,i=.8;let r={x:0,y:0,z:0,cx:0,cy:0,cz:0,vx:0,vy:0,vz:0},s=!1;function o(){var c=-t*(r.x-r.cx);r.vx=(r.vx+c)*i,c=-t*(r.y-r.cy),r.vy=(r.vy+c)*i,c=-t*(r.z-r.cz),r.vz=(r.vz+c)*i,r.x+=r.vx,r.y+=r.vy,r.z+=r.vz,s=Math.abs(r.x-r.cx)>.01&&Math.abs(r.y-r.cy)>.01&&Math.abs(r.z-r.cz)>.01,s?(n(r.x,r.y,r.z),requestAnimationFrame(o)):(n(r.x,r.y,r.x,r.z),e&&e(),console.log("end"))}function a(c,l,h){r.cx=c,r.cy=l,r.cz=h,s||(s=!0,o())}return{goTo:a}}var Tn=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Wg=`
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  uniform float contrast;

  void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    color.rgb = contrast * (color.rgb - 0.5) + 0.5; // Apply contrast
    gl_FragColor = color;
  }
`;var Yl=`
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  uniform float time; // Time to control the animation
  uniform float amplitude; // Amplitude of the wave
  uniform float frequency; // Frequency of the wave

  void main() {
    // Calculate the displacement along the y-axis using a sine function
    float displacement = amplitude * sin(vUv.x * frequency + time);

    // Apply the displacement to the texture coordinates
    vec2 displacedUV = vec2(vUv.x, vUv.y + displacement);

    // Get the color from the displaced texture coordinates
    vec4 color = texture2D(tDiffuse, displacedUV);

    gl_FragColor = color;
  }
`,qg=`
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  uniform float saturationAmount; // Amount of saturation to apply

  void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Calculate grayscale value of the color
    float gray = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
    
    // Interpolate between grayscale and original color based on saturationAmount
    color.rgb = mix(vec3(gray), color.rgb, saturationAmount);
    
    gl_FragColor = color;
  }
`,Xg=`
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  uniform float grainAmount; // Amount of grain

  // Function to generate random noise
  float random(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    vec4 texColor = texture2D(tDiffuse, vUv);

    // Calculate a noise value
    float noise = (random(vUv) - 0.3) * grainAmount;
    
    // Apply the noise to the color
    texColor.rgb += vec3(noise);
    
    gl_FragColor = texColor;
  }
`,jg=`
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  uniform float time; // Time for animation
  uniform float distortion; // Distortion strength
  uniform float scanlineIntensity; // Intensity of scanlines
  uniform float glowIntensity; // Intensity of glow

  void main() {
    // Add scanlines
    vec4 texColor = texture2D(tDiffuse, vUv);
    texColor.rgb -= vec3(mod(gl_FragCoord.y, 2.0)) * scanlineIntensity;

    // Create distortion effect
    float distortionFactor = sin(vUv.y * 10.0 + time) * distortion;
    vec2 distortedUV = vec2(vUv.x + distortionFactor, vUv.y);
    vec4 distortedColor = texture2D(tDiffuse, distortedUV);

    // Apply glow
    vec4 glowColor = mix(texColor, distortedColor, glowIntensity);

    gl_FragColor = glowColor;
  }
`,Yg=`
uniform sampler2D tDiffuse;
uniform sampler2D displacementMap; // The displacement map texture
varying vec2 vUv;
uniform float time; // Time to control the animation
uniform float amplitude; // Amplitude of the wave
uniform float frequency; // Frequency of the wave
uniform vec2 mousePosition; // Mouse position in normalized coordinates

void main() {
  // Get the displacement value from the displacement map
  vec4 displacementData = texture2D(displacementMap, vUv);

  // Calculate the displacement along the y-axis using a sine function
  float displacement = amplitude * sin(vUv.x * frequency + time);

  // Calculate the distance from the current fragment to the mouse position
  float distanceToMouse = distance(vUv, mousePosition);

  // Use the distance to adjust the displacement
  displacement += (1.0 - distanceToMouse) * (displacementData.r - 0.5) * 2.0 * amplitude;

  // Apply the displacement to the texture coordinates
  vec2 displacedUV = vec2(vUv.x, vUv.y + displacement);

  // Get the color from the displaced texture coordinates
  vec4 color = texture2D(tDiffuse, displacedUV);

  gl_FragColor = color;
}
`;document.addEventListener("DOMContentLoaded",Zg);function Zg(){let n=!0,e=0,t={w:560,h:560},i={x:t.w/2+30,z:t.h/2+30,w:t.w+60,h:t.h+60},r=new Ii,s=new at(75,window.innerWidth/window.innerHeight,.1,1e4),o=new Ue({antialias:!0,preserveDrawingBuffer:!0});o.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(o.domElement);let a=o.domElement;o.setClearColor(0,1),o.shadowMap.enabled=!0,o.toneMapping=us,o.toneMappingExposure=.5,o.outputEncoding=vi,r.background=new oe(8978244),r.fog=new Kn(8978244,.02);let c=new Ki(16777215,1),l=new Ki(16777215,.4),h=new $r(16777215,1);c.position.set(5,2,0),l.position.set(-3.5,5,2),r.add(c),r.add(h);let u=ql(s);window.addEventListener("click",X);let f=new Ge({vertexShader:Tn,fragmentShader:Wg,uniforms:{tDiffuse:{value:null},contrast:{value:5}}}),d=new Ge({vertexShader:Tn,fragmentShader:qg,uniforms:{tDiffuse:{value:null},saturationAmount:{value:5}}}),m=new Ge({vertexShader:Tn,fragmentShader:Yl,uniforms:{tDiffuse:{value:null},time:{value:1},amplitude:{value:.03},frequency:{value:3}}}),x=new Ge({vertexShader:Tn,fragmentShader:Yl,uniforms:{tDiffuse:{value:null},time:{value:1},amplitude:{value:.1},frequency:{value:.5}}}),y=new Ge({vertexShader:Tn,fragmentShader:Xg,uniforms:{tDiffuse:{value:null},grainAmount:{value:.09}}}),g=new Ge({vertexShader:Tn,fragmentShader:jg,uniforms:{tDiffuse:{value:null},time:{value:0},distortion:{value:0},scanlineIntensity:{value:.9},glowIntensity:{value:.7}}}),p=new bt({vertexShader:Tn,fragmentShader:Yg,uniforms:{tDiffuse:{value:null},displacementMap:{value:null},time:{value:0},amplitude:{value:.1},frequency:{value:.1},mousePosition:{value:new V(0,0)}}}),E=new bt(y,"tDiffuse"),M=new bt(g,"tDiffuse"),T=new bt(m,"tDiffuse"),v=new bt(x,"tDiffuse"),C=new bt(d,"tDiffuse"),B=new bt(f,"tDiffuse"),D=new ss(r,s),O=new hn(new V(window.innerWidth,window.innerHeight),1.5,.4,.85);O.threshold=.7,O.strength=.4,O.radius=1;let R=new Wo(o);R.addPass(D),R.addPass(E),R.addPass(B),G("img/perlin.png",ce=>{R.addPass(O),console.log({tx:ce})});let U=Ul(t);U.receiveShadow=!0,r.add(U);for(var P=0;P<50;P++)Vl(r,t.w/2,t.h/2,U);se(r,t),s.position.set(0,3,0);let L=document.getElementById("buttonContainer"),F=kl({scene:r,mapSize:t,frontier:i}),I=new Xl(F);console.log({sampler:I});function X(ce){n=!0,window.removeEventListener("click",X)}function ee(){let ce=new _(0,0,1)}function Y(ce){requestAnimationFrame(Y),p.uniforms.time.value=ce*.001,m.uniforms.time.value=ce*.001,n?u.update(ce*2e-4):s.rotation.y+=.005,R.render()}for(let ce=0;ce<2;ce++)Jg(r,U);Y(0);function re(ce,ae){let le=50,Me=new Pt,de=new Qn(ae.w*10,ae.h*10,le,le),ge=tr("img/water.jpg"),j=new Pe(de,ge);j.position.x=0*1,j.position.y=-6.2*1,j.position.z=0*1,j.rotation.x=-Math.PI/2,ce.add(j)}function se(ce,ae){let le=new cn(1,24,24),Me=new St({color:11206570,opacity:1,transparent:!1});for(var de=0;de<ae.w*.5;de++){let ge=new Pe(le,Me);ge.position.set(Math.random()*ae.w-ae.w*.5,Math.random()*0+8,Math.random()*ae.h-ae.h*.5),ce.add(ge)}}function me(ce){let ae=new Pt,le=new _,Me=720;for(let de=0;de<Me;de++){let ge=Math.acos(-1+2*de/Me),j=Math.sqrt(Me*Math.PI)*ge,Z=Gl(2,Ie()),Q=15;Z.position.setFromSphericalCoords(Q,ge,j),le.copy(Z.position).multiplyScalar(2.5),Z.lookAt(le),ae.add(Z)}return ce.add(ae),ae.position.y+=22,ae}function be(ce){new Ot().load("img/rune/111.png",le=>{let Me=new cn(400,60,40);Me.scale(-1,1,1);let de=new Xt({map:le}),ge=new Pe(Me,de);ce.add(ge)})}function G(ce,ae){ce||(ce=er()),console.log({src:ce});let Me=new Ot().load(ce,de=>{ae(de)})}function Ie(ce,ae){ce||(ce=er());let Me=new Ot().load(ce);return new St({color:16777215,map:Me,opacity:1,transparent:!1})}}function Jg(n,e,t){let i=new li,r=new cn(.1,20,20),s=new St({color:16772608}),o=new Pe(r,s);o.position.x=0,o.position.y=0,o.position.z=0,o.castShadow=!0,n.add(o);let a=jl(c,l);a.goTo(Math.random()*50-25,Math.random()*5+5,Math.random()*50-25);function c(h,u,f){o.position.x=h,o.position.y=u,o.position.z=f,i.set(o.position,new _(0,-1,0));let d=i.intersectObject(e);if(d.length>0){let m=d[0].point;o.position.y=m.y+.05;let x={x:Math.atan2(d[0].face.normal.z,d[0].face.normal.y),y:Math.atan2(d[0].face.normal.x,d[0].face.normal.z),z:Math.atan2(d[0].face.normal.y,d[0].face.normal.x)};o.rotation.x=x.x,o.rotation.y=x.y,o.rotation.z=x.z}else o.position.y=u;o.position.x=h,o.position.z=f}function l(){a.goTo(Math.random()*50-25,Math.random()*25+5,Math.random()*50-25)}}})();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
