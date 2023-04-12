import newAccount from "../PageObject/createAccount.page.cy";

describe("New Account", function () {
    it("Create a New Account", function () {

        const NA = new newAccount();
        NA.navigate();
        NA.c_acc();
        NA.D0B();
    })
})