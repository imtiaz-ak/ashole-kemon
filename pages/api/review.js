import supabase from '../../utils/supabase'
import md5 from 'md5'

const SALT = process.env.SALT
const SERVER_PASSWORD = process.env.SERVER_PASSWORD
const ROUNDS = 3

module.exports = async (req, res) => {

    const ip = req.haeders['x-vercel-forwarded-for']
    const user_agent = req.headers['user-agent']
    const for_institution = req.body['for_institution']
    const rating = parseInt(req.body['rating'])
    const pros = req.body['pros']
    const cons = req.body['cons']

    const hash_text = (rawText) => {
        let hashed = md5(rawText + SALT);
        for (let i = 0; i <= ROUNDS; i++) {
            hashed = md5(hashed);
        }
        return hashed
    }

    const hashed_ip = hash_text(ip)
    const hashed_user_agent = hash_text(user_agent)

    const { data, error } = await supabase
    .from('reviews')
    .insert([
        { for_institution: for_institution, rating: rating, pros:pros, cons:cons, server_password:SERVER_PASSWORD, published:false, hashed_ip:hashed_ip, hashed_user_agent:hashed_user_agent },
    ])

    res.status(200).send()
}