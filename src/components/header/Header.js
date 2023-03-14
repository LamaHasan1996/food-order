import { Box, Container, Link, Typography } from "@mui/material";
import useStyles from "../../styles/components/header/header";

export default function Header() {
  const headerClasses = useStyles();
  return (
    <Box className={headerClasses.root}>
      <Container maxWidth="lg">
        <Link href="/home">
          <Typography className={headerClasses.brand}>Meal Mate</Typography>
        </Link>
        <Typography>Share us Your Food Journey!</Typography>
      </Container>
    </Box>
  );
}
