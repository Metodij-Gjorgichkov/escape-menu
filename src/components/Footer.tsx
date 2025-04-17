const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-color text-center p-2">
      © {currentYear} gjorgichkov
    </footer>
  );
};

export default Footer;
