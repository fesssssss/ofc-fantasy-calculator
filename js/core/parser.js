import {TEXT} from './constants.js';
const map=new Map(TEXT.map((t,i)=>[t,i]));
export function parseCard(s){const v=map.get(s.trim().toUpperCase()); if(v===undefined) throw Error('Bad card '+s); return v;}
export function parseCards(s){return Uint8Array.from(s.trim().split(/\s+/).map(parseCard));}