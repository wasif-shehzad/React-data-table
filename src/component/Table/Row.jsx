import * as React from "react";
import {ActionColumnComp} from "./ActionColumn";
import {ImageComp} from "./Image";
import {Radio} from "./Radio";
import {Tuple} from "./Tuple";
import {TextField} from "./TextField";

export class Row extends React.Component{
constructor(){
    super();
}

    render(){

        return (
            <div>
                {this.props.order.map((o,i)=>
                    <div  key={i}>
                        {
                            this.props.type[i]==="String" || this.props.type[i]==="Text"
                                ?
                                <TextField  type="Text"  data ={this.props.item[o]} isEditable={this.props.isEditable}
                                           inputOnChange={this.props.inputOnChange} rowNumber={this.props.rowNumber}
                                colNumber={o}/>
                                :
                                this.props.type[i] === "Number"
                                    ?
                                    <TextField  type="Number" data={this.props.item[o]} isEditable={this.props.isEditable}
                                                inputOnChange={this.props.inputOnChange} rowNumber={this.props.rowNumber}
                                                colNumber={o} />
                                    :
                                this.props.type[i]==="Radio"  || this.props.type[i]==="Boolean"
                                    ?
                                    <Radio data={this.props.item[o]}/>
                                    :
                                    this.props.type[i]==="Image"
                                        ?
                                        <ImageComp  data={this.props.item[o]}/>
                                        :
                                        this.props.type[i]==="Dropdown"
                                            ?
                                            <Tuple data={this.props.item[o]}/>
                                            :
                                            this.props.type[i]==="List"
                                                ?
                                                <Tuple  data={this.props.item[o]}/>
                                                :
                                                <Tuple  data={this.props.item[o]}/>
                        }
                    </div>
                )}
                <div className="table-colum-width pull-left"  style={{"padding":"3px 0px "}}>

                    <ActionColumnComp deleteActionBtnClick={this.props.deleteActionBtnClick} rowNumber={this.props.rowNumber}/>

                </div>
            </div>
        );
    }
}