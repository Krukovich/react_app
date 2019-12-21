import React from 'react';
import Helper from "../helper/helper";
import Button from '@material-ui/core/Button';

class Canvas extends React.Component {
  constructor() {
    super();
    this.helper = new Helper();

    this.state = {
      data: [],
      color: false
    }
  }

  componentDidMount() {
    const data = this.helper.getData();
    if (data.canvas) {
      this.setState({
        data: data.rectangle
      })
    }
  }

  render() {
    let list = this.state.data;
    return(
      <div className="wrapper">
        <div className="canvas">
          {list.map((item, index) => {
            return (
              <div className="line" key={index}>
                {item.map((i, index) => {
                  return <div className={this.helper.addClass(this.state.color, i)} key={index}>{this.helper.checkValue(i)}</div>
                })}
              </div>
            );
          })}
        </div>
        <div className="controls">
          <Button variant="outlined" onClick={this.helper.showLine.bind(this)}>Line</Button>
          <Button variant="outlined" onClick={this.helper.showLineSecond.bind(this)}>Line Second</Button>
          <Button variant="outlined" onClick={this.helper.showRectangle.bind(this)}>Rectangle</Button>
          <Button variant="outlined" onClick={this.helper.colorFill.bind(this)}>Bucket fill</Button>
        </div>
      </div>
    );
  }
}

export default Canvas;
