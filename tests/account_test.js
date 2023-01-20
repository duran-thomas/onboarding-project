const r_ship = Math.floor(Math.random() * 5) + 1

Feature('Guestbook');
    
Scenario('I can verify that I am on the correct obit',  ({ I }) => {
    // Given I am on a Janus obituary page
    I.amOnPage('/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379');
    // Then I should see her name in the heading
    I.see('Virginia','.Heading-sc-4h3nqe-0')
});
Scenario('I can add an entry to the guestbook',  ({ I }) => {
    // Given I am on a Janus obituary page
    I.amOnPage('/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379');
    // When I scroll to her guestbook
    I.scrollIntoView('#guestbook')
    // Then I should be able to add an entry to the guestbook
    I.fillField('textarea[name=_GuestbookForm_Message]', 'Sorry for your loss')
    I.click(`div.Box-sc-ucqo0b-0.jjAWvY > div > div:nth-child(${r_ship}) > button`)
    I.fillField('input[name=_GuestbookForm_From]', 'Duran')
    I.fillField('input[name=_GuestbookForm_Email]', 'dthomas@qualityworkscg.com')
    I.click('div.Box-sc-ucqo0b-0.cbNzut > div.Box-sc-ucqo0b-0.Flex-sc-d1l2vy-0.fsrkdX > button')
});
