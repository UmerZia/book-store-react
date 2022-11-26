import React from 'react';
import style from './AddBook.module.css';

const AddBook = () => (
  <>
    <div className={style.dividerHorizontal} />
    <section className={style.Container}>
      <h2 className={style.formTitle}>ADD NEW BOOK</h2>
      <form action="./" className={style.addBookForm}>
        <input className={`${style.input} ${style.titleInput}`} type="text" placeholder="Book title" required Value />
        <input className={`${style.input} ${style.titleInput}`} type="text" placeholder="Book Author" required Value />
        <button type="button" className={style.btnAddBook}>ADD BOOK</button>
      </form>
    </section>
  </>
);

export default AddBook;
