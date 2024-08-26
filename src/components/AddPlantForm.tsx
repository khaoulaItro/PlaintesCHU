import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Define the type for form data including the new 'plant' field
interface FormData {
  name: string;
  surname: string;
  email: string;
  plant: string;
}

const AddPlantForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', surname: '', email: '', plant: '' });
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sending email to the fixed address
    emailjs.send('service_jgawclq', 'template_gedzw5f', {
    name: form.name,
    surname: form.surname,
    email: form.email,
    plant: form.plant
  }, 'gTIz9zM9FyaFhrvU3')
  .then((response) => {
    console.log('Email sent successfully to admin', response.status, response.text);

    // Envoi du mail de confirmation à l'utilisateur
    return emailjs.send('service_jgawclq', 'template_gxh492d', {
      name: form.name,
      surname: form.surname,
      email: form.email,
      plant: form.plant
    }, 'gTIz9zM9FyaFhrvU3');
  })
  .then((response) => {
    console.log('Confirmation email sent successfully to user', response.status, response.text);
  })
  .catch((err) => {
    console.error('Failed to send email', err);
  });


    // Close the modal after submission
    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Add Plant</button>
      {open && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <h2>Add Plant</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Surname:</label>
              <input type="text" name="surname" value={form.surname} onChange={handleChange} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Plant:</label>
              <input type="text" name="plant" value={form.plant} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClose}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddPlantForm;
