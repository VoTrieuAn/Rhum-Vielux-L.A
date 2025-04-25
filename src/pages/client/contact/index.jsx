import Seo from "@components/Seo";
import ContactContent from "./ContactContent";
import ContactHeader from "./ContactHeader";
import ContactTitle from "./ContactTitle";

const ContactPage = () => {
  return (
    <>
      <Seo title="Liên hệ" />
      <ContactHeader />
      <ContactTitle />
      <ContactContent />
    </>
  );
};
export default ContactPage;
