
## Radio And Checkbox Menu - React

### A sidebar usign radio-inputs as menu-itens and checkbox dropdown.

- [How it works?](#how-it-works)
- [Radio as menu-item](#radio-as-menu-item)
- [Checkbox dropdown](#checkbox-dropdown)
- [Menu-item style](#menu-item-style)

you can see this project working on [github-pages](https://eduardo-dangelo.github.io/radio-checkbox-menu) or edit this code on [CodeSandbox]().

## How it works?

In this example we are going to use the psedo-classes of the inputs :checked and :hover to trigger all the functions of the menu.

## JS

### Sidabar

First we import Radio from react-bootstrap and than we wrapp into a div with className="sidebar",
```
import React from 'react';
import { Radio } from 'react-bootstrap';

class Sidebar extends React.Component{
  render() {
    return (
      <div className="sidebar">
        <Radio name='item' className={input} />
      </div>
    )
  }

export default Sidebar;

```

### Menu-item
Inside our Radio we create a div ang give the className="menu-item" 
```
  <div className="sidebar">

    <Radio name='item' className={input}>
      <div className="menu-item">
        Menu item 1
      </div>
    </Radio>

  </div>

```
### Dropdown

Inside our Radio we create a div ang give the className="menu-item" 
```
<div className="sidebar">

  <Checkbox className={input}>
    <div className="menu">
      <div className="menu-item">
        Dropdown 2 <FaChevronRight />
      </div>
      <div className="sub-menu">
        <Radio name='item' className={input}>
          <div className="sub-menu-item">
            Menu item 7
          </div>
        </Radio>
        <Radio name='item' className={input}>
          <div className="sub-menu-item">
            Menu item 8
          </div>
        </Radio>
      </div>
    </div>
  </Checkbox>

</div>

```

## SCSS

```

/* ===============
VARIABLES
=============== */
$background: #444444;
$background-hover: #222222;
$background-active: #0f90bf;
$background-submenu: #333333;
$color-shadow: #222222;
$color-shadow-active: #095875;
$color-light: #555555;
$color-light-active: #22b1e5;
$text-gloss: 0 0 6px rgba(255,255,255,0.2);
$padding-menu: 15px 30px;
$padding-submenu: 15px 50px;


/* ===============
MAIN-PAGE
=============== */

body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  background: #eeeeee;
}

.app {
  height: 100vh;
  display: block;
}

/* ===============
SIDE-BAR
=============== */

.sidebar {
  background: $background;
  width: 300px;
  margin-top: 0;
  height: 100%;
  position: relative;

  @media all and (max-width: 500px) {
    width: 100%;
  }
}

.show {
  input {
    position: absolute;
    margin-top: 16px;
    margin-left: 10px;
  }
}

.hide {
  input {
    display: none
  }
}

/* ===============
MENU
=============== */

.menu-item {
  padding: $padding-menu;
  cursor: pointer;
  color: #ffffff;
  font-size: 13px;
  text-shadow: $text-gloss;
  transition: .3s ease;
  border-top: 1px solid $color-light;
  border-right: 1px solid $color-light;
  border-bottom: 1px solid $color-shadow;
  border-left: 1px solid $color-shadow;
  z-index: 2;
  transition: 1s ease;

  &:hover {
    background: $background-hover;

    &:after {
      content: '';
      background: #999999;
      position: absolute;
      left: 0;
      margin-top: -15px;
      width: 300px;
      height: 45px;
      animation: efect .8s ease;
      opacity: 0;
    }
  }
}

/* ===============
  DROPDOWN-MENU
  =============== */

.sub-menu {
  display: none;
  animation: slideIn .4s ease;
  z-index: 1;

  .sub-menu-item {
    padding: 15px 50px;
    cursor: pointer;
    color: #ffffff;
    font-size: 13px;
    text-shadow: $text-gloss;
    transition: .3s ease;
    border-top: 1px solid $color-light;
    border-right: 1px solid $color-light;
    border-bottom: 1px solid $color-shadow;
    border-left: 1px solid $color-shadow;
    z-index: 2;
    transition: 1s ease;
    background: #333333;

    &:hover {
      background: $background-hover;
  
      &:after {
        background: #999999;
        content: '';
        position: absolute;
        left: 0;
        margin-top: -15px;
        width: 300px;
        height: 45px;
        animation: efect .8s ease;
        opacity: 0;
      }
    }	
  }
}

/* ===============
HOVER EFECT ANIMATION
=============== */

@keyframes efect {
  from { width: 0; opacity: .1; }
  to { width: 300px; opacity: 0; }
}

/* ===============
SUB-MENU ANIMATION 
=============== */

@keyframes slideIn {
  from { margin-top: -20px;}
  to { margin-top: 0; }
}

/* ===============
CHEVRON ARROW ICON
=============== */

svg {
  float: right;
  transition: .2s ease;
}

/* ===============
TOGGLE DROPDOWN AND ROTATE ARRROW
=============== */

input[type=checkbox]:checked + .menu {

  .sub-menu {
    display: block;
  }

  .menu-item {
    svg {
      transform: rotate(90deg);
    }
  }
}

/* ===============
CHANGE BACKGROUND WHEN ITEM IS SELECTED
=============== */

input[type=radio]:checked + .menu-item {
  background: $background-active;
  border-top: 1px solid $color-light-active;
  border-right: 1px solid $color-light-active;
  border-bottom: 1px solid $color-shadow-active;
  border-left: 1px solid $color-shadow-active;
}

input[type=radio]:checked + .sub-menu-item {
  background: $background-active;
  border-top: 1px solid $color-light-active;
  border-right: 1px solid $color-light-active;
  border-bottom: 1px solid $color-shadow-active;
  border-left: 1px solid $color-shadow-active;
}

.btn-toggle-input {
  cursor: pointer;
  color: #bbbbbb;
  padding: $padding-menu;
  transition: .8s ease;

  &:hover {
    color: white;
  }
}


```

![example01](./src/img/img01.png)
