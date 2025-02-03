export default function TabButton({children,onSelect}){
    return <button class="bg-slate-800 rounded-xl text-white px-6 py-2 shadow-2xl hover:bg-white hover:text-black" onClick={onSelect}>{children}</button>
}


