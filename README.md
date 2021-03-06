<div align="center">
  <a href="https://omgovich.github.io/react-colorful">
    <img src="demo/src/assets/design.png" width="224" height="230" alt="react-colorful" />
  </a>
</div>

<div align="center">
  <a href="https://npmjs.org/package/react-colorful">
    <img alt="npm" src="https://img.shields.io/npm/v/react-colorful.svg?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://travis-ci.org/omgovich/react-colorful">
    <img alt="CI" src="https://img.shields.io/travis/omgovich/react-colorful.svg?labelColor=da248d&color=6ead0a" />
  </a>
</div>

<div align="center">
  <strong>react-colorful</strong> is a tiny color picker component for modern React apps.
</div>

## Features

- **Small**: Just 1,5 KB (minified and gzipped). [Size Limit](https://github.com/ai/size-limit) controls the size.
- **Fast**: Built with hooks and functional components only.
- **Simple**: The interface is straight forward and easy to use.
- **Mobile-friendly**: Works well on mobile devices and touch screens.
- **No dependencies**


## Live demos
- [Website](https://omgovich.github.io/react-colorful)
- [CodeSandbox](https://codesandbox.io/s/react-colorful-demo-u5vwp)

## Install

```
npm install react-colorful --save
```

## Usage

```js
import ColorPicker from "react-colorful";
import "react-colorful/dist/index.css";

const YourComponent = () => {
  const [color, setColor] = useState("#aabbcc");
  return <ColorPicker hex={color} onChange={setColor} />;
};
```

## Overriding styles

The easiest way to tweak react-colorful is to create another stylesheet to override the default styles.

```css
.react-colorful {
  height: 250px;
}
.react-colorful__saturation {
  bottom: 30px;
  border-radius: 3px 3px 0 0;
}
.react-colorful__hue {
  height: 30px;
  border-radius: 0 0 3px 3px;
}
.react-colorful__saturation-pointer {
  border-radius: 5px;
}
.react-colorful__hue-pointer {
  border-radius: 2px;
  width: 15px;
  height: inherit;
}
```
