//importing pakages
import {Redis} from 'ioredis'

//configure redis client
const redisClient = ()=>{
    if(process.env.REDIS_URL){
        console.log('Redis Connected')
        return process.env.REDIS_URL
    }
    throw new Error('Redis connection failed')
}

export default redisClient