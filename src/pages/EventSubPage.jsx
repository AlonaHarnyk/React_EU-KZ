import { useLoaderData, useNavigation } from 'react-router-dom';

export const EventSubPage = () => {
  const { name, images } = useLoaderData();
  const { state } = useNavigation();
  return (
    <>
      {state === 'loading' && 'LOADING..'}
      <h2>{name}</h2>
      <img src={images[0].url} alt={name} width="400" />
    </>
  );
};
