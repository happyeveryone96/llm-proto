// pages/Home.js
import React from "react";
import Card from "./Card";
import BasicSelect from "./BasicSelect";
import BasicTextField from "./BasicTextField";

function Home() {
  const [subject, setSubject] = React.useState("");
  const [concept, setConcept] = React.useState("");
  const [subjectText, setSubjectText] = React.useState("");
  const [conceptText, setConceptText] = React.useState("");
  const [difficultyText, setDifficultyText] = React.useState("");

  const handleSubjectChange = (event) => {
    const value = event.target.value;
    setSubject(value);
  };

  const handleConceptChange = (event) => {
    const value = event.target.value;
    setConcept(value);
  };

  const handleSubjectInputChange = (event) => {
    setSubjectText(event.target.value);
    setSubject("custom");
  };

  const handleConceptInputChange = (event) => {
    setConceptText(event.target.value);
    setConcept("custom");
  };

  const handleSubjectTextFieldChange = (event) => {
    setSubjectText(event.target.value);
  };

  const handleConceptTextFieldChange = (event) => {
    setConceptText(event.target.value);
  };

  const handleDifficultyTextFieldChange = (event) => {
    setDifficultyText(event.target.value);
  };

  const checkData = () => {
    if (subject === "" && subjectText === "") {
      alert("과목을 선택하거나 입력해주세요.");
      return false;
    } else if (concept === "" && conceptText === "") {
      alert("개념을 선택하거나 입력해주세요.");
      return false;
    } else if (difficultyText === "") {
      alert("난이도를 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!checkData()) {
      return;
    }
    // 서버로 데이터 전송
    try {
      //   const response = await fetch('http://your-server-endpoint', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       subject,
      //       concept,
      //       subjectText,
      //       conceptText,
      //       difficultyText,
      //     }),
      //   });
      //   const result = await response.json();
      console.log(
        "Server response:",
        subject,
        subjectText,
        concept,
        conceptText,
        difficultyText
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const subjectOptions = [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "history", label: "History" },
  ];

  const conceptOptions = [
    { value: "algebra", label: "Algebra" },
    { value: "geometry", label: "Geometry" },
    { value: "calculus", label: "Calculus" },
  ];

  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  return (
    <div className="home">
      <BasicSelect
        label="과목"
        options={subjectOptions}
        value={subject}
        onChange={handleSubjectChange}
        allowInput
        onInputChange={handleSubjectInputChange}
      />
      <BasicTextField
        label="과목을 입력해주세요."
        value={subjectText}
        onChange={handleSubjectTextFieldChange}
      />
      <BasicSelect
        label="개념"
        options={conceptOptions}
        value={concept}
        onChange={handleConceptChange}
        allowInput
        onInputChange={handleConceptInputChange}
      />
      <BasicTextField
        label="개념을 입력해주세요."
        value={conceptText}
        onChange={handleConceptTextFieldChange}
      />
      <BasicTextField
        label="난이도를 입력해주세요. ex) 초등학교 수준"
        value={difficultyText}
        onChange={handleDifficultyTextFieldChange}
      />
      <button onClick={handleSubmit}>문제 생성</button>
      <h1 className="header">Home Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;
