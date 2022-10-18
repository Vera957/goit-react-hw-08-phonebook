import { AppBar } from "./AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
export const Layout = () => {
    return (
        <Box>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            {/* <Toaster position="top-right" reverseOrder={false} />*/}
        </Box>
    );
};