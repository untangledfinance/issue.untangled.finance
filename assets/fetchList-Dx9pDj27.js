import{r as a}from"./vendor-WQejLG7Y.js";const i=(s,...u)=>{const[n,r]=a.useState([]),[o,c]=a.useState(!0),e=a.useCallback(async(l=null)=>{try{c(!0);let t;l?t=await s(l):t=await s(...u),r(t)}catch{r([])}finally{c(!1)}},[]);return a.useEffect(()=>{e()},[e]),[n,o,e]};export{i as u};
