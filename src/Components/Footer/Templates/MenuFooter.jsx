import React from 'react';
import cl from '../Footer.module.css'
import {MenuInfo} from "./menuinfo";

const MenuFooter = () => {
    return (
        <nav className={cl.menu}>
            {
              MenuInfo.map((item, index) => (
                  <div key={index} className={cl.menuCol}>
                      <h5>{item.name}</h5>
                      <div className={cl.menuColItems}>
                          {item.links.map((link, key) => (
                              <a key={key}>{link}</a>
                          ))}
                      </div>
                  </div>
              ))
            }
        </nav>
    );
};

export default MenuFooter;