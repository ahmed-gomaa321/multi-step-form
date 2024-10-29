import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface IPersonalForm {
    name: string,
    email: string,
    phone: string,
}

export default function PersonalInfo() {
    const schema = yup.object().shape({
        name: yup.string().required("userName is required"),
        email: yup.string().email("Invalid email").required("email is required"),
        phone: yup.string().matches(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/).required("phone is required"),
    })
    const form = useForm<IPersonalForm>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
        // resolver: yupResolver(schema),
    });
    const onSubmit = (data: IPersonalForm) => {
        console.log(data);
    }
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
                {/* <Button type="submit">Next step</Button> */}
            </form>
        </Form>
    )
}
