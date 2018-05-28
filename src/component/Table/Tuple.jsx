import React,{Component} from "react";

export class Tuple extends Component{

    constructor(){
        super();
        this.inputOnChange=this.inputOnChange.bind(this);
    }
    inputOnChange(e){
        return this.props.inputOnChange(e.target.value,this.props.rowNumber,this.props.colNumber);
    }

    render(){
        return (
            <div className="table-colum-width pull-left">
                <input type={this.props.type} value={this.props.data} disabled={!this.props.isEditable} onChange={(e)=>this.inputOnChange(e)}/>
            </div>
        );
    }
}