'use client';
import {
    Button,
    FormControlLabel,
    InputLabel,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Box
} from '@mui/material';
import Image from 'next/image'
import * as yup from 'yup';
import { useFormik } from 'formik';
import profilePic from '/public/assets/1.jpg'


export default function Contact() {

    const weddingType = ['Hindu', 'Muslim', 'Christian', 'Non Religious'];

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validationSchema = yup.object({
        name: yup.string().required('Please provide your name!'),
        number: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid!')
            .min(10, "Please check the entered phone number!")
            .max(13, "Please check the entered phone number!")
            .required('Please enter your phone number!'),
        email: yup
            .string()
            .email('Enter a valid email id'),
        date: yup.date()
            .required("Please provide the expected event date")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            email: '',
            type: '',
            date: '',
            destination: '',
            whatsapp: true,
        },

        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Image className="object-cover fixed"
                alt="alt"
                quality={100}
                src={profilePic}
                loading='lazy'
            />
        <Box
                width={'45%'}
                className="bg-white bg-opacity-40 backdrop-blur-md"
        >
            <form onSubmit={formik.handleSubmit} className="grid space-y-3 rounded-lg shadow-xl p-3 m-8 px-8">
                <div>
                    <InputLabel>What should we call you?</InputLabel>
                    <TextField
                        variant="standard"
                        type='text'
                        name='name'
                        placeholder='Your name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </div>
                <div>
                <InputLabel>Contact Number</InputLabel>
                <TextField
                    variant="standard"
                    type='text'
                    name='number'
                    placeholder='+91 xxx xxx xxxx'
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.number && Boolean(formik.errors.number)}
                    helperText={formik.touched.number && formik.errors.number}
                />
                </div>
                <div>
                    <FormControl>
                        <FormLabel>Wedding Type</FormLabel>
                        <RadioGroup
                            defaultValue="true"
                            name="type"
                            row
                            onChange={formik.handleChange}
                        >
                            {weddingType.map((option) =>
                                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                            )}
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='flex gap-x-6'>
                    <TextField
                        variant="standard"
                        type='text'
                        name='destination'
                        placeholder='Wedding destination'
                        value={formik.values.destination}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="standard"
                        type='text'
                        name='destination'
                        placeholder='Dates'
                        value={formik.values.date}
                        onChange={formik.handleChange}
                    />

                </div>
                <Button type='submit' variant='contained' sx={{ mt: '15px' }}>
                    Submit
                </Button>
            </form>
        </Box>
        </div>
    );
}