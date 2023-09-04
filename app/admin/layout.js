import Nav from "../../components/admin/Nav/Nav";

export const metadata = {
  title: "Brokersite || Admin",
  description: "Admin Panel",
};

export default function Layout({ children }) {
  return (
    <section className="max-w-[100vw] overflow-hidden">
      <div className="fixed top-0">
        <Nav />
      </div>
      <div className="mt-16">{children}</div>
    </section>
  );
}
