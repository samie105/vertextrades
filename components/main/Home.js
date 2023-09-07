import WrappedFile from "./WrappedFile";
import { ThemeProvider } from "../../contexts/themeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <WrappedFile />
    </ThemeProvider>
  );
}
