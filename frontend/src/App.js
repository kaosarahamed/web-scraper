import axios from "axios";
import { useEffect, useState } from "react";
import "./Style.css";
function App() {
  const [scraperData, setScraperData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [postReq, setpostReq] = useState("");
  const [postError, setPostError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/webscraper")
      .then((res) => {
        setisLoading(false);
        setScraperData(res.data);
        setError(null);
      })
      .catch((err) => {
        setisLoading(true);
        setScraperData([]);
        setError(err.response.data.message);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/webscraper", { url })
      .then((res) => setpostReq(res.data.message))
      .catch((err) => setPostError(err.response.data.message));
    await setUrl("");
  };

  return (
    <div className="webScraperAPp">
      <div className="webScraperContainer">
        <h2>Scrabe Your Data in Json Format</h2>
        <form onSubmit={handleSubmit}>
          <span>
            <label htmlFor="url">Enter Your URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              name="url"
              id="url"
              placeholder="Enter your url"
            />
          </span>
          <button type="submit">Get Data</button>
        </form>
        <div className="Errormessages">
          {isLoading && <h4>Loading...</h4>}
          {error && <h4>{error ? error : postReq}</h4>}
          {postError && <h4>{postError}</h4>}
        </div>
        <div className="scraperItems">
          {scraperData &&
            scraperData.map((data) =>
              data.scraperData.map((res) => (
                <div key={res.meta} className="scraperItem">
                  <img src={res.image} alt="" />
                  <h3>{res.title}</h3>
                  <p>{res.meta}</p>
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
