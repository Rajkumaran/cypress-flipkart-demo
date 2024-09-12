class ApiPages{

    getusers(){
        cy.request(
            {
                method:'GET',
                url:'https://reqres.in/api/users?page=2',
                body: {} 
            }
        ).then((response) => {
            response.body.data.forEach(user => {
                expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
                expect(user.email).to.match(/@reqres\.in$/);
                expect(user.avatar).to.match(/^https:\/\/reqres\.in\/img\/faces\/\d+-image\.jpg$/);
              });
            // Validate the status code
            expect(response.status).to.eq(200);
            // Find the user with id 10
            const user = response.body.data.find(user => user.id === 10);            
            // Assert that the user data matches the expected values
            expect(user).to.exist; // Ensure the user is found
            expect(user.id).to.eq(10);
            expect(user.email).to.eq('byron.fields@reqres.in');
            expect(user.first_name).to.eq('Byron');
            expect(user.last_name).to.eq('Fields');
            expect(user.avatar).to.eq('https://reqres.in/img/faces/10-image.jpg');
        });
        cy.log('====getusers=====')
    }

}
export default ApiPages;