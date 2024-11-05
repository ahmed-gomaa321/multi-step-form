import { Button } from "@/components/ui/button";

export default function ButtonsSteps({ currentStep, setCurrentStep }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <div className="flex items-center justify-around mt-12">
            <Button onClick={() => {
                if (currentStep > 0) {
                    setCurrentStep(prev => prev - 1)
                }
            }} type="button" className="w-[6rem]">Back</Button>
            <Button className="w-[6rem]"
            >next step</Button>
        </div >
    )
}
