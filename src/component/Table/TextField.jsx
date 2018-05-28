import {Tuple} from "./Tuple";
import React from "react";
    export function TextField(props){
        return (
            <Tuple type={props.type} data={props.data} isEditable={props.isEditable}
                   rowNumber={props.rowNumber}   colNumber={props.colNumber}
                   inputOnChange={props.inputOnChange}/>
        );
}