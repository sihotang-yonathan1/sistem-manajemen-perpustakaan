import prisma from "../../../utils/db_config";

export async function loginAccount(username: string, password: string){
    let data = await prisma.account.findUnique({
        select: {
            id: true,
            username: true,
            role: true
        },
        where: {
            username: username
        }
    })
    return data
}