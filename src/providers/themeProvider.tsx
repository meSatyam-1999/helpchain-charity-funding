import { ConfigProvider } from "antd";
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return  <ConfigProvider theme={{
    token: {
      colorPrimary: "003092",
      borderRadius: 2,
      controlOutline: "None",
    },
    components: {
        Button: {
            controlHeight: 45,
        },
    }
  }}>{children}</ConfigProvider>;

};

export default ThemeProvider;
