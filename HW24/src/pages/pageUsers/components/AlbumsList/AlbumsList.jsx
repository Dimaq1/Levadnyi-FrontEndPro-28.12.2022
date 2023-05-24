import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const AlbumsList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      const data = await response.json();
      setAlbums(data);
    };

    fetchAlbums();
  }, [userId]);

  return (
    <div>
      <h1>Альбоми користувача</h1>
      {albums.map(album => (
        <div key={album.id}>
          <p>{album.title}</p>
          <Link to={`/albums/${album.id}/photos`}>Photos</Link>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;