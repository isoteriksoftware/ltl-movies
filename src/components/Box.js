import { Lightning } from "@lightningjs/sdk";

export default class Box extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 80,
      h: 80,
      color: 0xffff0000,
    };
  }
}
