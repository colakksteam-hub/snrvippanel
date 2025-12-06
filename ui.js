export function fmtDate(ts){
  if(!ts) return "-";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("tr-TR");
}
export function badgeStatus(status){
  const s=(status||"").toLowerCase();
  if(s==="aktif") return `<span class="badge green">Aktif</span>`;
  if(s==="izinli") return `<span class="badge">İzinli</span>`;
  if(s==="serviste") return `<span class="badge red">Serviste</span>`;
  return `<span class="badge">${status||"-"}</span>`;
}
export function qsParam(name){
  return new URLSearchParams(location.search).get(name);
}