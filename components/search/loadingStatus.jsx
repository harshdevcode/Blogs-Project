import Icon from 'components/lucide-icon';

export default function LoadingStatus(){
  return(
    <div className='flex flex-col justify-center items-center w-full h-full gap-3'>
      <div role="status" className='animate-spin'>
          <Icon name="Loader2" color="#EB5424" size={50}/>
          <span className="sr-only">Loading...</span>
      </div>
      <h4 className="text-lg">Loading search results...</h4>
    </div>
  );
}