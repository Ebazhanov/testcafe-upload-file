import { Selector } from 'testcafe';

fixture`Upload PDF file`
    .page `https://app.comatch.com/en/registry/consultant`;

test('Search for credit', async t => {
    await t
        .typeText('[name="email"]', Math.random().toString(36) + '@test.com')
        .typeText('[name="password"]', 'Comatch1')
        .click('[type="submit"]')
        .wait(3000)
        .setFilesToUpload('.Panel__contents .LinkedInProfileFields input', [
            '/Users/evgeny/WebstormProjects/testcafe-upload-file/uploads/Harman.pdf'
        ])
        .wait(30000)
});
