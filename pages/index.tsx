import Head from 'next/head'

import {useEffect, useState} from "react"

import JobList from '../components/JobList'
import Pagination from '../components/Pagination'

import {IJob} from '../models'

interface HomeProps {
  jobList: IJob[]
}

export default function Home({jobList}: HomeProps) {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const [jobPerPage, setJobPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  
  function paginate(currentPage: number) {
    setCurrentPage(currentPage)
  }

  function paginateForward() {
    setCurrentPage((prev) => {
      if (prev + 1 > Math.ceil(jobs.length / jobPerPage)) {
        return prev
      }
      return (prev + 1)
    })
  }

  function paginateBackward() {
    setCurrentPage((prev) => {
      if (prev - 1 < 1) {
        return prev;
      }
      return (prev - 1);
    })
  }
  // Find test on TypeScript
  
  useEffect(() => {
    setJobs(jobList);
  }, [])
  
  let lastIndexCurrentPage = jobPerPage * currentPage;
  let firstIndexCurrentPage = lastIndexCurrentPage - jobPerPage;
  let visibleJobs = jobs.slice(firstIndexCurrentPage, lastIndexCurrentPage);

  return (
    <>
      <Head>
        <title>Job list</title>
        <meta name="description" content="Job list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className='flex flex-col min-h-[100vh]'>
      <main className='bg-lilac pt-4 pb-16 grow'>
        <JobList jobs={visibleJobs}/>
        <Pagination 
        itemPerPage={jobPerPage} 
        totalItemCount={jobs.length} 
        paginate={paginate} 
        paginateForward={paginateForward}
        paginateBackward={paginateBackward}
        currentPage={currentPage} />
      </main>
    </div>

    </>
  )
}

export async function getStaticProps(context: any) {

  // API gives job list
 let url1: string = process.env.JOB_LIST_API_URL!;
 let token1 = process.env.JOB_LIST_API_TOKEN;

  const response = await fetch(url1, {
    headers: {
      'Authorization': `Bearer ${token1}`
    }
  });

  // offline
  // const response = await fetch('http://localhost:3000/api/offline');


  const jobList = await response.json();


   // API gives reverse geocoding info

  //  let url2 = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
  //  let apiKey = ``; //ENTER API KEY HERE

  //  await Promise.all(jobList.map(async (job) => {
  //   let preparedUrl = `${url2}${job.location.lat},${job.location.long}&key=${apiKey}`;
  //   const response =  await fetch(preparedUrl);
  //   const rgc = await response.json();
  //   job.rgc = rgc.results[0].address_components;
  // }))

  return {
    props: {jobList}, // will be passed to the page component as props
  }
}
