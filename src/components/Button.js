import React from "react";
import addNotification from "react-push-notification";

const ButtonP = () =>{
    const notificacion =() =>{
        addNotification({
            title: 'Tania',
            message: 'Primera motificasion ',
            duration: 5000,
            native: true,
        });
    }
    return(
        <div className="col-12">
            <button onClick={notificacion} type="button" className="btn btn-primary d-block mx-auto">Notificacion</button>
        </div>
    );
};

export default ButtonP;