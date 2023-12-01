import { randomInt } from "crypto";
import prisma from "../../../utils/db_config";

export async function getSession(session_id: number) {
    let data = await prisma.session.findFirst({
        select: {
            id: true,
            created_at: true,
            username: true
        },
        where: {
            id: session_id
        }
    })
    return data
}

function generateRandomKey(){
    return randomInt(100000000,999999999)
}


export async function setSession(username: string){
    let random_key = generateRandomKey()
    
    // may not efficient
    let isAlreadyExist = true
    while (isAlreadyExist){
        let session = await getSession(random_key)
        // console.log(`session: ${session}`)
        // console.log(`isAlreadyExist: ${isAlreadyExist}`)
        if (session !== null){
            random_key = generateRandomKey()
        }
        else {
            isAlreadyExist = false
        }   
    }

    await prisma.session.create({
        data: {
            id: random_key,
            username: username
        }
    })

    return {
        'session_id': random_key,
        'message': 'Session has been created'
    }
}