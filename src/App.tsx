import React,{useState} from 'react';
export function App(){
const [fixed,setFixed]=useState(9);
const [rows,setRows]=useState<any[]>([]);
function load(e:any){
const f=e.target.files?.[0]; if(!f)return;
const fr=new FileReader();
fr.onload=()=>{const t=String(fr.result);const lines=t.split(/\r?\n/).filter(Boolean);
const d=lines.slice(1).map(l=>{const p=l.split(/[;,]/);return {kwh:Number((p[1]||'0').replace(',','.')),price:Number((p[2]||'0').replace(',','.'))};});
setRows(d);};
fr.readAsText(f);}
const spot=rows.reduce((a,r)=>a+r.kwh*r.price/100,0);
const fix=rows.reduce((a,r)=>a+r.kwh*fixed/100,0);
return <div style={{fontFamily:'sans-serif',padding:20}}><h1>SähköAnalyysi</h1><input type='file' onChange={load}/><p>Vertailuhinta <input type='number' value={fixed} onChange={e=>setFixed(Number(e.target.value))}/> snt/kWh</p><p>Pörssi: {spot.toFixed(2)} €</p><p>Kiinteä: {fix.toFixed(2)} €</p><h2>Säästö {(fix-spot).toFixed(2)} €</h2></div>}