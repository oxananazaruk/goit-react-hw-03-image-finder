export const ImageGalleryItem = ({ image, name }) => {
  return (
    <li>
      <img src={image} alt={name} />
    </li>
  );
};
