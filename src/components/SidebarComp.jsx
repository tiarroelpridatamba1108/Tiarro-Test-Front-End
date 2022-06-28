import React, {useState} from 'react';
import "../css/sidebarComp.css"
import {ocaLogo} from "../assets";
import HomeIcon from '@mui/icons-material/Home';
import SmsIcon from '@mui/icons-material/Sms';
import {useNavigate} from "react-router-dom";
import {IconButton, MenuItem} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import useStyledMenuExpand from "../custom_hooks/useStyledMenuExpand";

function SidebarComp(props) {
    const navigate = useNavigate()
    const StyledMenuExpand = useStyledMenuExpand()
    const [anchorElExpand, setAnchorElExpand] = useState(null);
    const openExpand = Boolean(anchorElExpand);
    const handleOpenExpand = (event) => {
        setAnchorElExpand(event.currentTarget);
    };
    const handleCloseExpand = () => {
        setAnchorElExpand(null);
    };

    return (
        <>
            <div className="sidebar bg-rose-500 p-12">
                <img src={ocaLogo} alt="oca-logo"/>
                <div className="flex ml-1 mt-56">
                    <p className="text-white not-italic cursor-pointer" onClick={() => navigate("/home")}><HomeIcon
                        sx={{color: "white", width: 30, height: 30}}/> Home</p>
                </div>
                <div className="flex -ml-48">
                    <IconButton onClick={handleOpenExpand}>
                    <p className="text-sm text-white not-italic cursor-pointer"><SmsIcon
                        sx={{color: "white", width: 28, height: 28}}/> SMS</p>
                        {openExpand ? <ExpandLess style={{color: "white", marginLeft: 20}}/> :
                            <ExpandMore style={{color: "white", marginLeft: 20}}/>}
                    </IconButton>
                </div>
            </div>

            <StyledMenuExpand
                anchorEl={anchorElExpand}
                open={openExpand}
                onClose={handleCloseExpand}>
                <MenuItem disableRipple>
                    <span>Broadcast</span>
                </MenuItem>
                <MenuItem disableRipple>
                    <span className="underline" onClick={() => navigate("/sms-scheduller")}>SMS Scheduller</span>
                </MenuItem>
            </StyledMenuExpand>
        </>
    );
}

export default SidebarComp;