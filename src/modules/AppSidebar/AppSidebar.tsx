import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
} from "@/components/ui/sidebar"
import { IForms } from "@/store/slices/FormsSlice"
import { useSelector } from "react-redux"

interface IITems {
    id: number,
    label: string
}
export function AppSidebar({ currentStep, setCurrentStep }: {currentStep : number, setCurrentStep: React.Dispatch<React.SetStateAction<number>>}) {
    const items: IITems[] = [
        { id: 1, label: "Your info" },
        { id: 2, label: "Select plan" },
        { id: 3, label: "Add-ons" },
        { id: 4, label: "Summary" },
    ]

    const formsData = useSelector(state => state.forms) as IForms[]


    const hasData = (index:number) => {
        if (index > currentStep) {
            if (formsData[currentStep]?.isFilled) {
                return setCurrentStep(index)
            } else {
                console.log(formsData[currentStep], currentStep, index);
                return
            }
        } else {
            setCurrentStep(index)
        }
    };

    return (
        <Sidebar className="w-[22rem]">
            <SidebarContent className="relative cover-img mx-4 my-4 pt-5 rounded-lg">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <SidebarGroup >
                    {items.map((item, index) =>
                        <div onClick={() => hasData(index)} key={item.id} className="flex items-center gap-3 px-4 py-3">
                            <div className={`border w-[2rem] h-[2rem] flex items-center justify-center text-white font-medium rounded-full cursor-pointer ${currentStep === item.id - 1 ? "bg-red-400" : "bg-transparent"}`}>{item.id}</div>
                            <div className="font-medium">
                                <p className="text-gray-400">step{item.id}</p>
                                <p className="text-white">{item.label}</p>
                            </div>
                        </div>
                    )}
                </SidebarGroup >
            </SidebarContent>
        </Sidebar>
    )
}
