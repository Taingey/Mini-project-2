import DashboardSlide from "@/components/dashbord/DashbordSlide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <aside className="flex">
        <DashboardSlide/>
    {children}
   </aside>
  );
}
