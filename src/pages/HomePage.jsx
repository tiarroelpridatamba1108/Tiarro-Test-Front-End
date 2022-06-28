import React from 'react';
import "../css/home.css"
import {HeaderComp, TableComp} from "../components";
import {Divider} from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {useNavigate} from "react-router-dom";


function HomePage(props) {
    const navigate = useNavigate();
    const toSmsScheduller = () => {
        navigate("/sms-scheduller")
    }

    return (
        <div className="flex flex-row">
            <div className="sidebar bg-rose-500 flex justify-center items-center">
            </div>
            <div className='wrapper-components flex flex-col'>
                    <div className='wrapper-content shadow-2xl'>
                        <HeaderComp/>
                        <div className="border-gray-300 border-8 border-t-rose-600 rounded-md my-10 p-2">
                            <h1 className="text-black font-semibold text-2xl">Hello, Welcome to OCA!</h1>
                            <p className="not-italic text-black">Let’s start make some noise and make your campaign
                                great again! <span className="text-rose-500 cursor-pointer" onClick={toSmsScheduller}>click here</span> to spread
                                your messages.</p>
                        </div>
                        <p className="not-italic text-xl text-gray-600 font-semibold">Remaining Quota</p>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="box-item p-3">
                                <span className="text-sm">Call</span>
                                <span className="span-font" style={{color: '#22B9FF'}}>4840 seconds</span>
                            </div>
                            <div className="box-item p-3">
                                <span className="text-sm">SMS</span>
                                <span style={{color: '#FFB822'}}>1245 messages</span>
                            </div>
                            <div className="box-item p-3">
                                <span className="text-sm">Email</span>
                                <span className="span-font" style={{color: '#F554E9'}}>7710 mails</span>
                            </div>
                            <div className="box-item p-3">
                                <span className="text-sm">Whatsapp</span>
                                <span className="span-font" style={{color: '#1DC9B7'}}>330 messages</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-3'>
                            <p className='font-bold text-lg text-rose-500'>Recent Blast</p>
                            <div className="cursor-pointer">
                                <span><SortIcon/>Sort</span>
                                <span className="ml-3"><FilterAltIcon/>Filter</span>
                            </div>
                        </div>
                        <Divider/>
                        <div className='table-list ring-2 ring-gray-300 shadow-lg p-4 mt-5'>
                            <TableComp/>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default HomePage;