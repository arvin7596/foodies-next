import sql from "better-sqlite3"


const db = sql('meals.db')

export async function getMeals(params) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // throw new Error("Error")
    return db.prepare("SELECT * FROM meals").all()
}