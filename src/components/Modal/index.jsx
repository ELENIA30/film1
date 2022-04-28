import styles from './styles.module.scss'

const Modal = (props) => {
    return (
        <div  id={props.showCard} className={styles.modal}>
            <div className={styles.modal.content}>
                <div className={styles.modal.header}>
                    <h4 className={styles.modal__h4}>Complimenti</h4>
                </div>
                <div className={styles.modal.body}>
                    il tuo titolo è stato aggiunto!
                </div>
             </div>

        </div>
    )
}
export default Modal