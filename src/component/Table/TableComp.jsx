import * as React from "react";
import {ColVisComp} from "./ColVis";
import {ContentComp} from "./Content";
import {HeadingComp} from "./Heading";
import {SearchComp} from "./Search";

export class TableComp extends React.Component{
constructor(){
    super();
    this.data=[];
    this.type=["String","Number","String","Number","Image","Boolean"];
    this.order=["name","id","address","age","country","muslim"];
    this.tableEditable=true;
    this.state={
        type:["String","Number","String","Number","Image","Boolean"],
        order:["name","id","address","age","country","muslim"],
        data:[]
    }
    this.getSearchData=this.getSearchData.bind(this);
    this.onTupleEditable=this.onTupleEditable.bind(this);
    this.onDeleteBtnClick=this.onDeleteBtnClick.bind(this);
    this.onSorting=this.onSorting.bind(this);
    this.onColVisBtnClick=this.onColVisBtnClick.bind(this);
}
    onDeleteBtnClick(row){
    this.state.data.splice(row,1);
    this.forceUpdate();
    }
    onTupleEditable(value,row,col){
    this.state.data[row][col]=value;
    this.forceUpdate();
    }
    getSearchData(values,cols){
   let data=[].concat(this.data)
        for(var a=0;a<data.length;a++)
        {
            for(var b=0;b<values.length;b++)
            {
                if((data[a][cols[b]]+"").search(values[b])!=-1)
                {
                    continue;
                }
                else
                {
                    data.splice(a,1);
                    a--;
                    break;
                }
            }
        }
        this.setState({data:data});
    }
    onSorting(col,sortType,dataTypeIndex){
        if(sortType==="asc")
        {
            if(this.type[dataTypeIndex]==="Number")
            {
                this.state.data.sort(function(a, b){return a[col]-b[col]});
            }else{
                this.state.data.sort( function(a,b) {
                    if (a[col] < b[col])
                        return -1;
                    if (a[col] > b[col])
                        return 1;
                    return 0;
                });
            }

        }else if(sortType==="des")
        {
            if(this.type[dataTypeIndex]==="Number")
            {
                this.state.data.sort(function(a, b){return b[col]-a[col]});
            }else{
                this.state.data.sort( function(a,b) {
                    if (a[col] > b[col])
                        return -1;
                    if (a[col] < b[col])
                        return 1;
                    return 0;
                });
            }

        }

        this.forceUpdate();
    }
    onColVisBtnClick(item,index){
        if(this.order[index]===item && this.state.order.indexOf(item)>-1)
        {
            this.state.type.splice(this.state.order.indexOf(item),1);
            this.state.order.splice(this.state.order.indexOf(item),1);
        }else
        {
            this.state.type.splice(index,0,this.type[index]);
            this.state.order.splice(index,0,this.order[index]);
        }
        this.forceUpdate();
    }


  render(){
        if(this.data.length===0){
            this.state.data=[].concat(this.props.data);
            this.data=[].concat(this.state.data);
            this.state.editable=this.tableEditable;
        }
      return (
    <div  className="container">
        <ColVisComp order={this.order} type={this.type} onColVisBtnClick={this.onColVisBtnClick}/>
        <HeadingComp order={this.state.order} type={this.state.type} onSorting={this.onSorting}/>
        <SearchComp order={this.state.order} dataForSearch={this.getSearchData}/>
        <ContentComp data={this.state.data} order={this.state.order}  type={this.state.type} isEditable={this.state.editable}
                     inputOnChange={this.onTupleEditable}
                     deleteActionBtnClick={this.onDeleteBtnClick}/>
    </div>);
  }
}
TableComp.defaultProps={data:[
    {"name":"asif","id":1234,"address":"dfghjk","age":324,"country":"./assets/img/pak.png","muslim":true},
    {"name":"z","id":1234,"address":"dfghjk","age":324,"country":"./assets/img/pak.png","muslim":false},
    {"name":"wasif","id":124,"address":"dfghjka","age":9,"country":"./assets/img/pak.png","muslim":true},
    {"name":"xc","id":1234,"address":"hjk","age":324,"country":"./assets/img/pak.png","muslim":true},
    {"name":"wasif","id":134,"address":"dfk","age":324,"country":"./assets/img/pak.png","muslim":true},
    {"name":"wasif","id":111,"address":"dfghjk","age":324,"country":"./assets/img/pak.png","muslim":true},
    {"name":"sdf","id":555,"address":"dfghjk","age":3,"muslim":false},
    {"name":"wasi","id":6767,"address":"ghjk","age":32,"muslim":true},
    {"name":"tasf","id":111,"address":"hjk","age":0,"country":"./assets/img/pak.png","muslim":false},
    {"name":"aa","id":112,"address":"hjk","age":10,"country":"./assets/img/pak.png","muslim":false},
    {"name":"bsf","id":134,"address":"kotla","age":30,"country":"./assets/img/ind.png","muslim":true},
    {"name":"juiter","id":134,"address":"BlA","age":35,"country":"./assets/img/ind.png","muslim":false},
    {"name":"fasli","id":13,"address":"Aio","age":34,"country":"./assets/img/ind.png","muslim":true},
    {"name":"ali","id":4,"address":"kAtl","age":33,"country":"./assets/img/pak.png","muslim":false},
    {"name":"ahmed","id":324,"address":"hello","age":32,"country":"./assets/img/pak.png","muslim":false}
]};