import { Given, When, Then } from '@cucumber/cucumber';
import * as assert from 'node:assert';
const userList = [];

Given('l\'utilisateur donne le nom de son projet', async (projet) => {
   console.log(projet)
});

When(`il choisi les configurations de ce projet`, async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('il choisi les configurations de ce projet :', async (dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});