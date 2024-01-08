import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';

function useS3ImageLinks(s3Keys) {
  const [s3ImageLinks, setS3ImageLinks] = useState([]);
  const imagesId = s3Keys
  useEffect(() => {
    const getPhotoURL = async (photoKey) => {
      try {
        const url = await Storage.get(photoKey);
        return url;
      } catch (error) {
        console.error('Error fetching photo URL:', error.message);
        return null;
      }
    };

   imagesId ? Promise.all(imagesId.map(getPhotoURL))
      .then((links) => {
        const filterLinks = links.filter((link) => link !== null);
        setS3ImageLinks(filterLinks);
      })
      .catch((error) => {
        console.error('Error fetching S3 image links:', error.message);
      }) : ""
  }, [imagesId]);

  return s3ImageLinks;
}

export { useS3ImageLinks}