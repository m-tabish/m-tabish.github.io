
const Btn = ({ BtnText }) => {
    return (

        <button className={`w-16 h-full flex items-center justify-center bg-transparent text-xl border-none ` } >
            <p>{BtnText}</p>
        </button>
    )
}

export default Btn
