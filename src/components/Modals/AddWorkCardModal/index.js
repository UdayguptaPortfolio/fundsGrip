import { Paragraph } from "../../Common/StyledButton";
import { StyledTypography } from "../../Common/StyledTypography";
import { StyledButton } from "../../Common/StyledButton";
import {
  StyledDialog,
  DefaultFormGroup,
  StyledLabel,
  StyledInput,
  CancelBtn,
  StyledTitle,
  StyledTextareaAutosize
} from "./styled";
import VideoLabelOutlinedIcon from "@mui/icons-material/VideoLabelOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { addNewTask } from "../../../container/constant";
import React, { useState } from "react";
const AddWorkCardModal = (props) => {
  const { cardName, handleCloseModal, handleChange, handleSubmit, validation } = props || {};
  const [showComments, setShowComments] = useState(true);
  const [text, setText] = React.useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleComments = () => {
    setShowComments(false);
  };
  return (
    <StyledDialog open={true} maxWidth="sm" fullWidth>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "flex-start"
          }}>
          <VideoLabelOutlinedIcon
            htmlColor="#a1bdd9"
            fontSize="small"
            style={{
              marginTop: "5px"
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}>
            <StyledTypography fontWeight={600} color={"#343b41"} fontSize="20px">
              Task
            </StyledTypography>
          </div>
        </div>
        <div>
          <CloseOutlinedIcon
            htmlColor="grey"
            fontSize="large"
            style={{
              cursor: "pointer"
            }}
            onClick={() => handleCloseModal()}
          />
        </div>
      </div>
      {cardName === "TO DO" && (
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
          <DialogContent sx={{ pl: "50px" }}>
            <StyledTitle
              id="responsive-dialog-title"
              letterSpacing="8px"
              fontSize="28px"
              padding="20px 0px">
              CREATE NEW TASK
            </StyledTitle>
            <DialogContentText>
              {addNewTask?.map((item, index) => {
                const { label, name, type, required } = item || {};
                const error = validation[name] || "";
                return (
                  <Grid item xs={name === "pan_number" ? 4 : 12} key={index}>
                    <DefaultFormGroup>
                      <StyledLabel htmlFor={name}>{label}</StyledLabel>
                      {name === "title" || name === "pan_number" ? (
                        <>
                          <StyledInput
                            name={name}
                            id={name}
                            variant="outlined"
                            focused={false}
                            onChange={handleChange}
                            type={type}
                            required={required}
                          />
                          {error && ( // Display the error message if it exists
                            <Typography color={"red"} fontSize="12px" marginBottom="20px">
                              {error}
                            </Typography>
                          )}
                        </>
                      ) : (
                        <>
                          <StyledTextareaAutosize
                            minRows={3}
                            maxRows={5}
                            name={name}
                            onChange={handleChange}
                          />
                          {name === "description" &&
                            error && ( // Display the error message for description
                              <Typography color={"red"} fontSize="12px" marginBottom="20px">
                                {error}
                              </Typography>
                            )}
                        </>
                      )}
                    </DefaultFormGroup>
                  </Grid>
                );
              })}
              {/* <Grid>
                <Grid>
                  {showComments ? (
                    <StyledButton mt="30px" mb={10} onClick={handleComments}>
                      Add Comments
                    </StyledButton>
                  ) : (
                    <StyledButton mt="30px" mb={10} onClick={handleComments}>
                      Save Comments
                    </StyledButton>
                  )}
                </Grid>
                <Grid>
                  {!showComments && (
                    <StyledTextareaAutosize
                      rows={3}
                      onChange={handleTextChange}
                    />
                  )}
                </Grid>
              </Grid> */}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "space-around" }}>
            <CancelBtn sx={{ fontWeight: "bold" }} onClick={handleCloseModal}>
              CANCEL
            </CancelBtn>
            <CancelBtn sx={{ fontWeight: "bold" }} onClick={handleSubmit}>
              CREATE
            </CancelBtn>
          </DialogActions>
        </Grid>
      )}
    </StyledDialog>
  );
};

export default AddWorkCardModal;
