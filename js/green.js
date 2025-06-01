(()=>{var ra="127",Gt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iu=0,sa=1,ru=2;var oa=1,su=2,mi=3,ar=0,tt=1,Cn=2,aa=1;var gi=0,vi=1,cr=2,ca=3,la=4,ou=5,Pn=100,au=101,cu=102,ua=103,ha=104,lu=200,uu=201,hu=202,du=203,da=204,fa=205,fu=206,pu=207,mu=208,gu=209,vu=210,yu=0,xu=1,_u=2,ps=3,wu=4,bu=5,Mu=6,Su=7,lr=0,Eu=1,Tu=2,yi=0,Au=1,ms=2,Lu=3,Ru=4,Cu=5,pa=300,gs=301,vs=302,ma=303,ga=304,ys=306,xs=307,ur=1e3,wt=1001,_s=1002,dt=1003,va=1004;var ya=1005;var je=1006,Pu=1007;var hr=1008;var ws=1009,Du=1010,Iu=1011,dr=1012,Fu=1013,fr=1014,$t=1015,pr=1016,Bu=1017,Nu=1018,Ou=1019,xi=1020,zu=1021,xn=1022,ft=1023,Hu=1024,Uu=1025;var Dn=1026,_i=1027,Gu=1028,ku=1029,Vu=1030,Wu=1031,qu=1032,ju=1033,xa=33776,_a=33777,wa=33778,ba=33779,Ma=35840,Sa=35841,Ea=35842,Ta=35843,Xu=36196,Aa=37492,La=37496,Yu=37808,Zu=37809,Ju=37810,Qu=37811,Ku=37812,$u=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,ch=36492,lh=37840,uh=37841,hh=37842,dh=37843,fh=37844,ph=37845,mh=37846,gh=37847,vh=37848,yh=37849,xh=37850,_h=37851,wh=37852,bh=37853,Mh=2200,Sh=2201,Eh=2202,mr=2300,gr=2301,bs=2302,In=2400,Fn=2401,vr=2402,Ms=2500,Ra=2501,Th=0;var Bn=3e3,wi=3001,Ca=3007,Pa=3002,Ah=3003,Da=3004,Ia=3005,Fa=3006,Lh=3200,Rh=3201,Nn=0,Ch=1;var Ss=7680;var Ph=519,bi=35044,Mi=35048;var Ba="300 es";function Pt(){}Object.assign(Pt.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});let t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;let t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;let i=this._listeners[n];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;let t=this._listeners[n.type];if(t!==void 0){n.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n);n.target=null}}});var ot=[];for(let n=0;n<256;n++)ot[n]=(n<16?"0":"")+n.toString(16);var yr=1234567,_e={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[i&255]+ot[i>>8&255]+ot[i>>16&255]+ot[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:function(n,e,t){return(1-t)*n+t*e},damp:function(n,e,t,i){return _e.lerp(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(_e.euclideanModulo(n,e*2)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(yr=n%2147483647),yr=yr*16807%2147483647,(yr-1)/2147483646},degToRad:function(n){return n*_e.DEG2RAD},radToDeg:function(n){return n*_e.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)==0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},k=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};k.prototype.isVector2=!0;var nt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=r[0],y=r[3],g=r[6],p=r[1],E=r[4],M=r[7],A=r[2],x=r[5],D=r[8];return s[0]=o*v+a*p+c*A,s[3]=o*y+a*E+c*x,s[6]=o*g+a*M+c*D,s[1]=l*v+h*p+u*A,s[4]=l*y+h*E+u*x,s[7]=l*g+h*M+u*D,s[2]=d*v+f*p+m*A,s[5]=d*y+f*E+m*x,s[8]=d*g+f*M+m*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,m=t*u+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],h=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*h,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*h,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nt.prototype.isMatrix3=!0;var On,zn={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement=="undefined")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{On===void 0&&(On=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),On.width=n.width,On.height=n.height;let t=On.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=On}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}},Dh=0,it=class extends Pt{constructor(e=it.DEFAULT_IMAGE,t=it.DEFAULT_MAPPING,i=wt,r=wt,s=je,o=hr,a=ft,c=ws,l=1,h=Bn){super();Object.defineProperty(this,"id",{value:Dh++}),this.uuid=_e.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=_e.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Es(r[o].image)):s.push(Es(r[o]))}else s=Es(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case _s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case _s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};it.DEFAULT_IMAGE=void 0;it.DEFAULT_MAPPING=pa;it.prototype.isTexture=!0;function Es(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?zn.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ze=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],y=c[6],g=c[10];if(Math.abs(h-d)<o&&Math.abs(u-v)<o&&Math.abs(m-y)<o){if(Math.abs(h+d)<a&&Math.abs(u+v)<a&&Math.abs(m+y)<a&&Math.abs(l+f+g-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(f+1)/2,A=(g+1)/2,x=(h+d)/4,D=(u+v)/4,N=(m+y)/4;return E>M&&E>A?E<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=x/i,s=D/i):M>A?M<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=x/r,s=N/r):A<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=D/s,r=N/s),this.set(i,r,s,t),this}let p=Math.sqrt((y-m)*(y-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(y-m)/p,this.y=(u-v)/p,this.z=(d-h)/p,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};ze.prototype.isVector4=!0;var yt=class extends Pt{constructor(e,t,i){super();this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t),i=i||{},this.texture=new it(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:je,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.prototype.isWebGLRenderTarget=!0;var Na=class extends yt{constructor(e,t,i){super(e,t,i);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Na.prototype.isWebGLMultisampleRenderTarget=!0;var et=class{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let y=1-a,g=c*d+l*f+h*m+u*v,p=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){let A=Math.sqrt(E),x=Math.atan2(A,g*p);y=Math.sin(y*x)/A,a=Math.sin(a*x)/A}let M=a*p;if(c=c*y+d*M,l=l*y+f*M,h=h*y+m*M,u=u*y+v*M,y===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_e.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};et.prototype.isQuaternion=!0;var _=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,h=c*i+a*t-s*r,u=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_e.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};_.prototype.isVector3=!0;var Ts=new _,Oa=new et,bt=class{constructor(e=new _(Infinity,Infinity,Infinity),t=new _(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new _),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new _),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox),As.applyMatrix4(e.matrixWorld),this.union(As));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new _),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),xr.subVectors(this.max,Ei),Hn.subVectors(e.a,Ei),Un.subVectors(e.b,Ei),Gn.subVectors(e.c,Ei),en.subVectors(Un,Hn),tn.subVectors(Gn,Un),_n.subVectors(Hn,Gn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-_n.z,_n.y,en.z,0,-en.x,tn.z,0,-tn.x,_n.z,0,-_n.x,-en.y,en.x,0,-tn.y,tn.x,0,-_n.y,_n.x,0];return!Ls(t,Hn,Un,Gn,xr)||(t=[1,0,0,0,1,0,0,0,1],!Ls(t,Hn,Un,Gn,xr))?!1:(_r.crossVectors(en,tn),t=[_r.x,_r.y,_r.z],Ls(t,Hn,Un,Gn,xr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new _),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};bt.prototype.isBox3=!0;var Xt=[new _,new _,new _,new _,new _,new _,new _,new _],Si=new _,As=new bt,Hn=new _,Un=new _,Gn=new _,en=new _,tn=new _,_n=new _,Ei=new _,xr=new _,_r=new _,wn=new _;function Ls(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wn.fromArray(n,s);let a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),c=e.dot(wn),l=t.dot(wn),h=i.dot(wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ih=new bt,za=new _,Rs=new _,Cs=new _,bn=class{constructor(e=new _,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ih.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new _),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new bt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Cs.subVectors(e,this.center);let t=Cs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Cs.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return Rs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(za.copy(e.center).add(Rs)),this.expandByPoint(za.copy(e.center).sub(Rs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yt=new _,Ps=new _,wr=new _,nn=new _,Ds=new _,br=new _,Is=new _,rn=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new _),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new _),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.direction).multiplyScalar(t).add(this.origin),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ps.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Ps);let s=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=nn.dot(this.direction),c=-nn.dot(wr),l=nn.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(wr).multiplyScalar(d).add(Ps),f}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);let i=Yt.dot(this.direction),r=Yt.dot(Yt)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,i,r,s){Ds.subVectors(t,e),br.subVectors(i,e),Is.crossVectors(Ds,br);let o=this.direction.dot(Is),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nn.subVectors(this.origin,e);let c=a*this.direction.dot(br.crossVectors(nn,br));if(c<0)return null;let l=a*this.direction.dot(Ds.cross(nn));if(l<0||c+l>o)return null;let h=-a*nn.dot(Is);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,h,u,d,f,m,v,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),o=1/kn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Bh)}lookAt(e,t,i){let r=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),sn.crossVectors(i,Mt),sn.lengthSq()===0&&(Math.abs(i.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),sn.crossVectors(i,Mt)),sn.normalize(),Mr.crossVectors(Mt,sn),r[0]=sn.x,r[4]=Mr.x,r[8]=Mt.x,r[1]=sn.y,r[5]=Mr.y,r[9]=Mt.y,r[2]=sn.z,r[6]=Mr.z,r[10]=Mt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],y=i[10],g=i[14],p=i[3],E=i[7],M=i[11],A=i[15],x=r[0],D=r[4],N=r[8],I=r[12],U=r[1],C=r[5],G=r[9],P=r[13],R=r[2],B=r[6],F=r[10],X=r[14],$=r[3],Z=r[7],oe=r[11],ce=r[15];return s[0]=o*x+a*U+c*R+l*$,s[4]=o*D+a*C+c*B+l*Z,s[8]=o*N+a*G+c*F+l*oe,s[12]=o*I+a*P+c*X+l*ce,s[1]=h*x+u*U+d*R+f*$,s[5]=h*D+u*C+d*B+f*Z,s[9]=h*N+u*G+d*F+f*oe,s[13]=h*I+u*P+d*X+f*ce,s[2]=m*x+v*U+y*R+g*$,s[6]=m*D+v*C+y*B+g*Z,s[10]=m*N+v*G+y*F+g*oe,s[14]=m*I+v*P+y*X+g*ce,s[3]=p*x+E*U+M*R+A*$,s[7]=p*D+E*C+M*B+A*Z,s[11]=p*N+E*G+M*F+A*oe,s[15]=p*I+E*P+M*X+A*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],y=e[11],g=e[15];return m*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+y*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*h-i*l*h)+g*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],y=e[14],g=e[15],p=u*y*l-v*d*l+v*c*f-a*y*f-u*c*g+a*d*g,E=m*d*l-h*y*l-m*c*f+o*y*f+h*c*g-o*d*g,M=h*v*l-m*u*l+m*a*f-o*v*f-h*a*g+o*u*g,A=m*u*c-h*v*c-m*a*d+o*v*d+h*a*y-o*u*y,x=t*p+i*E+r*M+s*A;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/x;return e[0]=p*D,e[1]=(v*d*s-u*y*s-v*r*f+i*y*f+u*r*g-i*d*g)*D,e[2]=(a*y*s-v*c*s+v*r*l-i*y*l-a*r*g+i*c*g)*D,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*f-i*c*f)*D,e[4]=E*D,e[5]=(h*y*s-m*d*s+m*r*f-t*y*f-h*r*g+t*d*g)*D,e[6]=(m*c*s-o*y*s-m*r*l+t*y*l+o*r*g-t*c*g)*D,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*f+t*c*f)*D,e[8]=M*D,e[9]=(m*u*s-h*v*s-m*i*f+t*v*f+h*i*g-t*u*g)*D,e[10]=(o*v*s-m*a*s+m*i*l-t*v*l-o*i*g+t*a*g)*D,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*f-t*a*f)*D,e[12]=A*D,e[13]=(h*v*r-m*u*r+m*i*d-t*v*d-h*i*y+t*u*y)*D,e[14]=(m*a*r-o*v*r-m*i*c+t*v*c+o*i*y-t*a*y)*D,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,m=s*u,v=o*h,y=o*u,g=a*u,p=c*l,E=c*h,M=c*u,A=i.x,x=i.y,D=i.z;return r[0]=(1-(v+g))*A,r[1]=(f+M)*A,r[2]=(m-E)*A,r[3]=0,r[4]=(f-M)*x,r[5]=(1-(d+g))*x,r[6]=(y+p)*x,r[7]=0,r[8]=(m+E)*D,r[9]=(y-p)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=kn.set(r[0],r[1],r[2]).length(),o=kn.set(r[4],r[5],r[6]).length(),a=kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);let l=1/s,h=1/o,u=1/a;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=h,Dt.elements[5]*=h,Dt.elements[6]*=h,Dt.elements[8]*=u,Dt.elements[9]*=u,Dt.elements[10]*=u,t.setFromRotationMatrix(Dt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,c=1/(t-e),l=1/(i-r),h=1/(o-s),u=(t+e)*c,d=(i+r)*l,f=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};me.prototype.isMatrix4=!0;var kn=new _,Dt=new me,Fh=new _(0,0,0),Bh=new _(1,1,1),sn=new _,Mr=new _,Mt=new _,Ha=new me,Ua=new et,Mn=class{constructor(e=0,t=0,i=0,r=Mn.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){let r=_e.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new _(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Mn.prototype.isEuler=!0;Mn.DefaultOrder="XYZ";Mn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Fs=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Nh=0,Ga=new _,Vn=new et,Zt=new me,Sr=new _,Ti=new _,Oh=new _,zh=new et,ka=new _(1,0,0),Va=new _(0,1,0),Wa=new _(0,0,1),Hh={type:"added"},qa={type:"removed"};function Se(){Object.defineProperty(this,"id",{value:Nh++}),this.uuid=_e.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DefaultUp.clone();let n=new _,e=new Mn,t=new et,i=new _(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new nt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Se.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}Se.DefaultUp=new _(0,1,0);Se.DefaultMatrixAutoUpdate=!0;Se.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Se,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return Vn.setFromAxisAngle(n,e),this.quaternion.multiply(Vn),this},rotateOnWorldAxis:function(n,e){return Vn.setFromAxisAngle(n,e),this.quaternion.premultiply(Vn),this},rotateX:function(n){return this.rotateOnAxis(ka,n)},rotateY:function(n){return this.rotateOnAxis(Va,n)},rotateZ:function(n){return this.rotateOnAxis(Wa,n)},translateOnAxis:function(n,e){return Ga.copy(n).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(ka,n)},translateY:function(n){return this.translateOnAxis(Va,n)},translateZ:function(n){return this.translateOnAxis(Wa,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(Zt.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?Sr.copy(n):Sr.set(n,e,t);let i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(Ti,Sr,this.up):Zt.lookAt(Sr,Ti,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Vn.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(Hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(qa)),this},clear:function(){for(let n=0;n<this.children.length;n++){let e=this.children[n];e.parent=null,e.dispatchEvent(qa)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Zt.multiply(n.parent.matrixWorld)),n.applyMatrix4(Zt),this.add(n),n.updateWorldMatrix(!1,!0),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){let s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new _),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new et),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,n,Oh),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new _),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,zh,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new _),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){let e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){let t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){let e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let h=a[c];r(n.shapes,h)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){let o=s(n.geometries),a=s(n.materials),c=s(n.textures),l=s(n.images),h=s(n.shapes),u=s(n.skeletons),d=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),h.length>0&&(t.shapes=h),u.length>0&&(t.skeletons=u),d.length>0&&(t.animations=d)}return t.object=i,t;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){let i=n.children[t];this.add(i.clone())}return this}});var Bs=new _,Uh=new _,Gh=new nt,It=class{constructor(e=new _(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Bs.subVectors(i,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new _),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new _);let i=e.delta(Bs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new _),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gh.getNormalMatrix(e),r=this.coplanarPoint(Bs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};It.prototype.isPlane=!0;var Ft=new _,Jt=new _,Ns=new _,Qt=new _,Wn=new _,qn=new _,ja=new _,Os=new _,zs=new _,Hs=new _,Xe=class{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new _),r.subVectors(i,t),Ft.subVectors(e,t),r.cross(Ft);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ft.subVectors(r,t),Jt.subVectors(i,t),Ns.subVectors(e,t);let o=Ft.dot(Ft),a=Ft.dot(Jt),c=Ft.dot(Ns),l=Jt.dot(Jt),h=Jt.dot(Ns),u=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new _),u===0)return s.set(-2,-1,-1);let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Qt),c.set(0,0),c.addScaledVector(s,Qt.x),c.addScaledVector(o,Qt.y),c.addScaledVector(a,Qt.z),c}static isFrontFacing(e,t,i,r){return Ft.subVectors(i,t),Jt.subVectors(e,t),Ft.cross(Jt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Ft.cross(Jt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new _),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new It),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Xe.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new _);let i=this.a,r=this.b,s=this.c,o,a;Wn.subVectors(r,i),qn.subVectors(s,i),Os.subVectors(e,i);let c=Wn.dot(Os),l=qn.dot(Os);if(c<=0&&l<=0)return t.copy(i);zs.subVectors(e,r);let h=Wn.dot(zs),u=qn.dot(zs);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Wn,o);Hs.subVectors(e,s);let f=Wn.dot(Hs),m=qn.dot(Hs);if(m>=0&&f<=m)return t.copy(s);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(qn,a);let y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return ja.subVectors(s,r),a=(u-h)/(u-h+(f-m)),t.copy(r).addScaledVector(ja,a);let g=1/(y+v+d);return o=v*g,a=d*g,t.copy(i).addScaledVector(Wn,o).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kh=0;function Ye(){Object.defineProperty(this,"id",{value:kh++}),this.uuid=_e.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=vi,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Ye.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ye,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(let e in n){let t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===aa;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){let e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(t.blending=this.blending),this.side!==ar&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;let e=n.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Ye.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});var Xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Us(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ue=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=_e.euclideanModulo(e,1),t=_e.clamp(t,0,1),i=_e.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Us(s,r,e+1/3),this.g=Us(s,r,e),this.b=Us(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Xa[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let h=s-o;switch(c=l<=.5?h/(s+o):h/(2-s-o),s){case t:a=(i-r)/h+(i<r?6:0);break;case i:a=(r-t)/h+2;break;case r:a=(t-i)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=i,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Er);let i=_e.lerp(Bt.h,Er.h,t),r=_e.lerp(Bt.s,Er.s,t),s=_e.lerp(Bt.l,Er.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ue.NAMES=Xa;ue.prototype.isColor=!0;ue.prototype.r=1;ue.prototype.g=1;ue.prototype.b=1;var Vt=class extends Ye{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};Vt.prototype.isMeshBasicMaterial=!0;var We=new _,Tr=new k;function Le(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=bi,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Le.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Le.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ue),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new k),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new _),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new ze),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(n),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(n),this.setXYZ(e,We.x,We.y,We.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)We.x=this.getX(e),We.y=this.getY(e),We.z=this.getZ(e),We.applyMatrix4(n),this.setXYZ(e,We.x,We.y,We.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)We.x=this.getX(e),We.y=this.getY(e),We.z=this.getZ(e),We.applyNormalMatrix(n),this.setXYZ(e,We.x,We.y,We.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)We.x=this.getX(e),We.y=this.getY(e),We.z=this.getZ(e),We.transformDirection(n),this.setXYZ(e,We.x,We.y,We.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){let n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==bi&&(n.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(n.updateRange=this.updateRange),n}});function Vs(n,e,t){Le.call(this,new Int8Array(n),e,t)}Vs.prototype=Object.create(Le.prototype);Vs.prototype.constructor=Vs;function Ws(n,e,t){Le.call(this,new Uint8Array(n),e,t)}Ws.prototype=Object.create(Le.prototype);Ws.prototype.constructor=Ws;function qs(n,e,t){Le.call(this,new Uint8ClampedArray(n),e,t)}qs.prototype=Object.create(Le.prototype);qs.prototype.constructor=qs;function js(n,e,t){Le.call(this,new Int16Array(n),e,t)}js.prototype=Object.create(Le.prototype);js.prototype.constructor=js;function Ai(n,e,t){Le.call(this,new Uint16Array(n),e,t)}Ai.prototype=Object.create(Le.prototype);Ai.prototype.constructor=Ai;function Xs(n,e,t){Le.call(this,new Int32Array(n),e,t)}Xs.prototype=Object.create(Le.prototype);Xs.prototype.constructor=Xs;function Li(n,e,t){Le.call(this,new Uint32Array(n),e,t)}Li.prototype=Object.create(Le.prototype);Li.prototype.constructor=Li;function Ar(n,e,t){Le.call(this,new Uint16Array(n),e,t)}Ar.prototype=Object.create(Le.prototype);Ar.prototype.constructor=Ar;Ar.prototype.isFloat16BufferAttribute=!0;function Ae(n,e,t){Le.call(this,new Float32Array(n),e,t)}Ae.prototype=Object.create(Le.prototype);Ae.prototype.constructor=Ae;function Ys(n,e,t){Le.call(this,new Float64Array(n),e,t)}Ys.prototype=Object.create(Le.prototype);Ys.prototype.constructor=Ys;function Ya(n){if(n.length===0)return-Infinity;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}var Vh=0,Wt=new me,Zs=new Se,jn=new _,St=new bt,Ri=new bt,rt=new _;function Re(){Object.defineProperty(this,"id",{value:Vh++}),this.uuid=_e.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}Re.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Re,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(Ya(n)>65535?Li:Ai)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);let t=this.attributes.normal;if(t!==void 0){let r=new nt().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return Wt.makeRotationX(n),this.applyMatrix4(Wt),this},rotateY:function(n){return Wt.makeRotationY(n),this.applyMatrix4(Wt),this},rotateZ:function(n){return Wt.makeRotationZ(n),this.applyMatrix4(Wt),this},translate:function(n,e,t){return Wt.makeTranslation(n,e,t),this.applyMatrix4(Wt),this},scale:function(n,e,t){return Wt.makeScale(n,e,t),this.applyMatrix4(Wt),this},lookAt:function(n){return Zs.lookAt(n),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this},setFromPoints:function(n){let e=[];for(let t=0,i=n.length;t<i;t++){let r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new bt);let n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-Infinity,-Infinity,-Infinity),new _(Infinity,Infinity,Infinity));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){let r=e[t];St.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new bn);let n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,Infinity);return}if(n){let t=this.boundingSphere.center;if(St.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(St.min,Ri.min),St.expandByPoint(rt),rt.addVectors(St.max,Ri.max),St.expandByPoint(rt)):(St.expandByPoint(Ri.min),St.expandByPoint(Ri.max))}St.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)rt.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(rt));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)rt.fromBufferAttribute(o,c),a&&(jn.fromBufferAttribute(n,c),rt.add(jn)),i=Math.max(i,t.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){let n=this.index,e=this.attributes;if(n===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let t=n.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new Le(new Float32Array(4*o),4));let a=e.tangent.array,c=[],l=[];for(let I=0;I<o;I++)c[I]=new _,l[I]=new _;let h=new _,u=new _,d=new _,f=new k,m=new k,v=new k,y=new _,g=new _;function p(I,U,C){h.fromArray(i,I*3),u.fromArray(i,U*3),d.fromArray(i,C*3),f.fromArray(s,I*2),m.fromArray(s,U*2),v.fromArray(s,C*2),u.sub(h),d.sub(h),m.sub(f),v.sub(f);let G=1/(m.x*v.y-v.x*m.y);!isFinite(G)||(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(G),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(G),c[I].add(y),c[U].add(y),c[C].add(y),l[I].add(g),l[U].add(g),l[C].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.length}]);for(let I=0,U=E.length;I<U;++I){let C=E[I],G=C.start,P=C.count;for(let R=G,B=G+P;R<B;R+=3)p(t[R+0],t[R+1],t[R+2])}let M=new _,A=new _,x=new _,D=new _;function N(I){x.fromArray(r,I*3),D.copy(x);let U=c[I];M.copy(U),M.sub(x.multiplyScalar(x.dot(U))).normalize(),A.crossVectors(D,U);let G=A.dot(l[I])<0?-1:1;a[I*4]=M.x,a[I*4+1]=M.y,a[I*4+2]=M.z,a[I*4+3]=G}for(let I=0,U=E.length;I<U;++I){let C=E[I],G=C.start,P=C.count;for(let R=G,B=G+P;R<B;R+=3)N(t[R+0]),N(t[R+1]),N(t[R+2])}},computeVertexNormals:function(){let n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let u=0,d=t.count;u<d;u++)t.setXYZ(u,0,0,0);let i=new _,r=new _,s=new _,o=new _,a=new _,c=new _,l=new _,h=new _;if(n)for(let u=0,d=n.count;u<d;u+=3){let f=n.getX(u+0),m=n.getX(u+1),v=n.getX(u+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),o.fromBufferAttribute(t,f),a.fromBufferAttribute(t,m),c.fromBufferAttribute(t,v),o.add(l),a.add(l),c.add(l),t.setXYZ(f,o.x,o.y,o.z),t.setXYZ(m,a.x,a.y,a.z),t.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),t.setXYZ(u+0,l.x,l.y,l.z),t.setXYZ(u+1,l.x,l.y,l.z),t.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let t=this.attributes;for(let i in t){if(n.attributes[i]===void 0)continue;let s=t[i].array,o=n.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let h=0,u=c;h<l;h++,u++)s[u]=a[h]}return this},normalizeNormals:function(){let n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)rt.fromBufferAttribute(n,e),rt.normalize(),n.setXYZ(e,rt.x,rt.y,rt.z)},toNonIndexed:function(){function n(o,a){let c=o.array,l=o.itemSize,h=o.normalized,u=new c.constructor(a.length*l),d=0,f=0;for(let m=0,v=a.length;m<v;m++){d=a[m]*l;for(let y=0;y<l;y++)u[f++]=c[d++]}return new Le(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Re,t=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=n(a,t);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,h=c.length;l<h;l++){let u=c[l],d=n(u,t);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(n[c]=a[c]);return n}n.data={attributes:{}};let e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let t=this.attributes;for(let a in t){let c=t[a];n.data.attributes[a]=c.toJSON(n.data)}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];l.push(d.toJSON(n.data))}l.length>0&&(i[a]=l,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new Re().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=n.name;let t=n.index;t!==null&&this.setIndex(t.clone(e));let i=n.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=n.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=n.morphTargetsRelative;let s=n.groups;for(let c=0,l=s.length;c<l;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Za=new me,Xn=new rn,Js=new bn,on=new _,an=new _,cn=new _,Qs=new _,Ks=new _,$s=new _,Lr=new _,Rr=new _,Cr=new _,Pr=new k,Dr=new k,Ir=new k,eo=new _,Fr=new _;function Ie(n=new Re,e=new Vt){Se.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}Ie.prototype=Object.assign(Object.create(Se.prototype),{constructor:Ie,isMesh:!0,copy:function(n){return Se.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){let t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere),Js.applyMatrix4(r),n.ray.intersectsSphere(Js)===!1)||(Za.copy(r).invert(),Xn.copy(n.ray).applyMatrix4(Za),t.boundingBox!==null&&Xn.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){let o=t.index,a=t.attributes.position,c=t.morphAttributes.position,l=t.morphTargetsRelative,h=t.attributes.uv,u=t.attributes.uv2,d=t.groups,f=t.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,v=d.length;m<v;m++){let y=d[m],g=i[y.materialIndex],p=Math.max(y.start,f.start),E=Math.min(y.start+y.count,f.start+f.count);for(let M=p,A=E;M<A;M+=3){let x=o.getX(M),D=o.getX(M+1),N=o.getX(M+2);s=Br(this,g,n,Xn,a,c,l,h,u,x,D,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let y=m,g=v;y<g;y+=3){let p=o.getX(y),E=o.getX(y+1),M=o.getX(y+2);s=Br(this,i,n,Xn,a,c,l,h,u,p,E,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,v=d.length;m<v;m++){let y=d[m],g=i[y.materialIndex],p=Math.max(y.start,f.start),E=Math.min(y.start+y.count,f.start+f.count);for(let M=p,A=E;M<A;M+=3){let x=M,D=M+1,N=M+2;s=Br(this,g,n,Xn,a,c,l,h,u,x,D,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let y=m,g=v;y<g;y+=3){let p=y,E=y+1,M=y+2;s=Br(this,i,n,Xn,a,c,l,h,u,p,E,M),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function Wh(n,e,t,i,r,s,o,a){let c;if(e.side===tt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Cn,a),c===null)return null;Fr.copy(a),Fr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fr);return l<t.near||l>t.far?null:{distance:l,point:Fr.clone(),object:n}}function Br(n,e,t,i,r,s,o,a,c,l,h,u){on.fromBufferAttribute(r,l),an.fromBufferAttribute(r,h),cn.fromBufferAttribute(r,u);let d=n.morphTargetInfluences;if(e.morphTargets&&s&&d){Lr.set(0,0,0),Rr.set(0,0,0),Cr.set(0,0,0);for(let m=0,v=s.length;m<v;m++){let y=d[m],g=s[m];y!==0&&(Qs.fromBufferAttribute(g,l),Ks.fromBufferAttribute(g,h),$s.fromBufferAttribute(g,u),o?(Lr.addScaledVector(Qs,y),Rr.addScaledVector(Ks,y),Cr.addScaledVector($s,y)):(Lr.addScaledVector(Qs.sub(on),y),Rr.addScaledVector(Ks.sub(an),y),Cr.addScaledVector($s.sub(cn),y)))}on.add(Lr),an.add(Rr),cn.add(Cr)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(l,on),n.boneTransform(h,an),n.boneTransform(u,cn));let f=Wh(n,e,t,i,on,an,cn,eo);if(f){a&&(Pr.fromBufferAttribute(a,l),Dr.fromBufferAttribute(a,h),Ir.fromBufferAttribute(a,u),f.uv=Xe.getUV(eo,on,an,cn,Pr,Dr,Ir,new k)),c&&(Pr.fromBufferAttribute(c,l),Dr.fromBufferAttribute(c,h),Ir.fromBufferAttribute(c,u),f.uv2=Xe.getUV(eo,on,an,cn,Pr,Dr,Ir,new k));let m={a:l,b:h,c:u,normal:new _,materialIndex:0};Xe.getNormal(on,an,cn,m.normal),f.face=m}return f}var Kt=class extends Re{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function m(v,y,g,p,E,M,A,x,D,N,I){let U=M/D,C=A/N,G=M/2,P=A/2,R=x/2,B=D+1,F=N+1,X=0,$=0,Z=new _;for(let oe=0;oe<F;oe++){let ce=oe*C-P;for(let ge=0;ge<B;ge++){let xe=ge*U-G;Z[v]=xe*p,Z[y]=ce*E,Z[g]=R,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[y]=0,Z[g]=x>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ge/D),u.push(1-oe/N),X+=1}}for(let oe=0;oe<N;oe++)for(let ce=0;ce<D;ce++){let ge=d+ce+B*oe,xe=d+ce+B*(oe+1),V=d+(ce+1)+B*(oe+1),Fe=d+(ce+1)+B*oe;c.push(ge,xe,Fe),c.push(xe,V,Fe),$+=6}a.addGroup(f,$,I),f+=$,d+=X}}};function Yn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function at(n){let e={};for(let t=0;t<n.length;t++){let i=Yn(n[t]);for(let r in i)e[r]=i[r]}return e}var Zn={clone:Yn,merge:at},qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function ke(n){Ye.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}ke.prototype=Object.create(Ye.prototype);ke.prototype.constructor=ke;ke.prototype.isShaderMaterial=!0;ke.prototype.copy=function(n){return Ye.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Yn(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};ke.prototype.toJSON=function(n){let e=Ye.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let t={};for(let i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function Jn(){Se.call(this),this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}Jn.prototype=Object.assign(Object.create(Se.prototype),{constructor:Jn,isCamera:!0,copy:function(n,e){return Se.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new _),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){Se.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){Se.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function ct(n=50,e=1,t=.1,i=2e3){Jn.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}ct.prototype=Object.assign(Object.create(Jn.prototype),{constructor:ct,isPerspectiveCamera:!0,copy:function(n,e){return Jn.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){let e=.5*this.getFilmHeight()/n;this.fov=_e.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let n=Math.tan(_e.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return _e.RAD2DEG*2*Math.atan(Math.tan(_e.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let n=this.near,e=n*Math.tan(_e.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/c,i*=s.width/a,t*=s.height/c}let o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){let e=Se.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var Qn=90,Kn=1,Nr=class extends Se{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new ct(Qn,Kn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new _(1,0,0)),this.add(r);let s=new ct(Qn,Kn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new _(-1,0,0)),this.add(s);let o=new ct(Qn,Kn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new _(0,1,0)),this.add(o);let a=new ct(Qn,Kn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new _(0,-1,0)),this.add(a);let c=new ct(Qn,Kn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new _(0,0,1)),this.add(c);let l=new ct(Qn,Kn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new _(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h}},Ci=class extends it{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:gs,a=a!==void 0?a:xn,super(e,t,i,r,s,o,a,c,l,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ci.prototype.isCubeTexture=!0;var to=class extends yt{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Ci(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:je,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ft,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kt(5,5,5),s=new ke({name:"CubemapFromEquirect",uniforms:Yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tt,blending:gi});s.uniforms.tEquirect.value=t;let o=new Ie(r,s),a=t.minFilter;return t.minFilter===hr&&(t.minFilter=je),new Nr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};to.prototype.isWebGLCubeRenderTarget=!0;var Or=class extends it{constructor(e,t,i,r,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,r,s,u,d);this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:dt,this.minFilter=h!==void 0?h:dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Or.prototype.isDataTexture=!0;var $n=new bn,zr=new _,Pi=class{constructor(e=new It,t=new It,i=new It,r=new It,s=new It,o=new It){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],v=i[11],y=i[12],g=i[13],p=i[14],E=i[15];return t[0].setComponents(a-r,u-c,v-d,E-y).normalize(),t[1].setComponents(a+r,u+c,v+d,E+y).normalize(),t[2].setComponents(a+s,u+l,v+f,E+g).normalize(),t[3].setComponents(a-s,u-l,v-f,E-g).normalize(),t[4].setComponents(a-o,u-h,v-m,E-p).normalize(),t[5].setComponents(a+o,u+h,v+m,E+p).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ja(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xh(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,u,d),l.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let d=h.array,f=h.updateRange;n.bindBuffer(u,l),f.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}var Sn=class extends Re{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],v=[],y=[];for(let g=0;g<h;g++){let p=g*d-o;for(let E=0;E<l;E++){let M=E*u-s;m.push(M,-p,0),v.push(0,0,1),y.push(E/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let p=0;p<a;p++){let E=p+l*g,M=p+l*(g+1),A=p+1+l*(g+1),x=p+1+l*g;f.push(E,M,x),f.push(M,A,x)}this.setIndex(f),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(y,2))}},Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h="vec3 transformed = vec3( position );",ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
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
}`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`
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
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
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
}`,Cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Id=`uniform bool receiveShadow;
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
#endif`,Fd=`#if defined( USE_ENVMAP )
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Hd=`PhysicalMaterial material;
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
#endif`,Ud=`struct PhysicalMaterial {
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
}`,Gd=`
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,tf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,nf=`#ifdef USE_MORPHTARGETS
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
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,sf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#ifdef USE_SHADOWMAP
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
#endif`,yf=`#ifdef USE_SHADOWMAP
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
#endif`,xf=`#ifdef USE_SHADOWMAP
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
#endif`,_f=`float getShadowMask() {
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
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Cf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Pf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Df=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,If=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`#include <envmap_common_pars_fragment>
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,Vf=`#include <common>
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
}`,Wf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
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
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform vec3 diffuse;
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
}`,Zf=`uniform float scale;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,$f=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,rp=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,ap=`#define STANDARD
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
}`,cp=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,up=`uniform vec3 diffuse;
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
}`,hp=`uniform float size;
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
}`,dp=`uniform vec3 color;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`uniform float rotation;
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
}`,Pe={alphamap_fragment:Yh,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:Kh,begin_vertex:$h,beginnormal_vertex:ed,bsdfs:td,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:sd,clipping_planes_vertex:od,color_fragment:ad,color_pars_fragment:cd,color_pars_vertex:ld,color_vertex:ud,common:hd,cube_uv_reflection_fragment:dd,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,encodings_fragment:yd,encodings_pars_fragment:xd,envmap_fragment:_d,envmap_common_pars_fragment:wd,envmap_pars_fragment:bd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Fd,envmap_vertex:Sd,fog_vertex:Ed,fog_pars_vertex:Td,fog_fragment:Ad,fog_pars_fragment:Ld,gradientmap_pars_fragment:Rd,lightmap_fragment:Cd,lightmap_pars_fragment:Pd,lights_lambert_vertex:Dd,lights_pars_begin:Id,lights_toon_fragment:Bd,lights_toon_pars_fragment:Nd,lights_phong_fragment:Od,lights_phong_pars_fragment:zd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Gd,lights_fragment_maps:kd,lights_fragment_end:Vd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Xd,map_fragment:Yd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:$d,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:rf,normal_fragment_maps:sf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:cf,clearcoat_pars_fragment:lf,packing:uf,premultiplied_alpha_fragment:hf,project_vertex:df,dithering_fragment:ff,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:yf,shadowmap_vertex:xf,shadowmask_pars_fragment:_f,skinbase_vertex:wf,skinning_pars_vertex:bf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:Ef,specularmap_pars_fragment:Tf,tonemapping_fragment:Af,tonemapping_pars_fragment:Lf,transmissionmap_fragment:Rf,transmissionmap_pars_fragment:Cf,uv_pars_fragment:Pf,uv_pars_vertex:Df,uv_vertex:If,uv2_pars_fragment:Ff,uv2_pars_vertex:Bf,uv2_vertex:Nf,worldpos_vertex:Of,background_frag:zf,background_vert:Hf,cube_frag:Uf,cube_vert:Gf,depth_frag:kf,depth_vert:Vf,distanceRGBA_frag:Wf,distanceRGBA_vert:qf,equirect_frag:jf,equirect_vert:Xf,linedashed_frag:Yf,linedashed_vert:Zf,meshbasic_frag:Jf,meshbasic_vert:Qf,meshlambert_frag:Kf,meshlambert_vert:$f,meshmatcap_frag:ep,meshmatcap_vert:tp,meshtoon_frag:np,meshtoon_vert:ip,meshphong_frag:rp,meshphong_vert:sp,meshphysical_frag:op,meshphysical_vert:ap,normal_frag:cp,normal_vert:lp,points_frag:up,points_vert:hp,shadow_frag:dp,shadow_vert:fp,sprite_frag:pp,sprite_vert:mp},te={common:{diffuse:{value:new ue(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ue(15658734)},opacity:{value:1},center:{value:new k(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new nt}}},qt={basic:{uniforms:at([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:at([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new ue(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:at([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:at([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:at([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ue(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:at([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:at([te.points,te.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:at([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:at([te.common,te.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:at([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.normal_vert,fragmentShader:Pe.normal_frag},sprite:{uniforms:at([te.sprite,te.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},cube:{uniforms:at([te.envmap,{opacity:{value:1}}]),vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:at([te.common,te.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:at([te.lights,te.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};qt.physical={uniforms:at([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new k(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ue(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};function gp(n,e,t,i,r){let s=new ue(0),o=0,a,c,l=null,h=0,u=null;function d(m,v,y,g){let p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));let E=n.xr,M=E.getSession&&E.getSession();M&&M.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ys)?(c===void 0&&(c=new Ie(new Kt(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Yn(qt.cube.uniforms),vertexShader:qt.cube.vertexShader,fragmentShader:qt.cube.fragmentShader,side:tt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,x,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||h!==p.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,l=p,h=p.version,u=n.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Ie(new Sn(2,2),new ke({name:"BackgroundMaterial",uniforms:Yn(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||h!==p.version||u!==n.toneMapping)&&(a.material.needsUpdate=!0,l=p,h=p.version,u=n.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,v){t.buffers.color.setClear(m.r,m.g,m.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),o=v,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:d}}function vp(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null),l=c;function h(P,R,B,F,X){let $=!1;if(o){let Z=m(F,B,R);l!==Z&&(l=Z,d(l.object)),$=y(F,X),$&&g(F,X)}else{let Z=R.wireframe===!0;(l.geometry!==F.id||l.program!==B.id||l.wireframe!==Z)&&(l.geometry=F.id,l.program=B.id,l.wireframe=Z,$=!0)}P.isInstancedMesh===!0&&($=!0),X!==null&&t.update(X,34963),$&&(D(P,R,B,F),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function f(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,R,B){let F=B.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let $=X[R.id];$===void 0&&($={},X[R.id]=$);let Z=$[F];return Z===void 0&&(Z=v(u()),$[F]=Z),Z}function v(P){let R=[],B=[],F=[];for(let X=0;X<r;X++)R[X]=0,B[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:P,attributes:{},index:null}}function y(P,R){let B=l.attributes,F=P.attributes,X=0;for(let $ in F){let Z=B[$],oe=F[$];if(Z===void 0||Z.attribute!==oe||Z.data!==oe.data)return!0;X++}return l.attributesNum!==X||l.index!==R}function g(P,R){let B={},F=P.attributes,X=0;for(let $ in F){let Z=F[$],oe={};oe.attribute=Z,Z.data&&(oe.data=Z.data),B[$]=oe,X++}l.attributes=B,l.attributesNum=X,l.index=R}function p(){let P=l.newAttributes;for(let R=0,B=P.length;R<B;R++)P[R]=0}function E(P){M(P,0)}function M(P,R){let B=l.newAttributes,F=l.enabledAttributes,X=l.attributeDivisors;B[P]=1,F[P]===0&&(n.enableVertexAttribArray(P),F[P]=1),X[P]!==R&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,R),X[P]=R)}function A(){let P=l.newAttributes,R=l.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==P[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function x(P,R,B,F,X,$){i.isWebGL2===!0&&(B===5124||B===5125)?n.vertexAttribIPointer(P,R,B,X,$):n.vertexAttribPointer(P,R,B,F,X,$)}function D(P,R,B,F){if(i.isWebGL2===!1&&(P.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let X=F.attributes,$=B.getAttributes(),Z=R.defaultAttributeValues;for(let oe in $){let ce=$[oe];if(ce>=0){let ge=X[oe];if(ge!==void 0){let xe=ge.normalized,V=ge.itemSize,Fe=t.get(ge);if(Fe===void 0)continue;let Ce=Fe.buffer,ne=Fe.type,le=Fe.bytesPerElement;if(ge.isInterleavedBufferAttribute){let we=ge.data,fe=we.stride,pe=ge.offset;we&&we.isInstancedInterleavedBuffer?(M(ce,we.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=we.meshPerAttribute*we.count)):E(ce),n.bindBuffer(34962,Ce),x(ce,V,ne,xe,fe*le,pe*le)}else ge.isInstancedBufferAttribute?(M(ce,ge.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=ge.meshPerAttribute*ge.count)):E(ce),n.bindBuffer(34962,Ce),x(ce,V,ne,xe,0,0)}else if(oe==="instanceMatrix"){let xe=t.get(P.instanceMatrix);if(xe===void 0)continue;let V=xe.buffer,Fe=xe.type;M(ce+0,1),M(ce+1,1),M(ce+2,1),M(ce+3,1),n.bindBuffer(34962,V),n.vertexAttribPointer(ce+0,4,Fe,!1,64,0),n.vertexAttribPointer(ce+1,4,Fe,!1,64,16),n.vertexAttribPointer(ce+2,4,Fe,!1,64,32),n.vertexAttribPointer(ce+3,4,Fe,!1,64,48)}else if(oe==="instanceColor"){let xe=t.get(P.instanceColor);if(xe===void 0)continue;let V=xe.buffer,Fe=xe.type;M(ce,1),n.bindBuffer(34962,V),n.vertexAttribPointer(ce,3,Fe,!1,12,0)}else if(Z!==void 0){let xe=Z[oe];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(ce,xe);break;case 3:n.vertexAttrib3fv(ce,xe);break;case 4:n.vertexAttrib4fv(ce,xe);break;default:n.vertexAttrib1fv(ce,xe)}}}}A()}function N(){C();for(let P in a){let R=a[P];for(let B in R){let F=R[B];for(let X in F)f(F[X].object),delete F[X];delete R[B]}delete a[P]}}function I(P){if(a[P.id]===void 0)return;let R=a[P.id];for(let B in R){let F=R[B];for(let X in F)f(F[X].object),delete F[X];delete R[B]}delete a[P.id]}function U(P){for(let R in a){let B=a[R];if(B[P.id]===void 0)continue;let F=B[P.id];for(let X in F)f(F[X].object),delete F[X];delete B[P.id]}}function C(){G(),l!==c&&(l=c,d(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:C,resetDefaultState:G,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:p,enableAttribute:E,disableUnusedAttributes:A}}function yp(n,e,t,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,h){n.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function xp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(x){if(x==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),u=n.getParameter(35660),d=n.getParameter(3379),f=n.getParameter(34076),m=n.getParameter(34921),v=n.getParameter(36347),y=n.getParameter(36348),g=n.getParameter(36349),p=u>0,E=o||e.has("OES_texture_float"),M=p&&E,A=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:A}}function _p(n){let e=this,t=null,i=0,r=!1,s=!1,o=new It,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){let m=u.length!==0||d||i!==0||r;return r=d,t=h(u,f,0),i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,y=u.clipShadows,g=n.get(u);if(!r||m===null||m.length===0||s&&!y)s?h(null):l();else{let p=s?0:i,E=p*4,M=g.clippingState||null;c.value=M,M=h(m,d,E,f);for(let A=0;A!==E;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,y=null;if(v!==0){if(y=c.value,m!==!0||y===null){let g=f+v*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<g)&&(y=new Float32Array(g));for(let E=0,M=f;E!==v;++E,M+=4)o.copy(u[E]).applyMatrix4(p,a),o.normal.toArray(y,M),y[M+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function wp(n){let e=new WeakMap;function t(o,a){return a===ma?o.mapping=gs:a===ga&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ma||a===ga)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=n.getRenderTarget(),h=new to(c.height/2);return h.fromEquirectangularTexture(n,o),e.set(o,h),n.setRenderTarget(l),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function bp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Mp(n,e,t,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],34962);let f=u.morphAttributes;for(let m in f){let v=f[m];for(let y=0,g=v.length;y<g;y++)e.update(v[y],34962)}}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let p=f.array;v=f.version;for(let E=0,M=p.length;E<M;E+=3){let A=p[E+0],x=p[E+1],D=p[E+2];d.push(A,x,x,D,D,A)}}else{let p=m.array;v=m.version;for(let E=0,M=p.length/3-1;E<M;E+=3){let A=E+0,x=E+1,D=E+2;d.push(A,x,x,D,D,A)}}let y=new(Ya(d)>65535?Li:Ai)(d,1);y.version=v;let g=s.get(u);g&&e.remove(g),s.set(u,y)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Sp(n,e,t,i){let r=i.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){n.drawElements(s,f,a,d*c),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let v,y;if(r)v=n,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](s,f,a,d*c,m),t.update(f,s,m)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Ep(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tp(n,e){return n[0]-e[0]}function Ap(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Lp(n){let e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,h=l===void 0?0:l.length,u=e[o.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];e[o.id]=u}for(let y=0;y<h;y++){let g=u[y];g[0]=y,g[1]=l[y]}u.sort(Ap);for(let y=0;y<8;y++)y<h&&u[y][1]?(i[y][0]=u[y][0],i[y][1]=u[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(Tp);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let g=i[y],p=g[0],E=g[1];p!==Number.MAX_SAFE_INTEGER&&E?(d&&o.getAttribute("morphTarget"+y)!==d[p]&&o.setAttribute("morphTarget"+y,d[p]),f&&o.getAttribute("morphNormal"+y)!==f[p]&&o.setAttribute("morphNormal"+y,f[p]),t[y]=E,m+=E):(d&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),f&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),t[y]=0)}let v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function Rp(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var no=class extends it{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}};no.prototype.isDataTexture2DArray=!0;var io=class extends it{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}};io.prototype.isDataTexture3D=!0;var Qa=new it,Cp=new no,Pp=new io,Ka=new Ci,$a=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function ei(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rc(n,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ip(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function Fp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function Bp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function Np(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(pt(t,i))return;ic.set(i),n.uniformMatrix2fv(this.addr,!1,ic),lt(t,i)}}function Op(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(pt(t,i))return;nc.set(i),n.uniformMatrix3fv(this.addr,!1,nc),lt(t,i)}}function zp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(pt(t,i))return;tc.set(i),n.uniformMatrix4fv(this.addr,!1,tc),lt(t,i)}}function Hp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Up(n,e){let t=this.cache;pt(t,e)||(n.uniform2iv(this.addr,e),lt(t,e))}function Gp(n,e){let t=this.cache;pt(t,e)||(n.uniform3iv(this.addr,e),lt(t,e))}function kp(n,e){let t=this.cache;pt(t,e)||(n.uniform4iv(this.addr,e),lt(t,e))}function Vp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wp(n,e){let t=this.cache;pt(t,e)||(n.uniform2uiv(this.addr,e),lt(t,e))}function qp(n,e){let t=this.cache;pt(t,e)||(n.uniform3uiv(this.addr,e),lt(t,e))}function jp(n,e){let t=this.cache;pt(t,e)||(n.uniform4uiv(this.addr,e),lt(t,e))}function Xp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Qa,r)}function Yp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pp,r)}function Zp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Ka,r)}function Jp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cp,r)}function Qp(n){switch(n){case 5126:return Dp;case 35664:return Ip;case 35665:return Fp;case 35666:return Bp;case 35674:return Np;case 35675:return Op;case 35676:return zp;case 5124:case 35670:return Hp;case 35667:case 35671:return Up;case 35668:case 35672:return Gp;case 35669:case 35673:return kp;case 5125:return Vp;case 36294:return Wp;case 36295:return qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Kp(n,e){n.uniform1fv(this.addr,e)}function $p(n,e){let t=ei(e,this.size,2);n.uniform2fv(this.addr,t)}function em(n,e){let t=ei(e,this.size,3);n.uniform3fv(this.addr,t)}function tm(n,e){let t=ei(e,this.size,4);n.uniform4fv(this.addr,t)}function nm(n,e){let t=ei(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function im(n,e){let t=ei(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rm(n,e){let t=ei(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sm(n,e){n.uniform1iv(this.addr,e)}function om(n,e){n.uniform2iv(this.addr,e)}function am(n,e){n.uniform3iv(this.addr,e)}function cm(n,e){n.uniform4iv(this.addr,e)}function lm(n,e){n.uniform1uiv(this.addr,e)}function um(n,e){n.uniform2uiv(this.addr,e)}function hm(n,e){n.uniform3uiv(this.addr,e)}function dm(n,e){n.uniform4uiv(this.addr,e)}function fm(n,e,t){let i=e.length,r=rc(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Qa,r[s])}function pm(n,e,t){let i=e.length,r=rc(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Ka,r[s])}function mm(n){switch(n){case 5126:return Kp;case 35664:return $p;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return um;case 36295:return hm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35680:case 36300:case 36308:case 36293:return pm}}function gm(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=Qp(e.type)}function sc(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=mm(e.type)}sc.prototype.updateCache=function(n){let e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),lt(e,n)};function oc(n){this.id=n,this.seq=[],this.map={}}oc.prototype.setValue=function(n,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(n,e[o.id],t)}};var ro=/(\w+)(\])?(\[|\.)?/g;function ac(n,e){n.seq.push(e),n.map[e.id]=e}function vm(n,e,t){let i=n.name,r=i.length;for(ro.lastIndex=0;;){let s=ro.exec(i),o=ro.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ac(t,l===void 0?new gm(a,n,e):new sc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new oc(a),ac(t,u)),t=u}}}function ln(n,e){this.seq=[],this.map={};let t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);vm(r,s,this)}}ln.prototype.setValue=function(n,e,t,i){let r=this.map[e];r!==void 0&&r.setValue(n,t,i)};ln.prototype.setOptional=function(n,e,t){let i=e[t];i!==void 0&&this.setValue(n,t,i)};ln.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};ln.seqWithValue=function(n,e){let t=[];for(let i=0,r=n.length;i!==r;++i){let s=n[i];s.id in e&&t.push(s)}return t};function cc(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ym=0;function xm(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function lc(n){switch(n){case Bn:return["Linear","( value )"];case wi:return["sRGB","( value )"];case Pa:return["RGBE","( value )"];case Da:return["RGBM","( value, 7.0 )"];case Ia:return["RGBM","( value, 16.0 )"];case Fa:return["RGBD","( value, 256.0 )"];case Ca:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Ah:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function uc(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+xm(s)}function Di(n,e){let t=lc(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function _m(n,e){let t=lc(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wm(n,e){let t;switch(e){case Au:t="Linear";break;case ms:t="Reinhard";break;case Lu:t="OptimizedCineon";break;case Ru:t="ACESFilmic";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bm(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Mm(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sm(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function Ii(n){return n!==""}function hc(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(n){return n.replace(Em,Tm)}function Tm(n,e){let t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return so(t)}var Am=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace(Lm,pc).replace(Am,Rm)}function Rm(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),pc(n,e,t,i)}function pc(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case ys:case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function Im(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lr:e="ENVMAP_BLENDING_MULTIPLY";break;case Eu:e="ENVMAP_BLENDING_MIX";break;case Tu:e="ENVMAP_BLENDING_ADD";break}return e}function Fm(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Cm(t),l=Pm(t),h=Dm(t),u=Im(t),d=n.gammaFactor>0?n.gammaFactor:1,f=t.isWebGL2?"":bm(t),m=Mm(s),v=r.createProgram(),y,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(Ii).join(`
`),y.length>0&&(y+=`
`),g=[f,m].filter(Ii).join(`
`),g.length>0&&(g+=`
`)):(y=[mc(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),g=[f,mc(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Pe.tonemapping_pars_fragment:"",t.toneMapping!==yi?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Pe.encodings_pars_fragment,t.map?Di("mapTexelToLinear",t.mapEncoding):"",t.matcap?Di("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Di("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Di("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Di("lightMapTexelToLinear",t.lightMapEncoding):"",_m("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=so(o),o=hc(o,t),o=dc(o,t),a=so(a),a=hc(a,t),a=dc(a,t),o=fc(o),a=fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Ba?"":"out highp vec4 pc_fragColor;",t.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=p+y+o,M=p+g+a,A=cc(r,35633,E),x=cc(r,35632,M);if(r.attachShader(v,A),r.attachShader(v,x),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){let I=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(A).trim(),C=r.getShaderInfoLog(x).trim(),G=!0,P=!0;if(r.getProgramParameter(v,35714)===!1){G=!1;let R=uc(r,A,"vertex"),B=uc(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",I,R,B)}else I!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",I):(U===""||C==="")&&(P=!1);P&&(this.diagnostics={runnable:G,programLog:I,vertexShader:{log:U,prefix:y},fragmentShader:{log:C,prefix:g}})}r.deleteShader(A),r.deleteShader(x);let D;this.getUniforms=function(){return D===void 0&&(D=new ln(r,v)),D};let N;return this.getAttributes=function(){return N===void 0&&(N=Sm(r,v)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=x,this}function Bm(n,e,t,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(x){let N=x.skeleton.bones;if(l)return 1024;{let U=Math.floor((h-20)/4),C=Math.min(U,N.length);return C<N.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+N.length+" bones. This GPU supports "+C+"."),0):C}}function y(x){let D;return x&&x.isTexture?D=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),D=x.texture.encoding):D=Bn,D}function g(x,D,N,I,U){let C=I.fog,G=x.isMeshStandardMaterial?I.environment:null,P=e.get(x.envMap||G),R=f[x.type],B=U.isSkinnedMesh?v(U):0;x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let F,X;if(R){let oe=qt[R];F=oe.vertexShader,X=oe.fragmentShader}else F=x.vertexShader,X=x.fragmentShader;let $=n.getRenderTarget();return{isWebGL2:a,shaderID:R,shaderName:x.type,vertexShader:F,fragmentShader:X,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:u,outputEncoding:$!==null?y($.texture):n.outputEncoding,map:!!x.map,mapEncoding:y(x.map),matcap:!!x.matcap,matcapEncoding:y(x.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:y(P),envMapCubeUV:!!P&&(P.mapping===ys||P.mapping===xs),lightMap:!!x.lightMap,lightMapEncoding:y(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:y(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ch,tangentSpaceNormalMap:x.normalMapType===Nn,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&U.geometry.attributes.color&&U.geometry.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmissionMap)&&!!x.displacementMap,fog:!!C,useFog:x.fog,fogExp2:C&&C.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&B>0,maxBones:B,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:yi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===Cn,flipSided:x.side===tt,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let D=[];if(x.shaderID?D.push(x.shaderID):(D.push(x.fragmentShader),D.push(x.vertexShader)),x.defines!==void 0)for(let N in x.defines)D.push(N),D.push(x.defines[N]);if(x.isRawShaderMaterial===!1){for(let N=0;N<m.length;N++)D.push(x[m[N]]);D.push(n.outputEncoding),D.push(n.gammaFactor)}return D.push(x.customProgramCacheKey),D.join()}function E(x){let D=f[x.type],N;if(D){let I=qt[D];N=Zn.clone(I.uniforms)}else N=x.uniforms;return N}function M(x,D){let N;for(let I=0,U=o.length;I<U;I++){let C=o[I];if(C.cacheKey===D){N=C,++N.usedTimes;break}}return N===void 0&&(N=new Fm(n,D,x,r),o.push(N)),N}function A(x){if(--x.usedTimes==0){let D=o.indexOf(x);o[D]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:A,programs:o}}function Nm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Om(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gc(n){let e=[],t=0,i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(d,f,m,v,y,g){let p=e[t],E=n.get(m);return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,program:E.program||s,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.program=E.program||s,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=y,p.group=g),t++,p}function c(d,f,m,v,y,g){let p=a(d,f,m,v,y,g);(m.transparent===!0?r:i).push(p)}function l(d,f,m,v,y,g){let p=a(d,f,m,v,y,g);(m.transparent===!0?r:i).unshift(p)}function h(d,f){i.length>1&&i.sort(d||Om),r.length>1&&r.sort(f||zm)}function u(){for(let d=t,f=e.length;d<f;d++){let m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:u,sort:h}}function Hm(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new gc(n),e.set(r,[o])):s>=e.get(r).length?(o=new gc(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Um(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new ue};break;case"SpotLight":t={position:new _,direction:new _,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function Gm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var km=0;function Vm(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Wm(n,e){let t=new Um,i=Gm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new _);let s=new _,o=new me,a=new me;function c(h){let u=0,d=0,f=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let m=0,v=0,y=0,g=0,p=0,E=0,M=0,A=0;h.sort(Vm);for(let D=0,N=h.length;D<N;D++){let I=h[D],U=I.color,C=I.intensity,G=I.distance,P=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*C,d+=U.g*C,f+=U.b*C;else if(I.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(I.sh.coefficients[R],C);else if(I.isDirectionalLight){let R=t.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let B=I.shadow,F=i.get(I);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,r.directionalShadow[m]=F,r.directionalShadowMap[m]=P,r.directionalShadowMatrix[m]=I.shadow.matrix,E++}r.directional[m]=R,m++}else if(I.isSpotLight){let R=t.get(I);if(R.position.setFromMatrixPosition(I.matrixWorld),R.color.copy(U).multiplyScalar(C),R.distance=G,R.coneCos=Math.cos(I.angle),R.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),R.decay=I.decay,I.castShadow){let B=I.shadow,F=i.get(I);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,r.spotShadow[y]=F,r.spotShadowMap[y]=P,r.spotShadowMatrix[y]=I.shadow.matrix,A++}r.spot[y]=R,y++}else if(I.isRectAreaLight){let R=t.get(I);R.color.copy(U).multiplyScalar(C),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=R,g++}else if(I.isPointLight){let R=t.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),R.distance=I.distance,R.decay=I.decay,I.castShadow){let B=I.shadow,F=i.get(I);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,r.pointShadow[v]=F,r.pointShadowMap[v]=P,r.pointShadowMatrix[v]=I.shadow.matrix,M++}r.point[v]=R,v++}else if(I.isHemisphereLight){let R=t.get(I);R.skyColor.copy(I.color).multiplyScalar(C),R.groundColor.copy(I.groundColor).multiplyScalar(C),r.hemi[p]=R,p++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;let x=r.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==E||x.numPointShadows!==M||x.numSpotShadows!==A)&&(r.directional.length=m,r.spot.length=y,r.rectArea.length=g,r.point.length=v,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,x.directionalLength=m,x.pointLength=v,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=E,x.numPointShadows=M,x.numSpotShadows=A,r.version=km++)}function l(h,u){let d=0,f=0,m=0,v=0,y=0,g=u.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){let M=h[p];if(M.isDirectionalLight){let A=r.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(M.isSpotLight){let A=r.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let A=r.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let A=r.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let A=r.hemi[y];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),A.direction.normalize(),y++}}}return{setup:c,setupView:l,state:r}}function vc(n,e){let t=new Wm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(){t.setup(i)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qm(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new vc(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new vc(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}var oo=class extends Ye{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Lh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};oo.prototype.isMeshDepthMaterial=!0;var ao=class extends Ye{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new _,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ao.prototype.isMeshDistanceMaterial=!0;var jm=`uniform sampler2D shadow_pass;
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
}`,Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function yc(n,e,t){let i=new Pi,r=new k,s=new k,o=new ze,a=[],c=[],l={},h=t.maxTextureSize,u={0:tt,1:ar,2:Cn},d=new ke({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:Xm,fragmentShader:jm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ie(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa,this.render=function(x,D,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||x.length===0)return;let I=n.getRenderTarget(),U=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),G=n.state;G.setBlending(gi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let P=0,R=x.length;P<R;P++){let B=x[P],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let X=F.getFrameExtents();if(r.multiply(X),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===mi){let Z={minFilter:je,magFilter:je,format:ft};F.map=new yt(r.x,r.y,Z),F.map.texture.name=B.name+".shadowMap",F.mapPass=new yt(r.x,r.y,Z),F.camera.updateProjectionMatrix()}if(F.map===null){let Z={minFilter:dt,magFilter:dt,format:ft};F.map=new yt(r.x,r.y,Z),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let $=F.getViewportCount();for(let Z=0;Z<$;Z++){let oe=F.getViewport(Z);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),G.viewport(o),F.updateMatrices(B,Z),i=F.getFrustum(),A(D,N,F.camera,B,this.type)}!F.isPointLightShadow&&this.type===mi&&g(F,N),F.needsUpdate=!1}y.needsUpdate=!1,n.setRenderTarget(I,U,C)};function g(x,D){let N=e.update(v);d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(D,null,N,d,v,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(D,null,N,f,v,null)}function p(x,D,N){let I=x<<0|D<<1|N<<2,U=a[I];return U===void 0&&(U=new oo({depthPacking:Rh,morphTargets:x,skinning:D}),a[I]=U),U}function E(x,D,N){let I=x<<0|D<<1|N<<2,U=c[I];return U===void 0&&(U=new ao({morphTargets:x,skinning:D}),c[I]=U),U}function M(x,D,N,I,U,C,G){let P=null,R=p,B=x.customDepthMaterial;if(I.isPointLight===!0&&(R=E,B=x.customDistanceMaterial),B===void 0){let F=!1;N.morphTargets===!0&&(F=D.morphAttributes&&D.morphAttributes.position&&D.morphAttributes.position.length>0);let X=!1;x.isSkinnedMesh===!0&&(N.skinning===!0?X=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",x));let $=x.isInstancedMesh===!0;P=R(F,X,$)}else P=B;if(n.localClippingEnabled&&N.clipShadows===!0&&N.clippingPlanes.length!==0){let F=P.uuid,X=N.uuid,$=l[F];$===void 0&&($={},l[F]=$);let Z=$[X];Z===void 0&&(Z=P.clone(),$[X]=Z),P=Z}return P.visible=N.visible,P.wireframe=N.wireframe,G===mi?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:u[N.side],P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,I.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(I.matrixWorld),P.nearDistance=U,P.farDistance=C),P}function A(x,D,N,I,U){if(x.visible===!1)return;if(x.layers.test(D.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&U===mi)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld);let P=e.update(x),R=x.material;if(Array.isArray(R)){let B=P.groups;for(let F=0,X=B.length;F<X;F++){let $=B[F],Z=R[$.materialIndex];if(Z&&Z.visible){let oe=M(x,P,Z,I,N.near,N.far,U);n.renderBufferDirect(N,null,P,oe,x,$)}}}else if(R.visible){let B=M(x,P,R,I,N.near,N.far,U);n.renderBufferDirect(N,null,P,B,x,null)}}let G=x.children;for(let P=0,R=G.length;P<R;P++)A(G[P],D,N,I,U)}}function Ym(n,e,t){let i=t.isWebGL2;function r(){let L=!1,Q=new ze,ee=null,T=new ze(0,0,0,0);return{setMask:function(z){ee!==z&&!L&&(n.colorMask(z,z,z,z),ee=z)},setLocked:function(z){L=z},setClear:function(z,ae,ye,Ue,gt){gt===!0&&(z*=Ue,ae*=Ue,ye*=Ue),Q.set(z,ae,ye,Ue),T.equals(Q)===!1&&(n.clearColor(z,ae,ye,Ue),T.copy(Q))},reset:function(){L=!1,ee=null,T.set(-1,0,0,0)}}}function s(){let L=!1,Q=null,ee=null,T=null;return{setTest:function(z){z?ge(2929):xe(2929)},setMask:function(z){Q!==z&&!L&&(n.depthMask(z),Q=z)},setFunc:function(z){if(ee!==z){if(z)switch(z){case yu:n.depthFunc(512);break;case xu:n.depthFunc(519);break;case _u:n.depthFunc(513);break;case ps:n.depthFunc(515);break;case wu:n.depthFunc(514);break;case bu:n.depthFunc(518);break;case Mu:n.depthFunc(516);break;case Su:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ee=z}},setLocked:function(z){L=z},setClear:function(z){T!==z&&(n.clearDepth(z),T=z)},reset:function(){L=!1,Q=null,ee=null,T=null}}}function o(){let L=!1,Q=null,ee=null,T=null,z=null,ae=null,ye=null,Ue=null,gt=null;return{setTest:function(Ve){L||(Ve?ge(2960):xe(2960))},setMask:function(Ve){Q!==Ve&&!L&&(n.stencilMask(Ve),Q=Ve)},setFunc:function(Ve,Tt,Je){(ee!==Ve||T!==Tt||z!==Je)&&(n.stencilFunc(Ve,Tt,Je),ee=Ve,T=Tt,z=Je)},setOp:function(Ve,Tt,Je){(ae!==Ve||ye!==Tt||Ue!==Je)&&(n.stencilOp(Ve,Tt,Je),ae=Ve,ye=Tt,Ue=Je)},setLocked:function(Ve){L=Ve},setClear:function(Ve){gt!==Ve&&(n.clearStencil(Ve),gt=Ve)},reset:function(){L=!1,Q=null,ee=null,T=null,z=null,ae=null,ye=null,Ue=null,gt=null}}}let a=new r,c=new s,l=new o,h={},u=null,d={},f=null,m=!1,v=null,y=null,g=null,p=null,E=null,M=null,A=null,x=!1,D=null,N=null,I=null,U=null,C=null,G=n.getParameter(35661),P=!1,R=0,B=n.getParameter(7938);B.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=R>=1):B.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=R>=2);let F=null,X={},$=new ze(0,0,n.canvas.width,n.canvas.height),Z=new ze(0,0,n.canvas.width,n.canvas.height);function oe(L,Q,ee){let T=new Uint8Array(4),z=n.createTexture();n.bindTexture(L,z),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let ae=0;ae<ee;ae++)n.texImage2D(Q+ae,0,6408,1,1,0,6408,5121,T);return z}let ce={};ce[3553]=oe(3553,3553,1),ce[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ge(2929),c.setFunc(ps),pe(!1),Y(sa),ge(2884),we(gi);function ge(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function V(L){L!==u&&(n.bindFramebuffer(36160,L),u=L)}function Fe(L,Q){Q===null&&u!==null&&(Q=u),d[L]!==Q&&(n.bindFramebuffer(L,Q),d[L]=Q)}function Ce(L){return f!==L?(n.useProgram(L),f=L,!0):!1}let ne={[Pn]:32774,[au]:32778,[cu]:32779};if(i)ne[ua]=32775,ne[ha]=32776;else{let L=e.get("EXT_blend_minmax");L!==null&&(ne[ua]=L.MIN_EXT,ne[ha]=L.MAX_EXT)}let le={[lu]:0,[uu]:1,[hu]:768,[da]:770,[vu]:776,[mu]:774,[fu]:772,[du]:769,[fa]:771,[gu]:775,[pu]:773};function we(L,Q,ee,T,z,ae,ye,Ue){if(L===gi){m===!0&&(xe(3042),m=!1);return}if(m===!1&&(ge(3042),m=!0),L!==ou){if(L!==v||Ue!==x){if((y!==Pn||E!==Pn)&&(n.blendEquation(32774),y=Pn,E=Pn),Ue)switch(L){case vi:n.blendFuncSeparate(1,771,1,771);break;case cr:n.blendFunc(1,1);break;case ca:n.blendFuncSeparate(0,0,769,771);break;case la:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vi:n.blendFuncSeparate(770,771,1,771);break;case cr:n.blendFunc(770,1);break;case ca:n.blendFunc(0,769);break;case la:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,p=null,M=null,A=null,v=L,x=Ue}return}z=z||Q,ae=ae||ee,ye=ye||T,(Q!==y||z!==E)&&(n.blendEquationSeparate(ne[Q],ne[z]),y=Q,E=z),(ee!==g||T!==p||ae!==M||ye!==A)&&(n.blendFuncSeparate(le[ee],le[T],le[ae],le[ye]),g=ee,p=T,M=ae,A=ye),v=L,x=null}function fe(L,Q){L.side===Cn?xe(2884):ge(2884);let ee=L.side===tt;Q&&(ee=!ee),pe(ee),L.blending===vi&&L.transparent===!1?we(gi):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let T=L.stencilWrite;l.setTest(T),T&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),K(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(32926):xe(32926)}function pe(L){D!==L&&(L?n.frontFace(2304):n.frontFace(2305),D=L)}function Y(L){L!==iu?(ge(2884),L!==N&&(L===sa?n.cullFace(1029):L===ru?n.cullFace(1028):n.cullFace(1032))):xe(2884),N=L}function J(L){L!==I&&(P&&n.lineWidth(L),I=L)}function K(L,Q,ee){L?(ge(32823),(U!==Q||C!==ee)&&(n.polygonOffset(Q,ee),U=Q,C=ee)):xe(32823)}function he(L){L?ge(3089):xe(3089)}function ie(L){L===void 0&&(L=33984+G-1),F!==L&&(n.activeTexture(L),F=L)}function S(L,Q){F===null&&ie();let ee=X[F];ee===void 0&&(ee={type:void 0,texture:void 0},X[F]=ee),(ee.type!==L||ee.texture!==Q)&&(n.bindTexture(L,Q||ce[L]),ee.type=L,ee.texture=Q)}function b(){let L=X[F];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){$.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function De(L){Z.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function ve(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},F=null,X={},u=null,d={},f=null,m=!1,v=null,y=null,g=null,p=null,E=null,M=null,A=null,x=!1,D=null,N=null,I=null,U=null,C=null,$.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ge,disable:xe,bindFramebuffer:Fe,bindXRFramebuffer:V,useProgram:Ce,setBlending:we,setMaterial:fe,setFlipSided:pe,setCullFace:Y,setLineWidth:J,setPolygonOffset:K,setScissorTest:he,activeTexture:ie,bindTexture:S,unbindTexture:b,compressedTexImage2D:q,texImage2D:j,texImage3D:se,scissor:de,viewport:De,reset:ve}}function Zm(n,e,t,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap,f,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function v(S,b){return m?new OffscreenCanvas(S,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(S,b,q,j){let se=1;if((S.width>j||S.height>j)&&(se=j/Math.max(S.width,S.height)),se<1||b===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let de=b?_e.floorPowerOfTwo:Math.floor,De=de(se*S.width),ve=de(se*S.height);f===void 0&&(f=v(De,ve));let L=q?v(De,ve):f;return L.width=De,L.height=ve,L.getContext("2d").drawImage(S,0,0,De,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+De+"x"+ve+")."),L}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return _e.isPowerOfTwo(S.width)&&_e.isPowerOfTwo(S.height)}function p(S){return a?!1:S.wrapS!==wt||S.wrapT!==wt||S.minFilter!==dt&&S.minFilter!==je}function E(S,b){return S.generateMipmaps&&b&&S.minFilter!==dt&&S.minFilter!==je}function M(S,b,q,j){n.generateMipmap(S);let se=i.get(b);se.__maxMipLevel=Math.log2(Math.max(q,j))}function A(S,b,q){if(a===!1)return b;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=b;return b===6403&&(q===5126&&(j=33326),q===5131&&(j=33325),q===5121&&(j=33321)),b===6407&&(q===5126&&(j=34837),q===5131&&(j=34843),q===5121&&(j=32849)),b===6408&&(q===5126&&(j=34836),q===5131&&(j=34842),q===5121&&(j=32856)),(j===33325||j===33326||j===34842||j===34836)&&e.get("EXT_color_buffer_float"),j}function x(S){return S===dt||S===va||S===ya?9728:9729}function D(S){let b=S.target;b.removeEventListener("dispose",D),I(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function N(S){let b=S.target;b.removeEventListener("dispose",N),U(b),o.memory.textures--}function I(S){let b=i.get(S);b.__webglInit!==void 0&&(n.deleteTexture(b.__webglTexture),i.remove(S))}function U(S){let b=S.texture,q=i.get(S),j=i.get(b);if(!!S){if(j.__webglTexture!==void 0&&n.deleteTexture(j.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)n.deleteFramebuffer(q.__webglFramebuffer[se]),q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[se]);else n.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer&&n.deleteRenderbuffer(q.__webglColorRenderbuffer),q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer);i.remove(b),i.remove(S)}}let C=0;function G(){C=0}function P(){let S=C;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),C+=1,S}function R(S,b){let q=i.get(S);if(S.isVideoTexture&&Y(S),S.version>0&&q.__version!==S.version){let j=S.image;if(j===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(q,S,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,q.__webglTexture)}function B(S,b){let q=i.get(S);if(S.version>0&&q.__version!==S.version){ge(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(35866,q.__webglTexture)}function F(S,b){let q=i.get(S);if(S.version>0&&q.__version!==S.version){ge(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(32879,q.__webglTexture)}function X(S,b){let q=i.get(S);if(S.version>0&&q.__version!==S.version){xe(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(34067,q.__webglTexture)}let $={[ur]:10497,[wt]:33071,[_s]:33648},Z={[dt]:9728,[va]:9984,[ya]:9986,[je]:9729,[Pu]:9985,[hr]:9987};function oe(S,b,q){if(q?(n.texParameteri(S,10242,$[b.wrapS]),n.texParameteri(S,10243,$[b.wrapT]),(S===32879||S===35866)&&n.texParameteri(S,32882,$[b.wrapR]),n.texParameteri(S,10240,Z[b.magFilter]),n.texParameteri(S,10241,Z[b.minFilter])):(n.texParameteri(S,10242,33071),n.texParameteri(S,10243,33071),(S===32879||S===35866)&&n.texParameteri(S,32882,33071),(b.wrapS!==wt||b.wrapT!==wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,10240,x(b.magFilter)),n.texParameteri(S,10241,x(b.minFilter)),b.minFilter!==dt&&b.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(b.type===$t&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===pr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ce(S,b){S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",D),S.__webglTexture=n.createTexture(),o.memory.textures++)}function ge(S,b,q){let j=3553;b.isDataTexture2DArray&&(j=35866),b.isDataTexture3D&&(j=32879),ce(S,b),t.activeTexture(33984+q),t.bindTexture(j,S.__webglTexture),n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);let se=p(b)&&g(b.image)===!1,de=y(b.image,se,!1,h),De=g(de)||a,ve=s.convert(b.format),L=s.convert(b.type),Q=A(b.internalFormat,ve,L);oe(j,b,De);let ee,T=b.mipmaps;if(b.isDepthTexture)Q=6402,a?b.type===$t?Q=36012:b.type===fr?Q=33190:b.type===xi?Q=35056:Q=33189:b.type===$t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Dn&&Q===6402&&b.type!==dr&&b.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=dr,L=s.convert(b.type)),b.format===_i&&Q===6402&&(Q=34041,b.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xi,L=s.convert(b.type))),t.texImage2D(3553,0,Q,de.width,de.height,0,ve,L,null);else if(b.isDataTexture)if(T.length>0&&De){for(let z=0,ae=T.length;z<ae;z++)ee=T[z],t.texImage2D(3553,z,Q,ee.width,ee.height,0,ve,L,ee.data);b.generateMipmaps=!1,S.__maxMipLevel=T.length-1}else t.texImage2D(3553,0,Q,de.width,de.height,0,ve,L,de.data),S.__maxMipLevel=0;else if(b.isCompressedTexture){for(let z=0,ae=T.length;z<ae;z++)ee=T[z],b.format!==ft&&b.format!==xn?ve!==null?t.compressedTexImage2D(3553,z,Q,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,z,Q,ee.width,ee.height,0,ve,L,ee.data);S.__maxMipLevel=T.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,Q,de.width,de.height,de.depth,0,ve,L,de.data),S.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,Q,de.width,de.height,de.depth,0,ve,L,de.data),S.__maxMipLevel=0;else if(T.length>0&&De){for(let z=0,ae=T.length;z<ae;z++)ee=T[z],t.texImage2D(3553,z,Q,ve,L,ee);b.generateMipmaps=!1,S.__maxMipLevel=T.length-1}else t.texImage2D(3553,0,Q,ve,L,de),S.__maxMipLevel=0;E(b,De)&&M(j,b,de.width,de.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function xe(S,b,q){if(b.image.length!==6)return;ce(S,b),t.activeTexture(33984+q),t.bindTexture(34067,S.__webglTexture),n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);let j=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),se=b.image[0]&&b.image[0].isDataTexture,de=[];for(let z=0;z<6;z++)!j&&!se?de[z]=y(b.image[z],!1,!0,l):de[z]=se?b.image[z].image:b.image[z];let De=de[0],ve=g(De)||a,L=s.convert(b.format),Q=s.convert(b.type),ee=A(b.internalFormat,L,Q);oe(34067,b,ve);let T;if(j){for(let z=0;z<6;z++){T=de[z].mipmaps;for(let ae=0;ae<T.length;ae++){let ye=T[ae];b.format!==ft&&b.format!==xn?L!==null?t.compressedTexImage2D(34069+z,ae,ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+z,ae,ee,ye.width,ye.height,0,L,Q,ye.data)}}S.__maxMipLevel=T.length-1}else{T=b.mipmaps;for(let z=0;z<6;z++)if(se){t.texImage2D(34069+z,0,ee,de[z].width,de[z].height,0,L,Q,de[z].data);for(let ae=0;ae<T.length;ae++){let Ue=T[ae].image[z].image;t.texImage2D(34069+z,ae+1,ee,Ue.width,Ue.height,0,L,Q,Ue.data)}}else{t.texImage2D(34069+z,0,ee,L,Q,de[z]);for(let ae=0;ae<T.length;ae++){let ye=T[ae];t.texImage2D(34069+z,ae+1,ee,L,Q,ye.image[z])}}S.__maxMipLevel=T.length}E(b,ve)&&M(34067,b,De.width,De.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function V(S,b,q,j){let se=b.texture,de=s.convert(se.format),De=s.convert(se.type),ve=A(se.internalFormat,de,De);j===32879||j===35866?t.texImage3D(j,0,ve,b.width,b.height,b.depth,0,de,De,null):t.texImage2D(j,0,ve,b.width,b.height,0,de,De,null),t.bindFramebuffer(36160,S),n.framebufferTexture2D(36160,q,j,i.get(se).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(S,b,q){if(n.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let j=33189;if(q){let se=b.depthTexture;se&&se.isDepthTexture&&(se.type===$t?j=36012:se.type===fr&&(j=33190));let de=pe(b);n.renderbufferStorageMultisample(36161,de,j,b.width,b.height)}else n.renderbufferStorage(36161,j,b.width,b.height);n.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){if(q){let j=pe(b);n.renderbufferStorageMultisample(36161,j,35056,b.width,b.height)}else n.renderbufferStorage(36161,34041,b.width,b.height);n.framebufferRenderbuffer(36160,33306,36161,S)}else{let j=b.texture,se=s.convert(j.format),de=s.convert(j.type),De=A(j.internalFormat,se,de);if(q){let ve=pe(b);n.renderbufferStorageMultisample(36161,ve,De,b.width,b.height)}else n.renderbufferStorage(36161,De,b.width,b.height)}n.bindRenderbuffer(36161,null)}function Ce(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);let j=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===Dn)n.framebufferTexture2D(36160,36096,3553,j,0);else if(b.depthTexture.format===_i)n.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function ne(S){let b=i.get(S),q=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ce(b.__webglFramebuffer,S)}else if(q){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=n.createRenderbuffer(),Fe(b.__webglDepthbuffer[j],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Fe(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function le(S){let b=S.texture,q=i.get(S),j=i.get(b);S.addEventListener("dispose",N),j.__webglTexture=n.createTexture(),j.__version=b.version,o.memory.textures++;let se=S.isWebGLCubeRenderTarget===!0,de=S.isWebGLMultisampleRenderTarget===!0,De=b.isDataTexture3D||b.isDataTexture2DArray,ve=g(S)||a;if(a&&b.format===xn&&(b.type===$t||b.type===pr)&&(b.format=ft,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),se){q.__webglFramebuffer=[];for(let L=0;L<6;L++)q.__webglFramebuffer[L]=n.createFramebuffer()}else if(q.__webglFramebuffer=n.createFramebuffer(),de)if(a){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,q.__webglColorRenderbuffer);let L=s.convert(b.format),Q=s.convert(b.type),ee=A(b.internalFormat,L,Q),T=pe(S);n.renderbufferStorageMultisample(36161,T,ee,S.width,S.height),t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,q.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),S.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(q.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(se){t.bindTexture(34067,j.__webglTexture),oe(34067,b,ve);for(let L=0;L<6;L++)V(q.__webglFramebuffer[L],S,36064,34069+L);E(b,ve)&&M(34067,b,S.width,S.height),t.bindTexture(34067,null)}else{let L=3553;De&&(a?L=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(L,j.__webglTexture),oe(L,b,ve),V(q.__webglFramebuffer,S,36064,L),E(b,ve)&&M(3553,b,S.width,S.height),t.bindTexture(3553,null)}S.depthBuffer&&ne(S)}function we(S){let b=S.texture,q=g(S)||a;if(E(b,q)){let j=S.isWebGLCubeRenderTarget?34067:3553,se=i.get(b).__webglTexture;t.bindTexture(j,se),M(j,b,S.width,S.height),t.bindTexture(j,null)}}function fe(S){if(S.isWebGLMultisampleRenderTarget)if(a){let b=i.get(S);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);let q=S.width,j=S.height,se=16384;S.depthBuffer&&(se|=256),S.stencilBuffer&&(se|=1024),n.blitFramebuffer(0,0,q,j,0,0,q,j,se,9728),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function pe(S){return a&&S.isWebGLMultisampleRenderTarget?Math.min(u,S.samples):0}function Y(S){let b=o.render.frame;d.get(S)!==b&&(d.set(S,b),S.update())}let J=!1,K=!1;function he(S,b){S&&S.isWebGLRenderTarget&&(J===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),J=!0),S=S.texture),R(S,b)}function ie(S,b){S&&S.isWebGLCubeRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),K=!0),S=S.texture),X(S,b)}this.allocateTextureUnit=P,this.resetTextureUnits=G,this.setTexture2D=R,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=X,this.setupRenderTarget=le,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=fe,this.safeSetTexture2D=he,this.safeSetTextureCube=ie}function Jm(n,e,t){let i=t.isWebGL2;function r(s){let o;if(s===ws)return 5121;if(s===Bu)return 32819;if(s===Nu)return 32820;if(s===Ou)return 33635;if(s===Du)return 5120;if(s===Iu)return 5122;if(s===dr)return 5123;if(s===Fu)return 5124;if(s===fr)return 5125;if(s===$t)return 5126;if(s===pr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zu)return 6406;if(s===xn)return 6407;if(s===ft)return 6408;if(s===Hu)return 6409;if(s===Uu)return 6410;if(s===Dn)return 6402;if(s===_i)return 34041;if(s===Gu)return 6403;if(s===ku)return 36244;if(s===Vu)return 33319;if(s===Wu)return 33320;if(s===qu)return 36248;if(s===ju)return 36249;if(s===xa||s===_a||s===wa||s===ba)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ba)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ma||s===Sa||s===Ea||s===Ta)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ea)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ta)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Aa||s===La)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Aa)return o.COMPRESSED_RGB8_ETC2;if(s===La)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Yu||s===Zu||s===Ju||s===Qu||s===Ku||s===$u||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===hh||s===dh||s===fh||s===ph||s===mh||s===gh||s===vh||s===yh||s===xh||s===_h||s===wh||s===bh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===ch)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===xi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}var co=class extends ct{constructor(e=[]){super();this.cameras=e}};co.prototype.isArrayCamera=!0;var At=class extends Se{constructor(){super();this.type="Group"}};At.prototype.isGroup=!0;function Fi(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Fi.prototype,{constructor:Fi,getHandSpace:function(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),c&&n.hand){s=!0;for(let m of n.hand.values()){let v=e.getJointPose(m,t);if(c.joints[m.jointName]===void 0){let g=new At;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[m.jointName]=g,c.add(g)}let y=c.joints[m.jointName];v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=v.radius),y.visible=v!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),d=.02,f=.005;c.inputState.pinching&&u>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&u<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function xc(n,e){let t=this,i=n.state,r=null,s=1,o=null,a="local-floor",c=null,l=[],h=new Map,u=new ct;u.layers.enable(1),u.viewport=new ze;let d=new ct;d.layers.enable(2),d.viewport=new ze;let f=[u,d],m=new co;m.layers.enable(1),m.layers.enable(2);let v=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let G=l[C];return G===void 0&&(G=new Fi,l[C]=G),G.getTargetRaySpace()},this.getControllerGrip=function(C){let G=l[C];return G===void 0&&(G=new Fi,l[C]=G),G.getGripSpace()},this.getHand=function(C){let G=l[C];return G===void 0&&(G=new Fi,l[C]=G),G.getHandSpace()};function g(C){let G=h.get(C.inputSource);G&&G.dispatchEvent({type:C.type,data:C.inputSource})}function p(){h.forEach(function(C,G){C.disconnect(G)}),h.clear(),v=null,y=null,i.bindXRFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),U.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){r.addEventListener("select",g),r.addEventListener("selectstart",g),r.addEventListener("selectend",g),r.addEventListener("squeeze",g),r.addEventListener("squeezestart",g),r.addEventListener("squeezeend",g),r.addEventListener("end",p),r.addEventListener("inputsourceschange",E);let G=e.getContextAttributes();G.xrCompatible!==!0&&await e.makeXRCompatible();let P={antialias:G.antialias,alpha:G.alpha,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:s},R=new XRWebGLLayer(r,e,P);r.updateRenderState({baseLayer:R}),o=await r.requestReferenceSpace(a),U.setContext(r),U.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function E(C){let G=r.inputSources;for(let P=0;P<l.length;P++)h.set(G[P],l[P]);for(let P=0;P<C.removed.length;P++){let R=C.removed[P],B=h.get(R);B&&(B.dispatchEvent({type:"disconnected",data:R}),h.delete(R))}for(let P=0;P<C.added.length;P++){let R=C.added[P],B=h.get(R);B&&B.dispatchEvent({type:"connected",data:R})}}let M=new _,A=new _;function x(C,G,P){M.setFromMatrixPosition(G.matrixWorld),A.setFromMatrixPosition(P.matrixWorld);let R=M.distanceTo(A),B=G.projectionMatrix.elements,F=P.projectionMatrix.elements,X=B[14]/(B[10]-1),$=B[14]/(B[10]+1),Z=(B[9]+1)/B[5],oe=(B[9]-1)/B[5],ce=(B[8]-1)/B[0],ge=(F[8]+1)/F[0],xe=X*ce,V=X*ge,Fe=R/(-ce+ge),Ce=Fe*-ce;G.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Ce),C.translateZ(Fe),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();let ne=X+Fe,le=$+Fe,we=xe-Ce,fe=V+(R-Ce),pe=Z*$/le*ne,Y=oe*$/le*ne;C.projectionMatrix.makePerspective(we,fe,pe,Y,ne,le)}function D(C,G){G===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(G.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.getCamera=function(C){m.near=d.near=u.near=C.near,m.far=d.far=u.far=C.far,(v!==m.near||y!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),v=m.near,y=m.far);let G=C.parent,P=m.cameras;D(m,G);for(let B=0;B<P.length;B++)D(P[B],G);C.matrixWorld.copy(m.matrixWorld),C.matrix.copy(m.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);let R=C.children;for(let B=0,F=R.length;B<F;B++)R[B].updateMatrixWorld(!0);return P.length===2?x(m,u,d):m.projectionMatrix.copy(u.projectionMatrix),m};let N=null;function I(C,G){if(c=G.getViewerPose(o),c!==null){let R=c.views,B=r.renderState.baseLayer;i.bindXRFramebuffer(B.framebuffer);let F=!1;R.length!==m.cameras.length&&(m.cameras.length=0,F=!0);for(let X=0;X<R.length;X++){let $=R[X],Z=B.getViewport($),oe=f[X];oe.matrix.fromArray($.transform.matrix),oe.projectionMatrix.fromArray($.projectionMatrix),oe.viewport.set(Z.x,Z.y,Z.width,Z.height),X===0&&m.matrix.copy(oe.matrix),F===!0&&m.cameras.push(oe)}}let P=r.inputSources;for(let R=0;R<l.length;R++){let B=l[R],F=P[R];B.update(F,G,o)}N&&N(C,G)}let U=new Ja;U.setAnimationLoop(I),this.setAnimationLoop=function(C){N=C},this.dispose=function(){}}Object.assign(xc.prototype,Pt.prototype);function Qm(n){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,E,M){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),c(g,p)):p.isMeshToonMaterial?(i(g,p),h(g,p)):p.isMeshPhongMaterial?(i(g,p),l(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?d(g,p):u(g,p)):p.isMeshMatcapMaterial?(i(g,p),f(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),v(g,p)):p.isMeshNormalMaterial?(i(g,p),y(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,E,M):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);let E=n.get(p).envMap;if(E){g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture&&E._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;let x=n.get(E).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(M=p.clearcoatRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uv2Transform.value.copy(A.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,E,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=M*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function c(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),n.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===tt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function v(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function y(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===tt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===tt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Km(){let n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function He(n){n=n||{};let e=n.canvas!==void 0?n.canvas:Km(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",h=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,u=null,d=null,f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Bn,this.physicallyCorrectLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let v=this,y=!1,g=0,p=0,E=null,M=-1,A=null,x=new ze,D=new ze,N=null,I=e.width,U=e.height,C=1,G=null,P=null,R=new ze(0,0,I,U),B=new ze(0,0,I,U),F=!1,X=new Pi,$=!1,Z=!1,oe=new me,ce=new _,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return E===null?C:1}let V=t;function Fe(w,H){for(let O=0;O<w.length;O++){let W=w[O],re=e.getContext(W,H);if(re!==null)return re}return null}try{let w={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",ye,!1),V===null){let H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),V=Fe(H,w),V===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,ne,le,we,fe,pe,Y,J,K,he,ie,S,b,q,j,se,de,De,ve,L,Q,ee;function T(){Ce=new bp(V),ne=new xp(V,Ce,n),Ce.init(ne),Q=new Jm(V,Ce,ne),le=new Ym(V,Ce,ne),we=new Ep(V),fe=new Nm,pe=new Zm(V,Ce,le,fe,ne,Q,we),Y=new wp(v),J=new Xh(V,ne),ee=new vp(V,Ce,J,ne),K=new Mp(V,J,we,ee),he=new Rp(V,K,J,we),De=new Lp(V),j=new _p(fe),ie=new Bm(v,Y,Ce,ne,ee,j),S=new Qm(fe),b=new Hm(fe),q=new qm(Ce,ne),de=new gp(v,Y,le,he,a),se=new yc(v,he,ne),ve=new yp(V,Ce,we,ne),L=new Sp(V,Ce,we,ne),we.programs=ie.programs,v.capabilities=ne,v.extensions=Ce,v.properties=fe,v.renderLists=b,v.shadowMap=se,v.state=le,v.info=we}T();let z=new xc(v,V);this.xr=z,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(w){w!==void 0&&(C=w,this.setSize(I,U,!1))},this.getSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),w=new k),w.set(I,U)},this.setSize=function(w,H,O){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,U=H,e.width=Math.floor(w*C),e.height=Math.floor(H*C),O!==!1&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),w=new k),w.set(I*C,U*C).floor()},this.setDrawingBufferSize=function(w,H,O){I=w,U=H,C=O,e.width=Math.floor(w*O),e.height=Math.floor(H*O),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),w=new ze),w.copy(x)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,H,O,W){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,H,O,W),le.viewport(x.copy(R).multiplyScalar(C).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,H,O,W){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,H,O,W),le.scissor(D.copy(B).multiplyScalar(C).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){le.setScissorTest(F=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),w=new ue),w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(w,H,O){let W=0;(w===void 0||w)&&(W|=16384),(H===void 0||H)&&(W|=256),(O===void 0||O)&&(W|=1024),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",ye,!1),b.dispose(),q.dispose(),fe.dispose(),Y.dispose(),he.dispose(),ee.dispose(),z.dispose(),z.removeEventListener("sessionstart",Qo),z.removeEventListener("sessionend",Ko),gn.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=we.autoReset,H=se.enabled,O=se.autoUpdate,W=se.needsUpdate,re=se.type;T(),we.autoReset=w,se.enabled=H,se.autoUpdate=O,se.needsUpdate=W,se.type=re}function Ue(w){let H=w.target;H.removeEventListener("dispose",Ue),gt(H)}function gt(w){Ve(w),fe.remove(w)}function Ve(w){let H=fe.get(w).programs;H!==void 0&&H.forEach(function(O){ie.releaseProgram(O)})}function Tt(w,H){w.render(function(O){v.renderBufferImmediate(O,H)})}this.renderBufferImmediate=function(w,H){ee.initAttributes();let O=fe.get(w);w.hasPositions&&!O.position&&(O.position=V.createBuffer()),w.hasNormals&&!O.normal&&(O.normal=V.createBuffer()),w.hasUvs&&!O.uv&&(O.uv=V.createBuffer()),w.hasColors&&!O.color&&(O.color=V.createBuffer());let W=H.getAttributes();w.hasPositions&&(V.bindBuffer(34962,O.position),V.bufferData(34962,w.positionArray,35048),ee.enableAttribute(W.position),V.vertexAttribPointer(W.position,3,5126,!1,0,0)),w.hasNormals&&(V.bindBuffer(34962,O.normal),V.bufferData(34962,w.normalArray,35048),ee.enableAttribute(W.normal),V.vertexAttribPointer(W.normal,3,5126,!1,0,0)),w.hasUvs&&(V.bindBuffer(34962,O.uv),V.bufferData(34962,w.uvArray,35048),ee.enableAttribute(W.uv),V.vertexAttribPointer(W.uv,2,5126,!1,0,0)),w.hasColors&&(V.bindBuffer(34962,O.color),V.bufferData(34962,w.colorArray,35048),ee.enableAttribute(W.color),V.vertexAttribPointer(W.color,3,5126,!1,0,0)),ee.disableUnusedAttributes(),V.drawArrays(4,0,w.count),w.count=0},this.renderBufferDirect=function(w,H,O,W,re,Be){H===null&&(H=ge);let be=re.isMesh&&re.matrixWorld.determinant()<0,Te=ia(w,H,W,re);le.setMaterial(W,be);let Ge=O.index,Ee=O.attributes.position;if(Ge===null){if(Ee===void 0||Ee.count===0)return}else if(Ge.count===0)return;let Ne=1;W.wireframe===!0&&(Ge=K.getWireframeAttribute(O),Ne=2),(W.morphTargets||W.morphNormals)&&De.update(re,O,W,Te),ee.setup(re,W,Te,O,Ge);let Me,Oe=ve;Ge!==null&&(Me=J.get(Ge),Oe=L,Oe.setIndex(Me));let Ut=Ge!==null?Ge.count:Ee.count,ht=O.drawRange.start*Ne,vn=O.drawRange.count*Ne,$e=Be!==null?Be.start*Ne:0,yn=Be!==null?Be.count*Ne:Infinity,Ke=Math.max(ht,$e),fs=Math.min(Ut,ht+vn,$e+yn)-1,vt=Math.max(0,fs-Ke+1);if(vt!==0){if(re.isMesh)W.wireframe===!0?(le.setLineWidth(W.wireframeLinewidth*xe()),Oe.setMode(1)):Oe.setMode(4);else if(re.isLine){let jt=W.linewidth;jt===void 0&&(jt=1),le.setLineWidth(jt*xe()),re.isLineSegments?Oe.setMode(1):re.isLineLoop?Oe.setMode(2):Oe.setMode(3)}else re.isPoints?Oe.setMode(0):re.isSprite&&Oe.setMode(4);if(re.isInstancedMesh)Oe.renderInstances(Ke,vt,re.count);else if(O.isInstancedBufferGeometry){let jt=Math.min(O.instanceCount,O._maxInstanceCount);Oe.renderInstances(Ke,vt,jt)}else Oe.render(Ke,vt)}},this.compile=function(w,H){d=q.get(w),d.init(),w.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(),w.traverse(function(O){let W=O.material;if(W)if(Array.isArray(W))for(let re=0;re<W.length;re++){let Be=W[re];ds(Be,w,O)}else ds(W,w,O)})};let Je=null;function Ct(w){Je&&Je(w)}function Qo(){gn.stop()}function Ko(){gn.start()}let gn=new Ja;gn.setAnimationLoop(Ct),typeof window!="undefined"&&gn.setContext(window),this.setAnimationLoop=function(w){Je=w,z.setAnimationLoop(w),w===null?gn.stop():gn.start()},z.addEventListener("sessionstart",Qo),z.addEventListener("sessionend",Ko),this.render=function(w,H){let O,W;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),O=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),W=arguments[3]),H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(H=z.getCamera(H)),w.isScene===!0&&w.onBeforeRender(v,w,H,O||E),d=q.get(w,m.length),d.init(),m.push(d),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(oe),Z=this.localClippingEnabled,$=j.init(this.clippingPlanes,Z,H),u=b.get(w,f.length),u.init(),f.push(u),$o(w,H,0,v.sortObjects),u.finish(),v.sortObjects===!0&&u.sort(G,P),$===!0&&j.beginShadows();let re=d.state.shadowsArray;se.render(re,w,H),d.setupLights(),d.setupLightsView(H),$===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),O!==void 0&&this.setRenderTarget(O),de.render(u,w,H,W);let Be=u.opaque,be=u.transparent;Be.length>0&&ea(Be,w,H),be.length>0&&ea(be,w,H),E!==null&&(pe.updateRenderTargetMipmap(E),pe.updateMultisampleRenderTarget(E)),w.isScene===!0&&w.onAfterRender(v,w,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1),ee.resetDefaultState(),M=-1,A=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function $o(w,H,O,W){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let be=he.update(w),Te=w.material;Te.visible&&u.push(w,be,Te,O,ce.z,null)}}else if(w.isImmediateRenderObject)W&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe),u.push(w,null,w.material,O,ce.z,null);else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==we.render.frame&&(w.skeleton.update(),w.skeleton.frame=we.render.frame),!w.frustumCulled||X.intersectsObject(w))){W&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let be=he.update(w),Te=w.material;if(Array.isArray(Te)){let Ge=be.groups;for(let Ee=0,Ne=Ge.length;Ee<Ne;Ee++){let Me=Ge[Ee],Oe=Te[Me.materialIndex];Oe&&Oe.visible&&u.push(w,be,Oe,O,ce.z,Me)}}else Te.visible&&u.push(w,be,Te,O,ce.z,null)}}let Be=w.children;for(let be=0,Te=Be.length;be<Te;be++)$o(Be[be],H,O,W)}function ea(w,H,O){let W=H.isScene===!0?H.overrideMaterial:null;for(let re=0,Be=w.length;re<Be;re++){let be=w[re],Te=be.object,Ge=be.geometry,Ee=W===null?be.material:W,Ne=be.group;if(O.isArrayCamera){let Me=O.cameras;for(let Oe=0,Ut=Me.length;Oe<Ut;Oe++){let ht=Me[Oe];Te.layers.test(ht.layers)&&(le.viewport(x.copy(ht.viewport)),d.setupLightsView(ht),ta(Te,H,ht,Ge,Ee,Ne))}}else ta(Te,H,O,Ge,Ee,Ne)}}function ta(w,H,O,W,re,Be){if(w.onBeforeRender(v,H,O,W,re,Be),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),w.isImmediateRenderObject){let be=ia(O,H,re,w);le.setMaterial(re),ee.reset(),Tt(w,be)}else v.renderBufferDirect(O,H,W,re,w,Be);w.onAfterRender(v,H,O,W,re,Be)}function ds(w,H,O){H.isScene!==!0&&(H=ge);let W=fe.get(w),re=d.state.lights,Be=d.state.shadowsArray,be=re.state.version,Te=ie.getParameters(w,re.state,Be,H,O),Ge=ie.getProgramCacheKey(Te),Ee=W.programs;W.environment=w.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=Y.get(w.envMap||W.environment),Ee===void 0&&(w.addEventListener("dispose",Ue),Ee=new Map,W.programs=Ee);let Ne=Ee.get(Ge);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===be)return na(w,Te),Ne}else Te.uniforms=ie.getUniforms(w),w.onBeforeCompile(Te,v),Ne=ie.acquireProgram(Te,Ge),Ee.set(Ge,Ne),W.uniforms=Te.uniforms;let Me=W.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=j.uniform),na(w,Te),W.needsLights=tu(w),W.lightsStateVersion=be,W.needsLights&&(Me.ambientLightColor.value=re.state.ambient,Me.lightProbe.value=re.state.probe,Me.directionalLights.value=re.state.directional,Me.directionalLightShadows.value=re.state.directionalShadow,Me.spotLights.value=re.state.spot,Me.spotLightShadows.value=re.state.spotShadow,Me.rectAreaLights.value=re.state.rectArea,Me.ltc_1.value=re.state.rectAreaLTC1,Me.ltc_2.value=re.state.rectAreaLTC2,Me.pointLights.value=re.state.point,Me.pointLightShadows.value=re.state.pointShadow,Me.hemisphereLights.value=re.state.hemi,Me.directionalShadowMap.value=re.state.directionalShadowMap,Me.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Me.spotShadowMap.value=re.state.spotShadowMap,Me.spotShadowMatrix.value=re.state.spotShadowMatrix,Me.pointShadowMap.value=re.state.pointShadowMap,Me.pointShadowMatrix.value=re.state.pointShadowMatrix);let Oe=Ne.getUniforms(),Ut=ln.seqWithValue(Oe.seq,Me);return W.currentProgram=Ne,W.uniformsList=Ut,Ne}function na(w,H){let O=fe.get(w);O.outputEncoding=H.outputEncoding,O.instancing=H.instancing,O.numClippingPlanes=H.numClippingPlanes,O.numIntersection=H.numClipIntersection,O.vertexAlphas=H.vertexAlphas}function ia(w,H,O,W){H.isScene!==!0&&(H=ge),pe.resetTextureUnits();let re=H.fog,Be=O.isMeshStandardMaterial?H.environment:null,be=E===null?v.outputEncoding:E.texture.encoding,Te=Y.get(O.envMap||Be),Ge=O.vertexColors===!0&&W.geometry.attributes.color&&W.geometry.attributes.color.itemSize===4,Ee=fe.get(O),Ne=d.state.lights;if($===!0&&(Z===!0||w!==A)){let Ke=w===A&&O.id===M;j.setState(O,w,Ke)}let Me=!1;O.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ne.state.version||Ee.outputEncoding!==be||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||Ee.envMap!==Te||O.fog&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==j.numPlanes||Ee.numIntersection!==j.numIntersection)||Ee.vertexAlphas!==Ge)&&(Me=!0):(Me=!0,Ee.__version=O.version);let Oe=Ee.currentProgram;Me===!0&&(Oe=ds(O,H,W));let Ut=!1,ht=!1,vn=!1,$e=Oe.getUniforms(),yn=Ee.uniforms;if(le.useProgram(Oe.program)&&(Ut=!0,ht=!0,vn=!0),O.id!==M&&(M=O.id,ht=!0),Ut||A!==w){if($e.setValue(V,"projectionMatrix",w.projectionMatrix),ne.logarithmicDepthBuffer&&$e.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),A!==w&&(A=w,ht=!0,vn=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){let Ke=$e.map.cameraPosition;Ke!==void 0&&Ke.setValue(V,ce.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$e.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||O.skinning)&&$e.setValue(V,"viewMatrix",w.matrixWorldInverse)}if(O.skinning){$e.setOptional(V,W,"bindMatrix"),$e.setOptional(V,W,"bindMatrixInverse");let Ke=W.skeleton;if(Ke){let fs=Ke.bones;if(ne.floatVertexTextures){if(Ke.boneTexture===null){let vt=Math.sqrt(fs.length*4);vt=_e.ceilPowerOfTwo(vt),vt=Math.max(vt,4);let jt=new Float32Array(vt*vt*4);jt.set(Ke.boneMatrices);let nu=new Or(jt,vt,vt,ft,$t);Ke.boneMatrices=jt,Ke.boneTexture=nu,Ke.boneTextureSize=vt}$e.setValue(V,"boneTexture",Ke.boneTexture,pe),$e.setValue(V,"boneTextureSize",Ke.boneTextureSize)}else $e.setOptional(V,Ke,"boneMatrices")}}return(ht||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,$e.setValue(V,"receiveShadow",W.receiveShadow)),ht&&($e.setValue(V,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&eu(yn,vn),re&&O.fog&&S.refreshFogUniforms(yn,re),S.refreshMaterialUniforms(yn,O,C,U),ln.upload(V,Ee.uniformsList,yn,pe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ln.upload(V,Ee.uniformsList,yn,pe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$e.setValue(V,"center",W.center),$e.setValue(V,"modelViewMatrix",W.modelViewMatrix),$e.setValue(V,"normalMatrix",W.normalMatrix),$e.setValue(V,"modelMatrix",W.matrixWorld),Oe}function eu(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function tu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return E},this.setRenderTarget=function(w,H=0,O=0){E=w,g=H,p=O,w&&fe.get(w).__webglFramebuffer===void 0&&pe.setupRenderTarget(w);let W=null,re=!1,Be=!1;if(w){let be=w.texture;(be.isDataTexture3D||be.isDataTexture2DArray)&&(Be=!0);let Te=fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(W=Te[H],re=!0):w.isWebGLMultisampleRenderTarget?W=fe.get(w).__webglMultisampledFramebuffer:W=Te,x.copy(w.viewport),D.copy(w.scissor),N=w.scissorTest}else x.copy(R).multiplyScalar(C).floor(),D.copy(B).multiplyScalar(C).floor(),N=F;if(le.bindFramebuffer(36160,W),le.viewport(x),le.scissor(D),le.setScissorTest(N),re){let be=fe.get(w.texture);V.framebufferTexture2D(36160,36064,34069+H,be.__webglTexture,O)}else if(Be){let be=fe.get(w.texture),Te=H||0;V.framebufferTextureLayer(36160,36064,be.__webglTexture,O||0,Te)}},this.readRenderTargetPixels=function(w,H,O,W,re,Be,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){le.bindFramebuffer(36160,Te);try{let Ge=w.texture,Ee=Ge.format,Ne=Ge.type;if(Ee!==ft&&Q.convert(Ee)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Me=Ne===pr&&(Ce.has("EXT_color_buffer_half_float")||ne.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ne!==ws&&Q.convert(Ne)!==V.getParameter(35738)&&!(Ne===$t&&(ne.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?H>=0&&H<=w.width-W&&O>=0&&O<=w.height-re&&V.readPixels(H,O,W,re,Q.convert(Ee),Q.convert(Ne),Be):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Ge=E!==null?fe.get(E).__webglFramebuffer:null;le.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(w,H,O=0){let W=Math.pow(2,-O),re=Math.floor(H.image.width*W),Be=Math.floor(H.image.height*W),be=Q.convert(H.format);pe.setTexture2D(H,0),V.copyTexImage2D(3553,O,be,w.x,w.y,re,Be,0),le.unbindTexture()},this.copyTextureToTexture=function(w,H,O,W=0){let re=H.image.width,Be=H.image.height,be=Q.convert(O.format),Te=Q.convert(O.type);pe.setTexture2D(O,0),V.pixelStorei(37440,O.flipY),V.pixelStorei(37441,O.premultiplyAlpha),V.pixelStorei(3317,O.unpackAlignment),H.isDataTexture?V.texSubImage2D(3553,W,w.x,w.y,re,Be,be,Te,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(3553,W,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,be,H.mipmaps[0].data):V.texSubImage2D(3553,W,w.x,w.y,be,Te,H.image),W===0&&O.generateMipmaps&&V.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(w,H,O,W,re=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Be,height:be,data:Te}=O.image,Ge=Q.convert(W.format),Ee=Q.convert(W.type),Ne;if(W.isDataTexture3D)pe.setTexture3D(W,0),Ne=32879;else if(W.isDataTexture2DArray)pe.setTexture2DArray(W,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,W.flipY),V.pixelStorei(37441,W.premultiplyAlpha),V.pixelStorei(3317,W.unpackAlignment);let Me=V.getParameter(3314),Oe=V.getParameter(32878),Ut=V.getParameter(3316),ht=V.getParameter(3315),vn=V.getParameter(32877);V.pixelStorei(3314,Be),V.pixelStorei(32878,be),V.pixelStorei(3316,w.min.x),V.pixelStorei(3315,w.min.y),V.pixelStorei(32877,w.min.z),V.texSubImage3D(Ne,re,H.x,H.y,H.z,w.max.x-w.min.x+1,w.max.y-w.min.y+1,w.max.z-w.min.z+1,Ge,Ee,Te),V.pixelStorei(3314,Me),V.pixelStorei(32878,Oe),V.pixelStorei(3316,Ut),V.pixelStorei(3315,ht),V.pixelStorei(32877,vn),re===0&&W.generateMipmaps&&V.generateMipmap(Ne),le.unbindTexture()},this.initTexture=function(w){pe.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){g=0,p=0,E=null,le.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var _c=class extends He{};_c.prototype.isWebGL1Renderer=!0;var ti=class{constructor(e,t=25e-5){this.name="",this.color=new ue(e),this.density=t}clone(){return new ti(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};ti.prototype.isFogExp2=!0;var Hr=class{constructor(e,t=1,i=1e3){this.name="",this.color=new ue(e),this.near=t,this.far=i}clone(){return new Hr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Hr.prototype.isFog=!0;var Bi=class extends Se{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Bi.prototype.isScene=!0;function Lt(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=bi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_e.generateUUID()}Object.defineProperty(Lt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Lt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_e.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new Lt(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_e.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Qe=new _;function Ni(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(Ni.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(Ni.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Qe.x=this.getX(e),Qe.y=this.getY(e),Qe.z=this.getZ(e),Qe.applyMatrix4(n),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)Qe.x=this.getX(e),Qe.y=this.getY(e),Qe.z=this.getZ(e),Qe.applyNormalMatrix(n),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)Qe.x=this.getX(e),Qe.y=this.getY(e),Qe.z=this.getZ(e),Qe.transformDirection(n),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new Ni(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});var lo=class extends Ye{constructor(e){super();this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};lo.prototype.isSpriteMaterial=!0;var ni,Oi=new _,ii=new _,ri=new _,si=new k,zi=new k,wc=new me,Ur=new _,Hi=new _,Gr=new _,bc=new k,uo=new k,Mc=new k,Sc=class extends Se{constructor(e){super();if(this.type="Sprite",ni===void 0){ni=new Re;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lt(t,5);ni.setIndex([0,1,2,0,2,3]),ni.setAttribute("position",new Ni(i,3,0,!1)),ni.setAttribute("uv",new Ni(i,2,3,!1))}this.geometry=ni,this.material=e!==void 0?e:new lo,this.center=new k(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ii.setFromMatrixScale(this.matrixWorld),wc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ri.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ii.multiplyScalar(-ri.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;kr(Ur.set(-.5,-.5,0),ri,o,ii,r,s),kr(Hi.set(.5,-.5,0),ri,o,ii,r,s),kr(Gr.set(.5,.5,0),ri,o,ii,r,s),bc.set(0,0),uo.set(1,0),Mc.set(1,1);let a=e.ray.intersectTriangle(Ur,Hi,Gr,!1,Oi);if(a===null&&(kr(Hi.set(-.5,.5,0),ri,o,ii,r,s),uo.set(0,1),a=e.ray.intersectTriangle(Ur,Gr,Hi,!1,Oi),a===null))return;let c=e.ray.origin.distanceTo(Oi);c<e.near||c>e.far||t.push({distance:c,point:Oi.clone(),uv:Xe.getUV(Oi,Ur,Hi,Gr,bc,uo,Mc,new k),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Sc.prototype.isSprite=!0;function kr(n,e,t,i,r,s){si.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(zi.x=s*si.x-r*si.y,zi.y=r*si.x+s*si.y):zi.copy(si),n.copy(e),n.x+=zi.x,n.y+=zi.y,n.applyMatrix4(wc)}var Ec=new _,Tc=new ze,Ac=new ze,$m=new _,Lc=new me;function ho(n,e){Ie.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new me,this.bindMatrixInverse=new me}ho.prototype=Object.assign(Object.create(Ie.prototype),{constructor:ho,isSkinnedMesh:!0,copy:function(n){return Ie.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let n=new ze,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);let r=1/n.manhattanLength();r!==Infinity?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){Ie.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){let t=this.skeleton,i=this.geometry;Tc.fromBufferAttribute(i.attributes.skinIndex,n),Ac.fromBufferAttribute(i.attributes.skinWeight,n),Ec.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=Ac.getComponent(r);if(s!==0){let o=Tc.getComponent(r);Lc.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector($m.copy(Ec).applyMatrix4(Lc),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function Rc(){Se.call(this),this.type="Bone"}Rc.prototype=Object.assign(Object.create(Se.prototype),{constructor:Rc,isBone:!0});var Cc=new me,Pc=new me,Vr=[],Ui=new Ie;function Dc(n,e,t){Ie.call(this,n,e),this.instanceMatrix=new Le(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}Dc.prototype=Object.assign(Object.create(Ie.prototype),{constructor:Dc,isInstancedMesh:!0,copy:function(n){return Ie.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){let t=this.matrixWorld,i=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Cc),Pc.multiplyMatrices(t,Cc),Ui.matrixWorld=Pc,Ui.raycast(n,Vr);for(let s=0,o=Vr.length;s<o;s++){let a=Vr[s];a.instanceId=r,a.object=this,e.push(a)}Vr.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new Le(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});var oi=class extends Ye{constructor(e){super();this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};oi.prototype.isLineBasicMaterial=!0;var Ic=new _,Fc=new _,Bc=new me,fo=new rn,Wr=new bn;function Gi(n=new Re,e=new oi){Se.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}Gi.prototype=Object.assign(Object.create(Se.prototype),{constructor:Gi,isLine:!0,copy:function(n){return Se.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){let n=this.geometry;if(n.isBufferGeometry)if(n.index===null){let e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)Ic.fromBufferAttribute(e,i-1),Fc.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=Ic.distanceTo(Fc);n.setAttribute("lineDistance",new Ae(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,n.ray.intersectsSphere(Wr)===!1)return;Bc.copy(i).invert(),fo.copy(n.ray).applyMatrix4(Bc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=new _,l=new _,h=new _,u=new _,d=this.isLineSegments?2:1;if(t.isBufferGeometry){let f=t.index,v=t.attributes.position;if(f!==null){let y=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let p=y,E=g-1;p<E;p+=d){let M=f.getX(p),A=f.getX(p+1);if(c.fromBufferAttribute(v,M),l.fromBufferAttribute(v,A),fo.distanceSqToSegment(c,l,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);let D=n.ray.origin.distanceTo(u);D<n.near||D>n.far||e.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{let y=Math.max(0,s.start),g=Math.min(v.count,s.start+s.count);for(let p=y,E=g-1;p<E;p+=d){if(c.fromBufferAttribute(v,p),l.fromBufferAttribute(v,p+1),fo.distanceSqToSegment(c,l,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);let A=n.ray.origin.distanceTo(u);A<n.near||A>n.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Nc=new _,Oc=new _;function qr(n,e){Gi.call(this,n,e),this.type="LineSegments"}qr.prototype=Object.assign(Object.create(Gi.prototype),{constructor:qr,isLineSegments:!0,computeLineDistances:function(){let n=this.geometry;if(n.isBufferGeometry)if(n.index===null){let e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)Nc.fromBufferAttribute(e,i),Oc.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+Nc.distanceTo(Oc);n.setAttribute("lineDistance",new Ae(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});var zc=class extends Gi{constructor(e,t){super(e,t);this.type="LineLoop"}};zc.prototype.isLineLoop=!0;var po=class extends Ye{constructor(e){super();this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};po.prototype.isPointsMaterial=!0;var Hc=new me,mo=new rn,jr=new bn,Xr=new _;function go(n=new Re,e=new po){Se.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}go.prototype=Object.assign(Object.create(Se.prototype),{constructor:go,isPoints:!0,copy:function(n){return Se.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,n.ray.intersectsSphere(jr)===!1)return;Hc.copy(i).invert(),mo.copy(n.ray).applyMatrix4(Hc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o;if(t.isBufferGeometry){let c=t.index,h=t.attributes.position;if(c!==null){let u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let f=u,m=d;f<m;f++){let v=c.getX(f);Xr.fromBufferAttribute(h,v),Uc(Xr,v,a,i,n,e,this)}}else{let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let f=u,m=d;f<m;f++)Xr.fromBufferAttribute(h,f),Uc(Xr,f,a,i,n,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Uc(n,e,t,i,r,s,o){let a=mo.distanceSqToPoint(n);if(a<t){let c=new _;mo.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Gc=class extends it{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l);this.format=a!==void 0?a:xn,this.minFilter=o!==void 0?o:je,this.magFilter=s!==void 0?s:je,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Gc.prototype.isVideoTexture=!0;var vo=class extends it{constructor(e,t,i,r,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,r,s,u,d);this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};vo.prototype.isCompressedTexture=!0;var kc=class extends it{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l);this.needsUpdate=!0}};kc.prototype.isCanvasTexture=!0;var Vc=class extends it{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:Dn,h!==Dn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dn&&(i=dr),i===void 0&&h===_i&&(i=xi),super(null,r,s,o,a,c,h,i,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1}};Vc.prototype.isDepthTexture=!0;var Wc=class extends Re{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,v=[],y=i/2,g=0;p(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(f,2));function p(){let M=new _,A=new _,x=0,D=(t-e)/i;for(let N=0;N<=s;N++){let I=[],U=N/s,C=U*(t-e)+e;for(let G=0;G<=r;G++){let P=G/r,R=P*c+a,B=Math.sin(R),F=Math.cos(R);A.x=C*B,A.y=-U*i+y,A.z=C*F,u.push(A.x,A.y,A.z),M.set(B,D,F).normalize(),d.push(M.x,M.y,M.z),f.push(P,1-U),I.push(m++)}v.push(I)}for(let N=0;N<r;N++)for(let I=0;I<s;I++){let U=v[I][N],C=v[I+1][N],G=v[I+1][N+1],P=v[I][N+1];h.push(U,C,P),h.push(C,G,P),x+=6}l.addGroup(g,x,0),g+=x}function E(M){let A=m,x=new k,D=new _,N=0,I=M===!0?e:t,U=M===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,y*U,0),d.push(0,U,0),f.push(.5,.5),m++;let C=m;for(let G=0;G<=r;G++){let R=G/r*c+a,B=Math.cos(R),F=Math.sin(R);D.x=I*F,D.y=y*U,D.z=I*B,u.push(D.x,D.y,D.z),d.push(0,U,0),x.x=B*.5+.5,x.y=F*.5*U+.5,f.push(x.x,x.y),m++}for(let G=0;G<r;G++){let P=A+G,R=C+G;M===!0?h.push(R,R+1,P):h.push(R+1,R,P),N+=3}l.addGroup(g,N,M===!0?1:2),g+=N}}},yo=class extends Wc{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}};var Jg=new _,Qg=new _,Kg=new _,$g=new Xe;var eg={triangulate:function(n,e,t){t=t||2;let i=e&&e.length,r=i?e[0]*t:n.length,s=qc(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,f;if(i&&(s=sg(n,e,s,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let m=t;m<r;m+=t)u=n[m],d=n[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return ki(s,o,t,a,c,f),o}};function qc(n,e,t,i,r){let s,o;if(r===gg(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Yc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Yc(s,n[s],n[s+1],o);return o&&Yr(o,o.next)&&(Wi(o),o=o.next),o}function un(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Yr(t,t.next)||Ze(t.prev,t,t.next)===0)){if(Wi(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ki(n,e,t,i,r,s,o){if(!n)return;!o&&s&&ug(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?ng(n,i,r,s):tg(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),Wi(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ig(un(n),e,t),ki(n,e,t,i,r,s,2)):o===2&&rg(n,e,t,i,r,s):ki(un(n),e,t,i,r,s,1);break}}}function tg(n){let e=n.prev,t=n,i=n.next;if(Ze(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(ai(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Ze(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ng(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Ze(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=xo(a,c,e,t,i),d=xo(l,h,e,t,i),f=n.prevZ,m=n.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==n.prev&&f!==n.next&&ai(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ze(f.prev,f,f.next)>=0||(f=f.prevZ,m!==n.prev&&m!==n.next&&ai(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Ze(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==n.prev&&f!==n.next&&ai(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ze(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==n.prev&&m!==n.next&&ai(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Ze(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function ig(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Yr(r,s)&&jc(r,i,i.next,s)&&Vi(r,s)&&Vi(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Wi(i),Wi(i.next),i=n=s),i=i.next}while(i!==n);return un(i)}function rg(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fg(o,a)){let c=Xc(o,a);o=un(o,o.next),c=un(c,c.next),ki(o,e,t,i,r,s),ki(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function sg(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=qc(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(dg(l));for(r.sort(og),s=0;s<r.length;s++)ag(r[s],t),t=un(t,t.next);return t}function og(n,e){return n.x-e.x}function ag(n,e){if(e=cg(n,e),e){let t=Xc(e,n);un(e,e.next),un(t,t.next)}}function cg(n,e){let t=e,i=n.x,r=n.y,s=-Infinity,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s){if(s=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,h=Infinity,u;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&ai(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(i-t.x),Vi(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&lg(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function lg(n,e){return Ze(n.prev,n,e.prev)<0&&Ze(e.next,n,n.next)<0}function ug(n,e,t,i){let r=n;do r.z===null&&(r.z=xo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,hg(r)}function hg(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function xo(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ai(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function fg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!pg(n,e)&&(Vi(n,e)&&Vi(e,n)&&mg(n,e)&&(Ze(n.prev,n,e.prev)||Ze(n,e.prev,e))||Yr(n,e)&&Ze(n.prev,n,n.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Yr(n,e){return n.x===e.x&&n.y===e.y}function jc(n,e,t,i){let r=Jr(Ze(n,e,t)),s=Jr(Ze(n,e,i)),o=Jr(Ze(t,i,n)),a=Jr(Ze(t,i,e));return!!(r!==s&&o!==a||r===0&&Zr(n,t,e)||s===0&&Zr(n,i,e)||o===0&&Zr(t,n,i)||a===0&&Zr(t,e,i))}function Zr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Jr(n){return n>0?1:n<0?-1:0}function pg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&jc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vi(n,e){return Ze(n.prev,n,n.next)<0?Ze(n,e,n.next)>=0&&Ze(n,n.prev,e)>=0:Ze(n,e,n.prev)<0||Ze(n,n.next,e)<0}function mg(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xc(n,e){let t=new _o(n.i,n.x,n.y),i=new _o(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Yc(n,e,t,i){let r=new _o(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _o(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gg(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var hn={area:function(n){let e=n.length,t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return hn.area(n)<0},triangulateShape:function(n,e){let t=[],i=[],r=[];Zc(n),Jc(t,n);let s=n.length;e.forEach(Zc);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Jc(t,e[a]);let o=eg.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Zc(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Jc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qi=class extends Re{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:f-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:vg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let E,M=!1,A,x,D,N;g&&(E=g.getSpacedPoints(h),M=!0,d=!1,A=g.computeFrenetFrames(h,!1),x=new _,D=new _,N=new _),d||(y=0,f=0,m=0,v=0);let I=a.extractPoints(l),U=I.shape,C=I.holes;if(!hn.isClockWise(U)){U=U.reverse();for(let Y=0,J=C.length;Y<J;Y++){let K=C[Y];hn.isClockWise(K)&&(C[Y]=K.reverse())}}let P=hn.triangulateShape(U,C),R=U;for(let Y=0,J=C.length;Y<J;Y++){let K=C[Y];U=U.concat(K)}function B(Y,J,K){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(K).add(Y)}let F=U.length,X=P.length;function $(Y,J,K){let he,ie,S,b=Y.x-J.x,q=Y.y-J.y,j=K.x-Y.x,se=K.y-Y.y,de=b*b+q*q,De=b*se-q*j;if(Math.abs(De)>Number.EPSILON){let ve=Math.sqrt(de),L=Math.sqrt(j*j+se*se),Q=J.x-q/ve,ee=J.y+b/ve,T=K.x-se/L,z=K.y+j/L,ae=((T-Q)*se-(z-ee)*j)/(b*se-q*j);he=Q+b*ae-Y.x,ie=ee+q*ae-Y.y;let ye=he*he+ie*ie;if(ye<=2)return new k(he,ie);S=Math.sqrt(ye/2)}else{let ve=!1;b>Number.EPSILON?j>Number.EPSILON&&(ve=!0):b<-Number.EPSILON?j<-Number.EPSILON&&(ve=!0):Math.sign(q)===Math.sign(se)&&(ve=!0),ve?(he=-q,ie=b,S=Math.sqrt(de)):(he=b,ie=q,S=Math.sqrt(de/2))}return new k(he/S,ie/S)}let Z=[];for(let Y=0,J=R.length,K=J-1,he=Y+1;Y<J;Y++,K++,he++)K===J&&(K=0),he===J&&(he=0),Z[Y]=$(R[Y],R[K],R[he]);let oe=[],ce,ge=Z.concat();for(let Y=0,J=C.length;Y<J;Y++){let K=C[Y];ce=[];for(let he=0,ie=K.length,S=ie-1,b=he+1;he<ie;he++,S++,b++)S===ie&&(S=0),b===ie&&(b=0),ce[he]=$(K[he],K[S],K[b]);oe.push(ce),ge=ge.concat(ce)}for(let Y=0;Y<y;Y++){let J=Y/y,K=f*Math.cos(J*Math.PI/2),he=m*Math.sin(J*Math.PI/2)+v;for(let ie=0,S=R.length;ie<S;ie++){let b=B(R[ie],Z[ie],he);ne(b.x,b.y,-K)}for(let ie=0,S=C.length;ie<S;ie++){let b=C[ie];ce=oe[ie];for(let q=0,j=b.length;q<j;q++){let se=B(b[q],ce[q],he);ne(se.x,se.y,-K)}}}let xe=m+v;for(let Y=0;Y<F;Y++){let J=d?B(U[Y],ge[Y],xe):U[Y];M?(D.copy(A.normals[0]).multiplyScalar(J.x),x.copy(A.binormals[0]).multiplyScalar(J.y),N.copy(E[0]).add(D).add(x),ne(N.x,N.y,N.z)):ne(J.x,J.y,0)}for(let Y=1;Y<=h;Y++)for(let J=0;J<F;J++){let K=d?B(U[J],ge[J],xe):U[J];M?(D.copy(A.normals[Y]).multiplyScalar(K.x),x.copy(A.binormals[Y]).multiplyScalar(K.y),N.copy(E[Y]).add(D).add(x),ne(N.x,N.y,N.z)):ne(K.x,K.y,u/h*Y)}for(let Y=y-1;Y>=0;Y--){let J=Y/y,K=f*Math.cos(J*Math.PI/2),he=m*Math.sin(J*Math.PI/2)+v;for(let ie=0,S=R.length;ie<S;ie++){let b=B(R[ie],Z[ie],he);ne(b.x,b.y,u+K)}for(let ie=0,S=C.length;ie<S;ie++){let b=C[ie];ce=oe[ie];for(let q=0,j=b.length;q<j;q++){let se=B(b[q],ce[q],he);M?ne(se.x,se.y+E[h-1].y,E[h-1].x+K):ne(se.x,se.y,u+K)}}}V(),Fe();function V(){let Y=r.length/3;if(d){let J=0,K=F*J;for(let he=0;he<X;he++){let ie=P[he];le(ie[2]+K,ie[1]+K,ie[0]+K)}J=h+y*2,K=F*J;for(let he=0;he<X;he++){let ie=P[he];le(ie[0]+K,ie[1]+K,ie[2]+K)}}else{for(let J=0;J<X;J++){let K=P[J];le(K[2],K[1],K[0])}for(let J=0;J<X;J++){let K=P[J];le(K[0]+F*h,K[1]+F*h,K[2]+F*h)}}i.addGroup(Y,r.length/3-Y,0)}function Fe(){let Y=r.length/3,J=0;Ce(R,J),J+=R.length;for(let K=0,he=C.length;K<he;K++){let ie=C[K];Ce(ie,J),J+=ie.length}i.addGroup(Y,r.length/3-Y,1)}function Ce(Y,J){let K=Y.length;for(;--K>=0;){let he=K,ie=K-1;ie<0&&(ie=Y.length-1);for(let S=0,b=h+y*2;S<b;S++){let q=F*S,j=F*(S+1),se=J+he+q,de=J+ie+q,De=J+ie+j,ve=J+he+j;we(se,de,De,ve)}}}function ne(Y,J,K){c.push(Y),c.push(J),c.push(K)}function le(Y,J,K){fe(Y),fe(J),fe(K);let he=r.length/3,ie=p.generateTopUV(i,r,he-3,he-2,he-1);pe(ie[0]),pe(ie[1]),pe(ie[2])}function we(Y,J,K,he){fe(Y),fe(J),fe(he),fe(J),fe(K),fe(he);let ie=r.length/3,S=p.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);pe(S[0]),pe(S[1]),pe(S[3]),pe(S[1]),pe(S[2]),pe(S[3])}function fe(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function pe(Y){s.push(Y.x),s.push(Y.y)}}}toJSON(){let e=Re.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return yg(t,i,e)}},vg={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new k(s,o),new k(a,c),new k(l,h)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],f=e[r*3+1],m=e[r*3+2],v=e[s*3],y=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<.01?[new k(o,1-c),new k(l,1-u),new k(d,1-m),new k(v,1-g)]:[new k(a,1-c),new k(h,1-u),new k(f,1-m),new k(y,1-g)]}};function yg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function wo(n,e,t){Re.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t};let i=[],r=[],s=[],o=[],a=1e-5,c=new _,l=new _,h=new _,u=new _,d=new _;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=e+1;for(let m=0;m<=t;m++){let v=m/t;for(let y=0;y<=e;y++){let g=y/e;n(g,v,l),r.push(l.x,l.y,l.z),g-a>=0?(n(g-a,v,h),u.subVectors(l,h)):(n(g+a,v,h),u.subVectors(h,l)),v-a>=0?(n(g,v-a,h),d.subVectors(l,h)):(n(g,v+a,h),d.subVectors(h,l)),c.crossVectors(u,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,v)}}for(let m=0;m<t;m++)for(let v=0;v<e;v++){let y=m*f+v,g=m*f+v+1,p=(m+1)*f+v+1,E=(m+1)*f+v;i.push(y,g,E),i.push(g,p,E)}this.setIndex(i),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(o,2))}wo.prototype=Object.create(Re.prototype);wo.prototype.constructor=wo;var bo=class extends Re{constructor(e=.5,t=1,i=8,r=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/r,f=new _,m=new k;for(let v=0;v<=r;v++){for(let y=0;y<=i;y++){let g=s+y/i*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<r;v++){let y=v*(i+1);for(let g=0;g<i;g++){let p=g+y,E=p,M=p+i+1,A=p+i+2,x=p+1;a.push(E,M,x),a.push(M,A,x)}}this.setIndex(a),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}},Qc=class extends Re{constructor(e,t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(o,2));function l(h){let u=r.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;hn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=m.length;y<g;y++){let p=m[y];hn.isClockWise(p)===!0&&(m[y]=p.reverse())}let v=hn.triangulateShape(f,m);for(let y=0,g=m.length;y<g;y++){let p=m[y];f=f.concat(p)}for(let y=0,g=f.length;y<g;y++){let p=f[y];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,g=v.length;y<g;y++){let p=v[y],E=p[0]+u,M=p[1]+u,A=p[2]+u;i.push(E,M,A),c+=3}}}toJSON(){let e=Re.prototype.toJSON.call(this),t=this.parameters.shapes;return xg(t,e)}};function xg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var dn=class extends Re{constructor(e=1,t=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new _,d=new _,f=[],m=[],v=[],y=[];for(let g=0;g<=i;g++){let p=[],E=g/i,M=0;g==0&&o==0?M=.5/t:g==i&&c==Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let x=A/t;u.x=-e*Math.cos(r+x*s)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(r+x*s)*Math.sin(o+E*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),y.push(x+M,1-E),p.push(l++)}h.push(p)}for(let g=0;g<i;g++)for(let p=0;p<t;p++){let E=h[g][p+1],M=h[g][p],A=h[g+1][p],x=h[g+1][p+1];(g!==0||o>0)&&f.push(E,M,x),(g!==i-1||c<Math.PI)&&f.push(M,A,x)}this.setIndex(f),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(y,2))}};var Kc=class extends Ye{constructor(e){super();this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Kc.prototype.isShadowMaterial=!0;var $c=class extends ke{constructor(e){super(e);this.type="RawShaderMaterial"}};$c.prototype.isRawShaderMaterial=!0;function fn(n){Ye.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(n)}fn.prototype=Object.create(Ye.prototype);fn.prototype.constructor=fn;fn.prototype.isMeshStandardMaterial=!0;fn.prototype.copy=function(n){return Ye.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.flatShading=n.flatShading,this.vertexTangents=n.vertexTangents,this};function ci(n){fn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=_e.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}ci.prototype=Object.create(fn.prototype);ci.prototype.constructor=ci;ci.prototype.isMeshPhysicalMaterial=!0;ci.prototype.copy=function(n){return fn.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new ue).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};var Et=class extends Ye{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Et.prototype.isMeshPhongMaterial=!0;var el=class extends Ye{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};el.prototype.isMeshToonMaterial=!0;var tl=class extends Ye{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};tl.prototype.isMeshNormalMaterial=!0;var nl=class extends Ye{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};nl.prototype.isMeshLambertMaterial=!0;var il=class extends Ye{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};il.prototype.isMeshMatcapMaterial=!0;var rl=class extends oi{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};rl.prototype.isLineDashedMaterial=!0;var qe={arraySlice:function(n,e,t){return qe.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){let m=l.times[f]*r;if(!(m<t||m>=i)){u.push(l.times[f]);for(let v=0;v<h;++v)d.push(l.values[f*h+v])}}u.length!==0&&(l.times=qe.convertArray(u,l.times.constructor),l.values=qe.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=n.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,v;if(s<=a.times[0]){let g=h,p=u-h;v=qe.arraySlice(a.values,g,p)}else if(s>=a.times[m]){let g=m*u+h,p=g+u-h;v=qe.arraySlice(a.values,g,p)}else{let g=a.createInterpolant(),p=h,E=u-h;g.evaluate(s),v=qe.arraySlice(g.resultBuffer,p,E)}c==="quaternion"&&new et().fromArray(v).normalize().conjugate().toArray(v);let y=l.times.length;for(let g=0;g<y;++g){let p=g*f+d;if(c==="quaternion")et.multiplyQuaternionsFlat(l.values,p,v,0,l.values,p);else{let E=f-d*2;for(let M=0;M<E;++M)l.values[p+M]-=v[M]}}}return n.blendMode=Ra,n}};function Rt(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(Rt.prototype,{evaluate:function(n){let e=this.parameterPositions,t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){let o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){let o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){let e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Rt.prototype,{beforeStart_:Rt.prototype.copySampleValue_,afterEnd_:Rt.prototype.copySampleValue_});function Mo(n,e,t,i){Rt.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Mo.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Mo,DefaultSettings_:{endingStart:In,endingEnd:In},intervalChanged_:function(n,e,t){let i=this.parameterPositions,r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Fn:r=n,o=2*e-t;break;case vr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case Fn:s=n,a=2*t-e;break;case vr:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}let c=(t-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-t),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(t-e)/(i-e),m=f*f,v=m*f,y=-u*v+2*u*m-u*f,g=(1+u)*v+(-1.5-2*u)*m+(-.5+u)*f+1,p=(-1-d)*v+(1.5+d)*m+.5*f,E=d*v-d*m;for(let M=0;M!==o;++M)r[M]=y*s[l+M]+g*s[c+M]+p*s[a+M]+E*s[h+M];return r}});function Qr(n,e,t,i){Rt.call(this,n,e,t,i)}Qr.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Qr,interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=(t-e)/(i-e),h=1-l;for(let u=0;u!==o;++u)r[u]=s[c+u]*h+s[a+u]*l;return r}});function So(n,e,t,i){Rt.call(this,n,e,t,i)}So.prototype=Object.assign(Object.create(Rt.prototype),{constructor:So,interpolate_:function(n){return this.copySampleValue_(n-1)}});var Nt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qe.convertArray(t,this.TimeBufferType),this.values=qe.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qe.convertArray(e.times,Array),values:qe.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case bs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return bs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=qe.arraySlice(i,s,o),this.values=qe.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&qe.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=qe.arraySlice(this.times),t=qe.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===bs,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=qe.arraySlice(e,0,o),this.values=qe.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=qe.arraySlice(this.times,0),t=qe.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Nt.prototype.TimeBufferType=Float32Array;Nt.prototype.ValueBufferType=Float32Array;Nt.prototype.DefaultInterpolation=gr;var En=class extends Nt{};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=mr;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Nt{};Eo.prototype.ValueTypeName="color";var ji=class extends Nt{};ji.prototype.ValueTypeName="number";function To(n,e,t,i){Rt.call(this,n,e,t,i)}To.prototype=Object.assign(Object.create(Rt.prototype),{constructor:To,interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e),c=n*o;for(let l=c+o;c!==l;c+=4)et.slerpFlat(r,0,s,c-o,s,c,a);return r}});var li=class extends Nt{InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=gr;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Tn=class extends Nt{};Tn.prototype.ValueTypeName="string";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=mr;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Nt{};Xi.prototype.ValueTypeName="vector";var Ao=class{constructor(e,t=-1,i,r=Ms){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=_e.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(wg(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Nt.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=qe.getKeyframeOrder(c);c=qe.sortedArray(c,1,h),l=qe.sortedArray(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,m,v){if(f.length!==0){let y=[],g=[];qe.flattenJSON(f,y,g,m),y.length!==0&&v.push(new u(d,y,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let y=[],g=[];for(let p=0;p!==d[m].morphTargets.length;++p){let E=d[m];y.push(E.time),g.push(E.morphTarget===v?1:0)}r.push(new ji(".morphTargetInfluence["+v+"]",y,g))}c=f.length*(o||1)}else{let f=".bones["+t[u].name+"]";i(Xi,f+".position",d,"pos",r),i(li,f+".quaternion",d,"rot",r),i(Xi,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _g(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return Eo;case"quaternion":return li;case"bool":case"boolean":return En;case"string":return Tn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function wg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_g(n.type);if(n.times===void 0){let t=[],i=[];qe.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ui={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function bg(n,e,t){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],f=c[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}var Mg=new bg;function ut(n){this.manager=n!==void 0?n:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(ut.prototype,{load:function(){},loadAsync:function(n,e){let t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});var Ot={};function Yi(n){ut.call(this,n)}Yi.prototype=Object.assign(Object.create(ut.prototype),{constructor:Yi,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);let r=this,s=ui.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(Ot[n]!==void 0){Ot[n].push({onLoad:e,onProgress:t,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o),c;if(a){let l=a[1],h=!!a[2],u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let m=new Uint8Array(u.length);for(let y=0;y<u.length;y++)m[y]=u.charCodeAt(y);f==="blob"?d=new Blob([m.buffer],{type:l}):d=m.buffer;break;case"document":d=new DOMParser().parseFromString(u,l);break;case"json":d=JSON.parse(u);break;default:d=u;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(n)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{Ot[n]=[],Ot[n].push({onLoad:e,onProgress:t,onError:i}),c=new XMLHttpRequest,c.open("GET",n,!0),c.addEventListener("load",function(l){let h=this.response,u=Ot[n];if(delete Ot[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ui.add(n,h);for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onLoad&&m.onLoad(h)}r.manager.itemEnd(n)}else{for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onError&&m.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),c.addEventListener("progress",function(l){let h=Ot[n];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let h=Ot[n];delete Ot[n];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),c.addEventListener("abort",function(l){let h=Ot[n];delete Ot[n];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(n),c},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});function sl(n){ut.call(this,n)}sl.prototype=Object.assign(Object.create(ut.prototype),{constructor:sl,load:function(n,e,t,i){let r=this,s=[],o=new vo,a=new Yi(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(h){a.load(n[h],function(u){let d=r.parse(u,!0);s[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=je),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let h=0,u=n.length;h<u;++h)l(h);else a.load(n,function(h){let u=r.parse(h,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let m=0;m<u.mipmapCount;m++)s[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+m]),s[f].format=u.format,s[f].width=u.width,s[f].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=je),o.format=u.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});var Lo=class extends ut{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ui.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),ui.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},ol=class extends ut{constructor(e){super(e)}load(e,t,i,r){let s=new Ci,o=new Lo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}};function al(n){ut.call(this,n)}al.prototype=Object.assign(Object.create(ut.prototype),{constructor:al,load:function(n,e,t,i){let r=this,s=new Or,o=new Yi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){let c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:wt,s.wrapT=c.wrapT!==void 0?c.wrapT:wt,s.magFilter=c.magFilter!==void 0?c.magFilter:je,s.minFilter=c.minFilter!==void 0?c.minFilter:je,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=hr),c.mipmapCount===1&&(s.minFilter=je),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,e&&e(s,c))},t,i),s}});function zt(n){ut.call(this,n)}zt.prototype=Object.assign(Object.create(ut.prototype),{constructor:zt,load:function(n,e,t,i){let r=new it,s=new Lo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;let a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?xn:ft,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function xt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(xt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){let t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){let e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){let e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){let n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){let t=this.getLengths(),i=0,r=t.length,s;e?s=e:s=n*t[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=t[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);let l=t[i],u=t[i+1]-l,d=(s-l)/u;return(i+d)/(r-1)},getTangent:function(n,e){let t=1e-4,i=n-t,r=n+t;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new k:new _);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){let t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){let t=new _,i=[],r=[],s=[],o=new _,a=new me;for(let d=0;d<=n;d++){let f=d/n;i[d]=this.getTangentAt(f,new _),i[d].normalize()}r[0]=new _,s[0]=new _;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,t.set(1,0,0)),h<=c&&(c=h,t.set(0,1,0)),u<=c&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=n;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(_e.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(_e.clamp(r[0].dot(r[n]),-1,1));d/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(d=-d);for(let f=1;f<=n;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){let n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});var Zi=class extends xt{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new k,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Zi.prototype.isEllipseCurve=!0;var Ro=class extends Zi{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o);this.type="ArcCurve"}};Ro.prototype.isArcCurve=!0;function Co(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Kr=new _,Po=new Co,Do=new Co,Io=new Co,Fo=class extends xt{constructor(e=[],t=!1,i="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Kr.subVectors(r[0],r[1]).add(r[0]),l=Kr);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Kr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),y<1e-4&&(y=v),Po.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,y),Do.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,y),Io.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,y)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Do.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Io.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Po.calc(c),Do.calc(c),Io.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Fo.prototype.isCatmullRomCurve3=!0;function cl(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Sg(n,e){let t=1-n;return t*t*e}function Eg(n,e){return 2*(1-n)*n*e}function Tg(n,e){return n*n*e}function Ji(n,e,t,i){return Sg(n,e)+Eg(n,t)+Tg(n,i)}function Ag(n,e){let t=1-n;return t*t*t*e}function Lg(n,e){let t=1-n;return 3*t*t*n*e}function Rg(n,e){return 3*(1-n)*n*n*e}function Cg(n,e){return n*n*n*e}function Qi(n,e,t,i,r){return Ag(n,e)+Lg(n,t)+Rg(n,i)+Cg(n,r)}var $r=class extends xt{constructor(e=new k,t=new k,i=new k,r=new k){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new k){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qi(e,r.x,s.x,o.x,a.x),Qi(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};$r.prototype.isCubicBezierCurve=!0;var Bo=class extends xt{constructor(e=new _,t=new _,i=new _,r=new _){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qi(e,r.x,s.x,o.x,a.x),Qi(e,r.y,s.y,o.y,a.y),Qi(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Bo.prototype.isCubicBezierCurve3=!0;var Ki=class extends xt{constructor(e=new k,t=new k){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new k;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ki.prototype.isLineCurve=!0;var ll=class extends xt{constructor(e=new _,t=new _){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},es=class extends xt{constructor(e=new k,t=new k,i=new k){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ji(e,r.x,s.x,o.x),Ji(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};es.prototype.isQuadraticBezierCurve=!0;var No=class extends xt{constructor(e=new _,t=new _,i=new _){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ji(e,r.x,s.x,o.x),Ji(e,r.y,s.y,o.y),Ji(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};No.prototype.isQuadraticBezierCurve3=!0;var ts=class extends xt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new k){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(cl(a,c.x,l.x,h.x,u.x),cl(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new k().fromArray(r))}return this}};ts.prototype.isSplineCurve=!0;var Pg=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Fo,CubicBezierCurve:$r,CubicBezierCurve3:Bo,EllipseCurve:Zi,LineCurve:Ki,LineCurve3:ll,QuadraticBezierCurve:es,QuadraticBezierCurve3:No,SplineCurve:ts}),ul=class extends xt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ki(t,e))}getPoint(e){let t=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=t){let s=i[r]-t,o=this.curves[r],a=o.getLength(),c=a===0?0:1-s/a;return o.getPointAt(c)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Pg[r.type]().fromJSON(r))}return this}},$i=class extends ul{constructor(e){super();this.type="Path",this.currentPoint=new k,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ki(this.currentPoint.clone(),new k(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new es(this.currentPoint.clone(),new k(e,t),new k(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new $r(this.currentPoint.clone(),new k(e,t),new k(i,r),new k(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ts(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new Zi(e,t,i,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},An=class extends $i{constructor(e){super(e);this.uuid=_e.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new $i().fromJSON(r))}return this}},Ht=class extends Se{constructor(e,t=1){super();this.type="Light",this.color=new ue(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Ht.prototype.isLight=!0;var hl=class extends Ht{constructor(e,t,i){super(e,i);this.type="HemisphereLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.groundColor=new ue(t)}copy(e){return Ht.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};hl.prototype.isHemisphereLight=!0;var dl=new me,fl=new _,pl=new _,ns=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new k(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oo=class extends ns{constructor(){super(new ct(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,i=_e.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Oo.prototype.isSpotLightShadow=!0;var ml=class extends Ht{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Oo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ml.prototype.isSpotLight=!0;var gl=new me,er=new _,zo=new _,Ho=class extends ns{constructor(){super(new ct(90,1,.5,500));this._frameExtents=new k(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),i.position.copy(er),zo.copy(i.position),zo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zo),i.updateMatrixWorld(),r.makeTranslation(-er.x,-er.y,-er.z),gl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl)}};Ho.prototype.isPointLightShadow=!0;var vl=class extends Ht{constructor(e,t,i=0,r=1){super(e,t);this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ho}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};vl.prototype.isPointLight=!0;var Ln=class extends Jn{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=Se.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Ln.prototype.isOrthographicCamera=!0;var Uo=class extends ns{constructor(){super(new Ln(-5,5,5,-5,.5,500))}};Uo.prototype.isDirectionalLightShadow=!0;var tr=class extends Ht{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.target=new Se,this.shadow=new Uo}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};tr.prototype.isDirectionalLight=!0;var is=class extends Ht{constructor(e,t){super(e,t);this.type="AmbientLight"}};is.prototype.isAmbientLight=!0;var yl=class extends Ht{constructor(e,t,i=10,r=10){super(e,t);this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};yl.prototype.isRectAreaLight=!0;var Go=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new _)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}};Go.prototype.isSphericalHarmonics3=!0;var rs=class extends Ht{constructor(e=new Go,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};rs.prototype.isLightProbe=!0;var Dg={decodeText:function(n){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch(t){return e}},extractUrlBase:function(n){let e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function ko(){Re.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}ko.prototype=Object.assign(Object.create(Re.prototype),{constructor:ko,isInstancedBufferGeometry:!0,copy:function(n){return Re.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let n=Re.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function xl(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Le.call(this,n,e,t),this.meshPerAttribute=i||1}xl.prototype=Object.assign(Object.create(Le.prototype),{constructor:xl,isInstancedBufferAttribute:!0,copy:function(n){return Le.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){let n=Le.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});function _l(n){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),ut.call(this,n),this.options={premultiplyAlpha:"none"}}_l.prototype=Object.assign(Object.create(ut.prototype),{constructor:_l,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);let r=this,s=ui.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){ui.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});var wl=class{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $i,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(p){let E=[];for(let M=0,A=p.length;M<A;M++){let x=p[M],D=new An;D.curves=x.curves,E.push(D)}return E}function r(p,E){let M=E.length,A=!1;for(let x=M-1,D=0;D<M;x=D++){let N=E[x],I=E[D],U=I.x-N.x,C=I.y-N.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(N=E[D],U=-U,I=E[x],C=-C),p.y<N.y||p.y>I.y)continue;if(p.y===N.y){if(p.x===N.x)return!0}else{let G=C*(p.x-N.x)-U*(p.y-N.y);if(G===0)return!0;if(G<0)continue;A=!A}}else{if(p.y!==N.y)continue;if(I.x<=p.x&&p.x<=N.x||N.x<=p.x&&p.x<=I.x)return!0}}return A}let s=hn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l,h=[];if(o.length===1)return c=o[0],l=new An,l.curves=c.curves,h.push(l),h;let u=!s(o[0].getPoints());u=e?!u:u;let d=[],f=[],m=[],v=0,y;f[v]=void 0,m[v]=[];for(let p=0,E=o.length;p<E;p++)c=o[p],y=c.getPoints(),a=s(y),a=e?!a:a,a?(!u&&f[v]&&v++,f[v]={s:new An,p:y},f[v].s.curves=c.curves,u&&v++,m[v]=[]):m[v].push({h:c,p:y[0]});if(!f[0])return i(o);if(f.length>1){let p=!1,E=[];for(let M=0,A=f.length;M<A;M++)d[M]=[];for(let M=0,A=f.length;M<A;M++){let x=m[M];for(let D=0;D<x.length;D++){let N=x[D],I=!0;for(let U=0;U<f.length;U++)r(N.p,f[U].p)&&(M!==U&&E.push({froms:M,tos:U,hole:D}),I?(I=!1,d[U].push(N)):p=!0);I&&d[M].push(N)}}E.length>0&&(p||(m=d))}let g;for(let p=0,E=f.length;p<E;p++){l=f[p].s,h.push(l),g=m[p];for(let M=0,A=g.length;M<A;M++)l.holes.push(g[M].h)}return h}},bl=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=Ig(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}};function Ig(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let h=i[l];if(h===`
`)a=0,c-=s;else{let u=Fg(h,r,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function Fg(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new wl,a,c,l,h,u,d,f,m;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,g=v.length;y<g;)switch(v[y++]){case"m":a=v[y++]*e+t,c=v[y++]*e+i,o.moveTo(a,c);break;case"l":a=v[y++]*e+t,c=v[y++]*e+i,o.lineTo(a,c);break;case"q":l=v[y++]*e+t,h=v[y++]*e+i,u=v[y++]*e+t,d=v[y++]*e+i,o.quadraticCurveTo(u,d,l,h);break;case"b":l=v[y++]*e+t,h=v[y++]*e+i,u=v[y++]*e+t,d=v[y++]*e+i,f=v[y++]*e+t,m=v[y++]*e+i,o.bezierCurveTo(u,d,f,m,l,h);break}}return{offsetX:s.ha*e,path:o}}bl.prototype.isFont=!0;var ss,Bg={getContext:function(){return ss===void 0&&(ss=new(window.AudioContext||window.webkitAudioContext)),ss},setContext:function(n){ss=n}},Ml=class extends ut{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Yi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let c=a.slice(0);Bg.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}},Sl=class extends rs{constructor(e,t,i=1){super(void 0,i);let r=new ue().set(e),s=new ue().set(t),o=new _(r.r,r.g,r.b),a=new _(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}};Sl.prototype.isHemisphereLightProbe=!0;var El=class extends rs{constructor(e,t=1){super(void 0,t);let i=new ue().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}};El.prototype.isAmbientLightProbe=!0;var ev=new me,tv=new me;var Vo=class{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tl(){return(typeof performance=="undefined"?Date:performance).now()}var Al=class extends Se{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Ll=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Rl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(i,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){et.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;et.multiplyQuaternionsFlat(e,o,e,t,e,i),et.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},Wo="\\[\\]\\.:\\/",Ng=new RegExp("["+Wo+"]","g"),qo="[^"+Wo+"]",Og="[^"+Wo.replace("\\.","")+"]",zg=/((?:WC+[\/:])*)/.source.replace("WC",qo),Hg=/(WCOD+)?/.source.replace("WCOD",Og),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),kg=new RegExp("^"+zg+Hg+Ug+Gg+"$"),Vg=["material","materials","bones"];function Cl(n,e,t){let i=t||mt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}Object.assign(Cl.prototype,{getValue:function(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)},setValue:function(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)},bind:function(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()},unbind:function(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}});function mt(n,e,t){this.path=e,this.parsedPath=t||mt.parseTrackName(e),this.node=mt.findNode(n,this.parsedPath.nodeName)||n,this.rootNode=n}Object.assign(mt,{Composite:Cl,create:function(n,e,t){return n&&n.isAnimationObjectGroup?new mt.Composite(n,e,t):new mt(n,e,t)},sanitizeNodeName:function(n){return n.replace(/\s/g,"_").replace(Ng,"")},parseTrackName:function(n){let e=kg.exec(n);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+n);let t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=t.nodeName.substring(i+1);Vg.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return t},findNode:function(n,e){if(!e||e===""||e==="."||e===-1||e===n.name||e===n.uuid)return n;if(n.skeleton){let t=n.skeleton.getBoneByName(e);if(t!==void 0)return t}if(n.children){let t=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=t(o.children);if(a)return a}return null},i=t(n.children);if(i)return i}return null}});Object.assign(mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let n=this.node,e=this.parsedPath,t=e.objectName,i=e.propertyName,r=e.propertyIndex;if(n||(n=mt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let c=e.objectIndex;switch(t){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let l=0;l<n.length;l++)if(n[l].name===c){c=l;break}break;default:if(n[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[t]}if(c!==void 0){if(n[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[c]}}let s=n[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",n);return}let o=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[r]!==void 0&&(r=n.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(mt.prototype,{_getValue_unbound:mt.prototype.getValue,_setValue_unbound:mt.prototype.setValue});var Pl=class{constructor(){this.uuid=_e.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let v=0,y=o;v!==y;++v)s[v].push(new mt(d,i[v],r[v]))}else if(m<l){a=e[m];let v=--l,y=e[v];t[y.uuid]=m,e[m]=y,t[f]=v,e[v]=d;for(let g=0,p=o;g!==p;++g){let E=s[g],M=E[v],A=E[m];E[m]=M,A===void 0&&(A=new mt(d,i[g],r[g])),E[v]=A}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=s){let u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,m=r;f!==m;++f){let v=i[f],y=v[u],g=v[h];v[h]=y,v[u]=g}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let d=--s,f=e[d],m=--o,v=e[m];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let y=0,g=r;y!==g;++y){let p=i[y],E=p[d],M=p[m];p[u]=E,p[d]=M,p.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,v=r;m!==v;++m){let y=i[m];y[u]=y[d],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(u);for(let d=h,f=c.length;d!==f;++d){let m=c[d];u[d]=new mt(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=i,o[i]=c,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}};Pl.prototype.isAnimationObjectGroup=!0;var Dl=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),c={endingStart:In,endingEnd:In};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,t=i*c}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ra:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ms:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===Eh;if(e===0)return s===-1?r:o&&(s&1)==1?t-r:r;if(i===Mh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Fn,r.endingEnd=Fn):(e?r.endingStart=this.zeroSlopeAtStart?Fn:In:r.endingStart=vr,t?r.endingEnd=this.zeroSlopeAtEnd?Fn:In:r.endingEnd=vr)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=i,this}},Il=class extends Pt{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=r[u],f=d.name,m=h[f];if(m!==void 0)o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new Rl(mt.create(i,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Qr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?Ao.findByName(r,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Ms),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Dl(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?Ao.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};Il.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var os=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new os(this.value.clone===void 0?this.value:this.value.clone())}};function Fl(n,e,t){Lt.call(this,n,e),this.meshPerAttribute=t||1}Fl.prototype=Object.assign(Object.create(Lt.prototype),{constructor:Fl,isInstancedInterleavedBuffer:!0,copy:function(n){return Lt.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},clone:function(n){let e=Lt.prototype.clone.call(this,n);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(n){let e=Lt.prototype.toJSON.call(this,n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Bl(n,e,t,i,r){this.buffer=n,this.type=e,this.itemSize=t,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Bl.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Bl.prototype,{isGLBufferAttribute:!0,setBuffer:function(n){return this.buffer=n,this},setType:function(n,e){return this.type=n,this.elementSize=e,this},setItemSize:function(n){return this.itemSize=n,this},setCount:function(n){return this.count=n,this}});function hi(n,e,t=0,i=Infinity){this.ray=new rn(n,e),this.near=t,this.far=i,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Nl(n,e){return n.distance-e.distance}function jo(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)jo(r[s],e,t,!0)}}Object.assign(hi.prototype,{set:function(n,e){this.ray.set(n,e)},setFromCamera:function(n,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(n,e=!1,t=[]){return jo(n,this,t,e),t.sort(Nl),t},intersectObjects:function(n,e=!1,t=[]){for(let i=0,r=n.length;i<r;i++)jo(n[i],this,t,e);return t.sort(Nl),t}});var nr=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_e.clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ol=new k,di=class{constructor(e=new k(Infinity,Infinity),t=new k(-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ol.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new k),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new k),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new k),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new k),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ol.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};di.prototype.isBox2=!0;var zl=new _,as=new _,Hl=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new _),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new _),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new _),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zl.subVectors(e,this.start),as.subVectors(this.end,this.start);let i=as.dot(as),s=as.dot(zl)/i;return t&&(s=_e.clamp(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new _),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function cs(n){Se.call(this),this.material=n,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}cs.prototype=Object.create(Se.prototype);cs.prototype.constructor=cs;cs.prototype.isImmediateRenderObject=!0;var pn=new _,ls=new me,Xo=new me,Ul=class extends qr{constructor(e){let t=Gl(e),i=new Re,r=[],s=[],o=new ue(0,0,1),a=new ue(0,1,0);for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Ae(r,3)),i.setAttribute("color",new Ae(s,3));let c=new oi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");Xo.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(ls.multiplyMatrices(Xo,a.matrixWorld),pn.setFromMatrixPosition(ls),r.setXYZ(o,pn.x,pn.y,pn.z),ls.multiplyMatrices(Xo,a.parent.matrixWorld),pn.setFromMatrixPosition(ls),r.setXYZ(o+1,pn.x,pn.y,pn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Gl(n){let e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Gl(n.children[t]));return e}var kl=class extends qr{constructor(e=10,t=10,i=4473924,r=8947848){i=new ue(i),r=new ue(r);let s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let v=d===s?i:r;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}let h=new Re;h.setAttribute("position",new Ae(c,3)),h.setAttribute("color",new Ae(l,3));let u=new oi({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}};var Wg=new Float32Array(1),nv=new Int32Array(Wg.buffer);var qg=4,Vl=8,iv=Math.pow(2,Vl),jg=[.125,.215,.35,.446,.526,.582],rv=Vl-qg+1+jg.length;var sv={[Bn]:0,[wi]:1,[Pa]:2,[Da]:3,[Ia]:4,[Fa]:5,[Ca]:6},Xg=new Vt({side:tt,depthWrite:!1,depthTest:!1}),ov=new Ie(new Kt,Xg);var Rn=(1+Math.sqrt(5))/2,fi=1/Rn,av=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,Rn,fi),new _(0,Rn,-fi),new _(fi,0,Rn),new _(-fi,0,Rn),new _(Rn,fi,0),new _(-Rn,fi,0)];xt.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(xt.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};$i.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};kl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Ul.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ut.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Dg.extractUrlBase(n)};ut.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};di.prototype.center=function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)};di.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};di.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};di.prototype.size=function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)};bt.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};bt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};bt.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};bt.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};bt.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};bn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Pi.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Hl.prototype.center=function(n){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(n)};_e.random16=function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()};_e.nearestPowerOfTwo=function(n){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),_e.floorPowerOfTwo(n)};_e.nextPowerOfTwo=function(n){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),_e.ceilPowerOfTwo(n)};nt.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};nt.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};nt.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};nt.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};me.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};me.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new _().setFromMatrixColumn(this,3)};me.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};me.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};me.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};me.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};me.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};me.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};me.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};me.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};It.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};et.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};et.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};rn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};rn.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};rn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Xe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Xe.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};Xe.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};Xe.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};Xe.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};Xe.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Xe.getBarycoord(n,e,t,i,r)};Xe.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Xe.getNormal(n,e,t,i)};An.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};An.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new qi(this,n)};An.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Qc(this,n)};k.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};k.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};k.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};_.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};_.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};_.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};_.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};_.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};_.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};_.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};_.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};_.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ze.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Se.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};Se.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Se.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};Se.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Se.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Se.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ie.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ie.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Th},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ho.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(xt.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(n){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=n}});ct.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Ht.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(Le.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Mi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Mi)}}});Le.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Mi:bi),this};Le.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Le.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Re.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};Re.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new Le(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};Re.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};Re.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Re.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Re.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};Re.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Re.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(ko.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(n){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=n}}});Object.defineProperties(hi.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(n){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=n}}});Object.defineProperties(Lt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Mi},set:function(n){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(n)}}});Lt.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Mi:bi),this};Lt.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};qi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};qi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};qi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Bi.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};os.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(Ye.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ue}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===aa}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(ci.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(n){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=n}}});Object.defineProperties(ke.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});He.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};He.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};He.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};He.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};He.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};He.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};He.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};He.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};He.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};He.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};He.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};He.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};He.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};He.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};He.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};He.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};He.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};He.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};He.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};He.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};He.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};He.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};He.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};He.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};He.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(He.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?wi:Bn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(yc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(yt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});Al.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new Ml().load(n,function(i){e.setBuffer(i)}),this};Ll.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Nr.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Nr.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};zn.crossOrigin=void 0;zn.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new zt;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};zn.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new ol;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};zn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};zn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);function Wl(n){let e=200,t=200;n&&n.w&&(e=n.w),n&&n.h&&(t=n.h);let i=4,r=parseInt(e/10),s=new At,o=new Sn(e,t,r,r),a=[],c=o.attributes.position.array,l=0,h=0,u=!0;for(let m=0;m<c.length;m+=3)c[m]==-e/2||c[m+1]==-t/2||c[m]==e/2||c[m+1]==t/2?(console.log(c[m],c[m+1],c[m+2]),c[m+2]=-1):c[m+2]+=Math.random()*i,a.push({i:m,x:c[m],y:c[m+1],z:c[m+2]}),l+=3,l>=r&&(l=0,h+=3);o.attributes.position.needsUpdate=!0;let d=new Et({color:12320648,wireframe:!1,opacity:1,transparent:!1}),f=new Ie(o,d);return f.position.x=0*1,f.position.y=-6*1,f.position.z=0*1,f.rotation.x=-Math.PI/2,s.add(f),window.terrainCreated&&window.terrainCreated(f,a),f}function ir(){let n=[{src:"img/rune/1.png"},{src:"img/rune/10.png"},{src:"img/rune/11.png"},{src:"img/rune/111.png"},{src:"img/rune/16.png"},{src:"img/rune/17.png"},{src:"img/rune/18.png"},{src:"img/rune/2.png"},{src:"img/rune/20.png"},{src:"img/rune/21.png"},{src:"img/rune/22.png"},{src:"img/rune/24.png"},{src:"img/rune/25.png"},{src:"img/rune/26.png"},{src:"img/rune/27.png"},{src:"img/rune/28.png"},{src:"img/rune/3.png"},{src:"img/rune/30.png"},{src:"img/rune/31.png"},{src:"img/rune/32.png"},{src:"img/rune/33.png"},{src:"img/rune/3434f.png"},{src:"img/rune/4.png"},{src:"img/rune/5.png"},{src:"img/rune/6.png"},{src:"img/rune/8.png"},{src:"img/rune/9.png"},{src:"img/rune/jhg.png"},{src:"img/rune/n1.png"},{src:"img/rune/n2.png"},{src:"img/rune/n3.png"},{src:"img/rune/n4.png"},{src:"img/rune/n5.png"},{src:"img/rune/n6.png"},{src:"img/rune/n7.png"},{src:"img/rune/n8.png"},{src:"img/rune/n9.png"},{src:"img/rune/n91.png"},{src:"img/rune/n92.jpeg"},{src:"img/rune/n93.png"},{src:"img/rune/n94.jpeg"},{src:"img/rune/n95.png"},{src:"img/rune/n96.png"},{src:"img/rune/n97.png"},{src:"img/rune/n98.png"},{src:"img/rune/n99.png"},{src:"img/rune/n991.png"},{src:"img/rune/nn0.jpeg"},{src:"img/rune/nn1.jpeg"},{src:"img/rune/nn3.png"},{src:"img/rune/nn4.png"},{src:"img/rune/nn5.png"},{src:"img/rune/nn6.png"},{src:"img/rune/nn7.png"},{src:"img/rune/nn8.png"},{src:"img/rune/nn9.png"},{src:"img/rune/nn91.png"},{src:"img/rune/nn92.png"},{src:"img/rune/nn93.png"}],e=n.map(i=>i.src);return e[parseInt(Math.random()*e.length)]}function rr(n,e){n||(n=ir()),console.log(n);let i=new zt().load(n);return new Et({color:16777215,map:i,opacity:1,transparent:!1,side:Cn})}function ql(n=1,e=0){let t=new Kt(n,n,n),i=new Et({color:e});return new Ie(t,i)}function jl(n=1,e){let t=new Kt(n,n,.1);return new Ie(t,e)}function Xl({scene:n,mapSize:e,frontier:t}){console.log("CH",{mapSize:e,frontier:t});let i=ql(1,4521796);return n.add(i),i}function Yl(n,e=200,t=200,i){let r=Math.random()<.9,s=new bo(.3,.8,10),o=new yo(.6,.3,5),a=new Kt(1,1,1),c=new Ie(a,rr());n.add(c);let l=Math.random()*5+2,h=Math.random()*1-.5,u=Math.random()*1-.5;h<0&&(l=-l),c.position.set(Math.random()*e-e/2,Math.random()*3,r?l:Math.random()*t-t/2);let d=c,f=.2,m=.01,v=.02,y=new hi;y.set(d.position,new _(0,-1,0));let g=new Ie(new dn(.4,30),rr());n.add(g);let p={x:0,y:0,z:0};E();function E(){d.position.x+=h,r||(d.position.z+=u),d.position.z>t&&(d.position.z-=t*2),d.position.x>e&&(d.position.x-=e*2),d.position.z<-t&&(d.position.z+=t*2),d.position.x<-e&&(d.position.x+=e*2),Math.random()<v&&(h+=Math.random()*m),Math.random()<v&&(u+=Math.random()*m),Math.random()<v&&(h-=Math.random()*m),Math.random()<v&&(u-=Math.random()*m),h>f&&(h=f),h<-f&&(h=-f),u>f&&(u=f),u<-f&&(u=-f),y.set(d.position,new _(0,-1,0));let M=y.intersectObject(i);if(M.length>0){let A=M[0].point;d.position.y=A.y+.1;let x={x:Math.atan2(M[0].face.normal.z,M[0].face.normal.y),y:Math.atan2(M[0].face.normal.x,M[0].face.normal.z),z:Math.atan2(M[0].face.normal.y,M[0].face.normal.x)};p.x+=(x.x-p.x)*.05,p.y+=(x.y-p.y)*.05,p.z+=(x.z-p.z)*.05,d.rotation.x=p.x,d.rotation.y=p.y,d.rotation.z=p.z}g.position.copy(d.position),g.position.y=d.position.y+.9,g.rotation.copy(d.rotation),g.rotation.x=-d.rotation.x,g.rotation.y=-d.rotation.y,requestAnimationFrame(E)}return d}function st(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(st.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});st.FullScreenQuad=function(){var n=new Ln(-1,1,1,-1,0,1),e=new Re;e.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),e.setAttribute("uv",new Ae([0,2,0,0,2,0],2));var t=function(i){this._mesh=new Ie(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,n)}}),t}();var us=function(n,e,t,i,r){st.call(this),this.scene=n,this.camera=e,this.overrideMaterial=t,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue};us.prototype=Object.assign(Object.create(st.prototype),{constructor:us,render:function(n,e,t){var i=n.autoClear;n.autoClear=!1;var r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(n.getClearColor(this._oldClearColor),r=n.getClearAlpha(),n.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&n.clearDepth(),n.setRenderTarget(this.renderToScreen?null:t),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),n.render(this.scene,this.camera),this.clearColor&&n.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),n.autoClear=i}});var pi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	gl_FragColor = opacity * texel;","}"].join(`
`)};var Yo={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	vec3 luma = vec3( 0.299, 0.587, 0.114 );","	float v = dot( texel.xyz, luma );","	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","	gl_FragColor = mix( outputColor, texel, alpha );","}"].join(`
`)};var mn=function(n,e,t,i){st.call(this),this.strength=e!==void 0?e:1,this.radius=t,this.threshold=i,this.resolution=n!==void 0?new k(n.x,n.y):new k(256,256),this.clearColor=new ue(0,0,0);var r={minFilter:je,magFilter:je,format:ft};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yt(s,o,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var a=0;a<this.nMips;a++){var c=new yt(s,o,r);c.texture.name="UnrealBloomPass.h"+a,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);var l=new yt(s,o,r);l.texture.name="UnrealBloomPass.v"+a,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),s=Math.round(s/2),o=Math.round(o/2)}Yo===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");var h=Yo;this.highPassUniforms=Zn.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,defines:{}}),this.separableBlurMaterials=[];for(var u=[3,5,7,9,11],s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2),a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[a])),this.separableBlurMaterials[a].uniforms.texSize.value=new k(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;var d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,pi===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");var f=pi;this.copyUniforms=Zn.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ke({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:cr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ue,this.oldClearAlpha=1,this.basic=new Vt,this.fsQuad=new st.FullScreenQuad(null)};mn.prototype=Object.assign(Object.create(st.prototype),{constructor:mn,dispose:function(){for(var n=0;n<this.renderTargetsHorizontal.length;n++)this.renderTargetsHorizontal[n].dispose();for(var n=0;n<this.renderTargetsVertical.length;n++)this.renderTargetsVertical[n].dispose();this.renderTargetBright.dispose()},setSize:function(n,e){var t=Math.round(n/2),i=Math.round(e/2);this.renderTargetBright.setSize(t,i);for(var r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(t,i),this.renderTargetsVertical[r].setSize(t,i),this.separableBlurMaterials[r].uniforms.texSize.value=new k(t,i),t=Math.round(t/2),i=Math.round(i/2)},render:function(n,e,t,i,r){n.getClearColor(this._oldClearColor),this.oldClearAlpha=n.getClearAlpha();var s=n.autoClear;n.autoClear=!1,n.setClearColor(this.clearColor,0),r&&n.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=t.texture,n.setRenderTarget(null),n.clear(),this.fsQuad.render(n)),this.highPassUniforms.tDiffuse.value=t.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,n.setRenderTarget(this.renderTargetBright),n.clear(),this.fsQuad.render(n);for(var o=this.renderTargetBright,a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=mn.BlurDirectionX,n.setRenderTarget(this.renderTargetsHorizontal[a]),n.clear(),this.fsQuad.render(n),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=mn.BlurDirectionY,n.setRenderTarget(this.renderTargetsVertical[a]),n.clear(),this.fsQuad.render(n),o=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,n.setRenderTarget(this.renderTargetsHorizontal[0]),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&n.state.buffers.stencil.setTest(!0),this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(t),this.fsQuad.render(n)),n.setClearColor(this._oldClearColor,this.oldClearAlpha),n.autoClear=s},getSeperableBlurMaterial:function(n){return new ke({defines:{KERNEL_RADIUS:n,SIGMA:n},uniforms:{colorTexture:{value:null},texSize:{value:new k(.5,.5)},direction:{value:new k(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;				uniform vec2 direction;								float gaussianPdf(in float x, in float sigma) {					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;				}				void main() {
					vec2 invSize = 1.0 / texSize;					float fSigma = float(SIGMA);					float weightSum = gaussianPdf(0.0, fSigma);					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {						float x = float(i);						float w = gaussianPdf(x, fSigma);						vec2 uvOffset = direction * invSize * x;						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;						diffuseSum += (sample1 + sample2) * w;						weightSum += 2.0 * w;					}					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})},getCompositeMaterial:function(n){return new ke({defines:{NUM_MIPS:n},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:"varying vec2 vUv;				uniform sampler2D blurTexture1;				uniform sampler2D blurTexture2;				uniform sampler2D blurTexture3;				uniform sampler2D blurTexture4;				uniform sampler2D blurTexture5;				uniform sampler2D dirtTexture;				uniform float bloomStrength;				uniform float bloomRadius;				uniform float bloomFactors[NUM_MIPS];				uniform vec3 bloomTintColors[NUM_MIPS];								float lerpBloomFactor(const in float factor) { 					float mirrorFactor = 1.2 - factor;					return mix(factor, mirrorFactor, bloomRadius);				}								void main() {					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + 													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + 													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + 													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + 													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );				}"})}});mn.BlurDirectionX=new k(1,0);mn.BlurDirectionY=new k(0,1);var _t=function(n,e){st.call(this),this.textureID=e!==void 0?e:"tDiffuse",n instanceof ke?(this.uniforms=n.uniforms,this.material=n):n&&(this.uniforms=Zn.clone(n.uniforms),this.material=new ke({defines:Object.assign({},n.defines),uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader})),this.fsQuad=new st.FullScreenQuad(this.material)};_t.prototype=Object.assign(Object.create(st.prototype),{constructor:_t,render:function(n,e,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this.fsQuad.material=this.material,this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(e),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),this.fsQuad.render(n))}});var sr=function(n,e){st.call(this),this.scene=n,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1};sr.prototype=Object.assign(Object.create(st.prototype),{constructor:sr,render:function(n,e,t){var i=n.getContext(),r=n.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);var s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),n.setRenderTarget(t),this.clear&&n.clear(),n.render(this.scene,this.camera),n.setRenderTarget(e),this.clear&&n.clear(),n.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}});var hs=function(){st.call(this),this.needsSwap=!1};hs.prototype=Object.create(st.prototype);Object.assign(hs.prototype,{render:function(n){n.state.buffers.stencil.setLocked(!1),n.state.buffers.stencil.setTest(!1)}});var Zo=function(n,e){if(this.renderer=n,e===void 0){var t={minFilter:je,magFilter:je,format:ft},i=n.getSize(new k);this._pixelRatio=n.getPixelRatio(),this._width=i.width,this._height=i.height,e=new yt(this._width*this._pixelRatio,this._height*this._pixelRatio,t),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],pi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),_t===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new _t(pi),this.clock=new Vo};Object.assign(Zo.prototype,{swapBuffers:function(){var n=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=n},addPass:function(n){this.passes.push(n),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(n,e){this.passes.splice(e,0,n),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},removePass:function(n){let e=this.passes.indexOf(n);e!==-1&&this.passes.splice(e,1)},isLastEnabledPass:function(n){for(var e=n+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0},render:function(n){n===void 0&&(n=this.clock.getDelta());var e=this.renderer.getRenderTarget(),t=!1,i,r,s=this.passes.length;for(r=0;r<s;r++)if(i=this.passes[r],i.enabled!==!1){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),i.render(this.renderer,this.writeBuffer,this.readBuffer,n,t),i.needsSwap){if(t){var o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,n),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sr!==void 0&&(i instanceof sr?t=!0:i instanceof hs&&(t=!1))}this.renderer.setRenderTarget(e)},reset:function(n){if(n===void 0){var e=this.renderer.getSize(new k);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,n=this.renderTarget1.clone(),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=n,this.renderTarget2=n.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(n,e){this._width=n,this._height=e;var t=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(t,i),this.renderTarget2.setSize(t,i);for(var r=0;r<this.passes.length;r++)this.passes[r].setSize(t,i)},setPixelRatio:function(n){this._pixelRatio=n,this.setSize(this._width,this._height)}});var Zl=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(Zl.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});Zl.FullScreenQuad=function(){var n=new Ln(-1,1,1,-1,0,1),e=new Re;e.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),e.setAttribute("uv",new Ae([0,2,0,0,2,0],2));var t=function(i){this._mesh=new Ie(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,n)}}),t}();var or=function(n,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=n,this.domElement=e,this.enabled=!0,this.target=new _,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gt.ROTATE,MIDDLE:Gt.DOLLY,RIGHT:Gt.PAN},this.touches={ONE:kt.ROTATE,TWO:kt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.listenToKeyEvents=function(T){T.addEventListener("keydown",De),this._domElementKeyEvents=T},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(i),t.update(),a=o.NONE},this.update=function(){var T=new _,z=new et().setFromUnitVectors(n.up,new _(0,1,0)),ae=z.clone().invert(),ye=new _,Ue=new et,gt=2*Math.PI;return function(){var Tt=t.object.position;T.copy(Tt).sub(t.target),T.applyQuaternion(z),l.setFromVector3(T),t.autoRotate&&a===o.NONE&&I(D()),t.enableDamping?(l.theta+=h.theta*t.dampingFactor,l.phi+=h.phi*t.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);var Je=t.minAzimuthAngle,Ct=t.maxAzimuthAngle;return isFinite(Je)&&isFinite(Ct)&&(Je<-Math.PI?Je+=gt:Je>Math.PI&&(Je-=gt),Ct<-Math.PI?Ct+=gt:Ct>Math.PI&&(Ct-=gt),Je<=Ct?l.theta=Math.max(Je,Math.min(Ct,l.theta)):l.theta=l.theta>(Je+Ct)/2?Math.max(Je,l.theta):Math.min(Ct,l.theta)),l.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=u,l.radius=Math.max(t.minDistance,Math.min(t.maxDistance,l.radius)),t.enableDamping===!0?t.target.addScaledVector(d,t.dampingFactor):t.target.add(d),T.setFromSpherical(l),T.applyQuaternion(ae),Tt.copy(t.target).add(T),t.object.lookAt(t.target),t.enableDamping===!0?(h.theta*=1-t.dampingFactor,h.phi*=1-t.dampingFactor,d.multiplyScalar(1-t.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),u=1,f||ye.distanceToSquared(t.object.position)>c||8*(1-Ue.dot(t.object.quaternion))>c?(t.dispatchEvent(i),ye.copy(t.object.position),Ue.copy(t.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",ee),t.domElement.removeEventListener("pointerdown",ie),t.domElement.removeEventListener("wheel",de),t.domElement.removeEventListener("touchstart",ve),t.domElement.removeEventListener("touchend",Q),t.domElement.removeEventListener("touchmove",L),t.domElement.ownerDocument.removeEventListener("pointermove",S),t.domElement.ownerDocument.removeEventListener("pointerup",b),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",De)};var t=this,i={type:"change"},r={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,l=new nr,h=new nr,u=1,d=new _,f=!1,m=new k,v=new k,y=new k,g=new k,p=new k,E=new k,M=new k,A=new k,x=new k;function D(){return 2*Math.PI/60/60*t.autoRotateSpeed}function N(){return Math.pow(.95,t.zoomSpeed)}function I(T){h.theta-=T}function U(T){h.phi-=T}var C=function(){var T=new _;return function(ae,ye){T.setFromMatrixColumn(ye,0),T.multiplyScalar(-ae),d.add(T)}}(),G=function(){var T=new _;return function(ae,ye){t.screenSpacePanning===!0?T.setFromMatrixColumn(ye,1):(T.setFromMatrixColumn(ye,0),T.crossVectors(t.object.up,T)),T.multiplyScalar(ae),d.add(T)}}(),P=function(){var T=new _;return function(ae,ye){var Ue=t.domElement;if(t.object.isPerspectiveCamera){var gt=t.object.position;T.copy(gt).sub(t.target);var Ve=T.length();Ve*=Math.tan(t.object.fov/2*Math.PI/180),C(2*ae*Ve/Ue.clientHeight,t.object.matrix),G(2*ye*Ve/Ue.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(C(ae*(t.object.right-t.object.left)/t.object.zoom/Ue.clientWidth,t.object.matrix),G(ye*(t.object.top-t.object.bottom)/t.object.zoom/Ue.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function R(T){t.object.isPerspectiveCamera?u/=T:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*T)),t.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function B(T){t.object.isPerspectiveCamera?u*=T:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/T)),t.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function F(T){m.set(T.clientX,T.clientY)}function X(T){M.set(T.clientX,T.clientY)}function $(T){g.set(T.clientX,T.clientY)}function Z(T){v.set(T.clientX,T.clientY),y.subVectors(v,m).multiplyScalar(t.rotateSpeed);var z=t.domElement;I(2*Math.PI*y.x/z.clientHeight),U(2*Math.PI*y.y/z.clientHeight),m.copy(v),t.update()}function oe(T){A.set(T.clientX,T.clientY),x.subVectors(A,M),x.y>0?R(N()):x.y<0&&B(N()),M.copy(A),t.update()}function ce(T){p.set(T.clientX,T.clientY),E.subVectors(p,g).multiplyScalar(t.panSpeed),P(E.x,E.y),g.copy(p),t.update()}function ge(){}function xe(T){T.deltaY<0?B(N()):T.deltaY>0&&R(N()),t.update()}function V(T){var z=!1;switch(T.code){case t.keys.UP:P(0,t.keyPanSpeed),z=!0;break;case t.keys.BOTTOM:P(0,-t.keyPanSpeed),z=!0;break;case t.keys.LEFT:P(t.keyPanSpeed,0),z=!0;break;case t.keys.RIGHT:P(-t.keyPanSpeed,0),z=!0;break}z&&(T.preventDefault(),t.update())}function Fe(T){if(T.touches.length==1)m.set(T.touches[0].pageX,T.touches[0].pageY);else{var z=.5*(T.touches[0].pageX+T.touches[1].pageX),ae=.5*(T.touches[0].pageY+T.touches[1].pageY);m.set(z,ae)}}function Ce(T){if(T.touches.length==1)g.set(T.touches[0].pageX,T.touches[0].pageY);else{var z=.5*(T.touches[0].pageX+T.touches[1].pageX),ae=.5*(T.touches[0].pageY+T.touches[1].pageY);g.set(z,ae)}}function ne(T){var z=T.touches[0].pageX-T.touches[1].pageX,ae=T.touches[0].pageY-T.touches[1].pageY,ye=Math.sqrt(z*z+ae*ae);M.set(0,ye)}function le(T){t.enableZoom&&ne(T),t.enablePan&&Ce(T)}function we(T){t.enableZoom&&ne(T),t.enableRotate&&Fe(T)}function fe(T){if(T.touches.length==1)v.set(T.touches[0].pageX,T.touches[0].pageY);else{var z=.5*(T.touches[0].pageX+T.touches[1].pageX),ae=.5*(T.touches[0].pageY+T.touches[1].pageY);v.set(z,ae)}y.subVectors(v,m).multiplyScalar(t.rotateSpeed);var ye=t.domElement;I(2*Math.PI*y.x/ye.clientHeight),U(2*Math.PI*y.y/ye.clientHeight),m.copy(v)}function pe(T){if(T.touches.length==1)p.set(T.touches[0].pageX,T.touches[0].pageY);else{var z=.5*(T.touches[0].pageX+T.touches[1].pageX),ae=.5*(T.touches[0].pageY+T.touches[1].pageY);p.set(z,ae)}E.subVectors(p,g).multiplyScalar(t.panSpeed),P(E.x,E.y),g.copy(p)}function Y(T){var z=T.touches[0].pageX-T.touches[1].pageX,ae=T.touches[0].pageY-T.touches[1].pageY,ye=Math.sqrt(z*z+ae*ae);A.set(0,ye),x.set(0,Math.pow(A.y/M.y,t.zoomSpeed)),R(x.y),M.copy(A)}function J(T){t.enableZoom&&Y(T),t.enablePan&&pe(T)}function K(T){t.enableZoom&&Y(T),t.enableRotate&&fe(T)}function he(){}function ie(T){if(t.enabled!==!1)switch(T.pointerType){case"mouse":case"pen":q(T);break}}function S(T){if(t.enabled!==!1)switch(T.pointerType){case"mouse":case"pen":j(T);break}}function b(T){switch(T.pointerType){case"mouse":case"pen":se(T);break}}function q(T){T.preventDefault(),t.domElement.focus?t.domElement.focus():window.focus();var z;switch(T.button){case 0:z=t.mouseButtons.LEFT;break;case 1:z=t.mouseButtons.MIDDLE;break;case 2:z=t.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Gt.DOLLY:if(t.enableZoom===!1)return;X(T),a=o.DOLLY;break;case Gt.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(t.enablePan===!1)return;$(T),a=o.PAN}else{if(t.enableRotate===!1)return;F(T),a=o.ROTATE}break;case Gt.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(t.enableRotate===!1)return;F(T),a=o.ROTATE}else{if(t.enablePan===!1)return;$(T),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(t.domElement.ownerDocument.addEventListener("pointermove",S),t.domElement.ownerDocument.addEventListener("pointerup",b),t.dispatchEvent(r))}function j(T){if(t.enabled!==!1)switch(T.preventDefault(),a){case o.ROTATE:if(t.enableRotate===!1)return;Z(T);break;case o.DOLLY:if(t.enableZoom===!1)return;oe(T);break;case o.PAN:if(t.enablePan===!1)return;ce(T);break}}function se(T){t.domElement.ownerDocument.removeEventListener("pointermove",S),t.domElement.ownerDocument.removeEventListener("pointerup",b),t.enabled!==!1&&(ge(T),t.dispatchEvent(s),a=o.NONE)}function de(T){t.enabled===!1||t.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(T.preventDefault(),t.dispatchEvent(r),xe(T),t.dispatchEvent(s))}function De(T){t.enabled===!1||t.enablePan===!1||V(T)}function ve(T){if(t.enabled!==!1){switch(T.preventDefault(),T.touches.length){case 1:switch(t.touches.ONE){case kt.ROTATE:if(t.enableRotate===!1)return;Fe(T),a=o.TOUCH_ROTATE;break;case kt.PAN:if(t.enablePan===!1)return;Ce(T),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(t.touches.TWO){case kt.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;le(T),a=o.TOUCH_DOLLY_PAN;break;case kt.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;we(T),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&t.dispatchEvent(r)}}function L(T){if(t.enabled!==!1)switch(T.preventDefault(),a){case o.TOUCH_ROTATE:if(t.enableRotate===!1)return;fe(T),t.update();break;case o.TOUCH_PAN:if(t.enablePan===!1)return;pe(T),t.update();break;case o.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;J(T),t.update();break;case o.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;K(T),t.update();break;default:a=o.NONE}}function Q(T){t.enabled!==!1&&(he(T),t.dispatchEvent(s),a=o.NONE)}function ee(T){t.enabled!==!1&&T.preventDefault()}t.domElement.addEventListener("contextmenu",ee),t.domElement.addEventListener("pointerdown",ie),t.domElement.addEventListener("wheel",de),t.domElement.addEventListener("touchstart",ve),t.domElement.addEventListener("touchend",Q),t.domElement.addEventListener("touchmove",L),this.update()};or.prototype=Object.create(Pt.prototype);or.prototype.constructor=or;var Jo=function(n,e){or.call(this,n,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=Gt.PAN,this.mouseButtons.RIGHT=Gt.ROTATE,this.touches.ONE=kt.PAN,this.touches.TWO=kt.DOLLY_ROTATE};Jo.prototype=Object.create(Pt.prototype);Jo.prototype.constructor=Jo;function Jl(n){let e=.3,t=n.rotation.y,i=()=>{let f=new _(0,0,1);f.applyQuaternion(n.quaternion),n.position.add(f.multiplyScalar(-e))},r=()=>{let f=new _(0,0,1);f.applyQuaternion(n.quaternion),n.position.add(f.multiplyScalar(e))},s=()=>{n.rotation.y+=.01},o=()=>{n.rotation.y-=.01},a=(f,m)=>{let v=f/window.innerWidth-.5;n.rotation.y-=v/10,console.log({pc:v,mousex:f,mousey:m})},c={};function l(){c.moveBackward&&r&&r(),c.moveForward&&i&&i(),c.rotateRight&&o&&o(),c.rotateLeft&&s&&s(),c.moveDown&&(n.position.y-=.1),c.moveUp&&(n.position.y+=.1)}window.addEventListener("keydown",h),window.addEventListener("keyup",d),window.addEventListener("mousemove",u);function h(f){switch(console.log(f),f.code){case"ArrowUp":case"KeyW":c.moveForward=!0;break;case"ArrowLeft":case"KeyA":c.rotateLeft=!0;break;case"ArrowDown":case"KeyS":c.moveBackward=!0;break;case"ArrowRight":case"KeyD":c.rotateRight=!0;break;case"KeyR":c.moveUp=!0;break;case"KeyF":c.moveDown=!0;break}}function u(f){a(f.clientX,f.clientY)}function d(f){switch(f.code){case"ArrowUp":case"KeyW":c.moveForward=!1;break;case"ArrowLeft":case"KeyA":c.rotateLeft=!1;break;case"ArrowDown":case"KeyS":c.moveBackward=!1;break;case"ArrowRight":case"KeyD":c.rotateRight=!1;break;case"KeyR":c.moveUp=!1;break;case"KeyF":c.moveDown=!1;break}}return{update:()=>{l()}}}var Ql=function(){var n=new Xe,e=new _;function t(i){var r=i.geometry;if(!r.isBufferGeometry||r.attributes.position.itemSize!==3)throw new Error("THREE.MeshSurfaceSampler: Requires BufferGeometry triangle mesh.");r.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),r=r.toNonIndexed()),this.geometry=r,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}return t.prototype={constructor:t,setWeightAttribute:function(i){return this.weightAttribute=i?this.geometry.getAttribute(i):null,this},build:function(){for(var i=this.positionAttribute,r=this.weightAttribute,s=new Float32Array(i.count/3),o=0;o<i.count;o+=3){var a=1;r&&(a=r.getX(o)+r.getX(o+1)+r.getX(o+2)),n.a.fromBufferAttribute(i,o),n.b.fromBufferAttribute(i,o+1),n.c.fromBufferAttribute(i,o+2),a*=n.getArea(),s[o/3]=a}this.distribution=new Float32Array(i.count/3);for(var c=0,o=0;o<s.length;o++)c+=s[o],this.distribution[o]=c;return this},setRandomGenerator:function(i){return this.randomFunction=i,this},sample:function(i,r,s){var o=this.distribution[this.distribution.length-1],a=this.binarySearch(this.randomFunction()*o);return this.sampleFace(a,i,r,s)},binarySearch:function(i){for(var r=this.distribution,s=0,o=r.length-1,a=-1;s<=o;){var c=Math.ceil((s+o)/2);if(c===0||r[c-1]<=i&&r[c]>i){a=c;break}else i<r[c]?o=c-1:s=c+1}return a},sampleFace:function(i,r,s,o){var a=this.randomFunction(),c=this.randomFunction();return a+c>1&&(a=1-a,c=1-c),n.a.fromBufferAttribute(this.positionAttribute,i*3),n.b.fromBufferAttribute(this.positionAttribute,i*3+1),n.c.fromBufferAttribute(this.positionAttribute,i*3+2),r.set(0,0,0).addScaledVector(n.a,a).addScaledVector(n.b,c).addScaledVector(n.c,1-(a+c)),s!==void 0&&n.getNormal(s),o!==void 0&&this.colorAttribute!==void 0&&(n.a.fromBufferAttribute(this.colorAttribute,i*3),n.b.fromBufferAttribute(this.colorAttribute,i*3+1),n.c.fromBufferAttribute(this.colorAttribute,i*3+2),e.set(0,0,0).addScaledVector(n.a,a).addScaledVector(n.b,c).addScaledVector(n.c,1-(a+c)),o.r=e.x,o.g=e.y,o.b=e.z),this}},t}();function Kl(n,e){var t=.002,i=.8;let r={x:0,y:0,z:0,cx:0,cy:0,cz:0,vx:0,vy:0,vz:0},s=!1;function o(){var c=-t*(r.x-r.cx);r.vx=(r.vx+c)*i,c=-t*(r.y-r.cy),r.vy=(r.vy+c)*i,c=-t*(r.z-r.cz),r.vz=(r.vz+c)*i,r.x+=r.vx,r.y+=r.vy,r.z+=r.vz,s=Math.abs(r.x-r.cx)>.01&&Math.abs(r.y-r.cy)>.01&&Math.abs(r.z-r.cz)>.01,s?(n(r.x,r.y,r.z),requestAnimationFrame(o)):(n(r.x,r.y,r.x,r.z),e&&e(),console.log("end"))}function a(c,l,h){r.cx=c,r.cy=l,r.cz=h,s||(s=!0,o())}return{goTo:a}}var $l={uniforms:{tDiffuse:{value:null},time:{value:0},distortionScale:{value:.05},waveSpeed:{value:.5},waveFrequency:{value:15}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float time;
      uniform float distortionScale;
      uniform float waveSpeed;
      uniform float waveFrequency;
      
      varying vec2 vUv;
      
      // 2D Rotation function
      mat2 rotate2d(float angle) {
        return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      }
      
      // Noise function for organic distortion
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        // Base displacement
        vec2 uv = vUv;
        
        // Create multi-directional waves
        vec2 wave1 = vec2(
          sin(uv.y * waveFrequency + time * waveSpeed),
          cos(uv.x * waveFrequency * 0.8 + time * waveSpeed * 1.2)
        );
        
        vec2 wave2 = vec2(
          cos(uv.y * waveFrequency * 0.7 + time * waveSpeed * 0.7),
          sin(uv.x * waveFrequency * 1.3 + time * waveSpeed * 1.5)
        );
        
        // Combine waves with noise
        float noiseFactor = noise(uv + time * 0.1) * 0.3;
        vec2 distortion = (wave1 + wave2 * 0.5) * distortionScale * noiseFactor;
        
        // Apply chromatic aberration (RGB shift)
        vec2 offset = distortion * 1.5;
        float r = texture2D(tDiffuse, uv + offset * 0.5).r;
        float g = texture2D(tDiffuse, uv + offset * 0.3).g;
        float b = texture2D(tDiffuse, uv + offset * 0.1).b;
        
        // Final color with blue tint
        vec3 color = vec3(r, g, b);
        color = mix(color, vec3(0.3, 0.5, 0.8), 0.1); // Blue tint
        
        gl_FragColor = vec4(color, 1.0);
      }
    `};document.addEventListener("DOMContentLoaded",Yg);function Yg(){let n=!1,e=0,t={w:560,h:560},i={x:t.w/2+30,z:t.h/2+30,w:t.w+60,h:t.h+60},r=new Bi,s=new ct(75,window.innerWidth/window.innerHeight,.1,1e4),o=new He({antialias:!0,preserveDrawingBuffer:!0});o.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(o.domElement);let a=o.domElement;o.setClearColor(0,1),o.shadowMap.enabled=!0,o.toneMapping=ms,o.toneMappingExposure=.5,o.outputEncoding=wi,r.background=new ue(16768324),r.fog=new ti(16768324,.02);let c=new tr(16777215,1),l=new tr(16777215,.4),h=new is(16777215,1);c.position.set(5,2,0),l.position.set(-3.5,5,2),r.add(c),r.add(h);let u=Jl(s);window.addEventListener("click",$);let d=new ke({vertexShader,fragmentShader:contrastFragmentShader,uniforms:{tDiffuse:{value:null},contrast:{value:3}}}),f=new ke({vertexShader,fragmentShader:saturationFragmentShader,uniforms:{tDiffuse:{value:null},saturationAmount:{value:7}}}),m=new ke({vertexShader,fragmentShader:waveFragmentShader,uniforms:{tDiffuse:{value:null},time:{value:1},amplitude:{value:.03},frequency:{value:3}}}),v=new ke({vertexShader,fragmentShader:waveFragmentShader,uniforms:{tDiffuse:{value:null},time:{value:1},amplitude:{value:.1},frequency:{value:.5}}}),y=new ke({vertexShader,fragmentShader:grainFragmentShader,uniforms:{tDiffuse:{value:null},grainAmount:{value:.05}}}),g=new ke({vertexShader,fragmentShader:futuristicFragmentShader,uniforms:{tDiffuse:{value:null},time:{value:0},distortion:{value:0},scanlineIntensity:{value:.9},glowIntensity:{value:.7}}}),p=new _t({vertexShader,fragmentShader:customFragmentShader,uniforms:{tDiffuse:{value:null},displacementMap:{value:null},time:{value:0},amplitude:{value:.1},frequency:{value:.1},mousePosition:{value:new k(0,0)}}}),E=new _t(y,"tDiffuse"),M=new _t(g,"tDiffuse"),A=new _t(m,"tDiffuse"),x=new _t(v,"tDiffuse"),D=new _t(f,"tDiffuse"),N=new _t(d,"tDiffuse"),I=new us(r,s),U=new mn(new k(window.innerWidth,window.innerHeight),1.5,.4,.85);U.threshold=.7,U.strength=.4,U.radius=1;let C=new _t($l);C.renderToScreen=!0,C.uniforms.distortionScale.value=.4,C.uniforms.waveFrequency.value=25,C.uniforms.waveSpeed.value=.8;let G=new Zo(o);G.addPass(I),G.addPass(E),G.addPass(D),G.addPass(C),G.addPass(U);let P=Wl(t);P.receiveShadow=!0,r.add(P);for(var R=0;R<70;R++)Yl(r,t.w/2,t.h/2,P);ge(r,t),s.position.set(0,3,0);let B=document.getElementById("buttonContainer"),F=Xl({scene:r,mapSize:t,frontier:i}),X=new Ql(F);console.log({sampler:X});function $(ne){n=!0,window.removeEventListener("click",$)}function Z(){let ne=new _(0,0,1)}function oe(ne){requestAnimationFrame(oe),p.uniforms.time.value=ne*.001,m.uniforms.time.value=ne*.001,C.uniforms.time.value=ne*.001,n?u.update(ne*2e-4):s.rotation.y+=.005,G.render()}for(let ne=0;ne<2;ne++)Zg(r,P);oe(0);function ce(ne,le){let we=50,fe=new At,pe=new Sn(le.w*10,le.h*10,we,we),Y=rr("img/water.jpg"),J=new Ie(pe,Y);J.position.x=0*1,J.position.y=-6.2*1,J.position.z=0*1,J.rotation.x=-Math.PI/2,ne.add(J)}function ge(ne,le){let we=new dn(1,12,12),fe=new Et({color:16777215,opacity:1,transparent:!1});for(var pe=0;pe<le.w*.5;pe++){let Y=new Ie(we,fe);Y.position.set(Math.random()*le.w-le.w*.5,Math.random()*3,Math.random()*le.h-le.h*.5),ne.add(Y)}}function xe(ne){let le=new At,we=new _,fe=720;for(let pe=0;pe<fe;pe++){let Y=Math.acos(-1+2*pe/fe),J=Math.sqrt(fe*Math.PI)*Y,K=jl(2,Ce()),he=15;K.position.setFromSphericalCoords(he,Y,J),we.copy(K.position).multiplyScalar(2.5),K.lookAt(we),le.add(K)}return ne.add(le),le.position.y+=22,le}function V(ne){new zt().load("img/rune/111.png",we=>{let fe=new dn(400,60,40);fe.scale(-1,1,1);let pe=new Vt({map:we}),Y=new Ie(fe,pe);ne.add(Y)})}function Fe(ne,le){ne||(ne=ir()),console.log(ne);let fe=new zt().load(ne,pe=>{le(pe)})}function Ce(ne,le){ne||(ne=ir());let fe=new zt().load(ne);return new Et({color:16777215,map:fe,opacity:1,transparent:!1})}}function Zg(n,e,t){let i=new hi,r=new dn(.1,20,20),s=new Et({color:0}),o=new Ie(r,s);o.position.x=0,o.position.y=0,o.position.z=0,o.castShadow=!0,n.add(o);let a=Kl(c,l);a.goTo(Math.random()*50-25,Math.random()*5+5,Math.random()*50-25);function c(h,u,d){console.log({x:h,y:u,z:d}),o.position.x=h,o.position.y=u,o.position.z=d,i.set(o.position,new _(0,-1,0));let f=i.intersectObject(e);if(f.length>0){let m=f[0].point;o.position.y=m.y+.05;let v={x:Math.atan2(f[0].face.normal.z,f[0].face.normal.y),y:Math.atan2(f[0].face.normal.x,f[0].face.normal.z),z:Math.atan2(f[0].face.normal.y,f[0].face.normal.x)};o.rotation.x=v.x,o.rotation.y=v.y,o.rotation.z=v.z}else o.position.y=u;o.position.x=h,o.position.z=d}function l(){a.goTo(Math.random()*50-25,Math.random()*25+5,Math.random()*50-25)}}})();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
