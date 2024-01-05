import PaginationButtons from "./PaginationButtons";
import { useState } from 'react';

export default function SearchResults({ results }) {
  const [searchResults, setSearchResults] = useState(results.items);
  const targetSubdomain = '/blog';

  const filteredResults = searchResults.filter((result) => {
    if (result.link.includes(targetSubdomain))
      return result;
  });
  const remainingResults = searchResults.filter((result) => !filteredResults.includes(result));
  return (
    <>
      <div className="mx-auto w-4/5 sm:w-3/5 sm:px-8 mt-16 min-h-screen border-x">
        <br></br>
        {filteredResults.map((result) => {
          return (
            <div key={result.link}>
              <div className="group">
                <a href={result.link}>
                  <h2 className="mt-6 text-xl title-semibold">
                    {result.title}
                  </h2>
                </a>
                <a href={result.link} className="text-title text-sml line-clamp-1">
                  {result.link}
                </a>
              </div>
              <a href={result.link}>
                <p className="text-caption line-clamp-2">{result.snippet}</p>
              </a>
            </div>
          );
        })}

        {remainingResults.map((result) => {
          return (
            <div key={result.link}>
              <div className="group">
                <a href={result.link}>
                  <h2 className="mt-6 text-xl title-semibold">
                    {result.title}
                  </h2>
                </a>
                <a href={result.link} className="text-title text-sml line-clamp-1">
                  {result.link}
                </a>
              </div>
              <a href={result.link}>
                <p className="text-caption line-clamp-2">{result.snippet}</p>
              </a>
            </div>
          );
        })}
        <PaginationButtons />
      </div>
    </>
  );
}
