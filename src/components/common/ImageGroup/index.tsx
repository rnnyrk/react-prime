import * as i from 'types';
import React from 'React';
import { ImageGroupContainer } from './styled';

const ImageGroup: React.FC<ImageGroupProps> = (props) => (
  <ImageGroupContainer>
    {props.images.map((image) => (
      <img src={image.large} alt={image.alt} />
    ))}
  </ImageGroupContainer>
);

type ImageGroupProps = {
  images: i.Image[];
};

export default ImageGroup;
