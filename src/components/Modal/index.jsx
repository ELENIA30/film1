import "./style.css"

const Modal = (props) => {
    return (
        <div  id={props.showCard} className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Complimenti</h4>
                </div>
                <div className="modal-body">
                    il tuo titolo è stato aggiunto!
                </div>
                <div className='modal-footer'>
                  
                </div>
             </div>

        </div>
    )
}
export default Modal