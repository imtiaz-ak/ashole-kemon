import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import SearchBox from '../components/SearchBox'
import SearchResultCard from '../components/SearchResultCard'
import supabase from '../utils/supabase'


export default function Search() {
    const [institutions, setIntitutions] = useState([])
    
    const router = useRouter()

    useEffect(async () => {
        if (router.query){
            console.log(router.query['q'])
            console.log('make api request and render the elements now')
            console.log(`%${router.query['q']}%`)

            let { data: institutions, error } = await supabase
            .from('institutions')
            .select('*')
            .ilike('name', `%${router.query['q']}%`)

            setIntitutions(institutions)
        }
    }, [router])
    
    return (
        <div>
            <SearchBox />
            {
                institutions.map((item) => (
                    <SearchResultCard uuid={item.id} name={item.name} location={item.location} />
                ))
            }
            <div>
                <Link href='/institution/add'><a>Add institution</a></Link>
            </div>
        </div>
    )
}