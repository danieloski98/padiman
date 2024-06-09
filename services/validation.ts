import { z } from 'zod';

let loginSchema = z.object({
    phone_number: z.string().min(11, 'Invalid phone number'),
    password: z.string().min(8, 'Invalid password'),
});

let signupSchema = z.object({
    phone_number: z.string().min(11, 'Invalid phone number'),
    email: z.string().email('Invalid email address').min(3, 'Email address must be at least 3 characters'),
    first_name: z.string().min(3, 'Invalid first name'),
    last_name: z.string().min(3, 'Invalid last name'),
    password: z.string().min(8, 'Invalid password'),
    password2: z.string().min(8, 'Invalid password2'),
}).refine((val) => val.password === val.password2, {
    message: 'Passwords do not match',
    path: ['password2']
});

export {
    loginSchema,
    signupSchema,
}