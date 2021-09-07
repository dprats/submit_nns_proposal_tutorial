import { submit_nns_proposal_tutorial } from "../../declarations/submit_nns_proposal_tutorial";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with submit_nns_proposal_tutorial actor, calling the greet method
  const greeting = await submit_nns_proposal_tutorial.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
