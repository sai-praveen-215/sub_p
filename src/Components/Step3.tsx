import { useEffect, useState } from "react";

function Step3(props: any) {
  const { data, setData, steps, setSteps } = props;
  const [step3Data, setStep3Data] = useState<any>({
    OS: false,
    LS: false,
    CP: false,
  });
  const handleBack = () => {
    if (steps >= 1) {
      setSteps(steps - 1);
    }
  };
  const handleNext = () => {
    setSteps(steps + 1);
    setData({ ...data, step3: step3Data });
  };
  useEffect(() => {
    if (
      data?.step3?.OS !== false ||
      data?.step3?.LS !== false ||
      data?.step3?.CP !== false
    ) {
      setStep3Data({
        OS: data?.step3?.OS,
        LS: data?.step3?.LS,
        CP: data?.step3?.CP,
      });
    }
  }, []);
  console.log(data?.step3?.OS, "uma");
  return (
    <div>
      <h1 style={{ color: "hsl(213, 96%, 18%)" }}>Pick Add-ons</h1>
      <h5 style={{ color: "rgb(161, 161, 161)" }}>
        Add-ons Help Enhance Your Gaming Experience
      </h5>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div style={{ width: "100%" }}>
          <div
            onClick={() => {
              setStep3Data({ ...step3Data, OS: !step3Data.OS });
            }}
            style={{
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              borderRadius: "5px",
              width: "150%",
              height: "80px",
              display: "flex",
              alignItems: "center",
              padding: "5px",
              backgroundColor: step3Data.OS ? "blue" : "white",
              justifyContent: "space-between",
              color: step3Data.OS ? "white" : "black",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div style={{ paddingLeft: "10px" }}>
                <h3 style={{ margin: "0px", color: "hsl(213, 96%, 18%)" }}>
                  Online Service
                </h3>
                <h6 style={{ margin: "0px", color: "rgb(161, 161, 161)" }}>
                  Access To Multi Player Games
                </h6>
              </div>
            </div>
            <div>+1$/mo</div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            onClick={() => {
              setStep3Data({ ...step3Data, LS: !step3Data.LS });
            }}
            style={{
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              borderRadius: "5px",
              width: "150%",
              height: "80px",
              display: "flex",
              backgroundColor: step3Data.LS ? "blue" : "white",
              color: step3Data.LS ? "white" : "black",
              alignItems: "center",
              padding: "5px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div style={{ paddingLeft: "10px" }}>
                <h3 style={{ margin: "0px", color: "hsl(213, 96%, 18%)" }}>
                  Large Storage
                </h3>
                <h6 style={{ margin: "0px", color: "rgb(161, 161, 161)" }}>
                  Extra 1TB Of Cloud Save
                </h6>
              </div>
            </div>
            <div>+2$/mo</div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            onClick={() => {
              setStep3Data({ ...step3Data, CP: !step3Data.CP });
            }}
            style={{
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              borderRadius: "5px",
              width: "150%",
              height: "80px",
              display: "flex",
              alignItems: "center",
              backgroundColor: step3Data.CP ? "blue" : "white",
              color: step3Data.CP ? "white" : "black",
              padding: "5px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div style={{ paddingLeft: "10px" }}>
                <h3 style={{ margin: "0px", color: "hsl(213, 96%, 18%)" }}>
                  Customisabile Profile
                </h3>
                <h6 style={{ margin: "0px", color: "rgb(161, 161, 161)" }}>
                  Custom Theme On Your Profile
                </h6>
              </div>
            </div>
            <div>+2$/mo</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "20px",
          width: "150%",
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

export default Step3;
