import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonsSteps from "@/share/ButtonsSteps";
import { useDispatch, useSelector } from "react-redux";
import { updateAll } from "@/store/slices/FormsSlice";
import { yupResolver } from '@hookform/resolvers/yup';

export interface IPersonalForm {
    name: string;
    email: string;
    phone: string;
}

export default function PersonalInfo({ setCurrentStep }: { setCurrentStep: React.Dispatch<React.SetStateAction<number>> }) {
    const selectForms = useSelector(state=> state.forms);
    console.log(selectForms);


    const dispatch = useDispatch();
FormMessage
    const schema = yup.object().shape({
        name: yup.string().required("userName is required"),
        email: yup.string().email("Invalid email").required("email is required"),
        phone: yup.string().matches(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/, "Invalid phone number").required("phone is required"),
    });

    const form = useForm<IPersonalForm>({
        defaultValues: {
            name: selectForms[0]?.name || "",
            email: selectForms[0]?.email || "",
            phone: selectForms[0]?.phone || "",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IPersonalForm) => {
        dispatch(updateAll(data));
        setCurrentStep((prev: number) => prev + 1);
    };

    return (
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
                <ButtonsSteps />
            </form>
        </Form>
    );
}
