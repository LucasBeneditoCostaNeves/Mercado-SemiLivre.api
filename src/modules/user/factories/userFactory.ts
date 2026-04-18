import { User } from "../entities/User"

type Override = Partial<User>

const TEST_PROFILE_ID = "00000000-0000-4000-8000-000000000001"

export const makeUser = ({ id, ...override }: Override) => {
    return new User({
        name: "User Test",
        email: "user.teste@gmail.com",
        password: "123456",
        status: true,
        profileId: TEST_PROFILE_ID,
        ...override
    }, id)
}