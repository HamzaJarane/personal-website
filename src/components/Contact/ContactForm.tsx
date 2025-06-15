import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import axiosInstance from '@/helpers/axios';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        toast.promise(
            axiosInstance.post('/contact', data),
            {
                loading: 'Sending...',
                success: 'Message sent successfully!',
                error: (e) => {
                    console.log(e);
                    return e?.response?.data?.message || e.message || 'Failed to send message. Please try again.';
                },
            }
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} css={tw`w-full max-w-4xl mx-auto space-y-6`}>
                <div css={tw`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                    <div>
                        <label css={tw`block text-white/80 font-[Oswald] text-lg mb-2`}>Name</label>
                        <input
                            {...register('name')}
                            type="text"
                            css={tw`w-full px-4 py-3 bg-black border border-white/20 text-white font-[Oswald] focus:outline-none focus:border-white/40 transition-colors`}
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p css={tw`text-red-500 text-sm mt-1`}>{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <label css={tw`block text-white/80 font-[Oswald] text-lg mb-2`}>Email</label>
                        <input
                            {...register('email')}
                            type="email"
                            css={tw`w-full px-4 py-3 bg-black border border-white/20 text-white font-[Oswald] focus:outline-none focus:border-white/40 transition-colors`}
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <p css={tw`text-red-500 text-sm mt-1`}>{errors.email.message}</p>
                        )}
                    </div>
                </div>
                <div>
                    <label css={tw`block text-white/80 font-[Oswald] text-lg mb-2`}>Message</label>
                    <textarea
                        {...register('message')}
                        css={tw`w-full px-4 py-3 bg-black border border-white/20 text-white font-[Oswald] focus:outline-none focus:border-white/40 transition-colors min-h-[150px]`}
                        placeholder="Your message"
                    />
                    {errors.message && (
                        <p css={tw`text-red-500 text-sm mt-1`}>{errors.message.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    css={tw`w-full py-4 bg-white text-black font-[Oswald] text-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;