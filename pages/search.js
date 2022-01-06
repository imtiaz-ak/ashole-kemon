import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import SearchBox from '../components/SearchBox'
import SearchResultCard from '../components/SearchResultCard'
import supabase from '../utils/supabase'
import Layout from '../components/Layout'


export default function Search() {
    const [institutions, setIntitutions] = useState([])

    const router = useRouter()

    useEffect(async () => {
        if (router.query) {
            console.log(router.query['q'])
            console.log('make api request and render the elements now')
            console.log(`%${router.query['q']}%`)

            let { data: institutions, error } = await supabase
                .from('institutions')
                .select('*')
                .ilike('name', `%${router.query['q']}%`)

            setIntitutions(institutions)
            console.log(institutions);
        }
    }, [router])

    return (
        <Layout>
            <SearchBox />
            {institutions?.length == 0 ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'red',
                    textAlign: 'center'
                }}>
                    <h3 className='my-3 mb-4' style={{ fontWeight: '400' }}>No institution found. Try searching with a different keyword or</h3>
                    <Link href='/institution/add'><button className='btn btn-success mb-3'>Add New Institution</button></Link>
                </div>
            ) : null}


            <div className='row' style={{ justifyContent: 'center' }}>
                {
                    institutions.map((item) => (
                        <SearchResultCard
                            uuid={item.id}
                            name={item.name}
                            location={item.location}
                            rating={item.rating} />
                    ))
                }
            </div>
        </Layout>
    )
}