import styled from 'styled-components/macro';

const StyledGridPlaylists = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 130px;
  background-color: var(--near-black);

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  .grid__item {
    background-color: grey;
    width: 300px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    cursor: default;

    &:hover,
    &:focus {
      background-color: var(--dark-grey);

      img {
        box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
      }
    }

    a {
      display: block;
      width: 100%;
      height: 100%;

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }

  .grid__item__inner {
    padding: var(--spacing-sm);

    @media (min-width: 768px) {
      padding: var(--spacing-md);
    }
  }

  .grid__item__img {
    position: relative;
    margin: 0 auto var(--spacing-lg);

    img {
      margin-left: -30px;
      top: 0;
      width: 70%;
      height: 100%;
      object-fit: cover;
      background-color: var(--dark-grey);
      border-radius: ${props => props.type === 'artist' ? '50%' : '2px'};
    }
  }

  .grid__item__name {
    margin-left: -30px;
    font-size: var(--fz-md);
    letter-spacing: normal;
    
  }

  .grid__item__label {
    margin-left: -30px;
    font-size: var(--fz-sm);
    color: var(--light-grey);

  }
`;

export default StyledGridPlaylists;