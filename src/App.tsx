import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.js";
import { ThemeProvider } from "@/hooks/use-theme";

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner position="bottom-center" />
      <Index />
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
