import Chip from "@material-ui/core/Chip";
// import { useTheme } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ChipsContainer = (props) => {
  // const { palette } = useTheme();
  // const chipColor = palette.secondary.main;
  let chipsData = ["All","ReactJS", "NodeJS", "Red Dead Redemption 2","Red Dead Redemption", "Grand Theft Auto 5", "JerryRigsEverything", "Technical Guruji", "CarryMinati", <ArrowForwardIosIcon style={{fontSize: "small"}}/>]
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
