import React from "react";
import Leftbox from "./components/leftbox";
import Front from "./components/front"
// import Navi from "./components/navi"

const Main = () => {
    return (
        <div className="app">
            <div className="box">
                <Leftbox />
                <div className="rightbox">
                    <Front />

                </div>
            </div>
            
        </div>
    )
}

export default Main;