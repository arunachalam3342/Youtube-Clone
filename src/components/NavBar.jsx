import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";


const NavBar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={75} width={90} />
            <div style={{ color: 'white', fontFamily: 'Times New Roman', fontSize: '2rem', textDecoration: 'underline', fontStyle: 'italic' }}>
                YOUTUBE
            </div>

        </Link>


        <SearchBar />
    </Stack>
);

export default NavBar;