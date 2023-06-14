import{a4 as s,a5 as d,a6 as u,a7 as g,C as l,_ as t,A as f,c as m,a2 as W,d as E,e as v,k as C,G as w,i as A,l as I,m as F,T as R,a8 as n,a9 as _,aa as S,ab as T}from"./index.92bc79b7.js";class i{get directListings(){return s(this.detectDirectListings(),d)}get englishAuctions(){return s(this.detectEnglishAuctions(),u)}get offers(){return s(this.detectOffers(),g)}get chainId(){return this._chainId}constructor(e,r,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new l(e,r,c,o);t(this,"abi",void 0),t(this,"contractWrapper",void 0),t(this,"storage",void 0),t(this,"encoder",void 0),t(this,"events",void 0),t(this,"estimator",void 0),t(this,"platformFees",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"interceptor",void 0),t(this,"_chainId",void 0),this._chainId=p,this.abi=f.parse(c||[]),this.contractWrapper=h,this.storage=a,this.metadata=new m(this.contractWrapper,W,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,i.contractRoles),this.encoder=new C(this.contractWrapper),this.estimator=new w(this.contractWrapper),this.events=new A(this.contractWrapper),this.platformFees=new I(this.contractWrapper),this.interceptor=new F(this.contractWrapper)}onNetworkUpdated(e){this.contractWrapper.updateSignerOrProvider(e)}getAddress(){return this.contractWrapper.readContract.address}async prepare(e,r,a){return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:a})}async call(e,r,a){return this.contractWrapper.call(e,r,a)}detectDirectListings(){if(n(this.contractWrapper,"DirectListings"))return new _(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(n(this.contractWrapper,"EnglishAuctions"))return new S(this.contractWrapper,this.storage)}detectOffers(){if(n(this.contractWrapper,"Offers"))return new T(this.contractWrapper,this.storage)}}t(i,"contractRoles",["admin","lister","asset"]);export{i as MarketplaceV3};
