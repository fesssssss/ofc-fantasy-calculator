export function validate(cards){
if(cards.length<14||cards.length>17) return 'Card count must be 14..17';
const set=new Set(cards); if(set.size!==cards.length) return 'Duplicate cards';
let j=0; for(const c of cards) if(c>51) j++; if(j>2) return 'Too many jokers';
return null;
}