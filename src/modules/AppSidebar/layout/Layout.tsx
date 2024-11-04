import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../AppSidebar";

interface ILayoutProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    children?: React.ReactNode;
}

export default function Layout({ currentStep, setCurrentStep, children }: ILayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
