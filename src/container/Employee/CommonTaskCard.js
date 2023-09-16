import React from "react";
import { StyledToDoGrid } from "./styled";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { Grid, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CommonTaskCard = (props) => {
  const { filteredData, handleUpdateCard, name, handleDeleteTask } = props || {};
  return filteredData?.length ? (
    <>
      <Grid>
        {filteredData?.map((item, index) => {
          const { title, description, _id } = item;
          return (
            <StyledToDoGrid
              key={index}
              onClick={() => {
                handleUpdateCard(name, _id);
              }}>
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
              <Tooltip title="Delete Task">
                <DeleteOutlineIcon
                  htmlColor="grey"
                  style={{
                    cursor: "pointer"
                  }}
                  onClick={(e) => handleDeleteTask(e, _id)}
                />
              </Tooltip>
            </StyledToDoGrid>
          );
        })}
      </Grid>
    </>
  ) : (
    <StyledTypography
      variant="h6"
      fontWeight={600}
      color={"red"}
      fontSize={"16px"}
      padding="6px"
      overflow={"hidden"}
      whiteSpace={"nowrap"}
      textAlign={"center"}
      textOverflow={"ellipsis"}>
      No Data Found.
    </StyledTypography>
  );
};

export default CommonTaskCard;
