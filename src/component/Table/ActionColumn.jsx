import * as React from "react";

export class ActionColumnComp extends React.Component{

    constructor(){
        super();
        this.deleteActionBtnClick=this.deleteActionBtnClick.bind(this);
    }
    deleteActionBtnClick(){
        return this.props.deleteActionBtnClick(this.props.rowNumber);
    }

    render(){

        return (
            <div>
                <span onClick={this.deleteActionBtnClick} className=" glyphicon glyphicon-edit "></span>
                <span onClick={this.deleteActionBtnClick} className="glyphicon glyphicon-trash"></span>

            </div>
        );
    }
}