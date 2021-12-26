import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBox from '../components/SearchBox'
import styles from '../styles/Home.module.css'
export default function Home() {
  
  return (
    <div>
      <SearchBox />
    </div>
  )
}
