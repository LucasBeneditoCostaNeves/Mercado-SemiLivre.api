import { User } from "../entities/User"

type Override = Partial<User>

export const makeUser = ({ id, ...override }: Override) => {
    return new User({
        name: "User Test",
        email: "user.teste@gmail.com",
        password: "123456",
        status: true,
        // substituir por um profile válido
        profileId: "sasassa",
        ...override
    }, id)
}