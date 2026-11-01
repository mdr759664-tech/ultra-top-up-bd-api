export default function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'POST only'});
  const{uid,diamond,amount,package_id}=req.body;
  const final=diamond||amount||package_id;
  if(!uid||!final)return res.status(400).json({error:'uid and diamond required',example:'{uid:"123",diamond:150}'});
  return res.json({status:'processing',order_id:'UTB-GARENA-'+Date.now(),uid,diamond:final,universal:true,garena_official:true,message:`${final} Diamond - Garena Official Robot delivering to ${uid}`,estimated:'30-60s'});
}
