import  React,{Component} from "react";

export class HeadingComp extends Component{
constructor(){
    super();
    this.onSort=this.onSort.bind(this);
}
onSort(e,sortType,dataTypeIndex){
    return this.props.onSorting(e,sortType,dataTypeIndex);
};
    render(){
        return (<div className="">
                {  this.props.order.map((item,i) =>
                    <div className="table-colum-width pull-left p-l-5 p-r-5 p-t-5 p-b-5"
                         style={{"background":"#b9c9fe","border":"1px solid "}} key={i}>
                        <b className="weight-600"> {item.toUpperCase()}</b>
                        <div className="pull-right" style={{"display":"grid"}}>
                            <span  onClick={()=>this.onSort(item,"asc",i)} className="glyphicon glyphicon-triangle-top"></span>
                            <span  onClick={()=>this.onSort(item,"des",i)} className="glyphicon glyphicon-triangle-bottom"></span>
                        </div>
                    </div>
                )}
                <div>
                    <div className="table-colum-width pull-left p-l-5 p-r-5 p-t-5 p-b-5"
                         style={{"background":"#b9c9fe","border":"1px solid "}}>
                        <b className="weight-600">ACTIONS</b>
                    </div>
                </div>
            </div>);
    }
}