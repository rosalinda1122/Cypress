import loginPage from '../pages/LoginPage.js'

describe("User can visit GOIT page", () => {
    beforeEach("Go to page", () => {
        loginPage.visit();
    })

    it("First log in", () => {
        loginPage.login("user888@gmail.com", "11234567890")
    })
})