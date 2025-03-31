import { Component } from "react"

class ImageComponent extends Component {
  render() {
    return (
      <>
        <img src={this.props.nomeImmagine} />
      </>
    )
  }
}
export default ImageComponent
