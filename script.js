document.getElementById("clearBtn").addEventListener("click", function () {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  const subjectsContainer = document.getElementById("subjects");
  const calculateBtn = document.getElementById("calculateBtn");
  const totalScoreEl = document.getElementById("totalScore");
  const averageEl = document.getElementById("average");
  const gradeEl = document.getElementById("grade");

  // Create subject input fields
  const subjectNames = [
    "សរសេរតាមអាន",
    "តែងសេចក្តី",
    "គណិតវិទ្យា",
    "រូបវិទ្យា",
    "គីមីវិទ្យា",
    "ភូមិវិទ្យា",
    "ប្រវត្តិវិទ្យា",
    "ជីវវិទ្យា",
    "ផែនដីវិទ្យា",
    "ភាសាអង់គ្លេស",
    "ព័ត៌មានវិទ្យា",
    "អប់រំសុខភាព",
    "កីឡា",
    "សីលធម៌ ពលរដ្ឋវិជ្ជា",
    "គេហវិទ្យា",
  ];
  subjectNames.forEach((subject) => {
    const subjectDiv = document.createElement("div");
    subjectDiv.innerHTML = `
      <label for="${subject}">មុខវិជ្ជា​ ៖ ${subject}</label>
      <input type="number" id="${subject}" name="${subject}" min="0" max="100" value="0" required class="btn_subject">
    `;
    subjectsContainer.appendChild(subjectDiv);
  });

  // Calculate button event listener
  calculateBtn.addEventListener("click", () => {
    let totalScore = 0;

    // Sum scores
    subjectNames.forEach((subject) => {
      const score = parseFloat(document.getElementById(subject).value) || 0;
      totalScore += score;
    });

    // Calculate average
    const average = totalScore / 16;

    // Determine grade
    const maxScore = 800; // Max possible score for 16 subjects
    let grade;
    if (totalScore >= 0.9 * maxScore) {
      grade = "A";
    } else if (totalScore >= 0.8 * maxScore) {
      grade = "B";
    } else if (totalScore >= 0.7 * maxScore) {
      grade = "C";
    } else if (totalScore >= 0.6 * maxScore) {
      grade = "D";
    } else if (totalScore >= 0.5 * maxScore) {
      grade = "E";
    } else {
      grade = "F";
    }

    // Update results
    totalScoreEl.textContent = totalScore.toFixed(2);
    averageEl.textContent = average.toFixed(2);
    gradeEl.textContent = grade;
  });
});
