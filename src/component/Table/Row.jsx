import React from "react";
import {ActionColumnComp} from "./ActionColumn";
import {ImageComp} from "./Image";
import {Radio} from "./Radio";
import {Tuple} from "./Tuple";
import {TextField} from "./TextField";

export function Row(props){
        return (
            <div>
                {props.order.map((o,i)=>
                    <div  key={i}>
                        {
                            props.type[i]==="String" || props.type[i]==="Text"
                                ?
                                <TextField  type="Text"  data ={props.item[o]} isEditable={props.isEditable}
                                           inputOnChange={props.inputOnChange} rowNumber={props.rowNumber}
                                colNumber={o}/>
                                :
                                props.type[i] === "Number"
                                    ?
                                    <TextField  type="Number" data={props.item[o]} isEditable={props.isEditable}
                                                inputOnChange={props.inputOnChange} rowNumber={props.rowNumber}
                                                colNumber={o} />
                                    :
                                props.type[i]==="Radio"  || props.type[i]==="Boolean"
                                    ?
                                    <Radio data={props.item[o]}/>
                                    :
                                    props.type[i]==="Image"
                                        ?
                                        <ImageComp  data={props.item[o]}/>
                                        :
                                        props.type[i]==="Dropdown"
                                            ?
                                            <Tuple data={props.item[o]}/>
                                            :
                                            props.type[i]==="List"
                                                ?
                                                <Tuple  data={props.item[o]}/>
                                                :
                                                <Tuple  data={props.item[o]}/>
                        }
                    </div>
                )}
                <div className="table-colum-width pull-left"  style={{"padding":"3px 0px "}}>

                    <ActionColumnComp deleteActionBtnClick={props.deleteActionBtnClick} rowNumber={props.rowNumber}/>

                </div>
            </div>
        );
};