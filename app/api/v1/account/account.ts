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

export async function deletAccountByUsername(username: string){
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