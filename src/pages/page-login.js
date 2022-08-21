import React from 'react';
import Edit from '../img/edit.png';

import Filter from '../img/filtr.png';

const Pagelogin = () => {
  
 
    return (
      <div>
        <main>
         
        <div className='container-news'>
      <div className = 'row'>
        
        <div className = 'col1' >
        <div className="text-path">Начало / Новости</div>
        </div>

        <div className = "col2">
        <div className="text-news">Новости</div>
        <div className='edit-add-news'>
        <img className='edit' src={Edit} alt="edit"  />
        <div className="add-news"> Добавить новость</div>
        </div>
  
        </div>
        <div className = 'col3'>
         
            <input
            className='search-input'
            id="search"
            name="search"
            type="text"
            />
            <button className ='button-search' >Поиск</button>
            <button className ='button-filter' > <img className='filter' src={Filter} alt="edit" /> Фильтр </button>
          
          

        </div>
      </div>

    </div>

        </main>
      </div>
    )
}
  
  export default Pagelogin

