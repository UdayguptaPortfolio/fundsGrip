import styled from "@emotion/styled";

export const EmployeePortalWrap = styled.div`
  padding: 90px 24px 24px 24px;
  margin-bottom: 100vh;

  .emp-btns-wrap {
    padding: 24px 0px;
    display: flex;
    gap: 24px;
  }
`;

export const WorkBoardMainWrap = styled.div`
  .workstate-wrap {
    display: flex;
    gap: 12px;
  }
  .work-btn-wrap {
    width: 100%;
    background: #3e50b8;
    max-width: 18%;
    border-radius: 12px;
    bo-shadow: var(--ds-shadow-raised, 0 1px 1px #091e4240, 0 0 1px #091e424f);
  }
`;

export const AddCardButton = styled.button`
  width: 95%;
  background: transparent;
  border: none;
  text-align: start;
  color: aliceblue;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
  &:hover {
    background: grey;
  }
`;
