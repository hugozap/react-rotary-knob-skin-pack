
![skins](./preview590x300.jpg)


[Skins catalog](http://react-rotary-knob-skins-preview.surge.sh/)

[Basic CodeSandbox demo](https://codesandbox.io/s/6w9vqn0x3w)

This project contains a set of 18 skins for the react-rotary-knob component.

Yoy should have [https://github.com/hugozap/react-rotary-knob](https://github.com/hugozap/react-rotary-knob) dependency installed in your project.

# Install

`yarn add react-rotary-knob-skins-pack`

or

`npm install react-rotary-knob-skins-pack --save`

# Usage

Skins are named from s1 to s18. 

```jsx
//App.js
import React from "react";
import { render } from "react-dom";
import { Knob } from "react-rotary-knob";
import * as skins from 'react-rotary-knob-skins-pack';

...

const App = () => (
  <div>
    <Knob skin={skins.s15} />
  </div>
);

render(<App />, document.getElementById("root"));
```
[Open in CodeSandbox.io](https://codesandbox.io/s/6w9vqn0x3w)

