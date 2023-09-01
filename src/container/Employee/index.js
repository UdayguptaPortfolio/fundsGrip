import React, { useState } from "react";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import AuthLayout from "../../components/AuthLayout";
import { EmployeePortalWrap } from "./styled";
import { Section, StyledButton } from "../../components/Common/StyledButton";
import { employeeButtons } from "../constant";
import WorkBoard from "./WorkBoard";
import EmployeeCreation from "./EmployeeCreation";

const Index = () => {
  const [selectedButton, setselectedButton] = useState(employeeButtons[0]?.key);
  return (
    <>
      <LoadingBackdrop open={false} />
      <AuthLayout>
        <EmployeePortalWrap>
          <Section className="emp-btns-wrap">
            {employeeButtons?.map((item) => {
              const { name, key } = item || {};
              return (
                <StyledButton
                  padding="8px 15px"
                  fontWeight={600}
                  key={key}
                  onClick={() => setselectedButton(key)}>
                  {name}
                </StyledButton>
              );
            })}
          </Section>
          {selectedButton === "work-board" ? <WorkBoard /> : ""}
          {selectedButton === "emp-creation" ? <EmployeeCreation /> : ""}
        </EmployeePortalWrap>
      </AuthLayout>
    </>
  );
};

export default Index;
