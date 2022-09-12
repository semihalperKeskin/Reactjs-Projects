import React, { useContext } from 'react';
import { useState } from 'react';
import { DataGridFnPosts, DataGridFnTodos, DataGridClsPosts, DataGridClsTodos } from '../data-grid'


function BodyTable() {

  // butonların class/function a göre değişmesi için stateler
  const [upload, setUpload] = useState(true)
  const [chooseFunc, setChooseFunc] = useState(true)


  // class ve function a göre buttonlar
  return (
    <>
          <button type="button" onClick={() => setChooseFunc(true)} className={chooseFunc ? "btn btn-info" : "btn btn-default"}>Class components</button>
          <button type="button" onClick={() => setChooseFunc(false)} className={chooseFunc ? "btn btn-default" : "btn btn-info"}>function components</button>


          {chooseFunc ? <div >
            <button type="button" onClick={() => setUpload(true)} className={upload ? "btn btn-warning" : "btn btn-default"}>Todos</button>
            <button type="button" onClick={() => setUpload(false)} className={upload ? "btn btn-default" : "btn btn-warning"}>Posts</button>
            {upload ? <DataGridClsTodos /> : <DataGridClsPosts />}
          </div>
            :
            <div >
              <button type="button" onClick={() => setUpload(true)} className={upload ? "btn btn-warning" : "btn btn-default"}>Todos</button>
              <button type="button" onClick={() => setUpload(false)} className={upload ? "btn btn-default" : "btn btn-warning"}>Posts</button>
              {upload ? <DataGridFnTodos /> : <DataGridFnPosts />}
            </div>}
    </>
  );
}

export default BodyTable;
