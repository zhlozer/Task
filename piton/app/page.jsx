import { Inter,Roboto, Manrope } from 'next/font/google'
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Proposal from "@/components/Proposal";
import BlackContainer from '@/components/BlackContainer';
 
export default function Home() {
  return (
    <>
    
    <Hero/>
    <Intro/>    
    <BlackContainer/>
    <Proposal/>
    </>
  )
}