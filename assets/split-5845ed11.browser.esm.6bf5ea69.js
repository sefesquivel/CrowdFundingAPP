import{C as m,_ as s,a as d,T as o,u as n,A as W,c as g,ax as v,d as C,e as f,k as y,G as b,i as R,m as A,B as w,N as P,af as k,J as S}from"./index.92bc79b7.js";class u{get chainId(){return this._chainId}constructor(a,t,e){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new m(a,t,c,r);s(this,"contractWrapper",void 0),s(this,"storage",void 0),s(this,"abi",void 0),s(this,"metadata",void 0),s(this,"app",void 0),s(this,"encoder",void 0),s(this,"estimator",void 0),s(this,"events",void 0),s(this,"roles",void 0),s(this,"interceptor",void 0),s(this,"_chainId",void 0),s(this,"withdraw",d(async i=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await n(i)]}))),s(this,"withdrawToken",d(async(i,l)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await n(l),await n(i)]}))),s(this,"distribute",d(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]}))),s(this,"distributeToken",d(async i=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await n(i)]}))),this._chainId=p,this.abi=W.parse(c||[]),this.contractWrapper=h,this.storage=e,this.metadata=new g(this.contractWrapper,v,this.storage),this.app=new C(this.contractWrapper,this.metadata,this.storage),this.roles=new f(this.contractWrapper,u.contractRoles),this.encoder=new y(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new R(this.contractWrapper),this.interceptor=new A(this.contractWrapper)}onNetworkUpdated(a){this.contractWrapper.updateSignerOrProvider(a)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){const a=[];let t=w.from(0);const e=await this.contractWrapper.readContract.payeeCount();for(;t.lt(e);)try{const r=await this.contractWrapper.readContract.payee(t);a.push(await this.getRecipientSplitPercentage(r)),t=t.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return a}async balanceOfAllRecipients(){const a=await this.getAllRecipients(),t={};for(const e of a)t[e.address]=await this.balanceOf(e.address);return t}async balanceOfTokenAllRecipients(a){const t=await n(a),e=await this.getAllRecipients(),r={};for(const c of e)r[c.address]=await this.balanceOfToken(c.address,t);return r}async balanceOf(a){const t=await n(a),e=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),r=await this.contractWrapper.readContract["totalReleased()"](),c=e.add(r);return this._pendingPayment(t,c,await this.contractWrapper.readContract["released(address)"](t))}async balanceOfToken(a,t){const e=await n(t),r=await n(a),p=await new P(e,k,this.contractWrapper.getProvider()).balanceOf(this.getAddress()),h=await this.contractWrapper.readContract["totalReleased(address)"](e),i=p.add(h),l=await this._pendingPayment(r,i,await this.contractWrapper.readContract["released(address,address)"](e,r));return await S(this.contractWrapper.getProvider(),e,l)}async getRecipientSplitPercentage(a){const t=await n(a),[e,r]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(a)]);return{address:t,splitPercentage:r.mul(w.from(1e7)).div(e).toNumber()/1e5}}async _pendingPayment(a,t,e){return t.mul(await this.contractWrapper.readContract.shares(await n(a))).div(await this.contractWrapper.readContract.totalShares()).sub(e)}async prepare(a,t,e){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:t,overrides:e})}async call(a,t,e){return this.contractWrapper.call(a,t,e)}}s(u,"contractRoles",["admin"]);export{u as Split};
