describe('Amazon Prime Video Carousel', () => {
    it('captures movie titles and dynamic time intervals', () => {
        cy.visit('https://www.primevideo.com/storefront/ref=atv_hm_pri_c_9zZ8D2_me_hom?contentType=home&contentId=store');

        cy.get('div[class="hj1e0s _3+3zj7 eSOPph uryRTT"] ul[class="_70Gje9"] li')
            .should('have.length.above', 1)
            .as('carouselItems');
        const intervalBetweenItems = 10000;

        cy.get('@carouselItems').each(($tile, index) => {

            const movieTitle = $tile.find('[data-testid="image-link"]').text();
            if (index > 0) {
                cy.get('@lastTimestamp').then(lastTimestamp => {
                    const currentTime = Date.now();
                    const timeInterval = currentTime - lastTimestamp;
                    cy.log(`Time Interval: ${timeInterval} ms`);
                    cy.wrap(currentTime).as('lastTimestamp'); // Update last timestamp
                });
            } else {
                cy.wrap(Date.now()).as('lastTimestamp');
            }

            cy.log(`Movie: ${movieTitle}`);
            if (index < 11) {
                cy.wait(intervalBetweenItems);
                cy.get('@carouselItems').parent().trigger('scroll', { deltaX: 0, deltaY: 100 });
            }
            /*  if (index > 0) {
                  cy.wait(10000);
              }
  
              cy.log(`Movie: ${movieTitle}`);
  
            
              if (index < 11) { 
                  cy.get('div[class="hj1e0s _3+3zj7 eSOPph uryRTT"] ul[class="_70Gje9"] li').eq(index + 1);
              }*/
        });
    });
});
