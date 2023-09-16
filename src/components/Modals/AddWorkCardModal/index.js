import { Paragraph, Section } from "../../Common/StyledButton";
import { StyledTypography } from "../../Common/StyledTypography";
import { StyledButton } from "../../Common/StyledButton";
import {
  StyledDialog,
  DefaultFormGroup,
  StyledLabel,
  StyledInput,
  CancelBtn,
  StyledTitle,
  StyledTextareaAutosize,
  TaskCreationFieldWrap
} from "./styled";
import VideoLabelOutlinedIcon from "@mui/icons-material/VideoLabelOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Grid, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from "@mui/material";
import { DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { addNewTask, statusCode } from "../../../container/constant";
import React, { useState } from "react";
import moment from "moment";
const AddWorkCardModal = (props) => {
  const {
    cardName,
    handleCloseModal,
    handleChange,
    handleSubmit,
    validation,
    taskData,
    selectedCard
  } = props || {};
  const [showComments, setShowComments] = useState(true);
  const [text, setText] = React.useState("");
  const { update } = selectedCard || {};

  const { createdAt, updatedAt } = taskData || {};

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleComments = () => {
    setShowComments(false);
  };
  return (
    <StyledDialog open={true} fullWidth>
      <Section style={{ width: "100%" }}>
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
              <StyledTypography fontWeight={400} color={"#343b41"} fontSize="14px">
                {cardName}
              </StyledTypography>
              {update ? (
                <>
                  <StyledTypography fontWeight={400} color={"#343b41"} fontSize="14px">
                    Created At:{moment(createdAt).format("lll")}
                  </StyledTypography>
                  <StyledTypography fontWeight={400} color={"#343b41"} fontSize="14px">
                    Updated At:{moment(updatedAt).format("lll")}
                  </StyledTypography>
                </>
              ) : (
                ""
              )}
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
        <Section>
          {cardName && (
            <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
              <DialogContent sx={{ pl: "50px" }}>
                <StyledTitle
                  id="responsive-dialog-title"
                  letterSpacing="8px"
                  fontSize="28px"
                  padding="20px 0px">
                  {update ? "UPDATE YOUR TASK" : "CREATE NEW TASK"}
                </StyledTitle>
                <DialogContentText>
                  <TaskCreationFieldWrap>
                    {addNewTask?.map((item, index) => {
                      const { label, name, type, required } = item || {};
                      const error = validation[name] || "";
                      return (
                        <Grid item xs={name === "phoneNumber" ? 4 : 12} key={index}>
                          <DefaultFormGroup>
                            <StyledLabel htmlFor={name}>{label}</StyledLabel>
                            {name === "title" || name === "phoneNumber" ? (
                              <>
                                <StyledInput
                                  name={name}
                                  id={name}
                                  variant="outlined"
                                  focused={false}
                                  onChange={handleChange}
                                  type={type}
                                  value={taskData[name]}
                                  required={required}
                                />
                                {error && ( // Display the error message if it exists
                                  <Typography color={"red"} fontSize="12px" marginBottom="20px">
                                    {error}
                                  </Typography>
                                )}
                              </>
                            ) : (
                              ""
                            )}
                            {name === "description" ? (
                              <>
                                <StyledTextareaAutosize
                                  minRows={3}
                                  maxRows={5}
                                  name={name}
                                  value={taskData[name]}
                                  onChange={handleChange}
                                />
                                {name === "description" &&
                                  error && ( // Display the error message for description
                                    <Typography color={"red"} fontSize="12px" marginBottom="20px">
                                      {error}
                                    </Typography>
                                  )}
                              </>
                            ) : (
                              ""
                            )}
                            {type === "dropdown" ? (
                              <>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name={name}
                                  value={taskData[name]}
                                  onChange={handleChange}>
                                  {Object.entries(statusCode)?.map(([key, value]) => {
                                    return (
                                      <MenuItem key={key} value={value}>
                                        {key}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </>
                            ) : (
                              ""
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
                  </TaskCreationFieldWrap>
                </DialogContentText>
              </DialogContent>
              <DialogActions sx={{ justifyContent: "space-around" }}>
                <CancelBtn sx={{ fontWeight: "bold" }} onClick={handleCloseModal}>
                  CANCEL
                </CancelBtn>
                {!update ? (
                  <CancelBtn sx={{ fontWeight: "bold" }} onClick={() => handleSubmit("Create")}>
                    CREATE
                  </CancelBtn>
                ) : (
                  <CancelBtn sx={{ fontWeight: "bold" }} onClick={() => handleSubmit("Update")}>
                    UPDATE
                  </CancelBtn>
                )}
              </DialogActions>
            </Grid>
          )}
        </Section>
      </Section>
    </StyledDialog>
  );
};

export default AddWorkCardModal;
