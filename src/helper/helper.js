class Helper {

  getData = () => {
    const data = require("../data/data.json");
    return data;
  }

  checkValueAndInsert = item => {
    if (item === 1) {
      const strToDecode = "&times;";
      const parser = new DOMParser();
      return parser.parseFromString(`<!doctype html><body>${strToDecode}`, "text/html").body.textContent;
    } else {
      return;
    }
  }

  showLine(data) {
    const { line } = data;
    this.setState({
      data: line,
      color: false
    });
  }

  showLineSecond(data) {
    const { line_second } = data;
    this.setState({
      data: line_second,
      color: false
    });
  }

  showRectangle(data) {
    const { rectangle } = data;
    this.setState({
      data: rectangle,
      color: false
    });
  }

  colorFill(data) {
    const { bucket_fill } = data;
    this.setState({
      data: bucket_fill,
      color: true
    }); 
  }

  addClass(color, item) {
    if (!color) return "block"

    if (color && !item) {
      return "block block_color"
    } else {
      return "block"
    } 
  }

  removeClass() {
    const list = [...document.getElementsByClassName("block")];
    if (list.length) {
      list.forEach(item => {
        if (item.classList.indexOF("block_color") > 0) {
          item.classList.remove("block_color");
        }
      });
    }
  }
}

export default Helper;