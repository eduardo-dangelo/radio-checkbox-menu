
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
    </Radio><Radio name='item' className={input} />
  </div>

```

## SCSS

### Sidebar

Than we style our sidebar and menu-item and set the input to display none.

```
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

input {
  display: none
}

```
### Menu-item

```

.menu-item {
  color: #ffffff;
  font-size: 13px;
  padding: $padding-menu;
  cursor: pointer;
  text-shadow: $text-gloss;
  border-top: 1px solid $color-light;
  border-right: 1px solid $color-light;
  border-bottom: 1px solid $color-shadow;
  border-left: 1px solid $color-shadow;
  transition: 1s ease;

  &:hover {
    background: $background-hover;
  }

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

```


## Radio as menu-item


## Checkbox dropdown


## Menu-item style

![example01](./src/img/img01.png)
