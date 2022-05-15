var studentId;

studentId =
  studentId ?? localStorage.getItem("studentId") ?? `${Math.random()}`;
localStorage.setItem("studentId", studentId);

const sendSolution = (solution) => {
  fetch(`https://sda-solutions.herokuapp.com?id=${studentId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ solution }),
  });
};
