import { SiBoardgamegeek } from "react-icons/si";
import { FaGamepad } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPlanState } from "@/store/slices/PlanStateSlice";
import ButtonsSteps from "@/share/ButtonsSteps";
import { RootState } from "@/store/store";
export default function SelectPlan({ currentStep, setCurrentStep }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>> }) {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const plansForm = [
        {
            id: 1,
            icon: <SiBoardgamegeek />,
            label: "Arcade",
            monthPrice: "$9/mo",
            yearPrice: "$90/yr",
            disc: "2 months free",
        },
        {
            id: 2,
            icon: <FaGamepad />,
            label: "Advanced",
            monthPrice: "$12/mo",
            yearPrice: "$120/yr",
            disc: "2 months free",
        },
        {
            id: 3,
            icon: <IoLogoGameControllerB />,
            label: "Pro",
            monthPrice: "$15/mo",
            yearPrice: "$150/yr",
            disc: "2 months free",
        },
    ];
    const selectedPlanData = useSelector((state: RootState) => state.planState) as IPlanState;
    const dispatch = useDispatch();
    const NextStep = () => {
        const updatedPlanData = { ...selectedPlanData, isFilled: true };
        setCurrentStep((prev: number) => prev + 1);
    }
    return (
        <section className="pb-10">
            <div className="my-8 space-y-5 font-medium">
                <h2 className="text-2xl text-red-400">Select your plan</h2>
                <p className="text-neutral-500">You have the option of monthly or yearly billing</p>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                NextStep()
            }}>
                <div className="my-8 flex items-center justify-center flex-wrap gap-5 text-2xl font-medium">
                    {plansForm.map((plan) => <div key={plan.id}
                        onClick={() => dispatch(setSelectedPlan(plan.label))}
                        className={`p-8 w-60 h-70 flex flex-col items-center justify-center rounded-lg cursor-pointer border-2 space-y-2 ${selectedPlan === plan.label ? "border-2 border-red-400 bg-gray-200 bg-opacity-50" : "hover:border-2 hover:border-red-400"}`}>
                        <i className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white">{plan.icon}</i>
                        <p className="text-lg">{plan.label}</p>
                        <p className="text-neutral-600">{plan.monthPrice}</p>
                        <p className="text-neutral-600">{plan.yearPrice}</p>
                        <p className="text-red-400">{plan.disc}</p>
                    </div>)}
                </div>
                <div className="flex items-center justify-center gap-5 bg-gray-100 w-fit mx-auto px-14 py-2 rounded-lg font-medium">
                    <p className="text-blue-600">Monthly</p>
                    <div className="toggle-border">
                        <input id="one" type="checkbox" />
                        <label htmlFor="one">
                            <div className="handle" />
                        </label>
                    </div>
                    <p>Yearly</p>
                </div>
                <ButtonsSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </form>
        </section>
    )
}
