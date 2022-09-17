import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

import {convertHourStringToMinutes} from './utils/convertHourStringToMinutes'
import {convertMinutesToHourString} from './utils/convertMinutesToHourString'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/games', async(request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    
    if(games.length == 0){
        return response.status(204).json([])
    } else {
        return response.json(games)
    }
})

app.get('/games/:id/ads', async(request, response) => {
    const gameId:any = request.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
            weekDays: true,
            useVoiceChannel: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        },        
    })

    const adsTransformed = ads.map(ad => ({
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd)
    }))

    if(adsTransformed.length == 0){
        return response.status(204).json(adsTransformed)
    } else {
        return response.json(adsTransformed)
    }
})

app.get('/ads/:id/discord', async(request, response) => {
    const adId = request.params.id

    const ad = await prisma.ad.findUnique({
        select: {
            id: true,
            discord: true
        },
        where: {
            id: adId
        }
    })

    if(ad == null){
        return response.status(204).json()
    } else {
        return response.json(ad)
    }
})

app.post('/games/:id/ads', async(request, response) => {
    const gameId = request.params.id
    const data = request.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: data.name,
            yearsPlaying: data.yearsPlaying,
            discord: data.discord,
            hourStart: convertHourStringToMinutes(data.hourStart),
            hourEnd: convertHourStringToMinutes(data.hourEnd),
            useVoiceChannel: data.useVoiceChannel,
            weekDays: data.weekDays.join(',')
        }
    })
    return response.status(201).json(ad)
})


app.listen(3333)