import { React, useState, useEffect } from "react";

export default function SearchResults({ returnedData }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [remainingResults, setRemainingResults] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);
  const targetSubdomain = "/blog";

  useEffect(() => {
    if(returnedData.searchInformation.totalResults === "0"){
      setEmptyResult(true);
    }
    else{
      setFilteredResults(
        returnedData.items.filter((result) => {
          if (result.link.includes(targetSubdomain)) return result;
        })
      );
      setRemainingResults(
        returnedData.items.filter((result) => !filteredResults.includes(result))
      );
    }
  }, []);

  return (
    <>
      { emptyResult ?
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-lg">Sorry, No Results Found</p>
        </div> :
        <div>
          {filteredResults.map((result) => (
            <div className="mb-6" key={result.link}>
              <div className="group">
                <a href={result.link}>
                  <h2 className="text-xl title-semibold">{result.title}</h2>
                </a>
                <a href={result.link} className="text-title text-sml line-clamp-1">{result.link}</a>
              </div>
              <a href={result.link}><p className="text-caption line-clamp-2">{result.snippet}</p></a>
            </div>
          ))}

          {remainingResults.map((result) => (
            <div className="mb-6" key={result.link}>
              <div className="group">
                <a href={result.link}>
                  <h2 className="text-xl title-semibold">{result.title}</h2>
                </a>
                <a
                  href={result.link}
                  className="text-title text-sml line-clamp-1"
                >
                  {result.link}
                </a>
              </div>
              <a href={result.link}>
                <p className="text-caption line-clamp-2">{result.snippet}</p>
              </a>
            </div>
          ))}
        </div>
      }
    </>
  );
}
