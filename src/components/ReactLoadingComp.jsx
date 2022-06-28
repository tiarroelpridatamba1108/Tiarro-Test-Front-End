import React from 'react';
import ReactLoading from "react-loading";
import "../css/login..css"

function ReactLoadingComp(props) {
    return (
        <div className="loading">
            <div className="px-5 py-2 bg-white rounded-2xl drop-shadow-lg flex justify-center items-center">
                <ReactLoading
                    type={"bars"}
                    color={"#207FD7"}
                    width={70}
                    height={70}
                />
            </div>
        </div>
    );
}

export default ReactLoadingComp;