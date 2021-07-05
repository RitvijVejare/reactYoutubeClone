import Chip from "@material-ui/core/Chip";
// import { useTheme } from "@material-ui/core/styles";

const ChipsContainer = (props) => {
  // const { palette } = useTheme();
  // const chipColor = palette.secondary.main;
  let chipsData = ["All","Red Dead Redemption 2", "Red Dead Redemption 2","Red Dead Redemption 2","Red Dead Redemption 2", "JerryRigsEverything", "Technical Guruji", "CarryMinati"]
  return (
    <div style={styles.container}  >
      {chipsData.map((chipData)=>{
        return(
          <Chip
            style = {{margin:"0px 10px"}}
            // color="secondary"
            // variant="outlined"
            label={chipData}
            onClick={() => {}}
          />
        )
      })}
    </div>
  );
};

const styles = {
  container: {
    height: 50,
    border: "1px solid #ccc",
    padding: "8px",
    display: "flex",
  },
};

export default ChipsContainer;
