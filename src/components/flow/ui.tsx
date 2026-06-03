type FlowSystemCardProps = {
  metric: string;
  text: string;
  title: string;
};

export function FlowSystemCard({ metric, text, title }: FlowSystemCardProps) {
  return (
    <article className="min-w-0 border border-[#061421]/12 bg-white p-5 sm:p-6">
      <p className="text-3xl font-bold text-[#061421] sm:text-4xl">{metric}</p>
      <h3 className="mt-7 text-xl font-bold leading-tight text-[#061421] sm:mt-8 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#061421]/62">{text}</p>
    </article>
  );
}
