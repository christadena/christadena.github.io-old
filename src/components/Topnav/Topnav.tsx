import "./Topnav.css";

type TopnavProps = {
  name: string;
};

const Topnav = (props: TopnavProps) => {
  const name = props.name;
  return (
    <div className="topnav">
      <h1>
        {name}
      </h1>
      <ul>
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};
export default Topnav;
