import { BsMinecart } from "react-icons/bs";


function UpcomingPro(props){
    const {Uimg,Uname,Upara} = props

    return(
        <>
        <div className="px-6 py-5 border-4 rounded-lg shadow-md mt-5 mb-5 ">
            <div className="" >
                <img className="w-32" src={Uimg} alt="" />

            </div>
            <div className="items-center">
                <h2 className="text-xl font-mono font-bold">{Uname}</h2>
                <p className="font-bold text-lg">{Upara}</p>
                <div className="text-center">
                    <button className="bg-green-500 py-2 w-full text-white rounded-lg text-lg">Add to Cart
                    </button>
                    <div className="ps-[50px] text-green-500">
                    <BsMinecart/>
                    </div>

                </div>

            </div>

        </div>


        </>
    )
}
export default UpcomingPro