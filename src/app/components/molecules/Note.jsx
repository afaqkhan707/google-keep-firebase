'use client';
import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import './Note.css';
import NoteIcons from '../atoms/NoteIcons';
import addIcon from '../atoms/img/addIcon.svg';
import personaddIcon from '../atoms/img/personaddIcon.svg';
import paintIcon from '../atoms/img/paintIcon.svg';
import imgIcon from '../atoms/img/imgIcon.svg';
import archiveThinIcon from '../atoms/img/archiveThinIcon.svg';
import moreIcon from '../atoms/img/moreIcon.svg';
import undoIcon from '../atoms/img/undoIcon.svg';
import redoIcon from '../atoms/img/redoIcon.svg';
import deleteNoteIcon from '../atoms/img/deleteNoteIcon.svg';
import NoteBigIcon from '../atoms/NoteBigIcon';
import penIcon from '../atoms/img/penIcon.svg';
import imageIcon from '../atoms/img/imgIcon.svg';
import checkBoxIcon from '../atoms/img/checkBoxIcon.svg';
import {
  db,
  addDoc,
  collection,
  doc,
  deleteDoc,
} from '../../firebase/firebaseConfig';
import { TotalContext } from '@/app/controllers/TodoListStore';
import { usersContext } from '../../controllers/UsersStore';
import { useRouter } from 'next/router';
import EditNoteForm from './EditNote';
const Note = () => {
  const router = useRouter();
  const { user, cards } = useContext(usersContext);

  const { notesList, setNotesList } = useContext(TotalContext);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [showContent, setShowContent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCard = (event) => {
    if (formData.title.length && formData.description.length) {
      event.preventDefault();
      setFormData({ title: '', description: '' });

      if (user) {
        addDoc(collection(db, 'cards'), { ...formData, ownerId: user.userId });
        return;
      } else {
        alert('Please Log In First');
        router.push('signin');
      }
    }
    setFormData({ title: '', description: '' });
  };

  const handleDeleteCard = async (id) => {
    await deleteDoc(doc(db, 'cards', id));
  };

  const handleShowContent = () => {
    setShowContent(true);
  };

  const handleHideContent = () => {
    setShowContent(false);
  };
  const handleEdit = ({ note }) => {
    setIsEditing(true);
  };
  const handleSave = (formData) => {
    setFormData(formData);

    setIsEditing(false);
  };
  return (
    <>
      <form className='note'>
        <div className='take-note'>
          {showContent && (
            <div className='first-block'>
              <input
                name='title'
                type='text'
                onChange={handleChange}
                placeholder='Title'
                value={formData.title}
                required
              />
              <NoteBigIcon alttext='pinIcon-svg' />
            </div>
          )}
          <div className='second-block'>
            <input
              name='description'
              value={formData.description}
              onChange={handleChange}
              type='text'
              placeholder='Take a note...'
              onClick={handleShowContent}
              required
            />
            {showContent || (
              <>
                <div className='second-block-icon'>
                  <Image src={checkBoxIcon} alt='checkBoxIcon' />
                </div>
                <div className='second-block-icon'>
                  <Image src={penIcon} alt='' />
                </div>
                <div className='second-block-icon'>
                  <Image src={imageIcon} alt='' />
                </div>
              </>
            )}
          </div>

          {showContent && (
            <div className='third-block'>
              <div className='iconCom'>
                <NoteIcons icon={addIcon} alttxt='addIcon-svg' />
                <NoteIcons icon={personaddIcon} alttxt='personaddIcon-svg' />
                <NoteIcons icon={paintIcon} alttxt='paintIcon-svg' />
                <NoteIcons icon={imgIcon} alttxt='imgIcon-svg' />
                <NoteIcons
                  icon={archiveThinIcon}
                  alttxt='archiveThin-Icon-svg'
                />
                <NoteIcons icon={moreIcon} alttxt='moreIcon-svg' />
                <NoteIcons icon={undoIcon} alttxt='undoIcon' />
                <NoteIcons icon={redoIcon} alttxt='redoIcon' />
              </div>
              <div className='btn'>
                <button onClick={handleHideContent}>Close</button>
                <button onClick={handleAddCard}>Add Note</button>
              </div>
            </div>
          )}
        </div>
      </form>
      {cards.length > 0 && (
        <div className='card'>
          {cards.map((item, index) => (
            <div key={index} className='output'>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button type='button' onClick={handleEdit}>
                Edit
              </button>
              {isEditing && <EditNoteForm note={Note} onSave={handleSave} />}
              <div className='taken-note-icons'>
                <NoteIcons icon={addIcon} alttxt='addIcon-svg' />
                <NoteIcons icon={personaddIcon} alttxt='personaddIcon-svg' />
                <NoteIcons icon={paintIcon} alttxt='paintIcon-svg' />
                <NoteIcons icon={imgIcon} alttxt='imgIcon-svg' />
                <NoteIcons icon={archiveThinIcon} alttxt='archiveIcon-svg' />
                <NoteIcons icon={moreIcon} alttxt='moreIcon-svg' />
                <NoteIcons
                  icon={deleteNoteIcon}
                  alttxt='deleteNoteIcon'
                  onClick={() => handleDeleteCard(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Note;
