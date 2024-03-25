import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Textarea,
} from "@material-tailwind/react";
import { FaUserEdit } from "react-icons/fa";
// Formic
import { EditUserProfileSchema } from "../../Formik/Validations";
import { useFormik } from 'formik';
import { ToastError, ToastSuccess } from "../Toast/Toast";
import { useDispatch, useSelector } from "react-redux";
import { UserPrfileUpdate } from "../../Service/Services";
import { UpdateUserDetails, setUserDetails } from "../../Redux/UserSlice";

export function UserEditModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const dispatch = useDispatch()

    const { UserInfo } = useSelector((state) => state.user);

    const initialValues = {
        first_name: UserInfo?.first_name,
        last_name: UserInfo?.last_name,
        district: UserInfo?.district,
        state: UserInfo?.state,
        place: UserInfo?.place,
        bio: UserInfo?.bio
    }
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: EditUserProfileSchema,
        onSubmit: (values, { setSubmitting }) => {
            handleSubmitForm(values, setSubmitting);
        },
    });
    const handleSubmitForm = async (values, setSubmitting) => {
        try {
            const response = await UserPrfileUpdate(UserInfo.id, values)
            if (response.status === 200) {
                ToastSuccess('Updated successfully!');
                handleOpen()
                const data = {
                    id: UserInfo.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: UserInfo.email,
                    profile_image: response.data.profile_image,
                    state: response.data.state,
                    district: response.data.district,
                    place: response.data.place,
                    bio: response.data.bio,
                }
                dispatch(setUserDetails({ UserInfo: data }));
            }
        } catch (error) {
            console.log(error);
            ToastError(error.response?.data?.detail || 'An error occurred');
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            <div onClick={handleOpen} className='flex justify-center items-center cursor-pointer'>
                <p className='text-gray-600 capitalize'><FaUserEdit className='h-7 w-7' />edit</p>
            </div>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Change Your Details
                            </Typography>
                            <div>
                                <Input
                                    autoFocus={true}
                                    variant="standard"
                                    label="First Name"
                                    name='first_name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                />
                                {touched.first_name && errors.first_name && (
                                    <div className="text-red-500 text-sm ">{errors.first_name}</div>
                                )}
                            </div>
                            <div>
                                <Input
                                    autoFocus={true}
                                    variant="standard"
                                    label="Last name"
                                    name='last_name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                />
                                {touched.last_name && errors.last_name && (
                                    <div className="text-red-500 text-sm ">{errors.last_name}</div>
                                )}
                            </div>   <div>
                                <Input
                                    autoFocus={true}
                                    variant="standard"
                                    label="Email"
                                    name='email'
                                    disabled
                                    value={UserInfo.email}
                                />
                                {touched.email && errors.email && (
                                    <div className="text-red-500 text-sm ">{errors.email}</div>
                                )}
                            </div>   <div>
                                <Input
                                    autoFocus={true}
                                    variant="standard"
                                    label="Place"
                                    name='place'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.place}
                                />
                                {touched.place && errors.place && (
                                    <div className="text-red-500 text-sm ">{errors.place}</div>
                                )}
                            </div>
                            <div>
                                <Input
                                    autoFocus={true}
                                    variant="standard"
                                    label="District"
                                    name='district'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.district}
                                />
                                {touched.district && errors.district && (
                                    <div className="text-red-500 text-sm ">{errors.district}</div>
                                )}
                            </div>
                            <div>
                                <Input
                                    autoFocus={true}
                                    variant="standard"
                                    label="State"
                                    name='state'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.state}
                                />
                                {touched.state && errors.state && (
                                    <div className="text-red-500 text-sm ">{errors.state}</div>
                                )}
                            </div>
                            <div>
                                <Textarea
                                    variant="standard"
                                    label="Bio"
                                    name='bio'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows={4}
                                    cols={40}
                                >{UserInfo.bio}
                                </Textarea>
                                {touched.bio && errors.bio && (
                                    <div className="text-red-500 text-sm ">{errors.bio}</div>
                                )}
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button variant="gradient" type="submit" fullWidth>
                                Update
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </>
    );
}
