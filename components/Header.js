import moment from 'moment'

import styles from '../styles/Header.module.css'
import Popup from './Popup'

export default function Header({ type }) {
    // Date constant that is used to define the date of today and tommorow for the placeholder of the input field of the advanced component.
    const today = new Date()

    // The fields as used within the advanced header.
    const advancedFields = [{
        label: 'Bestemming',
        placeholder: 'Stad, luchthaven, attractie of adres',
    }, {
        label: 'Inchecken',
        placeholder: moment(today).format('DD/MM/YYYY'),
        sort: 'click',
        type: 'popup'
    }, {
        label: 'Inchecken',
        placeholder: moment(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)).format('DD/MM/YYYY'),
        sort: 'hover',
        type: 'popup'
    }]

    // The fields as used within the basic header.
    const basicFields = [{
        label: 'Bestemming',
        placeholder: 'Stad, luchthaven, attractie of adres',
    }, {
        label: 'Inchecken',
        type: 'date'
    }, {
        label: 'Inchecken',
        type: 'date'
    }]

    return (
        type === 'basic' ? (
            <header className={styles.header}>
                {basicFields.map((field, key) => (
                    <span key={key} role='field'>
                        <label>{field.label}</label>
                        <input placeholder={field.placeholder} type={field.type}></input>
                    </span>
                ))}
            </header>
        ) : (
            <header className={styles.header}>
                {advancedFields.map((field, key) => (
                    field.type !== 'popup' ? (
                        <span key={key} role='field'>
                            <label>{field.label}</label>
                            <input onClick={() => console.log('Sander')} placeholder={field.placeholder} type={field.type}></input>
                        </span>
                    ) : (
                        <span key={key} role='field'>
                            <label>{field.label}</label>
                            <Popup field={field} />
                        </span>
                    )                    
                ))}
            </header>
        )
    )
}