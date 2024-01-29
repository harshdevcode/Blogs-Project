import {React, useState, useRef, useEffect} from 'react';
import SearchResults from 'components/searchresults';
import PaginationButtons from 'components/searchpagination';
import RecommendedSearches from 'components/search/recommendedSearches.jsx';
import LoadingStatus from 'components/search/loadingStatus.jsx';
import Icon from 'components/lucide-icon';
import Button from 'components/button';

export default function Search({ closeSearchDialog }) {
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);
  const [nonemptyResult, setNonemptyResult] = useState(false);
  const [error, setError] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    if (event.type === 'click' || event.key === 'Enter') {
      fetchData(inputRef.current.value, activePage);
      setSearchTerm(inputRef.current.value);
    }
  };

  const navigationPageChange = (newPage) => {
    fetchData(searchTerm, newPage);
    setActivePage(newPage);
  };

  const searchedRecommended = (searchedKey) => {
    inputRef.current.value = searchedKey;
    fetchData(searchedKey, 1);
    setSearchTerm(searchedKey);
  };

  const fetchData = async (searchTerm, start) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/blog/api/search?term=' + searchTerm + '&start=' + start);
      const key = await response.json();
      if(key.searchInformation.totalResults === "0"){
        setNonemptyResult(false);
      }
      else{
        setNonemptyResult(true);
      }
      setFetchedData(key);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 sm:items-center sm:p-0">
          <div className="flex flex-col relative rounded-lg bg-white shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-4xl" style={{minHeight: "50vh"}}>
            <div className="modal-heading flex justify-between items-center border-b-2 p-5 sm:p-8">
              <div className='flex w-full'>
                <input type='text' onKeyDown={handleChange} placeholder='Enter search term' ref={inputRef} className='input w-9/12 mr-2 text-sky-600 shadow-sm placeholder:text-sky-600 focus:outline-none bg-blue-50 focus:bg-blue-50 border-none ring-1 ring-inset ring-sky-500/10'></input>
                <Button text="Search" onClick={handleChange} variant="secondary" className="shadow"/>
              </div>
              <div className="modal-btncontainer flex items-center">
                <button onClick={closeSearchDialog}><Icon name="X" color="#EB5424" size={24}/></button>
              </div>
            </div>
            <div className="modal-body sm:flex grow bg-white border-b-2">
              <div className="modal-content border-t-2 sm:border-t-0 p-5 sm:p-8 h-96 w-full overflow-auto">
                  {loading ? (<LoadingStatus/>) : (
                    <div className='results-div h-full'>
                      { fetchedData ? <SearchResults returnedData={fetchedData}/> : (
                        <RecommendedSearches searchedRecommended={searchedRecommended}/>
                      ) }
                    </div>
                  )}
              </div>
            </div>
            {nonemptyResult && <PaginationButtons activePage={activePage} navigationPageChange={navigationPageChange}/>}
          </div>
        </div>
      </div>
    </div>
  );
}