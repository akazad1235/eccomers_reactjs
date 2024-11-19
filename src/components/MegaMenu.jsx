import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (index) => {
    if (hoverTimeout) clearTimeout(hoverTimeout); // Clear the timeout
    setOpenMenu(index); // Open the menu
  };

  const handleMouseLeave = () => {
    // Add a delay before closing
    const timeout = setTimeout(() => setOpenMenu(null), 200); // 200ms delay
    setHoverTimeout(timeout);
  };

  const menuItems = [
    {
      name: "Home",
      subMenu: [
        {
          title: "Home Demos",
          links: [
            { name: "Home Demo #01", url: "#" },
            { name: "Home Demo #02", url: "#" },
          ],
        },
      ],
    },
    {
      name: "Shop",
      subMenu: [
        {
          title: "Categories",
          links: [
            { name: "New Arrivals", url: "#" },
            { name: "Best Sellers", url: "#" },
          ],
        },
        {
            title: "Categories 1",
            links: [
                { name: "New Arrivals", url: "#" },
                { name: "Best Sellers", url: "#" },
            ],
        },
          
        {
            title: "Categories 3",
            links: [
            { name: "New Arrivals", url: "#" },
            { name: "Best Sellers", url: "#" },
            ],
        },  
      ],
    },
    {
        name: "About",
        subMenu: [],
      },
  ];

  return (
    <div className="sticky top-0 z-10 bg-gray-300 header-bottom-area">
      <div className="container flex items-center justify-center w-5/6 mx-auto">
        <div className="py-4">
          <nav className="hidden header-menu lg:block">
            <ul className="flex items-center justify-center space-x-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-800 hover:text-gray-500"
                  >
                    {item.name}{item.subMenu.length > 0 &&(<FontAwesomeIcon icon={ faAngleDown } size='1x'/>)}

                  </a>
                 

                  {/* Mega Menu */}
                  {item.subMenu &&  item.subMenu.length > 0 && (
                    <div
                      className={`absolute left-0 top-full bg-white shadow-lg p-6 mt-3 rounded-sm grid grid-cols-2 gap-4 w-[600px] transform transition-all duration-300 ease-in-out ${
                        openMenu === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      {item.subMenu.map((submenu, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="mb-2 text-lg font-bold">
                            {submenu.title}
                          </h3>
                          <ul className="space-y-2">
                            {submenu.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a
                                  href={link.url}
                                  className="hover:text-blue-500"
                                >
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
