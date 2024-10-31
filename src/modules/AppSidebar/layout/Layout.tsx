import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../AppSidebar"

export default function Layout({ children, currentStep, setCurrentStep }: { children: React.ReactNode, currentStep: number }) {
    return (
        <SidebarProvider>
            <AppSidebar currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}