import Navbar from "../Components/Navbar"
const Projects = () => {
    return (
        <>
            <div className="w-screen h-screen bg-custom bg-cover bg-center bg-fixed bg-no-repeat  justify-center items-center flex flex-col">


                {/* main container */}
                <div className=' w-full h-full flex flex-col gap-5 items-center'>

                    {/* Navbar */}
                    <Navbar />

                    <div className="w-screen h-screen border-white border-2 grid  lg:grid-cols-2 gap-0 ">
                        <div className={`border-2  `}> </div>
                        <div className="border-2 ">hello </div>
                        <div className="border-2 ">hello </div>
                        <div className="border-2 ">hello </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Projects
