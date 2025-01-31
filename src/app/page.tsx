"use client";
import Test from "@/app/ui/test";
import ColorsShow from "@/app/ui/colorsShow";
export default function Home() {
  return (
    <>
      <ColorsShow />
      <div className="h-screen grid place-items-center bg-backgroundColor">
        <h1 className="text-4xl font-bold font-header text-center text-typography">
          Test Page
        </h1>
        <p className="text-typography text-center text-lg font-body font-light">
          Lorem impsun dolor sit amet, consectetur adipiscing elit. Nulla Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam sint
          sequi minus. Asperiores nihil deserunt suscipit, in voluptatibus
          distinctio tempora, dicta ad quis, dignissimos est dolores officia
          neque consectetur?
        </p>
      </div>
      <Test />
    </>
  );
}
