document.addEventListener("DOMContentLoaded", () => {
  const subjectsContainer = document.getElementById("subjects");
  const calculateBtn = document.getElementById("calculateBtn");
  const clearBtn = document.getElementById("clearBtn");
  const gradeSelector = document.getElementById("gradeSelector");
  const totalScoreEl = document.getElementById("totalScore");
  const averageEl = document.getElementById("average");
  const gradeEl = document.getElementById("grade");

  // Subjects for each grade
  const grade7Subjects = [
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

  const grade9Subjects = [
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
    "សីលធម៌ ពលរដ្ឋវិជ្ជា",
  ];

  // Render Subject Input Fields
  const renderSubjects = (subjects) => {
    subjectsContainer.innerHTML = ""; // Clear existing subjects
    subjects.forEach((subject) => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject-item");
      subjectDiv.innerHTML = `
        <label for="${subject}">មុខវិជ្ជា ៖ ${subject}</label>
        <input type="number" id="${subject}" name="${subject}" min="0" max="100" value="0" required class="btn_subject"/>
      `;
      subjectsContainer.appendChild(subjectDiv);
    });
  };

  // Initialize with Grade 7 subjects
  renderSubjects(grade7Subjects);

  // Update Subjects on Grade Change
  gradeSelector.addEventListener("change", () => {
    const selectedGrade = gradeSelector.value;
    if (selectedGrade === "7") {
      renderSubjects(grade7Subjects);
    } else {
      renderSubjects(grade9Subjects);
    }
  });

  // Clear Button Event Listener
  clearBtn.addEventListener("click", () => {
    document.querySelectorAll("#subjects input").forEach((input) => {
      input.value = 0;
    });
    totalScoreEl.textContent = "0";
    averageEl.textContent = "0";
    gradeEl.textContent = "N/A";
  });

  // Calculate Button Event Listener
  calculateBtn.addEventListener("click", () => {
    let totalScore = 0;

    // Sum Scores
    const selectedGrade = gradeSelector.value;
    const currentSubjects =
      selectedGrade === "7" ? grade7Subjects : grade9Subjects;

    currentSubjects.forEach((subject) => {
      const score = parseFloat(document.getElementById(subject).value) || 0;
      totalScore += score;
    });

    // Get Max Score and Average Divisor
    const maxScore = selectedGrade === "7" ? 800 : 420;
    const averageDivisor =
      selectedGrade === "7"
        ? grade7Subjects.length + 1
        : grade9Subjects.length + 1;

    // Calculate Average
    const average = totalScore / averageDivisor;

    // Determine Grade
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

    // Update Results
    totalScoreEl.textContent = totalScore.toFixed(2);
    averageEl.textContent = average.toFixed(2);
    gradeEl.textContent = grade;
  });
});
