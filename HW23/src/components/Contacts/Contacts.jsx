import React, { useState, useEffect } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, []);

  const handleDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSave = e => {
    e.preventDefault();
    const newContact = {
      id: contacts.length + 1,
      name,
      surname,
      phone
    };
    setContacts([...contacts, newContact]);
    setName('');
    setSurname('');
    setPhone('');
    setShowForm(false);
  };

  return (
    <div>
      <h1>Список контактів</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Додати контакт</button>
      )}
      {showForm && (
        <form onSubmit={handleSave}>
          <label>
            Ім'я:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label>
            Прізвище:
            <input type="text" value={surname} onChange={e => setSurname(e.target.value)} required />
          </label>
          <label>
            Телефон:
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
          </label>
          <button type="submit">Зберегти</button>
          <button type="button" onClick={() => setShowForm(false)}>Скасувати</button>
        </form>
      )}
    </div>
  );
};

export default Contacts;