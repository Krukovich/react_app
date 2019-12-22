class Helper {

  getData = () => {
    const data = require("../data/data.json");
    return data;
  }

  checkValue = item => {
    if (item === 1) {
      const strToDecode = "&times;";
      const parser = new DOMParser();
      return parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;
    } else {
      return;
    }
  }

  showLine() {
    const { line } = require("../data/data.json");
    this.setState({
      data: line,
      color: false
    });
  }

  showLineSecond() {
    const { line_second } = require("../data/data.json");
    this.setState({
      data: line_second,
      color: false
    });
  }

  showRectangle() {
    const { rectangle } = require("../data/data.json");
    this.setState({
      data: rectangle,
      color: false
    });
  }

  colorFill() {
    const { bucket_fill } = require("../data/data.json");
    this.setState({
      data: bucket_fill,
      color: true
    }); 
  }

  addClass(color, item) {
    if (!color) return "block"

    if (color && item === 0) {
      return "block block_color"
    } else {
      return "block"
    } 
  }

  removeClass() {
    let list = [...document.getElementsByClassName("block")];
    if (list.length != 0) {
      list.forEach(item => {
        if (item.classList.indexOF("block_color") > 0) {
          item.classList.remove("block_color");
        }
      });
    }
  }
}

export default Helper;