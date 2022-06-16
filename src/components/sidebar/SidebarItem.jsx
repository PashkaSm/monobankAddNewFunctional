import {  NavLink } from "react-router-dom";

function SidebarItem({ sideItem }) {
  return (
    // ми тут отрмуємо навігаційні компоненти які нам допоможуть переходити по силкам і міняти 
    // вміст роутера динамічно 
    // sideItem.link - силка на сторінку 
    <NavLink to={{ pathname: `${sideItem.link}` }} className={({isActive}) => (isActive ? 'sidebar-item-active' : 'sidebar-item')}>
      <div className="side-image">{sideItem.logo}</div>
      <div className="side-tag">{sideItem.underLogoText}</div>
    </NavLink>
  );
}

export default SidebarItem;
