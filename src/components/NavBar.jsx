function Redirect1(){
  window.location.href="login.html";
}




export default function NavBar(){
  return(
    
       <div class="hidden fixed h-full w-68 bg-white opacity-40 backdrop-filter backdrop-blur-lg   md:flex flex-col items-start justify-start rounded-b-xl rounded-r-xl shadow-2xl z-10 " >
       <div class="flex flex-col r space-y-14 mt-8 ">
       <div class="flex  space-x-2 ml-4 h-10 w-44  py-2 rounded-lg px-2 ">
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28x" fill="currentColor" class="bi bi-prescription2" viewBox="0 0 16 16">
    <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
    < path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
    </svg>
       
       
 
       </div>
       
       <div class="flex  space-x-2 ml-4 h-10 w-56 hover:bg-cyan-200 py-2 rounded-lg px-2 group ">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" fill="currentColor " class="bi bi-house group-hover:scale-105" viewBox="0 0 16 16">
     <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
     </svg>
       <p class="font-serif text-xl text-slate-400 group-hover:underline group-hover:underline-offset-4 d group-hover:scale-105 ">Home</p>
       
 
       </div>
       
       <div class="flex  space-x-2 ml-4 h-10 w-56 hover:bg-cyan-200 py-2 rounded-lg px-2 group ">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" fill="currentColor" class="bi bi-capsule group-hover:scale-105" viewBox="0 0 16 16">
   <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
 </svg>
       <p class="font-serif text-xl text-slate-400 group-hover:underline group-hover:underline-offset-4 group-hover:scale-105">Drugs</p>
       
 
       </div>
       <div class="flex  space-x-2 ml-4 h-10 w-56 hover:bg-cyan-200 py-2 rounded-lg px-2 group ">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" fill="currentColor" class="bi bi-lungs group-hover:scale-105" viewBox="0 0 16 16">
   <path d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357z"/>
 </svg>
       <p class="font-serif text-xl text-slate-400 group-hover:underline group-hover:underline-offset-4 group-hover:scale-105">Diagnosis</p>
       
 
       </div>
       <div class="flex  space-x-2 ml-4 h-10 w-56 hover:bg-cyan-200 py-2 rounded-lg px-2 group">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" fill="currentColor" class="bi bi-alarm group-hover:scale-105" viewBox="0 0 16 16">
   <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
   <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
 </svg>
       <p class="font-serif text-xl text-slate-400 group-hover:underline group-hover:underline-offset-4 group-hover:scale-105">MedsTracker</p>
       
 
       </div>
        <div>
          <button class="bg-cyan-400 py-3 px-12 rounded-xl ml-10 text-md font-mono text-white shadow-2xl hover:bg-cyan-300 hover:text-bold hover:border-2 hover:border-slate-300 hover:text-black mt-30" onClick={Redirect1} >Sign In</button>
        </div>
       </div>
       


       
    </div>
    
     
        
     
   
   )
}