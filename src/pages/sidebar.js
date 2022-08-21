import React from 'react';

const Sidebar = () => {
  

    return (
      <div className='containerSidebar'>
         <ul className='sidebar'>
            <li className='sidebarName'>
               <div className='sidebarTopItem'></div>
               <div className='sidebarNameBig'>Аредаков Антон</div>
               <div className='sidebarNameDescription'>Организация</div>
            </li>
            <li className='sidebarItem'>
               <div className='sidebarItemBig'>Новости</div>
               <div className='sidebarArrow'>
                  <div className='arrow'></div>
               </div>
               <div className='sidebarItemDescription'>Управление новостями</div>
            </li>
            <li className='sidebarItem'>
               <div className='sidebarItemBig'>Пользователи</div>
               <div className='sidebarArrow'>
                  <div className='arrow'></div>
               </div>
               <div className='sidebarItemDescription'>Управление пользователями</div>
            </li>
            <li className='sidebarItem'>
               <div className='sidebarItemBig'>Университет</div>
               <div className='sidebarArrow'>
                  <div className='arrow'></div>
               </div>
               <div className='sidebarItemDescription'>Категории и управление</div>
            </li>
            <li className='sidebarItem'>
               <div className='sidebarItemBig'>Что-то еще</div>
               <div className='sidebarArrow'>
                  <div className='arrow'></div>
               </div>
               <div className='sidebarItemDescription'>Настройки</div>
            </li>
            <li className='sidebarItem'>
               <div className='sidebarItemBig'>Пользователи</div>
               <div className='sidebarArrow'>
                  <div className='arrow'></div>
               </div>
               <div className='sidebarItemDescription'>Управление пользователями</div>
            </li>
         </ul>
        
      </div>
    )
}
  
  export default Sidebar