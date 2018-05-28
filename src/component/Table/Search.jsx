import * as React from "react";

export class SearchComp extends React.Component{

    constructor(){
        super();
        this.values=[];
        this.items=[];
        this.search=this.search.bind(this);
    }
    search(val,item){
        if(this.items.includes(item))
        {
            this.values[this.items.indexOf(item)]=val;
        }
        else
        {
            this.values.push(val);
            this.items.push(item);
        }
       return this.props.dataForSearch(this.values,this.items);
    }
    render(){
        return (
            <div className="">
                {  this.props.order.map((item,i) =>
                    <div className="table-colum-width pull-left " key={i}>
                        <input type="text" className="form-control" style={{"border":"1px solid"}} onKeyUp={(e)=>this.search(e.target.value,item)}/>
                    </div>
                )}
                <div className="table-colum-width pull-left " >
                    <input type="text" className="form-control" style={{"border":"1px solid"}} disabled/>
                </div>
            </div>);
    }
}