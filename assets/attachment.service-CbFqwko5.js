import{r as n}from"./index-BUY2Cjej.js";import{h as i}from"./vendor-WQejLG7Y.js";const l={getProfileAttachedUrl:"/api/v1/profile/download",getFileAttachedUrl:"/api/v1/file/:uniqueKey/download",getProfileAttachedUrlByAdmin:"/api/v1/profile/:memberId/download",getProfileAttachedUrlByOtherMember:"/api/v1/profile/member/:memberId/download",getFileUploadUrl:"/api/v1/file/upload"};class d{async uploadSignature(t,e){return await i.create({baseURL:t,headers:{"Content-Type":"image/png;base64","x-ms-blob-type":"BlockBlob"}}).put(t,e)}async getProfileAttachedUrl(t,e){let a=null;try{const r=await n.getRequestInstance();let o;e?o=l.getProfileAttachedUrlByAdmin.replace(":memberId",e):o=l.getProfileAttachedUrl,a=(await r.get(`${o}/${t}`)).data}catch(r){console.log("GET PROFILE ATTACHED URL ERROR"),console.log(r)}return a}async upload(t,e){return await i.put(t,e,{headers:{"Content-Type":e.type,"x-ms-blob-type":"BlockBlob"}})}async getFileUploadUrl(t,e,a,r){const s=await(await n.getRequestInstance()).post(`${l.getFileUploadUrl}/${t}`,{file_name:e,file_size:a,file_type:r}),{data:c}=s;return c}}const m=new d;export{m as a};
