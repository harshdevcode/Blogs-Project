import React from "react";
import PaginationButtons from 'components/searchpagination';

export default function SearchResults({ returnedData, activePage, navigationPageChange }) {
  const targetSubdomain = "/blog";
  const filteredResults = returnedData?.items?.filter((result) => result.link.includes(targetSubdomain))
  const remainingResults = returnedData?.items?.filter((result) => !filteredResults.includes(result));

  return (
    <div className='results-div h-full'>
      { !filteredResults ?
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-lg">Sorry, No Results Found</p>
        </div> :
        <div className="h-96 w-full overflow-auto p-5 sm:p-8 border-b-2">
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
      { filteredResults && <PaginationButtons activePage={activePage} navigationPageChange={navigationPageChange}/> }
    </div>
  );
}
