import{r as s,d as c}from"./index-BUY2Cjej.js";const t={getCurrencies:"/api/v1/currencies"};class n{async getCurrencies(){const r=await(await s.getRequestInstance()).get(t.getCurrencies,{params:{chainId:c.chainId}}),{data:e}=r;return e==null?void 0:e.data}}const o=new n;export{o as c};
