import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import { useState } from 'react'


export default function EffectSection(){
    const [modal, setModal] = useState(false)

    function openModal(){
        setModal(true)
    }

    return(
        <section>
            <h3>
                Effects
            </h3>
            <Button onClick={openModal}>Open information</Button>
        
            <Modal open={modal}>
                <h3>Heelo from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum labore tenetur harum repellendus nostrum cum exercitationem non vero. Quas dolor consequuntur voluptates laboriosam, iusto magnam. Dolorum placeat cum eveniet?</p>
            <Button onClick={()=> setModal(false)}>Close modal</Button>
            </Modal>
        </section>
    )
}