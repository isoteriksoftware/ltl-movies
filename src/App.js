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
        flex: {
          justifyContent: "space-evenly",
          wrap: true,
          paddingTop: 10,
        },

        Box1: {
          type: Box,
          label: "1",
        },
        Box2: {
          type: Box,
          color: 0xff00ff00,
          label: "2",
        },
        Box3: {
          type: Box,
          color: 0xff0000ff,
          label: "3",
        },
        Box4: {
          type: Box,
          color: 0xff0220ff,
          label: "4",
          flexItem: {
            marginTop: 10,
          },
        },
      },
    };
  }

  _init() {
    this.theme = "Light";
    this._setState(this.theme);
  }

  _handleEnter() {
    if (this.theme === "Light") {
      this.theme = "Dark";
    } else {
      this.theme = "Light";
    }

    this._setState(this.theme);
  }

  static _states() {
    return [
      class Dark extends this {
        $enter() {
          this.patch({
            Background: {
              color: 0xff234478,
            },
          });
        }
      },

      class Light extends this {
        $enter() {
          this.patch({
            Background: {
              color: 0xfffbb03b,
            },
          });
        }
      },
    ];
  }
}
