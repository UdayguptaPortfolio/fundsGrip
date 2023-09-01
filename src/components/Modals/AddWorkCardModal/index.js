import { Paragraph } from "../../Common/StyledButton";
import { StyledTypography } from "../../Common/StyledTypography";
import { StyledDialog } from "./styled";
import VideoLabelOutlinedIcon from "@mui/icons-material/VideoLabelOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Grid } from "@mui/material";
const AddWorkCardModal = (props) => {
  const { cardName, handleModal } = props || {};
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
            <Paragraph fontSize="13px" textTransfrom="capitalize">
              in list <u>{cardName}</u>
            </Paragraph>
          </div>
        </div>
        <div>
          <CloseOutlinedIcon
            htmlColor="grey"
            fontSize="large"
            style={{
              cursor: "pointer"
            }}
            onClick={() => handleModal()}
          />
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          xs=6 md=8
        </Grid>
        <Grid item xs={6} md={4}>
          xs=6 md=4
        </Grid>
      </Grid>
    </StyledDialog>
  );
};

export default AddWorkCardModal;
