import React, {useState} from 'react';
import "../css/sms.css"
import {HeaderComp, SidebarComp} from "../components";
import {
    Checkbox, FilledInput,
    FormControl,
    FormControlLabel,
    Input, InputAdornment,
    MenuItem,
    OutlinedInput, Radio,
    Select,
    TextareaAutosize
} from "@mui/material";
import {pink} from "@mui/material/colors";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const inputWidthStyle = {
    minWidth: 'calc(65vw - 350px - 30px)',
    maxWidth: 'calc(65vw - 350px - 30px)'
}
const inputWidth = {
    minWidth: 'calc(65vw - 350px - 30px)',
    maxWidth: 'calc(65vw - 350px - 30px)',
    borderWidth: 1,
    borderColor: "gray"
}
const inputStyle = {
    minWidth: 'calc(65vw - 350px - 30px)',
    maxWidth: 'calc(65vw - 350px - 30px)',
    minHeight: '15vh',
    maxHeight: '15vh',
    padding: '5px',
    borderWidth: 1,
    borderColor: "gray"
}

const phones = [
    'Iphone 10',
    'Iphone 11',
    'Iphone 12',
    'Iphone 13',
    'Iphone 14',
];

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

function SmsSchedullerPage(props) {
    const [phonesName, setPhonesName] = useState([]);
    const handleChange = (event) => {
        const {target: {value}} = event;
        setPhonesName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className="flex flex-row">
            <SidebarComp/>
            <div className='wrapper-components flex flex-col'>
                <div className='wrapper-content shadow-2xl'>
                    <HeaderComp/>
                    <div className="my-5">
                        <h1 className="text-black font-bold text-3xl">SMS Schedhuller</h1>
                        <div className="mt-3">
                            <p className="font-semibold text-black not-italic">Broadcast Name</p>
                            <Input
                                style={inputWidth}
                                className="px-4 py-3"
                                type="text"
                                placeholder="name of your broadcast"
                                disableUnderline={true}
                                fullWidth={true}
                            />
                        </div>

                        <div className="mt-3">
                            <p className="font-semibold text-black not-italic">Phonebook</p>
                            <FormControl style={inputWidthStyle}>
                                <Select
                                    displayEmpty
                                    value={phonesName}
                                    onChange={handleChange}
                                    input={<OutlinedInput/>}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <p>Select your phonebook</p>;
                                        }
                                        return selected;
                                    }}
                                    MenuProps={MenuProps}
                                >
                                    {phones.map((phone) => (
                                        <MenuItem
                                            key={phone}
                                            value={phone}
                                        >
                                            {phone}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="mt-3">
                            <p className="font-semibold text-black not-italic">Message</p>
                            <TextareaAutosize
                                style={inputStyle}
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Halo Bili, perkenalkan kami OCA (Omni Communication Assistant). Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut kunjungi web kami www.ocatelkom.co.id"
                            />
                        </div>
                    </div>
                    <span className="font-semibold text-xl">Schedule</span>
                    <p className="mb-6">When and how often do you want to broadcast this messages?</p>
                    <div className="flex items-center">
                        <span className="mr-32">Run On</span>
                        <div>
                            <span><Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />Mon</span>
                            <span><Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />Tue</span>
                            <span><Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />Wed</span>
                            <span className="ml-3">
                                <FormControlLabel
                                    control={<Checkbox/>}
                                    label="Thu"
                                /></span>
                            <span><FormControlLabel
                                    control={<Checkbox/>}
                                    label="Fri"
                                /></span>
                            <span><Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />Sat</span>
                            <span><Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />Sun</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-2 ml-48">
                        <FormControlLabel value="female" control={<Radio sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}/>} label="Once a day" />
                        <span className="mx-2">At</span>
                        <input className="border-2 border-gray-500 rounded" type="time"/>
                        <span className="ml-2">WIB</span>
                    </div>
                    <div className="flex items-center mt-2 ml-48">
                        <FormControlLabel value="female" control={<Radio sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}/>} label="At Intervals" />
                        <span className="mx-2">Every</span>
                        <input className="w-14 bg-gray-200 border-2 border-gray-500 pl-3 rounded" type="number" placeholder="6"/>
                        <input className="w-20 bg-gray-200 border-2 border-gray-500 pl-3 rounded mx-2" type="number" placeholder="hours"/>
                        <span className="mr-2">From</span>
                        <input className="bg-gray-200 border-2 border-gray-500 rounded" type="time"/>
                        <span className="ml-2">WIB</span>
                    </div>
                    <div className="flex items-center ml-96">
                        <button className="btnSend">Send messages</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmsSchedullerPage;