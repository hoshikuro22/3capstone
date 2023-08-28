

const Organization = () => {
    return (
      <div className="duration-500 w-screen h-screen mt-8">
          <div>
              <div className="border-2 border-black flex-col">
                
                  
                 <div className="font-bold text-center mx-5 my-5 border-2 border-black flex flex-col  ">
                  <div className="border-2 border-black my-5 mx-4 text-1xl sm:text-2xl hover:cursor-pointer overflow-auto ">-Selected Organization-</div>
                  <div className="border-2 border-black my-5 mx-4 text-1xl sm:text-2xl hover:cursor-pointer overflow-auto ">MM/DD/YY</div>
                  <div className="border-2 border-black my-5 mx-4 text-1xl sm:text-2xl hover:cursor-pointer overflow-auto ">Category</div>
                 </div>
                 <div className="font-bold text-center border-2 border-black my-10 mx-5 text-1xl sm:text-3xl overflow-auto ">
                  <p className="my-40">LIST OF SELECTED ORGANIZATION, DATE & CATEGORY</p></div>
                
           </div>
          </div>
         </div>
    )
  }
  
  export default Organization