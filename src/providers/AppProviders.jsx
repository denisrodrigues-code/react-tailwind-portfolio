import { ThemeProvider } from "@/context/theme/ThemeContext";

const AppProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProviders;
