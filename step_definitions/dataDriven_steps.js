const assert = require("assert");
const { I } = inject();

let res;
Given("that I try to access an incorrect URL", async () => {
  res = await I.sendGetRequest(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=098734232"
  );
});

Then("I should receive a status code from the API", () => {
  assert.equal(res.status, 404);
});

let result;
Given("I have the {word}", async (endpoint) => {
  result = await I.sendGetRequest(endpoint);
});

Then("I should receive a {word} from the endpoint", (statusCode) => {
  assert.equal(statusCode, result.status);
});
