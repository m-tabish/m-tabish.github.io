import { Link } from "react-router-dom"
const soon = () => {
    return (
        <>
            <div className="w-screen h-screen bg-custom bg-cover bg-center bg-fixed bg-no-repeat  justify-center items-center flex flex-col lg:text-4xl  text-3xl gap-6">
                This page is still in the making.
                <span>Kindly Come back later </span>
                <Link to="/" > <button className=" h-12 text-2xl flex justify-center items-center ">Return Home</button></Link>
            </div >
        </>
    )
}

export default soon
