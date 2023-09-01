import React, { useState } from "react";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { workStates } from "../constant";
import { Section } from "../../components/Common/StyledButton";
import { AddCardButton, WorkBoardMainWrap } from "./styled";
import AddWorkCardModal from "../../components/Modals/AddWorkCardModal";

const WorkBoard = () => {
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    showAddCardModal: false
  });

  const handleAddCard = (name) => {
    setSelectedCard((prev) => ({
      ...prev,
      name,
      showAddCardModal: true
    }));
  };

  const handleModal = () => {
    setSelectedCard((prev) => ({
      ...prev,
      showAddCardModal: false
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
        <AddWorkCardModal handleModal={handleModal} cardName={selectedCard?.name} />
      ) : (
        ""
      )}
    </>
  );
};

export default WorkBoard;
