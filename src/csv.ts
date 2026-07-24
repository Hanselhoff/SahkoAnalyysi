export function parseCsv(text:string){
 const lines=text.split(/\r?\n/).filter(Boolean).slice(1);
 return lines.map(l=>{
  const [t,k,p]=l.split(';');
  return {time:t,kwh:Number(k.replace(',','.').replace(/"/g,'')),
          price:Number(p.replace(',','.').replace(/"/g,''))};
 });
}
