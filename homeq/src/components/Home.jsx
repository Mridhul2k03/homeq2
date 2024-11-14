
const Home = () => {
  return (
    <div className='container mx-auto'>
    <section className='flex justify-center items-center  gap-4 flex-wrap py-10'>
        <div className='sm:w-2/5 md:w-1/5 border-[1px] border-black p-4 py-8 w-[90%] flex justify-center transition-all duration-500 ease-out  hover:border-red-500 hover:bg-red-500 hover:text-white ' >
        <h3 className='text-md md:text-lg lg:text-xl '><i className="fa-solid fa-screwdriver-wrench pe-4"></i>Service 1</h3>
        </div>
        <div className='sm:w-2/5 md:w-1/5 border-[1px] border-black p-4 py-8 w-[90%] flex justify-center transition-all duration-500 ease-out  hover:border-red-500 hover:bg-red-500 hover:text-white ' >
        <h3 className='text-md md:text-lg lg:text-xl '><i className="fa-solid fa-screwdriver-wrench pe-4"></i>Service 2</h3>
        </div>
        <div className='sm:w-2/5 md:w-1/5 border-[1px] border-black p-4 py-8 w-[90%] flex justify-center transition-all duration-500 ease-out  hover:border-red-500 hover:bg-red-500 hover:text-white ' >
        <h3 className='text-md md:text-lg lg:text-xl '><i className="fa-solid fa-screwdriver-wrench pe-4"></i>Service 3</h3>
        </div>
        <div className='sm:w-2/5 md:w-1/5 border-[1px] border-black p-4 py-8 w-[90%] flex justify-center transition-all duration-500 ease-out  hover:border-red-500 hover:bg-red-500 hover:text-white ' >
        <h3 className='text-md md:text-lg lg:text-xl '><i className="fa-solid fa-screwdriver-wrench pe-4"></i>Service 4</h3>
        </div>
    </section>
      
    </div>
  )
}

export default Home
