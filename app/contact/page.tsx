'use client';
import {
    Button,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';


export default function Contact() {

    const weddingType = ['Hindu','Muslim','Christian','Non Religious'];

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
        <form onSubmit={formik.handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8">
            <h1 className="text-2xl font-bold dark:text-gray-50">
                Get in touch with us
            </h1>
            <div>
                <InputLabel>Your Name</InputLabel>
                <TextField
                    variant="standard"
                    type='text'
                    name='name'
                    placeholder='What should we call you?'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
            </div>
            <div>
                <FormControl>
                    <FormLabel>Preferred mode of communication</FormLabel>
                    <RadioGroup
                        defaultValue="true"
                        name="whatsapp"
                        row
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="WhatsApp" />
                        <FormControlLabel value="false" control={<Radio />} label="Call" />
                    </RadioGroup>
                </FormControl>
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
                <InputLabel>Email Address</InputLabel>
                <TextField
                    variant="standard"
                    type='text'
                    name='email'
                    placeholder='Email Address'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </div>
            <div>
                <InputLabel>Wedding Type</InputLabel>
                <TextField
                    variant="standard"
                    select
                    defaultValue='Hindu'
                    name='type'
                    value={formik.values.type}
                    onChange={formik.handleChange}
                >
                    {weddingType.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <InputLabel>Destination</InputLabel>
                <TextField
                    variant="standard"
                    type='text'
                    name='destination'
                    placeholder='Wedding destination'
                    value={formik.values.destination}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <InputLabel>Wedding Date</InputLabel>
                <TextField
                    variant="standard"
                    type="date"
                    name='date'
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                />
            </div>
            <Button type='submit' variant='contained' sx={{ mt: '15px' }}>
                Submit
            </Button>
        </form>
    );
}