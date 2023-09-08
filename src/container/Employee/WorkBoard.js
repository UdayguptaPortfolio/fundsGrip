import React, { useState } from "react";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { workStates } from "../constant";
import { Section } from "../../components/Common/StyledButton";
import { AddCardButton, WorkBoardMainWrap, StyledToDoGrid } from "./styled";
import AddWorkCardModal from "../../components/Modals/AddWorkCardModal";
import { Grid } from "@mui/material";

const WorkBoard = () => {
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    showAddCardModal: false
  });
  const [taskData, setTaskData] = useState({});
  const [validation, setValidation] = useState({
    title: "",
    description: "",
    pan_number: ""
  });
  const [toDoData, setToDoData] = useState([]);

  const handleAddCard = (name) => {
    setSelectedCard((prev) => ({
      ...prev,
      name,
      showAddCardModal: true
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if (name === "title" && value !== "") {
      setValidation((prevState) => ({
        ...prevState,
        title: ""
      }));
    } else if (name === "description" && value !== "") {
      setValidation((prevState) => ({
        ...prevState,
        description: ""
      }));
    } else {
      setValidation((prevState) => ({
        ...prevState,
        pan_number: ""
      }));
    }
  };

  const handleSubmit = () => {
    if (!taskData.title) {
      setValidation((prevState) => ({
        ...prevState,
        title: "Title is necessary"
      }));
    }
    if (!taskData.description) {
      setValidation((prevState) => ({
        ...prevState,
        description: "Description is necessary"
      }));
    }
    if (!taskData.pan_number) {
      setValidation((prevState) => ({
        ...prevState,
        pan_number: "PAN Card is necessary"
      }));
    } else {
      setToDoData((prev) => [...prev, taskData]);
      handleCloseModal();
      setTaskData({});
    }
  };

  const handleCloseModal = () => {
    setSelectedCard((prev) => ({
      ...prev,
      showAddCardModal: false
    }));
    setValidation((prevState) => ({
      ...prevState,
      title: "",
      description: "",
      pan_number: ""
    }));
  };
  return (
    <>
      <WorkBoardMainWrap>
        <StyledTypography variant="h5" ml="10px" fontWeight={600} color={"#343b41"} mb={"30px"}>
          {"YOUR WORK BOARD"}
        </StyledTypography>
        <Section className="workstate-wrap">
          {workStates?.map((item) => {
            const { name, key } = item || {};

            return (
              <Section key={key} className="work-btn-wrap">
                <StyledTypography
                  variant="h6"
                  fontWeight={600}
                  color={"white"}
                  fontSize={"18px"}
                  padding="12px"
                  style={{
                    textAlign: "center"
                  }}>
                  {name}
                </StyledTypography>
                {name === "TO DO" && (
                  <Grid>
                    {toDoData?.map((item, index) => {
                      const { title, description } = item;
                      return (
                        <StyledToDoGrid key={index}>
                          <StyledTypography
                            variant="h6"
                            fontWeight={400}
                            color={"black"}
                            fontSize={"16px"}
                            padding="6px"
                            overflow={"hidden"}
                            whiteSpace={"nowrap"}
                            textOverflow={"ellipsis"}>
                            {title}
                          </StyledTypography>
                          <StyledTypography
                            variant="h6"
                            fontWeight={400}
                            color={"black"}
                            fontSize={"16px"}
                            padding="6px"
                            overflow={"hidden"}
                            whiteSpace={"nowrap"}
                            textOverflow={"ellipsis"}>
                            {description}
                          </StyledTypography>
                        </StyledToDoGrid>
                      );
                    })}
                  </Grid>
                )}
                <AddCardButton
                  onClick={() => {
                    handleAddCard(name);
                  }}>
                  + Add Card
                </AddCardButton>
              </Section>
            );
          })}
        </Section>
      </WorkBoardMainWrap>
      {selectedCard?.showAddCardModal ? (
        <AddWorkCardModal
          validation={validation}
          handleCloseModal={handleCloseModal}
          cardName={selectedCard?.name}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default WorkBoard;
