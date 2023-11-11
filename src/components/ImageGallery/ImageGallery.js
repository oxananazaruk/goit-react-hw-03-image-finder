import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          image={item.previewURL}
          name={item.tags}
        />
      ))}
    </ul>
  );
};
