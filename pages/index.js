import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBox from '../components/SearchBox'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
export default function Home() {

  return (
    <Layout>
      <SearchBox homePage />
    </Layout>
  )
}
