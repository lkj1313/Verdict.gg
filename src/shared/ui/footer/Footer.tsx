const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-4 mt-auto">
      <div className="container mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Verdict.gg. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
