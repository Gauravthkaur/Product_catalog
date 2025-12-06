interface SearchBarProps {
  value: string;
  onChange: (next: string) => void;
}
export function SearchBar({ value, onChange }: SearchBarProps) {
return (
    <input
      type="text"
      placeholder="search your product"
      value={value}
      onChange={(e)=> onChange(e.target.value)}
      className="w-full rounded-md border border-slate-300 bg-white px-10 py-2 mt-6 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
      />
    );
}
 export default SearchBar;