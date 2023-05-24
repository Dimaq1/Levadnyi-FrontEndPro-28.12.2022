import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotosList = () => {
  const { albumId } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const data = await response.json();
      if (data.length > 0) {
        setPhoto(data[0]);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <div>
      <h1>Фото з альбому</h1>
      {photo && (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
    </div>
  );
};

export default PhotosList;