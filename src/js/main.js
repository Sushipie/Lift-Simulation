function generateUI() {
  // Get the number of floors and lifts from the input fields.
  const numberOfFloors = document.getElementById("floors").value;
  const numberOfLifts = document.getElementById("lifts").value;

  console.log(numberOfFloors, numberOfLifts);

  document.getElementById("interface").innerHTML = ""; // Clear the interface div.

  const backButton = document.createElement("button"); // Button that reloads the page. Acts as a back button.
  backButton.innerHTML = "Back";
  backButton.addEventListener("click", () => {
    location.reload();
  });

  document.getElementById("liftSystem").appendChild(backButton);

  // Create the floors.
  for (let i = 0; i < numberOfFloors; i++) {
    const floor = document.createElement("div");
    floor.classList.add("floor");
    floor.id = `floor${i + 1}`;
    document.getElementById("liftSystem").appendChild(floor);
  }

  // Create the lifts.
  for (let i = 0; i < numberOfLifts; i++) {
    const lift = document.createElement("div");
    lift.classList.add("lift");
    lift.id = `lift${i + 1}`;
    document.getElementById("liftSystem").appendChild(lift);
  }
}
