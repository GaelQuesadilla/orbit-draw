export const Form = (props) => {
  return (
    <>
      <form>
        <div className="container-sm">{props.children}</div>
      </form>
    </>
  );
};
