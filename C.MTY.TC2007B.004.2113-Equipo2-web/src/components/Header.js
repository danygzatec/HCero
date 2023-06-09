import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>HCero</h1>
                <Typed
                    className="typed-text"
                    strings={["Hambre Cero", "Una Causa de Todos", "Juntos Podemos Más"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header