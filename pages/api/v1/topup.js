export default function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'POST only'});
 const{b,uid,diamond,amount,package_id}=req.body||{};
 const final=diamond||amount||package_id||b;
 if(!uid||!final)return res.status(400).json({error:'uid and diamond required'});
 return res.json({status:'processing',order_id:'UTB-'+Date.now(),uid,diamond:final,universal:true,message:`${final} Diamond delivering to ${uid}`});
}
