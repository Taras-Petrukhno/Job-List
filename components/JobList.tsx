import styles from '../styles/JobList.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { IJob } from '../models'

interface JobListProps {
  jobs: IJob[]
}

export default function JobList({jobs}: JobListProps) {

  
    return (
        <ul className="container mx-auto flex flex-col gap-2 mb-[50px]">
        {jobs?.map(job => 
          <li key={job.id} >
            <Link className={'p-[16px] md:px-[16px] md:py-[24px] rounded-lg  md:bg-white bg-[#EFF0F5] flex  gap-[26px]'+ styles.job__item} href={`/job-detailed/${job.id}`}>
                    <div className='relative  items-start flex flex-col justify-center md:justify-start mr-[18px] md:mr-[26px]'>
                        <Image src={job.pictures[0]} width={85} height={85} className="aspect-square rounded-full overflow-hidden relative  translate-y-[-38%] md:translate-y-0" alt="Job image"  />
                    </div>
                <div className='flex gap-6 flex-col md:flex-row w-full'>
                    <div className='flex flex-col gap-2 md:order-1 order-2'>
                        <h2 className='font-proximaNova font-bold text-primary text-xl'>{job.title}</h2>
                        <p className='font-proximaNova font-normal text-secondary text-base tracking-wide'>{job.name}</p>
                        <div className={`font-proximaNova font-normal text-secondary text-base tracking-wide ${styles.job__location}`}>{job.address}</div>
                    </div>
                    <div className='md:ml-auto flex gap-5 md:order-2 order-1 justify-between md:justify-start'>
                        <div className= "w-[108px] flex justify-center items-center text-center text-secondary">Rating coming soon...</div>
                        <div className='h-full flex flex-col justify-between items-end'>  
                             <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/bookmark.svg`} alt="Bookmark" width={32} height={32}  className="hidden md:block"/>
                             <p className='font-proximaNova font-normal text-base tracking-wide text-secondary'>{getPostedTime(job.updatedAt)}</p>
                        </div>
                    </div>
                </div>
            </Link> 
          </li>
        )}
        </ul>
    )
}

export function getPostedTime(timeString: string = new Date().getTime().toString()) {
     
  let diff = new Date(new Date().getTime() - new Date(timeString).getTime());

   let years = diff.getFullYear() - 1970;
   if (years >= 1) {
    return `Posted ${years} years ago`

   } else {
      let mounts = new Date().getMonth() - new Date(timeString).getMonth();
      if(mounts > 0) {
        return `Posted ${mounts} mounts ago`;

      } else {
          let days = Math.floor(diff.getTime() / 1000 / 60 / 60 / 24); 
          if(days > 0) {
            return `Posted ${days} days ago`;

          } else {
            let hours = Math.floor(diff.getTime() / 1000 / 60 / 60);
             if (hours > 0) {
              return `Posted ${hours} hours ago`;

            } else {
                let minutes = Math.floor(diff.getTime() / 1000 / 60);
                if (minutes > 0) {
                  return `Posted ${minutes} minutes ago`;

                } else {
                  let seconds = Math.floor(diff.getTime() / 1000);
                  return `Posted ${seconds} seconds ago`;
                }
          }
      }
  }
}
  }