const cardStyles = new CSSStyleSheet();

cardStyles.replaceSync(`
  :host {
    --tech-card-color-border: var(--color-border-default);
    --tech-card-object-fit-image: contain;
    transition: 200ms ease-in-out;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    overflow: hidden;
    max-width: 450px;
    width: 450px;
    transition: 100ms ease-in-out;
    box-shadow: 2px 2px 8px 0px #CECECE;

    .img-container {
      padding: 0;
      height: 300px;
      transition: 100ms ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        padding: 0;
        max-height: 300px;
        width: 100%;
        object-fit: var(--tech-card-object-fit-image);
        transition: 100ms ease-in-out;
      }
    }
    
    .text-container {
      padding: 0px 16px 8px;
      transition: 100ms ease-in-out;

      h3, p {
        margin: 0;
        transition: 100ms ease-in-out;
      }
    }

    &:hover {
      outline: 2px solid var(--tech-card-color-border);
      cursor: pointer;
      max-width: 450px;

      .text-container {
        padding: 0px 16px 8px;
      }
    }
  }
  
  @media print, screen and (max-width: 450px) {
    .card {
      max-width: auto;
      width: 100%;

      .img-container{
        height: 200px;
        max-width: 100%;
        img {
          height: 200px;
          max-height: 200px;
          max-width: 100%;
        }
      }
    }
  }
`);

export default cardStyles;