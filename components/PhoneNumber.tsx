// components/PhoneNumber.tsx

export const DISPLAY_NUMBER = "704-290-6688";      // Must match how it appears on your site
export const TEL_NUMBER = "+17042906688";          // Used for the tel: link

type PhoneNumberProps = {
  className?: string;
};

export default function PhoneNumber({ className }: PhoneNumberProps) {
  return (
    <a href={`tel:${TEL_NUMBER}`} className={className}>
      {DISPLAY_NUMBER}
    </a>
  );
}
