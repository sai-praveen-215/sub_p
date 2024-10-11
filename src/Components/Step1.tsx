import { useEffect, useState } from "react";

function Step1(props: any) {
  const { setData, data, steps, setSteps } = props;
  const [step1Data, setStep1Data] = useState<any>({
    name: null,
    email: null,
    ph_number: null,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    Object.keys(step1Data).map((keys: any) => {
      if (step1Data[keys] === "") {
        alert("data is missing");
      } else {
        setData({ ...data, step1: step1Data });
        setSteps(steps + 1);
      }
    });
  };

  useEffect(() => {
    if (data.step1 !== null) {
      setStep1Data({
        name: data?.step1?.name,
        email: data?.step1?.email,
        ph_number: data?.step1?.ph_number,
      });
    }
  }, []);
  return (
    <div>
      <div>
        <h1 style={{ color: "hsl(213, 96%, 18%)" }}>Personal Info</h1>
        <h4 style={{ marginBottom: "50px", color: "rgb(161, 161, 161)" }}>
          Plese Provide Your Name, Email Address And Phone Number
        </h4>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",

              flexDirection: "column",
              gap: "35px",
            }}
          >
            <div>
              <label style={{ color: "hsl(213, 96%, 18%)" }}>Name</label>
              <br></br>
              <input
                value={step1Data.name}
                type="text"
                onChange={(e) => {
                  setStep1Data({ ...step1Data, name: e.target.value });
                }}
                name="name"
                required
                placeholder="Plese Enter your Name"
                style={{
                  height: "30px",
                  width: "80%",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div>
              <label style={{ color: "hsl(213, 96%, 18%)" }}>Email</label>
              <br></br>
              <input
                name="email"
                required
                value={step1Data.email}
                onChange={(e) => {
                  setStep1Data({ ...step1Data, email: e.target.value });
                }}
                placeholder="Plese Enter your Name"
                style={{
                  height: "30px",
                  width: "80%",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div>
              <label style={{ color: "hsl(213, 96%, 18%)" }}>
                Phone Number
              </label>
              <br></br>
              <input
                required
                value={step1Data.ph_number}
                onChange={(e) => {
                  setStep1Data({
                    ...step1Data,
                    ph_number: e.target.value,
                  });
                }}
                name="ph_number"
                type="number"
                placeholder="Plese Enter your Name"
                style={{
                  height: "30px",
                  width: "80%",
                  borderRadius: "8px",
                }}
              />
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
                type="submit"
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
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step1;
