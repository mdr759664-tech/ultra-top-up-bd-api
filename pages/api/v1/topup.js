export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'POST only'});
  const body = req.body || {};
  const final = body.diamond || body.amount || body.package_id;
  const uid = body.uid;
  if(!uid || !final) return res.status(400).json({error:'uid and diamond required', sample:{uid:"123456789", diamond:100}});
  return res.status(200).json({
    status:'processing',
    order_id:'UTB-GARENA-'+Date.now(),
    uid: uid,
    diamond: final,
    universal: true,
    garena_official: true,
    message: `${final} Diamond - Garena Robot delivering to ${uid}`,
    estimated: '30-60s'
  });
}
