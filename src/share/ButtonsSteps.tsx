import { Button } from "@/components/ui/button";

export default function ButtonsSteps() {

    return (
        <div className="flex items-center justify-around mt-12">
            <Button type="button" className="w-[6rem]">Back</Button>
            <Button className="w-[6rem]"
            >next step</Button>
        </div >
    )
}
