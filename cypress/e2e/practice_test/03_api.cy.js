import { userData, bookingUpdateData } from "../../data/data";

describe("GET Request Tests", () => {
    it("should retrieve data from the API", () => {
        const specificBookingId = 154;
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("array").and.not.to.be.empty;

            const firstBookingId = response.body[0].bookingid;
            expect(firstBookingId).to.be.a("number");
            expect(firstBookingId).equal(specificBookingId);

        });
    });

});

describe.only("POST and PUT Requests with Token", () => {
    it.only("should authenticate, get token, and use it for PUT request", () => {
        cy.request("POST", "https://restful-booker.herokuapp.com/auth", userData)
            .its("body.token").should("exist")
            .then((token) => {
                cy.request({
                    method: "PUT",
                    url: "https://restful-booker.herokuapp.com/booking/1",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Cookie": `token=${token}`
                    },
                    body: bookingUpdateData
                }).should("have.property", "status", 200);
            });
    });
});


