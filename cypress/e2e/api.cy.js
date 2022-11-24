describe("API tests", () => {
  it("Should create a user", () => {
    cy.createUser().then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });
  it("Should edit a user", () => {
    cy.createUser();
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/MisterSmith",
      body: {
        id: 11,
        username: "MisterSmith",
        firstName: "Mister",
        lastName: "Ivanov",
        email: "smith@mail.com",
        password: "111",
        phone: "+7 232 323 1111",
        userStatus: 0,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should delete a user", () => {
    cy.createUser();
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/MisterSmith",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });
});
