import React from 'react';
import Helper from "../helper/helper";
import { Button } from '@material-ui/core';

class Canvas extends React.Component {
  constructor() {
    super();
    this.helper = new Helper();
    this.oldData = {};

    this.state = {
      data: [],
      color: false
    }
  }

  componentDidMount() {
    const data = this.helper.getData();
    this.oldData = data || {};
    if (data.canvas) {
      this.setState({
        data: data.rectangle
      })
    }
  }

  render() {
    const { data }  = this.state;
      return(
        <div className="wrapper">
          <div className="canvas">
            {data.map((item, index) => {
              return (
                <div className="line" key={index}>
                  {item.map((point, index) => {
                    return <div className={this.helper.addClass(this.state.color, point)} key={index}>{this.helper.checkValueAndInsert(point)}</div>
                  })}
                </div>
              );
            })}
        </div>  
        <div className="controls">
          <Button variant="outlined" onClick={this.helper.showLine.bind(this, this.oldData)}>Line</Button>
          <Button variant="outlined" onClick={this.helper.showLineSecond.bind(this, this.oldData)}>Line Second</Button>
          <Button variant="outlined" onClick={this.helper.showRectangle.bind(this, this.oldData)}>Rectangle</Button>
          <Button variant="outlined" onClick={this.helper.colorFill.bind(this, this.oldData)}>Bucket fill</Button>
        </div>
      </div>
    );
  }
}

export default Canvas;
