export function fuzzyMatch(text: string, query: string): boolean {
const t = text.toLowerCase();
const q = query.toLowerCase().trim();
  if (!q) return true;
  if (t.includes(q)) return true;

  let i = 0; 
  let j = 0;

  while (i < t.length && j < q.length) {

       if (t[i] === q[j]) {
      j++; 
    }
    i++;   
  }
  return j === q.length;
}
