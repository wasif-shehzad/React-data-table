import * as React from "react";
import {Row} from "./Row";

export class ContentComp extends React.Component{
constructor(){
    super();

}
rowNumber(){

}
    render(){
        return (
            <div>
                {this.props.data.map((item,i)=>
                    <div  className="row" key={i}>
                        <Row  item={item} order={this.props.order} type={this.props.type} isEditable={this.props.isEditable}
                              inputOnChange={this.props.inputOnChange} rowNumber={i}
                              deleteActionBtnClick={this.props.deleteActionBtnClick}
                        />
                    </div>
                )}
            </div>);
    }
}