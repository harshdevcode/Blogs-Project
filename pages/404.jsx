import Button from 'components/button';
import Link from 'next/link';

const PageNotFound = () => {
    return (
        <main className='w-full h-full flex pt-header'>
            <section className='flex-1 flex flex-col items-center justify-center p-5 mt-5'>
                <h1 className='text-[128px] lg:text-[228px] font-semibold'>404</h1>
                <h1 className='display text-accent'>Page not found</h1>
                <p className='mt-1 caption text-center'>
                    Sorry, the page you have requested could not be found
                </p>
                <div className='w-full flex flex-col items-stretch gap-4 mt-10 sm:flex-row sm:w-auto'>
                    <Link href='/'>
                        <Button text='Back to Home' className='w-full' />
                    </Link>
                    <Link href='https://www.miniorange.com/contact'>
                        <Button text='Contact us' variant='secondary' className='w-full' />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default PageNotFound;
