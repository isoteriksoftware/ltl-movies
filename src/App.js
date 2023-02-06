import { Lightning, Utils } from "@lightningjs/sdk";
import Box from "./components/Box";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      Background: {
        rect: true,
        w: 960,
        h: 640,
        color: 0xfffbb03b,
      },
      Container: {
        rect: true,
        w: 300,
        h: 300,
        x: (960 - 300) / 2,
        y: (640 - 300) / 2,
        color: 0xff808080,

        Box1: {
          type: Box,
        },
        Box2: {
          type: Box,
          color: 0xff00ff00,
        },
        Box3: {
          type: Box,
          color: 0xff0000ff,
        },
      },
    };
  }
}
