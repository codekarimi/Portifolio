import Hero from '@/components/Hero'
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React from 'react'
// import Grid from '@/components/Grid';
import RecentProject from '@/components/RecentProject';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';

const page = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
      <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid/> */}
        <RecentProject/>
        <Clients />

        // <Experience />
        {/* // <Approach /> */}
        // <Footer /> 
      </div>
    </main>
  )
}

export default page