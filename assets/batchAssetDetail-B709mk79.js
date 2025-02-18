import{r as n,j as e,aD as Y,ai as E,a6 as $,d as G,B as D,aF as T,ao as L,bg as O,ae as F,c as K,an as z,ac as M,ad as _,al as P,ak as H}from"./vendor-WQejLG7Y.js";import{d as J,B as X}from"./batchStatus-CBLox09F.js";import{g as q,a as R}from"./asset-psWvgQPY.js";import{n as V,u as Q}from"./index-BUY2Cjej.js";import{p as Z}from"./pool.service-DXigxJcB.js";import{a as C,n as ee}from"./app-q0ws3Yx0.js";import{c as te,u as U,a as se,P as ae}from"./useLendingValues-FIBZ4h3R.js";import{a as ne,A as g}from"./assetStatus-D1v3GkIP.js";import{b as re}from"./bank.service-B_Z2xVIm.js";import{d as le}from"./debt-order.service-d2JwBDtB.js";import{u as oe,D as de}from"./drawdown-Bpn74TcE.js";import"./AntdIcon-Bh4kV9XY.js";import"./index-BwXrazuH.js";import"./index-YDRpzjTi.js";import"./util.service-DGlW4vEA.js";import"./scorecard.service-xSgAmy6z.js";import"./SelectFromSource-BeAMiId5.js";import"./useAsync-Dl5FScg5.js";import"./useAsyncFn-DMoxp3xu.js";const ie=({assets:d,isAllowSelect:c,isLoading:f,setSelectedAssets:u})=>{d.sort((t,s)=>s.createdAt-t.createdAt).map(t=>({...t,key:`${t.type}-${t.id}`}));const[p,a]=n.useState([]),r=n.useCallback((t,s)=>{a(t),u(s)},[u]),x={selectedRowKeys:p,onChange:r,getCheckboxProps:t=>({disabled:![g.TO_BE_APPROVED].includes(t.status)})},j=n.useMemo(()=>{var t,s;return((s=(t=d[0])==null?void 0:t.currency)==null?void 0:s.shortCode)||"USDC"},[d]),h=[{dataIndex:"key",title:"ID",key:"key",width:"10%",render:(t,s)=>{let b="N/A";switch(s.assetType){case C.LENDING:{b=s.debtOrderContract.externalId;break}case C.INVOICE:{b=s.invoice.openItemId;break}}return e.jsx("div",{children:e.jsx("div",{className:"inline",children:b})})}},{dataIndex:"uploadDate",title:"Upload date",key:"uploadDate",width:"20%",render:(t,s)=>s.createdAt?E.unix((s==null?void 0:s.createdAt)/1e3).format("DD/MM/YYYY"):void 0},{dataIndex:"key",title:"Status",key:"key",width:"15%",render:(t,s)=>e.jsx("div",{children:e.jsx(ne,{type:q(s)})})},{title:`Current balance (${j})`,dataIndex:"amount",key:"amount",render:t=>V(t)},{dataIndex:"originationDate",title:"Origination date",key:"originationDate",width:"14%",render:(t,s)=>s.createdAt?E.unix((s==null?void 0:s.debtOrderContract.startedAt)/1e3).format("DD/MM/YYYY"):void 0},{dataIndex:"dueDate",title:"Due date",key:"dueDate",width:"15%",render:(t,s)=>s.createdAt?E.unix((s==null?void 0:s.debtOrderContract.debtOrderContractInfo.finalMaturityDate)/1e3).format("DD/MM/YYYY"):void 0}];return e.jsx(Y,{rowSelection:c?x:void 0,columns:h,dataSource:d||[],loading:f,scroll:{y:"80vh"},bodyStyle:{cursor:"pointer",overflowX:"auto",minHeight:800},pagination:!1,size:"middle",rowKey:t=>`${t.id}_${t.assetType}`,children:"Stay calm, data is loading."})};function ce({assets:d,callbackSuccess:c}){const[f,u]=n.useState(!1),[p,a]=n.useState(""),{notification:r}=$.useApp(),{address:x}=G();return n.useEffect(()=>{(async()=>{const{walletAddress:h}=await re.getLinkedWallet();a(h)})()},[]),{reject:n.useCallback(async()=>{u(!0);try{if((x==null?void 0:x.toLowerCase())!==p)return u(!1),r.error({message:`Current wallet address is not valid. Please connect to wallet ${p}`});(await le.bulkRejectLoanByApprover({data:d.map(t=>t.id)})).message==="success"&&c&&c()}catch(h){console.log(h)}u(!1)},[d,c,p]),rejectLoading:f}}function ue({assets:d,allAssets:c,totalAsset:f,isApproved:u,batchId:p,pool:a,reload:r}){var l,o;const{approve:x,loading:j}=te({poolData:a,assets:d,callbackSuccess:()=>{r&&r()}}),{reject:h,rejectLoading:t}=ce({assets:c,callbackSuccess:()=>{r&&r()}}),{setDrawDownVisible:s,setUpdateCollateralVisible:b}=U(),{userId:I}=Q(i=>i),N=n.useMemo(()=>!!d.map(m=>m.status).includes(g.TO_BE_APPROVED),[d]),v=n.useMemo(()=>!!c.map(m=>m.status).includes(g.FINANCED),[c]),S=I===((l=a==null?void 0:a.validatorMember)==null?void 0:l.id),w=u,k=I===((o=a==null?void 0:a.originatorMember)==null?void 0:o.id);return N&&S?e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"bg-[#25272614] hover:bg-[#25272614] shadow-none h-10 mr-3",disabled:T(d),onClick:()=>{L.confirm({title:"Confirmation",content:e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold",children:["Are you sure to reject all ",f," items of the batch?"]}),e.jsx("p",{children:"Rejected items cannot be minted into loan collateral for drawdown"})]}),closable:!0,maskClosable:!0,styles:{content:{borderRadius:24,backgroundColor:"#F0F0F0"}},okText:"Approve",icon:null,centered:!0,okButtonProps:{className:"bg-[#1ED760] hover:bg-[#1ED760] shadow-none h-10 text-black !px-4",style:{backgroundColor:"#1ED760"},type:"primary"},cancelButtonProps:{className:"bg-[#25272614] shadow-none h-10 w-20",type:"dashed"},cancelText:"Cancel",width:"30vw",style:{minWidth:500},onOk:()=>h()})},loading:t,children:"Reject"}),e.jsx(D,{className:"shadow-none h-10",type:"primary",disabled:T(d),onClick:()=>{L.confirm({title:"Confirmation",content:e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold",children:["Are you sure to approve ",d.length,"/",f," items of the batch?"]}),e.jsx("p",{children:"The unapproved items cannot be minted into loan collaterals for drawdown"})]}),closable:!0,maskClosable:!0,styles:{content:{borderRadius:24,backgroundColor:"#F0F0F0"}},okText:"Approve",icon:null,centered:!0,okButtonProps:{className:"bg-[#1ED760] hover:bg-[#1ED760] shadow-none h-10 text-black !px-4",style:{backgroundColor:"#1ED760"},type:"primary"},cancelButtonProps:{className:"bg-[#25272614] shadow-none h-10 w-20",type:"dashed"},cancelText:"Cancel",width:"30vw",style:{minWidth:500},onOk:()=>x(p)})},loading:j,children:"Approve selected item"})]}):w&&k?e.jsx(e.Fragment,{children:v?e.jsx(D,{className:"shadow-none h-10",type:"primary",disabled:!1,onClick:()=>{if(v)b(!0);else{O.success({message:"Comming soon"});return}},loading:j,children:"Update collateral"}):e.jsx(D,{className:"shadow-none h-10",type:"primary",disabled:!1,onClick:()=>{if(v){O.error({message:"This batch is already financed"});return}else s(!0)},loading:j,children:"Drawdown approved collaterals"})}):null}function me({isOpen:d,onClose:c,batchId:f}){var k;const{pool:u}=U(),[p,a]=n.useState([]),[r,x]=n.useState([]),[j,h]=n.useState(!1),t=[{dataIndex:"key",title:"ID",fixed:"left",key:"key",width:"20%",render:(l,o)=>{switch(o.assetType){case C.LENDING:return o.debtOrderContract.externalId;case C.INVOICE:return o.invoice.openItemId;default:return"N/A"}}},{title:"Updated balance",dataIndex:"updatedBalance",key:"updated_balance",render:(l,o,i)=>e.jsx("input",{className:"text-right border-solid border border-[#ABB0AC] focus:border-[#ABB0AC] focus-visible:outline-0 rounded-lg p-2",value:l,placeholder:"Input amount",onChange:m=>s(m,i)})},{title:`Current balance (${(k=u==null?void 0:u.currency)==null?void 0:k.shortCode})`,dataIndex:"amount",key:"amount",render:l=>V(l)}],s=(l,o)=>{let{value:i}=l.target;if(i=i.replace(/,/g,""),!isNaN(i)&&Number(i)>=0){const m=[...r];m[o].updatedBalance=i,x(m)}},b=n.useCallback(async()=>{h(!0);const l=await R.getAllAssets({status:[g.PARTIAL_REPAY,g.FINANCED],poolId:u.id,batchId:f});x(l.filter(o=>o.status===g.PARTIAL_REPAY||o.status===g.FINANCED).map(o=>({...o,updatedBalance:o.amount.toFixed(2)}))),h(!1)},[u.id]);n.useEffect(()=>{b()},[b]);const[I,N]=n.useState(!1),v={selectedRowKeys:p,onChange:l=>{a(l)},getCheckboxProps:()=>({disabled:!1})},S=async()=>{var l,o;try{N(!0);const i={data:r.filter(m=>p.includes(m.id)).map(m=>({id:m.id,outstandingAmount:parseFloat(m.updatedBalance)}))};return await R.updateCollateral(i),c(),N(!1),O.success({message:"Update collaterals successully!"})}catch(i){return N(!1),O.error({description:(o=(l=i==null?void 0:i.response)==null?void 0:l.data)==null?void 0:o.message,message:"Server error:"})}},w={header:{backgroundColor:"transparent"},content:{borderRadius:24}};return e.jsx(L,{width:"60vw",title:e.jsx("span",{className:"text-xl bg-tr",children:"Update Collaterals"}),open:d,onCancel:()=>{c()},style:{minWidth:500},footer:null,styles:w,children:!!u&&e.jsx("div",{children:e.jsxs("div",{className:"mt-8",children:[e.jsx(e.Fragment,{children:e.jsx(Y,{"data-testid":"drawdown-table",columns:t,dataSource:r||[],loading:j,scroll:{y:"calc(100vh - 360px)",x:1e3},className:"bg-[#2527260A]",bodyStyle:{cursor:"pointer",overflowX:"auto"},pagination:!1,size:"middle",rowKey:l=>l.id,rowSelection:v})}),e.jsx("div",{className:"my-2 flex justify-end mt-8",children:e.jsx(D,{className:"shadow-none !h-12 w-48","data-testid":"drawdown-button",type:"primary",shape:"round",size:"large",loading:I,onClick:async()=>{await S()},disabled:p.length===0,children:"Update collateral"})})]})})})}function Be(){var i,m;const{poolId:d,batchId:c}=F(),[f,u,p]=se(Z.getPoolDetail,{id:d}),a=n.useMemo(()=>f,[f]),[r,x]=n.useReducer((y,A)=>({...y,...A}),{assets:[],history:[],isLoading:!1}),j=F(),{calculateDrawdownAmount:h}=oe({poolId:j.poolId}),t=n.useCallback(async()=>{x({isLoading:!0});const y=await R.getAllAssets({poolId:d,batchId:c});x({assets:y,isLoading:!1})},[c,d]);n.useEffect(()=>{t()},[t]);const[s,b]=n.useState([]),I=n.useMemo(()=>{if(u||!a)return e.jsx(e.Fragment,{});const{assetType:y,noteTokenAsset:A}=a;return e.jsx("div",{style:{margin:0},color:y===C.LENDING?"green":y===C.INVOICE?"red":"blue",children:y===C.LENDING?"Loan":y===C.INVOICE?"Invoice":(A==null?void 0:A.type)===ee.SENIOR?"SOT":"JOT"})},[u,a]),N=n.useMemo(()=>!!r.assets.map(A=>A.status).includes(g.TO_BE_APPROVED),[r.assets,r.isLoading]),v=n.useMemo(()=>{const y=r.assets.length,A=r.assets.filter(B=>B.status===g.REJECT).length,W=r.assets.filter(B=>[g.TO_BE_FINANCED,g.FINANCED,g.PARTIAL_REPAY,g.REPAID].includes(B.status)).length;return{total:y,numOfReject:A,numOfApprove:W}},[r.assets]),S=K(),[w,k]=n.useState(!1),[l,o]=n.useState(!1);return u?e.jsx(z,{}):e.jsxs(ae.Provider,{value:{poolDrawDownVisible:w,pool:f,setDrawDownVisible:k,calculateDrawdownAmount:h,updateCollateralVisible:l,setUpdateCollateralVisible:o},children:[w&&e.jsx(de,{batchId:c,isOpen:w,onClose:()=>{k(!1),p(),t()}}),l&&e.jsx(me,{batchId:c,isOpen:l,onClose:()=>{o(!1),t()}}),e.jsx(M,{gutter:[24,0],children:e.jsxs(_,{xs:"24",xl:{span:20,offset:2},children:[e.jsxs("div",{className:"font-semibold bg-[#25272614] inline rounded-2xl px-4 py-2 cursor-pointer mb-4",onClick:()=>S("/portfolio/assets"),children:[e.jsx("span",{children:"←"})," ",e.jsx("span",{children:"Back to Collateral"})]}),e.jsxs(J,{style:{fontSize:24},children:["Collateral batch #",c]}),e.jsx(P,{}),e.jsxs("div",{className:"flex flex-row justify-center gap-4 flex-wrap",children:[e.jsxs("div",{className:"md:basis-0 shrink-0 grow bg-gray-50 border border-solid border-[#25272629] rounded-2xl relative pt-6",children:[e.jsx("div",{className:"w-1.5 h-8 bg-gradient-to-r from-green-500 to-blue-400 rounded-e-md absolute left-0"}),e.jsx("span",{className:"font-semibold text-lg ml-6",children:"Summary"}),e.jsxs("div",{className:"px-6 pt-0 pb-2",children:[e.jsx(P,{className:"my-4"}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"Collateral type"}),e.jsx("span",{className:"text-md font-bold",children:I})]}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"Uploaded date"}),e.jsx("div",{className:"text-md font-bold",children:E(a==null?void 0:a.updatedAt).format("DD/MM/YYYY HH:mm")})]}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"Originator"}),e.jsx("div",{className:"text-md font-bold",children:(i=a==null?void 0:a.originatorCompany)==null?void 0:i.companyLegalName})]}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"Pool"}),e.jsx("div",{className:"text-md font-bold",children:a==null?void 0:a.name})]}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"Validator"}),e.jsx("div",{className:"text-md font-bold",children:((m=a==null?void 0:a.validatorMember)==null?void 0:m.email)||"N/A"})]})]})]}),e.jsxs("div",{className:"md:basis-0 shrink-0 grow bg-gray-50 border border-solid border-[#25272629] rounded-2xl relative pt-6",children:[e.jsx("div",{className:"w-1.5 h-8 bg-gradient-to-r from-green-500 to-blue-400 rounded-e-md absolute left-0"}),e.jsx("span",{className:"font-semibold text-lg ml-6",children:"Status"}),e.jsxs("div",{className:"px-6 pt-0 pb-2",children:[e.jsx(P,{}),e.jsxs("div",{className:"flex justify-between my-2",children:[e.jsx("div",{className:"text-xs text-gray-500 items-center gap-3",children:"Status"}),e.jsx("div",{children:e.jsx(X,{isOpen:N,isApproved:v.numOfApprove>0})})]}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"No. of uploaded items"}),e.jsx("div",{className:"text-md font-bold",children:v.total})]}),e.jsxs("div",{className:"flex justify-between my-2 items-center gap-3",children:[e.jsx("div",{className:"text-xs text-gray-500",children:"No. of approved items"}),e.jsx("div",{className:"text-md font-bold",children:v.numOfApprove})]})]})]})]}),e.jsx(M,{gutter:[16,16],className:"mt-6",children:e.jsx(_,{xs:"24",children:e.jsx(H,{title:"Collateral list",className:"asset-list border-none",headStyle:{paddingLeft:0,paddingRight:0},bodyStyle:{paddingLeft:0,paddingRight:0},extra:e.jsx(ue,{pool:a,assets:s,allAssets:r.assets,totalAsset:r.assets.length,isApproved:!N&&v.numOfApprove>0,batchId:c,reload:()=>{p(),t(),b([])}}),children:e.jsx(ie,{isLoading:r.isLoading,assets:[...r.assets],isAllowSelect:N,setSelectedAssets:b})})})})]})})]})}export{Be as default};
