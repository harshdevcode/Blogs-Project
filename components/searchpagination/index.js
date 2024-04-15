import Button from "components/button";

export default function PaginationButtons({activePage, navigationPageChange}) {
  const buttonLabels = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center items-center w-full gap-1 my-3">
      {buttonLabels.map((label, idx) => (
        <Button key={(idx * 10) + 1} text={label} variant={((idx * 10) + 1) === activePage ? 'secondary' : ''} onClick={() => navigationPageChange((idx * 10) + 1)} disabled={((idx * 10) + 1) === activePage}/>
      ))}
    </div>
  );
}