export const JOKER1=52,JOKER2=53;
export const RANK=new Uint8Array(54);
export const SUIT=new Uint8Array(54);
export const TEXT=[];
let i=0;
const suits=['S','H','D','C'];
for(let s=0;s<4;s++)for(let r=2;r<=14;r++){RANK[i]=r;SUIT[i]=s;TEXT[i]='23456789TJQKA'[r-2]+suits[s];i++;}
TEXT[52]='J1';TEXT[53]='J2';