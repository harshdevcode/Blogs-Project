import { useRouter } from "next/router";
import Link from "next/link";
import Button from 'components/button';

export default function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-center gap-8 items-center mt-8">
      {startIndex >= 10 && (
        <Link passHref={true}
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className="searchPageBtn">
            <Button text="Previous" className="btn secondary" />
          </div>
        </Link>
      )}

      <Link passHref={true}
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="searchPageBtn">
          <Button text="Next" className="btn primary"/>
        </div>
      </Link>
    </div>
  );
}
