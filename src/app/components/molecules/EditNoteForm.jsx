// EditNoteForm.js
import React, { useState } from 'react';

const EditNoteForm = ({ note }) => {
  const [formData, setFormData] = useState({
    title: note.title,
    description: note.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setFormData({ ...formData, title: e.target.value });
    setFormData({ title: '', description: '' });
  };

  return (
    <form>
      <input
        type='text'
        name='title'
        placeholder='Title'
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name='description'
        placeholder='Description'
        value={formData.description}
        onChange={handleChange}
      />
      <button type='button' onClick={handleSave}>
        Save
      </button>
    </form>
  );
};

export default EditNoteForm;
