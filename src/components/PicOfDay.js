import { useState, useEffect } from "react";

const PicOfDay = (props) => {
  const [spaceData, setSpaceData] = useState({});
  const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(false);

  const fetchPicDay = async () => {
    try {
      let res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=qdz4Z28bzgSbbpf1IWUVGLaBy935uAYgt5zJvXn0"
      );
      if (res.status !== 200) {
        throw new Error("oops");
      }
      let data = await res.json();
      setSpaceData(data);
      console.log(data);
    } catch (error) {
      console.log("i am error", error);
      setError(true);
    }
  };
  useEffect(() => {
    fetchPicDay();
  }, []);

  return (
    <div>
      <>
        <button
          onClick={() => {
            !toggle ? setToggle(true) : setToggle(false);
            console.log(toggle);
          }}
        >
          Show Image
        </button>
        <div style={{ backgroundColor: "red" }}>
          <p className="Date-name">This is the date {spaceData.date}🚀</p>
        </div>
        <div style={{ backgroundColor: "red" }}>
          <p className="explanation">{spaceData.explanation}</p>
        </div>
        {toggle ? (
          <div>
            <img src={spaceData.url} className="Space-image"></img>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default PicOfDay;
