import prisma from "@/app/utils/db_config";

export async function getAccountInfoByUsername(username: string){
    let data: {
        id: number,
        username: string,
        role: string
    }[] | [] = await prisma.$queryRaw`
        SELECT account.id, account.username, account.role
        FROM account
        WHERE account.username = ${username}
    `

    return data
}

export async function getAllAccountInfo(){
    let data = await prisma.account.findMany({
        select: {
            id: true,
            username: true,
            role: true,
        }
    })
    return data ?? []
}

export async function getAccountInfo(user_id: number){
    let data = await prisma.account.findUnique({
        select: {
            id: true,
            username: true,
            role: true
        },
        where: {
            id: user_id 
        }
    })
    return data
}

export  async function AddAccount(username: string, password: string, role: string = 'user'){
    const userList = await getAccountInfoByUsername(username)
    if (userList.filter(value => value.username === username).length > 0){
        return {
            'message': 'User already exist'
        }
    } else {
        await prisma.$executeRaw`
            INSERT INTO account (username, password, role)
            VALUES (${username}, ${password}, ${role})
        `
        return {
            'message': 'User successfully added'
        }
    }
    
}

export async function deleteAccountByUsername(username: string){
    const userList = await getAccountInfoByUsername(username)
    let response;
    if (userList.filter(
        value => value.username === username)
        .length !== 0){
        await prisma.$executeRaw`
            DELETE FROM account WHERE username = ${username}
        `
        response = {
            'message': 'Account successfully deleted'
        }
    }
    else {
        response = {
            'message': 'Account failed to delete'
        }
    }
    return response
}

// only for uodate password and role
export async function updateAccount(username: string, password: string, role: string){
    const accounts = await getAccountInfoByUsername(username)
    
    let response;
    if (accounts.filter(value => value.username).length !== 0){
        await prisma.$executeRaw`
            UPDATE account
            SET password = ${password}, role = ${role}
            WHERE username = ${username}
        `
        response = {
            'message': 'Account successfully updated'
        }
    }
    else {
        response = {
            'message': 'Account failed to update the data'
        }
    }
    return response
}