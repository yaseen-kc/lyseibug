import { SERVICES_PROCESS_CONTENT } from "@/constants/services";

type Step = {
  readonly title: string;
  readonly description: string;
};

function NumberBadge({ index }: { index: number }) {
  return (
    <div
      aria-hidden
      className="relative inline-flex h-24 w-24 items-center justify-center rounded-full"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(2,6,23,.15) 1.5px, transparent 0)",
        backgroundSize: "14px 14px",
      }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-900 bg-white text-base font-semibold text-indigo-900">
        {index}
      </div>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-indigo-900 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-lg font-semibold text-indigo-900 md:text-xl">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
        {step.description}
      </p>
    </div>
  );
}

export default function ServicesProcess() {
  const steps = SERVICES_PROCESS_CONTENT.steps;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-24 lg:pt-28">
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            {SERVICES_PROCESS_CONTENT.badge}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
            {SERVICES_PROCESS_CONTENT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
            {SERVICES_PROCESS_CONTENT.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {steps.map((step, idx) => {
            const isEven = (idx + 1) % 2 === 0;
            return (
              <div key={step.title}>
                {/* Mobile layout: number centered above card */}
                <div className="md:hidden">
                  <div className="flex justify-center">
                    <NumberBadge index={idx + 1} />
                  </div>
                  <div className="mt-6 flex justify-center">
                    <StepCard step={step} />
                  </div>
                </div>

                {/* Desktop layout: alternating number left/right */}
                <div
                  className={`hidden items-center gap-10 md:flex ${
                    isEven ? "justify-between" : "justify-between"
                  }`}
                >
                  {isEven ? (
                    <div className="invisible w-28" />
                  ) : (
                    <NumberBadge index={idx + 1} />
                  )}
                  <div
                    className={`flex flex-1 ${
                      isEven ? "justify-end" : "justify-start"
                    }`}
                  >
                    <StepCard step={step} />
                  </div>
                  {isEven ? (
                    <NumberBadge index={idx + 1} />
                  ) : (
                    <div className="invisible w-28" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
