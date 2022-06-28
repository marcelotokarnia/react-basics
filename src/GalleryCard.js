import { Figure, Caption } from './GalleryCard.styles';

const GalleryCard = ({ galleryName, src }) => {
  return (
    <Figure>
      <img src={src} alt="" />
      <Caption>
        <h2>{galleryName}</h2>
      </Caption>
    </Figure>
  );
};

export default GalleryCard;
