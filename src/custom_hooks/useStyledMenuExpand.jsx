import React from 'react';
import {alpha, styled} from "@mui/material/styles";
import Menu from "@mui/material/Menu";

function UseStyledMenuExpand() {
    const StyledMenuExpandLogout = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            backgroundColor: "#f43f5e",
            borderRadius: 6,
            minWidth: 140,
            color: "#ffffff",
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 4px',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                },
                '&:active': {
                    backgroundColor: "#ffffff"
                },
            },
        },
    }));
    return StyledMenuExpandLogout
}

export default UseStyledMenuExpand;