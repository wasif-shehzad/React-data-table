import React,{Component} from "react";

export class ColVisComp extends Component{

    constructor(){
        super();
    }
    colVisBtnClick(item,index){
        return this.props.onColVisBtnClick(item,index);
    }

    render(){
        return (
                <div className="dropdown colvis-dropdown">
                    <span className="glyphicon glyphicon-list  dropdown-toggle"  data-toggle="dropdown"></span>
                    <ul className="dropdown-menu">
                        { this.props.order.map((item,i)=>
                        i==0
                            ?
                            null
                                :
                        <li key={i}><a onClick={()=>this.colVisBtnClick(item,i)}>{item.toUpperCase()}</a></li>
                    )}
                    </ul>
            </div>);
    }
}