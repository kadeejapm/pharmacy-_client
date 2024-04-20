import {Avatar} from "@mui/material"


function Header(){
    return(
        <div className="ms-[0px] bg-green-700 h-[70px] flex justify-between">
            <a className="ps-[23px] text-[25px] pt-[10px] text-white">Dashboard</a> 
            <span className="pt-[13px] ps-[75%] pe-[8px]">

                {" "}
                <Avatar src="/broken-image.jpg" />

            </span>

        </div>
    )
}
export default Header