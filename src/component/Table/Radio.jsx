import  React from "react";

    export function Radio(props){
        return (
            <div className="table-colum-width pull-left" style={{"padding-top":"10px"}}>
           <input type="checkbox" checked={props.data} />
            </div>
                );
    }
