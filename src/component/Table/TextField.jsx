import * as React from "react";
import {Tuple} from "./Tuple";

export class TextField extends React.Component{
        constructor(){
            super();
        }
    render(){

        return (
            <Tuple type={this.props.type} data={this.props.data} isEditable={this.props.isEditable}
                   rowNumber={this.props.rowNumber}   colNumber={this.props.colNumber}
                   inputOnChange={this.props.inputOnChange}/>
        );
    }
}