import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';
import tw from 'twin.macro';

export default function Contact() {
  return (
    <>
      <div css={tw`text-white text-center lg:text-[15em] text-[5em]`}>
        <div>C<span css={tw`font-[Yellowtail]`}>ontact</span></div>
      </div>
      <div css={tw`flex flex-col px-7 sm:px-40 pb-20`}>
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}