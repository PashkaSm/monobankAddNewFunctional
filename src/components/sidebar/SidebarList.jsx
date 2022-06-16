import SidebarData from "../../data/SidebarData";
import SidebarItem from "./SidebarItem";

function SidebarList() {
  return (
    <>
    {/* Через мап з масиву ми отримуємо потрібні дані для sideBarItem
    sideItem - передається потрібні дані про sideItem
    */}
      <div className="sidebar-wrapper">
        {SidebarData.map((item) => (
          <SidebarItem key={item.id} sideItem={item} />
        ))}
      </div>
    </>
  );
}

export default SidebarList;

