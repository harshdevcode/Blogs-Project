import React, {useState, useRef} from 'react';
import SearchResults from 'components/searchresults';
import RecommendedSearches from 'components/search/recommendedSearches.jsx';
import Spinner from 'components/spinner';
import Icon from 'components/lucide-icon';
import Button from 'components/button';
import useFetch from 'hooks/useFetch';

export default function Search({ closeSearchDialog }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);
  const inputRef = useRef(null);
  const {loading, data: fetchedData, error, start} = useFetch();

  const handleChange = (event) => {
    if (event.type === 'click' || event.key === 'Enter') {
      fetchResults(event.target.value, activePage);
    }
    setSearchTerm(event.target.value);
  };

  const onSearch = () => {
    fetchResults(searchTerm, activePage);
  }

  const fetchResults = (_searchTerm, _activePage) => {
    start('/blog/api/search', 'get', null, null, `term=${_searchTerm}&start=${_activePage}`);
  }

  const navigationPageChange = (newPage) => {
    fetchResults(searchTerm, newPage);
    setActivePage(newPage);
  };

  const searchedRecommended = (searchedKey) => {
    inputRef.current.value = searchedKey;
    fetchResults(searchedKey, 1);
    setSearchTerm(searchedKey);
  };

  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 sm:items-center sm:p-0">
          <div className="flex flex-col relative rounded-lg bg-white shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-4xl" style={{minHeight: "50vh"}}>
            <div className="modal-heading flex justify-between items-center border-b-2 p-5 sm:p-8">
              <div className='flex w-full'>
                <input type='text' onKeyDown={handleChange} onChange={handleChange} value={searchTerm} placeholder='Enter search term' ref={inputRef} className='input w-9/12 mr-2 text-sky-600 shadow-sm placeholder:text-sky-600 focus:outline-none bg-blue-50 focus:bg-blue-50 border-none ring-1 ring-inset ring-sky-500/10'></input>
                <Button text="Search" onClick={onSearch} variant="secondary" className="shadow"/>
              </div>
              <div className="modal-btncontainer flex items-center">
                <button onClick={closeSearchDialog}><Icon name="X" color="#EB5424" size={24}/></button>
              </div>
            </div>
            <div className="modal-body sm:flex grow bg-white border-b-2 w-full">
              <div className="modal-content border-t-2 sm:border-t-0 w-full">
                {loading ? (
                  <div className='flex justify-center items-center h-full'>
                    <Spinner variant='secondary' size="w-12"/>
                  </div>) : (
                  <>
                    { fetchedData ? <SearchResults returnedData={fetchedData} activePage={activePage} navigationPageChange={navigationPageChange}/> : (
                      <RecommendedSearches searchedRecommended={searchedRecommended}/>
                    ) }
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}