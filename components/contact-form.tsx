import GrowthAuditForm from "./growth-audit-form";

export default function ContactForm() {
  return (
    <div className="sm:px-40 px-2 bg-[#011542]/20  py-20 w-full flex sm:flex-row flex-col  items-center justify-between sm:gap-0 gap-12">
      <div className="font-unbounded text-9xl font-medium text-white w-full leading-24">
        Let&apos;s <br /> <span className="text-[#0B50EA] px-2">Talk</span>
      </div>
      <div className="w-full">
        <GrowthAuditForm />
      </div>
    </div>
  );
}
