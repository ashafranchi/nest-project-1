import { Groomer } from "../../schemas/groomer.schema";

export const groomerStub = (): Groomer => {
    return {
        groomerName: 'Sally',
        email: 'example@test.com',
        age: 45,
        allergies: ['tree nuts'],
        starRating: 4,
        daysOff: ['Wednesday', 'Saturday'],
        overtimeHours: 1.5
    }
}