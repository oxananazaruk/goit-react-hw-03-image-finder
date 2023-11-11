import { Component } from 'react';
import { ImageModal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image, name } = this.props;
    return (
      <li onClick={this.openModal}>
        <img src={image} alt={name} />
        <ImageModal isModalOpen={isModalOpen} closeModal={this.closeModal} />
      </li>
    );
  }
}
