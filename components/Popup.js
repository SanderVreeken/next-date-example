import { useState } from 'react'
import styles from '../styles/Popup.module.css'

export default function Popup({ field }) {
    // State that is used to handle whether the popup should be rendered.
    const [isUsed, setIsUsed] = useState(false)

    // Function handling the state if the input element is clicked.
    const onClick = () => {
        field.sort === 'click' && setIsUsed(!isUsed)
    }

    // Function handling the state if the input element is hovered.
    const onHover = () => {
        field.sort === 'hover' && setIsUsed(!isUsed)
    }

    return (
        <div className={styles.popup}>
            <input onClick={() => onClick()} onMouseEnter={() => onHover()} onMouseLeave={() => onHover()} placeholder={field.placeholder} type='text'></input>
            {isUsed && (
                <div role='popup'>
                    {/* TODO: The already defined Calendar component should be placed here. */}
                </div>
            )}
        </div>
    )
}