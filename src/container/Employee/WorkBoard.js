import React, { useEffect, useState } from "react";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { statusCode, workStates } from "../constant";
import { Section } from "../../components/Common/StyledButton";
import { AddCardButton, WorkBoardMainWrap, StyledToDoGrid } from "./styled";
import AddWorkCardModal from "../../components/Modals/AddWorkCardModal";
import { Grid } from "@mui/material";
import {
  useCreateTaskMutation,
  useDeleteTaskByIdMutation,
  useGetAllTaskQuery,
  useGetTaskByIdMutation,
  useUpdateTaskByIdMutation
} from "../../redux/slices/tasks/tasksApiSlice";
import { toast } from "react-toastify";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import CommonTaskCard from "./CommonTaskCard";
import ConfirmationModal from "../../components/Modals/ConfirmationModal";

const WorkBoard = () => {
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    showAddCardModal: false
  });
  const [taskData, setTaskData] = useState();
  const [validation, setValidation] = useState({
    title: "",
    description: "",
    pan_number: ""
  });

  const [createTask, { data: createTaskData, isLoading, isSuccess, isError }] =
    useCreateTaskMutation();

  const [getTaskById, { data: taskByIdData, isLoading: taskByIdLoading }] =
    useGetTaskByIdMutation();
  const [
    updateTaskById,
    { data: updatedTaskData, isLoading: updateTaskLoading, isSuccess: upSucess, isError: upError }
  ] = useUpdateTaskByIdMutation();

  const [
    deleteTaskById,
    { data: deleteTaskdata, isLoading: delLoading, isSuccess: delSucess, isError: delError }
  ] = useDeleteTaskByIdMutation();

  const { data, isLoading: getTaskLoading } = useGetAllTaskQuery();

  const { data: allTaskData = [] } = data || {};

  const toDoFilteredData = allTaskData?.filter((item) => {
    return item.status === 0;
  });
  const inProgressFilteredData = allTaskData?.filter((item) => {
    return item.status === 1;
  });
  const testingFilteredData = allTaskData?.filter((item) => {
    return item.status === 2;
  });
  const doneFilteredData = allTaskData?.filter((item) => {
    return item.status === 3;
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success(createTaskData?.message);
    } else if (isError) {
      toast.error("Something went wrong");
    }
  }, [createTaskData, isError]);

  useEffect(() => {
    if (upSucess) {
      toast.success(updatedTaskData?.message);
    } else if (upError) {
      toast.error("Something went wrong");
    }
  }, [updatedTaskData, upError]);

  useEffect(() => {
    if (delSucess) {
      toast.success(deleteTaskdata?.message);
    } else if (delError) {
      toast.error("Something went wrong");
    }
  }, [deleteTaskdata, upError]);

  useEffect(() => {
    setTaskData(taskByIdData?.data || {});
  }, [taskByIdData]);

  const handleAddCard = (name) => {
    setTaskData({});
    setSelectedCard((prev) => ({
      ...prev,
      name,
      showAddCardModal: true
    }));
  };
  const handleUpdateCard = (name, id) => {
    getTaskById(id);
    if (taskData) {
      setSelectedCard((prev) => ({
        ...prev,
        name,
        update: true,
        showAddCardModal: true
      }));
    }
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
        phoneNumber: ""
      }));
    }
  };

  const handleSubmit = (type) => {
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
    if (!taskData.phoneNumber) {
      setValidation((prevState) => ({
        ...prevState,
        pan_number: "Phone Number is necessary"
      }));
    } else {
      if (type === "Create") {
        createTask(taskData);
      } else {
        updateTaskById(taskData);
      }
      handleCloseModal();
      setTaskData({});
    }
  };

  const handleCloseModal = () => {
    setSelectedCard((prev) => ({
      ...prev,
      showAddCardModal: false,
      update: false
    }));
    setValidation((prevState) => ({
      ...prevState,
      title: "",
      description: "",
      pan_number: ""
    }));
  };

  const handleDeleteTask = (e, id) => {
    e.stopPropagation();
    setSelectedCard((prev) => ({
      ...prev,
      showDeleteModal: true,
      deleteTaskId: id
    }));
  };

  const handleDeleteModal = () => {
    deleteTaskById(selectedCard?.deleteTaskId);
    setSelectedCard((prev) => ({
      ...prev,
      showDeleteModal: false
    }));
  };
  return (
    <>
      <LoadingBackdrop open={isLoading || getTaskLoading} />
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
                  <CommonTaskCard
                    filteredData={toDoFilteredData}
                    handleUpdateCard={handleUpdateCard}
                    name={name}
                    handleDeleteTask={handleDeleteTask}
                  />
                )}
                {name === "In Progress" && (
                  <CommonTaskCard
                    filteredData={inProgressFilteredData}
                    handleUpdateCard={handleUpdateCard}
                    name={name}
                    handleDeleteTask={handleDeleteTask}
                  />
                )}
                {name === "Ready for Testing" && (
                  <CommonTaskCard
                    filteredData={testingFilteredData}
                    handleUpdateCard={handleUpdateCard}
                    name={name}
                    handleDeleteTask={handleDeleteTask}
                  />
                )}
                {name === "Done" && (
                  <CommonTaskCard
                    filteredData={doneFilteredData}
                    handleUpdateCard={handleUpdateCard}
                    name={name}
                    handleDeleteTask={handleDeleteTask}
                  />
                )}
                {name === "TO DO" ? (
                  <AddCardButton
                    onClick={() => {
                      handleAddCard(name);
                    }}>
                    + Add Card
                  </AddCardButton>
                ) : (
                  ""
                )}
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
          taskData={taskData}
          selectedCard={selectedCard}
        />
      ) : (
        ""
      )}
      {selectedCard?.showDeleteModal ? (
        <ConfirmationModal
          handleModal={handleDeleteModal}
          message={"Do you really want to Delete this task?"}
          modalFor={"Delete"}
          title={"DELETE TASK"}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default WorkBoard;
