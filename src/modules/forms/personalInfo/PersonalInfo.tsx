import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonsSteps from "@/share/ButtonsSteps";
import { useDispatch, useSelector } from "react-redux";
import { IForms, updateAll } from "@/store/slices/FormsSlice";
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from "@/store/store";

export interface IPersonalForm {
    name: string;
    email: string;
    phone: string;
    isFilled?: boolean;
}

export default function PersonalInfo({ currentStep, setCurrentStep }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>> }) {
    const selectForms = useSelector((state: RootState) => state.forms);
    console.log(selectForms);


    const dispatch = useDispatch();
    FormMessage
    const schema = yup.object().shape({
        name: yup.string().required("userName is required"),
        email: yup.string().email("Invalid email").required("email is required"),
        phone: yup.string().matches(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/, "Invalid phone number").required("phone is required"),
    });

    const form = useForm<IForms>({
        defaultValues: {
            name: selectForms?.name || "",
            email: selectForms?.email || "",
            phone: selectForms?.phone || "",
        },
        // resolver: yupResolver(schema),
    });

    const onSubmit = (data: IPersonalForm) => {
        const formData: IForms = {
            ...data,
            isFilled: true,
        };
        dispatch(updateAll(formData));
        setCurrentStep((prev: number) => prev + 1);
    };

    return (
        <section>
            <div className="my-8 space-y-5 font-medium">
                <h2 className="text-2xl text-red-400">Personal Info</h2>
                <p className="text-neutral-500">Please provide your name, email address, and phone number.</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Ahmed" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. ahmed.gomaa@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 01283928933" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ButtonsSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </form>
            </Form>
        </section>
    );
}
