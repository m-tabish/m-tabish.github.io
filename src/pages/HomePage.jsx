import {SocialLink,Navbar,links} from "../Components/exportComp"
import { github, linkedIn, peerlist, twitter } from "../imagesExport";

function HomePage() {

    return (
        <>
            <div className="w-screen h-screen bg-custom bg-cover bg-center bg-fixed bg-no-repeat  justify-center items-center flex flex-col">


                {/* main container */}
                <div className=' w-full h-full flex flex-col gap-5 items-center'>

                    {/* Navbar */}
                    <Navbar />

                    {/* profile image*/}
                    <div className={` min-w-40 min-h-40 bg-profile bg-cover bg-no-repeat rounded-full bg-center`} />

                    {/* text */}
                    <div className="text-3xl p-2 text-center flex flex-col gap-4">
                        <div className='font-light mt-12'> Hello,</div>
                        <div className='font-light'> I am <span className='text-accent font-bold '>Mohd Tabish Khan</span>
                        </div>
                        <div className=' font-light sm:text-3xl text-2xl sm:m-0'> In pursuit to become a <br /><span className='font-bold    '>web developer</span> and a <span className='font-bold  '>designer.</span></div>
                    </div>


                    {/* links */}
                    <div className="text-xl mt-36 sm:mt-10 font-light tracking-wide"> Socials here:- </div>
                    <div className='flex gap-6'>
                        <SocialLink height={16} width={16} social_name={peerlist} link={links[0]} />
                        <SocialLink height={16} width={16} social_name={github} link={links[1]} />
                        <SocialLink height={16} width={16} social_name={twitter} link={links[2]} />
                        <SocialLink height={16} width={16} social_name={linkedIn} link={links[3]} />
                    </div>
                    {/* <p className="lg:text-2xl text-xl items-center">Note: For UI designs kindly checkout this folder in the github repo:- <a href="https://github.com/m-tabish/portfolio/tree/main/src/design" target='_blank' className="text-blue-400 text-2xl underline items-center ">Click Here</a></p> */}
                </div>
            </div>
        </>
    )
}

export default HomePage
