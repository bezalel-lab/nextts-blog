export const FullSizePage = (props) => (
  <div>
    {props.children}
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        width: 100%;
      }
    `}</style>
  </div>
);

export default FullSizePage;
