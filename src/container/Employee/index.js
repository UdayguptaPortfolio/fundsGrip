import React from "react";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import AuthLayout from "../../components/AuthLayout";

const Index = () => {
  return (
    <>
      <LoadingBackdrop open={false} />
      <AuthLayout>
        <div></div>
      </AuthLayout>
    </>
  );
};

export default Index;
