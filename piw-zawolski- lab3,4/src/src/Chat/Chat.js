import React, { useRef, useState } from 'react';
import styles from './Chat.module.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../connections/init';
import { collection, query, orderBy, limit, addDoc } from 'firebase/firestore';


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.App}>
      <section className={styles.section}>
        {user ? <ChatRoom /> : <Error />}
      </section>
    </div>
  );
}

function Error() {
  return (
    <>
      <p>You need to be signed in to chat with other users</p>
    </>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages, loading] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className={styles.main}>
        {loading && <p>Loading...</p>}
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage} className={styles.form}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <button type="submit" disabled={!formValue} className={`${styles.formButton} ${!formValue && styles.buttonDisabled}`}>
          Send message
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? styles.sent : '';

  return (
    <div className={`${styles.message} ${messageClass}`}>
      <img src={photoURL || 'data:image/png;base64,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'} className={styles.img} />
      <p className={`${styles.p} ${messageClass ? styles.sentP : styles.receivedP}`}>{text}</p>
    </div>
  );
}

export default App; 
