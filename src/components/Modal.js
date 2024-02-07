
import './Modal.css'
import ReactDOM from 'react-dom'
// import NewEventList from './NewEventList'

export default function Modal({ children, isSalesModal, setShowModal}) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "4px solid", 
                borderColor:  isSalesModal ? "#ff4500" : "#555",
                textAlign: "center"                
            }}>
                {children}
                <button onClick={() => setShowModal(false)}>Hide Modal</button>
            </div>
        </div>
    ), document.body)
}

