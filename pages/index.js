import { useState } from 'react'
import Head from 'next/head'
import SearchBox from '../components/SearchBox'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import googleAnalytics from '../utils/googleAnalytics'

export default function Home() {

  return (
    <Layout>
      <googleAnalytics />
      <SearchBox homePage />
    </Layout>
  )
}
