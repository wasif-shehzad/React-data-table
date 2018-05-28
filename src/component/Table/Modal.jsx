import React,{Component} from "react";

export class ModalComp extends Component{

    constructor(){
        super();
        this.openModal=this.openModal.bind(this);
    }
   openModal(){

}
    render(){
        return (
            <div class="modal fade" id="Modal-React-DataTable" role="dialog">
                <div class="modal-dialog-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure to delete ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" >Ok</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
