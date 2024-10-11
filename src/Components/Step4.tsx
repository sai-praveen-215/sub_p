function Step4(props: any) {
  const { data, steps, setSteps } = props;
  const handleBack = () => {
    if (steps >= 1) {
      setSteps(steps - 1);
    }
  };
  const OS = data?.step3?.OS ? 1 : 0;
  const LS = data?.step3?.OS ? 2 : 0;
  const Cp = data?.step3?.OS ? 2 : 0;
  const totalAmount = data?.step2?.amount + OS + LS + Cp;

  return (
    <div>
      <h1 style={{ color: "hsl(213, 96%, 18%)" }}>Finishing Up</h1>
      <h5 style={{ color: "rgb(161, 161, 161)" }}>
        Double-Check Every Thing looks Ok Before Confirming
      </h5>
      <div
        style={{
          width: "100%",
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{ margin: "0px" }}>
            {data?.step2.selectedPlan} ({data?.step2?.selectedPlanSpan})
          </h3>
          <h5
            onClick={() => {
              setSteps(2);
            }}
            style={{
              margin: "0px",
              fontStyle: "italic",
              color: "rgb(161, 161, 161)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Change
          </h5>
        </div>
        <div>
          <h3 style={{ margin: "0px" }}>${data?.step2?.amount}/mo</h3>
        </div>
      </div>
      <hr style={{ marginTop: "20px" }}></hr>
      <div>
        {data?.step3?.OS === true && (
          <div
            style={{
              width: "100%",
              display: "flex",
              // flexDirection: "column",
              // gap:"20px"
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ color: "rgb(161, 161, 161)" }}>Online Services</h3>
            <h3>$1/mo</h3>
          </div>
        )}
        {data?.step3?.LS === true && (
          <div
            style={{
              width: "100%",
              display: "flex",
              // flexDirection: "column",
              // gap:"20px"
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ color: "rgb(161, 161, 161)" }}>Large Storage</h3>
            <h3>$2/mo</h3>
          </div>
        )}

        {data?.step3?.CP === true && (
          <div
            style={{
              width: "100%",
              display: "flex",
              // flexDirection: "column",
              // gap:"20px"
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ color: "rgb(161, 161, 161)" }}>
              Customaizable Profile
            </h3>
            <h3>$2/mo</h3>
          </div>
        )}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: "rgb(161, 161, 161)" }}>
          Total({data?.step2?.selectedPlanSpan})
        </h3>
        <h3 style={{ color: "hsl(213, 96%, 18%)" }}>${totalAmount}</h3>
      </div>
      <div
        style={{
          display: "flex",
          margin: "20px",
          width: "130%",
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
          onClick={() => {
            setSteps(steps + 1);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <h3
          style={{
            fontSize: "20px",
            cursor: "pointer",
            borderRadius: "8px",
            alignItems: "center",
            color: "darkblue",
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

export default Step4;
