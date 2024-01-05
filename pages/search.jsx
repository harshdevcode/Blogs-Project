import React from 'react';
import SearchResults from "components/searchresults";
import Head from 'next/head';
import Footer from '../components/footer';

export default function Search({ results }) {
    return (
      <>
        <Head/>
        <SearchResults results={results}/>
        <Footer/>
      </>
    );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";
  const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}