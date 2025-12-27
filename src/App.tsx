import router from '@/routes';
import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router';

const theme = createTheme({
    fontFamily: 'Pretendard,"Noto Sans Mono", monospace, sans-serif',
});

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
        </MantineProvider>
    );
}
