import React from 'react';
import {Avatar} from "@mui/material";
import {styled} from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';

function HeaderComp(props) {
    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        marginRight: theme.spacing(2),
        borderWidth: '2px',
        borderColor: '#BBC1C8',
        width: '100%',
        borderRadius: 5
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        color: '#BBC1C8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: '#000000',
        height: '45px',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '100%',
        },
    }));

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="w-1/2 h-auto">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Any help? "
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-end mr-3">
                        <p className="text-black font-bold not-italic">Hi, Adjie!</p>
                        <p className='text-sm text-gray-600 not-italic'>Adjie_g4ant3ng@banget.com</p>
                    </div>
                    <Avatar sx={{width: 50, height: 50}}/>
                </div>
            </div>
        </>
    );
}

export default HeaderComp;