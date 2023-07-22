// import React, { useState } from "react";
// import { IconButton, Box, Grid, Input } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// import AuthLayout from "../../components/AuthLayout";
// import { StyledDiv, StyledDialog } from "./Styled";
// // import { StyledTypography } from "../../exports/StyledTypography";
// // import { StyledButton } from "../../exports/StyledButton";
// // import { TableBox } from "../../exports/StyledBox";
// import { StyledTypography } from "../../components/Common/StyledTypography";
// import { StyledButton } from "../../components/Common/StyledButton";
// import { TableBox } from "../../components/Common/StyledBox";
// import SelectDropdown from "../../components/Dropdown/SelectDropdown";
// import AddNewAdmin from "../../components/Modals/AddNewAdmin";
// import DataTable from "../../components/Table/ChildData";
// import ChildEditModal from "../../components/Modals/ChildEditModal";
// import { actionMenu, exportsMenus } from "../constant";

// const ChildDashboard = () => {
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [selectedValue, setSelectedValue] = useState([]);
//   const handleCloseModal = () => {
//     setOpenAddModal(false);
//   };
//   const handleClickAddUser = () => {
//     setOpenAddModal(true);
//   };
//   const handleClosedModal = () => {
//     setOpenEditModal(false);
//   };
//   const handleClickEditUser = () => {
//     if (selectedValue.length > 1) {
//       alert("Please select only one data");
//     } else {
//       setOpenEditModal(true);
//     }
//   };

//   return (
//     <>
//       <AuthLayout>
//         <StyledDiv>
//           <div>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <IconButton>
//                 <ArrowBackIcon />
//               </IconButton>
//               <StyledTypography letterSpacing="5px" color="#3cbfae" fontSize="17px">
//                 MANAGE
//               </StyledTypography>
//             </Box>
//             <StyledTypography variant="h5" ml="10px">
//               Add and manage admin roles
//             </StyledTypography>
//           </div>
//           <StyledButton mt="30px" ml={10} mb={10} onClick={handleClickAddUser}>
//             CRETAE NEW ADMIN
//           </StyledButton>
//         </StyledDiv>
//         {/* Filter and table */}
//         <Box sx={{ backgroundColor: "#f0f0f0" }}>
//           <Grid container sx={{ p: 25 }}>
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//               <Box sx={{ display: "flex", alignItems: "center", ml: 40 }}>
//                 <StyledTypography mr="10px" fontSize="18px" color="gray">
//                   Actions
//                 </StyledTypography>
//                 <SelectDropdown names={actionMenu} handleClickEditUser={handleClickEditUser} />
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", ml: 40 }}>
//                 <StyledTypography mr="10px" fontSize="18px" color="gray">
//                   Export
//                 </StyledTypography>
//                 <SelectDropdown names={exportsMenus} />
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//                 <Input
//                   id="outlined-adornment"
//                   placeholder="search"
//                   endAdornment={<IconButton>{<SearchOutlinedIcon />}</IconButton>}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//           <TableBox margin="25px" background="#f8f4f4">
//             <DataTable selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
//           </TableBox>
//         </Box>
//       </AuthLayout>
//       <div style={{ position: "relative" }}>
//         <StyledDialog open={openAddModal} onClose={handleCloseModal} maxWidth="lg">
//           <AddNewAdmin handleCloseModal={handleCloseModal} />
//         </StyledDialog>
//       </div>
//       <div style={{ position: "relative" }}>
//         <StyledDialog open={openEditModal} onClose={handleClosedModal} maxWidth="lg">
//           {/* <ChildEditModal handleCloseModal={handleClosedModal} selectedValue={selectedValue} /> */}
//         </StyledDialog>
//       </div>
//     </>
//   );
// };

// export default ChildDashboard;
