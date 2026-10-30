import { useEffect } from "react";
import { AppRoutes } from "./routes/AppRouter";
import { useTheme } from "./stores/useTheme";
import { useLang } from "./stores/useLang";
import { UI } from "./data/i18n";

function App() {
  const dark = useTheme((s) => s.dark);
  const lang = useLang((s) => s.lang);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = UI[lang].pageTitle;
  }, [lang]);

  return <AppRoutes />;
}

export default App;
