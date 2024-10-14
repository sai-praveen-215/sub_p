import "./App.css";
// import img1 from "../../sub_p/public/images/bg-sidebar-desktop.svg";
import { useState } from "react";
import Step2 from "./Components/Step2";
import Step1 from "./Components/Step1";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import Step5 from "./Components/Step5";

function App() {
  const [steps, setSteps] = useState(1);
  const [data, setData] = useState({
    step1: null,
    step2: null,
    step3: null,
    step4: null,
  });

  return (
    <>
      <div
        style={{
          margin: "auto",
          marginTop: "25px",
          height: "600px",
          width: "800px",
          display: "flex",

          gap: "50px",
          padding: "35px",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div
          className="back"
          style={{
            height: "100%",
            width: "300px",
            borderRadius: "30px",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "35px",
          }}
        >
          <div style={{ marginLeft: "85px", marginTop: "50px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  color: steps === 1 ? "white" : "black",
                  backgroundColor: steps === 1 ? "lightblue" : "white",
                }}
              >
                1
              </div>
              <h5>Step 1</h5>
            </div>
            <div>YOUR INFO</div>
          </div>
          <div style={{ marginLeft: "85px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  color: steps === 2 ? "white" : "black",
                  backgroundColor: steps === 2 ? "lightblue" : "white",
                }}
              >
                2
              </div>
              <h5>Step 2</h5>
            </div>
            <div>SELECT PLAN</div>
          </div>
          <div style={{ marginLeft: "85px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  color: steps === 3 ? "white" : "black",
                  backgroundColor: steps === 3 ? "lightblue" : "white",
                }}
              >
                3
              </div>
              <h5>Step 3</h5>
            </div>
            <div>ADD-ONS</div>
          </div>
          <div style={{ marginLeft: "85px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  color: steps === 4 || steps === 5 ? "white" : "black",
                  backgroundColor:
                    steps === 4 || steps === 5 ? "lightblue" : "white",
                }}
              >
                4
              </div>
              <h5>Step 4</h5>
            </div>
            <div>SUMMARY</div>
          </div>
        </div>
        <div>
          {steps === 1 && (
            <Step1
              setData={setData}
              data={data}
              steps={steps}
              setSteps={setSteps}
            />
          )}
          {steps === 2 && (
            <div>
              <Step2
                data={data}
                setData={setData}
                steps={steps}
                setSteps={setSteps}
              />
            </div>
          )}
          {steps === 3 && (
            <div>
              <Step3
                data={data}
                setData={setData}
                steps={steps}
                setSteps={setSteps}
              />
            </div>
          )}
          {steps === 4 && (
            <div>
              <Step4
                data={data}
                setData={setData}
                steps={steps}
                setSteps={setSteps}
              />
            </div>
          )}
          {steps === 5 && (
            <div>
              <Step5 />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
