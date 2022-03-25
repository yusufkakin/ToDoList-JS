const toDoList = [];

let questionprompt = prompt("What do you want do?");

while (questionprompt !== "q") {
  if (questionprompt === "new") {
    let questionprompt2 = prompt("What do you want to add?");
    toDoList.push(questionprompt2);
    console.log(`${questionprompt2} added to the list`);
  } else if (questionprompt === "list") {
      for(let i=0; i<toDoList.length; i++)
    console.log(i + ": " + toDoList[i]);
  } else if (questionprompt === "delete") {
    questionprompt3 = prompt("What do you want to delete?");
    toDoList.splice(questionprompt3, 1);
    console.log(`${questionprompt3} deleted from the list`);
  }
  questionprompt = prompt("What do you want do?");
}