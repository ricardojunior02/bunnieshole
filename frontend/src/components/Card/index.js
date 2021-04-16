import React from 'react';

import { Container, Thumbnail, Footer, Type } from './styles';

import audio from '../../assets/audio.png';
import image from '../../assets/photo.png';
import video from '../../assets/video.png';

import mic from '../../assets/mic.png';
import camimg from '../../assets/camimg.png';
import cam from '../../assets/cam.png';

const Card = ({ data }) => {

  const thumbnail = {
    audio,
    image,
    video
  }

  const type = {
    audio: mic,
    image: camimg,
    video: cam
  }

  const shadow = {
    audio: 'rgba(250, 183, 21, 0.2)',
    image: 'rgba(89, 123, 252, 0.2)',
    video: 'rgba(64, 200, 112, 0.2)'
  }
  
  
  return (
    <Container>
        <Thumbnail image={data.thumbnail === '' ? thumbnail[data.type] : data.thumbnail} alt={thumbnail[data.type]} />
        <Type shadow={shadow[data.type]}>
          <img src={type[data.type]} alt={type[data.type]}/>
        </Type>
        <Footer>
          <div>
            <strong>{data.name}</strong>
            <span>Nota: {data.rating}</span>
          </div>
          <strong>R$ {`${data.value}`.replace('.',',')}</strong>
        </Footer>
    </Container>
  )
}

export default Card;