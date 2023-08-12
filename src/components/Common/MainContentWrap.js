import styled from "@emotion/styled";

export const MainContentWrap = styled.div`
  display: flex;
  width: calc(100% - 72px);
  vertical-align: top;
  margin-left: 0px;
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100%;
  background: #f4f5fc;
  margin-top: ${({ mt }) => mt};
`;
