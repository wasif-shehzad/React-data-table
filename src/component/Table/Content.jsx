import * as React from "react";
import {Row} from "./Row";
import {ModalComp} from "./Modal";

export class ContentComp extends React.Component{
constructor(){
    super();
this.rowNumber=this.rowNumber.bind(this);
}
rowNumber(e){
e.currentTarget.clientHeight;
}
    render(){
        return (
            <div className="table-body scrollBar" onScroll={e=>this.rowNumber(e)}>
                {this.props.data.map((item,i)=>
                    <div  className="table-row" key={i}>
                        <Row  item={item}
                              order={this.props.order}
                              type={this.props.type}
                              isEditable={this.props.isEditable}
                              inputOnChange={this.props.inputOnChange} rowNumber={i}
                              deleteActionBtnClick={this.props.deleteActionBtnClick}/>
                    </div>
                )}
            </div>);
    }
}