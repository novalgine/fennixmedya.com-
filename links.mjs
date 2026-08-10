import puppeteer from "puppeteer-core";
const B="http://localhost:3199";
const b=await puppeteer.launch({executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",headless:"new",args:["--no-sandbox"]});
const p=await b.newPage();
const seen=new Set(), ic=new Set();
for (const r of ["/","/hakkimizda","/hizmetler","/portfolyo","/blog"]) {
  await p.goto(B+r,{waitUntil:"networkidle2",timeout:60000});
  const hrefs=await p.evaluate(()=>[...document.querySelectorAll("a[href]")].map(a=>a.getAttribute("href")));
  hrefs.forEach(h=>{ if(h && h.startsWith("/") && !h.startsWith("//")) ic.add(h.split("#")[0]||"/"); });
}
console.log(`iç bağlantı sayısı: ${ic.size}`);
const kirik=[];
for (const h of [...ic]) {
  if(!h) continue;
  const resp=await p.goto(B+h,{waitUntil:"domcontentloaded",timeout:45000}).catch(()=>null);
  const kod=resp?resp.status():0;
  if(kod!==200) kirik.push(`${h} → ${kod}`);
}
console.log(kirik.length? "KIRIK:\n"+kirik.join("\n") : "✓ kırık iç bağlantı yok");
// mobil taşma
const taskan=[];
await p.setViewport({width:390,height:844,deviceScaleFactor:1});
for (const r of ["/","/hakkimizda","/hizmetler","/hizmetler/anahtar-teslim-studyo","/portfolyo","/blog"]) {
  await p.goto(B+r,{waitUntil:"networkidle2",timeout:60000});
  await p.evaluate(()=>new Promise(x=>{let y=0;const t=setInterval(()=>{window.scrollTo(0,y);y+=900;if(y>9000){clearInterval(t);x()}},30)}));
  const ok=await p.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1);
  if(!ok) taskan.push(r);
}
console.log(taskan.length? "MOBİLDE YATAY TAŞMA: "+taskan.join(", ") : "✓ mobilde yatay taşma yok");
await b.close();
