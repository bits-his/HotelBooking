import CustomButton from "./CustomButton";
import StepBar from "./StepBar";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { useLocation } from "react-router";
// import { Card, CardFooter, CardHeader } from "reactstrap";
import { CardBody } from "reactstrap";

function FormWrapper(props) {
  const {
    steps = [],
    handleSubmit = (f) => f,
    // handleDispatch = (f)=>f,
    barWidth = "25vw",
    loading = false,
  } = props;
  const [step, setStep] = useState(0);
  const location = useLocation();

  const goNext = () => {
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    setStep((prev) => prev - 1);
  };
  // Generate Certificate
  return (
    <div>
      {/* <CardHeader className={+  + "m-0 p-0" }> */}
      <center>
        <StepBar
          barWidth={barWidth}
          current={step}
          items={steps}
          onItemClick={(i) => setStep(i)}
        />
      </center>
      {/* </CardHeader> */}
      <CardBody>{props.children.filter((item, i) => step === i)}</CardBody>
      <div
        className={`m-0 p-0 d-flex flex-row ${
          step !== 0 ? "justify-content-between" : "justify-content-end"
        } p-1`}
      >
        {step !== 0 && (
          <CustomButton
            className="px-6"
            outline
            style={{ color: "#0d3a73", border: "1px solid #0d3a73" }}
            onClick={goBack}
          >
            <AiOutlineLeft className="mr-1" size={20} /> Back
          </CustomButton>
        )}
        {step === steps.length - 1 ? (
          location.pathname ===
          "/general-takaful/proposals/motor-takaful/new" ? (
            <CustomButton
              className="px-6"
              color="primary"
              onClick={handleSubmit}
              loading={loading}
            >
              <FaCheck className="mr-1" size={20} /> POST
            </CustomButton>
          ) : (
            <>
              {/* <CustomButton
          className="px-6"
          color="primary"
          // onClick={handleDispatch}
          loading={loading}
        >
          <FaCheck className="mr-1" size={20} /> Dispatch
        </CustomButton> */}
              <CustomButton
                className="px-6"
                // color="success"
                style={{ color: "#fff", backgroundColor: "#0d3a73" }}
                onClick={handleSubmit}
                loading={loading}
              >
                <FaCheck className="mr-1" size={20} /> Save
              </CustomButton>
            </>
          )
        ) : (
          <CustomButton className="px-6" onClick={goNext}>
            Next <AiOutlineRight className="ml-1" size={20} />
          </CustomButton>
        )}
      </div>
    </div>
  );
}

export default FormWrapper;
