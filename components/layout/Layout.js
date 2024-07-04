import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Project CRM</h2>
        <Link href="add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://www.google.com/" target="_blank" rel="noferrer">
          Test project
        </a>{" "}
        Next.js | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
