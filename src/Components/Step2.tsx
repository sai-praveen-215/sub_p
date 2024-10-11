import { Switch } from "antd";
import { useEffect, useState } from "react";
import arcade from "../../../../multi-step-form-main/assets/images/icon-arcade.svg";
import advacnced from "../../../../multi-step-form-main/assets/images/icon-advanced.svg";
import pro from "../../../../multi-step-form-main/assets/images/icon-pro.svg";

function Step2(props: any) {
  const { data, setData, steps, setSteps } = props;
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPlanSpan, setSelectedPlanSpan] = useState("monthly");
  const [step2Data, setStep2Data] = useState<any>({
    plan: null,
    amount: null,
    selectedPlanSpan: null,
  });
  const [selectedPlanPrice, setSelectedPlanPrice] = useState({
    arcade: 9,
    advanced: 12,
    pro: 15,
  });
  const handleSwitch = (checked: boolean) => {
    if (checked === true) {
      setSelectedPlanSpan("yearly");
      setSelectedPlan("");
      setSelectedPlanPrice({ arcade: 95, advanced: 130, pro: 150 });
    } else {
      setSelectedPlanPrice({ arcade: 9, advanced: 12, pro: 15 });
    }
  };

  const handleSelectPlan = (props: any) => {
    setStep2Data({ ...props, selectedPlanSpan: selectedPlanSpan });
  };

  const handleNext = () => {
    if (step2Data.plan !== null && selectedPlan !== "") {
      setData({ ...data, step2: step2Data });
      setSteps(steps + 1);
    } else {
      alert("selecte any plan to go next");
    }
  };
  useEffect(() => {
    if (data.step2 !== null) {
      setSelectedPlan(data?.step2?.selectedPlan);
    }
  }, []);
  const handleBack = () => {
    if (steps >= 1) {
      setSteps(steps - 1);
    }
  };

  return (
    <div>
      <h1 style={{ color: "hsl(213, 96%, 18%)" }}>Select Your Plan</h1>
      <h5 style={{ color: "rgb(161, 161, 161)" }}>
        You Have The Option Of Monthly And Yearly Billing
      </h5>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => {
            setSelectedPlan("Arcade");
            handleSelectPlan({
              selectedPlan: "Arcade",
              amount: selectedPlanPrice.arcade,
            });
          }}
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            margin: "10px",
            cursor: "pointer",
            borderRadius: "10px",
            backgroundColor: selectedPlan === "Arcade" ? "lightblue" : "white",
            border: selectedPlan === "Arcade" ? "1px solid blue" : "",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <img style={{ marginTop: "5px" }} src={arcade} />
          <h3>Arcade</h3>
          <h3 style={{ color: "rgb(161, 161, 161)" }}>
            ${selectedPlanPrice.arcade}/mo
          </h3>
        </div>
        <div
          onClick={() => {
            setSelectedPlan("Advanced");
            handleSelectPlan({
              selectedPlan: "Advanced",
              amount: selectedPlanPrice.advanced,
            });
          }}
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            backgroundColor:
              selectedPlan === "Advanced" ? "lightblue" : "white",
            border: selectedPlan === "Advanced" ? "1px solid blue" : "",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <img style={{ marginTop: "5px" }} src={advacnced} />
          <h3>Advanced</h3>
          <h3 style={{ color: "rgb(161, 161, 161)" }}>
            ${selectedPlanPrice.advanced}/mo
          </h3>
        </div>
        <div
          onClick={() => {
            setSelectedPlan("pro");
            handleSelectPlan({
              selectedPlan: "pro",
              amount: selectedPlanPrice.pro,
            });
          }}
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            alignItems: "center",
            backgroundColor: selectedPlan === "pro" ? "lightblue" : "white",
            border: selectedPlan === "pro" ? "1px solid blue" : "",
            cursor: "pointer",
            justifyContent: "space-evenly",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <img style={{ marginTop: "5px" }} src={pro} />
          <h3>Pro</h3>
          <h3 style={{ color: "rgb(161, 161, 161)" }}>
            ${selectedPlanPrice.pro}/mo
          </h3>
        </div>
      </div>
      <div
        style={{
          padding: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3> Monthly</h3>
        <Switch
          style={{ padding: "10px", margin: "10px" }}
          onChange={handleSwitch}
        ></Switch>{" "}
        <h3>Yearly</h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <button
          style={{
            height: "40px",
            width: "150px",
            fontSize: "20px",
            backgroundColor: "darkblue",
            cursor: "pointer",
            display: "flex",
            borderRadius: "8px",

            alignItems: "center",
            color: "white",
            justifyContent: "center",
          }}
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
      <div>
        <h3
          style={{
            fontSize: "20px",

            cursor: "pointer",

            borderRadius: "8px",

            alignItems: "center",

            color: "rgb(161, 161, 161)",
            justifyContent: "center",
          }}
          onClick={handleBack}
        >
          Go Back
        </h3>
      </div>
    </div>
  );
}

export default Step2;
