import { Contact } from './Contact'
import { useState, useEffect } from 'react'

const API_URI = 'https://randomuser.me/api/?results=10'

export function ListContacts() {
    
    const [contactsList, setContactsList] = useState([])

    const fillContacts = (contacts) => {
        const newContactsList = contacts.results.map(contact => {
            const key = contact.login.uuid
            const name = [contact.name.first, contact.name.last].join(' ')
            const img = contact.picture.thumbnail
            const message = "Hello, I'm using WhatsApp"

            let lastDate = new Date()
            let hours = lastDate.getHours();
            let minutes = lastDate.getMinutes();
            hours = (hours < 10 ? '0' : '') + hours;
            minutes = (minutes < 10 ? '0' : '') + minutes;
            lastDate = hours + ':' + minutes;

            return { key, name, img, message, lastDate }
        })

        return newContactsList
    }

    const fetchContacts = async () => {
        try {
            const response = await fetch(API_URI);
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const contacts = await response.json();
            const newContactsList = fillContacts(contacts);
            setContactsList(newContactsList);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchContacts();
    }, []); // Empty dependency array ensures this effect runs only once after the initial render
    
    return (
        <div>
            <h1>Contacts</h1>
            <div>
                {
                    contactsList.map(contact => (
                        <Contact key={contact.key} name={contact.name} img={contact.img} message={contact.message} lastDate={contact.lastDate} />
                    ))
                }
            </div>
        </div>
    )
}
