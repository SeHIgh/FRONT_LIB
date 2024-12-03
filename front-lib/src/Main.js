import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: "2rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "1rem",

        overflowY: "auto"
      }}
    >
      <h1>FRONT LIBRARY</h1>
      <p>By SeHIgh</p>
      <Box sx={{ padding: 2 }}>
        {/* /drawer 경로로 이동할 수 있는 링크 */}
        <Link to="/drawer">
          <Button variant="contained">Go to Drawer</Button>
        </Link>
      </Box>
    </div>
  );
}

export default Main;
