var studentId;

const submitSolution = (() => {
  const URL = "https://sda-solutions.herokuapp.com";
  const getStudentId = () => {
    studentId =
      studentId ?? localStorage.getItem("studentId") ?? `${Math.random()}`;

    localStorage.setItem("studentId", studentId);

    return studentId;
  };

  const getArguments = async () => {
    const response = await fetch(`${URL}/arguments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  };

  const sendSolution = async (solution) => {
    const response = await fetch(`${URL}/responses?id=${getStudentId()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ solution }),
    });

    return await response.json();
  };

  return async (solutionCallback) => {
    const args = await getArguments();
    return sendSolution(solutionCallback(...args));
  };
})();
