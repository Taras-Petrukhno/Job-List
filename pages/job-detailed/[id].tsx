import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/JobDetailed.module.css'
import Map from "../../components/Map"
import {getPostedTime} from '../../components/JobList'

import {IJob} from '../../models' 

interface DynamicPageProps {
  currentJob: IJob
}

export default function DynamicPage({currentJob}: DynamicPageProps) {

    // console.log(currentJob)


    return (
       <main className="overflow-x-hidden">
          <article className="container mx-auto px-[15px] xl:pl-[104px] xl:pr-[15px] 2xl:pr-[80px]  pt-[24px] md:pt-[56px]">
            <div className="flex md:justify-between gap-[63px] md:gap-[40px] flex-col md:flex-row">
              <div className="md:max-w-[400px] lg:max-w-[793px] w-full flex flex-col">
                <div className="flex flex-col md:flex-row md:justify-between md:border-b-[1px] max-[767.98px]:mb-[24px] md:pb-[8px] md:border-secondary mb-[40px]">
                  <h1 className="font-proximaNova font-bold text-primary text-5xl max-[767.98px]:pb-[12px] max-[767.98px]:border-b-[1px] max-[767.98px]:border-secondary max-[767.98px]:mb-[24px]">Job Details</h1>
                   <div className="flex gap-6 font-roboto font-normal text-secondary text-lg">
                    <button  className={`${styles['header__btn']} ${styles['header__btn_bookmark']}`}>Save to my list</button>
                    <button className={`${styles['header__btn']} ${styles['header__btn_share']}`}>Share</button>
                   </div>
                  </div>
                  
                  <button className="self-start py-[18px] px-[30px] bg-dark font-proximaNova font-semibold text-xs text-white rounded-[8px] mb-8 uppercase max-[767.98px]:hidden">Apply now</button>
                  
                  <div>
                      <div className="flex flex-wrap justify-between items-end gap-[5px] md:gap-[7px] mb-[7px]">
                        <h2 className="md:max-w-[501px] w-full font-proximaNova font-bold text-3xl tracking-tightest text-primary">{currentJob.title}</h2>
                        <h2 className="font-proximaNova font-bold text-xl tracking-[-0.625px] text-primary order-1 md:order-none">{currentJob.salary} <span className=" font-roboto font-normal text-lg tracking-[-0.5625px] text-primary mt-1px"><br/>Brutto, per year</span></h2>
                        <p className="font-proximaNova font-normal text-lg tracking-[-0.5625px] text-secondary md:w-full">{getPostedTime(currentJob.updatedAt)}</p>
                      </div>
                       <p className="font-proximaNova font-normal text-lg tracking-[-0.5625px] text-primary mb-[40px]">{currentJob.description}</p>
                       <h2 className="font-proximaNova font-bold text-xl tracking-[-0.625px] text-primary mb-[12px]">Responsibilities</h2>
                       <p className="font-proximaNova font-normal text-lg tracking-[-0.5625px] text-primary mb-[40px]">Coming soon...</p>
                       <h2 className="font-proximaNova font-bold text-xl tracking-[-0.625px] text-primary mb-[12px]">Compensation & Benefits:</h2>
                       <p className="font-proximaNova font-normal text-lg tracking-[-0.5625px] text-primary">Our physicians enjoy a wide range of benefits, including:</p>
                       <ul className="mb-[40px]">
                        {currentJob.benefits.map((benefit) => (<li  key={benefit} className="relative before:content-[''] before:absolute before:w-[9px] before:h-[9px] before:bg-dark flex items-center before:left-[-19px]">{benefit}</li>))}
                       </ul>
                       
                       <button className="py-[18px] px-[30px] bg-dark font-proximaNova font-semibold text-xs text-white rounded-[8px] uppercase mb-[135px] md:mb-[85px] block mx-auto md:mx-0">Apply now</button>
                  </div>


                   <div className="md:mb-[85px] max-[767.98px]:order-2">
                    <h2 className="font-proximaNova font-bold text-primary text-5xl border-b-[1px] pb-[8px] border-secondary mb-[15px]">Additional info</h2>
                    <h2 className="font-roboto font-normal text-lg tracking-[-0.5625px] text-primary mb-[10px]">Employment type</h2>
                    <ul className="flex gap-2">
                      {currentJob.employment_type.map(type => (<li key={type} className="grow max-w-[222px] p-4 bg-[#A1B1DB] bg-opacity-30 text-[#55699E] text-center font-proximaNova font-bold text-base tracking-[-0.457143px] rounded-[8px] border-[#55699E] border-[1px] mb-[23px]">{type}</li>))}
                    </ul>
                    <h2 className="font-roboto font-normal text-lg tracking-[-0.5625px] text-primary mb-[10px]">Benefits</h2>
                    <ul className="flex gap-2">
                    {currentJob.benefits.map((benefit) => (<li key={benefit} className="grow max-w-[222px] p-4 bg-[#FFCF00] text-[#988B49] text-center font-proximaNova font-bold text-base tracking-[-0.457143px] rounded-[8px] border-[#FFCF00] bg-opacity-15 border-[1px] mb-[23px]">{benefit}</li>))}
                    </ul>
                   </div>

                   <div className="mb-[63px] md:mb-[100px] max-[767.98px]:order-1">
                    <div>
                       <h2 className="font-proximaNova font-bold text-primary text-5xl border-b-[1px] pb-[10px] md:pb-[8px] border-secondary md:mb-[15px] mb-[31px]">Attached images</h2>
                       <div className="flex gap-[10px]">
                         {currentJob.pictures.map((pictureUrl) => ( <Image key={pictureUrl} src={pictureUrl} alt="Job picture" width={200} height={115}  style={{maxWidth: '200px', height: 'auto', aspectRatio: '200 / 150'}} />))}
                       </div>
                      </div>
                    </div>
                    
                    <Link href={'/'} className="max-[767.98px]:order-3 max-[767.98px]:hidden">
                      <button className="uppercase font-proximaNova  font-semibold text-xs text-primary bg-[#384564] bg-opacity-15 rounded-[8px]  before:content-[url('../public/arrow-270.svg')]  before:mr-[19px]  before:align-middle pt-[18px] pr-[26px] pb-[16px] pl-[23px] relative left-[0px] min-[1199.98px]:left-[-90px] mb-[160px]">RETURN TO JOB BOARD</button>
                    </Link>
              </div>
            <div className="md:mr-[6px] md:w-[400px]">
              <h2 className="font-proximaNova font-bold text-primary text-5xl tracking-[0.4px] pb-10px border-b-[1px] border-secondary mb-[21px] md:hidden">Contacts</h2>
              <div className="flex flex-col gap-[7px] px-[62px] pt-[31px] pb-[28px] md:pb-[20px] bg-[#2A3047]  rounded-t-[8px] overflow-hidden text-[#E8EBF3] relative before:block before:absolute  before:h-[118.35%] before:aspect-square before:bg-[#202336] before:rounded-full before:top-[-5.5%] before:left-0 before:translate-x-[-28.2%]">
                <p className="relative font-proximaNova font-bold text-xl text-primary text-[#E7EAF0] tracking-[-0.625]">{currentJob.name}</p>
                <p className="relative font-proximaNova font-normal text-lg tracking-[-0.5625px] text-[#E8EBF3] before:content-[url('../public/map-pin.svg')] before:inline-block before:mr-[5px] before:w-[13px] before:h-[18px]">{currentJob.address}</p>
                <p className="relative font-proximaNova font-normal text-lg tracking-[-0.5625px] text-[#E8EBF3]">{currentJob.phone}</p>
                <p className="relative font-proximaNova font-normal text-lg tracking-[-0.5625px] text-[#E8EBF3]tive">{currentJob.email}</p>
              </div>
              <div className="w-full h-[218px] relative rounded-b-[8px] overflow-hidden">
                <Map coordinate={{lat: currentJob.location.lat, lng: currentJob.location.long}} />
              </div>
            </div>
            </div>
          </article>
       </main>
    )
}

export async function getStaticPaths() {

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

    const data = await response.json();

    const paths = data.map(({id}: {id: string}) => ({
        params: {id: id}
    }))
    // console.log(paths)
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  

export async function getStaticProps(context: any) {
    
    let currentJobId = context.params.id;

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
    let currentJob = jobList.find((job: IJob)=> {
        return job.id === currentJobId;
    })


  
    return {
      props: {currentJob},
    }
  }
  