import  React,{Component} from "react";

export class ActionColumnComp extends Component{

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
                <span> <img src="./assets/img/edit.png"/></span>
                <span onClick={this.deleteActionBtnClick}> <img src="./assets/img/delete.png"/></span>

            </div>
        );
    }
}