export default function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      a {
        text-decoration: none;
      }
      html {
        height: 100%;
        width: 100%;
      }

      body {
        height: 100%;
        width: 100%;
        background-image: url("../images/background.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      button {
        margin: 10px;
        width: 100px;
        height: 40px;
      }
      svg {
        margin: 5px;
      }

      #__next {
        height: 100%;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      #__next > * {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
      }

      .btn {
        background-color: #788aa3;
        color: white;
        font-weight: bold;
                

      }
      .input-number {
        text-align: right;
        width: 125px;
      }

      .my-group {
        margin: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: strech;
      }
      @media screen and (max-width: 500px) {
        .my-group {
          flex-direction: column;
        }
      }
    `}</style>
  );
}
