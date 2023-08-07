'use client'
import React from 'react'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import InfoCard from '@/components/InfoCard/InfoCard'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <InfoCard></InfoCard>
    </>
  )
}
