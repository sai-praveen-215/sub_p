import thank_You from "../../public/images/icon-thank-you.svg";

export default function Step5() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "35%",
      }}
    >
      <img src={thank_You} />
      <h1>Thank You !</h1>
      <div>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgb(161, 161, 161)",
          }}
        >
          Thanks for confirming your subscription!<br></br> We hope you have fun
          using our platform. If you ever need <br></br>support, please feel
          free to email us at support@loremgaming.com.
        </h3>
      </div>
    </div>
  );
}
